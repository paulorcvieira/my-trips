import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

import client from 'graphql/client'
import { GET_PAGES, GET_PAGES_BY_SLUG } from 'graphql/queries'
import { GetPagesQuery, GetPagesBySlugQuery } from 'graphql/generated/graphql'

import * as S from 'styles/pages/page'

import LinkWrapper from 'components/LinkWrapper'
import LoadingTitle from 'components/Shimmer/LoadingTitle'
import LoadingDescription from 'components/Shimmer/LoadingDescription'

import { CloseOutline } from 'styles/icons'

type PageProps = {
  heading: string
  body: string
}

// getStaticPath => serve para gerar as urls em build time /about /trip/ponta-grossa
// getStaticProps => serve para buscar dados da página (props) - build time - estático
// getServerSideProps => serve para buscar dados da página (props - runtime - toda requisição (bundle fica no server)
// getInitialProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client) - hydrate

export default function Page({ heading, body }: PageProps) {
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
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          {isLoading ? <LoadingTitle /> : <S.Heading>{heading}</S.Heading>}

          {isLoading ? (
            <LoadingDescription />
          ) : (
            <S.Body>
              <div dangerouslySetInnerHTML={{ __html: body }} />
            </S.Body>
          )}
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPagesBySlugQuery>(
    GET_PAGES_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!page) return { notFound: true }

  return {
    revalidate: 60,
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
