import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.sizes.medium};
    margin: 3rem auto;
  `}
`

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.grayHard};
    width: ${theme.sizes.container};
    margin-bottom: ${theme.sizes.large};
    padding: ${theme.sizes.medium};
    border: 1px solid ${theme.colors.highlight};
    border-radius: 9px;
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.sizes.medium};
    margin-bottom: ${theme.sizes.medium};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.large};

    p {
      text-align: justify;
      text-justify: inter-word;
      font-size: ${theme.sizes.small};
      margin-bottom: ${theme.sizes.small};
    }

    blockquote {
      text-align: center;
      margin-top: 36px;
      font-size: 17px;
      font-weight: 600;
    }
  `}
`
