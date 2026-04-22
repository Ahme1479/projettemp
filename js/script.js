var userList;

// Absher logo anim loader with remove function. logoAnimLoader() to show loade and logoAnimLoader('hide') to remove it
var svgLogoAnim = `<div class="loaderSVGWrapper"><svg id="absher-logo-fill" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 142 206" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="142" height="206"><g id="absher-logo-fill-u-absher-filled" transform="translate(-131.387436-62.246956)"><g id="absher-logo-fill-u-a" transform="translate(0 0.000001)"><path id="absher-logo-fill-u-adot" d="M268.1,82.3c-5.1,0-10.1,0-15.1,0-1-7.4,7.4-15.8,15.1-15c0,4.9,0,9.8,0,15Z" paint-order="stroke fill markers" clip-rule="evenodd" fill="#9b773a" fill-rule="evenodd" stroke-width="2" stroke-dasharray="328" class="svg-elem-1"></path><path id="absher-logo-fill-u-a2" d="M268.2,88.8c0,.7,0,1.3,0,1.9c0,47.4,0,94.7,0,142.1c0,3.7-1.3,5.7-4.9,6.1-3.4.4-6.9.1-10.5.1c0-.6,0-1.2,0-1.8c0-47.3,0-94.6,0-142c0-3.9,1.4-5.9,5.1-6.3c3.3-.4,6.8-.1,10.3-.1Z" clip-rule="evenodd" fill="#9b773a" fill-rule="evenodd" stroke-width="2" class="svg-elem-2"></path></g><g id="absher-logo-fill-u-b" transform="translate(0 0.000001)"><path id="absher-logo-fill-u-bdot" d="M244.7,253.6c0,4.3-3.6,7.9-7.9,7.9-4.4,0-8-3.6-8-8s3.5-7.8,7.9-7.8c4.6,0,8,3.4,8,7.9Z" clip-rule="evenodd" fill="#9b773a" fill-rule="evenodd" stroke-width="2" class="svg-elem-3"></path><path id="absher-logo-fill-u-b2" d="M244.7,103c0,.8.1,1.5.1,2.2c0,42.4,0,84.8,0,127.2c0,4.6-1.9,6.6-6.6,6.8-2.4.1-4.9,0-7.3.1-1.1,0-1.5-.4-1.4-1.5.1-.8,0-1.7,0-2.6c0-41.6,0-83.2,0-124.9c0-5.1,1.6-7,6.8-7.3c2.7-.1,5.4,0,8.4,0Z" clip-rule="evenodd" fill="#9b773a" fill-rule="evenodd" stroke-width="2" class="svg-elem-4"></path></g><g id="absher-logo-fill-u-sh"><path id="absher-logo-fill-u-sh1_" d="M221.6,127.5c0,.8,0,1.5,0,2.1c0,34.4,0,68.7,0,103.1c0,4.3-1.9,6.3-6.3,6.5-2.6.1-5.1,0-7.7.1-1,0-1.5-.4-1.4-1.4c0-.5,0-1,0-1.5c0-33.6,0-67.2,0-100.8c0-5.3,1.1-7.7,8-7.9c2.3-.2,4.7-.2,7.4-.2Z" clip-rule="evenodd" fill="#9b773a" fill-rule="evenodd" stroke-width="2" class="svg-elem-5"></path><path id="absher-logo-fill-u-sh1dot" d="M213.9,118.9c-4.5,0-7.9-3.4-7.9-8c0-4.4,3.6-7.9,7.9-7.9c4.4,0,8,3.7,7.9,8.1c0,4.3-3.5,7.8-7.9,7.8Z" clip-rule="evenodd" fill="#9b773a" fill-rule="evenodd" stroke-width="2" class="svg-elem-6"></path></g><g id="absher-logo-fill-u-sh2_"><path id="absher-logo-fill-u-sh2_2" d="M198.4,127.6c0,.9,0,1.6,0,2.2c0,34.1,0,68.3,0,102.4c0,4.7-1.9,6.7-6.6,6.9-2.7.1-5.3,0-8,0-.2,0-.4-.1-.8-.2c0-.7,0-1.4,0-2.2c0-34,0-67.9,0-101.9c0-5,1.4-6.7,6.3-7.3c2.8-.2,5.8.1,9.1.1Z" clip-rule="evenodd" fill="#9b773a" fill-rule="evenodd" stroke-width="2" class="svg-elem-7"></path><path id="absher-logo-fill-u-sh2dot" d="M190.6,118.9c-4.4,0-7.9-3.4-8-7.8c0-4.4,3.6-8.1,8-8c4.4,0,8,3.7,7.9,8.1c0,4.3-3.5,7.7-7.9,7.7Z" clip-rule="evenodd" fill="#9b773a" fill-rule="evenodd" stroke-width="2" class="svg-elem-8"></path></g><g id="absher-logo-fill-u-sh3_" transform="translate(0 0.000001)"><path id="absher-logo-fill-u-sh3_2" d="M159.7,239.2c0-1,0-1.8,0-2.6c0-34,0-67.9,0-101.9c0-4.9,1.2-6.5,6.1-7.1c3-.3,6-.1,9.1-.1c0,.7.1,1.4.1,2c0,34.3,0,68.6,0,102.9c0,4.5-1.9,6.5-6.3,6.6-2.9.2-5.8.2-9,.2Z" clip-rule="evenodd" fill="#9b773a" fill-rule="evenodd" stroke-width="2" class="svg-elem-9"></path><path id="absher-logo-fill-u-sh3dot" d="M167.3,118.9c-4.4,0-7.9-3.5-7.9-7.8c0-4.4,3.6-8.1,8-8c4.4,0,7.9,3.6,7.9,8.1-.1,4.3-3.5,7.7-8,7.7Z" clip-rule="evenodd" fill="#9b773a" fill-rule="evenodd" stroke-width="2" class="svg-elem-10"></path></g><g id="absher-logo-fill-u-r" transform="translate(.000001 0)"><path id="absher-logo-fill-u-r2" d="M151.7,127.5c0,.9,0,1.6,0,2.2c0,42.4,0,84.8,0,127.2c0,4.5-1.9,6.5-6.4,6.7-2.5.1-5,0-7.5.1-1,0-1.5-.4-1.4-1.4c0-.5,0-1,0-1.5c0-41.8,0-83.7,0-125.5c0-5.4,1.5-7.5,7.8-7.7c2.3-.2,4.8-.1,7.5-.1Z" clip-rule="evenodd" fill="#9b773a" fill-rule="evenodd" stroke-width="2" class="svg-elem-11"></path></g></g></svg></div>`;
var svgAnim = 700,
  setintervaltime;
function logoAnimLoader(state) {
  if (state == "hide") {
    document.querySelector(".mask-submit-loader").remove();
    clearInterval(setintervaltime);
    setintervaltime = 0;
  } else {
    if (!document.querySelector(".mask-submit-loader")) {
      document
        .querySelector("body")
        .insertAdjacentHTML(
          "beforeend",
          '<div class="mask-submit-loader">' + svgLogoAnim + "</div>"
        );
      document.querySelector(".loaderSVGWrapper svg").classList.add("active");
      setintervaltime = setInterval(function () {
        document
          .querySelector(".loaderSVGWrapper svg")
          .classList.toggle("active");
      }, svgAnim);
    }
  } // End logo anim
}

var disWindow = document.querySelector("#cookDisMain .inner-main");
var cookDisckOK = localStorage.getItem("cookDiscAgree");
document.addEventListener("DOMContentLoaded", function () {
  var setTimeCookies = setTimeout(function () {
    if (cookDisckOK) {
      clearTimeout(setTimeCookies);
      disWindow.remove();
    } else {
      // disWindow.classList.remove('hide');
      document
        .querySelector("#cookDisMain .cookDis")
        .classList.add("cookSlideUp");
    }
  }, 1500);
  // check cookies
});
function cookAccept() {
  // set LS
  localStorage.setItem("cookDiscAgree", true);
  disWindow.remove();
}

