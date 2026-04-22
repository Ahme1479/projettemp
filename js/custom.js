var domainOrgin = document.location.origin;
  if (!window.location.origin) 
           domainOrgin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  else
           domainOrgin = document.location.origin;
		   
function emailForm(){
var daReferrer = document.referrer;
var email = "";
var errorMsg = "";
var subject = "Portal - www.moi.gov.sa";
var body_message = "I would like to refer this Portal Page to you. You can visit the page in the following link: "+daReferrer;

var mailto_link = 'mailto:'+email+'?subject='+subject+'&body='+body_message;

win = window.open(mailto_link,'emailWindow');
setTimeout(function(){
  if (win && win.open &&!win.closed)
{
 win.close();
}
},20);
}


function displayElement(id) 
{
    var d = document.getElementById(id).style.display;
    if (d == "none" || d == "") {
      document.getElementById(id).style.display = "block";
    } else {
      document.getElementById(id).style.display = "none";
    }
}

$(document).ready(function(e) {

if($('#mobile_number').length != 0){
  var $input = document.querySelector('#mobile_number');
  $('#mobile_number').bind('keyup', function(e) {
      var max = parseInt($('#mobile_number').attr('maxlength'));
      if ($(this).val().length > max) {
          $(this).val($(this).val().substr(0, max));
      }
  });  
}

if($('#otp').length != 0){
  var $input = document.querySelector('#otp');
  $('#otp').bind('keyup', function(e) {
      var max = parseInt($('#otp').attr('maxlength'));
      if ($(this).val().length > max) {
          $(this).val($(this).val().substr(0, max));
      }
  });    
}


  if($('.customTooltipContainer').length !=0 ){
      if($('#d_sim:checked').length !=0 ){
        $('.customTooltipContainer').css('display','inline-block');
      }
  }

  if($('html').attr('lang') == 'en'){
    $('.customTooltipContainer .tooltip-header').find('span').text('If you do not know the SIM Card Number(MSISDN), please contact your service provider.');
  }else{
    $('.customTooltipContainer .tooltip-header').find('span').text('Ø¥Ø°Ø§ ÙÙ ØªØ¹Ø±Ù Ø±ÙÙ ÙØ§ØªÙ Ø§ÙØ´Ø±ÙØ­Ø©Ø(MSISDN) ÙØ¶ÙØ§ Ø§ÙØªÙØ§ØµÙ ÙØ¹ ÙØ²ÙØ¯ Ø§ÙØ®Ø¯ÙØ© ÙÙØ­ØµÙÙ Ø¹ÙÙ Ø§ÙØ±ÙÙ');
  }

$('input[type="radio"]').bind('click', function(){ 
				if($('input[name="simSelection"]:checked').val() == "D"){ 
					$('.customTooltipContainer').css('display', 'inline-block'); 
					$('.custom-tooltip').show(); 
          $('#mobile_number').attr('placeholder', '831XXXXXXXXX');
				}else{ 
					$('.customTooltipContainer').hide(); 
          $('#mobile_number').attr('placeholder', '05XXXXXXXX');
				} 
			}); 
 
			$('.close-tooltip').bind('click', function(){ 
				$('.custom-tooltip').hide(); 
				return false; 
			}); 
 
			$('.custom-tooltip-link').bind('click', function(){ 
				$('.custom-tooltip').toggle(); 
				return false; 
			}); 
  $(".page_body").prepend('<div id="toolsList" class="sharePost_new noPrint">'+
'<a href="javascript:shareLink(\'Delicious\');" class="delicious">Delicious</a>'+
'<a href="javascript:shareLink(\'Digg\');" class="digg">Digg</a>'+
'<a href="javascript:shareLink(\'Facebook\');" class="facebook">Facebook</a>'+
'<a href="javascript:shareLink(\'Google\');" class="google">Google</a></div>');
});


$( "#myID\\.entry\\[1\\]" ).css( "border", "3px solid red" );
  
