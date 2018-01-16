var format = 100;
var div = 400;
var ticket = 550;
var vehicleList = [];

function vehicleStart() {
    vehicleGenerator();
    makeGenerator();
}

function ticketStart() {
    vehicleGenerator();
}

function vehicleGenerator(){
    var temp = vehicles.split("|");
    var name = "";
    var count = 0;
    var temp2;
    for(var i = 0; i < temp.length; i++){
        temp2 = temp[i].split(",");
        if(temp2[0] == name && i != 0){
            vehicleList[count].models.push(temp2[1]);
        } else if (i == 0){
            name = temp2[0];
            var vehicle = {
                make: name,
                models: []
            };
            vehicle.models.push(temp2[1]);
            vehicleList[count] = vehicle;
        } else {
            count++;
            name = temp2[0];
            var vehicle = {
                make: name,
                models: []
            };
            vehicle.models.push(temp2[1]);
            vehicleList[count] = vehicle;
        }
    }
}

function makeGenerator(){
    var selects = document.getElementsByClassName("makes");
    var optText;
    var text;
    for(var j = 0; j < selects.length; j++){
        for(var i = 0; i < vehicleList.length; i++){
            var opt = document.createElement("option");
            text = vehicleList[i].make;
            opt.value = text.replace(" ","_");
            optText = document.createTextNode(vehicleList[i].make);
            opt.appendChild(optText);
            selects[j].appendChild(opt);
        }
    }
}

function modelGenerator(){
    var make = event.target.id;
    var model = "models" + make.charAt(5);
    var select = document.getElementById(model);
    var optText;
    var text;
    var opt
    var children = select.children;
    var length = children.length;
    for(var i = 0; i < vehicleList.length; i++){
        if(document.getElementById(make).value.replace("_"," ") == vehicleList[i].make){
            var models = vehicleList[i].models;
            for(var j = 0; j < models.length; j++){
                if(length > 1){
                    opt = document.createElement("option");
                    text = models[j];
                    opt.value = text.replace(" ","_");
                    optText = document.createTextNode(models[j]);
                    opt.appendChild(optText);
                    select.replaceChild(opt, children[j+1]);
                    length--;
                } else {
                    opt = document.createElement("option");
                    text = models[j];
                    opt.value = text.replace(" ","_");
                    optText = document.createTextNode(models[j]);
                    opt.appendChild(optText);
                    select.appendChild(opt);
                }
            }
        }
    }
}

function addSelection(val){
    var item = document.getElementById(val);
    var str;
    var num = val.charAt(3);

    if(document.getElementById("check" + num).checked){
        str = "<select name='make" + num + "' class='makes' id='makes" + num + "' onchange='modelGenerator()'><option value=''>Choose an make</option></select><select name='model" + num + "' class='models' id='models" + num + "'><option value=''>Choose an model</option></select><select name='color" + num + "' id='colors'><option value=''>Choose an color</option><option value='blue'>Blue</option><option value='black'>Black</option><option value='silver'>Silver</option><option value='white'>White</option><option value='red'>Red</option><option value='yellow'>Yellow</option></select>";
        item.innerHTML = str;
        makeGenerator();

    } else {
        str = "<label>License Number:</label><input name='license" + num + "'type='text' placeholder='License'>";

        item.innerHTML = str;
    }
}

function dropTutorial(val) {
    var obj = document.getElementById(val);
    if (obj.style.visibility == "hidden") {
        obj.style.visibility = "visible";
        obj.style.height = "100%";
        var children = obj.children;
        for(var j = 0; j < children.length; j++){
            if(children[j].className == "format"){
                children[j].style.height = format + "%";
            } else if(children[j].className == "div1" || children[j].className == "div2"){
                if(children[j].id == "ticket1" || children[j].id == "ticket2" || children[j].id == "ticket3" || children[j].id == "ticket4"){
                    children[j].style.height = ticket + "px";
                } else {
                    children[j].style.height = div + "px";
                }
                children[j].style.marginBottom = "20px";
            }
        }
        var objs = document.getElementsByClassName("hidden");
        for(var i = 0; i < objs.length; i++){
            if(objs[i].id != val.toString()){
                objs[i].style.visibility = "hidden";
                objs[i].style.height = "0px";
                var children = objs[i].children;
                for(var j = 0; j < children.length; j++){
                    children[j].style.height = "0px";
                    children[j].style.marginBottom = "0px";
                }
            }
        }
    } else {
        obj.style.visibility = "hidden";
        obj.style.height = "0px";
        var children = obj.children;
        for(var j = 0; j < children.length; j++){
            children[j].style.height = "0px";
            children[j].style.marginBottom = "0px";
        }
    }
}


