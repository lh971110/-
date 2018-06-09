$(document).ready(function() {
	$('.top-nav-ul>.last').click(function() {
		$('.outer').css('width', $(window).width()).fadeIn(500);
		$('.about').css('display', 'block');
	});
	$('.about-header span').click(function() {
		$('.outer').css('width', $(window).width()).fadeOut(500);
		$('.about').css('display', 'none');
	});
	$('.about-form .text').focus(function() {
		if($(this).val() == 'Enter your mobile number or Email') {
			$(this).val('');
		}
	});
	$('.about-form .text').blur(function() {
		if($(this).val() == '') {
			$(this).val('Enter your mobile number or Email');
		}
	});
	$('.about-form .password').focus(function() {
		$(this).val('');
	});
	$('.about-form .password').blur(function() {
		if($(this).val() == '') {
			$(this).val('..........');
		}
	});
	/*记住密码部分*/
	//	var texts = $('.text');
	//	var passwords = $('.password')
	//	$('.brand').click(function() {
	//		if($(this).prop('checked')) {
	//			window.localStorage.setItem('texts', 'tests'.val());
	//			window.localStorage.setItem('passwords', 'passwords'.val());
	//		} else {
	//			window.localStorage.removeItem('texts');
	//			window.localStorage.removeItem('password');
	//		}
	//
	//	})
	//	window.onload = function() {
	//		texts.val() = window.localStorage.getItem('texts');
	//		passwords.val() = window.localStorage.getItem('passwords')
	//	}

	/*选项卡*/
	$('.li1').click(function() {
		$('.first').show();
		$('.li2').css('backgroundColor', 'white');
		$('.li2 a').css('color', 'black')
		$('.second').hide();
		$(this).css('backgroundColor', '#EF717A');
		$('.li1 a').css('color', 'white')

	})
	$('.li2').click(function() {
		$('.first').hide();
		$('.li1').css('backgroundColor', 'white');
		$('.li2 a').css('color', 'white')
		$('.second').show();
		$(this).css('backgroundColor', '#EF717A');
		$('.li1 a').css('color', 'black')
	})
	
	
	
     /*到某个位置执行动画部分*/
	function scrollnumber(element, cssname) {
		var a, b, c;
		a = $(element).offset().top;  //元素相对于窗口的距离
		b = $(window).scrollTop();    //监控窗口已滚动的距离
		c = $(window).height();       //浏览器窗口的高度
		if(b + c > a) {
			$((element)).addClass((cssname));
		}
	}
	function scrollfun() {
		scrollnumber('.work-about', 'abouts');
		scrollnumber('.work-left', 'lefts');
		scrollnumber('.work-right', 'works');
		scrollnumber('.banner-text ul', 'uls');
		scrollnumber('.inner .Services-logo','logo');
		scrollnumber('.services-left','services_left');
		scrollnumber('.services-right','services_right');
		scrollnumber('.team h2','teams');
		scrollnumber('.news h2','new');
		scrollnumber('.news li:first-child','first-li');
		scrollnumber('.news .two','second-li');
		scrollnumber('.news li:last-child','last-li');
		scrollnumber('.gallery h2','gallerys');
		scrollnumber('.boxs1','left-top');
		scrollnumber('.boxs2','left-bottom');
		scrollnumber('.one','only');
		scrollnumber('.boxs3','box3-top');
		scrollnumber('.boxs4','box4-bottom');
		scrollnumber('.boxs5','right-top');
		scrollnumber('.boxs6','right-bottom');
		scrollnumber('.Testimonials h2','Testimonialss');
		
		
		
		
		
		
	}

	$(document).ready(function(e) {
		scrollfun();
		$(window).scroll(function() {
			scrollfun();
		});
	});
	
	/*mouseover*/
	$('.news ul li ').mouseover(function(){
		$(this).find('h4').animate({'margin-top':'40px'},200);
		$(this).find('.zan').animate({'opacity':1},200);
		$(this).find('.k').animate({'opacity':1},200);
		$(this).removeClass('lii').addClass('hotpink');
		
	});
	$('.news ul li ').mouseleave(function(){
		$(this).find('h4').animate({'margin-top':'80px'},200);
		$(this).find('.zan ').animate({'opacity':0},200);
		$(this).find('.k').animate({'opacity':0},200);
		$(this).removeClass('hotpink').addClass('lii');
	});
//	$('.contain .boxs').mouseover(function(){
//		$(this).css('background-color','rgba(239, 113, 122, 0.78)');
//	})

})