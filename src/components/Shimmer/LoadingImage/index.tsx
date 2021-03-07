import * as S from '../styles'

const LoadingImage = () => {
  return (
    <S.Container>
      <S.Panel className="no-shadow">
        <section>
          <S.Skeleton className="square-skeleton" />
        </section>
      </S.Panel>
    </S.Container>
  )
}

export default LoadingImage
