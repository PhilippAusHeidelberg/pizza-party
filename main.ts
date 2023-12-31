mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (mp.isButtonPressed(mp.getPlayerBySprite(sprite), mp.MultiplayerButton.A)) {
        scene.cameraShake(4, 500)
        pizza.bumpSprite(otherSprite, otherSprite)
        mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    }
})
mp.onScore(20, function (thisPlayer) {
    game.gameOver(true)
})
let projectile: Sprite = null
let characters: Image[] = []
characters = [
assets.image`Raphael`,
assets.image`Leonardo`,
assets.image`Michelangelo`,
assets.image`Donatello`
]
scene.setBackgroundImage(assets.image`cityscape`)
pizza.setPlayersWith(characters, 1)
game.splash("Press (A) when everyone is", "ready to start the game")
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-100, 100), randint(-100, 100))
})
