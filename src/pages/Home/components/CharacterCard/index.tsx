import { CardContainer, CharacterDescription } from './styles'
import imageIcon from '../../../../assets/browser-tab-icon.png'

export default function CharacterCard() {
  return (
    <CardContainer>
      <img src={imageIcon} alt="image example" />

      <CharacterDescription>
        <span>Character Name</span>
        <span>
          This is the description test sjoia aisfjoid sidjfos sidfjsoidfjios isd
          isdj isidfojsdof sidjfosd sidjofsijfos ijofsjid his is the description
          test sjoia aisfjoid sidjfos sidfjsoidfjios isd isdj isidfojsdof
          sidjfosd sidjofsijfos ijofsjid his is the description test sjoia
          aisfjoid sidjfos sidfjsoidfjios isd isdj isidfojsdof sidjfosd
          sidjofsijfos ijofsjid his is the description test sjoia aisfjoid
          sidjfos sidfjsoidfjios isd isdj isidfojsdof sidjfosd sidjofsijfos
          ijofsjid
        </span>
      </CharacterDescription>
    </CardContainer>
  )
}
