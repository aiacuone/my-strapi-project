import { LinkButton_int, Partner_enum } from '../types'
import { Accordions_int, AlternatingTiles_int } from './elements'

export enum PageTemplate_enum {
  trading = 'trading',
  home = 'home',
  about = 'about',
}

export interface Page_int {
  href: string
  label: string
  imageUrl: string
}

export interface TradingPage_int extends Page_int {
  paragraphs?: { paragraph: string }[]
  partners?: { partner: Partner_enum }[]
}

export interface HomePage_int extends Page_int {
  title: string
  linkButton: LinkButton_int
  paragraphs?: { paragraph: string }[]
}

export interface AboutPage_int extends Page_int {
  alternatingTiles: AlternatingTiles_int
  accordionTitle: string
  accordions: Accordions_int[]
  partnerTitle: string
  tradePartners: Partner_enum[]
  contactTitle: string
  contactLinkButton: LinkButton_int
}

export interface PageGroup_int {
  href: string
  label: string
  pages: {
    id: string
    [PageTemplate_enum.trading]: TradingPage_int[]
    [PageTemplate_enum.home]: HomePage_int[]
  }
}
