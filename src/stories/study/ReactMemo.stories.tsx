import { useState } from "@storybook/addons"
import React from "react"


export default {
  title: 'React memo demo'
}
export const Counter = (props: { count: number }) => {
  return <div>
    {props.count}
  </div>
}
export const Users = (props: { users: string[] }) => {
  console.log('u');
  return (
    <div>
      {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
  )
}

const MemoUsers = React.memo(Users)

export const ReactMemo = () => {
  const [counter, setCounter] = useState<number>(1)
  const [users, setUsers] = useState<string[]>(['n1', 'n2', 'n3', 'n4'])
  const addNewUser = () => { setUsers([...users, `NewUser ${new Date().getTime()}`]) }
  return (
    <div>
      <Counter count={counter} />
      <button onClick={() => { setCounter(counter + 1) }}>+</button>
      <MemoUsers users={users} />
      <button onClick={addNewUser}>Add New User</button>
    </div>
  )
}