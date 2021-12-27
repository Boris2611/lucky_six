function button(){
    rand();
    
}



var balance = 1000
function rand(){
    var arr = []
    while(arr.length < 35){
      var candidateInt = Math.floor(Math.random() * 48) + 1
      if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }

    balance = balance - document.getElementById("ulog").value;

    kvota = ["None", "None", "None", "None", "None",
            10000, 7500, 5000, 2500, 1000, 500, 300,
            200, 150, 100, 90, 80, 70, 60, 50, 40,
            30, 25, 20, 15, 10, 9, 8, 7, 6, 5, 4,
            3, 2, 1]


    // Vraca boju nazad u zutu pri pocetku svake igre
    for (var a = 0; a < 35;) {
    a += 1;
    idd = "ball" + a;
    document.getElementById(idd).style.transform = "rotate(360deg)";
    document.getElementById(idd).style.backgroundColor = "yellow";
    document.getElementById(idd).style.visibility = "visible";
    
    }

            


    var dobitni = [];
    var dobitniIndexi = [];
    for (var i = 0; i < 35;) {
    
        if (arr[i] == document.getElementById("br1").value) {
            dobitni.push(arr[i])
            dobitniIndexi.push(i)
            
        }
        
        else if (arr[i] == document.getElementById("br2").value) {
            dobitni.push(arr[i])
            dobitniIndexi.push(i)
        }

        else if (arr[i] == document.getElementById("br3").value) {
            dobitni.push(arr[i])
            dobitniIndexi.push(i)
        }

        else if (arr[i] == document.getElementById("br4").value) {
            dobitni.push(arr[i])
            dobitniIndexi.push(i)
        }

        else if (arr[i] == document.getElementById("br5").value) {
            dobitni.push(arr[i])
            dobitniIndexi.push(i)
        }

        else if (arr[i] == document.getElementById("br6").value) {
            dobitni.push(arr[i])
            dobitniIndexi.push(i)
        }

        else {
            document.getElementById("ball1").innerHTML = arr[0];
            document.getElementById("ball2").innerHTML = arr[1];
            document.getElementById("ball3").innerHTML = arr[2];
            document.getElementById("ball4").innerHTML = arr[3];
            document.getElementById("ball5").innerHTML = arr[4];
            document.getElementById("ball6").innerHTML = arr[5];
            document.getElementById("ball7").innerHTML = arr[6];
            document.getElementById("ball8").innerHTML = arr[7];
            document.getElementById("ball9").innerHTML = arr[8];
            document.getElementById("ball10").innerHTML = arr[9];
            document.getElementById("ball11").innerHTML = arr[10];
            document.getElementById("ball12").innerHTML = arr[11];
            document.getElementById("ball13").innerHTML = arr[12];
            document.getElementById("ball14").innerHTML = arr[13];
            document.getElementById("ball15").innerHTML = arr[14];
            document.getElementById("ball16").innerHTML = arr[15];
            document.getElementById("ball17").innerHTML = arr[16];
            document.getElementById("ball18").innerHTML = arr[17];
            document.getElementById("ball19").innerHTML = arr[18];
            document.getElementById("ball20").innerHTML = arr[19];
            document.getElementById("ball21").innerHTML = arr[20];
            document.getElementById("ball22").innerHTML = arr[21];
            document.getElementById("ball23").innerHTML = arr[22];
            document.getElementById("ball24").innerHTML = arr[23];
            document.getElementById("ball25").innerHTML = arr[24];
            document.getElementById("ball26").innerHTML = arr[25];
            document.getElementById("ball27").innerHTML = arr[26];
            document.getElementById("ball28").innerHTML = arr[27];
            document.getElementById("ball29").innerHTML = arr[28];
            document.getElementById("ball30").innerHTML = arr[29];
            document.getElementById("ball31").innerHTML = arr[30];
            document.getElementById("ball32").innerHTML = arr[31];
            document.getElementById("ball33").innerHTML = arr[32];
            document.getElementById("ball34").innerHTML = arr[33];
            document.getElementById("ball35").innerHTML = arr[34];
           
        }

        i += 1
        
       
      } 

   


    var winlose = ""
    let length = dobitni.length;
    if (length == 6) {
        winlose = "DOBITAN"
        document.getElementById("win").style.color= "green";
    }
    else {
        winlose = "GUBITAN"
        document.getElementById("win").style.color= "red";
    }

    
 

    document.getElementById("win").innerHTML = winlose


    var length2 = dobitniIndexi.length;
    y = 0
    var id = ""
    var dobitak = 0;
    while (y < length2) {
        id = "ball" + (dobitniIndexi[y]+1).toString()
        document.getElementById(id).style.backgroundColor = "limegreen";
        y += 1
        if (length == 6) {
            document.getElementById(id).style.backgroundColor = "green";
            var dk = [];
            dk.push(dobitniIndexi[y - 1]);
        }
    }



            
    if (length == 6) {
        dobitak = document.getElementById("ulog").value * kvota[dk];
        alert("Dobitak: " + dobitak + "\n Kvota: x" + kvota[dk])
    }
       


    balance = balance + dobitak

    

    document.getElementById("winn").innerHTML ="Novac: " + balance;
    document.getElementById("winn2").innerHTML ="Novac: " + balance;
    
    

    
  }

 