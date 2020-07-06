import { combineReducers } from "redux";
import { ActionTypes } from "./actions";
export const initialState = {
  counter: { value: 0 },
  selectOptions: {
    value: [],
  },
  selectedOption: {
    value: [],
  },
  carouselIndex: {
    value: 0,
  },
};
const counter = (counter = initialState.counter, action) => {
  if (action.type === ActionTypes.SET_COUNTER_ACTION) {
    counter.value = action.data;
  }
  return { ...counter };
};
const selectOptions = (selectOptions = initialState.selectOptions, action) => {
  if (action.type === ActionTypes.SET_SELECT_OPTIONS_ACTION) {
    selectOptions.value = action.data;
  }
  return { ...selectOptions };
};
const selectedOption = (
  selectedOption = initialState.selectedOption,
  action,
) => {
  if (action.type === ActionTypes.SET_SELECTED_OPTION_ACTION) {
    selectedOption.value = action.data;
  }
  return { ...selectedOption };
};

const carouselIndex = (carouseIndex = initialState.carouselIndex, action) => {
  if (action.type === ActionTypes.SET_CAROUSEL_INDEX_ACTION) {
    carouseIndex.value = action.data;
  }
  return { ...carouseIndex };
};

export const reducer = combineReducers({
  counter,
  selectOptions,
  selectedOption,
  carouselIndex,
});
