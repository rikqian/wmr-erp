

$(function($) {
    
    // 棰勭害娲借皥
    if ($("#contactReserve").size())
    $("#contactReserve").validationEngine('attach', { 
        promptPosition: 'centerRight', 
        scroll: false,
        showOneMessage: true,
        ajaxFormValidation: true,
        ajaxFormValidationURL: '/contact/post',
        ajaxFormValidationMethod: 'post',
        onAjaxFormComplete: function (status, form, json, options){
            alert(json);
            location.reload();
        },
    }); 
    
    
    
    // 婊戝姩杞烦
    $("[data-goto]").on("click", function (){
        $('body,html').animate({scrollTop: $($(this).data("goto")).offset().top}, 500);
    });
    
    // 杩斿洖椤堕儴
    $(window).scroll(function(){if($(window).scrollTop()>$(window).height()/2){$('.backToTop').show();}else{$('.backToTop').hide();}})	
    $('.backToTop').click(function(){$('body,html').animate({scrollTop: 0}, 500);});
    
    // 椤堕儴鍔犺浇鏉�
    $("body").prepend("<div id='loading' style='background: #03A8E0;height: 2px;width: 0%;position: fixed;z-index: 100;'></div>");
    $("#loading").animate({width: "30%"}, 1000, function (){$(this).animate({width: "80%"}, 4000, function (){$(this).animate({width: "100%"}, 10000)})});
    $(window).load(function (){$("#loading").stop().animate({width: "100%"}, 500, function (){$(this).fadeOut(200, function (){$(this).remove();})})});
    
    // 鏁板瓧澧為暱
    if ($('[data-number-plus]').size())
    intNumberplus = setInterval(function (){
        var $this = $('[data-number-plus]'),
            data = $this.data("number-plus").split(","),
            start = data[0],
            end = data[1],
            s = data[2],
            avg = (end - start) / (s * 100),
            next = Math.ceil(Number($this.html()) + avg);
        if (next >= end) {
            next = end;
            clearInterval(intNumberplus);
        }
        $this.html(next);
    }, 20);
    
    // 棣栭〉Banner
    $(".indexBanner .select a").on("click", function (){
        var index = $(this).index();
        $(this).addClass("now").siblings().removeClass("now");
        $(".indexBanner ul li").eq(index).css("z-index", 1).stop().fadeIn(400).siblings().css("z-index", 100).stop().fadeOut(200);
        clearInterval(intIndexBanner);
        intIndexBanner = setInterval(funIndexBanner, 6000);
    });
    function funIndexBanner(){
        if ($(".indexBanner .select a.now + a").size())
            $(".indexBanner .select a.now").next().trigger("click");
        else
            $(".indexBanner .select a").first().trigger("click");
    }
    intIndexBanner = setInterval(funIndexBanner, 2000);
    // aboutus鐢熸椿
    $(".aboutusLife ul li").hover(function (){
        $(this).stop().fadeTo(200, 0.6);
        }, function (){$(this).stop().fadeTo(200, 1);});
        
    // 棣栭〉service
    $(".indexCustomer ul li").hover(function (){
            $(this).addClass("now");
        }, function (){
            $(this).removeClass("now");
    });
    // 棣栭〉serviceBox
    $(".serviceBox ul li").hover(function (){
        $(this).find(".box").stop().animate_nohtml5({marginTop: 0}, 200);
    }, function (){
        $(this).find(".box").stop().animate_nohtml5({marginTop: 30}, 200);
    });
    // 棣栭〉妗堜緥
    $('.indexCase .smallBox').each(function (){
        $(this).cxScroll({time: 2000,accel:400});
    });
    $('.indexCase .smallBox').trigger("off").hide().first().show().trigger("on");
    $('.indexCase .title a').on("click", function (){
        var index = $(this).index();
        $(this).addClass("now").siblings().removeClass("now");
        $(".indexCase .bigBox .smallBox").trigger("off").hide().eq(index).show().trigger("on");
    });
        
    // 鍏充簬婢崇叇aboutusOpinion
    $(".aboutusOpinion ul li").hover(function (){
        $(this).stop().animate2({top: -20}, 200);
    }, function (){
        $(this).stop().animate2({top: 0}, 200);
    });
    
    // 鎴戜滑鐨勬湇鍔″唴椤祍erviceStandard
    $(".serviceStandard .select div").on("click", function (){
        if ($(this).hasClass("now")) return;
        var index = $(this).index();
        $(".serviceStandard .box2 .now").fadeOut(200);
        $(".serviceStandard .box2 ul").eq(index).fadeIn(200).addClass("now");
        $(this).addClass("now").siblings().removeClass("now");
    });
    
    // 鎴戜滑鐨勬湇鍔″唴椤祍pecialRhomb
    $(".specialRhomb .box").hover(function (){
        $(this).animate({marginTop: -20}, 200);
    }, function (){
        $(this).animate({marginTop: 0}, 200);
    });
    
    // 瀵艰埅鏍忔晥鏋�
    if ($('.header .nav').size())
    $('.header .nav').hover(function (){
    }, function (){
        if (!$(this).find(".now").hasClass("hover"))
            $(this).find(".now").trigger("mouseover");
    }).find("li").hover(function (){
        if (!$(this).hasClass("hover")) {
            var left = $(this).position().left - $(".header .nav").position().left
               ,width = $(this).width();
            $(this).addClass("hover").siblings().removeClass("hover");
            $(".header .nav .bg").stop().css({marginLeft: left, width: 18}).animate2({width: width}, 250, "linear");
        }
    },function (){}).parent().find(".now").addClass("hover").parent().find(".bg").css({marginLeft: $(".header .nav .now").position().left - $(".header .nav").position().left, width: $(".header .nav .now").width()});
    
    // code ...
    $("[data-hover]").hover(function (){
        $(this).addClass($(this).data("hover") || "hover");
    }, function (){
        $(this).removeClass($(this).data("hover") || "hover");
    });
    
});


$(function(){
    $('.casesPager li a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

})