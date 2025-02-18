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
    linkButtons: Schema.Attribute.Component<'shared.link-button', true>;
    paragraphs: Schema.Attribute.Component<'shared.paragraph', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsImages extends Struct.ComponentSchema {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Images';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
  };
}

export interface ElementsParagraphsWithTitles extends Struct.ComponentSchema {
  collectionName: 'components_elements_paragraphs_with_titles';
  info: {
    description: '';
    displayName: 'Paragraphs with Titles';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PagesEssentials extends Struct.ComponentSchema {
  collectionName: 'components_pages_essentials';
  info: {
    description: '';
    displayName: 'Essentials';
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
    partners: Schema.Attribute.Component<'shared.trade-partner', true>;
    partnerTitle: Schema.Attribute.String;
  };
}

export interface PagesLanding extends Struct.ComponentSchema {
  collectionName: 'components_pages_landings';
  info: {
    displayName: 'Landing';
  };
  attributes: {
    href: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    label: Schema.Attribute.String;
    linkButtons: Schema.Attribute.Component<'shared.link-button', true>;
    paragraphs: Schema.Attribute.Component<'shared.paragraph', true>;
    title: Schema.Attribute.String;
  };
}

export interface PagesOverview extends Struct.ComponentSchema {
  collectionName: 'components_pages_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    bannerUrl: Schema.Attribute.String;
    href: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    label: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'shared.paragraph', true>;
    partners: Schema.Attribute.Component<'shared.trade-partner', true>;
  };
}

export interface PagesProject extends Struct.ComponentSchema {
  collectionName: 'components_pages_projects';
  info: {
    description: '';
    displayName: 'project';
  };
  attributes: {
    accordions: Schema.Attribute.Component<'elements.accordions', true>;
    accordionTitle: Schema.Attribute.String;
    href: Schema.Attribute.String;
    images: Schema.Attribute.Component<'elements.images', true>;
    label: Schema.Attribute.String;
    linkButtons: Schema.Attribute.Component<'shared.link-button', true>;
    linkTitle: Schema.Attribute.String;
    paragraphsAndTitles: Schema.Attribute.Component<
      'elements.paragraphs-with-titles',
      true
    >;
    partners: Schema.Attribute.Component<'shared.trade-partner', true>;
    partnerTitle: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
    essentials: Schema.Attribute.Component<'pages.essentials', true>;
    landing: Schema.Attribute.Component<'pages.landing', true>;
    overview: Schema.Attribute.Component<'pages.overview', true>;
    project: Schema.Attribute.Component<'pages.project', true>;
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
      'elements.images': ElementsImages;
      'elements.paragraphs-with-titles': ElementsParagraphsWithTitles;
      'pages.essentials': PagesEssentials;
      'pages.landing': PagesLanding;
      'pages.overview': PagesOverview;
      'pages.project': PagesProject;
      'shared.link-button': SharedLinkButton;
      'shared.page-template': SharedPageTemplate;
      'shared.pages': SharedPages;
      'shared.paragraph': SharedParagraph;
      'shared.trade-partner': SharedTradePartner;
    }
  }
}
