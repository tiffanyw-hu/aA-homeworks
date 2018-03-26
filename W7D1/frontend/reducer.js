const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const reducer = (state = initialState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case 'SWITCH_CURRENCY':
      return {
        rates: action.rates,
        baseCurrency: action.baseCurrency
      };
    default:
      return state;
  }
};

window.reducer = reducer

export default reducer;
