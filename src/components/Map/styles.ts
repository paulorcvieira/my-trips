import styled, { css } from 'styled-components'
const isProd = process.env.NODE_ENV === 'production'

export const MapWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    .leaflet-container {
      background-color: ${theme.colors.background};
    }

    ${() => isProd ? '.leaflet-bottom.leaflet-right { display: none }' : ''}
  `}
`
