var colors = ['red', 'blue', 'green']

//es5
for (var i = 0; i < colors.length; i++) {
    //console.log(colors[i]);
}

//es6forEach
colors.forEach(function (color) {
    //console.log(color);
})

//es6map
var numbers = [1, 2, 3]
var doubled = numbers.map(function (number) {
    return number * 2;
})
//console.log(doubled);


