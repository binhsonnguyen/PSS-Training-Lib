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
        "ABL_COMMON",
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
        "ABL_ELITE",
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
        "ABL_UNIQUE",
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
        "ABL_EPIC",
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
        "ABL_HERO",
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
        "ABL_SPECIAL",
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
        "ABL_LEGENDARY",
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
        "ABL_TRAINING_1",
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
        "ABL_TRAINING_2",
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
        "ABL_TRAINING_3",
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
        "ATK_COMMON",
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
        "ATK_ELITE",
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
        "ATK_UNIQUE",
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
        "ATK_EPIC",
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
        "ATK_HERO",
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
        "ATK_SPECIAL",
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
        "ATK_LEGENDARY",
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
        "ATK_TRAINING_1",
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
        "ATK_TRAINING_2",
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
        "ATK_TRAINING_3",
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
        "ENG_COMMON",
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
        "ENG_ELITE",
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
        "ENG_UNIQUE",
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
        "ENG_EPIC",
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
        "ENG_HERO",
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
        "ENG_SPECIAL",
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
        "ENG_LEGENDARY",
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
        "ENG_TRAINING_1",
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
        "ENG_TRAINING_2",
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
        "ENG_TRAINING_3",
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
        "HP_COMMON",
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
        "HP_ELITE",
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
        "HP_UNIQUE",
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
        "HP_EPIC",
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
        "HP_HERO",
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
        "HP_SPECIAL",
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
        "HP_LEGENDARY",
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
        "HP_TRAINING_1",
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
        "HP_TRAINING_2",
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
        "HP_TRAINING_3",
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
        "PLT_COMMON",
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
        "PLT_ELITE",
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
        "PLT_UNIQUE",
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
        "PLT_EPIC",
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
        "PLT_HERO",
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
        "PLT_SPECIAL",
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
        "PLT_LEGENDARY",
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
        "PLT_TRAINING_1",
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
        "PLT_TRAINING_2",
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
        "PLT_TRAINING_3",
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
        "RPR_COMMON",
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
        "RPR_ELITE",
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
        "RPR_UNIQUE",
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
        "RPR_EPIC",
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
        "RPR_HERO",
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
        "RPR_SPECIAL",
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
        "RPR_LEGENDARY",
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
        "SCI_COMMON",
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
        "SCI_ELITE",
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
        "SCI_UNIQUE",
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
        "SCI_EPIC",
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
        "SCI_HERO",
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
        "SCI_SPECIAL",
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
        "SCI_LEGENDARY",
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
        "SCI_TRAINING_1",
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
        "SCI_TRAINING_2",
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
        "SCI_TRAINING_3",
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
        "STA_COMMON",
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
        "STA_ELITE",
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
        "STA_UNIQUE",
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
        "STA_EPIC",
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
        "STA_HERO",
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
        "STA_SPECIAL",
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
        "STA_LEGENDARY",
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
        "STA_TRAINING_1",
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
        "STA_TRAINING_2",
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
        "STA_TRAINING_3",
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
        "WPN_COMMON",
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
        "WPN_ELITE",
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
        "WPN_UNIQUE",
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
        "WPN_EPIC",
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
        "WPN_HERO",
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
        "WPN_SPECIAL",
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
        "WPN_LEGENDARY",
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
        "WPN_TRAINING_1",
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
        "WPN_TRAINING_2",
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
        "WPN_TRAINING_3",
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
