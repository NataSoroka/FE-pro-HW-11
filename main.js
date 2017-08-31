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
    var unicArr = [];
    var Str = ""

    for (var j = 0; j < elements.length; j++) {
        arr.push(elements[j].getAttribute('class'));
    }


    for (var i = 0; i < arr.length; i++) {
        Str += arr[i] + " ";
    }

    console.log(unicStr);


    for (var k = 0; k < arr.length; k++) {
        var elem = Str.indexOf(arr[k]);
        if (unicStr.indexOf(arr[k], elem + 1) == -1) {
            unicArr.push(arr[k]);
        }
    }

    console.log(unicArr);
}