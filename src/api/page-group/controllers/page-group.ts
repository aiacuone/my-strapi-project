/**
 * page-group controller
 */

import { factories } from '@strapi/strapi'
import {
  Page_int,
  PageGroup_int,
  PageTemplate_enum,
  TradingPage_int,
  HomePage_int,
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
              TradingPage_int[] | HomePage_int[]
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
