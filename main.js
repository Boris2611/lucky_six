
var b = 0;




// Button press
function button(){
    new Audio('start.wav').play()
    

    document.getElementById("dugme2").style.visibility = "hidden";

  

    // Zove glavnu funkciju
    rand();

    
    interval = 300;
    myInterval = setInterval(izlazi, interval);
    
}

function stopInterval() {
    clearInterval(myInterval);
  }

  


var balance = 1000


function rand(){
    var xxx = 1
    // 35 random brojeva
    var arr = []
    while(arr.length < 35){
      var candidateInt = Math.floor(Math.random() * 48) + 1
      if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    } 


    // Balance
    balance = balance - document.getElementById("ulog").value;
    kvota = ["None", "None", "None", "None", "None",
            10000, 7500, 5000, 2500, 1000, 500, 300,
            200, 150, 100, 90, 80, 70, 60, 50, 40,
            30, 25, 20, 15, 10, 9, 8, 7, 6, 5, 4,
            3, 2, 1]


    // Vraca boju nazad u zutu pri pocetku svake igre
    for (var a = 0; a < 35;) {
    a += 1;
    id = "ball" + a;
    document.getElementById(id).style.visibility = "hidden";
    document.getElementById(id).style.backgroundColor = "yellow";
    document.getElementById(id).innerHTML = "...";
    
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

        // Ispis gubitnih brojeva
        else {
            var d = 1
            while (d < 36) {
                id = "ball" + d;
                
                document.getElementById(id).innerHTML = arr[d-1];
                
                
                d +=1;
            }
 
        }

        i += 1
        
       
      } 


      // Win / Lose provera
    var winlose = ""
    var length = dobitni.length;
    if (length == 6) {
        winlose = "DOBITAN"
        document.getElementById("win").style.color= "green";
    }
    else {
        winlose = "GUBITAN"
        document.getElementById("win").style.color= "red";
    }

    // Win / Lose prikaz
    document.getElementById("win").innerHTML = winlose
   


 
    
    // Provera koji brojevi su dobitni i promena njihove boje
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


     // Racunanje dobitka
     if (length == 6) {
        dobitak = document.getElementById("ulog").value * kvota[dk];
        setTimeout(alertt, 10060)
    }


    function alertt() {
        new Audio('win.wav').play()
        alert("Dobitak: " + dobitak + "\n Kvota: x" + kvota[dk])
        
    }

    balance = balance + dobitak
    xxx = 0
    // Prikaz novca za PC i telefon
    document.getElementById("winn").innerHTML ="Novac: " + balance;
    document.getElementById("winn2").innerHTML ="Novac: " + balance;
    

    
}

// timer funkcija
function izlazi() {
   
    
        
        
    


    b += 1;
    id = "ball" + b;
    document.getElementById(id).style.visibility = "visible";
    new Audio('click.wav').play()

    if (b == 35) {
        stopInterval();
        
        document.getElementById("dugme2").style.visibility = "visible";
        return b=0;

    

    }
}