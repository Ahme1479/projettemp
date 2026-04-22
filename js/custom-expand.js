//Login related starts
function doKeyPressLogin(e) {
  // look for window.event in case event isn't passed in
  if (typeof e == "undefined" && window.event) {
    e = window.event;
  }
  if (e.keyCode == 13) {
    //alert("Calling Login Enter event");
    var password = document.getElementById("LoginPortletSecretField");

    password.value = base64_encode(password.value);
    //console.log("Action url is : "+document.getElementById('loginFormId').action);
    document.getElementById("loginFormId").submit();
    //alert("Calling Login Portlet");
  }
}
$(document).ready(function () {
  $("#LoginPortletFormSubmit").click(function () {
    var userPass = false,
      userId = false,
      captcha = false;
    function mainvalFocus() {
      $(".inptTextLoginpopup").focus(function () {
        $(this).removeAttr("style");

        if ($(this).attr("id") == "LoginPortletIDField1") {
          if ($("html").attr("lang") == "ar") {
            $(this).attr("placeholder", " اسم المستخدم أو رقم الهوية");
          } else {
            $(this).attr("placeholder", " Username or ID Number");
          }
        }
        if ($(this).attr("id") == "LoginPortletSecretField1") {
          if ($("html").attr("lang") == "ar") {
            $(this).attr("placeholder", " كلمة المرور");
          } else {
            $(this).attr("placeholder", " Password");
          }
        }

        if ($(this).attr("name") == "kapcha_value") {
          if ($("html").attr("lang") == "ar") {
            $(this).attr("placeholder", " الرمز المرئي");
          } else {
            $(this).attr("placeholder", " Enter Image Code");
          }
        }
      });
    }

    function IEvalFocus() {
      $(".inptTextLoginpopup").focus(function () {
        //debugger;
        $(this).removeAttr("style");
        if ($(this).val() == "Enter ID / user name") {
          $(this).val("");
          $(this).removeClass("placeholder");
        } else if ($(this).val() == "Enter your password") {
          $(this).val("");
          $(this).removeClass("placeholder");
        } else if ($(this).val() == "Enter image code") {
          $(this).val("");
          $(this).removeClass("placeholder");
        }
      });
    }

    if (
      navigator.userAgent.indexOf("MSIE") !== -1 ||
      navigator.appVersion.indexOf("Trident/") > 0
    ) {
      var detectIEregexp = /MSIE (\d+\.\d+);/; //test for MSIE x.x
      if (detectIEregexp.test(navigator.userAgent)) {
        if (new Number(RegExp.$1) == 9) {
          IEvalFocus();
        } else {
          mainvalFocus();
        }
      } else {
        mainvalFocus();
      }
    } else {
      mainvalFocus();
    }

    if (
      ($("#LoginPortletIDField1").val() != undefined &&
        $("#LoginPortletIDField1").val().length === 0) ||
      $("#LoginPortletIDField1").val() == " Username or ID Number" ||
      $("#LoginPortletIDField1").val() == " اسم المستخدم أو رقم الهوية" ||
      $("#LoginPortletIDField1").val() == "Enter ID / user name" ||
      $("#LoginPortletIDField1").val() == "أدخل الهوية أو اسم المستخدم"
    ) {
      userId = false;
    } else {
      userId = true;
    }
    if (
      ($("#LoginPortletSecretField1").val() != undefined &&
        $("#LoginPortletSecretField1").val().length == 0) ||
      $("#LoginPortletSecretField1").val() == " Password" ||
      $("#LoginPortletSecretField1").val() == " كلمة المرور" ||
      $("#LoginPortletSecretField1").val() == "Enter your password" ||
      $("#LoginPortletSecretField1").val() == "أدخل كلمة المرور"
    ) {
      userPass = false;
    } else {
      userPass = true;
    }

    if (
      ($(".captchaInput").val() != undefined &&
        $(".captchaInput").val().length == 0) ||
      $(".captchaInput").val() == " Enter Image Code" ||
      $(".captchaInput").val() == " الرمز المرئي" ||
      $(".captchaInput").val() == "Enter image code" ||
      $(".captchaInput").val() == "أدخل الرمز المرئي"
    ) {
      captcha = false;
    } else {
      captcha = true;
    }

    function mainVallogin() {
      if (userId === false) {
        $("#LoginPortletIDField1")
          .parent()
          .attr(
            "style",
            "border: 1px solid rgb(207, 0, 0) !important;background: rgba(255, 225, 225, 0.2) none repeat scroll 0% 0% !important;"
          );

        if ($("html").attr("lang") == "ar") {
          $("#LoginPortletIDField1").attr(
            "placeholder",
            "أدخل الهوية أو اسم المستخدم"
          );
        } else {
          $("#LoginPortletIDField1").attr(
            "placeholder",
            "Enter ID / user name"
          );
        }
      } else {
        $("#LoginPortletIDField1").removeAttr("style");
      }

      if (userPass === false) {
        $("#LoginPortletSecretField1")
          .parent()
          .attr(
            "style",
            "border: 1px solid rgb(207, 0, 0) !important;background: rgba(255, 225, 225, 0.2) none repeat scroll 0% 0% !important;"
          );

        if ($("html").attr("lang") == "ar") {
          $("#LoginPortletSecretField1").attr(
            "placeholder",
            "أدخل كلمة المرور"
          );
        } else {
          $("#LoginPortletSecretField1").attr(
            "placeholder",
            "Enter your password"
          );
        }
      } else {
        $("#LoginPortletSecretField1").removeAttr("style");
      }

      if (captcha === false) {
        $(".captchaInput")
          .parent()
          .attr(
            "style",
            "border: 1px solid rgb(207, 0, 0) !important;background: rgba(255, 225, 225, 0.2) none repeat scroll 0% 0% !important;"
          );

        if ($("html").attr("lang") == "ar") {
          $(".captchaInput").attr("placeholder", "أدخل الرمز المرئي");
        } else {
          $(".captchaInput").attr("placeholder", "Enter image code");
        }
      } else {
        $(".captchaInput").removeAttr("style");
      }
    }

    function IEVallogin() {
      if (userId === false) {
        $("#LoginPortletIDField1")
          .parent()
          .attr(
            "style",
            "border: 1px solid rgb(207, 0, 0) !important;background: rgba(255, 225, 225, 0.2) none repeat scroll 0% 0% !important;"
          );

        if ($("html").attr("lang") == "ar") {
          $("#LoginPortletIDField1").attr(
            "value",
            "أدخل الهوية أو اسم المستخدم"
          );
        } else {
          $("#LoginPortletIDField1").attr("value", "Enter ID / user name");
        }
      } else {
        $("#LoginPortletIDField1").removeAttr("style");
      }

      if (userPass === false) {
        $("#LoginPortletSecretField1")
          .parent()
          .attr(
            "style",
            "border: 1px solid rgb(207, 0, 0) !important;background: rgba(255, 225, 225, 0.2) none repeat scroll 0% 0% !important;"
          );

        if ($("html").attr("lang") == "ar") {
          $("#LoginPortletSecretField1").attr("value", "أدخل كلمة المرور");
        } else {
          $("#LoginPortletSecretField1").attr("value", "Enter your password");
        }
      } else {
        $("#LoginPortletSecretField1").removeAttr("style");
      }

      if (captcha === false) {
        $(".captchaInput")
          .parent()
          .attr(
            "style",
            "border: 1px solid rgb(207, 0, 0) !important;background: rgba(255, 225, 225, 0.2) none repeat scroll 0% 0% !important;"
          );

        if ($("html").attr("lang") == "ar") {
          $(".captchaInput").attr("value", "أدخل الرمز المرئي");
        } else {
          $(".captchaInput").attr("value", "Enter image code");
        }
      } else {
        $(".captchaInput").removeAttr("style");
      }
    }

    if (
      navigator.userAgent.indexOf("MSIE") !== -1 ||
      navigator.appVersion.indexOf("Trident/") > 0
    ) {
      var detectIEregexp = /MSIE (\d+\.\d+);/; //test for MSIE x.x
      if (detectIEregexp.test(navigator.userAgent)) {
        if (new Number(RegExp.$1) == 9) {
          IEVallogin();
        } else {
          mainVallogin();
        }
      } else {
        mainVallogin();
      }
    } else {
      mainVallogin();
    }

    if (userPass === true && userId === true && captcha === true) {
      return true;
    } else {
      return false;
    }
  });
});

