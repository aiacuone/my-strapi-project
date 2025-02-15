/**
 * single-page controller
 */

import { factories } from '@strapi/strapi'
import { checkIfHrefHasSlash, mappedPageGroup } from '../../../utils'
import { getModifiedPages } from '../../../utils/general'

export default factories.createCoreController(
  'api::single-page.single-page',
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx)
      const { pages } = data
      const { id, ..._pages } = pages

      const modifiedData = getModifiedPages(_pages)

      return { data: modifiedData, meta }
    },
  })
)
