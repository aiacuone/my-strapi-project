/**
 * contact controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController(
  'api::contact.contact',
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx)

      return { data: data.contacts, meta }
    },
  })
)
