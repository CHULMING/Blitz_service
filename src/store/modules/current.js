const SAVE = "save";

export const save = (menu) => {
  return {
    type: SAVE,
    current: menu,
  };
};

const initialState = {
  menu: "",
};

export default function saveCurrent(state = initialState, action) {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        menu: action.current,
      };
    default:
      return {
        ...state,
        menu: "",
      };
  }
}
