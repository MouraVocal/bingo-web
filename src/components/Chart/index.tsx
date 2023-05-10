import { Box, Heading } from '@mouravocal/react'
import { IChartProps } from './types'

export const Chart = ({ chartNumbers, drawnNumbers }: IChartProps) => {
  return (
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
      <div className="flex flex-col gap-3">
        <Heading>Números da cartela</Heading>
        <div className="flex">
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
        </div>
      </div>
    </Box>
  )
}
