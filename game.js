// Game scene
class SpaceShooter extends Phaser.Scene {
  preload() {
  }

  create() {
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