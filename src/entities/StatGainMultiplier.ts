export default class StatGainMultiplier {
    static forFatigue(fatigue: number): number {
        if (fatigue < 0 || fatigue > 100) {
            throw new Error("not supported fatifue")
        }

        if (fatigue == 0) {
            return 1;
        } else if (fatigue <= 50) {
            return 0.5
        } else if (fatigue <= 99) {
            return 1 / 3;
        } else {
            return 0
        }
    }
};