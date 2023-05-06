'use client'
import { Box, Button, TextInput, Heading } from '@mouravocal/react'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import Tesseract from 'tesseract.js'

export default function Home() {
  const inputImageRef = useRef<HTMLInputElement>(null)
  const [chartNumbers, setChartNumbers] = useState<number[]>([])
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])

  const [chartNumber, setChartNumber] = useState('')
  const [drawnNumber, setDrawnNumber] = useState('')

  const addNumber = (
    number: string,
    setArray: Dispatch<SetStateAction<number[]>>,
    setNumber: Dispatch<SetStateAction<string>>
  ) => {
    if (Number.isNaN(Number(number)) || !number) return
    setArray(oldNumbers => [...oldNumbers, Number(number)])
    setNumber('')
  }

  const filterArray = (array: (number | undefined)[]): number[] => {
    const filterUndefined = array.filter(item => item !== undefined) as number[]
    return filterUndefined.filter(item => !chartNumbers.includes(item))
  }

  const imageUpload = () => {
    if (inputImageRef.current?.files?.length) {
      const file = inputImageRef.current.files[0]
      console.log(file)
      Tesseract.recognize(file, 'por', { logger: m => console.log(m) }).then(
        ({ data: { text } }) => {
          console.log(text)
          const result = text.replace('\n', '').split(' ')
          console.log(result)
          const newNumbers = result.map(number => {
            if (Number.isNaN(Number(number))) return
            return Number(number)
          })
          setChartNumbers(oldNumbers => [
            ...oldNumbers,
            ...filterArray(newNumbers)
          ])
        }
      )
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Heading as="h1" css={{ fontSize: '$5xl', textAlign: 'center' }}>
        Cartela do Bingo
      </Heading>
      <input
        type="file"
        ref={inputImageRef}
        accept="image/*"
        onChange={imageUpload}
      />
      <Box
        css={{
          display: 'flex',
          flexDirection: 'row',
          gap: '$3',
          marginTop: '$10',
          maxWidth: '80vw',
          flexWrap: 'wrap'
        }}
      >
        <TextInput
          onChange={text => setChartNumber(text.target.value)}
          value={chartNumber}
          onKeyUp={e => {
            const key = e.key
            if (key === 'Enter') {
              if (chartNumbers.includes(Number(chartNumber))) return
              addNumber(chartNumber, setChartNumbers, setChartNumber)
            }
          }}
          css={{ minWidth: '2rem' }}
        />
        <Button
          onClick={() =>
            addNumber(chartNumber, setChartNumbers, setChartNumber)
          }
        >
          Adicionar
        </Button>
      </Box>

      <Box
        css={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          margin: '$3',
          gap: '$3',
          maxWidth: '80vw',
          flexWrap: 'wrap',
          minWidth: '50%'
        }}
      >
        {chartNumbers.map(number => {
          return (
            <Box key={number}>
              {drawnNumbers.includes(Number(number)) ? (
                <p className="text-lime-600">{number}</p>
              ) : (
                <p className="text-red-500">{number}</p>
              )}
            </Box>
          )
        })}
      </Box>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          margin: '$3',
          gap: '$3',
          maxWidth: '80vw',
          flexWrap: 'wrap',
          minWidth: '50%',
          minHeight: '6rem'
        }}
      >
        {drawnNumbers.map(number => {
          return <Box key={number}>{number}</Box>
        })}
      </Box>

      <Box
        css={{
          display: 'flex',
          flexDirection: 'row',
          gap: '$3'
        }}
      >
        <TextInput
          onChange={text => setDrawnNumber(text.target.value)}
          value={drawnNumber}
          css={{ minWidth: '2rem' }}
        />
        <Button
          onClick={() =>
            addNumber(drawnNumber, setDrawnNumbers, setDrawnNumber)
          }
        >
          Conferir
        </Button>
      </Box>
    </main>
  )
}
