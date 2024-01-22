import {name} from "ts-jest/dist/transformers/hoist-jest";

export default class PossibleImprovement {
    set maximumPossible(value: number) {
        this._maximumPossible = value;
    }
    get maximumPossible(): number {
        return this._maximumPossible;
    }

    get possible(): boolean {
        return this._maximumPossible > 0;
    }

    private _name: string;
    private _minimumPossible: number;
    private _maximumPossible: number;


    private constructor(name: string, minimumPossible: number = 0, maximumPossible: number = 0) {
        this._name = name;
        this._minimumPossible = minimumPossible;
        this._maximumPossible = maximumPossible;
    }

    get minimumPossible(): number {
        return this._minimumPossible;
    }

    set minimumPossible(value: number) {
        this._minimumPossible = value;
    }


    get name(): string {
        return this._name;
    }

    from(value: number): PossibleImprovement {
        this.minimumPossible = value
        return this
    }

    to(value: number): PossibleImprovement {
        this.maximumPossible = value
        return this;
    }

    static HP(value: number = 0) {
        return new PossibleImprovement("HP")
    }

    static ATK(value: number = 0) {
        return new PossibleImprovement("ATK")
    }

    static RPR(value: number = 0) {
        return new PossibleImprovement("RPR")
    }

    static ABL(value: number = 0) {
        return new PossibleImprovement("ABL")
    }

    static STA(value: number = 0) {
        return new PossibleImprovement("STA")
    }

    static PLT(value: number = 0) {
        return new PossibleImprovement("PLT")
    }

    static SCI(value: number = 0) {
        return new PossibleImprovement("SCI")
    }

    static ENG(value: number = 0) {
        return new PossibleImprovement("ENG")
    }

    static WPN(value: number = 0) {
        return new PossibleImprovement("WPN")
    }

}