//Variable Initialisation

var Labelobj,
  filePath="/portal/individuals/",
  module="module/",
  moduleName,
  moduleVersion="16072024",
  moduleAPIObject={},
  moduleId={},
  setinervaltime,
  json=filePath+"",
  loadlabelPath="labels.json",
  loadedLabels='',
  errorfunctionName = [],
  errorparentarguments_value=[],
  functionName = [],
  parentfunctionName = [],
  startData = [],
  SuccessData = [],
  funcName = [],
  errorfuncName = [],
  successfuncName = [],
  errorData = [],
  IDData = [],
  langElem = document.querySelectorAll("html"),
  langc,
  indexScript,
  FontIconJson,
  myparent=[],
  searchSelect='',
  responseObjAddressWidget={},
  responseObjSecAddressWidget={},  
  actionObjAddressWidget={},
  ppObjAddWidget={},
  moduleApiObjAddWidget={},
  functionIsRun=0,
  error400=[400,401,402,403,404,405,406,407,408,409,417,429],
  error500=[500,501,502,503,504,505,506,507,508,509,517,529],
  successList=[200,201,202,203,204,205,206,207,208,209,210];

var $elem = function (selector) {
  if (selector == document) {
    if (!(this instanceof $elem)) {
      return new $elem(selector);
    }
    this.el = selector;
  } else {
    if (!(this instanceof $elem)) {
      return new $elem(selector);
    }
    this.el = document.querySelectorAll(selector);
  }
  return this;
}
$elem.prototype.css = function (prop, val) {
  this.el.forEach(function (element) {
    element.style[prop] = val;
  });
  return this;
}
$elem.prototype.html = function (val) {
  if (val == '') {
    this.el.forEach(function (element) {
      element.innerHTML = '';
    });
  } else {
    let Newelem=this.el[0].id;
    document.getElementById(Newelem).innerHTML = val;
  }
}
$elem.prototype.beforebegin = function (val) {
  this.el.forEach(function (element) {
    element.insertAdjacentHTML("beforebegin", val);
  });
  return this;
}
$elem.prototype.afterend = function (val) {
  this.el.forEach(function (element) {
    element.insertAdjacentHTML("afterend", val);
  });
  return this;
}
$elem.prototype.prepend = function (val) {
  this.el.forEach(function (element) {
    element.insertAdjacentHTML("afterbegin", val);
  });
  return this;
}
$elem.prototype.append = function (val) {
  this.el.forEach(function (element) {
    element.insertAdjacentHTML("beforeend", val);
  });
  return this;
}
$elem.prototype.toggleClass = function (val) {
  this.el.forEach(function (element) {
    element.classList.toggle(val);
  });
  return this;
}
$elem.prototype.hide = function () {
  this.el.forEach(function (element) {
    element.style.display = 'none';
  });
  return this;
}
$elem.prototype.show = function (attr) {
  this.el.forEach(function (element) {
    element.style.display = attr||'block';
  });
  return this;
}
$elem.prototype.addClass = function (value) {
  this.el.forEach(function (element) {
    element.classList.add(value);
  });
  return this;
}
$elem.prototype.removeClass = function (value) {
  this.el.forEach(function (element) {
    element.classList.remove(value);
  });
  return this;
}
$elem.prototype.hasClass = function (value) {
  let prop = '';
  this.el.forEach(function (element) {
    prop = element.classList.contains(value);
  });
  return prop;
}
$elem.prototype.on = function (prop, val) {
  this.el.forEach(function (element) {
    element.addEventListener(prop, val, false);
  });
  return this;
}
$elem.prototype.ready = function (prop, val) {
  this.el.forEach(function (element) {
    element.addEventListener("DOMContentLoaded", val, false);
  });
  return this;
}
$elem.prototype.ready = function (val) {
  this.el.addEventListener("DOMContentLoaded", val);
  return this;
}
$elem.prototype.submit = function (val) {
  this.el.forEach(function (element) {
    element.addEventListener("submit", val, false);
  });
  return this;
}
$elem.prototype.attr = function (prop, value) {
  this.el.forEach(function (element) {
    element.setAttribute(prop, value);
  });
  return this;
}
$elem.prototype.removeAttr = function (prop) {
  this.el.forEach(function (element) {
    element.removeAttribute(prop);
  });
  return this;
}

