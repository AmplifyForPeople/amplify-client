import { Song } from './Song';
import { Establishment } from './Establishment';

export class PlayList {

    protected id: number;
    protected current: boolean;
    protected establishment: Establishment;
    protected song: Song;

    constructor(id, current, establishment, song) {
        this.id = id;
        this.current = current;
        this.establishment = establishment;
        this.song = song;
    }

    toString() {
        return String('PlayList [')
            .concat(this.id.toString()).concat(', ')
            .concat(this.current.toString()).concat(', ')
            .concat(this.establishment.toString()).concat(', ')
            .concat(this.song.toString()).concat(']');
    }

    toJSON() {
        return JSON.stringify({
            id: this.id, current: this.current, establishment: this.establishment, song: this.song
        });
    }

    fromJSON(data) {
        const obj: PlayList = JSON.parse(data);
        this.id = obj.getId();
        this.current = obj.isCurrent();
        this.establishment = obj.getEstablishment();
        this.song = obj.getSong();

    }

    getId() { return this.id; }

    setId(id) { this.id = id; }

    isCurrent() { return this.current; }

    setCurrent(current) { this.current = current; }

    getEstablishment() { return this.establishment; }

    setEstablishment(establishment) { this.establishment = establishment; }

    getSong() { return this.song; }

    setSong(song) { this.song = song; }
}
