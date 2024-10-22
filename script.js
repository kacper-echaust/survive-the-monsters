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

const game = new Phaser.game(config)

const preload = () => {}

const create = () => {}

const update = () => {}
