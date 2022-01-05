function showValueRatingMessage() {
    var valueRating = document.getElementsByName("rating")[0].value;
    if (valueRating == 1) {
        alert("Nos ha valorado con " + valueRating + " punto.");
    } else {
        alert("Nos ha valorado con " + valueRating + " puntos. ¡Gracias!");
    }
}

function showBankAccountMessage() {
    bankAccount = getBankAccount();
    if (bankAccount.length >= 28){
        alert("Le informamos que su cuenta bancaria es " + bankAccount + ".");
    }else{
        alert("Hay campos vacíos en los datos de cuenta bancaria.");

    }
    
}

function showDayOfWeekMessage() {
    var dayOfWeek= getDayOfWeek();
    alert ("El día seleccionado en el elemento fecha es "+dayOfWeek+ ".")
    
}


function getBankAccount(){
    var pais =document.getElementsByName("pais")[0].value;
    var ciban =document.getElementsByName("ciban")[0].value;
    var enti =document.getElementsByName("enti")[0].value;
    var suc =document.getElementsByName("suc")[0].value;
    var dc =document.getElementsByName("dc")[0].value;
    var cuenta =document.getElementsByName("cuenta")[0].value;
    return (pais+ciban+"-"+enti+"-"+suc+"-"+dc+"-"+cuenta);
}

const weekday = new Array(7);
weekday[0] = "Domingo";
weekday[1] = "Lunes";
weekday[2] = "Martes";
weekday[3] = "Miércoles";
weekday[4] = "Jueves";
weekday[5] = "Viernes";
weekday[6] = "Sábado";

function getDayOfWeek(){
    var date = document.getElementsByName("dateQuestionnaire")[0].value;
    var dateFormat = new Date (date)

     
    var dayOfWeek = weekday[dateFormat.getDay()];
    return dayOfWeek;
}

function postalCode(){
    var province = document.getElementsByName("provincia")[0].value;
    if (province <=0){
        alert("Escriba su provincia");  
    }
    var pc = document.getElementsByName("cpostal")[0].value;
    if (pc.length >= 5){
        var key = pc.substring(0,2);
        key = parseInt(key);
            if(codesJSON[key].toUpperCase() === province.toUpperCase()) {
                document.getElementById('correctmsg').style.display='block';
                document.getElementById('errormsg').style.display='none';

            }
            else{
                document.getElementById("textError").remove()
                document.getElementById('errormsg').style.display='block';
                document.getElementById('correctmsg').style.display='none';
                const para = document.createElement("p");
                para.id= "textError";
                const node = document.createTextNode("ERROR - Provincias para este código postal: " +codesJSON[key]);
                para.appendChild(node);
                document.getElementById('errormsg').appendChild(para);
            }
    }else{
        alert("Complete su codigo postal");  
    } 
}



//Simulacion API o DDBB de provincias
var codesJSON = {
    1:"Alava",
    2:"Albacete",
    3:"Alicante",
    4:"Almeria",
    5:"Avila",
    6:"Badajoz",
    7:"Islas Baleares",
    8:"Barcelona",
    9:"Burgos",
    10:"Caceres",
    11:"Cadiz",
    12:"Castellon",
    13:"Ciudad Real",
    14:"Cordoba",
    15:"La Coruña",
    16:"Cuenca",
    17:"Gerona",
    18:"Granada",
    19:"Guadalajara",
    20:"Guipuzcua",
    21:"Huelva",
    22:"Huesca",
    23:"Jaen",
    24:"Leon",
    25:"Lerida",
    26:"La Rioja",
    27:"Lugo",
    28:"Madrid",
    29:"Malaga",
    30:"Murcia",
    31:"Navarra",
    32:"Orense",
    33:"Asturias",
    34:"Palencia",
    35:"Las Palmas",
    36:"Pontevedra",
    37:"Salamanca",
    38:"Santa Cruz de Tenerife",
    39:"Cantabria",
    40:"Segovia",
    41:"Sevilla",
    42:"Soria",
    43:"Tarragona",
    44:"Terual",
    45:"Toledo",
    46:"Valencia",
    47:"Valladolid",
    48:"Vizcaya",
    49:"Zamora",
    50:"Zaragoza",
    51:"Ceuta",
    52:"Melilla"
}