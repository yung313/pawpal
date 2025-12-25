// $(document).ready()一個檔案只需要寫一次
$(function () {
    // 滑動至指定位置
    $('#navbar .menu a,footer a').click(function () {
        let btn = $(this).attr('href');
        let pos = $(btn).offset(); /* 抓元素相對座標位置(top,left) */
        $('html,body').animate({ scrollTop: pos.top }, 1000);
    });

    // 滑動置頂
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    // 置頂按鈕淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeIn()
        }
        else {
            $('#gotop').stop().fadeOut()
        }
    });

    // jQuerry Smoove
    $('.smoove').smoove({
        offset: '10%'
    });

    


});

