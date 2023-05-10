import { Dispatch, SetStateAction } from 'react'

export interface INumberInputProps {
  input: string
  setInput: Dispatch<SetStateAction<string>>
  array: string[]
  setArray: Dispatch<SetStateAction<string[]>>
}
