import Link from 'next/link'

import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
    <a
      href="https://github.com/paulorcvieira/my-trips"
      target="_blank"
      rel="noopener noreferrer"
      title="Github"
    >
      <S.Avatar
        src="https://github.com/paulorcvieira.png"
        alt="Foto de perfil"
      />
    </a>
  </S.Wrapper>
)

export default LinkWrapper
