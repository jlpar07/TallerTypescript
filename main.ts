import { series } from "./data.js";

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('tabla');

    if (!app) {
        console.error('No se encontró el elemento con id tabla');
    } else {
        console.log('Elemento tabla encontrado, generando tabla...');
        
        app.innerHTML = `
        <table border="1" style="border-collapse: collapse; width: 100%;">
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
        `;
        
        console.log('Tabla generada correctamente');
    }
});


