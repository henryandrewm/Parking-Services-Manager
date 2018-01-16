var firstNames = [];
var lastNames = [];
var vehicles = [];
var employees = [];
var vehicleMakes = [];
var tickets = [];
var ticketIndex = 0;
var vehiclesIndex = 0;
var vehicleMakesIndex = 0;
var employeeIndex = 0;
var rand;
var obj1;
var obj2;
var colors = ['blue', 'black', 'silver', 'white', 'red', 'yellow'];
var parkingLots = ['Lot P-1', 'Lot P-2', 'Lot P-3', 'Lot P-4', 'Lot P-5', 'Lot P-6', 'Lot P-7', 'Lot P-8', 'Lot P-9', 'Lot P-10', 'Lot P-11', 'Lot P-12', 'Lot A', 'Lot B', 'Lot C', 'Lot D', 'Lot E', 'Lot F', 'Lot G'];

function nameGenerator1(){ 
        var reader = new FileReader();
            reader.onload = function(e){
            var file = e.target.result.replace(/\n+/g, ",").split(",");
            for(var i = 0; i < file.length; i += 2){
                    firstNames.push(file[i]);
                    lastNames.push(file[i+1]);
            }
        };
        reader.readAsText(document.getElementById('files1').files[0]);
        return;
}

function nameGenerator2(){ 
        var reader = new FileReader();
            reader.onload = function(e){
            var file = e.target.result.replace(/\n+/g, ",").split(",");
            var vehicle;
            for(var i = 0; i < file.length; i += 2){
                vehicle = {make: file[i], model: file[i+1]};
                vehicleMakes.push(vehicle);
            }
        };
        reader.readAsText(document.getElementById('files2').files[0]);
        return;
}

function text1(){
    var first;
    var last;
    var employee;
    obj1 = document.getElementById("text1");
    for(var i = 1; i < 51; i++){
        first = firstNames[Math.floor(Math.random() * 1000)];
        last = lastNames[Math.floor(Math.random() * 1000)].replace(/\s+/g, "");
        obj1.value += 
        "INSERT INTO employee (" + i + ", " + first + ", " + last + ", " + (Math.ceil(Math.random() * 40)) + ");\n";
        employee = {
            id: i,
            firstname: first, 
            lastname: last
        };
        employees[employeeIndex] = employee;
        employeeIndex++;
    }

    return;
}

function text2(){
    var i = 0;
    var date = "";
    var month;
    var day;
    var time = "";
    var hour;
    var min;
    var sec;
    var ticket;
    obj1 = document.getElementById("text2");

    while(i < tickets.length){

        date = (Math.ceil(Math.random() * 1) + 2016) + "-"; 
        month = (Math.ceil(Math.random() * 12));
        day = (Math.ceil(Math.random() * 28));
        if(month < 10){
            date += "0" + month + "-";
        } else {
            date += month + "-";
        }

        if(day < 10){
            date += "0" + day;
        } else {
            date += day;
        }

        hour = (Math.ceil(Math.random() * 12));
        min = (Math.ceil(Math.random() * 60));
        sec = (Math.ceil(Math.random() * 60));
        if(hour < 10){
            time += "0" + hour + ":";
        } else {
            time += hour + ":";
        }

        if(min < 10){
            time += "0" + min + ":";
        } else {
            time += min + ":";
        }

        if(sec < 10){
            time += "0" + sec;
        } else {
            time += sec;
        }
        ticket = tickets[i];
        if(ticket.used1 == "no"){
            rand = Math.floor(Math.random() * employees.length);
            obj1.value += 
            "INSERT INTO writes (" + employees[rand].id + ", " + ticket.id + ", " + date + ", " + time + ");\n";
            i++;
            ticket.used1 = "yes";
        }

        date = "";
        time = "";
    }
    return;
}

function text3(){
    var paids = ['yes', 'no'];
    var types = ['not_registered', 'over_time', 'bad_parking', 'other'];
    var appeals = ['no_appeal','appeal_submitted','appeal_processing','appeal_denied','appeal_approved'];
    var type;
    var paid;
    var appeal;
    var obj1 = document.getElementById("text3");
    var start = ticketIndex;
    var end = ticketIndex + 20000;

    for(var j = start; j < end; j++){
        rand = Math.floor(Math.random() * 4);
        type = types[rand];
        rand = Math.floor(Math.random() * 5);
        appeal = appeals[rand];
        if(appeal == 'appeal_approved') {
            paid = 'no';
        } else {
            paid = paids[Math.floor(Math.random() * 2)];
        }
        obj1.value += 
        "INSERT INTO ticket (" + (j+1) + ", " + type + ", " + paid + ", " + appeal + ");\n";
        ticket = {
            id: j,
            type: type,
            paid: paid,
            appeal: appeal,
            used1: "no",
            used2: "no"
        };
        tickets[ticketIndex] = ticket;
        ticketIndex++;
    }

    return;
}

