import { series } from "./data.js";

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('tabla');

    if (!app) {
        console.error('No se encontró el elemento con id tabla');
    } else {
        var promedio = 0;
        series.forEach(serie => {
            promedio += serie.getSeasons();
        })
        promedio /= series.length;
        
        app.innerHTML = `
        <table>
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Channel</th>
            <th scope="col">Seasons</th>
            </tr>
        </thead>
        <tbody>
            ${series.map(serie => `
                            <tr>
                                <td>${serie.getId()}</td>
                                <td>${serie.getName()}</td>
                                <td>${serie.getChannel()}</td>
                                <td>${serie.getSeasons()}</td>
                            </tr>
                        `).join('')}
        </tbody>
        </table>
        <p>Season average: ${promedio}</p>
        `;
    }
});


