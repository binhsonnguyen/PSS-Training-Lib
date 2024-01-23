export default class TrainingQuality {
    static COMMON: TrainingQuality = new TrainingQuality("Common")
    static ELITE: TrainingQuality = new TrainingQuality("Elite")
    static UNIQUE: TrainingQuality = new TrainingQuality("Unique")
    static EPIC: TrainingQuality = new TrainingQuality("Epic")
    static HERO: TrainingQuality = new TrainingQuality("Hero")
    static SPECIAL: TrainingQuality = new TrainingQuality("Special")
    static LEGENDARY: TrainingQuality = new TrainingQuality("Legendary")
    static TRAINING_1: TrainingQuality = new TrainingQuality("Training 1")
    static TRAINING_2: TrainingQuality = new TrainingQuality("Training 2")
    static TRAINING_3: TrainingQuality = new TrainingQuality("Training 3")
    static ALL: TrainingQuality[] = [TrainingQuality.COMMON, TrainingQuality.ELITE, TrainingQuality.UNIQUE, TrainingQuality.EPIC, TrainingQuality.HERO, TrainingQuality.SPECIAL, TrainingQuality.LEGENDARY, TrainingQuality.TRAINING_1, TrainingQuality.TRAINING_2, TrainingQuality.TRAINING_3]

    private constructor(name: string) {
        this._name = name;
    }

    private _name: string;

    get name(): string {
        return this._name;
    }

    alwaysGainningStat() {
        return this == TrainingQuality.HERO || TrainingQuality.SPECIAL || TrainingQuality.LEGENDARY
    }
}