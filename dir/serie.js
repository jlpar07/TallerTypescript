export class Serie {
    constructor(id, name, channel, seasons, description, url, imageUrl) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.imageUrl = imageUrl;
    }
    getId() { return this.id; }
    getName() { return this.name; }
    getChannel() { return this.channel; }
    getSeasons() { return this.seasons; }
    getDescription() { return this.description; }
    getUrl() { return this.url; }
    getImageUrl() { return this.imageUrl; }
}
