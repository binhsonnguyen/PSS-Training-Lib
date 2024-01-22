import TrainingQuality from "./TrainingQuality";
import StatsSet from "./StatsSet";

export default class TrainingTask {
    private _statsEffective: StatsSet;
    private _quality: TrainingQuality;
    private _name: string

    private constructor(name: string, quality: TrainingQuality, statsEffective: StatsSet) {
        this._name = name;
        this._quality = quality;
        this._statsEffective = statsEffective
    }

    get name(): string {
        return this._name;
    }

    get statsEffective(): StatsSet {
        return this._statsEffective;
    }

    get quality(): TrainingQuality {
        return this._quality;
    }


    static ABL_COMMON = new TrainingTask(
        "Paracetamol",
        TrainingQuality.COMMON,
        new StatsSet(
            1,
            0,
            0,
            2,
            1,
            1,
            0,
            0,
            0,
        ))

    static ABL_ELITE = new TrainingTask(
        "Paracetamol Rapid",
        TrainingQuality.ELITE,
        new StatsSet(
            2,
            0,
            0,
            4,
            1,
            2,
            0,
            0,
            0,
        ))

    static ABL_UNIQUE = new TrainingTask(
        "Ibuprofen",
        TrainingQuality.UNIQUE,
        new StatsSet(
            3,
            0,
            0,
            8,
            3,
            3,
            0,
            0,
            1,
        ))

    static ABL_EPIC = new TrainingTask(
        "Ibuprofen Rapid",
        TrainingQuality.EPIC,
        new StatsSet(
            5,
            0,
            0,
            16,
            3,
            5,
            0,
            0,
            2,
        ))

    static ABL_HERO = new TrainingTask(
        "Ginkgo",
        TrainingQuality.HERO,
        new StatsSet(
            12,
            0,
            0,
            25,
            4,
            12,
            0,
            0,
            3,
        ))

    static ABL_SPECIAL = new TrainingTask(
        "Brain Enhancer",
        TrainingQuality.SPECIAL,
        new StatsSet(
            8,
            0,
            0,
            50,
            3,
            8,
            0,
            0,
            2,
        ))

    static ABL_LEGENDARY = new TrainingTask(
        "Super Brain Enhancer",
        TrainingQuality.LEGENDARY,
        new StatsSet(
            3,
            0,
            0,
            100,
            1,
            3,
            0,
            0,
            1,
        ))

    static ABL_TRAINING_1 = new TrainingTask(
        "Steam Yoga",
        TrainingQuality.TRAINING_1,
        new StatsSet(
            0,
            0,
            0,
            4,
            1,
            0,
            0,
            0,
            0,
        ))

    static ABL_TRAINING_2 = new TrainingTask(
        "Crew vs Wild",
        TrainingQuality.TRAINING_2,
        new StatsSet(
            1,
            1,
            0,
            8,
            1,
            0,
            0,
            0,
            0,
        ))

    static ABL_TRAINING_3 = new TrainingTask(
        "Space Marine",
        TrainingQuality.TRAINING_3,
        new StatsSet(
            1,
            1,
            0,
            12,
            2,
            0,
            0,
            0,
            0,
        ))

    static ATK_COMMON = new TrainingTask(
        "Chicken Skewer",
        TrainingQuality.COMMON,
        new StatsSet(
            0,
            2,
            0,
            1,
            1,
            0,
            0,
            0,
            1,
        ))

    static ATK_ELITE = new TrainingTask(
        "Yakitori",
        TrainingQuality.ELITE,
        new StatsSet(
            0,
            4,
            0,
            2,
            1,
            0,
            0,
            0,
            2,
        ))

    static ATK_UNIQUE = new TrainingTask(
        "Double Yakitori",
        TrainingQuality.UNIQUE,
        new StatsSet(
            1,
            8,
            0,
            3,
            3,
            0,
            0,
            0,
            3,
        ))

    static ATK_EPIC = new TrainingTask(
        "Shish Kebabs",
        TrainingQuality.EPIC,
        new StatsSet(
            2,
            16,
            0,
            5,
            3,
            0,
            0,
            0,
            5,
        ))

    static ATK_HERO = new TrainingTask(
        "Drumsticks",
        TrainingQuality.HERO,
        new StatsSet(
            3,
            25,
            0,
            12,
            4,
            0,
            0,
            0,
            12,
        ))

