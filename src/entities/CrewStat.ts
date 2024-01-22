import {name} from "ts-jest/dist/transformers/hoist-jest";

export default class CrewStat {

    static HP(value: number) {
        return new CrewStat("HP", value)
    }
    static ATK(value: number) {
        return new CrewStat("ATK", value)
    }
    static RPR(value: number) {
        return new CrewStat("RPR", value)
    }
    static ABL(value: number) {
        return new CrewStat("ABL", value)
    }
    static STA(value: number) {
        return new CrewStat("STA", value)
    }
    static PLT(value: number) {
        return new CrewStat("PLT", value)
    }
    static SCI(value: number) {
        return new CrewStat("SCI", value)
    }
    static ENG(value: number) {
        return new CrewStat("ENG", value)
    }
    static WPN(value: number) {
        return new CrewStat("WPN", value)
    }

    private _name: string;
    private _value: number;

    private constructor(name: string, value: number) {
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

    get name(): string {
        return this._name;
    }
}