"use strict";

console.log("entry")

var renderer = new PIXI.CanvasRenderer(800, 600)
document.body.appendChild(renderer.view)

var stage = new PIXI.Container()

var bunny = null

PIXI.loader.add('bunny', 'images/bunny.png').load(function (loader, resources) {
	bunny = new PIXI.Sprite(resources.bunny.texture)
	bunny.position.x = 400
	bunny.position.y = 300
	bunny.scale.x = 2
	bunny.scale.y = 2
	stage.addChild(bunny)
	animLoop()
})

function animLoop() {
	requestAnimationFrame(animLoop)
	bunny.rotation += 0.01
	renderer.render(stage)
}