    static ATK_SPECIAL = new TrainingTask(
        "Steak",
        TrainingQuality.SPECIAL,
        new StatsSet(
            2,
            50,
            0,
            8,
            3,
            0,
            0,
            0,
            8,
        ))

    static ATK_LEGENDARY = new TrainingTask(
        "Roast Turkey",
        TrainingQuality.LEGENDARY,
        new StatsSet(
            1,
            100,
            0,
            3,
            1,
            0,
            0,
            0,
            3,
        ))

    static ATK_TRAINING_1 = new TrainingTask(
        "Kickbox",
        TrainingQuality.TRAINING_1,
        new StatsSet(
            0,
            4,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
        ))

    static ATK_TRAINING_2 = new TrainingTask(
        "BJJ",
        TrainingQuality.TRAINING_2,
        new StatsSet(
            1,
            8,
            0,
            1,
            1,
            0,
            0,
            0,
            0,
        ))

    static ATK_TRAINING_3 = new TrainingTask(
        "Shaolin Tradition",
        TrainingQuality.TRAINING_3,
        new StatsSet(
            1,
            12,
            0,
            1,
            2,
            0,
            0,
            0,
            0,
        ))

    static ENG_COMMON = new TrainingTask(
        "Standard Engineering Tool Kit",
        TrainingQuality.COMMON,
        new StatsSet(
            0,
            0,
            1,
            0,
            1,
            0,
            1,
            2,
            0,
        ))

    static ENG_ELITE = new TrainingTask(
        "Obsolete Engineering Toolkit",
        TrainingQuality.ELITE,
        new StatsSet(
            0,
            0,
            2,
            0,
            1,
            0,
            2,
            4,
            0,
        ))

    static ENG_UNIQUE = new TrainingTask(
        "Starter Engineering Tool Kit ",
        TrainingQuality.UNIQUE,
        new StatsSet(
            0,
            0,
            3,
            0,
            3,
            1,
            3,
            8,
            0,
        ))

    static ENG_EPIC = new TrainingTask(
        "Advanced Engineering Tool Kit",
        TrainingQuality.EPIC,
        new StatsSet(
            0,
            0,
            5,
            0,
            3,
            2,
            5,
            16,
            0,
        ))

    static ENG_HERO = new TrainingTask(
        "Rare Engineering Tool Kit",
        TrainingQuality.HERO,
        new StatsSet(
            0,
            0,
            12,
            0,
            4,
            3,
            12,
            25,
            0,
        ))

    static ENG_SPECIAL = new TrainingTask(
        "Prototype Engineering Tool Kit",
        TrainingQuality.SPECIAL,
        new StatsSet(
            0,
            0,
            8,
            0,
            3,
            2,
            8,
            50,
            0,
        ))

    static ENG_LEGENDARY = new TrainingTask(
        "Alien Engineering Tool Kit",
        TrainingQuality.LEGENDARY,
        new StatsSet(
            0,
            0,
            3,
            0,
            1,
            1,
            3,
            100,
            0,
        ))

    static ENG_TRAINING_1 = new TrainingTask(
        "Study Expert Engineering Manual",
        TrainingQuality.TRAINING_1,
        new StatsSet(
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            4,
            0,
        ))

    static ENG_TRAINING_2 = new TrainingTask(
        "Engineering Summit",
        TrainingQuality.TRAINING_2,
        new StatsSet(
            0,
            0,
            1,
            0,
            0,
            1,
            1,
            8,
            0,
        ))

    static ENG_TRAINING_3 = new TrainingTask(
        "Engineering PHD",
        TrainingQuality.TRAINING_3,
        new StatsSet(
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            12,
            1,
        ))

    static HP_COMMON = new TrainingTask(
        "Small Protein Shake",
        TrainingQuality.COMMON,
        new StatsSet(
            2,
            1,
            0,
            0,
            1,
            0,
            0,
            1,
            0,
        ))

    static HP_ELITE = new TrainingTask(
        "Regular Protein Shake",
        TrainingQuality.ELITE,
        new StatsSet(
            4,
            2,
            0,
            0,
            1,
            0,
            0,
            2,
            0,
        ))

    static HP_UNIQUE = new TrainingTask(
        "Large Protein Shake",
        TrainingQuality.UNIQUE,
        new StatsSet(
            8,
            3,
            0,
            1,
            3,
            0,
            0,
            3,
            0,
        ))