try {
  //Resolve Bootstrap Conflict with Jquery UI library - START
  (function ($) {


    // Offcanvas Menu
    const body = document.querySelector("body");
    const mobileToggle = document.querySelector(".mobile-menu-toggle");

    const offcanvasMenu = document.querySelector(".offcanvas");
    const offcanvasMenuBackdrop = document.querySelector(
      ".offcanvas__backdrop"
    );

    if (offcanvasMenu != null && mobileToggle != null) {
      mobileToggle.addEventListener("click", function () {
        this.classList.toggle("active");
        offcanvasMenu.classList.toggle("open");
        body.classList.toggle("offcanvas-opened");
      });

      offcanvasMenuBackdrop.addEventListener("click", function () {
        mobileToggle.classList.toggle("active");
        offcanvasMenu.classList.toggle("open");
        body.classList.toggle("offcanvas-opened");
      });
    }

    //Add Custom Class After Login
    if ($(".navbar-innerpage-local .profile-dashboard-section").length === 1) {
      $(".navbar-innerpage-local").addClass("navbar-afterlogin");
      $(".main-header-afterlogin").addClass("mobile-responsive");
    } else {
      $(".navbar-innerpage-local").addClass("navbar-beforelogin");
    }

    $(document).ready(function () {
      //Initialize WOW.js
      //new WOW().init();

      function scrollToDiv(element, navheight) {
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop - navheight;

        $("body,html").animate(
          {
            scrollTop: totalScroll,
          },
          500
        );
      }

      $(".wrapper-container ul li a").click(function () {
        var el = $(this).attr("href");
        var elWrapped = $(el);

        scrollToDiv(elWrapped, $(".wrapper-container").height());

        return false;
      });

      

      // ===== Scroll to Top ====
      $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
          $("#return-to-top").fadeIn(200);
        } else {
          $("#return-to-top").fadeOut(200);
        }
      });

      $("#return-to-top").click(function () {
        $("body,html").animate(
          {
            scrollTop: 0,
          },
          400
        );
      });

      $('button[data-target="#bs-example-navbar-collapse-2"]').click(
        function () {
          $(".innerpage-navigation").toggleClass("active-navigation");
        }
      );

      $("form").each(function () {
        $(this)
          .find(
            "input[type=text], input[type=tel], input[type=number], input[type=search],input[type=password]"
          )
          .each(function () {
            $(this).attr("autocomplete", "off");
          });
      });
    });

    //jquery UI curCSS Function for position jQuery UI's
    $(document).ready(function () {
      jQuery.curCSS = function (element, prop, val) {
        return jQuery(element).css(prop, val);
      };
    });

    //Unsupported Browsers Block
    // var domainOrginTheme = document.location.origin;
    // if (!window.location.origin)
    //     domainOrginTheme = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    // else
    //     domainOrginTheme = document.location.origin;

    // var WebLocName = window.location.hostname;
    // if (WebLocName !== "dev.moi.gov.sa" && WebLocName !== "qa.moi.gov.sa" && WebLocName !== "absher.sa" && WebLocName !== "www.absher.sa") {
    //     window.open(domainOrginTheme+"/","_self");
    // }

    $(document).ready(function () {
      /*        $('form').each(function(index){
            var originalSubmit = $(this)[0].submit;
            $(this)[0].submit = function(){
                $('body').append('<div class="mask-submit-loader"><div class="submit-loader"></div></div>');
                originalSubmit.apply($(this)[0]);
                return false;
            }
        });*/
      // $('form').each(function(){
      //     $(this).submit(function(){
      //         $('body').append('<div class="mask-submit-loader"><div class="submit-loader"></div></div>');
      //     });
      // });

      // Absher logo anim
      window.onbeforeunload = logoAnimLoader; // loader function on top of this file

      if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        //Chrome/x.x or Firefox x.x (ignoring remaining digits);
        var crversion = new Number(RegExp.$1);

        if (crversion < 20)
          window.location = "./index.html#unsupported-browser";
        else return;
      }
      if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        //Firefox/x.x or Firefox x.x (ignoring remaining digits);
        var ffversion = new Number(RegExp.$1); // capture x.x portion and store as a number
        if (ffversion < 10)
          window.location = "./index.html#unsupported-browser";
        else return;
      }

      if (
        navigator.userAgent.indexOf("MSIE") !== -1 ||
        navigator.appVersion.indexOf("Trident/") > 0
      ) {
        var detectIEregexp = /MSIE (\d+\.\d+);/; //test for MSIE x.x
        if (detectIEregexp.test(navigator.userAgent)) {
          if (new Number(RegExp.$1) >= 9) {
          } else {
            window.location = "./index.html#unsupported-browser";
          }
        }
        $("html").attr("data-useragent", navigator.userAgent);
        //('dev'.trim() == "") ? $("html").addClass("html").classList.add('prod') : $("html").addClass('dev');
        environment.trim() == ""
          ? $("html").addClass("prod")
          : $("html").addClass(environment);
      }
    });

    $(window).on("load", function () {
      // var states = eval(jQuery.parseHTML($('#HybridInquiriesMenuENTest').html())[0].data);
      // var resultHTML = '';

      // for(var i = 0; i < states.length; i++){
      //     resultHTML += '<tr><td><a href="'+states[i].link+'" target="_blank">'+states[i].name+'</a></td><td style="display:none;">'+states[i].keywords+'</td></tr>'
      // }

      // $('#filterTable2').append(resultHTML);
      // $("#myInput2").on("keyup", function() {
      //     var value = $(this).val().toLowerCase();
      //     $("#filterTable2 tr").filter(function() {
      //         $(this).toggle( $(this).text().toLowerCase().indexOf(value) > -1 );
      //     });

      //     if($(this).val() != ''){
      //         $(".menu-complete").show();
      //         if( $("#filterTable2 tr:visible").length == 0 ){
      //             $(".menu-complete").hide();
      //         }
      //     }else{
      //         $(".menu-complete").hide();
      //     }
      // });

      // $('.menu-complete a').on('click', function(){
      //     $("#myInput").val('');
      //     $(".menu-complete").hide();
      // });

      //Click Outside Autosearch
      // $(document).click(function(e){
      //     if($('#customAutocomplete-table').length != 0){
      //         if( !document.getElementById('customAutocomplete-table').contains(e.target) ){
      //             $("#myInput").val('');
      //             $(".menu-complete").hide();
      //         }
      //     }
      // });

      //Auto Search
      // $("#myInput").on("keyup", function(e) {
      //     if(e.which == 27){
      //         $(this).val('');
      //         $(".menu-complete").hide();
      //     }else{
      //         var value = $(this).val().toLowerCase();
      //         $("#filterTable tr").filter(function() {
      //             $(this).toggle( $(this).text().toLowerCase().indexOf(value) > -1 );
      //         });

      //         if($(this).val() != ''){
      //             $(".menu-complete").show();
      //             if( $("#filterTable tr:visible").length == 0 ){
      //                 $(".menu-complete").hide();
      //             }
      //         }else{
      //             $(".menu-complete").hide();
      //         }
      //     }
      // });

      // var initialList = [];
      // jq_bt('#filterTable tr').each(function(){
      //     var el = jq_bt(this);
      //     var optionObj = {};
      //     optionObj["name"] = el.find('td').eq(0).text().trim().length == 0 ? '' : el.find('td').eq(0).text().trim();
      //     optionObj["keywords"] = el.find('td').eq(1).text().trim().length == 0 ? '' : el.find('td').eq(1).text().trim();
      //     optionObj["url"] = el.find('td').eq(0).find('a').attr('href').trim().length == 0 ? '' : el.find('td').eq(0).find('a').attr('href').trim();
      //     initialList.push(optionObj);
      // });

      // console.log(initialList);

      // jq_bt('#myInput').autoComplete({
      //     minChars: 1,
      //     source: function(term, suggest) {
      //         term = term.toLowerCase();
      //         var choices = initialList;
      //         var suggestions = [];
      //         for (i = 0; i < choices.length; i++)
      //             if ( ~(choices[i]["keywords"]).toLowerCase().indexOf(term) || ~(choices[i]["name"]).toLowerCase().indexOf(term) ){
      //                 suggestions.push(choices[i]);
      //             }
      //         suggest(suggestions);
      //     },
      //     renderItem: function(item, search) {
      //         search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      //         var re = new RegExp("(" + search + ")", "gi");
      //         return '<a href="'+ item["url"] +'" target="_self" style="display: block;" class="autocomplete-suggestion" data-langname="' + item["name"] + '" data-val="' + item["name"] + '"> ' + item["name"] + '</a>';
      //     },
      //     onSelect: function(e, term, item) {
      //         if(e.type == 'keydown' || e.type == 'mousedown'){
      //             item[0].click();
      //             jq_bt('#advanced-demo').val(item.data('langname'));
      //         }
      //     }
      // });

      //Remove Tab-pane active class Mega Dropdown
      $(".mega-dropdown .tab-content").each(function () {
        var el = $(this);
        $(this).find(".tab-pane").removeClass("in active");
        $(this).find(".tab-pane").eq(0).addClass("in active");
      });

      //Mega dropdown menu content
      var megaMenuHover;
      setTimeout(function () {
        $(".mega-dropdown-content .nav-tabs a").click(function (e) {
          var $el = $(this);
          clearTimeout(megaMenuHover);
          megaMenuHover = setTimeout(function () {
            //RESET SUB MENU - START
            $(".mega-dropdown-submenu").hide();
            $(".tab-pane > .list-unstyled > li").show();
            $(".tab-pane > .list-unstyled > li.focus").removeClass("focus");
            //END
            var tab = $el.parent(),
              tabIndex = tab.index(),
              tabPanel = $el.closest(".row"),
              tabPane = tabPanel.find(".tab-pane").eq(tabIndex);
            tabPanel.find(".active").removeClass("active in");
            tab.addClass("active");
            tabPane.addClass("active in");
          }, 100);
        });
      }, 1000);

      $(".mega-dropdown-navbar .dropdown-toggle").click(function () {
        //RESET SUB MENU - START
        $(".mega-dropdown-submenu").hide();
        $(".tab-pane > .list-unstyled > li").show();
        $(".tab-pane > .list-unstyled > li.focus").removeClass("focus");
        //END
      });

      $(".tab-pane > .list-unstyled > li > a").click(function () {
        var index = $(this).parent().index();
        var $el = $(this);

        //console.log(index);
        $(".mega-dropdown-submenu").hide();

        if ($(this).parent().hasClass("focus")) {
          $(this).parent().removeClass("focus");
          $(this)
            .parents(".list-unstyled")
            .children("li")
            .not($(this).parent())
            .fadeIn();
        } else {
          if ($(this).next(".mega-dropdown-submenu").length != 0) {
            $(this).parent().addClass("focus");
            $(this)
              .parents(".list-unstyled")
              .children("li")
              .not($(this).parent())
              .hide();
            $(this).next(".mega-dropdown-submenu").fadeIn();
          }
        }

        if ($(this).attr("href") == "#") {
          return false;
        }
      });

      // Mega dropdown menu mobile view render
      $(".mega-dropdown-content").each(function (index, value) {
        if ($(this).find(".nav-tabs").length != 0) {
          $(this).addClass("hidden-xs");
          var markup = "";
          var $el = $(this);
          var parentIndex = index;

          markup +=
            '<div class="panel-group visible-xs" id="accordion_' +
            parentIndex +
            '">';
          $(".nav-tabs li", $el).each(function () {
            var index = $(this).index();
            var tabContent = $(".tab-pane", $el).eq(index).html();
            markup +=
              '<div class="panel panel-default">' +
              '<div class="panel-heading" role="tab" id="headingOne_' +
              parentIndex +
              "_" +
              index +
              '">' +
              '<h5 class="panel-title">' +
              '<a role="button" data-toggle="collapse" data-parent="#accordion_' +
              parentIndex +
              '" href="#collapse' +
              parentIndex +
              "_" +
              index +
              '">' +
              $(this).find("a").text() +
              "</a></h5>" +
              "</div>" +
              '<div id="collapse' +
              parentIndex +
              "_" +
              index +
              '" class="panel-collapse collapse" role="tabpanel">' +
              '<div class="panel-body">' +
              tabContent +
              "</div>" +
              "</div>" +
              "</div>";
          });
          markup += "<div>";
          $(this).after(markup);
        } else {
          if ($(this).find(".twoLevelMenu").length != 0) {
            $(this).addClass("hidden-xs");
            var markup = "";
            var $el = $(this);
            var parentIndex = index;

            markup +=
              '<div class="panel-group visible-xs" id="accordion_' +
              parentIndex +
              '">';
            $(".tab-pane > ul > li", $el).each(function () {
              var index = $(this).index();
              var $sub_el = $(this);
              var tabContent = $(this)
                .find(".mega-dropdown-submenu > ul")
                .html();
              markup +=
                '<div class="panel panel-default">' +
                '<div class="panel-heading" role="tab" id="headingOne_' +
                parentIndex +
                "_" +
                index +
                '">' +
                '<h5 class="panel-title">' +
                '<a role="button" data-toggle="collapse" data-parent="#accordion_' +
                parentIndex +
                '" href="#collapse' +
                parentIndex +
                "_" +
                index +
                '">' +
                $(this).children("a").text() +
                "</a></h5>" +
                "</div>" +
                '<div id="collapse' +
                parentIndex +
                "_" +
                index +
                '" class="panel-collapse collapse" role="tabpanel">' +
                '<div class="panel-body">' +
                tabContent +
                "</div>" +
                "</div>" +
                "</div>";
            });
            markup += "<div>";
            $(this).after(markup);
          }
        }
      });

      //Fourth Level Multi Dropdown Mobile
      $("#menuId .panel-body").each(function (index, value) {
        $(this).children("ul").addClass("hidden-xs");
        var markup = "";
        var $el = $(this);
        var parentIndex = index;

        markup +=
          '<div class="panel-group visible-xs" id="submenu_accordion_' +
          parentIndex +
          '">';
        $(this)
          .children("ul.list-unstyled")
          .children("li")
          .each(function () {
            var index = $(this).index();
            var tabContent = $(this).find(".mega-dropdown-submenu").html();
            markup +=
              '<div class="panel panel-default">' +
              '<div class="panel-heading" role="tab" id="submenu_headingOne_' +
              parentIndex +
              "_" +
              index +
              '">' +
              '<h6 class="panel-title">' +
              '<a role="button" data-toggle="collapse" data-parent="#submenu_accordion_' +
              parentIndex +
              '" href="#submenu_collapse' +
              parentIndex +
              "_" +
              index +
              '">' +
              $(this).children("a").html() +
              "</a></h6>" +
              "</div>" +
              '<div id="submenu_collapse' +
              parentIndex +
              "_" +
              index +
              '" class="panel-collapse collapse" role="tabpanel">' +
              '<div class="panel-body">' +
              tabContent +
              "</div>" +
              "</div>" +
              "</div>";
          });

        markup += "<div>";
        $(this).after(markup);
      });

      //Stop event propagation in mega dropdwon event
      $(document).on(
        "click",
        ".mega-dropdown-navbar .dropdown-menu",
        function (e) {
          e.stopPropagation();
        }
      );
    });

    // New Grid Menu
    $(document).ready(function () {
      function SingleMenuLink(parentservice, SubService) {
        var menulength = $(
          "." +
            parentservice +
            ">.grid-submenu-" +
            SubService +
            ">.submenu-wrapper>div.submenu-child-wrapper>ul.row"
        );
        var submenu = $(
          "." +
            parentservice +
            ">.grid-submenu-" +
            SubService +
            ">.submenu-wrapper>ul.row"
        );
        for (var i = 1; i <= menulength.length; i++) {
          var childsubmenu = $(
            "." +
              parentservice +
              ">.grid-submenu-" +
              SubService +
              ">.submenu-wrapper>div.submenu-child-wrapper>ul:nth-child(" +
              i +
              ").row>li"
          );
          if (childsubmenu.length == 1) {
            var Servicename = submenu.find("li:nth-child(" + i + ")>em").text();
            submenu.find("li:nth-child(" + i + ")>em").remove();
            submenu.find("li:nth-child(" + i + ")").append(childsubmenu.html());
            submenu.find("li:nth-child(" + i + ") a").text(Servicename);
          }
        }
      }

      if ($(".top-electronicservices li.service-administration").length == 0) {
        $(".grid_item_6").remove();
      }

      var PassportListHTML = "";
      try {
        var imagecount = 0,
          imagesrc = "";
        $("select[name='selectedOldHOHId']")
          .find("option")
          .each(function () {
            var el_link = $(this).text().split("-");
            if (imagecount == 0) {
              imagesrc =
                '<img class="service-card-media img-circle" height="100" src="/UserImageRender/UserImageRender?sessId=/UserImageRender/UserImageRender?sessId=Obwt6we2OjrLmKzFzXbDPu4" alt="">';
            } else {
              imagesrc = '<div class="img-circle"></div>';
            }
            PassportListHTML +=
              '<div class="col-sm-3">' +
              '<a href="#f" id="' +
              el_link[0] +
              '" class="service-start-card box-img text-center">' +
              imagesrc +
              '<label class="text-left name">' +
              el_link[1] +
              "</label>" +
              '<label class="text-left"><span>' +
              $(".passportIssueSliderLabel, .passportRenewSliderLabel")
                .find("td:nth-child(1)")
                .text() +
              "</span> : " +
              el_link[0] +
              "</label>" +
              //'<label class="text-left"><span>'+$(".passportIssueSliderLabel, .passportRenewSliderLabel").find("td:nth-child(2)").text()+'</span> : '+el_link[1]+'</label>'+
              "</a>" +
              "</div>";
            imagecount++;
          });
      } catch (e) {}

      $(".Passport-slider-container").html(
        '<div class="row">' + PassportListHTML + "</div>"
      );

      $(".Passport-slider-container .box-img").click(function () {
        var clickval = $(this).attr("id").trim();
        // var vallength = $("select[name='selectedOldHOHId']").find("option").length;
        $("select[name='selectedOldHOHId']").val("");
        $("select[name='selectedOldHOHId'] option")
          .filter(function () {
            return $(this).val() == clickval;
          })
          .prop("selected", true);
        $(".passportIssueAction, .passportRenewAction").click();
      });

      //Initialise carousel Slider(Public services)
      $(document).ready(function () {
        setTimeout(function () {
          //Dynamic create popular services
          var popularHTML = "";

          $(".nav-hidden>li.top-mostpopular>ul>li").each(function () {
            var el_link = $(this).find("a");
            popularHTML +=
              '<div class="item"><a href="' +
              el_link.attr("href") +
              '" class="circlebox-img ' +
              $(this)
                .attr("class")
                .split(" ")[1]
                .replace("service-link", "popular") +
              '"><div Class="icon"></div><label>' +
              el_link.text() +
              "</label></a></div>";
          });

          $(".main-slider-container .owl-carousel").append(popularHTML);


        }, 50);
      });

      $(".icon-showpassword").each(function () {
        var input = document.getElementById("LoginPortletSecretField1");
        $(this).after('<span class="toggle-password icon-eye"></span>');
        $(".toggle-password").on("click", function () {
          $(this).toggleClass("icon-eye icon-eye-off");
          if (input.type === "password") {
            input.type = "text";
          } else {
            input.type = "password";
          }
        });
      });

      var box_module =
        '<div class="box-module">' +
        '<div class="options-images">' +
        "<div>" +
        '<div class="gridcol-img-wrapper">' +
        "<div>" +
        '<img src="" alt="">' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="options-titles">' +
        "<div>" +
        "<span>My Services</span>" +
        "</div>" +
        "</div>" +
        '<div class="options-links">' +
        "<div>" +
        '<a href="#" class="services-sub">' +
        $("#more-button-title").text() +
        "</a>" +
        "</div>" +
        "</div>" +
        "</div>";
      //Grid Menu
      // Main Electronic Queries:
      $el_inquiries = $(
        ".top-electronicservices .service-inquiries > ul"
      ).clone();
      $el_services = $(
        ".top-electronicservices .service-services > ul"
      ).clone();
      $el_appointments = $(
        ".top-electronicservices .service-appointments > ul"
      ).clone();
      $(".top-electronicservices .service-administration > ul")
        .children('ul > li[class*="service-"]')
        .each(function () {
          //console.log($(this).find('a').text().replace(' ','').toLowerCase());
          $class = $(this).attr("class").replace("service-link", "sector");
          $(this).attr("class", $class);
          $extratag =
            '<span class="sprites navicon-' +
            $class.replace("col-sm-6 sector-", "").toLowerCase() +
            '"></span>';
          $(this).prepend($extratag);
        });
      $el_adminServices = $(
        ".top-electronicservices .service-administration > ul"
      ).clone();

      $el_inquiries_submenu = $(
        ".grid-services .grid-submenu-enquiries .submenu-wrapper"
      );
      $el_services_submenu = $(
        ".grid-services .grid-submenu-services .submenu-wrapper"
      );
      $el_appointments_submenu = $(
        ".appointments-services .grid-submenu-services .submenu-wrapper"
      );
      $el_admin_submenu = $(
        ".admin-services .grid-submenu-services .submenu-wrapper"
      );

      $(".grid-services .grid-submenu-enquiries")
        .find(".submenu-wrapper")
        .append($el_inquiries);
      $(".grid-services .grid-submenu-services")
        .find(".submenu-wrapper")
        .append($el_services);
      $(".appointments-services .grid-submenu-services")
        .find(".submenu-wrapper")
        .append($el_appointments);
      $(".admin-services .grid-submenu-services")
        .find(".submenu-wrapper")
        .append($el_adminServices);

      $el_inquiries_submenu.append('<div class="submenu-child-wrapper"></div>');
      $el_services_submenu.append('<div class="submenu-child-wrapper"></div>');
      $el_appointments_submenu.append(
        '<div class="submenu-child-wrapper"></div>'
      );
      $el_admin_submenu.append('<div class="submenu-child-wrapper"></div>');

      //Loop Sector Titile to seperate 3rd level submenu
      $el_inquiries_submenu.find('li[class*="sector-"]').each(function () {
        var submenu = $(this).children("ul");
        if (
          $(this).children("ul").find("li").not(".service-remove-it-home")
            .length == 0
        ) {
          $(this).remove();
        } else {
          // submenu.find('li.popular-service').not('li.service-keep-it-home').remove();
          // submenu.find('li.service-remove-it-home').remove();
          $(
            ".grid-services .grid-submenu-enquiries .submenu-child-wrapper"
          ).append(submenu);
        }
      });

      $el_services_submenu.find('li[class*="sector-"]').each(function () {
        var submenu = $(this).children("ul");
        if (
          $(this).children("ul").find("li").not(".service-remove-it-home")
            .length == 0
        ) {
          $(this).remove();
        } else {
          // submenu.find('li.popular-service').not('li.service-keep-it-home').remove();
          // submenu.find('li.service-remove-it-home').remove();
          //submenu.find('li[class*="service-link-"]').not('li.service-remove-it-home').remove();
          $(
            ".grid-services .grid-submenu-services .submenu-child-wrapper"
          ).append(submenu);
        }
      });

      $el_appointments_submenu.find('li[class*="sector-"]').each(function () {
        var submenu = $(this).children("ul");
        submenu
          .find("li.popular-service")
          .not("li.service-keep-it-home")
          .remove();
        $(
          ".appointments-services .grid-submenu-services .submenu-child-wrapper"
        ).append(submenu);
      });

      $el_admin_submenu.find('li[class*="sector-"]').each(function () {
        var submenu = $(this).children("ul");
        if (submenu.length == 0)
          $(
            ".admin-services .grid-submenu-services .submenu-child-wrapper"
          ).append('<ul class="row"></ul>');
        else
          $(
            ".admin-services .grid-submenu-services .submenu-child-wrapper"
          ).append(submenu);
      });

      $(".top-authorization > ul > li").each(function (index) {
        var submenu = $(this).children("ul").clone().addClass("row");
        $(".auth-services .submenu-wrapper").eq(index).append(submenu);
        $(".auth-services .submenu-wrapper > ul > li").addClass("col-sm-6");
      });

      //SponsorShip Services
      $("li.top-workersservices>ul>li.service-inquiries>ul>li")
        .clone()
        .addClass("col-sm-6")
        .appendTo(
          ".sponserees-services .grid-submenu-enquiries .submenu-wrapper"
        )
        .wrapAll('<ul class="row"></ul>');
      $("li.top-workersservices>ul>li.service-services>ul>li")
        .clone()
        .addClass("col-sm-6")
        .appendTo(
          ".sponserees-services .grid-submenu-services .submenu-wrapper"
        )
        .wrapAll('<ul class="row"></ul>');

      //Hide Options links sponsorship Services
      if (
        $("li.top-workersservices>ul>li.service-services>ul>li").length == 0
      ) {
        $(".workersservices .nav-pills")
          .find(".services-sub")
          .parent()
          .remove();
        $(".workersservices .grid-submenu-services").remove();
      }

      //Hide Options links sponsorship Inquiry
      if (
        $("li.top-workersservices>ul>li.service-inquiries>ul>li").length == 0
      ) {
        $(".workersservices .nav-pills")
          .find(".enquiries-sub")
          .parent()
          .remove();
        $(".workersservices .grid-submenu-enquiries").remove();
      }

      //Vehicles Services
      $("li.top-vehiclesservices>ul>li.service-inquiries>ul>li")
        .clone()
        .addClass("col-sm-6")
        .appendTo(".vehicles-services .grid-submenu-enquiries .submenu-wrapper")
        .wrapAll('<ul class="row"></ul>');
      $("li.top-vehiclesservices>ul>li.service-services>ul>li")
        .clone()
        .addClass("col-sm-6")
        .appendTo(".vehicles-services .grid-submenu-services .submenu-wrapper")
        .wrapAll('<ul class="row"></ul>');

      //Hide Options links Vehicles Services
      if (
        $("li.top-vehiclesservices>ul>li.service-services>ul>li").length == 0
      ) {
        $(".vehicles-services .nav-pills")
          .find(".services-sub")
          .parent()
          .remove();
        $(".vehicles-services .grid-submenu-services").remove();
      }

      //Hide Options links Vehicles Inquiry
      if (
        $("li.top-vehiclesservices>ul>li.service-inquiries>ul>li").length == 0
      ) {
        $(".vehicles-services .nav-pills")
          .find(".enquiries-sub")
          .parent()
          .remove();
        $(".vehicles-services .grid-submenu-enquiries").remove();
      }

      //Dependents Services
      $("li.top-familymembersservices>ul>li.service-inquiries>ul>li")
        .clone()
        .addClass("col-sm-6")
        .appendTo(
          ".dependents-services .grid-submenu-enquiries .submenu-wrapper"
        )
        .wrapAll('<ul class="row"></ul>');
      $("li.top-familymembersservices>ul>li.service-services>ul>li")
        .clone()
        .addClass("col-sm-6")
        .appendTo(
          ".dependents-services .grid-submenu-services .submenu-wrapper"
        )
        .wrapAll('<ul class="row"></ul>');

      //Hide Options links dependents Services
      if (
        $("li.top-familymembersservices>ul>li.service-services>ul>li").length ==
        0
      ) {
        $(".dependents-services .nav-pills")
          .find(".services-sub")
          .parent()
          .remove();
        $(".dependents-services .grid-submenu-services").remove();
      }

      //Hide Options links dependents Inquiry
      if (
        $("li.top-familymembersservices>ul>li.service-inquiries>ul>li")
          .length == 0
      ) {
        $(".dependents-services .nav-pills")
          .find(".enquiries-sub")
          .parent()
          .remove();
        $(".dependents-services .grid-submenu-enquiries").remove();
      }

      // COMPLETE BOX DISABLED VARIENTS
      //--------------------------------

      //Hide/Disable Vechile Box
      if (
        $("li.top-vehiclesservices>ul>li.service-inquiries>ul>li").length ==
          0 &&
        $("li.top-vehiclesservices>ul>li.service-services>ul>li").length == 0
      ) {
        $(".grid-main .grid_item_2").addClass("disabled");
      }

      //Hide/Disable Dependents Box
      if (
        $("li.top-familymembersservices>ul>li.service-inquiries>ul>li")
          .length == 0 &&
        $("li.top-familymembersservices>ul>li.service-services>ul>li").length ==
          0
      ) {
        $(".grid-main .grid_item_3").addClass("disabled");
      }

      //Hide/Disable Sponsoree Box
      if (
        $("li.top-workersservices>ul>li.service-inquiries>ul>li").length == 0 &&
        $("li.top-workersservices>ul>li.service-services>ul>li").length == 0
      ) {
        $(".grid-main .grid_item_4").addClass("disabled");
      }

      //Hide/Disable Appointments Box
      if (
        $(
          'li.top-electronicservices>ul>li.service-appointments>ul li[class*="service-link-"]'
        ).length == 0
      ) {
        $(".grid-main .grid_item_5").addClass("disabled");
      }

      //Add Back Menu
      $(".submenu-wrapper").after(
        '<div class="text-center"><a href="#" class="back-menu">' +
          $("#back-button-title").text() +
          "</a></div>"
      );

      //Hide Sector Title if No child service links
      $('.submenu-child-wrapper li[class*="service-header-"]').each(
        function () {
          if ($(this).find("li").length == 0) {
            $(this).hide();
          }
        }
      );

      //Add Services/Enquiries link
      var label_services = $("body").hasClass("rtl") ? "خدمات" : "Services";
      var label_enquiries = $("body").hasClass("rtl")
        ? "إستعلامات"
        : "Inquiries";

      $(".grid-submenu").each(function (index) {
        var htmlTemp = '<ul class="nav nav-pills">';
        if ($(this).find(".grid-submenu-services").length != 0) {
          htmlTemp +=
            '<li class="active"><a href="#" class="services-sub">' +
            label_services +
            "</a></li>";
        }

        if ($(this).find(".grid-submenu-enquiries").length != 0) {
          htmlTemp +=
            '<li><a href="#" class="enquiries-sub">' +
            label_enquiries +
            "</a></li>";
        }

        htmlTemp += "</ul>";

        $(this).prepend(htmlTemp);
      });

      $(".grid-submenu .nav-pills a.services-sub").click(function (e) {
        e.preventDefault();
        $(this).parents(".nav-pills").find("li").removeClass("active");
        $(this).parents(".nav-pills").find("li:first-child").addClass("active");
        $(this).parents(".grid-submenu").find(".grid-submenu-services").show();
        $(this).parents(".grid-submenu").find(".grid-submenu-enquiries").hide();
        localStorage.setItem("parentclass", "services-sub");
      });

      $(".grid-submenu .nav-pills a.enquiries-sub").click(function (e) {
        e.preventDefault();
        $(this).parents(".nav-pills").find("li").removeClass("active");
        $(this).parents(".nav-pills").find("li:last-child").addClass("active");
        $(this).parents(".grid-submenu").find(".grid-submenu-services").hide();
        $(this).parents(".grid-submenu").find(".grid-submenu-enquiries").show();
        localStorage.setItem("parentclass", "enquiries-sub");
      });

      //Swap Sector Title Text
      $(".grid-submenu span.sprites").each(function () {
        var txt = $(this).text();
        if ($(this).parents(".multi-level-submenu-header").length == 0) {
          $(this).text("");
          $(this).after('<em class="sector-titles">' + txt + "</em>");
        }
      });

      //Add new wrapper inside submenu header
      $(".multi-level-submenu-header").each(function () {
        var h4 = $(this).find("h4");
        var icon = h4.find(".sprites");
        h4.wrapInner('<div class="inner__text"></div>');
        h4.find(".inner__text").before(icon);
      });

      //Appointment Services
      // $('.appointments-services .grid-submenu-services .submenu-wrapper > ul li').removeClass('col-sm-6').append(box_module).parent().removeClass('row');
      // $('.appointments-services .grid-submenu-services .submenu-wrapper > ul li').each(function(index){
      //     var txt = $(this).find('em.sector-titles').text();
      //     $(this).find('.options-titles span').text(txt);

      //     var img_src = '/portal/individuals/images/menu_icons/';
      //     if(index == 0){
      //         img_src += 'icon10.png';
      //     }else if(index == 1){
      //         img_src += 'icon11.png';
      //     }else if(index == 2){
      //         img_src += 'icon13.png';
      //     }else if(index == 3){
      //         img_src += 'icon14.png';
      //     }else if(index == 4){
      //         img_src += 'icon20.png';
      //     }else if(index == 5){
      //         img_src += 'icon1.png';
      //     }

      //     $(this).find('.options-images img').attr('src', img_src);
      //     //Remove
      //     //$(this).find('.sprites').hide();
      //     $(this).find('.sector-titles').remove();
      //     //Add Class
      //     $(this).find('.options-titles span').addClass('sector-titles').before($(this).find('.sprites').hide());
      // });

      // $('.appointments-services a.services-sub').click(function(){
      //     $(this).parents('li').click();
      //     $(this).parents('.appointments-services').addClass('show-shadow');
      // });

      //Account Management Services
      $(".top-accountmanagement li").each(function (index) {
        var link_ref = $(this).find("a").attr("href");
        $(".grid-account-mgt a").eq(index).attr("href", link_ref);
      });

      //Add 3 Column Layout for Menu's
      $(".grid-submenu .col-sm-6").addClass("col-lg-4");

      //wrap anchor tag with option titles
      $(".grid_item .options-titles")
        .find("span")
        .wrap('<a href="javascript: void(0)"></a>');

      //Authorization Management Links Updates
      $(".grid-authmgt .grid_item_4 .options-titles").addClass("follow-link");
      if (
        $(".service-link-authorizetoreceivearrivedfemaleworkers a").attr(
          "href"
        ) != "" &&
        $(".service-link-authorizetoreceivearrivedfemaleworkers a").attr(
          "href"
        ) != undefined
      ) {
        $(".grid-authmgt .grid_item_4 .options-titles a")
          .addClass("follow-link")
          .attr(
            "href",
            $(".service-link-authorizetoreceivearrivedfemaleworkers a").attr(
              "href"
            )
          );
      } else {
        $(".grid-authmgt .grid_item_4").addClass("disabled");
      }

      //Hide/Disable authorization Box
      if (
        $(
          "li.top-authorization>ul>li.service-header-absherservicesauthorization>ul>li"
        ).length == 0
      ) {
        $(".grid-authmgt .grid_item_1").addClass("disabled");
      }

      //Hide/Disable sector visit Box
      if (
        $(
          "li.top-authorization>ul>li.service-header-sectorsvisitauthorization>ul>li"
        ).length == 0
      ) {
        $(".grid-authmgt .grid_item_2").addClass("disabled");
      }

      //Account Management Links Updates
      $(".grid-account-mgt .grid_item_1 .follow-link").attr(
        "href",
        $(".service-link-paymentmanagement a").attr("href")
      );
      $(".grid-account-mgt .grid_item_2 .follow-link").attr(
        "href",
        $(".service-link-wallettransactionhistory a").attr("href")
      );

      //Main Menu link Pages to Enquiry/Services
      $(".grid_item .options-titles").click(function (e) {
        var index = $(this).parents(".grid_item").index();
        var el = $(".grid-submenu");
        localStorage.setItem("parentindex", index);
        var target = $(this);

        // var windowWidth = $(window).width();
        // var actualWidth;

        // if(windowWidth > 1200){
        //     actualWidth = 962;
        // }else if(windowWidth > 991 && windowWidth < 1200){
        //     actualWidth = 722;
        // }else if(windowWidth > 767 && windowWidth < 992){
        //     actualWidth = 690;
        // }else{
        //     actualWidth = 0;
        // }

        if (!target.hasClass("follow-link")) {
          e.preventDefault();

          // if(actualWidth != 0){
          //     $(this).parents('.grid_item').addClass('active');

          //     var docOffsetX = $('.main-menu-wrapper').offset().left;
          //     var elOffsetX = $('.grid_item.active .box-module').offset().left;
          //     var boxWidth = $('.grid_item.active .box-module').outerWidth();

          //     $('.content_show').width(boxWidth).css('left', elOffsetX - docOffsetX);

          //     var box_animation = anime.timeline({
          //         easing: 'cubicBezier(.5, .05, .1, .3)'
          //     });

          //     var box_animation1 = anime.timeline({
          //         easing: 'cubicBezier(.5, .05, .1, .3)'
          //     });

          //     box_animation.add({
          //       targets: ['.active .options-images', '.active .options-titles', '.active .services-sub', '.active .enquiries-sub'],
          //       translateY: [0, -30],
          //       opacity: 0,
          //       duration: 100,
          //       delay: anime.stagger(100),
          //       complete: function(){
          //         $('.content_show').css('z-index', 100).css('opacity', 1);
          //       }
          //     }).add({
          //         targets: ['.content_show'],
          //         width: [boxWidth, actualWidth],
          //         height: 300,
          //         top: '-48px',
          //         left: [elOffsetX - docOffsetX, 0],
          //         duration: 200,
          //         delay: 100,
          //         endDelay: 200,
          //         complete: function(){
          //             if(index < el.length && index != -1){
          //                 //$('.grid-wrapper').hide();
          //                 el.removeClass('animated fadeIn');
          //                 el.eq(index).show().addClass('animated fadeIn');

          //                 if (target.hasClass('enquiries-sub')) {
          //                     localStorage.setItem("parentclass", "enquiries-sub");
          //                     el.eq(index).find('.grid-submenu-services').hide();
          //                 } else if (target.hasClass('services-sub')) {
          //                     localStorage.setItem("parentclass", "services-sub");
          //                     el.eq(index).find('.grid-submenu-enquiries').hide();
          //                 }
          //             }
          //         }
          //     });
          // }else{
          if (index < el.length && index != -1) {
            // $('.grid-wrapper').hide();
            // el.removeClass('animated fadeIn');
            // el.eq(index).show().addClass('animated fadeIn');

            $(".content_show").css("z-index", 100).css("opacity", 1);
            $(".grid-wrapper").hide();
            el.removeClass("animated fadeIn");
            el.eq(index).show().addClass("animated fadeIn");
            if (el.eq(index).find(".grid-submenu-services").length != 0) {
              el.eq(index).find(".grid-submenu-enquiries").hide();
            }
            el.eq(index).find(".nav-pills li").removeClass("active");
            el.eq(index).find(".nav-pills li:first-child").addClass("active");

            // if (target.hasClass('enquiries-sub')) {
            //     localStorage.setItem("parentclass", "enquiries-sub");
            //     el.eq(index).find('.grid-submenu-services').hide();
            // } else if (target.hasClass('services-sub')) {
            localStorage.setItem("parentclass", "services-sub");
            //     el.eq(index).find('.grid-submenu-enquiries').hide();
            // }

            // if($(window).width() < 768){
            //     $('body,html').animate({
            //         scrollTop: 0
            //     }, 500);
            // }
          }
        }
      });

      $(".box-module").on("mouseenter", function () {
        //$(this).find('img').addClass('animated zoomIn');
        //$(this).find('span').addClass('animated zoomIn');
      });

      $(".box-module").on("mouseleave", function () {
        //$(this).find('img').removeClass('animated zoomIn');
        //$(this).find('span').removeClass('animated zoomIn');
      });

      //Function to show services/enquiries
      $(
        ".grid-services .submenu-wrapper > ul > li, .appointments-services .submenu-wrapper > ul > li, .admin-services .submenu-wrapper > ul > li"
      ).on("click", function (e) {
        //To Prevent click event in appointment services other than li element
        // var el = $(e.target);
        // if(el.parents('.appointments-services').length != 0 && !el.is('li')){
        //     return false;
        // }

        var index = $(this).index();
        var currentClickParentClass = $(this)
          .parents(".grid-submenu")
          .hasClass("grid-services")
          ? "grid-services"
          : $(this).parents(".grid-submenu")[0].classList[1];
        //Check elelemt have sector class
        var cls = $(this).attr("class");
        localStorage.setItem("childClass", cls);
        localStorage.setItem("childIndex", index);
        localStorage.setItem(
          "currentClick",
          "." + currentClickParentClass + " .submenu-wrapper > ul > li"
        );
        localStorage.setItem(
          "childName",
          $(this).find(".sector-titles").text()
        );
        localStorage.setItem(
          "sprite",
          $(this).find("span.sprites").attr("class")
        );

        if (
          $(this)
            .parents(".submenu-wrapper")
            .find(".submenu-child-wrapper > ul")
            .eq(index).length != 0
        ) {
          var arrowText = $("body").hasClass("rtl")
            ? '<i class="icon-angle-left"></i>'
            : '<i class="icon-angle-right"></i>';

          if (cls.search("sector-") != -1) {
            var parent_txt = $(this)
              .parents(".grid-submenu")
              .find(".multi-level-submenu-header:visible h4 .inner__text")
              .html();
            var output_txt = "";
            // for(var i = 0; i < parent_txt.length; i++){
            //     output_txt += parent_txt[i] + arrowText;
            // }
            var header_txt =
              '<div class="multi-level-submenu-header submenu-subheader"><h4><div class="inner__text"></div></h4></div>';

            $(this).parents(".submenu-wrapper").before(header_txt);
            $(this)
              .parents('[class^="grid-submenu-"]')
              .find(
                ".multi-level-submenu-header.submenu-subheader h4 .inner__text"
              )
              .append(parent_txt)
              .append(
                arrowText +
                  "<em> " +
                  $(this).find(".sector-titles").text() +
                  "</em>"
              );
            $(this)
              .parents('[class^="grid-submenu-"]')
              .find(".multi-level-submenu-header.submenu-subheader h4")
              .prepend(
                $(this).find("span.sprites").clone().removeAttr("style")
              );
            $(this)
              .parents('[class^="grid-submenu-"]')
              .find(".multi-level-submenu-header.submenu-subheader h4")
              .find("span.sprites")
              .eq(1)
              .remove();
            $(this)
              .parents('[class^="grid-submenu-"]')
              .find(".multi-level-submenu-header")
              .not($(".submenu-subheader"))
              .hide();
          }

          $(this).parent().hide();
          $(this)
            .parents(".submenu-wrapper")
            .find(".submenu-child-wrapper > ul")
            .eq(index)
            .fadeIn();

          if ($(window).width() < 768) {
            $("body,html").animate(
              {
                scrollTop: 0,
              },
              500
            );
          }
        }
      });

      $(document).on("click", ".multi-level-submenu-header h4", function () {
        $(this).parent().parent().find(".back-menu").click();
      });

      $(".back-menu").click(function () {
        // var windowWidth = $(window).width();
        // var actualWidth;

        // if(windowWidth > 1200){
        //     actualWidth = 962;
        // }else if(windowWidth > 991 && windowWidth < 1200){
        //     actualWidth = 722;
        // }else if(windowWidth > 767 && windowWidth < 992){
        //     actualWidth = 690;
        // }else{
        //     actualWidth = 0;
        // }

        //Remove Sector Title
        $(this)
          .parents('[class^="grid-submenu-"]')
          .find(".multi-level-submenu-header.submenu-subheader")
          .remove();
        $(this)
          .parents('[class^="grid-submenu-"]')
          .find(".multi-level-submenu-header")
          .not($(".submenu-subheader"))
          .show();
        $(".appointments-services").removeClass("show-shadow");

        if ($(".submenu-child-wrapper ul:visible").length != 0) {
          localStorage.setItem("childName", "");
          localStorage.removeItem("childIndex");
          localStorage.removeItem("childClass");
          $(this)
            .parents('[class^="grid-submenu-"]')
            .find(".submenu-child-wrapper ul")
            .css("display", "");
          $(this)
            .parents('[class^="grid-submenu-"]')
            .find(".submenu-wrapper > ul")
            .css("display", "");
        } else {
          localStorage.removeItem("parentindex");
          localStorage.removeItem("parentclass");
          localStorage.removeItem("currentClick");
          localStorage.removeItem("sprite");
          $(".grid-wrapper").css("display", "");
          $(".grid-submenu").css("display", "");
          $(".grid-submenu-services").css("display", "");
          $(".grid-submenu-enquiries").css("display", "");

          $(".content_show").css("z-index", "").css("opacity", 0);

          // if(actualWidth != 0){

          //     var docOffsetX = $('.main-menu-wrapper').offset().left;
          //     var elOffsetX = $('.grid_item.active .box-module').offset().left;

          //     var boxWidth = $('.grid_item.active .box-module').outerWidth();

          //     var box_animation = anime.timeline({
          //         easing: 'cubicBezier(.5, .05, .1, .3)'
          //     });

          //     box_animation.add({
          //         targets: ['.content_show'],
          //         width: [actualWidth, boxWidth],
          //         height: 240,
          //         top: 0,
          //         left: [0, elOffsetX - docOffsetX],
          //         duration: 200,
          //         delay: 100,
          //         endDelay: 200,
          //         complete: function(){
          //             $('.content_show').css('z-index', '').css('opacity', 0);
          //         }
          //     }).add({
          //         targets: ['.active .options-images', '.active .options-titles', '.active .services-sub', '.active .enquiries-sub'],
          //         translateY: [-30, 0],
          //         opacity: 1,
          //         duration: 100,
          //         delay: anime.stagger(100),
          //         complete: function(){
          //             $('.grid_item').removeClass('active');
          //         }
          //     });
          // }
        }
        return false;
      });

      //Add New Service Header
      if ($(".service-main-header").length != 0) {
        // $('.inside-service').after($('.service-main-header'));
        // $('.service-main-header h1').after($('.breadcrumb'));
        // $('.service-main-header').fadeIn();
      }

      try {
        if ($(".hiddenWidgetsDiv").html().length < 300) {
          $(".hiddenWidgetsDiv").hide();
        }
      } catch (e) {}

      //Append new usergudie url
      try {
        var userguideURL = localStorage
          .getItem("UserGuide")
          .replace("connect", "myconnect");
        if (localStorage.getItem("UserGuide") != null) {
          $(".offcanvas__menuitem")
            .find(".userguidelink")
            .attr("href", userguideURL);
        }
      } catch (e) {}

      function RemoveAllStorage(localarray) {
        for (i = 1; i <= localarray.length; i++) {
          localStorage.removeItem(localarray[i]);
        }
      }

      $("a.navbar-brand").on("click", function () {
        var localarray = [
          "parentindex",
          "parentclass",
          "currentClick",
          "sprite",
          "childName",
          "childIndex",
          "childClass",
        ];
        RemoveAllStorage(localarray);
      });

      function DropdownMenuReset(
        parentindex,
        parentclass,
        childIndex,
        childClass,
        currentClick,
        childName,
        sprite
      ) {
        if ($(".grid-submenu").length > 0) {
          if (childName != "") {
            if (parentclass == "services-sub") {
              $(".grid_item").eq(parentindex).find(".options-titles").click();
              $(".grid-submenu")
                .eq(parentindex)
                .find(".nav-pills a.services-sub")
                .click();
              $(currentClick)
                .parents(".grid-submenu")
                .find(".grid-submenu-services")
                .find(".submenu-wrapper>ul>li")
                .eq(childIndex)
                .click();
            } else if (parentclass == "enquiries-sub") {
              $(".grid_item").eq(parentindex).find(".options-titles").click();
              $(".grid-submenu")
                .eq(parentindex)
                .find(".nav-pills a.enquiries-sub")
                .click();
              $(currentClick)
                .parents(".grid-submenu")
                .find(".grid-submenu-enquiries")
                .find(".submenu-wrapper>ul>li")
                .eq(childIndex)
                .click();
            }
            // if($(window).width() > 767){
            //     setTimeout(function(){
            //         var parentHeading = $('.submenu-subheader:visible').prev().html();
            //         var subHeadingIconClass =  $('.submenu-subheader:visible span.sprites').attr('class');
            //         var subHeadingText = $('.submenu-subheader:visible em').text();

            //         var iconClass = $('body').hasClass('rtl') ? "icon-angle-left" : "icon-angle-right";

            //         $('.submenu-subheader:visible').html(parentHeading);
            //         $('.submenu-subheader:visible span.sprites').removeAttr('class').addClass(subHeadingIconClass);
            //         $('.submenu-subheader:visible h4').append('<i class="'+iconClass+'"></i>').append('<em>'+subHeadingText+'</em>');
            //     }, 1000);
            // }
          } else {
            if (parentclass == "services-sub") {
              //$("." + parentclass).eq(parentindex).click();
              $(".grid_item").eq(parentindex).find(".options-titles").click();
              $(".grid-submenu")
                .eq(parentindex)
                .find(".nav-pills a.services-sub")
                .click();
            } else if (parentclass == "enquiries-sub") {
              //$("." + parentclass).eq(parentindex).click();
              $(".grid_item").eq(parentindex).find(".options-titles").click();
              $(".grid-submenu")
                .eq(parentindex)
                .find(".nav-pills a.enquiries-sub")
                .click();
            }
          }
        }

        if ($("#topLinks_userImage").length == 0) {
          var localarray = [
            "parentindex",
            "parentclass",
            "currentClick",
            "sprite",
            "childName",
            "childIndex",
            "childClass",
          ];
          RemoveAllStorage(localarray);
        }
      }

      SingleMenuLink("grid-services", "services");
      SingleMenuLink("grid-services", "enquiries");
      SingleMenuLink("appointments-services", "services");
      DropdownMenuReset(
        localStorage.getItem("parentindex"),
        localStorage.getItem("parentclass"),
        localStorage.getItem("childIndex"),
        localStorage.getItem("childClass"),
        localStorage.getItem("currentClick"),
        localStorage.getItem("childName"),
        localStorage.getItem("sprite")
      );
    });
  })(jq_bt); //Resolve Bootstrap Conflict with Jquery UI library - END

  function Arabic(arabicdata) {
    setTimeout(function () {
      var arregex = /[\u0600-\u06FF]/;
      if (arregex.test($("#" + arabicdata).val())) {
        $("#" + arabicdata).val("");
        return false;
      } else {
        return true;
      }
    }, 100);
  }

  $(document).ready(function () {
    //Add survey counter value in menu
    if (
      localStorage.getItem("surveys-counter-val") != null ||
      localStorage.getItem("surveys-counter-val") != undefined
    ) {
      if (parseInt(localStorage.getItem("surveys-counter-val")) != 0) {
        var txt = $("body").hasClass("rtl") ? "جديد" : "New";
        $("li.abshersurveys > a.abshersurveys").append(
          '<em class="survey-counter">' +
            txt +
            " " +
            localStorage.getItem("surveys-counter-val") +
            "</em>"
        );
      }
    }
  });

  //Notification Count
  function notificationCounter(strl) {
    if ($("em.c-notification-count").length > 0) {
      if (localStorage.getItem("incount") == null) {
        $.ajax({
          url: strl,
          method: "GET",
        })
          .success(function (response) {
            $("em.c-notification-count").text(response);
            localStorage.setItem("incount", response);
            if (response != "0") {
              $("em.c-notification-count").addClass(
                "c-notification-count-show"
              );
            } else {
              $("em.c-notification-count").removeClass(
                "c-notification-count-show"
              );
            }
          })
          .error(function (e) {
            $("em.c-notification-count").text(0);
            $("em.c-notification-count").removeClass(
              "c-notification-count-show"
            );
            localStorage.setItem("incount", 0);
          });
      } else {
        $count = localStorage.getItem("incount");
        if ($(".totalCountOfNotification").length > 0) {
          $count = $(".totalCountOfNotification").text();
          localStorage.setItem("incount", $count);
        }
        $("em.c-notification-count").text($count);
        if ($count != "0") {
          $("em.c-notification-count").addClass("c-notification-count-show");
        } else {
          $("em.c-notification-count").removeClass("c-notification-count-show");
        }
      }
    }
  }
} catch (e) {
  // console.log("JS script error: " + e.message);
}