//arrays of options - vehicles

var vehicles = "Acura,CL|Acura,Integra|Acura,Legend|Acura,MDX|Acura,NSX|Acura,RL|Acura,RSX|Acura,SLX|Acura,TL|Acura,Vigor|Alfa Romeo,164|Alfa Romeo,GTV-6|Alfa Romeo,Milano|Alfa Romeo,Spider|AMC,Alliance|AMC,Eagle|AMC,Encore|AMC,GTA|Audi,80|Audi,90|Audi,100|Audi,200|Audi,4000|Audi,5000|Audi,A4|Audi,A6|Audi,A8|Audi,allroad|Audi,Cabriolet|Audi,GT|Audi,Quattro|Audi,S4|Audi,S6|Audi,S8|Audi,TT|Bertone,X1/9|BMW,3 Series|BMW,5 Series|BMW,6 Series|BMW,7 Series|BMW,8 Series|BMW,M|BMW,M3|BMW,M5|BMW,X5|BMW,Z3|BMW,Z4|BMW,Z8|Buick,Century|Buick,Electra|Buick,Estate|Buick,LeSabre|Buick,Park Avenue|Buick,Reatta|Buick,Regal|Buick,Rendezvous|Buick,Riviera|Buick,Roadmaster|Buick,Skyhawk|Buick,Skylark|Buick,Somerset|Buick,Somerset Regal|Cadillac,Allante'|Cadillac,Brougham|Cadillac,Catera|Cadillac,Cimarron|Cadillac,CTS|Cadillac,DeVille|Cadillac,Eldorado|Cadillac,Escalade|Cadillac,Escalade EXT|Cadillac,Fleetwood|Cadillac,Fleetwood 75|Cadillac,Seville|Cadillac,Sixty Special|Chevrolet,10 Pickup|Chevrolet,1500 Pickup|Chevrolet,20 Pickup|Chevrolet,2500 Pickup|Chevrolet,30 Pickup|Chevrolet,3500 Pickup|Chevrolet,APV|Chevrolet,Astro|Chevrolet,Avalanche|Chevrolet,Beretta|Chevrolet,Blazer|Chevrolet,Camaro|Chevrolet,Caprice|Chevrolet,Caprice Classic|Chevrolet,Cavalier|Chevrolet,Celebrity|Chevrolet,Chevette|Chevrolet,Citation II|Chevrolet,Corsica|Chevrolet,Corvette|Chevrolet,El Camino|Chevrolet,Express Van|Chevrolet,G-Series Van|Chevrolet,Impala|Chevrolet,Impala SS|Chevrolet,Lumina|Chevrolet,Lumina APV|Chevrolet,Malibu|Chevrolet,Metro|Chevrolet,Monte Carlo|Chevrolet,Nova|Chevrolet,Prizm|Chevrolet,S10 Blazer|Chevrolet,S10 Pickup|Chevrolet,Silverado 1500 Pickup|Chevrolet,Silverado 2500 Pickup|Chevrolet,Silverado 3500 Pickup|Chevrolet,Spectrum|Chevrolet,Sportvan|Chevrolet,Sprint|Chevrolet,Suburban|Chevrolet,Tahoe|Chevrolet,Tracker|Chevrolet,TrailBlazer|Chevrolet,Venture|Chrysler,300M|Chrysler,Cirrus|Chrysler,Concorde|Chrysler,Conquest|Chrysler,Conquest TSi|Chrysler,E Class|Chrysler,Executive|Chrysler,Fifth Ave|Chrysler,Grand Voyager|Chrysler,Imperial|Chrysler,Laser|Chrysler,LeBaron|Chrysler,LHS|Chrysler,New Yorker|Chrysler,PT Cruiser|Chrysler,Sebring|Chrysler,TC|Chrysler,Town & Country|Chrysler,Voyager|Daewoo,Lanos|Daewoo,Leganza|Daewoo,Nubira|Daihatsu,Charade|Daihatsu,Rocky|Dodge,600|Dodge,100 Pickup|Dodge,150 Pickup|Dodge,1500 Pickup|Dodge,250 Pickup|Dodge,2500 Pickup|Dodge,350 Pickup|Dodge,3500 Pickup|Dodge,Aries|Dodge,Aries America|Dodge,Avenger|Dodge,Caravan|Dodge,Charger|Dodge,Colt|Dodge,Colt Vista|Dodge,Conquest|Dodge,Dakota|Dodge,Daytona|Dodge,Diplomat|Dodge,Durango|Dodge,Dynasty|Dodge,Grand Caravan|Dodge,Intrepid|Dodge,Lancer|Dodge,Mini Ram Van|Dodge,Monaco|Dodge,Neon|Dodge,Omni|Dodge,Omni America|Dodge,Raider|Dodge,Ram 50 Pickup|Dodge,Ram Van|Dodge,Ram Wagon|Dodge,Ramcharger|Dodge,Rampage|Dodge,Shadow|Dodge,Spirit|Dodge,Stealth|Dodge,Stratus|Dodge,Van|Dodge,Viper|Eagle,Medallion|Eagle,Premier|Eagle,Summit|Eagle,Talon|Eagle,Vision|Ford,Aerostar|Ford,Aspire|Ford,Bronco|Ford,Bronco II|Ford,Club Wagon|Ford,Contour|Ford,Country Squire|Ford,Crown Victoria|Ford,Econoline|Ford,Escape|Ford,Escort|Ford,Excursion|Ford,EXP|Ford,Expedition|Ford,Explorer|Ford,Explorer Sport|Ford,Explorer Sport Trac|Ford,F150|Ford,F250|Ford,F350|Ford,Festiva|Ford,Focus|Ford,LTD|Ford,Mustang|Ford,Probe|Ford,Ranger|Ford,Taurus|Ford,Tempo|Ford,Thunderbird|Ford,Windstar|Ford,ZX2|Geo,Metro|Geo,Prizm|Geo,Spectrum|Geo,Storm|Geo,Tracker|GMC,1500 Pickup|GMC,2500 Pickup|GMC,3500 Pickup|GMC,Caballero|GMC,Envoy|GMC,Envoy XL|GMC,Jimmy|GMC,Rally Wagon|GMC,S15 Jimmy|GMC,S15 Pickup|GMC,Safari|GMC,Savana Van|GMC,Sierra 1500 Pickup|GMC,Sierra 2500 Pickup|GMC,Sierra 3500 Pickup|GMC,Sonoma|GMC,Suburban|GMC,Vandura|GMC,Yukon|GMC,Yukon XL|Honda,Accord|Honda,Civic|Honda,CR-V|Honda,del Sol|Honda,Element|Honda,Insight|Honda,Odyssey|Honda,Passport|Honda,Pilot|Honda,Prelude|Honda,S2000|Hummer,H1|Hummer,H2|Hyundai,Accent|Hyundai,Elantra|Hyundai,Excel|Hyundai,Santa Fe|Hyundai,Scoupe|Hyundai,Sonata|Hyundai,Tiburon|Hyundai,XG300|Hyundai,XG350|Infiniti,G20|Infiniti,G35|Infiniti,I30|Infiniti,I35|Infiniti,J30|Infiniti,M30|Infiniti,M45|Infiniti,Q45|Infiniti,QX4|Isuzu,Amigo|Isuzu,Ascender|Isuzu,Axiom|Isuzu,Hombre|Isuzu,I-Mark|Isuzu,Impulse|Isuzu,Oasis|Isuzu,Pickup|Isuzu,Rodeo|Isuzu,Rodeo Sport|Isuzu,Stylus|Isuzu,Trooper|Isuzu,Trooper II|Isuzu,VehiCROSS|Jaguar,S-Type|Jaguar,Vanden Plas|Jaguar,XJ Sport|Jaguar,XJ Super|Jaguar,XJ12|Jaguar,XJ6|Jaguar,XJ8|Jaguar,XJR|Jaguar,XJR-S|Jaguar,XJS|Jaguar,XK8|Jaguar,XKR|Jaguar,X-Type|Jeep,Cherokee|Jeep,CJ|Jeep,Comanche Pickup|Jeep,Grand Cherokee|Jeep,Grand Wagoneer|Jeep,J10 Pickup|Jeep,J20 Pickup|Jeep,Liberty|Jeep,Wagoneer|Jeep,Wrangler|Kia,Optima|Kia,Rio|Kia,Sedona|Kia,Sephia|Kia,Sorento|Kia,Spectra|Kia,Sportage|Land Rover,Defender 110|Land Rover,Defender 90|Land Rover,Discovery|Land Rover,Discovery Series II|Land Rover,Freelander|Land Rover,Range Rover|Lexus,ES 250|Lexus,ES 300|Lexus,GS 300|Lexus,GS 400|Lexus,GS 430|Lexus,IS 300|Lexus,LS 400|Lexus,LS 430|Lexus,LX 450|Lexus,LX 470|Lexus,RX 300|Lexus,SC 300|Lexus,SC 400|Lexus,SC 430|Lincoln,Aviator|Lincoln,Blackwood|Lincoln,Continental|Lincoln,LS|Lincoln,Mark VII|Lincoln,Mark VIII|Lincoln,Navigator|Lincoln,Town Car|Mazda,6|Mazda,323|Mazda,626|Mazda,929|Mazda,B2000|Mazda,B2200|Mazda,B2300|Mazda,B2500|Mazda,B2600|Mazda,B3000|Mazda,B4000|Mazda,GLC|Mazda,Miata MX-5|Mazda,Millenia|Mazda,MPV|Mazda,MX-3|Mazda,MX-6|Mazda,Navajo|Mazda,Protege|Mazda,Protege5|Mazda,RX-7|Mazda,Tribute|Mercedes-Benz,1.90E-14|Mercedes-Benz,190D|Mercedes-Benz,190E|Mercedes-Benz,260E|Mercedes-Benz,300CD|Mercedes-Benz,300CE|Mercedes-Benz,300D|Mercedes-Benz,300E|Mercedes-Benz,300SD|Mercedes-Benz,300SDL|Mercedes-Benz,300SE|Mercedes-Benz,300SEL|Mercedes-Benz,300SL|Mercedes-Benz,300TD|Mercedes-Benz,300TE|Mercedes-Benz,350SD|Mercedes-Benz,350SDL|Mercedes-Benz,380SE|Mercedes-Benz,380SL|Mercedes-Benz,400E|Mercedes-Benz,400SE|Mercedes-Benz,400SEL|Mercedes-Benz,420SEL|Mercedes-Benz,500E|Mercedes-Benz,500SEC|Mercedes-Benz,500SEL|Mercedes-Benz,500SL|Mercedes-Benz,560SEC|Mercedes-Benz,560SEL|Mercedes-Benz,560SL|Mercedes-Benz,600SEC|Mercedes-Benz,600SEL|Mercedes-Benz,600SL|Mercedes-Benz,C-Class|Mercedes-Benz,CL-Class|Mercedes-Benz,CLK-Class|Mercedes-Benz,E-Class|Mercedes-Benz,G-Class|Mercedes-Benz,M-Class|Mercedes-Benz,ML-Class|Mercedes-Benz,S-Class|Mercedes-Benz,SL-Class|Mercedes-Benz,SLK-Class|Mercury,Capri|Mercury,Cougar|Mercury,Grand Marquis|Mercury,Lynx|Mercury,Marauder|Mercury,Marquis|Mercury,Mountaineer|Mercury,Mystique|Mercury,Sable|Mercury,Topaz|Mercury,Tracer|Mercury,Villager|Merkur,Scorpio|Merkur,XR4Ti|MINI,Cooper|Mitsubishi,3000GT|Mitsubishi,Cordia|Mitsubishi,Diamante|Mitsubishi,Eclipse|Mitsubishi,Expo|Mitsubishi,Galant|Mitsubishi,Galant Sigma|Mitsubishi,Lancer|Mitsubishi,Minivan|Mitsubishi,Mirage|Mitsubishi,Montero|Mitsubishi,Montero Sport|Mitsubishi,Outlander|Mitsubishi,Pickup|Mitsubishi,Precis|Mitsubishi,Sigma|Mitsubishi,Starion|Mitsubishi,Tredia|Nissan,200SX|Nissan,240SX|Nissan,300ZX|Nissan,350Z|Nissan,Altima|Nissan,Axxess|Nissan,Frontier|Nissan,Maxima|Nissan,Minivan|Nissan,Murano|Nissan,NX|Nissan,Pathfinder|Nissan,Pickup|Nissan,Pulsar|Nissan,Quest|Nissan,Sentra|Nissan,Stanza|Nissan,Xterra|Oldsmobile,88|Oldsmobile,98|Oldsmobile,Achieva|Oldsmobile,Alero|Oldsmobile,Aurora|Oldsmobile,Bravada|Oldsmobile,Calais|Oldsmobile,Ciera|Oldsmobile,Custom Cruiser|Oldsmobile,Cutlass|Oldsmobile,Cutlass Cruiser|Oldsmobile,Cutlass Supreme|Oldsmobile,Delta 88|Oldsmobile,Firenza|Oldsmobile,Intrigue|Oldsmobile,LSS|Oldsmobile,Omega|Oldsmobile,Regency|Oldsmobile,Silhouette|Oldsmobile,Toronado|Peugeot,405|Peugeot,505|Peugeot,604|Peugeot,Liberte|Pininfarina,Azzurra|Plymouth,Acclaim|Plymouth,Breeze|Plymouth,Caravelle|Plymouth,Colt|Plymouth,Colt Vista|Plymouth,Conquest|Plymouth,Gran Fury|Plymouth,Grand Voyager|Plymouth,Horizon|Plymouth,Laser|Plymouth,Neon|Plymouth,Prowler|Plymouth,Reliant|Plymouth,Sundance|Plymouth,Turismo|Plymouth,Voyager|Pontiac,1000|Pontiac,6000|Pontiac,2000 Sunbird|Pontiac,Aztek|Pontiac,Bonneville|Pontiac,Fiero|Pontiac,Firebird|Pontiac,Grand Am|Pontiac,Grand Prix|Pontiac,LeMans|Pontiac,Montana|Pontiac,Parisienne|Pontiac,Phoenix|Pontiac,Safari|Pontiac,Sunbird|Pontiac,Sunfire|Pontiac,Trans Sport|Pontiac,Vibe|Porsche,911|Porsche,924|Porsche,928|Porsche,944|Porsche,968|Porsche,Boxster|Renault,Fuego|Renault,Sportwagon|Saab,900|Saa,9000|Saa,3-Sep|Saab,5-Sep|Saturn,Ion|Saturn,L100|Saturn,L200|Saturn,L300|Saturn,LS|Saturn,LS1|Saturn,LS2|Saturn,LW1|Saturn,LW2|Saturn,LW200|Saturn,LW300|Saturn,SC|Saturn,SC1|Saturn,SC2|Saturn,SL|Saturn,SL1|Saturn,SL2|Saturn,SW1|Saturn,SW2|Saturn,VUE|Sterlig,825|Sterling,827|Subaru,Baja|Subaru,Brat|Subaru,DL|Subaru,Forester|Subaru,GL|Subaru,GL-10|Subaru,Impreza|Subaru,Justy|Subaru,Legacy|Subaru,Loyale|Subaru,Outback|Subaru,RX|Subaru,STD|Subaru,SVX|Subaru,XT|Subaru,XT6|Suzuki,Aerio|Suzuki,Esteem|Suzuki,Grand Vitara|Suzuki,Samurai|Suzuki,Sidekick|Suzuki,Swift|Suzuki,Vitara|Suzuki,X-90|Suzuki,XL-7|Toyota,4Runner|Toyota,Avalon|Toyota,Camry|Toyota,Celica|Toyota,Celica Supra|Toyota,Corolla|Toyota,Cressida|Toyota,Echo|Toyota,Highlander|Toyota,Land Cruiser|Toyota,Matrix|Toyota,Minivan|Toyota,MR2|Toyota,MR2 Spyder|Toyota,Paseo|Toyota,Pickup|Toyota,Previa|Toyota,Prius|Toyota,RAV4|Toyota,Sequoia|Toyota,Sienna|Toyota,Solara|Toyota,Starlet|Toyota,Supra|Toyota,T100|Toyota,Tacoma|Toyota,Tercel|Toyota,Tundra|Volkswagen,Cabrio|Volkswagen,Cabriolet|Volkswagen,Corrado|Volkswagen,Eurovan|Volkswagen,Fox|Volkswagen,Golf|Volkswagen,Golf III|Volkswagen,GTI|Volkswagen,Jetta|Volkswagen,Jetta III|Volkswagen,New Beetle|Volkswagen,New Cabrio|Volkswagen,New Golf|Volkswagen,New GTI|Volkswagen,New Jetta|Volkswagen,New Passat|Volkswagen,Passat|Volkswagen,Quantum|Volkswagen,Rabbit|Volkswagen,Scirocco|Volkswagen,Vanagon|Volvo,240|Volvo,740|Volvo,760|Volvo,780|Volvo,850|Volvo,940|Volvo,960|Volvo,C70|Volvo,Coupe|Volvo,DL|Volvo,GL|Volvo,GLT|Volvo,S40|Volvo,S60|Volvo,S70|Volvo,S80|Volvo,S90|Volvo,Turbo|Volvo,V40|Volvo,V70|Volvo,V90|Volvo,XC70|Yugo,Cabrio|Yugo,GV|Yugo,GVL|Yugo,GVS|Yugo,GVX|Yugo,Hatchback";