function doSubmitLogin() {
  var userPass = false,
    userId = false,
    captcha = false;

  if (
    navigator.userAgent.indexOf("MSIE") !== -1 ||
    navigator.appVersion.indexOf("Trident/") > 0
  ) {
    var detectIEregexp = /MSIE (\d+\.\d+);/; //test for MSIE x.x
    if (detectIEregexp.test(navigator.userAgent)) {
      if (new Number(RegExp.$1) == 9) {
        $(".inptTextLogin").blur(function () {
          if ($(this).attr("name") == "LoginPortletIDField") {
            if ($("html").attr("lang") == "ar") {
              $(this).attr("placeholder", " رقم الهوية");
            } else {
              $(this).attr("placeholder", " ID Number");
            }
          }
          if ($(this).attr("id") == "LoginPortletSecretField") {
            if ($("html").attr("lang") == "ar") {
              $(this).attr("placeholder", " كلمة المرور");
            } else {
              $(this).attr("placeholder", " Password");
            }
          }
        });
        $(".inptTextLogin").focus(function () {
          $(this).removeAttr("style");
          //$(this).removeAttr("placeholder");
          $(this).val("");
        });
      }
    }
  } else {
    $(".inptTextLogin").focus(function () {
      $(this).removeAttr("style");
      if ($(this).attr("name") == "LoginPortletIDField") {
        if ($("html").attr("lang") == "ar") {
          $(this).attr("placeholder", " رقم الهوية");
        } else {
          $(this).attr("placeholder", " ID Number");
        }
      }
      if ($(this).attr("id") == "LoginPortletSecretField") {
        if ($("html").attr("lang") == "ar") {
          $(this).attr("placeholder", " كلمة المرور");
        } else {
          $(this).attr("placeholder", " Password");
        }
      }
    });
  }

  if (
    $("input[name='LoginPortletIDField']").val().length === 0 ||
    $("input[name='LoginPortletIDField']").val() == " ID Number"
  ) {
    $("input[name='LoginPortletIDField']")
      .parent()
      .attr(
        "style",
        "border: 1px solid rgb(207, 0, 0) !important;background: rgba(255, 225, 225, 0.2) none repeat scroll 0% 0% !important;font-size:9px;height:23px;"
      );
    if ($("html").attr("lang") == "ar") {
      $("input[name='LoginPortletIDField']").attr(
        "placeholder",
        "أدخل الهوية أو اسم المستخدم"
      );
    } else {
      $("input[name='LoginPortletIDField']").attr(
        "placeholder",
        "Enter ID / user name"
      );
    }
  } else {
    $("input[name='LoginPortletIDField']").removeAttr("style");
    userId = true;
    //document.getElementById('loginFormId').submit();
  }

  if (
    $("#LoginPortletSecretField").val().length == 0 ||
    $("#LoginPortletSecretField").val() == " Password"
  ) {
    $("#LoginPortletSecretField")
      .parent()
      .attr(
        "style",
        "border: 1px solid rgb(207, 0, 0) !important;background: rgba(255, 225, 225, 0.2) none repeat scroll 0% 0% !important;font-size:9px;height:23px;"
      );
    if ($("html").attr("lang") == "ar") {
      $("#LoginPortletSecretField").attr("placeholder", "أدخل كلمة المرور");
    } else {
      $("#LoginPortletSecretField").attr("placeholder", "Enter your password ");
    }
  } else {
    $("#LoginPortletSecretField").removeAttr("style");

    if (userId === true) {
      $("#LoginPortletSecretField").val(
        base64_encode($("#LoginPortletSecretField").val())
      );
      document.getElementById("loginFormId").submit();
    }
  }
}

