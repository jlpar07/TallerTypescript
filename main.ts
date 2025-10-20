import { series } from './data.js';
import { ListGroup } from './list-group.js';
import { SerieCard } from './serie-card.js';
import { Serie } from './serie.js';

const serieCard = new SerieCard('serie-detail');

serieCard.clear();
const listGroup = new ListGroup(series, (selectedSerie: Serie) => {
    serieCard.showSerieDetail(selectedSerie);
});

const avgSeasons = calculateAvgSeasons(series);
const avgElement = document.getElementById("average-seasons")!;
avgElement.innerHTML = `Seasons average: ${avgSeasons}`;

function calculateAvgSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.getSeasons(), 0);
    return totalSeasons / series.length;
}


