/**
 * single-page controller
 */

import { factories } from '@strapi/strapi'
import {
  PageGroup_int,
  TradingPage_int,
  PageTemplate_enum,
} from '../../../../types'
import { checkIfHrefHasSlash, mappedPageGroup } from '../../../utils'

export default factories.createCoreController(
  'api::single-page.single-page',
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx)
      const { pages } = data
      const { trading, home } = pages

      const modifiedTradingPages = (
        mappedPageGroup(trading) as TradingPage_int[]
      ).map(({ partners, href, ...rest }) => ({
        href: checkIfHrefHasSlash(href),
        template: PageTemplate_enum.trading,
        ...rest,
      }))

      const modifiedHomePages = home.map(({ paragraphs, href, ...rest }) => ({
        href: checkIfHrefHasSlash(href),
        paragraphs: paragraphs.map(({ paragraph }) => paragraph),
        template: PageTemplate_enum.home,
        ...rest,
      }))

      const modifiedData = [...modifiedTradingPages, ...modifiedHomePages]

      return { data: modifiedData, meta }
    },
  })
)
