class Renderer {
    constructor() {}
    renderPlayers = players => {
        this.makeHandlebar("#players-template", "#content", players, null)
    };

    renderStats = (stats, reference) => {
        this.makeHandlebar("#stats-template", ".popuptext", stats, reference)
    }
}

Renderer.prototype.makeHandlebar = (templateId, containerId, data, reference) => {
    const source = $(templateId).html();
    const template = Handlebars.compile(source);
    const newHTML = template(data);
    if (reference) {
        $(reference).find(containerId).empty().append(newHTML).toggleClass("show");
    } else {
        $(containerId).empty().append(newHTML);
    }
}