import {name} from "ts-jest/dist/transformers/hoist-jest";
import Stat from "./Stat";

export default class PossibleImprovement {
    set maximumPossible(value: number) {
        this._maximumPossible = value;
    }
    get maximumPossible(): number {
        return this._maximumPossible;
    }

    private _stat: Stat;
    private _minimumPossible: number;
    private _maximumPossible: number;


    private constructor(stat: Stat, minimumPossible: number = 0, maximumPossible: number = 0) {
        this._stat = stat;
        this._minimumPossible = minimumPossible;
        this._maximumPossible = maximumPossible;
    }

    get minimumPossible(): number {
        return this._minimumPossible;
    }

    set minimumPossible(value: number) {
        this._minimumPossible = value;
    }


    get stat(): Stat {
        return this._stat;
    }

    from(value: number): PossibleImprovement {
        this.minimumPossible = value
        return this
    }

    to(value: number): PossibleImprovement {
        this.maximumPossible = value
        return this;
    }

    static HP() {
        return new PossibleImprovement(Stat.HP)
    }

    static ATK() {
        return new PossibleImprovement(Stat.ATK)
    }

    static RPR() {
        return new PossibleImprovement(Stat.RPR)
    }

    static ABL() {
        return new PossibleImprovement(Stat.ABL)
    }

    static STA() {
        return new PossibleImprovement(Stat.STA)
    }

    static PLT() {
        return new PossibleImprovement(Stat.PLT)
    }

    static SCI() {
        return new PossibleImprovement(Stat.SCI)
    }

    static ENG() {
        return new PossibleImprovement(Stat.ENG)
    }

    static WPN() {
        return new PossibleImprovement(Stat.WPN)
    }

}