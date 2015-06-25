export class TypeHelper
{
    static isNumber(obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj);
    }

    static isDate(obj) {
        return obj instanceof Date && !isNaN(obj.valueOf());
    }

    static isBoolean(obj) {
        return obj === true || obj === false;
    }

    static isFunction(obj) {
        return (typeof(obj) === "function");
    }
}