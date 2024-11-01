input.onButtonPressed(Button.A, function () {
    index = (index - 1 + symbols.length) % symbols.length
    basic.showString("" + (symbols[index]))
})
input.onButtonPressed(Button.B, function () {
    index = (index + 1) % symbols.length
    basic.showString("" + (symbols[index]))
})
let index = 0
let symbols: string[] = []
symbols = [
"H",
"He",
"Li",
"Be",
"B",
"C",
"N",
"O",
"F",
"Ne"
]
basic.showString("" + (symbols[index]))
