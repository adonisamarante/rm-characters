import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

export const SkeletonImage = styled(Skeleton).attrs({
  height: '7rem',
  width: '7rem',
  circle: true,
})`
  position: absolute;
  top: -1.25rem;
  left: 50%;
  transform: translateX(-50%);
`
