import { api } from '@/api'
import { AxiosResponse } from 'axios'

interface IGetImageNumbersResponse {
  numbers: string[]
}

export const getImageNumbers = async (
  file: File
): Promise<IGetImageNumbersResponse> => {
  const res = await api.post('/', {
    file
  })

  return res.data
}
