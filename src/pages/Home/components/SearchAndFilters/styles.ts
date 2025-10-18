import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
  width: 100%;

  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const SearchInputWrapper = styled.div`
  width: fit-content;
`

export const ToggleButton = styled.button`
  background: transparent;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  border: none;

  color: ${({ theme }) => theme['gray-400']};
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px 2px ${({ theme }) => theme['blue-700']};
    transition: box-shadow 0.2s ease-in-out;
  }
`
