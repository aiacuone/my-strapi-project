import {
  Page_int,
  TradingPage_int,
  PageTemplate_enum,
  HomePage_int,
  AboutPage_int,
} from '../../types'

export const checkIfHrefHasSlash = (href: string) =>
  href.startsWith('/') ? href : `/${href}`

export const mappedPageGroup = (
  pageGroup: (TradingPage_int | HomePage_int | AboutPage_int)[],
  template: PageTemplate_enum
) =>
  pageGroup.map(({ href, ...rest }) => {
    const result = {
      ...rest,
      href: checkIfHrefHasSlash(href),
      template,
    }

    if ('partners' in rest)
      result['partners'] = rest.partners.map(({ partner }) => partner)

    if ('paragraphs' in rest)
      result['paragraphs'] = rest.paragraphs.map(({ paragraph }) => paragraph)

    return result
  })

export const getModifiedPages = (
  pages: Record<
    PageTemplate_enum,
    TradingPage_int[] | HomePage_int[] | AboutPage_int[]
  >
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
