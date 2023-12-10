namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Fire = sprites.createProjectileFromSprite(assets.image`Agua`, Heroe, 0, -100)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite, effects.hearts, 100)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite, effects.bubbles, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite, effects.disintegrate, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite, effects.bubbles, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite, effects.disintegrate, 100)
    info.changeLifeBy(-1)
})
let Comida: Sprite = null
let Enemigo2: Sprite = null
let Enemigo1: Sprite = null
let Fire: Sprite = null
let Heroe: Sprite = null
scene.setBackgroundImage(assets.image`ciudad`)
Heroe = sprites.create(assets.image`myImage0`, SpriteKind.Player)
Heroe.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
info.setScore(0)
controller.moveSprite(Heroe, 200, 200)
Heroe.setPosition(80, 100)
game.showLongText("Pulsa para comenzar", DialogLayout.Center)
game.onUpdateInterval(5000, function () {
    Enemigo1 = sprites.create(assets.image`zombie3`, SpriteKind.Enemy)
    Enemigo1.setPosition(randint(0, 120), 0)
    Enemigo1.setVelocity(0, -90)
})
game.onUpdateInterval(5000, function () {
    Enemigo2 = sprites.create(assets.image`zombie2`, SpriteKind.Enemy2)
    Enemigo2.setVelocity(0, 10)
    Enemigo2.setPosition(randint(0, 120), 0)
})
forever(function () {
    if (info.score() == 100) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    }
})
game.onUpdateInterval(100, function () {
    Comida = sprites.create(assets.image`Comida`, SpriteKind.Food)
    Comida.setPosition(randint(0, 120), 0)
    Comida.setVelocity(0, -90)
})
