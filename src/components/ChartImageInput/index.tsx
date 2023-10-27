import {
  ChangeEventHandler,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef
} from 'react'

interface IChartImageInputComponent
  extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>
  isLoading: boolean
}

const ChartImageInputComponent = (
  { onChange, isLoading, ...args }: IChartImageInputComponent,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return <input ref={ref} onChange={onChange} {...args} />
}

export const ChartImageInput = forwardRef(ChartImageInputComponent)
