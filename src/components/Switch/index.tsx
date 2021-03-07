import Switch from 'react-switch'
import { shade } from 'polished'
import { useTheme } from 'styled-components'

type Props = {
  toggleTheme(): void
}

const SwitchMode = ({ toggleTheme }: Props) => {
  const { colors, title } = useTheme()

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === 'light' ? true : false}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offColor={shade(0.15, colors.highlight)}
      onColor={shade(0.3, colors.background)}
    />
  )
}

export default SwitchMode
