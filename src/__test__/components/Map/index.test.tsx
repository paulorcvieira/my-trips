import { render, screen } from '@testing-library/react'

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
      name: 'Ponta Grossa',
      slug: 'pg',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Paris',
      slug: 'fr',
      location: {
        latitude: 45,
        longitude: -15
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/ponta grossa/i)).toBeInTheDocument()
    expect(screen.getByTitle(/paris/i)).toBeInTheDocument()
  })
})
