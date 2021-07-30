import { useState } from "react";


export function NotControlledRating() {
  let [value, setValue] = useState(1)
  const setValueFoo = (value: number) => {
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
  starValue: number
  setValueFoo: (value: number) => void
}
function Star(props: StarPropsType) {
  if (props.selected) {
    return (
      <span onClick={() => props.setValueFoo(props.starValue)}>
        <b>Star </b>
      </span>
    )
  }
  return <span onClick={() => props.setValueFoo(props.starValue)}>Star </span>;
}