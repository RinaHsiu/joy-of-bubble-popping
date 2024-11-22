controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function on_right_repeated() {
    bubble.tilt_angle(bubble.Choice.Right)
})
info.onScore(15, function on_on_score() {
    mySprite.setImage(io2_images.fear)
})
info.onScore(60, function on_on_score2() {
    mySprite.setImage(img`
        ..........................dddd
                ..........6...............dd..
                ...........66..6666......ddd..
                ..........66666666667....dd...
                ......d...676666667667..ddd...
                .dddddd...667666666766..dd....
                .dddddd....667777766676ddd....
                ......dd...667dd7777767dd.....
                .......dd..66cd961dd977dd.....
                ........dd.666d86fdd6fbc......
                .........dd.6d6dddddbdd.......
                ..........dd6bddedddddb.......
                ...........ddcdddeebdda.......
                ............bcbddddddac.......
                ............caaaabbbaa........
                .............a5aaabaa5........
                ..............aaaaaaaa........
                ..............aa7aa55.........
                ...............a55555.........
                ...............a55575.........
                ...............a55555.........
                ...............aa5555.........
                ................aaaaa.........
                ...............a55555.........
                ..............aaaaaaa.........
                ..............a555555.........
                .............a5555555.........
                ............aaaaa5555.........
                ...........aa55555555.........
                ..........aa555a555555........
                ..........a55aaa555555........
                .........a555aa5555a755.......
                ........aa55aa57555a555.......
                .......aa55aa555555a555.......
                .......a55aa555a555a555a......
                ........aaaaaaaaaaaaaaaa......
                ..........bbbb...bbb..........
                ..........ddd....ddd..........
                .........ddd.....ddd..........
                ........ddd......ddd..........
                .......dddd......ddd..........
                ......dddd.......ddd..........
                ......ddd.........dd..........
                .....ddd..........dd..........
                .....dd...........dd..........
                ....ddd............dd.........
                ....dd.............ddd........
                ....dddd.............dd.......
                ..............................
                ..............................
    `)
})
info.onScore(30, function on_on_score3() {
    mySprite.setImage(img`
        ...........aaaaaa55.............
                .........aaacaaafaaaaa..........
                ........caafaa55acaacac.........
                .......ffc5555555a5f5fa5........
                ......bcf5affa555fffacfffcc.....
                .....cfcaf1fa1aaabfa1cfffca.....
                ...dcaafaacca1a5aff5115cacaca...
                .aacaac511aa11151aa5115cacacccc.
                cffcaac5111111b51111115cacaaaca.
                ffacacc5b111115591111b5cacaaaacc
                afccaac5555555555555555caacccacc
                afccaac555555555555555afcaccaac.
                .ccaacc555555555555555afccaaac..
                ..acccaf55555f11c5555affcaaa....
                .....aaaf55555ff55555faaa.......
                .........aac555555a.............
                ..........a.aaacaa.a............
                .........55..cccca.55...........
                ..........588cccc5b5............
                ..........cc988c89c8............
                ............88ccc8..............
                ............c8988c..............
                ...........c888cc8..............
                ..........c89888fc..............
                ..........cccccc8c..............
                ............f...cf..............
    `)
})
info.onScore(45, function on_on_score4() {
    mySprite.setImage(img`
        ........eeeeeeeeeeeeeeee.......
                .......e222222222222eeeee......
                .......eeeddddffeeffffeee....e.
                eee...eeeee111ffee1ff1eee...e2e
                eee2..eeeee22222222222222ecee2e
                e222e.eee22cdc111111111c22ce22e
                eee21.eee2ccdcdd11111dddc2ee22.
                eee11.eee2cd111111111111c2ed2c.
                .dddddd1eee22222222222221cc1c..
                .d1111111dcd111eeeec111c11c1...
                ..d1111ccddccccdeedcccc11111...
                ...dd1ccdd11111eeee1111111c....
                .....11ccbbbbbbeeeebbbbbbbc....
                ......cccbbbbbbceccbbbbbbb.....
                .....ccccccccccbcccccccccc.....
                .....ccccbbbbbbccccbbbbbbb.....
                .....cccccccccccfcccccccccc....
                ...............................
    `)
})
scene.onHitWall(SpriteKind.Bubble, function on_hit_wall(sprite: Sprite, location: tiles.Location) {
    bubble.stick_to_wall(sprite, location)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function on_left_repeated() {
    bubble.tilt_angle(bubble.Choice.Left)
})
let mySprite : Sprite = null
scene.setBackgroundColor(8)
music.play(music.createSong(hex`
        0096000408080106001c00010a006400f401640000040000000000000000000000000000000002d80000000200011608000a00011110001200011618001a00011120002200011628002a00011130003200011638003a00011140004200011848004a00011150005200011858005a00011160006200011868006a00011170007200011878007a00011180008200011288008a00010d90009200011298009a00010da000a2000112a800aa00010db000b2000112b800ba00010dc000c2000118c400c6000118cc00ce000118d000d2000118d800da00011ddc00de00011de400e600011de800ea00011df000f2000120f400f6000120f800fa000120fc00fe000120
    `), music.PlaybackMode.LoopingInBackground)
bubble.createBoard()
bubble.load_bubble()
mySprite = sprites.create(assets.image`
    happyness joy
`, SpriteKind.Player)
mySprite.top = 102
