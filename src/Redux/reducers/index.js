import { LANGUAGE_TYPE } from "constants/Constants";
import AT from "Redux/actions/actionTypes";

const initialState = {
  test: null,
  loading: false,
  error: null,
  language: 'heb', 
  header: "left",
  selectedDashboardItem: "Dashboard",
  siteOrientation: LANGUAGE_TYPE.HEBREW,
  currentTab : `/`
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case AT.TEST_CONSTANT:
    //   return { ...state, test: payload, loading: false, error: null };
    // case AT.SET_ERROR:
    //   return { ...state, loading: false, error: payload };
    case "SET_DASHBOARD_TYPE":
      return { ...state, selectedDashboardItem: payload };
    case "SET_ORIENTATION":
      return { ...state, siteOrientation: payload };
    // case AT.SET_LANGUAGE:
    //   return { ...state, language: payload };
    case AT.SET_HEADER:
      return { ...state, header: payload };
    case "SET_TAB":
      return { ...state, currentTab: payload };
    case "SET_LANGUAGE":
      return { ...state, language: payload };
    default:
      return state;
  }
};

export default Reducer;
