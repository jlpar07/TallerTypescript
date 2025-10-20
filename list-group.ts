import { Serie } from './serie.js';
export class ListGroup {
    private list: Serie[];
    private selectedCallback: (serie: Serie) => void;

    constructor(list: Serie[], selectedCallback: (serie: Serie) => void) {
        this.list = list;
        this.selectedCallback = selectedCallback;
        this.createTable();
    }

    private createTable(): void {
        const tableBody = document.getElementById("series-list")!;
        tableBody.innerHTML = "";

        this.list.forEach((serie) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${serie.getId()}</td>
                <td>${serie.getName()}</td>
                <td>${serie.getChannel()}</td>
                <td>${serie.getSeasons()}</td>
            `;
            row.style.cursor = "pointer";
            row.classList.add("table-row");
            
            row.addEventListener("click", () => {
                document.querySelectorAll('.table-row').forEach(item => {
                    item.classList.remove('table-active');
                });
                row.classList.add('table-active');
                this.selectedCallback(serie);
            });

            tableBody.appendChild(row);
        });
    }
}