export interface ICharacter {
  id: string
  name: string
  image: string
}

export interface IGetCharactersData {
  characters: {
    results: ICharacter[]
    info: ICharactersListInfo
  }
}

export interface ICharactersListInfo {
  count: number
  pages: number
  next: number
  prev: number
}
