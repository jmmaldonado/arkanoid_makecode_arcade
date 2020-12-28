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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    direccion_y = -1
    if (bola.x < nave.x + 0) {
        direccion_x = -1
    } else {
        direccion_x = 1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.brick, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    if (info.score() == (filas + 1) * (columnas + 1)) {
        game.over(true)
    }
    if (sprite.y > otherSprite.y) {
        direccion_y = 1
    } else {
        direccion_y = -1
    }
    if (sprite.x > otherSprite.x) {
        direccion_x = 1
    } else {
        direccion_x = -1
    }
    otherSprite.destroy()
})
function sacar_bola () {
    direccion_y = 1
    direccion_x = 1
    bola.y = 70
    bola.x = 80
}
let direccion_x = 0
let direccion_y = 0
let ladrillo: Sprite = null
let columnas = 0
let filas = 0
let bola: Sprite = null
let nave: Sprite = null
scene.setBackgroundColor(1)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16], TileScale.Sixteen))
nave = sprites.create(img`
    . . c c c c b b b b b b b b b b b b c c c c . . 
    . c c c c c b b b b b 1 b b b 1 b b c c c c c . 
    c 1 c c c c 1 1 b 1 1 1 1 1 1 b 1 1 c c c c 1 c 
    c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c 
    c 1 c c c c 1 1 b 1 1 1 1 1 1 b 1 1 c c c c 1 c 
    . c c c c c b b 1 b b 1 b b b b b b c c c c c . 
    . . c c c c b b b b b b b b b b b b c c c c . . 
    `, SpriteKind.Player)
bola = sprites.create(img`
    . f f . 
    f 1 1 f 
    f 1 1 f 
    . f f . 
    `, SpriteKind.Projectile)
nave.y = 110
filas = 4
columnas = 7
construir_muro(filas, columnas)
info.setLife(3)
info.setScore(0)
controller.moveSprite(nave, 100, 0)
sacar_bola()
game.onUpdate(function () {
    bola.x += direccion_x
    bola.y += direccion_y
    if (bola.y >= 110) {
        info.changeLifeBy(-1)
        if (info.life() == 0) {
            game.over(false)
        } else {
            sacar_bola()
        }
    }
    if (bola.y <= 2) {
        direccion_y = 1
    }
    if (bola.x >= scene.screenWidth() - 2) {
        direccion_x = -1
    }
    if (bola.x <= 2) {
        direccion_x = 1
    }
})