    static HP_EPIC = new TrainingTask(
        "Super Protein Shake",
        TrainingQuality.EPIC,
        new StatsSet(
            16,
            5,
            0,
            2,
            3,
            0,
            0,
            5,
            0,
        ))

    static HP_HERO = new TrainingTask(
        "HGH",
        TrainingQuality.HERO,
        new StatsSet(
            25,
            12,
            0,
            3,
            4,
            0,
            0,
            12,
            0,
        ))

    static HP_SPECIAL = new TrainingTask(
        "Enhanced HGH",
        TrainingQuality.SPECIAL,
        new StatsSet(
            50,
            8,
            0,
            2,
            3,
            0,
            0,
            8,
            0,
        ))

    static HP_LEGENDARY = new TrainingTask(
        "Prototype HGH",
        TrainingQuality.LEGENDARY,
        new StatsSet(
            100,
            3,
            0,
            1,
            1,
            0,
            0,
            3,
            0,
        ))

    static HP_TRAINING_1 = new TrainingTask(
        "Bench Press",
        TrainingQuality.TRAINING_1,
        new StatsSet(
            4,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
        ))

    static HP_TRAINING_2 = new TrainingTask(
        "Muscle Beach",
        TrainingQuality.TRAINING_2,
        new StatsSet(
            8,
            1,
            0,
            1,
            1,
            0,
            0,
            0,
            0,
        ))

    static HP_TRAINING_3 = new TrainingTask(
        "Olympic Weightlifting",
        TrainingQuality.TRAINING_3,
        new StatsSet(
            12,
            1,
            0,
            1,
            2,
            0,
            0,
            0,
            0,
        ))

    static PLT_COMMON = new TrainingTask(
        "Street Map",
        TrainingQuality.COMMON,
        new StatsSet(
            0,
            0,
            0,
            0,
            1,
            2,
            0,
            1,
            1,
        ))

    static PLT_ELITE = new TrainingTask(
        "Travel Map",
        TrainingQuality.ELITE,
        new StatsSet(
            0,
            0,
            0,
            0,
            1,
            4,
            0,
            2,
            2,
        ))

    static PLT_UNIQUE = new TrainingTask(
        "World Map",
        TrainingQuality.UNIQUE,
        new StatsSet(
            0,
            1,
            0,
            0,
            3,
            8,
            0,
            3,
            3,
        ))

    static PLT_EPIC = new TrainingTask(
        "Global Map",
        TrainingQuality.EPIC,
        new StatsSet(
            0,
            2,
            0,
            0,
            3,
            16,
            0,
            5,
            5,
        ))

    static PLT_HERO = new TrainingTask(
        "System Map",
        TrainingQuality.HERO,
        new StatsSet(
            0,
            3,
            0,
            0,
            4,
            25,
            0,
            12,
            12,
        ))

    static PLT_SPECIAL = new TrainingTask(
        "Star Map",
        TrainingQuality.SPECIAL,
        new StatsSet(
            0,
            2,
            0,
            0,
            3,
            50,
            0,
            8,
            8,
        ))

    static PLT_LEGENDARY = new TrainingTask(
        "Galactic Navigation Map",
        TrainingQuality.LEGENDARY,
        new StatsSet(
            0,
            1,
            0,
            0,
            1,
            100,
            0,
            3,
            3,
        ))

    static PLT_TRAINING_1 = new TrainingTask(
        "Read Expert Pilot Handbook",
        TrainingQuality.TRAINING_1,
        new StatsSet(
            0,
            0,
            0,
            0,
            0,
            4,
            0,
            0,
            1,
        ))

    static PLT_TRAINING_2 = new TrainingTask(
        "Pilot Summit",
        TrainingQuality.TRAINING_2,
        new StatsSet(
            0,
            0,
            1,
            0,
            0,
            8,
            0,
            1,
            1,
        ))

    static PLT_TRAINING_3 = new TrainingTask(
        "Pilot Expert",
        TrainingQuality.TRAINING_3,
        new StatsSet(
            0,
            0,
            1,
            0,
            0,
            12,
            0,
            0,
            2,
        ))

    static RPR_COMMON = new TrainingTask(
        "Repair Guide",
        TrainingQuality.COMMON,
        new StatsSet(
            0,
            0,
            2,
            0,
            1,
            0,
            1,
            1,
            0,
        ))

