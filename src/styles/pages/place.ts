import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.sizes.medium};
  `}
`

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.sizes.container};
    margin-bottom: ${theme.sizes.large};
    margin: auto;
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

    // Skeleton
    img {
      background-image: linear-gradient(
        -90deg,
        #e7edf1 0%,
        #f8f8f8 50%,
        #e7edf1 100%
      );
      background-size: 400% 400%;
      animation: shimmer 1.2s ease-in-out infinite;
      border: 0;
      border-radius: 9px;

      @keyframes shimmer {
        0% {
          background-position: 0% 0%;
        }
        100% {
          background-position: -135% 0%;
        }
      }

      &.white {
        background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%);
      }
    }
  `}
`
