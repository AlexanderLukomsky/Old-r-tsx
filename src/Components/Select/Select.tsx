
import { useState, KeyboardEvent, useEffect } from "react";
import { UsersType } from "../../App"
import s from './Select.module.scss';
export type SelectPropsType = {
  items: UsersType[]
  value: string | null
  onChange: (value: string) => void
}
export const Select = (props: SelectPropsType) => {
  const [hoveredElementValue, setHoveredElement] = useState(props.value)
  const selectedValue = props.items.find(el => el.id === props.value)
  const hoveredItem = props.items.find(el => el.id === hoveredElementValue)
  const [activeItems, setActiveItems] = useState<boolean>(false)

  const toggleItems = () => {
    setActiveItems(!activeItems)
  }

  const onClickItemHandler = (id: string) => {
    props.onChange(id)
    setActiveItems(false)
  }

  useEffect(() => {
    setHoveredElement(props.value)
  }, [props.value])

  const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!props.value) { props.onChange(props.items[0].id) }
    if (props.value) {
      if (e.key === 'ArrowDown' && +props.value < props.items.length) {
        props.onChange((+props.value + 1).toString())
      }
      if (e.key === 'ArrowUp' && +props.value > +props.items[0].id) {
        props.onChange((+props.value - 1).toString())
      }
      if (e.key === 'Escape') {
        setActiveItems(false)
      }
    }
  }
  return (

    <div className={s.select} tabIndex={0} onKeyUp={onKeyUpHandler}>
      <h3 onClick={toggleItems} className={s.select__title}>{selectedValue && selectedValue.name}</h3>
      {activeItems && <div className={`${s.select__items} ${s.active}`}>
        {props.items.map(el =>
          <div key={el.id}
            onMouseEnter={() => { setHoveredElement(el.id) }}
            onClick={() => { onClickItemHandler(el.id) }}
            className={`${s.select__item} ${hoveredItem === el && s.selected}`}>
            {el.name}
          </div>
        )}
      </div>}

    </div>
  )
}