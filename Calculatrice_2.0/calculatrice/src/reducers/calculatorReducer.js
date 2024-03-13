export const initialState = {
  current: 0,
  prev: 0,
  operator: '',
  errorMessage: '',
};

export const calculate = (state) => {
  const current = parseFloat(state.current);
  const prev = parseFloat(state.prev);

  switch (state.operator) {
    case '+':
      return prev + current;

    case '-':
      return prev - current;

    case '×':
      return prev * current;

    case '/':
      return current !== 0
        ? prev / current
        : 'Les divisions par 0 sont impossibles';

    default:
      return 0;
  }
};

export const ACTIONS = {
  CHANGE_CURRENT: 'change_current',
  SET_OPERATOR: 'set_operator',
  CALCULATE: 'calculate',
  RESET: 'reset',
};

const calculatorReducer = (state, action) => {
    let result;
  switch (action.type) {
    case ACTIONS.CHANGE_CURRENT:
      return {
        ...state,
        current:
          state.current === 0
            ? action.payload
            : state.current.toString() + action.payload.toString(),
        errorMessage: '',
      };
    case ACTIONS.SET_OPERATOR:
      return {
        ...state,
        prev: parseFloat(state.current),
        current: 0,
        operator: action.payload,
      };
    case ACTIONS.CALCULATE:
      result = calculate(state);
      return isNaN(parseFloat(result))
        ? {
            ...state,
            errorMessage: result,
          }
        : {
            ...state,
            current: result,
            prev: 0,
            operator: '',
            errorMessage: '',
          };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
};

export default calculatorReducer;
