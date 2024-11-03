const config = {
	type: Phaser.AUTO,
	width: 1000,
	height: 600,
	physics: {
		default: 'arcade',
		gravity: { y: 0 },
		arcade: {
			debug: false,
		},
	},
	scene: {
		preload: preload,
		create: create,
		update: update,
	},
}

let game = new Phaser.Game(config)
let hero
let zombie
let cursors
let aKey

function preload() {
	this.load.spritesheet('hero', 'assets/hero.png', {
		frameWidth: 96,
		frameHeight: 128,
	})
	this.load.spritesheet('zombie', 'assets/zombie.png', {
		frameWidth: 96,
		frameHeight: 128,
	})
}

function create() {
	// zombie = this.add.sprite(200, 400, 'zombie')

	this.anims.create({
		key: 'left',
		frames: this.anims.generateFrameNumbers('hero', { start: 36, end: 39 }),
		frameRate: 10,
		repeat: -1,
	})
	this.anims.create({
		key: 'turn',
		frames: [{ key: 'hero', frame: 0 }],
		frameRate: 20,
	})
	this.anims.create({
		key: 'right',
		frames: this.anims.generateFrameNumbers('hero', { start: 36, end: 39 }),
		frameRate: 10,
		repeat: -1,
	})
	this.anims.create({
		key: 'up',
		frames: this.anims.generateFrameNumbers('hero', { start: 5, end: 6 }),
		frameRate: 5,
		repeat: -1,
	})
	this.anims.create({
		key: 'down',
		frames: this.anims.generateFrameNumbers('hero', { start: 6, end: 7 }),
		frameRate: 5,
		repeat: -1,
	})
	this.anims.create({
		key: 'attackA',
		frames: this.anims.generateFrameNumbers('hero', { start: 28, end: 29 }),
		frameRate: 5,
		repeat: 0,
	})

	hero = this.physics.add.sprite(100, 400, 'hero')
	hero.setCollideWorldBounds(true)

	cursors = this.input.keyboard.createCursorKeys()
	aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
}

function update() {
	let isMoving = false
	hero.setVelocity(0)
	//Moving X
	if (cursors.left.isDown) {
		hero.flipX = true
		hero.setVelocityX(-160)
		hero.anims.play('left', true)
		isMoving = true
	} else if (cursors.right.isDown) {
		hero.flipX = false
		hero.setVelocityX(160)
		hero.anims.play('right', true)
		isMoving = true
	} else {
		hero.setVelocityX(0)
	}
	//Moving Y
	if (cursors.up.isDown) {
		hero.setVelocityY(-160)
		hero.anims.play('up', true)
		isMoving = true
	} else if (cursors.down.isDown) {
		hero.setVelocityY(160)
		hero.anims.play('down', true)
		isMoving = true
	} else {
		hero.setVelocityY(0)
	}
	//Attacking
	if (aKey.isDown) {
		hero.anims.play('attackA', true)
	}

	if (!isMoving) {
		hero.anims.play('turn', true)
		if (aKey.isDown) {
			hero.anims.play('attackA', true)
		}
	}
}