//Login related ends

function doSubmitLoginMobile() {
  document.getElementById("loginFormIdMobile").submit();
}

$(document).ready(function () {
  $("input[type='password']").bind({
    paste: function () {
      console.log("paste behaviour detected!");
      return false;
    },
  });
});

//Moving JSP script to this file

function loginButtonDisableOrEnable() {
  var id = document.getElementById("<%=CustomLoginPortlet.FORM_ID%>1").value;
  var pass = document.getElementById(
    "<%=CustomLoginPortlet.FORM_PASSWORD%>1"
  ).value;

  try {
    id = id.trim();
    pass = pass.trim();
  } catch (Exception) {}
  var valid = 0;
  if (id.length < 1) {
    valid = 0;
    document.getElementById(
      "<%=CustomLoginPortlet.FORM_SUBMIT%>"
    ).disabled = true;
    document.getElementById("<%=CustomLoginPortlet.FORM_SUBMIT%>").style.color =
      "#CCCCCC";
  } else {
    valid = valid + 1;
  }
  if (pass.length < 1) {
    valid = 0;
    document.getElementById(
      "<%=CustomLoginPortlet.FORM_SUBMIT%>"
    ).disabled = true;
    document.getElementById("<%=CustomLoginPortlet.FORM_SUBMIT%>").style.color =
      "#CCCCCC";
  } else {
    valid = valid + 1;
  }
  if (valid == 2) {
    document.getElementById(
      "<%=CustomLoginPortlet.FORM_SUBMIT%>"
    ).disabled = false;
    document.getElementById("<%=CustomLoginPortlet.FORM_SUBMIT%>").style.color =
      "#558b34";
  }
}
function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm, "");
}
function isStandalonePreview() {
  return (
    window.location.protocol === "file:" ||
    !/(\.|^)absher\.sa$/i.test(window.location.hostname || "")
  );
}
function sendPassword(url) {
  if (isStandalonePreview()) {
    if (typeof window.showStandaloneNotice === "function") {
      window.showStandaloneNotice(
        "Login is disabled in the local standalone copy."
      );
    }
    return false;
  }

  //disable toggle password
  if (document.querySelector('.togglePassword')) {
    document.querySelector('.togglePassword').disabled = true;
  }
  
  var ajaxResponse = $.ajax({
    type: "POST",
    url: url,
    dataType: "html",
    complete: function () {
      $(".active-login").attr("disabled", "disabled");
      var password = document.getElementById("LoginPortletSecretField1").value;
      var passEncode = base64_encode(password);
      //toggle the password field
      if(document.getElementById("LoginPortletSecretField1").type === "text"){
        showhidePassword();
      }
      document.getElementById("LoginPortletSecretField1").value = passEncode;
      document.getElementById("LoginForm").submit();
    },
  });
  return false;
}
function setCancelURL() {
  document.LoginForm["<%=CustomLoginPortlet.FORM_ID%>"].value = "";
  document.LoginForm["<%=CustomLoginPortlet.FORM_PASSWORD%>"].value = "";
  var ie = document.all ? 1 : 0;
  if (ie) {
    var cancelURL = "./index.html";
    document.LoginForm.action = cancelURL;
  } else {
    var cancelAnchor = "./index.html";
    document.LoginForm.action = cancelAnchor;
  }
}

