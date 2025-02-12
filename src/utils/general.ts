import {
  Page_int,
  TradingPage_int,
  PageTemplate_enum,
  HomePage_int,
} from '../../types'

export const checkIfHrefHasSlash = (href: string) =>
  href.startsWith('/') ? href : `/${href}`

export const mappedPageGroup = (
  pageGroup: (TradingPage_int | HomePage_int)[],
  template: PageTemplate_enum
) =>
  pageGroup.map(({ href, paragraphs, ...rest }) => {
    const result = {
      ...rest,
      href: checkIfHrefHasSlash(href),
      paragraphs: paragraphs.map(({ paragraph }) => paragraph),
      template,
    }

    if ('partners' in rest)
      result['partners'] = rest.partners.map(({ partner }) => partner)

    return result
  })

export const getModifiedPages = (
  pages: Record<PageTemplate_enum, TradingPage_int[] | HomePage_int[]>
) =>
  Object.entries(pages).reduce(
    (acc, [template, pageGroup]) => [
      ...acc,
      ...mappedPageGroup(
        pageGroup,
        PageTemplate_enum[template as keyof typeof PageTemplate_enum]
      ),
    ],
    []
  )
