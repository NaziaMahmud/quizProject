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
    });


let questionList = [];
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
    event.preventDefault();
    let quest = document.getElementById("iformCreateQuestion").value;
    console.log("value is"+ quest);
    let op1 = document.querySelectorAll("#formCreateQuestion input")[1].value;
    console.log("test"+op1)
    let op2 = document.querySelectorAll("#formCreateQuestion input")[2].value;
    console.log("test"+op2)
    let op3 = document.querySelectorAll("#formCreateQuestion input")[3].value;
    console.log("test"+op3)
    let op4 = document.querySelectorAll("#formCreateQuestion input")[4].value;
    console.log("test"+op4)
})


