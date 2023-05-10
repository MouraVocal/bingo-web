import { Box, Button, TextInput } from '@mouravocal/react'
import { INumberInputProps } from './types'
import { addNumber } from '@/utils'

export const NumberInput = ({
  input,
  setInput,
  array,
  setArray
}: INumberInputProps) => {
  return (
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
        onChange={text => setInput(text.target.value)}
        value={input}
        onKeyUp={e => {
          const key = e.key
          if (key === 'Enter') {
            if (array.includes(Number(input))) return
            addNumber(input, setArray, setInput)
          }
        }}
        css={{ minWidth: '2rem' }}
      />
      <Button onClick={() => addNumber(input, setArray, setInput)}>
        Adicionar
      </Button>
    </Box>
  )
}
