import CrewStat from "./CrewStat";
import TrainingQuality from "./TrainingQuality";
import CrewStatsSet from "./CrewStatsSet";
import {name} from "ts-jest/dist/transformers/hoist-jest";

export default class TrainingTask {
    private _statsEffective: CrewStatsSet;
    private _quality: TrainingQuality;
    private _name: string

    private constructor(name: string, quality: TrainingQuality, statsEffective: CrewStatsSet) {
        this._name = name;
        this._quality = quality;
        this._statsEffective = statsEffective
    }

    get name(): string {
        return this._name;
    }

    get statsEffective(): CrewStatsSet {
        return this._statsEffective;
    }

    get quality(): TrainingQuality {
        return this._quality;
    }

    
    static ABL_COMMON = new TrainingTask(
        "Paracetamol",
        TrainingQuality.COMMON,
        new CrewStatsSet(
            CrewStat.HP(1),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(2),
            CrewStat.STA(1),
            CrewStat.PLT(1),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static ABL_ELITE = new TrainingTask(
        "Paracetamol Rapid",
        TrainingQuality.ELITE,
        new CrewStatsSet(
            CrewStat.HP(2),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(4),
            CrewStat.STA(1),
            CrewStat.PLT(2),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static ABL_UNIQUE = new TrainingTask(
        "Ibuprofen",
        TrainingQuality.UNIQUE,
        new CrewStatsSet(
            CrewStat.HP(3),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(8),
            CrewStat.STA(3),
            CrewStat.PLT(3),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(1),
        ))
    
    static ABL_EPIC = new TrainingTask(
        "Ibuprofen Rapid",
        TrainingQuality.EPIC,
        new CrewStatsSet(
            CrewStat.HP(5),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(16),
            CrewStat.STA(3),
            CrewStat.PLT(5),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(2),
        ))
    
    static ABL_HERO = new TrainingTask(
        "Ginkgo",
        TrainingQuality.HERO,
        new CrewStatsSet(
            CrewStat.HP(12),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(25),
            CrewStat.STA(4),
            CrewStat.PLT(12),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(3),
        ))
    
    static ABL_SPECIAL = new TrainingTask(
        "Brain Enhancer",
        TrainingQuality.SPECIAL,
        new CrewStatsSet(
            CrewStat.HP(8),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(50),
            CrewStat.STA(3),
            CrewStat.PLT(8),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(2),
        ))
    
    static ABL_LEGENDARY = new TrainingTask(
        "Super Brain Enhancer",
        TrainingQuality.LEGENDARY,
        new CrewStatsSet(
            CrewStat.HP(3),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(100),
            CrewStat.STA(1),
            CrewStat.PLT(3),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(1),
        ))
    
    static ABL_TRAINING_1 = new TrainingTask(
        "Steam Yoga",
        TrainingQuality.TRAINING_1,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(4),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static ABL_TRAINING_2 = new TrainingTask(
        "Crew vs Wild",
        TrainingQuality.TRAINING_2,
        new CrewStatsSet(
            CrewStat.HP(1),
            CrewStat.ATK(1),
            CrewStat.RPR(0),
            CrewStat.ABL(8),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static ABL_TRAINING_3 = new TrainingTask(
        "Space Marine",
        TrainingQuality.TRAINING_3,
        new CrewStatsSet(
            CrewStat.HP(1),
            CrewStat.ATK(1),
            CrewStat.RPR(0),
            CrewStat.ABL(12),
            CrewStat.STA(2),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static ATK_COMMON = new TrainingTask(
        "Chicken Skewer",
        TrainingQuality.COMMON,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(2),
            CrewStat.RPR(0),
            CrewStat.ABL(1),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(1),
        ))
    
    static ATK_ELITE = new TrainingTask(
        "Yakitori",
        TrainingQuality.ELITE,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(4),
            CrewStat.RPR(0),
            CrewStat.ABL(2),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(2),
        ))
    
    static ATK_UNIQUE = new TrainingTask(
        "Double Yakitori",
        TrainingQuality.UNIQUE,
        new CrewStatsSet(
            CrewStat.HP(1),
            CrewStat.ATK(8),
            CrewStat.RPR(0),
            CrewStat.ABL(3),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(3),
        ))
    
    static ATK_EPIC = new TrainingTask(
        "Shish Kebabs",
        TrainingQuality.EPIC,
        new CrewStatsSet(
            CrewStat.HP(2),
            CrewStat.ATK(16),
            CrewStat.RPR(0),
            CrewStat.ABL(5),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(5),
        ))
    
    static ATK_HERO = new TrainingTask(
        "Drumsticks",
        TrainingQuality.HERO,
        new CrewStatsSet(
            CrewStat.HP(3),
            CrewStat.ATK(25),
            CrewStat.RPR(0),
            CrewStat.ABL(12),
            CrewStat.STA(4),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(12),
        ))
    
    static ATK_SPECIAL = new TrainingTask(
        "Steak",
        TrainingQuality.SPECIAL,
        new CrewStatsSet(
            CrewStat.HP(2),
            CrewStat.ATK(50),
            CrewStat.RPR(0),
            CrewStat.ABL(8),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(8),
        ))
    
    static ATK_LEGENDARY = new TrainingTask(
        "Roast Turkey",
        TrainingQuality.LEGENDARY,
        new CrewStatsSet(
            CrewStat.HP(1),
            CrewStat.ATK(100),
            CrewStat.RPR(0),
            CrewStat.ABL(3),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(3),
        ))
    
    static ATK_TRAINING_1 = new TrainingTask(
        "Kickbox",
        TrainingQuality.TRAINING_1,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(4),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static ATK_TRAINING_2 = new TrainingTask(
        "BJJ",
        TrainingQuality.TRAINING_2,
        new CrewStatsSet(
            CrewStat.HP(1),
            CrewStat.ATK(8),
            CrewStat.RPR(0),
            CrewStat.ABL(1),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static ATK_TRAINING_3 = new TrainingTask(
        "Shaolin Tradition",
        TrainingQuality.TRAINING_3,
        new CrewStatsSet(
            CrewStat.HP(1),
            CrewStat.ATK(12),
            CrewStat.RPR(0),
            CrewStat.ABL(1),
            CrewStat.STA(2),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static ENG_COMMON = new TrainingTask(
        "Standard Engineering Tool Kit",
        TrainingQuality.COMMON,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(1),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(1),
            CrewStat.ENG(2),
            CrewStat.WPN(0),
        ))
    
    static ENG_ELITE = new TrainingTask(
        "Obsolete Engineering Toolkit",
        TrainingQuality.ELITE,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(2),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(2),
            CrewStat.ENG(4),
            CrewStat.WPN(0),
        ))
    
    static ENG_UNIQUE = new TrainingTask(
        "Starter Engineering Tool Kit ",
        TrainingQuality.UNIQUE,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(3),
            CrewStat.ABL(0),
            CrewStat.STA(3),
            CrewStat.PLT(1),
            CrewStat.SCI(3),
            CrewStat.ENG(8),
            CrewStat.WPN(0),
        ))
    
    static ENG_EPIC = new TrainingTask(
        "Advanced Engineering Tool Kit",
        TrainingQuality.EPIC,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(5),
            CrewStat.ABL(0),
            CrewStat.STA(3),
            CrewStat.PLT(2),
            CrewStat.SCI(5),
            CrewStat.ENG(16),
            CrewStat.WPN(0),
        ))
    
    static ENG_HERO = new TrainingTask(
        "Rare Engineering Tool Kit",
        TrainingQuality.HERO,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(12),
            CrewStat.ABL(0),
            CrewStat.STA(4),
            CrewStat.PLT(3),
            CrewStat.SCI(12),
            CrewStat.ENG(25),
            CrewStat.WPN(0),
        ))
    
    static ENG_SPECIAL = new TrainingTask(
        "Prototype Engineering Tool Kit",
        TrainingQuality.SPECIAL,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(8),
            CrewStat.ABL(0),
            CrewStat.STA(3),
            CrewStat.PLT(2),
            CrewStat.SCI(8),
            CrewStat.ENG(50),
            CrewStat.WPN(0),
        ))
    
    static ENG_LEGENDARY = new TrainingTask(
        "Alien Engineering Tool Kit",
        TrainingQuality.LEGENDARY,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(3),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(1),
            CrewStat.SCI(3),
            CrewStat.ENG(100),
            CrewStat.WPN(0),
        ))
    
    static ENG_TRAINING_1 = new TrainingTask(
        "Study Expert Engineering Manual",
        TrainingQuality.TRAINING_1,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(1),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(4),
            CrewStat.WPN(0),
        ))
    
    static ENG_TRAINING_2 = new TrainingTask(
        "Engineering Summit",
        TrainingQuality.TRAINING_2,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(1),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(1),
            CrewStat.SCI(1),
            CrewStat.ENG(8),
            CrewStat.WPN(0),
        ))
    
    static ENG_TRAINING_3 = new TrainingTask(
        "Engineering PHD",
        TrainingQuality.TRAINING_3,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(2),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(12),
            CrewStat.WPN(1),
        ))
    
    static HP_COMMON = new TrainingTask(
        "Small Protein Shake",
        TrainingQuality.COMMON,
        new CrewStatsSet(
            CrewStat.HP(2),
            CrewStat.ATK(1),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(1),
            CrewStat.WPN(0),
        ))
    
    static HP_ELITE = new TrainingTask(
        "Regular Protein Shake",
        TrainingQuality.ELITE,
        new CrewStatsSet(
            CrewStat.HP(4),
            CrewStat.ATK(2),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(2),
            CrewStat.WPN(0),
        ))
    
    static HP_UNIQUE = new TrainingTask(
        "Large Protein Shake",
        TrainingQuality.UNIQUE,
        new CrewStatsSet(
            CrewStat.HP(8),
            CrewStat.ATK(3),
            CrewStat.RPR(0),
            CrewStat.ABL(1),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(3),
            CrewStat.WPN(0),
        ))
    
    static HP_EPIC = new TrainingTask(
        "Super Protein Shake",
        TrainingQuality.EPIC,
        new CrewStatsSet(
            CrewStat.HP(16),
            CrewStat.ATK(5),
            CrewStat.RPR(0),
            CrewStat.ABL(2),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(5),
            CrewStat.WPN(0),
        ))
    
    static HP_HERO = new TrainingTask(
        "HGH",
        TrainingQuality.HERO,
        new CrewStatsSet(
            CrewStat.HP(25),
            CrewStat.ATK(12),
            CrewStat.RPR(0),
            CrewStat.ABL(3),
            CrewStat.STA(4),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(12),
            CrewStat.WPN(0),
        ))
    
    static HP_SPECIAL = new TrainingTask(
        "Enhanced HGH",
        TrainingQuality.SPECIAL,
        new CrewStatsSet(
            CrewStat.HP(50),
            CrewStat.ATK(8),
            CrewStat.RPR(0),
            CrewStat.ABL(2),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(8),
            CrewStat.WPN(0),
        ))
    
    static HP_LEGENDARY = new TrainingTask(
        "Prototype HGH",
        TrainingQuality.LEGENDARY,
        new CrewStatsSet(
            CrewStat.HP(100),
            CrewStat.ATK(3),
            CrewStat.RPR(0),
            CrewStat.ABL(1),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(3),
            CrewStat.WPN(0),
        ))
    
    static HP_TRAINING_1 = new TrainingTask(
        "Bench Press",
        TrainingQuality.TRAINING_1,
        new CrewStatsSet(
            CrewStat.HP(4),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static HP_TRAINING_2 = new TrainingTask(
        "Muscle Beach",
        TrainingQuality.TRAINING_2,
        new CrewStatsSet(
            CrewStat.HP(8),
            CrewStat.ATK(1),
            CrewStat.RPR(0),
            CrewStat.ABL(1),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static HP_TRAINING_3 = new TrainingTask(
        "Olympic Weightlifting",
        TrainingQuality.TRAINING_3,
        new CrewStatsSet(
            CrewStat.HP(12),
            CrewStat.ATK(1),
            CrewStat.RPR(0),
            CrewStat.ABL(1),
            CrewStat.STA(2),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static PLT_COMMON = new TrainingTask(
        "Street Map",
        TrainingQuality.COMMON,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(2),
            CrewStat.SCI(0),
            CrewStat.ENG(1),
            CrewStat.WPN(1),
        ))
    
    static PLT_ELITE = new TrainingTask(
        "Travel Map",
        TrainingQuality.ELITE,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(4),
            CrewStat.SCI(0),
            CrewStat.ENG(2),
            CrewStat.WPN(2),
        ))
    
    static PLT_UNIQUE = new TrainingTask(
        "World Map",
        TrainingQuality.UNIQUE,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(1),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(3),
            CrewStat.PLT(8),
            CrewStat.SCI(0),
            CrewStat.ENG(3),
            CrewStat.WPN(3),
        ))
    
    static PLT_EPIC = new TrainingTask(
        "Global Map",
        TrainingQuality.EPIC,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(2),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(3),
            CrewStat.PLT(16),
            CrewStat.SCI(0),
            CrewStat.ENG(5),
            CrewStat.WPN(5),
        ))
    
    static PLT_HERO = new TrainingTask(
        "System Map",
        TrainingQuality.HERO,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(3),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(4),
            CrewStat.PLT(25),
            CrewStat.SCI(0),
            CrewStat.ENG(12),
            CrewStat.WPN(12),
        ))
    
    static PLT_SPECIAL = new TrainingTask(
        "Star Map",
        TrainingQuality.SPECIAL,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(2),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(3),
            CrewStat.PLT(50),
            CrewStat.SCI(0),
            CrewStat.ENG(8),
            CrewStat.WPN(8),
        ))
    
    static PLT_LEGENDARY = new TrainingTask(
        "Galactic Navigation Map",
        TrainingQuality.LEGENDARY,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(1),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(100),
            CrewStat.SCI(0),
            CrewStat.ENG(3),
            CrewStat.WPN(3),
        ))
    
    static PLT_TRAINING_1 = new TrainingTask(
        "Read Expert Pilot Handbook",
        TrainingQuality.TRAINING_1,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(4),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(1),
        ))
    