$elem.prototype.attrr = function (prop) {
  this.el.forEach(function (element) {
    element.attributes[prop].value;
  });
  return this.el[0].attributes[prop].value;
}
$elem.prototype.each = function (value) {
  const x = document;
  const y = this.el;
  for (let i = 0; i < this.el.length; i++) {
    this.el.forEach(function (element) {
      element.id;
    });
  }
  return this;
}
$elem.prototype.remove = function (value) {
  this.el.forEach(function (element) {
    element.remove(value);
  });
  return this;
}
$elem.prototype.appendElement = function (prop) {
  let sham;
  this.el.forEach(function (element) {
    var elem = document.createElement(prop);
    try{sham=this.$elem.prototype.appendElement.arguments.callee.caller.name}catch(e){}
    elem.setAttribute("id", "NewDiv"+(sham||''));
    element.appendChild(elem);
  });
  return this;
}
$elem.prototype.prependElement = function (prop) {
  let sham;
  this.el.forEach(function (element) {
    var elem = document.createElement(prop);
    try{sham=this.$elem.prototype.appendElement.arguments.callee.caller.name}catch(e){}
    elem.setAttribute("id", "NewDiv"+(sham||''));
    element.prepend(elem);
  });
  return this;
}
$elem.prototype.prop = function (value) {
  var Newelem = '',sham;
  this.el.forEach(function (element) {
    for (let j = 0; j < element.childNodes.length; j++) {
try{sham=element.childNodes[j].id.search("NewDiv")}catch(e){sham=-1}
      if (element.childNodes[j].id == "NewDiv"|| sham>=0)
        Newelem = element.childNodes[j].id;
    }
    for (let i = 0; i < Object.keys(value).length; i++) {
      if (Object.keys(value)[i] == "innerHTML") {
        document.getElementById(Newelem).innerHTML = Object.values(value)[i];
      } else {
        document.getElementById(Newelem).setAttribute(Object.keys(value)[i], Object.values(value)[i]);
        if (Object.keys(value)[i] == "id") { Newelem = Object.values(value)[i]; }
      }
    }
  });
  return this;
}

const errorApi=(errorCode)=>{
  console.log(errorCode.status)
        errorCode.status=errorCode?errorCode.status==1?200:errorCode.status:null;
return errorCode.status==undefined?errorCode.status===null?1:Object.getOwnPropertyNames(errorCode).length>=1?0:1:errorCode.status.toString().length<=2?parseInt(errorCode.status.toString())===0?0:1:parseInt(errorCode.status.toString()[0])===2?0:1;
}
const getLang=(id,address)=>{
return address?moduleAPIObject[address].local[langc]:moduleAPIObject[id].local[langc];
}
const searchAPI=(api,search)=>{
  for(let j of api){
      if(j.id==search){
        return j.id;
      }
  }
}

function ResetArray() {
  errorfunctionName = [], functionName = [], parentfunctionName = [], startData = [], SuccessData = [], funcName = [], errorData = [], IDData = [];
}
FontIconJson=
 {
      "APPOINTMENT_CIVIL_AFFAIR":"fa fa-clock",
      "APPOINTMENT_PASSPORT":"fa fa-clock",
      "APPOINTMENT_PRISON":"fa fa-clock",
      "APPOINTMENT_SHAHEED_ON_DUTY":"fa fa-clock",
      "AUTHORIZATION":"far fa-address-card",
      "QABUL":"far fa-address-card",
      "SPONSERSHIP_TRANSFER":"far fa-address-card",
      "TRAFFIC_VIOLATION":"far fa-address-card",
      "VEHICLE_REGISTRATION_RENEW":"far fa-address-card",
      "DRIVING_LICENSE":"far fa-address-card",
      "USER_ID":"far fa-address-card",
      "SPONSERED_PERSON_ID":"far fa-address-card",
      "IQAMA_RENEW":"fa fa-clock",
      "PASSPORT_USER":"fas fa-passport",
      "PASSPORT_RENEW":"fas fa-passport",
      "PASSPORT_UPDATE":"fas fa-passport"
  }

function fatalError(id,error,fatalDest) {
let msg=langc=="en-US"?"Sorry, service is currently unavailable, please try again later":"عفواً، الخدمة غير متوفرة حالياً."  
$elem("#"+(fatalDest||'')+id).html('');
$elem("#"+(fatalDest||'')+id).appendElement('div').prop({ id: "Error1"+id, class: "W-100", innerHTML: "" });  
$elem("#Error1"+id).appendElement('div').prop({ id: "Error2"+id, class: "message-alert message-error", innerHTML: "" });  
$elem("#Error2"+id).appendElement('span').prop({ id: "Error3"+id, class: "", innerHTML: "" });
$elem("#Error3"+id).html(error||msg)
}

function innerloader(id) {
  $elem("#"+id).prependElement('div').prop({ id: "loader" + id, class: "inner-overlay componentLoader" });
  $elem("#loader"+id).appendElement('div').prop({ id: "loader1" + id, class: "justify-content-center col-12 d-flex py-5 loader" });
  $elem("#loader"+id).appendElement('div').prop({ id: "loader2" + id, class: "justify-content-center col-12 d-flex py-3 loader-text", innerHTML: "" });
}
function innerunloader(id) {
  $elem(".componentLoader").remove();
}
function loader() {
  functionIsRun = 1;
logoAnimLoader();
}
function unloader() {
  if(Boolean($elem(".mask-submit-loader").el[0])){
  functionIsRun = 0;
  logoAnimLoader('hide');  
  }
}

