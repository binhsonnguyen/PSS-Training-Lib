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
        if (this.traingTask.isMainStat(stat) && this.fatigue100()) {
            return Guaranteed.forQuality(this.traingTask.quality);
        } else if (this.fatigue1to50() && this.traingTask.trainingEffect(stat) / this.requiredStatEffect(stat) > 1.5) {
            return this.roundByStat(this.statGainFactor(stat), stat).toNumber();
        } else if (this.traingTask.isMainStat(stat) && this.traingTask.quality.alwaysGainingStat()) {
            const factor = this.statGainFactor(stat);
            const statGain = this.roundByStat(this.fatigueMultiplier().mul(factor), stat).toNumber();
            const guaranteed = Guaranteed.forQuality(this.traingTask.quality);
            if (statGain < guaranteed) {
                return guaranteed;
            } else {
                return statGain;
            }
        } else if (this.traingTask.trainingEffect(stat) >= this.requiredStatEffect(stat)) {
            const factor = this.statGainFactor(stat);
            return this.roundByStat(this.fatigueMultiplier().mul(factor), stat).toNumber();
        } else {
            return 0;
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

    private statGainFactor(stat: Stat): Decimal {
        const factor1 = new Decimal(this.traingTask.trainingEffect(stat))
        const factor2 = new Decimal(1).minus(new Decimal(this.currentTraining.total()).dividedBy(this.totalTrainingPoint));
        const factor3 = new Decimal(1).minus(new Decimal(this.currentTraining.get(stat)).dividedBy(this.totalTrainingPoint));
        return new Decimal(factor1).mul(factor2).mul(factor3);
    }

    private roundByStat(gain: Decimal, stat: Stat) {
        if (stat == Stat.STA) {
            return gain.ceil();
        } else {
            return gain.floor();
        }
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