import {describe, expect, test} from '@jest/globals';
import CrewStat from "./CrewStat"

test('test Crew Stat', () => {
    const crewHp = CrewStat.HP(3)
    expect(crewHp).not.toBeNull()
    expect(crewHp.value).toBe(3)
    crewHp.increase(2)
    expect(crewHp.value).toBe(5)
});

test('test increase Crew Stat', () => {
    const crewHp = CrewStat.HP(3)
    crewHp.increase(2)
    expect(crewHp.value).toBe(5)
});