function innerErrorfunction(id,error,getaddress) {   
$elem("#messages"+id).appendElement('div').prop({ id: "Error1"+id, class: "W-100", innerHTML: "" });  
$elem("#Error1"+id).appendElement('div').prop({ id: "Error2"+id, class: "message-alert message-error", innerHTML: "" });  
$elem("#Error2"+id).appendElement('span').prop({ id: "Error3"+id, class: "", innerHTML: "" });
$elem("#Error3"+id).html(error||getLang(id,getaddress).Error3)
}
function innerSuccessfunction(id,success,getaddress) {  
$elem("#messages"+id).appendElement('div').prop({ id: "Error1"+id, class: "W-100", innerHTML: "" });  
$elem("#Error1"+id).appendElement('div').prop({ id: "Error2"+id, class: "message-alert message-success", innerHTML: "" });  
$elem("#Error2"+id).appendElement('span').prop({ id: "Error3"+id, class: "", innerHTML: "" });
$elem("#Error3"+id).html(success||getLang(id,getaddress).successActionMsg)
}
function innerInfofunction(id,info) {  
$elem("#messages"+id).appendElement('div').prop({ id: "Error1"+id, class: "W-100", innerHTML: "" });  
$elem("#Error1"+id).appendElement('div').prop({ id: "Error2"+id, class: "message-alert message-info", innerHTML: "" });  
$elem("#Error2"+id).appendElement('span').prop({ id: "Error3"+id, class: "", innerHTML: "" });
$elem("#Error3"+id).html(info||getLang(id).infoMsg)
}
function errorfunction(error) {
let msg=langc=="en-US"?"Sorry, service is currently unavailable, please try again later":"عفواً، الخدمة غير متوفرة حالياً."     
$elem("#Error1"+id).html(error||msg)
  $elem("#Error4").hide();
  $elem("#Error3").show();
  $elem("#Error").show();

  $elem("#Error5").on("click",function(){
    $elem("#Error").hide();
  })
  $elem("#Error5").on("click",function(){
    $elem("#Error").hide();
  })  
}
function Success() {
  functionIsRun = 0;
  $elem("#Error").hide();
}
function toggleLang(value){
  if(value==true){
    sessionStorage.setItem("lang", "rtl");
  }else{
    sessionStorage.setItem("lang", "ltr");
  }
}
function Language() {
  if ($elem("html").attrr("lang") == "ar") {
    //$elem("html").attr("lang", "ar");
    langElem = $elem("html").attrr("lang");
    langc = "ar-SA";
    //$elem("body").removeClass("ltr");
    //$elem("body").addClass("rtl");
   // localStorage.setItem("lang", langc);
  }else{
    //$elem("html").attr("lang", "en");
    langElem = $elem("html").attrr("lang");
    langc = "en-US";
   // $elem("body").removeClass("rtl");
    //$elem("body").addClass("ltr");
    //localStorage.setItem("lang", langc);
  }
}
function initlang() {
  $elem('body').toggleClass("rtl");
  $elem('body').toggleClass("ltr");
  toggleLang($elem('body').hasClass("rtl"))
  Language();
  if (functionName.length > 0) {
    functionName.filter(val=>val.functionName(val.arg[0]));
  }
}

function exitfunction() {
  errorparentarguments_value = [];
  parentfunctionName.filter(val=> val.Error=false);
  unloader();
}

function callBackfunctions() {
  if(parentfunctionName.length>0){
    parentfunctionName.filter((val)=>{
      if(val.Error==true)
        Import(val);
    });
  }
}

function errorCallBack(func, inData, sucData, error, id) {
  if (sucData){
    parentfunctionName.filter(val=>{
      if(val.funcname==func){
        val.Error=false;
      }
    });
  }

  if (error){
    parentfunctionName.filter(val=>{
      if(val.funcname==func){
        val.Error=true;
      }
    });
  }

  if(parentfunctionName.length>0){
    let errorObjectExist=parentfunctionName.filter(val=>{
        if(val.Error==false||val.Error==true)
          return true;
    }); 
    if(errorObjectExist.length>0){
      let errorfunc=parentfunctionName.filter(val=>{
        if(val.Error==true)
          return true;
      });
      if(errorfunc.length==0){
        Success();
        unloader();
      }else{
        unloader();
        errorfunction();
      }
    }
  }
}
//Changes done in 31072021
function ErrorCallBackfunction(func, error) {
    errorCallBack(func, "", "", "Error");
}

function rootInitialiseFunction(params, func) {
  let collector=0;
  let InitialFunc=functionName.filter(val=>{
    if(val.functionName.name==func.name)
      collector= 1;
  });
  if(collector == 0){
    functionName.push({functionName:func,arg:[params]});
  }
}

var loadlabel = (params) => {
  let functionName = loadlabel;
  errorCallBack(functionName.name, "Started");
  let jsonfile=params;
  try{
    CallBackAPIFunction(jsonfile).then((response) => {
      Labelobj = response;
  }).catch((error) => {
    ErrorCallBackfunction(params,functionName,error);
  });
  }catch(error){
    ErrorCallBackfunction(params,functionName,error);
  }
}

