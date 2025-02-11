export enum PageTemplate_enum {
  trading = 'trading',
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

export enum Partner_enum {
  coutaGroup = 'coutaGroup',
  waterpex = 'waterpex',
  rushil = 'rushil',
  samet = 'samet',
  akfix = 'akfix',
  lamello = 'lamello',
  alfawood = 'alfawood',
  quinGlobal = 'quinGlobal',
  simalfa = 'simalfa',
  werkmaster = 'werkmaster',
  mcnskc = 'mcnskc',
  naturalSoda = 'naturalSoda',
  redox = 'redox',
  webmantra = 'webmantra',
  rifeng = 'rifeng',
}

export interface Partner_int {
  key: Partner_enum
  url: string
  imageUrl: string
}
