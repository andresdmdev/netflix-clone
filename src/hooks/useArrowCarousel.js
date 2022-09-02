import { useReducer } from 'react'

export const ACTIONS = {
  LEFT_ARROW: 'left',
  RIGHT_ARROW: 'right',
  RESET_FLIEDS: 'reset',
  BEFORE_VALUE: 'before'
}

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.LEFT_ARROW:
      return {
        ...state,
        left: true
      }

    case ACTIONS.RIGHT_ARROW:
      return {
        ...state,
        right: true
      }

    case ACTIONS.RESET_FLIEDS:
      return {
        ...state,
        left: false,
        right: false
      }
    
    case ACTIONS.BEFORE_VALUE:
      return {
        ...state,
        beforeValue: true
      }
  
    default:
      return state;
  }
}

export default function useArrowCarousel(){

  const [state, dispatch] = useReducer(reducers, { left: false, right: false, beforeValue: false })

  return {
    left: state.left,
    right: state.right,
    beforeValue: state.beforeValue,
    reset: () => dispatch({ type: ACTIONS.RESET_FLIEDS }),
    updateRightArrow: () => dispatch({ type: ACTIONS.RIGHT_ARROW }),
    updateLeftArrow: () => dispatch({ type: ACTIONS.LEFT_ARROW }),
    updateBeforeValue: () => dispatch({ type: ACTIONS.BEFORE_VALUE })
  }
}