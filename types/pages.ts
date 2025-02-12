import { Partner_enum } from '../types'

export enum PageTemplate_enum {
  trading = 'trading',
  home = 'home',
}

export interface Page_int {
  href: string
  paragraphs: { paragraph: string }[]
}

export interface TradingPage_int extends Page_int {
  partners: { partner: Partner_enum }[]
  imageUrl: string
}

export interface PageGroup_int {
  href: string
  pages: { trading: TradingPage_int[] }
}
