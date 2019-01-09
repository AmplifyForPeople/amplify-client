export class Song {
    current: boolean;
    idPlaylist: number;
    id: number;
    name: String;
    album: String;
    author: String;
    votes: number;
    imatge: String;

    constructor(id, name, album, author, votes, imatge) {
        this.id = id;
        this.name = name;
        this.album = album;
        this.author = author;
        this.votes = votes;
        this.imatge = imatge;
    }

    toString() {
        return String('Song [')
            .concat(this.id.toString()).concat(', ')
            .concat(this.name.toString()).concat(', ')
            .concat(this.album.toString()).concat(', ')
            .concat(this.imatge.toString()).concat(', ')
            .concat(this.author.toString()).concat(']');
    }

    toJSON() {
        return JSON.stringify({
            id: this.id, name: this.name, album: this.album,
            author: this.author, votes: this.votes, imatge: this.imatge
        });
    }

    fromJSON(json) {
        // const json: any = JSON.parse(data);
        this.current = json.current;
        this.idPlaylist = json.id;
        this.id = json.song.id;
        this.name = json.song.name;
        this.album = json.song.album;
        this.author = json.song.author;
        this.votes = json.song.votes;
        this.imatge = json.song.imatge;
    }

    getId() { return this.id; }

    setId(id) { this.id = id; }

    getName() { return this.name; }

    setName(name) { this.name = name; }

    getAlbum() { return this.album; }

    setAlbum(album) { this.album = album; }

    getAuthor() { return this.author; }

    setAuthor(author) { this.author = author; }

    getVotes() { return this.votes; }

    setVotes(votes) { this.votes = votes; }

    getImatge() { return this.imatge; }

    setImatge(imatge) { this.imatge = imatge; }

    getCurrent() { return this.current; }

    setCurrent(current) { this.current = current; }

    getidPlaylist() { return this.idPlaylist; }

    setidPlaylist(idPlaylist) { this.idPlaylist = idPlaylist; }
}
