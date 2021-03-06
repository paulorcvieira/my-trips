import Skeleton from '../Skeleton'
import Panel from '../Panel'

import * as S from '../styles'

const LoadingImage = () => {
  return (
    <S.Container>
      <Panel className="no-shadow">
        <section>
          <Skeleton className="square-skeleton" />
        </section>
      </Panel>
    </S.Container>
  )
}

export default LoadingImage
