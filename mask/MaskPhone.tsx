import { ChangeEvent } from 'react'

export const Maskphone = (e: ChangeEvent<HTMLInputElement>) => {
  const inputPhone = e.target.value
  if (!inputPhone) return ''
  const clearPhone = inputPhone
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})\d?/, '$1-$2')
  e.target.value = clearPhone
}
