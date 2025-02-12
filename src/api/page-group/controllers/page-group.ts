/**
 * page-group controller
 */

import { factories } from '@strapi/strapi'
import {
  Page_int,
  PageGroup_int,
  PageTemplate_enum,
  TradingPage_int,
} from '../../../../types'
import { checkIfHrefHasSlash, mappedPageGroup } from '../../../utils'

export default factories.createCoreController(
  'api::page-group.page-group',
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx)

      const modifiedData = (data as PageGroup_int[]).map(
        ({ pages, href, ...rest }) => {
          const tradingPages = (
            mappedPageGroup(pages.trading) as TradingPage_int[]
          ).map(({ partners, ...rest }) => ({
            partners: partners.map(({ partner }) => partner),
            template: PageTemplate_enum.trading,
            ...rest,
          }))

          return {
            href: checkIfHrefHasSlash(href),
            pages: [...tradingPages],
            ...rest,
          }
        }
      )

      return { data: modifiedData, meta }
    },
  })
)
