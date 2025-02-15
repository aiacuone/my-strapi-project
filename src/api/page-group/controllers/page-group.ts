/**
 * page-group controller
 */

import { factories } from '@strapi/strapi'
import {
  PageGroup_int,
  PageTemplate_enum,
  OverviewPage_int,
  LandingPage_int,
  EssentialsPage_int,
  ProjectPage_int,
} from '../../../../types'
import { checkIfHrefHasSlash, mappedPageGroup } from '../../../utils'
import { getModifiedPages } from '../../../utils/general'

export default factories.createCoreController(
  'api::page-group.page-group',
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx)

      const modifiedData = (data as PageGroup_int[]).map(
        ({ pages, href, ...rest }) => {
          const { id, ..._pages } = pages

          const modifiedPages = getModifiedPages(
            _pages as Record<
              PageTemplate_enum,
              (
                | LandingPage_int
                | OverviewPage_int
                | EssentialsPage_int
                | ProjectPage_int
              )[]
            >
          )

          return {
            href: checkIfHrefHasSlash(href),
            pages: modifiedPages,
            ...rest,
          }
        }
      )

      return { data: modifiedData, meta }
    },
  })
)
