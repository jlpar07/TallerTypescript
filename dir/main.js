import { series } from './data.js';
import { ListGroup } from './list-group.js';
import { SerieCard } from './serie-card.js';

const serieCard = new SerieCard('serie-detail');

serieCard.clear();

const listGroup = new ListGroup(series, (selectedSerie) => {
    serieCard.showSerieDetail(selectedSerie);
});

const avgSeasons = calculateAvgSeasons(series);
const avgElement = document.getElementById("average-seasons");
avgElement.innerHTML = `Seasons average: ${avgSeasons}`;
function calculateAvgSeasons(series) {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.getSeasons(), 0);
    return totalSeasons / series.length;
}
