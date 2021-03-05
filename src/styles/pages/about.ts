import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    max-width: ${theme.sizes.container};
    margin: auto;
  `}
`;

export const Heading = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.sizes.large};
    margin-bottom: ${theme.sizes.small};
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    p {
      font-size: ${theme.sizes.small};
      line-height: ${theme.sizes.medium};
    }
  `}
`
