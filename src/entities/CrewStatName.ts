import {name} from "ts-jest/dist/transformers/hoist-jest";

export default class CrewStatName {
    toString(): string {
        return this._value;
    }
    private _value: string;
    constructor(value: string) {
        this._value = value;

    }

    static HP = new CrewStatName("HP")
    static ATK = new CrewStatName("ATK")
    static RPR = new CrewStatName("RPR")
    static ABL = new CrewStatName("ABL")
    static STA = new CrewStatName("STA")
    static PLT = new CrewStatName("PLT")
    static SCI = new CrewStatName("SCI")
    static ENG = new CrewStatName("ENG")
    static WPN = new CrewStatName("WPN")
}