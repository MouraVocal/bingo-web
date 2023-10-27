import { IDeleteButtonProps } from './types'

export const DeleteButton = ({ id, onDelete }: IDeleteButtonProps) => {
  return (
    <button
      className="absolute top-0 right-0 cursor-pointer w-2 h-2 bg-red-600 rounded-full"
      onClick={() => onDelete(id)}
    />
  )
}
