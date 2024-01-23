import {describe, expect, test} from '@jest/globals';
import Stat from "./Stat";

test('test Stat', () => {
    const stat = Stat.HP
    expect(stat.name).toBe("HP")
});
