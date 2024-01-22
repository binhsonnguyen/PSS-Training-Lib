import {expect, test} from "@jest/globals";
import PossibleImprovement from "./PossibleImprovement";

test('test Crew Training Task', () => {
    const possibleImprovement = PossibleImprovement.HP().from(3).to(8)
    expect(possibleImprovement.name).toBe("HP")
    expect(possibleImprovement.minimumPossible).toBe(3)
    expect(possibleImprovement.maximumPossible).toBe(8)

});