import CrewStat from "./CrewStat";

export default class CrewStatsSet {
    private _hp: CrewStat;
    private _atk: CrewStat;
    private _rpr: CrewStat;
    private _abl: CrewStat;
    private _sta: CrewStat;
    private _plt: CrewStat;
    private _sci: CrewStat;
    private _eng: CrewStat;
    private _wpn: CrewStat;

    constructor(
        hp: CrewStat = CrewStat.HP(),
        atk: CrewStat = CrewStat.ATK(),
        rpr: CrewStat = CrewStat.RPR(),
        abl: CrewStat = CrewStat.ABL(),
        sta: CrewStat = CrewStat.STA(),
        plt: CrewStat = CrewStat.PLT(),
        sci: CrewStat = CrewStat.SCI(),
        eng: CrewStat = CrewStat.ENG(),
        wpn: CrewStat = CrewStat.WPN(),
    ) {
        this._hp = hp;
        this._atk = atk;
        this._rpr = rpr;
        this._abl = abl;
        this._sta = sta;
        this._plt = plt;
        this._sci = sci;
        this._eng = eng;
        this._wpn = wpn;
    }

    get wpn(): CrewStat {
        return this._wpn;
    }

    set wpn(value: CrewStat) {
        this._wpn = value;
    }
    get eng(): CrewStat {
        return this._eng;
    }

    set eng(value: CrewStat) {
        this._eng = value;
    }
    get sci(): CrewStat {
        return this._sci;
    }

    set sci(value: CrewStat) {
        this._sci = value;
    }
    get plt(): CrewStat {
        return this._plt;
    }

    set plt(value: CrewStat) {
        this._plt = value;
    }
    get sta(): CrewStat {
        return this._sta;
    }

    set sta(value: CrewStat) {
        this._sta = value;
    }
    get abl(): CrewStat {
        return this._abl;
    }

    set abl(value: CrewStat) {
        this._abl = value;
    }
    get rpr(): CrewStat {
        return this._rpr;
    }

    set rpr(value: CrewStat) {
        this._rpr = value;
    }
    get atk(): CrewStat {
        return this._atk;
    }

    set atk(value: CrewStat) {
        this._atk = value;
    }
    get hp(): CrewStat {
        return this._hp;
    }

    set hp(value: CrewStat) {
        this._hp = value;
    }

    withHp(value: number): CrewStatsSet {
        this.hp.value = value
        return this
    }

    withAtk(value: number): CrewStatsSet {
        this.atk.value = value
        return this
    }

    withRpr(value: number): CrewStatsSet {
        this.rpr.value = value
        return this
    }

    withAbl(value: number): CrewStatsSet {
        this.abl.value = value
        return this
    }

    withSta(value: number): CrewStatsSet {
        this.sta.value = value
        return this
    }

    withPlt(value: number): CrewStatsSet {
        this.plt.value = value
        return this
    }

    withSci(value: number): CrewStatsSet {
        this.sci.value = value
        return this
    }

    withEng(value: number): CrewStatsSet {
        this.eng.value = value
        return this
    }

    withWpn(value: number): CrewStatsSet {
        this.wpn.value = value
        return this
    }
}