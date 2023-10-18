import { ChangeEvent } from 'react'

export function MaskCpfCnpj(e: ChangeEvent<HTMLInputElement>) {
  const inputCpfCnpj = e.target.value
  const clearCpfCnpj = inputCpfCnpj.replace(/\D/g, '')

  if (inputCpfCnpj !== clearCpfCnpj) e.target.value = clearCpfCnpj

  if (clearCpfCnpj.length === 11) {
    const formatCpf = clearCpfCnpj.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4',
    )
    e.target.value = formatCpf
  } else if (clearCpfCnpj.length === 14) {
    const formartCnpj = clearCpfCnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5',
    )
    e.target.value = formartCnpj
  }
}
