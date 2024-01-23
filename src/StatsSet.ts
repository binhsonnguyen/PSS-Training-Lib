import Stat from "./Stat";

export default class StatsSet {
    private _stats = new Map<Stat, number>();

    constructor(hp: number = 0, atk: number = 0, rpr: number = 0, abl: number = 0, sta: number = 0, plt: number = 0, sci: number = 0, eng: number = 0, wpn: number = 0,) {
        this._stats.set(Stat.HP, hp);
        this._stats.set(Stat.ATK, atk);
        this._stats.set(Stat.RPR, rpr);
        this._stats.set(Stat.ABL, abl);
        this._stats.set(Stat.STA, sta);
        this._stats.set(Stat.PLT, plt);
        this._stats.set(Stat.SCI, sci);
        this._stats.set(Stat.ENG, eng);
        this._stats.set(Stat.WPN, wpn);
    }

    get hp() {
        return this.get(Stat.HP)
    }

    set hp(value: number) {
        this.set(Stat.HP, value)
    }

    get atk() {
        return this.get(Stat.ATK)
    }

    set atk(value: number) {
        this.set(Stat.ATK, value)
    }

    get rpr() {
        return this.get(Stat.RPR)
    }

    set rpr(value: number) {
        this.set(Stat.RPR, value)
    }

    get abl() {
        return this.get(Stat.ABL)
    }

    set abl(value: number) {
        this.set(Stat.ABL, value)
    }

    get sta() {
        return this.get(Stat.STA)
    }

    set sta(value: number) {
        this.set(Stat.STA, value)
    }

    get plt() {
        return this.get(Stat.PLT)
    }

    set plt(value: number) {
        this.set(Stat.PLT, value)
    }

    get sci() {
        return this.get(Stat.SCI)
    }

    set sci(value: number) {
        this.set(Stat.SCI, value)
    }

    get eng() {
        return this.get(Stat.ENG)
    }

    set eng(value: number) {
        this.set(Stat.ENG, value)
    }

    get wpn() {
        return this.get(Stat.WPN)
    }

    set wpn(value: number) {
        this.set(Stat.WPN, value)
    }

    get(stat: Stat): number {
        return <number>this._stats.get(stat)
    }

    set(stat: Stat, value: number) {
        this._stats.set(stat, value)
    }

    withHp(value: number): StatsSet {
        this._stats.set(Stat.HP, value)
        return this
    }

    withAtk(value: number): StatsSet {
        this._stats.set(Stat.ATK, value)
        return this
    }

    withRpr(value: number): StatsSet {
        this._stats.set(Stat.RPR, value)
        return this
    }

    withAbl(value: number): StatsSet {
        this._stats.set(Stat.ABL, value)
        return this
    }

    withSta(value: number): StatsSet {
        this._stats.set(Stat.STA, value)
        return this
    }

    withPlt(value: number): StatsSet {
        this._stats.set(Stat.PLT, value)
        return this
    }

    withSci(value: number): StatsSet {
        this._stats.set(Stat.SCI, value)
        return this
    }

    withEng(value: number): StatsSet {
        this._stats.set(Stat.ENG, value)
        return this
    }

    withWpn(value: number): StatsSet {
        this._stats.set(Stat.WPN, value)
        return this
    }

    total() {
        let total = 0
        this._stats.forEach(value => total += value);
        return total
    }
}