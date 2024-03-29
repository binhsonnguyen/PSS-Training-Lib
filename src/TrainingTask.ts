import TrainingQuality from "./TrainingQuality";
import StatsSet from "./StatsSet";
import Stat from "./Stat";

export default class TrainingTask {
    private _statsEffective: StatsSet;
    private _quality: TrainingQuality;
    private _name: string
    private _mainStat: Stat;

    private constructor(name: string, mainStat: Stat, quality: TrainingQuality, statsEffective: StatsSet) {
        this._name = name;
        this._mainStat = mainStat;
        this._quality = quality;
        this._statsEffective = statsEffective
    }

    get name(): string {
        return this._name;
    }

    get mainStat(): Stat {
        return this._mainStat;
    }

    isMainStat(stat: Stat) {
        return stat == this.mainStat;
    }

    get statsEffective(): StatsSet {
        return this._statsEffective;
    }

    trainingEffect(stat: Stat): number {
        return <number>this.statsEffective.get(stat);
    }

    get quality(): TrainingQuality {
        return this._quality;
    }

    static ABL_COMMON = new TrainingTask(
        "Paracetamol",
        Stat.ABL,
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
        Stat.ABL,
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
        Stat.ABL,
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
        Stat.ABL,
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
        Stat.ABL,
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
        Stat.ABL,
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
        Stat.ABL,
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
        Stat.ABL,
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
        Stat.ABL,
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
        Stat.ABL,
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
        Stat.ATK,
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
        Stat.ATK,
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
        Stat.ATK,
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
        Stat.ATK,
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
        Stat.ATK,
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
        Stat.ATK,
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
        Stat.ATK,
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
        Stat.ATK,
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
        Stat.ATK,
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
        Stat.ATK,
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
        Stat.ENG,
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
        Stat.ENG,
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
        Stat.ENG,
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
        Stat.ENG,
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
        Stat.ENG,
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
        Stat.ENG,
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
        Stat.ENG,
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
        Stat.ENG,
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
        Stat.ENG,
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
        Stat.ENG,
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
        Stat.HP,
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
        Stat.HP,
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
        Stat.HP,
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
        Stat.HP,
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
        Stat.HP,
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
        Stat.HP,
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
        Stat.HP,
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
        Stat.HP,
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
        Stat.HP,
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
        Stat.HP,
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
        Stat.PLT,
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
        Stat.PLT,
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
        Stat.PLT,
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
        Stat.PLT,
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
        Stat.PLT,
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
        Stat.PLT,
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
        Stat.PLT,
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
        Stat.PLT,
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
        Stat.PLT,
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
        Stat.PLT,
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
        Stat.RPR,
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
        Stat.RPR,
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
        Stat.RPR,
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
        Stat.RPR,
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
        Stat.RPR,
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
        Stat.RPR,
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
        Stat.RPR,
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
        Stat.SCI,
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
        Stat.SCI,
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
        Stat.SCI,
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
        Stat.SCI,
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
        Stat.SCI,
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
        Stat.SCI,
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
        Stat.SCI,
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
        Stat.SCI,
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
        Stat.SCI,
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
        Stat.SCI,
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
        Stat.STA,
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
        Stat.STA,
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
        Stat.STA,
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
        Stat.STA,
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
        Stat.STA,
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
        Stat.STA,
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
        Stat.STA,
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
        Stat.STA,
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
        Stat.STA,
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
        Stat.STA,
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
        Stat.WPN,
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
        Stat.WPN,
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
        Stat.WPN,
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
        Stat.WPN,
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
        Stat.WPN,
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
        Stat.WPN,
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
        Stat.WPN,
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
        Stat.WPN,
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
        Stat.WPN,
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
        Stat.WPN,
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

    static ALL = [
        TrainingTask.ABL_COMMON,
        TrainingTask.ABL_ELITE,
        TrainingTask.ABL_UNIQUE,
        TrainingTask.ABL_EPIC,
        TrainingTask.ABL_HERO,
        TrainingTask.ABL_SPECIAL,
        TrainingTask.ABL_LEGENDARY,
        TrainingTask.ABL_TRAINING_1,
        TrainingTask.ABL_TRAINING_2,
        TrainingTask.ABL_TRAINING_3,
        TrainingTask.ATK_COMMON,
        TrainingTask.ATK_ELITE,
        TrainingTask.ATK_UNIQUE,
        TrainingTask.ATK_EPIC,
        TrainingTask.ATK_HERO,
        TrainingTask.ATK_SPECIAL,
        TrainingTask.ATK_LEGENDARY,
        TrainingTask.ATK_TRAINING_1,
        TrainingTask.ATK_TRAINING_2,
        TrainingTask.ATK_TRAINING_3,
        TrainingTask.ENG_COMMON,
        TrainingTask.ENG_ELITE,
        TrainingTask.ENG_UNIQUE,
        TrainingTask.ENG_EPIC,
        TrainingTask.ENG_HERO,
        TrainingTask.ENG_SPECIAL,
        TrainingTask.ENG_LEGENDARY,
        TrainingTask.ENG_TRAINING_1,
        TrainingTask.ENG_TRAINING_2,
        TrainingTask.ENG_TRAINING_3,
        TrainingTask.HP_COMMON,
        TrainingTask.HP_ELITE,
        TrainingTask.HP_UNIQUE,
        TrainingTask.HP_EPIC,
        TrainingTask.HP_HERO,
        TrainingTask.HP_SPECIAL,
        TrainingTask.HP_LEGENDARY,
        TrainingTask.HP_TRAINING_1,
        TrainingTask.HP_TRAINING_2,
        TrainingTask.HP_TRAINING_3,
        TrainingTask.PLT_COMMON,
        TrainingTask.PLT_ELITE,
        TrainingTask.PLT_UNIQUE,
        TrainingTask.PLT_EPIC,
        TrainingTask.PLT_HERO,
        TrainingTask.PLT_SPECIAL,
        TrainingTask.PLT_LEGENDARY,
        TrainingTask.PLT_TRAINING_1,
        TrainingTask.PLT_TRAINING_2,
        TrainingTask.PLT_TRAINING_3,
        TrainingTask.RPR_COMMON,
        TrainingTask.RPR_ELITE,
        TrainingTask.RPR_UNIQUE,
        TrainingTask.RPR_EPIC,
        TrainingTask.RPR_HERO,
        TrainingTask.RPR_SPECIAL,
        TrainingTask.RPR_LEGENDARY,
        TrainingTask.SCI_COMMON,
        TrainingTask.SCI_ELITE,
        TrainingTask.SCI_UNIQUE,
        TrainingTask.SCI_EPIC,
        TrainingTask.SCI_HERO,
        TrainingTask.SCI_SPECIAL,
        TrainingTask.SCI_LEGENDARY,
        TrainingTask.SCI_TRAINING_1,
        TrainingTask.SCI_TRAINING_2,
        TrainingTask.SCI_TRAINING_3,
        TrainingTask.STA_COMMON,
        TrainingTask.STA_ELITE,
        TrainingTask.STA_UNIQUE,
        TrainingTask.STA_EPIC,
        TrainingTask.STA_HERO,
        TrainingTask.STA_SPECIAL,
        TrainingTask.STA_LEGENDARY,
        TrainingTask.STA_TRAINING_1,
        TrainingTask.STA_TRAINING_2,
        TrainingTask.STA_TRAINING_3,
        TrainingTask.WPN_COMMON,
        TrainingTask.WPN_ELITE,
        TrainingTask.WPN_UNIQUE,
        TrainingTask.WPN_EPIC,
        TrainingTask.WPN_HERO,
        TrainingTask.WPN_SPECIAL,
        TrainingTask.WPN_LEGENDARY,
        TrainingTask.WPN_TRAINING_1,
        TrainingTask.WPN_TRAINING_2,
        TrainingTask.WPN_TRAINING_3,
    ]

}
