import { Box, Heading } from '@mouravocal/react'
import { IChartProps } from './types'
import { DrawnNumberBlock } from '@/components/DrawnNumberBlock'
import { orderArray } from '@/utils'

export const Chart = ({
  chartNumbers,
  drawnNumbers,
  setChartNumbers
}: IChartProps) => {
  const isDrawnNumber = (number: string) => drawnNumbers.includes(number)

  const deleteNumber = (number: string) => {
    const newChartNumbers = chartNumbers.filter(
      chartNumber => chartNumber !== number
    )
    setChartNumbers(newChartNumbers)
  }

  return (
    <Box className="flex flex-grow flex-row items-start m-3 gap-3 max-w-screen-md flex-wrap min-w-[50%]">
      <div className="flex flex-col gap-3">
        <Heading>Números da cartela</Heading>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {orderArray(chartNumbers).map(number => {
            return (
              <DrawnNumberBlock
                value={number}
                isDrawnNumber={isDrawnNumber(number)}
                key={number}
                onClick={() => deleteNumber(number)}
              />
            )
          })}
        </div>
      </div>
    </Box>
  )
}
