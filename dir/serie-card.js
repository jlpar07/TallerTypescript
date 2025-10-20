export class SerieCard {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }
    showSerieDetail(serie) {
        this.container.innerHTML = `
            <div class="card">
                <img src="${serie.getImageUrl()}" class="card-img-top" alt="${serie.getName()}">
                <div class="card-body">
                    <h5 class="card-title">${serie.getName()}</h5>
                    <p class="card-text">${serie.getDescription()}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Más información:</strong> ${serie.getUrl()}</li>
                    </ul>
                </div>
            </div>
        `;
    }
    clear() {
        this.container.innerHTML = '<div class="text-muted">Selecciona una serie para ver los detalles</div>';
    }
}
