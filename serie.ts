export class Serie{
    private id: number;
    private name: string;
    private channel: string;
    private seasons: number;
    private description: string;
    private url: string;
    private imageUrl: string;

    constructor(id: number, name: string, channel: string, seasons: number, description: string, url: string, imageUrl: string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.imageUrl = imageUrl;
    }

    public getId(): number { return this.id; }
    public getName(): string { return this.name; }
    public getChannel(): string { return this.channel; }
    public getSeasons(): number { return this.seasons; }
    public getDescription(): string { return this.description; }
    public getUrl(): string { return this.url; }
    public getImageUrl(): string { return this.imageUrl; }
}