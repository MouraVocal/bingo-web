import { Box } from '@mouravocal/react'
import { INumberBlockProps } from './types'
import { DeleteButton } from '../DeleteButton'

export const DrawnNumberBlock = ({
  value,
  isDrawnNumber,
  onClick
}: INumberBlockProps) => {
  return (
    <Box key={value} className="w-14 text-center relative">
      <DeleteButton onDelete={onClick} id={value} />
      {isDrawnNumber ? (
        <p className="text-lime-600 font-bold">{value}</p>
      ) : (
        <p className="text-red-500 font-light">{value}</p>
      )}
    </Box>
  )
}