function pagination(mainurl) {
  let pageURL=window.location.href.split("#")
  let mainPageURL = pageURL[0];
 // let mainPageURL = pageURL[0]+`?SRV=cmpnt&cmpntname=${mainurl}&source=content&subtype=javascript`;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var doc = new DOMParser().parseFromString(this.responseText, "text/html");
      var script = $(doc.documentElement).find("script#contentScript").html()
      pageview(doc, script);
    }
  };
  xhttp.open("POST", mainPageURL, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("");
}
function ScriptRun(val) {
  var sham = val;
  if (val.search("index") == -1) {
    eval(val);
  } else {
    PageLoadFunc(indexScript);
  }
}
function pageview(doc, script) {
  var mainhtml = $(doc.documentElement).find("body").find(".screen").html();

  var finalhtml = mainhtml;
  $elem(".screen .page").addClass("parent-area");
  $elem(".screen .page").removeClass("left-area");
  $elem(".screen .page").removeClass("page");
  $elem(".screen").append('<div class="page hide-area">' + finalhtml + '</div>');

  var timeout = setInterval(function () {
    if (functionIsRun == 0) {
      $elem(".screen .hide-area").addClass("left-area");
      $elem(".screen .page").removeClass("hide-area");
      $elem(".screen .parent-area").remove();
      ResetArray();
      mainfunction();
      //eval(script);
      ScriptRun(script);
      clearInterval(timeout);
    }
  }, 200);
}

function GetModule(module){
  for(i of myparent){
    for(j of Object.values(i.param)){
        if(j==module){
          let settime=setTimeout(function(){
            clearTimeout(settime);
            func(i);
            unloader();

          },1000);
          
        }
        break;
    }
}
} 
function objectAssign(params){
  let body={};
for(k of params){
  if(k.id!=undefined){
    if(k.type=="radio"){
      k.checked==true?Object.assign(body,{[k.name]:k.value}):'';
    }else{
      Object.assign(body,{[k.id]:k.value});
    }
  }
  if(k.id==undefined){
      Object.assign(body,{[Object.keys(k)]:Object.values(k)});
  }
}
return body;
}

function SearchObjectData(...params){
  for(value of params[0][params[1]][Object.getOwnPropertyNames(params[0][params[1]])[0]]){    
      if(value.addressId==params[2]){
         return value;
     }
   }
}

function verifyFields(...params){
  loader();
if(params[6]=="PUT"){
  CallBackAPIFunction(params[2]+params[1],params[6],params[0]).then((response)=>{
    if(errorApi(response)==0){
      $elem('#'+params[4].id).hide();
      $elem('#'+params[4].id).removeClass('in');
      $elem('#addressBackdrop').remove();
      let sotrageData=JSON.parse(sessionStorage.getItem("responsObj"));
      delete sotrageData['getAddListbyID'];
      sessionStorage.setItem("responsObj",JSON.stringify(sotrageData));
      GetModule(params[5]);
      innerSuccessfunction(params[5],'');
    }else{
      innerErrorfunction(params[5],response.reponseObj==null?'':response.reponseObj.errorModelList[0].errorMessage[langc]);
      $elem('#'+params[4].id).hide();
      $elem('#'+params[4].id).removeClass('in');
      $elem('#addressBackdrop').remove();
      unloader();
    }
  }).catch((error) => {
    unloader();
  });
}
if(params[6]=="POST"){
  CallBackAPIFunction(params[2],params[6],params[0]).then((response)=>{
    if(errorApi(response)==0){
      $elem('#'+params[4].id).hide();
      $elem('#'+params[4].id).removeClass('in');
      $elem('#addressBackdrop').remove();
      let sotrageData=JSON.parse(sessionStorage.getItem("responsObj"));
      delete sotrageData['getAddListbyID']
      sessionStorage.setItem("responsObj",JSON.stringify(sotrageData));
      innerSuccessfunction(params[5],'');      
      GetModule(params[5]);
    }else{
      innerErrorfunction(params[5],response.reponseObj==null?'':response.reponseObj.errorModelList[0].errorMessage[langc]);
      $elem('#'+params[4].id).hide();
      $elem('#'+params[4].id).removeClass('in');
      $elem('#addressBackdrop').remove();
      unloader();
    }
  }).catch((error) => {
    unloader();
  });
}
if(params[5]=="DELETE"){
  CallBackAPIFunction(params[0]+params[1],params[5],params[2]).then((response)=>{
    if(errorApi(response)==0){
      $elem('#'+params[3].id).hide();
      $elem('#'+params[3].id).removeClass('in');
      $elem('#addressBackdrop').remove();
      let sotrageData=JSON.parse(sessionStorage.getItem("responsObj"));
      delete sotrageData['getAddListbyID']
      sessionStorage.setItem("responsObj",JSON.stringify(sotrageData));      
      innerSuccessfunction(params[4],'');   
      GetModule(params[4]);
    }else{
        //Temp error Msg Start
      var errorMsg = '';
      if(langc=="en-US") {
        errorMsg = response.reponseObj==null?'':typeof(response.reponseObj[0])=='string'?response.reponseObj:response.reponseObj.errorModelList[0].errorMessage[langc];
      } else {
        if(response.status == '409') {
          errorMsg = getLang(params[4]).Error1;
        } else {
          errorMsg = getLang(params[4]).Error2;
        }
      }
      innerErrorfunction(params[4],errorMsg);
        //Temp error Msg Start
      $elem('#'+params[3].id).hide();
      $elem('#'+params[3].id).removeClass('in');
      $elem('#addressBackdrop').remove();
      unloader();
    }

    }).catch((error) => {
  unloader();
  });
}

}

