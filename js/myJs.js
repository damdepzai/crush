$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Tặng em nè 😍',
        text: 'Anh có điều này muốn hỏi em nhớ phải trả lời thật lòng nhá.',
        imageUrl: 'img/mylove1.jpg',
        imageWidth: 300,
        imageHeight: 400,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'My love',
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
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
// move random button póition
function moveButton() {
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
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
    var text = " Vâng, em đồng ý làm người yêu của anh ❤️";
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

// show popup
$('#yes').click(function() {
    var audio = new Audio('sound/anhthedo.mp3');
    audio.play();
    Swal.fire({
        title: 'Nghe hết bài hát này rồi trả lời cho anh nhé ❤️❤️❤️',
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Em muốn nói với anh gì nào. '>",
        background: '#fff url("img/iput-bg.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("img/tym1.gif")
              left top
            `,
        showCancelButton: true,
        cancelButtonText: "Thôi em ngại lắm 🤦‍♀️",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Em đồng ý ❣️'
    }).then((result) => {
        if (result.value) {
            var audio = new Audio('sound/tick.mp3');
            audio.play();

            Swal.fire({
                width: 900,
                confirmButtonText: 'Oki luôn😊',
                background: '#fff url("img/iput-bg.jpg")',
                title: 'Anh biết em sẽ đồng ý mà, yêu em nhiều ❤️ ',
                text: "Tối nay anh qua đón em đi chơi nhé. Còn mấy giờ thì nhắn tin cho anh để biết thêm chi tiết nhé 😉",
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'https://www.facebook.com/messages/t/100005346788673';
                  }
            })
        }
    })
})
