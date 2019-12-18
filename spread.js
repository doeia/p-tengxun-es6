function addNumbers1(a, b, c, d, e) {
    var numbers = [a, b, c, d, e];
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0)
}
console.log('展开前 ' + addNumbers1(1, 2, 3, 4, 5));
// ------------------------------------------------------------spread
function addNumbers2(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0)
}
console.log('展开后 ' + addNumbers2(1, 2, 3, 4, 5));