import Skeleton from 'react-loading-skeleton'
import { Card, Container, InfoList, TitleWrapper } from '../../styles'
import { SkeletonImage } from './styles'

export function LoadSkeleton() {
  return (
    <Container>
      <Card>
        <TitleWrapper>
          <SkeletonImage />
          <Skeleton width={'15rem'} height={'2.5rem'} />
        </TitleWrapper>

        <InfoList>
          <li>
            <Skeleton width={'5.5rem'} height={'1.2rem'} />{' '}
            <Skeleton width={'14rem'} height={'2rem'} />
          </li>
          <li>
            <Skeleton width={'5.5rem'} height={'1.2rem'} />{' '}
            <Skeleton width={'14rem'} height={'2rem'} />
          </li>
          <li>
            <Skeleton width={'5.5rem'} height={'1.2rem'} />{' '}
            <Skeleton width={'14rem'} height={'2rem'} />
          </li>
          <li>
            <Skeleton width={'5.5rem'} height={'1.2rem'} />{' '}
            <Skeleton width={'14rem'} height={'2rem'} />
          </li>
          <li>
            <Skeleton width={'5.5rem'} height={'1.2rem'} />{' '}
            <Skeleton width={'14rem'} height={'2rem'} />
          </li>
          <li>
            <Skeleton width={'5.5rem'} height={'1.2rem'} />{' '}
            <Skeleton width={'14rem'} height={'2rem'} />
          </li>
        </InfoList>

        <Skeleton width={'12rem'} height={'3rem'} />
      </Card>
    </Container>
  )
}
