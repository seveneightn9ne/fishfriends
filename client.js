"use strict";

console.log("entry")

var renderer = new PIXI.CanvasRenderer(800, 600, {
	backgroundColor: 0x326EBE})
document.body.appendChild(renderer.view)

var stage = new PIXI.Container()

var fish = null

PIXI.loader.add('fish', 'images/fish.png').load(function (loader, resources) {
	fish = new PIXI.Sprite(resources.fish.texture)
	fish.position.x = 400
	fish.position.y = 300
	fish.scale.x = .1
	fish.scale.y = .1
	stage.addChild(fish)
	animLoop()
})

function animLoop() {
	requestAnimationFrame(animLoop)
	fish.position.x -= 3
	if (fish.position.x <= 0) {
		fish.position.x = renderer.width
	}
	var cycle = Math.sin(Date.now() / 500.)
	fish.position.y = renderer.height / 2 + cycle * 30
	fish.rotation = cycle / 5.
	renderer.render(stage)
}
