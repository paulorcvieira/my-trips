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
  justify-content: center;
  align-items: center;

  min-width: ${({ theme }) => theme.container.small};

  @media (min-width: 720px) {
    width: ${({ theme }) => theme.container.medium};
  }

  @media (min-width: 1230px) {
    width: ${({ theme }) => theme.container.large};
  }

  margin: ${({ theme }) => theme.sizes.large} auto;
  padding: ${({ theme }) => theme.sizes.medium};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  border: 1px solid ${({ theme }) => theme.colors.highlight};
  border-radius: 9px;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.medium};
  margin-bottom: ${({ theme }) => theme.sizes.medium};
`

export const Body = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.large};

  p {
    text-align: justify;
    text-justify: inter-word;
    font-size: ${({ theme }) => theme.sizes.small};
    margin-bottom: ${({ theme }) => theme.sizes.small};
  }

  blockquote {
    text-align: center;
    margin-top: 36px;
    font-size: 17px;
    font-weight: 600;
  }
`

export const IconClose = styled(CloseOutline)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.secondary};
`