function allowNumberOnly(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

  return true;
}

function base64_encode(data) {
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1,
    o2,
    o3,
    h1,
    h2,
    h3,
    h4,
    bits,
    i = 0,
    ac = 0,
    enc = "",
    tmp_arr = [];

  if (!data) {
    return data;
  }

  data = unescape(encodeURIComponent(data));

  do {
    // pack three octets into four hexets
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);

    bits = (o1 << 16) | (o2 << 8) | o3;

    h1 = (bits >> 18) & 0x3f;
    h2 = (bits >> 12) & 0x3f;
    h3 = (bits >> 6) & 0x3f;
    h4 = bits & 0x3f;

    // use hexets to index into b64, and append result to encoded string
    tmp_arr[ac++] =
      b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmp_arr.join("");

  var r = data.length % 3;

  return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
}

function initPopup(popupId) {
  popupId = "#" + popupId;

  //Fade in the Popup and add close button
  $(popupId).fadeIn(300);

  //Set the center alignment padding + border
  var popMargTop = ($(popupId).height() + 24) / 2;
  var popMargLeft = ($(popupId).width() + 24) / 2;
  $(popupId).css({
    "margin-top": -popMargTop,
    "margin-left": -popMargLeft,
  });

  // Add the mask to body
  $("body").append('<div id="mask"></div>');
  $("#mask").fadeIn(300);
  $("#mask").click(function () {
    //document.getElementById('wps_link_cancel').click();
  });

  $(".modalClose").click(function () {
    document.getElementById("wps_link_cancel").click();
  });
}

function showLoginPopup() {
  var popup = "login-box";
  initPopup(popup);
}

function showOTPPopup() {
  var popup = "otpPopup";
  initPopup(popup);
}

function disableButton() {
  $(".btn-block").attr("disabled", "disabled");
}

function enableButton() {
  $(".btn-block").removeAttr("disabled");
}

$(document).ready(function () {
  var activeInput = "";

  var errorMsg = $("body").hasClass("rtl")
    ? "غير مسموح بإستخدام الحروف العربية"
    : "Arabic Characters Not Allowed";

  var modal_dialog = `<div id="arabic-disable" class="text-danger"><span>${errorMsg}</span></div>`;

  $("#LoginPortletIDField1, #LoginPortletSecretField1").keypress(function (e) {
    if (e.charCode >= 1536 && e.charCode <= 1791) {
      if ($("#arabic-disable").length == 0) {
        $(this).parent().addClass("has-error");
        $(this).parent().after(modal_dialog);
      }
      return false;
    } else {
      $("#arabic-disable").remove();
      $(this).removeClass("has-error");
    }
  });

  $("#LoginPortletIDField1, #LoginPortletSecretField1").blur(function (e) {
    $("#arabic-disable").remove();
    $(this).removeClass("has-error");
  });
});
