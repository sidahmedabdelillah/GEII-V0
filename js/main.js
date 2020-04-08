var num = 0;
var prev = 0;

var slides = $(".slide");
var nxt = $("#nxtbtn");
var prv = $("#prvbtn");

loop();
for (var i = 0; i < slides.length; i++) {
    $(slides[i]).css("display", 'none');
}

function loop() {
    gotonext();
    setTimeout(loop, 5000);
}

prv.click(function() {
    prev = num;
    num--;
    if (num < 0) {
        num = slides.length - 1;
        prev = 0;
    };
    goto(num, prev);

});
nxt.click(gotonext);


function gotonext() {
    prev = num;
    num++;
    if (num >= slides.length) {
        num = 0;
        prev = slides.length - 1;
    }
    goto(num, prev);
}

function goto(nxt, prv) {
    document.getElementById("nxtbtn").disabled = true;
    document.getElementById("prvbtn").disabled = true;

    $(slides[prv]).fadeOut(500, () => {
        for (var i = 0; i < slides.length; i++) {
            $(slides[i]).css("display", 'none');
        }
        $(slides[nxt]).fadeIn(500, () => {
            setTimeout(() => {
                document.getElementById("nxtbtn").disabled = false;
                document.getElementById("prvbtn").disabled = false;
            }, 50);

        });

    });




}