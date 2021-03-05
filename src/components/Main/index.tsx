import * as S from './styles'

const Main = ({
  title = 'Boilerplate Next.js',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo." />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
