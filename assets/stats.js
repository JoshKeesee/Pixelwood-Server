const itemStats = {
	"-1": {
		name: "",
		type: "",
		cb: [53, 32000, 52, 178, 179, 180, 64, 65, 72, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 217, 218, 219, 220, 221, 172, 173, 174, 175, 176, 177],
		power: 1,
		setArmor: -1,
	},
	0: {
		name: "Wooden Pickaxe",
		type: "pickaxe",
		cb: [57, 63, 72, 172, 173, 174, 175, 176, 177],
		power: 1,
	},
	1: {
		name: "Wooden Sword",
		type: "sword",
		cb: [],
		power: 2,
	},
	2: {
		name: "Wooden Axe",
		type: "axe",
		cb: [53, 32000, 64, 65, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 217, 218, 219, 220, 221],
		power: 2,
	},
	3: {
		name: "Wooden Hoe",
		type: "hoe",
		cb: [52, 178, 179, 180],
		power: 2,
	},
	4: {
		name: "Gold Pickaxe",
		type: "pickaxe",
		cb: [57, 58, 63, 72, 172, 173, 174, 175, 176, 177],
		power: 4,
	},
	5: {
		name: "Gold Sword",
		type: "sword",
		cb: [],
		power: 4,
	},
	6: {
		name: "Gold Axe",
		type: "axe",
		cb: [53, 32000, 64, 65, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 217, 218, 219, 220, 221],
		power: 4,
	},
	7: {
		name: "Gold Hoe",
		type: "hoe",
		cb: [52, 178, 179, 180],
		power: 4,
	},
	8: {
		name: "Iron Pickaxe",
		type: "pickaxe",
		cb: [57, 58, 59, 63, 72, 172, 173, 174, 175, 176, 177],
		power: 6,
	},
	9: {
		name: "Iron Sword",
		type: "sword",
		cb: [],
		power: 6,
	},
	10: {
		name: "Iron Axe",
		type: "axe",
		cb: [53, 32000, 64, 65, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 217, 218, 219, 220, 221],
		power: 6,
	},
	11: {
		name: "Iron Hoe",
		type: "hoe",
		cb: [52, 178, 179, 180],
		power: 6,
	},
	12: {
		name: "Ruby Pickaxe",
		type: "pickaxe",
		cb: [57, 58, 59, 60, 63, 72, 172, 173, 174, 175, 176, 177],
		power: 8,
	},
	13: {
		name: "Ruby Sword",
		type: "sword",
		cb: [],
		power: 8,
	},
	14: {
		name: "Ruby Axe",
		type: "axe",
		cb: [53, 32000, 64, 65, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 217, 218, 219, 220, 221],
		power: 8,
	},
	15: {
		name: "Ruby Hoe",
		type: "hoe",
		cb: [52, 178, 179, 180],
		power: 8,
	},
	16: {
		name: "Diamond Pickaxe",
		type: "pickaxe",
		cb: [57, 58, 59, 60, 61, 62, 63, 72, 172, 173, 174, 175, 176, 177],
		power: 12,
	},
	17: {
		name: "Diamond Sword",
		type: "sword",
		cb: [],
		power: 12,
	},
	18: {
		name: "Diamond Axe",
		type: "axe",
		cb: [53, 32000, 64, 65, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 217, 218, 219, 220, 221],
		power: 12,
	},
	19: {
		name: "Diamond Hoe",
		type: "hoe",
		cb: [52, 178, 179, 180],
		power: 12,
	},
	20: {
		name: "Platinum Pickaxe",
		type: "pickaxe",
		cb: [57, 58, 59, 60, 61, 62, 63, 72, 172, 173, 174, 175, 176, 177],
		power: 20,
	},
	21: {
		name: "Platinum Sword",
		type: "sword",
		cb: [],
		power: 40,
	},
	22: {
		name: "Platinum Axe",
		type: "axe",
		cb: [53, 32000, 64, 65, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 217, 218, 219, 220, 221],
		power: 20,
	},
	23: {
		name: "Platinum Hoe",
		type: "hoe",
		cb: [52, 178, 179, 180],
		power: 20,
	},
	24: {
		name: "Stick",
		type: "fuel",
		cb: [53, 32000],
		power: 1,
		fuelAmount: 10,
	},
	25: {
		name: "Gold Ingot",
		type: "ingot",
		cb: [],
	},
	26: {
		name: "Iron Ingot",
		type: "ingot",
		cb: [],
	},
	27: {
		name: "Ruby Ingot",
		type: "ingot",
		cb: [],
	},
	28: {
		name: "Diamond Ingot",
		type: "ingot",
		cb: [],
	},
	29: {
		name: "Emerald Ingot",
		type: "ingot",
		cb: [],
	},
	30: {
		name: "Platinum Ingot",
		type: "ingot",
		cb: [],
	},
	31: {
		name: "Coal Ingot",
		type: "fuel",
		fuelAmount: 50,
		cb: [],
	},
	32: {
		name: "Torch",
		type: "torch",
		cb: [],
		animate: true,
		placeable: true,
	},
	36: {
		name: "Wooden Helmet",
		type: "helmet",
		cb: [],
		setArmor: 0,
	},
	37: {
		name: "Wooden Chestplate",
		type: "chestplate",
		cb: [],
		setArmor: 0,
	},
	38: {
		name: "Wooden Leggings",
		type: "leggings",
		cb: [],
		setArmor: 0,
	},
	39: {
		name: "Gold Helmet",
		type: "helmet",
		cb: [],
		setArmor: 1,
	},
	40: {
		name: "Gold Chestplate",
		type: "chestplate",
		cb: [],
		setArmor: 1,
	},
	41: {
		name: "Gold Leggings",
		type: "leggings",
		cb: [],
		setArmor: 1,
	},
	42: {
		name: "Iron Helmet",
		type: "helmet",
		cb: [],
		setArmor: 2,
	},
	43: {
		name: "Iron Chestplate",
		type: "chestplate",
		cb: [],
		setArmor: 2,
	},
	44: {
		name: "Iron Leggings",
		type: "leggings",
		cb: [],
		setArmor: 2,
	},
	45: {
		name: "Ruby Helmet",
		type: "helmet",
		cb: [],
		setArmor: 3,
	},
	46: {
		name: "Ruby Chestplate",
		type: "chestplate",
		cb: [],
		setArmor: 3,
	},
	47: {
		name: "Ruby Leggings",
		type: "leggings",
		cb: [],
		setArmor: 3,
	},
	48: {
		name: "Diamond Helmet",
		type: "helmet",
		cb: [],
		setArmor: 4,
	},
	49: {
		name: "Diamond Chestplate",
		type: "chestplate",
		cb: [],
		setArmor: 4,
	},
	50: {
		name: "Diamond Leggings",
		type: "leggings",
		cb: [],
		setArmor: 4,
	},
	51: {
		name: "Platinum Helmet",
		type: "helmet",
		cb: [],
		setArmor: 5,
	},
	52: {
		name: "Platinum Chestplate",
		type: "chestplate",
		cb: [],
		setArmor: 5,
	},
	53: {
		name: "Platinum Leggings",
		type: "leggings",
		cb: [],
		setArmor: 5,
	},
	54: {
		name: "Minecart",
		type: "minecart",
		cb: [],
		placeable: true,
		placeOn: [172, 173, 174, 175, 176, 177],
		speed: 8,
		id: 0,
	},
	55: {
		name: "Cherry",
		type: "food",
		cb: [],
		hunger: 10,
	},
	56: {
		name: "Dirty Potato",
		type: "food",
		cb: [],
		hunger: 5,
	},
	57: {
		name: "Potato",
		type: "food",
		cb: [],
		hunger: 20,
	},
	58: {
		name: "Burnt Potato",
		type: "food",
		cb: [],
		hunger: -5,
	},
	59: {
		name: "Carrot",
		type: "food",
		cb: [],
		hunger: 12,
	},
	60: {
		name: "Cooked Carrot",
		type: "food",
		cb: [],
		hunger: 17,
	},
	61: {
		name: "Wheat",
		type: "plant",
		cb: [],
	},
	62: {
		name: "Bread",
		type: "food",
		cb: [],
		hunger: 40,
	},
	63: {
		name: "Bow",
		type: "bow",
		cb: [],
		animate: true,
	},
	67: {
		name: "Arrow",
		type: "arrow",
		cb: [],
	},
	68: {
		name: "Boat",
		type: "boat",
		cb: [],
		placeable: true,
		placeOn: [40, 44, 45, 46, 47, 48, 49, 50, 51],
		speed: 8,
		id: 3,
	},
	69: {
		name: "Workbench",
		type: "utility",
		cb: [],
		placeable: true,
		placeId: 64,
	},
	70: {
		name: "Chest",
		type: "utility",
		cb: [],
		placeable: true,
		placeId: 65,
	},
	71: {
		name: "Furnace",
		type: "utility",
		cb: [],
		placeable: true,
		placeId: 72,
	},
	72: {
		name: "Fence",
		type: "fence",
		cb: [],
		placeable: true,
		placeId: 181,
	},
	73: {
		name: "Rail",
		type: "rail",
		cb: [],
		placeable: true,
		placeId: 172,
	},
	74: {
		name: "Dark Knight Sword",
		type: "sword",
		cb: [],
		power: 15,
	},
	75: {
		name: "String",
		type: "string",
		cb: [],
	},
	76: {
		name: "Egg",
		type: "throwable",
		cb: [],
	},
	77: {
		name: "Chicken",
		type: "food",
		cb: [],
		hunger: 30,
	},
	78: {
		name: "Burnt Chicken",
		type: "food",
		cb: [],
		hunger: -10,
	},
	79: {
		name: "Dark Shard",
		type: "ingot",
		cb: [],
		animate: true,
	},
	83: {
		name: "Dark Knight Pickaxe",
		type: "pickaxe",
		cb: [57, 58, 59, 60, 61, 62, 63, 72, 172, 173, 174, 175, 176, 177],
		power: 15,
	},
	84: {
		name: "Dark Knight Axe",
		type: "axe",
		cb: [53, 32000, 64, 65, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 217, 218, 219, 220, 221],
		power: 15,
	},
	85: {
		name: "Dark Knight Hoe",
		type: "hoe",
		cb: [52, 178, 179, 180],
		power: 15,
	},
};
const blockStats = {
	52: {
		name: "Bush",
		type: "plant",
		durability: 1,
		gives: [55],
	},
	53: {
		name: "Tree",
		type: "plant",
		durability: 1,
		gives: [24],
	},
	54: {
		name: "Flowers",
		type: "plant",
		durability: 1,
	},
	55: {
		name: "Flowers",
		type: "plant",
		durability: 1,
	},
	56: {
		name: "Flowers",
		type: "plant",
		durability: 1,
	},
	57: {
		name: "Gold Ore",
		type: "ore",
		durability: 1,
		gives: [25],
	},
	58: {
		name: "Iron Ore",
		type: "ore",
		durability: 2,
		gives: [26],
	},
	59: {
		name: "Ruby Ore",
		type: "ore",
		durability: 4,
		gives: [27],
	},
	60: {
		name: "Diamond Ore",
		type: "ore",
		durability: 6,
		gives: [28],
	},
	61: {
		name: "Emerald Ore",
		type: "ore",
		durability: 8,
		gives: [29],
	},
	62: {
		name: "Platinum Ore",
		type: "ore",
		durability: 10,
		gives: [30],
	},
	63: {
		name: "Coal Ore",
		type: "ore",
		durability: 3,
		gives: [31],
	},
	64: {
		name: "Workbench",
		type: "utility",
		durability: 2,
		gives: [69],
	},
	65: {
		name: "Chest",
		type: "utility",
		durability: 2,
		gives: [70],
	},
	67: {
		name: "Sign",
		type: "utility",
		gives: [],
	},
	68: {
		name: "Portal",
		type: "utility",
		gives: [],
	},
	72: {
		name: "Furnace",
		type: "utility",
		durability: 2,
		gives: [71],
	},
	77: {
		name: "Ladder",
		type: "utility",
		gives: [],
	},
	132: {
		name: "Bed",
		type: "utility",
		gives: [],
	},
	133: {
		name: "Bed",
		type: "utility",
		gives: [],
		height: 2,
	},
	134: {
		name: "Wardrobe",
		type: "utility",
		gives: [],
	},
	135: {
		name: "Wardrobe",
		type: "utility",
		gives: [],
		height: 2,
	},
	172: {
		name: "Rail",
		type: "rail",
		durability: 0.5,
		gives: [73],
	},
	173: {
		name: "Rail",
		type: "rail",
		durability: 0.5,
		gives: [73],
	},
	174: {
		name: "Rail",
		type: "rail",
		durability: 0.5,
		gives: [73],
	},
	175: {
		name: "Rail",
		type: "rail",
		durability: 0.5,
		gives: [73],
	},
	176: {
		name: "Rail",
		type: "rail",
		durability: 0.5,
		gives: [73],
	},
	177: {
		name: "Rail",
		type: "rail",
		durability: 0.5,
		gives: [73],
	},
	178: {
		name: "Wheat",
		type: "plant",
		durability: 1,
		gives: [61],
	},
	179: {
		name: "Carrots",
		type: "plant",
		durability: 1,
		gives: [59],
	},
	180: {
		name: "Potatoes",
		type: "plant",
		durability: 1,
		gives: [56],
	},
	181: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	182: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	183: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	184: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	185: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	186: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	187: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	188: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	189: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	190: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	191: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	217: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	218: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	219: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	220: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	221: {
		name: "Fence",
		type: "fence",
		durability: 2,
		gives: [72],
	},
	32000: {
		name: "Torch",
		type: "torch",
		durability: 0.02,
		gives: [32],
	},
};

const enemyTypes = {
	"dark_knight": true,
};

const enemyGives = {
	"dark knight": [79],
};

const animalTypes = {
	"rooster": 7,
	"cat": 23,
};

const animalGives = {
	"rooster": [77],
	"cat": [75],
};

const dontCollide = [-1, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 54, 55, 56, 178, 179, 180, 78, 79, 80, 81, 82, 83, 102, 103, 104, 105, 106, 107, 136, 137, 138, 139, 140, 141, 172, 173, 174, 175, 176, 177, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 205, 209, 213];

function canBreak(id, v) {
	return itemStats[id].cb.includes(v);
}

function colliding(r1, r2) {
	return !(
		r1.x > r2.x + r2.w ||
		r1.x + r1.w < r2.x ||
		r1.y > r2.y + r2.h ||
		r1.y + r1.h < r2.y
	);
};

Object.freeze(itemStats);
Object.freeze(blockStats);
Object.freeze(enemyGives);
Object.freeze(animalGives);
Object.freeze(enemyTypes);
Object.freeze(animalTypes);

module.exports = {
	itemStats,
	blockStats,
	enemyGives,
	animalGives,
	enemyTypes,
	animalTypes,
	canBreak,
	dontCollide,
	colliding,
	tsize: 80,
};