$(document).ready(function () {
  if ($(".topLinks_box").length < 7) {
    localStorage.removeItem("indiTopHref");
    localStorage.removeItem("TopHref");
  }

  $(".dashboard a, .changepassword a, .notification a, .editMobile a").click(
    function () {
      localStorage.setItem("indiTopHref", $(this).attr("href"));
    }
  );

  $(
    ".user-profile a, .topLinks_box:nth-last-child(1) a, .login-info2 a, footer a, .navbar-brand"
  ).click(function () {
    localStorage.removeItem("indiTopHref");
  });

  $(".topLinks_box").each(function () {
    try {
      if (
        localStorage.getItem("indiTopHref") == $(this).find("a").attr("href")
      ) {
        $(this).attr("data-title", $(this).find("a strong").text());

        var activeItem = $(this).find("a strong").text();
        var attrDataTitle = "li[data-title='" + activeItem + "']";
        $(attrDataTitle).addClass("open");
      }
    } catch (e) {}
  });

  // Add client side pagination
  if ($(".navbar-brand").length != 0) {
    var breadcrumbURL =
      $("#bs-example-navbar-collapse-2 li.open").length == 0
        ? $(".navbar-brand").attr("href")
        : $("#bs-example-navbar-collapse-2 li.open > a").attr("href");
    $(".navbar-brand").after(
      '<a class="hide hidden-home" href="' + breadcrumbURL + '"></a>'
    );
  }

  if ($(".breadcrumb:visible").length != 0) {
    var breadcrumbLength = $(".breadcrumb:visible li").length;
    if (breadcrumbLength == 4 || breadcrumbLength > 4) {
      $(".breadcrumb:visible li")
        .eq(1)
        .wrapInner(
          '<a href="javascript: void(0);" class="breadcrumb-service"></a>'
        );
      $(".breadcrumb:visible li")
        .eq(2)
        .wrapInner(
          '<a href="javascript: void(0);" class="breadcrumb-sectors"></a>'
        );
    } else if (breadcrumbLength == 3) {
      $(".breadcrumb:visible li")
        .eq(1)
        .wrapInner(
          '<a href="javascript: void(0);" class="breadcrumb-sectors"></a>'
        );
    }
  }

  $(".breadcrumb-sectors").on("click", function () {
    $("a.hidden-home")[0].click();
  });

  $(".breadcrumb-service").on("click", function () {
    localStorage.setItem("childName", "");
    localStorage.removeItem("childIndex");
    localStorage.removeItem("childClass");
    $(".submenu-child-wrapper ul").css("display", "");
    $(".submenu-wrapper > ul").css("display", "");

    $("a.hidden-home")[0].click();
  });

  $(
    "#bs-example-navbar-collapse-2:visible > .navbar-nav, .left-side.after-login-side:visible"
  )
    .find("a.electronicservices, a.authorization, a.payment, a.abshersurveys")
    .on("click", function () {
      var localarray = [
        "parentindex",
        "parentclass",
        "currentClick",
        "sprite",
        "childName",
        "childIndex",
        "childClass",
      ];

      for (i = 1; i <= localarray.length; i++) {
        localStorage.removeItem(localarray[i]);
      }
    });

  // Add eservice menu active
  if (
    $(
      "#eservice-container:visible form, #eservice-container:visible .service-sub-body"
    ).length != 0 ||
    $('#eservice-container:visible input[type="submit"]').length != 0
  ) {
    if (
      $(
        "#bs-example-navbar-collapse-2:visible > .navbar-nav li.open, .left-side.after-login-side:visible li.open, .topLinks_box.open"
      ).length == 0
    ) {
      $("#bs-example-navbar-collapse-2:visible > .navbar-nav li")
        .eq(0)
        .addClass("open");
      $(".left-side.after-login-side:visible li").eq(0).addClass("open");
    }
  }
});

