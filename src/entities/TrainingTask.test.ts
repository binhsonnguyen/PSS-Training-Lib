import {describe, expect, test} from '@jest/globals';
import CrewStat from "./CrewStat"
import CrewStatsSet from "./CrewStatsSet";
import TrainingTask from "./TrainingTask";

test('test Crew Training Task', () => {
    const task = TrainingTask.WPN_TRAINING_3
    expect(task.name).toBe("WPN_TRAINING_3")
    expect(task.quality.name).toBe("Training 3")
    expect(task.statsEffective.hp.value).toBe(0)
    expect(task.statsEffective.eng.value).toBe(1)
    expect(task.statsEffective.rpr.value).toBe(2)
    expect(task.statsEffective.wpn.value).toBe(12)

});