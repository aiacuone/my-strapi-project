import { Partner_enum } from './general'

export interface LinkButton_int {
  label: string
  href: string
}

export interface AlternatingTiles_int {
  title: string
  paragraphs: string
  imageUrl: string
  linkButton: LinkButton_int
}

export interface Accordions_int {
  title: string
  paragraph: string
}
