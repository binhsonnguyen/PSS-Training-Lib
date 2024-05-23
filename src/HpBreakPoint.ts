import Decimal from "decimal.js";

export class HpBreakPoint {
    private _baseHp: Decimal
    constructor(base: number) {
        this._baseHp = new Decimal(base)
    }

    getValue() {
        let additionTp = new Decimal(0)
        let additionHp: Decimal
        do {
            additionTp.plus(1)
            let multiply = new Decimal(1).plus(additionTp.dividedBy(100))
            additionHp = this._baseHp.mul(multiply)
        } while (additionHp.toNumber() >= 1)
        return additionTp.toNumber()
    }
}