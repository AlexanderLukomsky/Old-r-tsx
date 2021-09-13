import { reducer, StateType } from "./reducer"

test('should be collapsed: true', () => {

  const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
  const state: StateType = {
    collapsed: false
  }
  const newState = reducer(state, { type: TOGGLE_COLLAPSED })
  expect(newState.collapsed).toBe(true)
})
test('should be collapsed: false', () => {

  const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
  const state: StateType = {
    collapsed: true
  }
  const newState = reducer(state, { type: TOGGLE_COLLAPSED })
  expect(newState.collapsed).toBe(false)
})
