import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import client from 'graphql/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetPlacesQuery, GetPlaceBySlugQuery } from 'graphql/generated/graphql'

import * as S from 'styles/pages/place'

import LinkWrapper from 'components/LinkWrapper'
import LoadingTitle from 'components/Shimmer/LoadingTitle'
import LoadingDescription from 'components/Shimmer/LoadingDescription'
import LoadingImage from 'components/Shimmer/LoadingImage'

type ImageProps = {
  id: string
  url: string
  height: number
  width: number
}

type PlaceProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

interface Props extends PlaceProps {
  toggleTheme(): void
}

export default function Place({ place, toggleTheme }: Props) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  })

  // retorna um loading, qualquer coisa enquanto esta sendo criado
  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
        }
        canonical="https://my-trips-paulorcvieira.vercel.app"
        openGraph={{
          url: 'https://my-trips-paulorcvieira.vercel.app',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/" toggleTheme={toggleTheme}>
        <S.IconClose aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          {isLoading ? <LoadingTitle /> : <S.Heading>{place.name}</S.Heading>}

          {isLoading ? (
            <LoadingDescription />
          ) : (
            <S.Body
              dangerouslySetInnerHTML={{
                __html: place.description?.html || ''
              }}
            />
          )}

          <S.Gallery>
            {isLoading ? (
              <LoadingImage />
            ) : (
              place.gallery.map((image) => (
                <Image
                  key={image.id}
                  src={image.url}
                  alt={place.name}
                  width={image.width}
                  height={image.height}
                  quality={65}
                />
              ))
            )}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: params?.slug
    }
  )

  if (!place) return { notFound: true }

  return {
    revalidate: 60, // once per day
    props: {
      place
    }
  }
}
