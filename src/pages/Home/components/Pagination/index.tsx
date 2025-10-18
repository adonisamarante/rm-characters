import type { ICharactersListInfo } from '../../../../types/character'
import { PaginationButton, PaginationContainer, PaginationInfo } from './styles'

interface PaginationProps {
  page: number
  info?: ICharactersListInfo
  handleChangePage: (page: number) => void
}

export function Pagination({ page, info, handleChangePage }: PaginationProps) {
  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => handleChangePage(1)}
        title="First page"
        disabled={page === 1}
      >
        {'<<'}
      </PaginationButton>
      <PaginationButton
        onClick={() => handleChangePage(page - 1)}
        title="Previous page"
        disabled={!info?.prev}
      >
        {'<'}
      </PaginationButton>
      <PaginationInfo>
        {page} of {info?.pages ?? '...'}
      </PaginationInfo>
      <PaginationButton
        onClick={() => handleChangePage(page + 1)}
        title="Next page"
        disabled={!info?.next}
      >
        {'>'}
      </PaginationButton>
      <PaginationButton
        onClick={() => handleChangePage(info?.pages ?? page)}
        title="Last page"
        disabled={page === info?.pages}
      >
        {'>>'}
      </PaginationButton>
    </PaginationContainer>
  )
}