/* ------------------------------------------------------------
    Web Accessibility
 ------------------------------------------------------------ */
try {
  //font resize
  const rootHTML = document.querySelector("html");
  const body = document.querySelector("body");

  const fontScale = document.querySelector(".a11y-font-resize");

  const fontScaleIncrease = document.querySelector(
    ".a11y-font-resize__increase"
  );
  const fontScaleDecrease = document.querySelector(
    ".a11y-font-resize__decrease"
  );
  const contrastModeToggel = document.querySelector(".a11y-contrast-mode");

  // const fontResize = ['a11y-fr-small', 'a11y-fr-medium', 'a11y-fr-default', 'a11y-fr-large', 'a11y-fr-xlarge'];
  const fontResize = ["a11y-fr-small", "a11y-fr-default", "a11y-fr-xlarge"];
  const colorContrast = ["a11y-cc-default", "a11y-cc-gray", "a11y-cc-dark"];

  function initDefaultSettings(list, initial) {
    let result = "";

    list.forEach(function (item, index) {
      if (rootHTML.classList.contains(item)) {
        return result;
      }
    });

    return initial;
  }

  function a11yInit() {
    //verify font scale in local storage
    if (
      localStorage.getItem("fontResize") != null &&
      localStorage.getItem("fontResize") != undefined
    ) {
      rootHTML.classList.add(localStorage.getItem("fontResize"));

      if (rootHTML.classList.contains("a11y-fr-xlarge")) {
        fontScaleIncrease.classList.add("disabled");
      }

      if (rootHTML.classList.contains("a11y-fr-small")) {
        fontScaleDecrease.classList.add("disabled");
      }
    } else {
      rootHTML.classList.add(
        initDefaultSettings(fontResize, "a11y-fr-default")
      );
      localStorage.setItem("fontResize", "a11y-fr-default");
    }

    //verify contrast mode in local storage
    if (
      localStorage.getItem("contrastMode") != null &&
      localStorage.getItem("contrastMode") != undefined
    ) {
      rootHTML.classList.add(localStorage.getItem("contrastMode"));
    } else {
      rootHTML.classList.add(
        initDefaultSettings(colorContrast, "a11y-cc-default")
      );
      localStorage.setItem("contrastMode", "a11y-cc-default");
    }
  }

  //initialize
  a11yInit();

  //font Increase
  fontScaleIncrease.addEventListener("click", function () {
    let rootFontScaleIndex = "";

    fontResize.forEach(function (item, index) {
      if (rootHTML.classList.contains(item)) {
        rootFontScaleIndex = index;
      }
    });
    rootHTML.classList.remove(...fontResize);

    if (rootFontScaleIndex < fontResize.length - 1) {
      rootFontScaleIndex = rootFontScaleIndex + 1;
    }

    rootFontScaleIndex == fontResize.length - 1
      ? this.classList.add("disabled")
      : this.classList.remove("disabled");
    rootFontScaleIndex == 0
      ? fontScaleDecrease.classList.add("disabled")
      : fontScaleDecrease.classList.remove("disabled");

    rootHTML.classList.add(fontResize[rootFontScaleIndex]);

    //Store in localstorage
    localStorage.setItem("fontResize", fontResize[rootFontScaleIndex]);
    return false;
  });

  //font decrease
  fontScaleDecrease.addEventListener("click", function () {
    let rootFontScaleIndex = "";

    fontResize.forEach(function (item, index) {
      if (rootHTML.classList.contains(item)) {
        rootFontScaleIndex = index;
      }
    });
    rootHTML.classList.remove(...fontResize);

    if (rootFontScaleIndex > 0) {
      rootFontScaleIndex = rootFontScaleIndex - 1;
    }

    rootFontScaleIndex == fontResize.length - 1
      ? fontScaleIncrease.classList.add("disabled")
      : fontScaleIncrease.classList.remove("disabled");
    rootFontScaleIndex == 0
      ? this.classList.add("disabled")
      : this.classList.remove("disabled");

    rootHTML.classList.add(fontResize[rootFontScaleIndex]);

    //Store in localstorage
    localStorage.setItem("fontResize", fontResize[rootFontScaleIndex]);
    return false;
  });

  //Contrast
  contrastModeToggel.addEventListener("click", function () {
    let rootContrastModeIndex = "";

    colorContrast.forEach(function (item, index) {
      if (rootHTML.classList.contains(item)) {
        rootContrastModeIndex = index;
      }
    });
    rootHTML.classList.remove(...colorContrast);

    if (rootContrastModeIndex >= colorContrast.length - 1) {
      rootContrastModeIndex = 0;
    } else {
      rootContrastModeIndex = rootContrastModeIndex + 1;
    }

    rootHTML.classList.add(colorContrast[rootContrastModeIndex]);

    localStorage.setItem("contrastMode", colorContrast[rootContrastModeIndex]);
    return false;
  });
} catch (err) {
  console.warn("Accessibility tools were not fully initialized:", err);
}

