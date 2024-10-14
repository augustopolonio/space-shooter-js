let player;

// Game scene
class SpaceShooter extends Phaser.Scene {
  preload() {
    const stpriteConfig = {
      frameWidth: 106,
      frameHeight: 80      
    }

    this.load.spritesheet('player', 'assets/player.png', stpriteConfig)
  }

  create() {
    player = this.physics.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 50, 
      'player'
    );
    player.depth = 1;
    player.setCollideWorldBounds(true);

    
  }

  update(ts, dt) {
  }
}

// Game config
const game = new Phaser.Game({
  type: Phaser.CANVAS,
  backgroundColor: '#0B1215',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    }
  },
  scene: [SpaceShooter]
})