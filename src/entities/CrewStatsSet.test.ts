import {describe, expect, test} from '@jest/globals';
import CrewStatsSet from "./CrewStatsSet";
import Stat from "./Stat";

test('test Crew Stats Set', () => {
    const set = new CrewStatsSet()
        .withHp(3)
    expect(set.get(Stat.HP)).toBe(3)

});