    static RPR_ELITE = new TrainingTask(
        "New Repair Guide",
        TrainingQuality.ELITE,
        new StatsSet(
            0,
            0,
            4,
            0,
            1,
            0,
            2,
            2,
            0,
        ))

    static RPR_UNIQUE = new TrainingTask(
        "Advanced Repair Guide",
        TrainingQuality.UNIQUE,
        new StatsSet(
            0,
            0,
            8,
            1,
            3,
            0,
            3,
            3,
            0,
        ))

    static RPR_EPIC = new TrainingTask(
        "Epic Repair Guide",
        TrainingQuality.EPIC,
        new StatsSet(
            0,
            0,
            16,
            2,
            3,
            0,
            5,
            5,
            0,
        ))

    static RPR_HERO = new TrainingTask(
        "Lost Repair Guide",
        TrainingQuality.HERO,
        new StatsSet(
            0,
            0,
            25,
            3,
            4,
            0,
            12,
            12,
            0,
        ))

    static RPR_SPECIAL = new TrainingTask(
        "Special Repair Guide",
        TrainingQuality.SPECIAL,
        new StatsSet(
            0,
            0,
            50,
            2,
            3,
            0,
            8,
            8,
            0,
        ))

    static RPR_LEGENDARY = new TrainingTask(
        "Legendary Repair Guide",
        TrainingQuality.LEGENDARY,
        new StatsSet(
            0,
            0,
            100,
            1,
            1,
            0,
            3,
            3,
            0,
        ))

    static SCI_COMMON = new TrainingTask(
        "Drop of Brain Juice",
        TrainingQuality.COMMON,
        new StatsSet(
            0,
            0,
            1,
            1,
            1,
            0,
            2,
            0,
            0,
        ))

    static SCI_ELITE = new TrainingTask(
        "Sliver of Brain Juice",
        TrainingQuality.ELITE,
        new StatsSet(
            0,
            0,
            2,
            2,
            1,
            0,
            4,
            0,
            0,
        ))

    static SCI_UNIQUE = new TrainingTask(
        "Brew of Brain Juice",
        TrainingQuality.UNIQUE,
        new StatsSet(
            0,
            0,
            3,
            3,
            3,
            0,
            8,
            0,
            1,
        ))

    static SCI_EPIC = new TrainingTask(
        "Tincture of Brain Juice",
        TrainingQuality.EPIC,
        new StatsSet(
            0,
            0,
            5,
            5,
            3,
            0,
            16,
            0,
            2,
        ))

    static SCI_HERO = new TrainingTask(
        "Solution of Brain Juice",
        TrainingQuality.HERO,
        new StatsSet(
            0,
            0,
            12,
            12,
            4,
            0,
            25,
            0,
            3,
        ))

    static SCI_SPECIAL = new TrainingTask(
        "Concentration of Brain Juice",
        TrainingQuality.SPECIAL,
        new StatsSet(
            0,
            0,
            8,
            8,
            3,
            0,
            50,
            0,
            2,
        ))

    static SCI_LEGENDARY = new TrainingTask(
        "Elixir of Brain Juice",
        TrainingQuality.LEGENDARY,
        new StatsSet(
            0,
            0,
            3,
            3,
            1,
            0,
            100,
            0,
            1,
        ))

    static SCI_TRAINING_1 = new TrainingTask(
        "Big Book of Science",
        TrainingQuality.TRAINING_1,
        new StatsSet(
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            1,
            0,
        ))

    static SCI_TRAINING_2 = new TrainingTask(
        "Scientific Summit",
        TrainingQuality.TRAINING_2,
        new StatsSet(
            0,
            0,
            1,
            0,
            0,
            0,
            8,
            1,
            1,
        ))

    static SCI_TRAINING_3 = new TrainingTask(
        "Science PHD",
        TrainingQuality.TRAINING_3,
        new StatsSet(
            0,
            0,
            0,
            0,
            0,
            0,
            12,
            2,
            1,
        ))

    static STA_COMMON = new TrainingTask(
        "Small Cola",
        TrainingQuality.COMMON,
        new StatsSet(
            1,
            1,
            1,
            1,
            8,
            1,
            1,
            1,
            1,
        ))

    static STA_ELITE = new TrainingTask(
        "Large Cola",
        TrainingQuality.ELITE,
        new StatsSet(
            1,
            1,
            1,
            1,
            12,
            1,
            1,
            1,
            1,
        ))

