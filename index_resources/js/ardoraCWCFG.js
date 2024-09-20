//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=10;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Iniciar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="x"; messageTime="x"; messageError="x"; messageErrorG="x"; messageAttempts="x"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["VA==","RQ==","TA==","RQ==","Vg==","SQ==","Uw==","QQ==","Tw==","",""],["RQ==","","","","","Tg==","","","","",""],["TA==","","","","","VA==","","","","",""],["RQ==","","","","","RQ==","","","","",""],["Rg==","","","","","Ug==","","","","",""],["Tw==","","Sg==","Tw==","Ug==","Tg==","QQ==","TA==","","Ug==",""],["Tg==","","","","Qw==","RQ==","TA==","VQ==","TA==","QQ==","Ug=="],["RQ==","","","","","VA==","","","","RA==",""],["","","","","","","","","","SQ==",""],["","","","","","","","","","Tw==",""]];
var x1=[1,3,5,1,6,5,7,8,10];
var y1=[1,6,7,1,1,6,6,6,6];
var x2=[9,8,11,1,6,5,7,8,10];
var y2=[1,6,7,8,8,7,7,7,10];
var imaCW=["","","","","","","","",""];
var audioCW=["","","","","","","","",""];
var defCW=["Meio de comunicação visual","Meio de comunicação impresso","Meio de comunicação visual e auditivo","Meio de comunicação auditivo","Meio de comunicação virtual","","","","Meio de comunicação auditivo"];
var altCW=["","","","","","","","",""];
var colNum=11;
var rowNum=10;
