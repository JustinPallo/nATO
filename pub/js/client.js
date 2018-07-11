//Fetches a .csv from google and starts processData()
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTy5pWtMfcxfipsqYCKvab3YmRgYWmUzM5X-bNU0e5K4JF-1gatXkCdmMHyPcuEBssD4-rH_IDeULR_/pub?gid=0&single=true&output=csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

//converts a CSV to an array[][] of broken up data
function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    var apartments = [];

    for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            var tarr = [];
            for (var j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }

    apartments = buildApartments(lines);
    
    updateList(apartments);
}

//converts the broken up CSV array to an object
function buildApartments(aptData){
    var rtn = [];

    for(i = 0; i < aptData.length; i++){
        rtn.push(new Apartment(
            /*1*/aptData[i][0],
            /*2*/aptData[i][1],
            /*3*/aptData[i][2],
            /*4*/aptData[i][3],
            /*5*/aptData[i][4],
            /*6*/aptData[i][5],
            /*7*/aptData[i][6],
            /*8*/aptData[i][7],
            /*9*/aptData[i][8],
            /*10*/aptData[i][9],
            /*11*/aptData[i][10],
            /*12*/aptData[i][11],
            /*13*/aptData[i][12],
            /*14*/aptData[i][13],
            /*15*/aptData[i][14],
            /*16*/aptData[i][15],
            /*17*/aptData[i][16],
            /*18*/aptData[i][17],
            /*19*/aptData[i][18],
            /*20*/aptData[i][19],
            /*21*/aptData[i][20],
            /*22*/aptData[i][21],
            /*23*/aptData[i][22],
            /*24*/aptData[i][23],
            /*25*/aptData[i][24],
            /*26*/aptData[i][25],
            /*27*/aptData[i][26],
            /*28*/aptData[i][27]
        ));
    }

    return rtn;
}

//writes the array of Apartments to the page as new <li>s
function updateList(apts){
    for(i = 0; i < apts.length; i++){
        $("#pensionSelect ul").append("<li id='" + apts[i].id + "'>" + apts[i].title() + "</li>");
    }

    //sets up the enviroment so that when you click a button, stuff happens
    $("#pensionSelect ul li").click(function(event){
        var clickedID = $(event.target).text();
        
    });
}

//searches array of Apartments to return the index of the name
function searchArrayForName(array, id){
    for(i = 0; i < array.length; i++){
        if(id == array[i]['name']){
            return i;
        }
        else{
            //wait for the next loop
        }
    }
    //item not found
    return -1;
}

//because I like classes to be organized
class Apartment{
    constructor(id, zona, nombre, dirrecion, estado, fechaDeInspecion, formaDePago, estadoDeProveedor, depositoEnGarantia, primerSemestre, segundoSemestre, tercerSemestre, cuartoSemestre, fechaInicio, fechaFinal, copiaDeContrato, cantidadDeMisioneros, tipoDeMisioneros, inmobiliaria, inmobDirrecion, inmobTelefono, inmobCorreo, duenoNombre, duenoCUIL, duenoTelefono, duenoInfo, duenoCorreo, medidorDeLuz){
        /*1*/this.id = id;
        /*2*/this.zone = zona;
        /*3*/this.name = nombre;
        /*4*/this.address = dirrecion;
        /*5*/this.state = estado;
        /*6*/this.inspectionDate = fechaDeInspecion;
        /*7*/this.paymentForm = formaDePago;
        /*8*/this.provState = estadoDeProveedor;
        /*9*/this.securityDeposit = depositoEnGarantia;
        /*10*/this.firstSemester = primerSemestre;
        /*11*/this.secondSemester = segundoSemestre;
        /*12*/this.thirdSemester = tercerSemestre;
        /*13*/this.fourthSemester = cuartoSemestre;
        /*14*/this.startDate = fechaInicio;
        /*15*/this.endDate = fechaFinal;
        /*16*/this.contractCopy = copiaDeContrato;
        /*17*/this.numMissionaries = cantidadDeMisioneros;
        /*18*/this.typeMissionaries = tipoDeMisioneros;
        /*19*/this.llName = inmobiliaria;
        /*20*/this.llAddress = inmobDirrecion;
        /*21*/this.llPhone = inmobTelefono;
        /*22*/this.llEmail = inmobCorreo;
        /*23*/this.oName = duenoNombre;
        /*24*/this.oCUIL = duenoCUIL;
        /*25*/this.oPhone = duenoTelefono;
        /*26*/this.oInfo = duenoInfo;
        /*27*/this.oEmail = duenoCorreo;
        /*28*/this.lightBox = medidorDeLuz;
    }

    title(){
        return this.zone + " " + this.name;
    }
}