def on_a_pressed():
    global Fuego
    Fuego = sprites.create_projectile_from_sprite(assets.image("""
        Agua
    """), Heroe, 0, -100)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

Zombie1: Sprite = None
Fuego: Sprite = None
Heroe: Sprite = None
scene.set_background_image(assets.image("""
    ciudad
"""))
Heroe = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
Heroe.set_stay_in_screen(True)
Heroe.set_position(80, 100)
controller.move_sprite(Heroe, 200, 200)
game.show_long_text("Pulsa para comenzar", DialogLayout.CENTER)
info.set_life(5)
info.set_score(0)

def on_update_interval():
    global Zombie1
    Zombie1 = sprites.create(assets.image("""
        zombie3
    """), SpriteKind.enemy)
    Zombie1.set_position(scene.screen_height(), randint(10, 110))
    Zombie1.y = 20
game.on_update_interval(500, on_update_interval)