const serverOrigin=(host)=>{
    let path=host=="s"?window.location.origin+":10039":window.location.origin;
    return path+"/";
}

const LanguageOrigin=(e,a)=>{
 return lang?lang=='EN'?e:a:'';
}


const formModal = (parentParams)=>{
let modal='';
for(let arg of parentParams){
modal=`
<div class="modal fade default-modal-theme ${arg.parentmodal?arg.parentmodal:''}" tabindex="-1" id="${arg.modal}" style="display: none;">
  <div class="modal-dialog modal-${arg.modalSize||'md'} addressBlockForm">
      <form id="${arg.formId}" data-toggle="validation" onsubmit="validation(${arg.modal},${arg.formId},'${arg.action}','${arg.reqid?arg.reqid:''}','${arg.module}','${arg.id}','${arg.AddressObj}'); ${arg.parentmodal?"$elem('#addressBackdrop').el[1].remove();":"$elem('#addressBackdrop').remove();"}" role="form">
        <div class="modal-content">
            <div class="modal-header">
                <a href="javascript:void(0)" class="close ${arg.id}closeModal" data-dismiss="modal" onclick="${arg.parentmodal?"$elem('#addressBackdrop').el[1].remove();":"$elem('#addressBackdrop').remove();"}$elem('#${arg.modal}').hide();$elem('#${arg.modal}').removeClass('in');"><i class="icon-cancel"></i></a>
                <h4 class="modal-title"> ${arg.Title}</h4>
            </div>
          <div class="modal-body">
              <div class="common-body">   
                   <div class="formContainer">
                      ${arg.verificationtext?arg.verificationtext:''}
                      ${arg.body}
                      ${arg.condition?arg.condition:''}
                      ${arg.timer?arg.timer:''}
                   </div>
            </div>
        </div>
        <div class="modal-footer">
          <div class="formButtons" align="center">
            <input type="submit" id="btn${arg.formId}" value="${arg.submitbtn}" class="actionButton ${arg.submitbtn=='hide'?'hide':''} round-button btn-${arg.formId}">
            <input type="button" onclick="${arg.cancelbtn=="Save"?"chooseOption('"+arg.AddressObj+"');":''} ${arg.parentmodal?"$elem('#addressBackdrop').el[1].remove();":"$elem('#addressBackdrop').remove();"} $elem('#${arg.modal}').hide();$elem('#${arg.modal}').removeClass('in'); " id="cancel${arg.formId}" value="${arg.cancelbtn}" class="round-button cancel-${arg.formId}">
          </div>   
        </div>
      </div>
    </form>
  </div>
</div>`;
$elem("body").append(`<div id="addressBackdrop" class="modal-backdrop fade in ${arg.parentbg?arg.parentbg:''}" style="display: block;"></div>`);
}
return modal;
} 



