import { Dispatch, SetStateAction } from 'react'

export interface IChartProps {
  chartNumbers: string[]
  drawnNumbers: string[]
  setChartNumbers: Dispatch<SetStateAction<string[]>>
  setDrawnNumbers: Dispatch<SetStateAction<string[]>>
}
