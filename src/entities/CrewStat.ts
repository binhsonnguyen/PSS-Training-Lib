import CrewStatName from "./CrewStatName";

export default class CrewStat {

    static HP(value: number = 0) {
        return new CrewStat(CrewStatName.HP, value)
    }
    static ATK(value: number = 0) {
        return new CrewStat(CrewStatName.ATK, value)
    }
    static RPR(value: number = 0) {
        return new CrewStat(CrewStatName.RPR, value)
    }
    static ABL(value: number = 0) {
        return new CrewStat(CrewStatName.ABL, value)
    }
    static STA(value: number = 0) {
        return new CrewStat(CrewStatName.STA, value)
    }
    static PLT(value: number = 0) {
        return new CrewStat(CrewStatName.PLT, value)
    }
    static SCI(value: number = 0) {
        return new CrewStat(CrewStatName.SCI, value)
    }
    static ENG(value: number = 0) {
        return new CrewStat(CrewStatName.ENG, value)
    }
    static WPN(value: number = 0) {
        return new CrewStat(CrewStatName.WPN, value)
    }

    private _name: CrewStatName;
    private _value: number;

    private constructor(name: CrewStatName, value: number) {
        this._name = name;
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

    get name(): CrewStatName {
        return this._name;
    }
}