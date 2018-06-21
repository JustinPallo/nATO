$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTy5pWtMfcxfipsqYCKvab3YmRgYWmUzM5X-bNU0e5K4JF-1gatXkCdmMHyPcuEBssD4-rH_IDeULR_/pub?gid=0&single=true&output=csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            var tarr = [];
            for (var j = 0; j < headers.length; j++) {
                tarr.push(headers[j] + ":" + data[j]);
            }
            lines.push(tarr);
        }
    }
    console.log(lines);
}

class Apartment{
    constructor(id, zone, name, address, start, end, currentPayment, landlord, phone, email){
        this.id = id;
        this.zone= zone;
        this.name = name;
        this.address = address;
        this.start = start;
        this.end = end;
        this.currentPayment = currentPayment;
        this.landlord = landlord;
        this.phone = phone;
        this.email = email;
    }

    export(){
        return this.id + " " + this.zone + " " + this.name;
    }
}