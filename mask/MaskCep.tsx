import { ChangeEvent } from 'react'

export function MaskCep(e: ChangeEvent<HTMLInputElement>) {
  const inputCep = e.target.value
  if (!inputCep) return ''
  const formatCep = inputCep
    .slice(0, 9)
    .replace(/[^\d]/g, '')
    .replace(/^(\d{5})(\d{3})$/, '$1-$2')

  e.target.value = formatCep
}