const tbl3input = (...params)=>{
  let id,modal='',onchange='',radiobtn,select,subselection,input,localLang=params[4],
  regionList='<option value="" selected="selected">'+localLang['SelectHere']+'</option>';
  for(let arg of params[0][params[5]]){
  id=arg.id,mendatory=arg.relMendatory=="*"?'required':'';
if(arg.type=='select'&&arg.relsubselection){
  if(arg.relsubselection){
    onchange = `onchange="getSelectData(this,'${arg.relsetval+langElem}',${params[2]},'${params[1][arg.API]}','${localLang['SelectHere']}','','${arg.relsetval}','${arg.AddressObj?arg.AddressObj:''}')"`;
  }
  if(arg.presetvalue==true){
    for(let optionsList of params[0]['getAllRegions']){
      regionList += `
      <option value="${optionsList.lookupId==undefined?optionsList.Id:optionsList.lookupId}">${optionsList.lookupValue==undefined?optionsList.Name:optionsList.lookupValue[langc]}</option>
      `;
    }
  }else{
    regionList='<option value="" '+(params[6]!=="Update"?'selected="selected"':'')+'>'+localLang['SelectHere']+'</option>';
  }

}else{
  onchange='';
  regionList='<option value="" '+(params[6]!=="Update"?'selected="selected"':'')+'>'+localLang['SelectHere']+'</option>';
}  
let inputText="";
//if(arg.type=='text'){
 for(i of Object.entries(arg)){
inputText+=i[0].search('rel')==-1?i[0].search('placeholder')==-1?`${i[0]}="${i[1]}" `:`${i[0]}="${localLang[i[1]]}"`:'';
} 
//}

arg.type=='text'?input=`<input data-lang="${arg.rellang}" data-rel="${arg.idr?arg.idr:''}" name="${arg.id}" ${inputText} ${mendatory}>`:``;
arg.type=='datalist'?input=`<div class="dataListContainer"><input name="${arg.id}" type="text" ${inputText} ${mendatory}> <datalist id="${arg.list}">${regionList}</datalist></div><input type="hidden" id="${arg.id+"Id"}">`:``;
//arg.type=='number'?input=`<input id="${arg.inputID}" name="${arg.inputID}" type="${arg.type}" value="${arg.value}" maxlength="4" autocomplete="off" ${mendatory}>`:``;
arg.type=='select'?input=`<select ${inputText} ${onchange} class="cityList" name="${arg.id}" ${mendatory}>${regionList}</select>`:``;
arg.type=='hidden'?input=`<input name="${arg.id}" ${inputText}>`:``;

if(arg.type=='radio'){
input='';
let addressTypeData=[]
addressTypeData=params[0][arg.json].map((item, i)=>Object.assign({}, item,arg.radio[i]))
  for(let j of addressTypeData){  
    input += `
    <span>
  <input id="${j.id}" type="radio" name="${j.Name}" initType="${arg.initType?arg.initType:''}" value="${j.lookupId}" ${mendatory}> <label for="${j.id}"> ${j.lookupValue[langc]}</label>
  </span>
    `;
  }
}
  let display = arg.type=="hidden"?'style="display:none"':'';
  modal+=`
  <tr ${display}>
    <td> 
      <span class="langEn">${arg.relTitle!=''?localLang[arg.relTitle]:''}</span>
      <span class="mandatoryAsterisk">${arg.relMendatory}</span> 
    </td> 
    <td class="colon">:</td> 
    <td> 
     ${input}
    </td> 
  </tr>
  `;  
  }
  let structure = `
      <table class="tbl3column tbl3column-md">
          <tbody>
             ${modal}
          </tbody>
      </table>
  `;
  return structure;
}


const tbl3view = (...params)=>{
  let id,modal='',input,localLang=params[4];
const setEntry=(label,value)=>{
  return `
  <tr>
    <td> 
      <span class="langEn">${label}</span>
    </td> 
    <td class="colon">:</td> 
    <td> 
     ${value}
    </td> 
  </tr>
  `};
debugger;
  for(let arg of Object.entries(params[5])){

  let viewEntry=localLang[arg[0]]==undefined?typeof(arg[1])=="object"?localLang[arg[0]+langc]:localLang[arg[0]]:localLang[arg[0]];
  if(viewEntry!==undefined){
  if((typeof(arg[1])=="object"&&arg[0]=="street")||(typeof(arg[1])=="object"&&arg[0]=="district")){
    modal+=setEntry(localLang[arg[0]+'ar-SA'],arg[1]['ar-SA']); 
    modal+=setEntry(localLang[arg[0]+'en-US'],arg[1]['en-US']); 
  }else{
    modal+=setEntry(localLang[arg[0]],typeof(arg[1])=="object"?arg[1][langc]:arg[1]); 
  }
  }

  }
  let structure = `
      <table class="tbl3column tbl3column-md">
          <tbody>
             ${modal}
          </tbody>
      </table>
  `;
  return structure;
}
const fileload=(path,ext,tag)=>{

  if(ext=="js"){
    $elem(tag||"body").prepend(`<script src="${path}"><\/script>`);
    var oldscript=document.querySelector("script[src^='"+ path +"']"),newscript=document.createElement("script");
    //newscript.src=path+"?timestamp="+Date.now();
    newscript.src=path+"?v="+moduleVersion;
    oldscript.parentNode.replaceChild(newscript,oldscript);
  }else{
    $elem(tag||"body").prepend(`<link rel="stylesheet" type="text/css" href="${path}"\/>`);
    var oldscript=document.querySelector("link[href^='"+ path +"']"),newscript=document.createElement("link");
    newscript.href=path+"?v="+moduleVersion;
  }
}


//Unminified Option Start

const adpages = async(...params)=>{
  let resp,outputData,extention = (params[1].split("."))[1];
try {
  resp = await fetch(params[0]+params[1]);
  outputData = await resp.text();
  } catch (error){
    return new Promise((resolve, reject) => {
      errorfunction(error);
    });
  }
  return new Promise((resolve, reject) => {
    extention=="css"?resolve("<style>"+outputData+"</style>"):resolve(outputData);
  }); 
};


