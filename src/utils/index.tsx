import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react'
import Tesseract from 'tesseract.js'

export const addNumber = (
  number: string,
  setArray: Dispatch<SetStateAction<number[]>>,
  setNumber: Dispatch<SetStateAction<string>>
) => {
  if (Number.isNaN(Number(number)) || !number) return
  setArray(oldNumbers => [...oldNumbers, Number(number)])
  setNumber('')
}

export const handleImageChange = (
  event: ChangeEvent<HTMLInputElement>,
  callback: (file: File) => {}
) => {
  if (!event.currentTarget.files) return

  const imageFile = event.currentTarget.files[0]

  callback(imageFile)
}

export const extractNumbers = async (file: File) => {
  const {
    data: { text }
  } = await Tesseract.recognize(file, 'eng', { logger: m => console.log(m) })

  console.log(text)

  const result = text.replace('\n', '').split(' ')

  console.log(result)

  let numbers: number[] = []

  result.forEach(number => {
    if (Number.isNaN(Number(number))) return
    numbers.push(Number(number))
  })

  return numbers
}
