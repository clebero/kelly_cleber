include("js/jquery.color.js");
include("js/jquery.backgroundpos.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include("js/jquery.fancybox-1.3.4.pack.js");
include("js/uScroll.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/bgStretch.js");
include("js/sImg.js");
include("js/forms.js");
include("js/MathUtils.js");
include("js/jquery.cycle.all.min.js");

function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = true, content;

function addAllListeners() {
    $('.list1>li>a').hover(
        function(){
        	$('span',this).stop().animate({'width':'100%'},300,'easeOutExpo');  
        },
        function(){
            $('span',this).stop().animate({'width':0},600,'easeOutCubic');  
        }
    ); 
	$('.list2>li>figure>a')
    .find('strong').css('top','200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block',opacity:'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},350,'easeInOutExpo');
            } else { 
                $(this).children('.sitem_over').stop().show().end()
                .find('strong').stop().show().css({'top':'0'});
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},1000,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},1000,'easeOutQuad');  
            } else {
                $(this).children('.sitem_over').stop().hide().end()
                .find('strong').stop().hide();
            }            
        }
    );
    var val1 = $('.readMore').css('color'),
        val2 = $('.readMore').css('backgroundColor')
    $('.readMore').hover(
        function(){
        	$(this).stop().animate({'color':'#fff','backgroundColor':'#747474'},300,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'color':val1,'backgroundColor':val2},600,'easeOutCubic');  
        }
    ); 
}

function showSplash(){
    content.find('>ul').stop().animate({'height':'0'},{duration:700,easing:'easeOutCubic',step: ON_RESIZE})
    $('h1').stop().animate({'marginTop':'-39px'},{duration:700,easing:'easeOutCubic'})
}

function hideSplash(){
    content.find('>ul').stop().animate({'height':'412'},{duration:700,easing:'easeOutCubic',step: ON_RESIZE})
    $('h1').stop().animate({'marginTop':'0'},{duration:700,easing:'easeOutCubic'})
}

function hideSplashQ(){
    content.find('>ul').stop().animate({'height':'0'},0)
    $('h1').stop().animate({'marginTop':'0'},0)
}

$(document).ready(ON_READY);
$(window).load(ON_LOAD);
$(window).resize(ON_RESIZE);

function ON_READY() {
    /*SUPERFISH MENU*/  
    $('.menu #menu').superfish({
	   delay: 800,
	   animation: {
	       height: 'show'
	   },
       speed: 'slow',
       autoArrows: false,
       dropShadows: false
    });
}

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').fadeOut();
    
	$('.list2>li>figure>a').attr('rel','appendix')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    $('.list2>li>figure>a').fancybox({
        'transitionIn': 'elastic',
    	'speedIn': 500,
    	'speedOut': 300,
        'centerOnScroll': true,
        'overlayColor': '#000'
    });
    
    if ($(".gall_slider").length) {
        $('.gall_slider').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '.next1',
    		prev: '.prev1',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    if ($(".gall_slider2.type1").length) {
        $('.gall_slider2.type1').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '.next2',
    		prev: '.prev2',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    if ($(".gall_slider2.type2").length) {
        $('.gall_slider2.type2').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '.next3',
    		prev: '.prev3',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    
    $('.scroll')
	.uScroll({			
		mousewheel:true,
        step: 100,
        lay:'outside'
	});
    
    //content switch
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'visibility':'hidden'});
            hideSplashQ();		
        },
        actFu:function(_){  
            if(_.curr){
                if (_.n == 0) {
                    showSplash()
                } else {
                    hideSplash()
                }
                
                _.curr
                    .css({'top':'-800px','visibility':'visible'}).stop(true).delay(300).show().animate({'top':'0px'},{duration:1000,easing:'easeOutExpo'});
            }   
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'top':'800px'},{duration:600,easing:'easeInOutExpo',complete:function(){
                            if (_.prev){
                                _.prev.css({'visibility':'hidden'});
                            }
                        }
		              });
            }            
  		}
    });
    var defColor = $('#menu>li>a').eq(0).css('color'); 
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_main',
        hoverIn:function(li){
            $('>a>strong',li).stop().animate({'top':'-22px'},300,'easeOutExpo');
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                $('>a>strong',li).stop().animate({'top':'-60px'},600,'easeOutCubic');
            }
        }
    })
    .navs(function(n,_){
   	    $('#content').tabs(n);
        if (_.prevHash == '#!/page_mail') { 
            $('#form1 a').each(function (ind, el){
                if ($(this).attr('data-type') == 'reset') { $(this).trigger('click') }   
            })
        }
   	});
    
    setTimeout(function(){
        $('#bgStretch').bgStretch({
    	   align:'rightTop',
           navs:$('.pagin').navs({autoPlay:12000})
        })
        .sImg({
            sleep: 1000
        });
    },0);
    
    setTimeout(function(){
        $('body').css({'overflow':'visible'});
        $(window).trigger('resize');    
    },300);    
    addAllListeners();
}

function ON_RESIZE(){
    if (content)
        content.stop().animate({'top':(windowH()-content.height())*.5},0)
};