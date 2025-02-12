import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsAccordions extends Struct.ComponentSchema {
  collectionName: 'components_elements_accordions';
  info: {
    displayName: 'Accordions';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsAlternatingTiles extends Struct.ComponentSchema {
  collectionName: 'components_elements_alternating_tiles';
  info: {
    description: '';
    displayName: 'Alternating Tiles';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    linkButton: Schema.Attribute.Component<'shared.link-button', true>;
    paragraphs: Schema.Attribute.Component<'shared.paragraph', true>;
    title: Schema.Attribute.String;
  };
}

export interface PagesAbout extends Struct.ComponentSchema {
  collectionName: 'components_pages_abouts';
  info: {
    description: '';
    displayName: 'About';
  };
  attributes: {
    accordions: Schema.Attribute.Component<'elements.accordions', true>;
    accordionTitle: Schema.Attribute.String;
    alternatingTiles: Schema.Attribute.Component<
      'elements.alternating-tiles',
      true
    >;
    contactLinkButton: Schema.Attribute.Component<'shared.link-button', false>;
    contactTitle: Schema.Attribute.String;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    partnerTitle: Schema.Attribute.String;
    tradePartners: Schema.Attribute.Component<'shared.trade-partner', true>;
  };
}

export interface SharedHomePage extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_pages';
  info: {
    description: '';
    displayName: 'Page: Home';
  };
  attributes: {
    href: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    label: Schema.Attribute.String;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
    paragraphs: Schema.Attribute.Component<'shared.paragraph', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Page: Trading';
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

export interface SharedLinkButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_buttons';
  info: {
    displayName: 'Link Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedPageTemplate extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_templates';
  info: {
    description: '';
    displayName: 'Page Templates Dropdown';
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
    about: Schema.Attribute.Component<'pages.about', true>;
    home: Schema.Attribute.Component<'shared.home-page', true>;
    trading: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_paragraphs';
  info: {
    description: '';
    displayName: 'paragraphs';
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
    displayName: 'Trade Partners Dropdown';
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
      'elements.accordions': ElementsAccordions;
      'elements.alternating-tiles': ElementsAlternatingTiles;
      'pages.about': PagesAbout;
      'shared.home-page': SharedHomePage;
      'shared.link': SharedLink;
      'shared.link-button': SharedLinkButton;
      'shared.page-template': SharedPageTemplate;
      'shared.pages': SharedPages;
      'shared.paragraph': SharedParagraph;
      'shared.trade-partner': SharedTradePartner;
    }
  }
}