function shareLink(url)
{
var portalLink = window.location.href;
var otherLink="";
if(url=="Delicious")
{
otherLink = "http://del.icio.us/post?url="+portalLink+";title=title";
window.open(otherLink);
}
if(url=="Digg")
{
otherLink = "http://digg.com/submit?phase=2&amp;url="+portalLink+"";
window.open(otherLink);
}
if(url=="Facebook")
{
otherLink = "http://www.facebook.com/sharer.php?u="+portalLink+"&amp;t=title";
window.open(otherLink);
}
if(url=="Google")
{
otherLink = "http://www.google.com/bookmarks/mark?op=edit&amp;bkmk="+portalLink+"&amp;title=title";
window.open(otherLink);
}
}

/*!
* hoverIntent r7 // 2013.03.11 // jQuery 1.9.1
*/
(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:2,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery)
$(document).ready(function(){
/* topnav show & hide */
var $currentnav,$topnavcontainer,$cur_brn,$brn_add,$branchsummary,$cur_brn_ind,$selbranch = 0;
$(".topnav > ul > li").hover(function(e){
try{clearTimeout(timeout);}
catch(e){}
$currentnav  =  $(this);
$topnavcontainer = $currentnav.children('div');
$topnavcontainer.slideDown();
$currentnav.addClass("active");
},function(){
timeout = setTimeout(function() {
$topnavcontainer.slideUp();
$currentnav.removeClass("active");}, 800);
});
/* Tabs */
$('ul.nav-tabs').each(function(){
// For each set of tabs, we want to keep track of
// which tab is active and it's associated content
var $active, $content, $links = $(this).find('a');
// If the location.hash matches one of the links, use that as the active tab.
// If no match is found, use the first link as the initial active tab.
$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
$active.parent().addClass('active');
$content = $($active.attr('href'));
$content.addClass("active");
// Hide the remaining content
$links.not($active).each(function () {
$($(this).attr('href')).hide().parent().removeClass('active');
});
// Bind the click event handler
$(this).on('click', 'a', function(e){
// Make the old tab inactive.
$active.parent().removeClass('active');
$content.hide().removeClass('active');
// Update the variables with the new link and content
$active = $(this);
$content = $($(this).attr('href'));
// Make the tab active.
$active.parent().addClass('active');
$content.show().addClass('active');
// Prevent the anchor's default click action
e.preventDefault();
});
})
/* Toggling schedule */
$(".week-day").on('click','li',function(){
var $this = $(this),$em = $this.find('a > span > em'),$span = $this.find('a > span');
$this.toggleClass("selected");
if($em.length > 0 ){ $em.remove()}else { $span.append("<em>selected</em>");}
});
/* Branchlist hover */
$branchsummary = $(".branch-address");
$branchsummary.eq(0).show();
$(".branch-list").on('mouseenter', 'li',  function(){
$cur_brn  =  $(this),$cur_brn_ind = parseInt($cur_brn.index())+1;
$cur_brn.addClass("hover");
$branchsummary.hide();
$branchsummary.eq($cur_brn_ind).show(); 
$selbranch = $("input[name=service_branch]:checked").val();
}).on('mouseleave', 'li', function() {
$branch_opted = $("input[name=service_branch]:checked").val();
$selbranch = ($branch_opted != '' && typeof($branch_opted) != "undefined" )?$branch_opted:0;
$cur_brn.removeClass("hover");
$branchsummary.hide();
$branchsummary.eq($selbranch).show();
});
/* Select Branch on click */
$(".branch-list").on('click','input[name=service_branch]',function(){
var $this = $(this),$branchlist = $(".branch-list ul li");
$branchlist.removeClass("selected");
$this.closest('li').addClass("selected");
});
$('.collapse-head').click(function() {
if($(this).next().is(':hidden') == true) {
$(this).addClass('on');
$(this).next().slideDown('normal');
}
else  {
$(this).next().slideUp('normal');
$(this).removeClass('on');
}
});
$('.collapse-head').mouseover(function() {
$(this).addClass('over');
}).mouseout(function() {
$(this).removeClass('over');                    
});
/* home tab slider */
//$("div#mySliderTabs").sliderTabs({});

/*
$(".nav-holder > ul > li").hoverIntent({
sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
interval: 50,   // number = milliseconds of polling interval
over: function () {
$('.megamenu', this).slideDown(220);
$(this).addClass("hovered");
},  // function = onMouseOver callback (required)
timeout: 50,   // number = milliseconds delay before onMouseOut function call
out: function () {
$('.megamenu', this).hide();
$(this).removeClass("hovered");
}    // function = onMouseOut callback (required)
});
*/


/* home service toggle */
$(".service-toogle").on('click',function(e){
e.stopImmediatePropagation();
var $this = $(this),$container = $(".service-container") ;
if($(this).parent().find('a').hasClass("highlight")){
$(this).parent().parent().parent().removeClass("toggle-container");
$(this).parent().find('a').removeClass("highlight");
}
else {
$(this).parent().parent().parent().addClass("toggle-container");
$(this).parent().find('a').addClass("highlight");
}
})
$(".all-services").click(function(){
if($(this).find('a').hasClass("highlight")){        
$(this).parent().parent().removeClass("toggle-container");
$(this).find('a').removeClass("highlight");
}else{
$(this).parent().parent().addClass("toggle-container");
$(this).find('a').addClass("highlight");
}
});
});
function showServices(sectorid){
if (sectorid != "")
{
$("#sector").show();
}
else {
$("#sector").hide();
}
}
$(document).ready(function() {
  $("input[type='password']").onpaste = function(e) {
     e.preventDefault();
  }
  /*$('input:[type="password"]').bind("drag drop cut copy paste",function(e) {    
      e.preventDefault();
  });*/
 
$(".dropdown  dt  a").click(function() {
var $this = $(this);
$this.parent().parent().parent().find("ul").not($this.parent().parent().find("ul")).hide();
$this.parent().parent().find("ul").toggle();
});
$('.ui-slider-tabs-list li').click(function(){
$(this).parent().parent().parent().parent().parent().parent().addClass('toggle-container').find('a').addClass('highlight');
$(this).find('div:first').find('a').addClass('highlight');
}) 
$(".dropdown dd ul li a").click(function() {
var $this = $(this),text = $this.html();
$this.parent().parent().parent().prev().find("a span").html(text);
$this.closest("dd > ul").hide();
});
$(document).bind('click', function(e) {
var $clicked = $(e.target);
if (! $clicked.parents().hasClass("dropdown"))
$(".dropdown dd ul").hide();
});
/* Add and remove class */
$('.steps li a').hover(function() {
$(this).parent().toggleClass('hover');
});
$('.tab-content .collapse-box ,.news-list li, .all-services, .search-box .search-btn, .video-block, .wide-blocks .service-block, .eservices-block .service-block').hover(function() {
$(this).toggleClass('hover');
});
$('.nav-items,.nav-more ,.navbar-toggle ,.search-toggle ,.login-link ,.collapse-block .collapse-toggle ').click(function() {
$(this).parent().toggleClass('selected');
});
$('.service-group h4 a ,.all-service h4 a ').click(function() {
$(this).parent().parent().toggleClass('selected');
});
});

