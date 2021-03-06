import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1100; // bigger than leaflet
    top: ${theme.sizes.medium};
    right: ${theme.sizes.medium};
    color: ${theme.colors.white};
    cursor: pointer;
  `}
`

export const Avatar = styled.img`
  ${({ theme }) => css`
    margin-top: 2rem;
    width: 39px;
    height: 39px;
    border: 3px solid ${theme.colors.white};
    border-radius: 50%;
    cursor: pointer;

    transition: border 0.3s ease-in-out;

    &:hover {
      border: 3px solid ${theme.colors.highlight};
    }
  `}
`
