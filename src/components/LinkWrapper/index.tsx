import Link from 'next/link'

import Switch from 'components/Switch'

import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

interface Props extends LinkWrapperProps {
  toggleTheme(): void
}

const LinkWrapper = ({ href, children, toggleTheme }: Props) => {
  return (
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

      <Switch toggleTheme={toggleTheme} />
    </S.Wrapper>
  )
}

export default LinkWrapper
