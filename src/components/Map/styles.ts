import styled from 'styled-components'
const isProd = process.env.NODE_ENV === 'production'

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    background-color: ${({ theme }) => theme.colors.background};
  }

  ${isProd && '.leaflet-bottom.leaflet-right { display: none }'}
`
