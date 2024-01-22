import {expect, test} from "@jest/globals";
import TrainingTask from "./TrainingQuality";
import TrainingQuality from "./TrainingQuality";

test('test Crew Training Task', () => {
    const task = TrainingQuality.TRAINING_3
    expect(task.name).toBe("Training 3")

});