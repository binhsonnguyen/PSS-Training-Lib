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
    expect(training000.maximumPossibleImprovement(Stat.ENG)).toBe(3)
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

test('test maximum possibility , hero', () => {

    let trainingHero = new Training(
        110,
        0,
        TrainingTask.WPN_HERO,
        new StatsSet().withAbl(37).withWpn(63)
    )
    expect(trainingHero.maximumPossibleImprovement(Stat.WPN)).toBe(1)
});

test('test minimum possibility ', () => {
    let training000 = new Training(
        110,
        0,
        TrainingTask.HP_UNIQUE,
        new StatsSet()
    )
    expect(training000.minimumPossibleImprovement(Stat.HP)).toBe(0)
    expect(training000.minimumPossibleImprovement(Stat.ATK)).toBe(0)
    expect(training000.minimumPossibleImprovement(Stat.ABL)).toBe(0)
    expect(training000.minimumPossibleImprovement(Stat.PLT)).toBe(0)

    let training001 = new Training(
        110,
        0,
        TrainingTask.HP_LEGENDARY,
        new StatsSet()
    )
    expect(training001.minimumPossibleImprovement(Stat.HP)).toBe(4)
    expect(training001.minimumPossibleImprovement(Stat.ATK)).toBe(0)
    expect(training001.minimumPossibleImprovement(Stat.ABL)).toBe(0)
    expect(training001.minimumPossibleImprovement(Stat.PLT)).toBe(0)
});

test('test sta common', () => {
    let training000 = new Training(
        110,
        0,
        TrainingTask.STA_COMMON,
        new StatsSet().withHp(6).withWpn(70)
    )
    training000.currentTraining.set(Stat.STA, 3)
    expect(training000.maximumPossibleImprovement(Stat.STA)).toBe(3)
    training000.currentTraining.set(Stat.STA, 10)
    expect(training000.maximumPossibleImprovement(Stat.STA)).toBe(2)
    training000.currentTraining.set(Stat.STA, 17)
    expect(training000.maximumPossibleImprovement(Stat.STA)).toBe(2)
    training000.currentTraining.set(Stat.STA, 18)
    expect(training000.maximumPossibleImprovement(Stat.STA)).toBe(0)
});

test('test epic cons', () => {
    let training000 = new Training(
        110,
        0,
        TrainingTask.SCI_EPIC,
        new StatsSet().withAbl(71).withSci(17    )
    )
    expect(training000.maximumPossibleImprovement(Stat.SCI)).toBe(2)
    expect(training000.maximumPossibleImprovement(Stat.RPR)).toBe(1)
});