import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

export const SkeletonImage = styled(Skeleton).attrs({
  circle: true,
})`
  width: 12rem;
  height: 12rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 9.5rem;
    height: 9.5rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }
`
