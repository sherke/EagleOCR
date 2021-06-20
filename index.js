const dropArea = document.querySelector(".drag-area"),
    button = dropArea.querySelector("button"),
    icon = dropArea.querySelector(".icon")
input = dropArea.querySelector("input"),
    rbtop = document.querySelector(".rbtop");

let imagelink = "./text.png";

// _________________

$(".camerablock").hide();
$(".icon").click(function () {
    $(".camerablock").slideToggle();
})
$(".cameracross").click(function () {
    $(".camerablock").hide();
    Webcam.reset();
    // location.reload();
})


icon.onclick = () => {
    Webcam.set({
        width: 350,
        height: 350,
        image_format: 'png',
        jpeg_quality: 90
    })
    Webcam.attach(".cameraview");
}
$(".camerasnap").click(function () {
    Webcam.snap(function (data_uri) {
        // display results in page

        $("#leftimage").attr("src", data_uri)
        imagelink = encodeURI(data_uri);
        
        $(".camerablock").hide();
        Webcam.reset();
    });
})



// ______________________

button.onclick = () => {
    input.click();
}

$("#leftimage").attr("src", imagelink);
$("#imagebtn").change(function (event) {
    imagelink = URL.createObjectURL(event.target.files[0]);
    $("#leftimage").attr('src', URL.createObjectURL(event.target.files[0]))
})





Tesseract.recognize(
    imagelink,
    'eng',
    { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    console.log(text);
    $(".rbtop").html(text);
    $(".loadingtext").css("display", "none")
})



// ______________________________

$("#myinput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#mytable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

$("#afrikaans").click(function () {
    $(".loadingtext").css("display", "flex")

    Tesseract.recognize(
        imagelink,
        'afr',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#arabic").click(function () {
    $(".loadingtext").css("display", "flex")

    Tesseract.recognize(
        imagelink,
        'ara',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#assamese").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'asm',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#belarusian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'bel',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#bengali").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'ben',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#tibetan").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'bod',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#bulgarian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'bul',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#czech").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'ces',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#chinese").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'chi_sim',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#danish").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'dan',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#german").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'deu',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#greek").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'ell',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#english").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#persian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'fas',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#finnish").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'fin',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#french").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'fra',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#irish").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'gle',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#gujrati").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'guj',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#haitian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'hat',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#hindi").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'hin',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#croatian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'hrv',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#hungarian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'hun',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#icelandic").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'isl',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#italian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'ita',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#japanese").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'jpn',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#kannada").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'kan',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#georgian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'kat',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#kazakh").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'kaz',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#kirghiz").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'kir',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#korean").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'kor',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#latin").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'lat',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#malayalam").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'mal',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#marathi").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'mar',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#burmese").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'mya',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#nepali").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'nep',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#dutch").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'nld',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#norwegian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'nor',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#oriya").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'ori',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#punjabi").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'pan',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#polish").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'pol',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#portuguese").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'por',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#romanian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'ron',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#russian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'rus',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#sanskrit").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'san',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#slovak").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'slk',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#spanish").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'spa',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#serbian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'srp',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#swedish").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'swe',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#syriac").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'syr',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#tamil").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'tam',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#telugu").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'tel',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#thai").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'tha',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#turkish").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'tur',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#ukrainian").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'ukr',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#urdu").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'urd',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#uzbek").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'uzb',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#vietnamese").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'vie',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})
$("#yiddish").click(function () {
    $(".loadingtext").css("display", "flex")
    Tesseract.recognize(
        imagelink,
        'yid',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        $(".rbtop").html(text);
        $(".loadingtext").css("display", "none")
    })
})

// ________________________________________________


$("td").click(function () {
    $('html, body').animate({
        scrollTop: $(".right").offset().top
    }, 500)
});





// if($(".rbtop").text() = null){
//     $(".loadingtext").css("display","flex")
// }




// _________________________________________




$(".downloadtext").click(function () {
    $(".downloadframe").toggleClass("downloadframenew");
})



// ____________________________________________________




// var content = $(".rbtop").text();
var filenametxt = "EagleOCR.txt";
var filenamedocx = "EagleOCR.doc";

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

$("#downloadtxt").click(function () {
    download(filenametxt, $(".rbtop").text());
})
$("#downloaddocx").click(function () {
    download(filenamedocx, $(".rbtop").text());
})


// Download Pdf
window.onload = function () {
    document.getElementById("downloadpdf").addEventListener("click", () => {
        var opt = {
            margin: 1,
            filename: 'EagleOCR.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(document.querySelector(".rbtop")).set(opt).save();
    })
}


// Speaker Library
$(".speakerblock").click(function () {
    responsiveVoice.speak($(".rbtop").text());
})






// _________________________________________________
$("#aboutpage").hide();
$("#tutorialpage").hide();
$("#faqspage").hide();
$("#feedbackpage").hide();

$("#about").click(function () {
    $("#aboutpage").slideToggle();
    $("#tutorialpage").hide();
    $("#faqspage").hide();
    $("#feedbackpage").hide();
})
$("#tutorial").click(function () {
    $("#aboutpage").hide();
    $("#tutorialpage").slideToggle();
    $("#faqspage").hide();
    $("#feedbackpage").hide();
})
$("#faqs").click(function () {
    $("#aboutpage").hide();
    $("#tutorialpage").hide();
    $("#faqspage").slideToggle();
    $("#feedbackpage").hide();
})
$("#feedback").click(function () {
    $("#aboutpage").hide();
    $("#tutorialpage").hide();
    $("#faqspage").hide();
    $("#feedbackpage").slideToggle();
})


$("#aboutcross").click(function () {
    $("#aboutpage").hide()
})
$("#tutorialcross").click(function () {
    $("#tutorialpage").hide()
})
$("#faqscross").click(function () {
    $("#faqspage").hide()
})
$("#feedbackcross").click(function () {
    $("#feedbackpage").hide()
})



$(".hamblock").hide();
$(".hamburger").click(function () {
    $(".hamblock").slideToggle();
})
$("#hamabout").click(function () {
    $(".hamblock").hide();
    $("#aboutpage").slideToggle();
    $("#tutorialpage").hide();
    $("#faqspage").hide();
    $("#feedbackpage").hide();
})
$("#hamtutorial").click(function () {
    $(".hamblock").hide();
    $("#aboutpage").hide();
    $("#tutorialpage").slideToggle();
    $("#faqspage").hide();
    $("#feedbackpage").hide();
})
$("#hamfaqs").click(function () {
    $(".hamblock").hide();
    $("#aboutpage").hide();
    $("#tutorialpage").hide();
    $("#faqspage").slideToggle();
    $("#feedbackpage").hide();
})
$("#hamfeedback").click(function () {
    $(".hamblock").hide();
    $("#aboutpage").hide();
    $("#tutorialpage").hide();
    $("#faqspage").hide();
    $("#feedbackpage").slideToggle();
})






$(window).on("load", function () {
    $(".loadingbox").fadeOut("fast");
})
