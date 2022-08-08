var fifty = 50
var fiveh = 500;
var twofive = 2500;
var tenk = 10000;
var hunk = 100000;
var million = 1000000;




$(document).ready(function(){

    if(localStorage.money3){
        localStorage.money3;
    } else{
        localStorage.money3 = 0;
    }

    if(localStorage.userName0){
        localStorage.userName0;
    } else{
        localStorage.userName0 = prompt("Please input your username.");
    }

    document.getElementById("name").innerText = localStorage.userName0;

    document.getElementById("balance").innerText = localStorage.money3 + ".00";

    $("#allmoneym").text("$" + localStorage.money3);

    $("#fifty").click(function(){
        localStorage.money3 = Number(localStorage.money3) + fifty;
        document.getElementById("balance").innerText = localStorage.money3 + ".00";
    });

    $("#fifeh").click(function() {
        localStorage.money3 = Number(localStorage.money3) + fiveh;
        document.getElementById("balance").innerText = localStorage.money3 + ".00"; 
    });

    $("#twofife").click(function() {
        localStorage.money3 = Number(localStorage.money3) + twofive;
        document.getElementById("balance").innerText = localStorage.money3 + ".00"; 
    });

    $("#tenk").click(function() {
        localStorage.money3 = Number(localStorage.money3) + tenk;
        document.getElementById("balance").innerText = localStorage.money3 + ".00"; 
    });

    $("#hundredk").click(function() {
        localStorage.money3 = Number(localStorage.money3) + hunk;
        document.getElementById("balance").innerText = localStorage.money3 + ".00"; 
    });

    $("#million").click(function() {
        localStorage.money3 = Number(localStorage.money3) + million;
        document.getElementById("balance").innerText = localStorage.money3 + ".00"; 
    });


    


    $("#fiftym").click(function(){
        if (Number(localStorage.money3) >= fifty){
            localStorage.money3 = Number(localStorage.money3) - fifty;
            document.getElementById("balance").innerText = localStorage.money3 + ".00";
            withDraw();

        }
        else{
            Swal.fire('Invalid withdraw amount');
        }
    });

    $("#fifehm").click(function() {
        if (Number(localStorage.money3) >= fiveh){
            localStorage.money3 = Number(localStorage.money3) - fiveh;
            document.getElementById("balance").innerText = localStorage.money3 + ".00"; 
            withDraw();

        } else{
            Swal.fire('Invalid withdraw amount');
        }
    });

    $("#twofifem").click(function() {
        if (Number(localStorage.money3) >= twofive){
            localStorage.money3 = Number(localStorage.money3) - twofive;
            document.getElementById("balance").innerText = localStorage.money3 + ".00"; 
            withDraw();

        }else{
            Swal.fire('Invalid withdraw amount');
        }
    });

    $("#tenkm").click(function() {
        if (Number(localStorage.money3) >= tenk){
            localStorage.money3 = Number(localStorage.money3) - tenk;
            document.getElementById("balance").innerText = localStorage.money3 + ".00";
            withDraw();
            

        } else{
            Swal.fire('Invalid withdraw amount');
        }
    });

    $("#hundredkm").click(function() {
        if (Number(localStorage.money3) >= hunk){
            localStorage.money3 = Number(localStorage.money3) - hunk;
            document.getElementById("balance").innerText = localStorage.money3 + ".00"; 
            withDraw();
            
        } else{
            Swal.fire('Invalid withdraw amount');
            
        }
    });

    $("#allmoneym").click(function() {
        if (Number(localStorage.money3) != 0){
            localStorage.money3 = Number(localStorage.money3) - localStorage.money3;
            document.getElementById("balance").innerText = localStorage.money3 + ".00"; 
            withDraw();
        } else{}
    });

    $("#oke").click(function() {
       try{
        if (document.getElementById("input").value > 0 && document.getElementById("input").value <= 9999999999){
            localStorage.money3 = Number(localStorage.money3) + Math.round(parseFloat(document.getElementById("input").value));
            document.getElementById("balance").innerText = localStorage.money3 + ".00"; 
            deposit();
        } else if(document.getElementById("input").value <= 0){
            Swal.fire('Please input a value higher than 0');
        } else if(document.getElementById("input").value > 9999999999){
            Swal.fire('Please input a value lower than 10 Billion')
        }
       } catch (error){
            Swal.fire('Invalid Input');
       }
    });
    
    
});


function destroyElement(event){
    document.body.removeChild(event.target);
}

function withDraw(){
    var link = document.createElement("a");
    link.href = "withdrawn.html";
    link.onclick = destroyElement;
    link.style.display = "none";
    document.body.appendChild(link);

    link.click();
}

function deposit(){
    var link = document.createElement("a");
    link.href = "deposited.html";
    link.onclick = destroyElement;
    link.style.display = "none";
    document.body.appendChild(link);

    link.click();
}