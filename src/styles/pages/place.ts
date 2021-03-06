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
    font-size: ${theme.sizes.large};
    margin-bottom: ${theme.sizes.medium};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.large};

    p {
      text-align: justify;
      text-justify: inter-word;
      margin-bottom: ${theme.sizes.medium};
    }
  `}
`

export const Gallery = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.sizes.medium};

    img {
      background: #f6f7f8;
      background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #edeef1 60%,
        #f6f7f8 100%
      );
      background-size: 80rem 14rem;
      animation: placeholderShimmer 1s linear infinite forwards;

      @keyframes placeholderShimmer {
        0% {
          background-position: -40rem 0;
        }
        100% {
          background-position: 40rem 0;
        }
      }
    }
  `}
`
