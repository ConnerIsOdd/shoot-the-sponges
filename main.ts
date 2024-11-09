function shooting(player1: any): () => void {
    let bullet = sprites.createProjectileFromSprite(assets.image`bullet`, player1, 250, 0)
    return null
}

function main() {
    scene.setBackgroundColor(1)
    let player1 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player1.setStayInScreen(true)
    player1.setPosition(10, 60)
    controller.moveSprite(player1, 50, 35)
    controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, shooting(player1))
}

main()
