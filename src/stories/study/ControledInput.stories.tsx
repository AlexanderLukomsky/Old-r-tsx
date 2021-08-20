
import { ChangeEvent, useState } from "react";

export default {
  title: 'ControledInput',
}

export const TrackingValueControlledInput = () => {
  const [value, setValue] = useState<string>('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setValue(e.currentTarget.value) }

  return <> <input value={value} onChange={onChangeHandler} type="text" />text:{value}</>
}

export const TrackingValueControlledInputCheckbox = () => {
  const [value, setValue] = useState<boolean>(false)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setValue(e.currentTarget.checked) }

  return <> <input checked={value} onChange={onChangeHandler} type="checkbox" />status: {`${value}`}</>
}
export const TrackingValueControlledInputSelect = () => {
  const [value, setValue] = useState<string>('В-3')
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => { setValue(e.currentTarget.value) }

  return (
    <div>
      <div>{value}</div>
      <select onChange={onChangeHandler} value={value}>
        <option value="А-1">Пункт 1</option>
        <option value="Б-2">Пункт 2</option>
        <option value="В-3">Пункт 3</option>
      </select>
    </div>

  )
}
type arrType = {
  name: string
  id: string
  value: string
  checked: boolean
}
export const TrackingValueControlledInputRadio = () => {
  const [arr, setValue] = useState<Array<arrType>>([
    { name: 'A', id: '1', value: 'letter', checked: false },
    { name: 'B', id: '2', value: 'letter', checked: false },
    { name: 'C', id: '3', value: 'letter', checked: false }
  ])

  const onChangeHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const getCheck = e.currentTarget.checked
    setValue(
      [...arr.map(el => el.id === id ? { ...el, checked: getCheck } : { ...el, checked: false })]
    )
  }

  return (
    <div>

      {arr.map(el =>
        <li key={el.id}>
          <input id={el.id} type="radio" name="gender" value={el.value} onChange={(e) => onChangeHandler(el.id, e)} />
          <>{el.name}</>   <>{`${el.checked}`}</>
        </li>
      )}
      <div>
        {arr.map(el => <div>{el.name} {`${el.checked}`}</div>)}
      </div>
    </div>

  )
}