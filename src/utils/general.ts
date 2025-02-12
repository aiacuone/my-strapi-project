import { Page_int, TradingPage_int } from '../../types'

export const checkIfHrefHasSlash = (href: string) =>
  href.startsWith('/') ? href : `/${href}`

export const mappedPageGroup = (pageGroup: Page_int[] | TradingPage_int[]) =>
  pageGroup.map(({ href, paragraphs, ...rest }) => ({
    href: checkIfHrefHasSlash(href),
    paragraphs: paragraphs.map(({ paragraph }) => paragraph),
    ...rest,
  }))