$(window).load(function(){
    $(document).ready(function(){
  function add() {
    if($(this).val() === ''){
      $(this).val($(this).attr('placeholder')).addClass('placeholder');
    }
  }

  function remove() {
    if($(this).val() === $(this).attr('placeholder')){
      $(this).val('').removeClass('placeholder');
    }
  }

  // Create a dummy element for feature detection
  if (!('placeholder' in $('<input>')[0])) {

    // Select the elements that have a placeholder attribute
    $('input[placeholder], textarea[placeholder]').blur(add).focus(remove).each(add);

    // Remove the placeholder text before the form is submitted
    $('form').submit(function(){
      $(this).find('input[placeholder], textarea[placeholder]').each(remove);
    });
  }
});
});//]]> 


$(window).load(function() {
  if (window.ABSHER_STANDALONE_MODE) {
      return;
  }

  function findImageNames(data, str) {
      for (var i = 0; i < data.length; i++) {
          if (data[i].name == str) {
              return data[i].code;
          }
      }
  };

  var imageNames;
  var jqxhr = $.getJSON(domainOrgin+"/portal/individuals/local/js/vc-logos.json").done(function(data) {
      imageNames = data;

      $("img.vehicle-logo").each(function(index) {
          var imageName = findImageNames(imageNames, $(this).attr('alt'));
          if(imageName != undefined){
            $(this).attr('src', '/wps/PA_VehicleServices/../../portal/individuals/local/images/AppAssets/vehiclesLogos/'+ imageName + '.imageset/' + imageName + '.png').css('visibility', 'visible');  
          }else{
            $(this).attr('src', '/wps/PA_VehicleServices/../../portal/individuals/local/images/AppAssets/vehiclesLogos/defaultVehicle.png').css('visibility', 'visible');  
          }
          
      });

  });

});
function callLogout() {Object.keys(localStorage).forEach(function(key){if (/^DataTables_Absher_*/.test(key)) {localStorage.removeItem(key);}});document.getElementById('logoutFormId').submit();}



