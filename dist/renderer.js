class Renderer {
    constructor() {}

    renderPlayers = players => {
        const source = $("#players-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ players });
        $("#content").empty().append(newHTML);
    };

    renderStats = (stats, reference) => {
        const source = $("#stats-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(stats);
        $(reference).find(".popuptext").empty().append(newHTML).toggleClass("show");
    }
}