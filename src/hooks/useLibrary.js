import arrayToCommaSeparatedText from "../library/arrayToCommaSeparatedText";
import asyncDelay from "../library/asyncDelay";
import downloadString from "../library/downloadString";
import internationalCurrencyConvert from "../library/internationalCurrencyConvert";
import isEmptyObject from "../library/isEmptyObject";
import isValidEmail from "../library/isValidEmail";
import numberFormatWithCommas from "../library/numberFormatWithCommas";
import randomColor from "../library/randomColor";
import transformString from "../library/transformString";
import truncateStringEnd from "../library/truncateStringEnd";
import truncateStringMiddle from "../library/truncateStringMiddle";
import unixToDateTime from "../library/unixToDateTime";
import waitSomeMoment from "../library/waitSomeMoment";

/**
 * Returns an object containing various utility functions related to string manipulation, currency conversion, date, and more.
 *
 * @return {Object} An object containing the following functions:
 *   - arrayToCommaSeparatedText: A function that takes an array and returns a string with the array elements
 *     separated by commas.
 *   - asyncDelay: A function that takes a delay in milliseconds and returns a Promise that resolves after the
 *     specified delay.
 *   - downloadString: A function that takes a string and a filename and initiates a download of the string with
 *     the specified filename.
 *   - internationalCurrencyConvert: A function that takes a number and an optional currency code and returns the
 *     converted value in the specified currency.
 *   - isEmptyObject: A function that takes an object and returns true if the object is empty, false otherwise.
 *   - isValidEmail: A function that takes an email address and returns true if the email address is valid, false
 *     otherwise.
 *   - numberFormatWithCommas: A function that takes a number and returns a string representation of the number
 *     with commas as thousands separators.
 *   - randomColor: A function that returns a random hex color code.
 *   - transformString: A function that takes a string and a transform function and returns the transformed string.
 *   - truncateStringEnd: A function that takes a string and a maximum length and returns the truncated string with
 *     "..." appended at the end if the string is longer than the maximum length.
 *   - truncateStringMiddle: A function that takes a string, a maximum length, and an optional ellipsis string and
 *     returns the truncated string with the ellipsis in the middle if the string is longer than the maximum length.
 *   - unixToDateTime: A function that takes a Unix timestamp and returns a formatted date and time string.
 *   - waitSomeMoment: A function that takes a delay in milliseconds and returns a Promise that resolves after the
 *     specified delay.
 */
function useLibrary() {
  return {
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
}

export default useLibrary;
