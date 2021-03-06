import { render, screen } from 'utils/test-utils'

import Map from 'components/Map'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    // screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Ponta Grossa, Paraná',
      slug: 'ponta-grossa-parana',
      location: {
        latitude: -25.0949322,
        longitude: -50.1545956
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Paris, França',
      slug: 'paris-franca',
      location: {
        latitude: 48.856614,
        longitude: 2.3522219
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/ponta grossa/i)).toBeInTheDocument()
    expect(screen.getByTitle(/paris/i)).toBeInTheDocument()
  })
})
