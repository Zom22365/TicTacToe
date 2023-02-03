const cellData = document.getElementsByClassName("cell-data");
const winArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let markPlayer = 0;
let player1 = [];
let player2 = [];
let arrayMark = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let namePlayer = "";

for (let i = 0; i < cellData.length; i++){
    cellData[i].addEventListener("click", function(event) {

        if(arrayMark[i] === 0){
            if(markPlayer%2 === 0 ){
                arrayMark[i] = 1;
                player1.push(i);
                cellData[i].style.background = "black";

                if(player1.length === 3){
                    player1.sort((a,b) => a-b);
                    for (let item of winArray){
                        if(item.toString() == player1.toString()){
                            document.getElementById("alertWinner").style.display="block";
                            document.getElementById("alert").innerHTML= namePlayer.value + " Win!";
                        }
                    }
                }
                
            }else{
                arrayMark[i] = 1;
                player2.push(i);
                cellData[i].style.background = "red";

                if(player2.length === 3){
                    player2.sort((a,b) => a-b);
                    for (let item of winArray){
                        if(item.toString() == player2.toString()){
                            document.getElementById("alertWinner").style.display="block";
                            document.getElementById("alert").innerHTML="Computer Win!";
                        }
                    }
                }
            }
            markPlayer += 1;
        }
        
    });
};

function beginGame(){
    namePlayer = document.getElementById("name");
    if(namePlayer.value !== ""){
        document.getElementsByClassName("infoUser")[0].style.display="none";
       
        document.getElementById("screenGame").style.display="block";
    }else{
        alert("Mời bạn nhập tên người chơi!");
    }
   
}

function restart(){
    document.getElementsByClassName("infoUser")[0].style.display="block";
    document.getElementById("screenGame").style.display="none";
    document.getElementById("alertWinner").style.display="none";
    document.getElementById("name").value = "";
    markPlayer = 0;
    player1 = [];
    player2 = [];
    arrayMark = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    namePlayer = "";
    for (let i = 0; i < cellData.length; i++){
        cellData[i].style.background = " aquamarine";
    }
}
