import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

import client from 'graphql/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetPlacesQuery, GetPlaceBySlugQuery } from 'graphql/generated/graphql'

import * as S from 'styles/pages/place'

import LinkWrapper from 'components/LinkWrapper'

import { CloseOutline } from 'styles/icons'

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

export default function Place({ place }: PlaceProps) {
  const router = useRouter()

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
        canonical="https://mytrips.com"
        openGraph={{
          url: 'https://mytrips.com',
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
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={image.width}
                height={image.height}
                quality={65}
              />
            ))}
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
