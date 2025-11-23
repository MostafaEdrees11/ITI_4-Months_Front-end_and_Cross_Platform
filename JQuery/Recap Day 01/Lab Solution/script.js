$(document).ready(function () {

    $('.container div').hide();
    $(".services-content").hide();

    $('#about-btn').click(function () {
        $('.container div').hide();
        $(".services-content").hide();
        $('.about-content').css('display', 'block');
    });


    $('#gallary-btn').click(function () {
        $('.container div').hide();
        $(".services-content").hide();
        $('.gallary-content').css('display', 'flex');

        let gallarySrcImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
        let currentImgSrc = 0;

        $('#gallary-imgs').attr('src', "./assets/" + gallarySrcImages[currentImgSrc]);

        $('#left-arrow').click(function () {
            if (currentImgSrc === 0) currentImgSrc = 7;
            else currentImgSrc--;

            $('#gallary-imgs').attr('src', "./assets/" + gallarySrcImages[currentImgSrc]);
        })

        $('#right-arrow').click(function () {
            if (currentImgSrc === 7) currentImgSrc = 0;
            else currentImgSrc++;

            $('#gallary-imgs').attr('src', "./assets/" + gallarySrcImages[currentImgSrc]);
        })
    })


    $('#services-btn').click(function () {
        $('.container div').hide();

        $(".services-content").slideDown("slow");
    });

    $('#complain-btn').click(function () {
        $('.container div').hide();
        $(".services-content").hide();
        $('.complain-content').css('display', 'block');
        $('#complain-form').css('display', 'block');
        $('#complain-data').css('display', 'none');

        $('#send-complain').click(function () {
            $('#complain-form').css('display', 'none');
            $('#complain-data').css('display', 'block');

            $('#complain-txt').text($('#complain-text').val());
            $('#complain-person-name').text($('#name-input').val());
            $('#complain-person-email').text($('#email-input').val());
            $('#complain-person-phone').text($('#phone-input').val());
        })

        $('#back-to-edit').click(function () {
            $('#complain-data').css('display', 'none');
            $('#complain-form').css('display', 'block');
        })
    })

})