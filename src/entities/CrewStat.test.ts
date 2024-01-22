import {describe, expect, test} from '@jest/globals';
import CrewStat from "./CrewStat"

test('test Crew Stat', () => {
    const crewHp = CrewStat.HP(3)
    expect(crewHp).not.toBeNull()
});