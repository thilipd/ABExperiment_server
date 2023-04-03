import isJSON from 'validator/lib/isJSON';

/**
 * @description Check if constiable is undefined or not
 * @param {*} str
 */
export const isEmpty = (value) => {
    if (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    ) {
        return true;
    } else {
        return false;
    }
};

/**
 * @description Check if String and doesn't contain space and special chracters
 * @param {String} str
 */
export const isValidString = (str) => {
    const regExp = /^[a-zA-Z]+$/;
    if (typeof str !== 'string') {
        return false;
    } else if (!str.match(regExp)) {
        return false;
    } else {
        return true;
    }
};

/**
 * @description Custom RegEx
 * @param {String} str
 * @param {String} regEx
 */
export const customRegex = (str, regEx) => {
    if (typeof str !== 'string') {
        return false;
    } else if (!regEx.test(str)) {
        return false;
    } else {
        return true;
    }
};

/**
 * @desc Checks for valid email
 * @param {String} value // Accepts string
 */
export const isEmail = (value) => {
    const email = value;
    const myRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = myRegEx.test(email);
    if (isValid) {
        return true;
    } else {
        return false;
    }
};

/**
 * @desc Checks for valid array
 * @param {*} value
 */
export const isArray = (value) => {
    if (typeof value === 'string') {
        const replaced = value.replace(/'/g, '"');
        if (!isJSON(replaced)) {
            return false;
        } else {
            const parsed = JSON.parse(replaced);
            if (parsed.constructor === Array) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        if (value.constructor === Array) {
            return true;
        } else {
            return false;
        }
    }
};

/**
 * @description Is Valid Date
 * @param {*} d
 */
export const isValidDate = (d) => {
    if (Object.prototype.toString.call(d) === '[object Date]') {
        if (isNaN(d.getTime())) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

/**
 * @description Check if valid string
 * @param {String} value
 */
export const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};

/**
 * @desc Checks if given value is Decimal Number
 * @param {*} value // Accepts string
 */
export const isDecimalNumber = (value) => {
    const number = value;
    const myRegEx = /^\d+(\.\d+)?$/;
    const isValid = myRegEx.test(number);
    if (isValid) {
        return true;
    } else {
        return false;
    }
};

/**
 * @desc Checks if given value is Number
 * @param {*} value // Accepts string
 */
export const isNumber = (value) => {
    const number = value;
    const myRegEx = /^(\s*[0-9]+\s*)+$/;
    const isValid = myRegEx.test(number);
    if (isValid) {
        return true;
    } else {
        return false;
    }
};

/**
 * @desc Checks if given value is Boolean
 * @param {*} value // Accepts string
 */
export const isBoolean = (value) => {
    if (typeof value === 'boolean') {
        return true;
    } else {
        return false;
    }
};

/**
 * @desc Checks if given value is Aplha Numeric
 * @param {*} value // Accepts string
 */
export const isAlphaNumeric = (value) => {
    const string = value;
    const myRegEx = /^[a-z0-9 ]+$/i;
    const isValid = myRegEx.test(string);
    if (isValid) {
        return true;
    } else {
        return false;
    }
};

export const isObject = function (objValue) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Object;
};

export const isValidConstant = (obj, value) => {
    if (Object.values(obj).indexOf(value) > -1) {
        return true;
    } else {
        return false;
    }
};

/**
 * @desc Checks if given value is nullish
 * @param {*} value // Accepts string
 */
export const isNullish = (value) => {
    if (typeof value == 'undefined' || value == null) {
        return true;
    } else {
        return false;
    }
};
