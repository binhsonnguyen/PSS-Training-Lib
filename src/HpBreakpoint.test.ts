import {expect, test} from "@jest/globals";
import {HpBreakPoint} from "./HpBreakPoint";

test('test Crew Training Task', () => {
    expect(new HpBreakPoint(1).getValue()).toBe(50)
    expect(new HpBreakPoint(2).getValue()).toBe(25)
    expect(new HpBreakPoint(3).getValue()).toBe(17)
    expect(new HpBreakPoint(4).getValue()).toBe(13)
    expect(new HpBreakPoint(5).getValue()).toBe(10)
    expect(new HpBreakPoint(6).getValue()).toBe(9)
    expect(new HpBreakPoint(7).getValue()).toBe(8)
    expect(new HpBreakPoint(8).getValue()).toBe(7)
    expect(new HpBreakPoint(9).getValue()).toBe(6)
    expect(new HpBreakPoint(10).getValue()).toBe(5)
    expect(new HpBreakPoint(11).getValue()).toBe(5)
    expect(new HpBreakPoint(12).getValue()).toBe(5)
    expect(new HpBreakPoint(13).getValue()).toBe(4)
    expect(new HpBreakPoint(14).getValue()).toBe(4)
});