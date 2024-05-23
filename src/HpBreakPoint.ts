import Decimal from "decimal.js";

export class HpBreakPoint {
    private _baseHp: Decimal
    constructor(base: number) {
        this._baseHp = new Decimal(base)
    }

    getValue() {
        let additionTp = new Decimal(0)
        let additionHp = new Decimal(0)
        let toPassBreakpoint: Decimal = new Decimal(0.5)
        do {
            additionTp = additionTp.plus(1)
            const multiply = additionTp.dividedBy(100)
            additionHp = this._baseHp.mul(multiply)
        } while (additionHp.lessThan(toPassBreakpoint))

        return additionTp.toNumber()
    }
}