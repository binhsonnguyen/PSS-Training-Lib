import StatsSet from "./StatsSet";
import TrainingTask from "./TrainingTask";
import Stat from "./Stat";
import StatGainMultiplier from "./StatGainMultiplier";
import DecimalAdjust from "./DecimalAdjust";
import Guaranteed from "./Guaranteed";

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

    maximumPossibleImprovement(stat: Stat) {
        if (this.traingTask.isMainStat(stat) && this.fatigue100()) {
            return Guaranteed.forQuality(this.traingTask.quality);
        } else if (this.fatigue1to50()
            && this.traingTask.trainingEffect(stat)
            / this.requiredConsumerableFactor(stat)
            > 1.5) {
            return this.statGainFactor(stat)
        } else {
            const factor = this.statGainFactor(stat);
            const multiplier = StatGainMultiplier.forFatigue(this.fatigue);
            const statGain = this.statGain(stat, factor, multiplier);
            if (this.traingTask.isMainStat(stat) && this.traingTask.quality.alwaysGainningStat()) {
                const guaranted = Guaranteed.forQuality(this.traingTask.quality);
                if (statGain < guaranted) {
                    return guaranted;
                } else {
                    return statGain;
                }
            } else {
                return statGain
            }
        }
    }

    statGain(stat: Stat, factor: number, multiplier: number) {
        if (stat == Stat.STA) {
            return DecimalAdjust.ceil(factor * multiplier, 0);
        } else {
            return DecimalAdjust.floor(factor * multiplier, 0);
        }
    }

    private statGainFactor(stat: Stat) {
        const factor1 = this.traingTask.trainingEffect(stat)
        const factor2 = 1 - this.currentTraining.total() / this.totalTrainingPoint
        const factor3 = 1 - this.currentTraining.get(stat) / this.totalTrainingPoint
        return  factor1 * factor2 * factor3
    }

    private noFatigue() {
        return this.fatigue == 0;
    }

    private fatigue1to50() {
        return 1 <= this.fatigue && this.fatigue <= 50;
    }

    private fatigue51to99() {
        return 51 <= this.fatigue && this.fatigue <= 99;
    }

    private fatigue100() {
        return this.fatigue == 100
    }

    private maximumEffectivenessFactor(stat: Stat) {

    }

}