/* ------------------------------------------------------------
    Unify Button 
 ------------------------------------------------------------ */
try {
  document.addEventListener("DOMContentLoaded", (event) => {
    const btnSubmitLinks = document.querySelectorAll("a.btnSubmit");
    const secondaryActionBtns = [
      "Clear",
      "Cancel",
      "Exit",
      "Back",
      "Reset",
      "مسح",
      "الغاء",
      "السابق",
      "خروج",
      "عودة ",
      "رجوع",
      "اعادة",
    ];

    btnSubmitLinks.forEach((item) => {
      if (secondaryActionBtns.indexOf(item.innerHTML) != -1) {
        item.classList.add("round-button", "round-outline");
      }
    });
  });
} catch (err) {
  console.warn("Button normalization skipped:", err);
}

$(document).ready(function () {
  setTimeout(function () {
    $(
      ".input-container input," +
        ".main-menu-wrapper li .options-titles span," +
        ".login-title,.helpText," +
        "h1,h2,h3,p,ul:not(ul.topLinks,#Accord>ul,.helpText ul),.service-sub-header label"
    ).each(function () {
      $(this).attr("tabindex", 0);
    });
    $(
      "#home-slider-container__modified button," +
        "#home-slider-container__modified .owl-dots," +
        ".main-slider-section button," +
        ".main-slider-section .owl-dots," +
        ".custom-slider-container button," +
        ".custom-slider-container .owl-dots"
    ).each(function () {
      $(this).attr("tabindex", "-1");
    });

    $("#cancelURL").remove();
    try {
      let mainContent = document.querySelector(".col-md-9.right-side");
      mainContent.setAttribute("id", "main-content");
    } catch (e) {
      //let mainContent = document.querySelector('#eservice-container').parentElement;
      // mainContent.setAttribute('id', 'main-content');
    }
  }, 1000);

  //Differenciate before and after login
  if ($(".topLinks").hasClass("after-login")) {
    $(".navbar-main").addClass("navbar-after-login");
  }

  if ($(".topLinks").hasClass("before-login")) {
    $(".navbar-main").addClass("navbar-before-login");
  }
});

