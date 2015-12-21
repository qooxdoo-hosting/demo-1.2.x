(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.allowUrlSettings":"true","qx.allowUrlVariants":"true","qx.application":"demobrowser.demo.widget.SplitPane","qx.theme":"qx.theme.Classic"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script","version":"trunk"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script","version":"1.2.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.demo.widget.SplitPane-qx.theme.Classic.js"]],
  urisBefore : [],
  packageHashes : {"0":"e44dc67ee552"},
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

qx.$$packageData['e44dc67ee552']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_US":{},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vendredi","cldr_day_stand-alone_wide_mon":"lundi","cldr_day_stand-alone_wide_sat":"samedi","cldr_day_stand-alone_wide_sun":"dimanche","cldr_day_stand-alone_wide_thu":"jeudi","cldr_day_stand-alone_wide_tue":"mardi","cldr_day_stand-alone_wide_wed":"mercredi","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"»","quotationStart":"«"},"fr_FR":{}},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{}};
(function(){var br="toString",bq=".",bp="default",bo="Object",bn='"',bm="Array",bl="()",bk="String",bj="Function",bi=".prototype",bQ="function",bP="Boolean",bO="Error",bN="constructor",bM="warn",bL="hasOwnProperty",bK="string",bJ="toLocaleString",bI="RegExp",bH='\", "',by="info",bz="BROKEN_IE",bw="isPrototypeOf",bx="Date",bu="",bv="qx.Bootstrap",bs="]",bt="Class",bA="error",bB="[Class ",bD="valueOf",bC="Number",bF="count",bE="debug",bG="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bB+this.classname+bs;
},createNamespace:function(name,D){var F=name.split(bq);
var parent=window;
var E=F[0];

for(var i=0,G=F.length-1;i<G;i++,E=F[i]){if(!parent[E]){parent=parent[E]={};
}else{parent=parent[E];
}}parent[E]=D;
return E;
},setDisplayName:function(w,x,name){w.displayName=x+bq+name+bl;
},setDisplayNames:function(bR,bS){for(var name in bR){var bT=bR[name];

if(bT instanceof Function){bT.displayName=bS+bq+name+bl;
}}},define:function(name,cb){if(!cb){var cb={statics:{}};
}var cg;
var ce=null;
qx.Bootstrap.setDisplayNames(cb.statics,name);

if(cb.members||cb.extend){qx.Bootstrap.setDisplayNames(cb.members,name+bi);
cg=cb.construct||new Function;

if(cb.extend){this.extendClass(cg,cg,cb.extend,name,cf);
}var cc=cb.statics||{};
for(var i=0,ch=qx.Bootstrap.getKeys(cc),l=ch.length;i<l;i++){var ci=ch[i];
cg[ci]=cc[ci];
}ce=cg.prototype;
var cd=cb.members||{};
for(var i=0,ch=qx.Bootstrap.getKeys(cd),l=ch.length;i<l;i++){var ci=ch[i];
ce[ci]=cd[ci];
}}else{cg=cb.statics||{};
}var cf=this.createNamespace(name,cg);
cg.name=cg.classname=name;
cg.basename=cf;
cg.$$type=bt;
if(!cg.hasOwnProperty(br)){cg.toString=this.genericToString;
}if(cb.defer){cb.defer(cg,ce);
}qx.Bootstrap.$$registry[name]=cb.statics;
return cg;
}};
qx.Bootstrap.define(bv,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(R,S,T,name,U){var X=T.prototype;
var W=new Function;
W.prototype=X;
var V=new W;
R.prototype=V;
V.name=V.classname=name;
V.basename=U;
S.base=R.superclass=T;
S.self=R.constructor=V.constructor=R;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(v){return v.__count__;
},"default":function(bg){var length=0;

for(var bh in bg){length++;
}return length;
}})[(({}).__count__==0)?bF:bp],objectMergeWith:function(d,e,f){if(f===undefined){f=true;
}
for(var g in e){if(f||d[g]===undefined){d[g]=e[g];
}}return d;
},__a:[bw,bL,bJ,br,bD,bN],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(h){var j=[];
var m=Object.prototype.hasOwnProperty;

for(var n in h){if(m.call(h,n)){j.push(n);
}}var k=qx.Bootstrap.__a;

for(var i=0,a=k,l=a.length;i<l;i++){if(m.call(h,a[i])){j.push(a[i]);
}}return j;
},"default":function(z){var A=[];
var B=Object.prototype.hasOwnProperty;

for(var C in z){if(B.call(z,C)){A.push(C);
}}return A;
}})[typeof (Object.keys)==
bQ?bG:
(function(){for(var H in {toString:1}){return H;
}})()!==br?bz:bp],getKeysAsString:function(b){var c=qx.Bootstrap.getKeys(b);

if(c.length==0){return bu;
}return bn+c.join(bH)+bn;
},__b:{"[object String]":bk,"[object Array]":bm,"[object Object]":bo,"[object RegExp]":bI,"[object Number]":bC,"[object Boolean]":bP,"[object Date]":bx,"[object Function]":bj,"[object Error]":bO},bind:function(p,self,q){var r=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var Y=Array.prototype.slice.call(arguments,0,arguments.length);
return p.apply(self,r.concat(Y));
};
},firstUp:function(bX){return bX.charAt(0).toUpperCase()+bX.substr(1);
},firstLow:function(ba){return ba.charAt(0).toLowerCase()+ba.substr(1);
},getClass:function(K){var L=Object.prototype.toString.call(K);
return (qx.Bootstrap.__b[L]||L.slice(8,-1));
},isString:function(o){return (o!==null&&(typeof o===bK||qx.Bootstrap.getClass(o)==bk||o instanceof String||(!!o&&!!o.$$isString)));
},isArray:function(y){return (y!==null&&(y instanceof Array||(y&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(y.constructor,qx.data.IListData))||qx.Bootstrap.getClass(y)==bm||(!!y&&!!y.$$isArray)));
},isObject:function(s){return (s!==undefined&&s!==null&&qx.Bootstrap.getClass(s)==bo);
},isFunction:function(Q){return qx.Bootstrap.getClass(Q)==bj;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bY,name){while(bY){if(bY.$$properties&&bY.$$properties[name]){return bY.$$properties[name];
}bY=bY.superclass;
}return null;
},hasProperty:function(t,name){return !!qx.Bootstrap.getPropertyDefinition(t,name);
},getEventType:function(u,name){var u=u.constructor;

while(u.superclass){if(u.$$events&&u.$$events[name]!==undefined){return u.$$events[name];
}u=u.superclass;
}return null;
},supportsEvent:function(bW,name){return !!qx.Bootstrap.getEventType(bW,name);
},getByInterface:function(bd,be){var bf,i,l;

while(bd){if(bd.$$implements){bf=bd.$$flatImplements;

for(i=0,l=bf.length;i<l;i++){if(bf[i]===be){return bd;
}}}bd=bd.superclass;
}return null;
},hasInterface:function(bU,bV){return !!qx.Bootstrap.getByInterface(bU,bV);
},getMixins:function(M){var N=[];

while(M){if(M.$$includes){N.push.apply(N,M.$$flatIncludes);
}M=M.superclass;
}return N;
},$$logs:[],debug:function(cj,ck){qx.Bootstrap.$$logs.push([bE,arguments]);
},info:function(O,P){qx.Bootstrap.$$logs.push([by,arguments]);
},warn:function(I,J){qx.Bootstrap.$$logs.push([bM,arguments]);
},error:function(bb,bc){qx.Bootstrap.$$logs.push([bA,arguments]);
},trace:function(ca){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__c:{},define:function(o,p){if(p===undefined){throw new Error('Default value of setting "'+o+'" must be defined!');
}
if(!this.__c[o]){this.__c[o]={};
}else if(this.__c[o].defaultValue!==undefined){throw new Error('Setting "'+o+'" is already defined!');
}this.__c[o].defaultValue=p;
},get:function(q){var r=this.__c[q];

if(r===undefined){throw new Error('Setting "'+q+'" is not defined.');
}
if(r.value!==undefined){return r.value;
}return r.defaultValue;
},set:function(k,l){if((k.split(a)).length<2){throw new Error('Malformed settings key "'+k+'". Must be following the schema "namespace.key".');
}
if(!this.__c[k]){this.__c[k]={};
}this.__c[k].value=l;
},__d:function(){if(window.qxsettings){for(var t in window.qxsettings){this.set(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(j){}this.__e();
}},__e:function(){if(this.get(h)!=true){return;
}var n=document.location.search.slice(1).split(g);

for(var i=0;i<n.length;i++){var m=n[i].split(b);

if(m.length!=3||m[0]!=c){continue;
}this.set(m[1],decodeURIComponent(m[2]));
}}},defer:function(s){s.define(h,false);
s.define(e,false);
s.define(d,0);
s.__d();
}});
})();
(function(){var n="function",m="Boolean",k="qx.Interface",j="]",h="toggle",g="Interface",f="is",e="[Interface ";
qx.Bootstrap.define(k,{statics:{define:function(name,G){if(G){if(G.extend&&!(G.extend instanceof Array)){G.extend=[G.extend];
}{};
var H=G.statics?G.statics:{};
if(G.extend){H.$$extends=G.extend;
}
if(G.properties){H.$$properties=G.properties;
}
if(G.members){H.$$members=G.members;
}
if(G.events){H.$$events=G.events;
}}else{var H={};
}H.$$type=g;
H.name=name;
H.toString=this.genericToString;
H.basename=qx.Bootstrap.createNamespace(name,H);
qx.Interface.$$registry[name]=H;
return H;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(u){if(!u){return [];
}var v=u.concat();

for(var i=0,l=u.length;i<l;i++){if(u[i].$$extends){v.push.apply(v,this.flatten(u[i].$$extends));
}}return v;
},__f:function(I,J,K,L){var P=K.$$members;

if(P){for(var O in P){if(qx.Bootstrap.isFunction(P[O])){var N=this.__g(J,O);
var M=N||qx.Bootstrap.isFunction(I[O]);

if(!M){throw new Error('Implementation of method "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}var Q=L===true&&!N&&!qx.Bootstrap.hasInterface(J,K);

if(Q){I[O]=this.__j(K,I[O],O,P[O]);
}}else{if(typeof I[O]===undefined){if(typeof I[O]!==n){throw new Error('Implementation of member "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}}}}}},__g:function(o,p){var t=p.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!t){return false;
}var q=qx.Bootstrap.firstLow(t[2]);
var r=qx.Bootstrap.getPropertyDefinition(o,q);

if(!r){return false;
}var s=t[0]==f||t[0]==h;

if(s){return qx.Bootstrap.getPropertyDefinition(o,q).check==m;
}return true;
},__h:function(w,x){if(x.$$properties){for(var y in x.$$properties){if(!qx.Bootstrap.getPropertyDefinition(w,y)){throw new Error('The property "'+y+'" is not supported by Class "'+w.classname+'"!');
}}}},__i:function(D,E){if(E.$$events){for(var F in E.$$events){if(!qx.Bootstrap.supportsEvent(D,F)){throw new Error('The event "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},assertObject:function(a,b){var d=a.constructor;
this.__f(a,d,b,false);
this.__h(d,b);
this.__i(d,b);
var c=b.$$extends;

if(c){for(var i=0,l=c.length;i<l;i++){this.assertObject(a,c[i]);
}}},assert:function(z,A,B){this.__f(z.prototype,z,A,B);
this.__h(z,A);
this.__i(z,A);
var C=A.$$extends;

if(C){for(var i=0,l=C.length;i<l;i++){this.assert(z,C[i],B);
}}},genericToString:function(){return e+this.name+j;
},$$registry:{},__j:function(){},__k:null,__l:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}{};
var k=h.statics?h.statics:{};
qx.Bootstrap.setDisplayNames(k,name);

for(var j in k){if(k[j] instanceof Function){k[j].$$mixin=k;
}}if(h.construct){k.$$constructor=h.construct;
qx.Bootstrap.setDisplayName(h.construct,name,e);
}
if(h.include){k.$$includes=h.include;
}
if(h.properties){k.$$properties=h.properties;
}
if(h.members){k.$$members=h.members;
qx.Bootstrap.setDisplayNames(h.members,name+f);
}
for(var j in k.$$members){if(k.$$members[j] instanceof Function){k.$$members[j].$$mixin=k;
}}
if(h.events){k.$$events=h.events;
}
if(h.destruct){k.$$destructor=h.destruct;
qx.Bootstrap.setDisplayName(h.destruct,name,b);
}}else{var k={};
}k.$$type=a;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
this.$$registry[name]=k;
return k;
},checkCompatibility:function(r){var u=this.flatten(r);
var v=u.length;

if(v<2){return true;
}var y={};
var x={};
var w={};
var t;

for(var i=0;i<v;i++){t=u[i];

for(var s in t.events){if(w[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+w[s]+'" in member "'+s+'"!');
}w[s]=t.name;
}
for(var s in t.properties){if(y[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+y[s]+'" in property "'+s+'"!');
}y[s]=t.name;
}
for(var s in t.members){if(x[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+x[s]+'" in member "'+s+'"!');
}x[s]=t.name;
}}return true;
},isCompatible:function(m,n){var o=qx.Bootstrap.getMixins(n);
o.push(m);
return qx.Mixin.checkCompatibility(o);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(p){if(!p){return [];
}var q=p.concat();

for(var i=0,l=p.length;i<l;i++){if(p[i].$$includes){q.push.apply(q,this.flatten(p[i].$$includes));
}}return q;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__m:null,__n:function(){}}});
})();
(function(){var da=';',cY='return this.',cX="string",cW="boolean",cV="",cU="setThemed",cT='!==undefined)',cS="this.",cR="set",cQ="resetThemed",cF="setRuntime",cE="init",cD='else if(this.',cC="resetRuntime",cB="reset",cA="();",cz='else ',cy='if(this.',cx="return this.",cw="get",dh=";",di="(a[",df=' of an instance of ',dg="refresh",dd=' is not (yet) ready!");',de="]);",db='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',dc='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',dj='value !== null && value.nodeType === 9 && value.documentElement',dk='value !== null && value.$$type === "Mixin"',cJ='return init;',cI='var init=this.',cL='value !== null && value.nodeType === 1 && value.attributes',cK="var parent = this.getLayoutParent();",cN="Error in property ",cM='qx.core.Assert.assertInstance(value, Date, msg) || true',cP="if (!parent) return;",cO=" in method ",cH='qx.core.Assert.assertInstance(value, Error, msg) || true',cG='Undefined value is not allowed!',bA="inherit",bB='Is invalid!',bC="MSIE 6.0",bD="': ",bE=" of class ",bF='value !== null && value.nodeType !== undefined',bG='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bH='qx.core.Assert.assertPositiveInteger(value, msg) || true',bI='if(init==qx.core.Property.$$inherit)init=null;',bJ='value !== null && value.$$type === "Interface"',dp='var inherit=prop.$$inherit;',dn="var value = parent.",dm="$$useinit_",dl="(value);",dt='Requires exactly one argument!',ds="$$runtime_",dr="$$user_",dq='qx.core.Assert.assertArray(value, msg) || true',dv='qx.core.Assert.assertPositiveNumber(value, msg) || true',du=".prototype",cg="Boolean",ch='return value;',ce='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cf='Does not allow any arguments!',ck="()",cl="var a=arguments[0] instanceof Array?arguments[0]:arguments;",ci='value !== null && value.$$type === "Theme"',cj="())",cc='return null;',cd='qx.core.Assert.assertObject(value, msg) || true',bR='qx.core.Assert.assertString(value, msg) || true',bQ="if (value===undefined) value = parent.",bT='value !== null && value.$$type === "Class"',bS='qx.core.Assert.assertFunction(value, msg) || true',bN="object",bM="$$init_",bP="$$theme_",bO='qx.core.Assert.assertMap(value, msg) || true',bL='qx.core.Assert.assertNumber(value, msg) || true',bK='Null value is not allowed!',cq='qx.core.Assert.assertInteger(value, msg) || true',cr="value",cs="rv:1.8.1",ct="shorthand",cm='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cn='value !== null && value.type !== undefined',co='value !== null && value.document',cp='throw new Error("Property ',cu="(!this.",cv='qx.core.Assert.assertBoolean(value, msg) || true',cb="toggle",ca="$$inherit_",bY=" with incoming value '",bX="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",bW="qx.core.Property",bV="is",bU='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(bW,{statics:{__o:{"Boolean":cv,"String":bR,"Number":bL,"Integer":cq,"PositiveNumber":dv,"PositiveInteger":bH,"Error":cH,"RegExp":cm,"Object":cd,"Array":dq,"Map":bO,"Function":bS,"Date":cM,"Node":bF,"Element":cL,"Document":dj,"Window":co,"Event":cn,"Class":bT,"Mixin":dk,"Interface":bJ,"Theme":ci,"Color":db,"Decorator":bG,"Font":dc},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bA,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cX,dereference:cW,inheritable:cW,nullable:cW,themeable:cW,refine:cW,init:null,apply:cX,event:cX,check:null,transform:cX,deferredInit:cW,validate:null},$$allowedGroupKeys:{name:cX,group:bN,mode:cX,themeable:cW},$$inheritable:{},__q:function(dS){var dT=this.__r(dS);

if(!dT.length){var dU=qx.lang.Function.empty;
}else{dU=this.__s(dT);
}dS.prototype.$$refreshInheritables=dU;
},__r:function(v){var x=[];

while(v){var w=v.$$properties;

if(w){for(var name in this.$$inheritable){if(w[name]&&w[name].inheritable){x.push(name);
}}}v=v.superclass;
}return x;
},__s:function(bu){var by=this.$$store.inherit;
var bx=this.$$store.init;
var bw=this.$$method.refresh;
var bv=[cK,cP];

for(var i=0,l=bu.length;i<l;i++){var name=bu[i];
bv.push(dn,by[name],dh,bQ,bx[name],dh,cS,bw[name],dl);
}return new Function(bv.join(cV));
},attachRefreshInheritables:function(B){B.prototype.$$refreshInheritables=function(){qx.core.Property.__q(B);
return this.$$refreshInheritables();
};
},attachMethods:function(dH,name,dI){dI.group?this.__t(dH,dI,name):this.__u(dH,dI,name);
},__t:function(bj,bk,name){var br=qx.Bootstrap.firstUp(name);
var bq=bj.prototype;
var bs=bk.themeable===true;
{};
var bt=[];
var bn=[];

if(bs){var bl=[];
var bp=[];
}var bo=cl;
bt.push(bo);

if(bs){bl.push(bo);
}
if(bk.mode==ct){var bm=bX;
bt.push(bm);

if(bs){bl.push(bm);
}}
for(var i=0,a=bk.group,l=a.length;i<l;i++){{};
bt.push(cS,this.$$method.set[a[i]],di,i,de);
bn.push(cS,this.$$method.reset[a[i]],cA);

if(bs){{};
bl.push(cS,this.$$method.setThemed[a[i]],di,i,de);
bp.push(cS,this.$$method.resetThemed[a[i]],cA);
}}this.$$method.set[name]=cR+br;
bq[this.$$method.set[name]]=new Function(bt.join(cV));
this.$$method.reset[name]=cB+br;
bq[this.$$method.reset[name]]=new Function(bn.join(cV));

if(bs){this.$$method.setThemed[name]=cU+br;
bq[this.$$method.setThemed[name]]=new Function(bl.join(cV));
this.$$method.resetThemed[name]=cQ+br;
bq[this.$$method.resetThemed[name]]=new Function(bp.join(cV));
}},__u:function(dw,dx,name){var dz=qx.Bootstrap.firstUp(name);
var dB=dw.prototype;
{};
if(dx.dereference===undefined&&typeof dx.check===cX){dx.dereference=this.__v(dx.check);
}var dA=this.$$method;
var dy=this.$$store;
dy.runtime[name]=ds+name;
dy.user[name]=dr+name;
dy.theme[name]=bP+name;
dy.init[name]=bM+name;
dy.inherit[name]=ca+name;
dy.useinit[name]=dm+name;
dA.get[name]=cw+dz;
dB[dA.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dw,name,cw);
};
dA.set[name]=cR+dz;
dB[dA.set[name]]=function(dJ){return qx.core.Property.executeOptimizedSetter(this,dw,name,cR,arguments);
};
dA.reset[name]=cB+dz;
dB[dA.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,cB);
};

if(dx.inheritable||dx.apply||dx.event||dx.deferredInit){dA.init[name]=cE+dz;
dB[dA.init[name]]=function(dG){return qx.core.Property.executeOptimizedSetter(this,dw,name,cE,arguments);
};
}
if(dx.inheritable){dA.refresh[name]=dg+dz;
dB[dA.refresh[name]]=function(dW){return qx.core.Property.executeOptimizedSetter(this,dw,name,dg,arguments);
};
}dA.setRuntime[name]=cF+dz;
dB[dA.setRuntime[name]]=function(q){return qx.core.Property.executeOptimizedSetter(this,dw,name,cF,arguments);
};
dA.resetRuntime[name]=cC+dz;
dB[dA.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,cC);
};

if(dx.themeable){dA.setThemed[name]=cU+dz;
dB[dA.setThemed[name]]=function(dV){return qx.core.Property.executeOptimizedSetter(this,dw,name,cU,arguments);
};
dA.resetThemed[name]=cQ+dz;
dB[dA.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,cQ);
};
}
if(dx.check===cg){dB[cb+dz]=new Function(cx+dA.set[name]+cu+dA.get[name]+cj);
dB[bV+dz]=new Function(cx+dA.get[name]+ck);
}},__v:function(dK){return !!this.__p[dK];
},__w:function(bz){return this.__p[bz]||qx.Bootstrap.classIsDefined(bz)||(qx.Interface&&qx.Interface.isDefined(bz));
},__x:{0:bU,1:dt,2:cG,3:cf,4:bK,5:bB},error:function(dL,dM,dN,dO,dP){var dQ=dL.constructor.classname;
var dR=cN+dN+bE+dQ+cO+this.$$method[dO][dN]+bY+dP+bD;
throw new Error(dR+(this.__x[dM]||"Unknown reason: "+dM));
},__y:function(bd,be,name,bf,bg,bh){var bi=this.$$method[bf][name];
{be[bi]=new Function(cr,bg.join(cV));
};
{};
qx.Bootstrap.setDisplayName(be[bi],bd.classname+du,bi);
if(bh===undefined){return bd[bi]();
}else{return bd[bi](bh[0]);
}},executeOptimizedGetter:function(V,W,name,X){var ba=W.$$properties[name];
var bc=W.prototype;
var Y=[];
var bb=this.$$store;
Y.push(cy,bb.runtime[name],cT);
Y.push(cY,bb.runtime[name],da);

if(ba.inheritable){Y.push(cD,bb.inherit[name],cT);
Y.push(cY,bb.inherit[name],da);
Y.push(cz);
}Y.push(cy,bb.user[name],cT);
Y.push(cY,bb.user[name],da);

if(ba.themeable){Y.push(cD,bb.theme[name],cT);
Y.push(cY,bb.theme[name],da);
}
if(ba.deferredInit&&ba.init===undefined){Y.push(cD,bb.init[name],cT);
Y.push(cY,bb.init[name],da);
}Y.push(cz);

if(ba.init!==undefined){if(ba.inheritable){Y.push(cI,bb.init[name],da);

if(ba.nullable){Y.push(bI);
}else if(ba.init!==undefined){Y.push(cY,bb.init[name],da);
}else{Y.push(ce,name,df,W.classname,dd);
}Y.push(cJ);
}else{Y.push(cY,bb.init[name],da);
}}else if(ba.inheritable||ba.nullable){Y.push(cc);
}else{Y.push(cp,name,df,W.classname,dd);
}return this.__y(V,bc,name,X,Y);
},executeOptimizedSetter:function(b,c,name,d,e){var k=c.$$properties[name];
var j=c.prototype;
var g=[];
var f=d===cR||d===cU||d===cF||(d===cE&&k.init===undefined);
var h=k.apply||k.event||k.inheritable;
var m=this.__z(d,name);
this.__A(g,k,name,d,f);

if(f){this.__B(g,c,k,name);
}
if(h){this.__C(g,f,m,d);
}
if(k.inheritable){g.push(dp);
}{};

if(!h){this.__E(g,name,d,f);
}else{this.__F(g,k,name,d,f);
}
if(k.inheritable){this.__G(g,k,name,d);
}else if(h){this.__H(g,k,name,d);
}
if(h){this.__I(g,k,name);
if(k.inheritable&&j._getChildren){this.__J(g,name);
}}if(f){g.push(ch);
}return this.__y(b,j,name,d,g,e);
},__z:function(F,name){if(F===cF||F===cC){var G=this.$$store.runtime[name];
}else if(F===cU||F===cQ){G=this.$$store.theme[name];
}else if(F===cE){G=this.$$store.init[name];
}else{G=this.$$store.user[name];
}return G;
},__A:function(O,P,name,Q,R){{if(!P.nullable||P.check||P.inheritable){O.push('var prop=qx.core.Property;');
}if(Q==="set"){O.push('if(value===undefined)prop.error(this,2,"',name,'","',Q,'",value);');
}};
},__B:function(S,T,U,name){if(U.transform){S.push('value=this.',U.transform,'(value);');
}if(U.validate){if(typeof U.validate==="string"){S.push('this.',U.validate,'(value);');
}else if(U.validate instanceof Function){S.push(T.classname,'.$$properties.',name);
S.push('.validate.call(this, value);');
}}},__C:function(J,K,L,M){var N=(M==="reset"||M==="resetThemed"||M==="resetRuntime");

if(K){J.push('if(this.',L,'===value)return value;');
}else if(N){J.push('if(this.',L,'===undefined)return;');
}},__D:undefined,__E:function(dC,name,dD,dE){if(dD==="setRuntime"){dC.push('this.',this.$$store.runtime[name],'=value;');
}else if(dD==="resetRuntime"){dC.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dC.push('delete this.',this.$$store.runtime[name],';');
}else if(dD==="set"){dC.push('this.',this.$$store.user[name],'=value;');
}else if(dD==="reset"){dC.push('if(this.',this.$$store.user[name],'!==undefined)');
dC.push('delete this.',this.$$store.user[name],';');
}else if(dD==="setThemed"){dC.push('this.',this.$$store.theme[name],'=value;');
}else if(dD==="resetThemed"){dC.push('if(this.',this.$$store.theme[name],'!==undefined)');
dC.push('delete this.',this.$$store.theme[name],';');
}else if(dD==="init"&&dE){dC.push('this.',this.$$store.init[name],'=value;');
}},__F:function(r,s,name,t,u){if(s.inheritable){r.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{r.push('var computed, old;');
}r.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(t==="setRuntime"){r.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(t==="resetRuntime"){r.push('delete this.',this.$$store.runtime[name],';');
r.push('if(this.',this.$$store.user[name],'!==undefined)');
r.push('computed=this.',this.$$store.user[name],';');
r.push('else if(this.',this.$$store.theme[name],'!==undefined)');
r.push('computed=this.',this.$$store.theme[name],';');
r.push('else if(this.',this.$$store.init[name],'!==undefined){');
r.push('computed=this.',this.$$store.init[name],';');
r.push('this.',this.$$store.useinit[name],'=true;');
r.push('}');
}else{r.push('old=computed=this.',this.$$store.runtime[name],';');
if(t==="set"){r.push('this.',this.$$store.user[name],'=value;');
}else if(t==="reset"){r.push('delete this.',this.$$store.user[name],';');
}else if(t==="setThemed"){r.push('this.',this.$$store.theme[name],'=value;');
}else if(t==="resetThemed"){r.push('delete this.',this.$$store.theme[name],';');
}else if(t==="init"&&u){r.push('this.',this.$$store.init[name],'=value;');
}}r.push('}');
r.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(t==="set"){if(!s.inheritable){r.push('old=this.',this.$$store.user[name],';');
}r.push('computed=this.',this.$$store.user[name],'=value;');
}else if(t==="reset"){if(!s.inheritable){r.push('old=this.',this.$$store.user[name],';');
}r.push('delete this.',this.$$store.user[name],';');
r.push('if(this.',this.$$store.runtime[name],'!==undefined)');
r.push('computed=this.',this.$$store.runtime[name],';');
r.push('if(this.',this.$$store.theme[name],'!==undefined)');
r.push('computed=this.',this.$$store.theme[name],';');
r.push('else if(this.',this.$$store.init[name],'!==undefined){');
r.push('computed=this.',this.$$store.init[name],';');
r.push('this.',this.$$store.useinit[name],'=true;');
r.push('}');
}else{if(t==="setRuntime"){r.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(s.inheritable){r.push('computed=this.',this.$$store.user[name],';');
}else{r.push('old=computed=this.',this.$$store.user[name],';');
}if(t==="setThemed"){r.push('this.',this.$$store.theme[name],'=value;');
}else if(t==="resetThemed"){r.push('delete this.',this.$$store.theme[name],';');
}else if(t==="init"&&u){r.push('this.',this.$$store.init[name],'=value;');
}}r.push('}');
if(s.themeable){r.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!s.inheritable){r.push('old=this.',this.$$store.theme[name],';');
}
if(t==="setRuntime"){r.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(t==="set"){r.push('computed=this.',this.$$store.user[name],'=value;');
}else if(t==="setThemed"){r.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(t==="resetThemed"){r.push('delete this.',this.$$store.theme[name],';');
r.push('if(this.',this.$$store.init[name],'!==undefined){');
r.push('computed=this.',this.$$store.init[name],';');
r.push('this.',this.$$store.useinit[name],'=true;');
r.push('}');
}else if(t==="init"){if(u){r.push('this.',this.$$store.init[name],'=value;');
}r.push('computed=this.',this.$$store.theme[name],';');
}else if(t==="refresh"){r.push('computed=this.',this.$$store.theme[name],';');
}r.push('}');
}r.push('else if(this.',this.$$store.useinit[name],'){');

if(!s.inheritable){r.push('old=this.',this.$$store.init[name],';');
}
if(t==="init"){if(u){r.push('computed=this.',this.$$store.init[name],'=value;');
}else{r.push('computed=this.',this.$$store.init[name],';');
}}else if(t==="set"||t==="setRuntime"||t==="setThemed"||t==="refresh"){r.push('delete this.',this.$$store.useinit[name],';');

if(t==="setRuntime"){r.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(t==="set"){r.push('computed=this.',this.$$store.user[name],'=value;');
}else if(t==="setThemed"){r.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(t==="refresh"){r.push('computed=this.',this.$$store.init[name],';');
}}r.push('}');
if(t==="set"||t==="setRuntime"||t==="setThemed"||t==="init"){r.push('else{');

if(t==="setRuntime"){r.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(t==="set"){r.push('computed=this.',this.$$store.user[name],'=value;');
}else if(t==="setThemed"){r.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(t==="init"){if(u){r.push('computed=this.',this.$$store.init[name],'=value;');
}else{r.push('computed=this.',this.$$store.init[name],';');
}r.push('this.',this.$$store.useinit[name],'=true;');
}r.push('}');
}},__G:function(C,D,name,E){C.push('if(computed===undefined||computed===inherit){');

if(E==="refresh"){C.push('computed=value;');
}else{C.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}C.push('if((computed===undefined||computed===inherit)&&');
C.push('this.',this.$$store.init[name],'!==undefined&&');
C.push('this.',this.$$store.init[name],'!==inherit){');
C.push('computed=this.',this.$$store.init[name],';');
C.push('this.',this.$$store.useinit[name],'=true;');
C.push('}else{');
C.push('delete this.',this.$$store.useinit[name],';}');
C.push('}');
C.push('if(old===computed)return value;');
C.push('if(computed===inherit){');
C.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
C.push('}');
C.push('else if(computed===undefined)');
C.push('delete this.',this.$$store.inherit[name],';');
C.push('else this.',this.$$store.inherit[name],'=computed;');
C.push('var backup=computed;');
if(D.init!==undefined&&E!=="init"){C.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{C.push('if(old===undefined)old=null;');
}C.push('if(computed===undefined||computed==inherit)computed=null;');
},__H:function(n,o,name,p){if(p!=="set"&&p!=="setRuntime"&&p!=="setThemed"){n.push('if(computed===undefined)computed=null;');
}n.push('if(old===computed)return value;');
if(o.init!==undefined&&p!=="init"){n.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{n.push('if(old===undefined)old=null;');
}},__I:function(H,I,name){if(I.apply){H.push('this.',I.apply,'(computed, old, "',name,'");');
}if(I.event){H.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",I.event,"')){","reg.fireEvent(this, '",I.event,"', qx.event.type.Data, [computed, old]",")}");
}},__J:function(dF,name){dF.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
dF.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
dF.push('}');
}},defer:function(y){var A=navigator.userAgent.indexOf(bC)!=-1;
var z=navigator.userAgent.indexOf(cs)!=-1;
if(A||z){y.__v=y.__w;
}}});
})();
(function(){var m="emulated",k="native",j='"',h="qx.lang.Core",g="\\\\",f="\\\"",e="[object Error]";
qx.Bootstrap.define(h,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==e)?m:k],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(t,u){if(u==null){u=0;
}else if(u<0){u=Math.max(0,this.length+u);
}
for(var i=u;i<this.length;i++){if(this[i]===t){return i;
}}return -1;
}}[Array.prototype.indexOf?k:m],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(C,D){if(D==null){D=this.length-1;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i>=0;i--){if(this[i]===C){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?k:m],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(q,r){var l=this.length;

for(var i=0;i<l;i++){var s=this[i];

if(s!==undefined){q.call(r||window,s,i,this);
}}}}[Array.prototype.forEach?k:m],arrayFilter:{"native":Array.prototype.filter,"emulated":function(a,b){var c=[];
var l=this.length;

for(var i=0;i<l;i++){var d=this[i];

if(d!==undefined){if(a.call(b||window,d,i,this)){c.push(this[i]);
}}}return c;
}}[Array.prototype.filter?k:m],arrayMap:{"native":Array.prototype.map,"emulated":function(y,z){var A=[];
var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){A[i]=y.call(z||window,B,i,this);
}}return A;
}}[Array.prototype.map?k:m],arraySome:{"native":Array.prototype.some,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){if(n.call(o||window,p,i,this)){return true;
}}}return false;
}}[Array.prototype.some?k:m],arrayEvery:{"native":Array.prototype.every,"emulated":function(v,w){var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){if(!v.call(w||window,x,i,this)){return false;
}}}return true;
}}[Array.prototype.every?k:m],stringQuote:{"native":String.prototype.quote,"emulated":function(){return j+this.replace(/\\/g,g).replace(/\"/g,f)+j;
}}[String.prototype.quote?k:m]}});
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
(function(){var bp="[Class ",bo="]",bn="extend",bm="qx.Class",bl=".",bk="static";
qx.Bootstrap.define(bm,{statics:{define:function(name,bW){if(!bW){var bW={};
}if(bW.include&&!(bW.include instanceof Array)){bW.include=[bW.include];
}if(bW.implement&&!(bW.implement instanceof Array)){bW.implement=[bW.implement];
}var bX=false;

if(!bW.hasOwnProperty(bn)&&!bW.type){bW.type=bk;
bX=true;
}{};
var bY=this.__O(name,bW.type,bW.extend,bW.statics,bW.construct,bW.destruct,bW.include);
if(bW.extend){if(bW.properties){this.__Q(bY,bW.properties,true);
}if(bW.members){this.__S(bY,bW.members,true,true,false);
}if(bW.events){this.__P(bY,bW.events,true);
}if(bW.include){for(var i=0,l=bW.include.length;i<l;i++){this.__W(bY,bW.include[i],false);
}}}if(bW.settings){for(var ca in bW.settings){qx.core.Setting.define(ca,bW.settings[ca]);
}}if(bW.variants){for(var ca in bW.variants){qx.core.Variant.define(ca,bW.variants[ca].allowedValues,bW.variants[ca].defaultValue);
}}if(bW.implement){for(var i=0,l=bW.implement.length;i<l;i++){this.__U(bY,bW.implement[i]);
}}{};
if(bW.defer){bW.defer.self=bY;
bW.defer(bY,bY.prototype,{add:function(name,k){var m={};
m[name]=k;
qx.Class.__Q(bY,m,true);
}});
}return bY;
},undefine:function(name){delete this.$$registry[name];
var D=name.split(bl);
var F=[window];

for(var i=0;i<D.length;i++){F.push(F[i][D[i]]);
}for(var i=F.length-1;i>=1;i--){var E=F[i];
var parent=F[i-1];

if(qx.Bootstrap.isFunction(E)||qx.Bootstrap.objectGetLength(E)===0){delete parent[D[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bD,bE){{};
qx.Class.__W(bD,bE,false);
},patch:function(n,o){{};
qx.Class.__W(n,o,true);
},isSubClassOf:function(bB,bC){if(!bB){return false;
}
if(bB==bC){return true;
}
if(bB.prototype instanceof bC){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(R){var S=[];

while(R){if(R.$$properties){S.push.apply(S,qx.Bootstrap.getKeys(R.$$properties));
}R=R.superclass;
}return S;
},getByProperty:function(by,name){while(by){if(by.$$properties&&by.$$properties[name]){return by;
}by=by.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bU,bV){return bU.$$includes&&bU.$$includes.indexOf(bV)!==-1;
},getByMixin:function(bF,bG){var bH,i,l;

while(bF){if(bF.$$includes){bH=bF.$$flatIncludes;

for(i=0,l=bH.length;i<l;i++){if(bH[i]===bG){return bF;
}}}bF=bF.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(B,C){return !!this.getByMixin(B,C);
},hasOwnInterface:function(X,Y){return X.$$implements&&X.$$implements.indexOf(Y)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bw){var bx=[];

while(bw){if(bw.$$implements){bx.push.apply(bx,bw.$$flatImplements);
}bw=bw.superclass;
}return bx;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bI,bJ){var bK=bI.constructor;

if(this.hasInterface(bK,bJ)){return true;
}
try{qx.Interface.assertObject(bI,bJ);
return true;
}catch(x){}
try{qx.Interface.assert(bK,bJ,false);
return true;
}catch(I){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bp+this.classname+bo;
},$$registry:qx.Bootstrap.$$registry,__K:null,__L:null,__M:function(){},__N:function(){},__O:function(name,ba,bb,bc,bd,be,bf){var bi;

if(!bb&&true){bi=bc||{};
qx.Bootstrap.setDisplayNames(bi,name);
}else{var bi={};

if(bb){if(!bd){bd=this.__X();
}
if(this.__ba(bb,bf)){bi=this.__bb(bd,name,ba);
}else{bi=bd;
}if(ba==="singleton"){bi.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bd,name,"constructor");
}if(bc){qx.Bootstrap.setDisplayNames(bc,name);
var bj;

for(var i=0,a=qx.Bootstrap.getKeys(bc),l=a.length;i<l;i++){bj=a[i];
var bg=bc[bj];
{bi[bj]=bg;
};
}}}var bh=qx.Bootstrap.createNamespace(name,bi);
bi.name=bi.classname=name;
bi.basename=bh;
bi.$$type="Class";

if(ba){bi.$$classtype=ba;
}if(!bi.hasOwnProperty("toString")){bi.toString=this.genericToString;
}
if(bb){qx.Bootstrap.extendClass(bi,bd,bb,name,bh);
if(be){{};
bi.$$destructor=be;
qx.Bootstrap.setDisplayName(be,name,"destruct");
}}this.$$registry[name]=bi;
return bi;
},__P:function(T,U,V){var W,W;
{};

if(T.$$events){for(var W in U){T.$$events[W]=U[W];
}}else{T.$$events=U;
}},__Q:function(b,c,d){var e;

if(d===undefined){d=false;
}var f=b.prototype;

for(var name in c){e=c[name];
{};
e.name=name;
if(!e.refine){if(b.$$properties===undefined){b.$$properties={};
}b.$$properties[name]=e;
}if(e.init!==undefined){b.prototype["$$init_"+name]=e.init;
}if(e.event!==undefined){var event={};
event[e.event]="qx.event.type.Data";
this.__P(b,event,d);
}if(e.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!f.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(b);
}}
if(!e.refine){qx.core.Property.attachMethods(b,name,e);
}}},__R:null,__S:function(J,K,L,M,N){var O=J.prototype;
var Q,P;
qx.Bootstrap.setDisplayNames(K,J.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(K),l=a.length;i<l;i++){Q=a[i];
P=K[Q];
{};
if(M!==false&&P instanceof Function&&P.$$type==null){if(N==true){P=this.__T(P,O[Q]);
}else{if(O[Q]){P.base=O[Q];
}P.self=J;
}{};
}O[Q]=P;
}},__T:function(G,H){if(H){return function(){var bA=G.base;
G.base=H;
var bz=G.apply(this,arguments);
G.base=bA;
return bz;
};
}else{return G;
}},__U:function(bL,bM){{};
var bN=qx.Interface.flatten([bM]);

if(bL.$$implements){bL.$$implements.push(bM);
bL.$$flatImplements.push.apply(bL.$$flatImplements,bN);
}else{bL.$$implements=[bM];
bL.$$flatImplements=bN;
}},__V:function(bO){var name=bO.classname;
var bP=this.__bb(bO,name,bO.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bO),l=a.length;i<l;i++){bQ=a[i];
bP[bQ]=bO[bQ];
}bP.prototype=bO.prototype;
var bS=bO.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bS),l=a.length;i<l;i++){bQ=a[i];
var bT=bS[bQ];
if(bT&&bT.self==bO){bT.self=bP;
}}for(var bQ in this.$$registry){var bR=this.$$registry[bQ];

if(!bR){continue;
}
if(bR.base==bO){bR.base=bP;
}
if(bR.superclass==bO){bR.superclass=bP;
}
if(bR.$$original){if(bR.$$original.base==bO){bR.$$original.base=bP;
}
if(bR.$$original.superclass==bO){bR.$$original.superclass=bP;
}}}qx.Bootstrap.createNamespace(name,bP);
this.$$registry[name]=bP;
return bP;
},__W:function(bq,br,bs){{};

if(this.hasMixin(bq,br)){return;
}var bv=bq.$$original;

if(br.$$constructor&&!bv){bq=this.__V(bq);
}var bu=qx.Mixin.flatten([br]);
var bt;

for(var i=0,l=bu.length;i<l;i++){bt=bu[i];
if(bt.$$events){this.__P(bq,bt.$$events,bs);
}if(bt.$$properties){this.__Q(bq,bt.$$properties,bs);
}if(bt.$$members){this.__S(bq,bt.$$members,bs,bs,bs);
}}if(bq.$$includes){bq.$$includes.push(br);
bq.$$flatIncludes.push.apply(bq.$$flatIncludes,bu);
}else{bq.$$includes=[br];
bq.$$flatIncludes=bu;
}},__X:function(){function cb(){cb.base.apply(this,arguments);
}return cb;
},__Y:function(){return function(){};
},__ba:function(p,q){{};
if(p&&p.$$includes){var r=p.$$flatIncludes;

for(var i=0,l=r.length;i<l;i++){if(r[i].$$constructor){return true;
}}}if(q){var s=qx.Mixin.flatten(q);

for(var i=0,l=s.length;i<l;i++){if(s[i].$$constructor){return true;
}}}return false;
},__bb:function(t,name,u){var v;
var w=function(){var j=w;
{};
var h=j.$$original.apply(this,arguments);
if(j.$$includes){var g=j.$$flatIncludes;

for(var i=0,l=g.length;i<l;i++){if(g[i].$$constructor){g[i].$$constructor.apply(this,arguments);
}}}{};
return h;
};
{};
w.$$original=t;
t.wrapper=w;
return w;
}},defer:function(){var y,z,A;
{};
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__bf:function(){var t=d;
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
}},defer:function(A){A.__bf();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__bg:{},__bh:{},compilerIsSet:function(){return true;
},define:function(L,M,N){{};

if(!this.__bg[L]){this.__bg[L]={};
}else{}this.__bg[L].allowedValues=M;
this.__bg[L].defaultValue=N;
},get:function(O){var P=this.__bg[O];
{};

if(P.value!==undefined){return P.value;
}return P.defaultValue;
},__bi:function(){if(window.qxvariants){for(var C in qxvariants){{};

if(!this.__bg[C]){this.__bg[C]={};
}this.__bg[C].value=qxvariants[C];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(B){}this.__bj(this.__bg);
}},__bj:function(){if(qx.core.Setting.get(m)!=true){return;
}var I=document.location.search.slice(1).split(p);

for(var i=0;i<I.length;i++){var J=I[i].split(f);

if(J.length!=3||J[0]!=c){continue;
}var K=J[1];

if(!this.__bg[K]){this.__bg[K]={};
}this.__bg[K].value=decodeURIComponent(J[2]);
}},select:function(y,z){{};

for(var A in z){if(this.isSet(y,A)){return z[A];
}}
if(z[r]!==undefined){return z[r];
}{};
},isSet:function(D,E){var F=D+n+E;

if(this.__bh[F]!==undefined){return this.__bh[F];
}var H=false;
if(E.indexOf(s)<0){H=this.get(D)===E;
}else{var G=E.split(s);

for(var i=0,l=G.length;i<l;i++){if(this.get(D)===G[i]){H=true;
break;
}}}this.__bh[F]=H;
return H;
},__bk:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__bl:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__bm:function(w,x){for(var i=0,l=w.length;i<l;i++){if(w[i]==x){return true;
}}return false;
}},defer:function(Q){Q.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
Q.define(k,[u,t],u);
Q.define(o,[u,t],t);
Q.define(j,[u,t],u);
Q.__bi();
}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(A,B,C){A.attachEvent(h+B,C);
},"default":function(x,y,z){x.addEventListener(y,z,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(r,s,t){try{r.detachEvent(h+s,t);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(D,E,F){D.removeEventListener(E,F,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(i,{"mshtml":function(e){if(e.type===b){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(i,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(n){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(w){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(o,p){if(document.createEventObject){var q=document.createEventObject();
return o.fireEvent(h+p,q);
}else{var q=document.createEvent(a);
q.initEvent(p,true,true);
return !o.dispatchEvent(q);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(u,v){return u.hasOwnProperty(h+v);
},"default":function(j,k){var l=h+k;
var m=(l in j);

if(!m){m=typeof j[l]==g;

if(!m&&j.setAttribute){j.setAttribute(l,c);
m=typeof j[l]==g;
j.removeAttribute(l);
}}return m;
}})}});
})();
(function(){var x="|bubble",w="|capture",v="|",u="",t="_",s="unload",r="UNKNOWN_",q="__bs",p="__br",o="c",k="DOM_",n="WIN_",m="capture",j="qx.event.Manager",h="QX_";
qx.Class.define(j,{extend:Object,construct:function(cu,cv){this.__bn=cu;
this.__bo=qx.core.ObjectRegistry.toHashCode(cu);
this.__bp=cv;
if(cu.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cu,s,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cu,s,arguments.callee);
self.dispose();
}));
}this.__bq={};
this.__br={};
this.__bs={};
this.__bt={};
},statics:{__bu:0,getNextUniqueId:function(){return (this.__bu++)+u;
}},members:{__bp:null,__bq:null,__bs:null,__bv:null,__br:null,__bt:null,__bn:null,__bo:null,getWindow:function(){return this.__bn;
},getWindowId:function(){return this.__bo;
},getHandler:function(ch){var ci=this.__br[ch.classname];

if(ci){return ci;
}return this.__br[ch.classname]=new ch(this);
},getDispatcher:function(bM){var bN=this.__bs[bM.classname];

if(bN){return bN;
}return this.__bs[bM.classname]=new bM(this,this.__bp);
},getListeners:function(ca,cb,cc){var cd=ca.$$hash||qx.core.ObjectRegistry.toHashCode(ca);
var cf=this.__bq[cd];

if(!cf){return null;
}var cg=cb+(cc?w:x);
var ce=cf[cg];
return ce?ce.concat():null;
},serializeListeners:function(cw){var cD=cw.$$hash||qx.core.ObjectRegistry.toHashCode(cw);
var cF=this.__bq[cD];
var cB=[];

if(cF){var cz,cE,cx,cA,cC;

for(var cy in cF){cz=cy.indexOf(v);
cE=cy.substring(0,cz);
cx=cy.charAt(cz+1)==o;
cA=cF[cy];

for(var i=0,l=cA.length;i<l;i++){cC=cA[i];
cB.push({self:cC.context,handler:cC.handler,type:cE,capture:cx});
}}}return cB;
},toggleAttachedEvents:function(bD,bE){var bJ=bD.$$hash||qx.core.ObjectRegistry.toHashCode(bD);
var bL=this.__bq[bJ];

if(bL){var bG,bK,bF,bH;

for(var bI in bL){bG=bI.indexOf(v);
bK=bI.substring(0,bG);
bF=bI.charCodeAt(bG+1)===99;
bH=bL[bI];

if(bE){this.__bw(bD,bK,bF);
}else{this.__bx(bD,bK,bF);
}}}},hasListener:function(a,b,c){{};
var d=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var f=this.__bq[d];

if(!f){return false;
}var g=b+(c?w:x);
var e=f[g];
return e&&e.length>0;
},importListeners:function(K,L){{};
var R=K.$$hash||qx.core.ObjectRegistry.toHashCode(K);
var S=this.__bq[R]={};
var O=qx.event.Manager;

for(var M in L){var P=L[M];
var Q=P.type+(P.capture?w:x);
var N=S[Q];

if(!N){N=S[Q]=[];
this.__bw(K,P.type,P.capture);
}N.push({handler:P.listener,context:P.self,unique:P.unique||(O.__bu++)+u});
}},addListener:function(bl,bm,bn,self,bo){var bs;
{};
var bt=bl.$$hash||qx.core.ObjectRegistry.toHashCode(bl);
var bv=this.__bq[bt];

if(!bv){bv=this.__bq[bt]={};
}var br=bm+(bo?w:x);
var bq=bv[br];

if(!bq){bq=bv[br]=[];
}if(bq.length===0){this.__bw(bl,bm,bo);
}var bu=(qx.event.Manager.__bu++)+u;
var bp={handler:bn,context:self,unique:bu};
bq.push(bp);
return br+v+bu;
},findHandler:function(T,U){var bf=false,X=false,bg=false;
var be;

if(T.nodeType===1){bf=true;
be=k+T.tagName.toLowerCase()+t+U;
}else if(T==this.__bn){X=true;
be=n+U;
}else if(T.classname){bg=true;
be=h+T.classname+t+U;
}else{be=r+T+t+U;
}var ba=this.__bt;

if(ba[be]){return ba[be];
}var bd=this.__bp.getHandlers();
var Y=qx.event.IEventHandler;
var bb,bc,W,V;

for(var i=0,l=bd.length;i<l;i++){bb=bd[i];
W=bb.SUPPORTED_TYPES;

if(W&&!W[U]){continue;
}V=bb.TARGET_CHECK;

if(V){if(!bf&&V===Y.TARGET_DOMNODE){continue;
}else if(!X&&V===Y.TARGET_WINDOW){continue;
}else if(!bg&&V===Y.TARGET_OBJECT){continue;
}}bc=this.getHandler(bd[i]);

if(bb.IGNORE_CAN_HANDLE||bc.canHandleEvent(T,U)){ba[be]=bc;
return bc;
}}return null;
},__bw:function(bh,bi,bj){var bk=this.findHandler(bh,bi);

if(bk){bk.registerEvent(bh,bi,bj);
return;
}{};
},removeListener:function(ck,cl,cm,self,cn){var cr;
{};
var cs=ck.$$hash||qx.core.ObjectRegistry.toHashCode(ck);
var ct=this.__bq[cs];

if(!ct){return false;
}var co=cl+(cn?w:x);
var cp=ct[co];

if(!cp){return false;
}var cq;

for(var i=0,l=cp.length;i<l;i++){cq=cp[i];

if(cq.handler===cm&&cq.context===self){qx.lang.Array.removeAt(cp,i);

if(cp.length==0){this.__bx(ck,cl,cn);
}return true;
}}return false;
},removeListenerById:function(y,z){var F;
{};
var D=z.split(v);
var I=D[0];
var A=D[1].charCodeAt(0)==99;
var H=D[2];
var G=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var J=this.__bq[G];

if(!J){return false;
}var E=I+(A?w:x);
var C=J[E];

if(!C){return false;
}var B;

for(var i=0,l=C.length;i<l;i++){B=C[i];

if(B.unique===H){qx.lang.Array.removeAt(C,i);

if(C.length==0){this.__bx(y,I,A);
}return true;
}}return false;
},removeAllListeners:function(bw){var bA=bw.$$hash||qx.core.ObjectRegistry.toHashCode(bw);
var bC=this.__bq[bA];

if(!bC){return false;
}var by,bB,bx;

for(var bz in bC){if(bC[bz].length>0){by=bz.split(v);
bB=by[0];
bx=by[1]===m;
this.__bx(bw,bB,bx);
}}delete this.__bq[bA];
return true;
},deleteAllListeners:function(cj){delete this.__bq[cj];
},__bx:function(bV,bW,bX){var bY=this.findHandler(bV,bW);

if(bY){bY.unregisterEvent(bV,bW,bX);
return;
}{};
},dispatchEvent:function(bO,event){var bT;
{};
var bU=event.getType();

if(!event.getBubbles()&&!this.hasListener(bO,bU)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bO);
}var bS=this.__bp.getDispatchers();
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
},dispose:function(){this.__bp.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,p);
qx.util.DisposeUtil.disposeMap(this,q);
this.__bq=this.__bn=this.__bv=null;
this.__bp=this.__bt=null;
}}});
})();
(function(){var e="qx.dom.Node",d="qx.client",c="";
qx.Class.define(e,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(b){return b.nodeType===
this.DOCUMENT?b:
b.ownerDocument||b.document;
},getWindow:qx.core.Variant.select(d,{"mshtml":function(o){if(o.nodeType==null){return o;
}if(o.nodeType!==this.DOCUMENT){o=o.ownerDocument;
}return o.parentWindow;
},"default":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.defaultView;
}}),getDocumentElement:function(t){return this.getDocument(t).documentElement;
},getBodyElement:function(r){return this.getDocument(r).body;
},isNode:function(s){return !!(s&&s.nodeType!=null);
},isElement:function(k){return !!(k&&k.nodeType===this.ELEMENT);
},isDocument:function(j){return !!(j&&j.nodeType===this.DOCUMENT);
},isText:function(g){return !!(g&&g.nodeType===this.TEXT);
},isWindow:function(h){return !!(h&&h.history&&h.location&&h.document);
},isNodeName:function(p,q){if(!q||!p||!p.nodeName){return false;
}return q.toLowerCase()==qx.dom.Node.getName(p);
},getName:function(l){if(!l||!l.nodeName){return null;
}return l.nodeName.toLowerCase();
},getText:function(m){if(!m||!m.nodeType){return null;
}
switch(m.nodeType){case 1:var i,a=[],n=m.childNodes,length=n.length;

for(i=0;i<length;i++){a[i]=this.getText(n[i]);
}return a.join(c);
case 2:return m.nodeValue;
break;
case 3:return m.nodeValue;
break;
}return null;
}}});
})();
(function(){var n="mshtml",m="qx.client",k="[object Array]",j="qx.lang.Array",h="qx",g="number",f="string";
qx.Class.define(j,{statics:{toArray:function(bh,bi){return this.cast(bh,Array,bi);
},cast:function(I,J,K){if(I.constructor===J){return I;
}
if(qx.Class.hasInterface(I,qx.data.IListData)){var I=I.toArray();
}var L=new J;
if(qx.core.Variant.isSet(m,n)){if(I.item){for(var i=K||0,l=I.length;i<l;i++){L.push(I[i]);
}return L;
}}if(Object.prototype.toString.call(I)===k&&K==null){L.push.apply(L,I);
}else{L.push.apply(L,Array.prototype.slice.call(I,K||0));
}return L;
},fromArguments:function(M,N){return Array.prototype.slice.call(M,N||0);
},fromCollection:function(bn){if(qx.core.Variant.isSet(m,n)){if(bn.item){var bo=[];

for(var i=0,l=bn.length;i<l;i++){bo[i]=bn[i];
}return bo;
}}return Array.prototype.slice.call(bn,0);
},fromShortHand:function(b){var d=b.length;
var c=qx.lang.Array.clone(b);
switch(d){case 1:c[1]=c[2]=c[3]=c[0];
break;
case 2:c[2]=c[0];
case 3:c[3]=c[1];
}return c;
},clone:function(e){return e.concat();
},insertAt:function(be,bf,i){be.splice(i,0,bf);
return be;
},insertBefore:function(w,x,y){var i=w.indexOf(y);

if(i==-1){w.push(x);
}else{w.splice(i,0,x);
}return w;
},insertAfter:function(F,G,H){var i=F.indexOf(H);

if(i==-1||i==(F.length-1)){F.push(G);
}else{F.splice(i+1,0,G);
}return F;
},removeAt:function(o,i){return o.splice(i,1)[0];
},removeAll:function(bj){bj.length=0;
return this;
},append:function(bp,bq){{};
Array.prototype.push.apply(bp,bq);
return bp;
},exclude:function(B,C){{};

for(var i=0,E=C.length,D;i<E;i++){D=B.indexOf(C[i]);

if(D!=-1){B.splice(D,1);
}}return B;
},remove:function(u,v){var i=u.indexOf(v);

if(i!=-1){u.splice(i,1);
return v;
}},contains:function(z,A){return z.indexOf(A)!==-1;
},equals:function(p,q){var length=p.length;

if(length!==q.length){return false;
}
for(var i=0;i<length;i++){if(p[i]!==q[i]){return false;
}}return true;
},sum:function(O){var P=0;

for(var i=0,l=O.length;i<l;i++){P+=O[i];
}return P;
},max:function(bk){{};
var i,bm=bk.length,bl=bk[0];

for(i=1;i<bm;i++){if(bk[i]>bl){bl=bk[i];
}}return bl===undefined?null:bl;
},min:function(r){{};
var i,t=r.length,s=r[0];

for(i=1;i<t;i++){if(r[i]<s){s=r[i];
}}return s===undefined?null:s;
},unique:function(Q){var bb=[],S={},V={},X={};
var W,R=0;
var bc=h+qx.lang.Date.now();
var T=false,ba=false,bd=false;
for(var i=0,Y=Q.length;i<Y;i++){W=Q[i];
if(W===null){if(!T){T=true;
bb.push(W);
}}else if(W===undefined){}else if(W===false){if(!ba){ba=true;
bb.push(W);
}}else if(W===true){if(!bd){bd=true;
bb.push(W);
}}else if(typeof W===f){if(!S[W]){S[W]=1;
bb.push(W);
}}else if(typeof W===g){if(!V[W]){V[W]=1;
bb.push(W);
}}else{U=W[bc];

if(U==null){U=W[bc]=R++;
}
if(!X[U]){X[U]=W;
bb.push(W);
}}}for(var U in X){try{delete X[U][bc];
}catch(bg){try{X[U][bc]=null;
}catch(a){throw new Error("Cannot clean-up map entry doneObjects["+U+"]["+bc+"]");
}}}return bb;
}}});
})();
(function(){var A="()",z=".",y=".prototype.",x='anonymous()',w="qx.lang.Function",v=".constructor()";
qx.Class.define(w,{statics:{getCaller:function(H){return H.caller?H.caller.callee:H.callee.caller;
},getName:function(i){if(i.displayName){return i.displayName;
}
if(i.$$original||i.wrapper||i.classname){return i.classname+v;
}
if(i.$$mixin){for(var k in i.$$mixin.$$members){if(i.$$mixin.$$members[k]==i){return i.$$mixin.name+y+k+A;
}}for(var k in i.$$mixin){if(i.$$mixin[k]==i){return i.$$mixin.name+z+k+A;
}}}
if(i.self){var l=i.self.constructor;

if(l){for(var k in l.prototype){if(l.prototype[k]==i){return l.classname+y+k+A;
}}for(var k in l){if(l[k]==i){return l.classname+z+k+A;
}}}}var j=i.toString().match(/function\s*(\w*)\s*\(.*/);

if(j&&j.length>=1&&j[1]){return j[1]+A;
}return x;
},globalEval:function(G){if(window.execScript){return window.execScript(G);
}else{return eval.call(window,G);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(E,F){{};
if(!F){return E;
}if(!(F.self||F.args||F.delay!=null||F.periodical!=null||F.attempt)){return E;
}return function(event){{};
var r=qx.lang.Array.fromArguments(arguments);
if(F.args){r=F.args.concat(r);
}
if(F.delay||F.periodical){var q=qx.event.GlobalError.observeMethod(function(){return E.apply(F.self||this,r);
});

if(F.delay){return window.setTimeout(q,F.delay);
}
if(F.periodical){return window.setInterval(q,F.periodical);
}}else if(F.attempt){var s=false;

try{s=E.apply(F.self||this,r);
}catch(u){}return s;
}else{return E.apply(F.self||this,r);
}};
},bind:function(a,self,b){return this.create(a,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(o,p){return this.create(o,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(B,self,C){if(arguments.length<3){return function(event){return B.call(self||this,event||window.event);
};
}else{var D=qx.lang.Array.fromArguments(arguments,2);
return function(event){var t=[event||window.event];
t.push.apply(t,D);
B.apply(self||this,t);
};
}},attempt:function(m,self,n){return this.create(m,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(c,d,self,e){return this.create(c,{delay:d,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(f,g,self,h){return this.create(f,{periodical:g,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var g="qx.event.Registration";
qx.Class.define(g,{statics:{__by:{},getManager:function(z){if(z==null){{};
z=window;
}else if(z.nodeType){z=qx.dom.Node.getWindow(z);
}else if(!qx.dom.Node.isWindow(z)){z=window;
}var B=z.$$hash||qx.core.ObjectRegistry.toHashCode(z);
var A=this.__by[B];

if(!A){A=new qx.event.Manager(z,this);
this.__by[B]=A;
}return A;
},removeManager:function(k){var l=k.getWindowId();
delete this.__by[l];
},addListener:function(K,L,M,self,N){return this.getManager(K).addListener(K,L,M,self,N);
},removeListener:function(F,G,H,self,I){return this.getManager(F).removeListener(F,G,H,self,I);
},removeListenerById:function(h,i){return this.getManager(h).removeListenerById(h,i);
},removeAllListeners:function(J){return this.getManager(J).removeAllListeners(J);
},deleteAllListeners:function(R){var S=R.$$hash;

if(S){this.getManager(R).deleteAllListeners(S);
}},hasListener:function(O,P,Q){return this.getManager(O).hasListener(O,P,Q);
},serializeListeners:function(s){return this.getManager(s).serializeListeners(s);
},createEvent:function(c,d,e){{};
if(d==null){d=qx.event.type.Event;
}var f=qx.event.Pool.getInstance().getObject(d);
e?f.init.apply(f,e):f.init();
if(c){f.setType(c);
}return f;
},dispatchEvent:function(E,event){return this.getManager(E).dispatchEvent(E,event);
},fireEvent:function(t,u,v,w){var x;
{};
var y=this.createEvent(u,v||null,w);
return this.getManager(t).dispatchEvent(t,y);
},fireNonBubblingEvent:function(m,n,o,p){{};
var q=this.getManager(m);

if(!q.hasListener(m,n,false)){return true;
}var r=this.createEvent(n,o||null,p);
return q.dispatchEvent(m,r);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bz:[],addHandler:function(j){{};
this.__bz.push(j);
this.__bz.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bz;
},__bA:[],addDispatcher:function(C,D){{};
this.__bA.push(C);
this.__bA.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bA;
}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__bc:{},__bd:0,__be:[],register:function(t){var w=this.__bc;

if(!w){return;
}var v=t.$$hash;

if(v==null){var u=this.__be;

if(u.length>0){v=u.pop();
}else{v=(this.__bd++)+d;
}t.$$hash=v;
}{};
w[v]=t;
},unregister:function(p){var q=p.$$hash;

if(q==null){return;
}var r=this.__bc;

if(r&&r[q]){delete r[q];
this.__be.push(q);
}try{delete p.$$hash;
}catch(f){if(p.removeAttribute){p.removeAttribute(e);
}}},toHashCode:function(m){{};
var o=m.$$hash;

if(o!=null){return o;
}var n=this.__be;

if(n.length>0){o=n.pop();
}else{o=(this.__bd++)+d;
}return m.$$hash=o;
},clearHashCode:function(j){{};
var k=j.$$hash;

if(k!=null){this.__be.push(k);
try{delete j.$$hash;
}catch(g){if(j.removeAttribute){j.removeAttribute(e);
}}}},fromHashCode:function(h){return this.__bc[h]||null;
},shutdown:function(){this.inShutDown=true;
var y=this.__bc;
var A=[];

for(var z in y){A.push(z);
}A.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var x,i=0,l=A.length;

while(true){try{for(;i<l;i++){z=A[i];
x=y[z];

if(x&&x.dispose){x.dispose();
}}}catch(s){qx.Bootstrap.error(this,"Could not dispose object "+x.toString()+": "+s);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bc;
},getRegistry:function(){return this.__bc;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var k=":",j="qx.client",h="anonymous",g="...",f="qx.dev.StackTrace",e="",d="\n",c="/source/class/",b=".";
qx.Class.define(f,{statics:{getStackTrace:qx.core.Variant.select(j,{"gecko":function(){try{throw new Error();
}catch(a){var T=this.getStackTraceFromError(a);
qx.lang.Array.removeAt(T,0);
var R=this.getStackTraceFromCaller(arguments);
var P=R.length>T.length?R:T;

for(var i=0;i<Math.min(R.length,T.length);i++){var Q=R[i];

if(Q.indexOf(h)>=0){continue;
}var X=Q.split(k);

if(X.length!=2){continue;
}var V=X[0];
var O=X[1];
var N=T[i];
var Y=N.split(k);
var U=Y[0];
var M=Y[1];

if(qx.Class.getByName(U)){var S=U;
}else{S=V;
}var W=S+k;

if(O){W+=O+k;
}W+=M;
P[i]=W;
}return P;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var K;

try{K.bar();
}catch(ba){var L=this.getStackTraceFromError(ba);
qx.lang.Array.removeAt(L,0);
return L;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(j,{"opera":function(bb){return [];
},"default":function(x){var C=[];
var B=qx.lang.Function.getCaller(x);
var y={};

while(B){var z=qx.lang.Function.getName(B);
C.push(z);

try{B=B.caller;
}catch(p){break;
}
if(!B){break;
}var A=qx.core.ObjectRegistry.toHashCode(B);

if(y[A]){C.push(g);
break;
}y[A]=B;
}return C;
}}),getStackTraceFromError:qx.core.Variant.select(j,{"gecko":function(D){if(!D.stack){return [];
}var J=/@(.+):(\d+)$/gm;
var E;
var F=[];

while((E=J.exec(D.stack))!=null){var G=E[1];
var I=E[2];
var H=this.__bB(G);
F.push(H+k+I);
}return F;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__bB(bc.sourceURL)+k+bc.line];
}else{return [];
}},"opera":function(q){if(q.message.indexOf("Backtrace:")<0){return [];
}var s=[];
var t=qx.lang.String.trim(q.message.split("Backtrace:")[1]);
var u=t.split(d);

for(var i=0;i<u.length;i++){var r=u[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(r&&r.length>=2){var w=r[1];
var v=this.__bB(r[2]);
s.push(v+k+w);
}}return s;
},"default":function(){return [];
}}),__bB:function(l){var o=c;
var m=l.indexOf(o);
var n=(m==-1)?l:l.substring(m+o.length).replace(/\//g,b).replace(/\.js$/,e);
return n;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__bC:0,__bD:0,__bE:false,__bF:0,__bG:null,__bH:null,setMaxEntries:function(j){this.__bH=j;
this.clear();
},getMaxEntries:function(){return this.__bH;
},addEntry:function(h){this.__bG[this.__bC]=h;
this.__bC=this.__bI(this.__bC,1);
var i=this.getMaxEntries();

if(this.__bD<i){this.__bD++;
}if(this.__bE&&(this.__bF<i)){this.__bF++;
}},mark:function(){this.__bE=true;
this.__bF=0;
},clearMark:function(){this.__bE=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(c,d){if(c>this.__bD){c=this.__bD;
}if(d&&this.__bE&&(c>this.__bF)){c=this.__bF;
}
if(c>0){var f=this.__bI(this.__bC,-1);
var e=this.__bI(f,-c+1);
var g;

if(e<=f){g=this.__bG.slice(e,f+1);
}else{g=this.__bG.slice(e,this.__bD).concat(this.__bG.slice(0,f+1));
}}else{g=[];
}return g;
},clear:function(){this.__bG=new Array(this.getMaxEntries());
this.__bD=0;
this.__bF=0;
this.__bC=0;
},__bI:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(d){this.setMaxMessages(d||50);
},members:{setMaxMessages:function(f){this.setMaxEntries(f);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(e){this.addEntry(e);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(b,c){return this.getEntries(b,c);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var s="node",r="error",q="...(+",p="array",o=")",n="info",m="instance",k="string",j="null",h="class",N="number",M="stringify",L="]",K="unknown",J="function",I="boolean",H="debug",G="map",F="undefined",E="qx.log.Logger",z=")}",A="#",x="warn",y="document",v="{...(",w="[",t="text[",u="[...(",B="\n",C=")]",D="object";
qx.Class.define(E,{statics:{__bJ:H,setLevel:function(bz){this.__bJ=bz;
},getLevel:function(){return this.__bJ;
},setTreshold:function(bC){this.__bM.setMaxMessages(bC);
},getTreshold:function(){return this.__bM.getMaxMessages();
},__bK:{},__bL:0,register:function(bN){if(bN.$$id){return;
}var bO=this.__bL++;
this.__bK[bO]=bN;
bN.$$id=bO;
var bP=this.__bM.getAllLogEvents();

for(var i=0,l=bP.length;i<l;i++){bN.process(bP[i]);
}},unregister:function(bt){var bu=bt.$$id;

if(bu==null){return;
}delete this.__bK[bu];
delete bt.$$id;
},debug:function(bF,bG){qx.log.Logger.__bO(H,arguments);
},info:function(bA,bB){qx.log.Logger.__bO(n,arguments);
},warn:function(T,U){qx.log.Logger.__bO(x,arguments);
},error:function(bD,bE){qx.log.Logger.__bO(r,arguments);
},trace:function(g){qx.log.Logger.__bO(n,[g,qx.dev.StackTrace.getStackTrace().join(B)]);
},deprecatedMethodWarning:function(a,b){var c;
{};
},deprecatedClassWarning:function(bH,bI){var bJ;
{};
},deprecatedEventWarning:function(d,event,e){var f;
{};
},deprecatedMixinWarning:function(bK,bL){var bM;
{};
},deprecatedConstantWarning:function(bp,bq,br){var self,bs;
{};
},deprecateMethodOverriding:function(O,P,Q,R){var S;
{};
},clear:function(){this.__bM.clearHistory();
},__bM:new qx.log.appender.RingBuffer(50),__bN:{debug:0,info:1,warn:2,error:3},__bO:function(V,W){var bc=this.__bN;

if(bc[V]<bc[this.__bJ]){return;
}var Y=W.length<2?null:W[0];
var bb=Y?1:0;
var X=[];

for(var i=bb,l=W.length;i<l;i++){X.push(this.__bQ(W[i],true));
}var bd=new Date;
var be={time:bd,offset:bd-qx.Bootstrap.LOADSTART,level:V,items:X,win:window};
if(Y){if(Y instanceof qx.core.Object){be.object=Y.$$hash;
}else if(Y.$$type){be.clazz=Y;
}}this.__bM.process(be);
var bf=this.__bK;

for(var ba in bf){bf[ba].process(be);
}},__bP:function(bx){if(bx===undefined){return F;
}else if(bx===null){return j;
}
if(bx.$$type){return h;
}var by=typeof bx;

if(by===J||by==k||by===N||by===I){return by;
}else if(by===D){if(bx.nodeType){return s;
}else if(bx.classname){return m;
}else if(bx instanceof Array){return p;
}else if(bx instanceof Error){return r;
}else{return G;
}}
if(bx.toString){return M;
}return K;
},__bQ:function(bg,bh){var bo=this.__bP(bg);
var bk=K;
var bj=[];

switch(bo){case j:case F:bk=bo;
break;
case k:case N:case I:bk=bg;
break;
case s:if(bg.nodeType===9){bk=y;
}else if(bg.nodeType===3){bk=t+bg.nodeValue+L;
}else if(bg.nodeType===1){bk=bg.nodeName.toLowerCase();

if(bg.id){bk+=A+bg.id;
}}else{bk=s;
}break;
case J:bk=qx.lang.Function.getName(bg)||bo;
break;
case m:bk=bg.basename+w+bg.$$hash+L;
break;
case h:case M:bk=bg.toString();
break;
case r:bj=qx.dev.StackTrace.getStackTraceFromError(bg);
bk=bg.toString();
break;
case p:if(bh){bk=[];

for(var i=0,l=bg.length;i<l;i++){if(bk.length>20){bk.push(q+(l-i)+o);
break;
}bk.push(this.__bQ(bg[i],false));
}}else{bk=u+bg.length+C;
}break;
case G:if(bh){var bi;
var bn=[];

for(var bm in bg){bn.push(bm);
}bn.sort();
bk=[];

for(var i=0,l=bn.length;i<l;i++){if(bk.length>20){bk.push(q+(l-i)+o);
break;
}bm=bn[i];
bi=this.__bQ(bg[bm],false);
bi.key=bm;
bk.push(bi);
}}else{var bl=0;

for(var bm in bg){bl++;
}bk=v+bl+z;
}break;
}return {type:bo,text:bk,trace:bj};
}},defer:function(bv){var bw=qx.Bootstrap.$$logs;

for(var i=0;i<bw.length;i++){bv.__bO(bw[i][0],bw[i][1]);
}qx.Bootstrap.debug=bv.debug;
qx.Bootstrap.info=bv.info;
qx.Bootstrap.warn=bv.warn;
qx.Bootstrap.error=bv.error;
qx.Bootstrap.trace=bv.trace;
}});
})();
(function(){var t="set",s="get",r="reset",q="MSIE 6.0",p="qx.core.Object",o="]",n="rv:1.8.1",m="[",k="$$user_",j="Object";
qx.Class.define(p,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:j},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+m+this.$$hash+o;
},base:function(bE,bF){{};

if(arguments.length===1){return bE.callee.base.call(this);
}else{return bE.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(U){return U.callee.self;
},clone:function(){var br=this.constructor;
var bq=new br;
var bt=qx.Class.getProperties(br);
var bs=qx.core.Property.$$store.user;
var bu=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bt.length;i<l;i++){name=bt[i];

if(this.hasOwnProperty(bs[name])){bq[bu[name]](this[bs[name]]);
}}return bq;
},set:function(W,X){var ba=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(W)){if(!this[ba[W]]){if(this[t+qx.Bootstrap.firstUp(W)]!=undefined){this[t+qx.Bootstrap.firstUp(W)](X);
return this;
}{};
}return this[ba[W]](X);
}else{for(var Y in W){if(!this[ba[Y]]){if(this[t+qx.Bootstrap.firstUp(Y)]!=undefined){this[t+qx.Bootstrap.firstUp(Y)](W[Y]);
continue;
}{};
}this[ba[Y]](W[Y]);
}return this;
}},get:function(v){var w=qx.core.Property.$$method.get;

if(!this[w[v]]){if(this[s+qx.Bootstrap.firstUp(v)]!=undefined){return this[s+qx.Bootstrap.firstUp(v)]();
}{};
}return this[w[v]]();
},reset:function(bj){var bk=qx.core.Property.$$method.reset;

if(!this[bk[bj]]){if(this[r+qx.Bootstrap.firstUp(bj)]!=undefined){this[r+qx.Bootstrap.firstUp(bj)]();
return;
}{};
}this[bk[bj]]();
},__bR:qx.event.Registration,addListener:function(bl,bm,self,bn){if(!this.$$disposed){return this.__bR.addListener(this,bl,bm,self,bn);
}return null;
},addListenerOnce:function(bc,bd,self,be){var bf=function(e){bd.call(self||this,e);
this.removeListener(bc,bf,this,be);
};
return this.addListener(bc,bf,this,be);
},removeListener:function(H,I,self,J){if(!this.$$disposed){return this.__bR.removeListener(this,H,I,self,J);
}return false;
},removeListenerById:function(bD){if(!this.$$disposed){return this.__bR.removeListenerById(this,bD);
}return false;
},hasListener:function(bx,by){return this.__bR.hasListener(this,bx,by);
},dispatchEvent:function(x){if(!this.$$disposed){return this.__bR.dispatchEvent(this,x);
}return true;
},fireEvent:function(bg,bh,bi){if(!this.$$disposed){return this.__bR.fireEvent(this,bg,bh,bi);
}return true;
},fireNonBubblingEvent:function(a,b,c){if(!this.$$disposed){return this.__bR.fireNonBubblingEvent(this,a,b,c);
}return true;
},fireDataEvent:function(d,f,g,h){if(!this.$$disposed){if(g===undefined){g=null;
}return this.__bR.fireNonBubblingEvent(this,d,qx.event.type.Data,[f,g,!!h]);
}return true;
},__bS:null,setUserData:function(K,L){if(!this.__bS){this.__bS={};
}this.__bS[K]=L;
},getUserData:function(bv){if(!this.__bS){return null;
}var bw=this.__bS[bv];
return bw===undefined?null:bw;
},__bT:qx.log.Logger,debug:function(z){this.__bT.debug(this,z);
},info:function(A){this.__bT.info(this,A);
},warn:function(bb){this.__bT.warn(this,bb);
},error:function(u){this.__bT.error(this,u);
},trace:function(){this.__bT.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var F,D,C,G;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var E=this.constructor;
var B;

while(E.superclass){if(E.$$destructor){E.$$destructor.call(this);
}if(E.$$includes){B=E.$$flatIncludes;

for(var i=0,l=B.length;i<l;i++){if(B[i].$$destructor){B[i].$$destructor.call(this);
}}}E=E.superclass;
}if(this.__bU){this.__bU();
}{};
},__bU:null,__bV:function(){var y=qx.Class.getProperties(this.constructor);

for(var i=0,l=y.length;i<l;i++){delete this[k+y[i]];
}},_disposeObjects:function(bG){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bp){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(V){qx.util.DisposeUtil.disposeArray(this,V);
},_disposeMap:function(bo){qx.util.DisposeUtil.disposeMap(this,bo);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bz,bA){{};
var bC=navigator.userAgent.indexOf(q)!=-1;
var bB=navigator.userAgent.indexOf(n)!=-1;
if(bC||bB){bA.__bU=bA.__bV;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__bS=null;
var O=this.constructor;
var S;
var T=qx.core.Property.$$store;
var Q=T.user;
var R=T.theme;
var M=T.inherit;
var P=T.useinit;
var N=T.init;

while(O){S=O.$$properties;

if(S){for(var name in S){if(S[name].dereference){this[Q[name]]=this[R[name]]=this[M[name]]=this[P[name]]=this[N[name]]=undefined;
}}}O=O.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(k,l){this.__ct=k||null;
this.__cu=l||window;

if(qx.core.Setting.get(c)===b){if(k&&window.onerror){var m=qx.Bootstrap.bind(this.__cw,this);

if(this.__cv==null){this.__cv=window.onerror;
}var self=this;
window.onerror=function(e){self.__cv(e);
m(e);
};
}
if(k&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__cw,this);
}if(this.__ct==null){if(this.__cv!=null){window.onerror=this.__cv;
this.__cv=null;
}else{window.onerror=null;
}}}},__cw:function(d,f,g){if(this.__ct){this.handleError(new qx.core.WindowError(d,f,g));
return true;
}},observeMethod:function(n){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__ct){return n.apply(this,arguments);
}
try{return n.apply(this,arguments);
}catch(j){self.handleError(new qx.core.GlobalError(j,arguments));
}};
}else{return n;
}},handleError:function(i){if(this.__ct){this.__ct.call(this.__cu,i);
}}},defer:function(h){qx.core.Setting.define(c,b);
h.setErrorHandler(null,null);
}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="qx.application",d="gecko|opera|webkit",c="left",a="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._window=n.getWindow();
this.__gO=false;
this.__gP=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var u=qx.event.handler.Application.$$instance;

if(u){u.__gS();
}}},members:{canHandleEvent:function(r,s){},registerEvent:function(y,z,A){},unregisterEvent:function(o,p,q){},__gQ:null,__gO:null,__gP:null,__gR:null,__gS:function(){if(!this.__gQ&&this.__gO&&qx.$$loader.scriptLoaded){try{var x=qx.core.Setting.get(f);

if(!qx.Class.getByName(x)){return;
}}catch(e){}if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__gQ=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__gQ=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__gQ;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__gO=true;
this.__gS();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,d)){qx.bom.Event.addNativeListener(this._window,a,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var v=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(w){window.setTimeout(v,100);
}};
v();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gO=true;
this.__gS();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gR){this.__gR=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var g="qx.event.handler.Window";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this._manager=k;
this._window=k.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(t,u){},registerEvent:function(n,o,p){},unregisterEvent:function(h,i,j){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var s=qx.event.handler.Window.SUPPORTED_TYPES;

for(var r in s){qx.bom.Event.removeNativeListener(this._window,r,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var b=this._window;

try{var f=b.document;
}catch(e){return ;
}var c=f.documentElement;
var a=e.target||e.srcElement;

if(a==null||a===b||a===f||a===c){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,b]);
qx.event.Registration.dispatchEvent(b,event);
var d=event.getReturnValue();

if(d!=null){e.returnValue=d;
return d;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(q){qx.event.Registration.addHandler(q);
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
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(j,event,k){return !event.getBubbles();
},dispatchEvent:function(c,event,d){var g,e;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var h=this._manager.getListeners(c,d,false);

if(h){for(var i=0,l=h.length;i<l;i++){var f=h[i].context||c;
h[i].handler.call(f,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__gT||null;
},ready:function(){if(this.__gT){return;
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

if(i){this.__gT=new i;
var g=new Date;
this.__gT.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__gT.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+h);
}},__gU:function(e){var k=this.__gT;

if(k){e.setReturnValue(k.close());
}},__gV:function(){var l=this.__gT;

if(l){l.terminate();
}}},defer:function(j){qx.event.Registration.addListener(window,f,j.ready,j);
qx.event.Registration.addListener(window,a,j.__gV,j);
qx.event.Registration.addListener(window,c,j.__gU,j);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(h,i){var j=qx.locale.Manager;

if(j){return j.tr.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(b,c,d){var e=qx.locale.Manager;

if(e){return e.trc.apply(e,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(f){var g=qx.locale.Manager;

if(g){return g.marktr.apply(g,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__rB:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__rB;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__rB=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__rB=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var l="value",k="horizontal",j="first",h="both",g="Trash",f="second",d="main",c="Show first pane",b="Documents (D:)",a="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",H="Windows (C:)",G="Toggle Splitpane Orientation",F="Inbox",E="Desktop",D="_container1",C="execute",B="Presets",A="Network",z="changeSelection",y="Sent",s="/",t="Files",q="_container2",r="vertical",o="Workspace",p="Junk #",m="Data",n="Show both panes",u="Show second pane",v="__Nh",x="demobrowser.demo.widget.SplitPane",w="Edit";
qx.Class.define(x,{extend:qx.application.Standalone,members:{__Nh:null,main:function(){qx.application.Standalone.prototype.main.call(this);
var L=new qx.ui.container.Scroll();
var K=new qx.ui.container.Composite(new qx.ui.layout.Basic());
K.setAllowStretchX(false);
L.add(K);
var R=new qx.ui.splitpane.Pane(k).set({width:450,height:300});
this.__Nh=R;
var U=new qx.ui.container.Composite(new qx.ui.layout.Grow).set({width:200,height:100,decorator:d});
var X=new qx.ui.container.Composite(new qx.ui.layout.VBox(10)).set({padding:10,maxWidth:450,decorator:d});
var O=this.__Ni();
var N=new qx.ui.form.Button(G).set({allowGrowX:false,allowGrowY:false});
N.addListener(C,this._toggle,this);
var P=new qx.ui.basic.Label(a);
P.setRich(true);
U.add(O);
X.add(N);
X.add(P);
this._container1=U;
this._container2=X;
R.add(U,0);
R.add(X,1);
K.add(R,{left:20,top:40});
this.getRoot().add(L,{edge:0});
var M=new qx.ui.layout.VBox(5);
var S=new qx.ui.container.Composite(M);
var V=new qx.ui.form.RadioButton(c);
var W=new qx.ui.form.RadioButton(u);
var T=new qx.ui.form.RadioButton(n);
V.setUserData(l,j);
W.setUserData(l,f);
T.setUserData(l,h);
T.setValue(true);
S.add(V);
S.add(W);
S.add(T);
var Q=new qx.ui.form.RadioGroup(V,W,T);
Q.addListener(z,this._changeVisiblity,this);
K.add(S,{left:490,top:42});
N.focus();
},_toggle:function(){var I=this.__Nh.getOrientation();
this.__Nh.setOrientation(I==k?r:k);
},_changeVisiblity:function(e){var J=e.getData()[0].getUserData(l);

if(J==h){this._container1.show();
this._container2.show();
}else if(J==j){this._container1.show();
this._container2.exclude();
}else if(J==f){this._container1.exclude();
this._container2.show();
}},__Ni:function(){var bi=new qx.ui.tree.Tree();
bi.setDecorator(null);
var bn=new qx.ui.tree.TreeFolder(s);
bn.setOpen(true);
bi.setRoot(bn);
var bl=new qx.ui.tree.TreeFolder(E);
bl.setOpen(true);
bn.add(bl);
var bd=new qx.ui.tree.TreeFolder(t);
var bb=new qx.ui.tree.TreeFolder(o);
var bc=new qx.ui.tree.TreeFolder(A);
var ba=new qx.ui.tree.TreeFolder(g);
bl.add(bd,bb,bc,ba);
var bj=new qx.ui.tree.TreeFile(H);
var Y=new qx.ui.tree.TreeFile(b);
bb.add(bj,Y);
var bm=new qx.ui.tree.TreeFolder(F);
var be=new qx.ui.tree.TreeFolder(B);
var bh=new qx.ui.tree.TreeFolder(y);
var bg=new qx.ui.tree.TreeFolder(g);

for(var i=0;i<100;i++){bg.add(new qx.ui.tree.TreeFile(p+i));
}var bk=new qx.ui.tree.TreeFolder(m);
var bf=new qx.ui.tree.TreeFolder(w);
bm.add(be,bh,bg,bk,bf);
bn.add(bm);
return bi;
}},destruct:function(){this._disposeObjects(v,D,q);
}});
})();
(function(){var j="qx.event.type.Event";
qx.Class.define(j,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(l,m){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!l;
this._cancelable=!!m;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(c){if(c){var d=c;
}else{var d=qx.event.Pool.getInstance().getObject(this.constructor);
}d._type=this._type;
d._target=this._target;
d._currentTarget=this._currentTarget;
d._relatedTarget=this._relatedTarget;
d._originalTarget=this._originalTarget;
d._stopPropagation=this._stopPropagation;
d._bubbles=this._bubbles;
d._preventDefault=this._preventDefault;
d._cancelable=this._cancelable;
return d;
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
},setType:function(h){this._type=h;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(k){this._eventPhase=k;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(e){this._target=e;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(b){this._currentTarget=b;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(a){this._relatedTarget=a;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(g){this._originalTarget=g;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(f){this._bubbles=f;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(i){this._cancelable=i;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cc:null,__cd:null,init:function(d,e,f){qx.event.type.Event.prototype.init.call(this,false,f);
this.__cc=d;
this.__cd=e;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
c.__cc=this.__cc;
c.__cd=this.__cd;
return c;
},getData:function(){return this.__cc;
},getOldData:function(){return this.__cd;
}},destruct:function(){this.__cc=this.__cd=null;
}});
})();
(function(){var cI="get",cH="",cG="[",cF="last",cE="change",cD="]",cC=".",cB="Number",cA="String",cz="set",cX="deepBinding",cW="item",cV="reset",cU="' (",cT="Boolean",cS=") to the object '",cR="Integer",cQ="qx.data.SingleValueBinding",cP="No event could be found for the property",cO="Binding from '",cM="PositiveNumber",cN="PositiveInteger",cK="Binding does not exist!",cL=").",cJ="Date";
qx.Class.define(cQ,{statics:{DEBUG_ON:false,__ce:{},bind:function(cg,ch,ci,cj,ck){var cu=this.__cg(cg,ch,ci,cj,ck);
var cp=ch.split(cC);
var cm=this.__cn(cp);
var ct=[];
var cq=[];
var cr=[];
var cn=[];
var co=cg;
for(var i=0;i<cp.length;i++){if(cm[i]!==cH){cn.push(cE);
}else{cn.push(this.__ci(co,cp[i]));
}ct[i]=co;
if(i==cp.length-1){if(cm[i]!==cH){var cx=cm[i]===cF?co.length-1:cm[i];
var cl=co.getItem(cx);
this.__cm(cl,ci,cj,ck,cg);
cr[i]=this.__co(co,cn[i],ci,cj,ck,cm[i]);
}else{if(cp[i]!=null&&co[cI+qx.lang.String.firstUp(cp[i])]!=null){var cl=co[cI+qx.lang.String.firstUp(cp[i])]();
this.__cm(cl,ci,cj,ck,cg);
}cr[i]=this.__co(co,cn[i],ci,cj,ck);
}}else{var cv={index:i,propertyNames:cp,sources:ct,listenerIds:cr,arrayIndexValues:cm,targetObject:ci,targetPropertyChain:cj,options:ck,listeners:cq};
var cs=qx.lang.Function.bind(this.__cf,this,cv);
cq.push(cs);
cr[i]=co.addListener(cn[i],cs);
}if(co[cI+qx.lang.String.firstUp(cp[i])]==null){co=null;
}else if(cm[i]!==cH){co=co[cI+qx.lang.String.firstUp(cp[i])](cm[i]);
}else{co=co[cI+qx.lang.String.firstUp(cp[i])]();
}
if(!co){break;
}}var cw={type:cX,listenerIds:cr,sources:ct,targetListenerIds:cu.listenerIds,targets:cu.targets};
this.__cp(cw,cg,ch,ci,cj);
return cw;
},__cf:function(G){if(G.options&&G.options.onUpdate){G.options.onUpdate(G.sources[G.index],G.targetObject);
}for(var j=G.index+1;j<G.propertyNames.length;j++){var K=G.sources[j];
G.sources[j]=null;

if(!K){continue;
}K.removeListenerById(G.listenerIds[j]);
}var K=G.sources[G.index];
for(var j=G.index+1;j<G.propertyNames.length;j++){if(G.arrayIndexValues[j-1]!==cH){K=K[cI+qx.lang.String.firstUp(G.propertyNames[j-1])](G.arrayIndexValues[j-1]);
}else{K=K[cI+qx.lang.String.firstUp(G.propertyNames[j-1])]();
}G.sources[j]=K;
if(!K){this.__cj(G.targetObject,G.targetPropertyChain);
break;
}if(j==G.propertyNames.length-1){if(qx.Class.implementsInterface(K,qx.data.IListData)){var L=G.arrayIndexValues[j]===cF?K.length-1:G.arrayIndexValues[j];
var I=K.getItem(L);
this.__cm(I,G.targetObject,G.targetPropertyChain,G.options,G.sources[G.index]);
G.listenerIds[j]=this.__co(K,cE,G.targetObject,G.targetPropertyChain,G.options,G.arrayIndexValues[j]);
}else{if(G.propertyNames[j]!=null&&K[cI+qx.lang.String.firstUp(G.propertyNames[j])]!=null){var I=K[cI+qx.lang.String.firstUp(G.propertyNames[j])]();
this.__cm(I,G.targetObject,G.targetPropertyChain,G.options,G.sources[G.index]);
}var J=this.__ci(K,G.propertyNames[j]);
G.listenerIds[j]=this.__co(K,J,G.targetObject,G.targetPropertyChain,G.options);
}}else{if(G.listeners[j]==null){var H=qx.lang.Function.bind(this.__cf,this,G);
G.listeners.push(H);
}if(qx.Class.implementsInterface(K,qx.data.IListData)){var J=cE;
}else{var J=this.__ci(K,G.propertyNames[j]);
}G.listenerIds[j]=K.addListener(J,G.listeners[j]);
}}},__cg:function(bD,bE,bF,bG,bH){var bL=bG.split(cC);
var bJ=this.__cn(bL);
var bQ=[];
var bP=[];
var bN=[];
var bM=[];
var bK=bF;
for(var i=0;i<bL.length-1;i++){if(bJ[i]!==cH){bM.push(cE);
}else{try{bM.push(this.__ci(bK,bL[i]));
}catch(e){break;
}}bQ[i]=bK;
var bO=function(){for(var j=i+1;j<bL.length-1;j++){var g=bQ[j];
bQ[j]=null;

if(!g){continue;
}g.removeListenerById(bN[j]);
}var g=bQ[i];
for(var j=i+1;j<bL.length-1;j++){var d=qx.lang.String.firstUp(bL[j-1]);
if(bJ[j-1]!==cH){var h=bJ[j-1]===cF?g.getLength()-1:bJ[j-1];
g=g[cI+d](h);
}else{g=g[cI+d]();
}bQ[j]=g;
if(bP[j]==null){bP.push(bO);
}if(qx.Class.implementsInterface(g,qx.data.IListData)){var f=cE;
}else{try{var f=qx.data.SingleValueBinding.__ci(g,bL[j]);
}catch(e){break;
}}bN[j]=g.addListener(f,bP[j]);
}qx.data.SingleValueBinding.__ch(bD,bE,bF,bG,bH);
};
bP.push(bO);
bN[i]=bK.addListener(bM[i],bO);
var bI=qx.lang.String.firstUp(bL[i]);
if(bK[cI+bI]==null){bK=null;
}else if(bJ[i]!==cH){bK=bK[cI+bI](bJ[i]);
}else{bK=bK[cI+bI]();
}
if(!bK){break;
}}return {listenerIds:bN,targets:bQ};
},__ch:function(bR,bS,bT,bU,bV){var ca=this.__cl(bR,bS);

if(ca!=null){var cc=bS.substring(bS.lastIndexOf(cC)+1,bS.length);
if(cc.charAt(cc.length-1)==cD){var bW=cc.substring(cc.lastIndexOf(cG)+1,cc.length-1);
var bY=cc.substring(0,cc.lastIndexOf(cG));
var cb=ca[cI+qx.lang.String.firstUp(bY)]();

if(bW==cF){bW=cb.length-1;
}
if(cb!=null){var bX=cb.getItem(bW);
}}else{var bX=ca[cI+qx.lang.String.firstUp(cc)]();
}}bX=qx.data.SingleValueBinding.__cq(bX,bT,bU,bV);
this.__ck(bT,bU,bX);
},__ci:function(y,z){var A=this.__cr(y,z);
if(A==null){if(qx.Class.supportsEvent(y.constructor,z)){A=z;
}else if(qx.Class.supportsEvent(y.constructor,cE+qx.lang.String.firstUp(z))){A=cE+qx.lang.String.firstUp(z);
}else{throw new qx.core.AssertionError(cP,z);
}}return A;
},__cj:function(k,l){var m=this.__cl(k,l);

if(m!=null){var n=l.substring(l.lastIndexOf(cC)+1,l.length);
if(n.charAt(n.length-1)==cD){this.__ck(k,l,null);
return;
}if(m[cV+qx.lang.String.firstUp(n)]!=undefined){m[cV+qx.lang.String.firstUp(n)]();
}else{m[cz+qx.lang.String.firstUp(n)](null);
}}},__ck:function(bv,bw,bx){var bB=this.__cl(bv,bw);

if(bB!=null){var bC=bw.substring(bw.lastIndexOf(cC)+1,bw.length);
if(bC.charAt(bC.length-1)==cD){var by=bC.substring(bC.lastIndexOf(cG)+1,bC.length-1);
var bA=bC.substring(0,bC.lastIndexOf(cG));
var bz=bB[cI+qx.lang.String.firstUp(bA)]();

if(by==cF){by=bz.length-1;
}
if(bz!=null){bz.setItem(by,bx);
}}else{bB[cz+qx.lang.String.firstUp(bC)](bx);
}}},__cl:function(o,p){var s=p.split(cC);
var t=o;
for(var i=0;i<s.length-1;i++){try{var r=s[i];
if(r.indexOf(cD)==r.length-1){var q=r.substring(r.indexOf(cG)+1,r.length-1);
r=r.substring(0,r.indexOf(cG));
}t=t[cI+qx.lang.String.firstUp(r)]();

if(q!=null){if(q==cF){q=t.length-1;
}t=t.getItem(q);
q=null;
}}catch(bi){return null;
}}return t;
},__cm:function(B,C,D,E,F){B=this.__cq(B,C,D,E);
if(B==null){this.__cj(C,D);
}if(B!=undefined){try{this.__ck(C,D,B);
if(E&&E.onUpdate){E.onUpdate(F,C,B);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(E&&E.onSetFail){E.onSetFail(e);
}else{this.warn("Failed so set value "+B+" on "+C+". Error message: "+e);
}}}},__cn:function(bf){var bg=[];
for(var i=0;i<bf.length;i++){var name=bf[i];
if(qx.lang.String.endsWith(name,cD)){var bh=name.substring(name.indexOf(cG)+1,name.indexOf(cD));
if(name.indexOf(cD)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bh!==cF){if(bh==cH||isNaN(parseInt(bh))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cG)!=0){bf[i]=name.substring(0,name.indexOf(cG));
bg[i]=cH;
bg[i+1]=bh;
bf.splice(i+1,0,cW);
i++;
}else{bg[i]=bh;
bf.splice(i,1,cW);
}}else{bg[i]=cH;
}}return bg;
},__co:function(V,W,X,Y,ba,bb){var bc;
{};
var be=function(bo,e){if(bo!==cH){if(bo===cF){bo=V.length-1;
}var br=V.getItem(bo);
if(br==undefined){qx.data.SingleValueBinding.__cj(X,Y);
}var bp=e.getData().start;
var bq=e.getData().end;

if(bo<bp||bo>bq){return;
}}else{var br=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+V+" by "+W+" to "+X+" ("+Y+")");
qx.log.Logger.debug("Data before conversion: "+br);
}br=qx.data.SingleValueBinding.__cq(br,X,Y,ba);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+br);
}try{if(br!=undefined){qx.data.SingleValueBinding.__ck(X,Y,br);
}else{qx.data.SingleValueBinding.__cj(X,Y);
}if(ba&&ba.onUpdate){ba.onUpdate(V,X,br);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(ba&&ba.onSetFail){ba.onSetFail(e);
}else{this.warn("Failed so set value "+br+" on "+X+". Error message: "+e);
}}};
if(!bb){bb=cH;
}be=qx.lang.Function.bind(be,V,bb);
var bd=V.addListener(W,be);
return bd;
},__cp:function(bj,bk,bl,bm,bn){if(this.__ce[bk.toHashCode()]===undefined){this.__ce[bk.toHashCode()]=[];
}this.__ce[bk.toHashCode()].push([bj,bk,bl,bm,bn]);
},__cq:function(M,N,O,P){if(P&&P.converter){var R;

if(N.getModel){R=N.getModel();
}return P.converter(M,R);
}else{var T=this.__cl(N,O);
var U=O.substring(O.lastIndexOf(cC)+1,O.length);
if(T==null){return M;
}var S=qx.Class.getPropertyDefinition(T.constructor,U);
var Q=S==null?cH:S.check;
return this.__cs(M,Q);
}},__cr:function(cd,ce){var cf=qx.Class.getPropertyDefinition(cd.constructor,ce);

if(cf==null){return null;
}return cf.event;
},__cs:function(bs,bt){var bu=qx.lang.Type.getClass(bs);
if((bu==cB||bu==cA)&&(bt==cR||bt==cN)){bs=parseInt(bs);
}if((bu==cT||bu==cB||bu==cJ)&&bt==cA){bs=bs+cH;
}if((bu==cB||bu==cA)&&(bt==cB||bt==cM)){bs=parseFloat(bs);
}return bs;
},removeBindingFromObject:function(a,b){if(b.type==cX){for(var i=0;i<b.sources.length;i++){if(b.sources[i]){b.sources[i].removeListenerById(b.listenerIds[i]);
}}for(var i=0;i<b.targets.length;i++){if(b.targets[i]){b.targets[i].removeListenerById(b.targetListenerIds[i]);
}}}else{a.removeListenerById(b);
}var c=this.__ce[a.toHashCode()];
if(c!=undefined){for(var i=0;i<c.length;i++){if(c[i][0]==b){qx.lang.Array.remove(c,c[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cY){{};
var da=this.__ce[cY.toHashCode()];

if(da!=undefined){for(var i=da.length-1;i>=0;i--){this.removeBindingFromObject(cY,da[i][0]);
}}},getAllBindingsForObject:function(cy){if(this.__ce[cy.toHashCode()]===undefined){this.__ce[cy.toHashCode()]=[];
}return this.__ce[cy.toHashCode()];
},removeAllBindings:function(){for(var de in this.__ce){var dd=qx.core.ObjectRegistry.fromHashCode(de);
if(dd==null){delete this.__ce[de];
continue;
}this.removeAllBindingsForObject(dd);
}this.__ce={};
},getAllBindings:function(){return this.__ce;
},showBindingInLog:function(u,v){var x;
for(var i=0;i<this.__ce[u.toHashCode()].length;i++){if(this.__ce[u.toHashCode()][i][0]==v){x=this.__ce[u.toHashCode()][i];
break;
}}
if(x===undefined){var w=cK;
}else{var w=cO+x[1]+cU+x[2]+cS+x[3]+cU+x[4]+cL;
}qx.log.Logger.debug(w);
},showAllBindingsInLog:function(){for(var dc in this.__ce){var db=qx.core.ObjectRegistry.fromHashCode(dc);

for(var i=0;i<this.__ce[dc].length;i++){this.showBindingInLog(db,this.__ce[dc][i][0]);
}}}}});
})();
(function(){var I="",H="g",G="0",F='\\$1',E="%",D='-',C="qx.lang.String",B=' ',A='\n',z="undefined";
qx.Class.define(C,{statics:{camelCase:function(a){return a.replace(/\-([a-z])/g,function(v,w){return w.toUpperCase();
});
},hyphenate:function(Q){return Q.replace(/[A-Z]/g,function(L){return (D+L.charAt(0).toLowerCase());
});
},capitalize:function(l){return l.replace(/\b[a-z]/g,function(s){return s.toUpperCase();
});
},clean:function(M){return this.trim(M.replace(/\s+/g,B));
},trimLeft:function(c){return c.replace(/^\s+/,I);
},trimRight:function(t){return t.replace(/\s+$/,I);
},trim:function(f){return f.replace(/^\s+|\s+$/g,I);
},startsWith:function(O,P){return O.indexOf(P)===0;
},endsWith:function(x,y){return x.substring(x.length-y.length,x.length)===y;
},repeat:function(d,e){return d.length>0?new Array(e+1).join(d):I;
},pad:function(p,length,q){var r=length-p.length;

if(r>0){if(typeof q===z){q=G;
}return this.repeat(q,r)+p;
}else{return p;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(J,K){return J.indexOf(K)!=-1;
},format:function(m,n){var o=m;

for(var i=0;i<n.length;i++){o=o.replace(new RegExp(E+(i+1),H),n[i]+I);
}return o;
},escapeRegexpChars:function(b){return b.replace(/([.*+?^${}()|[\]\/\\])/g,F);
},toArray:function(u){return u.split(/\B|\b/g);
},stripTags:function(N){return N.replace(/<\/?[^>]+>/gi,I);
},stripScripts:function(g,h){var k=I;
var j=g.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){k+=arguments[1]+A;
return I;
});

if(h===true){qx.lang.Function.globalEval(k);
}return j;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(j){},setItem:function(h,i){},splice:function(d,e,f){},contains:function(g){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cx=c;
this.__cy=d||b;
this.__cz=e===undefined?-1:e;
},members:{__cx:null,__cy:null,__cz:null,toString:function(){return this.__cx;
},getUri:function(){return this.__cy;
},getLineNumber:function(){return this.__cz;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__cA=b+(c&&c.message?c.message:c);
Error.call(this,this.__cA);
this.__cB=d;
this.__cC=c;
},members:{__cC:null,__cB:null,__cA:null,toString:function(){return this.__cA;
},getArguments:function(){return this.__cB;
},getSourceException:function(){return this.__cC;
}},destruct:function(){this.__cC=null;
this.__cB=null;
this.__cA=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cD=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cD:null,message:null,getComment:function(){return this.__cD;
},toString:function(){return this.__cD+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__cE=qx.dev.StackTrace.getStackTrace();
},members:{__cE:null,getStackTrace:function(){return this.__cE;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==e;
},isNumber:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Number));
},isBoolean:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Boolean));
},isDate:function(i){return (i!==null&&(this.getClass(i)==d||i instanceof Date));
},isError:function(a){return (a!==null&&(this.getClass(a)==f||a instanceof Error));
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(f){qx.core.Object.call(this);
this.__cF={};

if(f!=null){this.setSize(f);
}},properties:{size:{check:a,init:Infinity}},members:{__cF:null,getObject:function(k){if(this.$$disposed){return new k;
}
if(!k){throw new Error("Class needs to be defined!");
}var m=null;
var n=this.__cF[k.classname];

if(n){m=n.pop();
}
if(m){m.$$pooled=false;
}else{m=new k;
}return m;
},poolObject:function(g){if(!this.__cF){return;
}var h=g.classname;
var j=this.__cF[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__cF[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var e=this.__cF;
var c,d,i,l;

for(c in e){d=e[c];

for(i=0,l=d.length;i<l;i++){d[i].dispose();
}}delete this.__cF;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var e="qx.util.DisposeUtil";
qx.Class.define(e,{statics:{disposeObjects:function(g,h,j){var name;

for(var i=0,l=h.length;i<l;i++){name=h[i];

if(g[name]==null||!g.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(g[name].dispose){if(!j&&g[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{g[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}g[name]=null;
}},disposeArray:function(a,b){var d=a[b];

if(!d){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{var c;

for(var i=d.length-1;i>=0;i--){c=d[i];

if(c){c.dispose();
}}}catch(k){throw new Error("The array field: "+b+" of object: "+a+" has non disposable entries: "+k);
}d.length=0;
a[b]=null;
},disposeMap:function(m,n){var o=m[n];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){m[n]=null;
return;
}try{for(var p in o){if(o.hasOwnProperty(p)){o[p].dispose();
}}}catch(f){throw new Error("The map field: "+n+" of object: "+m+" has non disposable entries: "+f);
}m[n]=null;
},disposeTriggeredBy:function(q,r){var s=r.dispose;
r.dispose=function(){s.call(r);
q.dispose();
};
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(e,f){return qx.Class.supportsEvent(e.constructor,f);
},registerEvent:function(g,h,i){},unregisterEvent:function(b,c,d){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__cG:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cH:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cI:function(){var J=qx.lang.Generics.__cG;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__cH(L,M);
}}}}},defer:function(O){O.__cI();
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(d,e,f,g,h){qx.event.type.Event.prototype.init.call(this,g,h);
this._target=e||qx.bom.Event.getTarget(d);
this._relatedTarget=f||qx.bom.Event.getRelatedTarget(d);

if(d.timeStamp){this._timeStamp=d.timeStamp;
}this._native=d;
this._returnValue=null;
return this;
},clone:function(j){var k=qx.event.type.Event.prototype.clone.call(this,j);
var l={};
k._native=this._cloneNativeEvent(this._native,l);
k._returnValue=this._returnValue;
return k;
},_cloneNativeEvent:function(b,c){c.preventDefault=qx.lang.Function.empty;
return c;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(i){this._returnValue=i;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__dL:function(){var p=navigator.platform;
if(p==null||p===l){p=navigator.userAgent;
}
if(p.indexOf(f)!=-1||p.indexOf(m)!=-1||p.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(p.indexOf(h)!=-1||p.indexOf(a)!=-1||p.indexOf(c)!=-1||p.indexOf(n)!=-1||p.indexOf(g)!=-1||p.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(p.indexOf(d)!=-1||p.indexOf(j)!=-1||p.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(o){o.__dL();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__dY:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__ea:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__dY){J.push(I);
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
}else{this.NAME=this.__dY[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__ea();
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(e);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":c}});
})();
(function(){var c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(a){return !!this._dynamic[a];
},resolve:function(d){if(d&&this._dynamic[d]){return this._dynamic[d];
}return d;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(n){var o={};

if(n){var p=n.colors;
var q=qx.util.ColorUtil;
var r;

for(var s in p){r=p[s];

if(typeof r===b){if(!q.isCssString(r)){throw new Error("Could not parse color: "+r);
}}else if(r instanceof Array){r=q.rgbToRgbString(r);
}else{throw new Error("Could not parse color: "+r);
}o[s]=r;
}}this._setDynamic(o);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(k){var m=this._dynamic;

if(k&&(m[k]!==undefined)){return true;
}var l=this.getTheme();

if(l!==null&&k&&(l.colors[k]!==undefined)){m[k]=l.colors[k];
return true;
}return false;
}}});
})();
(function(){var A=",",z="rgb(",y=")",x="qx.theme.manager.Color",w="qx.util.ColorUtil";
qx.Class.define(w,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(be){return this.NAMED[be]!==undefined;
},isSystemColor:function(V){return this.SYSTEM[V]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(x);
},isThemedColor:function(bh){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(bh);
},stringToRgb:function(X){if(this.supportsThemes()&&this.isThemedColor(X)){var X=qx.theme.manager.Color.getInstance().resolveDynamic(X);
}
if(this.isNamedColor(X)){return this.NAMED[X];
}else if(this.isSystemColor(X)){throw new Error("Could not convert system colors to RGB: "+X);
}else if(this.isRgbString(X)){return this.__hO();
}else if(this.isHex3String(X)){return this.__hQ();
}else if(this.isHex6String(X)){return this.__hR();
}throw new Error("Could not parse color: "+X);
},cssStringToRgb:function(T){if(this.isNamedColor(T)){return this.NAMED[T];
}else if(this.isSystemColor(T)){throw new Error("Could not convert system colors to RGB: "+T);
}else if(this.isRgbString(T)){return this.__hO();
}else if(this.isRgbaString(T)){return this.__hP();
}else if(this.isHex3String(T)){return this.__hQ();
}else if(this.isHex6String(T)){return this.__hR();
}throw new Error("Could not parse color: "+T);
},stringToRgbString:function(M){return this.rgbToRgbString(this.stringToRgb(M));
},rgbToRgbString:function(bd){return z+bd[0]+A+bd[1]+A+bd[2]+y;
},rgbToHexString:function(c){return (qx.lang.String.pad(c[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(c[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(c[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(E){return this.isThemedColor(E)||this.isNamedColor(E)||this.isHex3String(E)||this.isHex6String(E)||this.isRgbString(E);
},isCssString:function(W){return this.isSystemColor(W)||this.isNamedColor(W)||this.isHex3String(W)||this.isHex6String(W)||this.isRgbString(W);
},isHex3String:function(bg){return this.REGEXP.hex3.test(bg);
},isHex6String:function(U){return this.REGEXP.hex6.test(U);
},isRgbString:function(L){return this.REGEXP.rgb.test(L);
},isRgbaString:function(bi){return this.REGEXP.rgba.test(bi);
},__hO:function(){var K=parseInt(RegExp.$1,10);
var J=parseInt(RegExp.$2,10);
var I=parseInt(RegExp.$3,10);
return [K,J,I];
},__hP:function(){var H=parseInt(RegExp.$1,10);
var G=parseInt(RegExp.$2,10);
var F=parseInt(RegExp.$3,10);
return [H,G,F];
},__hQ:function(){var bb=parseInt(RegExp.$1,16)*17;
var ba=parseInt(RegExp.$2,16)*17;
var Y=parseInt(RegExp.$3,16)*17;
return [bb,ba,Y];
},__hR:function(){var D=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var C=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var B=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [D,C,B];
},hex3StringToRgb:function(bc){if(this.isHex3String(bc)){return this.__hQ(bc);
}throw new Error("Invalid hex3 value: "+bc);
},hex6StringToRgb:function(a){if(this.isHex6String(a)){return this.__hR(a);
}throw new Error("Invalid hex6 value: "+a);
},hexStringToRgb:function(bf){if(this.isHex3String(bf)){return this.__hQ(bf);
}
if(this.isHex6String(bf)){return this.__hR(bf);
}throw new Error("Invalid hex value: "+bf);
},rgbToHsb:function(d){var h,j,l;
var v=d[0];
var o=d[1];
var e=d[2];
var u=(v>o)?v:o;

if(e>u){u=e;
}var k=(v<o)?v:o;

if(e<k){k=e;
}l=u/255.0;

if(u!=0){j=(u-k)/u;
}else{j=0;
}
if(j==0){h=0;
}else{var n=(u-v)/(u-k);
var s=(u-o)/(u-k);
var m=(u-e)/(u-k);

if(v==u){h=m-s;
}else if(o==u){h=2.0+n-m;
}else{h=4.0+s-n;
}h=h/6.0;

if(h<0){h=h+1.0;
}}return [Math.round(h*360),Math.round(j*100),Math.round(l*100)];
},hsbToRgb:function(N){var i,f,p,q,t;
var O=N[0]/360;
var P=N[1]/100;
var Q=N[2]/100;

if(O>=1.0){O%=1.0;
}
if(P>1.0){P=1.0;
}
if(Q>1.0){Q=1.0;
}var R=Math.floor(255*Q);
var S={};

if(P==0.0){S.red=S.green=S.blue=R;
}else{O*=6.0;
i=Math.floor(O);
f=O-i;
p=Math.floor(R*(1.0-P));
q=Math.floor(R*(1.0-(P*f)));
t=Math.floor(R*(1.0-(P*(1.0-f))));

switch(i){case 0:S.red=R;
S.green=t;
S.blue=p;
break;
case 1:S.red=q;
S.green=R;
S.blue=p;
break;
case 2:S.red=p;
S.green=R;
S.blue=t;
break;
case 3:S.red=p;
S.green=q;
S.blue=R;
break;
case 4:S.red=t;
S.green=p;
S.blue=R;
break;
case 5:S.red=R;
S.green=p;
S.blue=q;
break;
}}return [S.red,S.green,S.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var h="object",g="_applyTheme",f="__gW",e="qx.theme.manager.Decoration",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:g,event:c}},members:{__gW:null,resolve:function(m){if(!m){return null;
}
if(typeof m===h){return m;
}var p=this.getTheme();

if(!p){return null;
}var p=this.getTheme();

if(!p){return null;
}var q=this.__gW;

if(!q){q=this.__gW={};
}var n=q[m];

if(n){return n;
}var o=p.decorations[m];

if(!o){return null;
}var r=o.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+m+"!");
}return q[m]=(new r).set(o.style);
},isValidPropertyValue:function(i){if(typeof i===b){return this.isDynamic(i);
}else if(typeof i===h){var j=i.constructor;
return qx.Class.hasInterface(j,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(k){if(!k){return false;
}var l=this.getTheme();

if(!l){return false;
}return !!l.decorations[k];
},_applyTheme:function(s,t){var v=qx.util.AliasManager.getInstance();

if(t){for(var u in t.aliases){v.remove(u);
}}
if(s){for(var u in s.aliases){v.add(u,s.aliases[u]);
}}
if(!s){this.__gW={};
}}},destruct:function(){this._disposeMap(f);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__gX={};
this.add(a,h);
},members:{__gX:null,_preprocess:function(q){var t=this._getDynamic();

if(t[q]===false){return q;
}else if(t[q]===undefined){if(q.charAt(0)===j||q.charAt(0)===b||q.indexOf(g)===0||q.indexOf(f)===i||q.indexOf(e)===0){t[q]=false;
return q;
}
if(this.__gX[q]){return this.__gX[q];
}var s=q.substring(0,q.indexOf(j));
var r=this.__gX[s];

if(r!==undefined){t[q]=r+q.substring(s.length);
}}return q;
},add:function(m,n){this.__gX[m]=n;
var p=this._getDynamic();
for(var o in p){if(o.substring(0,o.indexOf(j))===m){p[o]=n+o.substring(m.length);
}}},remove:function(u){delete this.__gX[u];
},resolve:function(k){var l=this._getDynamic();

if(k!=null){k=this._preprocess(k);
}return l[k]||k;
}},destruct:function(){this.__gX=null;
}});
})();
(function(){var g="qx.theme.manager.Font",f="Theme",e="changeTheme",d="_applyTheme",c="singleton";
qx.Class.define(g,{type:c,extend:qx.util.ValueManager,properties:{theme:{check:f,nullable:true,apply:d,event:e}},members:{resolveDynamic:function(a){var b=this._dynamic;
return a instanceof qx.bom.Font?a:b[a];
},resolve:function(k){var n=this._dynamic;
var l=n[k];

if(l){return l;
}var m=this.getTheme();

if(m!==null&&m.fonts[k]){return n[k]=(new qx.bom.Font).set(m.fonts[k]);
}return k;
},isDynamic:function(o){var q=this._dynamic;

if(o&&(o instanceof qx.bom.Font||q[o]!==undefined)){return true;
}var p=this.getTheme();

if(p!==null&&o&&p.fonts[o]){q[o]=(new qx.bom.Font).set(p.fonts[o]);
return true;
}return false;
},__iV:function(h,i){if(h[i].include){var j=h[h[i].include];
h[i].include=null;
delete h[i].include;
h[i]=qx.lang.Object.mergeWith(h[i],j,false);
this.__iV(h,i);
}},_applyTheme:function(r){var s=this._getDynamic();

for(var v in s){if(s[v].themed){s[v].dispose();
delete s[v];
}}
if(r){var t=r.fonts;
var u=qx.bom.Font;

for(var v in t){if(t[v].include&&t[t[v].include]){this.__iV(t,v);
}s[v]=(new u).set(t[v]);
s[v].themed=true;
}}this._setDynamic(s);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(J,K){qx.core.Object.call(this);

if(J!==undefined){this.setSize(J);
}
if(K!==undefined){this.setFamily(K);
}},statics:{fromString:function(L){var P=new qx.bom.Font();
var N=L.split(/\s+/);
var name=[];
var O;

for(var i=0;i<N.length;i++){switch(O=N[i]){case c:P.setBold(true);
break;
case e:P.setItalic(true);
break;
case j:P.setDecoration(j);
break;
default:var M=parseInt(O,10);

if(M==O||qx.lang.String.contains(O,g)){P.setSize(M);
}else{name.push(O);
}break;
}}
if(name.length>0){P.setFamily(name);
}return P;
},fromConfig:function(H){var I=new qx.bom.Font;
I.set(H);
return I;
},__iW:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__iW;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__iX:null,__iY:null,__ja:null,__jb:null,__jc:null,__jd:null,_applySize:function(Q,R){this.__iX=Q===null?null:Q+g;
},_applyLineHeight:function(C,D){this.__jd=C===null?null:C;
},_applyFamily:function(E,F){var G=k;

for(var i=0,l=E.length;i<l;i++){if(E[i].indexOf(o)>0){G+=f+E[i]+f;
}else{G+=E[i];
}
if(i!==l-1){G+=n;
}}this.__iY=G;
},_applyBold:function(S,T){this.__ja=S===null?null:S?c:d;
},_applyItalic:function(y,z){this.__jb=y===null?null:y?e:d;
},_applyDecoration:function(A,B){this.__jc=A===null?null:A;
},getStyles:function(){return {fontFamily:this.__iY,fontSize:this.__iX,fontWeight:this.__ja,fontStyle:this.__jb,textDecoration:this.__jc,lineHeight:this.__jd};
}}});
})();
(function(){var d="CSS1Compat",c="qx.bom.client.Feature",b="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",a="label";
qx.Class.define(c,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,XUL:false,CSS_TEXT_OVERFLOW:("textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style),HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__dJ:function(){this.QUIRKS_MODE=this.__dK();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;

try{document.createElementNS(b,a);
this.XUL=true;
}catch(e){this.XUL=false;
}},__dK:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==d;
}}},defer:function(f){f.__dJ();
}});
})();
(function(){var d="qx.lang.Object";
qx.Class.define(d,{statics:{empty:function(B){{};

for(var C in B){if(B.hasOwnProperty(C)){delete B[C];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(e){{};
return e.__count__===0;
}:
function(j){{};

for(var k in j){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(r,s){{};
return r.__count__>=s;
}:
function(t,u){{};

if(u<=0){return true;
}var length=0;

for(var v in t){if((++length)>=u){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(o){{};
var q=[];
var p=this.getKeys(o);

for(var i=0,l=p.length;i<l;i++){q.push(o[p[i]]);
}return q;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(F,G){{};
return qx.lang.Object.mergeWith(F,G,false);
},merge:function(f,g){{};
var h=arguments.length;

for(var i=1;i<h;i++){qx.lang.Object.mergeWith(f,arguments[i]);
}return f;
},clone:function(H){{};
var I={};

for(var J in H){I[J]=H[J];
}return I;
},invert:function(w){{};
var x={};

for(var y in w){x[w[y].toString()]=y;
}return x;
},getKeyFromValue:function(a,b){{};

for(var c in a){if(a.hasOwnProperty(c)&&a[c]===b){return c;
}}return null;
},contains:function(D,E){{};
return this.getKeyFromValue(D,E)!==null;
},select:function(m,n){{};
return n[m];
},fromArray:function(z){{};
var A={};

for(var i=0,l=z.length;i<l;i++){{};
A[z[i].toString()]=true;
}return A;
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hS={};
this.__hT={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__hU:{},__hS:null,__hT:null,_applyTheme:function(K,L){this.__hT={};
this.__hS={};
},__hV:function(z,A,B){var F=A.appearances;
var I=F[z];

if(!I){var J=b;
var C=[];
var H=z.split(J);
var G;

while(!I&&H.length>0){C.unshift(H.pop());
var D=H.join(J);
I=F[D];

if(I){G=I.alias||I;

if(typeof G===h){var E=G+J+C.join(J);
return this.__hV(E,A,B);
}}}if(B!=null){return this.__hV(B,A);
}return null;
}else if(typeof I===h){return this.__hV(I,A,B);
}else if(I.include&&!I.style){return this.__hV(I.include,A,B);
}return z;
},styleFrom:function(i,j,k,l){if(!k){k=this.getTheme();
}var r=this.__hT;
var m=r[i];

if(!m){m=r[i]=this.__hV(i,k,l);
}var w=k.appearances[m];

if(!w){this.warn("Missing appearance: "+i);
return null;
}if(!w.style){return null;
}var x=m;

if(j){var y=w.$$bits;

if(!y){y=w.$$bits={};
w.$$length=0;
}var p=0;

for(var s in j){if(!j[s]){continue;
}
if(y[s]==null){y[s]=1<<w.$$length++;
}p+=y[s];
}if(p>0){x+=e+p;
}}var q=this.__hS;

if(q[x]!==undefined){return q[x];
}if(!j){j=this.__hU;
}var u;
if(w.include||w.base){var o=w.style(j);
var n;

if(w.include){n=this.styleFrom(w.include,j,k,l);
}u={};
if(w.base){var t=this.styleFrom(m,j,w.base,l);

if(w.include){for(var v in t){if(!n.hasOwnProperty(v)&&!o.hasOwnProperty(v)){u[v]=t[v];
}}}else{for(var v in t){if(!o.hasOwnProperty(v)){u[v]=t[v];
}}}}if(w.include){for(var v in n){if(!o.hasOwnProperty(v)){u[v]=n[v];
}}}for(var v in o){u[v]=o[v];
}}else{u=w.style(j);
}return q[x]=u||null;
}},destruct:function(){this.__hS=this.__hT=null;
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,M){if(!M){var M={};
}M.include=this.__rr(M.include);
M.patch=this.__rr(M.patch);
{};
var N={$$type:e,name:name,title:M.title,toString:this.genericToString};
if(M.extend){N.supertheme=M.extend;
}N.basename=qx.Bootstrap.createNamespace(name,N);
this.__ru(N,M);
this.__rs(N,M);
this.$$registry[name]=N;
for(var i=0,a=M.include,l=a.length;i<l;i++){this.include(N,a[i]);
}
for(var i=0,a=M.patch,l=a.length;i<l;i++){this.patch(N,a[i]);
}},__rr:function(J){if(!J){return [];
}
if(qx.Bootstrap.isArray(J)){return J;
}else{return [J];
}},__rs:function(O,P){var Q=P.aliases||{};

if(P.extend&&P.extend.aliases){qx.Bootstrap.objectMergeWith(Q,P.extend.aliases,false);
}O.aliases=Q;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__rt:function(K){for(var i=0,L=this.__rv,l=L.length;i<l;i++){if(K[L[i]]){return L[i];
}}},__ru:function(q,r){var u=this.__rt(r);
if(r.extend&&!u){u=r.extend.type;
}q.type=u||p;
if(!u){return;
}var w=function(){};
if(r.extend){w.prototype=new r.extend.$$clazz;
}var v=w.prototype;
var t=r[u];
for(var s in t){v[s]=t[s];
if(v[s].base){{};
v[s].base=r.extend;
}}q.$$clazz=w;
q[u]=new w;
},$$registry:{},__rv:[g,d,f,n,c,o,m,b],__rw:null,__rx:null,__ry:function(){},patch:function(x,y){var A=this.__rt(y);

if(A!==this.__rt(x)){throw new Error("The mixins '"+x.name+"' are not compatible '"+y.name+"'!");
}var z=y[A];
var B=x.$$clazz.prototype;

for(var C in z){B[C]=z[C];
}},include:function(D,E){var G=E.type;

if(G!==D.type){throw new Error("The mixins '"+D.name+"' are not compatible '"+E.name+"'!");
}var F=E[G];
var H=D.$$clazz.prototype;

for(var I in F){if(H[I]!==undefined){continue;
}H[I]=F[I];
}}}});
})();
(function(){var x="Boolean",w="focusout",v="interval",u="mouseover",t="mouseout",s="mousemove",r="__rF",q="widget",p="Use isShowInvalidToolTips() instead.",o="qx.ui.tooltip.ToolTip",h="Use setShowInvalidToolTips() instead.",n="Use initShowInvalidToolTips() instead.",k="Use resetShowInvalidToolTips() instead.",f="_applyCurrent",d="qx.ui.tooltip.Manager",j="__rD",i="__rC",l="tooltip-error",c="Use toggleShowInvalidToolTips() instead.",m="singleton",g="Use getShowInvalidToolTips() instead.";
qx.Class.define(d,{type:m,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,u,this.__rM,this,true);
this.__rC=new qx.event.Timer();
this.__rC.addListener(v,this.__rJ,this);
this.__rD=new qx.event.Timer();
this.__rD.addListener(v,this.__rK,this);
this.__rE={left:0,top:0};
},properties:{current:{check:o,nullable:true,apply:f},showInvalidToolTips:{check:x,init:true},showToolTips:{check:x,init:true}},members:{__rE:null,__rD:null,__rC:null,__rF:null,__rG:null,__rH:function(){if(!this.__rF){this.__rF=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__rF;
},__rI:function(){if(!this.__rG){this.__rG=new qx.ui.tooltip.ToolTip().set({appearance:l});
this.__rG.syncAppearance();
}return this.__rG;
},_applyCurrent:function(K,L){if(L&&qx.ui.core.Widget.contains(L,K)){return;
}if(L){if(!L.isDisposed()){L.exclude();
}this.__rC.stop();
this.__rD.stop();
}var N=qx.event.Registration;
var M=document.body;
if(K){this.__rC.startWith(K.getShowTimeout());
N.addListener(M,t,this.__rN,this,true);
N.addListener(M,w,this.__rO,this,true);
N.addListener(M,s,this.__rL,this,true);
}else{N.removeListener(M,t,this.__rN,this,true);
N.removeListener(M,w,this.__rO,this,true);
N.removeListener(M,s,this.__rL,this,true);
}},__rJ:function(e){var D=this.getCurrent();

if(D&&!D.isDisposed()){this.__rD.startWith(D.getHideTimeout());

if(D.getPlaceMethod()==q){D.placeToWidget(D.getOpener());
}else{D.placeToPoint(this.__rE);
}D.show();
}this.__rC.stop();
},__rK:function(e){var z=this.getCurrent();

if(z&&!z.isDisposed()){z.exclude();
}this.__rD.stop();
this.resetCurrent();
},__rL:function(e){var y=this.__rE;
y.left=e.getDocumentLeft();
y.top=e.getDocumentTop();
},__rM:function(e){var H=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!H){return;
}var I,J,G,F;
while(H!=null){I=H.getToolTip();
J=H.getToolTipText()||null;
G=H.getToolTipIcon()||null;

if(qx.Class.hasInterface(H.constructor,qx.ui.form.IForm)&&!H.isValid()){F=H.getInvalidMessage();
}
if(I||J||G||F){break;
}H=H.getLayoutParent();
}if(!H||
!H.getEnabled()||
H.isBlockToolTip()||
(!F&&!this.getShowToolTips())||(F&&!this.getShowInvalidToolTips())){return;
}
if(F){I=this.__rI().set({label:F});
}
if(!I){I=this.__rH().set({label:J,icon:G});
}this.setCurrent(I);
I.setOpener(H);
},__rN:function(e){var A=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!A){return;
}var B=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!B){return;
}var C=this.getCurrent();
if(C&&(B==C||qx.ui.core.Widget.contains(C,B))){return;
}if(B&&A&&qx.ui.core.Widget.contains(A,B)){return;
}if(C&&!B){this.setCurrent(null);
}else{this.resetCurrent();
}},__rO:function(e){var a=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!a){return;
}var b=this.getCurrent();
if(b&&b==a.getToolTip()){this.setCurrent(null);
}},setShowInvalidTooltips:function(E){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.setShowInvalidToolTips(E);
},getShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.getShowInvalidToolTips();
},resetShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
return this.resetShowInvalidToolTips();
},isShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return this.isShowInvalidToolTips();
},toggleShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.toggleShowInvalidToolTips();
},initShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return this.initShowInvalidToolTips();
}},destruct:function(){qx.event.Registration.removeListener(document.body,u,this.__rM,this,true);
this._disposeObjects(i,j,r);
this.__rE=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(n){qx.core.Object.call(this);
this.setEnabled(false);

if(n!=null){this.setInterval(n);
}var self=this;
this.__fu=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(p,q,r){var s=new qx.event.Timer(r);
s.__fv=p;
s.addListener(h,function(e){s.stop();
p.call(q,e);
s.dispose();
q=null;
},q);
s.start();
return s;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__fw:null,__fu:null,_applyInterval:function(l,m){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(j,k){if(k){window.clearInterval(this.__fw);
this.__fw=null;
}else if(j){this.__fw=window.setInterval(this.__fu,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(i){this.setInterval(i);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(o){this.stop();
this.startWith(o);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__fw){window.clearInterval(this.__fw);
}this.__fw=this.__fu=null;
}});
})();
(function(){var b="qx.ui.core.MChildrenHandling";
qx.Mixin.define(b,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(n){return this._indexOf(n);
},add:function(l,m){this._add(l,m);
},addAt:function(i,j,k){this._addAt(i,j,k);
},addBefore:function(c,d,e){this._addBefore(c,d,e);
},addAfter:function(f,g,h){this._addAfter(f,g,h);
},remove:function(o){this._remove(o);
},removeAt:function(p){return this._removeAt(p);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(a){a.getChildren=a._getChildren;
a.hasChildren=a._hasChildren;
a.indexOf=a._indexOf;
a.add=a._add;
a.addAt=a._addAt;
a.addBefore=a._addBefore;
a.addAfter=a._addAfter;
a.remove=a._remove;
a.removeAt=a._removeAt;
a.removeAll=a._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var G="Integer",F="_applyDimension",E="Boolean",D="_applyStretching",C="_applyMargin",B="shorthand",A="_applyAlign",z="allowShrinkY",y="bottom",x="baseline",U="marginBottom",T="qx.ui.core.LayoutItem",S="center",R="marginTop",Q="allowGrowX",P="middle",O="marginLeft",N="allowShrinkX",M="top",L="right",J="marginRight",K="abstract",H="allowGrowY",I="left";
qx.Class.define(T,{type:K,extend:qx.core.Object,properties:{minWidth:{check:G,nullable:true,apply:F,init:null,themeable:true},width:{check:G,nullable:true,apply:F,init:null,themeable:true},maxWidth:{check:G,nullable:true,apply:F,init:null,themeable:true},minHeight:{check:G,nullable:true,apply:F,init:null,themeable:true},height:{check:G,nullable:true,apply:F,init:null,themeable:true},maxHeight:{check:G,nullable:true,apply:F,init:null,themeable:true},allowGrowX:{check:E,apply:D,init:true,themeable:true},allowShrinkX:{check:E,apply:D,init:true,themeable:true},allowGrowY:{check:E,apply:D,init:true,themeable:true},allowShrinkY:{check:E,apply:D,init:true,themeable:true},allowStretchX:{group:[Q,N],mode:B,themeable:true},allowStretchY:{group:[H,z],mode:B,themeable:true},marginTop:{check:G,init:0,apply:C,themeable:true},marginRight:{check:G,init:0,apply:C,themeable:true},marginBottom:{check:G,init:0,apply:C,themeable:true},marginLeft:{check:G,init:0,apply:C,themeable:true},margin:{group:[R,J,U,O],mode:B,themeable:true},alignX:{check:[I,S,L],nullable:true,apply:A,themeable:true},alignY:{check:[M,P,y,x],nullable:true,apply:A,themeable:true}},members:{__gh:null,__gi:null,__gj:null,__gk:null,__gl:null,__gm:null,__gn:null,getBounds:function(){return this.__gm||this.__gi||null;
},clearSeparators:function(){},renderSeparator:function(V,W){},renderLayout:function(o,top,p,q){var r;
{};
var s=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var s=this._getHeightForWidth(p);
}
if(s!=null&&s!==this.__gh){this.__gh=s;
qx.ui.core.queue.Layout.add(this);
return null;
}var u=this.__gi;

if(!u){u=this.__gi={};
}var t={};

if(o!==u.left||top!==u.top){t.position=true;
u.left=o;
u.top=top;
}
if(p!==u.width||q!==u.height){t.size=true;
u.width=p;
u.height=q;
}if(this.__gj){t.local=true;
delete this.__gj;
}
if(this.__gl){t.margin=true;
delete this.__gl;
}return t;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__gj;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__gj=true;
this.__gk=null;
},getSizeHint:function(v){var w=this.__gk;

if(w){return w;
}
if(v===false){return null;
}w=this.__gk=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__gh&&this.getHeight()==null){w.height=this.__gh;
}if(w.minWidth>w.width){w.width=w.minWidth;
}
if(w.maxWidth<w.width){w.width=w.maxWidth;
}
if(!this.getAllowGrowX()){w.maxWidth=w.width;
}
if(!this.getAllowShrinkX()){w.minWidth=w.width;
}if(w.minHeight>w.height){w.height=w.minHeight;
}
if(w.maxHeight<w.height){w.height=w.maxHeight;
}
if(!this.getAllowGrowY()){w.maxHeight=w.height;
}
if(!this.getAllowShrinkY()){w.minHeight=w.height;
}return w;
},_computeSizeHint:function(){var j=this.getMinWidth()||0;
var g=this.getMinHeight()||0;
var k=this.getWidth()||j;
var i=this.getHeight()||g;
var f=this.getMaxWidth()||Infinity;
var h=this.getMaxHeight()||Infinity;
return {minWidth:j,width:k,maxWidth:f,minHeight:g,height:i,maxHeight:h};
},_hasHeightForWidth:function(){var bd=this._getLayout();

if(bd){return bd.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(a){var b=this._getLayout();

if(b&&b.hasHeightForWidth()){return b.getHeightForWidth(a);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__gl=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__gm;
},setUserBounds:function(X,top,Y,ba){this.__gm={left:X,top:top,width:Y,height:ba};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__gm;
qx.ui.core.queue.Layout.add(this);
},__go:{},setLayoutProperties:function(l){if(l==null){return;
}var m=this.__gn;

if(!m){m=this.__gn={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(l);
}for(var n in l){if(l[n]==null){delete m[n];
}else{m[n]=l[n];
}}},getLayoutProperties:function(){return this.__gn||this.__go;
},clearLayoutProperties:function(){delete this.__gn;
},updateLayoutProperties:function(c){var d=this._getLayout();

if(d){var e;
{};
d.invalidateChildrenCache();
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
},clone:function(){var bb=qx.core.Object.prototype.clone.call(this);
var bc=this.__gn;

if(bc){bb.__gn=qx.lang.Object.clone(bc);
}return bb;
}},destruct:function(){this.$$parent=this.$$subparent=this.__gn=this.__gi=this.__gm=this.__gk=null;
}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__gp={};
},statics:{MAX_SIZE:15,__gq:a},members:{__gp:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__gq;
e=c;
}var g=this.__gp;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__gq){i.dispose();
return;
}var k=this.__gp;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(o,p){var q=new qx.html.Decorator(o,p);
{};
return q;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var n=this.__gp;

for(var m in n){qx.util.DisposeUtil.disposeArray(n,m);
}}this.__gp=null;
}});
})();
(function(){var fu="px",ft="Boolean",fs="qx.event.type.Mouse",fr="qx.event.type.Drag",fq="visible",fp="qx.event.type.Focus",fo="on",fn="Integer",fm="excluded",fl="qx.event.type.Data",eW="_applyPadding",eV="qx.event.type.Event",eU="hidden",eT="contextmenu",eS="String",eR="tabIndex",eQ="backgroundColor",eP="focused",eO="changeVisibility",eN="mshtml",fB="hovered",fC="qx.event.type.KeySequence",fz="qx.client",fA="absolute",fx="drag",fy="div",fv="disabled",fw="move",fD="dragstart",fE="qx.dynlocale",fe="dragchange",fd="dragend",fg="resize",ff="Decorator",fi="zIndex",fh="opacity",fk="default",fj="Color",fc="changeToolTipText",fb="beforeContextmenuOpen",dD="_applyNativeContextMenu",dE="_applyBackgroundColor",dF="_applyFocusable",dG="changeShadow",dH="__gr",dI="qx.event.type.KeyInput",dJ="createChildControl",dK="Font",dL="_applyShadow",dM="_applyEnabled",fI="_applySelectable",fH="Number",fG="_applyKeepActive",fF="__gC",fM="_applyVisibility",fL="repeat",fK="qxDraggable",fJ="syncAppearance",fO="paddingLeft",fN="_applyDroppable",en="#",eo="qx.event.type.MouseWheel",ek="_applyCursor",em="_applyDraggable",er="changeTextColor",es="$$widget",ep="changeContextMenu",eq="paddingTop",ei="changeSelectable",ej="hideFocus",dU="none",dT="outline",dW="__gw",dV="_applyAppearance",dQ="__gE",dP="_applyOpacity",dS="url(",dR=")",dO="qx.ui.core.Widget",dN="_applyFont",ex="cursor",ey="qxDroppable",ez="__gv",eA="changeZIndex",et="changeEnabled",eu="changeFont",ev="_applyDecorator",ew="_applyZIndex",eB="_applyTextColor",eC="qx.ui.menu.Menu",ef="_applyToolTipText",ee="true",ed="widget",ec="changeDecorator",eb="_applyTabIndex",ea="changeAppearance",dY="shorthand",dX="/",eh="__gx",eg="",eD="_applyContextMenu",eE="paddingBottom",eF="changeNativeContextMenu",eG="__gs",eH="qx.ui.tooltip.ToolTip",eI="qxKeepActive",eJ="_applyKeepFocus",eK="paddingRight",eL="changeBackgroundColor",eM="changeLocale",fa="__gA",eY="qxKeepFocus",eX="qx/static/blank.gif";
qx.Class.define(dO,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__gr=this._createContainerElement();
this.__gs=this.__gD();
this.__gr.add(this.__gs);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:eV,disappear:eV,createChildControl:fl,resize:fl,move:fl,syncAppearance:fl,mousemove:fs,mouseover:fs,mouseout:fs,mousedown:fs,mouseup:fs,click:fs,dblclick:fs,contextmenu:fs,beforeContextmenuOpen:fs,mousewheel:eo,keyup:fC,keydown:fC,keypress:fC,keyinput:dI,focus:fp,blur:fp,focusin:fp,focusout:fp,activate:fp,deactivate:fp,capture:eV,losecapture:eV,drop:fr,dragleave:fr,dragover:fr,drag:fr,dragstart:fr,dragend:fr,dragchange:fr,droprequest:fr},properties:{paddingTop:{check:fn,init:0,apply:eW,themeable:true},paddingRight:{check:fn,init:0,apply:eW,themeable:true},paddingBottom:{check:fn,init:0,apply:eW,themeable:true},paddingLeft:{check:fn,init:0,apply:eW,themeable:true},padding:{group:[eq,eK,eE,fO],mode:dY,themeable:true},zIndex:{nullable:true,init:null,apply:ew,event:eA,check:fn,themeable:true},decorator:{nullable:true,init:null,apply:ev,event:ec,check:ff,themeable:true},shadow:{nullable:true,init:null,apply:dL,event:dG,check:ff,themeable:true},backgroundColor:{nullable:true,check:fj,apply:dE,event:eL,themeable:true},textColor:{nullable:true,check:fj,apply:eB,event:er,themeable:true,inheritable:true},font:{nullable:true,apply:dN,check:dK,event:eu,themeable:true,inheritable:true,dereference:true},opacity:{check:fH,apply:dP,themeable:true,nullable:true,init:null},cursor:{check:eS,apply:ek,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:eH,nullable:true},toolTipText:{check:eS,nullable:true,event:fc,apply:ef},toolTipIcon:{check:eS,nullable:true,event:fc},blockToolTip:{check:ft,init:false},visibility:{check:[fq,eU,fm],init:fq,apply:fM,event:eO},enabled:{init:true,check:ft,inheritable:true,apply:dM,event:et},anonymous:{init:false,check:ft},tabIndex:{check:fn,nullable:true,apply:eb},focusable:{check:ft,init:false,apply:dF},keepFocus:{check:ft,init:false,apply:eJ},keepActive:{check:ft,init:false,apply:fG},draggable:{check:ft,init:false,apply:em},droppable:{check:ft,init:false,apply:fN},selectable:{check:ft,init:false,event:ei,apply:fI},contextMenu:{check:eC,apply:eD,nullable:true,event:ep},nativeContextMenu:{check:ft,init:false,themeable:true,event:eF,apply:dD},appearance:{check:eS,init:ed,apply:dV,event:ea}},statics:{DEBUG:false,getWidgetByElement:function(gl){while(gl){var gm=gl.$$widget;
if(gm!=null){return qx.core.ObjectRegistry.fromHashCode(gm);
}try{gl=gl.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,t){while(t){if(parent==t){return true;
}t=t.getLayoutParent();
}return false;
},__gt:new qx.ui.core.DecoratorFactory(),__gu:new qx.ui.core.DecoratorFactory()},members:{__gr:null,__gs:null,__gv:null,__gw:null,__gx:null,__gy:null,__gz:null,__gA:null,_getLayout:function(){return this.__gA;
},_setLayout:function(bw){{};

if(this.__gA){this.__gA.connectToWidget(null);
}
if(bw){bw.connectToWidget(this);
}this.__gA=bw;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var gL=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(gL);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(gL);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__gB:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var gn=qx.theme.manager.Decoration.getInstance();
var gp=gn.resolve(a).getInsets();
var go=gn.resolve(b).getInsets();

if(gp.top!=go.top||gp.right!=go.right||gp.bottom!=go.bottom||gp.left!=go.left){return true;
}return false;
},renderLayout:function(bS,top,bT,bU){var ce=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,bS,top,bT,bU);
if(!ce){return;
}var bW=this.getContainerElement();
var content=this.getContentElement();
var cb=ce.size||this._updateInsets;
var cf=fu;
var cc={};
if(ce.position){cc.left=bS+cf;
cc.top=top+cf;
}if(ce.size){cc.width=bT+cf;
cc.height=bU+cf;
}
if(ce.position||ce.size){bW.setStyles(cc);
}
if(cb||ce.local||ce.margin){var bV=this.getInsets();
var innerWidth=bT-bV.left-bV.right;
var innerHeight=bU-bV.top-bV.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bY={};

if(this._updateInsets){bY.left=bV.left+cf;
bY.top=bV.top+cf;
}
if(cb){bY.width=innerWidth+cf;
bY.height=innerHeight+cf;
}
if(cb||this._updateInsets){content.setStyles(bY);
}
if(ce.size){var cd=this.__gx;

if(cd){cd.setStyles({width:bT+fu,height:bU+fu});
}}
if(ce.size||this._updateInsets){if(this.__gv){this.__gv.resize(bT,bU);
}}
if(ce.size){if(this.__gw){var bV=this.__gw.getInsets();
var ca=bT+bV.left+bV.right;
var bX=bU+bV.top+bV.bottom;
this.__gw.resize(ca,bX);
}}
if(cb||ce.local||ce.margin){if(this.__gA&&this.hasLayoutChildren()){this.__gA.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(ce.position&&this.hasListener(fw)){this.fireDataEvent(fw,this.getBounds());
}
if(ce.size&&this.hasListener(fg)){this.fireDataEvent(fg,this.getBounds());
}delete this._updateInsets;
return ce;
},__gC:null,clearSeparators:function(){var K=this.__gC;

if(!K){return;
}var L=qx.ui.core.Widget.__gt;
var content=this.getContentElement();
var J;

for(var i=0,l=K.length;i<l;i++){J=K[i];
L.poolDecorator(J);
content.remove(J);
}K.length=0;
},renderSeparator:function(cL,cM){var cN=qx.ui.core.Widget.__gt.getDecoratorElement(cL);
this.getContentElement().add(cN);
cN.resize(cM.width,cM.height);
cN.setStyles({left:cM.left+fu,top:cM.top+fu});
if(!this.__gC){this.__gC=[cN];
}else{this.__gC.push(cN);
}},_computeSizeHint:function(){var cE=this.getWidth();
var cD=this.getMinWidth();
var cz=this.getMaxWidth();
var cC=this.getHeight();
var cA=this.getMinHeight();
var cB=this.getMaxHeight();
{};
var cF=this._getContentHint();
var cy=this.getInsets();
var cH=cy.left+cy.right;
var cG=cy.top+cy.bottom;

if(cE==null){cE=cF.width+cH;
}
if(cC==null){cC=cF.height+cG;
}
if(cD==null){cD=cH;

if(cF.minWidth!=null){cD+=cF.minWidth;
}}
if(cA==null){cA=cG;

if(cF.minHeight!=null){cA+=cF.minHeight;
}}
if(cz==null){if(cF.maxWidth==null){cz=Infinity;
}else{cz=cF.maxWidth+cH;
}}
if(cB==null){if(cF.maxHeight==null){cB=Infinity;
}else{cB=cF.maxHeight+cG;
}}return {width:cE,minWidth:cD,maxWidth:cz,height:cC,minHeight:cA,maxHeight:cB};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__gA){this.__gA.invalidateLayoutCache();
}},_getContentHint:function(){var bF=this.__gA;

if(bF){if(this.hasLayoutChildren()){var bE;
var bG=bF.getSizeHint();
{};
return bG;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(bo){var bs=this.getInsets();
var bv=bs.left+bs.right;
var bu=bs.top+bs.bottom;
var bt=bo-bv;
var bq=this._getLayout();

if(bq&&bq.hasHeightForWidth()){var bp=bq.getHeightForWidth(bo);
}else{bp=this._getContentHeightForWidth(bt);
}var br=bp+bu;
return br;
},_getContentHeightForWidth:function(bx){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var df=this.getPaddingRight();
var dh=this.getPaddingBottom();
var dg=this.getPaddingLeft();

if(this.__gv){var de=this.__gv.getInsets();
{};
top+=de.top;
df+=de.right;
dh+=de.bottom;
dg+=de.left;
}return {"top":top,"right":df,"bottom":dh,"left":dg};
},getInnerSize:function(){var S=this.getBounds();

if(!S){return null;
}var R=this.getInsets();
return {width:S.width-R.left-R.right,height:S.height-R.top-R.bottom};
},show:function(){this.setVisibility(fq);
},hide:function(){this.setVisibility(eU);
},exclude:function(){this.setVisibility(fm);
},isVisible:function(){return this.getVisibility()===fq;
},isHidden:function(){return this.getVisibility()!==fq;
},isExcluded:function(){return this.getVisibility()===fm;
},isSeeable:function(){var dr=this.getContainerElement().getDomElement();

if(dr){return dr.offsetWidth>0;
}var dq=this;

do{if(!dq.isVisible()){return false;
}
if(dq.isRootWidget()){return true;
}dq=dq.getLayoutParent();
}while(dq);
return false;
},_createContainerElement:function(){var gG={"$$widget":this.toHashCode()};
{};
var gF={zIndex:0,position:fA};
return new qx.html.Element(fy,gF,gG);
},__gD:function(){var bb=this._createContentElement();
{};
bb.setStyles({"position":fA,"zIndex":10});
return bb;
},_createContentElement:function(){return new qx.html.Element(fy,{overflowX:eU,overflowY:eU});
},getContainerElement:function(){return this.__gr;
},getContentElement:function(){return this.__gs;
},getDecoratorElement:function(){return this.__gv||null;
},getShadowElement:function(){return this.__gw||null;
},__gE:null,getLayoutChildren:function(){var cJ=this.__gE;

if(!cJ){return this.__gF;
}var cK;

for(var i=0,l=cJ.length;i<l;i++){var cI=cJ[i];

if(cI.hasUserBounds()||cI.isExcluded()){if(cK==null){cK=cJ.concat();
}qx.lang.Array.remove(cK,cI);
}}return cK||cJ;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var gj=this.__gA;

if(gj){gj.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dB=this.__gE;

if(!dB){return false;
}var dC;

for(var i=0,l=dB.length;i<l;i++){dC=dB[i];

if(!dC.hasUserBounds()&&!dC.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__gF:[],_getChildren:function(){return this.__gE||this.__gF;
},_indexOf:function(Y){var ba=this.__gE;

if(!ba){return -1;
}return ba.indexOf(Y);
},_hasChildren:function(){var cg=this.__gE;
return cg!=null&&(!!cg[0]);
},addChildrenToQueue:function(O){var P=this.__gE;

if(!P){return;
}var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];
O[Q.$$hash]=Q;
Q.addChildrenToQueue(O);
}},_add:function(C,D){if(C.getLayoutParent()==this){qx.lang.Array.remove(this.__gE,C);
}
if(this.__gE){this.__gE.push(C);
}else{this.__gE=[C];
}this.__gG(C,D);
},_addAt:function(gQ,gR,gS){if(!this.__gE){this.__gE=[];
}if(gQ.getLayoutParent()==this){qx.lang.Array.remove(this.__gE,gQ);
}var gT=this.__gE[gR];

if(gT===gQ){return gQ.setLayoutProperties(gS);
}
if(gT){qx.lang.Array.insertBefore(this.__gE,gQ,gT);
}else{this.__gE.push(gQ);
}this.__gG(gQ,gS);
},_addBefore:function(gW,gX,gY){{};

if(gW==gX){return;
}
if(!this.__gE){this.__gE=[];
}if(gW.getLayoutParent()==this){qx.lang.Array.remove(this.__gE,gW);
}qx.lang.Array.insertBefore(this.__gE,gW,gX);
this.__gG(gW,gY);
},_addAfter:function(bH,bI,bJ){{};

if(bH==bI){return;
}
if(!this.__gE){this.__gE=[];
}if(bH.getLayoutParent()==this){qx.lang.Array.remove(this.__gE,bH);
}qx.lang.Array.insertAfter(this.__gE,bH,bI);
this.__gG(bH,bJ);
},_remove:function(gH){if(!this.__gE){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__gE,gH);
this.__gH(gH);
},_removeAt:function(H){if(!this.__gE){throw new Error("This widget has no children!");
}var I=this.__gE[H];
qx.lang.Array.removeAt(this.__gE,H);
this.__gH(I);
return I;
},_removeAll:function(){if(!this.__gE){return;
}var T=this.__gE.concat();
this.__gE.length=0;

for(var i=T.length-1;i>=0;i--){this.__gH(T[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__gG:function(ch,ci){{};
var parent=ch.getLayoutParent();

if(parent&&parent!=this){parent._remove(ch);
}ch.setLayoutParent(this);
if(ci){ch.setLayoutProperties(ci);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(ch);
}},__gH:function(be){{};

if(be.getLayoutParent()!==this){throw new Error("Remove Error: "+be+" is not a child of this widget!");
}be.setLayoutParent(null);
if(this.__gA){this.__gA.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(be);
}},capture:function(dt){this.getContainerElement().capture(dt);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(dn,dp,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__gx){return;
}var cO=this.__gx=new qx.html.Element;
{};
cO.setStyles({position:fA,top:0,left:0,zIndex:7});
var cP=this.getBounds();

if(cP){this.__gx.setStyles({width:cP.width+fu,height:cP.height+fu});
}if(qx.core.Variant.isSet(fz,eN)){cO.setStyles({backgroundImage:dS+qx.util.ResourceManager.getInstance().toUri(eX)+dR,backgroundRepeat:fL});
}this.getContainerElement().add(cO);
},_applyDecorator:function(bf,bg){{};
var bk=qx.ui.core.Widget.__gt;
var bi=this.getContainerElement();
if(!this.__gx&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(bg){bi.remove(this.__gv);
bk.poolDecorator(this.__gv);
}if(bf){var bj=this.__gv=bk.getDecoratorElement(bf);
bj.setStyle(fi,5);
var bh=this.getBackgroundColor();
bj.tint(bh);
bi.add(bj);
}else{delete this.__gv;
this._applyBackgroundColor(this.getBackgroundColor());
}if(bf&&!bg&&bh){this.getContainerElement().setStyle(eQ,null);
}if(this.__gB(bg,bf)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(bf){var bl=this.getBounds();

if(bl){bj.resize(bl.width,bl.height);
this.__gx&&
this.__gx.setStyles({width:bl.width+fu,height:bl.height+fu});
}}},_applyShadow:function(cR,cS){var da=qx.ui.core.Widget.__gu;
var cU=this.getContainerElement();
if(cS){cU.remove(this.__gw);
da.poolDecorator(this.__gw);
}if(cR){var cW=this.__gw=da.getDecoratorElement(cR);
cU.add(cW);
var cY=cW.getInsets();
cW.setStyles({left:(-cY.left)+fu,top:(-cY.top)+fu});
var cX=this.getBounds();

if(cX){var cV=cX.width+cY.left+cY.right;
var cT=cX.height+cY.top+cY.bottom;
cW.resize(cV,cT);
}cW.tint(null);
}else{delete this.__gw;
}},_applyToolTipText:function(gI,gJ){if(qx.core.Variant.isSet(fE,fo)){if(this.__gz){return;
}var gK=qx.locale.Manager.getInstance();
this.__gz=gK.addListener(eM,function(){if(gI&&gI.translate){this.setToolTipText(gI.translate());
}},this);
}},_applyTextColor:function(gU,gV){},_applyZIndex:function(gq,gr){this.getContainerElement().setStyle(fi,gq==null?0:gq);
},_applyVisibility:function(db,dc){var dd=this.getContainerElement();

if(db===fq){dd.show();
}else{dd.hide();
}var parent=this.$$parent;

if(parent&&(dc==null||db==null||dc===fm||db===fm)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(fP,fQ){this.getContainerElement().setStyle(fh,fP==1?null:fP);
if(qx.core.Variant.isSet(fz,eN)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var fR=(fP==1||fP==null)?null:0.99;
this.getContentElement().setStyle(fh,fR);
}}},_applyCursor:function(E,F){if(E==null&&!this.isSelectable()){E=fk;
}this.getContainerElement().setStyle(ex,E,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(j,k){var m=this.getBackgroundColor();
var o=this.getContainerElement();

if(this.__gv){this.__gv.tint(m);
o.setStyle(eQ,null);
}else{var n=qx.theme.manager.Color.getInstance().resolve(m);
o.setStyle(eQ,n);
}},_applyFont:function(gs,gt){},__gI:null,$$stateChanges:null,_forwardStates:null,hasState:function(U){var V=this.__gI;
return !!V&&!!V[U];
},addState:function(gu){var gv=this.__gI;

if(!gv){gv=this.__gI={};
}
if(gv[gu]){return;
}this.__gI[gu]=true;
if(gu===fB){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gy=this.__gL;

if(forward&&forward[gu]&&gy){var gw;

for(var gx in gy){gw=gy[gx];

if(gw instanceof qx.ui.core.Widget){gy[gx].addState(gu);
}}}},removeState:function(dw){var dx=this.__gI;

if(!dx||!dx[dw]){return;
}delete this.__gI[dw];
if(dw===fB){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var dA=this.__gL;

if(forward&&forward[dw]&&dA){for(var dz in dA){var dy=dA[dz];

if(dy instanceof qx.ui.core.Widget){dy.removeState(dw);
}}}},replaceState:function(gz,gA){var gB=this.__gI;

if(!gB){gB=this.__gI={};
}
if(!gB[gA]){gB[gA]=true;
}
if(gB[gz]){delete gB[gz];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gE=this.__gL;

if(forward&&forward[gA]&&gE){for(var gD in gE){var gC=gE[gD];

if(gC instanceof qx.ui.core.Widget){gC.replaceState(gz,gA);
}}}},__gJ:null,__gK:null,syncAppearance:function(){var gd=this.__gI;
var gc=this.__gJ;
var ge=qx.theme.manager.Appearance.getInstance();
var ga=qx.core.Property.$$method.setThemed;
var gi=qx.core.Property.$$method.resetThemed;
if(this.__gK){delete this.__gK;
if(gc){var fY=ge.styleFrom(gc,gd,null,this.getAppearance());
if(fY){gc=null;
}}}if(!gc){var gb=this;
var gh=[];

do{gh.push(gb.$$subcontrol||gb.getAppearance());
}while(gb=gb.$$subparent);
gc=this.__gJ=gh.reverse().join(dX).replace(/#[0-9]+/g,eg);
}var gf=ge.styleFrom(gc,gd,null,this.getAppearance());

if(gf){var gg;

if(fY){for(var gg in fY){if(gf[gg]===undefined){this[gi[gg]]();
}}}{};
for(var gg in gf){gf[gg]===undefined?this[gi[gg]]():this[ga[gg]](gf[gg]);
}}else if(fY){for(var gg in fY){this[gi[gg]]();
}}this.fireDataEvent(fJ,this.__gI);
},_applyAppearance:function(W,X){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__gy){qx.ui.core.queue.Appearance.add(this);
this.__gy=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__gK=true;
qx.ui.core.queue.Appearance.add(this);
var cx=this.__gL;

if(cx){var cv;

for(var cw in cx){cv=cx[cw];

if(cv instanceof qx.ui.core.Widget){cv.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var gk=this;

while(gk.getAnonymous()){gk=gk.getLayoutParent();

if(!gk){return null;
}}return gk;
},getFocusTarget:function(){var cj=this;

if(!cj.getEnabled()){return null;
}
while(cj.getAnonymous()||!cj.getFocusable()){cj=cj.getLayoutParent();

if(!cj||!cj.getEnabled()){return null;
}}return cj;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(bK,bL){var bM=this.getFocusElement();
if(bK){var bN=this.getTabIndex();

if(bN==null){bN=1;
}bM.setAttribute(eR,bN);
if(qx.core.Variant.isSet(fz,eN)){bM.setAttribute(ej,ee);
}else{bM.setStyle(dT,dU);
}}else{if(bM.isNativelyFocusable()){bM.setAttribute(eR,-1);
}else if(bL){bM.setAttribute(eR,null);
}}},_applyKeepFocus:function(bc){var bd=this.getFocusElement();
bd.setAttribute(eY,bc?fo:null);
},_applyKeepActive:function(bQ){var bR=this.getContainerElement();
bR.setAttribute(eI,bQ?fo:null);
},_applyTabIndex:function(G){if(G==null){G=1;
}else if(G<1||G>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&G!=null){this.getFocusElement().setAttribute(eR,G);
}},_applySelectable:function(bO,bP){if(bP!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(bO);
this.getContentElement().setSelectable(bO);
},_applyEnabled:function(ct,cu){if(ct===false){this.addState(fv);
this.removeState(fB);
if(this.isFocusable()){this.removeState(eP);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(fv);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(du,dv,name){},_applyContextMenu:function(ck,cl){if(cl){cl.removeState(eT);

if(cl.getOpener()==this){cl.resetOpener();
}
if(!ck){this.removeListener(eT,this._onContextMenuOpen);
cl.removeListener(eO,this._onBeforeContextMenuOpen,this);
}}
if(ck){ck.setOpener(this);
ck.addState(eT);

if(!cl){this.addListener(eT,this._onContextMenuOpen);
ck.addListener(eO,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==fq&&this.hasListener(fb)){this.fireDataEvent(fb,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(bA,bB){if(!this.isEnabled()&&bA===true){bA=false;
}qx.ui.core.DragDropCursor.getInstance();
if(bA){this.addListener(fD,this._onDragStart);
this.addListener(fx,this._onDrag);
this.addListener(fd,this._onDragEnd);
this.addListener(fe,this._onDragChange);
}else{this.removeListener(fD,this._onDragStart);
this.removeListener(fx,this._onDrag);
this.removeListener(fd,this._onDragEnd);
this.removeListener(fe,this._onDragChange);
}this.getContainerElement().setAttribute(fK,bA?fo:null);
},_applyDroppable:function(fW,fX){if(!this.isEnabled()&&fW===true){fW=false;
}this.getContainerElement().setAttribute(ey,fW?fo:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(fk);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var u=qx.ui.core.DragDropCursor.getInstance();
var v=e.getCurrentAction();
v?u.setAction(v):u.resetAction();
},visualizeFocus:function(){this.addState(eP);
},visualizeBlur:function(){this.removeState(eP);
},scrollChildIntoView:function(p,q,r,s){this.scrollChildIntoViewX(p,q,s);
this.scrollChildIntoViewY(p,r,s);
},scrollChildIntoViewX:function(co,cp,cq){this.getContentElement().scrollChildIntoViewX(co.getContainerElement(),cp,cq);
},scrollChildIntoViewY:function(dk,dl,dm){this.getContentElement().scrollChildIntoViewY(dk.getContainerElement(),dl,dm);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(cQ){if(!this.__gL){return false;
}return !!this.__gL[cQ];
},__gL:null,_getCreatedChildControls:function(){return this.__gL;
},getChildControl:function(c,d){if(!this.__gL){if(d){return null;
}this.__gL={};
}var f=this.__gL[c];

if(f){return f;
}
if(d===true){return null;
}return this._createChildControl(c);
},_showChildControl:function(by){var bz=this.getChildControl(by);
bz.show();
return bz;
},_excludeChildControl:function(M){var N=this.getChildControl(M,true);

if(N){N.exclude();
}},_isChildControlVisible:function(bC){var bD=this.getChildControl(bC,true);

if(bD){return bD.isVisible();
}return false;
},_createChildControl:function(w){if(!this.__gL){this.__gL={};
}else if(this.__gL[w]){throw new Error("Child control '"+w+"' already created!");
}var A=w.indexOf(en);

if(A==-1){var x=this._createChildControlImpl(w);
}else{var x=this._createChildControlImpl(w.substring(0,A));
}
if(!x){throw new Error("Unsupported control: "+w);
}x.$$subcontrol=w;
x.$$subparent=this;
var y=this.__gI;
var forward=this._forwardStates;

if(y&&forward&&x instanceof qx.ui.core.Widget){for(var z in y){if(forward[z]){x.addState(z);
}}}this.fireDataEvent(dJ,x);
return this.__gL[w]=x;
},_createChildControlImpl:function(ds){return null;
},_disposeChildControls:function(){var gP=this.__gL;

if(!gP){return;
}var gN=qx.ui.core.Widget;

for(var gO in gP){var gM=gP[gO];

if(!gN.contains(this,gM)){gM.destroy();
}else{gM.dispose();
}}delete this.__gL;
},_findTopControl:function(){var B=this;

while(B){if(!B.$$subparent){return B;
}B=B.$$subparent;
}return null;
},getContainerLocation:function(cm){var cn=this.getContainerElement().getDomElement();
return cn?qx.bom.element.Location.get(cn,cm):null;
},getContentLocation:function(g){var h=this.getContentElement().getDomElement();
return h?qx.bom.element.Location.get(h,g):null;
},setDomLeft:function(fS){var fT=this.getContainerElement().getDomElement();

if(fT){fT.style.left=fS+fu;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(cr){var cs=this.getContainerElement().getDomElement();

if(cs){cs.style.top=cr+fu;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(fU,top){var fV=this.getContainerElement().getDomElement();

if(fV){fV.style.left=fU+fu;
fV.style.top=top+fu;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var di=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var dj=this.getChildren();

for(var i=0,l=dj.length;i<l;i++){di.add(dj[i].clone());
}}return di;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(fE,fo)){if(this.__gz){qx.locale.Manager.getInstance().removeListenerById(this.__gz);
}}this.getContainerElement().setAttribute(es,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var bn=qx.ui.core.Widget;
var bm=this.getContainerElement();

if(this.__gv){bm.remove(this.__gv);
bn.__gt.poolDecorator(this.__gv);
}
if(this.__gw){bm.remove(this.__gw);
bn.__gu.poolDecorator(this.__gw);
}this.clearSeparators();
this.__gv=this.__gw=this.__gC=null;
}else{this._disposeArray(fF);
this._disposeObjects(ez,dW);
}this._disposeArray(dQ);
this.__gI=this.__gL=null;
this._disposeObjects(fa,dH,eG,eh);
}});
})();
(function(){var e="qx.event.type.Data",d="qx.ui.container.Composite",c="addChildWidget",b="removeChildWidget";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(i){qx.ui.core.Widget.call(this);

if(i!=null){this._setLayout(i);
}},events:{addChildWidget:e,removeChildWidget:e},members:{_afterAddChild:function(a){this.fireNonBubblingEvent(c,qx.event.type.Data,[a]);
},_afterRemoveChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
}},defer:function(g,h){qx.ui.core.MChildrenHandling.remap(h);
qx.ui.core.MLayoutHandling.remap(h);
}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__im:null,__in:null,__io:null,getLayoutLocation:function(K){var N,M,O,top;
M=K.getBounds();
O=M.left;
top=M.top;
var P=M;
K=K.getLayoutParent();

while(K&&!K.isRootWidget()){M=K.getBounds();
O+=M.left;
top+=M.top;
N=K.getInsets();
O+=N.left;
top+=N.top;
K=K.getLayoutParent();
}if(K.isRootWidget()){var L=K.getContainerLocation();

if(L){O+=L.left;
top+=L.top;
}}return {left:O,top:top,right:O+P.width,bottom:top+P.height};
},moveTo:function(E,top){if(this.getDomMove()){this.setDomPosition(E,top);
}else{this.setLayoutProperties({left:E,top:top});
}},placeToWidget:function(y,z){if(z){this.__ip();
this.__im=qx.lang.Function.bind(this.placeToWidget,this,y,false);
qx.event.Idle.getInstance().addListener(i,this.__im);
this.__io=function(){this.__ip();
};
this.addListener(g,this.__io,this);
}var A=y.getContainerLocation()||this.getLayoutLocation(y);
this.__ir(A);
},__ip:function(){if(this.__im){qx.event.Idle.getInstance().removeListener(i,this.__im);
this.__im=null;
}
if(this.__io){this.removeListener(g,this.__io,this);
this.__io=null;
}},placeToMouse:function(event){var J=event.getDocumentLeft();
var top=event.getDocumentTop();
var I={left:J,top:top,right:J,bottom:top};
this.__ir(I);
},placeToElement:function(B,C){var location=qx.bom.element.Location.get(B);
var D={left:location.left,top:location.top,right:location.left+B.offsetWidth,bottom:location.top+B.offsetHeight};
if(C){this.__im=qx.lang.Function.bind(this.placeToElement,this,B,false);
qx.event.Idle.getInstance().addListener(i,this.__im);
this.addListener(g,function(){if(this.__im){qx.event.Idle.getInstance().removeListener(i,this.__im);
this.__im=null;
}},this);
}this.__ir(D);
},placeToPoint:function(Q){var R={left:Q.left,top:Q.top,right:Q.left,bottom:Q.top};
this.__ir(R);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__iq:function(F){var G=null;

if(this._computePlacementSize){var G=this._computePlacementSize();
}else if(this.isVisible()){var G=this.getBounds();
}
if(G==null){this.addListenerOnce(q,function(){this.__iq(F);
},this);
}else{F.call(this,G);
}},__ir:function(H){this.__iq(function(S){var T=qx.util.placement.Placement.compute(S,this.getLayoutParent().getBounds(),H,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(T.left,T.top);
});
}},destruct:function(){this.__ip();
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
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(s,t){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(s!=null){this.setLabel(s);
}
if(t!=null){this.setIcon(t);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(x){var y;

switch(x){case l:y=new qx.ui.basic.Atom;
this._add(y);
break;
}return y||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,x);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(u,v){var w=this.getChildControl(l);
u==null?w.resetIcon():w.setIcon(u);
},_applyLabel:function(m,n){var o=this.getChildControl(l);
m==null?o.resetLabel():o.setLabel(m);
},_applyRich:function(p,q){var r=this.getChildControl(l);
r.setRich(p);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__gc:{},remove:function(m){delete this.__gc[m.$$hash];
},add:function(c){this.__gc[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var d=this.__gf();
for(var i=d.length-1;i>=0;i--){var e=d[i];
if(e.hasValidLayout()){continue;
}if(e.isRootWidget()&&!e.hasUserBounds()){var g=e.getSizeHint();
e.renderLayout(0,0,g.width,g.height);
}else{var f=e.getBounds();
e.renderLayout(f.left,f.top,f.width,f.height);
}}},getNestingLevel:function(h){var j=this.__ge;
var l=0;
var parent=h;
while(true){if(j[parent.$$hash]!=null){l+=j[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
l+=1;
}var k=l;

while(h&&h!==parent){j[h.$$hash]=k--;
h=h.$$parent;
}return l;
},__gd:function(){var A=qx.ui.core.queue.Visibility;
this.__ge={};
var z=[];
var y=this.__gc;
var v,x;

for(var w in y){v=y[w];

if(A.isVisible(v)){x=this.getNestingLevel(v);
if(!z[x]){z[x]={};
}z[x][w]=v;
delete y[w];
}}return z;
},__gf:function(){var q=[];
var s=this.__gd();

for(var p=s.length-1;p>=0;p--){if(!s[p]){continue;
}
for(var o in s[p]){var n=s[p][o];
if(p==0||n.isRootWidget()||n.hasUserBounds()){q.push(n);
n.invalidateLayoutCache();
continue;
}var u=n.getSizeHint(false);

if(u){n.invalidateLayoutCache();
var r=n.getSizeHint();
var t=(!n.getBounds()||u.minWidth!==r.minWidth||u.width!==r.width||u.maxWidth!==r.maxWidth||u.minHeight!==r.minHeight||u.height!==r.height||u.maxHeight!==r.maxHeight);
}else{t=true;
}
if(t){var parent=n.getLayoutParent();

if(!s[p-1]){s[p-1]={};
}s[p-1][parent.$$hash]=parent;
}else{q.push(n);
}}}return q;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__cJ=b;
this.__cK=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__cJ:null,__cK:null,canHandleEvent:function(d,e){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__cJ=this.__cK=null;
},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__cL={};
this.__cM=qx.lang.Function.bind(this.__cQ,this);
this.__cN=false;
},members:{__cO:null,__cP:null,__cL:null,__cN:null,__cM:null,schedule:function(g){if(this.__cO==null){this.__cO=window.setTimeout(this.__cM,0);
}var h=g.toHashCode();
if(this.__cP&&this.__cP[h]){return;
}this.__cL[h]=g;
this.__cN=true;
},cancel:function(c){var d=c.toHashCode();
if(this.__cP&&this.__cP[d]){this.__cP[d]=null;
return;
}delete this.__cL[d];
if(qx.lang.Object.isEmpty(this.__cL)&&this.__cO!=null){window.clearTimeout(this.__cO);
this.__cO=null;
}},__cQ:qx.event.GlobalError.observeMethod(function(){this.__cO=null;
while(this.__cN){this.__cP=qx.lang.Object.clone(this.__cL);
this.__cL={};
this.__cN=false;

for(var f in this.__cP){var e=this.__cP[f];

if(e){this.__cP[f]=null;
e.call();
}}}this.__cP=null;
})},destruct:function(){if(this.__cO!=null){window.clearTimeout(this.__cO);
}this.__cM=this.__cL=null;
}});
})();
(function(){var c="qx.util.DeferredCall";
qx.Class.define(c,{extend:qx.core.Object,construct:function(d,e){qx.core.Object.call(this);
this.__cR=d;
this.__cS=e||null;
this.__cT=qx.util.DeferredCallManager.getInstance();
},members:{__cR:null,__cS:null,__cT:null,cancel:function(){this.__cT.cancel(this);
},schedule:function(){this.__cT.schedule(this);
},call:function(){this.__cS?this.__cR.apply(this.__cS):this.__cR();
}},destruct:function(a,b){this.cancel();
this.__cS=this.__cR=this.__cT=null;
}});
})();
(function(){var bp="element",bo="qx.client",bn="qxSelectable",bm="off",bl="on",bk="div",bj="",bi="mshtml",bh="none",bg="scroll",bH="text",bG="qx.html.Element",bF="|capture|",bE="activate",bD="blur",bC="deactivate",bB="capture",bA="userSelect",bz="-moz-none",by="visible",bw="releaseCapture",bx="|bubble|",bu="tabIndex",bv="focus",bs="MozUserSelect",bt="normal",bq="__dr",br="hidden";
qx.Class.define(bG,{extend:qx.core.Object,construct:function(V,W,X){qx.core.Object.call(this);
this.__cU=V||bk;
this.__cV=W||null;
this.__cW=X||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__cX:{},_scheduleFlush:function(dq){qx.html.Element.__dC.schedule();
},flush:function(){var cy;
{};
var cq=this.__cY();
var cp=cq.getFocus();

if(cp&&this.__dd(cp)){cq.blur(cp);
}var cF=cq.getActive();

if(cF&&this.__dd(cF)){qx.bom.Element.deactivate(cF);
}var ct=this.__db();

if(ct&&this.__dd(ct)){qx.bom.Element.releaseCapture(ct);
}var cz=[];
var cA=this._modified;

for(var cx in cA){cy=cA[cx];
if(cy.__dv()){if(cy.__de&&qx.dom.Hierarchy.isRendered(cy.__de)){cz.push(cy);
}else{{};
cy.__du();
}delete cA[cx];
}}
for(var i=0,l=cz.length;i<l;i++){cy=cz[i];
{};
cy.__du();
}var cv=this._visibility;

for(var cx in cv){cy=cv[cx];
var cB=cy.__de;

if(!cB){delete cv[cx];
continue;
}{};
if(!cy.$$disposed){cB.style.display=cy.__dh?bj:bh;
if(qx.core.Variant.isSet(bo,bi)){if(!(document.documentMode>=8)){cB.style.visibility=cy.__dh?by:br;
}}}delete cv[cx];
}var scroll=this._scroll;

for(var cx in scroll){cy=scroll[cx];
var cG=cy.__de;

if(cG&&cG.offsetWidth){var cs=true;
if(cy.__dk!=null){cy.__de.scrollLeft=cy.__dk;
delete cy.__dk;
}if(cy.__dl!=null){cy.__de.scrollTop=cy.__dl;
delete cy.__dl;
}var cC=cy.__di;

if(cC!=null){var cw=cC.element.getDomElement();

if(cw&&cw.offsetWidth){qx.bom.element.Scroll.intoViewX(cw,cG,cC.align);
delete cy.__di;
}else{cs=false;
}}var cD=cy.__dj;

if(cD!=null){var cw=cD.element.getDomElement();

if(cw&&cw.offsetWidth){qx.bom.element.Scroll.intoViewY(cw,cG,cD.align);
delete cy.__dj;
}else{cs=false;
}}if(cs){delete scroll[cx];
}}}var cr={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var cE=this._actions[i];
var cB=cE.element.__de;

if(!cB||!cr[cE.type]&&!cE.element.__dv()){continue;
}var cu=cE.args;
cu.unshift(cB);
qx.bom.Element[cE.type].apply(qx.bom.Element,cu);
}this._actions=[];
for(var cx in this.__cX){var co=this.__cX[cx];
var cG=co.element.__de;

if(cG){qx.bom.Selection.set(cG,co.start,co.end);
delete this.__cX[cx];
}}qx.event.handler.Appear.refresh();
},__cY:function(){if(!this.__da){var cN=qx.event.Registration.getManager(window);
this.__da=cN.getHandler(qx.event.handler.Focus);
}return this.__da;
},__db:function(){if(!this.__dc){var bY=qx.event.Registration.getManager(window);
this.__dc=bY.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__dc.getCaptureElement();
},__dd:function(ds){var dt=qx.core.ObjectRegistry.fromHashCode(ds.$$element);
return dt&&!dt.__dv();
}},members:{__cU:null,__de:null,__df:false,__dg:true,__dh:true,__di:null,__dj:null,__dk:null,__dl:null,__dm:null,__dn:null,__do:null,__cV:null,__cW:null,__dp:null,__dq:null,__dr:null,__ds:null,__dt:null,_scheduleChildrenUpdate:function(){if(this.__ds){return;
}this.__ds=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bp);
},_createDomElement:function(){return qx.bom.Element.create(this.__cU);
},__du:function(){{};
var N=this.__dr;

if(N){var length=N.length;
var O;

for(var i=0;i<length;i++){O=N[i];

if(O.__dh&&O.__dg&&!O.__de){O.__du();
}}}
if(!this.__de){this.__de=this._createDomElement();
this.__de.$$element=this.$$hash;
this._copyData(false);

if(N&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__ds){this._syncChildren();
}}delete this.__ds;
},_insertChildren:function(){var dX=this.__dr;
var length=dX.length;
var ea;

if(length>2){var dY=document.createDocumentFragment();

for(var i=0;i<length;i++){ea=dX[i];

if(ea.__de&&ea.__dg){dY.appendChild(ea.__de);
}}this.__de.appendChild(dY);
}else{var dY=this.__de;

for(var i=0;i<length;i++){ea=dX[i];

if(ea.__de&&ea.__dg){dY.appendChild(ea.__de);
}}}},_syncChildren:function(){var dR;
var dW=qx.core.ObjectRegistry;
var dN=this.__dr;
var dU=dN.length;
var dO;
var dS;
var dQ=this.__de;
var dT=dQ.childNodes;
var dP=0;
var dV;
{};
for(var i=dT.length-1;i>=0;i--){dV=dT[i];
dS=dW.fromHashCode(dV.$$element);

if(!dS||!dS.__dg||dS.__dt!==this){dQ.removeChild(dV);
{};
}}for(var i=0;i<dU;i++){dO=dN[i];
if(dO.__dg){dS=dO.__de;
dV=dT[dP];

if(!dS){continue;
}if(dS!=dV){if(dV){dQ.insertBefore(dS,dV);
}else{dQ.appendChild(dS);
}{};
}dP++;
}}{};
},_copyData:function(ci){var cm=this.__de;
var cl=this.__cW;

if(cl){var cj=qx.bom.element.Attribute;

for(var cn in cl){cj.set(cm,cn,cl[cn]);
}}var cl=this.__cV;

if(cl){var ck=qx.bom.element.Style;

if(ci){ck.setStyles(cm,cl);
}else{ck.setCss(cm,ck.compile(cl));
}}var cl=this.__dp;

if(cl){for(var cn in cl){this._applyProperty(cn,cl[cn]);
}}var cl=this.__dq;

if(cl){qx.event.Registration.getManager(cm).importListeners(cm,cl);
delete this.__dq;
}},_syncData:function(){var E=this.__de;
var D=qx.bom.element.Attribute;
var B=qx.bom.element.Style;
var C=this.__dn;

if(C){var H=this.__cW;

if(H){var F;

for(var G in C){F=H[G];

if(F!==undefined){D.set(E,G,F);
}else{D.reset(E,G);
}}}this.__dn=null;
}var C=this.__dm;

if(C){var H=this.__cV;

if(H){var A={};

for(var G in C){A[G]=H[G];
}B.setStyles(E,A);
}this.__dm=null;
}var C=this.__do;

if(C){var H=this.__dp;

if(H){var F;

for(var G in C){this._applyProperty(G,H[G]);
}}this.__do=null;
}},__dv:function(){var dv=this;
while(dv){if(dv.__df){return true;
}
if(!dv.__dg||!dv.__dh){return false;
}dv=dv.__dt;
}return false;
},__dw:function(h){if(h.__dt===this){throw new Error("Child is already in: "+h);
}
if(h.__df){throw new Error("Root elements could not be inserted into other ones.");
}if(h.__dt){h.__dt.remove(h);
}h.__dt=this;
if(!this.__dr){this.__dr=[];
}if(this.__de){this._scheduleChildrenUpdate();
}},__dx:function(Y){if(Y.__dt!==this){throw new Error("Has no child: "+Y);
}if(this.__de){this._scheduleChildrenUpdate();
}delete Y.__dt;
},__dy:function(bb){if(bb.__dt!==this){throw new Error("Has no child: "+bb);
}if(this.__de){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dr||null;
},getChild:function(bP){var bQ=this.__dr;
return bQ&&bQ[bP]||null;
},hasChildren:function(){var dM=this.__dr;
return dM&&dM[0]!==undefined;
},indexOf:function(dF){var dG=this.__dr;
return dG?dG.indexOf(dF):-1;
},hasChild:function(bW){var bX=this.__dr;
return bX&&bX.indexOf(bW)!==-1;
},add:function(dw){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dw(arguments[i]);
}this.__dr.push.apply(this.__dr,arguments);
}else{this.__dw(dw);
this.__dr.push(dw);
}return this;
},addAt:function(cL,cM){this.__dw(cL);
qx.lang.Array.insertAt(this.__dr,cL,cM);
return this;
},remove:function(q){var r=this.__dr;

if(!r){return;
}
if(arguments[1]){var s;

for(var i=0,l=arguments.length;i<l;i++){s=arguments[i];
this.__dx(s);
qx.lang.Array.remove(r,s);
}}else{this.__dx(q);
qx.lang.Array.remove(r,q);
}return this;
},removeAt:function(bR){var bS=this.__dr;

if(!bS){throw new Error("Has no children!");
}var bT=bS[bR];

if(!bT){throw new Error("Has no child at this position!");
}this.__dx(bT);
qx.lang.Array.removeAt(this.__dr,bR);
return this;
},removeAll:function(){var cX=this.__dr;

if(cX){for(var i=0,l=cX.length;i<l;i++){this.__dx(cX[i]);
}cX.length=0;
}return this;
},getParent:function(){return this.__dt||null;
},insertInto:function(parent,dE){parent.__dw(this);

if(dE==null){parent.__dr.push(this);
}else{qx.lang.Array.insertAt(this.__dr,this,dE);
}return this;
},insertBefore:function(du){var parent=du.__dt;
parent.__dw(this);
qx.lang.Array.insertBefore(parent.__dr,this,du);
return this;
},insertAfter:function(dm){var parent=dm.__dt;
parent.__dw(this);
qx.lang.Array.insertAfter(parent.__dr,this,dm);
return this;
},moveTo:function(cd){var parent=this.__dt;
parent.__dy(this);
var ce=parent.__dr.indexOf(this);

if(ce===cd){throw new Error("Could not move to same index!");
}else if(ce<cd){cd--;
}qx.lang.Array.removeAt(parent.__dr,ce);
qx.lang.Array.insertAt(parent.__dr,this,cd);
return this;
},moveBefore:function(cY){var parent=this.__dt;
return this.moveTo(parent.__dr.indexOf(cY));
},moveAfter:function(cV){var parent=this.__dt;
return this.moveTo(parent.__dr.indexOf(cV)+1);
},free:function(){var parent=this.__dt;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dr){return;
}parent.__dx(this);
qx.lang.Array.remove(parent.__dr,this);
return this;
},getDomElement:function(){return this.__de||null;
},getNodeName:function(){return this.__cU;
},setNodeName:function(name){this.__cU=name;
},setRoot:function(eb){this.__df=eb;
},useMarkup:function(bI){if(this.__de){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bo,bi)){var bJ=document.createElement(bk);
}else{var bJ=qx.bom.Element.getHelperElement();
}bJ.innerHTML=bI;
this.useElement(bJ.firstChild);
return this.__de;
},useElement:function(bf){if(this.__de){throw new Error("Could not overwrite existing element!");
}this.__de=bf;
this.__de.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var J=this.getAttribute(bu);

if(J>=1){return true;
}var I=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(J>=0&&I[this.__cU]){return true;
}return false;
},setSelectable:qx.core.Variant.select(bo,{"webkit":function(cK){this.setAttribute(bn,cK?bl:bm);
this.setStyle(bA,cK?bt:bh);
},"gecko":function(j){this.setAttribute(bn,j?bl:bm);
this.setStyle(bs,j?bH:bz);
},"default":function(dn){this.setAttribute(bn,dn?bl:bm);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cU];
},include:function(){if(this.__dg){return;
}delete this.__dg;

if(this.__dt){this.__dt._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dg){return;
}this.__dg=false;

if(this.__dt){this.__dt._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dg===true;
},show:function(){if(this.__dh){return;
}
if(this.__de){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bp);
}if(this.__dt){this.__dt._scheduleChildrenUpdate();
}delete this.__dh;
},hide:function(){if(!this.__dh){return;
}
if(this.__de){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bp);
}this.__dh=false;
},isVisible:function(){return this.__dh===true;
},scrollChildIntoViewX:function(t,u,v){var w=this.__de;
var z=t.getDomElement();

if(v!==false&&w&&w.offsetWidth&&z&&z.offsetWidth){qx.bom.element.Scroll.intoViewX(z,w,u);
}else{this.__di={element:t,align:u};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bp);
}delete this.__dk;
},scrollChildIntoViewY:function(k,m,n){var o=this.__de;
var p=k.getDomElement();

if(n!==false&&o&&o.offsetWidth&&p&&p.offsetWidth){qx.bom.element.Scroll.intoViewY(p,o,m);
}else{this.__dj={element:k,align:m};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bp);
}delete this.__dl;
},scrollToX:function(x,cI){var cJ=this.__de;

if(cI!==true&&cJ&&cJ.offsetWidth){cJ.scrollLeft=x;
}else{this.__dk=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bp);
}delete this.__di;
},getScrollX:function(){var cH=this.__de;

if(cH){return cH.scrollLeft;
}return this.__dk||0;
},scrollToY:function(y,ca){var cb=this.__de;

if(ca!==true&&cb&&cb.offsetWidth){cb.scrollTop=y;
}else{this.__dl=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bp);
}delete this.__dj;
},getScrollY:function(){var cW=this.__de;

if(cW){return cW.scrollTop;
}return this.__dl||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(bg,this.__dA,this);
},enableScrolling:function(){this.removeListener(bg,this.__dA,this);
},__dz:null,__dA:function(e){if(!this.__dz){this.__dz=true;
this.__de.scrollTop=0;
this.__de.scrollLeft=0;
delete this.__dz;
}},getTextSelection:function(){var dr=this.__de;

if(dr){return qx.bom.Selection.get(dr);
}return null;
},getTextSelectionLength:function(){var de=this.__de;

if(de){return qx.bom.Selection.getLength(de);
}return null;
},getTextSelectionStart:function(){var dA=this.__de;

if(dA){return qx.bom.Selection.getStart(dA);
}return null;
},getTextSelectionEnd:function(){var dp=this.__de;

if(dp){return qx.bom.Selection.getEnd(dp);
}return null;
},setTextSelection:function(K,L){var M=this.__de;

if(M){qx.bom.Selection.set(M,K,L);
return;
}qx.html.Element.__cX[this.toHashCode()]={element:this,start:K,end:L};
qx.html.Element._scheduleFlush(bp);
},clearTextSelection:function(){var dB=this.__de;

if(dB){qx.bom.Selection.clear(dB);
}delete qx.html.Element.__cX[this.toHashCode()];
},__dB:function(dx,dy){var dz=qx.html.Element._actions;
dz.push({type:dx,element:this,args:dy||[]});
qx.html.Element._scheduleFlush(bp);
},focus:function(){this.__dB(bv);
},blur:function(){this.__dB(bD);
},activate:function(){this.__dB(bE);
},deactivate:function(){this.__dB(bC);
},capture:function(f){this.__dB(bB,[f!==false]);
},releaseCapture:function(){this.__dB(bw);
},setStyle:function(cf,cg,ch){if(!this.__cV){this.__cV={};
}
if(this.__cV[cf]==cg){return;
}
if(cg==null){delete this.__cV[cf];
}else{this.__cV[cf]=cg;
}if(this.__de){if(ch){qx.bom.element.Style.set(this.__de,cf,cg);
return this;
}if(!this.__dm){this.__dm={};
}this.__dm[cf]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bp);
}return this;
},setStyles:function(bK,bL){var bM=qx.bom.element.Style;

if(!this.__cV){this.__cV={};
}
if(this.__de){if(!this.__dm){this.__dm={};
}
for(var bO in bK){var bN=bK[bO];

if(this.__cV[bO]==bN){continue;
}
if(bN==null){delete this.__cV[bO];
}else{this.__cV[bO]=bN;
}if(bL){bM.set(this.__de,bO,bN);
continue;
}this.__dm[bO]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bp);
}else{for(var bO in bK){var bN=bK[bO];

if(this.__cV[bO]==bN){continue;
}
if(bN==null){delete this.__cV[bO];
}else{this.__cV[bO]=bN;
}}}return this;
},removeStyle:function(dC,dD){this.setStyle(dC,null,dD);
},getStyle:function(cc){return this.__cV?this.__cV[cc]:null;
},getAllStyles:function(){return this.__cV||null;
},setAttribute:function(dJ,dK,dL){if(!this.__cW){this.__cW={};
}
if(this.__cW[dJ]==dK){return;
}
if(dK==null){delete this.__cW[dJ];
}else{this.__cW[dJ]=dK;
}if(this.__de){if(dL){qx.bom.element.Attribute.set(this.__de,dJ,dK);
return this;
}if(!this.__dn){this.__dn={};
}this.__dn[dJ]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bp);
}return this;
},setAttributes:function(a,b){for(var c in a){this.setAttribute(c,a[c],b);
}return this;
},removeAttribute:function(bU,bV){this.setAttribute(bU,null,bV);
},getAttribute:function(ba){return this.__cW?this.__cW[ba]:null;
},_applyProperty:function(name,g){},_setProperty:function(bc,bd,be){if(!this.__dp){this.__dp={};
}
if(this.__dp[bc]==bd){return;
}
if(bd==null){delete this.__dp[bc];
}else{this.__dp[bc]=bd;
}if(this.__de){if(be){this._applyProperty(bc,bd);
return this;
}if(!this.__do){this.__do={};
}this.__do[bc]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bp);
}return this;
},_removeProperty:function(dH,dI){this._setProperty(dH,null,dI);
},_getProperty:function(da){var dc=this.__dp;

if(!dc){return null;
}var dd=dc[da];
return dd==null?null:dd;
},addListener:function(cP,cQ,self,cR){var cS;

if(this.$$disposed){return null;
}{};

if(this.__de){return qx.event.Registration.addListener(this.__de,cP,cQ,self,cR);
}
if(!this.__dq){this.__dq={};
}
if(cR==null){cR=false;
}var cT=qx.event.Manager.getNextUniqueId();
var cU=cP+(cR?bF:bx)+cT;
this.__dq[cU]={type:cP,listener:cQ,self:self,capture:cR,unique:cT};
return cU;
},removeListener:function(df,dg,self,dh){var di;

if(this.$$disposed){return null;
}{};

if(this.__de){qx.event.Registration.removeListener(this.__de,df,dg,self,dh);
}else{var dk=this.__dq;
var dj;

if(dh==null){dh=false;
}
for(var dl in dk){dj=dk[dl];
if(dj.listener===dg&&dj.self===self&&dj.capture===dh&&dj.type===df){delete dk[dl];
break;
}}}return this;
},removeListenerById:function(U){if(this.$$disposed){return null;
}
if(this.__de){qx.event.Registration.removeListenerById(this.__de,U);
}else{delete this.__dq[U];
}return this;
},hasListener:function(P,Q){if(this.$$disposed){return false;
}
if(this.__de){return qx.event.Registration.hasListener(this.__de,P,Q);
}var S=this.__dq;
var R;

if(Q==null){Q=false;
}
for(var T in S){R=S[T];
if(R.capture===Q&&R.type===P){return true;
}}return false;
}},defer:function(d){d.__dC=new qx.util.DeferredCall(d.flush,d);
},destruct:function(){var cO=this.__de;

if(cO){qx.event.Registration.getManager(cO).removeAllListeners(cO);
cO.$$element=bj;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dt;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bq);
this.__cW=this.__cV=this.__dq=this.__dp=this.__dn=this.__dm=this.__do=this.__de=this.__dt=this.__di=this.__dj=null;
}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__dD:false,__dE:{},__dF:0,MAX_RETRIES:10,scheduleFlush:function(h){var self=qx.ui.core.queue.Manager;
self.__dE[h]=true;

if(!self.__dD){self.__dI.schedule();
self.__dD=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__dG){return;
}self.__dG=true;
self.__dI.cancel();
var c=self.__dE;
self.__dH(function(){while(c.visibility||c.widget||c.appearance||c.layout||c.element){if(c.widget){delete c.widget;
qx.ui.core.queue.Widget.flush();
}
if(c.visibility){delete c.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(c.appearance){delete c.appearance;
qx.ui.core.queue.Appearance.flush();
}if(c.widget||c.visibility||c.appearance){continue;
}
if(c.layout){delete c.layout;
qx.ui.core.queue.Layout.flush();
}if(c.widget||c.visibility||c.appearance||c.layout){continue;
}
if(c.element){delete c.element;
qx.html.Element.flush();
}}},function(){self.__dD=false;
});
self.__dH(function(){if(c.dispose){delete c.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__dG=false;
});
self.__dF=0;
},__dH:function(d,f){var self=qx.ui.core.queue.Manager;

try{d();
}catch(e){{};
self.__dD=false;
self.__dG=false;
self.__dF+=1;

if(self.__dF<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__dF-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{f();
}}},defer:function(g){g.__dI=new qx.util.DeferredCall(g.flush);
qx.html.Element._scheduleFlush=g.scheduleFlush;
qx.event.Registration.addListener(window,a,g.flush);
}});
})();
(function(){var t="abstract",s="qx.event.dispatch.AbstractBubbling";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:t,construct:function(u){this._manager=u;
},members:{_getParent:function(v){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
},dispatchEvent:function(a,event,b){var parent=a;
var m=this._manager;
var h,q;
var f;
var l,o;
var n;
var p=[];
h=m.getListeners(a,b,true);
q=m.getListeners(a,b,false);

if(h){p.push(h);
}
if(q){p.push(q);
}var parent=this._getParent(a);
var d=[];
var c=[];
var e=[];
var k=[];
while(parent!=null){h=m.getListeners(parent,b,true);

if(h){e.push(h);
k.push(parent);
}q=m.getListeners(parent,b,false);

if(q){d.push(q);
c.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=e.length-1;i>=0;i--){n=k[i];
event.setCurrentTarget(n);
f=e[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(a);

for(var i=0,r=p.length;i<r;i++){f=p[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||a;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,r=d.length;i<r;i++){n=c[i];
event.setCurrentTarget(n);
f=d[i];

for(var j=0,g=f.length;j<g;j++){l=f[j];
o=l.context||n;
l.handler.call(o,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var z="keydown",y="qx.client",x="keypress",w="NumLock",v="keyup",u="Enter",t="0",s="9",r="-",q="PageUp",bH="+",bG="PrintScreen",bF="gecko",bE="A",bD="Z",bC="Left",bB="F5",bA="Down",bz="Up",by="F11",G="F6",H="useraction",E="F3",F="keyinput",C="Insert",D="F8",A="End",B="/",O="Delete",P="*",bc="cmd",X="F1",bk="F4",bf="Home",bu="F2",bp="F12",T="PageDown",bx="F7",bw="Win",bv="F9",S="F10",V="Right",W="text",ba="Escape",bd="webkit",bg="5",bm="3",br="Meta",I="7",J="CapsLock",U="input",bj="Control",bi="Space",bh="Tab",bo="Shift",bn="Pause",be="Unidentified",bl="qx.event.handler.Keyboard",n="mshtml|webkit",bq="6",K="off",L="Apps",Y="4",o="Alt",p="mshtml",R="2",M="Scroll",N="1",Q="8",bb="autoComplete",bt=",",bs="Backspace";
qx.Class.define(bl,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cn){qx.core.Object.call(this);
this.__dM=cn;
this.__dN=cn.getWindow();
if(qx.core.Variant.isSet(y,bF)){this.__dO=this.__dN;
}else{this.__dO=this.__dN.document.documentElement;
}this.__dP={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bJ){if(this._identifierToKeyCodeMap[bJ]){return true;
}
if(bJ.length!=1){return false;
}
if(bJ>=t&&bJ<=s){return true;
}
if(bJ>=bE&&bJ<=bD){return true;
}
switch(bJ){case bH:case r:case P:case B:return true;
default:return false;
}}},members:{__dQ:null,__dM:null,__dN:null,__dO:null,__dP:null,__dR:null,__dS:null,__dT:null,canHandleEvent:function(bT,bU){},registerEvent:function(cx,cy,cz){},unregisterEvent:function(cJ,cK,cL){},_fireInputEvent:function(ck,cl){var cm=this.__dU();
if(cm&&cm.offsetWidth!=0){var event=qx.event.Registration.createEvent(F,qx.event.type.KeyInput,[ck,cm,cl]);
this.__dM.dispatchEvent(cm,event);
}if(this.__dN){qx.event.Registration.fireEvent(this.__dN,H,qx.event.type.Data,[F]);
}},_fireSequenceEvent:function(bO,bP,bQ){var bR=this.__dU();
var bS=bO.keyCode;
var event=qx.event.Registration.createEvent(bP,qx.event.type.KeySequence,[bO,bR,bQ]);
this.__dM.dispatchEvent(bR,event);
if(qx.core.Variant.isSet(y,n)){if(bP==z&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bS)&&!this._emulateKeyPress[bS]){this._fireSequenceEvent(bO,x,bQ);
}}}if(this.__dN){qx.event.Registration.fireEvent(this.__dN,H,qx.event.type.Data,[bP]);
}},__dU:function(){var cA=this.__dM.getHandler(qx.event.handler.Focus);
var cB=cA.getActive();
if(!cB||cB.offsetWidth==0){cB=cA.getFocus();
}if(!cB||cB.offsetWidth==0){cB=this.__dM.getWindow().document.body;
}return cB;
},_initKeyObserver:function(){this.__dQ=qx.lang.Function.listener(this.__dV,this);
this.__dT=qx.lang.Function.listener(this.__dX,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dO,v,this.__dQ);
Event.addNativeListener(this.__dO,z,this.__dQ);
Event.addNativeListener(this.__dO,x,this.__dT);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dO,v,this.__dQ);
Event.removeNativeListener(this.__dO,z,this.__dQ);
Event.removeNativeListener(this.__dO,x,this.__dT);

for(var cD in (this.__dS||{})){var cC=this.__dS[cD];
Event.removeNativeListener(cC.target,x,cC.callback);
}delete (this.__dS);
},__dV:qx.event.GlobalError.observeMethod(qx.core.Variant.select(y,{"mshtml":function(ct){ct=window.event||ct;
var cw=ct.keyCode;
var cu=0;
var cv=ct.type;
if(!(this.__dP[cw]==z&&cv==z)){this._idealKeyHandler(cw,cu,cv,ct);
}if(cv==z){if(this._isNonPrintableKeyCode(cw)||this._emulateKeyPress[cw]){this._idealKeyHandler(cw,cu,x,ct);
}}this.__dP[cw]=cv;
},"gecko":function(i){var m=this._keyCodeFix[i.keyCode]||i.keyCode;
var k=0;
var l=i.type;
if(qx.bom.client.Platform.WIN){var j=m?this._keyCodeToIdentifier(m):this._charCodeToIdentifier(k);

if(!(this.__dP[j]==z&&l==z)){this._idealKeyHandler(m,k,l,i);
}this.__dP[j]=l;
}else{this._idealKeyHandler(m,k,l,i);
}this.__dW(i.target,l,m);
},"webkit":function(b){var e=0;
var c=0;
var d=b.type;
if(qx.bom.client.Engine.VERSION<525.13){if(d==v||d==z){e=this._charCode2KeyCode[b.charCode]||b.keyCode;
}else{if(this._charCode2KeyCode[b.charCode]){e=this._charCode2KeyCode[b.charCode];
}else{c=b.charCode;
}}this._idealKeyHandler(e,c,d,b);
}else{e=b.keyCode;
this._idealKeyHandler(e,c,d,b);
if(d==z){if(this._isNonPrintableKeyCode(e)||this._emulateKeyPress[e]){this._idealKeyHandler(e,c,x,b);
}}this.__dP[e]=d;
}},"opera":function(cI){this.__dR=cI.keyCode;
this._idealKeyHandler(cI.keyCode,0,cI.type,cI);
}})),__dW:qx.core.Variant.select(y,{"gecko":function(co,cp,cq){if(cp===z&&(cq==33||cq==34||cq==38||cq==40)&&co.type==W&&co.tagName.toLowerCase()===U&&co.getAttribute(bb)!==K){if(!this.__dS){this.__dS={};
}var cs=qx.core.ObjectRegistry.toHashCode(co);

if(this.__dS[cs]){return;
}var self=this;
this.__dS[cs]={target:co,callback:function(cd){qx.bom.Event.stopPropagation(cd);
self.__dX(cd);
}};
var cr=qx.event.GlobalError.observeMethod(this.__dS[cs].callback);
qx.bom.Event.addNativeListener(co,x,cr);
}},"default":null}),__dX:qx.event.GlobalError.observeMethod(qx.core.Variant.select(y,{"mshtml":function(cH){cH=window.event||cH;

if(this._charCode2KeyCode[cH.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cH.keyCode],0,cH.type,cH);
}else{this._idealKeyHandler(0,cH.keyCode,cH.type,cH);
}},"gecko":function(bK){var bN=this._keyCodeFix[bK.keyCode]||bK.keyCode;
var bL=bK.charCode;
var bM=bK.type;
this._idealKeyHandler(bN,bL,bM,bK);
},"webkit":function(bV){if(qx.bom.client.Engine.VERSION<525.13){var bY=0;
var bW=0;
var bX=bV.type;

if(bX==v||bX==z){bY=this._charCode2KeyCode[bV.charCode]||bV.keyCode;
}else{if(this._charCode2KeyCode[bV.charCode]){bY=this._charCode2KeyCode[bV.charCode];
}else{bW=bV.charCode;
}}this._idealKeyHandler(bY,bW,bX,bV);
}else{if(this._charCode2KeyCode[bV.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bV.keyCode],0,bV.type,bV);
}else{this._idealKeyHandler(0,bV.keyCode,bV.type,bV);
}}},"opera":function(f){var h=f.keyCode;
var g=f.type;
if(h!=this.__dR){this._idealKeyHandler(0,this.__dR,g,f);
}else{if(this._keyCodeToIdentifierMap[f.keyCode]){this._idealKeyHandler(f.keyCode,0,f.type,f);
}else{this._idealKeyHandler(0,f.keyCode,f.type,f);
}}}})),_idealKeyHandler:function(cf,cg,ch,ci){var cj;
if(cf||(!cf&&!cg)){cj=this._keyCodeToIdentifier(cf);
this._fireSequenceEvent(ci,ch,cj);
}else{cj=this._charCodeToIdentifier(cg);
this._fireSequenceEvent(ci,x,cj);
this._fireInputEvent(ci,cg);
}},_specialCharCodeMap:{8:bs,9:bh,13:u,27:ba,32:bi},_emulateKeyPress:qx.core.Variant.select(y,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bo,17:bj,18:o,20:J,224:br,37:bC,38:bz,39:V,40:bA,33:q,34:T,35:A,36:bf,45:C,46:O,112:X,113:bu,114:E,115:bk,116:bB,117:G,118:bx,119:D,120:bv,121:S,122:by,123:bp,144:w,44:bG,145:M,19:bn,91:qx.bom.client.Platform.MAC?bc:bw,92:bw,93:qx.bom.client.Platform.MAC?bc:L},_numpadToCharCode:{96:t.charCodeAt(0),97:N.charCodeAt(0),98:R.charCodeAt(0),99:bm.charCodeAt(0),100:Y.charCodeAt(0),101:bg.charCodeAt(0),102:bq.charCodeAt(0),103:I.charCodeAt(0),104:Q.charCodeAt(0),105:s.charCodeAt(0),106:P.charCodeAt(0),107:bH.charCodeAt(0),109:r.charCodeAt(0),110:bt.charCodeAt(0),111:B.charCodeAt(0)},_charCodeA:bE.charCodeAt(0),_charCodeZ:bD.charCodeAt(0),_charCode0:t.charCodeAt(0),_charCode9:s.charCodeAt(0),_isNonPrintableKeyCode:function(ce){return this._keyCodeToIdentifierMap[ce]?true:false;
},_isIdentifiableKeyCode:function(a){if(a>=this._charCodeA&&a<=this._charCodeZ){return true;
}if(a>=this._charCode0&&a<=this._charCode9){return true;
}if(this._specialCharCodeMap[a]){return true;
}if(this._numpadToCharCode[a]){return true;
}if(this._isNonPrintableKeyCode(a)){return true;
}return false;
},_keyCodeToIdentifier:function(cb){if(this._isIdentifiableKeyCode(cb)){var cc=this._numpadToCharCode[cb];

if(cc){return String.fromCharCode(cc);
}return (this._keyCodeToIdentifierMap[cb]||this._specialCharCodeMap[cb]||String.fromCharCode(cb));
}else{return be;
}},_charCodeToIdentifier:function(ca){return this._specialCharCodeMap[ca]||String.fromCharCode(ca).toUpperCase();
},_identifierToKeyCode:function(bI){return qx.event.handler.Keyboard._identifierToKeyCodeMap[bI]||bI.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__dR=this.__dM=this.__dN=this.__dO=this.__dP=null;
},defer:function(cE,cF){qx.event.Registration.addHandler(cE);
if(!cE._identifierToKeyCodeMap){cE._identifierToKeyCodeMap={};

for(var cG in cF._keyCodeToIdentifierMap){cE._identifierToKeyCodeMap[cF._keyCodeToIdentifierMap[cG]]=parseInt(cG,10);
}
for(var cG in cF._specialCharCodeMap){cE._identifierToKeyCodeMap[cF._specialCharCodeMap[cG]]=parseInt(cG,10);
}}
if(qx.core.Variant.isSet(y,p)){cF._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(y,bF)){cF._keyCodeFix={12:cF._identifierToKeyCode(w)};
}else if(qx.core.Variant.isSet(y,bd)){if(qx.bom.client.Engine.VERSION<525.13){cF._charCode2KeyCode={63289:cF._identifierToKeyCode(w),63276:cF._identifierToKeyCode(q),63277:cF._identifierToKeyCode(T),63275:cF._identifierToKeyCode(A),63273:cF._identifierToKeyCode(bf),63234:cF._identifierToKeyCode(bC),63232:cF._identifierToKeyCode(bz),63235:cF._identifierToKeyCode(V),63233:cF._identifierToKeyCode(bA),63272:cF._identifierToKeyCode(O),63302:cF._identifierToKeyCode(C),63236:cF._identifierToKeyCode(X),63237:cF._identifierToKeyCode(bu),63238:cF._identifierToKeyCode(E),63239:cF._identifierToKeyCode(bk),63240:cF._identifierToKeyCode(bB),63241:cF._identifierToKeyCode(G),63242:cF._identifierToKeyCode(bx),63243:cF._identifierToKeyCode(D),63244:cF._identifierToKeyCode(bv),63245:cF._identifierToKeyCode(S),63246:cF._identifierToKeyCode(by),63247:cF._identifierToKeyCode(bp),63248:cF._identifierToKeyCode(bG),3:cF._identifierToKeyCode(u),12:cF._identifierToKeyCode(w),13:cF._identifierToKeyCode(u)};
}else{cF._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var P="qx.client",O="mouseup",N="click",M="mousedown",L="contextmenu",K="mousewheel",J="dblclick",I="mshtml",H="mouseover",G="mouseout",B="DOMMouseScroll",F="mousemove",E="on",A="mshtml|webkit|opera",z="useraction",D="gecko|webkit",C="qx.event.handler.Mouse";
qx.Class.define(C,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){qx.core.Object.call(this);
this.__eb=y;
this.__ec=y.getWindow();
this.__ed=this.__ec.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ee:null,__ef:null,__eg:null,__eh:null,__ei:null,__eb:null,__ec:null,__ed:null,canHandleEvent:function(l,m){},registerEvent:qx.bom.client.System.IPHONE?
function(Q,R,S){Q[E+R]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(v,w,x){v[E+w]=undefined;
}:qx.lang.Function.returnNull,__ej:function(a,b,c){if(!c){c=a.target||a.srcElement;
}if(c&&c.nodeType){qx.event.Registration.fireEvent(c,b||a.type,b==K?qx.event.type.MouseWheel:qx.event.type.Mouse,[a,c,null,true,true]);
}qx.event.Registration.fireEvent(this.__ec,z,qx.event.type.Data,[b||a.type]);
},_initButtonObserver:function(){this.__ee=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ed,M,this.__ee);
Event.addNativeListener(this.__ed,O,this.__ee);
Event.addNativeListener(this.__ed,N,this.__ee);
Event.addNativeListener(this.__ed,J,this.__ee);
Event.addNativeListener(this.__ed,L,this.__ee);
},_initMoveObserver:function(){this.__ef=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ed,F,this.__ef);
Event.addNativeListener(this.__ed,H,this.__ef);
Event.addNativeListener(this.__ed,G,this.__ef);
},_initWheelObserver:function(){this.__eg=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var T=qx.core.Variant.isSet(P,A)?K:B;
var U=qx.core.Variant.isSet(P,I)?this.__ed:this.__ec;
Event.addNativeListener(U,T,this.__eg);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ed,M,this.__ee);
Event.removeNativeListener(this.__ed,O,this.__ee);
Event.removeNativeListener(this.__ed,N,this.__ee);
Event.removeNativeListener(this.__ed,J,this.__ee);
Event.removeNativeListener(this.__ed,L,this.__ee);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ed,F,this.__ef);
Event.removeNativeListener(this.__ed,H,this.__ef);
Event.removeNativeListener(this.__ed,G,this.__ef);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var V=qx.core.Variant.isSet(P,A)?K:B;
var W=qx.core.Variant.isSet(P,I)?this.__ed:this.__ec;
Event.removeNativeListener(W,V,this.__eg);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(r){this.__ej(r);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(e){var f=e.type;
var g=e.target||e.srcElement;
if(qx.core.Variant.isSet(P,D)){if(g&&g.nodeType==3){g=g.parentNode;
}}
if(this.__ek){this.__ek(e,f,g);
}
if(this.__em){this.__em(e,f,g);
}this.__ej(e,f,g);

if(this.__el){this.__el(e,f,g);
}
if(this.__en){this.__en(e,f,g);
}this.__eh=f;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(h){this.__ej(h,K);
}),__ek:qx.core.Variant.select(P,{"webkit":function(X,Y,ba){if(qx.bom.client.Engine.VERSION<530){if(Y==L){this.__ej(X,O,ba);
}}},"default":null}),__el:qx.core.Variant.select(P,{"opera":function(s,t,u){if(t==O&&s.button==2){this.__ej(s,L,u);
}},"default":null}),__em:qx.core.Variant.select(P,{"mshtml":function(i,j,k){if(j==O&&this.__eh==N){this.__ej(i,M,k);
}else if(j==J){this.__ej(i,N,k);
}},"default":null}),__en:qx.core.Variant.select(P,{"mshtml":null,"default":function(n,o,p){switch(o){case M:this.__ei=p;
break;
case O:if(p!==this.__ei){var q=qx.dom.Hierarchy.getCommonParent(p,this.__ei);
this.__ej(n,N,q);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eb=this.__ec=this.__ed=this.__ei=null;
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(h,i,j){},unregisterEvent:function(e,f,g){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var l="alias",k="copy",j="blur",i="mouseout",h="keydown",g="Ctrl",f="Shift",d="mousemove",c="move",b="mouseover",B="Alt",A="keyup",z="mouseup",y="dragend",x="on",w="mousedown",v="qxDraggable",u="drag",t="drop",s="qxDroppable",q="qx.event.handler.DragDrop",r="droprequest",o="dragstart",p="dragchange",m="dragleave",n="dragover";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bh){qx.core.Object.call(this);
this.__eo=bh;
this.__ep=bh.getWindow().document.documentElement;
this.__eo.addListener(this.__ep,w,this._onMouseDown,this);
this.__eB();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eo:null,__ep:null,__eq:null,__er:null,__es:null,__et:null,__eu:null,__ev:null,__ew:null,__ex:null,__ey:false,__ez:0,__eA:0,canHandleEvent:function(Y,ba){},registerEvent:function(bk,bl,bm){},unregisterEvent:function(T,U,V){},addType:function(F){this.__es[F]=true;
},addAction:function(a){this.__et[a]=true;
},supportsType:function(bc){return !!this.__es[bc];
},supportsAction:function(D){return !!this.__et[D];
},getData:function(Q){if(!this.__eI||!this.__eq){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__es[Q]){throw new Error("Unsupported data type: "+Q+"!");
}
if(!this.__ev[Q]){this.__ew=Q;
this.__eD(r,this.__er,this.__eq,false);
}
if(!this.__ev[Q]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__ev[Q]||null;
},getCurrentAction:function(){return this.__ex;
},addData:function(bi,bj){this.__ev[bi]=bj;
},getCurrentType:function(){return this.__ew;
},isSessionActive:function(){return this.__ey;
},__eB:function(){this.__es={};
this.__et={};
this.__eu={};
this.__ev={};
},__eC:function(){if(this.__er==null){return;
}var I=this.__et;
var G=this.__eu;
var H=null;

if(this.__eI){if(G.Shift&&G.Ctrl&&I.alias){H=l;
}else if(G.Shift&&G.Alt&&I.copy){H=k;
}else if(G.Shift&&I.move){H=c;
}else if(G.Alt&&I.alias){H=l;
}else if(G.Ctrl&&I.copy){H=k;
}else if(I.move){H=c;
}else if(I.copy){H=k;
}else if(I.alias){H=l;
}}
if(H!=this.__ex){this.__ex=H;
this.__eD(p,this.__er,this.__eq,false);
}},__eD:function(J,K,L,M,N){var P=qx.event.Registration;
var O=P.createEvent(J,qx.event.type.Drag,[M,N]);

if(K!==L){O.setRelatedTarget(L);
}return P.dispatchEvent(K,O);
},__eE:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(v)==x){return bf;
}bf=bf.parentNode;
}return null;
},__eF:function(C){while(C&&C.nodeType==1){if(C.getAttribute(s)==x){return C;
}C=C.parentNode;
}return null;
},__eG:function(){this.__er=null;
this.__eo.removeListener(this.__ep,d,this._onMouseMove,this,true);
this.__eo.removeListener(this.__ep,z,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,j,this._onWindowBlur,this);
this.__eB();
},__eH:function(){if(this.__ey){this.__eo.removeListener(this.__ep,b,this._onMouseOver,this,true);
this.__eo.removeListener(this.__ep,i,this._onMouseOut,this,true);
this.__eo.removeListener(this.__ep,h,this._onKeyDown,this,true);
this.__eo.removeListener(this.__ep,A,this._onKeyUp,this,true);
this.__eD(y,this.__er,this.__eq,false);
this.__ey=false;
}this.__eI=false;
this.__eq=null;
this.__eG();
},__eI:false,_onWindowBlur:function(e){this.__eH();
},_onKeyDown:function(e){var E=e.getKeyIdentifier();

switch(E){case B:case g:case f:if(!this.__eu[E]){this.__eu[E]=true;
this.__eC();
}}},_onKeyUp:function(e){var be=e.getKeyIdentifier();

switch(be){case B:case g:case f:if(this.__eu[be]){this.__eu[be]=false;
this.__eC();
}}},_onMouseDown:function(e){if(this.__ey){return;
}var bg=this.__eE(e.getTarget());

if(bg){this.__ez=e.getDocumentLeft();
this.__eA=e.getDocumentTop();
this.__er=bg;
this.__eo.addListener(this.__ep,d,this._onMouseMove,this,true);
this.__eo.addListener(this.__ep,z,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,j,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__eI){this.__eD(t,this.__eq,this.__er,false,e);
}if(this.__ey){e.stopPropagation();
}this.__eH();
},_onMouseMove:function(e){if(this.__ey){if(!this.__eD(u,this.__er,this.__eq,true,e)){this.__eH();
}}else{if(Math.abs(e.getDocumentLeft()-this.__ez)>3||Math.abs(e.getDocumentTop()-this.__eA)>3){if(this.__eD(o,this.__er,this.__eq,true,e)){this.__ey=true;
this.__eo.addListener(this.__ep,b,this._onMouseOver,this,true);
this.__eo.addListener(this.__ep,i,this._onMouseOut,this,true);
this.__eo.addListener(this.__ep,h,this._onKeyDown,this,true);
this.__eo.addListener(this.__ep,A,this._onKeyUp,this,true);
var bb=this.__eu;
bb.Ctrl=e.isCtrlPressed();
bb.Shift=e.isShiftPressed();
bb.Alt=e.isAltPressed();
this.__eC();
}else{this.__eD(y,this.__er,this.__eq,false);
this.__eG();
}}}},_onMouseOver:function(e){var W=e.getTarget();
var X=this.__eF(W);

if(X&&X!=this.__eq){this.__eI=this.__eD(n,X,this.__er,true,e);
this.__eq=X;
this.__eC();
}},_onMouseOut:function(e){var S=this.__eF(e.getTarget());
var R=this.__eF(e.getRelatedTarget());

if(S&&S!==R&&S==this.__eq){this.__eD(m,this.__eq,R,false,e);
this.__eq=null;
this.__eI=false;
qx.event.Timer.once(this.__eC,this,0);
}}},destruct:function(){this.__er=this.__eq=this.__eo=this.__ep=this.__es=this.__et=this.__eu=this.__ev=null;
},defer:function(bd){qx.event.Registration.addHandler(bd);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);
this._manager=h;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(n,o,p){var s=qx.core.ObjectRegistry.toHashCode(n);
var q=s+b+o;
var r=qx.lang.Function.listener(this._onNative,this,q);
qx.bom.Event.addNativeListener(n,o,r);
this._registeredEvents[q]={element:n,type:o,listener:r};
},unregisterEvent:function(t,u,v){var y=this._registeredEvents;

if(!y){return;
}var z=qx.core.ObjectRegistry.toHashCode(t);
var w=z+b+u;
var x=this._registeredEvents[w];

if(x){qx.bom.Event.removeNativeListener(t,u,x.listener);
}delete this._registeredEvents[w];
},_onNative:qx.event.GlobalError.observeMethod(function(c,d){var f=this._registeredEvents;

if(!f){return;
}var e=f[d];
qx.event.Registration.fireNonBubblingEvent(e.element,e.type,qx.event.type.Native,[c]);
})},destruct:function(){var k;
var l=this._registeredEvents;

for(var m in l){k=l[m];
qx.bom.Event.removeNativeListener(k.element,k.type,k.listener);
}this._manager=this._registeredEvents=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var h="qx.event.handler.Appear",g="disappear",f="appear";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){qx.core.Object.call(this);
this.__eJ=i;
this.__eK={};
qx.event.handler.Appear.__eL[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__eL:{},refresh:function(){var l=this.__eL;

for(var m in l){l[m].refresh();
}}},members:{__eJ:null,__eK:null,canHandleEvent:function(j,k){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__eK;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(a,b,c){var d=qx.core.ObjectRegistry.toHashCode(a)+b;
var e=this.__eK;

if(!e){return;
}
if(e[d]){delete e[d];
}},refresh:function(){var r=this.__eK;
var s;

for(var q in r){s=r[q];
var o=s.offsetWidth>0;

if((!!s.$$displayed)!==o){s.$$displayed=o;
var p=qx.event.Registration.createEvent(o?f:g);
this.__eJ.dispatchEvent(s,p);
}}}},destruct:function(){this.__eJ=this.__eK=null;
delete qx.event.handler.Appear.__eL[this.$$hash];
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var t="mshtml",s="",r="qx.client",q=" ",p=">",o="<",n="='",m="none",k="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",h="qx.bom.Element",d="' ",g="div",f="></";
qx.Class.define(h,{statics:{__eM:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__eN:{},__eO:{},allowCreationWithMarkup:function(K){if(!K){K=window;
}var L=K.location.href;

if(qx.bom.Element.__eO[L]==undefined){try{K.document.createElement(k);
qx.bom.Element.__eO[L]=true;
}catch(e){qx.bom.Element.__eO[L]=false;
}}return qx.bom.Element.__eO[L];
},getHelperElement:function(B){if(!B){B=window;
}var D=B.location.href;

if(!qx.bom.Element.__eN[D]){var C=qx.bom.Element.__eN[D]=B.document.createElement(g);
if(qx.bom.client.Engine.WEBKIT){C.style.display=m;
B.document.body.appendChild(C);
}}return qx.bom.Element.__eN[D];
},create:function(name,bb,bc){if(!bc){bc=window;
}
if(!name){throw new Error("The tag name is missing!");
}var be=this.__eM;
var bd=s;

for(var bg in bb){if(be[bg]){bd+=bg+n+bb[bg]+d;
}}var bh;
if(bd!=s){if(qx.bom.Element.allowCreationWithMarkup(bc)){bh=bc.document.createElement(o+name+q+bd+p);
}else{var bf=qx.bom.Element.getHelperElement(bc);
bf.innerHTML=o+name+q+bd+f+name+p;
bh=bf.firstChild;
}}else{bh=bc.document.createElement(name);
}
for(var bg in bb){if(!be[bg]){qx.bom.element.Attribute.set(bh,bg,bb[bg]);
}}return bh;
},empty:function(v){return v.innerHTML=s;
},addListener:function(x,y,z,self,A){return qx.event.Registration.addListener(x,y,z,self,A);
},removeListener:function(E,F,G,self,H){return qx.event.Registration.removeListener(E,F,G,self,H);
},removeListenerById:function(M,N){return qx.event.Registration.removeListenerById(M,N);
},hasListener:function(a,b,c){return qx.event.Registration.hasListener(a,b,c);
},focus:function(u){qx.event.Registration.getManager(u).getHandler(qx.event.handler.Focus).focus(u);
},blur:function(w){qx.event.Registration.getManager(w).getHandler(qx.event.handler.Focus).blur(w);
},activate:function(bi){qx.event.Registration.getManager(bi).getHandler(qx.event.handler.Focus).activate(bi);
},deactivate:function(J){qx.event.Registration.getManager(J).getHandler(qx.event.handler.Focus).deactivate(J);
},capture:function(bj,bk){qx.event.Registration.getManager(bj).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(bj,bk);
},releaseCapture:function(I){qx.event.Registration.getManager(I).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(I);
},clone:function(O,P){var S;

if(P||(qx.core.Variant.isSet(r,t)&&!qx.xml.Document.isXmlDocument(O))){var W=qx.event.Registration.getManager(O);
var Q=qx.dom.Hierarchy.getDescendants(O);
Q.push(O);
}if(qx.core.Variant.isSet(r,t)){for(var i=0,l=Q.length;i<l;i++){W.toggleAttachedEvents(Q[i],false);
}}var S=O.cloneNode(true);
if(qx.core.Variant.isSet(r,t)){for(var i=0,l=Q.length;i<l;i++){W.toggleAttachedEvents(Q[i],true);
}}if(P===true){var ba=qx.dom.Hierarchy.getDescendants(S);
ba.push(S);
var R,U,Y,T;

for(var i=0,X=Q.length;i<X;i++){Y=Q[i];
R=W.serializeListeners(Y);

if(R.length>0){U=ba[i];

for(var j=0,V=R.length;j<V;j++){T=R[j];
W.addListener(U,T.type,T.handler,T.self,T.capture);
}}}}return S;
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){qx.event.type.Dom.prototype.init.call(this,d,e,null,true,true);
this._charCode=f;
return this;
},clone:function(b){var c=qx.event.type.Dom.prototype.clone.call(this,b);
c._charCode=this._charCode;
return c;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){qx.event.type.Dom.prototype.init.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=qx.event.type.Dom.prototype.clone.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var bb="qx.client",ba="blur",Y="focus",X="mousedown",W="on",V="mouseup",U="DOMFocusOut",T="DOMFocusIn",S="selectstart",R="onmousedown",bv="onfocusout",bu="onfocusin",bt="onmouseup",bs="onselectstart",br="draggesture",bq="qx.event.handler.Focus",bp="_applyFocus",bo="deactivate",bn="textarea",bm="_applyActive",bi="input",bj="focusin",bg="qxSelectable",bh="tabIndex",be="off",bf="activate",bc="mshtml",bd="focusout",bk="qxKeepFocus",bl="qxKeepActive";
qx.Class.define(bq,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(Q){qx.core.Object.call(this);
this._manager=Q;
this._window=Q.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bm,nullable:true},focus:{apply:bp,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eP:null,__eQ:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,__eW:null,__eX:null,__eY:null,canHandleEvent:function(a,b){},registerEvent:function(n,o,p){},unregisterEvent:function(bK,bL,bM){},focus:function(s){if(qx.core.Variant.isSet(bb,bc)){window.setTimeout(function(){try{s.focus();
}catch(i){}},0);
}else{try{s.focus();
}catch(d){}}this.setFocus(s);
this.setActive(s);
},activate:function(f){this.setActive(f);
},blur:function(C){try{C.blur();
}catch(y){}
if(this.getActive()===C){this.resetActive();
}
if(this.getFocus()===C){this.resetFocus();
}},deactivate:function(P){if(this.getActive()===P){this.resetActive();
}},tryActivate:function(l){var m=this.__fo(l);

if(m){this.setActive(m);
}},__fa:function(bD,bE,bF,bG){var bI=qx.event.Registration;
var bH=bI.createEvent(bF,qx.event.type.Focus,[bD,bE,bG]);
bI.dispatchEvent(bD,bH);
},_windowFocused:true,__fb:function(){if(this._windowFocused){this._windowFocused=false;
this.__fa(this._window,null,ba,false);
}},__fc:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fa(this._window,null,Y,false);
}},_initObserver:qx.core.Variant.select(bb,{"gecko":function(){this.__eP=qx.lang.Function.listener(this.__fi,this);
this.__eQ=qx.lang.Function.listener(this.__fj,this);
this.__eR=qx.lang.Function.listener(this.__fh,this);
this.__eS=qx.lang.Function.listener(this.__fg,this);
this.__eT=qx.lang.Function.listener(this.__fd,this);
this._document.addEventListener(X,this.__eP,true);
this._document.addEventListener(V,this.__eQ,true);
this._window.addEventListener(Y,this.__eR,true);
this._window.addEventListener(ba,this.__eS,true);
this._window.addEventListener(br,this.__eT,true);
},"mshtml":function(){this.__eP=qx.lang.Function.listener(this.__fi,this);
this.__eQ=qx.lang.Function.listener(this.__fj,this);
this.__eV=qx.lang.Function.listener(this.__fe,this);
this.__eW=qx.lang.Function.listener(this.__ff,this);
this.__eU=qx.lang.Function.listener(this.__fl,this);
this._document.attachEvent(R,this.__eP);
this._document.attachEvent(bt,this.__eQ);
this._document.attachEvent(bu,this.__eV);
this._document.attachEvent(bv,this.__eW);
this._document.attachEvent(bs,this.__eU);
},"webkit":function(){this.__eP=qx.lang.Function.listener(this.__fi,this);
this.__eQ=qx.lang.Function.listener(this.__fj,this);
this.__eW=qx.lang.Function.listener(this.__ff,this);
this.__eR=qx.lang.Function.listener(this.__fh,this);
this.__eS=qx.lang.Function.listener(this.__fg,this);
this.__eU=qx.lang.Function.listener(this.__fl,this);
this._document.addEventListener(X,this.__eP,true);
this._document.addEventListener(V,this.__eQ,true);
this._document.addEventListener(S,this.__eU,false);
this._window.addEventListener(U,this.__eW,true);
this._window.addEventListener(Y,this.__eR,true);
this._window.addEventListener(ba,this.__eS,true);
},"opera":function(){this.__eP=qx.lang.Function.listener(this.__fi,this);
this.__eQ=qx.lang.Function.listener(this.__fj,this);
this.__eV=qx.lang.Function.listener(this.__fe,this);
this.__eW=qx.lang.Function.listener(this.__ff,this);
this._document.addEventListener(X,this.__eP,true);
this._document.addEventListener(V,this.__eQ,true);
this._window.addEventListener(T,this.__eV,true);
this._window.addEventListener(U,this.__eW,true);
}}),_stopObserver:qx.core.Variant.select(bb,{"gecko":function(){this._document.removeEventListener(X,this.__eP,true);
this._document.removeEventListener(V,this.__eQ,true);
this._window.removeEventListener(Y,this.__eR,true);
this._window.removeEventListener(ba,this.__eS,true);
this._window.removeEventListener(br,this.__eT,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,R,this.__eP);
qx.bom.Event.removeNativeListener(this._document,bt,this.__eQ);
qx.bom.Event.removeNativeListener(this._document,bu,this.__eV);
qx.bom.Event.removeNativeListener(this._document,bv,this.__eW);
qx.bom.Event.removeNativeListener(this._document,bs,this.__eU);
},"webkit":function(){this._document.removeEventListener(X,this.__eP,true);
this._document.removeEventListener(S,this.__eU,false);
this._window.removeEventListener(T,this.__eV,true);
this._window.removeEventListener(U,this.__eW,true);
this._window.removeEventListener(Y,this.__eR,true);
this._window.removeEventListener(ba,this.__eS,true);
},"opera":function(){this._document.removeEventListener(X,this.__eP,true);
this._window.removeEventListener(T,this.__eV,true);
this._window.removeEventListener(U,this.__eW,true);
this._window.removeEventListener(Y,this.__eR,true);
this._window.removeEventListener(ba,this.__eS,true);
}}),__fd:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"gecko":function(e){if(!this.__fp(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fe:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"mshtml":function(e){this.__fc();
var h=e.srcElement;
var g=this.__fn(h);

if(g){this.setFocus(g);
}this.tryActivate(h);
},"opera":function(e){var D=e.target;

if(D==this._document||D==this._window){this.__fc();

if(this.__eX){this.setFocus(this.__eX);
delete this.__eX;
}
if(this.__eY){this.setActive(this.__eY);
delete this.__eY;
}}else{this.setFocus(D);
this.tryActivate(D);
if(!this.__fp(D)){D.selectionStart=0;
D.selectionEnd=0;
}}},"default":null})),__ff:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"mshtml":function(e){if(!e.toElement){this.__fb();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var by=e.target;

if(by===this.getFocus()){this.resetFocus();
}
if(by===this.getActive()){this.resetActive();
}},"opera":function(e){var c=e.target;

if(c==this._document){this.__fb();
this.__eX=this.getFocus();
this.__eY=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(c===this.getFocus()){this.resetFocus();
}
if(c===this.getActive()){this.resetActive();
}}},"default":null})),__fg:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__fb();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__fb();
this.__eX=this.getFocus();
this.__eY=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"gecko":function(e){var M=e.target;

if(M===this._window||M===this._document){this.__fc();
M=this._body;
}this.setFocus(M);
this.tryActivate(M);
},"webkit":function(e){var J=e.target;

if(J===this._window||J===this._document){this.__fc();

if(this.__eX){this.setFocus(this.__eX);
delete this.__eX;
}
if(this.__eY){this.setActive(this.__eY);
delete this.__eY;
}}else{this.setFocus(J);
this.tryActivate(J);
}},"default":null})),__fi:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"gecko":function(e){var v=this.__fn(e.target);

if(!v){qx.bom.Event.preventDefault(e);
}else if(v===this._body){this.setFocus(v);
}},"mshtml":function(e){var L=e.srcElement;
var K=this.__fn(L);

if(K){if(!this.__fp(L)){L.unselectable=W;
try{document.selection.empty();
}catch(e){}try{K.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__fp(L)){L.unselectable=W;
}}},"webkit":function(e){var u=e.target;
var t=this.__fn(u);

if(t){this.setFocus(t);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bB=e.target;
var bz=this.__fn(bB);

if(!this.__fp(bB)){qx.bom.Event.preventDefault(e);
if(bz){var bA=this.getFocus();

if(bA&&bA.selectionEnd){bA.selectionStart=0;
bA.selectionEnd=0;
bA.blur();
}if(bz){this.setFocus(bz);
}}}else if(bz){this.setFocus(bz);
}},"default":null})),__fj:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"mshtml":function(e){var bJ=e.srcElement;

if(bJ.unselectable){bJ.unselectable=be;
}this.tryActivate(this.__fk(bJ));
},"gecko":function(e){var N=e.target;

while(N&&N.offsetWidth===undefined){N=N.parentNode;
}
if(N){this.tryActivate(N);
}},"webkit|opera":function(e){this.tryActivate(this.__fk(e.target));
},"default":null})),__fk:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"mshtml|webkit":function(q){var r=this.getFocus();

if(r&&q!=r&&(r.nodeName.toLowerCase()===bi||r.nodeName.toLowerCase()===bn)){q=r;
}return q;
},"default":function(O){return O;
}})),__fl:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bb,{"mshtml|webkit":function(e){var bN=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__fp(bN)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fm:function(G){var H=qx.bom.element.Attribute.get(G,bh);

if(H>=1){return true;
}var I=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(H>=0&&I[G.tagName]){return true;
}return false;
},__fn:function(bC){while(bC&&bC.nodeType===1){if(bC.getAttribute(bk)==W){return null;
}
if(this.__fm(bC)){return bC;
}bC=bC.parentNode;
}return this._body;
},__fo:function(j){var k=j;

while(j&&j.nodeType===1){if(j.getAttribute(bl)==W){return null;
}j=j.parentNode;
}return k;
},__fp:function(E){while(E&&E.nodeType===1){var F=E.getAttribute(bg);

if(F!=null){return F===W;
}E=E.parentNode;
}return true;
},_applyActive:function(bw,bx){if(bx){this.__fa(bx,bw,bo,true);
}
if(bw){this.__fa(bw,bx,bf,true);
}},_applyFocus:function(w,x){if(x){this.__fa(x,w,bd,true);
}
if(w){this.__fa(w,x,bj,true);
}if(x){this.__fa(x,w,ba,false);
}
if(w){this.__fa(w,x,Y,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fq=null;
},defer:function(z){qx.event.Registration.addHandler(z);
var A=z.FOCUSABLE_ELEMENTS;

for(var B in A){A[B.toUpperCase()]=1;
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
qx.Class.define(e,{statics:{__fr:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__fr.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(G,name){var I=this.__fr;
var H;
name=I.names[name]||name;
if(I.original[name]){H=G.getAttribute(name,2);
}else if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
},"default":function(D,name){var F=this.__fr;
var E;
name=F.names[name]||name;
if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
}}),set:function(K,name,L){var M=this.__fr;
name=M.names[name]||name;
if(M.bools[name]){L=!!L;
}if(M.property[name]&&(!(K[name]===undefined)||M.qxProperties[name])){if(L==null){if(M.removeableProperties[name]){K.removeAttribute(name);
return;
}else if(typeof M.propertyDefault[name]!==i){L=M.propertyDefault[name];
}}K[name]=L;
}else{if(L===true){K.setAttribute(name,name);
}else if(L===false||L===null){K.removeAttribute(name);
}else{K.setAttribute(name,L);
}}},reset:function(J,name){this.set(J,name,null);
}}});
})();
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(j,k,l,m,n){qx.event.type.Dom.prototype.init.call(this,j,k,l,m,n);

if(!l){this._relatedTarget=qx.bom.Event.getRelatedTarget(j);
}return this;
},_cloneNativeEvent:function(o,p){var p=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,o,p);
p.button=o.button;
p.clientX=o.clientX;
p.clientY=o.clientY;
p.pageX=o.pageX;
p.pageY=o.pageY;
p.screenX=o.screenX;
p.screenY=o.screenY;
p.wheelDelta=o.wheelDelta;
p.detail=o.detail;
p.srcElement=o.srcElement;
return p;
},__fs:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__fs[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(q);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(r);
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
(function(){var b="qx.client",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(p){if(qx.bom.client.Engine.VERSION<9.5){return (p||window).document.body.clientWidth;
}else{var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientWidth:q.body.clientWidth;
}},"webkit":function(g){if(qx.bom.client.Engine.VERSION<523.15){return (g||window).innerWidth;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}},"default":function(r){var s=(r||window).document;
return qx.bom.Document.isStandardMode(r)?s.documentElement.clientWidth:s.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(e){if(qx.bom.client.Engine.VERSION<9.5){return (e||window).document.body.clientHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},"webkit":function(i){if(qx.bom.client.Engine.VERSION<523.15){return (i||window).innerHeight;
}else{var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientHeight:j.body.clientHeight;
}},"default":function(c){var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientHeight:d.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(k){var l=(k||window).document;
return l.documentElement.scrollLeft||l.body.scrollLeft;
},"default":function(t){return (t||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(n){var o=(n||window).document;
return o.documentElement.scrollTop||o.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(q){if(qx.bom.client.Engine.VERSION>=8){return (q||window).document.documentMode===5;
}else{return (q||window).document.compatMode!==f;
}},"webkit":function(k){if(document.compatMode===undefined){var l=(k||window).document.createElement(a);
l.style.cssText=e;
return l.style.width===c?true:false;
}else{return (k||window).document.compatMode!==f;
}},"default":function(g){return (g||window).document.compatMode!==f;
}}),isStandardMode:function(p){return !this.isQuirksMode(p);
},getWidth:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getWidth(h);
var scroll=this.isStandardMode(h)?i.documentElement.scrollWidth:i.body.scrollWidth;
return Math.max(scroll,j);
},getHeight:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getHeight(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollHeight:n.body.scrollHeight;
return Math.max(scroll,o);
}}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__ft:function(B){var C=navigator.userAgent;
var E=new RegExp(s+B+d);
var F=C.match(E);

if(!F){return;
}var name=F[1].toLowerCase();
var D=F[3];
if(C.match(/Version(\/| )([0-9]+\.[0-9])/)){D=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(C.indexOf(a)!==-1||C.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
D=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=D;
this.VERSION=parseFloat(D,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(G){G.__ft(o);
},"gecko":function(y){y.__ft(k);
},"mshtml":function(A){A.__ft(v);
},"opera":function(z){z.__ft(p);
}})});
})();
(function(){var O="qx.client",N="qx.dom.Hierarchy",M="previousSibling",L="*",K="nextSibling",J="parentNode";
qx.Class.define(N,{statics:{getNodeIndex:function(U){var V=0;

while(U&&(U=U.previousSibling)){V++;
}return V;
},getElementIndex:function(c){var d=0;
var e=qx.dom.Node.ELEMENT;

while(c&&(c=c.previousSibling)){if(c.nodeType==e){d++;
}}return d;
},getNextElementSibling:function(j){while(j&&(j=j.nextSibling)&&!qx.dom.Node.isElement(j)){continue;
}return j||null;
},getPreviousElementSibling:function(g){while(g&&(g=g.previousSibling)&&!qx.dom.Node.isElement(g)){continue;
}return g||null;
},contains:qx.core.Variant.select(O,{"webkit|mshtml|opera":function(z,A){if(qx.dom.Node.isDocument(z)){var B=qx.dom.Node.getDocument(A);
return z&&B==z;
}else if(qx.dom.Node.isDocument(A)){return false;
}else{return z.contains(A);
}},"gecko":function(h,i){return !!(h.compareDocumentPosition(i)&16);
},"default":function(k,l){while(l){if(k==l){return true;
}l=l.parentNode;
}return false;
}}),isRendered:function(G){if(!G.parentNode||!G.offsetParent){return false;
}var H=G.ownerDocument||G.document;
if(H.body.contains){return H.body.contains(G);
}if(H.compareDocumentPosition){return !!(H.compareDocumentPosition(G)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(C,D){return this.contains(D,C);
},getCommonParent:qx.core.Variant.select(O,{"mshtml|opera":function(S,T){if(S===T){return S;
}
while(S&&qx.dom.Node.isElement(S)){if(S.contains(T)){return S;
}S=S.parentNode;
}return null;
},"default":function(r,s){if(r===s){return r;
}var t={};
var w=qx.core.ObjectRegistry;
var v,u;

while(r||s){if(r){v=w.toHashCode(r);

if(t[v]){return t[v];
}t[v]=r;
r=r.parentNode;
}
if(s){u=w.toHashCode(s);

if(t[u]){return t[u];
}t[u]=s;
s=s.parentNode;
}}return null;
}}),getAncestors:function(y){return this._recursivelyCollect(y,J);
},getChildElements:function(E){E=E.firstChild;

if(!E){return [];
}var F=this.getNextSiblings(E);

if(E.nodeType===1){F.unshift(E);
}return F;
},getDescendants:function(x){return qx.lang.Array.fromCollection(x.getElementsByTagName(L));
},getFirstDescendant:function(a){a=a.firstChild;

while(a&&a.nodeType!=1){a=a.nextSibling;
}return a;
},getLastDescendant:function(f){f=f.lastChild;

while(f&&f.nodeType!=1){f=f.previousSibling;
}return f;
},getPreviousSiblings:function(m){return this._recursivelyCollect(m,M);
},getNextSiblings:function(n){return this._recursivelyCollect(n,K);
},_recursivelyCollect:function(P,Q){var R=[];

while(P=P[Q]){if(P.nodeType==1){R.push(P);
}}return R;
},getSiblings:function(I){return this.getPreviousSiblings(I).reverse().concat(this.getNextSiblings(I));
},isEmpty:function(b){b=b.firstChild;

while(b){if(b.nodeType===qx.dom.Node.ELEMENT||b.nodeType===qx.dom.Node.TEXT){return false;
}b=b.nextSibling;
}return true;
},cleanWhitespace:function(o){var p=o.firstChild;

while(p){var q=p.nextSibling;

if(p.nodeType==3&&!/\S/.test(p.nodeValue)){o.removeChild(p);
}p=q;
}}}});
})();
(function(){var c="qx.client",b="qx.event.type.Drag";
qx.Class.define(b,{extend:qx.event.type.Event,members:{init:function(g,h){qx.event.type.Event.prototype.init.call(this,true,g);

if(h){this._native=h.getNativeEvent()||null;
this._originalTarget=h.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=qx.event.type.Event.prototype.clone.call(this,l);
m._native=this._native;
return m;
},getDocumentLeft:qx.core.Variant.select(c,{"mshtml":function(){if(this._native==null){return 0;
}var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(c,{"mshtml":function(){if(this._native==null){return 0;
}var d=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(d);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(n){this.getManager().addType(n);
},addAction:function(k){this.getManager().addAction(k);
},supportsType:function(e){return this.getManager().supportsType(e);
},supportsAction:function(o){return this.getManager().supportsAction(o);
},addData:function(i,j){this.getManager().addData(i,j);
},getData:function(a){return this.getManager().getData(a);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(u,v){qx.event.dispatch.AbstractBubbling.call(this,u);
this.__fx=u.getWindow();
this.__fy=v;
u.addListener(this.__fx,f,this.releaseCapture,this);
u.addListener(this.__fx,e,this.releaseCapture,this);
u.addListener(this.__fx,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fy:null,__fz:null,__fA:true,__fx:null,_getParent:function(i){return i.parentNode;
},canDispatchEvent:function(k,event,l){return (this.__fz&&this.__fB[l]);
},dispatchEvent:function(s,event,t){if(t==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fA||!qx.dom.Hierarchy.contains(this.__fz,s)){s=this.__fz;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,s,event,t);
},__fB:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__fz===q&&this.__fA==r){return;
}
if(this.__fz){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__fA=r;
this.__fz=q;
this.__fy.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fz;
},releaseCapture:function(){var j=this.__fz;

if(!j){return;
}this.__fz=null;
this.__fy.fireEvent(j,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(j);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(m,n){m.setCapture(n!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(p){p.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fz=this.__fx=this.__fy=null;
},defer:function(o){qx.event.Registration.addDispatcher(o);
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(G){if(G.nodeType===9){return G.documentElement.nodeName!==d;
}else if(G.ownerDocument){return this.isXmlDocument(G.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(y,z){var A=new ActiveXObject(this.DOMDOC);
A.setProperty(n,b);

if(z){var B=h;
B+=z;

if(y){B+=f+y+o;
}B+=k;
A.loadXML(B);
}return A;
},"default":function(E,F){return document.implementation.createDocument(E||q,F||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(C){var D=qx.xml.Document.create();
D.loadXML(C);
return D;
},"default":function(w){var x=new DOMParser();
return x.parseFromString(w,e);
}})},defer:function(t){if(qx.core.Variant.isSet(r,p)){var u=[a,j];
var v=[c,g];

for(var i=0,l=u.length;i<l;i++){try{new ActiveXObject(u[i]);
new ActiveXObject(v[i]);
}catch(s){continue;
}t.DOMDOC=u[i];
t.XMLHTTP=v[i];
break;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(o,stop,p){var parent=o.parentNode;
var u=qx.dom.Node.getDocument(o);
var q=u.body;
var C,A,x;
var E,v,F;
var y,G,J;
var H,s,B,r;
var w,I,z;
var t=p===g;
var D=p===c;
stop=stop?stop.parentNode:u;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===q||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===q){A=parent.scrollLeft;
x=A+qx.bom.Viewport.getWidth();
E=qx.bom.Viewport.getWidth();
v=parent.clientWidth;
F=parent.scrollWidth;
y=0;
G=0;
J=0;
}else{C=qx.bom.element.Location.get(parent);
A=C.left;
x=C.right;
E=parent.offsetWidth;
v=parent.clientWidth;
F=parent.scrollWidth;
y=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
G=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
J=E-v-y-G;
}H=qx.bom.element.Location.get(o);
s=H.left;
B=H.right;
r=o.offsetWidth;
w=s-A-y;
I=B-x+G;
z=0;
if(t){z=w;
}else if(D){z=I+J;
}else if(w<0||r>v){z=w;
}else if(I>0){z=I+J;
}parent.scrollLeft+=z;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===q){break;
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
}},intoView:function(l,stop,m,n){this.intoViewX(l,stop,m);
this.intoViewY(l,stop,n);
}}});
})();
(function(){var bw="",bv="qx.client",bu="hidden",bt="-moz-scrollbars-none",bs="overflow",br=";",bq="overflowY",bp=":",bo="overflowX",bn="overflow:",bI="none",bH="scroll",bG="borderLeftStyle",bF="borderRightStyle",bE="div",bD="borderRightWidth",bC="overflow-y",bB="borderLeftWidth",bA="-moz-scrollbars-vertical",bz="100px",bx="qx.bom.element.Overflow",by="overflow-x";
qx.Class.define(bx,{statics:{__fC:null,getScrollbarWidth:function(){if(this.__fC!==null){return this.__fC;
}var d=qx.bom.element.Style;
var f=function(bK,bL){return parseInt(d.get(bK,bL))||0;
};
var g=function(bm){return (d.get(bm,bF)==bI?0:f(bm,bD));
};
var e=function(bh){return (d.get(bh,bG)==bI?0:f(bh,bB));
};
var i=qx.core.Variant.select(bv,{"mshtml":function(bO){if(d.get(bO,bq)==bu||bO.clientWidth==0){return g(bO);
}return Math.max(0,bO.offsetWidth-bO.clientLeft-bO.clientWidth);
},"default":function(Y){if(Y.clientWidth==0){var ba=d.get(Y,bs);
var bb=(ba==bH||ba==bA?16:0);
return Math.max(0,g(Y)+bb);
}return Math.max(0,(Y.offsetWidth-Y.clientWidth-e(Y)));
}});
var h=function(P){return i(P)-g(P);
};
var t=document.createElement(bE);
var s=t.style;
s.height=s.width=bz;
s.overflow=bH;
document.body.appendChild(t);
var c=h(t);
this.__fC=c?c:16;
document.body.removeChild(t);
return this.__fC;
},_compile:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(Q,R){if(R==bu){R=bt;
}return bn+R+br;
}:
function(bi,bj){return bi+bp+bj+br;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(S,T){return bn+T+br;
}:
function(bk,bl){return bk+bp+bl+br;
},"default":function(ce,cf){return ce+bp+cf+br;
}}),compileX:function(r){return this._compile(by,r);
},compileY:function(z){return this._compile(bC,z);
},getX:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(K,L){var M=qx.bom.element.Style.get(K,bs,L,false);

if(M===bt){M=bu;
}return M;
}:
function(N,O){return qx.bom.element.Style.get(N,bo,O,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bR,bS){return qx.bom.element.Style.get(bR,bs,bS,false);
}:
function(W,X){return qx.bom.element.Style.get(W,bo,X,false);
},"default":function(I,J){return qx.bom.element.Style.get(I,bo,J,false);
}}),setX:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bT,bU){if(bU==bu){bU=bt;
}bT.style.overflow=bU;
}:
function(ca,cb){ca.style.overflowX=cb;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(l,m){l.style.overflow=m;
}:
function(w,x){w.style.overflowX=x;
},"default":function(bV,bW){bV.style.overflowX=bW;
}}),resetX:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bJ){bJ.style.overflow=bw;
}:
function(bN){bN.style.overflowX=bw;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(n,o){n.style.overflow=bw;
}:
function(bf,bg){bf.style.overflowX=bw;
},"default":function(bM){bM.style.overflowX=bw;
}}),getY:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bc,bd){var be=qx.bom.element.Style.get(bc,bs,bd,false);

if(be===bt){be=bu;
}return be;
}:
function(C,D){return qx.bom.element.Style.get(C,bq,D,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(cc,cd){return qx.bom.element.Style.get(cc,bs,cd,false);
}:
function(j,k){return qx.bom.element.Style.get(j,bq,k,false);
},"default":function(bP,bQ){return qx.bom.element.Style.get(bP,bq,bQ,false);
}}),setY:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bX,bY){if(bY===bu){bY=bt;
}bX.style.overflow=bY;
}:
function(A,B){A.style.overflowY=B;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(E,F){E.style.overflow=F;
}:
function(a,b){a.style.overflowY=b;
},"default":function(U,V){U.style.overflowY=V;
}}),resetY:qx.core.Variant.select(bv,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(u){u.style.overflow=bw;
}:
function(y){y.style.overflowY=bw;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(G,H){G.style.overflow=bw;
}:
function(p,q){p.style.overflowY=bw;
},"default":function(v){v.style.overflowY=bw;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(p){if(!p){return k;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?n:t+m);
u=n;
}else{q=(t==null?n:u+t+m);
u=u+m;
}
if(top==null){r=(s==null?n:s+m);
top=n;
}else{r=(s==null?n:top+s+m);
top=top+m;
}return d+top+l+q+l+r+l+u+i;
},get:function(v,w){var y=qx.bom.element.Style.get(v,c,w,false);
var D,top,B,A;
var x,z;

if(typeof y===e&&y!==n&&y!==h){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var C=RegExp.$1.split(l);
top=qx.lang.String.trim(C[0]);
x=qx.lang.String.trim(C[1]);
z=qx.lang.String.trim(C[2]);
D=qx.lang.String.trim(C[3]);
if(D===n){D=null;
}
if(top===n){top=null;
}
if(x===n){x=null;
}
if(z===n){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(D!=null){D=parseInt(D,10);
}if(x!=null&&D!=null){B=x-D;
}else if(x!=null){B=x;
}
if(z!=null&&top!=null){A=z-top;
}else if(z!=null){A=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:D||null,top:top||null,width:B||null,height:A||null};
},set:function(E,F){if(!F){E.style.clip=a;
return;
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
}E.style.clip=j+top+l+G+l+H+l+K+g;
},reset:function(o){o.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__fD:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(a){return g+(this.__fD[a]||a)+e;
},get:function(o,p){return qx.bom.element.Style.get(o,c,p,false);
},set:function(m,n){m.style.cursor=this.__fD[n]||n;
},reset:function(q){q.style.cursor=h;
}}});
})();
(function(){var p="",o="qx.client",n=";",m="filter",l="opacity:",k="opacity",j="MozOpacity",i=");",h=")",g="zoom:1;filter:alpha(opacity=",d="qx.bom.element.Opacity",f="alpha(opacity=",e="-moz-opacity:";
qx.Class.define(d,{statics:{compile:qx.core.Variant.select(o,{"mshtml":function(B){if(B>=1){return p;
}
if(B<0.00001){B=0;
}return g+(B*100)+i;
},"gecko":function(t){if(t==1){t=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return e+t+n;
}else{return l+t+n;
}},"default":function(q){if(q==1){return p;
}return l+q+n;
}}),set:qx.core.Variant.select(o,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,m,qx.bom.element.Style.COMPUTED_MODE,false);
if(b>=1){a.style.filter=c.replace(/alpha\([^\)]*\)/gi,p);
return;
}
if(b<0.00001){b=0;
}if(!a.currentStyle||!a.currentStyle.hasLayout){a.style.zoom=1;
}a.style.filter=c.replace(/alpha\([^\)]*\)/gi,p)+f+b*100+h;
},"gecko":function(E,F){if(F==1){F=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=F;
}else{E.style.opacity=F;
}},"default":function(C,D){if(D==1){D=p;
}C.style.opacity=D;
}}),reset:qx.core.Variant.select(o,{"mshtml":function(r){var s=qx.bom.element.Style.get(r,m,qx.bom.element.Style.COMPUTED_MODE,false);
r.style.filter=s.replace(/alpha\([^\)]*\)/gi,p);
},"gecko":function(H){if(qx.bom.client.Engine.VERSION<1.7){H.style.MozOpacity=p;
}else{H.style.opacity=p;
}},"default":function(G){G.style.opacity=p;
}}),get:qx.core.Variant.select(o,{"mshtml":function(x,y){var z=qx.bom.element.Style.get(x,m,y,false);

if(z){var A=z.match(/alpha\(opacity=(.*)\)/);

if(A&&A[1]){return parseFloat(A[1])/100;
}}return 1.0;
},"gecko":function(I,J){var K=qx.bom.element.Style.get(I,qx.bom.client.Engine.VERSION<1.7?j:k,J,false);

if(K==0.999999){K=1.0;
}
if(K!=null){return parseFloat(K);
}return 1.0;
},"default":function(u,v){var w=qx.bom.element.Style.get(u,k,v,false);

if(w!=null){return parseFloat(w);
}return 1.0;
}})}});
})();
(function(){var r="qx.client",q="",p="boxSizing",o="box-sizing",n=":",m="border-box",k="qx.bom.element.BoxSizing",j="KhtmlBoxSizing",h="-moz-box-sizing",g="WebkitBoxSizing",d=";",f="-khtml-box-sizing",e="content-box",c="-webkit-box-sizing",b="MozBoxSizing";
qx.Class.define(k,{statics:{__fE:qx.core.Variant.select(r,{"mshtml":null,"webkit":[p,j,g],"gecko":[b],"opera":[p]}),__fF:qx.core.Variant.select(r,{"mshtml":null,"webkit":[o,f,c],"gecko":[h],"opera":[o]}),__fG:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__fH:function(t){var u=this.__fG;
return u.tags[t.tagName.toLowerCase()]||u.types[t.type];
},compile:qx.core.Variant.select(r,{"mshtml":function(B){{};
},"default":function(E){var G=this.__fF;
var F=q;

if(G){for(var i=0,l=G.length;i<l;i++){F+=G[i]+n+E+d;
}}return F;
}}),get:qx.core.Variant.select(r,{"mshtml":function(a){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(a))){if(!this.__fH(a)){return e;
}}return m;
},"default":function(y){var A=this.__fE;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==q){return z;
}}}return q;
}}),set:qx.core.Variant.select(r,{"mshtml":function(C,D){{};
},"default":function(v,w){var x=this.__fE;

if(x){for(var i=0,l=x.length;i<l;i++){v.style[x[i]]=w;
}}}}),reset:function(s){this.set(s,q);
}}});
})();
(function(){var o="",n="qx.client",m="userSelect",k="style",h="MozUserModify",g="px",f="float",e="borderImage",d="styleFloat",c="appearance",H="pixelHeight",G='Ms',F=":",E="cssFloat",D="pixelTop",C="pixelLeft",B='O',A="qx.bom.element.Style",z='Khtml',y='string',v="pixelRight",w='Moz',t="pixelWidth",u="pixelBottom",r=";",s="textOverflow",p="userModify",q='Webkit',x="WebkitUserModify";
qx.Class.define(A,{statics:{__fI:function(){var bj=[c,m,s,e];
var bn={};
var bk=document.documentElement.style;
var bo=[w,q,z,B,G];

for(var i=0,l=bj.length;i<l;i++){var bp=bj[i];
var bl=bp;

if(bk[bp]){bn[bl]=bp;
continue;
}bp=qx.lang.String.firstUp(bp);

for(var j=0,bq=bo.length;j<bq;j++){var bm=bo[j]+bp;

if(typeof bk[bm]==y){bn[bl]=bm;
break;
}}}this.__fJ=bn;
this.__fJ[p]=qx.core.Variant.select(n,{"gecko":h,"webkit":x,"default":m});
this.__fK={};

for(var bl in bn){this.__fK[bl]=this.__fO(bn[bl]);
}this.__fJ[f]=qx.core.Variant.select(n,{"mshtml":d,"default":E});
},__fL:{width:t,height:H,left:C,right:v,top:D,bottom:u},__fM:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(J){var L=[];
var N=this.__fM;
var M=this.__fK;
var name,K;

for(name in J){K=J[name];

if(K==null){continue;
}name=M[name]||name;
if(N[name]){L.push(N[name].compile(K));
}else{L.push(this.__fO(name),F,K,r);
}}return L.join(o);
},__fN:{},__fO:function(bw){var bx=this.__fN;
var by=bx[bw];

if(!by){by=bx[bw]=qx.lang.String.hyphenate(bw);
}return by;
},setCss:qx.core.Variant.select(n,{"mshtml":function(bC,bD){bC.style.cssText=bD;
},"default":function(a,b){a.setAttribute(k,b);
}}),getCss:qx.core.Variant.select(n,{"mshtml":function(R){return R.style.cssText.toLowerCase();
},"default":function(I){return I.getAttribute(k);
}}),isPropertySupported:function(bB){return (this.__fM[bB]||this.__fJ[bB]||bB in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(O,name,P,Q){{};
name=this.__fJ[name]||name;
if(Q!==false&&this.__fM[name]){return this.__fM[name].set(O,P);
}else{O.style[name]=P!==null?P:o;
}},setStyles:function(bb,bc,bd){{};
var bg=this.__fJ;
var bi=this.__fM;
var be=bb.style;

for(var bh in bc){var bf=bc[bh];
var name=bg[bh]||bh;

if(bf===undefined){if(bd!==false&&bi[name]){bi[name].reset(bb);
}else{be[name]=o;
}}else{if(bd!==false&&bi[name]){bi[name].set(bb,bf);
}else{be[name]=bf!==null?bf:o;
}}}},reset:function(bz,name,bA){name=this.__fJ[name]||name;
if(bA!==false&&this.__fM[name]){return this.__fM[name].reset(bz);
}else{bz.style[name]=o;
}},get:qx.core.Variant.select(n,{"mshtml":function(S,name,T,U){name=this.__fJ[name]||name;
if(U!==false&&this.__fM[name]){return this.__fM[name].get(S,T);
}if(!S.currentStyle){return S.style[name]||o;
}switch(T){case this.LOCAL_MODE:return S.style[name]||o;
case this.CASCADED_MODE:return S.currentStyle[name]||o;
default:var Y=S.currentStyle[name]||o;
if(/^-?[\.\d]+(px)?$/i.test(Y)){return Y;
}var X=this.__fL[name];

if(X){var V=S.style[name];
S.style[name]=Y||0;
var W=S.style[X]+g;
S.style[name]=V;
return W;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(Y)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return Y;
}},"default":function(br,name,bs,bt){name=this.__fJ[name]||name;
if(bt!==false&&this.__fM[name]){return this.__fM[name].get(br,bs);
}switch(bs){case this.LOCAL_MODE:return br.style[name]||o;
case this.CASCADED_MODE:if(br.currentStyle){return br.currentStyle[name]||o;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bu=qx.dom.Node.getDocument(br);
var bv=bu.defaultView.getComputedStyle(br,null);
return bv?bv[name]:o;
}}})},defer:function(ba){ba.__fI();
}});
})();
(function(){var p="borderTopWidth",o="borderLeftWidth",n="marginTop",m="marginLeft",l="scroll",k="qx.client",j="border-box",i="borderBottomWidth",h="borderRightWidth",g="auto",E="padding",D="qx.bom.element.Location",C="paddingLeft",B="static",A="marginBottom",z="visible",y="BODY",x="paddingBottom",w="paddingTop",v="marginRight",t="position",u="margin",r="overflow",s="paddingRight",q="border";
qx.Class.define(D,{statics:{__fP:function(U,V){return qx.bom.element.Style.get(U,V,qx.bom.element.Style.COMPUTED_MODE,false);
},__fQ:function(a,b){return parseInt(qx.bom.element.Style.get(a,b,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__fR:function(bt){var bw=0,top=0;
if(bt.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bv=qx.dom.Node.getWindow(bt);
bw-=qx.bom.Viewport.getScrollLeft(bv);
top-=qx.bom.Viewport.getScrollTop(bv);
}else{var bu=qx.dom.Node.getDocument(bt).body;
bt=bt.parentNode;
while(bt&&bt!=bu){bw+=bt.scrollLeft;
top+=bt.scrollTop;
bt=bt.parentNode;
}}return {left:bw,top:top};
},__fS:qx.core.Variant.select(k,{"mshtml":function(Q){var S=qx.dom.Node.getDocument(Q);
var R=S.body;
var T=0;
var top=0;
T-=R.clientLeft+S.documentElement.clientLeft;
top-=R.clientTop+S.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){T+=this.__fQ(R,o);
top+=this.__fQ(R,p);
}return {left:T,top:top};
},"webkit":function(bp){var br=qx.dom.Node.getDocument(bp);
var bq=br.body;
var bs=bq.offsetLeft;
var top=bq.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bs+=this.__fQ(bq,o);
top+=this.__fQ(bq,p);
}return {left:bs,top:top};
},"gecko":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){Y+=this.__fQ(X,m);
top+=this.__fQ(X,n);
}if(qx.bom.element.BoxSizing.get(X)!==j){Y+=this.__fQ(X,o);
top+=this.__fQ(X,p);
}return {left:Y,top:top};
},"default":function(bG){var bH=qx.dom.Node.getDocument(bG).body;
var bI=bH.offsetLeft;
var top=bH.offsetTop;
return {left:bI,top:top};
}}),__fT:qx.core.Variant.select(k,{"mshtml|webkit":function(bx){var bz=qx.dom.Node.getDocument(bx);
if(bx.getBoundingClientRect){var bA=bx.getBoundingClientRect();
var bB=bA.left;
var top=bA.top;
}else{var bB=bx.offsetLeft;
var top=bx.offsetTop;
bx=bx.offsetParent;
var by=bz.body;
while(bx&&bx!=by){bB+=bx.offsetLeft;
top+=bx.offsetTop;
bB+=this.__fQ(bx,o);
top+=this.__fQ(bx,p);
bx=bx.offsetParent;
}}return {left:bB,top:top};
},"gecko":function(bJ){if(bJ.getBoundingClientRect){var bM=bJ.getBoundingClientRect();
var bN=Math.round(bM.left);
var top=Math.round(bM.top);
}else{var bN=0;
var top=0;
var bK=qx.dom.Node.getDocument(bJ).body;
var bL=qx.bom.element.BoxSizing;

if(bL.get(bJ)!==j){bN-=this.__fQ(bJ,o);
top-=this.__fQ(bJ,p);
}
while(bJ&&bJ!==bK){bN+=bJ.offsetLeft;
top+=bJ.offsetTop;
if(bL.get(bJ)!==j){bN+=this.__fQ(bJ,o);
top+=this.__fQ(bJ,p);
}if(bJ.parentNode&&this.__fP(bJ.parentNode,r)!=z){bN+=this.__fQ(bJ.parentNode,o);
top+=this.__fQ(bJ.parentNode,p);
}bJ=bJ.offsetParent;
}}return {left:bN,top:top};
},"default":function(c){var e=0;
var top=0;
var d=qx.dom.Node.getDocument(c).body;
while(c&&c!==d){e+=c.offsetLeft;
top+=c.offsetTop;
c=c.offsetParent;
}return {left:e,top:top};
}}),get:function(F,G){if(F.tagName==y){var location=this.__fU(F);
var N=location.left;
var top=location.top;
}else{var H=this.__fS(F);
var M=this.__fT(F);
var scroll=this.__fR(F);
var N=M.left+H.left-scroll.left;
var top=M.top+H.top-scroll.top;
}var I=N+F.offsetWidth;
var J=top+F.offsetHeight;

if(G){if(G==E||G==l){var K=qx.bom.element.Overflow.getX(F);

if(K==l||K==g){I+=F.scrollWidth-F.offsetWidth+this.__fQ(F,o)+this.__fQ(F,h);
}var L=qx.bom.element.Overflow.getY(F);

if(L==l||L==g){J+=F.scrollHeight-F.offsetHeight+this.__fQ(F,p)+this.__fQ(F,i);
}}
switch(G){case E:N+=this.__fQ(F,C);
top+=this.__fQ(F,w);
I-=this.__fQ(F,s);
J-=this.__fQ(F,x);
case l:N-=F.scrollLeft;
top-=F.scrollTop;
I-=F.scrollLeft;
J-=F.scrollTop;
case q:N+=this.__fQ(F,o);
top+=this.__fQ(F,p);
I-=this.__fQ(F,h);
J-=this.__fQ(F,i);
break;
case u:N-=this.__fQ(F,m);
top-=this.__fQ(F,n);
I+=this.__fQ(F,v);
J+=this.__fQ(F,A);
break;
}}return {left:N,top:top,right:I,bottom:J};
},__fU:qx.core.Variant.select(k,{"default":function(bE){var top=bE.offsetTop+this.__fQ(bE,n);
var bF=bE.offsetLeft+this.__fQ(bE,m);
return {left:bF,top:top};
},"mshtml":function(bn){var top=bn.offsetTop;
var bo=bn.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__fQ(bn,n);
bo+=this.__fQ(bn,m);
}return {left:bo,top:top};
},"gecko":function(bf){var top=bf.offsetTop+this.__fQ(bf,n)+this.__fQ(bf,o);
var bg=bf.offsetLeft+this.__fQ(bf,m)+this.__fQ(bf,p);
return {left:bg,top:top};
}}),getLeft:function(O,P){return this.get(O,P).left;
},getTop:function(ba,bb){return this.get(ba,bb).top;
},getRight:function(bO,bP){return this.get(bO,bP).right;
},getBottom:function(bC,bD){return this.get(bC,bD).bottom;
},getRelative:function(bh,bi,bj,bk){var bm=this.get(bh,bj);
var bl=this.get(bi,bk);
return {left:bm.left-bl.left,top:bm.top-bl.top,right:bm.right-bl.right,bottom:bm.bottom-bl.bottom};
},getPosition:function(f){return this.getRelative(f,this.getOffsetParent(f));
},getOffsetParent:function(bc){var be=bc.offsetParent||document.body;
var bd=qx.bom.element.Style;

while(be&&(!/^body|html$/i.test(be.tagName)&&bd.get(be,t)===B)){be=be.offsetParent;
}return be;
}}});
})();
(function(){var k="qx.client",j="character",i="EndToEnd",h="input",g="textarea",f="StartToStart",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Variant.select(k,{"mshtml":function(M){return M.selection;
},"default":function(w){return qx.dom.Node.getWindow(w).getSelection();
}}),get:qx.core.Variant.select(k,{"mshtml":function(Q){var R=qx.bom.Range.get(qx.dom.Node.getDocument(Q));
return R.text;
},"default":function(u){if(this.__fV(u)){return u.value.substring(u.selectionStart,u.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(u)).toString();
}}}),getLength:qx.core.Variant.select(k,{"mshtml":function(N){var P=this.get(N);
var O=qx.util.StringSplit.split(P,/\r\n/);
return P.length-(O.length-1);
},"opera":function(S){var X,V,T;

if(this.__fV(S)){var W=S.selectionStart;
var U=S.selectionEnd;
X=S.value.substring(W,U);
V=U-W;
}else{X=qx.bom.Selection.get(S);
V=X.length;
}T=qx.util.StringSplit.split(X,/\r\n/);
return V-(T.length-1);
},"default":function(y){if(this.__fV(y)){return y.selectionEnd-y.selectionStart;
}else{return this.get(y).length;
}}}),getStart:qx.core.Variant.select(k,{"mshtml":function(bq){if(this.__fV(bq)){var bv=qx.bom.Range.get();
if(!bq.contains(bv.parentElement())){return -1;
}var bw=qx.bom.Range.get(bq);
var bu=bq.value.length;
bw.moveToBookmark(bv.getBookmark());
bw.moveEnd(e,bu);
return bu-bw.text.length;
}else{var bw=qx.bom.Range.get(bq);
var bs=bw.parentElement();
var bx=qx.bom.Range.get();
bx.moveToElementText(bs);
var br=qx.bom.Range.get(qx.dom.Node.getBodyElement(bq));
br.setEndPoint(f,bw);
br.setEndPoint(i,bx);
if(bx.compareEndPoints(f,br)==0){return 0;
}var bt;
var by=0;

while(true){bt=br.moveStart(j,-1);
if(bx.compareEndPoints(f,br)==0){break;
}if(bt==0){break;
}else{by++;
}}return ++by;
}},"gecko|webkit":function(J){if(this.__fV(J)){return J.selectionStart;
}else{var L=qx.dom.Node.getDocument(J);
var K=this.getSelectionObject(L);
if(K.anchorOffset<K.focusOffset){return K.anchorOffset;
}else{return K.focusOffset;
}}},"default":function(Y){if(this.__fV(Y)){return Y.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(Y)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(k,{"mshtml":function(ba){if(this.__fV(ba)){var bf=qx.bom.Range.get();
if(!ba.contains(bf.parentElement())){return -1;
}var bg=qx.bom.Range.get(ba);
var be=ba.value.length;
bg.moveToBookmark(bf.getBookmark());
bg.moveStart(e,-be);
return bg.text.length;
}else{var bg=qx.bom.Range.get(ba);
var bc=bg.parentElement();
var bh=qx.bom.Range.get();
bh.moveToElementText(bc);
var be=bh.text.length;
var bb=qx.bom.Range.get(qx.dom.Node.getBodyElement(ba));
bb.setEndPoint(i,bg);
bb.setEndPoint(f,bh);
if(bh.compareEndPoints(i,bb)==0){return be-1;
}var bd;
var bi=0;

while(true){bd=bb.moveEnd(j,1);
if(bh.compareEndPoints(i,bb)==0){break;
}if(bd==0){break;
}else{bi++;
}}return be-(++bi);
}},"gecko|webkit":function(l){if(this.__fV(l)){return l.selectionEnd;
}else{var n=qx.dom.Node.getDocument(l);
var m=this.getSelectionObject(n);
if(m.focusOffset>m.anchorOffset){return m.focusOffset;
}else{return m.anchorOffset;
}}},"default":function(t){if(this.__fV(t)){return t.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(t)).focusOffset;
}}}),__fV:function(v){return qx.dom.Node.isElement(v)&&(v.nodeName.toLowerCase()==h||v.nodeName.toLowerCase()==g);
},set:qx.core.Variant.select(k,{"mshtml":function(o,p,q){var r;
if(qx.dom.Node.isDocument(o)){o=o.body;
}
if(qx.dom.Node.isElement(o)||qx.dom.Node.isText(o)){switch(o.nodeName.toLowerCase()){case h:case g:case c:if(q===undefined){q=o.value.length;
}
if(p>=0&&p<=o.value.length&&q>=0&&q<=o.value.length){r=qx.bom.Range.get(o);
r.collapse(true);
r.moveStart(j,p);
r.moveEnd(j,q-p);
r.select();
return true;
}break;
case b:if(q===undefined){q=o.nodeValue.length;
}
if(p>=0&&p<=o.nodeValue.length&&q>=0&&q<=o.nodeValue.length){r=qx.bom.Range.get(qx.dom.Node.getBodyElement(o));
r.moveToElementText(o.parentNode);
r.collapse(true);
r.moveStart(j,p);
r.moveEnd(j,q-p);
r.select();
return true;
}break;
default:if(q===undefined){q=o.childNodes.length-1;
}if(o.childNodes[p]&&o.childNodes[q]){r=qx.bom.Range.get(qx.dom.Node.getBodyElement(o));
r.moveToElementText(o.childNodes[p]);
r.collapse(true);
var s=qx.bom.Range.get(qx.dom.Node.getBodyElement(o));
s.moveToElementText(o.childNodes[q]);
r.setEndPoint(i,s);
r.select();
return true;
}}}return false;
},"default":function(bj,bk,bl){var bp=bj.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bj)&&(bp==h||bp==g)){if(bl===undefined){bl=bj.value.length;
}if(bk>=0&&bk<=bj.value.length&&bl>=0&&bl<=bj.value.length){bj.focus();
bj.select();
bj.setSelectionRange(bk,bl);
return true;
}}else{var bn=false;
var bo=qx.dom.Node.getWindow(bj).getSelection();
var bm=qx.bom.Range.get(bj);
if(qx.dom.Node.isText(bj)){if(bl===undefined){bl=bj.length;
}
if(bk>=0&&bk<bj.length&&bl>=0&&bl<=bj.length){bn=true;
}}else if(qx.dom.Node.isElement(bj)){if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}else if(qx.dom.Node.isDocument(bj)){bj=bj.body;

if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}
if(bn){if(!bo.isCollapsed){bo.collapseToStart();
}bm.setStart(bj,bk);
if(qx.dom.Node.isText(bj)){bm.setEnd(bj,bl);
}else{bm.setEndAfter(bj.childNodes[bl]);
}if(bo.rangeCount>0){bo.removeAllRanges();
}bo.addRange(bm);
return true;
}}return false;
}}),setAll:function(x){return qx.bom.Selection.set(x,0);
},clear:qx.core.Variant.select(k,{"mshtml":function(z){var A=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(z));
var B=qx.bom.Range.get(z);
var parent=B.parentElement();
var C=qx.bom.Range.get(qx.dom.Node.getDocument(z));
if(parent==C.parentElement()&&parent==z){A.empty();
}},"default":function(D){var F=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(D));
var H=D.nodeName.toLowerCase();
if(qx.dom.Node.isElement(D)&&(H==h||H==g)){D.setSelectionRange(0,0);
qx.bom.Element.blur(D);
}else if(qx.dom.Node.isDocument(D)||H==a){F.collapse(D.body?D.body:D,0);
}else{var G=qx.bom.Range.get(D);

if(!G.collapsed){var I;
var E=G.commonAncestorContainer;
if(qx.dom.Node.isElement(D)&&qx.dom.Node.isText(E)){I=E.parentNode;
}else{I=E;
}
if(I==D){F.collapse(D,0);
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
qx.Class.define(b,{statics:{__fW:{},remove:function(c){delete this.__fW[c.$$hash];
},add:function(d){var e=this.__fW;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__fW;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__fW={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__fX:{},__fY:{},remove:function(f){var g=f.$$hash;
delete this.__fY[g];
delete this.__fX[g];
},isVisible:function(e){return this.__fY[e.$$hash]||false;
},__ga:function(h){var j=this.__fY;
var i=h.$$hash;
var k;
if(h.isExcluded()){k=false;
}else{var parent=h.$$parent;

if(parent){k=this.__ga(parent);
}else{k=h.isRootWidget();
}}return j[i]=k;
},add:function(c){var d=this.__fX;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var l=this.__fX;
var p=this.__fY;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__ga(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__fX={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gb:{},remove:function(c){delete this.__gb[c.$$hash];
},add:function(i){var j=this.__gb;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(h){return !!this.__gb[h.$$hash];
},flush:function(){var g=qx.ui.core.queue.Visibility;
var d=this.__gb;
var f;

for(var e in d){f=d[e];
delete d[e];
if(g.isVisible(f)){f.syncAppearance();
}else{f.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__gg:{},add:function(f){var g=this.__gg;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__gg;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__gg={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(g,h){var i={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=c;
}qx.html.Element.call(this,null,i);
this.__gY=g;
this.__ha=h||g.toHashCode();
this.useMarkup(g.getMarkup());
},members:{__ha:null,__gY:null,getId:function(){return this.__ha;
},getDecorator:function(){return this.__gY;
},resize:function(e,f){this.__gY.resize(this.getDomElement(),e,f);
},tint:function(d){this.__gY.tint(this.getDomElement(),d);
},getInsets:function(){return this.__gY.getInsets();
}},destruct:function(){this.__gY=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__hb=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__hb:null,__hc:{focusin:1,focusout:1,focus:1,blur:1},__hd:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(h,j){return h instanceof qx.ui.core.Widget;
},_dispatchEvent:function(p){var u=p.getTarget();
var t=qx.ui.core.Widget.getWidgetByElement(u);
var v=false;

while(t&&t.isAnonymous()){var v=true;
t=t.getLayoutParent();
}if(t&&v&&p.getType()==a){t.getContainerElement().activate();
}if(this.__hc[p.getType()]){t=t&&t.getFocusTarget();
if(!t){return;
}}if(p.getRelatedTarget){var C=p.getRelatedTarget();
var B=qx.ui.core.Widget.getWidgetByElement(C);

while(B&&B.isAnonymous()){B=B.getLayoutParent();
}
if(B){if(this.__hc[p.getType()]){B=B.getFocusTarget();
}if(B===t){return;
}}}var x=p.getCurrentTarget();
var z=qx.ui.core.Widget.getWidgetByElement(x);

if(!z||z.isAnonymous()){return;
}if(this.__hc[p.getType()]){z=z.getFocusTarget();
}var A=p.getType();

if(!z||!(z.isEnabled()||this.__hd[A])){return;
}var q=p.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var w=this.__hb.getListeners(z,A,q);

if(!w||w.length===0){return;
}var r=qx.event.Pool.getInstance().getObject(p.constructor);
p.clone(r);
r.setTarget(t);
r.setRelatedTarget(B||null);
r.setCurrentTarget(z);
var D=p.getOriginalTarget();

if(D){var s=qx.ui.core.Widget.getWidgetByElement(D);

while(s&&s.isAnonymous()){s=s.getLayoutParent();
}r.setOriginalTarget(s);
}else{r.setOriginalTarget(u);
}for(var i=0,l=w.length;i<l;i++){var y=w[i].context||z;
w[i].handler.call(y,r);
}if(r.getPropagationStopped()){p.stopPropagation();
}
if(r.getDefaultPrevented()){p.preventDefault();
}qx.event.Pool.getInstance().poolObject(r);
},registerEvent:function(E,F,G){var H;

if(F===e||F===f){H=E.getFocusElement();
}else if(F===c||F===d){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.addListener(F,this._dispatchEvent,this,G);
}},unregisterEvent:function(k,m,n){var o;

if(m===e||m===f){o=k.getFocusElement();
}else if(m===c||m===d){o=k.getContentElement();
}else{o=k.getContainerElement();
}
if(o){o.removeListener(m,this._dispatchEvent,this,n);
}}},destruct:function(){this.__hb=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var l="/",k="mshtml",j="",i="qx.client",h="?",g="string",f="qx.util.ResourceManager",e="singleton";
qx.Class.define(f,{extend:qx.core.Object,type:e,statics:{__he:qx.$$resources||{},__hf:{}},members:{has:function(q){return !!this.self(arguments).__he[q];
},getData:function(t){return this.self(arguments).__he[t]||null;
},getImageWidth:function(o){var p=this.self(arguments).__he[o];
return p?p[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__he[u];
return v?v[1]:null;
},getImageFormat:function(m){var n=this.self(arguments).__he[m];
return n?n[2]:null;
},isClippedImage:function(r){var s=this.self(arguments).__he[r];
return s&&s.length>4;
},toUri:function(a){if(a==null){return a;
}var b=this.self(arguments).__he[a];

if(!b){return a;
}
if(typeof b===g){var d=b;
}else{var d=b[3];
if(!d){return a;
}}var c=j;

if(qx.core.Variant.isSet(i,k)&&qx.bom.client.Feature.SSL){c=this.self(arguments).__hf[d];
}return c+qx.$$libraries[d].resourceUri+l+a;
}},defer:function(w){if(qx.core.Variant.isSet(i,k)){if(qx.bom.client.Feature.SSL){for(var A in qx.$$libraries){var y;

if(qx.$$libraries[A].resourceUri){y=qx.$$libraries[A].resourceUri;
}else{w.__hf[A]=j;
continue;
}if(y.match(/^\/\//)!=null){w.__hf[A]=window.location.protocol;
}else if(y.match(/^\.\//)!=null){var x=document.URL;
w.__hf[A]=x.substring(0,x.lastIndexOf(l)+1);
}else if(y.match(/^http/)!=null){}else{var B=window.location.href.indexOf(h);
var z;

if(B==-1){z=window.location.href;
}else{z=window.location.href.substring(0,B);
}w.__hf[A]=z.substring(0,z.lastIndexOf(l)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__hg:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__hg();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(w){var w=w||t;
this.__hh=w;
this.length=w.length;
},members:{$$isString:true,length:0,__hh:null,toString:function(){return this.__hh;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(u,v){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){{};
var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__hi=c;
this.__hj=d;
},members:{__hi:null,__hj:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hi,this.__hj);
}}});
})();
(function(){var o="_",n="",m="_applyLocale",l="changeLocale",k="C",j="qx.dynlocale",h="on",g="qx.locale.Manager",f="String",e="singleton";
qx.Class.define(g,{type:e,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hk=qx.$$translations||{};
this.__hl=qx.$$locales||{};
var C=qx.bom.client.Locale;
var A=C.LOCALE;
var B=C.VARIANT;

if(B!==n){A+=o+B;
}this.setLocale(A||this.__hm);
},statics:{tr:function(F,G){var H=qx.lang.Array.fromArguments(arguments);
H.splice(0,1);
return qx.locale.Manager.getInstance().translate(F,H);
},trn:function(I,J,K,L){var M=qx.lang.Array.fromArguments(arguments);
M.splice(0,3);
if(K!=1){return qx.locale.Manager.getInstance().translate(J,M);
}else{return qx.locale.Manager.getInstance().translate(I,M);
}},trc:function(a,b,c){var d=qx.lang.Array.fromArguments(arguments);
d.splice(0,2);
return qx.locale.Manager.getInstance().translate(b,d);
},marktr:function(x){return x;
}},properties:{locale:{check:f,nullable:true,apply:m,event:l}},members:{__hm:k,__hn:null,__ho:null,__hk:null,__hl:null,getLanguage:function(){return this.__ho;
},getTerritory:function(){return this.getLocale().split(o)[1]||n;
},getAvailableLocales:function(){var E=[];

for(var D in this.__hl){if(D!=this.__hm){E.push(D);
}}return E;
},__hp:function(ba){var bc;
var bb=ba.indexOf(o);

if(bb==-1){bc=ba;
}else{bc=ba.substring(0,bb);
}return bc;
},_applyLocale:function(y,z){this.__hn=y;
this.__ho=this.__hp(y);
},addTranslation:function(V,W){var X=this.__hk;

if(X[V]){for(var Y in W){X[V][Y]=W[Y];
}}else{X[V]=W;
}},addLocale:function(t,u){var v=this.__hl;

if(v[t]){for(var w in u){v[t][w]=u[w];
}}else{v[t]=u;
}},translate:function(p,q,r){var s=this.__hk;
return this.__hq(s,p,q,r);
},localize:function(bd,be,bf){var bg=this.__hl;
return this.__hq(bg,bd,be,bf);
},__hq:function(N,O,P,Q){var R;

if(!N){return O;
}
if(Q){var T=this.__hp(Q);
}else{Q=this.__hn;
T=this.__ho;
}if(!R&&N[Q]){R=N[Q][O];
}if(!R&&N[T]){R=N[T][O];
}if(!R&&N[this.__hm]){R=N[this.__hm][O];
}
if(!R){R=O;
}
if(P.length>0){var S=[];

for(var i=0;i<P.length;i++){var U=P[i];

if(U&&U.translate){S[i]=U.translate();
}else{S[i]=U;
}}R=qx.lang.String.format(R,S);
}
if(qx.core.Variant.isSet(j,h)){R=new qx.locale.LocalizedString(R,O,P);
}return R;
}},destruct:function(){this.__hk=this.__hl=null;
}});
})();
(function(){var n="px",m="qx.client",l="div",k="img",j="",i="no-repeat",h="scale-x",g="mshtml",f="scale",d="scale-y",J="qx/icon",I="repeat",H=".png",G="crop",F="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",E='<div style="',D="repeat-y",C='<img src="',B="qx.bom.element.Decoration",A="', sizingMethod='",u="png",v="')",s='"></div>',t='"/>',q='" style="',r="none",o="webkit",p=" ",w="repeat-x",x="DXImageTransform.Microsoft.AlphaImageLoader",z="qx/static/blank.gif",y="absolute";
qx.Class.define(B,{statics:{DEBUG:false,__hr:{},__hs:qx.core.Variant.isSet(m,g),__ht:qx.core.Variant.select(m,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hu:{"scale-x":k,"scale-y":k,"scale":k,"repeat":l,"no-repeat":l,"repeat-x":l,"repeat-y":l},update:function(bK,bL,bM,bN){var bP=this.getTagName(bM,bL);

if(bP!=bK.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bQ=this.getAttributes(bL,bM,bN);

if(bP===k){bK.src=bQ.src||qx.util.ResourceManager.getInstance().toUri(z);
}if(bK.style.backgroundPosition!=j&&bQ.style.backgroundPosition===undefined){bQ.style.backgroundPosition=null;
}if(bK.style.clip!=j&&bQ.style.clip===undefined){bQ.style.clip=null;
}var bO=qx.bom.element.Style;
bO.setStyles(bK,bQ.style);
if(this.__hs){try{bK.filters[x].apply();
}catch(e){}}},create:function(bw,bx,by){var bz=this.getTagName(bx,bw);
var bB=this.getAttributes(bw,bx,by);
var bA=qx.bom.element.Style.compile(bB.style);

if(bz===k){return C+bB.src+q+bA+t;
}else{return E+bA+s;
}},getTagName:function(bj,bk){if(qx.core.Variant.isSet(m,g)){if(bk&&this.__hs&&this.__ht[bj]&&qx.lang.String.endsWith(bk,H)){return l;
}}return this.__hu[bj];
},getAttributes:function(bV,bW,bX){if(!bX){bX={};
}
if(!bX.position){bX.position=y;
}
if(qx.core.Variant.isSet(m,g)){bX.fontSize=0;
bX.lineHeight=0;
}else if(qx.core.Variant.isSet(m,o)){bX.WebkitUserDrag=r;
}var ca=qx.util.ResourceManager.getInstance().getImageFormat(bV)||qx.io.ImageLoader.getFormat(bV);
{};
var bY;
if(this.__hs&&this.__ht[bW]&&ca===u){bY=this.__hx(bX,bW,bV);
}else{if(bW===f){bY=this.__hy(bX,bW,bV);
}else if(bW===h||bW===d){bY=this.__hz(bX,bW,bV);
}else{bY=this.__hC(bX,bW,bV);
}}return bY;
},__hv:function(a,b,c){if(a.width==null&&b!=null){a.width=b+n;
}
if(a.height==null&&c!=null){a.height=c+n;
}return a;
},__hw:function(bC){var bD=qx.util.ResourceManager.getInstance().getImageWidth(bC)||qx.io.ImageLoader.getWidth(bC);
var bE=qx.util.ResourceManager.getInstance().getImageHeight(bC)||qx.io.ImageLoader.getHeight(bC);
return {width:bD,height:bE};
},__hx:function(bp,bq,br){var bu=this.__hw(br);
bp=this.__hv(bp,bu.width,bu.height);
var bt=bq==i?G:f;
var bs=F+qx.util.ResourceManager.getInstance().toUri(br)+A+bt+v;
bp.filter=bs;
bp.backgroundImage=bp.backgroundRepeat=j;
return {style:bp};
},__hy:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().toUri(bH);
var bJ=this.__hw(bH);
bF=this.__hv(bF,bJ.width,bJ.height);
return {src:bI,style:bF};
},__hz:function(ba,bb,bc){var bh=qx.util.ResourceManager.getInstance();
var bf=bh.isClippedImage(bc);
var bi=this.__hw(bc);

if(bf){var be=bh.getData(bc);
var bd=bh.toUri(be[4]);

if(bb===h){ba=this.__hA(ba,be,bi.height);
}else{ba=this.__hB(ba,be,bi.width);
}return {src:bd,style:ba};
}else{{};

if(bb==h){ba.height=bi.height==null?null:bi.height+n;
}else if(bb==d){ba.width=bi.width==null?null:bi.width+n;
}var bd=bh.toUri(bc);
return {src:bd,style:ba};
}},__hA:function(bR,bS,bT){var bU=qx.util.ResourceManager.getInstance().getImageHeight(bS[4]);
bR.clip={top:-bS[6],height:bT};
bR.height=bU+n;
if(bR.top!=null){bR.top=(parseInt(bR.top,10)+bS[6])+n;
}else if(bR.bottom!=null){bR.bottom=(parseInt(bR.bottom,10)+bT-bU-bS[6])+n;
}return bR;
},__hB:function(bl,bm,bn){var bo=qx.util.ResourceManager.getInstance().getImageWidth(bm[4]);
bl.clip={left:-bm[5],width:bn};
bl.width=bo+n;
if(bl.left!=null){bl.left=(parseInt(bl.left,10)+bm[5])+n;
}else if(bl.right!=null){bl.right=(parseInt(bl.right,10)+bn-bo-bm[5])+n;
}return bl;
},__hC:function(R,S,T){var Y=qx.util.ResourceManager.getInstance().isClippedImage(T);
var X=this.__hw(T);
if(Y&&S!==I){var W=qx.util.ResourceManager.getInstance().getData(T);
var V=qx.bom.element.Background.getStyles(W[4],S,W[5],W[6]);

for(var U in V){R[U]=V[U];
}
if(X.width!=null&&R.width==null&&(S==D||S===i)){R.width=X.width+n;
}
if(X.height!=null&&R.height==null&&(S==w||S===i)){R.height=X.height+n;
}return {style:R};
}else{{};
R=this.__hv(R,X.width,X.height);
R=this.__hD(R,T,S);
return {style:R};
}},__hD:function(K,L,M){var top=null;
var Q=null;

if(K.backgroundPosition){var N=K.backgroundPosition.split(p);
Q=parseInt(N[0]);

if(isNaN(Q)){Q=N[0];
}top=parseInt(N[1]);

if(isNaN(top)){top=N[1];
}}var P=qx.bom.element.Background.getStyles(L,M,Q,top);

for(var O in P){K[O]=P[O];
}if(K.filter){K.filter=j;
}return K;
},__hE:function(bv){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bv)&&bv.indexOf(J)==-1){if(!this.__hr[bv]){qx.log.Logger.debug("Potential clipped image candidate: "+bv);
this.__hr[bv]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(m,{"mshtml":function(){return qx.bom.element.Decoration.__hs;
},"default":function(){return false;
}})}});
})();
(function(){var c="qx.client",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__hF:{},__hG:{width:null,height:null},__hH:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(u){var v=this.__hF[u];
return !!(v&&v.loaded);
},isFailed:function(d){var e=this.__hF[d];
return !!(e&&e.failed);
},isLoading:function(m){var n=this.__hF[m];
return !!(n&&n.loading);
},getFormat:function(y){var z=this.__hF[y];
return z?z.format:null;
},getSize:function(w){var x=this.__hF[w];
return x?
{width:x.width,height:x.height}:this.__hG;
},getWidth:function(F){var G=this.__hF[F];
return G?G.width:null;
},getHeight:function(C){var D=this.__hF[C];
return D?D.height:null;
},load:function(o,p,q){var r=this.__hF[o];

if(!r){r=this.__hF[o]={};
}if(p&&!q){q=window;
}if(r.loaded||r.loading||r.failed){if(p){if(r.loading){r.callbacks.push(p,q);
}else{p.call(q,o,r);
}}}else{r.loading=true;
r.callbacks=[];

if(p){r.callbacks.push(p,q);
}var t=new Image();
var s=qx.lang.Function.listener(this.__hI,this,t,o);
t.onload=s;
t.onerror=s;
t.src=o;
}},__hI:qx.event.GlobalError.observeMethod(function(event,f,g){var h=this.__hF[g];
if(event.type===b){h.loaded=true;
h.width=this.__hJ(f);
h.height=this.__hK(f);
var j=this.__hH.exec(g);

if(j!=null){h.format=j[1];
}}else{h.failed=true;
}f.onload=f.onerror=null;
var k=h.callbacks;
delete h.loading;
delete h.callbacks;
for(var i=0,l=k.length;i<l;i+=2){k[i].call(k[i+1],g,h);
}}),__hJ:qx.core.Variant.select(c,{"gecko":function(E){return E.naturalWidth;
},"default":function(H){return H.width;
}}),__hK:qx.core.Variant.select(c,{"gecko":function(A){return A.naturalHeight;
},"default":function(B){return B.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__hL:[i,null,h,b,null,j,e,null,j],__hM:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__hN:function(t,top){var u=qx.bom.client.Engine;

if(u.GECKO&&u.VERSION<1.9&&t==top&&typeof t==m){top+=0.01;
}
if(t){var v=(typeof t==m)?t+k:t;
}else{v=l;
}
if(top){var w=(typeof top==m)?top+k:top;
}else{w=l;
}return v+d+w;
},compile:function(x,y,z,top){var A=this.__hN(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C=this.__hL;
C[1]=B;
C[4]=A;
C[7]=y;
return C.join(g);
},getStyles:function(D,E,F,top){if(!D){return this.__hM;
}var G=this.__hN(F,top);
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
}}},_createDomElement:function(){var m=this._getProperty(i);
var n=m?i:h;

if(qx.core.Variant.isSet(g,f)){var l=this._getProperty(j);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(n,l));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(n));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(k){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(o){this._setProperty(j,o);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(p){this._setProperty(i,p);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var S="nonScaled",R="scaled",Q="alphaScaled",P=".png",O="qx.client",N="div",M="replacement",L="qx.event.type.Event",K="hidden",J="Boolean",bi="px",bh="scale",bg="changeSource",bf="qx.ui.basic.Image",be="loaded",bd="-disabled.$1",bc="loadingFailed",bb="String",ba="__hW",Y="_applySource",W="img",X="image",U="mshtml",V="_applyScale",T="no-repeat";
qx.Class.define(bf,{extend:qx.ui.core.Widget,construct:function(bp){this.__hW={};
qx.ui.core.Widget.call(this);

if(bp){this.setSource(bp);
}},properties:{source:{check:bb,init:null,nullable:true,event:bg,apply:Y,themeable:true},scale:{check:J,init:false,themeable:true,apply:V},appearance:{refine:true,init:X},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:L,loaded:L},members:{__hX:null,__hY:null,__ia:null,__hW:null,getContentElement:function(){return this.__ie();
},_createContentElement:function(){return this.__ie();
},_getContentHint:function(){return {width:this.__hX||0,height:this.__hY||0};
},_applyEnabled:function(i,j){qx.ui.core.Widget.prototype._applyEnabled.call(this,i,j);

if(this.getSource()){this._styleSource();
}},_applySource:function(c){this._styleSource();
},_applyScale:function(bo){this._styleSource();
},__ib:function(bj){this.__ia=bj;
},__ic:function(){if(this.__ia==null){var b=this.getSource();
var a=false;

if(b!=null){a=qx.lang.String.endsWith(b,P);
}
if(this.getScale()&&a&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__ia=Q;
}else if(this.getScale()){this.__ia=R;
}else{this.__ia=S;
}}return this.__ia;
},__id:function(bk){var bl;
var bm;

if(bk==Q){bl=true;
bm=N;
}else if(bk==S){bl=false;
bm=N;
}else{bl=true;
bm=W;
}var bn=new qx.html.Image(bm);
bn.setScale(bl);
bn.setStyles({"overflowX":K,"overflowY":K});
return bn;
},__ie:function(){var E=this.__ic();

if(this.__hW[E]==null){this.__hW[E]=this.__id(E);
}return this.__hW[E];
},_styleSource:function(){var p=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!p){this.getContentElement().resetSource();
return;
}this.__if(p);

if(qx.core.Variant.isSet(O,U)){var q=this.getScale()?bh:T;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(q,p);
}if(qx.util.ResourceManager.getInstance().has(p)){this.__ih(this.getContentElement(),p);
}else if(qx.io.ImageLoader.isLoaded(p)){this.__ii(this.getContentElement(),p);
}else{this.__ij(this.getContentElement(),p);
}},__if:qx.core.Variant.select(O,{"mshtml":function(u){var w=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var v=qx.lang.String.endsWith(u,P);

if(w&&v){if(this.getScale()&&this.__ic()!=Q){this.__ib(Q);
}else if(!this.getScale()&&this.__ic()!=S){this.__ib(S);
}}else{if(this.getScale()&&this.__ic()!=R){this.__ib(R);
}else if(!this.getScale()&&this.__ic()!=S){this.__ib(S);
}}this.__ig(this.__ie());
},"default":function(d){if(this.getScale()&&this.__ic()!=R){this.__ib(R);
}else if(!this.getScale()&&this.__ic(S)){this.__ib(S);
}this.__ig(this.__ie());
}}),__ig:function(x){var A=this.getContainerElement();
var B=A.getChild(0);

if(B!=x){if(B!=null){var D=bi;
var y={};
var z=this.getInnerSize();

if(z!=null){y.width=z.width+D;
y.height=z.height+D;
}var C=this.getInsets();
y.left=C.left+D;
y.top=C.top+D;
y.zIndex=10;
x.setStyles(y,true);
x.setSelectable(this.getSelectable());
}A.removeAt(0);
A.addAt(x,0);
}},__ih:function(e,f){var h=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var g=f.replace(/\.([a-z]+)$/,bd);

if(h.has(g)){f=g;
this.addState(M);
}else{this.removeState(M);
}}if(e.getSource()===f){return;
}e.setSource(f);
this.__il(h.getImageWidth(f),h.getImageHeight(f));
},__ii:function(k,l){var n=qx.io.ImageLoader;
k.setSource(l);
var m=n.getWidth(l);
var o=n.getHeight(l);
this.__il(m,o);
},__ij:function(r,s){var self;
var t=qx.io.ImageLoader;
{};
if(!t.isFailed(s)){t.load(s,this.__ik,this);
}else{if(r!=null){r.resetSource();
}}},__ik:function(H,I){if(this.$$disposed===true){return;
}if(H!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(I.failed){this.warn("Image could not be loaded: "+H);
this.fireEvent(bc);
}else{this.fireEvent(be);
}this._styleSource();
},__il:function(F,G){if(F!==this.__hX||G!==this.__hY){this.__hX=F;
this.__hY=G;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(ba);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__is=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__is:null,_applyTimeoutInterval:function(h){this.__is.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__is){this.__is.stop();
}this.__is=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b="direct",a='__it';
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__it=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__iu:null,compute:function(t,u,v,w,x,y,z){this.__iu=this.__iu||new qx.util.placement.Placement();
var C=x.split(f);
var B=C[0];
var A=C[1];
this.__iu.set({axisX:this.__iy(y),axisY:this.__iy(z),edge:B,align:A});
return this.__iu.compute(t,u,v,w);
},__iv:null,__iw:null,__ix:null,__iy:function(K){switch(K){case b:this.__iv=this.__iv||new qx.util.placement.DirectAxis();
return this.__iv;
case d:this.__iw=this.__iw||new qx.util.placement.KeepAlignAxis();
return this.__iw;
case c:this.__ix=this.__ix||new qx.util.placement.BestFitAxis();
return this.__ix;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__it:null,compute:function(D,E,F,G){{};
var H=this.getAxisX()||this.__it;
var J=H.computeStart(D.width,{start:F.left,end:F.right},{start:G.left,end:G.right},E.width,this.__iz());
var I=this.getAxisY()||this.__it;
var top=I.computeStart(D.height,{start:F.top,end:F.bottom},{start:G.top,end:G.bottom},E.height,this.__iA());
return {left:J,top:top};
},__iz:function(){var q=this.getEdge();
var p=this.getAlign();

if(q==l){return i;
}else if(q==n){return g;
}else if(p==l){return k;
}else if(p==n){return h;
}},__iA:function(){var s=this.getEdge();
var r=this.getAlign();

if(s==o){return i;
}else if(s==m){return g;
}else if(r==o){return k;
}else if(r==m){return h;
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(k,l,m,n){switch(n){case e:return l.start-m.end-k;
case b:return l.end+m.start;
case d:return l.start+m.start;
case c:return l.end-m.end-k;
}},_isInRange:function(o,p,q){return o>=0&&o+p<=q;
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
(function(){var i="mousedown",h="blur",g="__mH",f="singleton",d="qx.ui.popup.Manager";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mH={};
qx.event.Registration.addListener(document.documentElement,i,this.__mJ,this,true);
qx.bom.Element.addListener(window,h,this.hideAll,this);
},members:{__mH:null,add:function(l){{};
this.__mH[l.$$hash]=l;
this.__mI();
},remove:function(j){{};
var k=this.__mH;

if(k){delete k[j.$$hash];
this.__mI();
}},hideAll:function(){var r=this.__mH;

if(r){for(var q in r){r[q].exclude();
}}},__mI:function(){var c=1e7;
var b=this.__mH;

for(var a in b){b[a].setZIndex(c++);
}},__mJ:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__mH;

for(var n in p){var m=p[n];

if(!m.getAutoHide()||o==m||qx.ui.core.Widget.contains(m,o)){continue;
}m.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,i,this.__mJ,this,true);
this._disposeMap(g);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__iF:null,_invalidChildrenCache:null,__iG:null,invalidateLayoutCache:function(){this.__iF=null;
},renderLayout:function(g,h){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__iF){return this.__iF;
}return this.__iF=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(c){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var i=this.__iG;

if(i instanceof qx.ui.core.LayoutItem){i.clearSeparators();
}},_renderSeparator:function(d,e){this.__iG.renderSeparator(d,e);
},connectToWidget:function(f){if(f&&this.__iG){throw new Error("It is not possible to manually set the connected widget.");
}this.__iG=f;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__iG;
},_applyLayoutChange:function(){if(this.__iG){this.__iG.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__iG.getLayoutChildren();
}},destruct:function(){this.__iG=this.__iF=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var f,h,e,d;
for(var i=0,l=g.length;i<l;i++){f=g[i];
h=f.getSizeHint();
e=b;

if(e<h.minWidth){e=h.minWidth;
}else if(e>h.maxWidth){e=h.maxWidth;
}d=c;

if(d<h.minHeight){d=h.minHeight;
}else if(d>h.maxHeight){d=h.maxHeight;
}f.renderLayout(0,0,e,d);
}},_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,s;
var r=0,p=0;
var n=0,k=0;
var j=Infinity,m=Infinity;
for(var i=0,l=q.length;i<l;i++){o=q[i];
s=o.getSizeHint();
r=Math.max(r,s.width);
p=Math.max(p,s.height);
n=Math.max(n,s.minWidth);
k=Math.max(k,s.minHeight);
j=Math.min(j,s.maxWidth);
m=Math.min(m,s.maxHeight);
}return {width:r,height:p,minWidth:n,minHeight:k,maxWidth:j,maxHeight:m};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",w="changeIcon",v="qx.ui.basic.Atom",u="changeLabel",t="Integer",s="_applyIconPosition",r="top",q="right",p="_applyRich",o="_applyIcon",n="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(E,F){{};
qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(E!=null){this.setLabel(E);
}
if(F!=null){this.setIcon(F);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:u},rich:{check:h,init:false,apply:p},icon:{check:f,apply:o,nullable:true,themeable:true,event:w},gap:{check:t,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[r,q,b,e],themeable:true,apply:s},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(J){var K;

switch(J){case j:K=new qx.ui.basic.Label(this.getLabel());
K.setAnonymous(true);
K.setRich(this.getRich());
this._add(K);

if(this.getLabel()==null||this.getShow()===i){K.exclude();
}break;
case i:K=new qx.ui.basic.Image(this.getIcon());
K.setAnonymous(true);
this._addAt(K,0);

if(this.getIcon()==null||this.getShow()===j){K.exclude();
}break;
}return K||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,J);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(z,A){var B=this.getChildControl(j,true);

if(B){B.setValue(z);
}this._handleLabel();
},_applyRich:function(G,H){var I=this.getChildControl(j,true);

if(I){I.setRich(G);
}},_applyIcon:function(P,Q){var R=this.getChildControl(i,true);

if(R){R.setSource(P);
}this._handleIcon();
},_applyGap:function(C,D){this._getLayout().setGap(C);
},_applyShow:function(N,O){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(L,M){this._getLayout().setIconPosition(L);
},_applyCenter:function(x,y){this._getLayout().setCenter(x);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var v=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,w,p;
var B,u;
var z=this.getGap();
var E=this.getCenter();
if(o===k||o===f){var x=length-1;
var s=-1;
var q=-1;
}else{var x=0;
var s=length;
var q=1;
}if(o==h||o==k){if(E){var A=0;

for(var i=x;i!=s;i+=q){p=r[i].getSizeHint().height;

if(p>0){A+=p;

if(i!=x){A+=z;
}}}top=Math.round((m-A)/2);
}else{top=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
w=Math.min(u.maxWidth,Math.max(l,u.minWidth));
p=u.height;
F=v.computeHorizontalAlignOffset(d,w,l);
B.renderLayout(F,top,w,p);
if(p>0){top+=p+z;
}}}else{var t=l;
var n=null;
var D=0;

for(var i=x;i!=s;i+=q){B=r[i];
w=B.getSizeHint().width;

if(w>0){if(!n&&B instanceof qx.ui.basic.Label){n=B;
}else{t-=w;
}D++;
}}
if(D>1){var C=(D-1)*z;
t-=C;
}
if(n){var u=n.getSizeHint();
var y=Math.max(u.minWidth,Math.min(t,u.maxWidth));
t-=y;
}
if(E&&t>0){F=Math.round(t/2);
}else{F=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
p=Math.min(u.maxHeight,Math.max(m,u.minHeight));

if(B===n){w=y;
}else{w=u.width;
}top=v.computeVerticalAlignOffset(e,u.height,m);
B.renderLayout(F,top,w,p);
if(w>0){F+=w+z;
}}}},_computeSizeHint:function(){var Q=this._getLayoutChildren();
var length=Q.length;
var I,O;
if(length===1){var I=Q[0].getSizeHint();
O={width:I.width,height:I.height,minWidth:I.minWidth,minHeight:I.minHeight};
}else{var M=0,N=0;
var J=0,L=0;
var K=this.getIconPosition();
var P=this.getGap();

if(K===h||K===k){var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
N=Math.max(N,I.width);
M=Math.max(M,I.minWidth);
if(I.height>0){L+=I.height;
J+=I.minHeight;
G++;
}}
if(G>1){var H=(G-1)*P;
L+=H;
J+=H;
}}else{var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
L=Math.max(L,I.height);
J=Math.max(J,I.minHeight);
if(I.width>0){N+=I.width;
M+=I.minWidth;
G++;
}}
if(G>1){var H=(G-1)*P;
N+=H;
M+=H;
}}O={minWidth:M,width:N,minHeight:J,height:L};
}return O;
}}});
})();
(function(){var o="middle",n="qx.ui.layout.Util",m="left",k="center",j="top",h="bottom",g="right";
qx.Class.define(n,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(z,A,B){var D,H,C,I;
var E=A>B;
var J=Math.abs(A-B);
var K,F;
var G={};

for(H in z){D=z[H];
G[H]={potential:E?D.max-D.value:D.value-D.min,flex:E?D.flex:1/D.flex,offset:0};
}while(J!=0){I=Infinity;
C=0;

for(H in G){D=G[H];

if(D.potential>0){C+=D.flex;
I=Math.min(I,D.potential/D.flex);
}}if(C==0){break;
}I=Math.min(J,I*C)/C;
K=0;

for(H in G){D=G[H];

if(D.potential>0){F=Math.min(J,D.potential,Math.ceil(I*D.flex));
K+=F-I*D.flex;

if(K>=1){K-=1;
F-=1;
}D.potential-=F;

if(E){D.offset+=F;
}else{D.offset-=F;
}J-=F;
}}}return G;
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
},collapseMargins:function(L){var M=0,O=0;

for(var i=0,l=arguments.length;i<l;i++){var N=arguments[i];

if(N<0){O=Math.min(O,N);
}else if(N>0){M=Math.max(M,N);
}}return M+O;
},computeHorizontalGaps:function(v,w,x){if(w==null){w=0;
}var y=0;

if(x){y+=v[0].getMarginLeft();

for(var i=1,l=v.length;i<l;i+=1){y+=this.collapseMargins(w,v[i-1].getMarginRight(),v[i].getMarginLeft());
}y+=v[l-1].getMarginRight();
}else{for(var i=1,l=v.length;i<l;i+=1){y+=v[i].getMarginLeft()+v[i].getMarginRight();
}y+=(w*(l-1));
}return y;
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
},computeVerticalSeparatorGaps:function(bi,bj,bk){var bn=qx.theme.manager.Decoration.getInstance().resolve(bk);
var bm=bn.getInsets();
var bl=bm.top+bm.bottom;
var bo=0;

for(var i=0,l=bi.length;i<l;i++){var bp=bi[i];
bo+=bp.getMarginTop()+bp.getMarginBottom();
}bo+=(bj+bl+bj)*(l-1);
return bo;
},arrangeIdeals:function(p,q,r,s,t,u){if(q<p||t<s){if(q<p&&t<s){q=p;
t=s;
}else if(q<p){t-=(p-q);
q=p;
if(t<s){t=s;
}}else if(t<s){q-=(s-t);
t=s;
if(q<p){q=p;
}}}
if(q>r||t>u){if(q>r&&t>u){q=r;
t=u;
}else if(q>r){t+=(q-r);
q=r;
if(t>u){t=u;
}}else if(t>u){q+=(t-u);
t=u;
if(q>r){q=r;
}}}return {begin:q,end:t};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="qx.dynlocale",j="text",i="Boolean",h="color",g="userSelect",f="changeLocale",d="enabled",c="none",b="on",a="_applyTextAlign",H="qx.ui.core.Widget",G="nowrap",F="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.client",B="changeContent",A="qx.ui.basic.Label",z="A",y="whiteSpace",r="_applyValue",s="center",p="_applyBuddy",q="String",n="textAlign",o="right",l="changeRich",m="normal",t="_applyRich",u="click",w="label",v="webkit",x="left";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(N){qx.ui.core.Widget.call(this);

if(N!=null){this.setValue(N);
}
if(qx.core.Variant.isSet(k,b)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:l,apply:t},wrap:{check:i,init:true,apply:E},value:{check:q,apply:r,event:D,nullable:true},buddy:{check:H,apply:p,nullable:true,init:null,dereference:true},textAlign:{check:[x,s,o],nullable:true,themeable:true,apply:a,event:F},appearance:{refine:true,init:w},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iH:null,__iI:null,__iJ:null,__iK:null,_getContentHint:function(){if(this.__iI){this.__iL=this.__iM();
delete this.__iI;
}return {width:this.__iL.width,height:this.__iL.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(S){if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){if(S&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,S);
if(qx.core.Variant.isSet(C,v)){this.getContainerElement().setStyle(g,S?j:c);
this.getContentElement().setStyle(g,S?j:c);
}},_getContentHeightForWidth:function(O){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__iM(O).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(W,X){this.getContentElement().setStyle(n,W);
},_applyTextColor:function(P,Q){if(P){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(P));
}else{this.getContentElement().removeStyle(h);
}},__iL:{width:0,height:0},_applyFont:function(K,L){var M;

if(K){this.__iH=qx.theme.manager.Font.getInstance().resolve(K);
M=this.__iH.getStyles();
}else{this.__iH=null;
M=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(M);
this.__iI=true;
qx.ui.core.queue.Layout.add(this);
},__iM:function(bc){var bg=qx.bom.Label;
var be=this.getFont();
var bd=be?this.__iH.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var bf=this.getRich();
return bf?bg.getHtmlSize(content,bd,bc):bg.getTextSize(content,bd);
},_applyBuddy:function(ba,bb){if(bb!=null){bb.removeBinding(this.__iJ);
this.__iJ=null;
this.removeListenerById(this.__iK);
this.__iK=null;
}
if(ba!=null){this.__iJ=ba.bind(d,this,d);
this.__iK=this.addListener(u,function(){if(ba.isFocusable()){ba.focus.apply(ba);
}},this);
}},_applyRich:function(Y){this.getContentElement().setRich(Y);
this.__iI=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(T,U){if(T&&!this.isRich()){{};
}
if(this.isRich()){var V=T?m:G;
this.getContentElement().setStyle(y,V);
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(I,J){this.getContentElement().setValue(I);
this.__iI=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(B,I,J);
}},destruct:function(){if(qx.core.Variant.isSet(k,b)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__iJ!=null){var R=this.getBuddy();

if(R!=null&&!R.isDisposed()){R.removeBinding(this.__iJ);
}}this.__iH=this.__iJ=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__iN:null,_applyProperty:function(name,e){qx.html.Element.prototype._applyProperty.call(this,name,e);

if(name==b){var f=this.getDomElement();
qx.bom.Label.setValue(f,e);
}},_createDomElement:function(){var j=this.__iN;
var i=qx.bom.Label.create(this._content,j);
return i;
},_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(c){var d=this.getDomElement();

if(d){throw new Error("The label mode cannot be modified after initial creation");
}c=!!c;

if(this.__iN==c){return;
}this.__iN=c;
return this;
},setValue:function(g){this._setProperty(b,g);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var o="div",n="inherit",m="text",l="value",k="",j="hidden",i="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",h="nowrap",g="qx.client",f="auto",E="0",D="ellipsis",C="normal",B="label",A="px",z="crop",y="gecko",x="end",w="100%",v="visible",t="qx.bom.Label",u="opera",r="block",s="none",p="-1000px",q="absolute";
qx.Class.define(t,{statics:{__iO:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iP:function(){var W=this.__iR(false);
document.body.insertBefore(W,document.body.firstChild);
return this._textElement=W;
},__iQ:function(){var Q=this.__iR(true);
document.body.insertBefore(Q,document.body.firstChild);
return this._htmlElement=Q;
},__iR:function(a){var b=qx.bom.Element.create(o);
var c=b.style;
c.width=c.height=f;
c.left=c.top=p;
c.visibility=j;
c.position=q;
c.overflow=v;

if(a){c.whiteSpace=C;
}else{c.whiteSpace=h;

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var d=document.createElementNS(i,B);
var c=d.style;
c.padding=E;

for(var e in this.__iO){c[e]=n;
}b.appendChild(d);
}}return b;
},__iS:function(F){var G={};

if(F){G.whiteSpace=C;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){G.display=r;
}else{G.overflow=j;
G.whiteSpace=h;
G.textOverflow=D;
G.userSelect=s;
if(qx.core.Variant.isSet(g,u)){G.OTextOverflow=D;
}}return G;
},create:function(content,X,Y){if(!Y){Y=window;
}
if(X){var ba=Y.document.createElement(o);
ba.useHtml=true;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var ba=Y.document.createElement(o);
var bc=Y.document.createElementNS(i,B);
var bb=bc.style;
bb.cursor=n;
bb.color=n;
bb.overflow=j;
bb.maxWidth=w;
bb.padding=E;
for(var bd in this.__iO){bc.style[bd]=n;
}bc.setAttribute(z,x);
ba.appendChild(bc);
}else{var ba=Y.document.createElement(o);
qx.bom.element.Style.setStyles(ba,this.__iS(X));
}
if(content){this.setValue(ba,content);
}return ba;
},setValue:function(H,I){I=I||k;

if(H.useHtml){H.innerHTML=I;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){H.firstChild.setAttribute(l,I);
}else{qx.bom.element.Attribute.set(H,m,I);
}},getValue:function(P){if(P.useHtml){return P.innerHTML;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){return P.firstChild.getAttribute(l)||k;
}else{return qx.bom.element.Attribute.get(P,m);
}},getHtmlSize:function(content,J,K){var L=this._htmlElement||this.__iQ();
L.style.width=K!==undefined?K+A:f;
L.innerHTML=content;
return this.__iT(L,J);
},getTextSize:function(M,N){var O=this._textElement||this.__iP();

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){O.firstChild.setAttribute(l,M);
}else{qx.bom.element.Attribute.set(O,m,M);
}return this.__iT(O,N);
},__iT:function(R,S){var T=this.__iO;

if(!S){S={};
}
for(var U in T){R.style[U]=S[U]||k;
}var V=qx.bom.element.Dimension.getSize(R);

if(qx.core.Variant.isSet(g,y)){if(!qx.bom.client.Platform.WIN){V.width++;
}}return V;
}}});
})();
(function(){var i="0px",h="mshtml",g="qx.client",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="paddingTop",b="paddingBottom";
qx.Class.define(f,{statics:{getWidth:qx.core.Variant.select(g,{"gecko":function(n){if(n.getBoundingClientRect){var o=n.getBoundingClientRect();
return Math.round(o.right)-Math.round(o.left);
}else{return n.offsetWidth;
}},"default":function(j){return j.offsetWidth;
}}),getHeight:qx.core.Variant.select(g,{"gecko":function(k){if(k.getBoundingClientRect){var l=k.getBoundingClientRect();
return Math.round(l.bottom)-Math.round(l.top);
}else{return k.offsetHeight;
}},"default":function(w){return w.offsetHeight;
}}),getSize:function(a){return {width:this.getWidth(a),height:this.getHeight(a)};
},__iU:{visible:true,hidden:true},getContentWidth:function(x){var z=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getX(x);
var B=parseInt(z.get(x,d)||i,10);
var D=parseInt(z.get(x,e)||i,10);

if(this.__iU[A]){return x.clientWidth-B-D;
}else{if(x.clientWidth>=x.scrollWidth){return Math.max(x.clientWidth,x.scrollWidth)-B-D;
}else{var C=x.scrollWidth-B;
var y=qx.bom.client.Engine;

if(y.NAME===h&&y.VERSION==6){C-=D;
}return C;
}}},getContentHeight:function(p){var r=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getY(p);
var u=parseInt(r.get(p,c)||i,10);
var s=parseInt(r.get(p,b)||i,10);

if(this.__iU[t]){return p.clientHeight-u-s;
}else{if(p.clientHeight>=p.scrollHeight){return Math.max(p.clientHeight,p.scrollHeight)-u-s;
}else{var v=p.scrollHeight-u;
var q=qx.bom.client.Engine;

if(q.NAME===h&&q.VERSION==6){v-=s;
}return v;
}}},getContentSize:function(m){return {width:this.getContentWidth(m),height:this.getContentHeight(m)};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(g){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(a){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(e){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__nY",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__nY=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__nY:null,_applyBlockerColor:function(h,i){this.__nY.setColor(h);
},_applyBlockerOpacity:function(j,k){this.__nY.setOpacity(j);
},block:function(){this.__nY.block();
},isBlocked:function(){return this.__nY.isBlocked();
},unblock:function(){this.__nY.unblock();
},forceUnblock:function(){this.__nY.forceUnblock();
},blockContent:function(g){this.__nY.blockContent(g);
},isContentBlocked:function(){return this.__nY.isContentBlocked();
},unblockContent:function(){this.__nY.unblockContent();
},forceUnblockContent:function(){this.__nY.forceUnblockContent();
},getBlocker:function(){return this.__nY;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__oa",b="__ob",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__oa:null,__ob:null,getWindowManager:function(){if(!this.__ob){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ob;
},supportsMaximize:function(){return true;
},setWindowManager:function(l){if(this.__ob){this.__ob.setDesktop(null);
}l.setDesktop(this);
this.__ob=l;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(m,n){this.getWindowManager().changeActiveWindow(m,n);
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(p){if(qx.Class.isDefined(i)&&p instanceof qx.ui.window.Window){this._addWindow(p);
}},_addWindow:function(k){if(!qx.lang.Array.contains(this.getWindows(),k)){this.getWindows().push(k);
k.addListener(f,this._onChangeActive,this);
k.addListener(h,this._onChangeModal,this);
k.addListener(g,this._onChangeVisibility,this);
}
if(k.getActive()){this.setActiveWindow(k);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(j){qx.lang.Array.remove(this.getWindows(),j);
j.removeListener(f,this._onChangeActive,this);
j.removeListener(h,this._onChangeModal,this);
j.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__oa){this.__oa=[];
}return this.__oa;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(b);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__oc:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(w,x){},"default":function(s,t){var u=qx.bom.Stylesheet;
var v=this.__oc;

if(!v){this.__oc=v=u.createElement();
}u.removeAllRules(v);

if(s){u.addRule(v,a,qx.bom.element.Cursor.compile(s).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(q,r){if(q){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(y,z){if(z===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(y===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__oc=null;
},defer:function(A,B){qx.ui.core.MChildrenHandling.remap(B);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(y){this.__od=qx.dom.Node.getWindow(y);
this.__oe=y;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__od,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__od:null,__oe:null,_createContainerElement:function(){var o=this.__oe;
if(qx.core.Variant.isSet(f,k)){if(!o.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var s=o.documentElement.style;
var p=o.body.style;
s.overflow=p.overflow=g;
s.padding=s.margin=p.padding=p.margin=l;
s.width=s.height=p.width=p.height=c;
var r=o.createElement(d);
o.body.appendChild(r);
var q=new qx.html.Root(r);
q.setStyle(m,b);
q.setAttribute(i,this.toHashCode());
return q;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var t=qx.bom.Viewport.getWidth(this.__od);
var u=qx.bom.Viewport.getHeight(this.__od);
return {minWidth:t,width:t,maxWidth:t,minHeight:u,height:u,maxHeight:u};
},_applyPadding:function(z,A,name){if(z&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,z,A,name);
},_applyDecorator:function(v,w){qx.ui.root.Abstract.prototype._applyDecorator.call(this,v,w);

if(!v){return;
}var x=this.getDecoratorElement().getInsets();

if(x.left||x.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__od=this.__oe=null;
}});
})();
(function(){var o="zIndex",n="px",m="keydown",l="deactivate",k="resize",j="keyup",h="keypress",g="backgroundColor",f="_applyOpacity",d="Boolean",A="__nN",z="opacity",y="interval",x="Tab",w="__nP",v="Color",u="qx.ui.root.Page",t="Number",s="__nL",r="qx.ui.core.Blocker",p="qx.ui.root.Application",q="_applyColor";
qx.Class.define(r,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this._widget=c;
this._isPageRoot=(qx.Class.isDefined(u)&&c instanceof qx.ui.root.Page);

if(this._isPageRoot){c.addListener(k,this.__nQ,this);
}
if(qx.Class.isDefined(p)&&c instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__nI=[];
this.__nJ=[];
this.__nK=[];
},properties:{color:{check:v,init:null,nullable:true,apply:q,themeable:true},opacity:{check:t,init:1,apply:f,themeable:true},keepBlockerActive:{check:d,init:false}},members:{__nL:null,__nM:0,__nN:null,__nK:null,__nI:null,__nJ:null,__nO:null,__nP:null,_isPageRoot:false,_widget:null,__nQ:function(e){var M=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:M.width,height:M.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:M.width,height:M.height});
}},_applyColor:function(I,J){var K=qx.theme.manager.Color.getInstance().resolve(I);
this.__nR(g,K);
},_applyOpacity:function(T,U){this.__nR(z,T);
},__nR:function(B,C){var D=[];
this.__nL&&D.push(this.__nL);
this.__nN&&D.push(this.__nN);

for(var i=0;i<D.length;i++){D[i].setStyle(B,C);
}},_backupActiveWidget:function(){var Q=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__nI.push(Q.getActive());
this.__nJ.push(Q.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var P=this.__nI.length;

if(P>0){var O=this.__nI[P-1];

if(O){qx.bom.Element.activate(O);
}this.__nI.pop();
}var N=this.__nJ.length;

if(N>0){var O=this.__nJ[N-1];

if(O){qx.bom.Element.focus(this.__nJ[N-1]);
}this.__nJ.pop();
}},__nS:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__nL){this.__nL=this.__nS();
this.__nL.setStyle(o,15);
this._widget.getContainerElement().add(this.__nL);
this.__nL.exclude();
}return this.__nL;
},block:function(){this.__nM++;

if(this.__nM<2){this._backupActiveWidget();
var F=this.getBlockerElement();
F.include();
F.activate();
F.addListener(l,this.__nX,this);
F.addListener(h,this.__nW,this);
F.addListener(m,this.__nW,this);
F.addListener(j,this.__nW,this);
}},isBlocked:function(){return this.__nM>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__nM--;

if(this.__nM<1){this.__nT();
this.__nM=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__nM=0;
this.__nT();
},__nT:function(){this._restoreActiveWidget();
var E=this.getBlockerElement();
E.removeListener(l,this.__nX,this);
E.removeListener(h,this.__nW,this);
E.removeListener(m,this.__nW,this);
E.removeListener(j,this.__nW,this);
E.exclude();
},getContentBlockerElement:function(){if(!this.__nN){this.__nN=this.__nS();
this._widget.getContentElement().add(this.__nN);
this.__nN.exclude();
}return this.__nN;
},blockContent:function(a){var b=this.getContentBlockerElement();
b.setStyle(o,a);
this.__nK.push(a);

if(this.__nK.length<2){b.include();

if(this._isPageRoot){if(!this.__nP){this.__nP=new qx.event.Timer(300);
this.__nP.addListener(y,this.__nV,this);
}this.__nP.start();
this.__nV();
}}},isContentBlocked:function(){return this.__nK.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nK.pop();
var G=this.__nK[this.__nK.length-1];
var H=this.getContentBlockerElement();
H.setStyle(o,G);

if(this.__nK.length<1){this.__nU();
this.__nK=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nK=[];
var L=this.getContentBlockerElement();
L.setStyle(o,null);
this.__nU();
},__nU:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__nP.stop();
}},__nV:function(){var R=this._widget.getContainerElement().getDomElement();
var S=qx.dom.Node.getDocument(R);
this.getContentBlockerElement().setStyles({height:S.documentElement.scrollHeight+n,width:S.documentElement.scrollWidth+n});
},__nW:function(e){if(e.getKeyIdentifier()==x){e.stop();
}},__nX:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(k,this.__nQ,this);
}this._disposeObjects(A,s,w);
this.__nO=this.__nI=this.__nJ=this._widget=this.__nK=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="qx.client",b="div",a="dblclick",w="mousewheel",v="qx.html.Blocker",u="mousemove",t="mouseover",s="appear",r="click",q="mshtml",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(v,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if(qx.core.Variant.isSet(c,q)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,b,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(s,this.__ou,this);
this.addListener(n,this.__ou,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__ou:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var bb="keypress",ba="focusout",Y="activate",X="Tab",W="singleton",V="__of",U="deactivate",T="focusin",S="qx.ui.core.FocusHandler";
qx.Class.define(S,{extend:qx.core.Object,type:W,construct:function(){qx.core.Object.call(this);
this.__of={};
},members:{__of:null,__og:null,__oh:null,__oi:null,connectTo:function(Q){Q.addListener(bb,this.__oj,this);
Q.addListener(T,this._onFocusIn,this,true);
Q.addListener(ba,this._onFocusOut,this,true);
Q.addListener(Y,this._onActivate,this,true);
Q.addListener(U,this._onDeactivate,this,true);
},addRoot:function(bc){this.__of[bc.$$hash]=bc;
},removeRoot:function(R){delete this.__of[R.$$hash];
},getActiveWidget:function(){return this.__og;
},isActive:function(bi){return this.__og==bi;
},getFocusedWidget:function(){return this.__oh;
},isFocused:function(v){return this.__oh==v;
},isFocusRoot:function(P){return !!this.__of[P.$$hash];
},_onActivate:function(e){var s=e.getTarget();
this.__og=s;
var r=this.__ok(s);

if(r!=this.__oi){this.__oi=r;
}},_onDeactivate:function(e){var a=e.getTarget();

if(this.__og==a){this.__og=null;
}},_onFocusIn:function(e){var b=e.getTarget();

if(b!=this.__oh){this.__oh=b;
b.visualizeFocus();
}},_onFocusOut:function(e){var n=e.getTarget();

if(n==this.__oh){this.__oh=null;
n.visualizeBlur();
}},__oj:function(e){if(e.getKeyIdentifier()!=X){return;
}
if(!this.__oi){return;
}e.stopPropagation();
e.preventDefault();
var bg=this.__oh;

if(!e.isShiftPressed()){var bh=bg?this.__oo(bg):this.__om();
}else{var bh=bg?this.__op(bg):this.__on();
}if(bh){bh.tabFocus();
}},__ok:function(t){var u=this.__of;

while(t){if(u[t.$$hash]){return t;
}t=t.getLayoutParent();
}return null;
},__ol:function(E,F){if(E===F){return 0;
}var H=E.getTabIndex()||0;
var G=F.getTabIndex()||0;

if(H!=G){return H-G;
}var M=E.getContainerElement().getDomElement();
var L=F.getContainerElement().getDomElement();
var K=qx.bom.element.Location;
var J=K.get(M);
var I=K.get(L);
if(J.top!=I.top){return J.top-I.top;
}if(J.left!=I.left){return J.left-I.left;
}var N=E.getZIndex();
var O=F.getZIndex();

if(N!=O){return N-O;
}return 0;
},__om:function(){return this.__os(this.__oi,null);
},__on:function(){return this.__ot(this.__oi,null);
},__oo:function(A){var B=this.__oi;

if(B==A){return this.__om();
}
while(A&&A.getAnonymous()){A=A.getLayoutParent();
}
if(A==null){return [];
}var C=[];
this.__oq(B,A,C);
C.sort(this.__ol);
var D=C.length;
return D>0?C[0]:this.__om();
},__op:function(c){var d=this.__oi;

if(d==c){return this.__on();
}
while(c&&c.getAnonymous()){c=c.getLayoutParent();
}
if(c==null){return [];
}var f=[];
this.__or(d,c,f);
f.sort(this.__ol);
var g=f.length;
return g>0?f[g-1]:this.__on();
},__oq:function(parent,w,x){var y=parent.getLayoutChildren();
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];
if(!(z instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(z)&&z.isEnabled()&&z.isVisible()){if(z.isTabable()&&this.__ol(w,z)<0){x.push(z);
}this.__oq(z,w,x);
}}},__or:function(parent,h,j){var k=parent.getLayoutChildren();
var m;

for(var i=0,l=k.length;i<l;i++){m=k[i];
if(!(m instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(m)&&m.isEnabled()&&m.isVisible()){if(m.isTabable()&&this.__ol(h,m)>0){j.push(m);
}this.__or(m,h,j);
}}},__os:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__ol(bf,bd)<0){bd=bf;
}}bd=this.__os(bf,bd);
}}return bd;
},__ot:function(parent,o){var p=parent.getLayoutChildren();
var q;

for(var i=0,l=p.length;i<l;i++){q=p[i];
if(!(q instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(q)&&q.isEnabled()&&q.isVisible()){if(q.isTabable()){if(o==null||this.__ol(q,o)>0){o=q;
}}o=this.__ot(q,o);
}}return o;
}},destruct:function(){this._disposeMap(V);
this.__oh=this.__og=this.__oi=null;
}});
})();
(function(){var p="qx.client",o="head",n="text/css",m="stylesheet",l="}",k='@import "',j="{",h='";',g="qx.bom.Stylesheet",f="link",e="style";
qx.Class.define(g,{statics:{includeFile:function(bd,be){if(!be){be=document;
}var bf=be.createElement(f);
bf.type=n;
bf.rel=m;
bf.href=qx.util.ResourceManager.getInstance().toUri(bd);
var bg=be.getElementsByTagName(o)[0];
bg.appendChild(bf);
},createElement:qx.core.Variant.select(p,{"mshtml":function(v){var w=document.createStyleSheet();

if(v){w.cssText=v;
}return w;
},"default":function(z){var A=document.createElement(e);
A.type=n;

if(z){A.appendChild(document.createTextNode(z));
}document.getElementsByTagName(o)[0].appendChild(A);
return A.sheet;
}}),addRule:qx.core.Variant.select(p,{"mshtml":function(ba,bb,bc){ba.addRule(bb,bc);
},"default":function(P,Q,R){P.insertRule(Q+j+R+l,P.cssRules.length);
}}),removeRule:qx.core.Variant.select(p,{"mshtml":function(I,J){var K=I.rules;
var L=K.length;

for(var i=L-1;i>=0;--i){if(K[i].selectorText==J){I.removeRule(i);
}}},"default":function(E,F){var G=E.cssRules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(p,{"mshtml":function(M){var N=M.rules;
var O=N.length;

for(var i=O-1;i>=0;i--){M.removeRule(i);
}},"default":function(s){var t=s.cssRules;
var u=t.length;

for(var i=u-1;i>=0;i--){s.deleteRule(i);
}}}),addImport:qx.core.Variant.select(p,{"mshtml":function(q,r){q.addImport(r);
},"default":function(x,y){x.insertRule(k+y+h,x.cssRules.length);
}}),removeImport:qx.core.Variant.select(p,{"mshtml":function(a,b){var c=a.imports;
var d=c.length;

for(var i=d-1;i>=0;i--){if(c[i].href==b){a.removeImport(i);
}}},"default":function(S,T){var U=S.cssRules;
var V=U.length;

for(var i=V-1;i>=0;i--){if(U[i].href==T){S.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(p,{"mshtml":function(B){var C=B.imports;
var D=C.length;

for(var i=D-1;i>=0;i--){B.removeImport(i);
}},"default":function(W){var X=W.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;i--){if(X[i].type==X[i].IMPORT_RULE){W.deleteRule(i);
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
qx.Class.define(a,{extend:qx.html.Element,construct:function(c){qx.html.Element.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(b){qx.html.Element.prototype.useElement.call(this,b);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var w="scrollbar-y",v="scrollbar-x",u="pane",t="auto",s="corner",r="on",q="changeVisibility",p="scroll",o="_computeScrollbars",n="off",g="scrollY",m="qx.ui.core.scroll.AbstractScrollArea",j="abstract",d="update",c="scrollX",i="mousewheel",h="scrollbarY",k="scrollbarX",b="horizontal",l="scrollarea",f="vertical";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:j,construct:function(){qx.ui.core.Widget.call(this);
var a=new qx.ui.layout.Grid();
a.setColumnFlex(0,1);
a.setRowFlex(0,1);
this._setLayout(a);
this.addListener(i,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:l},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[t,r,n],init:t,themeable:true,apply:o},scrollbarY:{check:[t,r,n],init:t,themeable:true,apply:o},scrollbar:{group:[k,h]}},members:{_createChildControlImpl:function(L){var M;

switch(L){case u:M=new qx.ui.core.scroll.ScrollPane();
M.addListener(d,this._computeScrollbars,this);
M.addListener(c,this._onScrollPaneX,this);
M.addListener(g,this._onScrollPaneY,this);
this._add(M,{row:0,column:0});
break;
case v:M=this._createScrollBar(b);
M.setMinWidth(0);
M.exclude();
M.addListener(p,this._onScrollBarX,this);
M.addListener(q,this._onChangeScrollbarXVisibility,this);
this._add(M,{row:1,column:0});
break;
case w:M=this._createScrollBar(f);
M.setMinHeight(0);
M.exclude();
M.addListener(p,this._onScrollBarY,this);
M.addListener(q,this._onChangeScrollbarYVisibility,this);
this._add(M,{row:0,column:1});
break;
case s:M=new qx.ui.core.Widget();
M.setWidth(0);
M.setHeight(0);
M.exclude();
this._add(M,{row:1,column:1});
break;
}return M||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,L);
},getPaneSize:function(){return this.getChildControl(u).getInnerSize();
},getItemTop:function(W){return this.getChildControl(u).getItemTop(W);
},getItemBottom:function(K){return this.getChildControl(u).getItemBottom(K);
},getItemLeft:function(x){return this.getChildControl(u).getItemLeft(x);
},getItemRight:function(Q){return this.getChildControl(u).getItemRight(Q);
},scrollToX:function(U){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollTo(U);
},scrollByX:function(X){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollBy(X);
},getScrollX:function(){var Y=this.getChildControl(v,true);
return Y?Y.getPosition():0;
},scrollToY:function(ba){qx.ui.core.queue.Manager.flush();
this.getChildControl(w).scrollTo(ba);
},scrollByY:function(V){qx.ui.core.queue.Manager.flush();
this.getChildControl(w).scrollBy(V);
},getScrollY:function(){var T=this.getChildControl(w,true);
return T?T.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(u).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(u).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var O=this._isChildControlVisible(v);
var P=this._isChildControlVisible(w);
var N=(P)?this.getChildControl(w,true):(O?this.getChildControl(v,true):null);

if(N){N.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var y=this._isChildControlVisible(v);
var z=this._isChildControlVisible(w);

if(!y){this.scrollToX(0);
}y&&z?this._showChildControl(s):this._excludeChildControl(s);
},_onChangeScrollbarYVisibility:function(e){var R=this._isChildControlVisible(v);
var S=this._isChildControlVisible(w);

if(!S){this.scrollToY(0);
}R&&S?this._showChildControl(s):this._excludeChildControl(s);
},_computeScrollbars:function(){var G=this.getChildControl(u);
var content=G.getChildren()[0];

if(!content){this._excludeChildControl(v);
this._excludeChildControl(w);
return;
}var A=this.getInnerSize();
var F=G.getInnerSize();
var D=G.getScrollSize();
if(!F||!D){return;
}var H=this.getScrollbarX();
var I=this.getScrollbarY();

if(H===t&&I===t){var E=D.width>A.width;
var J=D.height>A.height;
if((E||J)&&!(E&&J)){if(E){J=D.height>F.height;
}else if(J){E=D.width>F.width;
}}}else{var E=H===r;
var J=I===r;
if(D.width>(E?F.width:A.width)&&H===t){E=true;
}
if(D.height>(E?F.height:A.height)&&I===t){J=true;
}}if(E){var C=this.getChildControl(v);
C.show();
C.setMaximum(Math.max(0,D.width-F.width));
C.setKnobFactor((D.width===0)?0:F.width/D.width);
}else{this._excludeChildControl(v);
}
if(J){var B=this.getChildControl(w);
B.show();
B.setMaximum(Math.max(0,D.height-F.height));
B.setKnobFactor((D.height===0)?0:F.height/D.height);
}else{this._excludeChildControl(w);
}}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__ko:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__kp:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__kp[name];
s[t]();
}else{var u=this.__ko[name];
s[u](q);
}}}});
})();
(function(){var b="pane",a="qx.ui.container.Scroll";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){qx.ui.core.scroll.AbstractScrollArea.call(this);

if(content){this.add(content);
}},members:{add:function(c){this.getChildControl(b).add(c);
},remove:function(d){this.getChildControl(b).remove(d);
},getChildren:function(){return this.getChildControl(b).getChildren();
},_getContentPaddingTarget:function(){return this.getChildControl(b);
}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(e){this.assertNumber(e);
},scrollBySteps:function(c){this.assertNumber(c);
}}});
})();
(function(){var l="horizontal",k="px",j="scroll",i="vertical",h="-1px",g="qx.client",f="0",d="hidden",c="mousedown",b="qx.ui.core.scroll.NativeScrollBar",A="PositiveNumber",z="Integer",y="mousemove",x="_applyMaximum",w="__kS",v="_applyOrientation",u="appear",t="opera",s="PositiveInteger",r="mshtml",p="mouseup",q="Number",n="_applyPosition",o="scrollbar",m="native";
qx.Class.define(b,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(a){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(j,this._onScroll,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(y,this._stopPropagation,this);

if(qx.core.Variant.isSet(g,t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(a!=null){this.setOrientation(a);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[l,i],init:l,apply:v},maximum:{check:s,apply:x,init:100},position:{check:q,init:0,apply:n,event:j},singleStep:{check:z,init:20},knobFactor:{check:A,nullable:true}},members:{__kR:null,__kS:null,_getScrollPaneElement:function(){if(!this.__kS){this.__kS=new qx.html.Element();
}return this.__kS;
},renderLayout:function(H,top,I,J){var K=qx.ui.core.Widget.prototype.renderLayout.call(this,H,top,I,J);
this._updateScrollBar();
return K;
},_getContentHint:function(){var G=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__kR?100:G,maxWidth:this.__kR?null:G,minWidth:this.__kR?null:G,height:this.__kR?G:100,maxHeight:this.__kR?G:null,minHeight:this.__kR?G:null};
},_applyEnabled:function(E,F){qx.ui.core.Widget.prototype._applyEnabled.call(this,E,F);
this._updateScrollBar();
},_applyMaximum:function(L){this._updateScrollBar();
},_applyPosition:function(T){var content=this.getContentElement();

if(this.__kR){content.scrollToX(T);
}else{content.scrollToY(T);
}},_applyOrientation:function(M,N){var O=this.__kR=M===l;
this.set({allowGrowX:O,allowShrinkX:O,allowGrowY:!O,allowShrinkY:!O});

if(O){this.replaceState(i,l);
}else{this.replaceState(l,i);
}this.getContentElement().setStyles({overflowX:O?j:d,overflowY:O?d:j});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var Q=this.__kR;
var R=this.getBounds();

if(!R){return;
}
if(this.isEnabled()){var S=Q?R.width:R.height;
var P=this.getMaximum()+S;
}else{P=0;
}if(qx.core.Variant.isSet(g,r)){var R=this.getBounds();
this.getContentElement().setStyles({left:Q?f:h,top:Q?h:f,width:(Q?R.width:R.width+1)+k,height:(Q?R.height+1:R.height)+k});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(Q?P:1)+k,height:(Q?1:P)+k});
this.scrollTo(this.getPosition());
},scrollTo:function(U){this.setPosition(Math.max(0,Math.min(this.getMaximum(),U)));
},scrollBy:function(D){this.scrollTo(this.getPosition()+D);
},scrollBySteps:function(B){var C=this.getSingleStep();
this.scrollBy(B*C);
},_onScroll:function(e){var W=this.getContentElement();
var V=this.__kR?W.getScrollX():W.getScrollY();
this.setPosition(V);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(w);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(R){qx.ui.core.Widget.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(R!=null){this.setOrientation(R);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__kT:2,_createChildControlImpl:function(P){var Q;

switch(P){case l:Q=new qx.ui.core.scroll.ScrollSlider();
Q.setPageStep(100);
Q.setFocusable(false);
Q.addListener(y,this._onChangeSliderValue,this);
this._add(Q,{flex:1});
break;
case j:Q=new qx.ui.form.RepeatButton();
Q.setFocusable(false);
Q.addListener(f,this._onExecuteBegin,this);
this._add(Q);
break;
case h:Q=new qx.ui.form.RepeatButton();
Q.setFocusable(false);
Q.addListener(f,this._onExecuteEnd,this);
this._add(Q);
break;
}return Q||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,P);
},_applyMaximum:function(G){this.getChildControl(l).setMaximum(G);
},_applyPosition:function(H){this.getChildControl(l).setValue(H);
},_applyKnobFactor:function(I){this.getChildControl(l).setKnobFactor(I);
},_applyPageStep:function(a){this.getChildControl(l).setPageStep(a);
},_applyOrientation:function(D,E){var F=this._getLayout();

if(F){F.dispose();
}if(D===k){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(i,k);
this.getChildControl(j).replaceState(A,c);
this.getChildControl(h).replaceState(b,d);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(k,i);
this.getChildControl(j).replaceState(c,A);
this.getChildControl(h).replaceState(d,b);
}this.getChildControl(l).setOrientation(D);
},scrollTo:function(C){this.getChildControl(l).slideTo(C);
},scrollBy:function(B){this.getChildControl(l).slideBy(B);
},scrollBySteps:function(N){var O=this.getSingleStep();
this.getChildControl(l).slideBy(N*O);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var J=this.getChildControl(l).getChildControl(v);
var M=J.getSizeHint();
var K=false;
var L=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(L.height<M.minHeight+this.__kT){K=true;
}}else{if(L.width<M.minWidth+this.__kT){K=true;
}}
if(K){J.exclude();
}else{J.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(e){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(b){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(c){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(d){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var i="Boolean",h="changeInvalidMessage",g="String",f="invalid",e="qx.ui.form.MForm",d="_applyValid",c="",b="changeRequired",a="changeValid";
qx.Mixin.define(e,{properties:{valid:{check:i,init:true,apply:d,event:a},required:{check:i,init:false,event:b},invalidMessage:{check:g,init:c,event:h},requiredInvalidMessage:{check:g,nullable:true,event:h}},members:{_applyValid:function(j,k){j?this.removeState(f):this.addState(f);
}}});
})();
(function(){var R="knob",Q="horizontal",P="vertical",O="Integer",N="hovered",M="left",L="top",K="mouseup",J="pressed",I="px",bD="changeValue",bC="interval",bB="mousemove",bA="resize",bz="slider",by="mousedown",bx="PageUp",bw="mouseout",bv='qx.event.type.Data',bu="Left",Y="Down",ba="Up",W="dblclick",X="qx.ui.form.Slider",U="PageDown",V="mousewheel",S="_applyValue",T="_applyKnobFactor",bb="End",bc="height",bj="Right",bh="width",bn="_applyOrientation",bl="Home",bq="mouseover",bp="floor",be="_applyMinimum",bt="click",bs="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",br="keypress",bd="ceil",bf="losecapture",bg="contextmenu",bi="_applyMaximum",bk="Number",bm="changeMaximum",bo="changeMinimum";
qx.Class.define(X,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(y){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(br,this._onKeyPress);
this.addListener(V,this._onMouseWheel);
this.addListener(by,this._onMouseDown);
this.addListener(K,this._onMouseUp);
this.addListener(bf,this._onMouseUp);
this.addListener(bA,this._onUpdate);
this.addListener(bg,this._onStopEvent);
this.addListener(bt,this._onStopEvent);
this.addListener(W,this._onStopEvent);
if(y!=null){this.setOrientation(y);
}else{this.initOrientation();
}},events:{changeValue:bv},properties:{appearance:{refine:true,init:bz},focusable:{refine:true,init:true},orientation:{check:[Q,P],init:Q,apply:bn},value:{check:bs,init:0,apply:S,nullable:true},minimum:{check:O,init:0,apply:be,event:bo},maximum:{check:O,init:100,apply:bi,event:bm},singleStep:{check:O,init:1},pageStep:{check:O,init:10},knobFactor:{check:bk,apply:T,nullable:true}},members:{__kU:null,__kV:null,__kW:null,__kX:null,__kY:null,__la:null,__lb:null,__lc:null,__ld:null,__le:null,__lf:null,__lg:null,_forwardStates:{invalid:true},_createChildControlImpl:function(A){var B;

switch(A){case R:B=new qx.ui.core.Widget();
B.addListener(bA,this._onUpdate,this);
B.addListener(bq,this._onMouseOver);
B.addListener(bw,this._onMouseOut);
this._add(B);
break;
}return B||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,A);
},_onMouseOver:function(e){this.addState(N);
},_onMouseOut:function(e){this.removeState(N);
},_onMouseWheel:function(e){var bM=e.getWheelDelta()>0?1:-1;
this.slideBy(bM*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bL=this.getOrientation()===Q;
var bK=bL?bu:ba;
var forward=bL?bj:Y;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bK:this.slideBack();
break;
case U:this.slidePageForward();
break;
case bx:this.slidePageBack();
break;
case bl:this.slideToBegin();
break;
case bb:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__kX){return;
}var cc=this.__li;
var ca=this.getChildControl(R);
var cb=cc?M:L;
var ce=cc?e.getDocumentLeft():e.getDocumentTop();
var cf=this.__kU=qx.bom.element.Location.get(this.getContentElement().getDomElement())[cb];
var cd=this.__kV=qx.bom.element.Location.get(ca.getContainerElement().getDomElement())[cb];

if(e.getTarget()===ca){this.__kX=true;

if(!this.__le){this.__le=new qx.event.Timer(100);
this.__le.addListener(bC,this._fireValue,this);
}this.__le.start();
this.__kY=ce+cf-cd;
ca.addState(J);
}else{this.__la=true;
this.__lb=ce<=cd?-1:1;
this.__lj(e);
this._onInterval();
if(!this.__ld){this.__ld=new qx.event.Timer(100);
this.__ld.addListener(bC,this._onInterval,this);
}this.__ld.start();
}this.addListener(bB,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__kX){this.releaseCapture();
delete this.__kX;
this.__le.stop();
this._fireValue();
delete this.__kY;
this.getChildControl(R).removeState(J);
if(e.getType()===K){var w;
var x;
var v;

if(this.__li){w=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__kU);
v=qx.bom.element.Location.get(this.getContentElement().getDomElement())[L];
x=e.getDocumentTop()-(v+this.getChildControl(R).getBounds().top);
}else{w=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__kU);
v=qx.bom.element.Location.get(this.getContentElement().getDomElement())[M];
x=e.getDocumentLeft()-(v+this.getChildControl(R).getBounds().left);
}
if(x<0||x>this.__kW||w<0||w>this.__kW){this.getChildControl(R).removeState(N);
}}}else if(this.__la){this.__ld.stop();
this.releaseCapture();
delete this.__la;
delete this.__lb;
delete this.__lc;
}this.removeListener(bB,this._onMouseMove);
if(e.getType()===K){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__kX){var H=this.__li?e.getDocumentLeft():e.getDocumentTop();
var G=H-this.__kY;
this.slideTo(this._positionToValue(G));
}else if(this.__la){this.__lj(e);
}e.stopPropagation();
},_onInterval:function(e){var bI=this.getValue()+(this.__lb*this.getPageStep());
if(bI<this.getMinimum()){bI=this.getMinimum();
}else if(bI>this.getMaximum()){bI=this.getMaximum();
}var bJ=this.__lb==-1;

if((bJ&&bI<=this.__lc)||(!bJ&&bI>=this.__lc)){bI=this.__lc;
}this.slideTo(bI);
},_onUpdate:function(e){var bO=this.getInnerSize();
var bP=this.getChildControl(R).getBounds();
var bN=this.__li?bh:bc;
this._updateKnobSize();
this.__lh=bO[bN]-bP[bN];
this.__kW=bP[bN];
this._updateKnobPosition();
},__li:false,__lh:0,__lj:function(e){var j=this.__li;
var q=j?e.getDocumentLeft():e.getDocumentTop();
var s=this.__kU;
var k=this.__kV;
var u=this.__kW;
var r=q-s;

if(q>=k){r-=u;
}var o=this._positionToValue(r);
var l=this.getMinimum();
var m=this.getMaximum();

if(o<l){o=l;
}else if(o>m){o=m;
}else{var p=this.getValue();
var n=this.getPageStep();
var t=this.__lb<0?bp:bd;
o=p+(Math[t]((o-p)/n)*n);
}if(this.__lc==null||(this.__lb==-1&&o<=this.__lc)||(this.__lb==1&&o>=this.__lc)){this.__lc=o;
}},_positionToValue:function(c){var d=this.__lh;
if(d==null||d==0){return 0;
}var g=c/d;

if(g<0){g=0;
}else if(g>1){g=1;
}var f=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(f*g);
},_valueToPosition:function(bV){var bW=this.__lh;

if(bW==null){return 0;
}var bX=this.getMaximum()-this.getMinimum();
if(bX==0){return 0;
}var bV=bV-this.getMinimum();
var bY=bV/bX;

if(bY<0){bY=0;
}else if(bY>1){bY=1;
}return Math.round(bW*bY);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(h){var i=this.getChildControl(R).getContainerElement();

if(this.__li){i.setStyle(M,h+I,true);
}else{i.setStyle(L,h+I,true);
}},_updateKnobSize:function(){var bU=this.getKnobFactor();

if(bU==null){return;
}var bT=this.getInnerSize();

if(bT==null){return;
}if(this.__li){this.getChildControl(R).setWidth(Math.round(bU*bT.width));
}else{this.getChildControl(R).setHeight(Math.round(bU*bT.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(z){this.slideTo(this.getValue()+z);
},slideTo:function(bE){if(bE<this.getMinimum()){bE=this.getMinimum();
}else if(bE>this.getMaximum()){bE=this.getMaximum();
}else{bE=this.getMinimum()+Math.round((bE-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bE);
},_applyOrientation:function(bQ,bR){var bS=this.getChildControl(R);
this.__li=bQ===Q;
if(this.__li){this.removeState(P);
bS.removeState(P);
this.addState(Q);
bS.addState(Q);
bS.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(Q);
bS.removeState(Q);
this.addState(P);
bS.addState(P);
bS.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(C,D){if(C!=null){this._updateKnobSize();
}else{if(this.__li){this.getChildControl(R).resetWidth();
}else{this.getChildControl(R).resetHeight();
}}},_applyValue:function(bG,bH){if(bG!=null){this._updateKnobPosition();

if(this.__kX){this.__lg=[bG,bH];
}else{this.fireEvent(bD,qx.event.type.Data,[bG,bH]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__lg){return;
}var bF=this.__lg;
this.__lg=null;
this.fireEvent(bD,qx.event.type.Data,bF);
},_applyMinimum:function(E,F){if(this.getValue()<E){this.setValue(E);
}this._updateKnobPosition();
},_applyMaximum:function(a,b){if(this.getValue()>a){this.setValue(a);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var o="execute",n="toolTipText",m="icon",l="label",k="qx.ui.core.MExecutable",j="value",h="qx.event.type.Event",g="_applyCommand",f="enabled",d="menu",b="changeCommand",c="qx.ui.core.Command";
qx.Mixin.define(k,{events:{"execute":h},properties:{command:{check:c,apply:g,event:b,nullable:true}},members:{__iB:null,__iC:false,__iD:null,_bindableProperties:[f,l,m,n,j,d],execute:function(){var a=this.getCommand();

if(a){if(this.__iC){this.__iC=false;
}else{this.__iC=true;
a.execute(this);
}}this.fireEvent(o);
},__iE:function(e){if(this.__iC){this.__iC=false;
return;
}this.__iC=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__iD);
}
if(p!=null){this.__iD=p.addListener(o,this.__iE,this);
}var t=this.__iB;

if(t==null){this.__iB=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__iB=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(r,s,t){qx.ui.basic.Atom.call(this,r,s);

if(t!=null){this.setCommand(t);
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
var p=this.hasState(o);
var q=this.hasState(n);

if(p){this.removeState(o);
}
if(q){this.removeState(n);
}else{this.addState(m);

if(p){this.execute();
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="execute",b="__lk";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__lk=new qx.event.AcceleratingTimer();
this.__lk.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__ll:null,__lk:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__lm();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__ll){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__ln();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__ln();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__lk.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__lk.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__lm();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__ll){this.execute();
}}this.__ln();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__ll){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__ln();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__lm();
}},_onInterval:function(e){this.__ll=true;
this.fireEvent(c);
},__lm:function(){this.fireEvent(g);
this.__ll=false;
this.__lk.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__ln:function(){this.fireEvent(d);
this.__lk.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var e="Integer",d="interval",c="__lo",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__lo=new qx.event.Timer(this.getInterval());
this.__lo.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__lo:null,__lp:null,start:function(){this.__lo.setInterval(this.getFirstInterval());
this.__lo.start();
},stop:function(){this.__lo.stop();
this.__lp=null;
},_onInterval:function(){this.__lo.stop();

if(this.__lp==null){this.__lp=this.getInterval();
}this.__lp=Math.max(this.getMinimum(),this.__lp-this.getDecrease());
this.__lo.setInterval(this.__lp);
this.__lo.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__lq:null,__lr:null,__ls:null,__lt:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lu:function(){var U=this._getLayoutChildren();
var length=U.length;
var R=false;
var P=this.__lq&&this.__lq.length!=length&&this.__lr&&this.__lq;
var S;
var Q=P?this.__lq:new Array(length);
var T=P?this.__lr:new Array(length);
if(this.getReversed()){U=U.concat().reverse();
}for(var i=0;i<length;i++){S=U[i].getLayoutProperties();

if(S.width!=null){Q[i]=parseFloat(S.width)/100;
}
if(S.flex!=null){T[i]=S.flex;
R=true;
}else{T[i]=0;
}}if(!P){this.__lq=Q;
this.__lr=T;
}this.__ls=R;
this.__lt=U;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(r,s){if(this._invalidChildrenCache){this.__lu();
}var y=this.__lt;
var length=y.length;
var H=qx.ui.layout.Util;
var G=this.getSpacing();
var K=this.getSeparator();

if(K){var v=H.computeHorizontalSeparatorGaps(y,G,K);
}else{var v=H.computeHorizontalGaps(y,G,true);
}var i,t,E,D;
var J=[];
var z=v;

for(i=0;i<length;i+=1){D=this.__lq[i];
E=D!=null?Math.floor((r-v)*D):y[i].getSizeHint().width;
J.push(E);
z+=E;
}if(this.__ls&&z!=r){var B={};
var F,I;

for(i=0;i<length;i+=1){F=this.__lr[i];

if(F>0){A=y[i].getSizeHint();
B[i]={min:A.minWidth,value:J[i],max:A.maxWidth,flex:F};
}}var w=H.computeFlexOffsets(B,r,z);

for(i in w){I=w[i].offset;
J[i]+=I;
z+=I;
}}var O=y[0].getMarginLeft();
if(z<r&&this.getAlignX()!=m){O=r-z;

if(this.getAlignX()===k){O=Math.round(O/2);
}}var A,top,u,E,x,M,C;
var G=this.getSpacing();
this._clearSeparators();
if(K){var L=qx.theme.manager.Decoration.getInstance().resolve(K).getInsets();
var N=L.left+L.right;
}for(i=0;i<length;i+=1){t=y[i];
E=J[i];
A=t.getSizeHint();
M=t.getMarginTop();
C=t.getMarginBottom();
u=Math.max(A.minHeight,Math.min(s-M-C,A.maxHeight));
top=H.computeVerticalAlignOffset(t.getAlignY()||this.getAlignY(),u,s,M,C);
if(i>0){if(K){O+=x+G;
this._renderSeparator(K,{left:O,top:0,width:N,height:s});
O+=N+G+t.getMarginLeft();
}else{O+=H.collapseMargins(G,x,t.getMarginLeft());
}}t.renderLayout(O,top,E,u);
O+=E;
x=t.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lu();
}var bc=qx.ui.layout.Util;
var bk=this.__lt;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__lr[i];
var X=this.__lq[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__lq=this.__lr=this.__lt=null;
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__lv:null,__lw:null,__lx:null,__ly:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lz:function(){var U=this._getLayoutChildren();
var length=U.length;
var Q=false;
var P=this.__lv&&this.__lv.length!=length&&this.__lw&&this.__lv;
var S;
var R=P?this.__lv:new Array(length);
var T=P?this.__lw:new Array(length);
if(this.getReversed()){U=U.concat().reverse();
}for(var i=0;i<length;i++){S=U[i].getLayoutProperties();

if(S.height!=null){R[i]=parseFloat(S.height)/100;
}
if(S.flex!=null){T[i]=S.flex;
Q=true;
}else{T[i]=0;
}}if(!P){this.__lv=R;
this.__lw=T;
}this.__lx=Q;
this.__ly=U;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(r,s){if(this._invalidChildrenCache){this.__lz();
}var z=this.__ly;
var length=z.length;
var J=qx.ui.layout.Util;
var I=this.getSpacing();
var M=this.getSeparator();

if(M){var w=J.computeVerticalSeparatorGaps(z,I,M);
}else{var w=J.computeVerticalGaps(z,I,true);
}var i,u,v,D;
var E=[];
var K=w;

for(i=0;i<length;i+=1){D=this.__lv[i];
v=D!=null?Math.floor((s-w)*D):z[i].getSizeHint().height;
E.push(v);
K+=v;
}if(this.__lx&&K!=s){var B={};
var H,L;

for(i=0;i<length;i+=1){H=this.__lw[i];

if(H>0){A=z[i].getSizeHint();
B[i]={min:A.minHeight,value:E[i],max:A.maxHeight,flex:H};
}}var x=J.computeFlexOffsets(B,s,K);

for(i in x){L=x[i].offset;
E[i]+=L;
K+=L;
}}var top=z[0].getMarginTop();
if(K<s&&this.getAlignY()!=m){top=s-K;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var A,O,F,v,C,G,y;
this._clearSeparators();
if(M){var N=qx.theme.manager.Decoration.getInstance().resolve(M).getInsets();
var t=N.top+N.bottom;
}for(i=0;i<length;i+=1){u=z[i];
v=E[i];
A=u.getSizeHint();
G=u.getMarginLeft();
y=u.getMarginRight();
F=Math.max(A.minWidth,Math.min(r-G-y,A.maxWidth));
O=J.computeHorizontalAlignOffset(u.getAlignX()||this.getAlignX(),F,r,G,y);
if(i>0){if(M){top+=C+I;
this._renderSeparator(M,{top:top,left:0,height:t,width:r});
top+=t+I+u.getMarginTop();
}else{top+=J.collapseMargins(I,C,u.getMarginTop());
}}u.renderLayout(O,top,F,v);
top+=v;
C=u.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lz();
}var bc=qx.ui.layout.Util;
var bk=this.__ly;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__lw[i];
var Y=this.__lv[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__lv=this.__lw=this.__ly=null;
}});
})();
(function(){var dz="left",dy="top",dx="_applyLayoutChange",dw="hAlign",dv="flex",du="vAlign",dt="Integer",ds="minWidth",dr="width",dq="minHeight",dm="qx.ui.layout.Grid",dp="height",dn="maxHeight",dl="maxWidth";
qx.Class.define(dm,{extend:qx.ui.layout.Abstract,construct:function(cK,cL){qx.ui.layout.Abstract.call(this);
this.__ju=[];
this.__jv=[];

if(cK){this.setSpacingX(cK);
}
if(cL){this.setSpacingY(cL);
}},properties:{spacingX:{check:dt,init:0,apply:dx},spacingY:{check:dt,init:0,apply:dx}},members:{__jw:null,__ju:null,__jv:null,__jx:null,__jy:null,__jz:null,__jA:null,__jB:null,__jC:null,verifyLayoutProperty:null,__jD:function(){var p=[];
var o=[];
var q=[];
var m=-1;
var k=-1;
var s=this._getLayoutChildren();

for(var i=0,l=s.length;i<l;i++){var n=s[i];
var r=n.getLayoutProperties();
var t=r.row;
var h=r.column;
r.colSpan=r.colSpan||1;
r.rowSpan=r.rowSpan||1;
if(t==null||h==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+n+"' must be defined!");
}
if(p[t]&&p[t][h]){throw new Error("Cannot add widget '"+n+"'!. "+"There is already a widget '"+p[t][h]+"' in this cell ("+t+", "+h+")");
}
for(var x=h;x<h+r.colSpan;x++){for(var y=t;y<t+r.rowSpan;y++){if(p[y]==undefined){p[y]=[];
}p[y][x]=n;
k=Math.max(k,x);
m=Math.max(m,y);
}}
if(r.rowSpan>1){q.push(n);
}
if(r.colSpan>1){o.push(n);
}}for(var y=0;y<=m;y++){if(p[y]==undefined){p[y]=[];
}}this.__jw=p;
this.__jx=o;
this.__jy=q;
this.__jz=m;
this.__jA=k;
this.__jB=null;
this.__jC=null;
delete this._invalidChildrenCache;
},_setRowData:function(K,L,M){var N=this.__ju[K];

if(!N){this.__ju[K]={};
this.__ju[K][L]=M;
}else{N[L]=M;
}},_setColumnData:function(cT,cU,cV){var cW=this.__jv[cT];

if(!cW){this.__jv[cT]={};
this.__jv[cT][cU]=cV;
}else{cW[cU]=cV;
}},setSpacing:function(bw){this.setSpacingY(bw);
this.setSpacingX(bw);
return this;
},setColumnAlign:function(dc,dd,de){{};
this._setColumnData(dc,dw,dd);
this._setColumnData(dc,du,de);
this._applyLayoutChange();
return this;
},getColumnAlign:function(f){var g=this.__jv[f]||{};
return {vAlign:g.vAlign||dy,hAlign:g.hAlign||dz};
},setRowAlign:function(bD,bE,bF){{};
this._setRowData(bD,dw,bE);
this._setRowData(bD,du,bF);
this._applyLayoutChange();
return this;
},getRowAlign:function(bx){var by=this.__ju[bx]||{};
return {vAlign:by.vAlign||dy,hAlign:by.hAlign||dz};
},getCellWidget:function(dW,dX){if(this._invalidChildrenCache){this.__jD();
}var dW=this.__jw[dW]||{};
return dW[dX]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__jD();
}return this.__jz+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__jD();
}return this.__jA+1;
},getCellAlign:function(dL,dM){var dS=dy;
var dQ=dz;
var dR=this.__ju[dL];
var dO=this.__jv[dM];
var dN=this.__jw[dL][dM];

if(dN){var dP={vAlign:dN.getAlignY(),hAlign:dN.getAlignX()};
}else{dP={};
}if(dP.vAlign){dS=dP.vAlign;
}else if(dR&&dR.vAlign){dS=dR.vAlign;
}else if(dO&&dO.vAlign){dS=dO.vAlign;
}if(dP.hAlign){dQ=dP.hAlign;
}else if(dO&&dO.hAlign){dQ=dO.hAlign;
}else if(dR&&dR.hAlign){dQ=dR.hAlign;
}return {vAlign:dS,hAlign:dQ};
},setColumnFlex:function(cX,cY){this._setColumnData(cX,dv,cY);
this._applyLayoutChange();
return this;
},getColumnFlex:function(da){var db=this.__jv[da]||{};
return db.flex!==undefined?db.flex:0;
},setRowFlex:function(dh,di){this._setRowData(dh,dv,di);
this._applyLayoutChange();
return this;
},getRowFlex:function(dT){var dU=this.__ju[dT]||{};
var dV=dU.flex!==undefined?dU.flex:0;
return dV;
},setColumnMaxWidth:function(O,P){this._setColumnData(O,dl,P);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(cG){var cH=this.__jv[cG]||{};
return cH.maxWidth!==undefined?cH.maxWidth:Infinity;
},setColumnWidth:function(cC,cD){this._setColumnData(cC,dr,cD);
this._applyLayoutChange();
return this;
},getColumnWidth:function(cy){var cz=this.__jv[cy]||{};
return cz.width!==undefined?cz.width:null;
},setColumnMinWidth:function(bz,bA){this._setColumnData(bz,ds,bA);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bB){var bC=this.__jv[bB]||{};
return bC.minWidth||0;
},setRowMaxHeight:function(cE,cF){this._setRowData(cE,dn,cF);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(df){var dg=this.__ju[df]||{};
return dg.maxHeight||Infinity;
},setRowHeight:function(cA,cB){this._setRowData(cA,dp,cB);
this._applyLayoutChange();
return this;
},getRowHeight:function(dj){var dk=this.__ju[dj]||{};
return dk.height!==undefined?dk.height:null;
},setRowMinHeight:function(dY,ea){this._setRowData(dY,dq,ea);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cI){var cJ=this.__ju[cI]||{};
return cJ.minHeight||0;
},__jE:function(a){var e=a.getSizeHint();
var d=a.getMarginLeft()+a.getMarginRight();
var c=a.getMarginTop()+a.getMarginBottom();
var b={height:e.height+c,width:e.width+d,minHeight:e.minHeight+c,minWidth:e.minWidth+d,maxHeight:e.maxHeight+c,maxWidth:e.maxWidth+d};
return b;
},_fixHeightsRowSpan:function(bY){var ck=this.getSpacingY();

for(var i=0,l=this.__jy.length;i<l;i++){var cc=this.__jy[i];
var ce=this.__jE(cc);
var cf=cc.getLayoutProperties();
var cb=cf.row;
var ci=ck*(cf.rowSpan-1);
var ca=ci;
var ch={};

for(var j=0;j<cf.rowSpan;j++){var cm=cf.row+j;
var cd=bY[cm];
var cl=this.getRowFlex(cm);

if(cl>0){ch[cm]={min:cd.minHeight,value:cd.height,max:cd.maxHeight,flex:cl};
}ci+=cd.height;
ca+=cd.minHeight;
}if(ci<ce.height){var cj=qx.ui.layout.Util.computeFlexOffsets(ch,ce.height,ci);

for(var j=0;j<cf.rowSpan;j++){var cg=cj[cb+j]?cj[cb+j].offset:0;
bY[cb+j].height+=cg;
}}if(ca<ce.minHeight){var cj=qx.ui.layout.Util.computeFlexOffsets(ch,ce.minHeight,ca);

for(var j=0;j<cf.rowSpan;j++){var cg=cj[cb+j]?cj[cb+j].offset:0;
bY[cb+j].minHeight+=cg;
}}}},_fixWidthsColSpan:function(u){var A=this.getSpacingX();

for(var i=0,l=this.__jx.length;i<l;i++){var v=this.__jx[i];
var z=this.__jE(v);
var C=v.getLayoutProperties();
var w=C.column;
var I=A*(C.colSpan-1);
var B=I;
var D={};
var F;

for(var j=0;j<C.colSpan;j++){var J=C.column+j;
var H=u[J];
var G=this.getColumnFlex(J);
if(G>0){D[J]={min:H.minWidth,value:H.width,max:H.maxWidth,flex:G};
}I+=H.width;
B+=H.minWidth;
}if(I<z.width){var E=qx.ui.layout.Util.computeFlexOffsets(D,z.width,I);

for(var j=0;j<C.colSpan;j++){F=E[w+j]?E[w+j].offset:0;
u[w+j].width+=F;
}}if(B<z.minWidth){var E=qx.ui.layout.Util.computeFlexOffsets(D,z.minWidth,B);

for(var j=0;j<C.colSpan;j++){F=E[w+j]?E[w+j].offset:0;
u[w+j].minWidth+=F;
}}}},_getRowHeights:function(){if(this.__jB!=null){return this.__jB;
}var dJ=[];
var dC=this.__jz;
var dB=this.__jA;

for(var dK=0;dK<=dC;dK++){var dD=0;
var dF=0;
var dE=0;

for(var dI=0;dI<=dB;dI++){var dA=this.__jw[dK][dI];

if(!dA){continue;
}var dG=dA.getLayoutProperties().rowSpan||0;

if(dG>1){continue;
}var dH=this.__jE(dA);

if(this.getRowFlex(dK)>0){dD=Math.max(dD,dH.minHeight);
}else{dD=Math.max(dD,dH.height);
}dF=Math.max(dF,dH.height);
}var dD=Math.max(dD,this.getRowMinHeight(dK));
var dE=this.getRowMaxHeight(dK);

if(this.getRowHeight(dK)!==null){var dF=this.getRowHeight(dK);
}else{var dF=Math.max(dD,Math.min(dF,dE));
}dJ[dK]={minHeight:dD,height:dF,maxHeight:dE};
}
if(this.__jy.length>0){this._fixHeightsRowSpan(dJ);
}this.__jB=dJ;
return dJ;
},_getColWidths:function(){if(this.__jC!=null){return this.__jC;
}var bR=[];
var bO=this.__jA;
var bQ=this.__jz;

for(var bW=0;bW<=bO;bW++){var bU=0;
var bT=0;
var bP=Infinity;

for(var bX=0;bX<=bQ;bX++){var bN=this.__jw[bX][bW];

if(!bN){continue;
}var bS=bN.getLayoutProperties().colSpan||0;

if(bS>1){continue;
}var bV=this.__jE(bN);

if(this.getColumnFlex(bW)>0){bT=Math.max(bT,bV.minWidth);
}else{bT=Math.max(bT,bV.width);
}bU=Math.max(bU,bV.width);
}var bT=Math.max(bT,this.getColumnMinWidth(bW));
var bP=this.getColumnMaxWidth(bW);

if(this.getColumnWidth(bW)!==null){var bU=this.getColumnWidth(bW);
}else{var bU=Math.max(bT,Math.min(bU,bP));
}bR[bW]={minWidth:bT,width:bU,maxWidth:bP};
}
if(this.__jx.length>0){this._fixWidthsColSpan(bR);
}this.__jC=bR;
return bR;
},_getColumnFlexOffsets:function(bG){var bH=this.getSizeHint();
var bL=bG-bH.width;

if(bL==0){return {};
}var bJ=this._getColWidths();
var bI={};

for(var i=0,l=bJ.length;i<l;i++){var bM=bJ[i];
var bK=this.getColumnFlex(i);

if((bK<=0)||(bM.width==bM.maxWidth&&bL>0)||(bM.width==bM.minWidth&&bL<0)){continue;
}bI[i]={min:bM.minWidth,value:bM.width,max:bM.maxWidth,flex:bK};
}return qx.ui.layout.Util.computeFlexOffsets(bI,bG,bH.width);
},_getRowFlexOffsets:function(cM){var cN=this.getSizeHint();
var cQ=cM-cN.height;

if(cQ==0){return {};
}var cR=this._getRowHeights();
var cO={};

for(var i=0,l=cR.length;i<l;i++){var cS=cR[i];
var cP=this.getRowFlex(i);

if((cP<=0)||(cS.height==cS.maxHeight&&cQ>0)||(cS.height==cS.minHeight&&cQ<0)){continue;
}cO[i]={min:cS.minHeight,value:cS.height,max:cS.maxHeight,flex:cP};
}return qx.ui.layout.Util.computeFlexOffsets(cO,cM,cN.height);
},renderLayout:function(Q,R){if(this._invalidChildrenCache){this.__jD();
}var bg=qx.ui.layout.Util;
var T=this.getSpacingX();
var ba=this.getSpacingY();
var bl=this._getColWidths();
var bk=this._getColumnFlexOffsets(Q);
var U=[];
var bn=this.__jA;
var S=this.__jz;
var bm;

for(var bo=0;bo<=bn;bo++){bm=bk[bo]?bk[bo].offset:0;
U[bo]=bl[bo].width+bm;
}var bd=this._getRowHeights();
var bf=this._getRowFlexOffsets(R);
var bu=[];

for(var bb=0;bb<=S;bb++){bm=bf[bb]?bf[bb].offset:0;
bu[bb]=bd[bb].height+bm;
}var bv=0;

for(var bo=0;bo<=bn;bo++){var top=0;

for(var bb=0;bb<=S;bb++){var bi=this.__jw[bb][bo];
if(!bi){top+=bu[bb]+ba;
continue;
}var V=bi.getLayoutProperties();
if(V.row!==bb||V.column!==bo){top+=bu[bb]+ba;
continue;
}var bt=T*(V.colSpan-1);

for(var i=0;i<V.colSpan;i++){bt+=U[bo+i];
}var bj=ba*(V.rowSpan-1);

for(var i=0;i<V.rowSpan;i++){bj+=bu[bb+i];
}var W=bi.getSizeHint();
var br=bi.getMarginTop();
var bh=bi.getMarginLeft();
var be=bi.getMarginBottom();
var Y=bi.getMarginRight();
var bc=Math.max(W.minWidth,Math.min(bt-bh-Y,W.maxWidth));
var bs=Math.max(W.minHeight,Math.min(bj-br-be,W.maxHeight));
var bp=this.getCellAlign(bb,bo);
var bq=bv+bg.computeHorizontalAlignOffset(bp.hAlign,bc,bt,bh,Y);
var X=top+bg.computeVerticalAlignOffset(bp.vAlign,bs,bj,br,be);
bi.renderLayout(bq,X,bc,bs);
top+=bu[bb]+ba;
}bv+=U[bo]+T;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__jC=null;
this.__jB=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jD();
}var cr=this._getColWidths();
var ct=0,cu=0;

for(var i=0,l=cr.length;i<l;i++){var cv=cr[i];

if(this.getColumnFlex(i)>0){ct+=cv.minWidth;
}else{ct+=cv.width;
}cu+=cv.width;
}var cw=this._getRowHeights();
var cp=0,cs=0;

for(var i=0,l=cw.length;i<l;i++){var cx=cw[i];

if(this.getRowFlex(i)>0){cp+=cx.minHeight;
}else{cp+=cx.height;
}cs+=cx.height;
}var co=this.getSpacingX()*(cr.length-1);
var cn=this.getSpacingY()*(cw.length-1);
var cq={minWidth:ct+co,width:cu+co,minHeight:cp+cn,height:cs+cn};
return cq;
}},destruct:function(){this.__jw=this.__ju=this.__jv=this.__jx=this.__jy=this.__jC=this.__jB=null;
}});
})();
(function(){var C="resize",B="scrollY",A="update",z="scrollX",w="_applyScrollX",v="_applyScrollY",u="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",t="appear",s="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",r="qx.event.type.Event",p="qx.ui.core.scroll.ScrollPane",q="scroll";
qx.Class.define(p,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(C,this._onUpdate);
var H=this.getContentElement();
H.addListener(q,this._onScroll,this);
H.addListener(t,this._onAppear,this);
},events:{update:r},properties:{scrollX:{check:u,apply:w,event:z,init:0},scrollY:{check:s,apply:v,event:B,init:0}},members:{add:function(D){var E=this._getChildren()[0];

if(E){this._remove(E);
E.removeListener(C,this._onUpdate,this);
}
if(D){this._add(D);
D.addListener(C,this._onUpdate,this);
}},remove:function(G){if(G){this._remove(G);
G.removeListener(C,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(A);
},_onScroll:function(e){var g=this.getContentElement();
this.setScrollX(g.getScrollX());
this.setScrollY(g.getScrollY());
},_onAppear:function(e){var L=this.getContentElement();
var I=this.getScrollX();
var J=L.getScrollX();

if(I!=J){L.scrollToX(I);
}var M=this.getScrollY();
var K=L.getScrollY();

if(M!=K){L.scrollToY(M);
}},getItemTop:function(N){var top=0;

do{top+=N.getBounds().top;
N=N.getLayoutParent();
}while(N&&N!==this);
return top;
},getItemBottom:function(F){return this.getItemTop(F)+F.getBounds().height;
},getItemLeft:function(b){var c=0;
var parent;

do{c+=b.getBounds().left;
parent=b.getLayoutParent();

if(parent){c+=parent.getInsets().left;
}b=parent;
}while(b&&b!==this);
return c;
},getItemRight:function(a){return this.getItemLeft(a)+a.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var f=this.getInnerSize();
var d=this.getScrollSize();

if(f&&d){return Math.max(0,d.width-f.width);
}return 0;
},getScrollMaxY:function(){var o=this.getInnerSize();
var n=this.getScrollSize();

if(o&&n){return Math.max(0,n.height-o.height);
}return 0;
},scrollToX:function(j){var k=this.getScrollMaxX();

if(j<0){j=0;
}else if(j>k){j=k;
}this.setScrollX(j);
},scrollToY:function(l){var m=this.getScrollMaxY();

if(l<0){l=0;
}else if(l>m){l=m;
}this.setScrollY(l);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(h){this.getContentElement().scrollToX(h);
},_applyScrollY:function(i){this.getContentElement().scrollToY(i);
}}});
})();
(function(){var a="qx.ui.layout.Basic";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var d,f,e,h,top;
for(var i=0,l=g.length;i<l;i++){d=g[i];
f=d.getSizeHint();
e=d.getLayoutProperties();
h=(e.left||0)+d.getMarginLeft();
top=(e.top||0)+d.getMarginTop();
d.renderLayout(h,top,f.width,f.height);
}},_computeSizeHint:function(){var p=this._getLayoutChildren();
var m,r,n;
var q=0,o=0;
var j,k;
for(var i=0,l=p.length;i<l;i++){m=p[i];
r=m.getSizeHint();
n=m.getLayoutProperties();
j=r.width+(n.left||0)+m.getMarginLeft()+m.getMarginRight();
k=r.height+(n.top||0)+m.getMarginTop()+m.getMarginBottom();

if(j>q){q=j;
}
if(k>o){o=k;
}}return {width:q,height:o};
}}});
})();
(function(){var V="splitter",U="slider",T="mousedown",S="mouseout",R="mousemove",Q="mouseup",P="losecapture",O="active",N="horizontal",M="vertical",bm="knob",bl="Integer",bk="height",bj="row-resize",bi="move",bh="maxHeight",bg="width",bf="_applyOrientation",be="mouseover",bd="splitpane",bb="qx.ui.splitpane.Pane",bc="_applyOffset",Y="minHeight",ba="minWidth",W="col-resize",X="maxWidth";
qx.Class.define(bb,{extend:qx.ui.core.Widget,construct:function(B){qx.ui.core.Widget.call(this);
this.__rh=[];
if(B){this.setOrientation(B);
}else{this.initOrientation();
}this.addListener(T,this._onMouseDown);
this.addListener(Q,this._onMouseUp);
this.addListener(R,this._onMouseMove);
this.addListener(S,this._onMouseOut);
this.addListener(P,this._onMouseUp);
},properties:{appearance:{refine:true,init:bd},offset:{check:bl,init:6,apply:bc},orientation:{init:N,check:[N,M],apply:bf}},members:{__ri:null,__rj:false,__rk:null,__rl:null,__rm:null,__rn:null,__ro:null,__rh:null,_createChildControlImpl:function(C){var D;

switch(C){case U:D=new qx.ui.splitpane.Slider(this);
D.exclude();
this._add(D,{type:C});
break;
case V:D=new qx.ui.splitpane.Splitter(this);
this._add(D,{type:C});
D.addListener(bi,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){D.addListener(be,this._onSplitterMouseOver,D);
}break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,C);
},_applyOrientation:function(F,G){var H=this.getChildControl(U);
var K=this.getChildControl(V);
this.__rm=F===N;
var J=this._getLayout();

if(J){J.dispose();
}var I=F===M?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(I);
K.removeState(G);
K.addState(F);
K.getChildControl(bm).removeState(G);
K.getChildControl(bm).addState(F);
H.removeState(G);
H.addState(F);
},_applyOffset:function(bx,by){var bz=this.getChildControl(V);

if(by===0){bz.removeListener(T,this._onMouseDown,this);
bz.removeListener(R,this._onMouseMove,this);
bz.removeListener(S,this._onMouseOut,this);
bz.removeListener(Q,this._onMouseUp,this);
bz.removeListener(P,this._onMouseUp,this);
this.addListener(T,this._onMouseDown);
this.addListener(Q,this._onMouseUp);
this.addListener(R,this._onMouseMove);
this.addListener(S,this._onMouseOut);
this.addListener(P,this._onMouseUp);
}
if(bx===0){this.removeListener(T,this._onMouseDown);
this.removeListener(Q,this._onMouseUp);
this.removeListener(R,this._onMouseMove);
this.removeListener(S,this._onMouseOut);
this.removeListener(P,this._onMouseUp);
bz.addListener(T,this._onMouseDown,this);
bz.addListener(R,this._onMouseMove,this);
bz.addListener(S,this._onMouseOut,this);
bz.addListener(Q,this._onMouseUp,this);
bz.addListener(P,this._onMouseUp,this);
}},add:function(bA,bB){if(bB==null){this._add(bA);
}else{this._add(bA,{flex:bB});
}this.__rh.push(bA);
},remove:function(E){this._remove(E);
qx.lang.Array.remove(this.__rh,E);
},getChildren:function(){return this.__rh;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var u=this.getChildControl(V);
var w=u.getContainerLocation();
var v=this.getContentLocation();
this.__ri=this.__rm?e.getDocumentLeft()-w.left+v.left:e.getDocumentTop()-w.top+v.top;
var A=this.getChildControl(U);
var z=u.getBounds();
A.setUserBounds(z.left,z.top,z.width,z.height);
A.setZIndex(u.getZIndex()+1);
A.show();
this.__rj=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__rj){this.__rq();
var a=this.getChildControl(U);
var b=this.__rn;

if(this.__rm){a.setDomLeft(b);
}else{a.setDomTop(b);
}e.stop();
}else{this.__rp();
}},_onMouseOut:function(e){this._setLastMousePosition(-100,-100);
this.__rp();
},_onMouseUp:function(e){if(!this.__rj){return;
}this._finalizeSizes();
var L=this.getChildControl(U);
L.exclude();
this.__rj=false;
this.releaseCapture();
this.__rp();
e.stop();
},_onSplitterMove:function(){this.__rp();
},_onSplitterMouseOver:function(){this.addState(O);
},_finalizeSizes:function(){var q=this.__rn;
var n=this.__ro;

if(q==null){return;
}var s=this._getChildren();
var r=s[2];
var o=s[3];
var p=r.getLayoutProperties().flex;
var t=o.getLayoutProperties().flex;
if((p!=0)&&(t!=0)){r.setLayoutProperties({flex:q});
o.setLayoutProperties({flex:n});
}else{if(this.__rm){r.setWidth(q);
o.setWidth(n);
}else{r.setHeight(q);
o.setHeight(n);
}}},_isNear:function(){var c=this.getChildControl(V);
var f=c.getBounds();
var h=c.getContainerLocation();
var d=this.getOffset();
if(!h){return;
}var i=this.__rk;
var j=f.width;
var g=h.left;

if(j<d){g-=Math.floor((d-j)/2);
j=d;
}
if(i<g||i>(g+j)){return false;
}var i=this.__rl;
var j=f.height;
var g=h.top;

if(j<d){g-=Math.floor((d-j)/2);
j=d;
}
if(i<g||i>(g+j)){return false;
}return true;
},__rp:function(){var l=this.getChildControl(V);
var m=this.getApplicationRoot();
if(this.__rj||this._isNear()){var k=this.__rm?W:bj;
this.setCursor(k);
m.setGlobalCursor(k);
l.addState(O);
}else if(l.hasState(O)){this.resetCursor();
m.resetGlobalCursor();
l.removeState(O);
}},__rq:function(){if(this.__rm){var bp=ba,bw=bg,bq=X,bu=this.__rk;
}else{var bp=Y,bw=bk,bq=bh,bu=this.__rl;
}var bv=this._getChildren();
var bn=bv[2].getSizeHint();
var bs=bv[3].getSizeHint();
var bt=bv[2].getBounds()[bw]+bv[3].getBounds()[bw];
var br=bu-this.__ri;
var bo=bt-br;
if(br<bn[bp]){bo-=bn[bp]-br;
br=bn[bp];
}else if(bo<bs[bp]){br-=bs[bp]-bo;
bo=bs[bp];
}if(br>bn[bq]){bo+=br-bn[bq];
br=bn[bq];
}else if(bo>bs[bq]){br+=bo-bs[bq];
bo=bs[bq];
}this.__rn=br;
this.__ro=bo;
},_isActiveDragSession:function(){return this.__rj;
},_setLastMousePosition:function(x,y){this.__rk=x;
this.__rl=y;
}},destruct:function(){this.__rh=null;
}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g){var h;

switch(g){case d:h=new qx.ui.basic.Image;
this._add(h);
break;
}return h||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.VLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var r,u;
var g,f,p,h;

for(var i=0;i<length;i++){r=v[i];
u=r.getLayoutProperties().type;

if(u===b){f=r;
}else if(u===c){p=r;
}else if(!g){g=r;
}else{h=r;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var k=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(k==null){k=1;
}var w=g.getSizeHint();
var n=f.getSizeHint();
var o=h.getSizeHint();
var j=w.height;
var s=n.height;
var t=o.height;

if(x>0&&k>0){var l=x+k;
var m=e-s;
var j=Math.round((m/l)*x);
var t=m-j;
var q=qx.ui.layout.Util.arrangeIdeals(w.minHeight,j,w.maxHeight,o.minHeight,t,o.maxHeight);
j=q.begin;
t=q.end;
}else if(x>0){j=e-s-t;

if(j<w.minHeight){j=w.minHeight;
}
if(j>w.maxHeight){j=w.maxHeight;
}}else if(k>0){t=e-j-s;

if(t<o.minHeight){t=o.minHeight;
}
if(t>o.maxHeight){t=o.maxHeight;
}}g.renderLayout(0,0,d,j);
f.renderLayout(0,j,d,s);
h.renderLayout(0,j+s,d,t);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var B=0,D=0,C=0;
var E=0,F=0,y=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
B+=z.minHeight;
D+=z.height;
C+=z.maxHeight;

if(z.minWidth>E){E=z.minWidth;
}
if(z.width>F){F=z.width;
}
if(z.maxWidth>y){y=z.maxWidth;
}}return {minHeight:B,height:D,maxHeight:C,minWidth:E,width:F,maxWidth:y};
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.HLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var s,u;
var g,f,p,h;

for(var i=0;i<length;i++){s=v[i];
u=s.getLayoutProperties().type;

if(u===b){f=s;
}else if(u===c){p=s;
}else if(!g){g=s;
}else{h=s;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var j=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(j==null){j=1;
}var w=g.getSizeHint();
var m=f.getSizeHint();
var o=h.getSizeHint();
var t=w.width;
var r=m.width;
var q=o.width;

if(x>0&&j>0){var k=x+j;
var l=d-r;
var t=Math.round((l/k)*x);
var q=l-t;
var n=qx.ui.layout.Util.arrangeIdeals(w.minWidth,t,w.maxWidth,o.minWidth,q,o.maxWidth);
t=n.begin;
q=n.end;
}else if(x>0){t=d-r-q;

if(t<w.minWidth){t=w.minWidth;
}
if(t>w.maxWidth){t=w.maxWidth;
}}else if(j>0){q=d-t-r;

if(q<o.minWidth){q=o.minWidth;
}
if(q>o.maxWidth){q=o.maxWidth;
}}g.renderLayout(0,0,t,e);
f.renderLayout(t,0,r,e);
h.renderLayout(t+r,0,q,e);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var E=0,F=0,y=0;
var B=0,D=0,C=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
E+=z.minWidth;
F+=z.width;
y+=z.maxWidth;

if(z.minHeight>B){B=z.minHeight;
}
if(z.height>D){D=z.height;
}
if(z.maxHeight>C){C=z.maxHeight;
}}return {minWidth:E,width:F,maxWidth:y,minHeight:B,height:D,maxHeight:C};
}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var q="checked",p="keypress",o="Boolean",n="Right",m="_applyValue",l="changeValue",k="qx.ui.form.RadioButton",j="radiobutton",i="Left",h="qx.ui.form.RadioGroup",d="Down",g="_applyGroup",f="Up",c="execute";
qx.Class.define(k,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(s){{};
qx.ui.form.Button.call(this,s);
this.addListener(c,this._onExecute);
this.addListener(p,this._onKeyPress);
},properties:{group:{check:h,nullable:true,apply:g},value:{check:o,nullable:true,event:l,apply:m,init:false},appearance:{refine:true,init:j},allowGrowX:{refine:true,init:false}},members:{_applyValue:function(a,b){a?this.addState(q):this.removeState(q);

if(a&&this.getFocusable()){this.focus();
}},_applyGroup:function(t,u){if(u){u.remove(this);
}
if(t){t.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onKeyPress:function(e){var r=this.getGroup();

if(!r){return;
}
switch(e.getKeyIdentifier()){case i:case f:r.selectPrevious();
break;
case n:case d:r.selectNext();
break;
}}}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(e){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(c){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="changeSelection",c="changeSelected",b="__je",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__je:null,getSelection:function(){var g=this.__jf().getSelected();

if(g){return [g];
}else{return [];
}},setSelection:function(h){switch(h.length){case 0:this.resetSelection();
break;
case 1:this.__jf().setSelected(h[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+h.length+" items!");
}},resetSelection:function(){this.__jf().resetSelected();
},isSelected:function(n){return this.__jf().isSelected(n);
},isSelectionEmpty:function(){return this.__jf().isSelectionEmpty();
},getSelectables:function(l){return this.__jf().getSelectables(l);
},_onChangeSelected:function(e){var k=e.getData();
var j=e.getOldData();
k==null?k=[]:k=[k];
j==null?j=[]:j=[j];
this.fireDataEvent(d,k,j);
},__jf:function(){if(this.__je==null){var i=this;
this.__je=new qx.ui.core.SingleSelectionManager({getItems:function(){return i._getItems();
},isItemSelectable:function(m){if(i._isItemSelectable){return i._isItemSelectable(m);
}else{return m.isVisible();
}}});
this.__je.addListener(c,this._onChangeSelected,this);
}this.__je.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__je;
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var e="change",d="__jg",c="qx.event.type.Data",b="qx.ui.form.MModelSelection",a="changeSelection";
qx.Mixin.define(b,{construct:function(){this.__jg=new qx.data.Array();
this.__jg.addListener(e,this.__jj,this);
this.addListener(a,this.__ji,this);
},events:{changeModelSelection:c},members:{__jg:null,__jh:false,__ji:function(){if(this.__jh){return;
}var h=this.getSelection();
var f=[];

for(var i=0;i<h.length;i++){var k=h[i];
var g=k.getModel?k.getModel():null;

if(g!==null){f.push(g);
}}if(f.length===h.length){this.setModelSelection(f);
}},__jj:function(){this.__jh=true;
var m=this.getSelectables(true);
var o=[];
var n=this.__jg.toArray();

for(var i=0;i<n.length;i++){var q=n[i];

for(var j=0;j<m.length;j++){var r=m[j];
var l=r.getModel?r.getModel():null;

if(q===l){o.push(r);
break;
}}}this.setSelection(o);
this.__jh=false;
var p=this.getSelection();

if(!qx.lang.Array.equals(p,o)){this.__ji();
}},getModelSelection:function(){return this.__jg;
},setModelSelection:function(s){if(!s){this.__jg.removeAll();
return;
}{};
s.unshift(this.__jg.getLength());
s.unshift(0);
var t=this.__jg.splice.apply(this.__jg,s);
t.dispose();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="changeSelection",b="_applyEnabled",a="__jk";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(x){qx.core.Object.call(this);
this.__jk=[];
this.addListener(d,this.__jl,this);

if(x!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:b,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__jk:null,getItems:function(){return this.__jk;
},add:function(y){var z=this.__jk;
var A;

for(var i=0,l=arguments.length;i<l;i++){A=arguments[i];

if(qx.lang.Array.contains(z,A)){continue;
}A.addListener(p,this._onItemChangeChecked,this);
z.push(A);
A.setGroup(this);
if(A.getValue()){this.setSelection([A]);
}}if(!this.isAllowEmptySelection()&&z.length>0&&!this.getSelection()[0]){this.setSelection([z[0]]);
}},remove:function(G){var H=this.__jk;

if(qx.lang.Array.contains(H,G)){qx.lang.Array.remove(H,G);
if(G.getGroup()===this){G.resetGroup();
}G.removeListener(p,this._onItemChangeChecked,this);
if(G.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__jk;
},_onItemChangeChecked:function(e){var K=e.getTarget();

if(K.getValue()){this.setSelection([K]);
}else if(this.getSelection()[0]==K){this.resetSelection();
}},_applyInvalidMessage:function(I,J){for(var i=0;i<this.__jk.length;i++){this.__jk[i].setInvalidMessage(I);
}},_applyValid:function(L,M){for(var i=0;i<this.__jk.length;i++){this.__jk[i].setValid(L);
}},_applyEnabled:function(N,O){var P=this.__jk;

if(N==null){for(var i=0,l=P.length;i<l;i++){P[i].resetEnabled();
}}else{for(var i=0,l=P.length;i<l;i++){P[i].setEnabled(N);
}}},_applyAllowEmptySelection:function(s,t){if(!s&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var u=this.getSelection()[0];
var w=this.__jk;
var v=w.indexOf(u);

if(v==-1){return;
}var i=0;
var length=w.length;
if(this.getWrap()){v=(v+1)%length;
}else{v=Math.min(v+1,length-1);
}
while(i<length&&!w[v].getEnabled()){v=(v+1)%length;
i++;
}this.setSelection([w[v]]);
},selectPrevious:function(){var D=this.getSelection()[0];
var F=this.__jk;
var E=F.indexOf(D);

if(E==-1){return;
}var i=0;
var length=F.length;
if(this.getWrap()){E=(E-1+length)%length;
}else{E=Math.max(E-1,0);
}
while(i<length&&!F[E].getEnabled()){E=(E-1+length)%length;
i++;
}this.setSelection([F[E]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__jl:function(e){var C=e.getData()[0];
var B=e.getOldData()[0];

if(B){B.setValue(false);
}
if(C){C.setValue(true);
}}},destruct:function(){this._disposeArray(a);
}});
})();
(function(){var g="__jn",f="__jo",e="Boolean",d="qx.ui.core.SingleSelectionManager",c="__jm",b="changeSelected",a="qx.event.type.Data";
qx.Class.define(d,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);
{};
this.__jm=j;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:e,init:true,apply:f}},members:{__jn:null,__jm:null,getSelected:function(){return this.__jn;
},setSelected:function(h){if(!this.__jq(h)){throw new Error("Could not select "+h+", because it is not a child element!");
}this.__jp(h);
},resetSelected:function(){this.__jp(null);
},isSelected:function(r){if(!this.__jq(r)){throw new Error("Could not check if "+r+" is selected,"+" because it is not a child element!");
}return this.__jn===r;
},isSelectionEmpty:function(){return this.__jn==null;
},getSelectables:function(k){var l=this.__jm.getItems();
var m=[];

for(var i=0;i<l.length;i++){if(this.__jm.isItemSelectable(l[i])){m.push(l[i]);
}}if(!k){for(var i=m.length-1;i>=0;i--){if(!m[i].getEnabled()){m.splice(i,1);
}}}return m;
},__jo:function(n,o){if(!n){this.__jp(this.__jn);
}},__jp:function(s){var v=this.__jn;
var u=s;

if(u!=null&&v===u){return;
}
if(!this.isAllowEmptySelection()&&u==null){var t=this.getSelectables(true)[0];

if(t){u=t;
}}this.__jn=u;
this.fireDataEvent(b,u,v);
},__jq:function(p){var q=this.__jm.getItems();

for(var i=0;i<q.length;i++){if(q[i]===p){return true;
}}return false;
}},destruct:function(){if(this.__jm.toHashCode){this._disposeObjects(c);
}else{this.__jm=null;
}this._disposeObjects(g);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(q,r,name){this.fireDataEvent(c,{value:q,name:name,old:r});
this._registerEventChaining(q,r,name);
},_registerEventChaining:function(s,t,name){if((s instanceof qx.core.Object)&&qx.Class.hasMixin(s.constructor,qx.data.marshal.MEventBubbling)){var u=qx.lang.Function.bind(this.__jr,this,name);
var v=s.addListener(c,u,this);
s.setUserData(d,v);
}if(t!=null&&t.getUserData&&t.getUserData(d)!=null){t.removeListenerById(t.getUserData(d));
}},__jr:function(name,e){var p=e.getData();
var l=p.value;
var j=p.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(p.name.indexOf){var o=p.name.indexOf(f)!=-1?p.name.indexOf(f):p.name.length;
var m=p.name.indexOf(h)!=-1?p.name.indexOf(h):p.name.length;

if(o<m){var i=p.name.substring(0,o);
var n=p.name.substring(o+1,p.name.length);

if(n[0]!=h){n=f+n;
}var k=name+h+i+g+n;
}else if(m<o){var i=p.name.substring(0,m);
var n=p.name.substring(m,p.name.length);
var k=name+h+i+g+n;
}else{var k=name+h+p.name+g;
}}else{var k=name+h+p.name+g;
}}else{var k=name+f+p.name;
}this.fireDataEvent(c,{value:l,name:k,old:j});
}}});
})();
(function(){var s="change",r="add",q="remove",p="order",o="qx.event.type.Data",n="",m="qx.data.Array",l="?",k="changeBubble",j="number",h="changeLength";
qx.Class.define(m,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(Y){qx.core.Object.call(this);
if(Y==undefined){this.__js=[];
}else if(arguments.length>1){this.__js=[];

for(var i=0;i<arguments.length;i++){this.__js.push(arguments[i]);
}}else if(typeof Y==j){this.__js=new Array(Y);
}else if(Y instanceof Array){this.__js=qx.lang.Array.clone(Y);
}else{this.__js=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__js.length;i++){this._applyEventPropagation(this.__js[i],null,i);
}this.__jt();
},events:{"change":o,"changeLength":o},members:{__js:null,concat:function(U){if(U){var V=this.__js.concat(U);
}else{var V=this.__js.concat();
}return new qx.data.Array(V);
},join:function(c){return this.__js.join(c);
},pop:function(){var g=this.__js.pop();
this.__jt();
this._applyEventPropagation(null,g,this.length-1);
this.fireDataEvent(s,{start:this.length-1,end:this.length-1,type:q,items:[g]},null);
return g;
},push:function(bb){for(var i=0;i<arguments.length;i++){this.__js.push(arguments[i]);
this.__jt();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(s,{start:this.length-1,end:this.length-1,type:r,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__js.reverse();
this.fireDataEvent(s,{start:0,end:this.length-1,type:p,items:null},null);
},shift:function(){var t=this.__js.shift();
this.__jt();
this._applyEventPropagation(null,t,this.length-1);
this.fireDataEvent(s,{start:0,end:this.length-1,type:q,items:[t]},null);
return t;
},slice:function(J,K){return new qx.data.Array(this.__js.slice(J,K));
},splice:function(u,v,w){var C=this.__js.length;
var z=this.__js.splice.apply(this.__js,arguments);
if(this.__js.length!=C){this.__jt();
}var A=v>0;
var x=arguments.length>2;
var y=null;

if(A||x){if(this.__js.length>C){var B=r;
}else if(this.__js.length<C){var B=q;
y=z;
}else{var B=p;
}this.fireDataEvent(s,{start:u,end:this.length-1,type:B,items:y},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,u+i);
}this.fireDataEvent(k,{value:this,name:l,old:z});
for(var i=0;i<z.length;i++){this._applyEventPropagation(null,z[i],i);
}return (new qx.data.Array(z));
},sort:function(R){this.__js.sort.apply(this.__js,arguments);
this.fireDataEvent(s,{start:0,end:this.length-1,type:p,items:null},null);
},unshift:function(bg){for(var i=arguments.length-1;i>=0;i--){this.__js.unshift(arguments[i]);
this.__jt();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(s,{start:0,end:this.length-1,type:r,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__js;
},getItem:function(bc){return this.__js[bc];
},setItem:function(d,e){var f=this.__js[d];
this.__js[d]=e;
this._applyEventPropagation(e,f,d);
if(this.length!=this.__js.length){this.__jt();
}this.fireDataEvent(s,{start:d,end:d,type:r,items:[e]},null);
},getLength:function(){return this.length;
},indexOf:function(S){return this.__js.indexOf(S);
},toString:function(){if(this.__js!=null){return this.__js.toString();
}return n;
},contains:function(bf){return this.__js.indexOf(bf)!==-1;
},copy:function(){return this.concat();
},insertAt:function(bd,be){this.splice(bd,0,be);
},insertBefore:function(O,P){var Q=this.indexOf(O);

if(Q==-1){this.push(P);
}else{this.splice(Q,0,P);
}},insertAfter:function(G,H){var I=this.indexOf(G);

if(I==-1||I==(this.length-1)){this.push(H);
}else{this.splice(I+1,0,H);
}},removeAt:function(L){return this.splice(L,1)[0];
},removeAll:function(){for(var i=0;i<this.__js.length;i++){this._applyEventPropagation(null,this.__js[i],i);
}var b=this.getLength();
var a=this.__js.concat();
this.__js.length=0;
this.__jt();
this.fireDataEvent(s,{start:0,end:b-1,type:q,items:a},null);
},append:function(W){if(W instanceof qx.data.Array){W=W.toArray();
}{};
for(var i=0;i<W.length;i++){this._applyEventPropagation(W[i],null,this.__js.length+i);
}Array.prototype.push.apply(this.__js,W);
var X=this.length;
this.__jt();
this.fireDataEvent(s,{start:X,end:this.length-1,type:r,items:W},null);
},remove:function(M){var N=this.indexOf(M);

if(N!=-1){this.splice(N,1);
return M;
}},equals:function(bi){if(this.length!==bi.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bi.getItem(i)){return false;
}}return true;
},sum:function(){var ba=0;

for(var i=0;i<this.length;i++){ba+=this.getItem(i);
}return ba;
},max:function(){var F=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>F){F=this.getItem(i);
}}return F===undefined?null:F;
},min:function(){var T=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<T){T=this.getItem(i);
}}return T===undefined?null:T;
},forEach:function(D,E){for(var i=0;i<this.__js.length;i++){D.call(E,this.__js[i]);
}},__jt:function(){var bh=this.length;
this.length=this.__js.length;
this.fireDataEvent(h,this.length,bh);
}},destruct:function(){for(var i=0;i<this.__js.length;i++){this._applyEventPropagation(null,this.__js[i],i);
}this.__js=null;
}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var B="single",A="Boolean",z="one",y="changeSelection",x="mouseup",w="mousedown",v="__kn",u="losecapture",t="multi",s="_applyQuickSelection",l="mouseover",r="_applySelectionMode",o="_applyDragSelection",k="qx.ui.core.MMultiSelectionHandling",j="removeItem",n="keypress",m="qx.event.type.Data",p="addItem",h="additive",q="mousemove";
qx.Mixin.define(k,{construct:function(){var J=this.SELECTION_MANAGER;
var I=this.__kn=new J(this);
this.addListener(w,I.handleMouseDown,I);
this.addListener(x,I.handleMouseUp,I);
this.addListener(l,I.handleMouseOver,I);
this.addListener(q,I.handleMouseMove,I);
this.addListener(u,I.handleLoseCapture,I);
this.addListener(n,I.handleKeyPress,I);
this.addListener(p,I.handleAddItem,I);
this.addListener(j,I.handleRemoveItem,I);
I.addListener(y,this._onSelectionChange,this);
},events:{"changeSelection":m},properties:{selectionMode:{check:[B,t,h,z],init:B,apply:r},dragSelection:{check:A,init:false,apply:o},quickSelection:{check:A,init:false,apply:s}},members:{__kn:null,selectAll:function(){this.__kn.selectAll();
},isSelected:function(M){if(!qx.ui.core.Widget.contains(this,M)){throw new Error("Could not test if "+M+" is selected, because it is not a child element!");
}return this.__kn.isItemSelected(M);
},addToSelection:function(H){if(!qx.ui.core.Widget.contains(this,H)){throw new Error("Could not add + "+H+" to selection, because it is not a child element!");
}this.__kn.addItem(H);
},removeFromSelection:function(L){if(!qx.ui.core.Widget.contains(this,L)){throw new Error("Could not remove "+L+" from selection, because it is not a child element!");
}this.__kn.removeItem(L);
},selectRange:function(f,g){this.__kn.selectItemRange(f,g);
},resetSelection:function(){this.__kn.clearSelection();
},setSelection:function(F){for(var i=0;i<F.length;i++){if(!qx.ui.core.Widget.contains(this,F[i])){throw new Error("Could not select "+F[i]+", because it is not a child element!");
}}
if(F.length===0){this.resetSelection();
}else{var G=this.getSelection();

if(!qx.lang.Array.equals(G,F)){this.__kn.replaceSelection(F);
}}},getSelection:function(){return this.__kn.getSelection();
},getSortedSelection:function(){return this.__kn.getSortedSelection();
},isSelectionEmpty:function(){return this.__kn.isSelectionEmpty();
},getSelectionContext:function(){return this.__kn.getSelectionContext();
},_getManager:function(){return this.__kn;
},getSelectables:function(E){return this.__kn.getSelectables(E);
},invertSelection:function(){this.__kn.invertSelection();
},_getLeadItem:function(){var K=this.__kn.getMode();

if(K===B||K===z){return this.__kn.getSelectedItem();
}else{return this.__kn.getLeadItem();
}},_applySelectionMode:function(C,D){this.__kn.setMode(C);
},_applyDragSelection:function(c,d){this.__kn.setDrag(c);
},_applyQuickSelection:function(a,b){this.__kn.setQuick(a);
},_onSelectionChange:function(e){this.fireDataEvent(y,e.getData());
}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var bL="one",bK="single",bJ="selected",bI="additive",bH="multi",bG="PageUp",bF="under",bE="Left",bD="lead",bC="Down",ck="Up",cj="Boolean",ci="PageDown",ch="anchor",cg="End",cf="Home",ce="Right",cd="right",cc="click",cb="above",bS="left",bT="Escape",bQ="__kt",bR="A",bO="Space",bP="_applyMode",bM="interval",bN="changeSelection",bU="qx.event.type.Data",bV="quick",bX="key",bW="abstract",ca="drag",bY="qx.ui.core.selection.Abstract";
qx.Class.define(bY,{type:bW,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__kq={};
},events:{"changeSelection":bU},properties:{mode:{check:[bK,bH,bI,bL],init:bK,apply:bP},drag:{check:cj,init:false},quick:{check:cj,init:false}},members:{__kr:0,__ks:0,__kt:null,__ku:null,__kv:null,__kw:null,__kx:null,__ky:null,__kz:null,__kA:null,__kB:null,__kC:null,__kD:null,__kE:null,__kF:null,__kG:null,__kH:null,__kq:null,__kI:null,__kJ:null,_userInteraction:false,getSelectionContext:function(){return this.__kG;
},selectAll:function(){var n=this.getMode();

if(n==bK||n==bL){throw new Error("Can not select all items in selection mode: "+n);
}this._selectAllItems();
this._fireChange();
},selectItem:function(by){this._setSelectedItem(by);
var bz=this.getMode();

if(bz!==bK&&bz!==bL){this._setLeadItem(by);
this._setAnchorItem(by);
}this._scrollItemIntoView(by);
this._fireChange();
},addItem:function(j){var k=this.getMode();

if(k===bK||k===bL){this._setSelectedItem(j);
}else{if(!this._getAnchorItem()){this._setAnchorItem(j);
}this._setLeadItem(j);
this._addToSelection(j);
}this._scrollItemIntoView(j);
this._fireChange();
},removeItem:function(g){this._removeFromSelection(g);

if(this.getMode()===bL&&this.isSelectionEmpty()){var h=this._getFirstSelectable();

if(h){this.addItem(h);
}if(h==g){return;
}}
if(this.getLeadItem()==g){this._setLeadItem(null);
}
if(this._getAnchorItem()==g){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(o,p){var q=this.getMode();

if(q==bK||q==bL){throw new Error("Can not select multiple items in selection mode: "+q);
}this._selectItemRange(o,p);
this._setAnchorItem(o);
this._setLeadItem(p);
this._scrollItemIntoView(p);
this._fireChange();
},clearSelection:function(){if(this.getMode()==bL){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(T){var U=this.getMode();

if(U==bL||U===bK){if(T.length>1){throw new Error("Could not select more than one items in mode: "+U+"!");
}
if(T.length==1){this.selectItem(T[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(T);
}},getSelectedItem:function(){var M=this.getMode();

if(M===bK||M===bL){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__kq);
},getSortedSelection:function(){var ct=this.getSelectables();
var cs=qx.lang.Object.getValues(this.__kq);
cs.sort(function(a,b){return ct.indexOf(a)-ct.indexOf(b);
});
return cs;
},isItemSelected:function(cO){var cP=this._selectableToHashCode(cO);
return this.__kq[cP]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__kq);
},invertSelection:function(){var bq=this.getMode();

if(bq===bK||bq===bL){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bp=this.getSelectables();

for(var i=0;i<bp.length;i++){this._toggleInSelection(bp[i]);
}this._fireChange();
},_setLeadItem:function(x){var y=this.__kH;

if(y!==null){this._styleSelectable(y,bD,false);
}
if(x!==null){this._styleSelectable(x,bD,true);
}this.__kH=x;
},getLeadItem:function(){return this.__kH!==null?this.__kH:null;
},_setAnchorItem:function(t){var u=this.__kI;

if(u){this._styleSelectable(u,ch,false);
}
if(t){this._styleSelectable(t,ch,true);
}this.__kI=t;
},_getAnchorItem:function(){return this.__kI!==null?this.__kI:null;
},_isSelectable:function(bB){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bA=event.getTarget();
return this._isSelectable(bA)?bA:null;
},_selectableToHashCode:function(cC){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(I,J,K){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(c){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(R){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(cl,cm){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(cQ){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(S){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(cU,cV){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bb,bc){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(r,s){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(B,C){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(B===bL){var D=this._getFirstSelectable();

if(D){this._setSelectedItem(D);
this._scrollItemIntoView(D);
}}this._fireChange();
},handleMouseOver:function(event){this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var H=this.getMode();

if(H!==bL&&H!==bK){this._userInteraction=false;
return;
}var G=this._getSelectableFromMouseEvent(event);

if(G===null){this._userInteraction=false;
return;
}this._setSelectedItem(G);
this._fireChange(bV);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var W=this._getSelectableFromMouseEvent(event);

if(W===null){this._userInteraction=false;
return;
}var Y=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var V=event.isShiftPressed();
if(this.isItemSelected(W)&&!V&&!Y&&!this.getDrag()){this.__kJ=W;
this._userInteraction=false;
return;
}else{this.__kJ=null;
}this._scrollItemIntoView(W);
switch(this.getMode()){case bK:case bL:this._setSelectedItem(W);
break;
case bI:this._setLeadItem(W);
this._setAnchorItem(W);
this._toggleInSelection(W);
break;
case bH:this._setLeadItem(W);
if(V){var X=this._getAnchorItem();

if(X===null){X=this._getFirstSelectable();
this._setAnchorItem(X);
}this._selectItemRange(X,W,Y);
}else if(Y){this._setAnchorItem(W);
this._toggleInSelection(W);
}else{this._setAnchorItem(W);
this._setSelectedItem(W);
}break;
}var ba=this.getMode();

if(this.getDrag()&&ba!==bK&&ba!==bL&&!V&&!Y){this.__kx=this._getLocation();
this.__ku=this._getScroll();
this.__ky=event.getDocumentLeft()+this.__ku.left;
this.__kz=event.getDocumentTop()+this.__ku.top;
this.__kA=true;
this._capture();
}this._fireChange(cc);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var Q=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var N=event.isShiftPressed();

if(!Q&&!N&&this.__kJ){var O=this._getSelectableFromMouseEvent(event);

if(O===null||!this.isItemSelected(O)){this._userInteraction=false;
return;
}var P=this.getMode();

if(P===bI){this._removeFromSelection(O);
}else{this._setSelectedItem(O);

if(this.getMode()===bH){this._setLeadItem(O);
this._setAnchorItem(O);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__kA){return;
}this.__kB=event.getDocumentLeft();
this.__kC=event.getDocumentTop();
this._userInteraction=true;
var A=this.__kB+this.__ku.left;

if(A>this.__ky){this.__kD=1;
}else if(A<this.__ky){this.__kD=-1;
}else{this.__kD=0;
}var z=this.__kC+this.__ku.top;

if(z>this.__kz){this.__kE=1;
}else if(z<this.__kz){this.__kE=-1;
}else{this.__kE=0;
}var location=this.__kx;

if(this.__kB<location.left){this.__kr=this.__kB-location.left;
}else if(this.__kB>location.right){this.__kr=this.__kB-location.right;
}else{this.__kr=0;
}
if(this.__kC<location.top){this.__ks=this.__kC-location.top;
}else if(this.__kC>location.bottom){this.__ks=this.__kC-location.bottom;
}else{this.__ks=0;
}if(!this.__kt){this.__kt=new qx.event.Timer(100);
this.__kt.addListener(bM,this._onInterval,this);
}this.__kt.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var m=e.getData();

if(this.getMode()===bL&&this.isSelectionEmpty()){this.addItem(m);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__kA){return;
}if(this.__kF){this._fireChange(cc);
}delete this.__kA;
delete this.__kv;
delete this.__kw;
this._releaseCapture();
if(this.__kt){this.__kt.stop();
}},_onInterval:function(e){this._scrollBy(this.__kr,this.__ks);
this.__ku=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var bl=this._getDimension();
var be=Math.max(0,Math.min(this.__kB-this.__kx.left,bl.width))+this.__ku.left;
var bd=Math.max(0,Math.min(this.__kC-this.__kx.top,bl.height))+this.__ku.top;
if(this.__kv===be&&this.__kw===bd){return;
}this.__kv=be;
this.__kw=bd;
var bn=this._getAnchorItem();
var bg=bn;
var bj=this.__kD;
var bm,bf;

while(bj!==0){bm=bj>0?this._getRelatedSelectable(bg,cd):this._getRelatedSelectable(bg,bS);
if(bm!==null){bf=this._getSelectableLocationX(bm);
if((bj>0&&bf.left<=be)||(bj<0&&bf.right>=be)){bg=bm;
continue;
}}break;
}var bk=this.__kE;
var bi,bh;

while(bk!==0){bi=bk>0?this._getRelatedSelectable(bg,bF):this._getRelatedSelectable(bg,cb);
if(bi!==null){bh=this._getSelectableLocationY(bi);
if((bk>0&&bh.top<=bd)||(bk<0&&bh.bottom>=bd)){bg=bi;
continue;
}}break;
}var bo=this.getMode();

if(bo===bH){this._selectItemRange(bn,bg);
}else if(bo===bI){if(this.isItemSelected(bn)){this._selectItemRange(bn,bg,true);
}else{this._deselectItemRange(bn,bg);
}this._setAnchorItem(bg);
}this._fireChange(ca);
},__kK:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var cI,cH;
var cK=event.getKeyIdentifier();
var cJ=this.getMode();
var cE=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cF=event.isShiftPressed();
var cG=false;

if(cK===bR&&cE){if(cJ!==bK&&cJ!==bL){this._selectAllItems();
cG=true;
}}else if(cK===bT){if(cJ!==bK&&cJ!==bL){this._clearSelection();
cG=true;
}}else if(cK===bO){var cD=this.getLeadItem();

if(cD&&!cF){if(cE||cJ===bI){this._toggleInSelection(cD);
}else{this._setSelectedItem(cD);
}cG=true;
}}else if(this.__kK[cK]){cG=true;

if(cJ===bK||cJ==bL){cI=this._getSelectedItem();
}else{cI=this.getLeadItem();
}
if(cI!==null){switch(cK){case cf:cH=this._getFirstSelectable();
break;
case cg:cH=this._getLastSelectable();
break;
case ck:cH=this._getRelatedSelectable(cI,cb);
break;
case bC:cH=this._getRelatedSelectable(cI,bF);
break;
case bE:cH=this._getRelatedSelectable(cI,bS);
break;
case ce:cH=this._getRelatedSelectable(cI,cd);
break;
case bG:cH=this._getPage(cI,true);
break;
case ci:cH=this._getPage(cI,false);
break;
}}else{switch(cK){case cf:case bC:case ce:case ci:cH=this._getFirstSelectable();
break;
case cg:case ck:case bE:case bG:cH=this._getLastSelectable();
break;
}}if(cH!==null){switch(cJ){case bK:case bL:this._setSelectedItem(cH);
break;
case bI:this._setLeadItem(cH);
break;
case bH:if(cF){var cL=this._getAnchorItem();

if(cL===null){this._setAnchorItem(cL=this._getFirstSelectable());
}this._setLeadItem(cH);
this._selectItemRange(cL,cH,cE);
}else{this._setAnchorItem(cH);
this._setLeadItem(cH);

if(!cE){this._setSelectedItem(cH);
}}break;
}this._scrollItemIntoView(cH);
}}
if(cG){event.stop();
this._fireChange(bX);
}this._userInteraction=false;
},_selectAllItems:function(){var cn=this.getSelectables();

for(var i=0,l=cn.length;i<l;i++){this._addToSelection(cn[i]);
}},_clearSelection:function(){var E=this.__kq;

for(var F in E){this._removeFromSelection(E[F]);
}this.__kq={};
},_selectItemRange:function(br,bs,bt){var bw=this._getSelectableRange(br,bs);
if(!bt){var bv=this.__kq;
var bx=this.__kL(bw);

for(var bu in bv){if(!bx[bu]){this._removeFromSelection(bv[bu]);
}}}for(var i=0,l=bw.length;i<l;i++){this._addToSelection(bw[i]);
}},_deselectItemRange:function(cW,cX){var cY=this._getSelectableRange(cW,cX);

for(var i=0,l=cY.length;i<l;i++){this._removeFromSelection(cY[i]);
}},__kL:function(cp){var cr={};
var cq;

for(var i=0,l=cp.length;i<l;i++){cq=cp[i];
cr[this._selectableToHashCode(cq)]=cq;
}return cr;
},_getSelectedItem:function(){for(var L in this.__kq){return this.__kq[L];
}return null;
},_setSelectedItem:function(cR){if(this._isSelectable(cR)){var cS=this.__kq;
var cT=this._selectableToHashCode(cR);

if(!cS[cT]||qx.lang.Object.hasMinLength(cS,2)){this._clearSelection();
this._addToSelection(cR);
}}},_addToSelection:function(cM){var cN=this._selectableToHashCode(cM);

if(!this.__kq[cN]&&this._isSelectable(cM)){this.__kq[cN]=cM;
this._styleSelectable(cM,bJ,true);
this.__kF=true;
}},_toggleInSelection:function(d){var f=this._selectableToHashCode(d);

if(!this.__kq[f]){this.__kq[f]=d;
this._styleSelectable(d,bJ,true);
}else{delete this.__kq[f];
this._styleSelectable(d,bJ,false);
}this.__kF=true;
},_removeFromSelection:function(v){var w=this._selectableToHashCode(v);

if(this.__kq[w]!=null){delete this.__kq[w];
this._styleSelectable(v,bJ,false);
this.__kF=true;
}},_replaceMultiSelection:function(cu){var cx=false;
var cA,cz;
var cv={};

for(var i=0,l=cu.length;i<l;i++){cA=cu[i];

if(this._isSelectable(cA)){cz=this._selectableToHashCode(cA);
cv[cz]=cA;
}}var cB=cu[0];
var cw=cA;
var cy=this.__kq;

for(var cz in cy){if(cv[cz]){delete cv[cz];
}else{cA=cy[cz];
delete cy[cz];
this._styleSelectable(cA,bJ,false);
cx=true;
}}for(var cz in cv){cA=cy[cz]=cv[cz];
this._styleSelectable(cA,bJ,true);
cx=true;
}if(!cx){return false;
}this._scrollItemIntoView(cw);
this._setLeadItem(cB);
this._setAnchorItem(cB);
this.__kF=true;
this._fireChange();
},_fireChange:function(co){if(this.__kF){this.__kG=co||null;
this.fireDataEvent(bN,this.getSelection());
delete this.__kF;
}}},destruct:function(){this._disposeObjects(bQ);
this.__kq=this.__kJ=this.__kI=null;
this.__kH=null;
}});
})();
(function(){var L="vertical",K="under",J="above",I="qx.ui.core.selection.Widget",H="left",G="right";
qx.Class.define(I,{extend:qx.ui.core.selection.Abstract,construct:function(F){qx.ui.core.selection.Abstract.call(this);
this.__kM=F;
},members:{__kM:null,_isSelectable:function(R){return this._isItemSelectable(R)&&R.getLayoutParent()===this.__kM;
},_selectableToHashCode:function(A){return A.$$hash;
},_styleSelectable:function(h,j,k){k?h.addState(j):h.removeState(j);
},_capture:function(){this.__kM.capture();
},_releaseCapture:function(){this.__kM.releaseCapture();
},_isItemSelectable:function(a){if(this._userInteraction){return a.isVisible()&&a.isEnabled();
}else{return a.isVisible();
}},_getWidget:function(){return this.__kM;
},_getLocation:function(){var z=this.__kM.getContentElement().getDomElement();
return z?qx.bom.element.Location.get(z):null;
},_getDimension:function(){return this.__kM.getInnerSize();
},_getSelectableLocationX:function(d){var e=d.getBounds();

if(e){return {left:e.left,right:e.left+e.width};
}},_getSelectableLocationY:function(f){var g=f.getBounds();

if(g){return {top:g.top,bottom:g.top+g.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(B,C){},_scrollItemIntoView:function(c){this.__kM.scrollChildIntoView(c);
},getSelectables:function(M){var N=false;

if(!M){N=this._userInteraction;
this._userInteraction=true;
}var Q=this.__kM.getChildren();
var O=[];
var P;

for(var i=0,l=Q.length;i<l;i++){P=Q[i];

if(this._isItemSelectable(P)){O.push(P);
}}this._userInteraction=N;
return O;
},_getSelectableRange:function(s,t){if(s===t){return [s];
}var x=this.__kM.getChildren();
var u=[];
var w=false;
var v;

for(var i=0,l=x.length;i<l;i++){v=x[i];

if(v===s||v===t){if(w){u.push(v);
break;
}else{w=true;
}}
if(w&&this._isItemSelectable(v)){u.push(v);
}}return u;
},_getFirstSelectable:function(){var b=this.__kM.getChildren();

for(var i=0,l=b.length;i<l;i++){if(this._isItemSelectable(b[i])){return b[i];
}}return null;
},_getLastSelectable:function(){var y=this.__kM.getChildren();

for(var i=y.length-1;i>0;i--){if(this._isItemSelectable(y[i])){return y[i];
}}return null;
},_getRelatedSelectable:function(m,n){var q=this.__kM.getOrientation()===L;
var p=this.__kM.getChildren();
var o=p.indexOf(m);
var r;

if((q&&n===J)||(!q&&n===H)){for(var i=o-1;i>=0;i--){r=p[i];

if(this._isItemSelectable(r)){return r;
}}}else if((q&&n===K)||(!q&&n===G)){for(var i=o+1;i<p.length;i++){r=p[i];

if(this._isItemSelectable(r)){return r;
}}}return null;
},_getPage:function(D,E){if(E){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__kM=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(b){return this._isItemSelectable(b)&&b.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var f=this._getWidget();
return {left:f.getScrollX(),top:f.getScrollY()};
},_scrollBy:function(c,d){var e=this._getWidget();
e.scrollByX(c);
e.scrollByY(d);
},_getPage:function(g,h){var m=this.getSelectables();
var length=m.length;
var p=m.indexOf(g);
if(p===-1){throw new Error("Invalid lead item: "+g);
}var j=this._getWidget();
var r=j.getScrollY();
var innerHeight=j.getInnerSize().height;
var top,l,q;

if(h){var o=r;
var i=p;
while(1){for(;i>=0;i--){top=j.getItemTop(m[i]);
if(top<o){q=i+1;
break;
}}if(q==null){var s=this._getFirstSelectable();
return s==g?null:s;
}if(q>=p){o-=innerHeight+r-j.getItemBottom(g);
q=null;
continue;
}return m[q];
}}else{var n=innerHeight+r;
var i=p;
while(1){for(;i<length;i++){l=j.getItemBottom(m[i]);
if(l>n){q=i-1;
break;
}}if(q==null){var k=this._getLastSelectable();
return k==g?null:k;
}if(q<=p){n+=j.getItemTop(g)-r;
q=null;
continue;
}return m[q];
}}}}});
})();
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(g){var h=g.getBounds();

if(h){var top=this._getWidget().getItemTop(g);
return {top:top,bottom:top+h.height};
}},_isSelectable:function(f){return this._isItemSelectable(f)&&f instanceof qx.ui.tree.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(p){var s=false;

if(!p){s=this._userInteraction;
this._userInteraction=true;
}var r=this._getWidget();
var t=[];

if(r.getRoot()!=null){var q=r.getRoot().getItems(true,!!p,r.getHideRoot());

for(var i=0;i<q.length;i++){if(this._isSelectable(q[i])){t.push(q[i]);
}}}this._userInteraction=s;
return t;
},_getSelectableRange:function(k,l){if(k===l){return [k];
}var m=this.getSelectables();
var n=m.indexOf(k);
var o=m.indexOf(l);

if(n<0||o<0){return [];
}
if(n<o){return m.slice(n,o+1);
}else{return m.slice(o,n+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var j=this.getSelectables();

if(j.length>0){return j[j.length-1];
}else{return null;
}},_getRelatedSelectable:function(u,v){var w=this._getWidget();
var x=null;

switch(v){case d:x=w.getPreviousNodeOf(u,false);
break;
case b:x=w.getNextNodeOf(u,false);
break;
case c:case e:break;
}
if(!x){return null;
}
if(this._isSelectable(x)){return x;
}else{return this._getRelatedSelectable(x,v);
}}}});
})();
(function(){var n="dblclick",m="click",l="Boolean",k="excluded",j="visible",h="qx.event.type.Data",g="_applyOpenMode",f="Space",d="Left",c="Enter",B="changeOpenMode",A="__kN",z="_applyRootOpenClose",y="changeSelection",x="qx.ui.tree.Tree",w="tree",v="_applyHideRoot",u="changeRoot",t="_applyRoot",s="keypress",q="none",r="pane",o="Right",p="qx.ui.tree.AbstractTreeItem";
qx.Class.define(x,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__kN=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(r).add(this.__kN);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(y,this._onChangeSelection,this);
this.addListener(s,this._onKeyPress,this);
},events:{addItem:h,removeItem:h},properties:{openMode:{check:[m,n,q],init:n,apply:g,event:B,themeable:true},root:{check:p,init:null,nullable:true,event:u,apply:t},hideRoot:{check:l,init:false,apply:v},rootOpenClose:{check:l,init:false,apply:z},appearance:{refine:true,init:w},focusable:{refine:true,init:true}},members:{__kN:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__kN;
},_applyRoot:function(ba,bb){var bc=this.getChildrenContainer();

if(bb){bc.remove(bb);

if(bb.hasChildren()){bc.remove(bb.getChildrenContainer());
}}
if(ba){bc.add(ba);

if(ba.hasChildren()){bc.add(ba.getChildrenContainer());
}ba.setVisibility(this.getHideRoot()?k:j);
ba.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(L,M){var N=this.getRoot();

if(!N){return;
}N.setVisibility(L?k:j);
N.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(C,D){var E=this.getRoot();

if(!E){return;
}E.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__kN;
},getNextNodeOf:function(bd,be){if((be!==false||bd.isOpen())&&bd.hasChildren()){return bd.getChildren()[0];
}
while(bd){var parent=bd.getParent();

if(!parent){return null;
}var bg=parent.getChildren();
var bf=bg.indexOf(bd);

if(bf>-1&&bf<bg.length-1){return bg[bf+1];
}bd=parent;
}return null;
},getPreviousNodeOf:function(T,U){var parent=T.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==T){return null;
}}}else{if(T==this.getRoot()){return null;
}}var X=parent.getChildren();
var V=X.indexOf(T);

if(V>0){var W=X[V-1];

while((U!==false||W.isOpen())&&W.hasChildren()){var Y=W.getChildren();
W=Y[Y.length-1];
}return W;
}else{return parent;
}},getNextSiblingOf:function(O){if(O==this.getRoot()){return null;
}var parent=O.getParent();
var P=parent.getChildren();
var Q=P.indexOf(O);

if(Q<P.length-1){return P[Q+1];
}return null;
},getPreviousSiblingOf:function(F){if(F==this.getRoot()){return null;
}var parent=F.getParent();
var G=parent.getChildren();
var H=G.indexOf(F);

if(H>0){return G[H-1];
}return null;
},getItems:function(a,b){if(this.getRoot()!=null){return this.getRoot().getItems(a,b,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(K){while(K){if(K==this){return null;
}
if(K instanceof qx.ui.tree.AbstractTreeItem){return K;
}K=K.getLayoutParent();
}return null;
},_applyOpenMode:function(R,S){if(S==m){this.removeListener(m,this._onOpen,this);
}else if(S==n){this.removeListener(n,this._onOpen,this);
}
if(R==m){this.addListener(m,this._onOpen,this);
}else if(R==n){this.addListener(n,this._onOpen,this);
}},_onOpen:function(e){var I=this.getTreeItem(e.getTarget());

if(!I||!I.isOpenable()){return;
}I.setOpen(!I.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var bi=e.getData();
for(var i=0;i<bi.length;i++){var bh=bi[i];
while(bh.getParent()!=null){bh=bh.getParent();
bh.setOpen(true);
}}},_onKeyPress:function(e){var J=this._getLeadItem();

if(J!==null){switch(e.getKeyIdentifier()){case d:if(J.isOpenable()&&J.isOpen()){J.setOpen(false);
}break;
case o:if(J.isOpenable()&&!J.isOpen()){J.setOpen(true);
}break;
case c:case f:if(J.isOpenable()){J.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(A);
}});
})();
(function(){var bj="open",bi="auto",bh="middle",bg="icon",bf="label",be="changeOpen",bd="excluded",bc="visible",bb="String",ba="opened",bC="always",bB="qx.ui.tree.AbstractTreeItem",bA="addItem",bz="Boolean",by="__lB",bx="Integer",bw="_applyIndent",bv="changeOpenSymbolMode",bu="_applyOpenSymbolMode",bt="resize",bq="",br="removeItem",bo="__lA",bp="__lE",bm="abstract",bn="never",bk="_applyIcon",bl="_applyOpen",bs="_applyLabel";
qx.Class.define(bB,{extend:qx.ui.core.Widget,type:bm,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__lA=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bz,init:false,event:be,apply:bl},openSymbolMode:{check:[bC,bn,bi],init:bi,event:bv,apply:bu},indent:{check:bx,init:19,apply:bw,themeable:true},parent:{check:bB,nullable:true},icon:{check:bb,apply:bk,nullable:true,themeable:true},label:{check:bb,apply:bs,init:bq}},members:{__lA:null,__lB:null,__lC:null,__lD:null,__lE:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(b){var c;

switch(b){case bf:c=new qx.ui.basic.Label().set({alignY:bh,value:this.getLabel()});
break;
case bg:c=new qx.ui.basic.Image().set({alignY:bh,source:this.getIcon()});
break;
case bj:c=new qx.ui.tree.FolderOpenButton().set({alignY:bh});
c.addListener(be,this._onChangeOpen,this);
c.addListener(bt,this._updateIndent,this);
break;
}return c||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,b);
},getTree:function(){var U=this;

while(U.getParent()){U=U.getParent();
}var T=U.getLayoutParent()?U.getLayoutParent().getLayoutParent():0;

if(T&&T instanceof qx.ui.core.scroll.ScrollPane){return T.getLayoutParent();
}return null;
},addWidget:function(d,f){this._add(d,f);
},addSpacer:function(){if(!this.__lE){this.__lE=new qx.ui.core.Spacer();
}else{this._remove(this.__lE);
}this._add(this.__lE);
},addOpenButton:function(){this._add(this.getChildControl(bj));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var g=this.getChildControl(bg);

if(this.__lD){this._remove(g);
}this._add(g);
this.__lD=true;
},addLabel:function(X){var Y=this.getChildControl(bf);

if(this.__lC){this._remove(Y);
}
if(X){this.setLabel(X);
}else{Y.setValue(this.getLabel());
}this._add(Y);
this.__lC=true;
},addState:function(o){qx.ui.core.Widget.prototype.addState.call(this,o);
var q=this._getChildren();

for(var i=0,l=q.length;i<l;i++){var p=q[i];

if(p.addState){q[i].addState(o);
}}},removeState:function(bM){qx.ui.core.Widget.prototype.removeState.call(this,bM);
var bO=this._getChildren();

for(var i=0,l=bO.length;i<l;i++){var bN=bO[i];

if(bN.addState){bO[i].removeState(bM);
}}},_applyIcon:function(Q,R){var S=this.getChildControl(bg,true);

if(S){S.setSource(Q);
}},_applyLabel:function(r,s){var t=this.getChildControl(bf,true);

if(t){t.setValue(r);
}},_applyOpen:function(j,k){if(this.hasChildren()){this.getChildrenContainer().setVisibility(j?bc:bd);
}var open=this.getChildControl(bj,true);

if(open){open.setOpen(j);
}j?this.addState(ba):this.removeState(ba);
},isOpenable:function(){var bU=this.getOpenSymbolMode();
return (bU===bC||bU===bi&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bj,true);

if(!open){return false;
}var w=this.getTree();

if(!w.getRootOpenClose()){if(w.getHideRoot()){if(w.getRoot()==this.getParent()){return false;
}}else{if(w.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bK,bL){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var P=0;
var open=this.getChildControl(bj,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var O=open.getBounds();

if(O){P=O.width;
}else{return;
}}else{open.exclude();
}}
if(this.__lE){this.__lE.setWidth((this.getLevel()+1)*this.getIndent()-P);
}},_applyIndent:function(V,W){this._updateIndent();
},getLevel:function(){var L=this.getTree();

if(!L){return;
}var M=this;
var N=-1;

while(M){M=M.getParent();
N+=1;
}if(L.getHideRoot()){N-=1;
}
if(!L.getRootOpenClose()){N-=1;
}return N;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__lB){this.__lB=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?bc:bd});
}return this.__lB;
},hasChildrenContainer:function(){return this.__lB;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__lA;
},hasChildren:function(){return this.__lA?this.__lA.length>0:false;
},getItems:function(bD,bE,bF){if(bF!==false){var bG=[];
}else{var bG=[this];
}var bJ=this.hasChildren()&&(bE!==false||this.isOpen());

if(bJ){var bI=this.getChildren();

if(bD===false){bG=bG.concat(bI);
}else{for(var i=0,bH=bI.length;i<bH;i++){bG=bG.concat(bI[i].getItems(bD,bE,false));
}}}return bG;
},recursiveAddToWidgetQueue:function(){var h=this.getItems(true,true,false);

for(var i=0,l=h.length;i<l;i++){qx.ui.core.queue.Widget.add(h[i]);
}},__lF:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(x){var y=this.getChildrenContainer();
var B=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var C=arguments[i];
var A=C.getParent();

if(A){A.remove(C);
}C.setParent(this);
var z=this.hasChildren();
y.add(C);

if(C.hasChildren()){y.add(C.getChildrenContainer());
}this.__lA.push(C);

if(!z){this.__lF();
}
if(B){C.recursiveAddToWidgetQueue();
B.fireNonBubblingEvent(bA,qx.event.type.Data,[C]);
}}
if(B){qx.ui.core.queue.Widget.add(this);
}},addAt:function(D,E){{};

if(E==this.__lA.length){this.add(D);
return;
}var I=D.getParent();

if(I){I.remove(D);
}var G=this.getChildrenContainer();
D.setParent(this);
var H=this.hasChildren();
var F=this.__lA[E];
G.addBefore(D,F);

if(D.hasChildren()){G.addAfter(D.getChildrenContainer(),D);
}qx.lang.Array.insertAt(this.__lA,D,E);

if(!H){this.__lF();
}
if(this.getTree()){D.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(m,n){{};
this.addAt(m,this.__lA.indexOf(n));
},addAfter:function(u,v){{};
this.addAt(u,this.__lA.indexOf(v)+1);
},addAtBegin:function(a){this.addAt(a,0);
},remove:function(bP){for(var i=0,l=arguments.length;i<l;i++){var bT=arguments[i];

if(this.__lA.indexOf(bT)==-1){this.warn("Cannot remove treeitem '"+bT+"'. It is not a child of this tree item.");
return;
}var bQ=this.getChildrenContainer();

if(bT.hasChildrenContainer()){var bS=bT.getChildrenContainer();

if(bQ.getChildren().indexOf(bS)>=0){bQ.remove(bS);
}}qx.lang.Array.remove(this.__lA,bT);
bT.setParent(null);
bQ.remove(bT);
}var bR=this.getTree();

if(bR){bR.fireNonBubblingEvent(br,qx.event.type.Data,[bT]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(J){var K=this.__lA[J];

if(K){this.remove(K);
}},removeAll:function(){for(var i=this.__lA.length-1;i>=0;i--){this.remove(this.__lA[i]);
}}},destruct:function(){this._disposeArray(bo);
this._disposeObjects(bp,by);
}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){qx.ui.basic.Image.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(a,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:g,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){qx.ui.core.LayoutItem.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="{",C="map",B="<span class='object'>",A="]:",z="<span class='object' title='Object instance with hash code: ",y="string",x="level-",w="0",v="<span class='offset'>",u=":",t="qx.log.appender.Util",r="DIV",s="<span>",p="<span class='type-key'>",q="</span>:<span class='type-",n="</span>: ",o=" ",m="]</span>: ";
qx.Class.define(t,{statics:{toHtml:function(G){var Q=[];
var N,P,I,K;
Q.push(v,this.formatOffset(G.offset,6),e);

if(G.object){var H=G.win.qx.core.ObjectRegistry.fromHashCode(G.object);

if(H){Q.push(z+H.$$hash+l,H.classname,k,H.$$hash,m);
}}else if(G.clazz){Q.push(B+G.clazz.classname,n);
}var J=G.items;

for(var i=0,O=J.length;i<O;i++){N=J[i];
P=N.text;

if(P instanceof Array){var K=[];

for(var j=0,M=P.length;j<M;j++){I=P[j];

if(typeof I===y){K.push(s+this.escapeHTML(I)+g);
}else if(I.key){K.push(p+I.key+q+I.type+l+this.escapeHTML(I.text)+g);
}else{K.push(f+I.type+l+this.escapeHTML(I.text)+g);
}}Q.push(f+N.type+l);

if(N.type===C){Q.push(a,K.join(h),d);
}else{Q.push(k,K.join(h),b);
}Q.push(g);
}else{Q.push(f+N.type+l+this.escapeHTML(P)+e);
}}var L=document.createElement(r);
L.innerHTML=Q.join(c);
L.className=x+G.level;
return L;
},formatOffset:function(bb,length){var be=bb.toString();
var bc=(length||6)-be.length;
var bd=c;

for(var i=0;i<bc;i++){bd+=w;
}return bd+be;
},escapeHTML:function(F){return String(F).replace(/[<>&"']/g,this.__DB);
},__DB:function(D){var E={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;",'"':"&quot;"};
return E[D]||"?";
},toText:function(bf){return this.toTextArray(bf).join(o);
},toTextArray:function(R){var ba=[];
ba.push(this.formatOffset(R.offset,6));

if(R.object){var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object);

if(S){ba.push(S.classname+k+S.$$hash+A);
}}else if(R.clazz){ba.push(R.clazz.classname+u);
}var T=R.items;
var W,Y;

for(var i=0,X=T.length;i<X;i++){W=T[i];
Y=W.text;

if(Y instanceof Array){var U=[];

for(var j=0,V=Y.length;j<V;j++){U.push(Y[j].text);
}
if(W.type===C){ba.push(a,U.join(h),d);
}else{ba.push(k,U.join(h),b);
}}else{ba.push(Y);
}}return ba;
}}});
})();
(function(){var d="debug",c="log",b="qx.log.appender.Native",a="qx.client";
qx.Class.define(b,{statics:{process:qx.core.Variant.select(a,{"gecko":function(e){if(window.console&&console.firebug){console[e.level].call(console,qx.log.appender.Util.toText(e));
}},"mshtml":function(k){if(window.console){var m=k.level;

if(m==d){m=c;
}var l=qx.log.appender.Util.toText(k);
console[m](l);
}},"webkit":function(f){if(window.console){var h=f.level;

if(h==d){h=c;
}var g=qx.log.appender.Util.toText(f);
console[h](g);
}},"opera":function(i){}})},defer:function(j){qx.log.Logger.register(j);
}});
})();
(function(){var o="",n='</div>',m="Up",l="none",k="keypress",j='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',i="Enter",h="px",g='.qxconsole .messages .user-result{background:white}',f='.qxconsole .messages .level-error{background:#FFE2D5}',ba="div",Y="user-command",X='<div class="command">',W='.qxconsole .command input:focus{outline:none;}',V='.qxconsole .messages .type-key{color:#565656;font-style:italic}',U='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',T='.qxconsole .messages div{padding:0px 4px;}',S='.qxconsole .messages .level-debug{background:white}',R='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',Q="DIV",v='.qxconsole .messages .level-user{background:#E3EFE9}',w='<div class="qxconsole">',t="D",u='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',r='.qxconsole .messages .type-string{color:black;font-weight:normal;}',s='.qxconsole .control a{text-decoration:none;color:black;}',p='<div class="messages">',q='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',x='<input type="text"/>',y="clear",F='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',J='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',H='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',M='.qxconsole .messages .user-command{color:blue}',L="F7",A="qx.log.appender.Console",P='.qxconsole .messages .level-info{background:#DEEDFA}',O="block",N='.qxconsole .messages .level-warn{background:#FFF7D5}',z='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',B='.qxconsole .messages .user-error{background:#FFE2D5}',C='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',E='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',G=">>> ",I="Down",K='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(A,{statics:{init:function(){var a=[J,C,s,j,T,M,g,B,S,P,N,f,v,r,K,q,D,u,V,R,U,z,H,F,W];
qx.bom.Stylesheet.createElement(a.join(o));
var c=[w,E,p,n,X,x,n,n];
var d=document.createElement(Q);
d.innerHTML=c.join(o);
var b=d.firstChild;
document.body.appendChild(d.firstChild);
this.__Jr=b;
this.__Js=b.childNodes[1];
this.__Jt=b.childNodes[2].firstChild;
this.__Jy();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,k,this.__Jz,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__Js.innerHTML=o;
},process:function(bd){this.__Js.appendChild(qx.log.appender.Util.toHtml(bd));
this.__Ju();
},__Ju:function(){this.__Js.scrollTop=this.__Js.scrollHeight;
},__Jv:true,toggle:function(){if(!this.__Jr){this.init();
}else if(this.__Jr.style.display==l){this.show();
}else{this.__Jr.style.display=l;
}},show:function(){if(!this.__Jr){this.init();
}else{this.__Jr.style.display=O;
this.__Js.scrollTop=this.__Js.scrollHeight;
}},__Jw:[],execute:function(){var bg=this.__Jt.value;

if(bg==o){return;
}
if(bg==y){return this.clear();
}var be=document.createElement(ba);
be.innerHTML=qx.log.appender.Util.escapeHTML(G+bg);
be.className=Y;
this.__Jw.push(bg);
this.__Jx=this.__Jw.length;
this.__Js.appendChild(be);
this.__Ju();

try{var bf=window.eval(bg);
}catch(bi){qx.log.Logger.error(bi);
}
if(bf!==undefined){qx.log.Logger.debug(bf);
}},__Jy:function(e){this.__Js.style.height=(this.__Jr.clientHeight-this.__Jr.firstChild.offsetHeight-this.__Jr.lastChild.offsetHeight)+h;
},__Jz:function(e){var bc=e.getKeyIdentifier();
if((bc==L)||(bc==t&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Jr){return;
}if(!qx.dom.Hierarchy.contains(this.__Jr,e.getTarget())){return;
}if(bc==i&&this.__Jt.value!=o){this.execute();
this.__Jt.value=o;
}if(bc==m||bc==I){this.__Jx+=bc==m?-1:1;
this.__Jx=Math.min(Math.max(0,this.__Jx),this.__Jw.length);
var bb=this.__Jw[this.__Jx];
this.__Jt.value=bb||o;
this.__Jt.select();
}}},defer:function(bh){qx.event.Registration.addListener(document.documentElement,k,bh.__Jz,bh);
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
qx.Class.define(cv,{statics:{names:{"window":window,"document":document,"body":document.body},ignore:{"window":[bm,f,d,bG,bL,u,cx,S,P,D,X,r,bF,o,bM,cc,cd,bi,bz,cz,cm,ch,bu,bB,cE,co,bX,w,s,Y,cp,br,cD,T,c,bn,y,N,cu,bx,b,bC,bo,H,e,bE,bc,bj,h,L,F,cF,cr,bP,bY,bA,bh,R,bW,v,C],"document":[cC,bu,cA,k,bp,I,p,bk,bQ,cj,ci,cf,bs,cn,W,bS,bV,t,be,bT,q,j,bU,ck],"body":[cy,bJ,G,z,cw,x,bR,bN,ct,bd,ch,bv,U,cG,l,bs,cf,bH,ba,bO,Q,bK,by,cB,cs,A,J,n,ck,K,ci,cj,g,m,V,bq,bD]},getInfo:function(cN){var cO=qx.dev.Pollution.getTextList(cN||cm);

if(cO){return cq+cO;
}else{return M;
}},extract:function(cP){var cR=[];
var cQ=qx.dev.Pollution.ignore[cP];
if(qx.core.Variant.isSet(ce,B)){if(cP==cm){cQ=cQ.slice(0);

for(var cS=0;cS<window.length;cS++){cQ.push(cl+cS);
}}}var cT=qx.dev.Pollution.names[cP];

for(var cU in cT){try{if(qx.core.Variant.isSet(ce,cb)){if(cP==cm&&cU==cd){continue;
}}if(typeof cT[cU]==ca||cT[cU]===null){continue;
}if(typeof cT[cU]==cg&&cT[cU].toString().indexOf(bt)!=-1){continue;
}if(typeof cT[cU].constructor==cg){if((cT[cU].constructor.toString().indexOf(bt)!=-1)||(cT[cU].constructor.toString().indexOf(bI)!=-1)){continue;
}}if(qx.lang.Array.contains(cQ,cU)){continue;
}}catch(a){continue;
}cR.push({"key":cU,"value":cT[cU]});
}return cR;
},getHtmlTable:function(cH){var cJ=[];
var cI=bg;
var cL=bl;
var cM=bw;
cJ.push(O);
var cK=this.extract(cH);

for(var i=0;i<cK.length;i++){cJ.push(cI+cK[i].key+cL+cK[i].value+cM);
}cJ.push(bf);
return cJ.join(cl);
},getTextList:function(cV){var cX=[];
var cY=E;
var da=bb;
var cW=this.extract(cV);

for(var i=0;i<cW.length;i++){cX.push(cW[i].key+cY+cW[i].value+da);
}return cX.join(cl);
}}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__sq:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__sq=null;
},getInsets:function(){if(this.__sq){return this.__sq;
}var j=this._getDefaultInsets();
return this.__sq={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__sq=null;
}},destruct:function(){this.__sq=null;
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
(function(){var r="_applyStyle",q="",p="Color",o="px",n="solid",m="dotted",l="double",k="dashed",j="_applyWidth",i="qx.ui.decoration.Uniform",f="px ",h=" ",g="scale",e="PositiveInteger",d="absolute";
qx.Class.define(i,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){qx.ui.decoration.Abstract.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{width:{check:e,init:0,apply:j},style:{nullable:true,check:[n,m,k,l],init:n,apply:r},color:{nullable:true,check:p,apply:r},backgroundColor:{check:p,nullable:true,apply:r}},members:{__sr:null,_getDefaultInsets:function(){var s=this.getWidth();
return {top:s,right:s,bottom:s,left:s};
},_isInitialized:function(){return !!this.__sr;
},getMarkup:function(){if(this.__sr){return this.__sr;
}var y={position:d,top:0,left:0};
var z=this.getWidth();
{};
var B=qx.theme.manager.Color.getInstance();
y.border=z+f+this.getStyle()+h+(B.resolve(this.getColor())||q);
var A=this._generateBackgroundMarkup(y);
return this.__sr=A;
},resize:function(t,u,v){var x=this.getBackgroundImage()&&this.getBackgroundRepeat()==g;

if(x||qx.bom.client.Feature.CONTENT_BOX){var w=this.getWidth()*2;
u-=w;
v-=w;
if(u<0){u=0;
}
if(v<0){v=0;
}}t.style.width=u+o;
t.style.height=v+o;
},tint:function(C,D){var E=qx.theme.manager.Color.getInstance();

if(D==null){D=this.getBackgroundColor();
}C.style.backgroundColor=E.resolve(D)||q;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__sr=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",F=" ",E="shorthand",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",x="styleTop",w="colorBottom",q="styleBottom",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="scale",k="border-top",l="border-left",s="border-right",t="qx.ui.decoration.Single",v="border-bottom",u="absolute";
qx.Class.define(t,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(L,M,N){qx.ui.decoration.Abstract.call(this);
if(L!=null){this.setWidth(L);
}
if(M!=null){this.setStyle(M);
}
if(N!=null){this.setColor(N);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,o]},right:{group:[r,B,p]},top:{group:[C,x,m]},bottom:{group:[y,q,w]},width:{group:[C,r,y,z],mode:E},style:{group:[x,B,q,A],mode:E},color:{group:[m,p,w,o],mode:E}},members:{__st:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__st;
},getMarkup:function(R){if(this.__st){return this.__st;
}var S=qx.theme.manager.Color.getInstance();
var T={};
var V=this.getWidthTop();

if(V>0){T[k]=V+e+this.getStyleTop()+F+(S.resolve(this.getColorTop())||g);
}var V=this.getWidthRight();

if(V>0){T[s]=V+e+this.getStyleRight()+F+(S.resolve(this.getColorRight())||g);
}var V=this.getWidthBottom();

if(V>0){T[v]=V+e+this.getStyleBottom()+F+(S.resolve(this.getColorBottom())||g);
}var V=this.getWidthLeft();

if(V>0){T[l]=V+e+this.getStyleLeft()+F+(S.resolve(this.getColorLeft())||g);
}{};
T.position=u;
T.top=0;
T.left=0;
var U=this._generateBackgroundMarkup(T);
return this.__st=U;
},resize:function(G,H,I){var K=this.getBackgroundImage()&&this.getBackgroundRepeat()==n;

if(K||qx.bom.client.Feature.CONTENT_BOX){var J=this.getInsets();
H-=J.left+J.right;
I-=J.top+J.bottom;
if(H<0){H=0;
}
if(I<0){I=0;
}}G.style.width=H+D;
G.style.height=I+D;
},tint:function(O,P){var Q=qx.theme.manager.Color.getInstance();

if(P==null){P=this.getBackgroundColor();
}O.style.backgroundColor=Q.resolve(P)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__st=null;
}});
})();
(function(){var j="px ",i=" ",h="Color",g="Number",f=";",e="px",d="shorthand",c="innerWidthRight",b="border-left:",a="innerColorBottom",B='',A="scale",z="border-top",y="innerWidthTop",x="border-left",w="innerColorRight",v="innerColorTop",u="relative",t="border-top:",s="qx.ui.decoration.Double",q="border-right:",r='line-height:0;',o="innerColorLeft",p="border-bottom",m="innerWidthBottom",n="innerWidthLeft",k="border-bottom:",l="border-right";
qx.Class.define(s,{extend:qx.ui.decoration.Single,construct:function(H,I,J,innerWidth,K){qx.ui.decoration.Single.call(this,H,I,J,innerWidth,K);
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(K!=null){this.setInnerColor(K);
}},properties:{innerWidthTop:{check:g,init:0},innerWidthRight:{check:g,init:0},innerWidthBottom:{check:g,init:0},innerWidthLeft:{check:g,init:0},innerWidth:{group:[y,c,m,n],mode:d},innerColorTop:{nullable:true,check:h},innerColorRight:{nullable:true,check:h},innerColorBottom:{nullable:true,check:h},innerColorLeft:{nullable:true,check:h},innerColor:{group:[v,w,a,o],mode:d}},members:{__DE:null,_getDefaultInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
},_isInitialized:function(){return !!this.__DE;
},getMarkup:function(){if(this.__DE){return this.__DE;
}var C=qx.theme.manager.Color.getInstance();
var F={position:u};
var D=this.getInnerWidthTop();

if(D>0){F[z]=D+j+this.getStyleTop()+i+C.resolve(this.getInnerColorTop());
}var D=this.getInnerWidthRight();

if(D>0){F[l]=D+j+this.getStyleRight()+i+C.resolve(this.getInnerColorRight());
}var D=this.getInnerWidthBottom();

if(D>0){F[p]=D+j+this.getStyleBottom()+i+C.resolve(this.getInnerColorBottom());
}var D=this.getInnerWidthLeft();

if(D>0){F[x]=D+j+this.getStyleLeft()+i+C.resolve(this.getInnerColorLeft());
}{};
var G=this._generateBackgroundMarkup(F);
var E=r;
if((qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION<8)||(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.DOCUMENT_MODE<8)){E=B;
}var D=this.getWidthTop();

if(D>0){E+=t+D+j+this.getStyleTop()+i+C.resolve(this.getColorTop())+f;
}var D=this.getWidthRight();

if(D>0){E+=q+D+j+this.getStyleRight()+i+C.resolve(this.getColorRight())+f;
}var D=this.getWidthBottom();

if(D>0){E+=k+D+j+this.getStyleBottom()+i+C.resolve(this.getColorBottom())+f;
}var D=this.getWidthLeft();

if(D>0){E+=b+D+j+this.getStyleLeft()+i+C.resolve(this.getColorLeft())+f;
}{};
return this.__DE='<div style="position:absolute;top:0;left:0;'+E+'">'+G+'</div>';
},resize:function(L,M,N){var P=this.getBackgroundImage()&&this.getBackgroundRepeat()==A;

if(P||qx.bom.client.Feature.CONTENT_BOX){var O=this.getInsets();
var innerWidth=M-O.left-O.right;
var innerHeight=N-O.top-O.bottom;
}else{var innerWidth=M-this.getWidthLeft()-this.getWidthRight();
var innerHeight=N-this.getWidthTop()-this.getWidthBottom();
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}L.firstChild.style.width=innerWidth+e;
L.firstChild.style.height=innerHeight+e;
}},destruct:function(){this.__DE=null;
}});
})();
(function(){var o="Number",n="_applyInsets",m="-l",l="insetRight",k="insetTop",j="_applyBaseImage",i="insetBottom",h="set",g="shorthand",f="-t",c="insetLeft",e="String",d="qx.ui.decoration.Grid";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(a,b){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__su=new qx.ui.decoration.css3.BorderImage();

if(a){this.__sv(a);
}}else{this.__su=new qx.ui.decoration.GridDiv(a);
}
if(b!=null){this.__su.setInsets(b);
}},properties:{baseImage:{check:e,nullable:true,apply:j},insetLeft:{check:o,nullable:true,apply:n},insetRight:{check:o,nullable:true,apply:n},insetBottom:{check:o,nullable:true,apply:n},insetTop:{check:o,nullable:true,apply:n},insets:{group:[k,l,i,c],mode:g}},members:{__su:null,getMarkup:function(){return this.__su.getMarkup();
},resize:function(u,v,w){this.__su.resize(u,v,w);
},tint:function(s,t){},getInsets:function(){return this.__su.getInsets();
},_applyInsets:function(p,q,name){var r=h+qx.lang.String.firstUp(name);
this.__su[r](p);
},_applyBaseImage:function(F,G){if(this.__su instanceof qx.ui.decoration.GridDiv){this.__su.setBaseImage(F);
}else{this.__sv(F);
}},__sv:function(x){this.__su.setBorderImage(x);
var B=qx.util.AliasManager.getInstance().resolve(x);
var C=/(.*)(\.[a-z]+)$/.exec(B);
var z=C[1];
var A=C[2];
var y=qx.util.ResourceManager.getInstance();
var D=y.getImageHeight(z+f+A);
var E=y.getImageWidth(z+m+A);
this.__su.setSlice([D,E]);
}},destruct:function(){this.__su=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(H,I,J){qx.ui.decoration.Abstract.call(this);
if(H!=null){this.setOuterColor(H);
}
if(I!=null){this.setInnerColor(I);
}
if(J!=null){this.setInnerOpacity(J);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__sw:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__sw;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__sw){return this.__sw;
}var K=qx.theme.manager.Color.getInstance();
var L=[];
var O=d+K.resolve(this.getOuterColor())+b;
var N=d+K.resolve(this.getInnerColor())+b;
L.push(k);
L.push(f);
L.push(e,O);
L.push(qx.bom.element.Opacity.compile(0.35));
L.push(i);
L.push(n);
L.push(q,O);
L.push(r,O);
L.push(i);
L.push(f);
L.push(m);
L.push(p,O);
L.push(s,O);
L.push(i);
var M={position:l,top:g,left:g};
L.push(this._generateBackgroundMarkup(M));
L.push(t);
L.push(e,N);
L.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
L.push(i);
L.push(v);
return this.__sw=L.join(c);
},resize:function(w,x,y){if(x<4){x=4;
}
if(y<4){y=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=x-2;
var outerHeight=y-2;
var E=outerWidth;
var D=outerHeight;
var innerWidth=x-4;
var innerHeight=y-4;
}else{var outerWidth=x;
var outerHeight=y;
var E=x-2;
var D=y-2;
var innerWidth=E;
var innerHeight=D;
}var G=a;
var C=w.childNodes[0].style;
C.width=outerWidth+G;
C.height=outerHeight+G;
var B=w.childNodes[1].style;
B.width=outerWidth+G;
B.height=D+G;
var A=w.childNodes[2].style;
A.width=E+G;
A.height=outerHeight+G;
var z=w.childNodes[3].style;
z.width=E+G;
z.height=D+G;
var F=w.childNodes[4].style;
F.width=innerWidth+G;
F.height=innerHeight+G;
},tint:function(P,Q){var R=qx.theme.manager.Color.getInstance();

if(Q==null){Q=this.getBackgroundColor();
}P.childNodes[3].style.backgroundColor=R.resolve(Q)||c;
}},destruct:function(){this.__sw=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",y="table-header-border",x="dotted",w="border-separator",v="tooltip-text",u="invalid",t="white",s="decoration/shadow/shadow.png",r="black",q="effect",p="table-focus-indicator",n="border-focused-invalid",o="qx/decoration/Classic",l="border-lead",m="decoration/shadow/shadow-small.png",k="qx.theme.classic.Decoration";
qx.Theme.define(k,{aliases:{decoration:o},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:r,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:u}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:w}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:w}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:s,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:m,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:u,innerColor:n,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:l}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:v}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:t,colorLeft:t,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:p,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}}}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var du="button",dt="widget",ds="background",dr="atom",dq="inset-thin",dp="outset",dn="text-disabled",dm="text-selected",dl="inset",dk="image",cn="groupbox",cm="cell",cl="focused-inset",ck="tooltip",cj="menu-button",ci="middle",ch="decoration/arrows/down.gif",cg="spinner",cf="background-selected",ce="list",dB="button-hovered",dC="checkbox",dz="toolbar-button",dA="button-frame",dx="popup",dy="textfield",dv="label",dw="background-invalid",dD="background-disabled",dE="bold",cS="white",cR="shadow-small",cU="invalid",cT="scrollbar",cW="center",cV="datechooser/button",cY="button-abandoned",cX="background-light",cQ="main",cP="date-chooser",E="date-chooser-title",F="radiobutton",G="default",H="combobox",I="background-field",J="outset-thin",K="menu-slidebar-button",L="scrollbar/button",M="combobox/button",N="table-header-cell",dS="decoration/arrows/right.gif",dR="decoration/arrows/up.gif",dQ="text",dP="decoration/arrows/down-small.gif",dW="icon/16/places/folder.png",dV="tree-folder",dU="slidebar/button-forward",dT="icon/16/mimetypes/text-plain.png",dY="right-top",dX="button-checked",bA=".png",bB="background-focused",by="datechooser",bz="slidebar/button-backward",bE="selectbox",bF="treevirtual-folder",bC="decoration/form/",bD="decoration/tree/minus.gif",bw="",bx="decoration/tree/plus.gif",bg="-invalid",bf="decoration/arrows/left.gif",bi="icon/16/places/folder-open.png",bh="table-row-background-even",bc="decoration/treevirtual/cross_minus.gif",bb="radiobutton-hovered",be="keyboard-focus",bd="decoration/treevirtual/start_plus.gif",ba="decoration/cursors/",Y="icon/16/actions/dialog-ok.png",bK="slidebar",bL="table-scroller-focus-indicator",bM="move-frame",bN="nodrop",bG="tabview-page-button-left",bH="decoration/arrows/up-small.gif",bI="move",bJ="radiobutton-checked-focused",bO="qx.theme.classic.Appearance",bP="decoration/menu/checkbox.gif",br="tooltip-error",bq="right",bp="decoration/arrows/rewind.gif",bo="table-scroller-header",bn="table-pane",bm="focused-outset",bl="checkbox-hovered",bk="icon/16/actions/dialog-cancel.png",bv="menu-slidebar",bu="datechooser-date-pane",bQ="background-pane",bR="decoration/treevirtual/cross_plus.gif",bS="qx/icon/Oxygen/16/actions/window-close.png",bT="datechooser-week",bU="icon/16/apps/office-calendar.png",bV="datechooser-weekday",bW="table-header-border",bX="table-header-cell-hover",bY="window-active-caption-text",ca="window-active-caption",cu="icon",ct="checkbox-checked-focused",cs="toolbar-separator",cr="groove",cy="checkbox-pressed",cx="tooltip-invalid",cw="decoration/window/restore.gif",cv="decoration/menu/checkbox-invert.gif",cB="scrollarea",cA="window-inactive-caption-text",cL="best-fit",cM="up.gif",cJ="keep-align",cK="tabview-page-button-right",cH="tabview-page-button-top",cI="tabview-page-button-bottom",cF="row-layer",cG="decoration/menu/radiobutton.gif",cN="decoration/arrows/",cO="decoration/table/descending.png",dd="tooltip-text",dc="checkbox-checked-hovered",df="left.gif",de="decoration/arrows/up-invert.gif",dh="alias",dg="checkbox-checked-disabled",dj="decoration/arrows/right-invert.gif",di="radiobutton-checked-disabled",db="lead-item",da="checkbox-focused",dL="border-dark",dM="decoration/treevirtual/end_plus.gif",dN="decoration/treevirtual/start_minus.gif",dO="radiobutton-checked-hovered",dH="decoration/window/minimize.gif",dI="checkbox-checked",dJ="table-header-cell-hovered",dK="down.gif",dF="decoration/treevirtual/end.gif",dG="decoration/treevirtual/end_minus.gif",D="window-inactive-caption",C="decoration/menu/radiobutton-invert.gif",B="text-placeholder",A="slider",z="decoration/table/select-column-order.png",y="decoration/arrows/next.gif",x="table-header",w="decoration/treevirtual/only_minus.gif",v="datechooser-week-header",u="decoration/window/maximize.gif",Q="decoration/treevirtual/only_plus.gif",R="checkbox-checked-pressed",O="decoration/arrows/down-invert.gif",P="menu-separator",U="decoration/splitpane/knob-vertical.png",V=".gif",S="decoration/arrows/forward.gif",T="radiobutton-checked-pressed",W="table-statusbar",X="radiobutton-pressed",cC="copy",cz="table-row-background-selected",cE="radiobutton-focused",cD="decoration/splitpane/knob-horizontal.png",cp="right.gif",co="radiobutton-checked",bj="decoration/treevirtual/cross.gif",cq="decoration/table/ascending.png",bt="decoration/treevirtual/line.gif",bs="date-chooser-selected",cb="toolbar-part-handle",cc="decoration/window/close.gif",cd="icon/16/actions/view-refresh.png";
qx.Theme.define(bO,{appearances:{"widget":{},"label":{style:function(ha){return {textColor:ha.disabled?dn:undefined};
}},"image":{style:function(gC){return {opacity:!gC.replacement&&gC.disabled?0.3:undefined};
}},"atom":{},"atom/label":dv,"atom/icon":dk,"root":{style:function(eJ){return {backgroundColor:ds,textColor:dQ,font:G};
}},"popup":{style:function(fD){return {decorator:cQ,backgroundColor:bQ,shadow:cR};
}},"tooltip":{include:dx,style:function(em){return {backgroundColor:ck,textColor:dd,decorator:ck,shadow:cR,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dr,"tooltip-error":{include:ck,style:function(fU){return {textColor:dm,showTimeout:100,hideTimeout:10000,decorator:br,font:dE,backgroundColor:cx};
}},"tooltip-error/atom":dr,"iframe":{style:function(fV){return {backgroundColor:cS,decorator:dl};
}},"move-frame":{style:function(j){return {decorator:cQ};
}},"resize-frame":bM,"dragdrop-cursor":{style:function(gv){var gw=bN;

if(gv.copy){gw=cC;
}else if(gv.move){gw=bI;
}else if(gv.alias){gw=dh;
}return {source:ba+gw+V,position:dY,offset:[2,16,2,6]};
}},"button-frame":{alias:dr,style:function(gK){if(gK.pressed||gK.abandoned||gK.checked){var gM=!gK.inner&&gK.focused?cl:dl;
var gL=[4,3,2,5];
}else{var gM=!gK.inner&&gK.focused?bm:dp;
var gL=[3,4];
}return {backgroundColor:gK.abandoned?cY:gK.hovered?dB:gK.checked?dX:du,decorator:gM,padding:gL};
}},"button":{alias:dA,include:dA,style:function(gO){return {center:true};
}},"hover-button":{alias:dr,include:dr,style:function(gN){return {backgroundColor:gN.hovered?cf:undefined,textColor:gN.hovered?dm:undefined};
}},"splitbutton":{},"splitbutton/button":du,"splitbutton/arrow":{alias:du,include:du,style:function(eW){return {icon:ch};
}},"scrollarea/corner":{style:function(){return {backgroundColor:ds};
}},"scrollarea":dt,"scrollarea/pane":dt,"scrollarea/scrollbar-x":cT,"scrollarea/scrollbar-y":cT,"list":{alias:cB,style:function(o){var s;
var q=!!o.focused;
var r=!!o.invalid;
var p=!!o.disabled;

if(r&&!p){s=dw;
}else if(q&&!r&&!p){s=bB;
}else if(p){s=dD;
}else{s=cS;
}return {decorator:o.focused?cl:dl,backgroundColor:s};
}},"listitem":{alias:dr,style:function(gE){return {gap:4,padding:gE.lead?[2,4]:[3,5],backgroundColor:gE.selected?cf:undefined,textColor:gE.selected?dm:undefined,decorator:gE.lead?db:undefined};
}},"textfield":{style:function(gf){var gk;
var gi=!!gf.focused;
var gj=!!gf.invalid;
var gg=!!gf.disabled;

if(gj&&!gg){gk=dw;
}else if(gi&&!gj&&!gg){gk=bB;
}else if(gg){gk=dD;
}else{gk=I;
}var gh;

if(gf.disabled){gh=dn;
}else if(gf.showingPlaceholder){gh=B;
}else{gh=undefined;
}return {decorator:gf.focused?cl:dl,padding:[2,3],textColor:gh,backgroundColor:gk};
}},"textarea":dy,"checkbox":{alias:dr,style:function(fo){var fq;

if(fo.checked&&fo.focused){fq=ct;
}else if(fo.checked&&fo.disabled){fq=dg;
}else if(fo.checked&&fo.pressed){fq=R;
}else if(fo.checked&&fo.hovered){fq=dc;
}else if(fo.checked){fq=dI;
}else if(fo.focused){fq=da;
}else if(fo.pressed){fq=cy;
}else if(fo.hovered){fq=bl;
}else{fq=dC;
}var fp=fo.invalid&&!fo.disabled?bg:bw;
return {icon:bC+fq+fp+bA,gap:6};
}},"radiobutton":{alias:dC,include:dC,style:function(eM){var eO;

if(eM.checked&&eM.focused){eO=bJ;
}else if(eM.checked&&eM.disabled){eO=di;
}else if(eM.checked&&eM.pressed){eO=T;
}else if(eM.checked&&eM.hovered){eO=dO;
}else if(eM.checked){eO=co;
}else if(eM.focused){eO=cE;
}else if(eM.pressed){eO=X;
}else if(eM.hovered){eO=bb;
}else{eO=F;
}var eN=eM.invalid&&!eM.disabled?bg:bw;
return {icon:bC+eO+eN+bA,shadow:undefined};
}},"spinner":{style:function(gY){return {decorator:gY.focused?cl:dl,textColor:gY.disabled?dn:undefined};
}},"spinner/textfield":{include:dy,style:function(ec){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:du,include:du,style:function(fI){return {icon:bH,padding:fI.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:fI.hovered?dB:du};
}},"spinner/downbutton":{alias:du,include:du,style:function(fP){return {icon:dP,padding:fP.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:fP.hovered?dB:du};
}},"datefield":H,"datefield/button":{alias:M,include:M,style:function(t){return {icon:bU,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:by,include:by,style:function(gt){return {decorator:gt.focused?cl:dl};
}},"groupbox":{style:function(eg){return {backgroundColor:ds};
}},"groupbox/legend":{alias:dr,style:function(fr){return {backgroundColor:ds,textColor:fr.invalid?cU:undefined,paddingRight:4,paddingLeft:4,marginRight:10,marginLeft:10};
}},"groupbox/frame":{style:function(gm){return {padding:[12,9],decorator:cr};
}},"check-groupbox":cn,"check-groupbox/legend":{alias:dC,include:dC,style:function(eX){return {backgroundColor:ds,textColor:eX.invalid?cU:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"radio-groupbox":cn,"radio-groupbox/legend":{alias:F,include:F,style:function(fv){return {backgroundColor:ds,textColor:fv.invalid?cU:undefined,paddingRight:3,paddingLeft:3,marginRight:10,marginLeft:10};
}},"toolbar":{style:function(fH){return {backgroundColor:ds};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(ea){return {decorator:cb,backgroundColor:ds,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(fS){return {margin:[3,2],decorator:cs};
}},"toolbar-button":{alias:dr,style:function(hb){if(hb.pressed||hb.checked||hb.abandoned){var hd=dq;
var hc=[3,2,1,4];
}else if(hb.hovered){var hd=J;
var hc=[2,3];
}else{var hd=undefined;
var hc=[3,4];
}return {cursor:G,decorator:hd,padding:hc,backgroundColor:hb.abandoned?cY:hb.checked?cX:du};
}},"toolbar-menubutton":{alias:dz,include:dz,style:function(e){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dk,include:dk,style:function(c){return {source:dP};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":dz,"toolbar-splitbutton/arrow":{alias:dz,include:dz,style:function(eI){return {icon:ch};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:du,include:du,style:function(fQ){return {icon:fQ.vertical?ch:y};
}},"slidebar/button-backward":{alias:du,include:du,style:function(fO){return {icon:fO.vertical?dR:bf};
}},"tabview":{},"tabview/bar":{alias:bK,style:function(et){var eu=0,ex=0,ev=0,ew=0;

if(et.barTop){ev=-2;
}else if(et.barBottom){eu=-2;
}else if(et.barRight){ew=-2;
}else{ex=-2;
}return {marginBottom:ev,marginTop:eu,marginLeft:ew,marginRight:ex};
}},"tabview/bar/button-forward":{include:dU,alias:dU,style:function(eC){if(eC.barTop||eC.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bz,alias:bz,style:function(el){if(el.barTop||el.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(gW){return {backgroundColor:ds,decorator:dp,padding:10};
}},"tabview-page":dt,"tabview-page/button":{style:function(fb){var fk;
var fi=0,fg=0,fd=0,ff=0;

if(fb.barTop||fb.barBottom){var fe=2,fc=2,fh=6,fj=6;
}else{var fe=6,fc=6,fh=6,fj=6;
}
if(fb.barTop){fk=cH;
}else if(fb.barRight){fk=cK;
}else if(fb.barBottom){fk=cI;
}else{fk=bG;
}
if(fb.checked){if(fb.barTop||fb.barBottom){fh+=2;
fj+=2;
}else{fe+=2;
fc+=2;
}}else{if(fb.barTop||fb.barBottom){fd+=2;
fi+=2;
}else if(fb.barLeft||fb.barRight){fg+=2;
ff+=2;
}}
if(fb.checked){if(!fb.firstTab){if(fb.barTop||fb.barBottom){ff=-4;
}else{fi=-4;
}}
if(!fb.lastTab){if(fb.barTop||fb.barBottom){fg=-4;
}else{fd=-4;
}}}return {zIndex:fb.checked?10:5,decorator:fk,backgroundColor:ds,padding:[fe,fj,fc,fh],margin:[fi,fg,fd,ff]};
}},"tabview-page/button/label":{alias:dv,style:function(gu){return {padding:[0,1,0,1],margin:gu.focused?0:1,decorator:gu.focused?be:undefined};
}},"tabview-page/button/icon":dk,"tabview-page/button/close-button":{alias:dr,style:function(eF){return {icon:bS};
}},"scrollbar":{},"scrollbar/slider":{alias:A,style:function(l){return {backgroundColor:cX};
}},"scrollbar/slider/knob":{include:dA,style:function(ef){return {height:14,width:14,minHeight:ef.horizontal?undefined:9,minWidth:ef.horizontal?9:undefined};
}},"scrollbar/button":{alias:du,include:du,style:function(fJ){var fK;

if(fJ.up||fJ.down){if(fJ.pressed||fJ.abandoned||fJ.checked){fK=[5,2,3,4];
}else{fK=[4,3];
}}else{if(fJ.pressed||fJ.abandoned||fJ.checked){fK=[4,3,2,5];
}else{fK=[3,4];
}}var fL=cN;

if(fJ.left){fL+=df;
}else if(fJ.right){fL+=cp;
}else if(fJ.up){fL+=cM;
}else{fL+=dK;
}return {padding:fK,icon:fL};
}},"scrollbar/button-begin":L,"scrollbar/button-end":L,"slider":{style:function(gT){var gU;

if(gT.disabled){gU=dD;
}else if(gT.invalid){gU=dw;
}else if(gT.focused){gU=cX;
}else{gU=I;
}return {backgroundColor:gU,decorator:gT.focused?cl:dl};
}},"slider/knob":{include:dA,style:function(gV){return {width:14,height:14,decorator:dp};
}},"tree-folder/open":{style:function(es){return {source:es.opened?bD:bx};
}},"tree-folder":{style:function(ek){return {padding:[2,3,2,0],icon:ek.opened?bi:dW};
}},"tree-folder/icon":{style:function(fa){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(eq){return {padding:[1,2],backgroundColor:eq.selected?cf:undefined,textColor:eq.selected?dm:undefined};
}},"tree-file":{include:dV,alias:dV,style:function(n){return {icon:dT};
}},"tree":{include:ce,alias:ce,style:function(gP){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(fl){return {decorator:cQ};
}},"treevirtual-folder":{style:function(eE){return {icon:(eE.opened?bi:dW)};
}},"treevirtual-file":{include:bF,alias:bF,style:function(eL){return {icon:dT};
}},"treevirtual-line":{style:function(gJ){return {icon:bt};
}},"treevirtual-contract":{style:function(eB){return {icon:bD};
}},"treevirtual-expand":{style:function(er){return {icon:bx};
}},"treevirtual-only-contract":{style:function(gX){return {icon:w};
}},"treevirtual-only-expand":{style:function(gA){return {icon:Q};
}},"treevirtual-start-contract":{style:function(b){return {icon:dN};
}},"treevirtual-start-expand":{style:function(fN){return {icon:bd};
}},"treevirtual-end-contract":{style:function(fA){return {icon:dG};
}},"treevirtual-end-expand":{style:function(fF){return {icon:dM};
}},"treevirtual-cross-contract":{style:function(gB){return {icon:bc};
}},"treevirtual-cross-expand":{style:function(eH){return {icon:bR};
}},"treevirtual-end":{style:function(eP){return {icon:dF};
}},"treevirtual-cross":{style:function(gq){return {icon:bj};
}},"window":{style:function(gd){return {contentPadding:[10,10,10,10],backgroundColor:ds,decorator:gd.maximized?undefined:dp,shadow:gd.maximized?undefined:cR};
}},"window/pane":{},"window/captionbar":{style:function(m){return {padding:1,backgroundColor:m.active?ca:D,textColor:m.active?bY:cA};
}},"window/icon":{style:function(gG){return {marginRight:4};
}},"window/title":{style:function(ep){return {cursor:G,font:dE,marginRight:20,alignY:ci};
}},"window/minimize-button":{include:du,alias:du,style:function(fY){return {icon:dH,padding:fY.pressed||fY.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:du,alias:du,style:function(fy){return {icon:cw,padding:fy.pressed||fy.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:du,alias:du,style:function(fz){return {icon:u,padding:fz.pressed||fz.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:du,alias:du,style:function(eG){return {marginLeft:2,icon:cc,padding:eG.pressed||eG.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(d){return {decorator:dq,padding:[2,6]};
}},"window/statusbar-text":dv,"resizer":{style:function(fW){return {decorator:dp};
}},"splitpane":{},"splitpane/splitter":{style:function(fm){return {backgroundColor:ds};
}},"splitpane/splitter/knob":{style:function(fu){return {source:fu.horizontal?cD:U,padding:2};
}},"splitpane/slider":{style:function(eo){return {backgroundColor:dL,opacity:0.3};
}},"selectbox":{include:dA,style:function(gr){var gs=du;

if(gr.invalid&&!gr.disabled){gs=dw;
}else if(gr.abandoned){gs=cY;
}else if(!gr.abandoned&&gr.hovered){gs=dB;
}else if(!gr.abandoned&&!gr.hovered&&gr.checked){gs=dX;
}return {backgroundColor:gs};
}},"selectbox/atom":dr,"selectbox/popup":dx,"selectbox/list":ce,"selectbox/arrow":{include:dk,style:function(en){return {source:ch,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(fR){return {decorator:dp};
}},"datechooser/navigation-bar":{style:function(eK){return {backgroundColor:cP,textColor:eK.disabled?dn:eK.invalid?cU:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":ck,"datechooser/last-month-button-tooltip":ck,"datechooser/next-year-button-tooltip":ck,"datechooser/next-month-button-tooltip":ck,"datechooser/last-year-button":cV,"datechooser/last-month-button":cV,"datechooser/next-year-button":cV,"datechooser/next-month-button":cV,"datechooser/button/icon":{},"datechooser/button":{style:function(fB){var fC={width:17,show:cu};

if(fB.lastYear){fC.icon=bp;
}else if(fB.lastMonth){fC.icon=bf;
}else if(fB.nextYear){fC.icon=S;
}else if(fB.nextMonth){fC.icon=dS;
}
if(fB.pressed||fB.checked||fB.abandoned){fC.decorator=dq;
}else if(fB.hovered){fC.decorator=J;
}else{fC.decorator=undefined;
}
if(fB.pressed||fB.checked||fB.abandoned){fC.padding=[2,0,0,2];
}else if(fB.hovered){fC.padding=1;
}else{fC.padding=2;
}return fC;
}},"datechooser/month-year-label":{style:function(go){return {font:dE,textAlign:cW};
}},"datechooser/date-pane":{style:function(gQ){return {decorator:bu,backgroundColor:cP};
}},"datechooser/weekday":{style:function(gl){return {decorator:bV,font:dE,textAlign:cW,textColor:gl.disabled?dn:gl.weekend?E:cP,backgroundColor:gl.weekend?cP:E};
}},"datechooser/day":{style:function(ei){return {textAlign:cW,decorator:ei.today?cQ:undefined,textColor:ei.disabled?dn:ei.selected?dm:ei.otherMonth?dn:undefined,backgroundColor:ei.disabled?undefined:ei.selected?bs:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(fn){return {textAlign:cW,textColor:E,padding:[2,4],decorator:fn.header?v:bT};
}},"combobox":{style:function(fw){var fx;

if(fw.disabled){fx=dD;
}else if(fw.invalid){fx=dw;
}else if(fw.focused){fx=cX;
}else{fx=I;
}return {decorator:fw.focused?cl:dl,textColor:fw.disabled?dn:undefined,backgroundColor:fx};
}},"combobox/button":{alias:du,include:du,style:function(fs){return {icon:ch,backgroundColor:fs.hovered?dB:du};
}},"combobox/popup":dx,"combobox/list":ce,"combobox/textfield":{include:dy,style:function(gn){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(eQ){var eR={backgroundColor:ds,shadow:cR,decorator:dp,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:eQ.submenu||eQ.contextmenu?cL:cJ};

if(eQ.submenu){eR.position=dY;
eR.offset=[-2,-3];
}
if(eQ.contextmenu){eR.offset=4;
}return eR;
}},"menu/slidebar":bv,"menu-slidebar":dt,"menu-slidebar-button":{style:function(eY){return {backgroundColor:eY.hovered?cf:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:K,style:function(f){return {icon:f.hovered?de:dR};
}},"menu-slidebar/button-forward":{include:K,style:function(gD){return {icon:gD.hovered?O:ch};
}},"menu-separator":{style:function(eS){return {height:0,decorator:P,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dr,style:function(ft){return {backgroundColor:ft.selected?cf:undefined,textColor:ft.selected?dm:undefined,padding:[2,6]};
}},"menu-button/icon":{include:dk,style:function(gp){return {alignY:ci};
}},"menu-button/label":{include:dv,style:function(gR){return {alignY:ci,padding:1};
}},"menu-button/shortcut":{include:dv,style:function(eV){return {alignY:ci,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dk,style:function(gy){return {source:gy.selected?dj:dS,alignY:ci};
}},"menu-checkbox":{alias:cj,include:cj,style:function(fX){return {icon:!fX.checked?undefined:fX.selected?cv:bP};
}},"menu-radiobutton":{alias:cj,include:cj,style:function(a){return {icon:!a.checked?undefined:a.selected?C:cG};
}},"menubar":{style:function(ee){return {backgroundColor:ds,decorator:dp};
}},"menubar-button":{alias:dr,style:function(eA){return {padding:[2,6],backgroundColor:eA.pressed||eA.hovered?cf:undefined,textColor:eA.pressed||eA.hovered?dm:undefined};
}},"colorselector":dt,"colorselector/control-bar":dt,"colorselector/visual-pane":cn,"colorselector/control-pane":dt,"colorselector/preset-grid":dt,"colorselector/colorbucket":{style:function(fG){return {decorator:dq,width:16,height:16};
}},"colorselector/preset-field-set":cn,"colorselector/input-field-set":cn,"colorselector/preview-field-set":cn,"colorselector/hex-field-composite":dt,"colorselector/hex-field":dy,"colorselector/rgb-spinner-composite":dt,"colorselector/rgb-spinner-red":cg,"colorselector/rgb-spinner-green":cg,"colorselector/rgb-spinner-blue":cg,"colorselector/hsb-spinner-composite":dt,"colorselector/hsb-spinner-hue":cg,"colorselector/hsb-spinner-saturation":cg,"colorselector/hsb-spinner-brightness":cg,"colorselector/preview-content-old":{style:function(ga){return {decorator:dq,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gc){return {decorator:dq,backgroundColor:cS,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(eb){return {decorator:dq,margin:5};
}},"colorselector/brightness-field":{style:function(ez){return {decorator:dq,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dt,"colorselector/hue-saturation-handle":dt,"colorselector/brightness-pane":dt,"colorselector/brightness-handle":dt,"table":dt,"table/statusbar":{style:function(gb){return {decorator:W,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:du,style:function(g){var i,h;

if(g.pressed||g.checked||g.abandoned){i=dq;
h=[3,2,1,4];
}else if(g.hovered){i=J;
h=[2,3];
}else{i=undefined;
h=[3,4];
}return {decorator:i,padding:h,backgroundColor:g.abandoned?cY:du,icon:z};
}},"table-column-reset-button":{extend:cj,alias:cj,style:function(){return {icon:cd};
}},"table-scroller/scrollbar-x":cT,"table-scroller/scrollbar-y":cT,"table-scroller":dt,"table-scroller/header":{style:function(eU){return {decorator:bo,backgroundColor:x};
}},"table-scroller/pane":{style:function(ed){return {backgroundColor:bn};
}},"table-scroller/focus-indicator":{style:function(gS){return {decorator:bL};
}},"table-scroller/resize-line":{style:function(eh){return {backgroundColor:bW,width:3};
}},"table-header-cell":{alias:dr,style:function(eT){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:eT.hovered?0:2,decorator:eT.hovered?dJ:N,backgroundColor:eT.hovered?bX:N,sortIcon:eT.sorted?(eT.sortedAscending?cq:cO):undefined};
}},"table-header-cell/sort-icon":{style:function(gx){return {alignY:ci};
}},"table-editor-textfield":{include:dy,style:function(fM){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:bE,alias:bE,style:function(k){return {padding:[0,2]};
}},"table-editor-combobox":{include:H,alias:H,style:function(eD){return {decorator:undefined};
}},"colorpopup":{alias:dx,include:dx,style:function(gF){return {decorator:dp,padding:5,backgroundColor:ds};
}},"colorpopup/field":{style:function(gH){return {decorator:dq,margin:2,width:14,height:14,backgroundColor:ds};
}},"colorpopup/selector-button":du,"colorpopup/auto-button":du,"colorpopup/preview-pane":cn,"colorpopup/current-preview":{style:function(fE){return {height:20,padding:4,marginLeft:4,decorator:dq,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(fT){return {height:20,padding:4,marginRight:4,decorator:dq,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:du,include:du,style:function(gI){return {icon:Y};
}},"colorpopup/colorselector-cancelbutton":{alias:du,include:du,style:function(gz){return {icon:bk};
}},"virtual-list":ce,"virtual-list/row-layer":cF,"row-layer":dt,"column-layer":dt,"cell":{style:function(ey){return {backgroundColor:ey.selected?cz:bh,textColor:ey.selected?dm:dQ,padding:[3,6]};
}},"cell-string":cm,"cell-number":{include:cm,style:function(ge){return {textAlign:bq};
}},"cell-image":cm,"cell-boolean":cm,"cell-atom":cm,"cell-date":cm,"cell-html":cm,"htmlarea":{"include":dt,style:function(ej){return {backgroundColor:cS};
}}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a},icons:{}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(C,D){qx.ui.decoration.Abstract.call(this);
if(C!=null){this.setBorderImage(C);
}
if(D!=null){this.setSlice(D);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__sx:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sx;
},getMarkup:function(){if(this.__sx){return this.__sx;
}var G=this._resolveImageUrl(this.getBorderImage());
var H=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var I=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__sx=[x,qx.bom.element.Style.compile({"borderImage":o+G+p+H.join(f)+f+I,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:H.join(b)+g}),y].join(q);
return this.__sx;
},resize:function(z,A,B){z.style.width=A+g;
z.style.height=B+g;
},tint:function(E,F){},_applyStyle:function(){{};
},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__sx=null;
}});
})();
(function(){var n="px",m="0px",l="-1px",k="no-repeat",j="scale-x",i="scale-y",h="-tr",g="-l",f='</div>',e="scale",B="qx.client",A="-br",z="-t",y="-tl",x="-r",w='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',v="_applyBaseImage",u="-b",t="String",s="",q="-bl",r="qx.ui.decoration.GridDiv",o="-c",p="mshtml";
qx.Class.define(r,{extend:qx.ui.decoration.Abstract,construct:function(C,D){qx.ui.decoration.Abstract.call(this);
if(C!=null){this.setBaseImage(C);
}
if(D!=null){this.setInsets(D);
}},properties:{baseImage:{check:t,nullable:true,apply:v}},members:{__sy:null,__sz:null,__sA:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sy;
},getMarkup:function(){if(this.__sy){return this.__sy;
}var H=qx.bom.element.Decoration;
var I=this.__sz;
var J=this.__sA;
var K=[];
K.push(w);
K.push(H.create(I.tl,k,{top:0,left:0}));
K.push(H.create(I.t,j,{top:0,left:J.left+n}));
K.push(H.create(I.tr,k,{top:0,right:0}));
K.push(H.create(I.bl,k,{bottom:0,left:0}));
K.push(H.create(I.b,j,{bottom:0,left:J.left+n}));
K.push(H.create(I.br,k,{bottom:0,right:0}));
K.push(H.create(I.l,i,{top:J.top+n,left:0}));
K.push(H.create(I.c,e,{top:J.top+n,left:J.left+n}));
K.push(H.create(I.r,i,{top:J.top+n,right:0}));
K.push(f);
return this.__sy=K.join(s);
},resize:function(a,b,c){var d=this.__sA;
var innerWidth=b-d.left-d.right;
var innerHeight=c-d.top-d.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}a.style.width=b+n;
a.style.height=c+n;
a.childNodes[1].style.width=innerWidth+n;
a.childNodes[4].style.width=innerWidth+n;
a.childNodes[7].style.width=innerWidth+n;
a.childNodes[6].style.height=innerHeight+n;
a.childNodes[7].style.height=innerHeight+n;
a.childNodes[8].style.height=innerHeight+n;

if(qx.core.Variant.isSet(B,p)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(b%2==1){a.childNodes[2].style.marginRight=l;
a.childNodes[5].style.marginRight=l;
a.childNodes[8].style.marginRight=l;
}else{a.childNodes[2].style.marginRight=m;
a.childNodes[5].style.marginRight=m;
a.childNodes[8].style.marginRight=m;
}
if(c%2==1){a.childNodes[3].style.marginBottom=l;
a.childNodes[4].style.marginBottom=l;
a.childNodes[5].style.marginBottom=l;
}else{a.childNodes[3].style.marginBottom=m;
a.childNodes[4].style.marginBottom=m;
a.childNodes[5].style.marginBottom=m;
}}}},tint:function(E,F){},_applyBaseImage:function(L,M){{};

if(L){var Q=this._resolveImageUrl(L);
var R=/(.*)(\.[a-z]+)$/.exec(Q);
var P=R[1];
var O=R[2];
var N=this.__sz={tl:P+y+O,t:P+z+O,tr:P+h+O,bl:P+q+O,b:P+u+O,br:P+A+O,l:P+g+O,c:P+o+O,r:P+x+O};
this.__sA=this._computeEdgeSizes(N);
}},_resolveImageUrl:function(G){return qx.util.AliasManager.getInstance().resolve(G);
},_computeEdgeSizes:function(S){var T=qx.util.ResourceManager.getInstance();
return {top:T.getImageHeight(S.t),bottom:T.getImageHeight(S.b),left:T.getImageWidth(S.l),right:T.getImageWidth(S.r)};
}},destruct:function(){this.__sy=this.__sz=this.__sA=null;
}});
})();


qx.$$loader.init();

