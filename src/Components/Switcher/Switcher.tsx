import { useState } from "react"
type PropsType = {
  setSwitcher: (state: boolean) => void
  switcher: boolean
}
export const Switcher = (props: PropsType) => {
  const onStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: props.switcher ? 'green' : 'white',
    margin: '5px'
  }
  const offStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: props.switcher ? 'white' : 'red',
    margin: '5px'
  }
  let led = {
    display: 'inline-block',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: props.switcher ? 'green' : 'red',
  }
  return (
    <div>
      <div onClick={() => props.setSwitcher(true)} style={onStyle}>ON</div>
      <div onClick={() => props.setSwitcher(false)} style={offStyle}>OFF</div>
      <div style={led}></div>
    </div>
  )
}