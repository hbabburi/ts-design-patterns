export class MediaPlayer {
    play(movie: string): string {
        return `Playing ${movie}`;
    }
}

export class Projector {
    turnOn(): string {
        return "Projector on";
    }
}

export class SoundSystem {
    turnOn(): string {
        return "Sound system on";
    }
}

export class HomeTheaterFacade {
    constructor(
        private mediaPlayer: MediaPlayer,
        private projector: Projector,
        private soundSystem: SoundSystem,
    ) {}

    watchMovie(movie: string): string[] {
        return [
            this.projector.turnOn(),
            this.soundSystem.turnOn(),
            this.mediaPlayer.play(movie),
        ];
    }
}
