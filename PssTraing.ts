const CrewStatsSet = require("./src/entities/crew_stat")

module.exports = function () {
    let _totalTrainingPoints = null
    let _targetStat = "hp"
    let _trainingAbilities = new CrewStatsSet(
    )
    let _fatigue = null
    let _currentTraining = null

    this.setTotalTrainingPoints = function (total) {
        _totalTrainingPoints = total
    }
    this.calculateSide = function () {
        return {}
    }
};