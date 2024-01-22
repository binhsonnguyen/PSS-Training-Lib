import {describe, expect, test} from '@jest/globals';
import TrainingTask from "./TrainingTask";
import Stat from "./Stat";

test('test Crew Training Task', () => {
    const task = TrainingTask.WPN_TRAINING_3
    expect(task.name).toBe("Weapons PHD")
    expect(task.quality.name).toBe("Training 3")
    expect(task.statsEffective.get(Stat.HP)).toBe(0)
    expect(task.statsEffective.get(Stat.ENG)).toBe(1)
    expect(task.statsEffective.get(Stat.RPR)).toBe(2)
    expect(task.statsEffective.get(Stat.WPN)).toBe(12)

});