function text4(){
    var vehicle;
    var person;
    var first;
    var last;
    var makes;
    var models;
    var color;
    var licenses;
    var obj1 = document.getElementById("text5");
    var obj2 = document.getElementById("text4");

    for(var i = 1; i < 5000; i++){
        licenses = license();
        rand = Math.floor(Math.random() * 50000);
        first = firstNames[rand];
        rand = Math.floor(Math.random() * 50000);
        last = lastNames[rand].replace(/\s+/g, "");
        rand = Math.floor(Math.random() * 660);
        vehicle = vehicleMakes[rand];
        makes = vehicle.make;
        models = vehicle.model.replace(/\s+/g, "");
        color1 = colors[Math.floor(Math.random() * 6)];



        obj1.value += 
        "INSERT INTO unrecorded_vehicle (" + licenses + ", " + first + ", " + last + ", " + makes + ", " + models + ", " + color1 + ");\n";
        obj2.value += 
        "INSERT INTO vehicle (" + licenses + ", " + first + ", " + last + ", " + makes + ", " + models + ", " + color1 + ");\n";

        person = {
            license: licenses,
            firstname: first,
            lastname: last,
            make: makes,
            model: models,
            color: color1,
            date: ""
        };
        vehicles[vehiclesIndex] = person;
        vehiclesIndex++;
    } 

    return;
}

function text5(){
    var vehicle;
    var person;
    var first;
    var last;
    var makes;
    var models;
    var color;
    var licenses;
    var num = 0;
    var obj1 = document.getElementById("text6");
    var obj2 = document.getElementById("text4");

    for(var i = 0; i < 50000; i++){
        licenses = license();
        rand = Math.floor(Math.random() * 50000);
        first = firstNames[rand];
        rand = Math.floor(Math.random() * 50000);
        last = lastNames[rand].replace(/\s+/g, "");
        rand = Math.floor(Math.random() * 660);
        vehicle = vehicleMakes[rand];
        makes = vehicle.make;
        models = vehicle.model.replace(/\s+/g, "");
        rand = Math.floor(Math.random() * 6)
        color1 = colors[rand];
        date1 = (Math.ceil(Math.random() * 21) + 1995) + "-"; 
        month = (Math.ceil(Math.random() * 12));
        day = (Math.ceil(Math.random() * 28));
        if(month < 10){
            date1 += "0" + month + "-";
        } else {
            date1 += month + "-";
        }

        if(day < 10){
            date1 += "0" + day;
        } else {
            date1 += day;
        }

        obj1.value += 
        "INSERT INTO recorded_vehicle (" + licenses + ", " + first + ", " + last + ", " + makes + ", " + models + ", " + color1 + ", " + date1 + ");\n";
        obj2.value += 
        "INSERT INTO vehicle (" + licenses + ", " + first + ", " + last + ", " + makes + ", " + models + ", " + color1 + ");\n";

        person = {
            license: licenses,
            firstname: first,
            lastname: last,
            make: makes,
            model: models,
            color: color1,
            date: date1
        };
        vehicles[vehiclesIndex] = person;
        vehiclesIndex++;
    } 
    window.alert(vehicles.length);
    return;
}

function text6(){
    var i = 0;
    var license;
    var parkingLot;
    var ticket;
    var obj1 = document.getElementById("text7");

    while(i < tickets.length){
        ticket = tickets[i];
        rand = Math.floor(Math.random() * vehicles.length);
        license = vehicles[rand];
        parkingLot = Math.floor(Math.random() * parkingLots.length);
        if(ticket.used2 == "no"){
            obj1.value += 
            "INSERT INTO involves (" + ticket.id + ", " + license.license + ", " + parkingLot + ");\n";
            i++;
            ticket.used2 = "yes";
        } 
    }
    return;
}

function text10(){
    var date1 = "";
    var date2 = "";
    var year1 = 0;
    var year2 = 0;
    var month1 = 0;
    var day1 = 0;
    var month2 = 0;
    var day2 = 0;
    obj1 = document.getElementById("text1");
    for(var i = 0; i < 50; i++){

        year1 = (Math.ceil(Math.random() * 22) + 1995); 
        date1 = year1 + "-";
        month1 = (Math.ceil(Math.random() * 12));
        day1 = (Math.ceil(Math.random() * 28));
        if(month1 < 10){
            date1 += "0" + month1 + "-";
        } else {
            date1 += month1 + "-";
        }

        if(day1 < 10){
            date1 += "0" + day1;
        } else {
            date1 += day1;
        }
        if(Math.ceil(Math.random() * 2) == 1){
            while(date2 == "" || (year2 < year1) || (year2 == year1 && month2 < month1) || (year2 == year1 && month2 == month1 && day2 < day1)){
                year2 = (Math.ceil(Math.random() * 22) + 1995); 
                date2 = year2 + "-"; 
                month2 = (Math.ceil(Math.random() * 12));
                day2 = (Math.ceil(Math.random() * 28));
                if(month2 < 10){
                    date2 += "0" + month2 + "-";
                } else {
                    date2 += month2 + "-";
                }

                if(day2 < 10){
                    date2 += "0" + day2;
                } else {
                    date2 += day2;
                }
            }
        } else {
            date2 = "null";
        }

        obj1.value += 
        (i + 1) + ", " + 1 + ", " + date1 + ", " + date2 + ")\n";

        date1 = "";
        date2 = "";
    }
    return;
}

function license(){
    var license = "";

    for(var i = 0; i < 8; i++){
        if(i == 7 && !(license.includes(" ") || license.includes("-"))){
            license += " ";
        } else {
            var test = Math.floor(Math.random() * 38);
            if(test == 36){
                license += " ";
            } else if(test == 37){
                license += "-";
            } else if(test >= 0 && test < 10){
                license += test;
            } else if(test >= 10 && test < 36){
                license += String.fromCharCode(test + 55);
            }
        }
    }
    return license;
}