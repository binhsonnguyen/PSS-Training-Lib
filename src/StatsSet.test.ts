import {describe, expect, test} from '@jest/globals';
import StatsSet from "./StatsSet";
import Stat from "./Stat";

test('test Crew Stats Set', () => {
    const set = new StatsSet()
        .withHp(3)
    expect(set.get(Stat.HP)).toBe(3)

});