class APIManager {
    constructor() {}

    fetchTeam(team) {
        return $.get(`/teams/${team}`)
    }

    fetchPlayerStats(playerName) {
        return $.get(`/playerStats/${playerName}`)
    }

    fetchDreamTeam() {
        return $.get(`/dreamTeam`)
    }

    addPlayerToDreamTeam(player) {
        $.post('/roster', player);
    }

}