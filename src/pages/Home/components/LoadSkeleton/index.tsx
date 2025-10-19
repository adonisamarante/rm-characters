import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import { SkeletonImage } from './styles'
import {
  CardContainer,
  CharacterDescription,
  InfoList,
} from '../CharacterCard/styles'

export function LoadSkeleton() {
  return (
    <CardContainer>
      <SkeletonImage />

      <CharacterDescription style={{ marginTop: '6rem' }}>
        <Skeleton width={170} height={25} />
        <InfoList>
          <li>
            <Skeleton width={75} /> <Skeleton width={130} height={20} />
          </li>
          <li>
            <Skeleton width={75} /> <Skeleton width={130} height={20} />
          </li>
        </InfoList>
      </CharacterDescription>
    </CardContainer>
  )
}
