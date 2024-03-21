const { capitalize, reverseString, Calculator, ceaser, analyzeArray } = require("./script")

test('capitalize lowercase', () => {
    expect(capitalize("test")).toMatch(/Test/)
})

test('capitalize, UPPERCASE', () => {
    expect(capitalize("TEST")).toMatch(/TEST/)
})

test('reverse string', () => {
    expect(reverseString("test")).toMatch(/tset/)
})

let calc = new Calculator()

test('add: 5 + 4', () => {
    expect(calc.add(4,5)).toEqual(9)
})

test('subtract: 5 - 4', () => {
    expect(calc.subtract(5,4)).toEqual(1)
})

test('multiply: 5 * 4', () => {
    expect(calc.multiply(5,4)).toEqual(20)
})

test('divide: 20 / 5', () => {
    expect(calc.divide(20, 5)).toEqual(4)
})

test('ceaser, LOWERCASE', () => {
    expect(ceaser("za.", 5)).toEqual("ef.")
})

test('ceaser, CAPITAL', () => {
    expect(ceaser("Za.", 5)).toEqual("Ef.")
})

let object = {
    average: 3,
    min: 1,
    max: 5,
    length: 5
}

test("average, POPULATED", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual(object)
})

test("average, EMPTY", () => {
    expect(analyzeArray([])).toEqual(null)
})

test("average, SINGLE", () => {
    expect(analyzeArray([1])).toEqual({average: 1, min: 1, max: 1, length: 1})
})