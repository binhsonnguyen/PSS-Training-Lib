import {expect, test} from "@jest/globals";
import {HpBreakPoint} from "./HpBreakPoint";

test('test first hp breakpoint', () => {
    expect(HpBreakPoint.withBase(1).getValue()).toBe(50)
    expect(HpBreakPoint.withBase(2).getValue()).toBe(25)
    expect(HpBreakPoint.withBase(3).getValue()).toBe(17)
    expect(HpBreakPoint.withBase(4).getValue()).toBe(13)
    expect(HpBreakPoint.withBase(5).getValue()).toBe(10)
    expect(HpBreakPoint.withBase(6).getValue()).toBe(9)
    expect(HpBreakPoint.withBase(7).getValue()).toBe(8)
    expect(HpBreakPoint.withBase(8).getValue()).toBe(7)
    expect(HpBreakPoint.withBase(9).getValue()).toBe(6)
    expect(HpBreakPoint.withBase(10).getValue()).toBe(5)
    expect(HpBreakPoint.withBase(11).getValue()).toBe(5)
    expect(HpBreakPoint.withBase(12).getValue()).toBe(5)
    expect(HpBreakPoint.withBase(13).getValue()).toBe(4)
    expect(HpBreakPoint.withBase(14).getValue()).toBe(4)
});

test('test continuos hp breakpoint', () => {
    expect(HpBreakPoint.withBase(10).getValue()).toBe(5)
    expect(HpBreakPoint.withBase(10).withAdditionHp(1).getValue()).toBe(5)
    expect(HpBreakPoint.withBase(10).withAdditionHp(2).getValue()).toBe(15)

    expect(HpBreakPoint.withBase(13).withAdditionHp(1).getValue()).toBe(4)
    expect(HpBreakPoint.withBase(13).withAdditionHp(2).getValue()).toBe(12)
    expect(HpBreakPoint.withBase(13).withAdditionHp(3).getValue()).toBe(20)
    expect(HpBreakPoint.withBase(13).withAdditionHp(14).getValue()).toBe(104)
});