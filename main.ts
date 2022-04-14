let myCounter = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 1)
myCounter.count = 9
forever(function () {
    myCounter.count += -1
    pause(500)
})
