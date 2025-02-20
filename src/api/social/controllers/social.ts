/**
 * social controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController(
  'api::social.social',
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx)

      return { data: data.socials, meta }
    },
  })
)
