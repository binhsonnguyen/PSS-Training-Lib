import {expect, test} from "@jest/globals";
import {HpBreakPoint} from "./HpBreakPoint";
import Guaranteed from "./Guaranteed";
import TrainingQuality from "./TrainingQuality";

test('test Crew Training Task', () => {
    expect(new HpBreakPoint(10).getValue()).toBe(5)
    expect(new HpBreakPoint(11).getValue()).toBe(5)
    expect(new HpBreakPoint(12).getValue()).toBe(5)
    expect(new HpBreakPoint(13).getValue()).toBe(4)
});