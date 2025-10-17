import styled from 'styled-components'

export const PaginationContainer = styled.div`
  gap: 0.5rem;
  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PaginationButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme['gray-100']};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;

  transition:
    background 0.2s,
    box-shadow 0.2s;

  &:hover:not(:disabled) {
    cursor: pointer;
    box-shadow: 0 0 8px 2px ${({ theme }) => theme['blue-700']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const PaginationInfo = styled.span`
  color: ${({ theme }) => theme['green-700']};
  background: ${({ theme }) => theme['green-300']};
  box-shadow: 0 0 8px 2px ${({ theme }) => theme['green-300']};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
`
