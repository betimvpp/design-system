/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable prettier/prettier */
import { ComponentProps } from 'react'
import { TextInputContainer, Input, Prefix } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}