try {
  let am_var = $("html").attr("lang") == "ar" ? " صباحا" : " AM";
  let pm_var = $("html").attr("lang") == "ar" ? " مساء" : " PM";
  const appontmentTableFunction = (props) => {
    for (let i = 0; i < props.cells.length; i++) {
      let time = [i + 6, i - 6, i - 18];
      let morningAM = time[0] == 12 ? time[0] + pm_var : time[0] + am_var;
      let eveningAM = time[1] == 12 ? time[1] + am_var : time[1] + pm_var;
      let redButtonComp = Boolean(
        props.cells[i].querySelectorAll(".redButton")[0]
      );
      time[0] <= 12
        ? props.cells[i].childElementCount >= 1
          ? redButtonComp
            ? props.cells[i].querySelectorAll(".redButton")[0].append(morningAM)
            : ""
          : ""
        : "";
      time[0] > 12 && time[0] <= 24
        ? props.cells[i].childElementCount >= 1
          ? redButtonComp
            ? props.cells[i].querySelectorAll(".redButton")[0].append(eveningAM)
            : ""
          : ""
        : "";
      time[0] > 24
        ? props.cells[i].childElementCount >= 1
          ? redButtonComp
            ? props.cells[i]
                .querySelectorAll(".redButton")[0]
                .append(time[2] + am_var)
            : ""
          : ""
        : "";
    }
  };
  const appontmentTableCellsFunction = (props) => {
    for (let i of props.cells) {
      let span = i.querySelectorAll("span").length;
      let tagNameVal = i.children[0] ? i.children[0].tagName : "";
      //i.nodeName=="TD"?tagNameVal=="SPAN"?i.cellIndex==1?i.querySelectorAll(".redButton")[0]?i.className="not_Used":'':'':'':'';
      i.nodeName == "TD"
        ? tagNameVal == "SPAN"
          ? i.cellIndex > 8
            ? i.querySelectorAll(".redButton")[0]
              ? (i.className = "not_Used")
              : ""
            : ""
          : ""
        : "";
    }
  };
  const appontmentTableCellsRemoveFunction = (props) => {
    props.remove();
  };

  const appontment_Table = Array.from(
    document.querySelectorAll(".appointmenttableclass tbody tr")
  );
  appontment_Table.forEach(appontmentTableFunction);
  appontment_Table.forEach(appontmentTableCellsFunction);

  const appontment_TableCells = Array.from(
    document.querySelectorAll(".appointmenttableclass tbody tr .not_Used")
  );
  appontment_TableCells.forEach(appontmentTableCellsRemoveFunction);

  //$("img[src*='https://maps.googleapis.com/maps/api/staticmap']").attr("src",$("img[src*='https://maps.googleapis.com/maps/api/staticmap']").attr("src")+"&key=AIzaSyAEk7gzBUoKx7w3mN2_Fzbc7NI1HFxHKzA");

  function generateQRCode(URL, PlacementMap) {
    let qrcodetext;
    const appointmentMapName = URL,
      genericURL = "http://www.google.com/maps/place/";
    const appointmentMapURL = document.querySelector(appointmentMapName);
    if (
      window.ABSHER_STANDALONE_MODE ||
      !appointmentMapURL ||
      typeof QRCode === "undefined"
    ) {
      return;
    }
    const appointmentMapObject = appointmentMapURL
      .getAttribute("src")
      .split("?")[1]
      .split("&");
    let appointmentlatlng,
      lang =
        document.querySelector("html").getAttribute("lang") == "en" &&
        Boolean(document.querySelector(".appointments_google_map")) == true
          ? "Open Location"
          : "الذهاب للموقع";
    for (i of appointmentMapObject) {
      if (i.search("center") >= 0) {
        appointmentlatlng = i.split("=")[1];
      }
    }
    let qrcodeContainer = document.querySelector(PlacementMap).parentElement;
    if (Boolean(document.querySelector("#mapRow")) == true) {
      qrcodetext = document.querySelector("#mapRow").querySelector(".label");
      qrcodetext.textContent = "فضلا امسح الكود للحصول على الموقع";
      qrcodetext.style.marginBottom = "10px";
      qrcodetext.style.cursor = "auto";
    }

    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, {
      text: genericURL + appointmentlatlng,
      width: 128,
      height: 128,
      colorDark: "#1d9f6f",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
    qrcodeContainer.insertAdjacentHTML(
      "beforeend",
      "<a href='" +
        genericURL +
        appointmentlatlng +
        "' target='_blank' style='margin-top:10px;display:block; color:#000;'>" +
        lang +
        "</a>"
    );
  }
  generateQRCode(
    "img[src*='https://maps.googleapis.com/maps/api/staticmap']",
    "img[src*='https://maps.googleapis.com/maps/api/staticmap']"
  );
  ////generateQRCode("img[src*='https://maps.googleapis.com/maps/api/staticmap']","#imoi_row");
  //generateQRCode("img[src*='https://maps.googleapis.com/maps/api/staticmap']",".appointments_google_map");
} catch (e) {}
