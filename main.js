window.onload = function() {

    //////////////// FIRST TASK ////////////////////

    var blocks = document.querySelectorAll('.color');

    function rand() {
        return Math.floor(Math.random() * 255);
    }


    var setColor = setInterval(function() {
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].style.backgroundColor = "rgb(" + rand() + "," + rand() + "," + rand() + ")";
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