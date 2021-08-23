export type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  setCollapsed: () => void
  item: UsersType[]
}
type UsersType = {
  name: string
  id: string
}
function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} />
      {(!props.collapsed) && <AccordionBody item={props.item} />}

    </div>
  );
};
type AccordionTitlePropsType = {
  title: string
  setCollapsed: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={props.setCollapsed}> {props.title}</h3>
  );
};
type AccordionBodyPropsType = {
  item: UsersType[]
}
function AccordionBody({ item, ...props }: AccordionBodyPropsType) {
  return (
    <ul>
      {item.map(el => <li key={el.id}>{el.name}</li>)}
    </ul>
  );
};
export default Accordion