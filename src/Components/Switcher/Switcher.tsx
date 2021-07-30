import { useState } from "react"

export const Switcher = () => {

  let [on, setOn] = useState(false)
  const onStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: on ? 'green' : 'white',
    margin: '5px'
  }
  const offStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: on ? 'white' : 'red',
    margin: '5px'
  }
  let led = {
    display: 'inline-block',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: on ? 'green' : 'red',
  }
  return (
    <div>
      <div onClick={() => setOn(true)} style={onStyle}>ON</div>
      <div onClick={() => setOn(false)} style={offStyle}>OFF</div>
      <div style={led}></div>
    </div>
  )
}