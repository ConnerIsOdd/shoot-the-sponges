def shooting(player1):
    bullet = sprites.create_projectile_from_sprite(assets.image("""bullet"""), player1, 250, 0)
    return None

    
    

def main():
    scene.set_background_color(1)
    player1 = sprites.create(assets.image("""player1"""), SpriteKind.player)
    player1.set_stay_in_screen(True)
    player1.set_position(10, 60)
    controller.move_sprite(player1, 50, 35)
    controller.player1.on_button_event(ControllerButton.A, ControllerButtonEvent.PRESSED, shooting(player1))

main()