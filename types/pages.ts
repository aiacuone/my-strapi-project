import { LinkButton_int, Partner_enum } from '../types'

export enum PageTemplate_enum {
  trading = 'trading',
  home = 'home',
}

export interface Page_int {
  href: string
  label: string
  paragraphs: { paragraph: string }[]
  imageUrl: string
}

export interface TradingPage_int extends Page_int {
  partners?: { partner: Partner_enum }[]
}

export interface HomePage_int extends Page_int {
  title: string
  linkButton: LinkButton_int
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
