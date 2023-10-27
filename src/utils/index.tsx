import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const addNumber = (
  number: string,
  setArray: Dispatch<SetStateAction<string[]>>,
  setNumber: Dispatch<SetStateAction<string>>
) => {
  if (Number.isNaN(Number(number)) || !number) return
  setArray(oldNumbers => [...oldNumbers, number])
  setNumber('')
}

export const handleImageChange = (
  event: ChangeEvent<HTMLInputElement>,
  callback: (file: File) => {}
) => {
  if (!event.currentTarget.files?.length) return

  const imageFile = event.currentTarget.files[0]

  callback(imageFile)
}

export const orderArray = (array: string[]) => {
  return array.sort((a: string, b: string) => Number(a) - Number(b))
}
