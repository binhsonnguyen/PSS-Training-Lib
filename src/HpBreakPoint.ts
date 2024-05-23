import Decimal from "decimal.js";

export class HpBreakPoint {
    private _baseHp: Decimal
    private _hpAddition: Decimal
    private constructor(base: number, hpAddition = 0) {
        this._baseHp = new Decimal(base)
        this._hpAddition = new Decimal(hpAddition)
    }

    static base(hp: number) {
        return new HpBreakPoint(hp)
    }

    additionHp(hp: number) {
        return new HpBreakPoint(this._baseHp.toNumber(), hp)
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