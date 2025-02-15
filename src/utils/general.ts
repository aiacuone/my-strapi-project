import {
  Page_int,
  LandingPage_int,
  OverviewPage_int,
  EssentialsPage_int,
  ProjectPage_int,
  PageTemplate_enum,
  Partner_enum,
  Partner_int,
} from '../../types'
import { partners as allPartners } from './partners'

export const checkIfHrefHasSlash = (href: string) =>
  href.startsWith('/') ? href : `/${href}`

export const mappedPageGroup = (
  pageGroup: (
    | LandingPage_int
    | OverviewPage_int
    | EssentialsPage_int
    | ProjectPage_int
  )[],
  template: PageTemplate_enum
) =>
  pageGroup.map(({ href, ...rest }) => {
    const result = {
      ...rest,
      href: checkIfHrefHasSlash(href),
      template,
    }

    if ('partners' in rest)
      result['partners'] = rest.partners.map(({ partner: partnerEnum }) =>
        getPartnerFromEnum(partnerEnum)
      )

    if ('paragraphs' in rest)
      result['paragraphs'] = rest.paragraphs.map(({ paragraph }) => paragraph)

    if ('images' in rest)
      result['images'] = rest.images.map(({ imageUrl }) => imageUrl)

    return result
  })

export const getModifiedPages = (
  pages: Record<
    PageTemplate_enum,
    (
      | LandingPage_int
      | OverviewPage_int
      | EssentialsPage_int
      | ProjectPage_int
    )[]
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

export const getPartnerFromEnum = (partnerEnum: Partner_enum): Partner_int =>
  allPartners.find(({ key: _partnerEnum }) => _partnerEnum === partnerEnum)
