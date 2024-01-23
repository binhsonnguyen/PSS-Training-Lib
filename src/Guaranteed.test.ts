import {expect, test} from "@jest/globals";
import Guaranteed from "./Guaranteed";
import TrainingQuality from "./TrainingQuality";

test('test Crew Training Task', () => {
    expect(Guaranteed.forQuality(TrainingQuality.HERO)).toBe(1)
    expect(Guaranteed.forQuality(TrainingQuality.SPECIAL)).toBe(2)
    expect(Guaranteed.forQuality(TrainingQuality.LEGENDARY)).toBe(4)
});