import Stat from "./Stat";

export default class StatsSet {
    private _stats = new Map<Stat, number>();

    constructor(
        hp: number = 0,
        atk: number = 0,
        rpr: number = 0,
        abl: number = 0,
        sta: number = 0,
        plt: number = 0,
        sci: number = 0,
        eng: number = 0,
        wpn: number = 0,
    ) {
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