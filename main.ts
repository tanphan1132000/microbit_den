radio.onReceivedString(function (receivedString) {
    if (receivedString == "LIGHT:ON") {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (receivedString == "LIGHT:OFF") {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
radio.setGroup(1)
