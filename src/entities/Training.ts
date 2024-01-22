import StatsSet from "./StatsSet";
import TrainingTask from "./TrainingTask";
import Stat from "./Stat";
import StatGainMultiplier from "./StatGainMultiplier";
import DecimalAdjust from "./DecimalAdjust";

export default class Training {
    get currentTraining(): StatsSet {
        return this._currentTraining;
    }
    get traingTask(): TrainingTask {
        return this._traingTask;
    }
    get fatigue(): number {
        return this._fatigue;
    }

    set fatigue(value: number) {
        this._fatigue = value;
    }
    get totalTrainingPoint(): number {
        return this._totalTrainingPoint;
    }

    set totalTrainingPoint(value: number) {
        this._totalTrainingPoint = value;
    }
    private _totalTrainingPoint: number;
    private _fatigue: number;
    private _traingTask: TrainingTask;
    private _currentTraining: StatsSet;

    constructor(
        totalTrainingPoint: number,
        fatigue: number,
        traingTask: TrainingTask,
        currentTraining: StatsSet,
    ) {
        this._totalTrainingPoint = totalTrainingPoint;
        this._fatigue = fatigue;
        this._traingTask = traingTask;
        this._currentTraining = currentTraining;
    }

    requiredConsumerableFactor(stat: Stat) {
        let factor1 = 1 - this.currentTraining.total() / this.totalTrainingPoint
        let factor2 = 1 - this.currentTraining.get(stat) / this.totalTrainingPoint
        let factor3 = StatGainMultiplier.forFatigue(this.fatigue)
        let factor = 1 / (factor1 * factor2 * factor3)
        return DecimalAdjust.floor(factor, -4)
    }

}