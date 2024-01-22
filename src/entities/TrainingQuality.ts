export default class TrainingQuality {
    get name(): string {
        return this._name;
    }
    private _name: string;

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

    private constructor(name: string) {
        this._name = name;
    }
}