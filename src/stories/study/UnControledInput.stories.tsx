
import { ChangeEvent, useRef, useState } from "react";

export default {
  title: 'UnControledInput',
}

export const TrackingValueInput = () => {
  const onCangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setValue(e.currentTarget.value) }
  const [value, setValue] = useState('')
  return (
    <><input onChange={onCangeHandler} /> {value}</>
  )
}
export const GetValueInput = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const getValue = () => {
    const elRef = inputRef.current as HTMLInputElement
    setValue(elRef.value)
  }


  return (
    <><input ref={inputRef} /><button onClick={getValue}>GET VALUE</button> value:{value} </>
  )
}