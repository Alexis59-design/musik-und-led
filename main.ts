let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGBW)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
strip.show()
basic.showString(" hello luca i'm playing Piano ")
basic.showLeds(`
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # # # # #
    `)
music.play(music.stringPlayable("C5 C E B G G F A ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C5 B A G G A B C5 ", 120), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Happy)
music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
basic.showString(" was that nice yes it was")
music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
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
        music.play(music.stringPlayable("B E B C5 F B A C ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G F G A C F E D ", 120), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G F E D C D E F ", 120), music.PlaybackMode.UntilDone)
    }
})
