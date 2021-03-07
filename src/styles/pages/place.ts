import styled from 'styled-components'
import { CloseOutline } from 'styles/icons'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: ${({ theme }) => theme.container.small};

  @media (min-width: 720px) {
    width: ${({ theme }) => theme.container.medium};
  }

  @media (min-width: 1230px) {
    width: ${({ theme }) => theme.container.large};
  }

  margin: ${({ theme }) => theme.sizes.large};
  padding: ${({ theme }) => theme.sizes.medium};

  background: ${({ theme }) => theme.colors.primary};

  border: 1px solid ${({ theme }) => theme.colors.highlight};
  border-radius: 9px;
`

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.sizes.large};
  margin-bottom: ${({ theme }) => theme.sizes.medium};
`

export const Body = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.large};

  p {
    text-align: justify;
    text-justify: inter-word;
    margin-bottom: ${({ theme }) => theme.sizes.medium};
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.sizes.medium};
  flex-shrink: 0;

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

    border: 0;
    border-radius: 9px;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`

export const IconClose = styled(CloseOutline)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.secondary};
`
