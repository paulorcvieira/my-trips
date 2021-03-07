import { ReactElement, useEffect } from 'react'

import {
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle,
  XCircle
} from 'styles/icons'

import useToasts from 'contexts/toast'
import { ToastMessage, ToastType } from 'contexts/toast/types'

import * as S from './styles'

type ToastProps = {
  message: ToastMessage
}

type ToastIcons = {
  [K in ToastType]: ReactElement
}

const toastIcons: ToastIcons = {
  error: <AlertCircle size={24} />,
  info: <Info size={24} />,
  success: <CheckCircle size={24} />,
  warning: <AlertTriangle size={24} />
}

const Toast = ({ message }: ToastProps) => {
  const { id, type, title, description } = message

  const { removeToast } = useToasts()

  useEffect(() => {
    const timer = setTimeout(() => removeToast(id), 5000)

    return () => clearTimeout(timer)
  }, [removeToast, id])

  return (
    <S.Container
      key={id}
      type={type}
      layout="position"
      initial={{ x: 364, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{
        x: 364,
        opacity: 0,
        transition: { type: 'spring', duration: 0.45 }
      }}
      transition={{ type: 'spring', duration: 0.6 }}
    >
      {toastIcons[type]}

      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>

      <button type="button" onClick={() => removeToast(id)}>
        <XCircle size={18} />
      </button>
    </S.Container>
  )
}

export default Toast
