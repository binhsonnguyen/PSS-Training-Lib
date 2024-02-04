import {expect, test} from "@jest/globals";
import TrainingTask from "./TrainingQuality";
import TrainingQuality from "./TrainingQuality";

test('test training quality has it name', () => {
    const task = TrainingQuality.TRAINING_3
    expect(task.name).toBe("Training 3")
});
test('test training quality could always effectiveness', () => {
    const hero = TrainingQuality.HERO
    expect(hero.alwaysGainingStat()).toBeTruthy()
});