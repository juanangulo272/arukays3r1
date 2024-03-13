sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    mySprite2.setPosition(randint(20, 150), randint(20, 150))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    mySprite3.setPosition(randint(20, 150), randint(20, 150))
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel2`)
let mySprite = sprites.create(img`
    ..............fffcc.............
    ..............fbbddc............
    ...............fbbddc...........
    ccc............fcbbccf..........
    cbbcc.........ffccccccffffff....
    .cbbdc.....fffcbbbbbbbbbbbbbff..
    .fbbddc..ffcccbbbbcbcbbbbbbbbbff
    ..fbbdfffcccccbbbcbcbbffbbbbbcbf
    ..fcbbbcccccccbbbcbcb1ff1111bbbf
    ..fccbcccccccccbbbbbb11111111bf.
    .fcbbfffccccccccbbbb11cc33cccf..
    .fbbf...cbdbcccccbbb111c131cf...
    fbbf.....ccdddddfbbbc111c33f....
    fff........ccddfbbdbf1111ff.....
    .............cfbbdbfccccc.......
    ..............fffff.............
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . c c c c c . . . . . . . . 
    . . c 5 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    . c 5 5 5 b b b b b b c . . . . 
    . . c c b b 1 b b 1 1 c . . . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    c c . c 1 1 1 b 1 1 1 1 c . . . 
    c 5 b b 1 1 1 b 1 1 1 d c . . . 
    c 5 5 5 1 b 1 b 1 c 1 d c c . . 
    c 5 b b 1 b 1 1 1 1 1 d d c c . 
    c c . f 1 b b 1 1 1 1 1 d d d f 
    . . . f b b b 1 1 1 1 1 1 f f f 
    . . f 5 5 b b b 1 1 1 f f . . . 
    . . f 5 5 5 5 5 f f f . . . . . 
    . . f f f f f f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite3 = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddbb55555bccc...
    ...ccdddddddcc555bcc....
    ...ccddddddddbcccbcccc..
    .ccbddddddd55dbbbbc55c..
    ccddddddddd555dbbcc5c...
    cddddddbbbdd555bbccc....
    .ccddddbbbbdd55bcc......
    ...cccbbbbbdddbcddcc....
    .....cccccdd555dcccc....
    ..........cccccc........
    `, SpriteKind.Enemy)
mySprite.setPosition(10, 10)
mySprite2.setPosition(randint(20, 150), randint(20, 150))
mySprite3.setPosition(randint(20, 150), randint(20, 150))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.startCountdown(120)
forever(function () {
    mySprite3.follow(mySprite, 60)
    music.play(music.stringPlayable("B A G A G F A C5 ", 150), music.PlaybackMode.UntilDone)
})
