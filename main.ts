let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGBW)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
strip.show()
basic.showLeds(`
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # # # # #
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        strip.shift(1)
        strip.show()
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
        basic.pause(2000)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 F G D B C A E ", 120), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 1, 166, 150, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
