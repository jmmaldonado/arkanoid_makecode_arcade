namespace SpriteKind {
    export const brick = SpriteKind.create()
}
function construir_muro (filas: number, columnas: number) {
    for (let fila = 0; fila <= filas; fila++) {
        for (let columna = 0; columna <= columnas; columna++) {
            ladrillo = sprites.create(img`
                d d d d d d d d d d d d d d d c 
                d b b b b b b b b b b b b b b c 
                d b b b b b b b b b b b b b b c 
                d b b b b b b b b b b b b b b c 
                d b b b b b b b b b b b b b b c 
                d b b b b b b b b b b b b b b c 
                d b b b b b b b b b b b b b b c 
                d c c c c c c c c c c c c c c c 
                `, SpriteKind.brick)
            ladrillo.setPosition(24 + columna * 16, 16 + fila * 8)
        }
    }
}
let ladrillo: Sprite = null
scene.setBackgroundColor(1)
let nave = sprites.create(img`
    . . c c c c b b b b b b b b b b b b c c c c . . 
    . c c c c c b b b b b 1 b b b 1 b b c c c c c . 
    c 1 c c c c 1 1 b 1 1 1 1 1 1 b 1 1 c c c c 1 c 
    c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c 
    c 1 c c c c 1 1 b 1 1 1 1 1 1 b 1 1 c c c c 1 c 
    . c c c c c b b 1 b b 1 b b b b b b c c c c c . 
    . . c c c c b b b b b b b b b b b b c c c c . . 
    `, SpriteKind.Player)
let bola = sprites.create(img`
    . f f . 
    f 1 1 f 
    f 1 1 f 
    . f f . 
    `, SpriteKind.Projectile)
nave.y = 110
construir_muro(4, 7)
