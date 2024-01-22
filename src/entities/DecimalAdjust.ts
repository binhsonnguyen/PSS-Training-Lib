export default class DecimalAdjust {
    private static adjust(type: any, value: number, exp: number): number {
        type = String(type);
        if (!["round", "floor", "ceil"].includes(type)) {
            throw new TypeError(
                "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'.",
            );
        }
        exp = Number(exp);
        value = Number(value);
        if (exp % 1 !== 0 || Number.isNaN(value)) {
            return NaN;
        } else if (exp === 0) {
            // @ts-ignore
            return Math[type](value);
        }
        const [magnitude, exponent = 0] = value.toString().split("e");
        // @ts-ignore
        const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
        // Shift back
        const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
        return Number(`${newMagnitude}e${+newExponent + exp}`);
    }

    static round(value: number, exp: number) {
        return DecimalAdjust.adjust("round", value, exp)
    }
    static floor(value: number, exp: number) {
        return DecimalAdjust.adjust("floor", value, exp)
    }
    static ceil(value: number, exp: number) {
        return DecimalAdjust.adjust("ceil", value, exp)
    }
}