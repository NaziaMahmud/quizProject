//toggle quiz or create

console.log('test')
$(".creationButt").click(function(){
    console.log('test');
    $("#title").addClass("hidden");
    $("#question-box").addClass("hidden");
    $("#createQuestion").removeClass("hidden");});

$("#quiz").click(function(){
    console.log('test');
    $("#createQuestion").addClass("hidden");
    $("#title").removeClass("hidden");
    $("#question-box").removeClass("hidden");
    //display question
    for( j = 0;j<questionList.length;j++ ){
        displayQuestion(questionList[j].question,questionList[j].option1, questionList[j].option2,questionList[j].option3,questionList[j].option4);

    }
    });
$("#submitAnswer").click(function(){
    $("input[type='radio']:checked")
});

let questionList = [];
let userAnswer = [];
let answers = [];
function displayQuestion(Q,a1,a2,a3,a4){
    //update question in html quiz section
    $("#question").text(Q);

    let alist =[a1,a2,a3,a4];
    let loopLength = alist.length
    //randomly place options in labels in html quiz section
    for (i = 0;i< loopLength;i++){
        let rnum = Math.floor(Math.random()*alist.length);
    
        document.querySelectorAll("#answers label")[i].innerHTML= `<input type="radio">${alist[rnum]}`;
        alist.splice(rnum,1);
    }
    
    
    



}
function createQuestion(Q,a1,a2,a3,a4){//a1 has to always be the correct answer
    return {
        question:Q,
        option1:a1,
        option2:a2,
        option3:a3,
        option4:a4,
        correct:a1,
    }
}

$("#submitQuestion").on("click",function(event){
    event.preventDefault();//prevent reload
    //grab info from from
    let quest = document.getElementById("iformCreateQuestion").value;
    console.log("value is"+ quest);
    let op1 = document.querySelectorAll("#formCreateQuestion input")[1].value;
    console.log("test"+op1);
    let op2 = document.querySelectorAll("#formCreateQuestion input")[2].value;
    console.log("test"+op2);
    let op3 = document.querySelectorAll("#formCreateQuestion input")[3].value;
    console.log("test"+op3);
    let op4 = document.querySelectorAll("#formCreateQuestion input")[4].value;
    console.log("test"+op4);
    //create question object
    let q1 = createQuestion(quest,op1,op2,op3,op4);
    //add question object to question list
    questionList.push(q1);

    console.log(questionList);
    //resets form after submission
    document.getElementById("formCreateQuestion").reset();
})

$("#submitAnswer").on("click",function(event){


})