const CallBackAPIFunction = async (...parentParams) => {
let jsontype, 
url,
mainLabelobj={},
i,
sessionResponsObj='',
sessionTrue='',
jsonurl=parentParams[0],
method=parentParams[1],
body=parentParams[2],
id=parentParams[3],
sessionData=parentParams[4]?parentParams[4][0]:'',
region=parentParams[5],
funcStatus=parentParams[6],
fatalDest=parentParams[7],
fetchAPIData='';  
if(method=="GET"){
  const fetchAPI= async(...params)=>{
    let dataReturn={status:'0'},Labelobj;
    if(sessionData){
      sessionResponsObj = JSON.parse(sessionStorage.getItem(parentParams[4][1]));
      sessionTrue='';
      Object.getOwnPropertyNames(sessionResponsObj).forEach((v,i,a)=>{
        if(params[3]==v){
          return sessionTrue =v;
        }
      });
    }
    if(sessionData&&sessionTrue==params[3]){
           dataReturn={status:typeof(sessionResponsObj[sessionTrue])=="string"?400:200,reponseObj:sessionResponsObj[sessionTrue]};
          Labelobj={status:typeof(sessionResponsObj[sessionTrue])=="string"?400:200};
      }else{
        for(let i=0;i<params[2];i++){
            try{
              Labelobj = await fetch(params[0],{cache:params[1]});
              if(params[0].split(".")[1].split("?")[0]=="js"){
                dataReturn =await Labelobj.text();
                eval(dataReturn);
                dataReturn={"reponseObj":eval(Object.keys(jsonurl[0])[0])};
                dataReturn.status=200;
              }else{
                dataReturn =await Labelobj.json();                
              }
            }catch(e){
              dataReturn={status:'404'};
              Labelobj={status:404};
            }
            dataReturn.status=dataReturn.reponseObj?dataReturn.reponseObj.Message=="No National Address exists"?200:dataReturn.status:dataReturn.status;
            dataReturn.status=params[0].search("AIAdrMgtSplGtw/Districts")>=1?dataReturn.reponseObj?dataReturn.reponseObj.success==false?200:dataReturn.status:dataReturn.status:dataReturn.status;
            if(dataReturn.status==200 || dataReturn.status==1 ||(dataReturn.reponseObj?dataReturn.reponseObj.StatusCode==0:'')){
                //dataReturn=params[0].search("GetById")>=1?{"reponseObj":dataReturn["reponseObj"]["Data"]}:dataReturn;
                dataReturn.reponseObj=params[0].search("AIAdrMgtSplGtw/Regions")>=1?dataReturn["reponseObj"]["Regions"]:dataReturn.reponseObj;
                dataReturn.reponseObj=params[0].search("AIAdrMgtSplGtw/Cities")>=1?dataReturn["reponseObj"]["Cities"]:dataReturn.reponseObj;
                dataReturn.reponseObj=params[0].search("AIAdrMgtSplGtw/Districts")>=1?dataReturn["reponseObj"]["Districts"]:dataReturn.reponseObj;
                //dataReturn.status=dataReturn.reponseObj==null?400:typeof(dataReturn.reponseObj)=="string"?400:200;
              break;
            }else{
              dataReturn.status=dataReturn.status==null?404:dataReturn.status;
            }
        }
      }
      return {dataReturn,Labelobj};
  };

  for(i of jsonurl){
    jsontype = Object.keys(i)[0];
    url = i[Object.keys(i)];
       try {
           fetchAPIData =await fetchAPI(url,'no-cache',5,Object.keys(i)[0]);
           if(errorApi(fetchAPIData.Labelobj)==0 && errorApi(fetchAPIData.dataReturn)==0){
           let key = jsontype;
           let value = fetchAPIData.dataReturn.reponseObj;
           Object.assign(mainLabelobj,{[key]:value});  
           }else{
            if(funcStatus=='parent'){
            fatalError(id,typeof(fetchAPIData.dataReturn.reponseObj)!="string"&&fetchAPIData.dataReturn.reponseObj!=null?fetchAPIData.dataReturn.reponseObj.errorModelList[0].errorMessage[langc]:'',fatalDest); 
            }else{
              if(Object.keys(jsonurl[i])[0]=='addressType'){
                fetchAPIData =await fetchAPI('/portal/individuals/module/AddressWidget/addresstype.json','no-cache',5,Object.keys(i)[0]);
                Object.keys(i)[0]==="local"?i[Object.keys(i)]=fetchAPIData.dataReturn:i[Object.keys(i)]=fetchAPIData.dataReturn.reponseObj;
              }else{
                innerErrorfunction(id,typeof(fetchAPIData.dataReturn.reponseObj)!="string"&&fetchAPIData.dataReturn.reponseObj!=null?fetchAPIData.dataReturn.reponseObj.errorModelList[0].errorMessage[langc]:''); 
              }
            }
          }
       } catch (error) {
         return new Promise((resolve, reject) => {
          reject(error);
         });
       }
   }
return new Promise((resolve, reject) =>resolve(mainLabelobj));
}else if(method=="POST"||method=="PUT"||method=="DELETE"){
  fetch (jsonurl,{
  method:"POST",
  body:JSON.stringify(body),
  headers:{"Content-Type":"application/json; charset=UTF-8"}
  }).then(response =>response.status==200?response.json():mainLabelobj={status:response.status})
  .then(text=>mainLabelobj=text).then(error=>error);
  return new Promise((resolve, reject) => {
   let prm=setInterval(function(){
      if(Object.keys(mainLabelobj).length>0){
        clearInterval(prm);
        resolve(mainLabelobj);
      }
   },1);
  });  
}else if(method=="GETREPO"){
  fetch (jsonurl,{
    cache:'no-cache'
  }).then(response =>response.status==200?response.json():mainLabelobj={status:response.status})
  .then(text=>mainLabelobj=text).then(error=>error);
  return new Promise((resolve, reject) => {
   let prm=setInterval(function(){
      if(Object.keys(mainLabelobj).length>0){
        clearInterval(prm);
        resolve(mainLabelobj);
      }
   },1);
  });  
}
};

