const randomName = require("@jkeesee/random-name");

module.exports = (id) => {
	return {
		x: 160,
		y: 80,
		dx: 160,
		dy: 80,
		frame: 0,
		dir: 0,
		rotate: 0,
		zKey: false,
		headColor: "white",
		bodyColor: "red",
		legColor: "blue",
		headArmor: -1,
		bodyArmor: -1,
		legArmor: -1,
		editor: false,
		name: randomName(),
		profile: "images/profile/default.png",
		i: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
		b: [
			-1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1,
		],
		holding: 0,
		scene: 7,
		id,
		chest: false,
		bed: false,
		minecart: false,
		health: 100,
		hunger: 120,
		cooldown: 0,
		respawnX: 160,
		respawnY: 80,
		respawnScene: 7,
		mouse: {
			x: 0,
			y: 0,
			w: 0,
			h: 0,
			click: false,
		},
		cx: 0,
		cy: 0,
	}
}