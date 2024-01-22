import {describe, expect, test} from '@jest/globals';
import CrewStat from "./CrewStat"
import CrewStatName from "./CrewStatName";

test('test Crew Stat Name', () => {
    const hp = CrewStatName.HP
    expect(hp.toString()).toBe("HP")
});
