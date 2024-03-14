import StatsSet from "./StatsSet";
import TrainingTask from "./TrainingTask";
import Stat from "./Stat";
import DecimalAdjust from "./DecimalAdjust";
import Guaranteed from "./Guaranteed";
import Decimal from 'decimal.js';

export default class Training {
    constructor(totalTrainingPoint: number, fatigue: number, traingTask: TrainingTask, currentTraining: StatsSet,) {
        this._totalTrainingPoint = totalTrainingPoint;
        this._fatigue = fatigue;
        this._traingTask = traingTask;
        this._currentTraining = currentTraining;
    }

    private _totalTrainingPoint: number;

    get totalTrainingPoint(): number {
        return this._totalTrainingPoint;
    }

    set totalTrainingPoint(value: number) {
        this._totalTrainingPoint = value;
    }

    private _fatigue: number;

    get fatigue(): number {
        return this._fatigue;
    }

    set fatigue(value: number) {
        this._fatigue = value;
    }

    private _traingTask: TrainingTask;

    get traingTask(): TrainingTask {
        return this._traingTask;
    }

    set traingTask(value: TrainingTask) {
        this._traingTask = value;
    }

    private _currentTraining: StatsSet;

    get currentTraining(): StatsSet {
        return this._currentTraining;
    }

    set currentTraining(value: StatsSet) {
        this._currentTraining = value;
    }

    requiredStatEffect(stat: Stat): number {
        let factor1 = new Decimal(1).minus(new Decimal(this.currentTraining.total()).dividedBy(this.totalTrainingPoint));
        let factor2 = new Decimal(1).minus(new Decimal(this.currentTraining.get(stat)).dividedBy(this.totalTrainingPoint));
        let factor3 = new Decimal(this.fatigueMultiplier());
        let factor = new Decimal(1).dividedBy(new Decimal(factor1).mul(factor2).mul(factor3))
        return DecimalAdjust.floor(factor.toNumber(), -4);
    }

    maximumPossibleImprovement(stat: Stat): number {
        if (!(this.traingTask.quality.alwaysGainingStat() && this.traingTask.isMainStat(stat)) && this.requiredStatEffect(stat) > this.traingTask.statsEffective.get(stat)) {
            return 0
        } else if (this.traingTask.isMainStat(stat) && this.fatigue100()) {
            return Guaranteed.forQuality(this.traingTask.quality);
        } else if (this.fatigue1to50() && this.traingTask.trainingEffect(stat) / this.requiredStatEffect(stat) > 1.5) {
            return this.statGainFactor(stat);
        } else {
            const factor = this.statGainFactor(stat);
            const multiplier = this.statGainMultiplier();
            const statGain = this.statGain(stat, factor, multiplier);
            if (this.traingTask.isMainStat(stat) && this.traingTask.quality.alwaysGainingStat()) {
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

    minimumPossibleImprovement(stat: Stat): number {
        if (this.traingTask.isMainStat(stat) && this.traingTask.quality.alwaysGainingStat()) {
            return Guaranteed.forQuality(this.traingTask.quality)
        } else {
            return 0
        }
    }

    private fatigueMultiplier(): Decimal {
        if (this.noFatigue()) {
            return new Decimal(1);
        } else if (this.fatigue1to50()) {
            return new Decimal(1).dividedBy(2);
        } else if (this.fatigue51to99()) {
            return new Decimal(1).dividedBy(3);
        } else {
            return new Decimal(0);
        }
    }

    private statGainFactor(stat: Stat): number {
        const factor1 = this.traingTask.trainingEffect(stat)
        const factor2 = 1 - this.currentTraining.total() / this.totalTrainingPoint
        const factor3 = 1 - this.currentTraining.get(stat) / this.totalTrainingPoint
        return factor1 * factor2 * factor3
    }

    private noFatigue(): boolean {
        return this.fatigue == 0;
    }

    private fatigue1to50(): boolean {
        return 1 <= this.fatigue && this.fatigue <= 50;
    }

    private fatigue51to99(): boolean {
        return 51 <= this.fatigue && this.fatigue <= 99;
    }

    private fatigue100(): boolean {
        return this.fatigue == 100
    }

}