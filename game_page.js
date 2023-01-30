player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0
player2_score = 0
document.getElementById("player1_name").innerHTML = player1_name+":";
document.getElementById("player2_name").innerHTML = player2_name+":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - "+player2_name;
function send(){
    Number1 = document.getElementById("word").value;
    Number2 = document.getElementById("word1").value;
    actual_answer = parseInt(Number1)*parseInt(Number2);
    console.log(actual_answer);
    question_number = "<h4>" + Number1 + "X" + Number2 + "</h4>";
    inputbox = "<br>Answer:<input type = 'text' id='inputCheckBox'>";
    checkButton = "<br><br> <button class = 'btn btn-primary' onclick = 'check()'>Check</button>";
    row = question_number + inputbox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("word1").value = "";
}


