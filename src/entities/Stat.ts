import {name} from "ts-jest/dist/transformers/hoist-jest";

export default class Stat {
    get name(): string {
        return this._name;
    }
    private _name: string;
    constructor(name: string) {
        this._name = name;

    }

    static HP = new Stat("HP")
    static ATK = new Stat("ATK")
    static RPR = new Stat("RPR")
    static ABL = new Stat("ABL")
    static STA = new Stat("STA")
    static PLT = new Stat("PLT")
    static SCI = new Stat("SCI")
    static ENG = new Stat("ENG")
    static WPN = new Stat("WPN")
}