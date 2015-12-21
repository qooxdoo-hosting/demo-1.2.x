(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.widget.Popup","qx.theme":"qx.theme.Modern"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.widget.Popup-qx.theme.Modern.js"]],
  urisBefore : [],
  packageHashes : {"0":"22594b2198d4"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['22594b2198d4']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser.demo"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Oxygen/32/apps/media-photo-album.png":[32,32,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/apps/media-photo-album.png":[32,32,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
(function(){var o="toString",n=".",m="default",k="Object",j='"',h="Array",g="()",f="String",e="Function",d=".prototype",N="function",M="Boolean",L="Error",K="constructor",J="warn",I="hasOwnProperty",H="string",G="toLocaleString",F="RegExp",E='\", "',v="info",w="BROKEN_IE",t="isPrototypeOf",u="Date",r="",s="qx.Bootstrap",p="]",q="Class",x="error",y="[Class ",A="valueOf",z="Number",C="count",B="debug",D="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return y+this.classname+p;
},createNamespace:function(name,bH){var bJ=name.split(n);
var parent=window;
var bI=bJ[0];

for(var i=0,bK=bJ.length-1;i<bK;i++,bI=bJ[i]){if(!parent[bI]){parent=parent[bI]={};
}else{parent=parent[bI];
}}parent[bI]=bH;
return bI;
},setDisplayName:function(V,W,name){V.displayName=W+n+name+g;
},setDisplayNames:function(S,T){for(var name in S){var U=S[name];

if(U instanceof Function){U.displayName=T+n+name+g;
}}},define:function(name,bc){if(!bc){var bc={statics:{}};
}var bh;
var bf=null;
qx.Bootstrap.setDisplayNames(bc.statics,name);

if(bc.members||bc.extend){qx.Bootstrap.setDisplayNames(bc.members,name+d);
bh=bc.construct||new Function;

if(bc.extend){this.extendClass(bh,bh,bc.extend,name,bg);
}var bd=bc.statics||{};
for(var i=0,bi=qx.Bootstrap.getKeys(bd),l=bi.length;i<l;i++){var bj=bi[i];
bh[bj]=bd[bj];
}bf=bh.prototype;
var be=bc.members||{};
for(var i=0,bi=qx.Bootstrap.getKeys(be),l=bi.length;i<l;i++){var bj=bi[i];
bf[bj]=be[bj];
}}else{bh=bc.statics||{};
}var bg=this.createNamespace(name,bh);
bh.name=bh.classname=name;
bh.basename=bg;
bh.$$type=q;
if(!bh.hasOwnProperty(o)){bh.toString=this.genericToString;
}if(bc.defer){bc.defer(bh,bf);
}qx.Bootstrap.$$registry[name]=bc.statics;
return bh;
}};
qx.Bootstrap.define(s,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bA,bB,bC,name,bD){var bG=bC.prototype;
var bF=new Function;
bF.prototype=bG;
var bE=new bF;
bA.prototype=bE;
bE.name=bE.classname=name;
bE.basename=bD;
bB.base=bA.superclass=bC;
bB.self=bA.constructor=bE.constructor=bA;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(b){return b.__count__;
},"default":function(cd){var length=0;

for(var ce in cd){length++;
}return length;
}})[(({}).__count__==0)?C:m],objectMergeWith:function(bR,bS,bT){if(bT===undefined){bT=true;
}
for(var bU in bS){if(bT||bR[bU]===undefined){bR[bU]=bS[bU];
}}return bR;
},__hn:[t,I,G,o,A,K],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bW){var bX=[];
var ca=Object.prototype.hasOwnProperty;

for(var cb in bW){if(ca.call(bW,cb)){bX.push(cb);
}}var bY=qx.Bootstrap.__hn;

for(var i=0,a=bY,l=a.length;i<l;i++){if(ca.call(bW,a[i])){bX.push(a[i]);
}}return bX;
},"default":function(bt){var bu=[];
var bv=Object.prototype.hasOwnProperty;

for(var bw in bt){if(bv.call(bt,bw)){bu.push(bw);
}}return bu;
}})[typeof (Object.keys)==
N?D:
(function(){for(var bN in {toString:1}){return bN;
}})()!==o?w:m],getKeysAsString:function(bL){var bM=qx.Bootstrap.getKeys(bL);

if(bM.length==0){return r;
}return j+bM.join(E)+j;
},__ho:{"[object String]":f,"[object Array]":h,"[object Object]":k,"[object RegExp]":F,"[object Number]":z,"[object Boolean]":M,"[object Date]":u,"[object Function]":e,"[object Error]":L},bind:function(O,self,P){var Q=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var cc=Array.prototype.slice.call(arguments,0,arguments.length);
return O.apply(self,Q.concat(cc));
};
},firstUp:function(br){return br.charAt(0).toUpperCase()+br.substr(1);
},firstLow:function(c){return c.charAt(0).toLowerCase()+c.substr(1);
},getClass:function(bp){var bq=Object.prototype.toString.call(bp);
return (qx.Bootstrap.__ho[bq]||bq.slice(8,-1));
},isString:function(bP){return (bP!==null&&(typeof bP===H||qx.Bootstrap.getClass(bP)==f||bP instanceof String||(!!bP&&!!bP.$$isString)));
},isArray:function(bk){return (bk!==null&&(bk instanceof Array||(bk&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bk.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bk)==h||(!!bk&&!!bk.$$isArray)));
},isObject:function(bs){return (bs!==undefined&&bs!==null&&qx.Bootstrap.getClass(bs)==k);
},isFunction:function(bo){return qx.Bootstrap.getClass(bo)==e;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bx,name){while(bx){if(bx.$$properties&&bx.$$properties[name]){return bx.$$properties[name];
}bx=bx.superclass;
}return null;
},hasProperty:function(bV,name){return !!qx.Bootstrap.getPropertyDefinition(bV,name);
},getEventType:function(bO,name){var bO=bO.constructor;

while(bO.superclass){if(bO.$$events&&bO.$$events[name]!==undefined){return bO.$$events[name];
}bO=bO.superclass;
}return null;
},supportsEvent:function(bQ,name){return !!qx.Bootstrap.getEventType(bQ,name);
},getByInterface:function(bl,bm){var bn,i,l;

while(bl){if(bl.$$implements){bn=bl.$$flatImplements;

for(i=0,l=bn.length;i<l;i++){if(bn[i]===bm){return bl;
}}}bl=bl.superclass;
}return null;
},hasInterface:function(ba,bb){return !!qx.Bootstrap.getByInterface(ba,bb);
},getMixins:function(by){var bz=[];

while(by){if(by.$$includes){bz.push.apply(bz,by.$$flatIncludes);
}by=by.superclass;
}return bz;
},$$logs:[],debug:function(ch,ci){qx.Bootstrap.$$logs.push([B,arguments]);
},info:function(cj,ck){qx.Bootstrap.$$logs.push([v,arguments]);
},warn:function(cf,cg){qx.Bootstrap.$$logs.push([J,arguments]);
},error:function(X,Y){qx.Bootstrap.$$logs.push([x,arguments]);
},trace:function(R){}}});
})();
(function(){var j="qx.allowUrlSettings",h="&",g="qx.core.Setting",f="qx.allowUrlVariants",e="qx.propertyDebugLevel",d="qxsetting",c=":",b=".";
qx.Bootstrap.define(g,{statics:{__eo:{},define:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__eo[l]){this.__eo[l]={};
}else if(this.__eo[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__eo[l].defaultValue=m;
},get:function(q){var r=this.__eo[q];

if(r===undefined){throw new Error('Setting "'+q+'" is not defined.');
}
if(r.value!==undefined){return r.value;
}return r.defaultValue;
},set:function(o,p){if((o.split(b)).length<2){throw new Error('Malformed settings key "'+o+'". Must be following the schema "namespace.key".');
}
if(!this.__eo[o]){this.__eo[o]={};
}this.__eo[o].value=p;
},__ep:function(){if(window.qxsettings){for(var a in window.qxsettings){this.set(a,window.qxsettings[a]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(k){}this.__eq();
}},__eq:function(){if(this.get(j)!=true){return;
}var t=document.location.search.slice(1).split(h);

for(var i=0;i<t.length;i++){var s=t[i].split(c);

if(s.length!=3||s[0]!=d){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(n){n.define(j,false);
n.define(f,false);
n.define(e,0);
n.__ep();
}});
})();
(function(){var m="function",k="Boolean",j="qx.Interface",h="]",g="toggle",f="Interface",e="is",d="[Interface ";
qx.Bootstrap.define(j,{statics:{define:function(name,H){if(H){if(H.extend&&!(H.extend instanceof Array)){H.extend=[H.extend];
}{};
var I=H.statics?H.statics:{};
if(H.extend){I.$$extends=H.extend;
}
if(H.properties){I.$$properties=H.properties;
}
if(H.members){I.$$members=H.members;
}
if(H.events){I.$$events=H.events;
}}else{var I={};
}I.$$type=f;
I.name=name;
I.toString=this.genericToString;
I.basename=qx.Bootstrap.createNamespace(name,I);
qx.Interface.$$registry[name]=I;
return I;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(J){if(!J){return [];
}var K=J.concat();

for(var i=0,l=J.length;i<l;i++){if(J[i].$$extends){K.push.apply(K,this.flatten(J[i].$$extends));
}}return K;
},__fx:function(y,z,A,B){var F=A.$$members;

if(F){for(var E in F){if(qx.Bootstrap.isFunction(F[E])){var D=this.__fy(z,E);
var C=D||qx.Bootstrap.isFunction(y[E]);

if(!C){throw new Error('Implementation of method "'+E+'" is missing in class "'+z.classname+'" required by interface "'+A.name+'"');
}var G=B===true&&!D&&!qx.Bootstrap.hasInterface(z,A);

if(G){y[E]=this.__fB(A,y[E],E,F[E]);
}}else{if(typeof y[E]===undefined){if(typeof y[E]!==m){throw new Error('Implementation of member "'+E+'" is missing in class "'+z.classname+'" required by interface "'+A.name+'"');
}}}}}},__fy:function(L,M){var Q=M.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!Q){return false;
}var N=qx.Bootstrap.firstLow(Q[2]);
var O=qx.Bootstrap.getPropertyDefinition(L,N);

if(!O){return false;
}var P=Q[0]==e||Q[0]==g;

if(P){return qx.Bootstrap.getPropertyDefinition(L,N).check==k;
}return true;
},__fz:function(a,b){if(b.$$properties){for(var c in b.$$properties){if(!qx.Bootstrap.getPropertyDefinition(a,c)){throw new Error('The property "'+c+'" is not supported by Class "'+a.classname+'"!');
}}}},__fA:function(n,o){if(o.$$events){for(var p in o.$$events){if(!qx.Bootstrap.supportsEvent(n,p)){throw new Error('The event "'+p+'" is not supported by Class "'+n.classname+'"!');
}}}},assertObject:function(u,v){var x=u.constructor;
this.__fx(u,x,v,false);
this.__fz(x,v);
this.__fA(x,v);
var w=v.$$extends;

if(w){for(var i=0,l=w.length;i<l;i++){this.assertObject(u,w[i]);
}}},assert:function(q,r,s){this.__fx(q.prototype,q,r,s);
this.__fz(q,r);
this.__fA(q,r);
var t=r.$$extends;

if(t){for(var i=0,l=t.length;i<l;i++){this.assert(q,t[i],s);
}}},genericToString:function(){return d+this.name+h;
},$$registry:{},__fB:function(){},__fC:null,__fD:function(){}}});
})();
(function(){var k="qx.Mixin",j=".prototype",h="constructor",g="[Mixin ",f="]",e="destruct",d="Mixin";
qx.Bootstrap.define(k,{statics:{define:function(name,m){if(m){if(m.include&&!(m.include instanceof Array)){m.include=[m.include];
}{};
var o=m.statics?m.statics:{};
qx.Bootstrap.setDisplayNames(o,name);

for(var n in o){if(o[n] instanceof Function){o[n].$$mixin=o;
}}if(m.construct){o.$$constructor=m.construct;
qx.Bootstrap.setDisplayName(m.construct,name,h);
}
if(m.include){o.$$includes=m.include;
}
if(m.properties){o.$$properties=m.properties;
}
if(m.members){o.$$members=m.members;
qx.Bootstrap.setDisplayNames(m.members,name+j);
}
for(var n in o.$$members){if(o.$$members[n] instanceof Function){o.$$members[n].$$mixin=o;
}}
if(m.events){o.$$events=m.events;
}
if(m.destruct){o.$$destructor=m.destruct;
qx.Bootstrap.setDisplayName(m.destruct,name,e);
}}else{var o={};
}o.$$type=d;
o.name=name;
o.toString=this.genericToString;
o.basename=qx.Bootstrap.createNamespace(name,o);
this.$$registry[name]=o;
return o;
},checkCompatibility:function(p){var s=this.flatten(p);
var t=s.length;

if(t<2){return true;
}var w={};
var v={};
var u={};
var r;

for(var i=0;i<t;i++){r=s[i];

for(var q in r.events){if(u[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+u[q]+'" in member "'+q+'"!');
}u[q]=r.name;
}
for(var q in r.properties){if(w[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+w[q]+'" in property "'+q+'"!');
}w[q]=r.name;
}
for(var q in r.members){if(v[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+v[q]+'" in member "'+q+'"!');
}v[q]=r.name;
}}return true;
},isCompatible:function(a,b){var c=qx.Bootstrap.getMixins(b);
c.push(a);
return qx.Mixin.checkCompatibility(c);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return g+this.name+f;
},$$registry:{},__el:null,__em:function(){}}});
})();
(function(){var ec=';',eb='computed=this.',ea='=value;',dY='this.',dX="set",dW="setThemed",dV="setRuntime",dU="init",dT='if(this.',dS='delete this.',dc='!==undefined)',db='}',da="resetThemed",cY='else if(this.',cX="string",cW='return this.',cV="reset",cU="boolean",cT="resetRuntime",cS='!==undefined){',ej="",ek="refresh",eh='=true;',ei="this.",ef=";",eg='old=this.',ed="();",ee='else ',el='if(old===undefined)old=this.',em='old=computed=this.',dB="return this.",dA="get",dD='(value);',dC="(a[",dF='if(old===computed)return value;',dE='if(old===undefined)old=null;',dH=' of an instance of ',dG=' is not (yet) ready!");',dz="]);",dy='!==inherit){',bJ='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bK='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bL='value !== null && value.nodeType === 9 && value.documentElement',bM='===value)return value;',bN='value !== null && value.$$type === "Mixin"',bO='return init;',bP='var init=this.',bQ='value !== null && value.nodeType === 1 && value.attributes',bR="var parent = this.getLayoutParent();",bS="Error in property ",eA='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',ez='.validate.call(this, value);',ey='qx.core.Assert.assertInstance(value, Date, msg) || true',ex='else{',eE="if (!parent) return;",eD=" in method ",eC='qx.core.Assert.assertInstance(value, Error, msg) || true',eB='=computed;',eG='Undefined value is not allowed!',eF='(backup);',cs="MSIE 6.0",ct='if(computed===inherit){',cq="inherit",cr='Is invalid!',cw='if(value===undefined)prop.error(this,2,"',cx='var computed, old=this.',cu='else if(computed===undefined)',cv="': ",co=" of class ",cp='value !== null && value.nodeType !== undefined',cb='===undefined)return;',ca='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',cd="')){",cc='qx.core.Assert.assertPositiveInteger(value, msg) || true',bW='else this.',bV='value=this.',bY='","',bX='if(init==qx.core.Property.$$inherit)init=null;',bU='value !== null && value.$$type === "Interface"',bT='var inherit=prop.$$inherit;',cC="', qx.event.type.Data, [computed, old]",cD="var value = parent.",cE="$$useinit_",cF='computed=undefined;delete this.',cy="(value);",cz='Requires exactly one argument!',cA='",value);',cB='computed=value;',cG="$$runtime_",cH=';}',cl="$$user_",ck='){',cj='qx.core.Assert.assertArray(value, msg) || true',ci='if(computed===undefined||computed===inherit){',ch='qx.core.Assert.assertPositiveNumber(value, msg) || true',cg=".prototype",cf="Boolean",ce=")}",cn='(computed, old, "',cm='return value;',cI='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cJ="if(reg.hasListener(this, '",cK='Does not allow any arguments!',cL=')a[i].',cM="()",cN="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cO='.$$properties.',cP='value !== null && value.$$type === "Theme"',cQ="var reg=qx.event.Registration;",cR="())",dg='return null;',df='qx.core.Assert.assertObject(value, msg) || true',de='");',dd='qx.core.Assert.assertString(value, msg) || true',dk='var pa=this.getLayoutParent();if(pa)computed=pa.',dj="if (value===undefined) value = parent.",di='value !== null && value.$$type === "Class"',dh='qx.core.Assert.assertFunction(value, msg) || true',dm='!==undefined&&',dl='var computed, old;',du='var backup=computed;',dv='}else{',ds="object",dt="$$init_",dq="$$theme_",dr='if(computed===undefined)computed=null;',dn='qx.core.Assert.assertMap(value, msg) || true',dp='qx.core.Assert.assertNumber(value, msg) || true',dw='if((computed===undefined||computed===inherit)&&',dx="reg.fireEvent(this, '",dL='Null value is not allowed!',dK='qx.core.Assert.assertInteger(value, msg) || true',dN="value",dM="rv:1.8.1",dP="shorthand",dO='qx.core.Assert.assertInstance(value, RegExp, msg) || true',dR='value !== null && value.type !== undefined',dQ='value !== null && value.document',dJ='throw new Error("Property ',dI="(!this.",et='qx.core.Assert.assertBoolean(value, msg) || true',eu='if(a[i].',ev="toggle",ew="$$inherit_",ep='var prop=qx.core.Property;',eq=" with incoming value '",er="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",es='if(computed===undefined||computed==inherit)computed=null;',en="qx.core.Property",eo="is",bI='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(en,{statics:{__kU:{"Boolean":et,"String":dd,"Number":dp,"Integer":dK,"PositiveNumber":ch,"PositiveInteger":cc,"Error":eC,"RegExp":dO,"Object":df,"Array":cj,"Map":dn,"Function":dh,"Date":ey,"Node":cp,"Element":bQ,"Document":bL,"Window":dQ,"Event":dR,"Class":di,"Mixin":bN,"Interface":bU,"Theme":cP,"Color":bJ,"Decorator":ca,"Font":bK},__kV:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:cq,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cX,dereference:cU,inheritable:cU,nullable:cU,themeable:cU,refine:cU,init:null,apply:cX,event:cX,check:null,transform:cX,deferredInit:cU,validate:null},$$allowedGroupKeys:{name:cX,group:ds,mode:cX,themeable:cU},$$inheritable:{},__kW:function(s){var t=this.__kX(s);

if(!t.length){var u=qx.lang.Function.empty;
}else{u=this.__kY(t);
}s.prototype.$$refreshInheritables=u;
},__kX:function(bx){var bz=[];

while(bx){var by=bx.$$properties;

if(by){for(var name in this.$$inheritable){if(by[name]&&by[name].inheritable){bz.push(name);
}}}bx=bx.superclass;
}return bz;
},__kY:function(ba){var be=this.$$store.inherit;
var bd=this.$$store.init;
var bc=this.$$method.refresh;
var bb=[bR,eE];

for(var i=0,l=ba.length;i<l;i++){var name=ba[i];
bb.push(cD,be[name],ef,dj,bd[name],ef,ei,bc[name],cy);
}return new Function(bb.join(ej));
},attachRefreshInheritables:function(bw){bw.prototype.$$refreshInheritables=function(){qx.core.Property.__kW(bw);
return this.$$refreshInheritables();
};
},attachMethods:function(eW,name,eX){eX.group?this.__la(eW,eX,name):this.__lb(eW,eX,name);
},__la:function(eK,eL,name){var eS=qx.Bootstrap.firstUp(name);
var eR=eK.prototype;
var eT=eL.themeable===true;
{};
var eU=[];
var eO=[];

if(eT){var eM=[];
var eQ=[];
}var eP=cN;
eU.push(eP);

if(eT){eM.push(eP);
}
if(eL.mode==dP){var eN=er;
eU.push(eN);

if(eT){eM.push(eN);
}}
for(var i=0,a=eL.group,l=a.length;i<l;i++){{};
eU.push(ei,this.$$method.set[a[i]],dC,i,dz);
eO.push(ei,this.$$method.reset[a[i]],ed);

if(eT){{};
eM.push(ei,this.$$method.setThemed[a[i]],dC,i,dz);
eQ.push(ei,this.$$method.resetThemed[a[i]],ed);
}}this.$$method.set[name]=dX+eS;
eR[this.$$method.set[name]]=new Function(eU.join(ej));
this.$$method.reset[name]=cV+eS;
eR[this.$$method.reset[name]]=new Function(eO.join(ej));

if(eT){this.$$method.setThemed[name]=dW+eS;
eR[this.$$method.setThemed[name]]=new Function(eM.join(ej));
this.$$method.resetThemed[name]=da+eS;
eR[this.$$method.resetThemed[name]]=new Function(eQ.join(ej));
}},__lb:function(P,Q,name){var S=qx.Bootstrap.firstUp(name);
var U=P.prototype;
{};
if(Q.dereference===undefined&&typeof Q.check===cX){Q.dereference=this.__lc(Q.check);
}var T=this.$$method;
var R=this.$$store;
R.runtime[name]=cG+name;
R.user[name]=cl+name;
R.theme[name]=dq+name;
R.init[name]=dt+name;
R.inherit[name]=ew+name;
R.useinit[name]=cE+name;
T.get[name]=dA+S;
U[T.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,P,name,dA);
};
T.set[name]=dX+S;
U[T.set[name]]=function(O){return qx.core.Property.executeOptimizedSetter(this,P,name,dX,arguments);
};
T.reset[name]=cV+S;
U[T.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,P,name,cV);
};

if(Q.inheritable||Q.apply||Q.event||Q.deferredInit){T.init[name]=dU+S;
U[T.init[name]]=function(eY){return qx.core.Property.executeOptimizedSetter(this,P,name,dU,arguments);
};
}
if(Q.inheritable){T.refresh[name]=ek+S;
U[T.refresh[name]]=function(v){return qx.core.Property.executeOptimizedSetter(this,P,name,ek,arguments);
};
}T.setRuntime[name]=dV+S;
U[T.setRuntime[name]]=function(N){return qx.core.Property.executeOptimizedSetter(this,P,name,dV,arguments);
};
T.resetRuntime[name]=cT+S;
U[T.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,P,name,cT);
};

if(Q.themeable){T.setThemed[name]=dW+S;
U[T.setThemed[name]]=function(Y){return qx.core.Property.executeOptimizedSetter(this,P,name,dW,arguments);
};
T.resetThemed[name]=da+S;
U[T.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,P,name,da);
};
}
if(Q.check===cf){U[ev+S]=new Function(dB+T.set[name]+dI+T.get[name]+cR);
U[eo+S]=new Function(dB+T.get[name]+cM);
}},__lc:function(eV){return !!this.__kV[eV];
},__ld:function(fa){return this.__kV[fa]||qx.Bootstrap.classIsDefined(fa)||(qx.Interface&&qx.Interface.isDefined(fa));
},__le:{0:bI,1:cz,2:eG,3:cK,4:dL,5:cr},error:function(bg,bh,bi,bj,bk){var bl=bg.constructor.classname;
var bm=bS+bi+co+bl+eD+this.$$method[bj][bi]+eq+bk+cv;
throw new Error(bm+(this.__le[bh]||"Unknown reason: "+bh));
},__lf:function(m,n,name,o,p,q){var r=this.$$method[o][name];
{n[r]=new Function(dN,p.join(ej));
};
{};
qx.Bootstrap.setDisplayName(n[r],m.classname+cg,r);
if(q===undefined){return m[r]();
}else{return m[r](q[0]);
}},executeOptimizedGetter:function(G,H,name,I){var K=H.$$properties[name];
var M=H.prototype;
var J=[];
var L=this.$$store;
J.push(dT,L.runtime[name],dc);
J.push(cW,L.runtime[name],ec);

if(K.inheritable){J.push(cY,L.inherit[name],dc);
J.push(cW,L.inherit[name],ec);
J.push(ee);
}J.push(dT,L.user[name],dc);
J.push(cW,L.user[name],ec);

if(K.themeable){J.push(cY,L.theme[name],dc);
J.push(cW,L.theme[name],ec);
}
if(K.deferredInit&&K.init===undefined){J.push(cY,L.init[name],dc);
J.push(cW,L.init[name],ec);
}J.push(ee);

if(K.init!==undefined){if(K.inheritable){J.push(bP,L.init[name],ec);

if(K.nullable){J.push(bX);
}else if(K.init!==undefined){J.push(cW,L.init[name],ec);
}else{J.push(cI,name,dH,H.classname,dG);
}J.push(bO);
}else{J.push(cW,L.init[name],ec);
}}else if(K.inheritable||K.nullable){J.push(dg);
}else{J.push(dJ,name,dH,H.classname,dG);
}return this.__lf(G,M,name,I,J);
},executeOptimizedSetter:function(w,x,name,y,z){var E=x.$$properties[name];
var D=x.prototype;
var B=[];
var A=y===dX||y===dW||y===dV||(y===dU&&E.init===undefined);
var C=E.apply||E.event||E.inheritable;
var F=this.__lg(y,name);
this.__lh(B,E,name,y,A);

if(A){this.__li(B,x,E,name);
}
if(C){this.__lj(B,A,F,y);
}
if(E.inheritable){B.push(bT);
}{};

if(!C){this.__ll(B,name,y,A);
}else{this.__lm(B,E,name,y,A);
}
if(E.inheritable){this.__ln(B,E,name,y);
}else if(C){this.__lo(B,E,name,y);
}
if(C){this.__lp(B,E,name);
if(E.inheritable&&D._getChildren){this.__lq(B,name);
}}if(A){B.push(cm);
}return this.__lf(w,D,name,y,B,z);
},__lg:function(bD,name){if(bD===dV||bD===cT){var bE=this.$$store.runtime[name];
}else if(bD===dW||bD===da){bE=this.$$store.theme[name];
}else if(bD===dU){bE=this.$$store.init[name];
}else{bE=this.$$store.user[name];
}return bE;
},__lh:function(bn,bo,name,bp,bq){{if(!bo.nullable||bo.check||bo.inheritable){bn.push(ep);
}if(bp===dX){bn.push(cw,name,bY,bp,cA);
}};
},__li:function(eH,eI,eJ,name){if(eJ.transform){eH.push(bV,eJ.transform,dD);
}if(eJ.validate){if(typeof eJ.validate===cX){eH.push(dY,eJ.validate,dD);
}else if(eJ.validate instanceof Function){eH.push(eI.classname,cO,name);
eH.push(ez);
}}},__lj:function(f,g,h,j){var k=(j===cV||j===da||j===cT);

if(g){f.push(dT,h,bM);
}else if(k){f.push(dT,h,cb);
}},__lk:undefined,__ll:function(bF,name,bG,bH){if(bG===dV){bF.push(dY,this.$$store.runtime[name],ea);
}else if(bG===cT){bF.push(dT,this.$$store.runtime[name],dc);
bF.push(dS,this.$$store.runtime[name],ec);
}else if(bG===dX){bF.push(dY,this.$$store.user[name],ea);
}else if(bG===cV){bF.push(dT,this.$$store.user[name],dc);
bF.push(dS,this.$$store.user[name],ec);
}else if(bG===dW){bF.push(dY,this.$$store.theme[name],ea);
}else if(bG===da){bF.push(dT,this.$$store.theme[name],dc);
bF.push(dS,this.$$store.theme[name],ec);
}else if(bG===dU&&bH){bF.push(dY,this.$$store.init[name],ea);
}},__lm:function(b,c,name,d,e){if(c.inheritable){b.push(cx,this.$$store.inherit[name],ec);
}else{b.push(dl);
}b.push(dT,this.$$store.runtime[name],cS);

if(d===dV){b.push(eb,this.$$store.runtime[name],ea);
}else if(d===cT){b.push(dS,this.$$store.runtime[name],ec);
b.push(dT,this.$$store.user[name],dc);
b.push(eb,this.$$store.user[name],ec);
b.push(cY,this.$$store.theme[name],dc);
b.push(eb,this.$$store.theme[name],ec);
b.push(cY,this.$$store.init[name],cS);
b.push(eb,this.$$store.init[name],ec);
b.push(dY,this.$$store.useinit[name],eh);
b.push(db);
}else{b.push(em,this.$$store.runtime[name],ec);
if(d===dX){b.push(dY,this.$$store.user[name],ea);
}else if(d===cV){b.push(dS,this.$$store.user[name],ec);
}else if(d===dW){b.push(dY,this.$$store.theme[name],ea);
}else if(d===da){b.push(dS,this.$$store.theme[name],ec);
}else if(d===dU&&e){b.push(dY,this.$$store.init[name],ea);
}}b.push(db);
b.push(cY,this.$$store.user[name],cS);

if(d===dX){if(!c.inheritable){b.push(eg,this.$$store.user[name],ec);
}b.push(eb,this.$$store.user[name],ea);
}else if(d===cV){if(!c.inheritable){b.push(eg,this.$$store.user[name],ec);
}b.push(dS,this.$$store.user[name],ec);
b.push(dT,this.$$store.runtime[name],dc);
b.push(eb,this.$$store.runtime[name],ec);
b.push(dT,this.$$store.theme[name],dc);
b.push(eb,this.$$store.theme[name],ec);
b.push(cY,this.$$store.init[name],cS);
b.push(eb,this.$$store.init[name],ec);
b.push(dY,this.$$store.useinit[name],eh);
b.push(db);
}else{if(d===dV){b.push(eb,this.$$store.runtime[name],ea);
}else if(c.inheritable){b.push(eb,this.$$store.user[name],ec);
}else{b.push(em,this.$$store.user[name],ec);
}if(d===dW){b.push(dY,this.$$store.theme[name],ea);
}else if(d===da){b.push(dS,this.$$store.theme[name],ec);
}else if(d===dU&&e){b.push(dY,this.$$store.init[name],ea);
}}b.push(db);
if(c.themeable){b.push(cY,this.$$store.theme[name],cS);

if(!c.inheritable){b.push(eg,this.$$store.theme[name],ec);
}
if(d===dV){b.push(eb,this.$$store.runtime[name],ea);
}else if(d===dX){b.push(eb,this.$$store.user[name],ea);
}else if(d===dW){b.push(eb,this.$$store.theme[name],ea);
}else if(d===da){b.push(dS,this.$$store.theme[name],ec);
b.push(dT,this.$$store.init[name],cS);
b.push(eb,this.$$store.init[name],ec);
b.push(dY,this.$$store.useinit[name],eh);
b.push(db);
}else if(d===dU){if(e){b.push(dY,this.$$store.init[name],ea);
}b.push(eb,this.$$store.theme[name],ec);
}else if(d===ek){b.push(eb,this.$$store.theme[name],ec);
}b.push(db);
}b.push(cY,this.$$store.useinit[name],ck);

if(!c.inheritable){b.push(eg,this.$$store.init[name],ec);
}
if(d===dU){if(e){b.push(eb,this.$$store.init[name],ea);
}else{b.push(eb,this.$$store.init[name],ec);
}}else if(d===dX||d===dV||d===dW||d===ek){b.push(dS,this.$$store.useinit[name],ec);

if(d===dV){b.push(eb,this.$$store.runtime[name],ea);
}else if(d===dX){b.push(eb,this.$$store.user[name],ea);
}else if(d===dW){b.push(eb,this.$$store.theme[name],ea);
}else if(d===ek){b.push(eb,this.$$store.init[name],ec);
}}b.push(db);
if(d===dX||d===dV||d===dW||d===dU){b.push(ex);

if(d===dV){b.push(eb,this.$$store.runtime[name],ea);
}else if(d===dX){b.push(eb,this.$$store.user[name],ea);
}else if(d===dW){b.push(eb,this.$$store.theme[name],ea);
}else if(d===dU){if(e){b.push(eb,this.$$store.init[name],ea);
}else{b.push(eb,this.$$store.init[name],ec);
}b.push(dY,this.$$store.useinit[name],eh);
}b.push(db);
}},__ln:function(bA,bB,name,bC){bA.push(ci);

if(bC===ek){bA.push(cB);
}else{bA.push(dk,this.$$store.inherit[name],ec);
}bA.push(dw);
bA.push(dY,this.$$store.init[name],dm);
bA.push(dY,this.$$store.init[name],dy);
bA.push(eb,this.$$store.init[name],ec);
bA.push(dY,this.$$store.useinit[name],eh);
bA.push(dv);
bA.push(dS,this.$$store.useinit[name],cH);
bA.push(db);
bA.push(dF);
bA.push(ct);
bA.push(cF,this.$$store.inherit[name],ec);
bA.push(db);
bA.push(cu);
bA.push(dS,this.$$store.inherit[name],ec);
bA.push(bW,this.$$store.inherit[name],eB);
bA.push(du);
if(bB.init!==undefined&&bC!==dU){bA.push(el,this.$$store.init[name],ef);
}else{bA.push(dE);
}bA.push(es);
},__lo:function(bt,bu,name,bv){if(bv!==dX&&bv!==dV&&bv!==dW){bt.push(dr);
}bt.push(dF);
if(bu.init!==undefined&&bv!==dU){bt.push(el,this.$$store.init[name],ef);
}else{bt.push(dE);
}},__lp:function(br,bs,name){if(bs.apply){br.push(dY,bs.apply,cn,name,de);
}if(bs.event){br.push(cQ,cJ,bs.event,cd,dx,bs.event,cC,ce);
}},__lq:function(bf,name){bf.push(eA);
bf.push(eu,this.$$method.refresh[name],cL,this.$$method.refresh[name],eF);
bf.push(db);
}},defer:function(V){var X=navigator.userAgent.indexOf(cs)!=-1;
var W=navigator.userAgent.indexOf(dM)!=-1;
if(X||W){V.__lc=V.__ld;
}}});
})();
(function(){var j="emulated",h="native",g='"',f="qx.lang.Core",e="\\\\",d="\\\"",c="[object Error]";
qx.Bootstrap.define(f,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==c)?j:h],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(a,b){if(b==null){b=0;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i<this.length;i++){if(this[i]===a){return i;
}}return -1;
}}[Array.prototype.indexOf?h:j],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(s,t){if(t==null){t=this.length-1;
}else if(t<0){t=Math.max(0,this.length+t);
}
for(var i=t;i>=0;i--){if(this[i]===s){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?h:j],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(p,q){var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){p.call(q||window,r,i,this);
}}}}[Array.prototype.forEach?h:j],arrayFilter:{"native":Array.prototype.filter,"emulated":function(x,y){var z=[];
var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(x.call(y||window,A,i,this)){z.push(this[i]);
}}}return z;
}}[Array.prototype.filter?h:j],arrayMap:{"native":Array.prototype.map,"emulated":function(k,m){var n=[];
var l=this.length;

for(var i=0;i<l;i++){var o=this[i];

if(o!==undefined){n[i]=k.call(m||window,o,i,this);
}}return n;
}}[Array.prototype.map?h:j],arraySome:{"native":Array.prototype.some,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(B.call(C||window,D,i,this)){return true;
}}}return false;
}}[Array.prototype.some?h:j],arrayEvery:{"native":Array.prototype.every,"emulated":function(u,v){var l=this.length;

for(var i=0;i<l;i++){var w=this[i];

if(w!==undefined){if(!u.call(v||window,w,i,this)){return false;
}}}return true;
}}[Array.prototype.every?h:j],stringQuote:{"native":String.prototype.quote,"emulated":function(){return g+this.replace(/\\/g,e).replace(/\"/g,d)+g;
}}[String.prototype.quote?h:j]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var I="[Class ",H="]",G="$$init_",F="toString",E="constructor",D="singleton",C=".prototype",B="extend",A="Class",z="destruct",w="qx.Class",y=".",x="static",v="qx.event.type.Data";
qx.Bootstrap.define(w,{statics:{define:function(name,bc){if(!bc){var bc={};
}if(bc.include&&!(bc.include instanceof Array)){bc.include=[bc.include];
}if(bc.implement&&!(bc.implement instanceof Array)){bc.implement=[bc.implement];
}var bd=false;

if(!bc.hasOwnProperty(B)&&!bc.type){bc.type=x;
bd=true;
}{};
var be=this.__cb(name,bc.type,bc.extend,bc.statics,bc.construct,bc.destruct,bc.include);
if(bc.extend){if(bc.properties){this.__cd(be,bc.properties,true);
}if(bc.members){this.__cf(be,bc.members,true,true,false);
}if(bc.events){this.__cc(be,bc.events,true);
}if(bc.include){for(var i=0,l=bc.include.length;i<l;i++){this.__cj(be,bc.include[i],false);
}}}if(bc.settings){for(var bf in bc.settings){qx.core.Setting.define(bf,bc.settings[bf]);
}}if(bc.variants){for(var bf in bc.variants){qx.core.Variant.define(bf,bc.variants[bf].allowedValues,bc.variants[bf].defaultValue);
}}if(bc.implement){for(var i=0,l=bc.implement.length;i<l;i++){this.__ch(be,bc.implement[i]);
}}{};
if(bc.defer){bc.defer.self=be;
bc.defer(be,be.prototype,{add:function(name,N){var O={};
O[name]=N;
qx.Class.__cd(be,O,true);
}});
}return be;
},undefine:function(name){delete this.$$registry[name];
var bV=name.split(y);
var bX=[window];

for(var i=0;i<bV.length;i++){bX.push(bX[i][bV[i]]);
}for(var i=bX.length-1;i>=1;i--){var bW=bX[i];
var parent=bX[i-1];

if(qx.Bootstrap.isFunction(bW)||qx.Bootstrap.objectGetLength(bW)===0){delete parent[bV[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(t,u){{};
qx.Class.__cj(t,u,false);
},patch:function(by,bz){{};
qx.Class.__cj(by,bz,true);
},isSubClassOf:function(bA,bB){if(!bA){return false;
}
if(bA==bB){return true;
}
if(bA.prototype instanceof bB){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(U){var V=[];

while(U){if(U.$$properties){V.push.apply(V,qx.Bootstrap.getKeys(U.$$properties));
}U=U.superclass;
}return V;
},getByProperty:function(bU,name){while(bU){if(bU.$$properties&&bU.$$properties[name]){return bU;
}bU=bU.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bm,bn){return bm.$$includes&&bm.$$includes.indexOf(bn)!==-1;
},getByMixin:function(ch,ci){var cj,i,l;

while(ch){if(ch.$$includes){cj=ch.$$flatIncludes;

for(i=0,l=cj.length;i<l;i++){if(cj[i]===ci){return ch;
}}}ch=ch.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(L,M){return !!this.getByMixin(L,M);
},hasOwnInterface:function(J,K){return J.$$implements&&J.$$implements.indexOf(K)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bt){var bu=[];

while(bt){if(bt.$$implements){bu.push.apply(bu,bt.$$flatImplements);
}bt=bt.superclass;
}return bu;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(ce,cf){var cg=ce.constructor;

if(this.hasInterface(cg,cf)){return true;
}
try{qx.Interface.assertObject(ce,cf);
return true;
}catch(P){}
try{qx.Interface.assert(cg,cf,false);
return true;
}catch(X){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return I+this.classname+H;
},$$registry:qx.Bootstrap.$$registry,__bW:null,__bX:null,__bY:function(){},__ca:function(){},__cb:function(name,bC,bD,bE,bF,bG,bH){var bK;

if(!bD&&true){bK=bE||{};
qx.Bootstrap.setDisplayNames(bK,name);
}else{var bK={};

if(bD){if(!bF){bF=this.__ck();
}
if(this.__cm(bD,bH)){bK=this.__cn(bF,name,bC);
}else{bK=bF;
}if(bC===D){bK.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bF,name,E);
}if(bE){qx.Bootstrap.setDisplayNames(bE,name);
var bL;

for(var i=0,a=qx.Bootstrap.getKeys(bE),l=a.length;i<l;i++){bL=a[i];
var bI=bE[bL];
{bK[bL]=bI;
};
}}}var bJ=qx.Bootstrap.createNamespace(name,bK);
bK.name=bK.classname=name;
bK.basename=bJ;
bK.$$type=A;

if(bC){bK.$$classtype=bC;
}if(!bK.hasOwnProperty(F)){bK.toString=this.genericToString;
}
if(bD){qx.Bootstrap.extendClass(bK,bF,bD,name,bJ);
if(bG){{};
bK.$$destructor=bG;
qx.Bootstrap.setDisplayName(bG,name,z);
}}this.$$registry[name]=bK;
return bK;
},__cc:function(p,q,r){var s,s;
{};

if(p.$$events){for(var s in q){p.$$events[s]=q[s];
}}else{p.$$events=q;
}},__cd:function(bY,ca,cb){var cc;

if(cb===undefined){cb=false;
}var cd=bY.prototype;

for(var name in ca){cc=ca[name];
{};
cc.name=name;
if(!cc.refine){if(bY.$$properties===undefined){bY.$$properties={};
}bY.$$properties[name]=cc;
}if(cc.init!==undefined){bY.prototype[G+name]=cc.init;
}if(cc.event!==undefined){var event={};
event[cc.event]=v;
this.__cc(bY,event,cb);
}if(cc.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!cd.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bY);
}}
if(!cc.refine){qx.core.Property.attachMethods(bY,name,cc);
}}},__ce:null,__cf:function(f,g,h,j,k){var m=f.prototype;
var o,n;
qx.Bootstrap.setDisplayNames(g,f.classname+C);

for(var i=0,a=qx.Bootstrap.getKeys(g),l=a.length;i<l;i++){o=a[i];
n=g[o];
{};
if(j!==false&&n instanceof Function&&n.$$type==null){if(k==true){n=this.__cg(n,m[o]);
}else{if(m[o]){n.base=m[o];
}n.self=f;
}{};
}m[o]=n;
}},__cg:function(br,bs){if(bs){return function(){var bT=br.base;
br.base=bs;
var bS=br.apply(this,arguments);
br.base=bT;
return bS;
};
}else{return br;
}},__ch:function(bv,bw){{};
var bx=qx.Interface.flatten([bw]);

if(bv.$$implements){bv.$$implements.push(bw);
bv.$$flatImplements.push.apply(bv.$$flatImplements,bx);
}else{bv.$$implements=[bw];
bv.$$flatImplements=bx;
}},__ci:function(bg){var name=bg.classname;
var bh=this.__cn(bg,name,bg.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bg),l=a.length;i<l;i++){bi=a[i];
bh[bi]=bg[bi];
}bh.prototype=bg.prototype;
var bk=bg.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bk),l=a.length;i<l;i++){bi=a[i];
var bl=bk[bi];
if(bl&&bl.self==bg){bl.self=bh;
}}for(var bi in this.$$registry){var bj=this.$$registry[bi];

if(!bj){continue;
}
if(bj.base==bg){bj.base=bh;
}
if(bj.superclass==bg){bj.superclass=bh;
}
if(bj.$$original){if(bj.$$original.base==bg){bj.$$original.base=bh;
}
if(bj.$$original.superclass==bg){bj.$$original.superclass=bh;
}}}qx.Bootstrap.createNamespace(name,bh);
this.$$registry[name]=bh;
return bh;
},__cj:function(bM,bN,bO){{};

if(this.hasMixin(bM,bN)){return;
}var bR=bM.$$original;

if(bN.$$constructor&&!bR){bM=this.__ci(bM);
}var bQ=qx.Mixin.flatten([bN]);
var bP;

for(var i=0,l=bQ.length;i<l;i++){bP=bQ[i];
if(bP.$$events){this.__cc(bM,bP.$$events,bO);
}if(bP.$$properties){this.__cd(bM,bP.$$properties,bO);
}if(bP.$$members){this.__cf(bM,bP.$$members,bO,bO,bO);
}}if(bM.$$includes){bM.$$includes.push(bN);
bM.$$flatIncludes.push.apply(bM.$$flatIncludes,bQ);
}else{bM.$$includes=[bN];
bM.$$flatIncludes=bQ;
}},__ck:function(){function W(){W.base.apply(this,arguments);
}return W;
},__cl:function(){return function(){};
},__cm:function(b,c){{};
if(b&&b.$$includes){var d=b.$$flatIncludes;

for(var i=0,l=d.length;i<l;i++){if(d[i].$$constructor){return true;
}}}if(c){var e=qx.Mixin.flatten(c);

for(var i=0,l=e.length;i<l;i++){if(e[i].$$constructor){return true;
}}}return false;
},__cn:function(Q,name,R){var S;
var T=function(){var bq=T;
{};
var bp=bq.$$original.apply(this,arguments);
if(bq.$$includes){var bo=bq.$$flatIncludes;

for(var i=0,l=bo.length;i<l;i++){if(bo[i].$$constructor){bo[i].$$constructor.apply(this,arguments);
}}}{};
return bp;
};
{};
T.$$original=Q;
Q.wrapper=T;
return T;
}},defer:function(){var Y,ba,bb;
{};
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__en:function(){var t=d;
var x=e;
var w=window.navigator.userAgent;
var z=false;
var v=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){t=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(w)){x=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){x+=q+RegExp.$3;
}}else{v=true;
x=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){t=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(w)){x=RegExp.$1;
var y=RegExp(n).exec(x);

if(y){x=x.slice(0,y.index);
}}else{v=true;
x=m;
}}else if(window.controllers&&window.navigator.product===c){t=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(w)){x=RegExp.$1;
}else{v=true;
x=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(w)){t=k;
x=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(x<8&&/Trident\/([^\);]+)(\)|;)/.test(w)){if(RegExp.$1===g){x=h;
}}this.MSHTML=true;
}else{var u=window.qxFail;

if(u&&typeof u===o){var t=u();

if(t.NAME&&t.FULLVERSION){t=t.NAME;
this[t.toUpperCase()]=true;
x=t.FULLVERSION;
}}else{z=true;
v=true;
x=r;
t=s;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+w+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=z;
this.UNKNOWN_VERSION=v;
this.NAME=t;
this.FULLVERSION=x;
this.VERSION=parseFloat(x);
}},defer:function(A){A.__en();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__kq:{},__kr:{},compilerIsSet:function(){return true;
},define:function(M,N,O){{};

if(!this.__kq[M]){this.__kq[M]={};
}else{}this.__kq[M].allowedValues=N;
this.__kq[M].defaultValue=O;
},get:function(P){var Q=this.__kq[P];
{};

if(Q.value!==undefined){return Q.value;
}return Q.defaultValue;
},__ks:function(){if(window.qxvariants){for(var K in qxvariants){{};

if(!this.__kq[K]){this.__kq[K]={};
}this.__kq[K].value=qxvariants[K];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(C){}this.__kt(this.__kq);
}},__kt:function(){if(qx.core.Setting.get(m)!=true){return;
}var w=document.location.search.slice(1).split(p);

for(var i=0;i<w.length;i++){var x=w[i].split(f);

if(x.length!=3||x[0]!=c){continue;
}var y=x[1];

if(!this.__kq[y]){this.__kq[y]={};
}this.__kq[y].value=decodeURIComponent(x[2]);
}},select:function(z,A){{};

for(var B in A){if(this.isSet(z,B)){return A[B];
}}
if(A[r]!==undefined){return A[r];
}{};
},isSet:function(D,E){var F=D+n+E;

if(this.__kr[F]!==undefined){return this.__kr[F];
}var H=false;
if(E.indexOf(s)<0){H=this.get(D)===E;
}else{var G=E.split(s);

for(var i=0,l=G.length;i<l;i++){if(this.get(D)===G[i]){H=true;
break;
}}}this.__kr[F]=H;
return H;
},__ku:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__kv:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__kw:function(I,J){for(var i=0,l=I.length;i<l;i++){if(I[i]==J){return true;
}}return false;
}},defer:function(L){L.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
L.define(k,[u,t],u);
L.define(o,[u,t],t);
L.define(j,[u,t],u);
L.__ks();
}});
})();
(function(){var l="qx.client",k="on",j="function",i="mousedown",h="qx.bom.Event",g="return;",f="mouseover",d="HTMLEvents";
qx.Class.define(h,{statics:{addNativeListener:qx.core.Variant.select(l,{"mshtml":function(r,s,t){r.attachEvent(k+s,t);
},"default":function(u,v,w){u.addEventListener(v,w,false);
}}),removeNativeListener:qx.core.Variant.select(l,{"mshtml":function(D,E,F){try{D.detachEvent(k+E,F);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(A,B,C){A.removeEventListener(B,C,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(l,{"mshtml":function(e){if(e.type===f){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(l,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==i&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(x){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(m){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(a,b){if(document.createEventObject){var c=document.createEventObject();
return a.fireEvent(k+b,c);
}else{var c=document.createEvent(d);
c.initEvent(b,true,true);
return !a.dispatchEvent(c);
}},supportsEvent:qx.core.Variant.select(l,{"webkit":function(y,z){return y.hasOwnProperty(k+z);
},"default":function(n,o){var p=k+o;
var q=(p in n);

if(!q){q=typeof n[p]==j;

if(!q&&n.setAttribute){n.setAttribute(p,g);
q=typeof n[p]==j;
n.removeAttribute(p);
}}return q;
}})}});
})();
(function(){var q="|bubble",p="|capture",o="|",n="",m="_",k="unload",j="UNKNOWN_",h="c",g="__fi",f="DOM_",c="__fh",e="WIN_",d="capture",b="qx.event.Manager",a="QX_";
qx.Class.define(b,{extend:Object,construct:function(bV,bW){this.__fd=bV;
this.__fe=qx.core.ObjectRegistry.toHashCode(bV);
this.__ff=bW;
if(bV.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bV,k,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bV,k,arguments.callee);
self.dispose();
}));
}this.__fg={};
this.__fh={};
this.__fi={};
this.__fj={};
},statics:{__fk:0,getNextUniqueId:function(){return (this.__fk++)+n;
}},members:{__ff:null,__fg:null,__fi:null,__fl:null,__fh:null,__fj:null,__fd:null,__fe:null,getWindow:function(){return this.__fd;
},getWindowId:function(){return this.__fe;
},getHandler:function(bX){var bY=this.__fh[bX.classname];

if(bY){return bY;
}return this.__fh[bX.classname]=new bX(this);
},getDispatcher:function(bD){var bE=this.__fi[bD.classname];

if(bE){return bE;
}return this.__fi[bD.classname]=new bD(this,this.__ff);
},getListeners:function(F,G,H){var I=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var K=this.__fg[I];

if(!K){return null;
}var L=G+(H?p:q);
var J=K[L];
return J?J.concat():null;
},serializeListeners:function(v){var C=v.$$hash||qx.core.ObjectRegistry.toHashCode(v);
var E=this.__fg[C];
var A=[];

if(E){var y,D,w,z,B;

for(var x in E){y=x.indexOf(o);
D=x.substring(0,y);
w=x.charAt(y+1)==h;
z=E[x];

for(var i=0,l=z.length;i<l;i++){B=z[i];
A.push({self:B.context,handler:B.handler,type:D,capture:w});
}}}return A;
},toggleAttachedEvents:function(X,Y){var be=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var bg=this.__fg[be];

if(bg){var bb,bf,ba,bc;

for(var bd in bg){bb=bd.indexOf(o);
bf=bd.substring(0,bb);
ba=bd.charCodeAt(bb+1)===99;
bc=bg[bd];

if(Y){this.__fm(X,bf,ba);
}else{this.__fn(X,bf,ba);
}}}},hasListener:function(cb,cc,cd){{};
var ce=cb.$$hash||qx.core.ObjectRegistry.toHashCode(cb);
var cg=this.__fg[ce];

if(!cg){return false;
}var ch=cc+(cd?p:q);
var cf=cg[ch];
return cf&&cf.length>0;
},importListeners:function(bF,bG){{};
var bM=bF.$$hash||qx.core.ObjectRegistry.toHashCode(bF);
var bN=this.__fg[bM]={};
var bJ=qx.event.Manager;

for(var bH in bG){var bK=bG[bH];
var bL=bK.type+(bK.capture?p:q);
var bI=bN[bL];

if(!bI){bI=bN[bL]=[];
this.__fm(bF,bK.type,bK.capture);
}bI.push({handler:bK.listener,context:bK.self,unique:bK.unique||(bJ.__fk++)+n});
}},addListener:function(M,N,O,self,P){var T;
{};
var U=M.$$hash||qx.core.ObjectRegistry.toHashCode(M);
var W=this.__fg[U];

if(!W){W=this.__fg[U]={};
}var S=N+(P?p:q);
var R=W[S];

if(!R){R=W[S]=[];
}if(R.length===0){this.__fm(M,N,P);
}var V=(qx.event.Manager.__fk++)+n;
var Q={handler:O,context:self,unique:V};
R.push(Q);
return S+o+V;
},findHandler:function(cm,cn){var cx=false,cq=false,cy=false;
var cw;

if(cm.nodeType===1){cx=true;
cw=f+cm.tagName.toLowerCase()+m+cn;
}else if(cm==this.__fd){cq=true;
cw=e+cn;
}else if(cm.classname){cy=true;
cw=a+cm.classname+m+cn;
}else{cw=j+cm+m+cn;
}var cs=this.__fj;

if(cs[cw]){return cs[cw];
}var cv=this.__ff.getHandlers();
var cr=qx.event.IEventHandler;
var ct,cu,cp,co;

for(var i=0,l=cv.length;i<l;i++){ct=cv[i];
cp=ct.SUPPORTED_TYPES;

if(cp&&!cp[cn]){continue;
}co=ct.TARGET_CHECK;

if(co){if(!cx&&co===cr.TARGET_DOMNODE){continue;
}else if(!cq&&co===cr.TARGET_WINDOW){continue;
}else if(!cy&&co===cr.TARGET_OBJECT){continue;
}}cu=this.getHandler(cv[i]);

if(ct.IGNORE_CAN_HANDLE||cu.canHandleEvent(cm,cn)){cs[cw]=cu;
return cu;
}}return null;
},__fm:function(r,s,t){var u=this.findHandler(r,s);

if(u){u.registerEvent(r,s,t);
return;
}{};
},removeListener:function(bt,bu,bv,self,bw){var bA;
{};
var bB=bt.$$hash||qx.core.ObjectRegistry.toHashCode(bt);
var bC=this.__fg[bB];

if(!bC){return false;
}var bx=bu+(bw?p:q);
var by=bC[bx];

if(!by){return false;
}var bz;

for(var i=0,l=by.length;i<l;i++){bz=by[i];

if(bz.handler===bv&&bz.context===self){qx.lang.Array.removeAt(by,i);

if(by.length==0){this.__fn(bt,bu,bw);
}return true;
}}return false;
},removeListenerById:function(bh,bi){var bo;
{};
var bm=bi.split(o);
var br=bm[0];
var bj=bm[1].charCodeAt(0)==99;
var bq=bm[2];
var bp=bh.$$hash||qx.core.ObjectRegistry.toHashCode(bh);
var bs=this.__fg[bp];

if(!bs){return false;
}var bn=br+(bj?p:q);
var bl=bs[bn];

if(!bl){return false;
}var bk;

for(var i=0,l=bl.length;i<l;i++){bk=bl[i];

if(bk.unique===bq){qx.lang.Array.removeAt(bl,i);

if(bl.length==0){this.__fn(bh,br,bj);
}return true;
}}return false;
},removeAllListeners:function(cz){var cD=cz.$$hash||qx.core.ObjectRegistry.toHashCode(cz);
var cF=this.__fg[cD];

if(!cF){return false;
}var cB,cE,cA;

for(var cC in cF){if(cF[cC].length>0){cB=cC.split(o);
cE=cB[0];
cA=cB[1]===d;
this.__fn(cz,cE,cA);
}}delete this.__fg[cD];
return true;
},deleteAllListeners:function(ca){delete this.__fg[ca];
},__fn:function(ci,cj,ck){var cl=this.findHandler(ci,cj);

if(cl){cl.unregisterEvent(ci,cj,ck);
return;
}{};
},dispatchEvent:function(bO,event){var bT;
{};
var bU=event.getType();

if(!event.getBubbles()&&!this.hasListener(bO,bU)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bO);
}var bS=this.__ff.getDispatchers();
var bR;
var bQ=false;

for(var i=0,l=bS.length;i<l;i++){bR=this.getDispatcher(bS[i]);
if(bR.canDispatchEvent(bO,event,bU)){bR.dispatchEvent(bO,event,bU);
bQ=true;
break;
}}
if(!bQ){{};
return true;
}var bP=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bP;
},dispose:function(){this.__ff.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,c);
qx.util.DisposeUtil.disposeMap(this,g);
this.__fg=this.__fd=this.__fl=null;
this.__ff=this.__fj=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(j){return j.nodeType===
this.DOCUMENT?j:
j.ownerDocument||j.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(t){if(t.nodeType==null){return t;
}if(t.nodeType!==this.DOCUMENT){t=t.ownerDocument;
}return t.parentWindow;
},"default":function(k){if(k.nodeType==null){return k;
}if(k.nodeType!==this.DOCUMENT){k=k.ownerDocument;
}return k.defaultView;
}}),getDocumentElement:function(s){return this.getDocument(s).documentElement;
},getBodyElement:function(e){return this.getDocument(e).body;
},isNode:function(l){return !!(l&&l.nodeType!=null);
},isElement:function(m){return !!(m&&m.nodeType===this.ELEMENT);
},isDocument:function(n){return !!(n&&n.nodeType===this.DOCUMENT);
},isText:function(p){return !!(p&&p.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},isNodeName:function(f,g){if(!g||!f||!f.nodeName){return false;
}return g.toLowerCase()==qx.dom.Node.getName(f);
},getName:function(h){if(!h||!h.nodeName){return null;
}return h.nodeName.toLowerCase();
},getText:function(q){if(!q||!q.nodeType){return null;
}
switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;

for(i=0;i<length;i++){a[i]=this.getText(r[i]);
}return a.join(b);
case 2:return q.nodeValue;
break;
case 3:return q.nodeValue;
break;
}return null;
}}});
})();
(function(){var Y="mshtml",X="qx.client",W="[object Array]",V="qx.lang.Array",U="qx",T="number",S="string";
qx.Class.define(V,{statics:{toArray:function(d,e){return this.cast(d,Array,e);
},cast:function(x,y,z){if(x.constructor===y){return x;
}
if(qx.Class.hasInterface(x,qx.data.IListData)){var x=x.toArray();
}var A=new y;
if(qx.core.Variant.isSet(X,Y)){if(x.item){for(var i=z||0,l=x.length;i<l;i++){A.push(x[i]);
}return A;
}}if(Object.prototype.toString.call(x)===W&&z==null){A.push.apply(A,x);
}else{A.push.apply(A,Array.prototype.slice.call(x,z||0));
}return A;
},fromArguments:function(b,c){return Array.prototype.slice.call(b,c||0);
},fromCollection:function(m){if(qx.core.Variant.isSet(X,Y)){if(m.item){var n=[];

for(var i=0,l=m.length;i<l;i++){n[i]=m[i];
}return n;
}}return Array.prototype.slice.call(m,0);
},fromShortHand:function(u){var w=u.length;
var v=qx.lang.Array.clone(u);
switch(w){case 1:v[1]=v[2]=v[3]=v[0];
break;
case 2:v[2]=v[0];
case 3:v[3]=v[1];
}return v;
},clone:function(E){return E.concat();
},insertAt:function(j,k,i){j.splice(i,0,k);
return j;
},insertBefore:function(f,g,h){var i=f.indexOf(h);

if(i==-1){f.push(g);
}else{f.splice(i,0,g);
}return f;
},insertAfter:function(bl,bm,bn){var i=bl.indexOf(bn);

if(i==-1||i==(bl.length-1)){bl.push(bm);
}else{bl.splice(i+1,0,bm);
}return bl;
},removeAt:function(bc,i){return bc.splice(i,1)[0];
},removeAll:function(a){a.length=0;
return this;
},append:function(ba,bb){{};
Array.prototype.push.apply(ba,bb);
return ba;
},exclude:function(bd,be){{};

for(var i=0,bg=be.length,bf;i<bg;i++){bf=bd.indexOf(be[i]);

if(bf!=-1){bd.splice(bf,1);
}}return bd;
},remove:function(bj,bk){var i=bj.indexOf(bk);

if(i!=-1){bj.splice(i,1);
return bk;
}},contains:function(bp,bq){return bp.indexOf(bq)!==-1;
},equals:function(bh,bi){var length=bh.length;

if(length!==bi.length){return false;
}
for(var i=0;i<length;i++){if(bh[i]!==bi[i]){return false;
}}return true;
},sum:function(C){var D=0;

for(var i=0,l=C.length;i<l;i++){D+=C[i];
}return D;
},max:function(r){{};
var i,t=r.length,s=r[0];

for(i=1;i<t;i++){if(r[i]>s){s=r[i];
}}return s===undefined?null:s;
},min:function(o){{};
var i,q=o.length,p=o[0];

for(i=1;i<q;i++){if(o[i]<p){p=o[i];
}}return p===undefined?null:p;
},unique:function(F){var P=[],H={},K={},M={};
var L,G=0;
var Q=U+qx.lang.Date.now();
var I=false,O=false,R=false;
for(var i=0,N=F.length;i<N;i++){L=F[i];
if(L===null){if(!I){I=true;
P.push(L);
}}else if(L===undefined){}else if(L===false){if(!O){O=true;
P.push(L);
}}else if(L===true){if(!R){R=true;
P.push(L);
}}else if(typeof L===S){if(!H[L]){H[L]=1;
P.push(L);
}}else if(typeof L===T){if(!K[L]){K[L]=1;
P.push(L);
}}else{J=L[Q];

if(J==null){J=L[Q]=G++;
}
if(!M[J]){M[J]=L;
P.push(L);
}}}for(var J in M){try{delete M[J][Q];
}catch(bo){try{M[J][Q]=null;
}catch(B){throw new Error("Cannot clean-up map entry doneObjects["+J+"]["+Q+"]");
}}}return P;
}}});
})();
(function(){var k="()",j=".",i=".prototype.",h='anonymous()',g="qx.lang.Function",f=".constructor()";
qx.Class.define(g,{statics:{getCaller:function(n){return n.caller?n.caller.callee:n.callee.caller;
},getName:function(C){if(C.displayName){return C.displayName;
}
if(C.$$original||C.wrapper||C.classname){return C.classname+f;
}
if(C.$$mixin){for(var E in C.$$mixin.$$members){if(C.$$mixin.$$members[E]==C){return C.$$mixin.name+i+E+k;
}}for(var E in C.$$mixin){if(C.$$mixin[E]==C){return C.$$mixin.name+j+E+k;
}}}
if(C.self){var F=C.self.constructor;

if(F){for(var E in F.prototype){if(F.prototype[E]==C){return F.classname+i+E+k;
}}for(var E in F){if(F[E]==C){return F.classname+j+E+k;
}}}}var D=C.toString().match(/function\s*(\w*)\s*\(.*/);

if(D&&D.length>=1&&D[1]){return D[1]+k;
}return h;
},globalEval:function(B){if(window.execScript){return window.execScript(B);
}else{return eval.call(window,B);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(v,w){{};
if(!w){return v;
}if(!(w.self||w.args||w.delay!=null||w.periodical!=null||w.attempt)){return v;
}return function(event){{};
var q=qx.lang.Array.fromArguments(arguments);
if(w.args){q=w.args.concat(q);
}
if(w.delay||w.periodical){var p=qx.event.GlobalError.observeMethod(function(){return v.apply(w.self||this,q);
});

if(w.delay){return window.setTimeout(p,w.delay);
}
if(w.periodical){return window.setInterval(p,w.periodical);
}}else if(w.attempt){var r=false;

try{r=v.apply(w.self||this,q);
}catch(o){}return r;
}else{return v.apply(w.self||this,q);
}};
},bind:function(d,self,e){return this.create(d,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(l,m){return this.create(l,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(s,self,t){if(arguments.length<3){return function(event){return s.call(self||this,event||window.event);
};
}else{var u=qx.lang.Array.fromArguments(arguments,2);
return function(event){var x=[event||window.event];
x.push.apply(x,u);
s.apply(self||this,x);
};
}},attempt:function(G,self,H){return this.create(G,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(a,b,self,c){return this.create(a,{delay:b,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(y,z,self,A){return this.create(y,{periodical:z,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var e="qx.event.Registration";
qx.Class.define(e,{statics:{__eR:{},getManager:function(z){if(z==null){{};
z=window;
}else if(z.nodeType){z=qx.dom.Node.getWindow(z);
}else if(!qx.dom.Node.isWindow(z)){z=window;
}var B=z.$$hash||qx.core.ObjectRegistry.toHashCode(z);
var A=this.__eR[B];

if(!A){A=new qx.event.Manager(z,this);
this.__eR[B]=A;
}return A;
},removeManager:function(C){var D=C.getWindowId();
delete this.__eR[D];
},addListener:function(p,q,r,self,s){return this.getManager(p).addListener(p,q,r,self,s);
},removeListener:function(f,g,h,self,i){return this.getManager(f).removeListener(f,g,h,self,i);
},removeListenerById:function(c,d){return this.getManager(c).removeListenerById(c,d);
},removeAllListeners:function(L){return this.getManager(L).removeAllListeners(L);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(I,J,K){return this.getManager(I).hasListener(I,J,K);
},serializeListeners:function(x){return this.getManager(x).serializeListeners(x);
},createEvent:function(E,F,G){{};
if(F==null){F=qx.event.type.Event;
}var H=qx.event.Pool.getInstance().getObject(F);
G?H.init.apply(H,G):H.init();
if(E){H.setType(E);
}return H;
},dispatchEvent:function(S,event){return this.getManager(S).dispatchEvent(S,event);
},fireEvent:function(j,k,l,m){var n;
{};
var o=this.createEvent(k,l||null,m);
return this.getManager(j).dispatchEvent(j,o);
},fireNonBubblingEvent:function(M,N,O,P){{};
var Q=this.getManager(M);

if(!Q.hasListener(M,N,false)){return true;
}var R=this.createEvent(N,O||null,P);
return Q.dispatchEvent(M,R);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__eS:[],addHandler:function(y){{};
this.__eS.push(y);
this.__eS.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__eS;
},__eT:[],addDispatcher:function(v,w){{};
this.__eT.push(v);
this.__eT.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__eT;
}}});
})();
(function(){var f="$$hash",e="",d="qx.core.ObjectRegistry";
qx.Class.define(d,{statics:{inShutDown:false,__hH:{},__hI:0,__hJ:[],register:function(n){var q=this.__hH;

if(!q){return;
}var p=n.$$hash;

if(p==null){var o=this.__hJ;

if(o.length>0){p=o.pop();
}else{p=(this.__hI++)+e;
}n.$$hash=p;
}{};
q[p]=n;
},unregister:function(v){var w=v.$$hash;

if(w==null){return;
}var x=this.__hH;

if(x&&x[w]){delete x[w];
this.__hJ.push(w);
}try{delete v.$$hash;
}catch(y){if(v.removeAttribute){v.removeAttribute(f);
}}},toHashCode:function(s){{};
var u=s.$$hash;

if(u!=null){return u;
}var t=this.__hJ;

if(t.length>0){u=t.pop();
}else{u=(this.__hI++)+e;
}return s.$$hash=u;
},clearHashCode:function(z){{};
var A=z.$$hash;

if(A!=null){this.__hJ.push(A);
try{delete z.$$hash;
}catch(g){if(z.removeAttribute){z.removeAttribute(f);
}}}},fromHashCode:function(c){return this.__hH[c]||null;
},shutdown:function(){this.inShutDown=true;
var j=this.__hH;
var m=[];

for(var k in j){m.push(k);
}m.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var h,i=0,l=m.length;

while(true){try{for(;i<l;i++){k=m[i];
h=j[k];

if(h&&h.dispose){h.dispose();
}}}catch(r){qx.Bootstrap.error(this,"Could not dispose object "+h.toString()+": "+r);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__hH;
},getRegistry:function(){return this.__hH;
}}});
})();
(function(){var b="qx.data.MBinding";
qx.Mixin.define(b,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(a){qx.data.SingleValueBinding.removeBindingFromObject(this,a);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var j=":",h="qx.client",g="anonymous",f="...",e="qx.dev.StackTrace",d="",c="\n",b="/source/class/",a=".";
qx.Class.define(e,{statics:{getStackTrace:qx.core.Variant.select(h,{"gecko":function(){try{throw new Error();
}catch(k){var Q=this.getStackTraceFromError(k);
qx.lang.Array.removeAt(Q,0);
var O=this.getStackTraceFromCaller(arguments);
var M=O.length>Q.length?O:Q;

for(var i=0;i<Math.min(O.length,Q.length);i++){var N=O[i];

if(N.indexOf(g)>=0){continue;
}var U=N.split(j);

if(U.length!=2){continue;
}var S=U[0];
var L=U[1];
var K=Q[i];
var V=K.split(j);
var R=V[0];
var J=V[1];

if(qx.Class.getByName(R)){var P=R;
}else{P=S;
}var T=P+j;

if(L){T+=L+j;
}T+=J;
M[i]=T;
}return M;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var bb;

try{bb.bar();
}catch(n){var bc=this.getStackTraceFromError(n);
qx.lang.Array.removeAt(bc,0);
return bc;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(h,{"opera":function(I){return [];
},"default":function(v){var A=[];
var z=qx.lang.Function.getCaller(v);
var w={};

while(z){var x=qx.lang.Function.getName(z);
A.push(x);

try{z=z.caller;
}catch(m){break;
}
if(!z){break;
}var y=qx.core.ObjectRegistry.toHashCode(z);

if(w[y]){A.push(f);
break;
}w[y]=z;
}return A;
}}),getStackTraceFromError:qx.core.Variant.select(h,{"gecko":function(B){if(!B.stack){return [];
}var H=/@(.+):(\d+)$/gm;
var C;
var D=[];

while((C=H.exec(B.stack))!=null){var E=C[1];
var G=C[2];
var F=this.__kk(E);
D.push(F+j+G);
}return D;
},"webkit":function(l){if(l.sourceURL&&l.line){return [this.__kk(l.sourceURL)+j+l.line];
}else{return [];
}},"opera":function(o){if(o.message.indexOf("Backtrace:")<0){return [];
}var q=[];
var r=qx.lang.String.trim(o.message.split("Backtrace:")[1]);
var s=r.split(c);

for(var i=0;i<s.length;i++){var p=s[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(p&&p.length>=2){var u=p[1];
var t=this.__kk(p[2]);
q.push(t+j+u);
}}return q;
},"default":function(){return [];
}}),__kk:function(W){var ba=b;
var X=W.indexOf(ba);
var Y=(X==-1)?W:W.substring(X+ba.length).replace(/\//g,a).replace(/\.js$/,d);
return Y;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__hA:0,__hB:0,__hC:false,__hD:0,__hE:null,__hF:null,setMaxEntries:function(i){this.__hF=i;
this.clear();
},getMaxEntries:function(){return this.__hF;
},addEntry:function(c){this.__hE[this.__hA]=c;
this.__hA=this.__hG(this.__hA,1);
var d=this.getMaxEntries();

if(this.__hB<d){this.__hB++;
}if(this.__hC&&(this.__hD<d)){this.__hD++;
}},mark:function(){this.__hC=true;
this.__hD=0;
},clearMark:function(){this.__hC=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(j,k){if(j>this.__hB){j=this.__hB;
}if(k&&this.__hC&&(j>this.__hD)){j=this.__hD;
}
if(j>0){var m=this.__hG(this.__hA,-1);
var l=this.__hG(m,-j+1);
var n;

if(l<=m){n=this.__hE.slice(l,m+1);
}else{n=this.__hE.slice(l,this.__hB).concat(this.__hE.slice(0,m+1));
}}else{n=[];
}return n;
},clear:function(){this.__hE=new Array(this.getMaxEntries());
this.__hB=0;
this.__hD=0;
this.__hA=0;
},__hG:function(e,f){var g=this.getMaxEntries();
var h=(e+f)%g;
if(h<0){h+=g;
}return h;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(e){this.setMaxMessages(e||50);
},members:{setMaxMessages:function(f){this.setMaxEntries(f);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(b,c){return this.getEntries(b,c);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var bi="node",bh="error",bg="...(+",bf="array",be=")",bd="info",bc="instance",bb="string",ba="null",Y="class",bD="number",bC="stringify",bB="]",bA="unknown",bz="function",by="boolean",bx="debug",bw="map",bv="undefined",bu="qx.log.Logger",bp=")}",bq="#",bn="warn",bo="document",bl="{...(",bm="[",bj="text[",bk="[...(",br="\n",bs=")]",bt="object";
qx.Class.define(bu,{statics:{__eU:bx,setLevel:function(X){this.__eU=X;
},getLevel:function(){return this.__eU;
},setTreshold:function(f){this.__eX.setMaxMessages(f);
},getTreshold:function(){return this.__eX.getMaxMessages();
},__eV:{},__eW:0,register:function(u){if(u.$$id){return;
}var v=this.__eW++;
this.__eV[v]=u;
u.$$id=v;
var w=this.__eX.getAllLogEvents();

for(var i=0,l=w.length;i<l;i++){u.process(w[i]);
}},unregister:function(V){var W=V.$$id;

if(W==null){return;
}delete this.__eV[W];
delete V.$$id;
},debug:function(bO,bP){qx.log.Logger.__fa(bx,arguments);
},info:function(T,U){qx.log.Logger.__fa(bd,arguments);
},warn:function(d,e){qx.log.Logger.__fa(bn,arguments);
},error:function(bH,bI){qx.log.Logger.__fa(bh,arguments);
},trace:function(I){qx.log.Logger.__fa(bd,[I,qx.dev.StackTrace.getStackTrace().join(br)]);
},deprecatedMethodWarning:function(a,b){var c;
{};
},deprecatedClassWarning:function(bE,bF){var bG;
{};
},deprecatedEventWarning:function(r,event,s){var t;
{};
},deprecatedMixinWarning:function(o,p){var q;
{};
},deprecatedConstantWarning:function(j,k,m){var self,n;
{};
},deprecateMethodOverriding:function(bJ,bK,bL,bM){var bN;
{};
},clear:function(){this.__eX.clearHistory();
},__eX:new qx.log.appender.RingBuffer(50),__eY:{debug:0,info:1,warn:2,error:3},__fa:function(J,K){var P=this.__eY;

if(P[J]<P[this.__eU]){return;
}var M=K.length<2?null:K[0];
var O=M?1:0;
var L=[];

for(var i=O,l=K.length;i<l;i++){L.push(this.__fc(K[i],true));
}var Q=new Date;
var R={time:Q,offset:Q-qx.Bootstrap.LOADSTART,level:J,items:L,win:window};
if(M){if(M instanceof qx.core.Object){R.object=M.$$hash;
}else if(M.$$type){R.clazz=M;
}}this.__eX.process(R);
var S=this.__eV;

for(var N in S){S[N].process(R);
}},__fb:function(g){if(g===undefined){return bv;
}else if(g===null){return ba;
}
if(g.$$type){return Y;
}var h=typeof g;

if(h===bz||h==bb||h===bD||h===by){return h;
}else if(h===bt){if(g.nodeType){return bi;
}else if(g.classname){return bc;
}else if(g instanceof Array){return bf;
}else if(g instanceof Error){return bh;
}else{return bw;
}}
if(g.toString){return bC;
}return bA;
},__fc:function(x,y){var F=this.__fb(x);
var B=bA;
var A=[];

switch(F){case ba:case bv:B=F;
break;
case bb:case bD:case by:B=x;
break;
case bi:if(x.nodeType===9){B=bo;
}else if(x.nodeType===3){B=bj+x.nodeValue+bB;
}else if(x.nodeType===1){B=x.nodeName.toLowerCase();

if(x.id){B+=bq+x.id;
}}else{B=bi;
}break;
case bz:B=qx.lang.Function.getName(x)||F;
break;
case bc:B=x.basename+bm+x.$$hash+bB;
break;
case Y:case bC:B=x.toString();
break;
case bh:A=qx.dev.StackTrace.getStackTraceFromError(x);
B=x.toString();
break;
case bf:if(y){B=[];

for(var i=0,l=x.length;i<l;i++){if(B.length>20){B.push(bg+(l-i)+be);
break;
}B.push(this.__fc(x[i],false));
}}else{B=bk+x.length+bs;
}break;
case bw:if(y){var z;
var E=[];

for(var D in x){E.push(D);
}E.sort();
B=[];

for(var i=0,l=E.length;i<l;i++){if(B.length>20){B.push(bg+(l-i)+be);
break;
}D=E[i];
z=this.__fc(x[D],false);
z.key=D;
B.push(z);
}}else{var C=0;

for(var D in x){C++;
}B=bl+C+bp;
}break;
}return {type:F,text:B,trace:A};
}},defer:function(G){var H=qx.Bootstrap.$$logs;

for(var i=0;i<H.length;i++){G.__fa(H[i][0],H[i][1]);
}qx.Bootstrap.debug=G.debug;
qx.Bootstrap.info=G.info;
qx.Bootstrap.warn=G.warn;
qx.Bootstrap.error=G.error;
qx.Bootstrap.trace=G.trace;
}});
})();
(function(){var o="set",n="get",m="reset",k="MSIE 6.0",j="qx.core.Object",h="]",g="rv:1.8.1",f="[",d="$$user_",c="Object";
qx.Class.define(j,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:c},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+f+this.$$hash+h;
},base:function(L,M){{};

if(arguments.length===1){return L.callee.base.call(this);
}else{return L.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(T){return T.callee.self;
},clone:function(){var q=this.constructor;
var p=new q;
var s=qx.Class.getProperties(q);
var r=qx.core.Property.$$store.user;
var t=qx.core.Property.$$method.set;
var name;
for(var i=0,l=s.length;i<l;i++){name=s[i];

if(this.hasOwnProperty(r[name])){p[t[name]](this[r[name]]);
}}return p;
},set:function(bp,bq){var bs=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(bp)){if(!this[bs[bp]]){if(this[o+qx.Bootstrap.firstUp(bp)]!=undefined){this[o+qx.Bootstrap.firstUp(bp)](bq);
return this;
}{};
}return this[bs[bp]](bq);
}else{for(var br in bp){if(!this[bs[br]]){if(this[o+qx.Bootstrap.firstUp(br)]!=undefined){this[o+qx.Bootstrap.firstUp(br)](bp[br]);
continue;
}{};
}this[bs[br]](bp[br]);
}return this;
}},get:function(R){var S=qx.core.Property.$$method.get;

if(!this[S[R]]){if(this[n+qx.Bootstrap.firstUp(R)]!=undefined){return this[n+qx.Bootstrap.firstUp(R)]();
}{};
}return this[S[R]]();
},reset:function(P){var Q=qx.core.Property.$$method.reset;

if(!this[Q[P]]){if(this[m+qx.Bootstrap.firstUp(P)]!=undefined){this[m+qx.Bootstrap.firstUp(P)]();
return;
}{};
}this[Q[P]]();
},__kM:qx.event.Registration,addListener:function(bv,bw,self,bx){if(!this.$$disposed){return this.__kM.addListener(this,bv,bw,self,bx);
}return null;
},addListenerOnce:function(bC,bD,self,bE){var bF=function(e){bD.call(self||this,e);
this.removeListener(bC,bF,this,bE);
};
return this.addListener(bC,bF,this,bE);
},removeListener:function(z,A,self,B){if(!this.$$disposed){return this.__kM.removeListener(this,z,A,self,B);
}return false;
},removeListenerById:function(y){if(!this.$$disposed){return this.__kM.removeListenerById(this,y);
}return false;
},hasListener:function(bh,bi){return this.__kM.hasListener(this,bh,bi);
},dispatchEvent:function(O){if(!this.$$disposed){return this.__kM.dispatchEvent(this,O);
}return true;
},fireEvent:function(v,w,x){if(!this.$$disposed){return this.__kM.fireEvent(this,v,w,x);
}return true;
},fireNonBubblingEvent:function(bk,bl,bm){if(!this.$$disposed){return this.__kM.fireNonBubblingEvent(this,bk,bl,bm);
}return true;
},fireDataEvent:function(by,bz,bA,bB){if(!this.$$disposed){if(bA===undefined){bA=null;
}return this.__kM.fireNonBubblingEvent(this,by,qx.event.type.Data,[bz,bA,!!bB]);
}return true;
},__kN:null,setUserData:function(bn,bo){if(!this.__kN){this.__kN={};
}this.__kN[bn]=bo;
},getUserData:function(bt){if(!this.__kN){return null;
}var bu=this.__kN[bt];
return bu===undefined?null:bu;
},__kO:qx.log.Logger,debug:function(N){this.__kO.debug(this,N);
},info:function(C){this.__kO.info(this,C);
},warn:function(bg){this.__kO.warn(this,bg);
},error:function(b){this.__kO.error(this,b);
},trace:function(){this.__kO.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var be,bc,bb,bf;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bd=this.constructor;
var ba;

while(bd.superclass){if(bd.$$destructor){bd.$$destructor.call(this);
}if(bd.$$includes){ba=bd.$$flatIncludes;

for(var i=0,l=ba.length;i<l;i++){if(ba[i].$$destructor){ba[i].$$destructor.call(this);
}}}bd=bd.superclass;
}if(this.__kP){this.__kP();
}{};
},__kP:null,__kQ:function(){var a=qx.Class.getProperties(this.constructor);

for(var i=0,l=a.length;i<l;i++){delete this[d+a[i]];
}},_disposeObjects:function(bj){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bG){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(u){qx.util.DisposeUtil.disposeArray(this,u);
},_disposeMap:function(Y){qx.util.DisposeUtil.disposeMap(this,Y);
}},settings:{"qx.disposerDebugLevel":0},defer:function(U,V){{};
var X=navigator.userAgent.indexOf(k)!=-1;
var W=navigator.userAgent.indexOf(g)!=-1;
if(X||W){V.__kP=V.__kQ;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__kN=null;
var F=this.constructor;
var J;
var K=qx.core.Property.$$store;
var H=K.user;
var I=K.theme;
var D=K.inherit;
var G=K.useinit;
var E=K.init;

while(F){J=F.$$properties;

if(J){for(var name in J){if(J[name].dereference){this[H[name]]=this[I[name]]=this[D[name]]=this[G[name]]=this[E[name]]=undefined;
}}}F=F.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var g="qx.globalErrorHandling",f="on",d="qx.event.GlobalError";
qx.Bootstrap.define(d,{statics:{setErrorHandler:function(l,m){this.__jS=l||null;
this.__jT=m||window;

if(qx.core.Setting.get(g)===f){if(l&&window.onerror){var n=qx.Bootstrap.bind(this.__jV,this);

if(this.__jU==null){this.__jU=window.onerror;
}var self=this;
window.onerror=function(e){self.__jU(e);
n(e);
};
}
if(l&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__jV,this);
}if(this.__jS==null){if(this.__jU!=null){window.onerror=this.__jU;
this.__jU=null;
}else{window.onerror=null;
}}}},__jV:function(a,b,c){if(this.__jS){this.handleError(new qx.core.WindowError(a,b,c));
return true;
}},observeMethod:function(j){if(qx.core.Setting.get(g)===f){var self=this;
return function(){if(!self.__jS){return j.apply(this,arguments);
}
try{return j.apply(this,arguments);
}catch(h){self.handleError(new qx.core.GlobalError(h,arguments));
}};
}else{return j;
}},handleError:function(i){if(this.__jS){this.__jS.call(this.__jT,i);
}}},defer:function(k){qx.core.Setting.define(g,f);
k.setErrorHandler(null,null);
}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="qx.application",d="gecko|opera|webkit",c="left",a="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._window=n.getWindow();
this.__ht=false;
this.__hu=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var A=qx.event.handler.Application.$$instance;

if(A){A.__hx();
}}},members:{canHandleEvent:function(s,t){},registerEvent:function(o,p,q){},unregisterEvent:function(u,v,w){},__hv:null,__ht:null,__hu:null,__hw:null,__hx:function(){if(!this.__hv&&this.__ht&&qx.$$loader.scriptLoaded){try{var z=qx.core.Setting.get(f);

if(!qx.Class.getByName(z)){return;
}}catch(e){}if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__hv=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__hv=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__hv;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__ht=true;
this.__hx();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,d)){qx.bom.Event.addNativeListener(this._window,a,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var y=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(r){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__ht=true;
this.__hx();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__hw){this.__hw=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var d="qx.event.handler.Window";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(l){qx.core.Object.call(this);
this._manager=l;
this._window=l.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(t,u){},registerEvent:function(f,g,h){},unregisterEvent:function(a,b,c){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var j=qx.event.handler.Window.SUPPORTED_TYPES;

for(var i in j){qx.bom.Event.addNativeListener(this._window,i,this._onNativeWrapper);
}},_stopWindowObserver:function(){var s=qx.event.handler.Window.SUPPORTED_TYPES;

for(var r in s){qx.bom.Event.removeNativeListener(this._window,r,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var n=this._window;

try{var q=n.document;
}catch(e){return ;
}var o=q.documentElement;
var m=e.target||e.srcElement;

if(m==null||m===n||m===q||m===o){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,n]);
qx.event.Registration.dispatchEvent(n,event);
var p=event.getReturnValue();

if(p!=null){e.returnValue=p;
return p;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(j){this._manager=j;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(c,event,d){var g,e;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var h=this._manager.getListeners(c,d,false);

if(h){for(var i=0,l=h.length;i<l;i++){var f=h[i].context||c;
h[i].handler.call(f,event);
}}}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__jP||null;
},ready:function(){if(this.__jP){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var h=qx.core.Setting.get(d);
var i=qx.Class.getByName(h);

if(i){this.__jP=new i;
var g=new Date;
this.__jP.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__jP.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+h);
}},__jQ:function(e){var l=this.__jP;

if(l){e.setReturnValue(l.close());
}},__jR:function(){var j=this.__jP;

if(j){j.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.ready,k);
qx.event.Registration.addListener(window,a,k.__jR,k);
qx.event.Registration.addListener(window,c,k.__jQ,k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(g,h,i,j){var k=qx.locale.Manager;

if(k){return k.trn.apply(k,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(l,m,n){var o=qx.locale.Manager;

if(o){return o.trc.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(e){var f=qx.locale.Manager;

if(f){return f.marktr.apply(f,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__mI:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__mI;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__mI=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__mI=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var j="click",i="icon/32/apps/media-photo-album.png",h="Hello World #1",g="#FFFAD3",f="#DFFAD3",d="Open Popup #2",c="top-right",b="Open Popup #1",a="demobrowser.demo.widget.Popup";
qx.Class.define(a,{extend:qx.application.Standalone,members:{main:function(){qx.application.Standalone.prototype.main.call(this);
var k=new qx.ui.layout.HBox();
k.setSpacing(20);
var l=new qx.ui.container.Composite(k).set({padding:20});
this.getRoot().add(l);
l.add(this._getPopupButton1());
l.add(this._getPopupButton2());
},_getPopupButton1:function(){var o=new qx.ui.form.Button(b);
var p=new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({backgroundColor:g,padding:[2,4],offset:3,offsetBottom:20});
p.add(new qx.ui.basic.Atom(h,i));
o.addListener(j,function(e){p.placeToMouse(e);
p.show();
},this);
return o;
},_getPopupButton2:function(){var m=new qx.ui.form.Button(d);
var n=new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({backgroundColor:f,padding:[2,4],offset:3,position:c});
n.add(new qx.ui.basic.Atom(h,i));
m.addListener(j,function(e){n.placeToMouse(e);
n.show();
},this);
return m;
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(g,h){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!g;
this._cancelable=!!h;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(k){if(k){var l=k;
}else{var l=qx.event.Pool.getInstance().getObject(this.constructor);
}l._type=this._type;
l._target=this._target;
l._currentTarget=this._currentTarget;
l._relatedTarget=this._relatedTarget;
l._originalTarget=this._originalTarget;
l._stopPropagation=this._stopPropagation;
l._bubbles=this._bubbles;
l._preventDefault=this._preventDefault;
l._cancelable=this._cancelable;
return l;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(j){this._type=j;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(c){this._eventPhase=c;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(b){this._target=b;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(f){this._currentTarget=f;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(d){this._relatedTarget=d;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(i){this._originalTarget=i;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(e){this._bubbles=e;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var d="qx.event.type.Data";
qx.Class.define(d,{extend:qx.event.type.Event,members:{__jk:null,__jl:null,init:function(a,b,c){qx.event.type.Event.prototype.init.call(this,false,c);
this.__jk=a;
this.__jl=b;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__jk=this.__jk;
f.__jl=this.__jl;
return f;
},getData:function(){return this.__jk;
},getOldData:function(){return this.__jl;
}},destruct:function(){this.__jk=this.__jl=null;
}});
})();
(function(){var ch="get",cg="",cf="[",ce="last",cd="change",cc="]",cb=".",ca="Number",bY="String",bX="set",cw="deepBinding",cv="item",cu="reset",ct="' (",cs="Boolean",cr=") to the object '",cq="Integer",cp="qx.data.SingleValueBinding",co="No event could be found for the property",cn="Binding from '",cl="PositiveNumber",cm="PositiveInteger",cj="Binding does not exist!",ck=").",ci="Date";
qx.Class.define(cp,{statics:{DEBUG_ON:false,__fP:{},bind:function(f,g,h,k,l){var v=this.__fR(f,g,h,k,l);
var q=g.split(cb);
var n=this.__fY(q);
var u=[];
var r=[];
var s=[];
var o=[];
var p=f;
for(var i=0;i<q.length;i++){if(n[i]!==cg){o.push(cd);
}else{o.push(this.__fT(p,q[i]));
}u[i]=p;
if(i==q.length-1){if(n[i]!==cg){var y=n[i]===ce?p.length-1:n[i];
var m=p.getItem(y);
this.__fX(m,h,k,l,f);
s[i]=this.__ga(p,o[i],h,k,l,n[i]);
}else{if(q[i]!=null&&p[ch+qx.lang.String.firstUp(q[i])]!=null){var m=p[ch+qx.lang.String.firstUp(q[i])]();
this.__fX(m,h,k,l,f);
}s[i]=this.__ga(p,o[i],h,k,l);
}}else{var w={index:i,propertyNames:q,sources:u,listenerIds:s,arrayIndexValues:n,targetObject:h,targetPropertyChain:k,options:l,listeners:r};
var t=qx.lang.Function.bind(this.__fQ,this,w);
r.push(t);
s[i]=p.addListener(o[i],t);
}if(p[ch+qx.lang.String.firstUp(q[i])]==null){p=null;
}else if(n[i]!==cg){p=p[ch+qx.lang.String.firstUp(q[i])](n[i]);
}else{p=p[ch+qx.lang.String.firstUp(q[i])]();
}
if(!p){break;
}}var x={type:cw,listenerIds:s,sources:u,targetListenerIds:v.listenerIds,targets:v.targets};
this.__gb(x,f,g,h,k);
return x;
},__fQ:function(bD){if(bD.options&&bD.options.onUpdate){bD.options.onUpdate(bD.sources[bD.index],bD.targetObject);
}for(var j=bD.index+1;j<bD.propertyNames.length;j++){var bH=bD.sources[j];
bD.sources[j]=null;

if(!bH){continue;
}bH.removeListenerById(bD.listenerIds[j]);
}var bH=bD.sources[bD.index];
for(var j=bD.index+1;j<bD.propertyNames.length;j++){if(bD.arrayIndexValues[j-1]!==cg){bH=bH[ch+qx.lang.String.firstUp(bD.propertyNames[j-1])](bD.arrayIndexValues[j-1]);
}else{bH=bH[ch+qx.lang.String.firstUp(bD.propertyNames[j-1])]();
}bD.sources[j]=bH;
if(!bH){this.__fU(bD.targetObject,bD.targetPropertyChain);
break;
}if(j==bD.propertyNames.length-1){if(qx.Class.implementsInterface(bH,qx.data.IListData)){var bI=bD.arrayIndexValues[j]===ce?bH.length-1:bD.arrayIndexValues[j];
var bF=bH.getItem(bI);
this.__fX(bF,bD.targetObject,bD.targetPropertyChain,bD.options,bD.sources[bD.index]);
bD.listenerIds[j]=this.__ga(bH,cd,bD.targetObject,bD.targetPropertyChain,bD.options,bD.arrayIndexValues[j]);
}else{if(bD.propertyNames[j]!=null&&bH[ch+qx.lang.String.firstUp(bD.propertyNames[j])]!=null){var bF=bH[ch+qx.lang.String.firstUp(bD.propertyNames[j])]();
this.__fX(bF,bD.targetObject,bD.targetPropertyChain,bD.options,bD.sources[bD.index]);
}var bG=this.__fT(bH,bD.propertyNames[j]);
bD.listenerIds[j]=this.__ga(bH,bG,bD.targetObject,bD.targetPropertyChain,bD.options);
}}else{if(bD.listeners[j]==null){var bE=qx.lang.Function.bind(this.__fQ,this,bD);
bD.listeners.push(bE);
}if(qx.Class.implementsInterface(bH,qx.data.IListData)){var bG=cd;
}else{var bG=this.__fT(bH,bD.propertyNames[j]);
}bD.listenerIds[j]=bH.addListener(bG,bD.listeners[j]);
}}},__fR:function(bJ,bK,bL,bM,bN){var bR=bM.split(cb);
var bP=this.__fY(bR);
var bW=[];
var bV=[];
var bT=[];
var bS=[];
var bQ=bL;
for(var i=0;i<bR.length-1;i++){if(bP[i]!==cg){bS.push(cd);
}else{try{bS.push(this.__fT(bQ,bR[i]));
}catch(e){break;
}}bW[i]=bQ;
var bU=function(){for(var j=i+1;j<bR.length-1;j++){var c=bW[j];
bW[j]=null;

if(!c){continue;
}c.removeListenerById(bT[j]);
}var c=bW[i];
for(var j=i+1;j<bR.length-1;j++){var a=qx.lang.String.firstUp(bR[j-1]);
if(bP[j-1]!==cg){var d=bP[j-1]===ce?c.getLength()-1:bP[j-1];
c=c[ch+a](d);
}else{c=c[ch+a]();
}bW[j]=c;
if(bV[j]==null){bV.push(bU);
}if(qx.Class.implementsInterface(c,qx.data.IListData)){var b=cd;
}else{try{var b=qx.data.SingleValueBinding.__fT(c,bR[j]);
}catch(e){break;
}}bT[j]=c.addListener(b,bV[j]);
}qx.data.SingleValueBinding.__fS(bJ,bK,bL,bM,bN);
};
bV.push(bU);
bT[i]=bQ.addListener(bS[i],bU);
var bO=qx.lang.String.firstUp(bR[i]);
if(bQ[ch+bO]==null){bQ=null;
}else if(bP[i]!==cg){bQ=bQ[ch+bO](bP[i]);
}else{bQ=bQ[ch+bO]();
}
if(!bQ){break;
}}return {listenerIds:bT,targets:bW};
},__fS:function(T,U,V,W,X){var bc=this.__fW(T,U);

if(bc!=null){var be=U.substring(U.lastIndexOf(cb)+1,U.length);
if(be.charAt(be.length-1)==cc){var Y=be.substring(be.lastIndexOf(cf)+1,be.length-1);
var bb=be.substring(0,be.lastIndexOf(cf));
var bd=bc[ch+qx.lang.String.firstUp(bb)]();

if(Y==ce){Y=bd.length-1;
}
if(bd!=null){var ba=bd.getItem(Y);
}}else{var ba=bc[ch+qx.lang.String.firstUp(be)]();
}}ba=qx.data.SingleValueBinding.__gc(ba,V,W,X);
this.__fV(V,W,ba);
},__fT:function(H,I){var J=this.__gd(H,I);
if(J==null){if(qx.Class.supportsEvent(H.constructor,I)){J=I;
}else if(qx.Class.supportsEvent(H.constructor,cd+qx.lang.String.firstUp(I))){J=cd+qx.lang.String.firstUp(I);
}else{throw new qx.core.AssertionError(co,I);
}}return J;
},__fU:function(cU,cV){var cW=this.__fW(cU,cV);

if(cW!=null){var cX=cV.substring(cV.lastIndexOf(cb)+1,cV.length);
if(cX.charAt(cX.length-1)==cc){this.__fV(cU,cV,null);
return;
}if(cW[cu+qx.lang.String.firstUp(cX)]!=undefined){cW[cu+qx.lang.String.firstUp(cX)]();
}else{cW[bX+qx.lang.String.firstUp(cX)](null);
}}},__fV:function(cG,cH,cI){var cM=this.__fW(cG,cH);

if(cM!=null){var cN=cH.substring(cH.lastIndexOf(cb)+1,cH.length);
if(cN.charAt(cN.length-1)==cc){var cJ=cN.substring(cN.lastIndexOf(cf)+1,cN.length-1);
var cL=cN.substring(0,cN.lastIndexOf(cf));
var cK=cM[ch+qx.lang.String.firstUp(cL)]();

if(cJ==ce){cJ=cK.length-1;
}
if(cK!=null){cK.setItem(cJ,cI);
}}else{cM[bX+qx.lang.String.firstUp(cN)](cI);
}}},__fW:function(cY,da){var dd=da.split(cb);
var de=cY;
for(var i=0;i<dd.length-1;i++){try{var dc=dd[i];
if(dc.indexOf(cc)==dc.length-1){var db=dc.substring(dc.indexOf(cf)+1,dc.length-1);
dc=dc.substring(0,dc.indexOf(cf));
}de=de[ch+qx.lang.String.firstUp(dc)]();

if(db!=null){if(db==ce){db=de.length-1;
}de=de.getItem(db);
db=null;
}}catch(bh){return null;
}}return de;
},__fX:function(cB,cC,cD,cE,cF){cB=this.__gc(cB,cC,cD,cE);
if(cB==null){this.__fU(cC,cD);
}if(cB!=undefined){try{this.__fV(cC,cD,cB);
if(cE&&cE.onUpdate){cE.onUpdate(cF,cC,cB);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cE&&cE.onSetFail){cE.onSetFail(e);
}else{this.warn("Failed so set value "+cB+" on "+cC+". Error message: "+e);
}}}},__fY:function(E){var F=[];
for(var i=0;i<E.length;i++){var name=E[i];
if(qx.lang.String.endsWith(name,cc)){var G=name.substring(name.indexOf(cf)+1,name.indexOf(cc));
if(name.indexOf(cc)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(G!==ce){if(G==cg||isNaN(parseInt(G))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cf)!=0){E[i]=name.substring(0,name.indexOf(cf));
F[i]=cg;
F[i+1]=G;
E.splice(i+1,0,cv);
i++;
}else{F[i]=G;
E.splice(i,1,cv);
}}else{F[i]=cg;
}}return F;
},__ga:function(bi,bj,bk,bl,bm,bn){var bo;
{};
var bq=function(z,e){if(z!==cg){if(z===ce){z=bi.length-1;
}var C=bi.getItem(z);
if(C==undefined){qx.data.SingleValueBinding.__fU(bk,bl);
}var A=e.getData().start;
var B=e.getData().end;

if(z<A||z>B){return;
}}else{var C=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bi+" by "+bj+" to "+bk+" ("+bl+")");
qx.log.Logger.debug("Data before conversion: "+C);
}C=qx.data.SingleValueBinding.__gc(C,bk,bl,bm);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+C);
}try{if(C!=undefined){qx.data.SingleValueBinding.__fV(bk,bl,C);
}else{qx.data.SingleValueBinding.__fU(bk,bl);
}if(bm&&bm.onUpdate){bm.onUpdate(bi,bk,C);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bm&&bm.onSetFail){bm.onSetFail(e);
}else{this.warn("Failed so set value "+C+" on "+bk+". Error message: "+e);
}}};
if(!bn){bn=cg;
}bq=qx.lang.Function.bind(bq,bi,bn);
var bp=bi.addListener(bj,bq);
return bp;
},__gb:function(bu,bv,bw,bx,by){if(this.__fP[bv.toHashCode()]===undefined){this.__fP[bv.toHashCode()]=[];
}this.__fP[bv.toHashCode()].push([bu,bv,bw,bx,by]);
},__gc:function(K,L,M,N){if(N&&N.converter){var P;

if(L.getModel){P=L.getModel();
}return N.converter(K,P);
}else{var R=this.__fW(L,M);
var S=M.substring(M.lastIndexOf(cb)+1,M.length);
if(R==null){return K;
}var Q=qx.Class.getPropertyDefinition(R.constructor,S);
var O=Q==null?cg:Q.check;
return this.__ge(K,O);
}},__gd:function(br,bs){var bt=qx.Class.getPropertyDefinition(br.constructor,bs);

if(bt==null){return null;
}return bt.event;
},__ge:function(cO,cP){var cQ=qx.lang.Type.getClass(cO);
if((cQ==ca||cQ==bY)&&(cP==cq||cP==cm)){cO=parseInt(cO);
}if((cQ==cs||cQ==ca||cQ==ci)&&cP==bY){cO=cO+cg;
}if((cQ==ca||cQ==bY)&&(cP==ca||cP==cl)){cO=parseFloat(cO);
}return cO;
},removeBindingFromObject:function(cR,cS){if(cS.type==cw){for(var i=0;i<cS.sources.length;i++){if(cS.sources[i]){cS.sources[i].removeListenerById(cS.listenerIds[i]);
}}for(var i=0;i<cS.targets.length;i++){if(cS.targets[i]){cS.targets[i].removeListenerById(cS.targetListenerIds[i]);
}}}else{cR.removeListenerById(cS);
}var cT=this.__fP[cR.toHashCode()];
if(cT!=undefined){for(var i=0;i<cT.length;i++){if(cT[i][0]==cS){qx.lang.Array.remove(cT,cT[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cz){{};
var cA=this.__fP[cz.toHashCode()];

if(cA!=undefined){for(var i=cA.length-1;i>=0;i--){this.removeBindingFromObject(cz,cA[i][0]);
}}},getAllBindingsForObject:function(D){if(this.__fP[D.toHashCode()]===undefined){this.__fP[D.toHashCode()]=[];
}return this.__fP[D.toHashCode()];
},removeAllBindings:function(){for(var cy in this.__fP){var cx=qx.core.ObjectRegistry.fromHashCode(cy);
if(cx==null){delete this.__fP[cy];
continue;
}this.removeAllBindingsForObject(cx);
}this.__fP={};
},getAllBindings:function(){return this.__fP;
},showBindingInLog:function(bz,bA){var bC;
for(var i=0;i<this.__fP[bz.toHashCode()].length;i++){if(this.__fP[bz.toHashCode()][i][0]==bA){bC=this.__fP[bz.toHashCode()][i];
break;
}}
if(bC===undefined){var bB=cj;
}else{var bB=cn+bC[1]+ct+bC[2]+cr+bC[3]+ct+bC[4]+ck;
}qx.log.Logger.debug(bB);
},showAllBindingsInLog:function(){for(var bg in this.__fP){var bf=qx.core.ObjectRegistry.fromHashCode(bg);

for(var i=0;i<this.__fP[bg].length;i++){this.showBindingInLog(bf,this.__fP[bg][i][0]);
}}}}});
})();
(function(){var L="",K="g",J="0",I='\\$1',H="%",G='-',F="qx.lang.String",E=' ',D='\n',C="undefined";
qx.Class.define(F,{statics:{camelCase:function(g){return g.replace(/\-([a-z])/g,function(c,d){return d.toUpperCase();
});
},hyphenate:function(z){return z.replace(/[A-Z]/g,function(f){return (G+f.charAt(0).toLowerCase());
});
},capitalize:function(h){return h.replace(/\b[a-z]/g,function(M){return M.toUpperCase();
});
},clean:function(e){return this.trim(e.replace(/\s+/g,E));
},trimLeft:function(Q){return Q.replace(/^\s+/,L);
},trimRight:function(j){return j.replace(/\s+$/,L);
},trim:function(P){return P.replace(/^\s+|\s+$/g,L);
},startsWith:function(N,O){return N.indexOf(O)===0;
},endsWith:function(o,p){return o.substring(o.length-p.length,o.length)===p;
},repeat:function(t,u){return t.length>0?new Array(u+1).join(t):L;
},pad:function(q,length,r){var s=length-q.length;

if(s>0){if(typeof r===C){r=J;
}return this.repeat(r,s)+q;
}else{return q;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(a,b){return a.indexOf(b)!=-1;
},format:function(w,x){var y=w;

for(var i=0;i<x.length;i++){y=y.replace(new RegExp(H+(i+1),K),x[i]+L);
}return y;
},escapeRegexpChars:function(v){return v.replace(/([.*+?^${}()|[\]\/\\])/g,I);
},toArray:function(A){return A.split(/\B|\b/g);
},stripTags:function(B){return B.replace(/<\/?[^>]+>/gi,L);
},stripScripts:function(k,l){var n=L;
var m=k.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){n+=arguments[1]+D;
return L;
});

if(l===true){qx.lang.Function.globalEval(n);
}return m;
}}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(j){},setItem:function(h,i){},splice:function(a,b,c){},contains:function(g){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cQ=c;
this.__cR=d||b;
this.__cS=e===undefined?-1:e;
},members:{__cQ:null,__cR:null,__cS:null,toString:function(){return this.__cQ;
},getUri:function(){return this.__cR;
},getLineNumber:function(){return this.__cS;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__kl=b+(c&&c.message?c.message:c);
Error.call(this,this.__kl);
this.__km=d;
this.__kn=c;
},members:{__kn:null,__km:null,__kl:null,toString:function(){return this.__kl;
},getArguments:function(){return this.__km;
},getSourceException:function(){return this.__kn;
}},destruct:function(){this.__kn=null;
this.__km=null;
this.__kl=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cN=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cN:null,message:null,getComment:function(){return this.__cN;
},toString:function(){return this.__cN+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__kR=qx.dev.StackTrace.getStackTrace();
},members:{__kR:null,getStackTrace:function(){return this.__kR;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(g){return (g!==null&&(this.getClass(g)==c||g instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==e||j instanceof Error));
}}});
})();
(function(){var e="qx.util.ObjectPool",d="Integer";
qx.Class.define(e,{extend:qx.core.Object,construct:function(n){qx.core.Object.call(this);
this.__fw={};

if(n!=null){this.setSize(n);
}},properties:{size:{check:d,init:Infinity}},members:{__fw:null,getObject:function(a){if(this.$$disposed){return new a;
}
if(!a){throw new Error("Class needs to be defined!");
}var b=null;
var c=this.__fw[a.classname];

if(c){b=c.pop();
}
if(b){b.$$pooled=false;
}else{b=new a;
}return b;
},poolObject:function(j){if(!this.__fw){return;
}var k=j.classname;
var m=this.__fw[k];

if(j.$$pooled){throw new Error("Object is already pooled: "+j);
}
if(!m){this.__fw[k]=m=[];
}if(m.length>this.getSize()){if(j.destroy){j.destroy();
}else{j.dispose();
}return;
}j.$$pooled=true;
m.push(j);
}},destruct:function(){var h=this.__fw;
var f,g,i,l;

for(f in h){g=h[f];

for(i=0,l=g.length;i<l;i++){g[i].dispose();
}}delete this.__fw;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(b,c,d){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){if(!d&&b[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{b[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
}},disposeArray:function(p,q){var s=p[q];

if(!s){return;
}if(qx.core.ObjectRegistry.inShutDown){p[q]=null;
return;
}try{var r;

for(var i=s.length-1;i>=0;i--){r=s[i];

if(r){r.dispose();
}}}catch(n){throw new Error("The array field: "+q+" of object: "+p+" has non disposable entries: "+n);
}s.length=0;
p[q]=null;
},disposeMap:function(e,f){var g=e[f];

if(!g){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{for(var h in g){if(g.hasOwnProperty(h)){g[h].dispose();
}}}catch(o){throw new Error("The map field: "+f+" of object: "+e+" has non disposable entries: "+o);
}e[f]=null;
},disposeTriggeredBy:function(j,k){var m=k.dispose;
k.dispose=function(){m.call(k);
j.dispose();
};
}}});
})();
(function(){var c="qx.event.handler.Object";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(a,b){return qx.Class.supportsEvent(a.constructor,b);
},registerEvent:function(d,e,f){},unregisterEvent:function(h,i,j){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__eO:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__eP:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__eQ:function(){var J=qx.lang.Generics.__eO;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__eP(L,M);
}}}}},defer:function(O){O.__eQ();
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(c,d,e,f,g){qx.event.type.Event.prototype.init.call(this,f,g);
this._target=d||qx.bom.Event.getTarget(c);
this._relatedTarget=e||qx.bom.Event.getRelatedTarget(c);

if(c.timeStamp){this._timeStamp=c.timeStamp;
}this._native=c;
this._returnValue=null;
return this;
},clone:function(h){var i=qx.event.type.Event.prototype.clone.call(this,h);
var j={};
i._native=this._cloneNativeEvent(this._native,j);
i._returnValue=this._returnValue;
return i;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(b){this._returnValue=b;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__kb:function(){var o=navigator.platform;
if(o==null||o===l){o=navigator.userAgent;
}
if(o.indexOf(f)!=-1||o.indexOf(m)!=-1||o.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(h)!=-1||o.indexOf(a)!=-1||o.indexOf(c)!=-1||o.indexOf(n)!=-1||o.indexOf(g)!=-1||o.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(d)!=-1||o.indexOf(j)!=-1||o.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(p){p.__kb();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__kK:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__kL:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__kK){J.push(I);
}var L=new RegExp(l+J.join(C).replace(/\./g,r)+H,u);

if(!L.test(K)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__kK[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__kL();
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(j,k){var n=null;
var q=null;
var t=null;
var u=null;
var p=null;

if(j){n=j.meta.color||null;
q=j.meta.decoration||null;
t=j.meta.font||null;
u=j.meta.icon||null;
p=j.meta.appearance||null;
}var r=qx.theme.manager.Color.getInstance();
var s=qx.theme.manager.Decoration.getInstance();
var l=qx.theme.manager.Font.getInstance();
var o=qx.theme.manager.Icon.getInstance();
var m=qx.theme.manager.Appearance.getInstance();
r.setTheme(n);
s.setTheme(q);
l.setTheme(t);
o.setTheme(u);
m.setTheme(p);
},initialize:function(){var h=qx.core.Setting;
var g,i;
g=h.get(e);

if(g){i=qx.Theme.getByName(g);

if(!i){throw new Error("The theme to use is not available: "+g);
}this.setTheme(i);
}}},settings:{"qx.theme":c}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(c){if(c&&this._dynamic[c]){return this._dynamic[c];
}return c;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(k){var l={};

if(k){var m=k.colors;
var n=qx.util.ColorUtil;
var o;

for(var p in m){o=m[p];

if(typeof o===b){if(!n.isCssString(o)){throw new Error("Could not parse color: "+o);
}}else if(o instanceof Array){o=n.rgbToRgbString(o);
}else{throw new Error("Could not parse color: "+o);
}l[p]=o;
}}this._setDynamic(l);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var l=",",k="rgb(",j=")",h="qx.theme.manager.Color",e="qx.util.ColorUtil";
qx.Class.define(e,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(R){return this.NAMED[R]!==undefined;
},isSystemColor:function(I){return this.SYSTEM[I]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(h);
},isThemedColor:function(D){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(D);
},stringToRgb:function(a){if(this.supportsThemes()&&this.isThemedColor(a)){var a=qx.theme.manager.Color.getInstance().resolveDynamic(a);
}
if(this.isNamedColor(a)){return this.NAMED[a];
}else if(this.isSystemColor(a)){throw new Error("Could not convert system colors to RGB: "+a);
}else if(this.isRgbString(a)){return this.__gm();
}else if(this.isHex3String(a)){return this.__go();
}else if(this.isHex6String(a)){return this.__gp();
}throw new Error("Could not parse color: "+a);
},cssStringToRgb:function(J){if(this.isNamedColor(J)){return this.NAMED[J];
}else if(this.isSystemColor(J)){throw new Error("Could not convert system colors to RGB: "+J);
}else if(this.isRgbString(J)){return this.__gm();
}else if(this.isRgbaString(J)){return this.__gn();
}else if(this.isHex3String(J)){return this.__go();
}else if(this.isHex6String(J)){return this.__gp();
}throw new Error("Could not parse color: "+J);
},stringToRgbString:function(bi){return this.rgbToRgbString(this.stringToRgb(bi));
},rgbToRgbString:function(C){return k+C[0]+l+C[1]+l+C[2]+j;
},rgbToHexString:function(d){return (qx.lang.String.pad(d[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(d[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(d[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(G){return this.isThemedColor(G)||this.isNamedColor(G)||this.isHex3String(G)||this.isHex6String(G)||this.isRgbString(G);
},isCssString:function(V){return this.isSystemColor(V)||this.isNamedColor(V)||this.isHex3String(V)||this.isHex6String(V)||this.isRgbString(V);
},isHex3String:function(H){return this.REGEXP.hex3.test(H);
},isHex6String:function(F){return this.REGEXP.hex6.test(F);
},isRgbString:function(bh){return this.REGEXP.rgb.test(bh);
},isRgbaString:function(E){return this.REGEXP.rgba.test(E);
},__gm:function(){var ba=parseInt(RegExp.$1,10);
var Y=parseInt(RegExp.$2,10);
var X=parseInt(RegExp.$3,10);
return [ba,Y,X];
},__gn:function(){var Q=parseInt(RegExp.$1,10);
var P=parseInt(RegExp.$2,10);
var O=parseInt(RegExp.$3,10);
return [Q,P,O];
},__go:function(){var N=parseInt(RegExp.$1,16)*17;
var M=parseInt(RegExp.$2,16)*17;
var L=parseInt(RegExp.$3,16)*17;
return [N,M,L];
},__gp:function(){var U=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var T=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var S=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [U,T,S];
},hex3StringToRgb:function(W){if(this.isHex3String(W)){return this.__go(W);
}throw new Error("Invalid hex3 value: "+W);
},hex6StringToRgb:function(K){if(this.isHex6String(K)){return this.__gp(K);
}throw new Error("Invalid hex6 value: "+K);
},hexStringToRgb:function(c){if(this.isHex3String(c)){return this.__go(c);
}
if(this.isHex6String(c)){return this.__gp(c);
}throw new Error("Invalid hex value: "+c);
},rgbToHsb:function(m){var o,s,v;
var B=m[0];
var y=m[1];
var n=m[2];
var A=(B>y)?B:y;

if(n>A){A=n;
}var u=(B<y)?B:y;

if(n<u){u=n;
}v=A/255.0;

if(A!=0){s=(A-u)/A;
}else{s=0;
}
if(s==0){o=0;
}else{var x=(A-B)/(A-u);
var z=(A-y)/(A-u);
var w=(A-n)/(A-u);

if(B==A){o=w-z;
}else if(y==A){o=2.0+x-w;
}else{o=4.0+z-x;
}o=o/6.0;

if(o<0){o=o+1.0;
}}return [Math.round(o*360),Math.round(s*100),Math.round(v*100)];
},hsbToRgb:function(bb){var i,f,p,q,t;
var bc=bb[0]/360;
var bd=bb[1]/100;
var be=bb[2]/100;

if(bc>=1.0){bc%=1.0;
}
if(bd>1.0){bd=1.0;
}
if(be>1.0){be=1.0;
}var bf=Math.floor(255*be);
var bg={};

if(bd==0.0){bg.red=bg.green=bg.blue=bf;
}else{bc*=6.0;
i=Math.floor(bc);
f=bc-i;
p=Math.floor(bf*(1.0-bd));
q=Math.floor(bf*(1.0-(bd*f)));
t=Math.floor(bf*(1.0-(bd*(1.0-f))));

switch(i){case 0:bg.red=bf;
bg.green=t;
bg.blue=p;
break;
case 1:bg.red=q;
bg.green=bf;
bg.blue=p;
break;
case 2:bg.red=p;
bg.green=bf;
bg.blue=t;
break;
case 3:bg.red=p;
bg.green=q;
bg.blue=bf;
break;
case 4:bg.red=t;
bg.green=p;
bg.blue=bf;
break;
case 5:bg.red=bf;
bg.green=p;
bg.blue=q;
break;
}}return [bg.red,bg.green,bg.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var h="object",g="_applyTheme",f="qx.theme.manager.Decoration",e="Theme",d="__ct",c="changeTheme",b="string",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,properties:{theme:{check:e,nullable:true,apply:g,event:c}},members:{__ct:null,resolve:function(k){if(!k){return null;
}
if(typeof k===h){return k;
}var n=this.getTheme();

if(!n){return null;
}var n=this.getTheme();

if(!n){return null;
}var o=this.__ct;

if(!o){o=this.__ct={};
}var l=o[k];

if(l){return l;
}var m=n.decorations[k];

if(!m){return null;
}var p=m.decorator;

if(p==null){throw new Error("Missing definition of which decorator to use in entry: "+k+"!");
}return o[k]=(new p).set(m.style);
},isValidPropertyValue:function(i){if(typeof i===b){return this.isDynamic(i);
}else if(typeof i===h){var j=i.constructor;
return qx.Class.hasInterface(j,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(q){if(!q){return false;
}var r=this.getTheme();

if(!r){return false;
}return !!r.decorations[q];
},_applyTheme:function(s,t){var v=qx.util.AliasManager.getInstance();

if(t){for(var u in t.aliases){v.remove(u);
}}
if(s){for(var u in s.aliases){v.add(u,s.aliases[u]);
}}
if(!s){this.__ct={};
}}},destruct:function(){this._disposeMap(d);
}});
})();
(function(){var d="qx.ui.decoration.IDecorator";
qx.Interface.define(d,{members:{getMarkup:function(){},resize:function(a,b,c){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var n="/",m="0",l="qx/static",k="http://",j="https://",i="file://",h="qx.util.AliasManager",g="singleton",f=".",e="static";
qx.Class.define(h,{type:g,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__gq={};
this.add(e,l);
},members:{__gq:null,_preprocess:function(o){var r=this._getDynamic();

if(r[o]===false){return o;
}else if(r[o]===undefined){if(o.charAt(0)===n||o.charAt(0)===f||o.indexOf(k)===0||o.indexOf(j)===m||o.indexOf(i)===0){r[o]=false;
return o;
}
if(this.__gq[o]){return this.__gq[o];
}var q=o.substring(0,o.indexOf(n));
var p=this.__gq[q];

if(p!==undefined){r[o]=p+o.substring(q.length);
}}return o;
},add:function(a,b){this.__gq[a]=b;
var d=this._getDynamic();
for(var c in d){if(c.substring(0,c.indexOf(n))===a){d[c]=b+c.substring(a.length);
}}},remove:function(u){delete this.__gq[u];
},resolve:function(s){var t=this._getDynamic();

if(s!=null){s=this._preprocess(s);
}return t[s]||s;
}},destruct:function(){this.__gq=null;
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(f){var g=this._dynamic;
return f instanceof qx.bom.Font?f:g[f];
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.fonts[p]){return s[p]=(new qx.bom.Font).set(r.fonts[p]);
}return p;
},isDynamic:function(t){var v=this._dynamic;

if(t&&(t instanceof qx.bom.Font||v[t]!==undefined)){return true;
}var u=this.getTheme();

if(u!==null&&t&&u.fonts[t]){v[t]=(new qx.bom.Font).set(u.fonts[t]);
return true;
}return false;
},__hy:function(h,i){if(h[i].include){var j=h[h[i].include];
h[i].include=null;
delete h[i].include;
h[i]=qx.lang.Object.mergeWith(h[i],j,false);
this.__hy(h,i);
}},_applyTheme:function(k){var l=this._getDynamic();

for(var o in l){if(l[o].themed){l[o].dispose();
delete l[o];
}}
if(k){var m=k.fonts;
var n=qx.bom.Font;

for(var o in m){if(m[o].include&&m[m[o].include]){this.__hy(m,o);
}l[o]=(new n).set(m[o]);
l[o].themed=true;
}}this._setDynamic(l);
}}});
})();
(function(){var n="",m="underline",k="Boolean",j="px",h='"',g="italic",f="normal",e="bold",d="_applyItalic",c="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="overline",u="line-through",t="qx.bom.Font",s="Number",r="_applyDecoration",q=" ",o="_applySize",p=",";
qx.Class.define(t,{extend:qx.core.Object,construct:function(A,B){qx.core.Object.call(this);

if(A!==undefined){this.setSize(A);
}
if(B!==undefined){this.setFamily(B);
}},statics:{fromString:function(I){var M=new qx.bom.Font();
var K=I.split(/\s+/);
var name=[];
var L;

for(var i=0;i<K.length;i++){switch(L=K[i]){case e:M.setBold(true);
break;
case g:M.setItalic(true);
break;
case m:M.setDecoration(m);
break;
default:var J=parseInt(L,10);

if(J==L||qx.lang.String.contains(L,j)){M.setSize(J);
}else{name.push(L);
}break;
}}
if(name.length>0){M.setFamily(name);
}return M;
},fromConfig:function(N){var O=new qx.bom.Font;
O.set(N);
return O;
},__cB:{fontFamily:n,fontSize:n,fontWeight:n,fontStyle:n,textDecoration:n,lineHeight:1.2},getDefaultStyles:function(){return this.__cB;
}},properties:{size:{check:z,nullable:true,apply:o},lineHeight:{check:s,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:k,nullable:true,apply:c},italic:{check:k,nullable:true,apply:d},decoration:{check:[m,u,v],nullable:true,apply:r}},members:{__cC:null,__cD:null,__cE:null,__cF:null,__cG:null,__cH:null,_applySize:function(E,F){this.__cC=E===null?null:E+j;
},_applyLineHeight:function(a,b){this.__cH=a===null?null:a;
},_applyFamily:function(R,S){var T=n;

for(var i=0,l=R.length;i<l;i++){if(R[i].indexOf(q)>0){T+=h+R[i]+h;
}else{T+=R[i];
}
if(i!==l-1){T+=p;
}}this.__cD=T;
},_applyBold:function(G,H){this.__cE=G===null?null:G?e:f;
},_applyItalic:function(C,D){this.__cF=C===null?null:C?g:f;
},_applyDecoration:function(P,Q){this.__cG=P===null?null:P;
},getStyles:function(){return {fontFamily:this.__cD,fontSize:this.__cC,fontWeight:this.__cE,fontStyle:this.__cF,textDecoration:this.__cG,lineHeight:this.__cH};
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__gr:function(){this.QUIRKS_MODE=this.__gs();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__gs:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__gr();
}});
})();
(function(){var a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(u){{};

for(var v in u){if(u.hasOwnProperty(v)){delete u[v];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(k){{};
return k.__count__===0;
}:
function(p){{};

for(var q in p){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(D,E){{};
return D.__count__>=E;
}:
function(m,n){{};

if(n<=0){return true;
}var length=0;

for(var o in m){if((++length)>=n){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(e){{};
var g=[];
var f=this.getKeys(e);

for(var i=0,l=f.length;i<l;i++){g.push(e[f[i]]);
}return g;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(B,C){{};
return qx.lang.Object.mergeWith(B,C,false);
},merge:function(b,c){{};
var d=arguments.length;

for(var i=1;i<d;i++){qx.lang.Object.mergeWith(b,arguments[i]);
}return b;
},clone:function(r){{};
var s={};

for(var t in r){s[t]=r[t];
}return s;
},invert:function(H){{};
var I={};

for(var J in H){I[H[J].toString()]=J;
}return I;
},getKeyFromValue:function(w,x){{};

for(var y in w){if(w.hasOwnProperty(y)&&w[y]===x){return y;
}}return null;
},contains:function(z,A){{};
return this.getKeyFromValue(z,A)!==null;
},select:function(F,G){{};
return G[F];
},fromArray:function(h){{};
var j={};

for(var i=0,l=h.length;i<l;i++){{};
j[h[i].toString()]=true;
}return j;
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var j="string",i="_applyTheme",h="qx.theme.manager.Appearance",g=":",f="Theme",e="changeTheme",d="/",c="singleton";
qx.Class.define(h,{type:c,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__dF={};
this.__dG={};
},properties:{theme:{check:f,nullable:true,event:e,apply:i}},members:{__dH:{},__dF:null,__dG:null,_applyTheme:function(a,b){this.__dG={};
this.__dF={};
},__dI:function(B,C,D){var H=C.appearances;
var K=H[B];

if(!K){var L=d;
var E=[];
var J=B.split(L);
var I;

while(!K&&J.length>0){E.unshift(J.pop());
var F=J.join(L);
K=H[F];

if(K){I=K.alias||K;

if(typeof I===j){var G=I+L+E.join(L);
return this.__dI(G,C,D);
}}}if(D!=null){return this.__dI(D,C);
}return null;
}else if(typeof K===j){return this.__dI(K,C,D);
}else if(K.include&&!K.style){return this.__dI(K.include,C,D);
}return B;
},styleFrom:function(k,l,m,n){if(!m){m=this.getTheme();
}var t=this.__dG;
var o=t[k];

if(!o){o=t[k]=this.__dI(k,m,n);
}var y=m.appearances[o];

if(!y){this.warn("Missing appearance: "+k);
return null;
}if(!y.style){return null;
}var z=o;

if(l){var A=y.$$bits;

if(!A){A=y.$$bits={};
y.$$length=0;
}var r=0;

for(var u in l){if(!l[u]){continue;
}
if(A[u]==null){A[u]=1<<y.$$length++;
}r+=A[u];
}if(r>0){z+=g+r;
}}var s=this.__dF;

if(s[z]!==undefined){return s[z];
}if(!l){l=this.__dH;
}var w;
if(y.include||y.base){var q=y.style(l);
var p;

if(y.include){p=this.styleFrom(y.include,l,m,n);
}w={};
if(y.base){var v=this.styleFrom(o,l,y.base,n);

if(y.include){for(var x in v){if(!p.hasOwnProperty(x)&&!q.hasOwnProperty(x)){w[x]=v[x];
}}}else{for(var x in v){if(!q.hasOwnProperty(x)){w[x]=v[x];
}}}}if(y.include){for(var x in p){if(!q.hasOwnProperty(x)){w[x]=p[x];
}}}for(var x in q){w[x]=q[x];
}}else{w=y.style(l);
}return s[z]=w||null;
}},destruct:function(){this.__dF=this.__dG=null;
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,M){if(!M){var M={};
}M.include=this.__qo(M.include);
M.patch=this.__qo(M.patch);
{};
var N={$$type:e,name:name,title:M.title,toString:this.genericToString};
if(M.extend){N.supertheme=M.extend;
}N.basename=qx.Bootstrap.createNamespace(name,N);
this.__qr(N,M);
this.__qp(N,M);
this.$$registry[name]=N;
for(var i=0,a=M.include,l=a.length;i<l;i++){this.include(N,a[i]);
}
for(var i=0,a=M.patch,l=a.length;i<l;i++){this.patch(N,a[i]);
}},__qo:function(w){if(!w){return [];
}
if(qx.Bootstrap.isArray(w)){return w;
}else{return [w];
}},__qp:function(O,P){var Q=P.aliases||{};

if(P.extend&&P.extend.aliases){qx.Bootstrap.objectMergeWith(Q,P.extend.aliases,false);
}O.aliases=Q;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__qq:function(x){for(var i=0,y=this.__qs,l=y.length;i<l;i++){if(x[y[i]]){return y[i];
}}},__qr:function(z,A){var D=this.__qq(A);
if(A.extend&&!D){D=A.extend.type;
}z.type=D||p;
if(!D){return;
}var F=function(){};
if(A.extend){F.prototype=new A.extend.$$clazz;
}var E=F.prototype;
var C=A[D];
for(var B in C){E[B]=C[B];
if(E[B].base){{};
E[B].base=A.extend;
}}z.$$clazz=F;
z[D]=new F;
},$$registry:{},__qs:[g,d,f,n,c,o,m,b],__qt:null,__qu:null,__qv:function(){},patch:function(G,H){var J=this.__qq(H);

if(J!==this.__qq(G)){throw new Error("The mixins '"+G.name+"' are not compatible '"+H.name+"'!");
}var I=H[J];
var K=G.$$clazz.prototype;

for(var L in I){K[L]=I[L];
}},include:function(q,r){var t=r.type;

if(t!==q.type){throw new Error("The mixins '"+q.name+"' are not compatible '"+r.name+"'!");
}var s=r[t];
var u=q.$$clazz.prototype;

for(var v in s){if(u[v]!==undefined){continue;
}u[v]=s[v];
}}}});
})();
(function(){var A="Boolean",z="focusout",y="interval",x="mouseover",w="mouseout",v="mousemove",u="widget",t="Use isShowInvalidToolTips() instead.",s="__qb",r="qx.ui.tooltip.ToolTip",k="Use setShowInvalidToolTips() instead.",q="__qc",n="Use initShowInvalidToolTips() instead.",i="Use resetShowInvalidToolTips() instead.",h="__qe",m="_applyCurrent",l="qx.ui.tooltip.Manager",o="tooltip-error",g="Use toggleShowInvalidToolTips() instead.",p="singleton",j="Use getShowInvalidToolTips() instead.";
qx.Class.define(l,{type:p,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,x,this.__ql,this,true);
this.__qb=new qx.event.Timer();
this.__qb.addListener(y,this.__qi,this);
this.__qc=new qx.event.Timer();
this.__qc.addListener(y,this.__qj,this);
this.__qd={left:0,top:0};
},properties:{current:{check:r,nullable:true,apply:m},showInvalidToolTips:{check:A,init:true},showToolTips:{check:A,init:true}},members:{__qd:null,__qc:null,__qb:null,__qe:null,__qf:null,__qg:function(){if(!this.__qe){this.__qe=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__qe;
},__qh:function(){if(!this.__qf){this.__qf=new qx.ui.tooltip.ToolTip().set({appearance:o});
this.__qf.syncAppearance();
}return this.__qf;
},_applyCurrent:function(J,K){if(K&&qx.ui.core.Widget.contains(K,J)){return;
}if(K){if(!K.isDisposed()){K.exclude();
}this.__qb.stop();
this.__qc.stop();
}var M=qx.event.Registration;
var L=document.body;
if(J){this.__qb.startWith(J.getShowTimeout());
M.addListener(L,w,this.__qm,this,true);
M.addListener(L,z,this.__qn,this,true);
M.addListener(L,v,this.__qk,this,true);
}else{M.removeListener(L,w,this.__qm,this,true);
M.removeListener(L,z,this.__qn,this,true);
M.removeListener(L,v,this.__qk,this,true);
}},__qi:function(e){var G=this.getCurrent();

if(G&&!G.isDisposed()){this.__qc.startWith(G.getHideTimeout());

if(G.getPlaceMethod()==u){G.placeToWidget(G.getOpener());
}else{G.placeToPoint(this.__qd);
}G.show();
}this.__qb.stop();
},__qj:function(e){var E=this.getCurrent();

if(E&&!E.isDisposed()){E.exclude();
}this.__qc.stop();
this.resetCurrent();
},__qk:function(e){var N=this.__qd;
N.left=e.getDocumentLeft();
N.top=e.getDocumentTop();
},__ql:function(e){var c=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!c){return;
}var d,f,b,a;
while(c!=null){d=c.getToolTip();
f=c.getToolTipText()||null;
b=c.getToolTipIcon()||null;

if(qx.Class.hasInterface(c.constructor,qx.ui.form.IForm)&&!c.isValid()){a=c.getInvalidMessage();
}
if(d||f||b||a){break;
}c=c.getLayoutParent();
}if(!c||
!c.getEnabled()||
c.isBlockToolTip()||
(!a&&!this.getShowToolTips())||(a&&!this.getShowInvalidToolTips())){return;
}
if(a){d=this.__qh().set({label:a});
}
if(!d){d=this.__qg().set({label:f,icon:b});
}this.setCurrent(d);
d.setOpener(c);
},__qm:function(e){var B=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!B){return;
}var C=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!C){return;
}var D=this.getCurrent();
if(D&&(C==D||qx.ui.core.Widget.contains(D,C))){return;
}if(C&&B&&qx.ui.core.Widget.contains(B,C)){return;
}if(D&&!C){this.setCurrent(null);
}else{this.resetCurrent();
}},__qn:function(e){var H=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!H){return;
}var I=this.getCurrent();
if(I&&I==H.getToolTip()){this.setCurrent(null);
}},setShowInvalidTooltips:function(F){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
return this.setShowInvalidToolTips(F);
},getShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.getShowInvalidToolTips();
},resetShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.resetShowInvalidToolTips();
},isShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return this.isShowInvalidToolTips();
},toggleShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.toggleShowInvalidToolTips();
},initShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return this.initShowInvalidToolTips();
}},destruct:function(){qx.event.Registration.removeListener(document.body,x,this.__ql,this,true);
this._disposeObjects(s,q,h);
this.__qd=null;
}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(a){qx.core.Object.call(this);
this.setEnabled(false);

if(a!=null){this.setInterval(a);
}var self=this;
this.__er=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(n,o,p){var q=new qx.event.Timer(p);
q.__es=n;
q.addListener(i,function(e){q.stop();
n.call(o,e);
q.dispose();
o=null;
},o);
q.start();
return q;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__et:null,__er:null,_applyInterval:function(r,s){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(j,k){if(k){window.clearInterval(this.__et);
this.__et=null;
}else if(j){this.__et=window.setInterval(this.__er,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(m){this.setInterval(m);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(l){this.stop();
this.startWith(l);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__et){window.clearInterval(this.__et);
}this.__et=this.__er=null;
}});
})();
(function(){var d="qx.ui.core.MChildrenHandling";
qx.Mixin.define(d,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(i){return this._indexOf(i);
},add:function(m,n){this._add(m,n);
},addAt:function(a,b,c){this._addAt(a,b,c);
},addBefore:function(e,f,g){this._addBefore(e,f,g);
},addAfter:function(j,k,l){this._addAfter(j,k,l);
},remove:function(h){this._remove(h);
},removeAt:function(p){return this._removeAt(p);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(o){o.getChildren=o._getChildren;
o.hasChildren=o._hasChildren;
o.indexOf=o._indexOf;
o.add=o._add;
o.addAt=o._addAt;
o.addBefore=o._addBefore;
o.addAfter=o._addAfter;
o.remove=o._remove;
o.removeAt=o._removeAt;
o.removeAll=o._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var F="Integer",E="_applyDimension",D="Boolean",C="_applyStretching",B="_applyMargin",A="shorthand",z="_applyAlign",y="allowShrinkY",x="bottom",w="baseline",T="marginBottom",S="qx.ui.core.LayoutItem",R="center",Q="marginTop",P="allowGrowX",O="middle",N="marginLeft",M="allowShrinkX",L="top",K="right",I="marginRight",J="abstract",G="allowGrowY",H="left";
qx.Class.define(S,{type:J,extend:qx.core.Object,properties:{minWidth:{check:F,nullable:true,apply:E,init:null,themeable:true},width:{check:F,nullable:true,apply:E,init:null,themeable:true},maxWidth:{check:F,nullable:true,apply:E,init:null,themeable:true},minHeight:{check:F,nullable:true,apply:E,init:null,themeable:true},height:{check:F,nullable:true,apply:E,init:null,themeable:true},maxHeight:{check:F,nullable:true,apply:E,init:null,themeable:true},allowGrowX:{check:D,apply:C,init:true,themeable:true},allowShrinkX:{check:D,apply:C,init:true,themeable:true},allowGrowY:{check:D,apply:C,init:true,themeable:true},allowShrinkY:{check:D,apply:C,init:true,themeable:true},allowStretchX:{group:[P,M],mode:A,themeable:true},allowStretchY:{group:[G,y],mode:A,themeable:true},marginTop:{check:F,init:0,apply:B,themeable:true},marginRight:{check:F,init:0,apply:B,themeable:true},marginBottom:{check:F,init:0,apply:B,themeable:true},marginLeft:{check:F,init:0,apply:B,themeable:true},margin:{group:[Q,I,T,N],mode:A,themeable:true},alignX:{check:[H,R,K],nullable:true,apply:z,themeable:true},alignY:{check:[L,O,x,w],nullable:true,apply:z,themeable:true}},members:{__fo:null,__fp:null,__fq:null,__fr:null,__fs:null,__ft:null,__fu:null,getBounds:function(){return this.__ft||this.__fp||null;
},clearSeparators:function(){},renderSeparator:function(U,V){},renderLayout:function(W,top,X,Y){var ba;
{};
var bb=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bb=this._getHeightForWidth(X);
}
if(bb!=null&&bb!==this.__fo){this.__fo=bb;
qx.ui.core.queue.Layout.add(this);
return null;
}var bd=this.__fp;

if(!bd){bd=this.__fp={};
}var bc={};

if(W!==bd.left||top!==bd.top){bc.position=true;
bd.left=W;
bd.top=top;
}
if(X!==bd.width||Y!==bd.height){bc.size=true;
bd.width=X;
bd.height=Y;
}if(this.__fq){bc.local=true;
delete this.__fq;
}
if(this.__fs){bc.margin=true;
delete this.__fs;
}return bc;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__fq;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__fq=true;
this.__fr=null;
},getSizeHint:function(j){var k=this.__fr;

if(k){return k;
}
if(j===false){return null;
}k=this.__fr=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__fo&&this.getHeight()==null){k.height=this.__fo;
}if(k.minWidth>k.width){k.width=k.minWidth;
}
if(k.maxWidth<k.width){k.width=k.maxWidth;
}
if(!this.getAllowGrowX()){k.maxWidth=k.width;
}
if(!this.getAllowShrinkX()){k.minWidth=k.width;
}if(k.minHeight>k.height){k.height=k.minHeight;
}
if(k.maxHeight<k.height){k.height=k.maxHeight;
}
if(!this.getAllowGrowY()){k.maxHeight=k.height;
}
if(!this.getAllowShrinkY()){k.minHeight=k.height;
}return k;
},_computeSizeHint:function(){var h=this.getMinWidth()||0;
var e=this.getMinHeight()||0;
var i=this.getWidth()||h;
var g=this.getHeight()||e;
var d=this.getMaxWidth()||Infinity;
var f=this.getMaxHeight()||Infinity;
return {minWidth:h,width:i,maxWidth:d,minHeight:e,height:g,maxHeight:f};
},_hasHeightForWidth:function(){var l=this._getLayout();

if(l){return l.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(r){var s=this._getLayout();

if(s&&s.hasHeightForWidth()){return s.getHeightForWidth(r);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__fs=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__ft;
},setUserBounds:function(m,top,n,o){this.__ft={left:m,top:top,width:n,height:o};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__ft;
qx.ui.core.queue.Layout.add(this);
},__fv:{},setLayoutProperties:function(t){if(t==null){return;
}var u=this.__fu;

if(!u){u=this.__fu={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(t);
}for(var v in t){if(t[v]==null){delete u[v];
}else{u[v]=t[v];
}}},getLayoutProperties:function(){return this.__fu||this.__fv;
},clearLayoutProperties:function(){delete this.__fu;
},updateLayoutProperties:function(a){var b=this._getLayout();

if(b){var c;
{};
b.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var p=qx.core.Object.prototype.clone.call(this);
var q=this.__fu;

if(q){p.__fu=qx.lang.Object.clone(q);
}return p;
}},destruct:function(){this.$$parent=this.$$subparent=this.__fu=this.__fp=this.__ft=this.__fr=null;
}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cO={};
},statics:{MAX_SIZE:15,__cP:a},members:{__cO:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__cP;
e=c;
}var g=this.__cO;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__cP){i.dispose();
return;
}var k=this.__cO;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(o,p){var q=new qx.html.Decorator(o,p);
{};
return q;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var n=this.__cO;

for(var m in n){qx.util.DisposeUtil.disposeArray(n,m);
}}this.__cO=null;
}});
})();
(function(){var dY="px",dX="Boolean",dW="qx.event.type.Mouse",dV="qx.event.type.Drag",dU="visible",dT="qx.event.type.Focus",dS="on",dR="Integer",dQ="excluded",dP="qx.event.type.Data",dB="_applyPadding",dA="qx.event.type.Event",dz="hidden",dy="contextmenu",dx="String",dw="tabIndex",dv="backgroundColor",du="focused",dt="changeVisibility",ds="mshtml",eg="hovered",eh="qx.event.type.KeySequence",ee="qx.client",ef="absolute",ec="drag",ed="div",ea="disabled",eb="move",ei="dragstart",ej="qx.dynlocale",dI="dragchange",dH="dragend",dK="resize",dJ="Decorator",dM="zIndex",dL="opacity",dO="default",dN="Color",dG="changeToolTipText",dF="beforeContextmenuOpen",ci="_applyNativeContextMenu",cj="__dP",ck="_applyBackgroundColor",cl="_applyFocusable",cm="changeShadow",cn="qx.event.type.KeyInput",co="__dX",cp="createChildControl",cq="__dQ",cr="Font",eo="_applyShadow",en="__dT",em="_applyEnabled",ek="_applySelectable",es="Number",er="_applyKeepActive",eq="_applyVisibility",ep="repeat",eu="qxDraggable",et="syncAppearance",cQ="paddingLeft",cR="_applyDroppable",cO="#",cP="qx.event.type.MouseWheel",cU="_applyCursor",cV="_applyDraggable",cS="__dL",cT="changeTextColor",cM="$$widget",cN="changeContextMenu",cz="paddingTop",cy="changeSelectable",cB="hideFocus",cA="none",cv="outline",cu="_applyAppearance",cx="_applyOpacity",cw="url(",ct=")",cs="qx.ui.core.Widget",db="_applyFont",dc="cursor",dd="qxDroppable",de="changeZIndex",cW="changeEnabled",cX="changeFont",cY="__dK",da="_applyDecorator",df="_applyZIndex",dg="_applyTextColor",cJ="qx.ui.menu.Menu",cI="_applyToolTipText",cH="true",cG="widget",cF="__dO",cE="changeDecorator",cD="__dV",cC="_applyTabIndex",cL="changeAppearance",cK="shorthand",dh="/",di="",dj="_applyContextMenu",dk="paddingBottom",dl="changeNativeContextMenu",dm="qx.ui.tooltip.ToolTip",dn="qxKeepActive",dp="_applyKeepFocus",dq="paddingRight",dr="changeBackgroundColor",dE="changeLocale",dD="qxKeepFocus",dC="qx/static/blank.gif";
qx.Class.define(cs,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__dK=this._createContainerElement();
this.__dL=this.__dW();
this.__dK.add(this.__dL);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:dA,disappear:dA,createChildControl:dP,resize:dP,move:dP,syncAppearance:dP,mousemove:dW,mouseover:dW,mouseout:dW,mousedown:dW,mouseup:dW,click:dW,dblclick:dW,contextmenu:dW,beforeContextmenuOpen:dW,mousewheel:cP,keyup:eh,keydown:eh,keypress:eh,keyinput:cn,focus:dT,blur:dT,focusin:dT,focusout:dT,activate:dT,deactivate:dT,capture:dA,losecapture:dA,drop:dV,dragleave:dV,dragover:dV,drag:dV,dragstart:dV,dragend:dV,dragchange:dV,droprequest:dV},properties:{paddingTop:{check:dR,init:0,apply:dB,themeable:true},paddingRight:{check:dR,init:0,apply:dB,themeable:true},paddingBottom:{check:dR,init:0,apply:dB,themeable:true},paddingLeft:{check:dR,init:0,apply:dB,themeable:true},padding:{group:[cz,dq,dk,cQ],mode:cK,themeable:true},zIndex:{nullable:true,init:null,apply:df,event:de,check:dR,themeable:true},decorator:{nullable:true,init:null,apply:da,event:cE,check:dJ,themeable:true},shadow:{nullable:true,init:null,apply:eo,event:cm,check:dJ,themeable:true},backgroundColor:{nullable:true,check:dN,apply:ck,event:dr,themeable:true},textColor:{nullable:true,check:dN,apply:dg,event:cT,themeable:true,inheritable:true},font:{nullable:true,apply:db,check:cr,event:cX,themeable:true,inheritable:true,dereference:true},opacity:{check:es,apply:cx,themeable:true,nullable:true,init:null},cursor:{check:dx,apply:cU,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:dm,nullable:true},toolTipText:{check:dx,nullable:true,event:dG,apply:cI},toolTipIcon:{check:dx,nullable:true,event:dG},blockToolTip:{check:dX,init:false},visibility:{check:[dU,dz,dQ],init:dU,apply:eq,event:dt},enabled:{init:true,check:dX,inheritable:true,apply:em,event:cW},anonymous:{init:false,check:dX},tabIndex:{check:dR,nullable:true,apply:cC},focusable:{check:dX,init:false,apply:cl},keepFocus:{check:dX,init:false,apply:dp},keepActive:{check:dX,init:false,apply:er},draggable:{check:dX,init:false,apply:cV},droppable:{check:dX,init:false,apply:cR},selectable:{check:dX,init:false,event:cy,apply:ek},contextMenu:{check:cJ,apply:dj,nullable:true,event:cN},nativeContextMenu:{check:dX,init:false,themeable:true,event:dl,apply:ci},appearance:{check:dx,init:cG,apply:cu,event:cL}},statics:{DEBUG:false,getWidgetByElement:function(ca){while(ca){var cb=ca.$$widget;
if(cb!=null){return qx.core.ObjectRegistry.fromHashCode(cb);
}try{ca=ca.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,bJ){while(bJ){if(parent==bJ){return true;
}bJ=bJ.getLayoutParent();
}return false;
},__dM:new qx.ui.core.DecoratorFactory(),__dN:new qx.ui.core.DecoratorFactory()},members:{__dK:null,__dL:null,__dO:null,__dP:null,__dQ:null,__dR:null,__dS:null,__dT:null,_getLayout:function(){return this.__dT;
},_setLayout:function(gt){{};

if(this.__dT){this.__dT.connectToWidget(null);
}
if(gt){gt.connectToWidget(this);
}this.__dT=gt;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var bI=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(bI);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(bI);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dU:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cf=qx.theme.manager.Decoration.getInstance();
var ch=cf.resolve(a).getInsets();
var cg=cf.resolve(b).getInsets();

if(ch.top!=cg.top||ch.right!=cg.right||ch.bottom!=cg.bottom||ch.left!=cg.left){return true;
}return false;
},renderLayout:function(K,top,L,M){var V=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,K,top,L,M);
if(!V){return;
}var O=this.getContainerElement();
var content=this.getContentElement();
var S=V.size||this._updateInsets;
var W=dY;
var T={};
if(V.position){T.left=K+W;
T.top=top+W;
}if(V.size){T.width=L+W;
T.height=M+W;
}
if(V.position||V.size){O.setStyles(T);
}
if(S||V.local||V.margin){var N=this.getInsets();
var innerWidth=L-N.left-N.right;
var innerHeight=M-N.top-N.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var Q={};

if(this._updateInsets){Q.left=N.left+W;
Q.top=N.top+W;
}
if(S){Q.width=innerWidth+W;
Q.height=innerHeight+W;
}
if(S||this._updateInsets){content.setStyles(Q);
}
if(V.size){var U=this.__dQ;

if(U){U.setStyles({width:L+dY,height:M+dY});
}}
if(V.size||this._updateInsets){if(this.__dO){this.__dO.resize(L,M);
}}
if(V.size){if(this.__dP){var N=this.__dP.getInsets();
var R=L+N.left+N.right;
var P=M+N.top+N.bottom;
this.__dP.resize(R,P);
}}
if(S||V.local||V.margin){if(this.__dT&&this.hasLayoutChildren()){this.__dT.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(V.position&&this.hasListener(eb)){this.fireDataEvent(eb,this.getBounds());
}
if(V.size&&this.hasListener(dK)){this.fireDataEvent(dK,this.getBounds());
}delete this._updateInsets;
return V;
},__dV:null,clearSeparators:function(){var gU=this.__dV;

if(!gU){return;
}var gV=qx.ui.core.Widget.__dM;
var content=this.getContentElement();
var gT;

for(var i=0,l=gU.length;i<l;i++){gT=gU[i];
gV.poolDecorator(gT);
content.remove(gT);
}gU.length=0;
},renderSeparator:function(bB,bC){var bD=qx.ui.core.Widget.__dM.getDecoratorElement(bB);
this.getContentElement().add(bD);
bD.resize(bC.width,bC.height);
bD.setStyles({left:bC.left+dY,top:bC.top+dY});
if(!this.__dV){this.__dV=[bD];
}else{this.__dV.push(bD);
}},_computeSizeHint:function(){var gO=this.getWidth();
var gN=this.getMinWidth();
var gJ=this.getMaxWidth();
var gM=this.getHeight();
var gK=this.getMinHeight();
var gL=this.getMaxHeight();
{};
var gP=this._getContentHint();
var gI=this.getInsets();
var gR=gI.left+gI.right;
var gQ=gI.top+gI.bottom;

if(gO==null){gO=gP.width+gR;
}
if(gM==null){gM=gP.height+gQ;
}
if(gN==null){gN=gR;

if(gP.minWidth!=null){gN+=gP.minWidth;
}}
if(gK==null){gK=gQ;

if(gP.minHeight!=null){gK+=gP.minHeight;
}}
if(gJ==null){if(gP.maxWidth==null){gJ=Infinity;
}else{gJ=gP.maxWidth+gR;
}}
if(gL==null){if(gP.maxHeight==null){gL=Infinity;
}else{gL=gP.maxHeight+gQ;
}}return {width:gO,minWidth:gN,maxWidth:gJ,height:gM,minHeight:gK,maxHeight:gL};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__dT){this.__dT.invalidateLayoutCache();
}},_getContentHint:function(){var eG=this.__dT;

if(eG){if(this.hasLayoutChildren()){var eF;
var eH=eG.getSizeHint();
{};
return eH;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(eI){var eM=this.getInsets();
var eP=eM.left+eM.right;
var eO=eM.top+eM.bottom;
var eN=eI-eP;
var eK=this._getLayout();

if(eK&&eK.hasHeightForWidth()){var eJ=eK.getHeightForWidth(eI);
}else{eJ=this._getContentHeightForWidth(eN);
}var eL=eJ+eO;
return eL;
},_getContentHeightForWidth:function(gg){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var F=this.getPaddingRight();
var H=this.getPaddingBottom();
var G=this.getPaddingLeft();

if(this.__dO){var E=this.__dO.getInsets();
{};
top+=E.top;
F+=E.right;
H+=E.bottom;
G+=E.left;
}return {"top":top,"right":F,"bottom":H,"left":G};
},getInnerSize:function(){var fQ=this.getBounds();

if(!fQ){return null;
}var fP=this.getInsets();
return {width:fQ.width-fP.left-fP.right,height:fQ.height-fP.top-fP.bottom};
},show:function(){this.setVisibility(dU);
},hide:function(){this.setVisibility(dz);
},exclude:function(){this.setVisibility(dQ);
},isVisible:function(){return this.getVisibility()===dU;
},isHidden:function(){return this.getVisibility()!==dU;
},isExcluded:function(){return this.getVisibility()===dQ;
},isSeeable:function(){var m=this.getContainerElement().getDomElement();

if(m){return m.offsetWidth>0;
}var k=this;

do{if(!k.isVisible()){return false;
}
if(k.isRootWidget()){return true;
}k=k.getLayoutParent();
}while(k);
return false;
},_createContainerElement:function(){var ew={"$$widget":this.toHashCode()};
{};
var ev={zIndex:0,position:ef};
return new qx.html.Element(ed,ev,ew);
},__dW:function(){var fl=this._createContentElement();
{};
fl.setStyles({"position":ef,"zIndex":10});
return fl;
},_createContentElement:function(){return new qx.html.Element(ed,{overflowX:dz,overflowY:dz});
},getContainerElement:function(){return this.__dK;
},getContentElement:function(){return this.__dL;
},getDecoratorElement:function(){return this.__dO||null;
},getShadowElement:function(){return this.__dP||null;
},__dX:null,getLayoutChildren:function(){var fG=this.__dX;

if(!fG){return this.__dY;
}var fH;

for(var i=0,l=fG.length;i<l;i++){var fF=fG[i];

if(fF.hasUserBounds()||fF.isExcluded()){if(fH==null){fH=fG.concat();
}qx.lang.Array.remove(fH,fF);
}}return fH||fG;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var fW=this.__dT;

if(fW){fW.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var gu=this.__dX;

if(!gu){return false;
}var gv;

for(var i=0,l=gu.length;i<l;i++){gv=gu[i];

if(!gv.hasUserBounds()&&!gv.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dY:[],_getChildren:function(){return this.__dX||this.__dY;
},_indexOf:function(n){var o=this.__dX;

if(!o){return -1;
}return o.indexOf(n);
},_hasChildren:function(){var fz=this.__dX;
return fz!=null&&(!!fz[0]);
},addChildrenToQueue:function(fb){var fc=this.__dX;

if(!fc){return;
}var fd;

for(var i=0,l=fc.length;i<l;i++){fd=fc[i];
fb[fd.$$hash]=fd;
fd.addChildrenToQueue(fb);
}},_add:function(gp,gq){if(gp.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,gp);
}
if(this.__dX){this.__dX.push(gp);
}else{this.__dX=[gp];
}this.__ea(gp,gq);
},_addAt:function(bk,bl,bm){if(!this.__dX){this.__dX=[];
}if(bk.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,bk);
}var bn=this.__dX[bl];

if(bn===bk){return bk.setLayoutProperties(bm);
}
if(bn){qx.lang.Array.insertBefore(this.__dX,bk,bn);
}else{this.__dX.push(bk);
}this.__ea(bk,bm);
},_addBefore:function(eT,eU,eV){{};

if(eT==eU){return;
}
if(!this.__dX){this.__dX=[];
}if(eT.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,eT);
}qx.lang.Array.insertBefore(this.__dX,eT,eU);
this.__ea(eT,eV);
},_addAfter:function(fI,fJ,fK){{};

if(fI==fJ){return;
}
if(!this.__dX){this.__dX=[];
}if(fI.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,fI);
}qx.lang.Array.insertAfter(this.__dX,fI,fJ);
this.__ea(fI,fK);
},_remove:function(ez){if(!this.__dX){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dX,ez);
this.__eb(ez);
},_removeAt:function(fU){if(!this.__dX){throw new Error("This widget has no children!");
}var fV=this.__dX[fU];
qx.lang.Array.removeAt(this.__dX,fU);
this.__eb(fV);
return fV;
},_removeAll:function(){if(!this.__dX){return;
}var gW=this.__dX.concat();
this.__dX.length=0;

for(var i=gW.length-1;i>=0;i--){this.__eb(gW[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__ea:function(B,C){{};
var parent=B.getLayoutParent();

if(parent&&parent!=this){parent._remove(B);
}B.setLayoutParent(this);
if(C){B.setLayoutProperties(C);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(B);
}},__eb:function(eS){{};

if(eS.getLayoutParent()!==this){throw new Error("Remove Error: "+eS+" is not a child of this widget!");
}eS.setLayoutParent(null);
if(this.__dT){this.__dT.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(eS);
}},capture:function(gS){this.getContainerElement().capture(gS);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(gF,gG,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dQ){return;
}var fN=this.__dQ=new qx.html.Element;
{};
fN.setStyles({position:ef,top:0,left:0,zIndex:7});
var fO=this.getBounds();

if(fO){this.__dQ.setStyles({width:fO.width+dY,height:fO.height+dY});
}if(qx.core.Variant.isSet(ee,ds)){fN.setStyles({backgroundImage:cw+qx.util.ResourceManager.getInstance().toUri(dC)+ct,backgroundRepeat:ep});
}this.getContainerElement().add(fN);
},_applyDecorator:function(bo,bp){{};
var bt=qx.ui.core.Widget.__dM;
var br=this.getContainerElement();
if(!this.__dQ&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(bp){br.remove(this.__dO);
bt.poolDecorator(this.__dO);
}if(bo){var bs=this.__dO=bt.getDecoratorElement(bo);
bs.setStyle(dM,5);
var bq=this.getBackgroundColor();
bs.tint(bq);
br.add(bs);
}else{delete this.__dO;
this._applyBackgroundColor(this.getBackgroundColor());
}if(bo&&!bp&&bq){this.getContainerElement().setStyle(dv,null);
}if(this.__dU(bp,bo)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(bo){var bu=this.getBounds();

if(bu){bs.resize(bu.width,bu.height);
this.__dQ&&
this.__dQ.setStyles({width:bu.width+dY,height:bu.height+dY});
}}},_applyShadow:function(fm,fn){var fu=qx.ui.core.Widget.__dN;
var fp=this.getContainerElement();
if(fn){fp.remove(this.__dP);
fu.poolDecorator(this.__dP);
}if(fm){var fr=this.__dP=fu.getDecoratorElement(fm);
fp.add(fr);
var ft=fr.getInsets();
fr.setStyles({left:(-ft.left)+dY,top:(-ft.top)+dY});
var fs=this.getBounds();

if(fs){var fq=fs.width+ft.left+ft.right;
var fo=fs.height+ft.top+ft.bottom;
fr.resize(fq,fo);
}fr.tint(null);
}else{delete this.__dP;
}},_applyToolTipText:function(bf,bg){if(qx.core.Variant.isSet(ej,dS)){if(this.__dS){return;
}var bh=qx.locale.Manager.getInstance();
this.__dS=bh.addListener(dE,function(){if(bf&&bf.translate){this.setToolTipText(bf.translate());
}},this);
}},_applyTextColor:function(ge,gf){},_applyZIndex:function(fv,fw){this.getContainerElement().setStyle(dM,fv==null?0:fv);
},_applyVisibility:function(by,bz){var bA=this.getContainerElement();

if(by===dU){bA.show();
}else{bA.hide();
}var parent=this.$$parent;

if(parent&&(bz==null||by==null||bz===dQ||by===dQ)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(bM,bN){this.getContainerElement().setStyle(dL,bM==1?null:bM);
if(qx.core.Variant.isSet(ee,ds)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var bO=(bM==1||bM==null)?null:0.99;
this.getContentElement().setStyle(dL,bO);
}}},_applyCursor:function(bK,bL){if(bK==null&&!this.isSelectable()){bK=dO;
}this.getContainerElement().setStyle(dc,bK,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(gA,gB){var gC=this.getBackgroundColor();
var gE=this.getContainerElement();

if(this.__dO){this.__dO.tint(gC);
gE.setStyle(dv,null);
}else{var gD=qx.theme.manager.Color.getInstance().resolve(gC);
gE.setStyle(dv,gD);
}},_applyFont:function(bd,be){},__ec:null,$$stateChanges:null,_forwardStates:null,hasState:function(eY){var fa=this.__ec;
return !!fa&&!!fa[eY];
},addState:function(t){var u=this.__ec;

if(!u){u=this.__ec={};
}
if(u[t]){return;
}this.__ec[t]=true;
if(t===eg){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var x=this.__ef;

if(forward&&forward[t]&&x){var v;

for(var w in x){v=x[w];

if(v instanceof qx.ui.core.Widget){x[w].addState(t);
}}}},removeState:function(eA){var eB=this.__ec;

if(!eB||!eB[eA]){return;
}delete this.__ec[eA];
if(eA===eg){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var eE=this.__ef;

if(forward&&forward[eA]&&eE){for(var eD in eE){var eC=eE[eD];

if(eC instanceof qx.ui.core.Widget){eC.removeState(eA);
}}}},replaceState:function(gj,gk){var gl=this.__ec;

if(!gl){gl=this.__ec={};
}
if(!gl[gk]){gl[gk]=true;
}
if(gl[gj]){delete gl[gj];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var go=this.__ef;

if(forward&&forward[gk]&&go){for(var gn in go){var gm=go[gn];

if(gm instanceof qx.ui.core.Widget){gm.replaceState(gj,gk);
}}}},__ed:null,__ee:null,syncAppearance:function(){var bT=this.__ec;
var bS=this.__ed;
var bU=qx.theme.manager.Appearance.getInstance();
var bQ=qx.core.Property.$$method.setThemed;
var bY=qx.core.Property.$$method.resetThemed;
if(this.__ee){delete this.__ee;
if(bS){var bP=bU.styleFrom(bS,bT,null,this.getAppearance());
if(bP){bS=null;
}}}if(!bS){var bR=this;
var bX=[];

do{bX.push(bR.$$subcontrol||bR.getAppearance());
}while(bR=bR.$$subparent);
bS=this.__ed=bX.reverse().join(dh).replace(/#[0-9]+/g,di);
}var bV=bU.styleFrom(bS,bT,null,this.getAppearance());

if(bV){var bW;

if(bP){for(var bW in bP){if(bV[bW]===undefined){this[bY[bW]]();
}}}{};
for(var bW in bV){bV[bW]===undefined?this[bY[bW]]():this[bQ[bW]](bV[bW]);
}}else if(bP){for(var bW in bP){this[bY[bW]]();
}}this.fireDataEvent(et,this.__ec);
},_applyAppearance:function(gh,gi){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dR){qx.ui.core.queue.Appearance.add(this);
this.__dR=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__ee=true;
qx.ui.core.queue.Appearance.add(this);
var A=this.__ef;

if(A){var y;

for(var z in A){y=A[z];

if(y instanceof qx.ui.core.Widget){y.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var cc=this;

while(cc.getAnonymous()){cc=cc.getLayoutParent();

if(!cc){return null;
}}return cc;
},getFocusTarget:function(){var D=this;

if(!D.getEnabled()){return null;
}
while(D.getAnonymous()||!D.getFocusable()){D=D.getLayoutParent();

if(!D||!D.getEnabled()){return null;
}}return D;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(p,q){var r=this.getFocusElement();
if(p){var s=this.getTabIndex();

if(s==null){s=1;
}r.setAttribute(dw,s);
if(qx.core.Variant.isSet(ee,ds)){r.setAttribute(cB,cH);
}else{r.setStyle(cv,cA);
}}else{if(r.isNativelyFocusable()){r.setAttribute(dw,-1);
}else if(q){r.setAttribute(dw,null);
}}},_applyKeepFocus:function(fX){var fY=this.getFocusElement();
fY.setAttribute(dD,fX?dS:null);
},_applyKeepActive:function(fL){var fM=this.getContainerElement();
fM.setAttribute(dn,fL?dS:null);
},_applyTabIndex:function(gH){if(gH==null){gH=1;
}else if(gH<1||gH>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&gH!=null){this.getFocusElement().setAttribute(dw,gH);
}},_applySelectable:function(X,Y){if(Y!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(X);
this.getContentElement().setSelectable(X);
},_applyEnabled:function(h,j){if(h===false){this.addState(ea);
this.removeState(eg);
if(this.isFocusable()){this.removeState(du);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(ea);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gy,gz,name){},_applyContextMenu:function(gr,gs){if(gs){gs.removeState(dy);

if(gs.getOpener()==this){gs.resetOpener();
}
if(!gr){this.removeListener(dy,this._onContextMenuOpen);
gs.removeListener(dt,this._onBeforeContextMenuOpen,this);
}}
if(gr){gr.setOpener(this);
gr.addState(dy);

if(!gs){this.addListener(dy,this._onContextMenuOpen);
gr.addListener(dt,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==dU&&this.hasListener(dF)){this.fireDataEvent(dF,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(eW,eX){if(!this.isEnabled()&&eW===true){eW=false;
}qx.ui.core.DragDropCursor.getInstance();
if(eW){this.addListener(ei,this._onDragStart);
this.addListener(ec,this._onDrag);
this.addListener(dH,this._onDragEnd);
this.addListener(dI,this._onDragChange);
}else{this.removeListener(ei,this._onDragStart);
this.removeListener(ec,this._onDrag);
this.removeListener(dH,this._onDragEnd);
this.removeListener(dI,this._onDragChange);
}this.getContainerElement().setAttribute(eu,eW?dS:null);
},_applyDroppable:function(bi,bj){if(!this.isEnabled()&&bi===true){bi=false;
}this.getContainerElement().setAttribute(dd,bi?dS:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(dO);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var eQ=qx.ui.core.DragDropCursor.getInstance();
var eR=e.getCurrentAction();
eR?eQ.setAction(eR):eQ.resetAction();
},visualizeFocus:function(){this.addState(du);
},visualizeBlur:function(){this.removeState(du);
},scrollChildIntoView:function(bE,bF,bG,bH){this.scrollChildIntoViewX(bE,bF,bH);
this.scrollChildIntoViewY(bE,bG,bH);
},scrollChildIntoViewX:function(ba,bb,bc){this.getContentElement().scrollChildIntoViewX(ba.getContainerElement(),bb,bc);
},scrollChildIntoViewY:function(bv,bw,bx){this.getContentElement().scrollChildIntoViewY(bv.getContainerElement(),bw,bx);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(fB){if(!this.__ef){return false;
}return !!this.__ef[fB];
},__ef:null,_getCreatedChildControls:function(){return this.__ef;
},getChildControl:function(fC,fD){if(!this.__ef){if(fD){return null;
}this.__ef={};
}var fE=this.__ef[fC];

if(fE){return fE;
}
if(fD===true){return null;
}return this._createChildControl(fC);
},_showChildControl:function(gX){var gY=this.getChildControl(gX);
gY.show();
return gY;
},_excludeChildControl:function(fe){var ff=this.getChildControl(fe,true);

if(ff){ff.exclude();
}},_isChildControlVisible:function(fS){var fT=this.getChildControl(fS,true);

if(fT){return fT.isVisible();
}return false;
},_createChildControl:function(fg){if(!this.__ef){this.__ef={};
}else if(this.__ef[fg]){throw new Error("Child control '"+fg+"' already created!");
}var fk=fg.indexOf(cO);

if(fk==-1){var fh=this._createChildControlImpl(fg);
}else{var fh=this._createChildControlImpl(fg.substring(0,fk));
}
if(!fh){throw new Error("Unsupported control: "+fg);
}fh.$$subcontrol=fg;
fh.$$subparent=this;
var fi=this.__ec;
var forward=this._forwardStates;

if(fi&&forward&&fh instanceof qx.ui.core.Widget){for(var fj in fi){if(forward[fj]){fh.addState(fj);
}}}this.fireDataEvent(cp,fh);
return this.__ef[fg]=fh;
},_createChildControlImpl:function(fR){return null;
},_disposeChildControls:function(){var gd=this.__ef;

if(!gd){return;
}var gb=qx.ui.core.Widget;

for(var gc in gd){var ga=gd[gc];

if(!gb.contains(this,ga)){ga.destroy();
}else{ga.dispose();
}}delete this.__ef;
},_findTopControl:function(){var fA=this;

while(fA){if(!fA.$$subparent){return fA;
}fA=fA.$$subparent;
}return null;
},getContainerLocation:function(cd){var ce=this.getContainerElement().getDomElement();
return ce?qx.bom.element.Location.get(ce,cd):null;
},getContentLocation:function(I){var J=this.getContentElement().getDomElement();
return J?qx.bom.element.Location.get(J,I):null;
},setDomLeft:function(ex){var ey=this.getContainerElement().getDomElement();

if(ey){ey.style.left=ex+dY;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gw){var gx=this.getContainerElement().getDomElement();

if(gx){gx.style.top=gw+dY;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(c,top){var d=this.getContainerElement().getDomElement();

if(d){d.style.left=c+dY;
d.style.top=top+dY;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fx=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var fy=this.getChildren();

for(var i=0,l=fy.length;i<l;i++){fx.add(fy[i].clone());
}}return fx;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(ej,dS)){if(this.__dS){qx.locale.Manager.getInstance().removeListenerById(this.__dS);
}}this.getContainerElement().setAttribute(cM,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var g=qx.ui.core.Widget;
var f=this.getContainerElement();

if(this.__dO){f.remove(this.__dO);
g.__dM.poolDecorator(this.__dO);
}
if(this.__dP){f.remove(this.__dP);
g.__dN.poolDecorator(this.__dP);
}this.clearSeparators();
this.__dO=this.__dP=this.__dV=null;
}else{this._disposeArray(cD);
this._disposeObjects(cF,cj);
}this._disposeArray(co);
this.__ec=this.__ef=null;
this._disposeObjects(en,cY,cS,cq);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(i){qx.ui.core.Widget.call(this);

if(i!=null){this._setLayout(i);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(g){this.fireNonBubblingEvent(b,qx.event.type.Data,[g]);
},_afterRemoveChild:function(h){this.fireNonBubblingEvent(a,qx.event.type.Data,[h]);
}},defer:function(e,f){qx.ui.core.MChildrenHandling.remap(f);
qx.ui.core.MLayoutHandling.remap(f);
}});
})();
(function(){var k="Integer",j="interval",i="keep-align",h="disappear",g="best-fit",f="mouse",e="bottom-left",d="direct",c="Boolean",b="bottom-right",y="widget",x="qx.ui.core.MPlacement",w="left-top",v="offsetRight",u="shorthand",t="offsetLeft",s="top-left",r="appear",q="offsetBottom",p="top-right",n="offsetTop",o="right-bottom",l="right-top",m="left-bottom";
qx.Mixin.define(x,{properties:{position:{check:[s,p,e,b,w,m,l,o],init:e,themeable:true},placeMethod:{check:[y,f],init:f,themeable:true},domMove:{check:c,init:false},placementModeX:{check:[d,i,g],init:i,themeable:true},placementModeY:{check:[d,i,g],init:i,themeable:true},offsetLeft:{check:k,init:0,themeable:true},offsetTop:{check:k,init:0,themeable:true},offsetRight:{check:k,init:0,themeable:true},offsetBottom:{check:k,init:0,themeable:true},offset:{group:[n,v,q,t],mode:u,themeable:true}},members:{__ia:null,__ib:null,__ic:null,getLayoutLocation:function(C){var F,E,G,top;
E=C.getBounds();
G=E.left;
top=E.top;
var H=E;
C=C.getLayoutParent();

while(C&&!C.isRootWidget()){E=C.getBounds();
G+=E.left;
top+=E.top;
F=C.getInsets();
G+=F.left;
top+=F.top;
C=C.getLayoutParent();
}if(C.isRootWidget()){var D=C.getContainerLocation();

if(D){G+=D.left;
top+=D.top;
}}return {left:G,top:top,right:G+H.width,bottom:top+H.height};
},moveTo:function(a,top){if(this.getDomMove()){this.setDomPosition(a,top);
}else{this.setLayoutProperties({left:a,top:top});
}},placeToWidget:function(z,A){if(A){this.__id();
this.__ia=qx.lang.Function.bind(this.placeToWidget,this,z,false);
qx.event.Idle.getInstance().addListener(j,this.__ia);
this.__ic=function(){this.__id();
};
this.addListener(h,this.__ic,this);
}var B=z.getContainerLocation()||this.getLayoutLocation(z);
this.__if(B);
},__id:function(){if(this.__ia){qx.event.Idle.getInstance().removeListener(j,this.__ia);
this.__ia=null;
}
if(this.__ic){this.removeListener(h,this.__ic,this);
this.__ic=null;
}},placeToMouse:function(event){var M=event.getDocumentLeft();
var top=event.getDocumentTop();
var L={left:M,top:top,right:M,bottom:top};
this.__if(L);
},placeToElement:function(P,Q){var location=qx.bom.element.Location.get(P);
var R={left:location.left,top:location.top,right:location.left+P.offsetWidth,bottom:location.top+P.offsetHeight};
if(Q){this.__ia=qx.lang.Function.bind(this.placeToElement,this,P,false);
qx.event.Idle.getInstance().addListener(j,this.__ia);
this.addListener(h,function(){if(this.__ia){qx.event.Idle.getInstance().removeListener(j,this.__ia);
this.__ia=null;
}},this);
}this.__if(R);
},placeToPoint:function(N){var O={left:N.left,top:N.top,right:N.left,bottom:N.top};
this.__if(O);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__ie:function(S){var T=null;

if(this._computePlacementSize){var T=this._computePlacementSize();
}else if(this.isVisible()){var T=this.getBounds();
}
if(T==null){this.addListenerOnce(r,function(){this.__ie(S);
},this);
}else{S.call(this,T);
}},__if:function(K){this.__ie(function(I){var J=qx.util.placement.Placement.compute(I,this.getLayoutParent().getBounds(),K,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(J.left,J.top);
});
}},destruct:function(){this.__id();
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(m,n){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(r){var s;

switch(r){case l:s=new qx.ui.basic.Atom;
this._add(s);
break;
}return s||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,r);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(w,x){var y=this.getChildControl(l);
w==null?y.resetIcon():y.setIcon(w);
},_applyLabel:function(o,p){var q=this.getChildControl(l);
o==null?q.resetLabel():q.setLabel(o);
},_applyRich:function(t,u){var v=this.getChildControl(l);
v.setRich(t);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__hp:{},remove:function(A){delete this.__hp[A.$$hash];
},add:function(t){this.__hp[t.$$hash]=t;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var g=this.__hs();
for(var i=g.length-1;i>=0;i--){var h=g[i];
if(h.hasValidLayout()){continue;
}if(h.isRootWidget()&&!h.hasUserBounds()){var k=h.getSizeHint();
h.renderLayout(0,0,k.width,k.height);
}else{var j=h.getBounds();
h.renderLayout(j.left,j.top,j.width,j.height);
}}},getNestingLevel:function(c){var d=this.__hr;
var f=0;
var parent=c;
while(true){if(d[parent.$$hash]!=null){f+=d[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
f+=1;
}var e=f;

while(c&&c!==parent){d[c.$$hash]=e--;
c=c.$$parent;
}return f;
},__hq:function(){var z=qx.ui.core.queue.Visibility;
this.__hr={};
var y=[];
var x=this.__hp;
var u,w;

for(var v in x){u=x[v];

if(z.isVisible(u)){w=this.getNestingLevel(u);
if(!y[w]){y[w]={};
}y[w][v]=u;
delete x[v];
}}return y;
},__hs:function(){var o=[];
var q=this.__hq();

for(var n=q.length-1;n>=0;n--){if(!q[n]){continue;
}
for(var m in q[n]){var l=q[n][m];
if(n==0||l.isRootWidget()||l.hasUserBounds()){o.push(l);
l.invalidateLayoutCache();
continue;
}var s=l.getSizeHint(false);

if(s){l.invalidateLayoutCache();
var p=l.getSizeHint();
var r=(!l.getBounds()||s.minWidth!==p.minWidth||s.width!==p.width||s.maxWidth!==p.maxWidth||s.minHeight!==p.minHeight||s.height!==p.height||s.maxHeight!==p.maxHeight);
}else{r=true;
}
if(r){var parent=l.getLayoutParent();

if(!q[n-1]){q[n-1]={};
}q[n-1][parent.$$hash]=parent;
}else{o.push(l);
}}}return o;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__jW=d;
this.__jX=d.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jW:null,__jX:null,canHandleEvent:function(b,c){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__jW=this.__jX=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__fJ={};
this.__fK=qx.lang.Function.bind(this.__fO,this);
this.__fL=false;
},members:{__fM:null,__fN:null,__fJ:null,__fL:null,__fK:null,schedule:function(g){if(this.__fM==null){this.__fM=window.setTimeout(this.__fK,0);
}var h=g.toHashCode();
if(this.__fN&&this.__fN[h]){return;
}this.__fJ[h]=g;
this.__fL=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__fN&&this.__fN[f]){this.__fN[f]=null;
return;
}delete this.__fJ[f];
if(qx.lang.Object.isEmpty(this.__fJ)&&this.__fM!=null){window.clearTimeout(this.__fM);
this.__fM=null;
}},__fO:qx.event.GlobalError.observeMethod(function(){this.__fM=null;
while(this.__fL){this.__fN=qx.lang.Object.clone(this.__fJ);
this.__fJ={};
this.__fL=false;

for(var d in this.__fN){var c=this.__fN[d];

if(c){this.__fN[d]=null;
c.call();
}}}this.__fN=null;
})},destruct:function(){if(this.__fM!=null){window.clearTimeout(this.__fM);
}this.__fK=this.__fJ=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){qx.core.Object.call(this);
this.__hk=d;
this.__hl=e||null;
this.__hm=qx.util.DeferredCallManager.getInstance();
},members:{__hk:null,__hl:null,__hm:null,cancel:function(){this.__hm.cancel(this);
},schedule:function(){this.__hm.schedule(this);
},call:function(){this.__hl?this.__hk.apply(this.__hl):this.__hk();
}},destruct:function(b,c){this.cancel();
this.__hl=this.__hk=this.__hm=null;
}});
})();
(function(){var dm="element",dl="qx.client",dk="qxSelectable",dj="off",di="on",dh="div",dg="",df="mshtml",de="none",dd="scroll",dF="text",dE="qx.html.Element",dD="|capture|",dC="activate",dB="blur",dA="deactivate",dz="capture",dy="userSelect",dx="-moz-none",dw="visible",du="releaseCapture",dv="|bubble|",ds="tabIndex",dt="focus",dq="MozUserSelect",dr="normal",dn="__dt",dp="hidden";
qx.Class.define(dE,{extend:qx.core.Object,construct:function(cM,cN,cO){qx.core.Object.call(this);
this.__cW=cM||dh;
this.__cX=cN||null;
this.__cY=cO||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__da:{},_scheduleFlush:function(bG){qx.html.Element.__dE.schedule();
},flush:function(){var R;
{};
var J=this.__db();
var I=J.getFocus();

if(I&&this.__df(I)){J.blur(I);
}var Y=J.getActive();

if(Y&&this.__df(Y)){qx.bom.Element.deactivate(Y);
}var M=this.__dd();

if(M&&this.__df(M)){qx.bom.Element.releaseCapture(M);
}var S=[];
var T=this._modified;

for(var Q in T){R=T[Q];
if(R.__dx()){if(R.__dg&&qx.dom.Hierarchy.isRendered(R.__dg)){S.push(R);
}else{{};
R.__dw();
}delete T[Q];
}}
for(var i=0,l=S.length;i<l;i++){R=S[i];
{};
R.__dw();
}var O=this._visibility;

for(var Q in O){R=O[Q];
var U=R.__dg;

if(!U){delete O[Q];
continue;
}{};
if(!R.$$disposed){U.style.display=R.__dj?dg:de;
if(qx.core.Variant.isSet(dl,df)){if(!(document.documentMode>=8)){U.style.visibility=R.__dj?dw:dp;
}}}delete O[Q];
}var scroll=this._scroll;

for(var Q in scroll){R=scroll[Q];
var ba=R.__dg;

if(ba&&ba.offsetWidth){var L=true;
if(R.__dm!=null){R.__dg.scrollLeft=R.__dm;
delete R.__dm;
}if(R.__dn!=null){R.__dg.scrollTop=R.__dn;
delete R.__dn;
}var V=R.__dk;

if(V!=null){var P=V.element.getDomElement();

if(P&&P.offsetWidth){qx.bom.element.Scroll.intoViewX(P,ba,V.align);
delete R.__dk;
}else{L=false;
}}var W=R.__dl;

if(W!=null){var P=W.element.getDomElement();

if(P&&P.offsetWidth){qx.bom.element.Scroll.intoViewY(P,ba,W.align);
delete R.__dl;
}else{L=false;
}}if(L){delete scroll[Q];
}}}var K={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var X=this._actions[i];
var U=X.element.__dg;

if(!U||!K[X.type]&&!X.element.__dx()){continue;
}var N=X.args;
N.unshift(U);
qx.bom.Element[X.type].apply(qx.bom.Element,N);
}this._actions=[];
for(var Q in this.__da){var H=this.__da[Q];
var ba=H.element.__dg;

if(ba){qx.bom.Selection.set(ba,H.start,H.end);
delete this.__da[Q];
}}qx.event.handler.Appear.refresh();
},__db:function(){if(!this.__dc){var cE=qx.event.Registration.getManager(window);
this.__dc=cE.getHandler(qx.event.handler.Focus);
}return this.__dc;
},__dd:function(){if(!this.__de){var br=qx.event.Registration.getManager(window);
this.__de=br.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__de.getCaptureElement();
},__df:function(dV){var dW=qx.core.ObjectRegistry.fromHashCode(dV.$$element);
return dW&&!dW.__dx();
}},members:{__cW:null,__dg:null,__dh:false,__di:true,__dj:true,__dk:null,__dl:null,__dm:null,__dn:null,__do:null,__dp:null,__dq:null,__cX:null,__cY:null,__dr:null,__ds:null,__dt:null,__du:null,__dv:null,_scheduleChildrenUpdate:function(){if(this.__du){return;
}this.__du=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dm);
},_createDomElement:function(){return qx.bom.Element.create(this.__cW);
},__dw:function(){{};
var cY=this.__dt;

if(cY){var length=cY.length;
var da;

for(var i=0;i<length;i++){da=cY[i];

if(da.__dj&&da.__di&&!da.__dg){da.__dw();
}}}
if(!this.__dg){this.__dg=this._createDomElement();
this.__dg.$$element=this.$$hash;
this._copyData(false);

if(cY&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__du){this._syncChildren();
}}delete this.__du;
},_insertChildren:function(){var bn=this.__dt;
var length=bn.length;
var bp;

if(length>2){var bo=document.createDocumentFragment();

for(var i=0;i<length;i++){bp=bn[i];

if(bp.__dg&&bp.__di){bo.appendChild(bp.__dg);
}}this.__dg.appendChild(bo);
}else{var bo=this.__dg;

for(var i=0;i<length;i++){bp=bn[i];

if(bp.__dg&&bp.__di){bo.appendChild(bp.__dg);
}}}},_syncChildren:function(){var q;
var v=qx.core.ObjectRegistry;
var m=this.__dt;
var t=m.length;
var n;
var r;
var p=this.__dg;
var s=p.childNodes;
var o=0;
var u;
{};
for(var i=s.length-1;i>=0;i--){u=s[i];
r=v.fromHashCode(u.$$element);

if(!r||!r.__di||r.__dv!==this){p.removeChild(u);
{};
}}for(var i=0;i<t;i++){n=m[i];
if(n.__di){r=n.__dg;
u=s[o];

if(!r){continue;
}if(r!=u){if(u){p.insertBefore(r,u);
}else{p.appendChild(r);
}{};
}o++;
}}{};
},_copyData:function(bc){var bg=this.__dg;
var bf=this.__cY;

if(bf){var bd=qx.bom.element.Attribute;

for(var bh in bf){bd.set(bg,bh,bf[bh]);
}}var bf=this.__cX;

if(bf){var be=qx.bom.element.Style;

if(bc){be.setStyles(bg,bf);
}else{be.setCss(bg,be.compile(bf));
}}var bf=this.__dr;

if(bf){for(var bh in bf){this._applyProperty(bh,bf[bh]);
}}var bf=this.__ds;

if(bf){qx.event.Registration.getManager(bg).importListeners(bg,bf);
delete this.__ds;
}},_syncData:function(){var C=this.__dg;
var B=qx.bom.element.Attribute;
var z=qx.bom.element.Style;
var A=this.__dp;

if(A){var F=this.__cY;

if(F){var D;

for(var E in A){D=F[E];

if(D!==undefined){B.set(C,E,D);
}else{B.reset(C,E);
}}}this.__dp=null;
}var A=this.__do;

if(A){var F=this.__cX;

if(F){var w={};

for(var E in A){w[E]=F[E];
}z.setStyles(C,w);
}this.__do=null;
}var A=this.__dq;

if(A){var F=this.__dr;

if(F){var D;

for(var E in A){this._applyProperty(E,F[E]);
}}this.__dq=null;
}},__dx:function(){var cG=this;
while(cG){if(cG.__dh){return true;
}
if(!cG.__di||!cG.__dj){return false;
}cG=cG.__dv;
}return false;
},__dy:function(cF){if(cF.__dv===this){throw new Error("Child is already in: "+cF);
}
if(cF.__dh){throw new Error("Root elements could not be inserted into other ones.");
}if(cF.__dv){cF.__dv.remove(cF);
}cF.__dv=this;
if(!this.__dt){this.__dt=[];
}if(this.__dg){this._scheduleChildrenUpdate();
}},__dz:function(g){if(g.__dv!==this){throw new Error("Has no child: "+g);
}if(this.__dg){this._scheduleChildrenUpdate();
}delete g.__dv;
},__dA:function(bS){if(bS.__dv!==this){throw new Error("Has no child: "+bS);
}if(this.__dg){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dt||null;
},getChild:function(cK){var cL=this.__dt;
return cL&&cL[cK]||null;
},hasChildren:function(){var f=this.__dt;
return f&&f[0]!==undefined;
},indexOf:function(cH){var cI=this.__dt;
return cI?cI.indexOf(cH):-1;
},hasChild:function(a){var b=this.__dt;
return b&&b.indexOf(a)!==-1;
},add:function(bN){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dy(arguments[i]);
}this.__dt.push.apply(this.__dt,arguments);
}else{this.__dy(bN);
this.__dt.push(bN);
}return this;
},addAt:function(bI,bJ){this.__dy(bI);
qx.lang.Array.insertAt(this.__dt,bI,bJ);
return this;
},remove:function(dL){var dM=this.__dt;

if(!dM){return;
}
if(arguments[1]){var dN;

for(var i=0,l=arguments.length;i<l;i++){dN=arguments[i];
this.__dz(dN);
qx.lang.Array.remove(dM,dN);
}}else{this.__dz(dL);
qx.lang.Array.remove(dM,dL);
}return this;
},removeAt:function(h){var j=this.__dt;

if(!j){throw new Error("Has no children!");
}var k=j[h];

if(!k){throw new Error("Has no child at this position!");
}this.__dz(k);
qx.lang.Array.removeAt(this.__dt,h);
return this;
},removeAll:function(){var bb=this.__dt;

if(bb){for(var i=0,l=bb.length;i<l;i++){this.__dz(bb[i]);
}bb.length=0;
}return this;
},getParent:function(){return this.__dv||null;
},insertInto:function(parent,cD){parent.__dy(this);

if(cD==null){parent.__dt.push(this);
}else{qx.lang.Array.insertAt(this.__dt,this,cD);
}return this;
},insertBefore:function(cx){var parent=cx.__dv;
parent.__dy(this);
qx.lang.Array.insertBefore(parent.__dt,this,cx);
return this;
},insertAfter:function(bR){var parent=bR.__dv;
parent.__dy(this);
qx.lang.Array.insertAfter(parent.__dt,this,bR);
return this;
},moveTo:function(cP){var parent=this.__dv;
parent.__dA(this);
var cQ=parent.__dt.indexOf(this);

if(cQ===cP){throw new Error("Could not move to same index!");
}else if(cQ<cP){cP--;
}qx.lang.Array.removeAt(parent.__dt,cQ);
qx.lang.Array.insertAt(parent.__dt,this,cP);
return this;
},moveBefore:function(dI){var parent=this.__dv;
return this.moveTo(parent.__dt.indexOf(dI));
},moveAfter:function(dJ){var parent=this.__dv;
return this.moveTo(parent.__dt.indexOf(dJ)+1);
},free:function(){var parent=this.__dv;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dt){return;
}parent.__dz(this);
qx.lang.Array.remove(parent.__dt,this);
return this;
},getDomElement:function(){return this.__dg||null;
},getNodeName:function(){return this.__cW;
},setNodeName:function(name){this.__cW=name;
},setRoot:function(dO){this.__dh=dO;
},useMarkup:function(dG){if(this.__dg){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(dl,df)){var dH=document.createElement(dh);
}else{var dH=qx.bom.Element.getHelperElement();
}dH.innerHTML=dG;
this.useElement(dH.firstChild);
return this.__dg;
},useElement:function(d){if(this.__dg){throw new Error("Could not overwrite existing element!");
}this.__dg=d;
this.__dg.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ea=this.getAttribute(ds);

if(ea>=1){return true;
}var dY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ea>=0&&dY[this.__cW]){return true;
}return false;
},setSelectable:qx.core.Variant.select(dl,{"webkit":function(bs){this.setAttribute(dk,bs?di:dj);
this.setStyle(dy,bs?dr:de);
},"gecko":function(dU){this.setAttribute(dk,dU?di:dj);
this.setStyle(dq,dU?dF:dx);
},"default":function(dK){this.setAttribute(dk,dK?di:dj);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cW];
},include:function(){if(this.__di){return;
}delete this.__di;

if(this.__dv){this.__dv._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__di){return;
}this.__di=false;

if(this.__dv){this.__dv._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__di===true;
},show:function(){if(this.__dj){return;
}
if(this.__dg){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(dm);
}if(this.__dv){this.__dv._scheduleChildrenUpdate();
}delete this.__dj;
},hide:function(){if(!this.__dj){return;
}
if(this.__dg){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(dm);
}this.__dj=false;
},isVisible:function(){return this.__dj===true;
},scrollChildIntoViewX:function(co,cp,cq){var cr=this.__dg;
var cs=co.getDomElement();

if(cq!==false&&cr&&cr.offsetWidth&&cs&&cs.offsetWidth){qx.bom.element.Scroll.intoViewX(cs,cr,cp);
}else{this.__dk={element:co,align:cp};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dm);
}delete this.__dm;
},scrollChildIntoViewY:function(bi,bj,bk){var bl=this.__dg;
var bm=bi.getDomElement();

if(bk!==false&&bl&&bl.offsetWidth&&bm&&bm.offsetWidth){qx.bom.element.Scroll.intoViewY(bm,bl,bj);
}else{this.__dl={element:bi,align:bj};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dm);
}delete this.__dn;
},scrollToX:function(x,bX){var bY=this.__dg;

if(bX!==true&&bY&&bY.offsetWidth){bY.scrollLeft=x;
}else{this.__dm=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dm);
}delete this.__dk;
},getScrollX:function(){var cX=this.__dg;

if(cX){return cX.scrollLeft;
}return this.__dm||0;
},scrollToY:function(y,ca){var cb=this.__dg;

if(ca!==true&&cb&&cb.offsetWidth){cb.scrollTop=y;
}else{this.__dn=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dm);
}delete this.__dl;
},getScrollY:function(){var G=this.__dg;

if(G){return G.scrollTop;
}return this.__dn||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(dd,this.__dC,this);
},enableScrolling:function(){this.removeListener(dd,this.__dC,this);
},__dB:null,__dC:function(e){if(!this.__dB){this.__dB=true;
this.__dg.scrollTop=0;
this.__dg.scrollLeft=0;
delete this.__dB;
}},getTextSelection:function(){var bT=this.__dg;

if(bT){return qx.bom.Selection.get(bT);
}return null;
},getTextSelectionLength:function(){var cJ=this.__dg;

if(cJ){return qx.bom.Selection.getLength(cJ);
}return null;
},getTextSelectionStart:function(){var dX=this.__dg;

if(dX){return qx.bom.Selection.getStart(dX);
}return null;
},getTextSelectionEnd:function(){var c=this.__dg;

if(c){return qx.bom.Selection.getEnd(c);
}return null;
},setTextSelection:function(bC,bD){var bE=this.__dg;

if(bE){qx.bom.Selection.set(bE,bC,bD);
return;
}qx.html.Element.__da[this.toHashCode()]={element:this,start:bC,end:bD};
qx.html.Element._scheduleFlush(dm);
},clearTextSelection:function(){var bt=this.__dg;

if(bt){qx.bom.Selection.clear(bt);
}delete qx.html.Element.__da[this.toHashCode()];
},__dD:function(bu,bv){var bw=qx.html.Element._actions;
bw.push({type:bu,element:this,args:bv||[]});
qx.html.Element._scheduleFlush(dm);
},focus:function(){this.__dD(dt);
},blur:function(){this.__dD(dB);
},activate:function(){this.__dD(dC);
},deactivate:function(){this.__dD(dA);
},capture:function(eb){this.__dD(dz,[eb!==false]);
},releaseCapture:function(){this.__dD(du);
},setStyle:function(ct,cu,cv){if(!this.__cX){this.__cX={};
}
if(this.__cX[ct]==cu){return;
}
if(cu==null){delete this.__cX[ct];
}else{this.__cX[ct]=cu;
}if(this.__dg){if(cv){qx.bom.element.Style.set(this.__dg,ct,cu);
return this;
}if(!this.__do){this.__do={};
}this.__do[ct]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dm);
}return this;
},setStyles:function(bx,by){var bz=qx.bom.element.Style;

if(!this.__cX){this.__cX={};
}
if(this.__dg){if(!this.__do){this.__do={};
}
for(var bB in bx){var bA=bx[bB];

if(this.__cX[bB]==bA){continue;
}
if(bA==null){delete this.__cX[bB];
}else{this.__cX[bB]=bA;
}if(by){bz.set(this.__dg,bB,bA);
continue;
}this.__do[bB]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dm);
}else{for(var bB in bx){var bA=bx[bB];

if(this.__cX[bB]==bA){continue;
}
if(bA==null){delete this.__cX[bB];
}else{this.__cX[bB]=bA;
}}}return this;
},removeStyle:function(cB,cC){this.setStyle(cB,null,cC);
},getStyle:function(cw){return this.__cX?this.__cX[cw]:null;
},getAllStyles:function(){return this.__cX||null;
},setAttribute:function(cl,cm,cn){if(!this.__cY){this.__cY={};
}
if(this.__cY[cl]==cm){return;
}
if(cm==null){delete this.__cY[cl];
}else{this.__cY[cl]=cm;
}if(this.__dg){if(cn){qx.bom.element.Attribute.set(this.__dg,cl,cm);
return this;
}if(!this.__dp){this.__dp={};
}this.__dp[cl]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dm);
}return this;
},setAttributes:function(cy,cz){for(var cA in cy){this.setAttribute(cA,cy[cA],cz);
}return this;
},removeAttribute:function(bO,bP){this.setAttribute(bO,null,bP);
},getAttribute:function(bQ){return this.__cY?this.__cY[bQ]:null;
},_applyProperty:function(name,dc){},_setProperty:function(bK,bL,bM){if(!this.__dr){this.__dr={};
}
if(this.__dr[bK]==bL){return;
}
if(bL==null){delete this.__dr[bK];
}else{this.__dr[bK]=bL;
}if(this.__dg){if(bM){this._applyProperty(bK,bL);
return this;
}if(!this.__dq){this.__dq={};
}this.__dq[bK]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dm);
}return this;
},_removeProperty:function(cj,ck){this._setProperty(cj,null,ck);
},_getProperty:function(bU){var bV=this.__dr;

if(!bV){return null;
}var bW=bV[bU];
return bW==null?null:bW;
},addListener:function(cR,cS,self,cT){var cU;

if(this.$$disposed){return null;
}{};

if(this.__dg){return qx.event.Registration.addListener(this.__dg,cR,cS,self,cT);
}
if(!this.__ds){this.__ds={};
}
if(cT==null){cT=false;
}var cV=qx.event.Manager.getNextUniqueId();
var cW=cR+(cT?dD:dv)+cV;
this.__ds[cW]={type:cR,listener:cS,self:self,capture:cT,unique:cV};
return cW;
},removeListener:function(cc,cd,self,ce){var cf;

if(this.$$disposed){return null;
}{};

if(this.__dg){qx.event.Registration.removeListener(this.__dg,cc,cd,self,ce);
}else{var ch=this.__ds;
var cg;

if(ce==null){ce=false;
}
for(var ci in ch){cg=ch[ci];
if(cg.listener===cd&&cg.self===self&&cg.capture===ce&&cg.type===cc){delete ch[ci];
break;
}}}return this;
},removeListenerById:function(bH){if(this.$$disposed){return null;
}
if(this.__dg){qx.event.Registration.removeListenerById(this.__dg,bH);
}else{delete this.__ds[bH];
}return this;
},hasListener:function(dP,dQ){if(this.$$disposed){return false;
}
if(this.__dg){return qx.event.Registration.hasListener(this.__dg,dP,dQ);
}var dS=this.__ds;
var dR;

if(dQ==null){dQ=false;
}
for(var dT in dS){dR=dS[dT];
if(dR.capture===dQ&&dR.type===dP){return true;
}}return false;
}},defer:function(bF){bF.__dE=new qx.util.DeferredCall(bF.flush,bF);
},destruct:function(){var bq=this.__dg;

if(bq){qx.event.Registration.getManager(bq).removeAllListeners(bq);
bq.$$element=dg;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dv;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(dn);
this.__cY=this.__cX=this.__ds=this.__dr=this.__dp=this.__do=this.__dq=this.__dg=this.__dv=this.__dk=this.__dl=null;
}});
})();
(function(){var c="qx.ui.core.queue.Manager",b="useraction";
qx.Class.define(c,{statics:{__ky:false,__kz:{},__kA:0,MAX_RETRIES:10,scheduleFlush:function(a){var self=qx.ui.core.queue.Manager;
self.__kz[a]=true;

if(!self.__ky){self.__kD.schedule();
self.__ky=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__kB){return;
}self.__kB=true;
self.__kD.cancel();
var f=self.__kz;
self.__kC(function(){while(f.visibility||f.widget||f.appearance||f.layout||f.element){if(f.widget){delete f.widget;
qx.ui.core.queue.Widget.flush();
}
if(f.visibility){delete f.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(f.appearance){delete f.appearance;
qx.ui.core.queue.Appearance.flush();
}if(f.widget||f.visibility||f.appearance){continue;
}
if(f.layout){delete f.layout;
qx.ui.core.queue.Layout.flush();
}if(f.widget||f.visibility||f.appearance||f.layout){continue;
}
if(f.element){delete f.element;
qx.html.Element.flush();
}}},function(){self.__ky=false;
});
self.__kC(function(){if(f.dispose){delete f.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__kB=false;
});
self.__kA=0;
},__kC:function(g,h){var self=qx.ui.core.queue.Manager;

try{g();
}catch(e){{};
self.__ky=false;
self.__kB=false;
self.__kA+=1;

if(self.__kA<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__kA-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{h();
}}},defer:function(d){d.__kD=new qx.util.DeferredCall(d.flush);
qx.html.Element._scheduleFlush=d.scheduleFlush;
qx.event.Registration.addListener(window,b,d.flush);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(w){this._manager=w;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(u,event,v){return event.getBubbles();
},dispatchEvent:function(c,event,d){var parent=c;
var o=this._manager;
var l,s;
var h;
var n,q;
var p;
var r=[];
l=o.getListeners(c,d,true);
s=o.getListeners(c,d,false);

if(l){r.push(l);
}
if(s){r.push(s);
}var parent=this._getParent(c);
var f=[];
var e=[];
var g=[];
var m=[];
while(parent!=null){l=o.getListeners(parent,d,true);

if(l){g.push(l);
m.push(parent);
}s=o.getListeners(parent,d,false);

if(s){f.push(s);
e.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=g.length-1;i>=0;i--){p=m[i];
event.setCurrentTarget(p);
h=g[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(c);

for(var i=0,t=r.length;i<t;i++){h=r[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||c;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,t=f.length;i<t;i++){p=e[i];
event.setCurrentTarget(p);
h=f[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var bj="keydown",bi="qx.client",bh="keypress",bg="NumLock",bf="keyup",be="Enter",bd="0",bc="9",bb="-",ba="PageUp",cr="+",cq="PrintScreen",cp="gecko",co="A",cn="Z",cm="Left",cl="F5",ck="Down",cj="Up",ci="F11",bq="F6",br="useraction",bo="F3",bp="keyinput",bm="Insert",bn="F8",bk="End",bl="/",by="Delete",bz="*",bL="cmd",bH="F1",bT="F4",bO="Home",ce="F2",bY="F12",bD="PageDown",ch="F7",cg="Win",cf="F9",bC="F10",bF="Right",bG="text",bJ="Escape",bM="webkit",bP="5",bV="3",cb="Meta",bs="7",bt="CapsLock",bE="input",bS="Control",bR="Space",bQ="Tab",bX="Shift",bW="Pause",bN="Unidentified",bU="qx.event.handler.Keyboard",W="mshtml|webkit",ca="6",bu="off",bv="Apps",bI="4",X="Alt",Y="mshtml",bB="2",bw="Scroll",bx="1",bA="8",bK="autoComplete",cd=",",cc="Backspace";
qx.Class.define(bU,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(V){qx.core.Object.call(this);
this.__gz=V;
this.__gA=V.getWindow();
if(qx.core.Variant.isSet(bi,cp)){this.__gB=this.__gA;
}else{this.__gB=this.__gA.document.documentElement;
}this.__gC={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(K){if(this._identifierToKeyCodeMap[K]){return true;
}
if(K.length!=1){return false;
}
if(K>=bd&&K<=bc){return true;
}
if(K>=co&&K<=cn){return true;
}
switch(K){case cr:case bb:case bz:case bl:return true;
default:return false;
}}},members:{__gD:null,__gz:null,__gA:null,__gB:null,__gC:null,__gE:null,__gF:null,__gG:null,canHandleEvent:function(cK,cL){},registerEvent:function(S,T,U){},unregisterEvent:function(C,D,E){},_fireInputEvent:function(z,A){var B=this.__gH();
if(B&&B.offsetWidth!=0){var event=qx.event.Registration.createEvent(bp,qx.event.type.KeyInput,[z,B,A]);
this.__gz.dispatchEvent(B,event);
}if(this.__gA){qx.event.Registration.fireEvent(this.__gA,br,qx.event.type.Data,[bp]);
}},_fireSequenceEvent:function(cA,cB,cC){var cD=this.__gH();
var cE=cA.keyCode;
var event=qx.event.Registration.createEvent(cB,qx.event.type.KeySequence,[cA,cD,cC]);
this.__gz.dispatchEvent(cD,event);
if(qx.core.Variant.isSet(bi,W)){if(cB==bj&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cE)&&!this._emulateKeyPress[cE]){this._fireSequenceEvent(cA,bh,cC);
}}}if(this.__gA){qx.event.Registration.fireEvent(this.__gA,br,qx.event.type.Data,[cB]);
}},__gH:function(){var cF=this.__gz.getHandler(qx.event.handler.Focus);
var cG=cF.getActive();
if(!cG||cG.offsetWidth==0){cG=cF.getFocus();
}if(!cG||cG.offsetWidth==0){cG=this.__gz.getWindow().document.body;
}return cG;
},_initKeyObserver:function(){this.__gD=qx.lang.Function.listener(this.__gI,this);
this.__gG=qx.lang.Function.listener(this.__gK,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gB,bf,this.__gD);
Event.addNativeListener(this.__gB,bj,this.__gD);
Event.addNativeListener(this.__gB,bh,this.__gG);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gB,bf,this.__gD);
Event.removeNativeListener(this.__gB,bj,this.__gD);
Event.removeNativeListener(this.__gB,bh,this.__gG);

for(var cI in (this.__gF||{})){var cH=this.__gF[cI];
Event.removeNativeListener(cH.target,bh,cH.callback);
}delete (this.__gF);
},__gI:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bi,{"mshtml":function(g){g=window.event||g;
var j=g.keyCode;
var h=0;
var i=g.type;
if(!(this.__gC[j]==bj&&i==bj)){this._idealKeyHandler(j,h,i,g);
}if(i==bj){if(this._isNonPrintableKeyCode(j)||this._emulateKeyPress[j]){this._idealKeyHandler(j,h,bh,g);
}}this.__gC[j]=i;
},"gecko":function(l){var p=this._keyCodeFix[l.keyCode]||l.keyCode;
var n=0;
var o=l.type;
if(qx.bom.client.Platform.WIN){var m=p?this._keyCodeToIdentifier(p):this._charCodeToIdentifier(n);

if(!(this.__gC[m]==bj&&o==bj)){this._idealKeyHandler(p,n,o,l);
}this.__gC[m]=o;
}else{this._idealKeyHandler(p,n,o,l);
}this.__gJ(l.target,o,p);
},"webkit":function(L){var O=0;
var M=0;
var N=L.type;
if(qx.bom.client.Engine.VERSION<525.13){if(N==bf||N==bj){O=this._charCode2KeyCode[L.charCode]||L.keyCode;
}else{if(this._charCode2KeyCode[L.charCode]){O=this._charCode2KeyCode[L.charCode];
}else{M=L.charCode;
}}this._idealKeyHandler(O,M,N,L);
}else{O=L.keyCode;
this._idealKeyHandler(O,M,N,L);
if(N==bj){if(this._isNonPrintableKeyCode(O)||this._emulateKeyPress[O]){this._idealKeyHandler(O,M,bh,L);
}}this.__gC[O]=N;
}},"opera":function(cJ){this.__gE=cJ.keyCode;
this._idealKeyHandler(cJ.keyCode,0,cJ.type,cJ);
}})),__gJ:qx.core.Variant.select(bi,{"gecko":function(q,r,s){if(r===bj&&(s==33||s==34||s==38||s==40)&&q.type==bG&&q.tagName.toLowerCase()===bE&&q.getAttribute(bK)!==bu){if(!this.__gF){this.__gF={};
}var u=qx.core.ObjectRegistry.toHashCode(q);

if(this.__gF[u]){return;
}var self=this;
this.__gF[u]={target:q,callback:function(J){qx.bom.Event.stopPropagation(J);
self.__gK(J);
}};
var t=qx.event.GlobalError.observeMethod(this.__gF[u].callback);
qx.bom.Event.addNativeListener(q,bh,t);
}},"default":null}),__gK:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bi,{"mshtml":function(cw){cw=window.event||cw;

if(this._charCode2KeyCode[cw.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cw.keyCode],0,cw.type,cw);
}else{this._idealKeyHandler(0,cw.keyCode,cw.type,cw);
}},"gecko":function(cs){var cv=this._keyCodeFix[cs.keyCode]||cs.keyCode;
var ct=cs.charCode;
var cu=cs.type;
this._idealKeyHandler(cv,ct,cu,cs);
},"webkit":function(v){if(qx.bom.client.Engine.VERSION<525.13){var y=0;
var w=0;
var x=v.type;

if(x==bf||x==bj){y=this._charCode2KeyCode[v.charCode]||v.keyCode;
}else{if(this._charCode2KeyCode[v.charCode]){y=this._charCode2KeyCode[v.charCode];
}else{w=v.charCode;
}}this._idealKeyHandler(y,w,x,v);
}else{if(this._charCode2KeyCode[v.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[v.keyCode],0,v.type,v);
}else{this._idealKeyHandler(0,v.keyCode,v.type,v);
}}},"opera":function(cx){var cz=cx.keyCode;
var cy=cx.type;
if(cz!=this.__gE){this._idealKeyHandler(0,this.__gE,cy,cx);
}else{if(this._keyCodeToIdentifierMap[cx.keyCode]){this._idealKeyHandler(cx.keyCode,0,cx.type,cx);
}else{this._idealKeyHandler(0,cx.keyCode,cx.type,cx);
}}}})),_idealKeyHandler:function(b,c,d,e){var f;
if(b||(!b&&!c)){f=this._keyCodeToIdentifier(b);
this._fireSequenceEvent(e,d,f);
}else{f=this._charCodeToIdentifier(c);
this._fireSequenceEvent(e,bh,f);
this._fireInputEvent(e,c);
}},_specialCharCodeMap:{8:cc,9:bQ,13:be,27:bJ,32:bR},_emulateKeyPress:qx.core.Variant.select(bi,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bX,17:bS,18:X,20:bt,224:cb,37:cm,38:cj,39:bF,40:ck,33:ba,34:bD,35:bk,36:bO,45:bm,46:by,112:bH,113:ce,114:bo,115:bT,116:cl,117:bq,118:ch,119:bn,120:cf,121:bC,122:ci,123:bY,144:bg,44:cq,145:bw,19:bW,91:qx.bom.client.Platform.MAC?bL:cg,92:cg,93:qx.bom.client.Platform.MAC?bL:bv},_numpadToCharCode:{96:bd.charCodeAt(0),97:bx.charCodeAt(0),98:bB.charCodeAt(0),99:bV.charCodeAt(0),100:bI.charCodeAt(0),101:bP.charCodeAt(0),102:ca.charCodeAt(0),103:bs.charCodeAt(0),104:bA.charCodeAt(0),105:bc.charCodeAt(0),106:bz.charCodeAt(0),107:cr.charCodeAt(0),109:bb.charCodeAt(0),110:cd.charCodeAt(0),111:bl.charCodeAt(0)},_charCodeA:co.charCodeAt(0),_charCodeZ:cn.charCodeAt(0),_charCode0:bd.charCodeAt(0),_charCode9:bc.charCodeAt(0),_isNonPrintableKeyCode:function(F){return this._keyCodeToIdentifierMap[F]?true:false;
},_isIdentifiableKeyCode:function(R){if(R>=this._charCodeA&&R<=this._charCodeZ){return true;
}if(R>=this._charCode0&&R<=this._charCode9){return true;
}if(this._specialCharCodeMap[R]){return true;
}if(this._numpadToCharCode[R]){return true;
}if(this._isNonPrintableKeyCode(R)){return true;
}return false;
},_keyCodeToIdentifier:function(P){if(this._isIdentifiableKeyCode(P)){var Q=this._numpadToCharCode[P];

if(Q){return String.fromCharCode(Q);
}return (this._keyCodeToIdentifierMap[P]||this._specialCharCodeMap[P]||String.fromCharCode(P));
}else{return bN;
}},_charCodeToIdentifier:function(k){return this._specialCharCodeMap[k]||String.fromCharCode(k).toUpperCase();
},_identifierToKeyCode:function(a){return qx.event.handler.Keyboard._identifierToKeyCodeMap[a]||a.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gE=this.__gz=this.__gA=this.__gB=this.__gC=null;
},defer:function(G,H){qx.event.Registration.addHandler(G);
if(!G._identifierToKeyCodeMap){G._identifierToKeyCodeMap={};

for(var I in H._keyCodeToIdentifierMap){G._identifierToKeyCodeMap[H._keyCodeToIdentifierMap[I]]=parseInt(I,10);
}
for(var I in H._specialCharCodeMap){G._identifierToKeyCodeMap[H._specialCharCodeMap[I]]=parseInt(I,10);
}}
if(qx.core.Variant.isSet(bi,Y)){H._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bi,cp)){H._keyCodeFix={12:H._identifierToKeyCode(bg)};
}else if(qx.core.Variant.isSet(bi,bM)){if(qx.bom.client.Engine.VERSION<525.13){H._charCode2KeyCode={63289:H._identifierToKeyCode(bg),63276:H._identifierToKeyCode(ba),63277:H._identifierToKeyCode(bD),63275:H._identifierToKeyCode(bk),63273:H._identifierToKeyCode(bO),63234:H._identifierToKeyCode(cm),63232:H._identifierToKeyCode(cj),63235:H._identifierToKeyCode(bF),63233:H._identifierToKeyCode(ck),63272:H._identifierToKeyCode(by),63302:H._identifierToKeyCode(bm),63236:H._identifierToKeyCode(bH),63237:H._identifierToKeyCode(ce),63238:H._identifierToKeyCode(bo),63239:H._identifierToKeyCode(bT),63240:H._identifierToKeyCode(cl),63241:H._identifierToKeyCode(bq),63242:H._identifierToKeyCode(ch),63243:H._identifierToKeyCode(bn),63244:H._identifierToKeyCode(cf),63245:H._identifierToKeyCode(bC),63246:H._identifierToKeyCode(ci),63247:H._identifierToKeyCode(bY),63248:H._identifierToKeyCode(cq),3:H._identifierToKeyCode(be),12:H._identifierToKeyCode(bg),13:H._identifierToKeyCode(be)};
}else{H._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var P="qx.client",O="mouseup",N="click",M="mousedown",L="contextmenu",K="mousewheel",J="dblclick",I="mshtml",H="mouseover",G="mouseout",B="DOMMouseScroll",F="mousemove",E="on",A="mshtml|webkit|opera",z="useraction",D="gecko|webkit",C="qx.event.handler.Mouse";
qx.Class.define(C,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(ba){qx.core.Object.call(this);
this.__eu=ba;
this.__ev=ba.getWindow();
this.__ew=this.__ev.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ex:null,__ey:null,__ez:null,__eA:null,__eB:null,__eu:null,__ev:null,__ew:null,canHandleEvent:function(d,e){},registerEvent:qx.bom.client.System.IPHONE?
function(w,x,y){w[E+x]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(l,m,n){l[E+m]=undefined;
}:qx.lang.Function.returnNull,__eC:function(W,X,Y){if(!Y){Y=W.target||W.srcElement;
}if(Y&&Y.nodeType){qx.event.Registration.fireEvent(Y,X||W.type,X==K?qx.event.type.MouseWheel:qx.event.type.Mouse,[W,Y,null,true,true]);
}qx.event.Registration.fireEvent(this.__ev,z,qx.event.type.Data,[X||W.type]);
},_initButtonObserver:function(){this.__ex=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ew,M,this.__ex);
Event.addNativeListener(this.__ew,O,this.__ex);
Event.addNativeListener(this.__ew,N,this.__ex);
Event.addNativeListener(this.__ew,J,this.__ex);
Event.addNativeListener(this.__ew,L,this.__ex);
},_initMoveObserver:function(){this.__ey=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ew,F,this.__ey);
Event.addNativeListener(this.__ew,H,this.__ey);
Event.addNativeListener(this.__ew,G,this.__ey);
},_initWheelObserver:function(){this.__ez=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var a=qx.core.Variant.isSet(P,A)?K:B;
var b=qx.core.Variant.isSet(P,I)?this.__ew:this.__ev;
Event.addNativeListener(b,a,this.__ez);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ew,M,this.__ex);
Event.removeNativeListener(this.__ew,O,this.__ex);
Event.removeNativeListener(this.__ew,N,this.__ex);
Event.removeNativeListener(this.__ew,J,this.__ex);
Event.removeNativeListener(this.__ew,L,this.__ex);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ew,F,this.__ey);
Event.removeNativeListener(this.__ew,H,this.__ey);
Event.removeNativeListener(this.__ew,G,this.__ey);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var U=qx.core.Variant.isSet(P,A)?K:B;
var V=qx.core.Variant.isSet(P,I)?this.__ew:this.__ev;
Event.removeNativeListener(V,U,this.__ez);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(T){this.__eC(T);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(f){var g=f.type;
var h=f.target||f.srcElement;
if(qx.core.Variant.isSet(P,D)){if(h&&h.nodeType==3){h=h.parentNode;
}}
if(this.__eD){this.__eD(f,g,h);
}
if(this.__eF){this.__eF(f,g,h);
}this.__eC(f,g,h);

if(this.__eE){this.__eE(f,g,h);
}
if(this.__eG){this.__eG(f,g,h);
}this.__eA=g;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(c){this.__eC(c,K);
}),__eD:qx.core.Variant.select(P,{"webkit":function(t,u,v){if(qx.bom.client.Engine.VERSION<530){if(u==L){this.__eC(t,O,v);
}}},"default":null}),__eE:qx.core.Variant.select(P,{"opera":function(i,j,k){if(j==O&&i.button==2){this.__eC(i,L,k);
}},"default":null}),__eF:qx.core.Variant.select(P,{"mshtml":function(Q,R,S){if(R==O&&this.__eA==N){this.__eC(Q,M,S);
}else if(R==J){this.__eC(Q,N,S);
}},"default":null}),__eG:qx.core.Variant.select(P,{"mshtml":null,"default":function(p,q,r){switch(q){case M:this.__eB=r;
break;
case O:if(r!==this.__eB){var s=qx.dom.Hierarchy.getCommonParent(r,this.__eB);
this.__eC(p,N,s);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eu=this.__ev=this.__ew=this.__eB=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(h,i){},registerEvent:function(b,c,d){},unregisterEvent:function(e,f,g){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var O="alias",N="copy",M="blur",L="mouseout",K="keydown",J="Ctrl",I="Shift",H="mousemove",G="move",F="mouseover",bf="Alt",be="keyup",bd="mouseup",bc="dragend",bb="on",ba="mousedown",Y="qxDraggable",X="drag",W="drop",V="qxDroppable",T="qx.event.handler.DragDrop",U="droprequest",R="dragstart",S="dragchange",P="dragleave",Q="dragover";
qx.Class.define(T,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){qx.core.Object.call(this);
this.__iO=i;
this.__iP=i.getWindow().document.documentElement;
this.__iO.addListener(this.__iP,ba,this._onMouseDown,this);
this.__jc();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__iO:null,__iP:null,__iQ:null,__iR:null,__iS:null,__iT:null,__iU:null,__iV:null,__iW:null,__iX:null,__iY:false,__ja:0,__jb:0,canHandleEvent:function(o,p){},registerEvent:function(k,l,m){},unregisterEvent:function(z,A,B){},addType:function(bg){this.__iS[bg]=true;
},addAction:function(r){this.__iT[r]=true;
},supportsType:function(bj){return !!this.__iS[bj];
},supportsAction:function(c){return !!this.__iT[c];
},getData:function(d){if(!this.__jj||!this.__iQ){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__iS[d]){throw new Error("Unsupported data type: "+d+"!");
}
if(!this.__iV[d]){this.__iW=d;
this.__je(U,this.__iR,this.__iQ,false);
}
if(!this.__iV[d]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__iV[d]||null;
},getCurrentAction:function(){return this.__iX;
},addData:function(g,h){this.__iV[g]=h;
},getCurrentType:function(){return this.__iW;
},isSessionActive:function(){return this.__iY;
},__jc:function(){this.__iS={};
this.__iT={};
this.__iU={};
this.__iV={};
},__jd:function(){if(this.__iR==null){return;
}var E=this.__iT;
var C=this.__iU;
var D=null;

if(this.__jj){if(C.Shift&&C.Ctrl&&E.alias){D=O;
}else if(C.Shift&&C.Alt&&E.copy){D=N;
}else if(C.Shift&&E.move){D=G;
}else if(C.Alt&&E.alias){D=O;
}else if(C.Ctrl&&E.copy){D=N;
}else if(E.move){D=G;
}else if(E.copy){D=N;
}else if(E.alias){D=O;
}}
if(D!=this.__iX){this.__iX=D;
this.__je(S,this.__iR,this.__iQ,false);
}},__je:function(s,t,u,v,w){var y=qx.event.Registration;
var x=y.createEvent(s,qx.event.type.Drag,[v,w]);

if(t!==u){x.setRelatedTarget(u);
}return y.dispatchEvent(t,x);
},__jf:function(j){while(j&&j.nodeType==1){if(j.getAttribute(Y)==bb){return j;
}j=j.parentNode;
}return null;
},__jg:function(a){while(a&&a.nodeType==1){if(a.getAttribute(V)==bb){return a;
}a=a.parentNode;
}return null;
},__jh:function(){this.__iR=null;
this.__iO.removeListener(this.__iP,H,this._onMouseMove,this,true);
this.__iO.removeListener(this.__iP,bd,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,M,this._onWindowBlur,this);
this.__jc();
},__ji:function(){if(this.__iY){this.__iO.removeListener(this.__iP,F,this._onMouseOver,this,true);
this.__iO.removeListener(this.__iP,L,this._onMouseOut,this,true);
this.__iO.removeListener(this.__iP,K,this._onKeyDown,this,true);
this.__iO.removeListener(this.__iP,be,this._onKeyUp,this,true);
this.__je(bc,this.__iR,this.__iQ,false);
this.__iY=false;
}this.__jj=false;
this.__iQ=null;
this.__jh();
},__jj:false,_onWindowBlur:function(e){this.__ji();
},_onKeyDown:function(e){var b=e.getKeyIdentifier();

switch(b){case bf:case J:case I:if(!this.__iU[b]){this.__iU[b]=true;
this.__jd();
}}},_onKeyUp:function(e){var bk=e.getKeyIdentifier();

switch(bk){case bf:case J:case I:if(this.__iU[bk]){this.__iU[bk]=false;
this.__jd();
}}},_onMouseDown:function(e){if(this.__iY){return;
}var q=this.__jf(e.getTarget());

if(q){this.__ja=e.getDocumentLeft();
this.__jb=e.getDocumentTop();
this.__iR=q;
this.__iO.addListener(this.__iP,H,this._onMouseMove,this,true);
this.__iO.addListener(this.__iP,bd,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,M,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__jj){this.__je(W,this.__iQ,this.__iR,false,e);
}if(this.__iY){e.stopPropagation();
}this.__ji();
},_onMouseMove:function(e){if(this.__iY){if(!this.__je(X,this.__iR,this.__iQ,true,e)){this.__ji();
}}else{if(Math.abs(e.getDocumentLeft()-this.__ja)>3||Math.abs(e.getDocumentTop()-this.__jb)>3){if(this.__je(R,this.__iR,this.__iQ,true,e)){this.__iY=true;
this.__iO.addListener(this.__iP,F,this._onMouseOver,this,true);
this.__iO.addListener(this.__iP,L,this._onMouseOut,this,true);
this.__iO.addListener(this.__iP,K,this._onKeyDown,this,true);
this.__iO.addListener(this.__iP,be,this._onKeyUp,this,true);
var n=this.__iU;
n.Ctrl=e.isCtrlPressed();
n.Shift=e.isShiftPressed();
n.Alt=e.isAltPressed();
this.__jd();
}else{this.__je(bc,this.__iR,this.__iQ,false);
this.__jh();
}}}},_onMouseOver:function(e){var bh=e.getTarget();
var bi=this.__jg(bh);

if(bi&&bi!=this.__iQ){this.__jj=this.__je(Q,bi,this.__iR,true,e);
this.__iQ=bi;
this.__jd();
}},_onMouseOut:function(e){var bm=this.__jg(e.getTarget());
var bl=this.__jg(e.getRelatedTarget());

if(bm&&bm!==bl&&bm==this.__iQ){this.__je(P,this.__iQ,bl,false,e);
this.__iQ=null;
this.__jj=false;
qx.event.Timer.once(this.__jd,this,0);
}}},destruct:function(){this.__iR=this.__iQ=this.__iO=this.__iP=this.__iS=this.__iT=this.__iU=this.__iV=null;
},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._manager=n;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(u,v){},registerEvent:function(o,p,q){var t=qx.core.ObjectRegistry.toHashCode(o);
var r=t+b+p;
var s=qx.lang.Function.listener(this._onNative,this,r);
qx.bom.Event.addNativeListener(o,p,s);
this._registeredEvents[r]={element:o,type:p,listener:s};
},unregisterEvent:function(c,d,e){var h=this._registeredEvents;

if(!h){return;
}var i=qx.core.ObjectRegistry.toHashCode(c);
var f=i+b+d;
var g=this._registeredEvents[f];

if(g){qx.bom.Event.removeNativeListener(c,d,g.listener);
}delete this._registeredEvents[f];
},_onNative:qx.event.GlobalError.observeMethod(function(w,x){var z=this._registeredEvents;

if(!z){return;
}var y=z[x];
qx.event.Registration.fireNonBubblingEvent(y.element,y.type,qx.event.type.Native,[w]);
})},destruct:function(){var k;
var l=this._registeredEvents;

for(var m in l){k=l[m];
qx.bom.Event.removeNativeListener(k.element,k.type,k.listener);
}this._manager=this._registeredEvents=null;
},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){qx.core.Object.call(this);
this.__co=i;
this.__cp={};
qx.event.handler.Appear.__cq[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__cq:{},refresh:function(){var k=this.__cq;

for(var l in k){k[l].refresh();
}}},members:{__co:null,__cp:null,canHandleEvent:function(w,x){},registerEvent:function(r,s,t){var u=qx.core.ObjectRegistry.toHashCode(r)+s;
var v=this.__cp;

if(v&&!v[u]){v[u]=r;
r.$$displayed=r.offsetWidth>0;
}},unregisterEvent:function(m,n,o){var p=qx.core.ObjectRegistry.toHashCode(m)+n;
var q=this.__cp;

if(!q){return;
}
if(q[p]){delete q[p];
}},refresh:function(){var g=this.__cp;
var h;

for(var f in g){h=g[f];
var d=h.offsetWidth>0;

if((!!h.$$displayed)!==d){h.$$displayed=d;
var e=qx.event.Registration.createEvent(d?a:b);
this.__co.dispatchEvent(h,e);
}}}},destruct:function(){this.__co=this.__cp=null;
delete qx.event.handler.Appear.__cq[this.$$hash];
},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var o="mshtml",n="",m="qx.client",k=">",h=" ",g="<",f="='",e="none",d="qx.bom.Element",c="' ",a="div",b="></";
qx.Class.define(d,{statics:{__kc:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__kd:{},getHelperElement:function(p){if(!p){p=window;
}var r=p.location.href;

if(!qx.bom.Element.__kd[r]){var q=qx.bom.Element.__kd[r]=p.document.createElement(a);
if(qx.bom.client.Engine.WEBKIT){q.style.display=e;
p.document.body.appendChild(q);
}}return qx.bom.Element.__kd[r];
},create:function(name,Q,R){if(!R){R=window;
}
if(!name){throw new Error("The tag name is missing!");
}var T=this.__kc;
var S=n;

for(var V in Q){if(T[V]){S+=V+f+Q[V]+c;
}}var W;
if(S!=n){if(qx.bom.client.Engine.MSHTML){W=R.document.createElement(g+name+h+S+k);
}else{var U=qx.bom.Element.getHelperElement(R);
U.innerHTML=g+name+h+S+b+name+k;
W=U.firstChild;
}}else{W=R.document.createElement(name);
}
for(var V in Q){if(!T[V]){qx.bom.element.Attribute.set(W,V,Q[V]);
}}return W;
},empty:function(bf){return bf.innerHTML=n;
},addListener:function(A,B,C,self,D){return qx.event.Registration.addListener(A,B,C,self,D);
},removeListener:function(bb,bc,bd,self,be){return qx.event.Registration.removeListener(bb,bc,bd,self,be);
},removeListenerById:function(x,y){return qx.event.Registration.removeListenerById(x,y);
},hasListener:function(s,t,u){return qx.event.Registration.hasListener(s,t,u);
},focus:function(ba){qx.event.Registration.getManager(ba).getHandler(qx.event.handler.Focus).focus(ba);
},blur:function(z){qx.event.Registration.getManager(z).getHandler(qx.event.handler.Focus).blur(z);
},activate:function(w){qx.event.Registration.getManager(w).getHandler(qx.event.handler.Focus).activate(w);
},deactivate:function(v){qx.event.Registration.getManager(v).getHandler(qx.event.handler.Focus).deactivate(v);
},capture:function(X,Y){qx.event.Registration.getManager(X).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(X,Y);
},releaseCapture:function(bg){qx.event.Registration.getManager(bg).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(bg);
},clone:function(E,F){var I;

if(F||(qx.core.Variant.isSet(m,o)&&!qx.xml.Document.isXmlDocument(E))){var M=qx.event.Registration.getManager(E);
var G=qx.dom.Hierarchy.getDescendants(E);
G.push(E);
}if(qx.core.Variant.isSet(m,o)){for(var i=0,l=G.length;i<l;i++){M.toggleAttachedEvents(G[i],false);
}}var I=E.cloneNode(true);
if(qx.core.Variant.isSet(m,o)){for(var i=0,l=G.length;i<l;i++){M.toggleAttachedEvents(G[i],true);
}}if(F===true){var P=qx.dom.Hierarchy.getDescendants(I);
P.push(I);
var H,K,O,J;

for(var i=0,N=G.length;i<N;i++){O=G[i];
H=M.serializeListeners(O);

if(H.length>0){K=P[i];

for(var j=0,L=H.length;j<L;j++){J=H[j];
M.addListener(K,J.type,J.handler,J.self,J.capture);
}}}}return I;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var c=0;
var b=this._native;

if(b.shiftKey){c|=qx.event.type.Dom.SHIFT_MASK;
}
if(b.ctrlKey){c|=qx.event.type.Dom.CTRL_MASK;
}
if(b.altKey){c|=qx.event.type.Dom.ALT_MASK;
}
if(b.metaKey){c|=qx.event.type.Dom.META_MASK;
}return c;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var l="qx.client",k="blur",j="focus",i="mousedown",h="on",g="mouseup",f="DOMFocusOut",d="DOMFocusIn",c="selectstart",b="onmousedown",F="onfocusout",E="onfocusin",D="onmouseup",C="onselectstart",B="draggesture",A="qx.event.handler.Focus",z="_applyFocus",y="deactivate",x="textarea",w="_applyActive",s="input",t="focusin",q="qxSelectable",r="tabIndex",o="off",p="activate",m="mshtml",n="focusout",u="qxKeepFocus",v="qxKeepActive";
qx.Class.define(A,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(I){qx.core.Object.call(this);
this._manager=I;
this._window=I.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:w,nullable:true},focus:{apply:z,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__jm:null,__jn:null,__jo:null,__jp:null,__jq:null,__jr:null,__js:null,__jt:null,__ju:null,__jv:null,canHandleEvent:function(bC,bD){},registerEvent:function(O,P,Q){},unregisterEvent:function(bw,bx,by){},focus:function(G){if(qx.core.Variant.isSet(l,m)){window.setTimeout(function(){try{G.focus();
}catch(bE){}},0);
}else{try{G.focus();
}catch(bg){}}this.setFocus(G);
this.setActive(G);
},activate:function(bJ){this.setActive(bJ);
},blur:function(bH){try{bH.blur();
}catch(bm){}
if(this.getActive()===bH){this.resetActive();
}
if(this.getFocus()===bH){this.resetFocus();
}},deactivate:function(N){if(this.getActive()===N){this.resetActive();
}},tryActivate:function(bu){var bv=this.__jK(bu);

if(bv){this.setActive(bv);
}},__jw:function(bn,bo,bp,bq){var bs=qx.event.Registration;
var br=bs.createEvent(bp,qx.event.type.Focus,[bn,bo,bq]);
bs.dispatchEvent(bn,br);
},_windowFocused:true,__jx:function(){if(this._windowFocused){this._windowFocused=false;
this.__jw(this._window,null,k,false);
}},__jy:function(){if(!this._windowFocused){this._windowFocused=true;
this.__jw(this._window,null,j,false);
}},_initObserver:qx.core.Variant.select(l,{"gecko":function(){this.__jm=qx.lang.Function.listener(this.__jE,this);
this.__jn=qx.lang.Function.listener(this.__jF,this);
this.__jo=qx.lang.Function.listener(this.__jD,this);
this.__jp=qx.lang.Function.listener(this.__jC,this);
this.__jq=qx.lang.Function.listener(this.__jz,this);
this._document.addEventListener(i,this.__jm,true);
this._document.addEventListener(g,this.__jn,true);
this._window.addEventListener(j,this.__jo,true);
this._window.addEventListener(k,this.__jp,true);
this._window.addEventListener(B,this.__jq,true);
},"mshtml":function(){this.__jm=qx.lang.Function.listener(this.__jE,this);
this.__jn=qx.lang.Function.listener(this.__jF,this);
this.__js=qx.lang.Function.listener(this.__jA,this);
this.__jt=qx.lang.Function.listener(this.__jB,this);
this.__jr=qx.lang.Function.listener(this.__jH,this);
this._document.attachEvent(b,this.__jm);
this._document.attachEvent(D,this.__jn);
this._document.attachEvent(E,this.__js);
this._document.attachEvent(F,this.__jt);
this._document.attachEvent(C,this.__jr);
},"webkit":function(){this.__jm=qx.lang.Function.listener(this.__jE,this);
this.__jn=qx.lang.Function.listener(this.__jF,this);
this.__jt=qx.lang.Function.listener(this.__jB,this);
this.__jo=qx.lang.Function.listener(this.__jD,this);
this.__jp=qx.lang.Function.listener(this.__jC,this);
this.__jr=qx.lang.Function.listener(this.__jH,this);
this._document.addEventListener(i,this.__jm,true);
this._document.addEventListener(g,this.__jn,true);
this._document.addEventListener(c,this.__jr,false);
this._window.addEventListener(f,this.__jt,true);
this._window.addEventListener(j,this.__jo,true);
this._window.addEventListener(k,this.__jp,true);
},"opera":function(){this.__jm=qx.lang.Function.listener(this.__jE,this);
this.__jn=qx.lang.Function.listener(this.__jF,this);
this.__js=qx.lang.Function.listener(this.__jA,this);
this.__jt=qx.lang.Function.listener(this.__jB,this);
this._document.addEventListener(i,this.__jm,true);
this._document.addEventListener(g,this.__jn,true);
this._window.addEventListener(d,this.__js,true);
this._window.addEventListener(f,this.__jt,true);
}}),_stopObserver:qx.core.Variant.select(l,{"gecko":function(){this._document.removeEventListener(i,this.__jm,true);
this._document.removeEventListener(g,this.__jn,true);
this._window.removeEventListener(j,this.__jo,true);
this._window.removeEventListener(k,this.__jp,true);
this._window.removeEventListener(B,this.__jq,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,b,this.__jm);
qx.bom.Event.removeNativeListener(this._document,D,this.__jn);
qx.bom.Event.removeNativeListener(this._document,E,this.__js);
qx.bom.Event.removeNativeListener(this._document,F,this.__jt);
qx.bom.Event.removeNativeListener(this._document,C,this.__jr);
},"webkit":function(){this._document.removeEventListener(i,this.__jm,true);
this._document.removeEventListener(c,this.__jr,false);
this._window.removeEventListener(d,this.__js,true);
this._window.removeEventListener(f,this.__jt,true);
this._window.removeEventListener(j,this.__jo,true);
this._window.removeEventListener(k,this.__jp,true);
},"opera":function(){this._document.removeEventListener(i,this.__jm,true);
this._window.removeEventListener(d,this.__js,true);
this._window.removeEventListener(f,this.__jt,true);
this._window.removeEventListener(j,this.__jo,true);
this._window.removeEventListener(k,this.__jp,true);
}}),__jz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){if(!this.__jL(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__jA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(e){this.__jy();
var bN=e.srcElement;
var bM=this.__jJ(bN);

if(bM){this.setFocus(bM);
}this.tryActivate(bN);
},"opera":function(e){var bt=e.target;

if(bt==this._document||bt==this._window){this.__jy();

if(this.__ju){this.setFocus(this.__ju);
delete this.__ju;
}
if(this.__jv){this.setActive(this.__jv);
delete this.__jv;
}}else{this.setFocus(bt);
this.tryActivate(bt);
if(!this.__jL(bt)){bt.selectionStart=0;
bt.selectionEnd=0;
}}},"default":null})),__jB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(e){if(!e.toElement){this.__jx();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bF=e.target;

if(bF===this.getFocus()){this.resetFocus();
}
if(bF===this.getActive()){this.resetActive();
}},"opera":function(e){var R=e.target;

if(R==this._document){this.__jx();
this.__ju=this.getFocus();
this.__jv=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(R===this.getFocus()){this.resetFocus();
}
if(R===this.getActive()){this.resetActive();
}}},"default":null})),__jC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__jx();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__jx();
this.__ju=this.getFocus();
this.__jv=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__jD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){var bI=e.target;

if(bI===this._window||bI===this._document){this.__jy();
bI=this._body;
}this.setFocus(bI);
this.tryActivate(bI);
},"webkit":function(e){var bf=e.target;

if(bf===this._window||bf===this._document){this.__jy();

if(this.__ju){this.setFocus(this.__ju);
delete this.__ju;
}
if(this.__jv){this.setActive(this.__jv);
delete this.__jv;
}}else{this.setFocus(bf);
this.tryActivate(bf);
}},"default":null})),__jE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"gecko":function(e){var W=this.__jJ(e.target);

if(!W){qx.bom.Event.preventDefault(e);
}else if(W===this._body){this.setFocus(W);
}},"mshtml":function(e){var bl=e.srcElement;
var bk=this.__jJ(bl);

if(bk){if(!this.__jL(bl)){bl.unselectable=h;
try{document.selection.empty();
}catch(e){}try{bk.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__jL(bl)){bl.unselectable=h;
}}},"webkit":function(e){var bi=e.target;
var bh=this.__jJ(bi);

if(bh){this.setFocus(bh);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bB=e.target;
var bz=this.__jJ(bB);

if(!this.__jL(bB)){qx.bom.Event.preventDefault(e);
if(bz){var bA=this.getFocus();

if(bA&&bA.selectionEnd){bA.selectionStart=0;
bA.selectionEnd=0;
bA.blur();
}if(bz){this.setFocus(bz);
}}}else if(bz){this.setFocus(bz);
}},"default":null})),__jF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(e){var H=e.srcElement;

if(H.unselectable){H.unselectable=o;
}this.tryActivate(this.__jG(H));
},"gecko":function(e){var M=e.target;

while(M&&M.offsetWidth===undefined){M=M.parentNode;
}
if(M){this.tryActivate(M);
}},"webkit|opera":function(e){this.tryActivate(this.__jG(e.target));
},"default":null})),__jG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml|webkit":function(S){var T=this.getFocus();

if(T&&S!=T&&(T.nodeName.toLowerCase()===s||T.nodeName.toLowerCase()===x)){S=T;
}return S;
},"default":function(a){return a;
}})),__jH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml|webkit":function(e){var bj=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__jL(bj)){qx.bom.Event.preventDefault(e);
}},"default":null})),__jI:function(J){var K=qx.bom.element.Attribute.get(J,r);

if(K>=1){return true;
}var L=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(K>=0&&L[J.tagName]){return true;
}return false;
},__jJ:function(bG){while(bG&&bG.nodeType===1){if(bG.getAttribute(u)==h){return null;
}
if(this.__jI(bG)){return bG;
}bG=bG.parentNode;
}return this._body;
},__jK:function(U){var V=U;

while(U&&U.nodeType===1){if(U.getAttribute(v)==h){return null;
}U=U.parentNode;
}return V;
},__jL:function(bK){while(bK&&bK.nodeType===1){var bL=bK.getAttribute(q);

if(bL!=null){return bL===h;
}bK=bK.parentNode;
}return true;
},_applyActive:function(X,Y){if(Y){this.__jw(Y,X,y,true);
}
if(X){this.__jw(X,Y,p,true);
}},_applyFocus:function(bd,be){if(be){this.__jw(be,bd,n,true);
}
if(bd){this.__jw(bd,be,t,true);
}if(be){this.__jw(be,bd,k,false);
}
if(bd){this.__jw(bd,be,j,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__jM=null;
},defer:function(ba){qx.event.Registration.addHandler(ba);
var bb=ba.FOCUSABLE_ELEMENTS;

for(var bc in bb){bb[bc.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__gL:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(J){var K=[];
var M=this.__gL.runtime;

for(var L in J){if(!M[L]){K.push(L,t,J[L],y);
}}return K.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(D,name){var F=this.__gL;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__gL;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(A,name,B){var C=this.__gL;
name=C.names[name]||name;
if(C.bools[name]){B=!!B;
}if(C.property[name]&&(!(A[name]===undefined)||C.qxProperties[name])){if(B==null){if(C.removeableProperties[name]){A.removeAttribute(name);
return;
}else if(typeof C.propertyDefault[name]!==i){B=C.propertyDefault[name];
}}A[name]=B;
}else{if(B===true){A.setAttribute(name,name);
}else if(B===false||B===null){A.removeAttribute(name);
}else{A.setAttribute(name,B);
}}},reset:function(z,name){this.set(z,name,null);
}}});
})();
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(k,l,m,n,o){qx.event.type.Dom.prototype.init.call(this,k,l,m,n,o);

if(!m){this._relatedTarget=qx.bom.Event.getRelatedTarget(k);
}return this;
},_cloneNativeEvent:function(p,q){var q=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,p,q);
q.button=p.button;
q.clientX=p.clientX;
q.clientY=p.clientY;
q.pageX=p.pageX;
q.pageY=p.pageY;
q.screenX=p.screenX;
q.screenY=p.screenY;
q.wheelDelta=p.wheelDelta;
q.detail=p.detail;
q.srcElement=p.srcElement;
return q;
},__jY:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__jY[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(r);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(j);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(q){if(qx.bom.client.Engine.VERSION<9.5){return (q||window).document.body.clientWidth;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}},"webkit":function(l){if(qx.bom.client.Engine.VERSION<523.15){return (l||window).innerWidth;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientWidth:m.body.clientWidth;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientWidth:o.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(e){if(qx.bom.client.Engine.VERSION<9.5){return (e||window).document.body.clientHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerHeight;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientHeight:t.body.clientHeight;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientHeight:i.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollLeft||b.body.scrollLeft;
},"default":function(g){return (g||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(j){var k=(j||window).document;
return k.documentElement.scrollTop||k.body.scrollTop;
},"default":function(p){return (p||window).pageYOffset;
}})}});
})();
(function(){var g="CSS1Compat",f="position:absolute;width:0;height:0;width:1",e="qx.bom.Document",d="1px",c="qx.client",b="div";
qx.Class.define(e,{statics:{isQuirksMode:qx.core.Variant.select(c,{"mshtml":function(m){if(qx.bom.client.Engine.VERSION>=8){return (m||window).document.documentMode===5;
}else{return (m||window).document.compatMode!==g;
}},"webkit":function(h){if(document.compatMode===undefined){var i=(h||window).document.createElement(b);
i.style.cssText=f;
return i.style.width===d?true:false;
}else{return (h||window).document.compatMode!==g;
}},"default":function(a){return (a||window).document.compatMode!==g;
}}),isStandardMode:function(q){return !this.isQuirksMode(q);
},getWidth:function(j){var k=(j||window).document;
var l=qx.bom.Viewport.getWidth(j);
var scroll=this.isStandardMode(j)?k.documentElement.scrollWidth:k.body.scrollWidth;
return Math.max(scroll,l);
},getHeight:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getHeight(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollHeight:o.body.scrollHeight;
return Math.max(scroll,p);
}}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__kT:function(A){var B=navigator.userAgent;
var D=new RegExp(t+A+e);
var E=B.match(D);

if(!E){return;
}var name=E[1].toLowerCase();
var C=E[3];
if(B.match(/Version(\/| )([0-9]+\.[0-9])/)){C=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(B.indexOf(b)!==-1||B.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
C=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=C;
this.VERSION=parseFloat(C,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(a){a.__kT(p);
},"gecko":function(z){z.__kT(l);
},"mshtml":function(G){G.__kT(w);
},"opera":function(F){F.__kT(q);
}})});
})();
(function(){var n="qx.client",m="qx.dom.Hierarchy",l="previousSibling",k="*",j="nextSibling",i="parentNode";
qx.Class.define(m,{statics:{getNodeIndex:function(o){var p=0;

while(o&&(o=o.previousSibling)){p++;
}return p;
},getElementIndex:function(b){var c=0;
var d=qx.dom.Node.ELEMENT;

while(b&&(b=b.previousSibling)){if(b.nodeType==d){c++;
}}return c;
},getNextElementSibling:function(e){while(e&&(e=e.nextSibling)&&!qx.dom.Node.isElement(e)){continue;
}return e||null;
},getPreviousElementSibling:function(s){while(s&&(s=s.previousSibling)&&!qx.dom.Node.isElement(s)){continue;
}return s||null;
},contains:qx.core.Variant.select(n,{"webkit|mshtml|opera":function(f,g){if(qx.dom.Node.isDocument(f)){var h=qx.dom.Node.getDocument(g);
return f&&h==f;
}else if(qx.dom.Node.isDocument(g)){return false;
}else{return f.contains(g);
}},"gecko":function(t,u){return !!(t.compareDocumentPosition(u)&16);
},"default":function(q,r){while(r){if(q==r){return true;
}r=r.parentNode;
}return false;
}}),isRendered:function(O){if(!O.parentNode||!O.offsetParent){return false;
}var P=O.ownerDocument||O.document;
if(P.body.contains){return P.body.contains(O);
}if(P.compareDocumentPosition){return !!(P.compareDocumentPosition(O)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(z,A){return this.contains(A,z);
},getCommonParent:qx.core.Variant.select(n,{"mshtml|opera":function(w,x){if(w===x){return w;
}
while(w&&qx.dom.Node.isElement(w)){if(w.contains(x)){return w;
}w=w.parentNode;
}return null;
},"default":function(Q,R){if(Q===R){return Q;
}var S={};
var V=qx.core.ObjectRegistry;
var U,T;

while(Q||R){if(Q){U=V.toHashCode(Q);

if(S[U]){return S[U];
}S[U]=Q;
Q=Q.parentNode;
}
if(R){T=V.toHashCode(R);

if(S[T]){return S[T];
}S[T]=R;
R=R.parentNode;
}}return null;
}}),getAncestors:function(a){return this._recursivelyCollect(a,i);
},getChildElements:function(G){G=G.firstChild;

if(!G){return [];
}var H=this.getNextSiblings(G);

if(G.nodeType===1){H.unshift(G);
}return H;
},getDescendants:function(N){return qx.lang.Array.fromCollection(N.getElementsByTagName(k));
},getFirstDescendant:function(F){F=F.firstChild;

while(F&&F.nodeType!=1){F=F.nextSibling;
}return F;
},getLastDescendant:function(v){v=v.lastChild;

while(v&&v.nodeType!=1){v=v.previousSibling;
}return v;
},getPreviousSiblings:function(E){return this._recursivelyCollect(E,l);
},getNextSiblings:function(M){return this._recursivelyCollect(M,j);
},_recursivelyCollect:function(J,K){var L=[];

while(J=J[K]){if(J.nodeType==1){L.push(J);
}}return L;
},getSiblings:function(I){return this.getPreviousSiblings(I).reverse().concat(this.getNextSiblings(I));
},isEmpty:function(y){y=y.firstChild;

while(y){if(y.nodeType===qx.dom.Node.ELEMENT||y.nodeType===qx.dom.Node.TEXT){return false;
}y=y.nextSibling;
}return true;
},cleanWhitespace:function(B){var C=B.firstChild;

while(C){var D=C.nextSibling;

if(C.nodeType==3&&!/\S/.test(C.nodeValue)){B.removeChild(C);
}C=D;
}}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(k,l){qx.event.type.Event.prototype.init.call(this,true,k);

if(l){this._native=l.getNativeEvent()||null;
this._originalTarget=l.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(g);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(m){this.getManager().addType(m);
},addAction:function(n){this.getManager().addAction(n);
},supportsType:function(c){return this.getManager().supportsType(c);
},supportsAction:function(h){return this.getManager().supportsAction(h);
},addData:function(i,j){this.getManager().addData(i,j);
},getData:function(f){return this.getManager().getData(f);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(m,n){qx.event.dispatch.AbstractBubbling.call(this,m);
this.__gf=m.getWindow();
this.__gg=n;
m.addListener(this.__gf,f,this.releaseCapture,this);
m.addListener(this.__gf,e,this.releaseCapture,this);
m.addListener(this.__gf,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__gg:null,__gh:null,__gi:true,__gf:null,_getParent:function(q){return q.parentNode;
},canDispatchEvent:function(k,event,l){return (this.__gh&&this.__gj[l]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gi||!qx.dom.Hierarchy.contains(this.__gh,o)){o=this.__gh;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__gj:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(t,u){var u=u!==false;

if(this.__gh===t&&this.__gi==u){return;
}
if(this.__gh){this.releaseCapture();
}this.nativeSetCapture(t,u);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(t,h,function(){qx.bom.Event.removeNativeListener(t,h,arguments.callee);
self.releaseCapture();
});
}this.__gi=u;
this.__gh=t;
this.__gg.fireEvent(t,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gh;
},releaseCapture:function(){var v=this.__gh;

if(!v){return;
}this.__gh=null;
this.__gg.fireEvent(v,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(v);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(i,j){i.setCapture(j!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(r){r.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__gh=this.__gf=this.__gg=null;
},defer:function(s){qx.event.Registration.addDispatcher(s);
}});
})();
(function(){var t="qx.client",s="",r="mshtml",q="'",p="SelectionLanguage",o="qx.xml.Document",n=" />",m="MSXML2.DOMDocument.3.0",k='<\?xml version="1.0" encoding="utf-8"?>\n<',j="MSXML2.XMLHTTP.3.0",e="MSXML2.XMLHTTP.6.0",h=" xmlns='",g="text/xml",d="XPath",c="MSXML2.DOMDocument.6.0",f="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(E){if(E.nodeType===9){return E.documentElement.nodeName!==f;
}else if(E.ownerDocument){return this.isXmlDocument(E.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(t,{"mshtml":function(A,B){var C=new ActiveXObject(this.DOMDOC);
C.setProperty(p,d);

if(B){var D=k;
D+=B;

if(A){D+=h+A+q;
}D+=n;
C.loadXML(D);
}return C;
},"default":function(F,G){return document.implementation.createDocument(F||s,G||s,null);
}}),fromString:qx.core.Variant.select(t,{"mshtml":function(a){var b=qx.xml.Document.create();
b.loadXML(a);
return b;
},"default":function(x){var y=new DOMParser();
return y.parseFromString(x,g);
}})},defer:function(u){if(qx.core.Variant.isSet(t,r)){var v=[c,m];
var w=[e,j];

for(var i=0,l=v.length;i<l;i++){try{new ActiveXObject(v[i]);
new ActiveXObject(w[i]);
}catch(z){continue;
}u.DOMDOC=v[i];
u.XMLHTTP=w[i];
break;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(K,stop,L){var parent=K.parentNode;
var R=qx.dom.Node.getDocument(K);
var M=R.body;
var ba,N,V;
var bc,Y,T;
var P,Q,O;
var be,bf,bb,U;
var X,S,bg;
var bd=L===d;
var W=L===e;
stop=stop?stop.parentNode:R;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){N=parent.scrollTop;
V=N+qx.bom.Viewport.getHeight();
bc=qx.bom.Viewport.getHeight();
Y=parent.clientHeight;
T=parent.scrollHeight;
P=0;
Q=0;
O=0;
}else{ba=qx.bom.element.Location.get(parent);
N=ba.top;
V=ba.bottom;
bc=parent.offsetHeight;
Y=parent.clientHeight;
T=parent.scrollHeight;
P=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
Q=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
O=bc-Y-P-Q;
}be=qx.bom.element.Location.get(K);
bf=be.top;
bb=be.bottom;
U=K.offsetHeight;
X=bf-N-P;
S=bb-V+Q;
bg=0;
if(bd){bg=X;
}else if(W){bg=S+O;
}else if(X<0||U>Y){bg=X;
}else if(S>0){bg=S+O;
}parent.scrollTop+=bg;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var x="",w="qx.client",v="hidden",u="-moz-scrollbars-none",r="overflow",q=";",p="overflowY",o=":",n="overflowX",m="overflow:",J="none",I="scroll",H="borderLeftStyle",G="borderRightStyle",F="div",E="borderRightWidth",D="overflow-y",C="borderLeftWidth",B="-moz-scrollbars-vertical",A="100px",y="qx.bom.element.Overflow",z="overflow-x";
qx.Class.define(y,{statics:{__ke:null,getScrollbarWidth:function(){if(this.__ke!==null){return this.__ke;
}var bd=qx.bom.element.Style;
var bf=function(bK,bL){return parseInt(bd.get(bK,bL))||0;
};
var bg=function(ba){return (bd.get(ba,G)==J?0:bf(ba,E));
};
var be=function(bF){return (bd.get(bF,H)==J?0:bf(bF,C));
};
var bi=qx.core.Variant.select(w,{"mshtml":function(d){if(bd.get(d,p)==v||d.clientWidth==0){return bg(d);
}return Math.max(0,d.offsetWidth-d.clientLeft-d.clientWidth);
},"default":function(bn){if(bn.clientWidth==0){var bo=bd.get(bn,r);
var bp=(bo==I||bo==B?16:0);
return Math.max(0,bg(bn)+bp);
}return Math.max(0,(bn.offsetWidth-bn.clientWidth-be(bn)));
}});
var bh=function(e){return bi(e)-bg(e);
};
var t=document.createElement(F);
var s=t.style;
s.height=s.width=A;
s.overflow=I;
document.body.appendChild(t);
var c=bh(t);
this.__ke=c?c:16;
document.body.removeChild(t);
return this.__ke;
},_compile:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb,bc){if(bc==v){bc=u;
}return m+bc+q;
}:
function(ca,cb){return ca+o+cb+q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bP,bQ){return m+bQ+q;
}:
function(bB,bC){return bB+o+bC+q;
},"default":function(bs,bt){return bs+o+bt+q;
}}),compileX:function(K){return this._compile(z,K);
},compileY:function(W){return this._compile(D,W);
},getX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(L,M){var N=qx.bom.element.Style.get(L,r,M,false);

if(N===u){N=v;
}return N;
}:
function(bw,bx){return qx.bom.element.Style.get(bw,n,bx,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(i,j){return qx.bom.element.Style.get(i,r,j,false);
}:
function(bz,bA){return qx.bom.element.Style.get(bz,n,bA,false);
},"default":function(bG,bH){return qx.bom.element.Style.get(bG,n,bH,false);
}}),setX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bq,br){if(br==v){br=u;
}bq.style.overflow=br;
}:
function(a,b){a.style.overflowX=b;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(U,V){U.style.overflow=V;
}:
function(cd,ce){cd.style.overflowX=ce;
},"default":function(bR,bS){bR.style.overflowX=bS;
}}),resetX:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(by){by.style.overflow=x;
}:
function(P){P.style.overflowX=x;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bI,bJ){bI.style.overflow=x;
}:
function(X,Y){X.style.overflowX=x;
},"default":function(O){O.style.overflowX=x;
}}),getY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(f,g){var h=qx.bom.element.Style.get(f,r,g,false);

if(h===u){h=v;
}return h;
}:
function(Q,R){return qx.bom.element.Style.get(Q,p,R,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bX,bY){return qx.bom.element.Style.get(bX,r,bY,false);
}:
function(bN,bO){return qx.bom.element.Style.get(bN,p,bO,false);
},"default":function(bj,bk){return qx.bom.element.Style.get(bj,p,bk,false);
}}),setY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bu,bv){if(bv===v){bv=u;
}bu.style.overflow=bv;
}:
function(bV,bW){bV.style.overflowY=bW;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(k,l){k.style.overflow=l;
}:
function(S,T){S.style.overflowY=T;
},"default":function(bl,bm){bl.style.overflowY=bm;
}}),resetY:qx.core.Variant.select(w,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cf){cf.style.overflow=x;
}:
function(bM){bM.style.overflowY=x;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bT,bU){bT.style.overflow=x;
}:
function(bD,bE){bD.style.overflowY=x;
},"default":function(cc){cc.style.overflowY=x;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(F){if(!F){return k;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?n:J+m);
K=n;
}else{G=(J==null?n:K+J+m);
K=K+m;
}
if(top==null){H=(I==null?n:I+m);
top=n;
}else{H=(I==null?n:top+I+m);
top=top+m;
}return d+top+l+G+l+H+l+K+i;
},get:function(o,p){var r=qx.bom.element.Style.get(o,c,p,false);
var w,top,u,t;
var q,s;

if(typeof r===e&&r!==n&&r!==h){r=qx.lang.String.trim(r);
if(/\((.*)\)/.test(r)){var v=RegExp.$1.split(l);
top=qx.lang.String.trim(v[0]);
q=qx.lang.String.trim(v[1]);
s=qx.lang.String.trim(v[2]);
w=qx.lang.String.trim(v[3]);
if(w===n){w=null;
}
if(top===n){top=null;
}
if(q===n){q=null;
}
if(s===n){s=null;
}if(top!=null){top=parseInt(top,10);
}
if(q!=null){q=parseInt(q,10);
}
if(s!=null){s=parseInt(s,10);
}
if(w!=null){w=parseInt(w,10);
}if(q!=null&&w!=null){u=q-w;
}else if(q!=null){u=q;
}
if(s!=null&&top!=null){t=s-top;
}else if(s!=null){t=s;
}}else{throw new Error("Could not parse clip string: "+r);
}}return {left:w||null,top:top||null,width:u||null,height:t||null};
},set:function(y,z){if(!z){y.style.clip=a;
return;
}var E=z.left;
var top=z.top;
var D=z.width;
var C=z.height;
var A,B;

if(E==null){A=(D==null?n:D+m);
E=n;
}else{A=(D==null?n:E+D+m);
E=E+m;
}
if(top==null){B=(C==null?n:C+m);
top=n;
}else{B=(C==null?n:top+C+m);
top=top+m;
}y.style.clip=j+top+l+A+l+B+l+E+g;
},reset:function(x){x.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__eH:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(o){return g+(this.__eH[o]||o)+e;
},get:function(m,n){return qx.bom.element.Style.get(m,c,n,false);
},set:function(p,q){p.style.cursor=this.__eH[q]||q;
},reset:function(a){a.style.cursor=h;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(t){if(t>=1){return m;
}
if(t<0.00001){t=0;
}return d+(t*100)+f;
},"gecko":function(D){if(D==1){D=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+D+k;
}else{return i+D+k;
}},"default":function(q){if(q==1){return m;
}return i+q+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(I,J){var K=qx.bom.element.Style.get(I,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(J>=1){I.style.filter=K.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(J<0.00001){J=0;
}if(!I.currentStyle||!I.currentStyle.hasLayout){I.style.zoom=1;
}I.style.filter=K.replace(/alpha\([^\)]*\)/gi,m)+c+J*100+e;
},"gecko":function(E,F){if(F==1){F=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=F;
}else{E.style.opacity=F;
}},"default":function(u,v){if(v==1){v=m;
}u.style.opacity=v;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(r){var s=qx.bom.element.Style.get(r,j,qx.bom.element.Style.COMPUTED_MODE,false);
r.style.filter=s.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(H){if(qx.bom.client.Engine.VERSION<1.7){H.style.MozOpacity=m;
}else{H.style.opacity=m;
}},"default":function(G){G.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(w,x){var y=qx.bom.element.Style.get(w,j,x,false);

if(y){var z=y.match(/alpha\(opacity=(.*)\)/);

if(z&&z[1]){return parseFloat(z[1])/100;
}}return 1.0;
},"gecko":function(n,o){var p=qx.bom.element.Style.get(n,qx.bom.client.Engine.VERSION<1.7?g:h,o,false);

if(p==0.999999){p=1.0;
}
if(p!=null){return parseFloat(p);
}return 1.0;
},"default":function(A,B){var C=qx.bom.element.Style.get(A,h,B,false);

if(C!=null){return parseFloat(C);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__cJ:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__cK:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__cL:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cM:function(F){var G=this.__cL;
return G.tags[F.tagName.toLowerCase()]||G.types[F.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(w){{};
},"default":function(A){var C=this.__cK;
var B=p;

if(C){for(var i=0,l=C.length;i<l;i++){B+=C[i]+m+A+c;
}}return B;
}}),get:qx.core.Variant.select(q,{"mshtml":function(D){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(D))){if(!this.__cM(D)){return d;
}}return k;
},"default":function(t){var v=this.__cJ;
var u;

if(v){for(var i=0,l=v.length;i<l;i++){u=qx.bom.element.Style.get(t,v[i],null,false);

if(u!=null&&u!==p){return u;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(r,s){{};
},"default":function(x,y){var z=this.__cJ;

if(z){for(var i=0,l=z.length;i<l;i++){x.style[z[i]]=y;
}}}}),reset:function(E){this.set(E,p);
}}});
})();
(function(){var n="",m="qx.client",k="userSelect",h="style",g="MozUserModify",f="px",e="float",d="borderImage",c="styleFloat",b="appearance",G="pixelHeight",F='Ms',E=":",D="cssFloat",C="pixelTop",B="pixelLeft",A='O',z="qx.bom.element.Style",y='Khtml',x='string',u="pixelRight",v='Moz',s="pixelWidth",t="pixelBottom",q=";",r="textOverflow",o="userModify",p='Webkit',w="WebkitUserModify";
qx.Class.define(z,{statics:{__cu:function(){var bp=[b,k,r,d];
var bt={};
var bq=document.documentElement.style;
var bu=[v,p,y,A,F];

for(var i=0,l=bp.length;i<l;i++){var bv=bp[i];
var br=bv;

if(bq[bv]){bt[br]=bv;
continue;
}bv=qx.lang.String.firstUp(bv);

for(var j=0,bw=bu.length;j<bw;j++){var bs=bu[j]+bv;

if(typeof bq[bs]==x){bt[br]=bs;
break;
}}}this.__cv=bt;
this.__cv[o]=qx.core.Variant.select(m,{"gecko":g,"webkit":w,"default":k});
this.__cw={};

for(var br in bt){this.__cw[br]=this.__cA(bt[br]);
}this.__cv[e]=qx.core.Variant.select(m,{"mshtml":c,"default":D});
},__cx:{width:s,height:G,left:B,right:u,top:C,bottom:t},__cy:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(bh){var bj=[];
var bl=this.__cy;
var bk=this.__cw;
var name,bi;

for(name in bh){bi=bh[name];

if(bi==null){continue;
}name=bk[name]||name;
if(bl[name]){bj.push(bl[name].compile(bi));
}else{bj.push(this.__cA(name),E,bi,q);
}}return bj.join(n);
},__cz:{},__cA:function(bm){var bn=this.__cz;
var bo=bn[bm];

if(!bo){bo=bn[bm]=qx.lang.String.hyphenate(bm);
}return bo;
},setCss:qx.core.Variant.select(m,{"mshtml":function(Q,R){Q.style.cssText=R;
},"default":function(bf,bg){bf.setAttribute(h,bg);
}}),getCss:qx.core.Variant.select(m,{"mshtml":function(H){return H.style.cssText.toLowerCase();
},"default":function(a){return a.getAttribute(h);
}}),isPropertySupported:function(bz){return (this.__cy[bz]||this.__cv[bz]||bz in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bB,name,bC,bD){{};
name=this.__cv[name]||name;
if(bD!==false&&this.__cy[name]){return this.__cy[name].set(bB,bC);
}else{bB.style[name]=bC!==null?bC:n;
}},setStyles:function(I,J,K){{};
var N=this.__cv;
var P=this.__cy;
var L=I.style;

for(var O in J){var M=J[O];
var name=N[O]||O;

if(M===undefined){if(K!==false&&P[name]){P[name].reset(I);
}else{L[name]=n;
}}else{if(K!==false&&P[name]){P[name].set(I,M);
}else{L[name]=M!==null?M:n;
}}}},reset:function(bx,name,by){name=this.__cv[name]||name;
if(by!==false&&this.__cy[name]){return this.__cy[name].reset(bx);
}else{bx.style[name]=n;
}},get:qx.core.Variant.select(m,{"mshtml":function(S,name,T,U){name=this.__cv[name]||name;
if(U!==false&&this.__cy[name]){return this.__cy[name].get(S,T);
}if(!S.currentStyle){return S.style[name]||n;
}switch(T){case this.LOCAL_MODE:return S.style[name]||n;
case this.CASCADED_MODE:return S.currentStyle[name]||n;
default:var Y=S.currentStyle[name]||n;
if(/^-?[\.\d]+(px)?$/i.test(Y)){return Y;
}var X=this.__cx[name];

if(X){var V=S.style[name];
S.style[name]=Y||0;
var W=S.style[X]+f;
S.style[name]=V;
return W;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(Y)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return Y;
}},"default":function(ba,name,bb,bc){name=this.__cv[name]||name;
if(bc!==false&&this.__cy[name]){return this.__cy[name].get(ba,bb);
}switch(bb){case this.LOCAL_MODE:return ba.style[name]||n;
case this.CASCADED_MODE:if(ba.currentStyle){return ba.currentStyle[name]||n;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bd=qx.dom.Node.getDocument(ba);
var be=bd.defaultView.getComputedStyle(ba,null);
return be?be[name]:n;
}}})},defer:function(bA){bA.__cu();
}});
})();
(function(){var bx="borderTopWidth",bw="borderLeftWidth",bv="marginTop",bu="marginLeft",bt="scroll",bs="qx.client",br="border-box",bq="borderBottomWidth",bp="borderRightWidth",bo="auto",bM="padding",bL="qx.bom.element.Location",bK="paddingLeft",bJ="static",bI="marginBottom",bH="visible",bG="BODY",bF="paddingBottom",bE="paddingTop",bD="marginRight",bB="position",bC="margin",bz="overflow",bA="paddingRight",by="border";
qx.Class.define(bL,{statics:{__ig:function(m,n){return qx.bom.element.Style.get(m,n,qx.bom.element.Style.COMPUTED_MODE,false);
},__ih:function(B,C){return parseInt(qx.bom.element.Style.get(B,C,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ii:function(i){var l=0,top=0;
if(i.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var k=qx.dom.Node.getWindow(i);
l-=qx.bom.Viewport.getScrollLeft(k);
top-=qx.bom.Viewport.getScrollTop(k);
}else{var j=qx.dom.Node.getDocument(i).body;
i=i.parentNode;
while(i&&i!=j){l+=i.scrollLeft;
top+=i.scrollTop;
i=i.parentNode;
}}return {left:l,top:top};
},__ij:qx.core.Variant.select(bs,{"mshtml":function(bk){var bm=qx.dom.Node.getDocument(bk);
var bl=bm.body;
var bn=0;
var top=0;
bn-=bl.clientLeft+bm.documentElement.clientLeft;
top-=bl.clientTop+bm.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bn+=this.__ih(bl,bw);
top+=this.__ih(bl,bx);
}return {left:bn,top:top};
},"webkit":function(a){var c=qx.dom.Node.getDocument(a);
var b=c.body;
var d=b.offsetLeft;
var top=b.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){d+=this.__ih(b,bw);
top+=this.__ih(b,bx);
}return {left:d,top:top};
},"gecko":function(w){var x=qx.dom.Node.getDocument(w).body;
var y=x.offsetLeft;
var top=x.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){y+=this.__ih(x,bu);
top+=this.__ih(x,bv);
}if(qx.bom.element.BoxSizing.get(x)!==br){y+=this.__ih(x,bw);
top+=this.__ih(x,bx);
}return {left:y,top:top};
},"default":function(bh){var bi=qx.dom.Node.getDocument(bh).body;
var bj=bi.offsetLeft;
var top=bi.offsetTop;
return {left:bj,top:top};
}}),__ik:qx.core.Variant.select(bs,{"mshtml|webkit":function(bc){var be=qx.dom.Node.getDocument(bc);
if(bc.getBoundingClientRect){var bf=bc.getBoundingClientRect();
var bg=bf.left;
var top=bf.top;
}else{var bg=bc.offsetLeft;
var top=bc.offsetTop;
bc=bc.offsetParent;
var bd=be.body;
while(bc&&bc!=bd){bg+=bc.offsetLeft;
top+=bc.offsetTop;
bg+=this.__ih(bc,bw);
top+=this.__ih(bc,bx);
bc=bc.offsetParent;
}}return {left:bg,top:top};
},"gecko":function(o){if(o.getBoundingClientRect){var r=o.getBoundingClientRect();
var s=Math.round(r.left);
var top=Math.round(r.top);
}else{var s=0;
var top=0;
var p=qx.dom.Node.getDocument(o).body;
var q=qx.bom.element.BoxSizing;

if(q.get(o)!==br){s-=this.__ih(o,bw);
top-=this.__ih(o,bx);
}
while(o&&o!==p){s+=o.offsetLeft;
top+=o.offsetTop;
if(q.get(o)!==br){s+=this.__ih(o,bw);
top+=this.__ih(o,bx);
}if(o.parentNode&&this.__ig(o.parentNode,bz)!=bH){s+=this.__ih(o.parentNode,bw);
top+=this.__ih(o.parentNode,bx);
}o=o.offsetParent;
}}return {left:s,top:top};
},"default":function(t){var v=0;
var top=0;
var u=qx.dom.Node.getDocument(t).body;
while(t&&t!==u){v+=t.offsetLeft;
top+=t.offsetTop;
t=t.offsetParent;
}return {left:v,top:top};
}}),get:function(F,G){if(F.tagName==bG){var location=this.__il(F);
var N=location.left;
var top=location.top;
}else{var H=this.__ij(F);
var M=this.__ik(F);
var scroll=this.__ii(F);
var N=M.left+H.left-scroll.left;
var top=M.top+H.top-scroll.top;
}var I=N+F.offsetWidth;
var J=top+F.offsetHeight;

if(G){if(G==bM||G==bt){var K=qx.bom.element.Overflow.getX(F);

if(K==bt||K==bo){I+=F.scrollWidth-F.offsetWidth+this.__ih(F,bw)+this.__ih(F,bp);
}var L=qx.bom.element.Overflow.getY(F);

if(L==bt||L==bo){J+=F.scrollHeight-F.offsetHeight+this.__ih(F,bx)+this.__ih(F,bq);
}}
switch(G){case bM:N+=this.__ih(F,bK);
top+=this.__ih(F,bE);
I-=this.__ih(F,bA);
J-=this.__ih(F,bF);
case bt:N-=F.scrollLeft;
top-=F.scrollTop;
I-=F.scrollLeft;
J-=F.scrollTop;
case by:N+=this.__ih(F,bw);
top+=this.__ih(F,bx);
I-=this.__ih(F,bp);
J-=this.__ih(F,bq);
break;
case bC:N-=this.__ih(F,bu);
top-=this.__ih(F,bv);
I+=this.__ih(F,bD);
J+=this.__ih(F,bI);
break;
}}return {left:N,top:top,right:I,bottom:J};
},__il:qx.core.Variant.select(bs,{"default":function(O){var top=O.offsetTop+this.__ih(O,bv);
var P=O.offsetLeft+this.__ih(O,bu);
return {left:P,top:top};
},"mshtml":function(e){var top=e.offsetTop;
var f=e.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__ih(e,bv);
f+=this.__ih(e,bu);
}return {left:f,top:top};
},"gecko":function(bN){var top=bN.offsetTop+this.__ih(bN,bv)+this.__ih(bN,bw);
var bO=bN.offsetLeft+this.__ih(bN,bu)+this.__ih(bN,bx);
return {left:bO,top:top};
}}),getLeft:function(W,X){return this.get(W,X).left;
},getTop:function(g,h){return this.get(g,h).top;
},getRight:function(D,E){return this.get(D,E).right;
},getBottom:function(z,A){return this.get(z,A).bottom;
},getRelative:function(Q,R,S,T){var V=this.get(Q,S);
var U=this.get(R,T);
return {left:V.left-U.left,top:V.top-U.top,right:V.right-U.right,bottom:V.bottom-U.bottom};
},getPosition:function(bP){return this.getRelative(bP,this.getOffsetParent(bP));
},getOffsetParent:function(Y){var bb=Y.offsetParent||document.body;
var ba=qx.bom.element.Style;

while(bb&&(!/^body|html$/i.test(bb.tagName)&&ba.get(bb,bB)===bJ)){bb=bb.offsetParent;
}return bb;
}}});
})();
(function(){var l="qx.client",k="character",j="EndToEnd",i="input",h="textarea",g="StartToStart",f='character',e="qx.bom.Selection",d="button",c="#text",b="body";
qx.Class.define(e,{statics:{getSelectionObject:qx.core.Variant.select(l,{"mshtml":function(F){return F.selection;
},"default":function(V){return qx.dom.Node.getWindow(V).getSelection();
}}),get:qx.core.Variant.select(l,{"mshtml":function(bp){var bq=qx.bom.Range.get(qx.dom.Node.getDocument(bp));
return bq.text;
},"default":function(a){if(this.__kx(a)){return a.value.substring(a.selectionStart,a.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(a)).toString();
}}}),getLength:qx.core.Variant.select(l,{"mshtml":function(br){var bt=this.get(br);
var bs=qx.util.StringSplit.split(bt,/\r\n/);
return bt.length-(bs.length-1);
},"opera":function(bg){var bl,bj,bh;

if(this.__kx(bg)){var bk=bg.selectionStart;
var bi=bg.selectionEnd;
bl=bg.value.substring(bk,bi);
bj=bi-bk;
}else{bl=qx.bom.Selection.get(bg);
bj=bl.length;
}bh=qx.util.StringSplit.split(bl,/\r\n/);
return bj-(bh.length-1);
},"default":function(Q){if(this.__kx(Q)){return Q.selectionEnd-Q.selectionStart;
}else{return this.get(Q).length;
}}}),getStart:qx.core.Variant.select(l,{"mshtml":function(m){if(this.__kx(m)){var r=qx.bom.Range.get();
if(!m.contains(r.parentElement())){return -1;
}var s=qx.bom.Range.get(m);
var q=m.value.length;
s.moveToBookmark(r.getBookmark());
s.moveEnd(f,q);
return q-s.text.length;
}else{var s=qx.bom.Range.get(m);
var o=s.parentElement();
var t=qx.bom.Range.get();
t.moveToElementText(o);
var n=qx.bom.Range.get(qx.dom.Node.getBodyElement(m));
n.setEndPoint(g,s);
n.setEndPoint(j,t);
if(t.compareEndPoints(g,n)==0){return 0;
}var p;
var u=0;

while(true){p=n.moveStart(k,-1);
if(t.compareEndPoints(g,n)==0){break;
}if(p==0){break;
}else{u++;
}}return ++u;
}},"gecko|webkit":function(G){if(this.__kx(G)){return G.selectionStart;
}else{var I=qx.dom.Node.getDocument(G);
var H=this.getSelectionObject(I);
if(H.anchorOffset<H.focusOffset){return H.anchorOffset;
}else{return H.focusOffset;
}}},"default":function(v){if(this.__kx(v)){return v.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(v)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(l,{"mshtml":function(W){if(this.__kx(W)){var bc=qx.bom.Range.get();
if(!W.contains(bc.parentElement())){return -1;
}var bd=qx.bom.Range.get(W);
var bb=W.value.length;
bd.moveToBookmark(bc.getBookmark());
bd.moveStart(f,-bb);
return bd.text.length;
}else{var bd=qx.bom.Range.get(W);
var Y=bd.parentElement();
var be=qx.bom.Range.get();
be.moveToElementText(Y);
var bb=be.text.length;
var X=qx.bom.Range.get(qx.dom.Node.getBodyElement(W));
X.setEndPoint(j,bd);
X.setEndPoint(g,be);
if(be.compareEndPoints(j,X)==0){return bb-1;
}var ba;
var bf=0;

while(true){ba=X.moveEnd(k,1);
if(be.compareEndPoints(j,X)==0){break;
}if(ba==0){break;
}else{bf++;
}}return bb-(++bf);
}},"gecko|webkit":function(bm){if(this.__kx(bm)){return bm.selectionEnd;
}else{var bo=qx.dom.Node.getDocument(bm);
var bn=this.getSelectionObject(bo);
if(bn.focusOffset>bn.anchorOffset){return bn.focusOffset;
}else{return bn.anchorOffset;
}}},"default":function(x){if(this.__kx(x)){return x.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(x)).focusOffset;
}}}),__kx:function(E){return qx.dom.Node.isElement(E)&&(E.nodeName.toLowerCase()==i||E.nodeName.toLowerCase()==h);
},set:qx.core.Variant.select(l,{"mshtml":function(bu,bv,bw){var bx;
if(qx.dom.Node.isDocument(bu)){bu=bu.body;
}
if(qx.dom.Node.isElement(bu)||qx.dom.Node.isText(bu)){switch(bu.nodeName.toLowerCase()){case i:case h:case d:if(bw===undefined){bw=bu.value.length;
}
if(bv>=0&&bv<=bu.value.length&&bw>=0&&bw<=bu.value.length){bx=qx.bom.Range.get(bu);
bx.collapse(true);
bx.moveStart(k,bv);
bx.moveEnd(k,bw-bv);
bx.select();
return true;
}break;
case c:if(bw===undefined){bw=bu.nodeValue.length;
}
if(bv>=0&&bv<=bu.nodeValue.length&&bw>=0&&bw<=bu.nodeValue.length){bx=qx.bom.Range.get(qx.dom.Node.getBodyElement(bu));
bx.moveToElementText(bu.parentNode);
bx.collapse(true);
bx.moveStart(k,bv);
bx.moveEnd(k,bw-bv);
bx.select();
return true;
}break;
default:if(bw===undefined){bw=bu.childNodes.length-1;
}if(bu.childNodes[bv]&&bu.childNodes[bw]){bx=qx.bom.Range.get(qx.dom.Node.getBodyElement(bu));
bx.moveToElementText(bu.childNodes[bv]);
bx.collapse(true);
var by=qx.bom.Range.get(qx.dom.Node.getBodyElement(bu));
by.moveToElementText(bu.childNodes[bw]);
bx.setEndPoint(j,by);
bx.select();
return true;
}}}return false;
},"default":function(J,K,L){var P=J.nodeName.toLowerCase();

if(qx.dom.Node.isElement(J)&&(P==i||P==h)){if(L===undefined){L=J.value.length;
}if(K>=0&&K<=J.value.length&&L>=0&&L<=J.value.length){J.focus();
J.select();
J.setSelectionRange(K,L);
return true;
}}else{var N=false;
var O=qx.dom.Node.getWindow(J).getSelection();
var M=qx.bom.Range.get(J);
if(qx.dom.Node.isText(J)){if(L===undefined){L=J.length;
}
if(K>=0&&K<J.length&&L>=0&&L<=J.length){N=true;
}}else if(qx.dom.Node.isElement(J)){if(L===undefined){L=J.childNodes.length-1;
}
if(K>=0&&J.childNodes[K]&&L>=0&&J.childNodes[L]){N=true;
}}else if(qx.dom.Node.isDocument(J)){J=J.body;

if(L===undefined){L=J.childNodes.length-1;
}
if(K>=0&&J.childNodes[K]&&L>=0&&J.childNodes[L]){N=true;
}}
if(N){if(!O.isCollapsed){O.collapseToStart();
}M.setStart(J,K);
if(qx.dom.Node.isText(J)){M.setEnd(J,L);
}else{M.setEndAfter(J.childNodes[L]);
}if(O.rangeCount>0){O.removeAllRanges();
}O.addRange(M);
return true;
}}return false;
}}),setAll:function(w){return qx.bom.Selection.set(w,0);
},clear:qx.core.Variant.select(l,{"mshtml":function(R){var S=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(R));
var T=qx.bom.Range.get(R);
var parent=T.parentElement();
var U=qx.bom.Range.get(qx.dom.Node.getDocument(R));
if(parent==U.parentElement()&&parent==R){S.empty();
}},"default":function(y){var A=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(y));
var C=y.nodeName.toLowerCase();
if(qx.dom.Node.isElement(y)&&(C==i||C==h)){y.setSelectionRange(0,0);
qx.bom.Element.blur(y);
}else if(qx.dom.Node.isDocument(y)||C==b){A.collapse(y.body?y.body:y,0);
}else{var B=qx.bom.Range.get(y);

if(!B.collapsed){var D;
var z=B.commonAncestorContainer;
if(qx.dom.Node.isElement(y)&&qx.dom.Node.isText(z)){D=z.parentNode;
}else{D=z;
}
if(D==y){A.collapse(y,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__hY:{},remove:function(f){delete this.__hY[f.$$hash];
},add:function(g){var h=this.__hY;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__hY;
var e;

for(var d in c){e=c[d];
delete c[d];
e.syncWidget();
}for(var d in c){return;
}this.__hY={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hK:{},__hL:{},remove:function(i){var j=i.$$hash;
delete this.__hL[j];
delete this.__hK[j];
},isVisible:function(h){return this.__hL[h.$$hash]||false;
},__hM:function(k){var m=this.__hL;
var l=k.$$hash;
var n;
if(k.isExcluded()){n=false;
}else{var parent=k.$$parent;

if(parent){n=this.__hM(parent);
}else{n=k.isRootWidget();
}}return m[l]=n;
},add:function(o){var p=this.__hK;

if(p[o.$$hash]){return;
}p[o.$$hash]=o;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__hK;
var g=this.__hL;
for(var d in c){if(g[d]!=null){c[d].addChildrenToQueue(c);
}}var f={};

for(var d in c){f[d]=g[d];
g[d]=null;
}for(var d in c){var e=c[d];
delete c[d];
if(g[d]==null){this.__hM(e);
}if(g[d]&&g[d]!=f[d]){e.checkAppearanceNeeds();
}}this.__hK={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__hb:{},remove:function(c){delete this.__hb[c.$$hash];
},add:function(i){var j=this.__hb;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(d){return !!this.__hb[d.$$hash];
},flush:function(){var h=qx.ui.core.queue.Visibility;
var e=this.__hb;
var g;

for(var f in e){g=e[f];
delete e[f];
if(h.isVisible(g)){g.syncAppearance();
}else{g.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__eN:{},add:function(c){var d=this.__eN;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__eN;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__eN={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}qx.html.Element.call(this,null,f);
this.__jN=d;
this.__jO=e||d.toHashCode();
this.useMarkup(d.getMarkup());
},members:{__jO:null,__jN:null,getId:function(){return this.__jO;
},getDecorator:function(){return this.__jN;
},resize:function(h,i){this.__jN.resize(this.getDomElement(),h,i);
},tint:function(g){this.__jN.tint(this.getDomElement(),g);
},getInsets:function(){return this.__jN.getInsets();
}},destruct:function(){this.__jN=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__eg=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__eg:null,__eh:{focusin:1,focusout:1,focus:1,blur:1},__ei:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(G,H){return G instanceof qx.ui.core.Widget;
},_dispatchEvent:function(q){var v=q.getTarget();
var u=qx.ui.core.Widget.getWidgetByElement(v);
var w=false;

while(u&&u.isAnonymous()){var w=true;
u=u.getLayoutParent();
}if(u&&w&&q.getType()==a){u.getContainerElement().activate();
}if(this.__eh[q.getType()]){u=u&&u.getFocusTarget();
if(!u){return;
}}if(q.getRelatedTarget){var D=q.getRelatedTarget();
var C=qx.ui.core.Widget.getWidgetByElement(D);

while(C&&C.isAnonymous()){C=C.getLayoutParent();
}
if(C){if(this.__eh[q.getType()]){C=C.getFocusTarget();
}if(C===u){return;
}}}var y=q.getCurrentTarget();
var A=qx.ui.core.Widget.getWidgetByElement(y);

if(!A||A.isAnonymous()){return;
}if(this.__eh[q.getType()]){A=A.getFocusTarget();
}var B=q.getType();

if(!A||!(A.isEnabled()||this.__ei[B])){return;
}var r=q.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var x=this.__eg.getListeners(A,B,r);

if(!x||x.length===0){return;
}var s=qx.event.Pool.getInstance().getObject(q.constructor);
q.clone(s);
s.setTarget(u);
s.setRelatedTarget(C||null);
s.setCurrentTarget(A);
var E=q.getOriginalTarget();

if(E){var t=qx.ui.core.Widget.getWidgetByElement(E);

while(t&&t.isAnonymous()){t=t.getLayoutParent();
}s.setOriginalTarget(t);
}else{s.setOriginalTarget(v);
}for(var i=0,l=x.length;i<l;i++){var z=x[i].context||A;
x[i].handler.call(z,s);
}if(s.getPropagationStopped()){q.stopPropagation();
}
if(s.getDefaultPrevented()){q.preventDefault();
}qx.event.Pool.getInstance().poolObject(s);
},registerEvent:function(g,h,j){var k;

if(h===e||h===f){k=g.getFocusElement();
}else if(h===c||h===d){k=g.getContentElement();
}else{k=g.getContainerElement();
}
if(k){k.addListener(h,this._dispatchEvent,this,j);
}},unregisterEvent:function(m,n,o){var p;

if(n===e||n===f){p=m.getFocusElement();
}else if(n===c||n===d){p=m.getContentElement();
}else{p=m.getContainerElement();
}
if(p){p.removeListener(n,this._dispatchEvent,this,o);
}}},destruct:function(){this.__eg=null;
},defer:function(F){qx.event.Registration.addHandler(F);
}});
})();
(function(){var h="/",g="mshtml",f="",e="qx.client",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__cr:qx.$$resources||{},__cs:{}},members:{has:function(l){return !!this.self(arguments).__cr[l];
},getData:function(i){return this.self(arguments).__cr[i]||null;
},getImageWidth:function(o){var p=this.self(arguments).__cr[o];
return p?p[0]:null;
},getImageHeight:function(m){var n=this.self(arguments).__cr[m];
return n?n[1]:null;
},getImageFormat:function(j){var k=this.self(arguments).__cr[j];
return k?k[2]:null;
},isClippedImage:function(w){var x=this.self(arguments).__cr[w];
return x&&x.length>4;
},toUri:function(y){if(y==null){return y;
}var z=this.self(arguments).__cr[y];

if(!z){return y;
}
if(typeof z===c){var B=z;
}else{var B=z[3];
if(!B){return y;
}}var A=f;

if(qx.core.Variant.isSet(e,g)&&qx.bom.client.Feature.SSL){A=this.self(arguments).__cs[B];
}return A+qx.$$libraries[B].resourceUri+h+y;
}},defer:function(q){if(qx.core.Variant.isSet(e,g)){if(qx.bom.client.Feature.SSL){for(var u in qx.$$libraries){var s;

if(qx.$$libraries[u].resourceUri){s=qx.$$libraries[u].resourceUri;
}else{q.__cs[u]=f;
continue;
}if(s.match(/^\/\//)!=null){q.__cs[u]=window.location.protocol;
}else if(s.match(/^\.\//)!=null){var r=document.URL;
q.__cs[u]=r.substring(0,r.lastIndexOf(h)+1);
}else if(s.match(/^http/)!=null){}else{var v=window.location.href.indexOf(d);
var t;

if(v==-1){t=window.location.href;
}else{t=window.location.href.substring(0,v);
}q.__cs[u]=t.substring(0,t.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__kS:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__kS();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(z){var z=z||t;
this.__lr=z;
this.length=z.length;
},members:{$$isString:true,length:0,__lr:null,toString:function(){return this.__lr;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(x,y){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(u,v){{};
var w=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
v.valueOf=v.toString;

if(new u(t).valueOf()==null){delete v.valueOf;
}
for(var i=0,l=w.length;i<l;i++){v[w[i]]=String.prototype[w[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__ej=c;
this.__ek=d;
},members:{__ej:null,__ek:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__ej,this.__ek);
}}});
})();
(function(){var o="_",n="",m="_applyLocale",l="changeLocale",k="C",j="qx.dynlocale",h="on",g="qx.locale.Manager",f="String",e="singleton";
qx.Class.define(g,{type:e,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__im=qx.$$translations||{};
this.__in=qx.$$locales||{};
var J=qx.bom.client.Locale;
var H=J.LOCALE;
var I=J.VARIANT;

if(I!==n){H+=o+I;
}this.setLocale(H||this.__io);
},statics:{tr:function(O,P){var Q=qx.lang.Array.fromArguments(arguments);
Q.splice(0,1);
return qx.locale.Manager.getInstance().translate(O,Q);
},trn:function(x,y,z,A){var B=qx.lang.Array.fromArguments(arguments);
B.splice(0,3);
if(z!=1){return qx.locale.Manager.getInstance().translate(y,B);
}else{return qx.locale.Manager.getInstance().translate(x,B);
}},trc:function(a,b,c){var d=qx.lang.Array.fromArguments(arguments);
d.splice(0,2);
return qx.locale.Manager.getInstance().translate(b,d);
},marktr:function(bg){return bg;
}},properties:{locale:{check:f,nullable:true,apply:m,event:l}},members:{__io:k,__ip:null,__iq:null,__im:null,__in:null,getLanguage:function(){return this.__iq;
},getTerritory:function(){return this.getLocale().split(o)[1]||n;
},getAvailableLocales:function(){var D=[];

for(var C in this.__in){if(C!=this.__io){D.push(C);
}}return D;
},__ir:function(E){var G;
var F=E.indexOf(o);

if(F==-1){G=E;
}else{G=E.substring(0,F);
}return G;
},_applyLocale:function(V,W){this.__ip=V;
this.__iq=this.__ir(V);
},addTranslation:function(bc,bd){var be=this.__im;

if(be[bc]){for(var bf in bd){be[bc][bf]=bd[bf];
}}else{be[bc]=bd;
}},addLocale:function(R,S){var T=this.__in;

if(T[R]){for(var U in S){T[R][U]=S[U];
}}else{T[R]=S;
}},translate:function(X,Y,ba){var bb=this.__im;
return this.__is(bb,X,Y,ba);
},localize:function(K,L,M){var N=this.__in;
return this.__is(N,K,L,M);
},__is:function(p,q,r,s){var t;

if(!p){return q;
}
if(s){var v=this.__ir(s);
}else{s=this.__ip;
v=this.__iq;
}if(!t&&p[s]){t=p[s][q];
}if(!t&&p[v]){t=p[v][q];
}if(!t&&p[this.__io]){t=p[this.__io][q];
}
if(!t){t=q;
}
if(r.length>0){var u=[];

for(var i=0;i<r.length;i++){var w=r[i];

if(w&&w.translate){u[i]=w.translate();
}else{u[i]=w;
}}t=qx.lang.String.format(t,u);
}
if(qx.core.Variant.isSet(j,h)){t=new qx.locale.LocalizedString(t,q,r);
}return t;
}},destruct:function(){this.__im=this.__in=null;
}});
})();
(function(){var r="px",q="qx.client",p="div",o="img",n="",m="no-repeat",l="scale-x",k="mshtml",j="scale",i="scale-y",N="qx/icon",M="repeat",L=".png",K="crop",J="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",I='<div style="',H="repeat-y",G='<img src="',F="qx.bom.element.Decoration",E="', sizingMethod='",y="png",z="')",w='"></div>',x='"/>',u='" style="',v="none",s="webkit",t=" ",A="repeat-x",B="DXImageTransform.Microsoft.AlphaImageLoader",D="qx/static/blank.gif",C="absolute";
qx.Class.define(F,{statics:{DEBUG:false,__gM:{},__gN:qx.core.Variant.isSet(q,k),__gO:qx.core.Variant.select(q,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__gP:{"scale-x":o,"scale-y":o,"scale":o,"repeat":p,"no-repeat":p,"repeat-x":p,"repeat-y":p},update:function(a,b,c,d){var g=this.getTagName(c,b);

if(g!=a.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var h=this.getAttributes(b,c,d);

if(g===o){a.src=h.src||qx.util.ResourceManager.getInstance().toUri(D);
}if(a.style.backgroundPosition!=n&&h.style.backgroundPosition===undefined){h.style.backgroundPosition=null;
}if(a.style.clip!=n&&h.style.clip===undefined){h.style.clip=null;
}var f=qx.bom.element.Style;
f.setStyles(a,h.style);
if(this.__gN){try{a.filters[B].apply();
}catch(e){}}},create:function(O,P,Q){var R=this.getTagName(P,O);
var T=this.getAttributes(O,P,Q);
var S=qx.bom.element.Style.compile(T.style);

if(R===o){return G+T.src+u+S+x;
}else{return I+S+w;
}},getTagName:function(bj,bk){if(qx.core.Variant.isSet(q,k)){if(bk&&this.__gN&&this.__gO[bj]&&qx.lang.String.endsWith(bk,L)){return p;
}}return this.__gP[bj];
},getAttributes:function(bK,bL,bM){if(!bM){bM={};
}
if(!bM.position){bM.position=C;
}
if(qx.core.Variant.isSet(q,k)){bM.fontSize=0;
bM.lineHeight=0;
}else if(qx.core.Variant.isSet(q,s)){bM.WebkitUserDrag=v;
}var bO=qx.util.ResourceManager.getInstance().getImageFormat(bK)||qx.io.ImageLoader.getFormat(bK);
{};
var bN;
if(this.__gN&&this.__gO[bL]&&bO===y){bN=this.__gS(bM,bL,bK);
}else{if(bL===j){bN=this.__gT(bM,bL,bK);
}else if(bL===l||bL===i){bN=this.__gU(bM,bL,bK);
}else{bN=this.__gX(bM,bL,bK);
}}return bN;
},__gQ:function(bW,bX,bY){if(bW.width==null&&bX!=null){bW.width=bX+r;
}
if(bW.height==null&&bY!=null){bW.height=bY+r;
}return bW;
},__gR:function(bl){var bm=qx.util.ResourceManager.getInstance().getImageWidth(bl)||qx.io.ImageLoader.getWidth(bl);
var bn=qx.util.ResourceManager.getInstance().getImageHeight(bl)||qx.io.ImageLoader.getHeight(bl);
return {width:bm,height:bn};
},__gS:function(bE,bF,bG){var bJ=this.__gR(bG);
bE=this.__gQ(bE,bJ.width,bJ.height);
var bI=bF==m?K:j;
var bH=J+qx.util.ResourceManager.getInstance().toUri(bG)+E+bI+z;
bE.filter=bH;
bE.backgroundImage=bE.backgroundRepeat=n;
return {style:bE};
},__gT:function(bd,be,bf){var bh=qx.util.ResourceManager.getInstance().toUri(bf);
var bi=this.__gR(bf);
bd=this.__gQ(bd,bi.width,bi.height);
return {src:bh,style:bd};
},__gU:function(bs,bt,bu){var by=qx.util.ResourceManager.getInstance();
var bx=by.isClippedImage(bu);
var bz=this.__gR(bu);

if(bx){var bw=by.getData(bu);
var bv=by.toUri(bw[4]);

if(bt===l){bs=this.__gV(bs,bw,bz.height);
}else{bs=this.__gW(bs,bw,bz.width);
}return {src:bv,style:bs};
}else{{};

if(bt==l){bs.height=bz.height==null?null:bz.height+r;
}else if(bt==i){bs.width=bz.width==null?null:bz.width+r;
}var bv=by.toUri(bu);
return {src:bv,style:bs};
}},__gV:function(bA,bB,bC){var bD=qx.util.ResourceManager.getInstance().getImageHeight(bB[4]);
bA.clip={top:-bB[6],height:bC};
bA.height=bD+r;
if(bA.top!=null){bA.top=(parseInt(bA.top,10)+bB[6])+r;
}else if(bA.bottom!=null){bA.bottom=(parseInt(bA.bottom,10)+bC-bD-bB[6])+r;
}return bA;
},__gW:function(bo,bp,bq){var br=qx.util.ResourceManager.getInstance().getImageWidth(bp[4]);
bo.clip={left:-bp[5],width:bq};
bo.width=br+r;
if(bo.left!=null){bo.left=(parseInt(bo.left,10)+bp[5])+r;
}else if(bo.right!=null){bo.right=(parseInt(bo.right,10)+bq-br-bp[5])+r;
}return bo;
},__gX:function(U,V,W){var bc=qx.util.ResourceManager.getInstance().isClippedImage(W);
var bb=this.__gR(W);
if(bc&&V!==M){var ba=qx.util.ResourceManager.getInstance().getData(W);
var Y=qx.bom.element.Background.getStyles(ba[4],V,ba[5],ba[6]);

for(var X in Y){U[X]=Y[X];
}
if(bb.width!=null&&U.width==null&&(V==H||V===m)){U.width=bb.width+r;
}
if(bb.height!=null&&U.height==null&&(V==A||V===m)){U.height=bb.height+r;
}return {style:U};
}else{{};
U=this.__gQ(U,bb.width,bb.height);
U=this.__gY(U,W,V);
return {style:U};
}},__gY:function(bP,bQ,bR){var top=null;
var bV=null;

if(bP.backgroundPosition){var bS=bP.backgroundPosition.split(t);
bV=parseInt(bS[0]);

if(isNaN(bV)){bV=bS[0];
}top=parseInt(bS[1]);

if(isNaN(top)){top=bS[1];
}}var bU=qx.bom.element.Background.getStyles(bQ,bR,bV,top);

for(var bT in bU){bP[bT]=bU[bT];
}if(bP.filter){bP.filter=n;
}return bP;
},__ha:function(ca){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ca)&&ca.indexOf(N)==-1){if(!this.__gM[ca]){qx.log.Logger.debug("Potential clipped image candidate: "+ca);
this.__gM[ca]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(q,{"mshtml":function(){return qx.bom.element.Decoration.__gN;
},"default":function(){return false;
}})}});
})();
(function(){var e="qx.client",d="load",c="qx.io.ImageLoader";
qx.Bootstrap.define(c,{statics:{__kE:{},__kF:{width:null,height:null},__kG:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(f){var g=this.__kE[f];
return !!(g&&g.loaded);
},isFailed:function(a){var b=this.__kE[a];
return !!(b&&b.failed);
},isLoading:function(s){var t=this.__kE[s];
return !!(t&&t.loading);
},getFormat:function(x){var y=this.__kE[x];
return y?y.format:null;
},getSize:function(v){var w=this.__kE[v];
return w?
{width:w.width,height:w.height}:this.__kF;
},getWidth:function(k){var m=this.__kE[k];
return m?m.width:null;
},getHeight:function(h){var j=this.__kE[h];
return j?j.height:null;
},load:function(z,A,B){var C=this.__kE[z];

if(!C){C=this.__kE[z]={};
}if(A&&!B){B=window;
}if(C.loaded||C.loading||C.failed){if(A){if(C.loading){C.callbacks.push(A,B);
}else{A.call(B,z,C);
}}}else{C.loading=true;
C.callbacks=[];

if(A){C.callbacks.push(A,B);
}var E=new Image();
var D=qx.lang.Function.listener(this.__kH,this,E,z);
E.onload=D;
E.onerror=D;
E.src=z;
}},__kH:qx.event.GlobalError.observeMethod(function(event,n,o){var p=this.__kE[o];
if(event.type===d){p.loaded=true;
p.width=this.__kI(n);
p.height=this.__kJ(n);
var q=this.__kG.exec(o);

if(q!=null){p.format=q[1];
}}else{p.failed=true;
}n.onload=n.onerror=null;
var r=p.callbacks;
delete p.loading;
delete p.callbacks;
for(var i=0,l=r.length;i<l;i+=2){r[i].call(r[i+1],o,p);
}}),__kI:qx.core.Variant.select(e,{"gecko":function(u){return u.naturalWidth;
},"default":function(F){return F.width;
}}),__kJ:qx.core.Variant.select(e,{"gecko":function(H){return H.naturalHeight;
},"default":function(G){return G.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__cT:[i,null,h,b,null,j,e,null,j],__cU:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cV:function(z,top){var A=qx.bom.client.Engine;

if(A.GECKO&&A.VERSION<1.9&&z==top&&typeof z==m){top+=0.01;
}
if(z){var B=(typeof z==m)?z+k:z;
}else{B=l;
}
if(top){var C=(typeof top==m)?top+k:top;
}else{C=l;
}return B+d+C;
},compile:function(t,u,v,top){var w=this.__cV(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y=this.__cT;
y[1]=x;
y[4]=w;
y[7]=u;
return y.join(g);
},getStyles:function(D,E,F,top){if(!D){return this.__cU;
}var G=this.__cV(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:c+H+f};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(n,o,p,q,top){var r=this.getStyles(o,p,q,top);

for(var s in r){n.style[s]=r[s];
}}}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="qx.client",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,q){qx.html.Element.prototype._applyProperty.call(this,name,q);

if(name===j){var u=this.getDomElement();
var r=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){r.backgroundPosition=null;
r.backgroundRepeat=null;
}var s=this._getProperty(j);
var t=this._getProperty(i);
var v=t?i:h;
if(s!=null){qx.bom.element.Decoration.update(u,s,v,r);
}}},_createDomElement:function(){var o=this._getProperty(i);
var p=o?i:h;

if(qx.core.Variant.isSet(g,f)){var n=this._getProperty(j);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(p,n));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(p));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(m){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(k){this._setProperty(j,k);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(l){this._setProperty(i,l);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var Y="nonScaled",X="scaled",W="alphaScaled",V=".png",U="qx.client",T="div",S="replacement",R="qx.event.type.Event",Q="hidden",P="Boolean",bo="px",bn="scale",bm="changeSource",bl="qx.ui.basic.Image",bk="__it",bj="loaded",bi="-disabled.$1",bh="loadingFailed",bg="String",bf="_applySource",bd="img",be="image",bb="mshtml",bc="_applyScale",ba="no-repeat";
qx.Class.define(bl,{extend:qx.ui.core.Widget,construct:function(F){this.__it={};
qx.ui.core.Widget.call(this);

if(F){this.setSource(F);
}},properties:{source:{check:bg,init:null,nullable:true,event:bm,apply:bf,themeable:true},scale:{check:P,init:false,themeable:true,apply:bc},appearance:{refine:true,init:be},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:R,loaded:R},members:{__iu:null,__iv:null,__iw:null,__it:null,getContentElement:function(){return this.__iA();
},_createContentElement:function(){return this.__iA();
},_getContentHint:function(){return {width:this.__iu||0,height:this.__iv||0};
},_applyEnabled:function(N,O){qx.ui.core.Widget.prototype._applyEnabled.call(this,N,O);

if(this.getSource()){this._styleSource();
}},_applySource:function(J){this._styleSource();
},_applyScale:function(B){this._styleSource();
},__ix:function(C){this.__iw=C;
},__iy:function(){if(this.__iw==null){var E=this.getSource();
var D=false;

if(E!=null){D=qx.lang.String.endsWith(E,V);
}
if(this.getScale()&&D&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__iw=W;
}else if(this.getScale()){this.__iw=X;
}else{this.__iw=Y;
}}return this.__iw;
},__iz:function(p){var q;
var r;

if(p==W){q=true;
r=T;
}else if(p==Y){q=false;
r=T;
}else{q=true;
r=bd;
}var s=new qx.html.Image(r);
s.setScale(q);
s.setStyles({"overflowX":Q,"overflowY":Q});
return s;
},__iA:function(){var bp=this.__iy();

if(this.__it[bp]==null){this.__it[bp]=this.__iz(bp);
}return this.__it[bp];
},_styleSource:function(){var x=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!x){this.getContentElement().resetSource();
return;
}this.__iB(x);

if(qx.core.Variant.isSet(U,bb)){var y=this.getScale()?bn:ba;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(y,x);
}if(qx.util.ResourceManager.getInstance().has(x)){this.__iD(this.getContentElement(),x);
}else if(qx.io.ImageLoader.isLoaded(x)){this.__iE(this.getContentElement(),x);
}else{this.__iF(this.getContentElement(),x);
}},__iB:qx.core.Variant.select(U,{"mshtml":function(G){var I=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var H=qx.lang.String.endsWith(G,V);

if(I&&H){if(this.getScale()&&this.__iy()!=W){this.__ix(W);
}else if(!this.getScale()&&this.__iy()!=Y){this.__ix(Y);
}}else{if(this.getScale()&&this.__iy()!=X){this.__ix(X);
}else if(!this.getScale()&&this.__iy()!=Y){this.__ix(Y);
}}this.__iC(this.__iA());
},"default":function(K){if(this.getScale()&&this.__iy()!=X){this.__ix(X);
}else if(!this.getScale()&&this.__iy(Y)){this.__ix(Y);
}this.__iC(this.__iA());
}}),__iC:function(i){var l=this.getContainerElement();
var m=l.getChild(0);

if(m!=i){if(m!=null){var o=bo;
var j={};
var k=this.getInnerSize();

if(k!=null){j.width=k.width+o;
j.height=k.height+o;
}var n=this.getInsets();
j.left=n.left+o;
j.top=n.top+o;
j.zIndex=10;
i.setStyles(j,true);
i.setSelectable(this.getSelectable());
}l.removeAt(0);
l.addAt(i,0);
}},__iD:function(t,u){var w=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var v=u.replace(/\.([a-z]+)$/,bi);

if(w.has(v)){u=v;
this.addState(S);
}else{this.removeState(S);
}}if(t.getSource()===u){return;
}t.setSource(u);
this.__iH(w.getImageWidth(u),w.getImageHeight(u));
},__iE:function(a,b){var d=qx.io.ImageLoader;
a.setSource(b);
var c=d.getWidth(b);
var e=d.getHeight(b);
this.__iH(c,e);
},__iF:function(f,g){var self;
var h=qx.io.ImageLoader;
{};
if(!h.isFailed(g)){h.load(g,this.__iG,this);
}else{if(f!=null){f.resetSource();
}}},__iG:function(L,M){if(this.$$disposed===true){return;
}if(L!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(M.failed){this.warn("Image could not be loaded: "+L);
this.fireEvent(bh);
}else{this.fireEvent(bj);
}this._styleSource();
},__iH:function(z,A){if(z!==this.__iu||A!==this.__iv){this.__iu=z;
this.__iv=A;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(bk);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var j=this.getApplicationRoot();
j.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(h,i){if(i){this.removeState(i);
}
if(h){this.addState(h);
}}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__kf=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__kf:null,_applyTimeoutInterval:function(h){this.__kf.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__kf){this.__kf.stop();
}this.__kf=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d='__hc',b="keep-align",a="direct";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hc=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__hd:null,compute:function(q,r,s,t,u,v,w){this.__hd=this.__hd||new qx.util.placement.Placement();
var z=u.split(f);
var y=z[0];
var x=z[1];
this.__hd.set({axisX:this.__hh(v),axisY:this.__hh(w),edge:y,align:x});
return this.__hd.compute(q,r,s,t);
},__he:null,__hf:null,__hg:null,__hh:function(p){switch(p){case a:this.__he=this.__he||new qx.util.placement.DirectAxis();
return this.__he;
case b:this.__hf=this.__hf||new qx.util.placement.KeepAlignAxis();
return this.__hf;
case c:this.__hg=this.__hg||new qx.util.placement.BestFitAxis();
return this.__hg;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__hc:null,compute:function(C,D,E,F){{};
var G=this.getAxisX()||this.__hc;
var I=G.computeStart(C.width,{start:E.left,end:E.right},{start:F.left,end:F.right},D.width,this.__hi());
var H=this.getAxisY()||this.__hc;
var top=H.computeStart(C.height,{start:E.top,end:E.bottom},{start:F.top,end:F.bottom},D.height,this.__hj());
return {left:I,top:top};
},__hi:function(){var B=this.getEdge();
var A=this.getAlign();

if(B==l){return i;
}else if(B==n){return g;
}else if(A==l){return k;
}else if(A==n){return h;
}},__hj:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(n,o,p,q){switch(q){case e:return o.start-p.end-n;
case b:return o.end+p.start;
case d:return o.start+p.start;
case c:return o.end-p.end-n;
}},_isInRange:function(k,l,m){return k>=0&&k+l<=m;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var h="mousedown",g="blur",f="__qD",d="singleton",c="qx.ui.popup.Manager";
qx.Class.define(c,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qD={};
qx.event.Registration.addListener(document.documentElement,h,this.__qF,this,true);
qx.bom.Element.addListener(window,g,this.hideAll,this);
},members:{__qD:null,add:function(i){{};
this.__qD[i.$$hash]=i;
this.__qE();
},remove:function(q){{};
var r=this.__qD;

if(r){delete r[q.$$hash];
this.__qE();
}},hideAll:function(){var b=this.__qD;

if(b){for(var a in b){b[a].exclude();
}}},__qE:function(){var p=1e7;
var o=this.__qD;

for(var n in o){o[n].setZIndex(p++);
}},__qF:function(e){var l=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var m=this.__qD;

for(var k in m){var j=m[k];

if(!j.getAutoHide()||l==j||qx.ui.core.Widget.contains(j,l)){continue;
}j.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__qF,this,true);
this._disposeMap(f);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__gk:null,_invalidChildrenCache:null,__gl:null,invalidateLayoutCache:function(){this.__gk=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__gk){return this.__gk;
}return this.__gk=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var h=this.__gl;

if(h instanceof qx.ui.core.LayoutItem){h.clearSeparators();
}},_renderSeparator:function(f,g){this.__gl.renderSeparator(f,g);
},connectToWidget:function(i){if(i&&this.__gl){throw new Error("It is not possible to manually set the connected widget.");
}this.__gl=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__gl;
},_applyLayoutChange:function(){if(this.__gl){this.__gl.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__gl.getLayoutChildren();
}},destruct:function(){this.__gl=this.__gk=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(m,n){var r=this._getLayoutChildren();
var q,s,p,o;
for(var i=0,l=r.length;i<l;i++){q=r[i];
s=q.getSizeHint();
p=m;

if(p<s.minWidth){p=s.minWidth;
}else if(p>s.maxWidth){p=s.maxWidth;
}o=n;

if(o<s.minHeight){o=s.minHeight;
}else if(o>s.maxHeight){o=s.maxHeight;
}q.renderLayout(0,0,p,o);
}},_computeSizeHint:function(){var h=this._getLayoutChildren();
var f,k;
var j=0,g=0;
var e=0,c=0;
var b=Infinity,d=Infinity;
for(var i=0,l=h.length;i<l;i++){f=h[i];
k=f.getSizeHint();
j=Math.max(j,k.width);
g=Math.max(g,k.height);
e=Math.max(e,k.minWidth);
c=Math.max(c,k.minHeight);
b=Math.min(b,k.maxWidth);
d=Math.min(d,k.maxHeight);
}return {width:j,height:g,minWidth:e,minHeight:c,maxWidth:b,maxHeight:d};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",w="changeIcon",v="qx.ui.basic.Atom",u="changeLabel",t="Integer",s="_applyIconPosition",r="top",q="right",p="_applyRich",o="_applyIcon",n="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(J,K){{};
qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(J!=null){this.setLabel(J);
}
if(K!=null){this.setIcon(K);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:u},rich:{check:h,init:false,apply:p},icon:{check:f,apply:o,nullable:true,themeable:true,event:w},gap:{check:t,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[r,q,b,e],themeable:true,apply:s},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(O){var P;

switch(O){case j:P=new qx.ui.basic.Label(this.getLabel());
P.setAnonymous(true);
P.setRich(this.getRich());
this._add(P);

if(this.getLabel()==null||this.getShow()===i){P.exclude();
}break;
case i:P=new qx.ui.basic.Image(this.getIcon());
P.setAnonymous(true);
this._addAt(P,0);

if(this.getIcon()==null||this.getShow()===j){P.exclude();
}break;
}return P||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,O);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(G,H){var I=this.getChildControl(j,true);

if(I){I.setValue(G);
}this._handleLabel();
},_applyRich:function(x,y){var z=this.getChildControl(j,true);

if(z){z.setRich(x);
}},_applyIcon:function(L,M){var N=this.getChildControl(i,true);

if(N){N.setSource(L);
}this._handleIcon();
},_applyGap:function(E,F){this._getLayout().setGap(E);
},_applyShow:function(A,B){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(Q,R){this._getLayout().setIconPosition(Q);
},_applyCenter:function(C,D){this._getLayout().setCenter(C);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(w,x){var G=qx.ui.layout.Util;
var z=this.getIconPosition();
var C=this._getLayoutChildren();
var length=C.length;
var Q,top,H,A;
var M,F;
var K=this.getGap();
var P=this.getCenter();
if(z===k||z===f){var I=length-1;
var D=-1;
var B=-1;
}else{var I=0;
var D=length;
var B=1;
}if(z==h||z==k){if(P){var L=0;

for(var i=I;i!=D;i+=B){A=C[i].getSizeHint().height;

if(A>0){L+=A;

if(i!=I){L+=K;
}}}top=Math.round((x-L)/2);
}else{top=0;
}
for(var i=I;i!=D;i+=B){M=C[i];
F=M.getSizeHint();
H=Math.min(F.maxWidth,Math.max(w,F.minWidth));
A=F.height;
Q=G.computeHorizontalAlignOffset(d,H,w);
M.renderLayout(Q,top,H,A);
if(A>0){top+=A+K;
}}}else{var E=w;
var y=null;
var O=0;

for(var i=I;i!=D;i+=B){M=C[i];
H=M.getSizeHint().width;

if(H>0){if(!y&&M instanceof qx.ui.basic.Label){y=M;
}else{E-=H;
}O++;
}}
if(O>1){var N=(O-1)*K;
E-=N;
}
if(y){var F=y.getSizeHint();
var J=Math.max(F.minWidth,Math.min(E,F.maxWidth));
E-=J;
}
if(P&&E>0){Q=Math.round(E/2);
}else{Q=0;
}
for(var i=I;i!=D;i+=B){M=C[i];
F=M.getSizeHint();
A=Math.min(F.maxHeight,Math.max(x,F.minHeight));

if(M===y){H=J;
}else{H=F.width;
}top=G.computeVerticalAlignOffset(e,F.height,x);
M.renderLayout(Q,top,H,A);
if(H>0){Q+=H+K;
}}}},_computeSizeHint:function(){var v=this._getLayoutChildren();
var length=v.length;
var n,t;
if(length===1){var n=v[0].getSizeHint();
t={width:n.width,height:n.height,minWidth:n.minWidth,minHeight:n.minHeight};
}else{var r=0,s=0;
var o=0,q=0;
var p=this.getIconPosition();
var u=this.getGap();

if(p===h||p===k){var l=0;

for(var i=0;i<length;i++){n=v[i].getSizeHint();
s=Math.max(s,n.width);
r=Math.max(r,n.minWidth);
if(n.height>0){q+=n.height;
o+=n.minHeight;
l++;
}}
if(l>1){var m=(l-1)*u;
q+=m;
o+=m;
}}else{var l=0;

for(var i=0;i<length;i++){n=v[i].getSizeHint();
q=Math.max(q,n.height);
o=Math.max(o,n.minHeight);
if(n.width>0){s+=n.width;
r+=n.minWidth;
l++;
}}
if(l>1){var m=(l-1)*u;
s+=m;
r+=m;
}}t={minWidth:r,width:s,minHeight:o,height:q};
}return t;
}}});
})();
(function(){var o="middle",n="qx.ui.layout.Util",m="left",k="center",j="top",h="bottom",g="right";
qx.Class.define(n,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(p,q,r){var t,x,s,y;
var u=q>r;
var z=Math.abs(q-r);
var A,v;
var w={};

for(x in p){t=p[x];
w[x]={potential:u?t.max-t.value:t.value-t.min,flex:u?t.flex:1/t.flex,offset:0};
}while(z!=0){y=Infinity;
s=0;

for(x in w){t=w[x];

if(t.potential>0){s+=t.flex;
y=Math.min(y,t.potential/t.flex);
}}if(s==0){break;
}y=Math.min(z,y*s)/s;
A=0;

for(x in w){t=w[x];

if(t.potential>0){v=Math.min(z,t.potential,Math.ceil(y*t.flex));
A+=v-y*t.flex;

if(A>=1){A-=1;
v-=1;
}t.potential-=v;

if(u){t.offset+=v;
}else{t.offset-=v;
}z-=v;
}}}return w;
},computeHorizontalAlignOffset:function(X,Y,ba,bb,bc){if(bb==null){bb=0;
}
if(bc==null){bc=0;
}var bd=0;

switch(X){case m:bd=bb;
break;
case g:bd=ba-Y-bc;
break;
case k:bd=Math.round((ba-Y)/2);
if(bd<bb){bd=bb;
}else if(bd<bc){bd=Math.max(bb,ba-Y-bc);
}break;
}return bd;
},computeVerticalAlignOffset:function(a,b,c,d,e){if(d==null){d=0;
}
if(e==null){e=0;
}var f=0;

switch(a){case j:f=d;
break;
case h:f=c-b-e;
break;
case o:f=Math.round((c-b)/2);
if(f<d){f=d;
}else if(f<e){f=Math.max(d,c-b-e);
}break;
}return f;
},collapseMargins:function(bm){var bn=0,bp=0;

for(var i=0,l=arguments.length;i<l;i++){var bo=arguments[i];

if(bo<0){bp=Math.min(bp,bo);
}else if(bo>0){bn=Math.max(bn,bo);
}}return bn+bp;
},computeHorizontalGaps:function(bi,bj,bk){if(bj==null){bj=0;
}var bl=0;

if(bk){bl+=bi[0].getMarginLeft();

for(var i=1,l=bi.length;i<l;i+=1){bl+=this.collapseMargins(bj,bi[i-1].getMarginRight(),bi[i].getMarginLeft());
}bl+=bi[l-1].getMarginRight();
}else{for(var i=1,l=bi.length;i<l;i+=1){bl+=bi[i].getMarginLeft()+bi[i].getMarginRight();
}bl+=(bj*(l-1));
}return bl;
},computeVerticalGaps:function(be,bf,bg){if(bf==null){bf=0;
}var bh=0;

if(bg){bh+=be[0].getMarginTop();

for(var i=1,l=be.length;i<l;i+=1){bh+=this.collapseMargins(bf,be[i-1].getMarginBottom(),be[i].getMarginTop());
}bh+=be[l-1].getMarginBottom();
}else{for(var i=1,l=be.length;i<l;i+=1){bh+=be[i].getMarginTop()+be[i].getMarginBottom();
}bh+=(bf*(l-1));
}return bh;
},computeHorizontalSeparatorGaps:function(P,Q,R){var U=qx.theme.manager.Decoration.getInstance().resolve(R);
var T=U.getInsets();
var S=T.left+T.right;
var V=0;

for(var i=0,l=P.length;i<l;i++){var W=P[i];
V+=W.getMarginLeft()+W.getMarginRight();
}V+=(Q+S+Q)*(l-1);
return V;
},computeVerticalSeparatorGaps:function(H,I,J){var M=qx.theme.manager.Decoration.getInstance().resolve(J);
var L=M.getInsets();
var K=L.top+L.bottom;
var N=0;

for(var i=0,l=H.length;i<l;i++){var O=H[i];
N+=O.getMarginTop()+O.getMarginBottom();
}N+=(I+K+I)*(l-1);
return N;
},arrangeIdeals:function(B,C,D,E,F,G){if(C<B||F<E){if(C<B&&F<E){C=B;
F=E;
}else if(C<B){F-=(B-C);
C=B;
if(F<E){F=E;
}}else if(F<E){C-=(E-F);
F=E;
if(C<B){C=B;
}}}
if(C>D||F>G){if(C>D&&F>G){C=D;
F=G;
}else if(C>D){F+=(C-D);
C=D;
if(F>G){F=G;
}}else if(F>G){C+=(F-G);
F=G;
if(C>D){C=D;
}}}return {begin:C,end:F};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="qx.dynlocale",j="text",i="Boolean",h="qx.client",g="color",f="userSelect",d="changeLocale",c="enabled",b="none",a="on",I="_applyTextAlign",H="qx.ui.core.Widget",G="nowrap",F="gecko",E="changeTextAlign",D="_applyWrap",C="changeValue",B="changeContent",A="qx.ui.basic.Label",z="A",r="whiteSpace",s="_applyValue",p="center",q="_applyBuddy",n="String",o="textAlign",l="right",m="changeRich",t="normal",u="_applyRich",w="click",v="label",y="webkit",x="left";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(bb){qx.ui.core.Widget.call(this);

if(bb!=null){this.setValue(bb);
}
if(qx.core.Variant.isSet(k,a)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:m,apply:u},wrap:{check:i,init:true,apply:D},value:{check:n,apply:s,event:C,nullable:true},buddy:{check:H,apply:q,nullable:true,init:null,dereference:true},textAlign:{check:[x,p,l],nullable:true,themeable:true,apply:I,event:E},appearance:{refine:true,init:v},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__gt:null,__gu:null,__gv:null,__gw:null,_getContentHint:function(){if(this.__gu){this.__gx=this.__gy();
delete this.__gu;
}return {width:this.__gx.width,height:this.__gx.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(bf){if(qx.core.Variant.isSet(h,F)){if(bf&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,bf);
if(qx.core.Variant.isSet(h,y)){this.getContainerElement().setStyle(f,bf?j:b);
this.getContentElement().setStyle(f,bf?j:b);
}},_getContentHeightForWidth:function(P){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__gy(P).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(bg,bh){this.getContentElement().setStyle(o,bg);
},_applyTextColor:function(Q,R){if(Q){this.getContentElement().setStyle(g,qx.theme.manager.Color.getInstance().resolve(Q));
}else{this.getContentElement().removeStyle(g);
}},__gx:{width:0,height:0},_applyFont:function(J,K){var L;

if(J){this.__gt=qx.theme.manager.Font.getInstance().resolve(J);
L=this.__gt.getStyles();
}else{this.__gt=null;
L=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(L);
this.__gu=true;
qx.ui.core.queue.Layout.add(this);
},__gy:function(S){var W=qx.bom.Label;
var U=this.getFont();
var T=U?this.__gt.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var V=this.getRich();
return V?W.getHtmlSize(content,T,S):W.getTextSize(content,T);
},_applyBuddy:function(Y,ba){if(ba!=null){ba.removeBinding(this.__gv);
this.__gv=null;
this.removeListenerById(this.__gw);
this.__gw=null;
}
if(Y!=null){this.__gv=Y.bind(c,this,c);
this.__gw=this.addListener(w,function(){if(Y.isFocusable()){Y.focus.apply(Y);
}},this);
}},_applyRich:function(M){this.getContentElement().setRich(M);
this.__gu=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(bc,bd){if(bc&&!this.isRich()){{};
}
if(this.isRich()){var be=bc?t:G;
this.getContentElement().setStyle(r,be);
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(N,O){this.getContentElement().setValue(N);
this.__gu=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(B,N,O);
}},destruct:function(){if(qx.core.Variant.isSet(k,a)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}if(this.__gv!=null){var X=this.getBuddy();

if(X!=null&&!X.isDisposed()){X.removeBinding(this.__gv);
}}this.__gt=this.__gv=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__dJ:null,_applyProperty:function(name,i){qx.html.Element.prototype._applyProperty.call(this,name,i);

if(name==b){var j=this.getDomElement();
qx.bom.Label.setValue(j,i);
}},_createDomElement:function(){var h=this.__dJ;
var g=qx.bom.Label.create(this._content,h);
return g;
},_copyData:function(f){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(c){var d=this.getDomElement();

if(d){throw new Error("The label mode cannot be modified after initial creation");
}c=!!c;

if(this.__dJ==c){return;
}this.__dJ=c;
return this;
},setValue:function(e){this._setProperty(b,e);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var p="qx.client",o="gecko",n="div",m="inherit",l="text",k="value",j="",i="hidden",h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="nowrap",F="auto",E="0",D="ellipsis",C="normal",B="label",A="px",z="crop",y="end",x="100%",w="visible",u="qx.bom.Label",v="opera",s="block",t="none",q="-1000px",r="absolute";
qx.Class.define(u,{statics:{__iI:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iJ:function(){var I=this.__iL(false);
document.body.insertBefore(I,document.body.firstChild);
return this._textElement=I;
},__iK:function(){var P=this.__iL(true);
document.body.insertBefore(P,document.body.firstChild);
return this._htmlElement=P;
},__iL:function(Y){var ba=qx.bom.Element.create(n);
var bb=ba.style;
bb.width=bb.height=F;
bb.left=bb.top=q;
bb.visibility=i;
bb.position=r;
bb.overflow=w;

if(Y){bb.whiteSpace=C;
}else{bb.whiteSpace=g;

if(qx.core.Variant.isSet(p,o)){var bc=document.createElementNS(h,B);
var bb=bc.style;
bb.padding=E;

for(var bd in this.__iI){bb[bd]=m;
}ba.appendChild(bc);
}}return ba;
},__iM:function(Q){var R={};

if(Q){R.whiteSpace=C;
}else if(qx.core.Variant.isSet(p,o)){R.display=s;
}else{R.overflow=i;
R.whiteSpace=g;
R.textOverflow=D;
R.userSelect=t;
if(qx.core.Variant.isSet(p,v)){R.OTextOverflow=D;
}}return R;
},create:function(content,a,b){if(!b){b=window;
}
if(a){var c=b.document.createElement(n);
c.useHtml=true;
}else if(qx.core.Variant.isSet(p,o)){var c=b.document.createElement(n);
var e=b.document.createElementNS(h,B);
var d=e.style;
d.cursor=m;
d.color=m;
d.overflow=i;
d.maxWidth=x;
d.padding=E;
for(var f in this.__iI){e.style[f]=m;
}e.setAttribute(z,y);
c.appendChild(e);
}else{var c=b.document.createElement(n);
qx.bom.element.Style.setStyles(c,this.__iM(a));
}
if(content){this.setValue(c,content);
}return c;
},setValue:function(G,H){H=H||j;

if(G.useHtml){G.innerHTML=H;
}else if(qx.core.Variant.isSet(p,o)){G.firstChild.setAttribute(k,H);
}else{qx.bom.element.Attribute.set(G,l,H);
}},getValue:function(X){if(X.useHtml){return X.innerHTML;
}else if(qx.core.Variant.isSet(p,o)){return X.firstChild.getAttribute(k)||j;
}else{return qx.bom.element.Attribute.get(X,l);
}},getHtmlSize:function(content,M,N){var O=this._htmlElement||this.__iK();
O.style.width=N!==undefined?N+A:F;
O.innerHTML=content;
return this.__iN(O,M);
},getTextSize:function(J,K){var L=this._textElement||this.__iJ();

if(qx.core.Variant.isSet(p,o)){L.firstChild.setAttribute(k,J);
}else{qx.bom.element.Attribute.set(L,l,J);
}return this.__iN(L,K);
},__iN:function(S,T){var U=this.__iI;

if(!T){T={};
}
for(var V in U){S.style[V]=T[V]||j;
}var W=qx.bom.element.Dimension.getSize(S);

if(qx.core.Variant.isSet(p,o)){if(!qx.bom.client.Platform.WIN){W.width++;
}}return W;
}}});
})();
(function(){var j="0px",i="mshtml",h="qx.client",g="qx.bom.element.Dimension",f="paddingRight",e="paddingLeft",d="paddingTop",c="paddingBottom";
qx.Class.define(g,{statics:{getWidth:qx.core.Variant.select(h,{"gecko":function(a){if(a.getBoundingClientRect){var b=a.getBoundingClientRect();
return Math.round(b.right)-Math.round(b.left);
}else{return a.offsetWidth;
}},"default":function(l){return l.offsetWidth;
}}),getHeight:qx.core.Variant.select(h,{"gecko":function(m){if(m.getBoundingClientRect){var n=m.getBoundingClientRect();
return Math.round(n.bottom)-Math.round(n.top);
}else{return m.offsetHeight;
}},"default":function(D){return D.offsetHeight;
}}),getSize:function(C){return {width:this.getWidth(C),height:this.getHeight(C)};
},__hz:{visible:true,hidden:true},getContentWidth:function(o){var q=qx.bom.element.Style;
var r=qx.bom.element.Overflow.getX(o);
var s=parseInt(q.get(o,e)||j,10);
var u=parseInt(q.get(o,f)||j,10);

if(this.__hz[r]){return o.clientWidth-s-u;
}else{if(o.clientWidth>=o.scrollWidth){return Math.max(o.clientWidth,o.scrollWidth)-s-u;
}else{var t=o.scrollWidth-s;
var p=qx.bom.client.Engine;

if(p.NAME===i&&p.VERSION==6){t-=u;
}return t;
}}},getContentHeight:function(v){var x=qx.bom.element.Style;
var z=qx.bom.element.Overflow.getY(v);
var A=parseInt(x.get(v,d)||j,10);
var y=parseInt(x.get(v,c)||j,10);

if(this.__hz[z]){return v.clientHeight-A-y;
}else{if(v.clientHeight>=v.scrollHeight){return Math.max(v.clientHeight,v.scrollHeight)-A-y;
}else{var B=v.scrollHeight-A;
var w=qx.bom.client.Engine;

if(w.NAME===i&&w.VERSION==6){B-=y;
}return B;
}}},getContentSize:function(k){return {width:this.getContentWidth(k),height:this.getContentHeight(k)};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(g){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(a){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__qU",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__qU=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__qU:null,_applyBlockerColor:function(i,j){this.__qU.setColor(i);
},_applyBlockerOpacity:function(g,h){this.__qU.setOpacity(g);
},block:function(){this.__qU.block();
},isBlocked:function(){return this.__qU.isBlocked();
},unblock:function(){this.__qU.unblock();
},forceUnblock:function(){this.__qU.forceUnblock();
},blockContent:function(k){this.__qU.blockContent(k);
},isContentBlocked:function(){return this.__qU.isContentBlocked();
},unblockContent:function(){this.__qU.unblockContent();
},forceUnblockContent:function(){this.__qU.forceUnblockContent();
},getBlocker:function(){return this.__qU;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__nh",b="__ng",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__ng:null,__nh:null,getWindowManager:function(){if(!this.__nh){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__nh;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__nh){this.__nh.setDesktop(null);
}j.setDesktop(this);
this.__nh=j;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(m,n){this.getWindowManager().changeActiveWindow(m,n);
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._addWindow(o);
}},_addWindow:function(k){if(!qx.lang.Array.contains(this.getWindows(),k)){this.getWindows().push(k);
k.addListener(f,this._onChangeActive,this);
k.addListener(h,this._onChangeModal,this);
k.addListener(g,this._onChangeVisibility,this);
}
if(k.getActive()){this.setActiveWindow(k);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(p){if(qx.Class.isDefined(i)&&p instanceof qx.ui.window.Window){this._removeWindow(p);
}},_removeWindow:function(l){qx.lang.Array.remove(this.getWindows(),l);
l.removeListener(f,this._onChangeActive,this);
l.removeListener(h,this._onChangeModal,this);
l.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ng){this.__ng=[];
}return this.__ng;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__mh:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(w,x){},"default":function(y,z){var A=qx.bom.Stylesheet;
var B=this.__mh;

if(!B){this.__mh=B=A.createElement();
}A.removeAllRules(B);

if(y){A.addRule(B,a,qx.bom.element.Cursor.compile(y).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(u,v){if(u){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(q,r){if(r===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(q===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__mh=null;
},defer:function(s,t){qx.ui.core.MChildrenHandling.remap(t);
}});
})();
(function(){var o="resize",n="position",m="0px",l="webkit",k="paddingLeft",j="$$widget",i="qx.ui.root.Application",h="hidden",g="qx.client",f="div",b="paddingTop",d="100%",c="absolute";
qx.Class.define(i,{extend:qx.ui.root.Abstract,construct:function(a){this.__qV=qx.dom.Node.getWindow(a);
this.__qW=a;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__qV,o,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__qV:null,__qW:null,_createContainerElement:function(){var s=this.__qW;
if(qx.core.Variant.isSet(g,l)){if(!s.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var w=s.documentElement.style;
var t=s.body.style;
w.overflow=t.overflow=h;
w.padding=w.margin=t.padding=t.margin=m;
w.width=w.height=t.width=t.height=d;
var v=s.createElement(f);
s.body.appendChild(v);
var u=new qx.html.Root(v);
u.setStyle(n,c);
u.setAttribute(j,this.toHashCode());
return u;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var x=qx.bom.Viewport.getWidth(this.__qV);
var y=qx.bom.Viewport.getHeight(this.__qV);
return {minWidth:x,width:x,maxWidth:x,minHeight:y,height:y,maxHeight:y};
},_applyPadding:function(z,A,name){if(z&&(name==b||name==k)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,z,A,name);
},_applyDecorator:function(p,q){qx.ui.root.Abstract.prototype._applyDecorator.call(this,p,q);

if(!p){return;
}var r=this.getDecoratorElement().getInsets();

if(r.left||r.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__qV=this.__qW=null;
}});
})();
(function(){var B="zIndex",A="px",z="keydown",y="deactivate",x="resize",w="keyup",v="keypress",u="backgroundColor",t="_applyOpacity",s="Boolean",N="__oR",M="opacity",L="interval",K="Tab",J="Color",I="__oP",H="qx.ui.root.Page",G="__oN",F="Number",E="qx.ui.core.Blocker",C="qx.ui.root.Application",D="_applyColor";
qx.Class.define(E,{extend:qx.core.Object,construct:function(q){qx.core.Object.call(this);
this._widget=q;
this._isPageRoot=(qx.Class.isDefined(H)&&q instanceof qx.ui.root.Page);

if(this._isPageRoot){q.addListener(x,this.__oS,this);
}
if(qx.Class.isDefined(C)&&q instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__oK=[];
this.__oL=[];
this.__oM=[];
},properties:{color:{check:J,init:null,nullable:true,apply:D,themeable:true},opacity:{check:F,init:1,apply:t,themeable:true},keepBlockerActive:{check:s,init:false}},members:{__oN:null,__oO:0,__oP:null,__oM:null,__oK:null,__oL:null,__oQ:null,__oR:null,_isPageRoot:false,_widget:null,__oS:function(e){var T=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:T.width,height:T.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:T.width,height:T.height});
}},_applyColor:function(g,h){var j=qx.theme.manager.Color.getInstance().resolve(g);
this.__oT(u,j);
},_applyOpacity:function(b,c){this.__oT(M,b);
},__oT:function(n,o){var p=[];
this.__oN&&p.push(this.__oN);
this.__oP&&p.push(this.__oP);

for(var i=0;i<p.length;i++){p[i].setStyle(n,o);
}},_backupActiveWidget:function(){var a=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__oK.push(a.getActive());
this.__oL.push(a.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var m=this.__oK.length;

if(m>0){var l=this.__oK[m-1];

if(l){qx.bom.Element.activate(l);
}this.__oK.pop();
}var k=this.__oL.length;

if(k>0){var l=this.__oL[k-1];

if(l){qx.bom.Element.focus(this.__oL[k-1]);
}this.__oL.pop();
}},__oU:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__oN){this.__oN=this.__oU();
this.__oN.setStyle(B,15);
this._widget.getContainerElement().add(this.__oN);
this.__oN.exclude();
}return this.__oN;
},block:function(){this.__oO++;

if(this.__oO<2){this._backupActiveWidget();
var Q=this.getBlockerElement();
Q.include();
Q.activate();
Q.addListener(y,this.__pa,this);
Q.addListener(v,this.__oY,this);
Q.addListener(z,this.__oY,this);
Q.addListener(w,this.__oY,this);
}},isBlocked:function(){return this.__oO>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__oO--;

if(this.__oO<1){this.__oV();
this.__oO=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__oO=0;
this.__oV();
},__oV:function(){this._restoreActiveWidget();
var U=this.getBlockerElement();
U.removeListener(y,this.__pa,this);
U.removeListener(v,this.__oY,this);
U.removeListener(z,this.__oY,this);
U.removeListener(w,this.__oY,this);
U.exclude();
},getContentBlockerElement:function(){if(!this.__oP){this.__oP=this.__oU();
this._widget.getContentElement().add(this.__oP);
this.__oP.exclude();
}return this.__oP;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(B,O);
this.__oM.push(O);

if(this.__oM.length<2){P.include();

if(this._isPageRoot){if(!this.__oR){this.__oR=new qx.event.Timer(300);
this.__oR.addListener(L,this.__oX,this);
}this.__oR.start();
this.__oX();
}}},isContentBlocked:function(){return this.__oM.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oM.pop();
var R=this.__oM[this.__oM.length-1];
var S=this.getContentBlockerElement();
S.setStyle(B,R);

if(this.__oM.length<1){this.__oW();
this.__oM=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oM=[];
var r=this.getContentBlockerElement();
r.setStyle(B,null);
this.__oW();
},__oW:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__oR.stop();
}},__oX:function(){var d=this._widget.getContainerElement().getDomElement();
var f=qx.dom.Node.getDocument(d);
this.getContentBlockerElement().setStyles({height:f.documentElement.scrollHeight+A,width:f.documentElement.scrollWidth+A});
},__oY:function(e){if(e.getKeyIdentifier()==K){e.stop();
}},__pa:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(x,this.__oS,this);
}this._disposeObjects(I,G,N);
this.__oQ=this.__oK=this.__oL=this._widget=this.__oM=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="qx.client",b="div",a="dblclick",w="mousewheel",v="qx.html.Blocker",u="mousemove",t="mouseover",s="appear",r="click",q="mshtml",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(v,{extend:qx.html.Element,construct:function(y,z){var y=y?qx.theme.manager.Color.getInstance().resolve(y):null;
var A={position:m,width:j,height:j,opacity:z||0,backgroundColor:y};
if(qx.core.Variant.isSet(c,q)){A.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
A.backgroundRepeat=i;
}qx.html.Element.call(this,b,A);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(s,this.__pY,this);
this.addListener(n,this.__pY,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__pY:function(){var x=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,x,true);
}}});
})();
(function(){var X="keypress",W="focusout",V="__bH",U="activate",T="Tab",S="singleton",R="deactivate",Q="focusin",P="qx.ui.core.FocusHandler";
qx.Class.define(P,{extend:qx.core.Object,type:S,construct:function(){qx.core.Object.call(this);
this.__bH={};
},members:{__bH:null,__bI:null,__bJ:null,__bK:null,connectTo:function(Y){Y.addListener(X,this.__bL,this);
Y.addListener(Q,this._onFocusIn,this,true);
Y.addListener(W,this._onFocusOut,this,true);
Y.addListener(U,this._onActivate,this,true);
Y.addListener(R,this._onDeactivate,this,true);
},addRoot:function(c){this.__bH[c.$$hash]=c;
},removeRoot:function(k){delete this.__bH[k.$$hash];
},getActiveWidget:function(){return this.__bI;
},isActive:function(d){return this.__bI==d;
},getFocusedWidget:function(){return this.__bJ;
},isFocused:function(F){return this.__bJ==F;
},isFocusRoot:function(bb){return !!this.__bH[bb.$$hash];
},_onActivate:function(e){var n=e.getTarget();
this.__bI=n;
var m=this.__bM(n);

if(m!=this.__bK){this.__bK=m;
}},_onDeactivate:function(e){var K=e.getTarget();

if(this.__bI==K){this.__bI=null;
}},_onFocusIn:function(e){var ba=e.getTarget();

if(ba!=this.__bJ){this.__bJ=ba;
ba.visualizeFocus();
}},_onFocusOut:function(e){var J=e.getTarget();

if(J==this.__bJ){this.__bJ=null;
J.visualizeBlur();
}},__bL:function(e){if(e.getKeyIdentifier()!=T){return;
}
if(!this.__bK){return;
}e.stopPropagation();
e.preventDefault();
var o=this.__bJ;

if(!e.isShiftPressed()){var p=o?this.__bQ(o):this.__bO();
}else{var p=o?this.__bR(o):this.__bP();
}if(p){p.tabFocus();
}},__bM:function(a){var b=this.__bH;

while(a){if(b[a.$$hash]){return a;
}a=a.getLayoutParent();
}return null;
},__bN:function(q,r){if(q===r){return 0;
}var t=q.getTabIndex()||0;
var s=r.getTabIndex()||0;

if(t!=s){return t-s;
}var y=q.getContainerElement().getDomElement();
var x=r.getContainerElement().getDomElement();
var w=qx.bom.element.Location;
var v=w.get(y);
var u=w.get(x);
if(v.top!=u.top){return v.top-u.top;
}if(v.left!=u.left){return v.left-u.left;
}var z=q.getZIndex();
var A=r.getZIndex();

if(z!=A){return z-A;
}return 0;
},__bO:function(){return this.__bU(this.__bK,null);
},__bP:function(){return this.__bV(this.__bK,null);
},__bQ:function(L){var M=this.__bK;

if(M==L){return this.__bO();
}
while(L&&L.getAnonymous()){L=L.getLayoutParent();
}
if(L==null){return [];
}var N=[];
this.__bS(M,L,N);
N.sort(this.__bN);
var O=N.length;
return O>0?N[0]:this.__bO();
},__bR:function(f){var g=this.__bK;

if(g==f){return this.__bP();
}
while(f&&f.getAnonymous()){f=f.getLayoutParent();
}
if(f==null){return [];
}var h=[];
this.__bT(g,f,h);
h.sort(this.__bN);
var j=h.length;
return j>0?h[j-1]:this.__bP();
},__bS:function(parent,bf,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()&&this.__bN(bf,bi)<0){bg.push(bi);
}this.__bS(bi,bf,bg);
}}},__bT:function(parent,B,C){var D=parent.getLayoutChildren();
var E;

for(var i=0,l=D.length;i<l;i++){E=D[i];
if(!(E instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(E)&&E.isEnabled()&&E.isVisible()){if(E.isTabable()&&this.__bN(B,E)>0){C.push(E);
}this.__bT(E,B,C);
}}},__bU:function(parent,G){var H=parent.getLayoutChildren();
var I;

for(var i=0,l=H.length;i<l;i++){I=H[i];
if(!(I instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(I)&&I.isEnabled()&&I.isVisible()){if(I.isTabable()){if(G==null||this.__bN(I,G)<0){G=I;
}}G=this.__bU(I,G);
}}return G;
},__bV:function(parent,bc){var bd=parent.getLayoutChildren();
var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
if(!(be instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bc==null||this.__bN(be,bc)>0){bc=be;
}}bc=this.__bV(be,bc);
}}return bc;
}},destruct:function(){this._disposeMap(V);
this.__bJ=this.__bI=this.__bK=null;
}});
})();
(function(){var l="qx.client",k="head",j="text/css",h="stylesheet",g="}",f='@import "',e="{",d='";',c="qx.bom.Stylesheet",b="link",a="style";
qx.Class.define(c,{statics:{includeFile:function(m,n){if(!n){n=document;
}var o=n.createElement(b);
o.type=j;
o.rel=h;
o.href=qx.util.ResourceManager.getInstance().toUri(m);
var p=n.getElementsByTagName(k)[0];
p.appendChild(o);
},createElement:qx.core.Variant.select(l,{"mshtml":function(ba){var bb=document.createStyleSheet();

if(ba){bb.cssText=ba;
}return bb;
},"default":function(N){var O=document.createElement(a);
O.type=j;

if(N){O.appendChild(document.createTextNode(N));
}document.getElementsByTagName(k)[0].appendChild(O);
return O.sheet;
}}),addRule:qx.core.Variant.select(l,{"mshtml":function(B,C,D){B.addRule(C,D);
},"default":function(u,v,w){u.insertRule(v+e+w+g,u.cssRules.length);
}}),removeRule:qx.core.Variant.select(l,{"mshtml":function(E,F){var G=E.rules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.removeRule(i);
}}},"default":function(V,W){var X=V.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;--i){if(X[i].selectorText==W){V.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(l,{"mshtml":function(bc){var bd=bc.rules;
var be=bd.length;

for(var i=be-1;i>=0;i--){bc.removeRule(i);
}},"default":function(S){var T=S.cssRules;
var U=T.length;

for(var i=U-1;i>=0;i--){S.deleteRule(i);
}}}),addImport:qx.core.Variant.select(l,{"mshtml":function(I,J){I.addImport(J);
},"default":function(bf,bg){bf.insertRule(f+bg+d,bf.cssRules.length);
}}),removeImport:qx.core.Variant.select(l,{"mshtml":function(q,r){var s=q.imports;
var t=s.length;

for(var i=t-1;i>=0;i--){if(s[i].href==r){q.removeImport(i);
}}},"default":function(x,y){var z=x.cssRules;
var A=z.length;

for(var i=A-1;i>=0;i--){if(z[i].href==y){x.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(l,{"mshtml":function(K){var L=K.imports;
var M=L.length;

for(var i=M-1;i>=0;i--){K.removeImport(i);
}},"default":function(P){var Q=P.cssRules;
var R=Q.length;

for(var i=R-1;i>=0;i--){if(Q[i].type==Q[i].IMPORT_RULE){P.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(v,w){var H=this._getLayoutChildren();
var z,G,E;
var J,top,x,y,B,A;
var F,D,I,C;

for(var i=0,l=H.length;i<l;i++){z=H[i];
G=z.getSizeHint();
E=z.getLayoutProperties();
F=z.getMarginTop();
D=z.getMarginRight();
I=z.getMarginBottom();
C=z.getMarginLeft();
J=E.left!=null?E.left:E.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*v/100);
}x=E.right!=null?E.right:E.edge;

if(qx.lang.Type.isString(x)){x=Math.round(parseFloat(x)*v/100);
}top=E.top!=null?E.top:E.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*w/100);
}y=E.bottom!=null?E.bottom:E.edge;

if(qx.lang.Type.isString(y)){y=Math.round(parseFloat(y)*w/100);
}if(J!=null&&x!=null){B=v-J-x-C-D;
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}J+=C;
}else{B=E.width;

if(B==null){B=G.width;
}else{B=Math.round(parseFloat(B)*v/100);
if(B<G.minWidth){B=G.minWidth;
}else if(B>G.maxWidth){B=G.maxWidth;
}}
if(x!=null){J=v-B-x-D-C;
}else if(J==null){J=C;
}else{J+=C;
}}if(top!=null&&y!=null){A=w-top-y-F-I;
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}top+=F;
}else{A=E.height;

if(A==null){A=G.height;
}else{A=Math.round(parseFloat(A)*w/100);
if(A<G.minHeight){A=G.minHeight;
}else if(A>G.maxHeight){A=G.maxHeight;
}}
if(y!=null){top=w-A-y-I-F;
}else if(top==null){top=F;
}else{top+=F;
}}z.renderLayout(J,top,B,A);
}},_computeSizeHint:function(){var t=0,s=0;
var q=0,o=0;
var m,k;
var j,g;
var c=this._getLayoutChildren();
var f,r,e;
var u,top,d,h;

for(var i=0,l=c.length;i<l;i++){f=c[i];
r=f.getLayoutProperties();
e=f.getSizeHint();
var p=f.getMarginLeft()+f.getMarginRight();
var n=f.getMarginTop()+f.getMarginBottom();
m=e.width+p;
k=e.minWidth+p;
u=r.left!=null?r.left:r.edge;

if(u&&typeof u===b){m+=u;
k+=u;
}d=r.right!=null?r.right:r.edge;

if(d&&typeof d===b){m+=d;
k+=d;
}t=Math.max(t,m);
s=Math.max(s,k);
j=e.height+n;
g=e.minHeight+n;
top=r.top!=null?r.top:r.edge;

if(top&&typeof top===b){j+=top;
g+=top;
}h=r.bottom!=null?r.bottom:r.edge;

if(h&&typeof h===b){j+=h;
g+=h;
}q=Math.max(q,j);
o=Math.max(o,g);
}return {width:t,minWidth:s,height:q,minHeight:o};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__fE:null,__fF:null,__fG:null,__fH:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__fI:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__fE&&this.__fE.length!=length&&this.__fF&&this.__fE;
var u;
var s=r?this.__fE:new Array(length);
var v=r?this.__fF:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__fE=s;
this.__fF=v;
}this.__fG=t;
this.__fH=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(M,N){if(this._invalidChildrenCache){this.__fI();
}var T=this.__fH;
var length=T.length;
var bd=qx.ui.layout.Util;
var bc=this.getSpacing();
var bg=this.getSeparator();

if(bg){var Q=bd.computeHorizontalSeparatorGaps(T,bc,bg);
}else{var Q=bd.computeHorizontalGaps(T,bc,true);
}var i,O,ba,Y;
var bf=[];
var U=Q;

for(i=0;i<length;i+=1){Y=this.__fE[i];
ba=Y!=null?Math.floor((M-Q)*Y):T[i].getSizeHint().width;
bf.push(ba);
U+=ba;
}if(this.__fG&&U!=M){var W={};
var bb,be;

for(i=0;i<length;i+=1){bb=this.__fF[i];

if(bb>0){V=T[i].getSizeHint();
W[i]={min:V.minWidth,value:bf[i],max:V.maxWidth,flex:bb};
}}var R=bd.computeFlexOffsets(W,M,U);

for(i in R){be=R[i].offset;
bf[i]+=be;
U+=be;
}}var bk=T[0].getMarginLeft();
if(U<M&&this.getAlignX()!=m){bk=M-U;

if(this.getAlignX()===k){bk=Math.round(bk/2);
}}var V,top,P,ba,S,bi,X;
var bc=this.getSpacing();
this._clearSeparators();
if(bg){var bh=qx.theme.manager.Decoration.getInstance().resolve(bg).getInsets();
var bj=bh.left+bh.right;
}for(i=0;i<length;i+=1){O=T[i];
ba=bf[i];
V=O.getSizeHint();
bi=O.getMarginTop();
X=O.getMarginBottom();
P=Math.max(V.minHeight,Math.min(N-bi-X,V.maxHeight));
top=bd.computeVerticalAlignOffset(O.getAlignY()||this.getAlignY(),P,N,bi,X);
if(i>0){if(bg){bk+=S+bc;
this._renderSeparator(bg,{left:bk,top:0,width:bj,height:N});
bk+=bj+bc+O.getMarginLeft();
}else{bk+=bd.collapseMargins(bc,S,O.getMarginLeft());
}}O.renderLayout(bk,top,ba,P);
bk+=ba;
S=O.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__fI();
}var D=qx.ui.layout.Util;
var L=this.__fH;
var x=0,E=0,B=0;
var A=0,C=0;
var I,y,K;
for(var i=0,l=L.length;i<l;i+=1){I=L[i];
y=I.getSizeHint();
E+=y.width;
var H=this.__fF[i];
var z=this.__fE[i];

if(H){x+=y.minWidth;
}else if(z){B=Math.max(B,Math.round(y.minWidth/z));
}else{x+=y.width;
}K=I.getMarginTop()+I.getMarginBottom();
if((y.height+K)>C){C=y.height+K;
}if((y.minHeight+K)>A){A=y.minHeight+K;
}}x+=B;
var G=this.getSpacing();
var J=this.getSeparator();

if(J){var F=D.computeHorizontalSeparatorGaps(L,G,J);
}else{var F=D.computeHorizontalGaps(L,G,true);
}return {minWidth:x+F,width:E+F,minHeight:A,height:C};
}},destruct:function(){this.__fE=this.__fF=this.__fH=null;
}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__kg:null,__kh:false,__ki:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var u=this.getCommand();

if(u){if(this.__kh){this.__kh=false;
}else{this.__kh=true;
u.execute(this);
}}this.fireEvent(n);
},__kj:function(e){if(this.__kh){this.__kh=false;
return;
}this.__kh=true;
this.execute();
},_applyCommand:function(o,p){if(p!=null){p.removeListenerById(this.__ki);
}
if(o!=null){this.__ki=o.addListener(n,this.__kj,this);
}var s=this.__kg;

if(s==null){this.__kg=s={};
}
for(var i=0;i<this._bindableProperties.length;i++){var r=this._bindableProperties[i];
if(p!=null&&s[r]!=null){p.removeBinding(s[r]);
s[r]=null;
}if(o!=null&&qx.Class.hasProperty(this.constructor,r)){var q=o.get(r);

if(q==null){var t=this.get(r);
}s[r]=o.bind(r,this,r);
if(t){this.set(r,t);
}}}}},destruct:function(){this.__kg=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(p,q,r){qx.ui.basic.Atom.call(this,p,q);

if(r!=null){this.setCommand(r);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var s=this.hasState(o);
var t=this.hasState(n);

if(s){this.removeState(o);
}
if(t){this.removeState(n);
}else{this.addState(m);

if(s){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var m="'>",l="[",k=", ",h="</span>",g="<span class='type-",f="</span> ",e="}",d="",c="]",b="{",J="map",I="<span class='object'>",H="]:",G="&gt;",F="<span class='object' title='Object instance with hash code: ",E="string",D="level-",C="0",B="&lt;",A="<span class='offset'>",t=":",u="qx.log.appender.Util",r="&amp;",s="&#39;",p="DIV",q="<span>",n="&quot;",o="<span class='type-key'>",v="</span>:<span class='type-",w="</span>: ",y=" ",x="]</span>: ",z="?";
qx.Class.define(u,{statics:{toHtml:function(R){var bc=[];
var Y,bb,T,V;
bc.push(A,this.formatOffset(R.offset,6),f);

if(R.object){var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object);

if(S){bc.push(F+S.$$hash+m,S.classname,l,S.$$hash,x);
}}else if(R.clazz){bc.push(I+R.clazz.classname,w);
}var U=R.items;

for(var i=0,ba=U.length;i<ba;i++){Y=U[i];
bb=Y.text;

if(bb instanceof Array){var V=[];

for(var j=0,X=bb.length;j<X;j++){T=bb[j];

if(typeof T===E){V.push(q+this.escapeHTML(T)+h);
}else if(T.key){V.push(o+T.key+v+T.type+m+this.escapeHTML(T.text)+h);
}else{V.push(g+T.type+m+this.escapeHTML(T.text)+h);
}}bc.push(g+Y.type+m);

if(Y.type===J){bc.push(b,V.join(k),e);
}else{bc.push(l,V.join(k),c);
}bc.push(h);
}else{bc.push(g+Y.type+m+this.escapeHTML(bb)+f);
}}var W=document.createElement(p);
W.innerHTML=bc.join(d);
W.className=D+R.level;
return W;
},formatOffset:function(M,length){var P=M.toString();
var N=(length||6)-P.length;
var O=d;

for(var i=0;i<N;i++){O+=C;
}return O+P;
},escapeHTML:function(Q){return String(Q).replace(/[<>&"']/g,this.__uj);
},__uj:function(K){var L={"<":B,">":G,"&":r,"'":s,'"':n};
return L[K]||z;
},toText:function(a){return this.toTextArray(a).join(y);
},toTextArray:function(bd){var bl=[];
bl.push(this.formatOffset(bd.offset,6));

if(bd.object){var be=bd.win.qx.core.ObjectRegistry.fromHashCode(bd.object);

if(be){bl.push(be.classname+l+be.$$hash+H);
}}else if(bd.clazz){bl.push(bd.clazz.classname+t);
}var bf=bd.items;
var bi,bk;

for(var i=0,bj=bf.length;i<bj;i++){bi=bf[i];
bk=bi.text;

if(bk instanceof Array){var bg=[];

for(var j=0,bh=bk.length;j<bh;j++){bg.push(bk[j].text);
}
if(bi.type===J){bl.push(b,bg.join(k),e);
}else{bl.push(l,bg.join(k),c);
}}else{bl.push(bk);
}}return bl;
}}});
})();
(function(){var d="debug",c="log",b="qx.log.appender.Native",a="qx.client";
qx.Class.define(b,{statics:{process:qx.core.Variant.select(a,{"gecko":function(l){if(window.console&&console.firebug){console[l.level].call(console,qx.log.appender.Util.toText(l));
}},"mshtml":function(h){if(window.console){var j=h.level;

if(j==d){j=c;
}var i=qx.log.appender.Util.toText(h);
console[j](i);
}},"webkit":function(e){if(window.console){var g=e.level;

if(g==d){g=c;
}var f=qx.log.appender.Util.toText(e);
console[g](f);
}},"opera":function(k){}})},defer:function(m){qx.log.Logger.register(m);
}});
})();
(function(){var k="",j='</div>',i="Up",h="none",g="keypress",f='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',d="Enter",c="px",b='.qxconsole .messages .user-result{background:white}',a='.qxconsole .messages .level-error{background:#FFE2D5}',V="div",U="user-command",T='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",r='.qxconsole .messages .level-user{background:#E3EFE9}',s='<div class="qxconsole">',p="D",q='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',n='.qxconsole .messages .type-string{color:black;font-weight:normal;}',o='.qxconsole .control a{text-decoration:none;color:black;}',l='<div class="messages">',m='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',t='<input type="text"/>',u="clear",B='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',z='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',F='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',I='.qxconsole .messages .user-command{color:blue}',H="F7",w="qx.log.appender.Console",L='.qxconsole .messages .level-info{background:#DEEDFA}',K="block",J='.qxconsole .messages .level-warn{background:#FFF7D5}',v='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',x='.qxconsole .messages .user-error{background:#FFE2D5}',y='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',A='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',C=">>> ",E="Down",G='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(w,{statics:{init:function(){var bc=[F,y,o,f,P,I,b,x,O,L,J,a,r,n,G,m,z,q,R,N,Q,v,D,B,S];
qx.bom.Stylesheet.createElement(bc.join(k));
var be=[s,A,l,j,T,t,j,j];
var bf=document.createElement(M);
bf.innerHTML=be.join(k);
var bd=bf.firstChild;
document.body.appendChild(bf.firstChild);
this.__Gk=bd;
this.__Gl=bd.childNodes[1];
this.__Gm=bd.childNodes[2].firstChild;
this.__Gr();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__Gs,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__Gl.innerHTML=k;
},process:function(bg){this.__Gl.appendChild(qx.log.appender.Util.toHtml(bg));
this.__Gn();
},__Gn:function(){this.__Gl.scrollTop=this.__Gl.scrollHeight;
},__Go:true,toggle:function(){if(!this.__Gk){this.init();
}else if(this.__Gk.style.display==h){this.show();
}else{this.__Gk.style.display=h;
}},show:function(){if(!this.__Gk){this.init();
}else{this.__Gk.style.display=K;
this.__Gl.scrollTop=this.__Gl.scrollHeight;
}},__Gp:[],execute:function(){var Y=this.__Gm.value;

if(Y==k){return;
}
if(Y==u){return this.clear();
}var W=document.createElement(V);
W.innerHTML=qx.log.appender.Util.escapeHTML(C+Y);
W.className=U;
this.__Gp.push(Y);
this.__Gq=this.__Gp.length;
this.__Gl.appendChild(W);
this.__Gn();

try{var X=window.eval(Y);
}catch(bh){qx.log.Logger.error(bh);
}
if(X!==undefined){qx.log.Logger.debug(X);
}},__Gr:function(e){this.__Gl.style.height=(this.__Gk.clientHeight-this.__Gk.firstChild.offsetHeight-this.__Gk.lastChild.offsetHeight)+c;
},__Gs:function(e){var bb=e.getKeyIdentifier();
if((bb==H)||(bb==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Gk){return;
}if(!qx.dom.Hierarchy.contains(this.__Gk,e.getTarget())){return;
}if(bb==d&&this.__Gm.value!=k){this.execute();
this.__Gm.value=k;
}if(bb==i||bb==E){this.__Gq+=bb==i?-1:1;
this.__Gq=Math.min(Math.max(0,this.__Gq),this.__Gp.length);
var ba=this.__Gp[this.__Gq];
this.__Gm.value=ba||k;
this.__Gm.select();
}}},defer:function(bi){qx.event.Registration.addListener(document.documentElement,g,bi.__Gs,bi);
}});
})();
(function(){var l=": ",k="Summary: (",j="qx.dev.ObjectSummary",h="\n",g=" Objects)\n\n",f=")\r\n",e=" (",d=" Objects)\r\n\r\n",c=", ";
qx.Class.define(j,{statics:{getInfo:function(){var y={};
var F=0;
var z;
var B=qx.core.ObjectRegistry.getRegistry();

for(var C in B){z=B[C];

if(z&&z.isDisposed()===false){if(y[z.classname]==null){y[z.classname]=1;
}else{y[z.classname]++;
}F++;
}}var E=[];

for(var A in y){E.push({classname:A,number:y[A]});
}E.sort(function(a,b){return b.number-a.number;
});
var D=k+F+g;

for(var i=0;i<E.length;i++){D+=E[i].number+l+E[i].classname+h;
}return D;
},getNewObjects:function(){var n={};
var x=0;
var o;
var s=qx.core.ObjectRegistry.getRegistry();
var q={};
var w;

for(var t in s){o=s[t];

if(o&&o.__disposed===false){var r=o.classname;

if(n[r]==null){n[r]=1;
}else{n[r]++;
}w=q[r];

if(w==null){w=q[r]=new Array();
}w[w.length]=o.toHashCode();
x++;
}}
if(!this._m_dObjectList){this._m_dObjectList={};
}var m={};

for(var r in n){if(!(r in this._m_dObjectList)){this._m_dObjectList[r]=0;
}
if(this._m_dObjectList[r]>=0&&this._m_dObjectList[r]<n[r]){m[r]=n[r]-this._m_dObjectList[r];
}}this._m_dObjectList=n;
var v=[];

for(var p in m){v.push({classname:p,number:m[p],aHashCode:q[p]});
}v.sort(function(a,b){return b.number-a.number;
});
var u=k+x+d;

for(var i=0;i<v.length;i++){u+=v[i].number+l+v[i].classname+e+v[i].aHashCode.join(c)+f;
}return u;
}}});
})();
(function(){var cm="window",cl="",ck="childNodes",cj="nodeName",ci="nodeType",ch="document",cg="function",cf="firstChild",ce="qx.client",cd="external",bu="location",bt="[native code]",bs="lastChild",br="scrollY",bq="scrollWidth",bp="defaultView",bo="closed",bn="content",bm="qx",bl="</td><td>",ct="filters",cu="locationbar",cr="screenX",cs="previousSibling",cp="scrollX",cq="Global namespace is polluted by the following unknown objects:\n\n",cn="doctype",co="parent",cv="qx.dev.Pollution",cw="outerText",bS="applets",bR="parentElement",bU="designMode",bT="cookie",bW="fullScreen",bV="links",bY="pageXOffset",bX="frames",bQ="documentElement",bP="screenY",b="statusbar",c="history",d="sun",e="pkcs11",f="java",g="style",h="innerWidth",j="plugins",k="implementation",l="clientWidth",cA="compatMode",cz="length",cy="textContent",cx="controllers",cE="netscape",cD="self",cC="domConfig",cB="attributes",cG="clientHeight",cF="outerHeight",K="parentNode",L="innerHeight",I="title",J="ownerDocument",O="<table>",P="globalStorage",M="Global namespace is not polluted by any unknown objects.",N="toolbar",G="outerHTML",H="crypto",t="forms",s="scrollbars",v="frameElement",u="Components",p="body",o="clientInformation",r="offscreenBuffering",q="embeds",n="localName",m="scrollTop",U="isMultiLine",V="scrollLeft",W="images",X="event",Q="offsetHeight",R="scrollMaxY",S="sessionStorage",T="screen",Y="name",ba="offsetLeft",D="console",C="XMLHttpRequest",B="mshtml",A="nextSibling",z="innerText",y="menubar",x="scopeName",w="top",F="outerWidth",E=": ",bb="\n",bc="status",bd="contentEditable",be="anchors",bf="</table>",bg="<tr style='vertical-align:top'><td>",bh="scrollMaxX",bi="screenTop",bj="defaultStatus",bk="styleSheets",by="className",bx="personalbar",bw="</td></tr>",bv="currentStyle",bC="directories",bB="navigator",bA="pageYOffset",bz="screenLeft",bE="opener",bD="scrollHeight",bL="__firebug__",bM="Option",bJ="innerHTML",bK="tabIndex",bH="offsetTop",bI="[function]",bF="clipboardData",bG="Packages",bN="tagName",bO="offsetWidth",cb="mshtml|opera",ca="undefined",cc="Image";
qx.Class.define(cv,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bm,f,d,bG,bL,u,cx,S,P,D,X,r,bF,o,bM,cc,cd,bi,bz,cz,cm,ch,bu,bB,cE,co,bX,w,s,Y,cp,br,cD,T,c,bn,y,N,cu,bx,b,bC,bo,H,e,bE,bc,bj,h,L,F,cF,cr,bP,bY,bA,bh,R,bW,v,C],"document":[cC,bu,cA,k,bp,I,p,bk,bQ,cj,ci,cf,bs,cn,W,bS,bV,t,be,bT,q,j,bU,ck],"body":[cy,bJ,G,z,cw,x,bR,bN,ct,bd,ch,bv,U,cG,l,bs,cf,bH,ba,bO,Q,bK,by,cB,cs,A,J,n,ck,K,ci,cj,g,m,V,bq,bD]},getInfo:function(cS){var cT=qx.dev.Pollution.getTextList(cS||cm);

if(cT){return cq+cT;
}else{return M;
}},extract:function(cM){var cO=[];
var cN=qx.dev.Pollution.ignore[cM];
if(qx.core.Variant.isSet(ce,B)){if(cM==cm){cN=cN.slice(0);

for(var cP=0;cP<window.length;cP++){cN.push(cl+cP);
}}}var cQ=qx.dev.Pollution.names[cM];

for(var cR in cQ){try{if(qx.core.Variant.isSet(ce,cb)){if(cM==cm&&cR==cd){continue;
}}if(typeof cQ[cR]==ca||cQ[cR]===null){continue;
}if(typeof cQ[cR]==cg&&cQ[cR].toString().indexOf(bt)!=-1){continue;
}if(typeof cQ[cR].constructor==cg){if((cQ[cR].constructor.toString().indexOf(bt)!=-1)||(cQ[cR].constructor.toString().indexOf(bI)!=-1)){continue;
}}if(qx.lang.Array.contains(cN,cR)){continue;
}}catch(a){continue;
}cO.push({"key":cR,"value":cQ[cR]});
}return cO;
},getHtmlTable:function(cU){var cW=[];
var cV=bg;
var cY=bl;
var da=bw;
cW.push(O);
var cX=this.extract(cU);

for(var i=0;i<cX.length;i++){cW.push(cV+cX[i].key+cY+cX[i].value+da);
}cW.push(bf);
return cW.join(cl);
},getTextList:function(cH){var cJ=[];
var cK=E;
var cL=bb;
var cI=this.extract(cH);

for(var i=0;i<cI.length;i++){cJ.push(cI[i].key+cK+cI[i].value+cL);
}return cJ.join(cl);
}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__na:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__na=null;
},getInsets:function(){if(this.__na){return this.__na;
}var j=this._getDefaultInsets();
return this.__na={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__na=null;
}},destruct:function(){this.__na=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var s="_applyStyle",r="",q="Color",p="px",o="solid",n="dotted",m="double",l="dashed",k="_applyWidth",j="qx.ui.decoration.Uniform",g="px ",i=" ",h="scale",f="PositiveInteger",e="absolute";
qx.Class.define(j,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(C,D,E){qx.ui.decoration.Abstract.call(this);
if(C!=null){this.setWidth(C);
}
if(D!=null){this.setStyle(D);
}
if(E!=null){this.setColor(E);
}},properties:{width:{check:f,init:0,apply:k},style:{nullable:true,check:[o,n,l,m],init:o,apply:s},color:{nullable:true,check:q,apply:s},backgroundColor:{check:q,nullable:true,apply:s}},members:{__qT:null,_getDefaultInsets:function(){var w=this.getWidth();
return {top:w,right:w,bottom:w,left:w};
},_isInitialized:function(){return !!this.__qT;
},getMarkup:function(){if(this.__qT){return this.__qT;
}var a={position:e,top:0,left:0};
var b=this.getWidth();
{};
var d=qx.theme.manager.Color.getInstance();
a.border=b+g+this.getStyle()+i+(d.resolve(this.getColor())||r);
var c=this._generateBackgroundMarkup(a);
return this.__qT=c;
},resize:function(x,y,z){var B=this.getBackgroundImage()&&this.getBackgroundRepeat()==h;

if(B||qx.bom.client.Feature.CONTENT_BOX){var A=this.getWidth()*2;
y-=A;
z-=A;
if(y<0){y=0;
}
if(z<0){z=0;
}}x.style.width=y+p;
x.style.height=z+p;
},tint:function(t,u){var v=qx.theme.manager.Color.getInstance();

if(u==null){u=this.getBackgroundColor();
}t.style.backgroundColor=v.resolve(u)||r;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__qT=null;
}});
})();
(function(){var i="px",h="qx.ui.decoration.Background",g="",f="_applyStyle",e="Color",d="absolute";
qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(l){qx.ui.decoration.Abstract.call(this);

if(l!=null){this.setBackgroundColor(l);
}},properties:{backgroundColor:{check:e,nullable:true,apply:f}},members:{__nf:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nf;
},getMarkup:function(){if(this.__nf){return this.__nf;
}var j={position:d,top:0,left:0};
var k=this._generateBackgroundMarkup(j);
return this.__nf=k;
},resize:function(a,b,c){a.style.width=b+i;
a.style.height=c+i;
},tint:function(m,n){var o=qx.theme.manager.Color.getInstance();

if(n==null){n=this.getBackgroundColor();
}m.style.backgroundColor=o.resolve(n)||g;
},_applyStyle:function(){{};
}},destruct:function(){this.__nf=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",F=" ",E="shorthand",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",x="styleTop",w="colorBottom",q="styleBottom",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="scale",k="border-top",l="border-left",s="border-right",t="qx.ui.decoration.Single",v="border-bottom",u="absolute";
qx.Class.define(t,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(T,U,V){qx.ui.decoration.Abstract.call(this);
if(T!=null){this.setWidth(T);
}
if(U!=null){this.setStyle(U);
}
if(V!=null){this.setColor(V);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,o]},right:{group:[r,B,p]},top:{group:[C,x,m]},bottom:{group:[y,q,w]},width:{group:[C,r,y,z],mode:E},style:{group:[x,B,q,A],mode:E},color:{group:[m,p,w,o],mode:E}},members:{__pb:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__pb;
},getMarkup:function(O){if(this.__pb){return this.__pb;
}var P=qx.theme.manager.Color.getInstance();
var Q={};
var S=this.getWidthTop();

if(S>0){Q[k]=S+e+this.getStyleTop()+F+(P.resolve(this.getColorTop())||g);
}var S=this.getWidthRight();

if(S>0){Q[s]=S+e+this.getStyleRight()+F+(P.resolve(this.getColorRight())||g);
}var S=this.getWidthBottom();

if(S>0){Q[v]=S+e+this.getStyleBottom()+F+(P.resolve(this.getColorBottom())||g);
}var S=this.getWidthLeft();

if(S>0){Q[l]=S+e+this.getStyleLeft()+F+(P.resolve(this.getColorLeft())||g);
}{};
Q.position=u;
Q.top=0;
Q.left=0;
var R=this._generateBackgroundMarkup(Q);
return this.__pb=R;
},resize:function(J,K,L){var N=this.getBackgroundImage()&&this.getBackgroundRepeat()==n;

if(N||qx.bom.client.Feature.CONTENT_BOX){var M=this.getInsets();
K-=M.left+M.right;
L-=M.top+M.bottom;
if(K<0){K=0;
}
if(L<0){L=0;
}}J.style.width=K+D;
J.style.height=L+D;
},tint:function(G,H){var I=qx.theme.manager.Color.getInstance();

if(H==null){H=this.getBackgroundColor();
}G.style.backgroundColor=I.resolve(H)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__pb=null;
}});
})();
(function(){var p="Number",o="_applyInsets",n="-l",m="insetRight",l="insetTop",k="_applyBaseImage",j="insetBottom",i="set",h="shorthand",g="-t",d="insetLeft",f="String",e="qx.ui.decoration.Grid";
qx.Class.define(e,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(F,G){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__mN=new qx.ui.decoration.css3.BorderImage();

if(F){this.__mO(F);
}}else{this.__mN=new qx.ui.decoration.GridDiv(F);
}
if(G!=null){this.__mN.setInsets(G);
}},properties:{baseImage:{check:f,nullable:true,apply:k},insetLeft:{check:p,nullable:true,apply:o},insetRight:{check:p,nullable:true,apply:o},insetBottom:{check:p,nullable:true,apply:o},insetTop:{check:p,nullable:true,apply:o},insets:{group:[l,m,j,d],mode:h}},members:{__mN:null,getMarkup:function(){return this.__mN.getMarkup();
},resize:function(q,r,s){this.__mN.resize(q,r,s);
},tint:function(t,u){},getInsets:function(){return this.__mN.getInsets();
},_applyInsets:function(a,b,name){var c=i+qx.lang.String.firstUp(name);
this.__mN[c](a);
},_applyBaseImage:function(D,E){if(this.__mN instanceof qx.ui.decoration.GridDiv){this.__mN.setBaseImage(D);
}else{this.__mO(D);
}},__mO:function(v){this.__mN.setBorderImage(v);
var z=qx.util.AliasManager.getInstance().resolve(v);
var A=/(.*)(\.[a-z]+)$/.exec(z);
var x=A[1];
var y=A[2];
var w=qx.util.ResourceManager.getInstance();
var B=w.getImageHeight(x+g+y);
var C=w.getImageWidth(x+n+y);
this.__mN.setSlice([B,C]);
}},destruct:function(){this.__mN=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(P,Q,R){qx.ui.decoration.Abstract.call(this);
if(P!=null){this.setOuterColor(P);
}
if(Q!=null){this.setInnerColor(Q);
}
if(R!=null){this.setInnerOpacity(R);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__qC:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__qC;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__qC){return this.__qC;
}var w=qx.theme.manager.Color.getInstance();
var x=[];
var A=d+w.resolve(this.getOuterColor())+b;
var z=d+w.resolve(this.getInnerColor())+b;
x.push(k);
x.push(f);
x.push(e,A);
x.push(qx.bom.element.Opacity.compile(0.35));
x.push(i);
x.push(n);
x.push(q,A);
x.push(r,A);
x.push(i);
x.push(f);
x.push(m);
x.push(p,A);
x.push(s,A);
x.push(i);
var y={position:l,top:g,left:g};
x.push(this._generateBackgroundMarkup(y));
x.push(t);
x.push(e,z);
x.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
x.push(i);
x.push(v);
return this.__qC=x.join(c);
},resize:function(B,C,D){if(C<4){C=4;
}
if(D<4){D=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=C-2;
var outerHeight=D-2;
var J=outerWidth;
var I=outerHeight;
var innerWidth=C-4;
var innerHeight=D-4;
}else{var outerWidth=C;
var outerHeight=D;
var J=C-2;
var I=D-2;
var innerWidth=J;
var innerHeight=I;
}var L=a;
var H=B.childNodes[0].style;
H.width=outerWidth+L;
H.height=outerHeight+L;
var G=B.childNodes[1].style;
G.width=outerWidth+L;
G.height=I+L;
var F=B.childNodes[2].style;
F.width=J+L;
F.height=outerHeight+L;
var E=B.childNodes[3].style;
E.width=J+L;
E.height=I+L;
var K=B.childNodes[4].style;
K.width=innerWidth+L;
K.height=innerHeight+L;
},tint:function(M,N){var O=qx.theme.manager.Color.getInstance();

if(N==null){N=this.getBackgroundColor();
}M.childNodes[3].style.backgroundColor=O.resolve(N)||c;
}},destruct:function(){this.__qC=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bs="decoration/table/header-cell.png",br="decoration/form/input.png",bq="#f8f8f8",bp="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bo="#b6b6b6",bn="background-pane",bm="repeat-y",bl="decoration/form/input-focused.png",bk="#33508D",bj="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="black",p="decoration/form/button-c.png",q="decoration/scrollbar/scrollbar-bg-vertical.png",n="decoration/form/button.png",o="decoration/form/button-checked.png",B="decoration/tabview/tab-button-left-inactive.png",C="decoration/groupbox/groupbox.png",O="#FAFAFA",K="decoration/pane/pane.png",W="dotted",R="decoration/toolbar/toolbar-part.gif",bf="decoration/tabview/tab-button-top-inactive.png",bc="decoration/menu/bar-background.png",G="center",bi="decoration/tabview/tab-button-bottom-active.png",bh="decoration/form/button-hovered.png",bg="decoration/form/tooltip-error-arrow.png",F="decoration/window/captionbar-inactive.png",I="qx/decoration/Modern",J="decoration/menu/background.png",M="decoration/window/statusbar.png",P="border-focused",S="table-focus-indicator",Y="#F2F2F2",be="decoration/form/button-checked-c.png",v="decoration/scrollbar/scrollbar-bg-horizontal.png",w="qx.theme.modern.Decoration",H="#f4f4f4",V="decoration/shadow/shadow-small.png",U="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",bb="decoration/form/tooltip-error.png",ba="decoration/form/button-focused.png",Q="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",a="decoration/tabview/tab-button-right-active.png",bd="decoration/form/button-pressed.png",x="no-repeat",y="decoration/window/captionbar-active.png",L="decoration/tabview/tab-button-left-active.png",b="background-splitpane",c="decoration/form/button-checked-focused.png",E="#C5C5C5",z="decoration/toolbar/toolbar-gradient.png",A="decoration/tabview/tab-button-right-inactive.png",D="#b8b8b8",N="decoration/shadow/shadow.png";
qx.Theme.define(w,{aliases:{decoration:I},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bj,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bj,backgroundRepeat:l,bottom:[2,m,bk]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bk]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:W}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bg,backgroundPositionY:G,backgroundRepeat:x,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:v,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:q,backgroundRepeat:bm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bh,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:P,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:z,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:p,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:be,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:D,colorRight:H,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:R,backgroundRepeat:bm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bi}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:L}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:a}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bn,width:3,color:b,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bn,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:y}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:M}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:S,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthRight:1,colorRight:Y,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:E,widthBottom:1,colorBottom:O}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bc,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:l}}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var gu="button-frame",gt="atom",gs="widget",gr="main",gq="button",gp="text-selected",go="image",gn="bold",gm="middle",gl="background-light",eY="text-disabled",eX="groupbox",eW="decoration/arrows/down.png",eV="cell",eU="selected",eT="border-invalid",eS="input",eR="input-disabled",eQ="menu-button",eP="input-focused-invalid",gB="toolbar-button",gC="spinner",gz="input-focused",gA="popup",gx="tooltip",gy="label",gv="list",gw="white",gD="tree-item",gE="treevirtual-contract",fT="scrollbar",fS="datechooser/nav-button",fV="text-hovered",fU="center",fX="treevirtual-expand",fW="textfield",ga="decoration/arrows/right.png",fY="background-application",fR="radiobutton",fQ="invalid",cU="combobox",cV="right-top",cW="checkbox",cX="text-title",cY="qx/static/blank.gif",da="scrollbar/button",db="right",dc="combobox/button",dd="icon/16/places/folder.png",de="text-label",gS="decoration/tree/closed.png",gR="scrollbar-slider-horizontal",gQ="decoration/arrows/left.png",gP="button-focused",gW="text-light",gV="menu-slidebar-button",gU="text-input",gT="slidebar/button-forward",gY="background-splitpane",gX=".png",dX="decoration/tree/open.png",dY="default",dV="decoration/arrows/down-small.png",dW="datechooser",ec="slidebar/button-backward",ed="selectbox",ea="treevirtual-folder",eb="shadow-popup",dT="icon/16/mimetypes/office-document.png",dU="background-medium",dz="table",dy="decoration/arrows/up.png",dB="decoration/form/",dA="",dv="-invalid",du="icon/16/places/folder-open.png",dx="button-checked",dw="decoration/window/maximize-active-hovered.png",dt="radiobutton-hovered",ds="keyboard-focus",ej="decoration/cursors/",ek="slidebar",el="tooltip-error-arrow",em="table-scroller-focus-indicator",ef="move-frame",eg="nodrop",eh="decoration/table/boolean-true.png",ei="table-header-cell",en="menu",eo="app-header",dM="row-layer",dL="text-inactive",dK="move",dJ="radiobutton-checked-focused",dI="decoration/window/restore-active-hovered.png",dH="shadow-window",dG="table-column-button",dF="right.png",dQ="tabview-page-button-bottom-inactive",dP="tooltip-error",ep="window-statusbar",eq="button-hovered",er="decoration/scrollbar/scrollbar-",es="background-tip",et="scrollbar-slider-horizontal-disabled",eu="table-scroller-header",ev="button-pressed",ew="table-pane",ex="decoration/window/close-active.png",ey="native",fh="checkbox-hovered",fg="button-invalid-shadow",ff="checkbox-checked",fe="decoration/window/minimize-active-hovered.png",fl="menubar",fk="icon/16/actions/dialog-cancel.png",fj="tabview-page-button-top-inactive",fi="tabview-page-button-left-inactive",fp="menu-slidebar",fo="toolbar-button-checked",fM="decoration/tree/open-selected.png",fN="radiobutton-checked",fK="decoration/window/minimize-inactive.png",fL="icon/16/apps/office-calendar.png",fI="group",fJ="tabview-page-button-right-inactive",fG="decoration/window/minimize-active.png",fH="decoration/window/restore-inactive.png",fO="checkbox-checked-focused",fP="splitpane",ge="combobox/textfield",gd="button-preselected-focused",gg="decoration/window/close-active-hovered.png",gf="qx/icon/Tango/16/actions/window-close.png",gi="checkbox-pressed",gh="button-disabled",gk="selected-dragover",gj="border-separator",gc="decoration/window/maximize-inactive.png",gb="dragover",gL="scrollarea",gM="scrollbar-vertical",gN="decoration/menu/checkbox-invert.gif",gO="decoration/toolbar/toolbar-handle-knob.gif",gH="icon/22/mimetypes/office-document.png",gI="button-preselected",gJ="button-checked-focused",gK="up.png",gF="best-fit",gG="decoration/tree/closed-selected.png",cT="qx.theme.modern.Appearance",cS="text-active",cR="toolbar-button-hovered",cQ="progressive-table-header",cP="decoration/table/select-column-order.png",cO="decoration/menu/radiobutton.gif",cN="decoration/arrows/forward.png",cM="decoration/table/descending.png",cL="window-captionbar-active",cK="checkbox-checked-hovered",dh="scrollbar-slider-vertical",di="toolbar",df="alias",dg="decoration/window/restore-active.png",dl="decoration/table/boolean-false.png",dm="checkbox-checked-disabled",dj="icon/32/mimetypes/office-document.png",dk="radiobutton-checked-disabled",dp="tabview-pane",dq="decoration/arrows/rewind.png",ft="checkbox-focused",fn="top",fA="icon/16/actions/dialog-ok.png",fw="radiobutton-checked-hovered",fc="table-header-cell-hovered",fa="window",dD="text-gray",fd="decoration/menu/radiobutton-invert.gif",dO="text-placeholder",dN="slider",eH="keep-align",eI="down.png",eJ="tabview-page-button-top-active",eK="icon/32/places/folder-open.png",eL="icon/22/places/folder.png",eM="decoration/window/maximize-active.png",eN="checkbox-checked-pressed",eO="decoration/window/close-inactive.png",eF="tabview-page-button-left-active",eG="toolbar-part",fb="decoration/splitpane/knob-vertical.png",fz=".gif",fy="icon/22/places/folder-open.png",fx="radiobutton-checked-pressed",fE="table-statusbar",fD="radiobutton-pressed",fC="window-captionbar-inactive",fB="copy",fv="radiobutton-focused",fu="decoration/arrows/down-invert.png",dn="decoration/menu/checkbox.gif",dS="decoration/splitpane/knob-horizontal.png",dR="icon/32/places/folder.png",fm="toolbar-separator",ee="tabview-page-button-bottom-active",fs="decoration/arrows/up-small.png",fr="decoration/table/ascending.png",fq="decoration/arrows/up-invert.png",dC="small",fF="tabview-page-button-right-active",dr="-disabled",dE="scrollbar-horizontal",ez="progressive-table-header-cell",eA="menu-separator",eB="pane",eC="decoration/arrows/right-invert.png",eD="left.png",eE="icon/16/actions/view-refresh.png";
qx.Theme.define(cT,{appearances:{"widget":{},"root":{style:function(x){return {backgroundColor:fY,textColor:de,font:dY};
}},"label":{style:function(hR){return {textColor:hR.disabled?eY:undefined};
}},"move-frame":{style:function(bP){return {decorator:gr};
}},"resize-frame":ef,"dragdrop-cursor":{style:function(hv){var hw=eg;

if(hv.copy){hw=fB;
}else if(hv.move){hw=dK;
}else if(hv.alias){hw=df;
}return {source:ej+hw+fz,position:cV,offset:[2,16,2,6]};
}},"image":{style:function(I){return {opacity:!I.replacement&&I.disabled?0.3:1};
}},"atom":{},"atom/label":gy,"atom/icon":go,"popup":{style:function(cp){return {decorator:gr,backgroundColor:gl,shadow:eb};
}},"button-frame":{alias:gt,style:function(F){var H,G;

if(F.checked&&F.focused&&!F.inner){H=gJ;
G=undefined;
}else if(F.disabled){H=gh;
G=undefined;
}else if(F.pressed){H=ev;
G=fV;
}else if(F.checked){H=dx;
G=undefined;
}else if(F.hovered){H=eq;
G=fV;
}else if(F.preselected&&F.focused&&!F.inner){H=gd;
G=fV;
}else if(F.preselected){H=gI;
G=fV;
}else if(F.focused&&!F.inner){H=gP;
G=undefined;
}else{H=gq;
G=undefined;
}return {decorator:H,textColor:G,shadow:F.invalid&&!F.disabled?fg:undefined};
}},"button-frame/image":{style:function(cn){return {opacity:!cn.replacement&&cn.disabled?0.5:1};
}},"button":{alias:gu,include:gu,style:function(bn){return {padding:[2,8],center:true};
}},"hover-button":{alias:gt,include:gt,style:function(ht){return {decorator:ht.hovered?eU:undefined,textColor:ht.hovered?gp:undefined};
}},"splitbutton":{},"splitbutton/button":gq,"splitbutton/arrow":{alias:gq,include:gq,style:function(hH){return {icon:eW,padding:2,marginLeft:1};
}},"checkbox":{alias:gt,style:function(cB){var cD;

if(cB.checked&&cB.focused){cD=fO;
}else if(cB.checked&&cB.disabled){cD=dm;
}else if(cB.checked&&cB.pressed){cD=eN;
}else if(cB.checked&&cB.hovered){cD=cK;
}else if(cB.checked){cD=ff;
}else if(cB.focused){cD=ft;
}else if(cB.pressed){cD=gi;
}else if(cB.hovered){cD=fh;
}else{cD=cW;
}var cC=cB.invalid&&!cB.disabled?dv:dA;
return {icon:dB+cD+cC+gX,gap:6};
}},"radiobutton":{alias:gt,style:function(bb){var bd;

if(bb.checked&&bb.focused){bd=dJ;
}else if(bb.checked&&bb.disabled){bd=dk;
}else if(bb.checked&&bb.pressed){bd=fx;
}else if(bb.checked&&bb.hovered){bd=fw;
}else if(bb.checked){bd=fN;
}else if(bb.focused){bd=fv;
}else if(bb.pressed){bd=fD;
}else if(bb.hovered){bd=dt;
}else{bd=fR;
}var bc=bb.invalid&&!bb.disabled?dv:dA;
return {icon:dB+bd+bc+gX,gap:6};
}},"textfield":{style:function(hg){var hl;
var hj=!!hg.focused;
var hk=!!hg.invalid;
var hh=!!hg.disabled;

if(hj&&hk&&!hh){hl=eP;
}else if(hj&&!hk&&!hh){hl=gz;
}else if(hh){hl=eR;
}else if(!hj&&hk&&!hh){hl=eT;
}else{hl=eS;
}var hi;

if(hg.disabled){hi=eY;
}else if(hg.showingPlaceholder){hi=dO;
}else{hi=gU;
}return {decorator:hl,padding:[2,4,1],textColor:hi};
}},"textarea":{include:fW,style:function(bN){return {padding:4};
}},"spinner":{style:function(bv){var bz;
var bx=!!bv.focused;
var by=!!bv.invalid;
var bw=!!bv.disabled;

if(bx&&by&&!bw){bz=eP;
}else if(bx&&!by&&!bw){bz=gz;
}else if(bw){bz=eR;
}else if(!bx&&by&&!bw){bz=eT;
}else{bz=eS;
}return {decorator:bz};
}},"spinner/textfield":{style:function(bT){return {marginRight:2,padding:[2,4,1],textColor:bT.disabled?eY:gU};
}},"spinner/upbutton":{alias:gu,include:gu,style:function(ck){return {icon:fs,padding:ck.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gu,include:gu,style:function(hu){return {icon:dV,padding:hu.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":cU,"datefield/button":{alias:dc,include:dc,style:function(ch){return {icon:fL,padding:[0,3],decorator:undefined};
}},"datefield/textfield":ge,"datefield/list":{alias:dW,include:dW,style:function(cw){return {decorator:undefined};
}},"groupbox":{style:function(ie){return {legendPosition:fn};
}},"groupbox/legend":{alias:gt,style:function(K){return {padding:[1,0,1,4],textColor:K.invalid?fQ:cX,font:gn};
}},"groupbox/frame":{style:function(cr){return {padding:12,decorator:fI};
}},"check-groupbox":eX,"check-groupbox/legend":{alias:cW,include:cW,style:function(cv){return {padding:[1,0,1,4],textColor:cv.invalid?fQ:cX,font:gn};
}},"radio-groupbox":eX,"radio-groupbox/legend":{alias:fR,include:fR,style:function(bi){return {padding:[1,0,1,4],textColor:bi.invalid?fQ:cX,font:gn};
}},"scrollarea":{style:function(cb){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bQ){return {backgroundColor:fY};
}},"scrollarea/pane":gs,"scrollarea/scrollbar-x":fT,"scrollarea/scrollbar-y":fT,"scrollbar":{style:function(hn){if(hn[ey]){return {};
}return {width:hn.horizontal?undefined:16,height:hn.horizontal?16:undefined,decorator:hn.horizontal?dE:gM,padding:1};
}},"scrollbar/slider":{alias:dN,style:function(hI){return {padding:hI.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gu,style:function(hd){var he=hd.horizontal?gR:dh;

if(hd.disabled){he+=dr;
}return {decorator:he,minHeight:hd.horizontal?undefined:9,minWidth:hd.horizontal?9:undefined};
}},"scrollbar/button":{alias:gu,include:gu,style:function(bf){var bg=er;

if(bf.left){bg+=eD;
}else if(bf.right){bg+=dF;
}else if(bf.up){bg+=gK;
}else{bg+=eI;
}
if(bf.left||bf.right){return {padding:[0,0,0,bf.left?3:4],icon:bg,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bg,width:14,height:15};
}}},"scrollbar/button-begin":da,"scrollbar/button-end":da,"slider":{style:function(bU){var bY;
var bW=!!bU.focused;
var bX=!!bU.invalid;
var bV=!!bU.disabled;

if(bW&&bX&&!bV){bY=eP;
}else if(bW&&!bX&&!bV){bY=gz;
}else if(bV){bY=eR;
}else if(!bW&&bX&&!bV){bY=eT;
}else{bY=eS;
}return {decorator:bY};
}},"slider/knob":{include:gu,style:function(bR){return {decorator:bR.disabled?et:gR,shadow:undefined,height:14,width:14};
}},"list":{alias:gL,style:function(cc){var cg;
var ce=!!cc.focused;
var cf=!!cc.invalid;
var cd=!!cc.disabled;

if(ce&&cf&&!cd){cg=eP;
}else if(ce&&!cf&&!cd){cg=gz;
}else if(cd){cg=eR;
}else if(!ce&&cf&&!cd){cg=eT;
}else{cg=eS;
}return {backgroundColor:gl,decorator:cg};
}},"list/pane":gs,"listitem":{alias:gt,style:function(k){var l;

if(k.dragover){l=k.selected?gk:gb;
}else{l=k.selected?eU:undefined;
}return {padding:k.dragover?[4,4,2,4]:4,textColor:k.selected?gp:undefined,decorator:l};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gu,include:gu,style:function(hb){return {padding:5,center:true,icon:hb.vertical?eW:ga};
}},"slidebar/button-backward":{alias:gu,include:gu,style:function(V){return {padding:5,center:true,icon:V.vertical?dy:gQ};
}},"tabview":{style:function(ho){return {contentPadding:16};
}},"tabview/bar":{alias:ek,style:function(R){var S={marginBottom:R.barTop?-1:0,marginTop:R.barBottom?-4:0,marginLeft:R.barRight?-3:0,marginRight:R.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(R.barTop||R.barBottom){S.paddingLeft=5;
S.paddingRight=7;
}else{S.paddingTop=5;
S.paddingBottom=7;
}return S;
}},"tabview/bar/button-forward":{include:gT,alias:gT,style:function(cJ){if(cJ.barTop||cJ.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:ec,alias:ec,style:function(U){if(U.barTop||U.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(s){return {decorator:dp,minHeight:100,marginBottom:s.barBottom?-1:0,marginTop:s.barTop?-1:0,marginLeft:s.barLeft?-1:0,marginRight:s.barRight?-1:0};
}},"tabview-page":gs,"tabview-page/button":{alias:gt,style:function(hW){var id,hY=0;
var ic=0,hX=0,ia=0,ib=0;

if(hW.checked){if(hW.barTop){id=eJ;
hY=[6,14];
ia=hW.firstTab?0:-5;
ib=hW.lastTab?0:-5;
}else if(hW.barBottom){id=ee;
hY=[6,14];
ia=hW.firstTab?0:-5;
ib=hW.lastTab?0:-5;
}else if(hW.barRight){id=fF;
hY=[6,13];
ic=hW.firstTab?0:-5;
hX=hW.lastTab?0:-5;
}else{id=eF;
hY=[6,13];
ic=hW.firstTab?0:-5;
hX=hW.lastTab?0:-5;
}}else{if(hW.barTop){id=fj;
hY=[4,10];
ic=4;
ia=hW.firstTab?5:1;
ib=1;
}else if(hW.barBottom){id=dQ;
hY=[4,10];
hX=4;
ia=hW.firstTab?5:1;
ib=1;
}else if(hW.barRight){id=fJ;
hY=[4,10];
ib=5;
ic=hW.firstTab?5:1;
hX=1;
ia=1;
}else{id=fi;
hY=[4,10];
ia=5;
ic=hW.firstTab?5:1;
hX=1;
ib=1;
}}return {zIndex:hW.checked?10:5,decorator:id,padding:hY,marginTop:ic,marginBottom:hX,marginLeft:ia,marginRight:ib,textColor:hW.checked?cS:dL};
}},"tabview-page/button/label":{alias:gy,style:function(j){return {padding:[0,1,0,1],margin:j.focused?0:1,decorator:j.focused?ds:undefined};
}},"tabview-page/button/close-button":{alias:gt,style:function(be){return {icon:gf};
}},"toolbar":{style:function(t){return {decorator:di,spacing:2};
}},"toolbar/part":{style:function(hF){return {decorator:eG,spacing:2};
}},"toolbar/part/container":{style:function(cm){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(bO){return {source:gO,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gt,style:function(bl){return {marginTop:2,marginBottom:2,padding:(bl.pressed||bl.checked||bl.hovered)&&!bl.disabled||(bl.disabled&&bl.checked)?3:5,decorator:bl.pressed||(bl.checked&&!bl.hovered)||(bl.checked&&bl.disabled)?fo:bl.hovered&&!bl.disabled?cR:undefined};
}},"toolbar-menubutton":{alias:gB,include:gB,style:function(p){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:go,include:go,style:function(br){return {source:dV};
}},"toolbar-splitbutton":{style:function(c){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gB,include:gB,style:function(E){return {icon:eW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gB,include:gB,style:function(cG){return {padding:cG.pressed||cG.checked?1:cG.hovered?1:3,icon:eW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hE){return {decorator:fm,margin:7};
}},"tree":gv,"tree-item":{style:function(bM){return {padding:[2,6],textColor:bM.selected?gp:undefined,decorator:bM.selected?eU:undefined};
}},"tree-item/icon":{include:go,style:function(bD){return {paddingRight:5};
}},"tree-item/label":gy,"tree-item/open":{include:go,style:function(hL){var hM;

if(hL.selected&&hL.opened){hM=fM;
}else if(hL.selected&&!hL.opened){hM=gG;
}else if(hL.opened){hM=dX;
}else{hM=gS;
}return {padding:[0,5,0,2],source:hM};
}},"tree-folder":{include:gD,alias:gD,style:function(W){var X;

if(W.small){X=W.opened?du:dd;
}else if(W.large){X=W.opened?eK:dR;
}else{X=W.opened?fy:eL;
}return {icon:X};
}},"tree-file":{include:gD,alias:gD,style:function(bF){return {icon:bF.small?dT:bF.large?dj:gH};
}},"treevirtual":dz,"treevirtual-folder":{style:function(cs){return {icon:cs.opened?du:dd};
}},"treevirtual-file":{include:ea,alias:ea,style:function(bC){return {icon:dT};
}},"treevirtual-line":{style:function(bk){return {icon:cY};
}},"treevirtual-contract":{style:function(O){return {icon:dX,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hN){return {icon:gS,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gE,"treevirtual-only-expand":fX,"treevirtual-start-contract":gE,"treevirtual-start-expand":fX,"treevirtual-end-contract":gE,"treevirtual-end-expand":fX,"treevirtual-cross-contract":gE,"treevirtual-cross-expand":fX,"treevirtual-end":{style:function(J){return {icon:cY};
}},"treevirtual-cross":{style:function(hm){return {icon:cY};
}},"tooltip":{include:gA,style:function(v){return {backgroundColor:es,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gt,"tooltip-error":{include:gx,style:function(bj){return {textColor:gp,placeMethod:gs,offset:[0,0,0,14],marginTop:-2,position:cV,showTimeout:100,hideTimeout:10000,decorator:dP,shadow:el,font:gn};
}},"tooltip-error/atom":gt,"window":{style:function(hS){return {shadow:dH,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(hO){return {decorator:fa};
}},"window/captionbar":{style:function(cF){return {decorator:cF.active?cL:fC,textColor:cF.active?gw:dD,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(m){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hT){return {alignY:gm,font:gn,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gt,style:function(C){return {icon:C.active?C.hovered?fe:fG:fK,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gt,style:function(hJ){return {icon:hJ.active?hJ.hovered?dI:dg:fH,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gt,style:function(hr){return {icon:hr.active?hr.hovered?dw:eM:gc,margin:[4,8,2,0]};
}},"window/close-button":{alias:gt,style:function(bH){return {icon:bH.active?bH.hovered?gg:ex:eO,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(bS){return {padding:[2,6],decorator:ep,minHeight:18};
}},"window/statusbar-text":{style:function(N){return {font:dC};
}},"iframe":{style:function(cz){return {decorator:gr};
}},"resizer":{style:function(bp){return {decorator:eB};
}},"splitpane":{style:function(i){return {decorator:fP};
}},"splitpane/splitter":{style:function(hf){return {width:hf.horizontal?3:undefined,height:hf.vertical?3:undefined,backgroundColor:gY};
}},"splitpane/splitter/knob":{style:function(T){return {source:T.horizontal?dS:fb};
}},"splitpane/slider":{style:function(a){return {width:a.horizontal?3:undefined,height:a.vertical?3:undefined,backgroundColor:gY};
}},"selectbox":{alias:gu,include:gu,style:function(cq){return {padding:[2,8]};
}},"selectbox/atom":gt,"selectbox/popup":gA,"selectbox/list":{alias:gv},"selectbox/arrow":{include:go,style:function(bJ){return {source:eW,paddingLeft:5};
}},"datechooser":{style:function(d){var h;
var f=!!d.focused;
var g=!!d.invalid;
var e=!!d.disabled;

if(f&&g&&!e){h=eP;
}else if(f&&!g&&!e){h=gz;
}else if(e){h=eR;
}else if(!f&&g&&!e){h=eT;
}else{h=eS;
}return {padding:2,decorator:h,backgroundColor:gl};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gu,alias:gu,style:function(ci){var cj={padding:[2,4],shadow:undefined};

if(ci.lastYear){cj.icon=dq;
cj.marginRight=1;
}else if(ci.lastMonth){cj.icon=gQ;
}else if(ci.nextYear){cj.icon=cN;
cj.marginLeft=1;
}else if(ci.nextMonth){cj.icon=ga;
}return cj;
}},"datechooser/last-year-button-tooltip":gx,"datechooser/last-month-button-tooltip":gx,"datechooser/next-year-button-tooltip":gx,"datechooser/next-month-button-tooltip":gx,"datechooser/last-year-button":fS,"datechooser/last-month-button":fS,"datechooser/next-month-button":fS,"datechooser/next-year-button":fS,"datechooser/month-year-label":{style:function(hQ){return {font:gn,textAlign:fU,textColor:hQ.disabled?eY:undefined};
}},"datechooser/date-pane":{style:function(P){return {textColor:P.disabled?eY:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(B){return {textColor:B.disabled?eY:B.weekend?gW:undefined,textAlign:fU,paddingTop:2,backgroundColor:dU};
}},"datechooser/week":{style:function(z){return {textAlign:fU,padding:[2,4],backgroundColor:dU};
}},"datechooser/day":{style:function(bL){return {textAlign:fU,decorator:bL.disabled?undefined:bL.selected?eU:undefined,textColor:bL.disabled?eY:bL.selected?gp:bL.otherMonth?gW:undefined,font:bL.today?gn:undefined,padding:[2,4]};
}},"combobox":{style:function(hx){var hB;
var hz=!!hx.focused;
var hA=!!hx.invalid;
var hy=!!hx.disabled;

if(hz&&hA&&!hy){hB=eP;
}else if(hz&&!hA&&!hy){hB=gz;
}else if(hy){hB=eR;
}else if(!hz&&hA&&!hy){hB=eT;
}else{hB=eS;
}return {decorator:hB};
}},"combobox/popup":gA,"combobox/list":{alias:gv},"combobox/button":{include:gu,alias:gu,style:function(L){var M={icon:eW,padding:2};

if(L.selected){M.decorator=gP;
}return M;
}},"combobox/textfield":{include:fW,style:function(hD){return {decorator:undefined};
}},"menu":{style:function(ct){var cu={decorator:en,shadow:eb,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:ct.submenu||ct.contextmenu?gF:eH};

if(ct.submenu){cu.position=cV;
cu.offset=[-2,-3];
}return cu;
}},"menu/slidebar":fp,"menu-slidebar":gs,"menu-slidebar-button":{style:function(hc){return {decorator:hc.hovered?eU:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:gV,style:function(b){return {icon:b.hovered?fq:dy};
}},"menu-slidebar/button-forward":{include:gV,style:function(bB){return {icon:bB.hovered?fu:eW};
}},"menu-separator":{style:function(w){return {height:0,decorator:eA,margin:[4,2]};
}},"menu-button":{alias:gt,style:function(bo){return {decorator:bo.selected?eU:undefined,textColor:bo.selected?gp:undefined,padding:[4,6]};
}},"menu-button/icon":{include:go,style:function(bE){return {alignY:gm};
}},"menu-button/label":{include:gy,style:function(bh){return {alignY:gm,padding:1};
}},"menu-button/shortcut":{include:gy,style:function(cA){return {alignY:gm,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:go,style:function(bu){return {source:bu.selected?eC:ga,alignY:gm};
}},"menu-checkbox":{alias:eQ,include:eQ,style:function(cH){return {icon:!cH.checked?undefined:cH.selected?gN:dn};
}},"menu-radiobutton":{alias:eQ,include:eQ,style:function(q){return {icon:!q.checked?undefined:q.selected?fd:cO};
}},"menubar":{style:function(n){return {decorator:fl};
}},"menubar-button":{alias:gt,style:function(Q){return {decorator:Q.pressed||Q.hovered?eU:undefined,textColor:Q.pressed||Q.hovered?gp:undefined,padding:[3,8]};
}},"colorselector":gs,"colorselector/control-bar":gs,"colorselector/control-pane":gs,"colorselector/visual-pane":eX,"colorselector/preset-grid":gs,"colorselector/colorbucket":{style:function(cx){return {decorator:gr,width:16,height:16};
}},"colorselector/preset-field-set":eX,"colorselector/input-field-set":eX,"colorselector/preview-field-set":eX,"colorselector/hex-field-composite":gs,"colorselector/hex-field":fW,"colorselector/rgb-spinner-composite":gs,"colorselector/rgb-spinner-red":gC,"colorselector/rgb-spinner-green":gC,"colorselector/rgb-spinner-blue":gC,"colorselector/hsb-spinner-composite":gs,"colorselector/hsb-spinner-hue":gC,"colorselector/hsb-spinner-saturation":gC,"colorselector/hsb-spinner-brightness":gC,"colorselector/preview-content-old":{style:function(o){return {decorator:gr,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bG){return {decorator:gr,backgroundColor:gl,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(hC){return {decorator:gr,margin:5};
}},"colorselector/brightness-field":{style:function(hU){return {decorator:gr,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gs,"colorselector/hue-saturation-handle":gs,"colorselector/brightness-pane":gs,"colorselector/brightness-handle":gs,"colorpopup":{alias:gA,include:gA,style:function(hs){return {padding:5,backgroundColor:fY};
}},"colorpopup/field":{style:function(bt){return {decorator:gr,margin:2,width:14,height:14,backgroundColor:gl};
}},"colorpopup/selector-button":gq,"colorpopup/auto-button":gq,"colorpopup/preview-pane":eX,"colorpopup/current-preview":{style:function(bm){return {height:20,padding:4,marginLeft:4,decorator:gr,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(y){return {height:20,padding:4,marginRight:4,decorator:gr,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gq,include:gq,style:function(hP){return {icon:fA};
}},"colorpopup/colorselector-cancelbutton":{alias:gq,include:gq,style:function(cl){return {icon:fk};
}},"table":{alias:gs,style:function(bA){return {decorator:dz};
}},"table-header":{},"table/statusbar":{style:function(Y){return {decorator:fE,padding:[0,2]};
}},"table/column-button":{alias:gu,style:function(bs){return {decorator:dG,padding:3,icon:cP};
}},"table-column-reset-button":{include:eQ,alias:eQ,style:function(){return {icon:eE};
}},"table-scroller":gs,"table-scroller/scrollbar-x":fT,"table-scroller/scrollbar-y":fT,"table-scroller/header":{style:function(r){return {decorator:eu};
}},"table-scroller/pane":{style:function(ca){return {backgroundColor:ew};
}},"table-scroller/focus-indicator":{style:function(u){return {decorator:em};
}},"table-scroller/resize-line":{style:function(D){return {backgroundColor:gj,width:2};
}},"table-header-cell":{alias:gt,style:function(cI){return {minWidth:13,minHeight:20,padding:cI.hovered?[3,4,2,4]:[3,4],decorator:cI.hovered?fc:ei,sortIcon:cI.sorted?(cI.sortedAscending?fr:cM):undefined};
}},"table-header-cell/label":{style:function(hq){return {minWidth:0,alignY:gm,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(co){return {alignY:gm,alignX:db};
}},"table-header-cell/icon":{style:function(ha){return {minWidth:0,alignY:gm,paddingRight:5};
}},"table-editor-textfield":{include:fW,style:function(hG){return {decorator:undefined,padding:[2,2],backgroundColor:gl};
}},"table-editor-selectbox":{include:ed,alias:ed,style:function(A){return {padding:[0,2],backgroundColor:gl};
}},"table-editor-combobox":{include:cU,alias:cU,style:function(ba){return {decorator:undefined,backgroundColor:gl};
}},"progressive-table-header":{alias:gs,style:function(bI){return {decorator:cQ};
}},"progressive-table-header-cell":{alias:gt,style:function(cy){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:ez};
}},"app-header":{style:function(hK){return {font:gn,textColor:gp,padding:[8,12],decorator:eo};
}},"virtual-list":gv,"virtual-list/row-layer":dM,"row-layer":{style:function(bq){return {colorEven:gw,colorOdd:gw};
}},"column-layer":gs,"cell":{style:function(bK){return {textColor:bK.selected?gp:de,padding:[3,6],font:dY};
}},"cell-string":eV,"cell-number":{include:eV,style:function(cE){return {textAlign:db};
}},"cell-image":eV,"cell-boolean":{include:eV,style:function(hp){return {iconTrue:eh,iconFalse:dl};
}},"cell-atom":eV,"cell-date":eV,"cell-html":eV,"htmlarea":{"include":gs,style:function(hV){return {backgroundColor:gw};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(C,D){qx.ui.decoration.Abstract.call(this);
if(C!=null){this.setBorderImage(C);
}
if(D!=null){this.setSlice(D);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__mJ:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mJ;
},getMarkup:function(){if(this.__mJ){return this.__mJ;
}var E=this._resolveImageUrl(this.getBorderImage());
var F=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var G=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__mJ=[x,qx.bom.element.Style.compile({"borderImage":o+E+p+F.join(f)+f+G,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:F.join(b)+g}),y].join(q);
return this.__mJ;
},resize:function(z,A,B){z.style.width=A+g;
z.style.height=B+g;
},tint:function(I,J){},_applyStyle:function(){{};
},_resolveImageUrl:function(H){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(H));
}},destruct:function(){this.__mJ=null;
}});
})();
(function(){var k="px",j="0px",i="-1px",h="no-repeat",g="scale-x",f="scale-y",e="-tr",d="-l",c='</div>',b="scale",y="qx.client",x="-br",w="-t",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",p="",n="-bl",o="qx.ui.decoration.GridDiv",l="-c",m="mshtml";
qx.Class.define(o,{extend:qx.ui.decoration.Abstract,construct:function(B,C){qx.ui.decoration.Abstract.call(this);
if(B!=null){this.setBaseImage(B);
}
if(C!=null){this.setInsets(C);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__mK:null,__mL:null,__mM:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mK;
},getMarkup:function(){if(this.__mK){return this.__mK;
}var Q=qx.bom.element.Decoration;
var R=this.__mL;
var S=this.__mM;
var T=[];
T.push(t);
T.push(Q.create(R.tl,h,{top:0,left:0}));
T.push(Q.create(R.t,g,{top:0,left:S.left+k}));
T.push(Q.create(R.tr,h,{top:0,right:0}));
T.push(Q.create(R.bl,h,{bottom:0,left:0}));
T.push(Q.create(R.b,g,{bottom:0,left:S.left+k}));
T.push(Q.create(R.br,h,{bottom:0,right:0}));
T.push(Q.create(R.l,f,{top:S.top+k,left:0}));
T.push(Q.create(R.c,b,{top:S.top+k,left:S.left+k}));
T.push(Q.create(R.r,f,{top:S.top+k,right:0}));
T.push(c);
return this.__mK=T.join(p);
},resize:function(M,N,O){var P=this.__mM;
var innerWidth=N-P.left-P.right;
var innerHeight=O-P.top-P.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}M.style.width=N+k;
M.style.height=O+k;
M.childNodes[1].style.width=innerWidth+k;
M.childNodes[4].style.width=innerWidth+k;
M.childNodes[7].style.width=innerWidth+k;
M.childNodes[6].style.height=innerHeight+k;
M.childNodes[7].style.height=innerHeight+k;
M.childNodes[8].style.height=innerHeight+k;

if(qx.core.Variant.isSet(y,m)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(N%2==1){M.childNodes[2].style.marginRight=i;
M.childNodes[5].style.marginRight=i;
M.childNodes[8].style.marginRight=i;
}else{M.childNodes[2].style.marginRight=j;
M.childNodes[5].style.marginRight=j;
M.childNodes[8].style.marginRight=j;
}
if(O%2==1){M.childNodes[3].style.marginBottom=i;
M.childNodes[4].style.marginBottom=i;
M.childNodes[5].style.marginBottom=i;
}else{M.childNodes[3].style.marginBottom=j;
M.childNodes[4].style.marginBottom=j;
M.childNodes[5].style.marginBottom=j;
}}}},tint:function(K,L){},_applyBaseImage:function(D,E){{};

if(D){var I=this._resolveImageUrl(D);
var J=/(.*)(\.[a-z]+)$/.exec(I);
var H=J[1];
var G=J[2];
var F=this.__mL={tl:H+v+G,t:H+w+G,tr:H+e+G,bl:H+n+G,b:H+r+G,br:H+x+G,l:H+d+G,c:H+l+G,r:H+u+G};
this.__mM=this._computeEdgeSizes(F);
}},_resolveImageUrl:function(a){return qx.util.AliasManager.getInstance().resolve(a);
},_computeEdgeSizes:function(z){var A=qx.util.ResourceManager.getInstance();
return {top:A.getImageHeight(z.t),bottom:A.getImageHeight(z.b),left:A.getImageWidth(z.l),right:A.getImageWidth(z.r)};
}},destruct:function(){this.__mK=this.__mL=this.__mM=null;
}});
})();


qx.$$loader.init();

