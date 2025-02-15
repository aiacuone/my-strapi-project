import { LinkButton_int, Partner_enum } from '../types'
import {
  Accordion_int,
  AlternatingTiles_int,
  ParagraphsAndTitles_int,
} from './elements'

export enum PageTemplate_enum {
  landing = 'landing',
  overview = 'overview',
  essentials = 'essentials',
  project = 'project',
}

export interface Page_int {
  href: string
  label: string
  imageUrl: string
}

export interface OverviewPage_int extends Page_int {
  paragraphs?: { paragraph: string }[]
  partners?: { partner: Partner_enum }[]
}

export interface LandingPage_int extends Page_int {
  title: string
  linkButton: LinkButton_int
  paragraphs?: { paragraph: string }[]
}

export interface EssentialsPage_int extends Page_int {
  alternatingTiles: AlternatingTiles_int
  accordionTitle: string
  accordions: Accordion_int[]
  partnerTitle: string
  partners?: { partner: Partner_enum }[]
  contactTitle: string
  contactLinkButton: LinkButton_int
}

export interface ProjectPage_int extends Page_int {
  title: string
  images: { id: string; imageUrl: string }[]
  paragraphsAndTitles: ParagraphsAndTitles_int
  linkTitle: string
  linkButtons: LinkButton_int[]
  partnerTitle: string
  partners?: { partner: Partner_enum }[]
  accordionTitle: string
  accordions: Accordion_int[]
}

export interface PageGroup_int {
  href: string
  label: string
  pages: {
    id: string
    [PageTemplate_enum.landing]: LandingPage_int[]
    [PageTemplate_enum.overview]: OverviewPage_int[]
    [PageTemplate_enum.essentials]: EssentialsPage_int[]
    [PageTemplate_enum.project]: ProjectPage_int[]
  }
}
