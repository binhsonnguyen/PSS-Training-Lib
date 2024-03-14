import TrainingQuality from "./TrainingQuality";

export default class Guaranteed {
    static forQuality(quality: TrainingQuality): number {
        if (quality == TrainingQuality.HERO) {
            return 1
        } else if (quality == TrainingQuality.SPECIAL) {
            return 2
        } else if (quality == TrainingQuality.LEGENDARY) {
            return 4;
        } else {
            return 0;
        }
    }
}