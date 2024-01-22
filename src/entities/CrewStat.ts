export default class CrewStat {
    private _name: string;
    private _value: number;
    private constructor(name: string, value: number) {
        this._name = name;
        this._value = value;
    }

    static HP(value: number) {
        return new CrewStat("hp", value)
    }
}