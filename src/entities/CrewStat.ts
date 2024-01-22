import {name} from "ts-jest/dist/transformers/hoist-jest";

export default class CrewStat {

    static HP(value: number) {
        return new CrewStat("hp", value)
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