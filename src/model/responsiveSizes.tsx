export interface ResponsiveSizes {
  xsmall: Xsmall
  small: Small
  medium: Medium
  large: Large
}

export interface Xsmall {
  id: string
  image: Image
  subTile: SubTile
  linkText: LinkText
}

export interface Image {
  width: string
  height: string
}

export interface SubTile {
  fontSize: string
}

export interface LinkText {
  fontSize: string
}

export interface Small {
  id: string
  image: Image2
  subTile: SubTile2
  linkText: LinkText2
}

export interface Image2 {
  width: string
  height: string
}

export interface SubTile2 {
  fontSize: string
}

export interface LinkText2 {
  fontSize: string
}

export interface Medium {
  id: string
  image: Image3
  subTile: SubTile3
  linkText: LinkText3
}

export interface Image3 {
  width: string
  height: string
}

export interface SubTile3 {
  fontSize: string
}

export interface LinkText3 {
  fontSize: string
}

export interface Large {
  id: string
  image: Image4
  subTile: SubTile4
  linkText: LinkText4
}

export interface Image4 {
  width: string
  height: string
}

export interface SubTile4 {
  fontSize: string
}

export interface LinkText4 {
  fontSize: string
}
