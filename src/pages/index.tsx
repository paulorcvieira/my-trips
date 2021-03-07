import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'

import * as S from 'styles/pages/home'

import LinkWrapper from 'components/LinkWrapper'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'

interface Props extends MapProps {
  toggleTheme(): void
}

export default function Home({ places, toggleTheme }: Props) {
  const Map = dynamic(() => import('components/Map'), { ssr: false })

  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://my-trips-paulorcvieira.vercel.app"
        openGraph={{
          url: 'https://my-trips-paulorcvieira.vercel.app',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips-paulorcvieira.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />

      <LinkWrapper href="/about" toggleTheme={toggleTheme}>
        <S.IconInfo aria-label="About" />
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
