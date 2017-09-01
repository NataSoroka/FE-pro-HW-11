window.onload = function() {

    //////////////// FIRST TASK ////////////////////

    var colors = ["yellow", "blue", "black", "red", "green", "gray", "maroon", "silver", "orange", "olive", "lime", "aqua", "navy", "teal", "fuchsia", "purple"];
    var blocks = document.querySelectorAll('.color');

    function rand() {
        return Math.floor(Math.random() * 16);
    }


    var setColor = setInterval(function() {
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].style.backgroundColor = colors[rand()];
        }
    }, 2000);

    //////////////// SECOND TASK ////////////////////

    var elements = document.querySelectorAll("body>*");
    var arr = [];

    for (var j = 0; j < elements.length; j++) {
        arr.push(elements[j].getAttribute('class'));
    }

    var obj = {};

    for (word of arr)
        obj[word] = obj[word] + 1 || 1;

    var result = [];
    for (word of arr) {
        if (obj[word] === 1)
            result.push(word);
    }
    console.log(arr);

    console.log(result);
}