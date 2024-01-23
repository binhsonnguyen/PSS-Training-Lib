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
        ).requiredStatEffect(Stat.HP)
    ).toBe(1)
    expect(
        new Training(
            110,
            0,
            TrainingTask.HP_COMMON,
            new StatsSet().withHp(5).withSta(3).withWpn(33)
        ).requiredStatEffect(Stat.HP)
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

    let training100 = new Training(
        110,
        100,
        TrainingTask.HP_LEGENDARY,
        new StatsSet()
    )
    expect(training100.maximumPossibleImprovement(Stat.HP)).toBe(4)
    expect(training100.maximumPossibleImprovement(Stat.ATK)).toBe(0)
    expect(training100.maximumPossibleImprovement(Stat.ABL)).toBe(0)
    expect(training100.maximumPossibleImprovement(Stat.PLT)).toBe(0)

    let training001 = new Training(
        110,
        1,
        TrainingTask.HP_SPECIAL,
        new StatsSet()
    )
    expect(training001.maximumPossibleImprovement(Stat.HP)).toBe(50)
    expect(training001.maximumPossibleImprovement(Stat.ATK)).toBe(8)
    expect(training001.maximumPossibleImprovement(Stat.ABL)).toBe(1)
    expect(training001.maximumPossibleImprovement(Stat.STA)).toBe(2)
    expect(training001.maximumPossibleImprovement(Stat.ENG)).toBe(8)
});