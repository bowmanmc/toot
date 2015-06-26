
class Game {

    constructor() {

        console.log('-- -- -- --   Toot Rippington - Blasts Off!   -- -- -- --');

        var pGame = new Phaser.Game(
            1334, 750,
            Phaser.AUTO,
            ''
        );

        pGame.state.add('boot', new ScreenBoot());
        pGame.state.add('menu', new ScreenMenu());
        pGame.state.add('play', new ScreenPlay());
        pGame.state.add('lost', new ScreenLost());

        this.pGame = pGame;
    }

    start() {
        //this.pGame.state.start('boot');
        this.pGame.state.start('menu');
    }
}
