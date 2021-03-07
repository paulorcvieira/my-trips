import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1100; // bigger than leaflet
  top: ${({ theme }) => theme.sizes.medium};
  right: ${({ theme }) => theme.sizes.medium};
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`

export const Avatar = styled.img`
  margin: 2rem 0;
  width: 39px;
  height: 39px;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  cursor: pointer;

  transition: border 0.3s ease-in-out;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.highlight};
  }
`
