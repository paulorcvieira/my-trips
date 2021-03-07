import * as S from '../styles'

const LoadingDescription = () => {
  return (
    <S.Container>
      <S.Panel className="no-shadow">
        <section>
          <div className="column">
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
          </div>
          <span>
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
            <S.Skeleton className="row-skeleton" />
          </span>
        </section>
      </S.Panel>
    </S.Container>
  )
}

export default LoadingDescription
