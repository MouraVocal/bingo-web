import { api, firebaseApp } from '@/api'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

type IGetImageNumbersResponse = string[]

export const getImageNumbers = async (
  file: File
): Promise<IGetImageNumbersResponse> => {
  const storage = getStorage(firebaseApp)
  const storageRef = ref(storage, 'images')

  const path = await getDownloadURL(storageRef)

  console.log(path)

  const res = await api.post(
    '/upload',
    {
      path
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }
  )

  return res.data
}
