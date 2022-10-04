$(document).ready(function () {
    // process bar
    setTimeout(function () {
        $('.loading-containe').fadeOut();
        $('#preloader').delay(5000).fadeOut('slow');
        $('body').delay(5000).css({
            'overflow': 'visible'
        });
    }, 1500);
})

// switch button position
function switchButton() {
    var audio = new Audio('sound/swish.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button position
function moveButton() {
    if (screen.width <= 600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else {
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function () {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width >= 900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = "";
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

$('#yes').click(function () {
    var audio = new Audio('sound/tick.mp3');
    audio.play();

    Swal.fire({
        width: 900,
        confirmButtonText: 'Oki luôn😊',
        background: '#fff url("img/iput-bg.jpg")',
        title: 'Anh biết em sẽ đồng ý mà',
        text: "Tối nay anh qua đón em đi chơi nhé. Còn mấy giờ thì nhắn tin cho anh để biết thêm chi tiết nhé 😉",
        confirmButtonColor: '#83d0c9',
        backdrop: `
                      rgba(0,0,123,0.4)
                      url("img/tym1.gif")
                      left top
                    `,
        onClose: () => {
            // window.location = 'https://www.facebook.com';
                // var audio = new Audio('sound/anh-the-do.mp3');
                // audio.play();
        }
    })
})
