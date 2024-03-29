'use client'
import { ChangeEventHandler, useRef, useState } from 'react'
import { Box, Button, TextInput, Heading } from '@mouravocal/react'
import { addNumber, handleImageChange } from '@/utils'
import { Chart } from '@/components/Chart'
import { NumberInput } from '@/components/NumberInput'
import { getImageNumbers } from '@/services'
import { ChartImageInput } from '@/components/ChartImageInput'

export default function Home() {
  const inputImageRef = useRef<HTMLInputElement>(null)
  const [chartNumbers, setChartNumbers] = useState<string[]>([])
  const [drawnNumbers, setDrawnNumbers] = useState<string[]>([])

  const [chartNumber, setChartNumber] = useState('')
  const [drawnNumber, setDrawnNumber] = useState('')

  const handleExtractNumbers = async (file: File) => {
    const apiResponse = await getImageNumbers(file)

    console.log(apiResponse)

    const extractedNumbers = apiResponse
    setChartNumbers(oldNumbers => [...oldNumbers, ...extractedNumbers])
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Heading as="h1" css={{ fontSize: '$5xl', textAlign: 'center' }}>
        Cartela de Bingo
      </Heading>

      <ChartImageInput
        ref={inputImageRef}
        type="file"
        accept="image/*"
        onChange={e => handleImageChange(e, handleExtractNumbers)}
        isLoading={true}
      />

      <NumberInput
        input={chartNumber}
        array={chartNumbers}
        setArray={setChartNumbers}
        setInput={setChartNumber}
      />

      <Chart
        chartNumbers={chartNumbers}
        drawnNumbers={drawnNumbers}
        setChartNumbers={setChartNumbers}
        setDrawnNumbers={setDrawnNumbers}
      />
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
        <div className="flex flex-col">
          <Heading>Números sorteados</Heading>
          <div className="flex gap-3">
            {drawnNumbers.map(number => {
              return <Box key={number}>{number}</Box>
            })}
          </div>
        </div>
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
