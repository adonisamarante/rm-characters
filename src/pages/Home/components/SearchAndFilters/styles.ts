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

export const SearchInput = styled.input`
  background: transparent;
  padding: 0.5rem 0.5rem;
  border: none;
  color: ${({ theme }) => theme['gray-300']};
  border-bottom: 1px solid ${({ theme }) => theme['gray-700']};
  transition: border-color 0.2s ease;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme['green-300']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const SearchButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme['gray-400']};
  padding: 0.5rem 0.5rem;
  border: none;

  font-size: 0.8rem;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme['gray-300']};
    transition: color 0.2s ease;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
