"use strict";

console.log("entry")

var renderer = new PIXI.CanvasRenderer(800, 600, {
	backgroundColor: 0x326EBE})
document.body.appendChild(renderer.view)

var stage = new PIXI.Container()

var fishes = []

PIXI.loader.add('fish', 'images/fish.png').load(function (loader, resources) {
	for (var i = 0; i < 8; i++) {
		var fish = new PIXI.Sprite(resources.fish.texture)
		fishes.push(fish)
		fish.position.x = 400
		fish.position.y = 300
		fish.scale.x = .1
		fish.scale.y = .1
		stage.addChild(fish)
	}

	animLoop()
})

function animLoop() {
	requestAnimationFrame(animLoop)
	fishes.forEach((fish, i) => {
		fish.position.x -= 3 + Math.sin(i)
		if (fish.position.x <= -90) {
			fish.position.x = renderer.width + 100
		}
		let cycle = Math.sin(Date.now() / 500. + i * 0.8)
		fish.position.y = (-200 + 50 * i) + renderer.height / 2 + cycle * 30
		fish.rotation = cycle / 5.
	})
	renderer.render(stage)
}