/* --------------------------------------
 HyperPay - Widget Global Options START
----------------------------------------*/
//hyper pay custom labels
var hyperpayLabels = {
  en: {
    supportedCards: "Supported Cards",
    cardHolder: "Cardholder Name",
  },
  ar: {
    supportedCards: "البطاقات المدعومة ",
    cardHolder: " اسم صاحب البطاقة",
  },
};

//get the current locale
var local = document.getElementsByTagName("html")[0].getAttribute("lang");

var wpwlOptionsGlobal = {
  locale: local === "en" ? "en" : "ar",
  style: "plain",
  showCVVHint: true,
  brandDetection: true,
  onReady: function () {
    //change the label
    $(".wpwl-label-brand").html(hyperpayLabels[local].supportedCards);
    $(".wpwl-label-cardHolder").html(hyperpayLabels[local].cardHolder);

    //change input field order
    $(".wpwl-group-submit").before($(".wpwl-group-cardHolder"));

    //update placeholder
    $(".wpwl-control-cardNumber").attr("placeholder", "1234 1234 1234 1234");
    $(".wpwl-control-cvv").attr("placeholder", "123");

    //get brand options
    const brands = $(".wpwl-control-brand").find("option").map((index, item) => item.value);

    //create custom brand toolbar
    var brandItem = $(".wpwl-brand:first").clone().removeAttr("class").attr("class", "wpwl-brand-card wpwl-brand-custom");

    brands.map((item) => {
      var brandClass = "wpwl-brand-" + brands[item];
      var brand = $(brandItem).clone().removeClass("wpwl-brand-VISA").addClass(brandClass);
      $(".wpwl-brand:first").after($(brand)).after($(brandItem));
    });

    //remove the duplication of brands
    $(".wpwl-brand-card:first").remove();
    $(".wpwl-brand-custom:first").remove();

    //append brands wrapper
    $(".wpwl-wrapper-brand").after('<div class="wpwl-wrapper-brand-custom"></div>');

    //add the updated brands icons in payment UI
    $(".wpwl-wrapper-brand-custom").append($(".wpwl-brand-card"));

    var imageUrl ="https://eu-test.oppwa.com/v1/static/" + wpwl.cacheVersion + "/img/brand.png";

    $(".wpwl-brand-custom").css("background-image", "url(" + imageUrl + ")");
  },
  onChangeBrand: function (e) {
    $(".wpwl-brand-custom").css("opacity", "0.3");
    $(".wpwl-brand-" + e).css("opacity", "1");
  },
  iframeStyles: {},
};

/* --------------------------------------
 HyperPay - Widget Global Options END
----------------------------------------*/