    static PLT_TRAINING_2 = new TrainingTask(
        "Pilot Summit",
        TrainingQuality.TRAINING_2,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(1),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(8),
            CrewStat.SCI(0),
            CrewStat.ENG(1),
            CrewStat.WPN(1),
        ))
    
    static PLT_TRAINING_3 = new TrainingTask(
        "Pilot Expert",
        TrainingQuality.TRAINING_3,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(1),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(12),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(2),
        ))
    
    static RPR_COMMON = new TrainingTask(
        "Repair Guide",
        TrainingQuality.COMMON,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(2),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(1),
            CrewStat.ENG(1),
            CrewStat.WPN(0),
        ))
    
    static RPR_ELITE = new TrainingTask(
        "New Repair Guide",
        TrainingQuality.ELITE,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(4),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(2),
            CrewStat.ENG(2),
            CrewStat.WPN(0),
        ))
    
    static RPR_UNIQUE = new TrainingTask(
        "Advanced Repair Guide",
        TrainingQuality.UNIQUE,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(8),
            CrewStat.ABL(1),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(3),
            CrewStat.ENG(3),
            CrewStat.WPN(0),
        ))
    
    static RPR_EPIC = new TrainingTask(
        "Epic Repair Guide",
        TrainingQuality.EPIC,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(16),
            CrewStat.ABL(2),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(5),
            CrewStat.ENG(5),
            CrewStat.WPN(0),
        ))
    
    static RPR_HERO = new TrainingTask(
        "Lost Repair Guide",
        TrainingQuality.HERO,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(25),
            CrewStat.ABL(3),
            CrewStat.STA(4),
            CrewStat.PLT(0),
            CrewStat.SCI(12),
            CrewStat.ENG(12),
            CrewStat.WPN(0),
        ))
    
    static RPR_SPECIAL = new TrainingTask(
        "Special Repair Guide",
        TrainingQuality.SPECIAL,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(50),
            CrewStat.ABL(2),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(8),
            CrewStat.ENG(8),
            CrewStat.WPN(0),
        ))
    
    static RPR_LEGENDARY = new TrainingTask(
        "Legendary Repair Guide",
        TrainingQuality.LEGENDARY,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(100),
            CrewStat.ABL(1),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(3),
            CrewStat.ENG(3),
            CrewStat.WPN(0),
        ))
    
    static SCI_COMMON = new TrainingTask(
        "Drop of Brain Juice",
        TrainingQuality.COMMON,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(1),
            CrewStat.ABL(1),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(2),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static SCI_ELITE = new TrainingTask(
        "Sliver of Brain Juice",
        TrainingQuality.ELITE,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(2),
            CrewStat.ABL(2),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(4),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static SCI_UNIQUE = new TrainingTask(
        "Brew of Brain Juice",
        TrainingQuality.UNIQUE,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(3),
            CrewStat.ABL(3),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(8),
            CrewStat.ENG(0),
            CrewStat.WPN(1),
        ))
    
    static SCI_EPIC = new TrainingTask(
        "Tincture of Brain Juice",
        TrainingQuality.EPIC,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(5),
            CrewStat.ABL(5),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(16),
            CrewStat.ENG(0),
            CrewStat.WPN(2),
        ))
    
    static SCI_HERO = new TrainingTask(
        "Solution of Brain Juice",
        TrainingQuality.HERO,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(12),
            CrewStat.ABL(12),
            CrewStat.STA(4),
            CrewStat.PLT(0),
            CrewStat.SCI(25),
            CrewStat.ENG(0),
            CrewStat.WPN(3),
        ))
    
    static SCI_SPECIAL = new TrainingTask(
        "Concentration of Brain Juice",
        TrainingQuality.SPECIAL,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(8),
            CrewStat.ABL(8),
            CrewStat.STA(3),
            CrewStat.PLT(0),
            CrewStat.SCI(50),
            CrewStat.ENG(0),
            CrewStat.WPN(2),
        ))
    
    static SCI_LEGENDARY = new TrainingTask(
        "Elixir of Brain Juice",
        TrainingQuality.LEGENDARY,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(3),
            CrewStat.ABL(3),
            CrewStat.STA(1),
            CrewStat.PLT(0),
            CrewStat.SCI(100),
            CrewStat.ENG(0),
            CrewStat.WPN(1),
        ))
    
    static SCI_TRAINING_1 = new TrainingTask(
        "Big Book of Science",
        TrainingQuality.TRAINING_1,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(0),
            CrewStat.SCI(4),
            CrewStat.ENG(1),
            CrewStat.WPN(0),
        ))
    
    static SCI_TRAINING_2 = new TrainingTask(
        "Scientific Summit",
        TrainingQuality.TRAINING_2,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(1),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(0),
            CrewStat.SCI(8),
            CrewStat.ENG(1),
            CrewStat.WPN(1),
        ))
    
    static SCI_TRAINING_3 = new TrainingTask(
        "Science PHD",
        TrainingQuality.TRAINING_3,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(0),
            CrewStat.SCI(12),
            CrewStat.ENG(2),
            CrewStat.WPN(1),
        ))
    
    static STA_COMMON = new TrainingTask(
        "Small Cola",
        TrainingQuality.COMMON,
        new CrewStatsSet(
            CrewStat.HP(1),
            CrewStat.ATK(1),
            CrewStat.RPR(1),
            CrewStat.ABL(1),
            CrewStat.STA(8),
            CrewStat.PLT(1),
            CrewStat.SCI(1),
            CrewStat.ENG(1),
            CrewStat.WPN(1),
        ))
    
    static STA_ELITE = new TrainingTask(
        "Large Cola",
        TrainingQuality.ELITE,
        new CrewStatsSet(
            CrewStat.HP(1),
            CrewStat.ATK(1),
            CrewStat.RPR(1),
            CrewStat.ABL(1),
            CrewStat.STA(12),
            CrewStat.PLT(1),
            CrewStat.SCI(1),
            CrewStat.ENG(1),
            CrewStat.WPN(1),
        ))
    
    static STA_UNIQUE = new TrainingTask(
        "Mountain Brew",
        TrainingQuality.UNIQUE,
        new CrewStatsSet(
            CrewStat.HP(2),
            CrewStat.ATK(2),
            CrewStat.RPR(2),
            CrewStat.ABL(2),
            CrewStat.STA(16),
            CrewStat.PLT(2),
            CrewStat.SCI(2),
            CrewStat.ENG(2),
            CrewStat.WPN(2),
        ))
    
    static STA_EPIC = new TrainingTask(
        "Pink Cow",
        TrainingQuality.EPIC,
        new CrewStatsSet(
            CrewStat.HP(3),
            CrewStat.ATK(3),
            CrewStat.RPR(3),
            CrewStat.ABL(3),
            CrewStat.STA(24),
            CrewStat.PLT(3),
            CrewStat.SCI(3),
            CrewStat.ENG(3),
            CrewStat.WPN(3),
        ))
    
    static STA_HERO = new TrainingTask(
        "Large Pink Cow",
        TrainingQuality.HERO,
        new CrewStatsSet(
            CrewStat.HP(4),
            CrewStat.ATK(4),
            CrewStat.RPR(4),
            CrewStat.ABL(4),
            CrewStat.STA(32),
            CrewStat.PLT(4),
            CrewStat.SCI(4),
            CrewStat.ENG(4),
            CrewStat.WPN(4),
        ))
    
    static STA_SPECIAL = new TrainingTask(
        "U",
        TrainingQuality.SPECIAL,
        new CrewStatsSet(
            CrewStat.HP(3),
            CrewStat.ATK(3),
            CrewStat.RPR(3),
            CrewStat.ABL(3),
            CrewStat.STA(64),
            CrewStat.PLT(3),
            CrewStat.SCI(3),
            CrewStat.ENG(3),
            CrewStat.WPN(3),
        ))
    
    static STA_LEGENDARY = new TrainingTask(
        "Father",
        TrainingQuality.LEGENDARY,
        new CrewStatsSet(
            CrewStat.HP(2),
            CrewStat.ATK(2),
            CrewStat.RPR(2),
            CrewStat.ABL(2),
            CrewStat.STA(110),
            CrewStat.PLT(2),
            CrewStat.SCI(2),
            CrewStat.ENG(2),
            CrewStat.WPN(2),
        ))
    
    static STA_TRAINING_1 = new TrainingTask(
        "Weighted Run",
        TrainingQuality.TRAINING_1,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(5),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static STA_TRAINING_2 = new TrainingTask(
        "Hardcore Aerobics",
        TrainingQuality.TRAINING_2,
        new CrewStatsSet(
            CrewStat.HP(2),
            CrewStat.ATK(2),
            CrewStat.RPR(0),
            CrewStat.ABL(2),
            CrewStat.STA(8),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static STA_TRAINING_3 = new TrainingTask(
        "Everest Climb",
        TrainingQuality.TRAINING_3,
        new CrewStatsSet(
            CrewStat.HP(3),
            CrewStat.ATK(3),
            CrewStat.RPR(0),
            CrewStat.ABL(3),
            CrewStat.STA(16),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(0),
        ))
    
    static WPN_COMMON = new TrainingTask(
        "Military Recruit Handbook",
        TrainingQuality.COMMON,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(1),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(1),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(2),
        ))
    
    static WPN_ELITE = new TrainingTask(
        "Standard Combat Manual",
        TrainingQuality.ELITE,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(2),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(2),
            CrewStat.SCI(0),
            CrewStat.ENG(0),
            CrewStat.WPN(4),
        ))
    
    static WPN_UNIQUE = new TrainingTask(
        "Galetrooper Training Manual",
        TrainingQuality.UNIQUE,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(3),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(3),
            CrewStat.PLT(3),
            CrewStat.SCI(1),
            CrewStat.ENG(0),
            CrewStat.WPN(8),
        ))
    
    static WPN_EPIC = new TrainingTask(
        "Advanced Combat Manual",
        TrainingQuality.EPIC,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(5),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(3),
            CrewStat.PLT(5),
            CrewStat.SCI(2),
            CrewStat.ENG(0),
            CrewStat.WPN(16),
        ))
    
    static WPN_HERO = new TrainingTask(
        "Veteran’s Guidebook",
        TrainingQuality.HERO,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(12),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(4),
            CrewStat.PLT(12),
            CrewStat.SCI(3),
            CrewStat.ENG(0),
            CrewStat.WPN(25),
        ))
    
    static WPN_SPECIAL = new TrainingTask(
        "How To Shoot Your Shot'",
        TrainingQuality.SPECIAL,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(8),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(3),
            CrewStat.PLT(8),
            CrewStat.SCI(2),
            CrewStat.ENG(0),
            CrewStat.WPN(50),
        ))
    
    static WPN_LEGENDARY = new TrainingTask(
        "Sharpshooter’s Cheatbook",
        TrainingQuality.LEGENDARY,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(3),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(1),
            CrewStat.PLT(3),
            CrewStat.SCI(1),
            CrewStat.ENG(0),
            CrewStat.WPN(100),
        ))
    
    static WPN_TRAINING_1 = new TrainingTask(
        "Read Expert Weapon Theory",
        TrainingQuality.TRAINING_1,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(0),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(0),
            CrewStat.SCI(1),
            CrewStat.ENG(0),
            CrewStat.WPN(4),
        ))
    
    static WPN_TRAINING_2 = new TrainingTask(
        "Weapons Summit",
        TrainingQuality.TRAINING_2,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(1),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(1),
            CrewStat.SCI(1),
            CrewStat.ENG(0),
            CrewStat.WPN(8),
        ))
    
    static WPN_TRAINING_3 = new TrainingTask(
        "Weapons PHD",
        TrainingQuality.TRAINING_3,
        new CrewStatsSet(
            CrewStat.HP(0),
            CrewStat.ATK(0),
            CrewStat.RPR(2),
            CrewStat.ABL(0),
            CrewStat.STA(0),
            CrewStat.PLT(0),
            CrewStat.SCI(0),
            CrewStat.ENG(1),
            CrewStat.WPN(12),
        ))

}
