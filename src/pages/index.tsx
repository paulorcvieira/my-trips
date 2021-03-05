import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'
// import { useTheme } from 'styled-components';

import { InfoOutline } from 'styles/icons'
import LinkWrapper from 'components/LinkWrapper'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'

export default function Home({ places }: MapProps) {
  // const { colors } = useTheme();
  const Map = dynamic(() => import('components/Map'), { ssr: false })

  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://mytrips.com"
        openGraph={{
          url: 'https://mytrips.com',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://mytrips.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 60,
    props: {
      places
    }
  }
}
