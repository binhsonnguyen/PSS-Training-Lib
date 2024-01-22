import {describe, expect, test} from '@jest/globals';
import CrewStatsSet from "./CrewStatsSet";

test('test Crew Stats Set', () => {
    const set = new CrewStatsSet()
        .withHp(3)
    expect(set.hp.value).toBe(3)

});