    static STA_UNIQUE = new TrainingTask(
        "Mountain Brew",
        TrainingQuality.UNIQUE,
        new StatsSet(
            2,
            2,
            2,
            2,
            16,
            2,
            2,
            2,
            2,
        ))

    static STA_EPIC = new TrainingTask(
        "Pink Cow",
        TrainingQuality.EPIC,
        new StatsSet(
            3,
            3,
            3,
            3,
            24,
            3,
            3,
            3,
            3,
        ))

    static STA_HERO = new TrainingTask(
        "Large Pink Cow",
        TrainingQuality.HERO,
        new StatsSet(
            4,
            4,
            4,
            4,
            32,
            4,
            4,
            4,
            4,
        ))

    static STA_SPECIAL = new TrainingTask(
        "U",
        TrainingQuality.SPECIAL,
        new StatsSet(
            3,
            3,
            3,
            3,
            64,
            3,
            3,
            3,
            3,
        ))

    static STA_LEGENDARY = new TrainingTask(
        "Father",
        TrainingQuality.LEGENDARY,
        new StatsSet(
            2,
            2,
            2,
            2,
            110,
            2,
            2,
            2,
            2,
        ))

    static STA_TRAINING_1 = new TrainingTask(
        "Weighted Run",
        TrainingQuality.TRAINING_1,
        new StatsSet(
            0,
            0,
            0,
            0,
            5,
            0,
            0,
            0,
            0,
        ))

    static STA_TRAINING_2 = new TrainingTask(
        "Hardcore Aerobics",
        TrainingQuality.TRAINING_2,
        new StatsSet(
            2,
            2,
            0,
            2,
            8,
            0,
            0,
            0,
            0,
        ))

    static STA_TRAINING_3 = new TrainingTask(
        "Everest Climb",
        TrainingQuality.TRAINING_3,
        new StatsSet(
            3,
            3,
            0,
            3,
            16,
            0,
            0,
            0,
            0,
        ))

    static WPN_COMMON = new TrainingTask(
        "Military Recruit Handbook",
        TrainingQuality.COMMON,
        new StatsSet(
            0,
            1,
            0,
            0,
            1,
            1,
            0,
            0,
            2,
        ))

    static WPN_ELITE = new TrainingTask(
        "Standard Combat Manual",
        TrainingQuality.ELITE,
        new StatsSet(
            0,
            2,
            0,
            0,
            1,
            2,
            0,
            0,
            4,
        ))

    static WPN_UNIQUE = new TrainingTask(
        "Galetrooper Training Manual",
        TrainingQuality.UNIQUE,
        new StatsSet(
            0,
            3,
            0,
            0,
            3,
            3,
            1,
            0,
            8,
        ))

    static WPN_EPIC = new TrainingTask(
        "Advanced Combat Manual",
        TrainingQuality.EPIC,
        new StatsSet(
            0,
            5,
            0,
            0,
            3,
            5,
            2,
            0,
            16,
        ))

    static WPN_HERO = new TrainingTask(
        "Veteran’s Guidebook",
        TrainingQuality.HERO,
        new StatsSet(
            0,
            12,
            0,
            0,
            4,
            12,
            3,
            0,
            25,
        ))

    static WPN_SPECIAL = new TrainingTask(
        "How To Shoot Your Shot'",
        TrainingQuality.SPECIAL,
        new StatsSet(
            0,
            8,
            0,
            0,
            3,
            8,
            2,
            0,
            50,
        ))

    static WPN_LEGENDARY = new TrainingTask(
        "Sharpshooter’s Cheatbook",
        TrainingQuality.LEGENDARY,
        new StatsSet(
            0,
            3,
            0,
            0,
            1,
            3,
            1,
            0,
            100,
        ))

    static WPN_TRAINING_1 = new TrainingTask(
        "Read Expert Weapon Theory",
        TrainingQuality.TRAINING_1,
        new StatsSet(
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            4,
        ))

    static WPN_TRAINING_2 = new TrainingTask(
        "Weapons Summit",
        TrainingQuality.TRAINING_2,
        new StatsSet(
            0,
            0,
            1,
            0,
            0,
            1,
            1,
            0,
            8,
        ))

    static WPN_TRAINING_3 = new TrainingTask(
        "Weapons PHD",
        TrainingQuality.TRAINING_3,
        new StatsSet(
            0,
            0,
            2,
            0,
            0,
            0,
            0,
            1,
            12,
        ))

}
