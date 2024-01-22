import {describe, expect, test} from '@jest/globals';
import TrainingTask from "./TrainingTask";
import Stat from "./Stat";
import Training from "./Training";
import StatsSet from "./StatsSet";

test('test Consumerable Required ', () => {
    expect(
        new Training(
            110,
            0,
            TrainingTask.HP_COMMON,
            new StatsSet()
        ).requiredConsumerableFactor(Stat.HP)
    ).toBe(1)
    expect(
        new Training(
            110,
            0,
            TrainingTask.HP_COMMON,
            new StatsSet().withHp(5).withSta(3).withWpn(33)
        ).requiredConsumerableFactor(Stat.HP)
    ).toBe(1.6701)
});

test('test maximum possibility ', () => {
    let training000 = new Training(
        110,
        0,
        TrainingTask.HP_UNIQUE,
        new StatsSet()
    )
    expect(training000.maximumPossibleImprovement(Stat.HP)).toBe(8)
    expect(training000.maximumPossibleImprovement(Stat.ATK)).toBe(3)
    expect(training000.maximumPossibleImprovement(Stat.ABL)).toBe(1)
    expect(training000.maximumPossibleImprovement(Stat.PLT)).toBe(0)
});