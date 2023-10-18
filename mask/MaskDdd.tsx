import { ChangeEvent } from 'react'

export function Maskddd(e: ChangeEvent<HTMLInputElement>) {
  e.target.value = '+' + e.target.value.replace(/\D/g, '')
}
