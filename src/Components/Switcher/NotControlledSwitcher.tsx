import { useState } from "react"

type PropsType = {
  setSwitcher: (switcher: boolean) => void
}

export const NotControlledSwitcher = (props: PropsType) => {

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
  const onClick = () => {
    setOn(true)
    props.setSwitcher(true)
  }
  const offClick = () => {
    setOn(false)
    props.setSwitcher(false)
  }
  return (
    <div>
      <div onClick={() => onClick()} style={onStyle}>ON</div>
      <div onClick={() => offClick()} style={offStyle}>OFF</div>
      <div style={led}></div>
    </div>
  )
}