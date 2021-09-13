
const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
type ActionType = {
  type: typeof TOGGLE_COLLAPSED
}
export type StateType = {
  collapsed: boolean
}
export const reducer = (state: StateType, action: ActionType): StateType =>
  action.type === TOGGLE_COLLAPSED ?
    { ...state, collapsed: !state.collapsed } :
    { ...state }


