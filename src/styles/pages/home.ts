import styled from 'styled-components'

import { InfoOutline } from 'styles/icons'

export const IconInfo = styled(InfoOutline)`
  color: ${({ theme }) => theme.colors.secondary};
  width: 32px;
  height: 32px;
  z-index: 1110;

  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`
