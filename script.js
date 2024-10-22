const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: {
		preload: preload,
		create: create,
		update: update,
	},
}

let game = new Phaser.Game(config)

function preload() {
	this.load.image('background', '/assets/background.jpg')
	this.load.spritesheet('hero', 'assets/hero.png', {
		frameWidth: 100,
		frameHeight: 150,
	})
	this.load.spritesheet('zombie', 'assets/zombie.png', {
		frameWidth: 100,
		frameHeight: 150,
	})
}

function create() {
	this.add.image(400, 300, 'background')
	this.hero = this.add.sprite(100, 400, 'hero')
	this.zombie = this.add.sprite(200, 400, 'zombie')
}

function update() {}