const getSelectData=async(jsonfile,setval,form,URL,selectText,selectHere,cityId,AddressObj)=>{
let APIName=jsonfile.getAttribute("API");
let APIVal=URL+jsonfile.value;
if(form!=''){
loader();  
let id=form.id.replace("formupdate","");
CallBackAPIFunction([{[APIName]:APIVal}],"GET",'',form.id.replace("formupdate",""),[Boolean(sessionStorage.getItem(AddressObj)),AddressObj]).then((response)=>{
if(errorApi(response)==0){
let cityName='',dataList=$elem("#"+cityId).el[0].parentElement.querySelector("datalist"),input=$elem("#"+cityId).el[0],boolean=Boolean(dataList),setIntervaltime;

let select=boolean?dataList:$elem("#"+cityId).el[0];
let setvalLength=select.options.length;
for(let j=0;j<=setvalLength;j++){
  !boolean?select.options.length>=2?select.options[1].text!=selectHere?select.options[1]=null:'':'':dataList.options.length>=2?dataList.options[1].text!=selectHere?dataList.children[1].remove():'':'';
}
if(response[APIName]){
for(let optionsList of response[APIName]){
  !boolean?select.add(new Option(optionsList.lookupValue==undefined?optionsList.Name:optionsList.lookupValue[langc],optionsList.lookupId==undefined?optionsList.Id:optionsList.lookupId)):select.appendChild(new Option(optionsList.lookupValue==undefined?optionsList.Name:optionsList.lookupValue[langc],optionsList.lookupValue==undefined?optionsList.Name:optionsList.lookupValue[langc]));
}  

if(selectText){
  for(let arg2 of select.options){
    if(arg2.value==selectText){
      arg2.selected=true;
      arg2.setAttribute("selected","selected");
    }
  }
setIntervaltime=setInterval(()=>{
    if($elem("#"+cityId).el[0].options.length>=5)
    {
      searchSelect?searchSelect.el.id==cityId?searchSelect.destroy():'':'';
      document.querySelector("#"+cityId).nextElementSibling? document.querySelector("#"+cityId).nextElementSibling.remove():'';
      searchSelect=NiceSelect.bind(document.getElementById(cityId),{searchable:true,placeholder:select.selectedOptions[0].text,searchtext:select.selectedOptions[0].text});
      searchSelect.update();
      searchSelect='';
      select.style.position='absolute';
      clearInterval(setIntervaltime);
    }
}, 10);
}

if(boolean){
$elem("#"+input.id).on('input',function(e){
  for(let city of response){
    if(city.lookupValue[langc]==e.target.value){
      form[3].value=city.lookupId;
    }
  } 
});
let clearVal=selectText=="Select Here"||selectText=="اختر";
clearVal?input.value='':'';
clearVal?form[3].value='':'';
}

if($elem("#"+cityId).el[0].validity.valueMissing==false){
 $elem("#"+cityId).el[0].setCustomValidity('');
}
}
} else {
  let errorMsg = '';
  if(langc=="en-US") {
    errorMsg = response.reponseObj==null?'':response.reponseObj.errorModelList[0].errorMessage[langc];
  } else {
    if(response.status == '409') {
      errorMsg = getLang(params[0],AddressObj).Error4;
    } else {
      errorMsg = getLang(params[0],AddressObj).Error2;
    }
  }
  innerErrorfunction(moduleId, errorMsg,AddressObj);
  $elem('.modal').hide();
  $elem('.modal').removeClass('in');  
  $elem('#addressBackdrop').remove();
}
unloader();
}).catch((error) => {
unloader();
innerErrorfunction(moduleId,'',AddressObj);
});
}else{
let resp,outputData,cityObject;
try {
  let resp = await fetch(URL+jsonfile);
  outputData = await resp.json();
  for(let r of outputData.reponseObj){
   if(r['lookupId']==selectText){
    cityObject= r;
  }
  }
  } catch (error){
    return new Promise((resolve, reject) => {
      reject(error);
    });
  }
  return new Promise((resolve, reject) => {
    resolve(cityObject);
  }); 
}
}; 

const moduleAPIObj=(...params)=>{
  return {...moduleAPIObject, [params[0]]:params[1],[params[2]]:params[3]}
};

Language();
function mainfunction() {
  Language();
}
