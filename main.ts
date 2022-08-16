music.playMelody("F F G G F E D E ", 120)
music.setBuiltInSpeakerEnabled(false)
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
