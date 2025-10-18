export interface ICharacter {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  image: string
}

export interface IGetCharacterData {
  character: ICharacter
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
