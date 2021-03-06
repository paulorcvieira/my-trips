import Skeleton from '../Skeleton'
import Panel from '../Panel'

import * as S from '../styles'

const LoadingTitle = () => {
  return (
    <S.Container>
      <Panel className="no-shadow">
        <section>
          <div className="column">
            <Skeleton className="row-skeleton" />
          </div>
          <span>
            <Skeleton className="row-skeleton" />
          </span>
        </section>
      </Panel>
    </S.Container>
  )
}

export default LoadingTitle
