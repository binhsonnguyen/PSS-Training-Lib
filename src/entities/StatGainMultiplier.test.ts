import {expect, test} from "@jest/globals";
import StatGainMultiplier from "./StatGainMultiplier";

test('test Crew Training Task', () => {
    expect(StatGainMultiplier.forFatigue(0)).toBe(1)
    expect(StatGainMultiplier.forFatigue(1)).toBe(0.5)
    expect(StatGainMultiplier.forFatigue(50)).toBe(0.5)
    expect(StatGainMultiplier.forFatigue(51)).toBeCloseTo(0.3333, 0.1)
    expect(StatGainMultiplier.forFatigue(99)).toBeCloseTo(0.3333, 0.1)
    expect(StatGainMultiplier.forFatigue(100)).toBe(0)

});