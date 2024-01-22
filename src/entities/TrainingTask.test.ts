import {describe, expect, test} from '@jest/globals';
import TrainingTask from "./TrainingTask";
import Stat from "./Stat";
import Training from "./Training";
import StatsSet from "./StatsSet";

test('test Crew Training Task', () => {
    const task = TrainingTask.WPN_TRAINING_3
    expect(task.name).toBe("Weapons PHD")
    expect(task.quality.name).toBe("Training 3")
    expect(task.statsEffective.get(Stat.HP)).toBe(0)
    expect(task.statsEffective.get(Stat.ENG)).toBe(1)
    expect(task.statsEffective.get(Stat.RPR)).toBe(2)
    expect(task.statsEffective.get(Stat.WPN)).toBe(12)

});

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