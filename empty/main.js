var mainState = {
    preload: function() {
        // load images + sound here
        game.load.image('bird', 'assets/bird.png');
    },

    create: function() {
        // game display, sprites

        game.state.backgroundColor = "#71c5cf";

        // physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // display bird
        this.bird = game.add.sprite(100, 245, 'bird');

        // birds physicsy
        game.phycics.arcade.enable(this.bird);

        // bird gravity
        this.bird.body.gravity.y = 1000;

        // jump
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
    },

    update: function() {
        //games logic, called 60 times per second

        // checks if bird is out of screen
        if (this.bird.y < 0 || this.bird.y > 490){
            this.restartGame();
        }
    },

    jump: function() {
        // vertical velocity

        this.bird.body.velocity.y = -350;
    },

    restartGame: function() {
        // restart
        game.state.start('main');
    }
};

// initialize phaser, 400px x 490px game
var game = new Phaser.Game(400, 490);

// add main state + call it main
game.state.add('main', mainState);

// start game
game.state.start('main');