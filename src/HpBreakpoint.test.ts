import {expect, test} from "@jest/globals";
import {HpBreakPoint} from "./HpBreakPoint";

test('test first hp breakpoint', () => {
    expect(HpBreakPoint.base(1).getValue()).toBe(50)
    expect(HpBreakPoint.base(2).getValue()).toBe(25)
    expect(HpBreakPoint.base(3).getValue()).toBe(17)
    expect(HpBreakPoint.base(4).getValue()).toBe(13)
    expect(HpBreakPoint.base(5).getValue()).toBe(10)
    expect(HpBreakPoint.base(6).getValue()).toBe(9)
    expect(HpBreakPoint.base(7).getValue()).toBe(8)
    expect(HpBreakPoint.base(8).getValue()).toBe(7)
    expect(HpBreakPoint.base(9).getValue()).toBe(6)
    expect(HpBreakPoint.base(10).getValue()).toBe(5)
    expect(HpBreakPoint.base(11).getValue()).toBe(5)
    expect(HpBreakPoint.base(12).getValue()).toBe(5)
    expect(HpBreakPoint.base(13).getValue()).toBe(4)
    expect(HpBreakPoint.base(14).getValue()).toBe(4)
});

test('test continuos hp breakpoint', () => {
    expect(HpBreakPoint.base(10).getValue()).toBe(5)
    expect(HpBreakPoint.base(10).additionHp(1).getValue()).toBe(5)
});