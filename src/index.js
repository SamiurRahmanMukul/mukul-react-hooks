// hooks
import useFullScreen from "./hooks/useFullScreen";
import useIsTopOfPage from "./hooks/useIsTopOfPage";
import useMediaQuery from "./hooks/useMediaQuery";
import useTimeout from "./hooks/useTimeout";
import useUnsavedChangeAlert from "./hooks/useUnsavedChangeAlert";

// library
import arrayToCommaSeparatedText from "./library/arrayToCommaSeparatedText";
import asyncDelay from "./library/asyncDelay";
import downloadString from "./library/downloadString";
import internationalCurrencyConvert from "./library/internationalCurrencyConvert";
import isEmptyObject from "./library/isEmptyObject";
import isValidEmail from "./library/isValidEmail";
import numberFormatWithCommas from "./library/numberFormatWithCommas";
import randomColor from "./library/randomColor";
import transformString from "./library/transformString";
import truncateStringEnd from "./library/truncateStringEnd";
import truncateStringMiddle from "./library/truncateStringMiddle";
import unixToDateTime from "./library/unixToDateTime";
import waitSomeMoment from "./library/waitSomeMoment";

// lib modules
const lib = {
  arrayToCommaSeparatedText,
  asyncDelay,
  downloadString,
  internationalCurrencyConvert,
  isEmptyObject,
  isValidEmail,
  numberFormatWithCommas,
  randomColor,
  transformString,
  truncateStringEnd,
  truncateStringMiddle,
  unixToDateTime,
  waitSomeMoment,
};

// export all hooks and library
export { lib, useFullScreen, useIsTopOfPage, useMediaQuery, useTimeout, useUnsavedChangeAlert };
