const apiManager = new APIManager();
const renderer = new Renderer();

$("#get-roster").on("click", () => {
    const input = $("#roster-input").val().toLowerCase();
    apiManager.fetchTeam(input).then(players => renderer.renderPlayers(players));
});

$("#content").on("click", ".popup", function() {
    const name = $(this).siblings("#name").text()
    apiManager.fetchPlayerStats(name).then(stats => renderer.renderStats(stats, this));
});

$("#dream-team").on("click", () => {
    apiManager.fetchDreamTeam().then(players => renderer.renderPlayers(players));
});

$("#content").on("click", ".player-card", function() {
    const fullName = $(this).find("#name").text().split(" ");
    const lastName = fullName.pop();
    const firstName = fullName.pop();
    const jersey = $(this).find("#jersey").text();
    const pos = $(this).find("#pos").text();
    const player = { firstName, lastName, jersey, pos };
    apiManager.addPlayerToDreamTeam(player);
})