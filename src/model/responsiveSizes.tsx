export interface ResponsiveSizes {
  small?: Size
  medium?: Size
  large?: Size
  mobile?: Size
  collapsed?: Size,
  mobileCollapsed?: Size
}

export interface Size {
  id: string
  image: Image
  subTile: SubTile
  linkText: LinkText
  padding: Padding
}

export interface Image {
  width: string
  height: string
}

export interface Padding {
  paddingTop: string
}
export interface SubTile {
  fontSize: string
}

export interface LinkText {
  fontSize: string
}

