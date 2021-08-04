import { useState } from "react";


export function NotControlledRating() {
  let [value, setValue] = useState(0)
  const setValueFoo = (value: 1 | 2 | 3 | 4 | 5) => {
    setValue(value)
  }
  return (
    <div>
      <Star starValue={1} selected={value > 0} setValueFoo={setValueFoo} />
      <Star starValue={2} selected={value > 1} setValueFoo={setValueFoo} />
      <Star starValue={3} selected={value > 2} setValueFoo={setValueFoo} />
      <Star starValue={4} selected={value > 3} setValueFoo={setValueFoo} />
      <Star starValue={5} selected={value > 4} setValueFoo={setValueFoo} />
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  starValue: 1 | 2 | 3 | 4 | 5
  setValueFoo: (value: 1 | 2 | 3 | 4 | 5) => void
}
function Star(props: StarPropsType) {
  return (
    <span onClick={() => props.setValueFoo(props.starValue)}>
      {
        props.selected ? <b>Star </b> : 'Star '
      }
    </span>

  )
}