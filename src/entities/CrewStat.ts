import Stat from "./Stat";

export default class CrewStat {

    static HP(value: number = 0) {
        return new CrewStat(Stat.HP, value)
    }
    static ATK(value: number = 0) {
        return new CrewStat(Stat.ATK, value)
    }
    static RPR(value: number = 0) {
        return new CrewStat(Stat.RPR, value)
    }
    static ABL(value: number = 0) {
        return new CrewStat(Stat.ABL, value)
    }
    static STA(value: number = 0) {
        return new CrewStat(Stat.STA, value)
    }
    static PLT(value: number = 0) {
        return new CrewStat(Stat.PLT, value)
    }
    static SCI(value: number = 0) {
        return new CrewStat(Stat.SCI, value)
    }
    static ENG(value: number = 0) {
        return new CrewStat(Stat.ENG, value)
    }
    static WPN(value: number = 0) {
        return new CrewStat(Stat.WPN, value)
    }

    private _stat: Stat;
    private _value: number;

    private constructor(stat: Stat, value: number) {
        this._stat = stat;
        this._value = value;
    }
    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    increase(amount: number) {
        this.value += amount
    }

    get stat(): Stat {
        return this._stat;
    }
}