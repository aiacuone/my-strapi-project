import type { Schema, Struct } from '@strapi/strapi';

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Trading Page';
    icon: 'link';
  };
  attributes: {
    bannerUrl: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    imageUrl: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    paragraphs: Schema.Attribute.Component<'shared.paragraph', true> &
      Schema.Attribute.Required;
    partners: Schema.Attribute.Component<'shared.trade-partner', true>;
  };
}

export interface SharedPageTemplate extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_templates';
  info: {
    displayName: 'Page Template';
  };
  attributes: {
    Template: Schema.Attribute.Enumeration<['trading']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'trading'>;
  };
}

export interface SharedPages extends Struct.ComponentSchema {
  collectionName: 'components_shared_pages';
  info: {
    description: '';
    displayName: 'Pages';
  };
  attributes: {
    trading: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_paragraphs';
  info: {
    description: '';
    displayName: 'paragraph';
    icon: 'bulletList';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
  };
}

export interface SharedTradePartner extends Struct.ComponentSchema {
  collectionName: 'components_shared_trade_partners';
  info: {
    description: '';
    displayName: 'Trade Partner';
  };
  attributes: {
    partner: Schema.Attribute.Enumeration<
      [
        'coutaGroup',
        'waterpex',
        'rushil',
        'samet',
        'akfix',
        'lamello',
        'alfawood',
        'quinGlobal',
        'simalfa',
        'werkmaster',
        'mcnskc',
        'naturalSoda',
        'redox',
        'webmantra',
        'rifeng',
      ]
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.link': SharedLink;
      'shared.page-template': SharedPageTemplate;
      'shared.pages': SharedPages;
      'shared.paragraph': SharedParagraph;
      'shared.trade-partner': SharedTradePartner;
    }
  }
}
