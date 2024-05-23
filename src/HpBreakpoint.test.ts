import {expect, test} from "@jest/globals";
import {HpBreakPoint} from "./HpBreakPoint";
import Guaranteed from "./Guaranteed";
import TrainingQuality from "./TrainingQuality";

test('test Crew Training Task', () => {
    const base = 10
    const bpCal = new HpBreakPoint(10)
    expect(bpCal.getValue()).toBe(5)
});