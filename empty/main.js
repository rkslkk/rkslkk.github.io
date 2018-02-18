var mainState = {
    preload: function() {
        // load images + sound here
        game.load.image('bird', 'assets/bird.png');
        game.load.image('pipe', 'assets/pipe.png');
    },

    create: function() {
        // game display, sprites

        game.stage.backgroundColor = "#71c5cf";

        // physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // display bird
        this.bird = game.add.sprite(100, 245, 'bird');

        // birds physicsy
        game.physics.arcade.enable(this.bird);

        // bird gravity
        this.bird.body.gravity.y = 1000;

        // jump
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
        
        // create empty group
        this.pipes = game.add.group();
        
        // call pipes
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
        
        // score
        this.score = 0;
        this.labelScore = game.add.text(20, 20, "0", {font: "30px Arial", fill: "#ffffff"});
    },

    update: function() {
        //games logic, called 60 times per second

        // checks if bird is out of screen
        if (this.bird.y < 0 || this.bird.y > 490){
            this.restartGame();
        }
        
        game.physics.arcade.overlap(this.bird, this.pipes, this.restartGame, null, this);
    },

    jump: function() {
        // vertical velocity

        this.bird.body.velocity.y = -350;
    },

    restartGame: function() {
        // restart
        game.state.start('main');
    },
    
    
    addOnePipe: function(x, y) {
        
        // create pipe at x, y
        var pipe = game.add.sprite(x, y, 'pipe');
        
        // add pipe to group
        this.pipes.add(pipe);
        
        // enable pipe physics
        game.physics.arcade.enable(pipe);
        
        // velocity to move it far left
        pipe.body.velocity.x = -200;
        
        // kill pipe when no longer visible
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },
    
    addRowOfPipes: function() {
    // random # between 1-5
    //hole position
    var hole = Math.floor(Math.random() * 5) + 1;
    
    // add sixs pipes
    for (var i = 0; i < 8; i++) {
    if (i != hole && i != hole + 1) {
    this.addOnePipe(400, i * 60 + 10);
}
}
        this.score += 1;
        this.labelScore.text = this.score;
}
    
};

// initialize phaser, 400px x 490px game
var game = new Phaser.Game(400, 490);

// add main state + call it main
game.state.add('main', mainState);

// start game
game.state.start('main');