import { useReducer } from "react";
import { reducer } from "./reducer";
const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
type propsType = {
  titleValue: string
}


export function NotControlledAccordion(props: propsType) {
  const [state, dispatch] = useReducer(reducer, { collapsed: false })
  const setCollapsedFoo = () => {
    dispatch({ type: TOGGLE_COLLAPSED })
  }
  return (
    <div>
      <AccordionTitle title={props.titleValue} setCollapsedFoo={setCollapsedFoo} />
      {!state.collapsed && <AccordionBody />}

    </div>
  );
};
type AccordionTitlePropsType = {
  title: string
  setCollapsedFoo: () => void

}
function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={() => props.setCollapsedFoo()}>{props.title}</h3>
  );
};
function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};