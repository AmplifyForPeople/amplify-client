import { Song } from '../entities/Song';

class PlayList {
    id: number;
    current: boolean;
    song: Song;
    constructor() { }
}
export class Establishment {

    id: number;
    name: String;
    info: String;
    position_lat: number;
    position_lng: number;
    imatge: String;

    playlists: Array<Song> = [];
    userinestablishments;
    genres;

    constructor() { }

    toString() {
        return String('Establishment [')
            .concat(this.id.toString()).concat(', ')
            .concat(this.name.toString()).concat(', ')
            .concat(this.info.toString()).concat(', ')
            .concat(this.imatge.toString()).concat(', ')
            .concat(this.position_lat.toString()).concat(', ')
            .concat(this.position_lng.toString()).concat(']');
    }

    toJSON() {
        const playlists = [];
        for (let i = 0; i < this.playlists.length; i++) {
            const id = this.playlists[i].id;
            const current = this.playlists[i].current;
            const song = new Song(this.playlists[i].getId(), this.playlists[i].getName(),
                this.playlists[i].getAlbum(), this.playlists[i].getAuthor(),
                this.playlists[i].getVotes(), this.playlists[i].getImatge());
            playlists.push(JSON.stringify({ id: id, current: current, song: song}));
        }
        return JSON.stringify({
            genres: this.genres, id: this.id, imatge: this.imatge, info: this.info, name: this.name,
            playlists: playlists, position_lat: this.position_lat, position_lng: this.position_lng
        });
    }

    fromJSON(data) {
        const json: any = JSON.parse(data);
        this.id = json.id;
        this.name = json.name;
        this.info = json.info;
        this.imatge = json.imatge;
        this.position_lat = json.position_lat;
        this.position_lng = json.position_lng;
        for (let i = 0; i < json.playlists.length; i++) {
            const tmp = new Song(1, '', '', '', '', '');
            tmp.fromJSON(json.playlists[i]);
            this.playlists.push(tmp);
        }
        //this.playlists = json.playlists;
        this.userinestablishments = json.userinestablishments;
        this.genres = json.genres;
    }

    getId() { return this.id; }

    setId(id) { this.id = id; }

    getName() { return this.name; }

    setName(name) { this.name = name; }

    getInfo() { return this.info; }

    setInfo(info) { this.info = info; }

    getPosition_lat() { return this.position_lat; }

    setPosition_lat(position_lat) { this.position_lat = position_lat; }

    getPosition_lng() { return this.position_lng; }

    setPosition_lng(position_lng) { this.position_lng = position_lng; }

    getImatge() { return this.imatge; }

    setImatge(imatge) { this.imatge = imatge; }

    getPlaylists() { return this.playlists; }

    setPlaylists(playlists) { this.playlists = playlists; }

    getUserinestablishments() { return this.userinestablishments; }

    setUserinestablishments(userinestablishments) { this.userinestablishments = userinestablishments; }

    getGenres() { return this.genres; }

    setGenres(genres) { this.genres = genres; }

    getCurrent() {
        for (let i = 0; i < this.playlists.length; i++) {
            if (this.playlists[i].getCurrent()) {
                return this.playlists[i];

            }
        }
    }

    getNoCurrent() {
        const songs: Array<Song> = [];
        for (let i = 0; i < this.playlists.length; i++) {
            if (!this.playlists[i].getCurrent()) {
                songs.push(this.playlists[i]);
            }
        }
        return songs;
    }

}