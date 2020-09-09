/// <reference path="./typings/globals/jquery/index.d.ts" />

let listItem = $('#itemsList');



 $('#addBtn').click((e)=>{
 var itemUser = $('#itemInput').val();
  let item = $(`<li >${itemUser}  <button class="btn btn-danger delete">X</button></li>`);
  item.appendTo(listItem);
  clearForm();
  e.preventDefault();  // stop default behaviour
});

$(document).on('click','.delete',function(){
  $(this).parents('li').remove();
});

let item= document.getElementById("itemInput");
function clearForm()
{
    item.value=""; 

}

var playSound = new Audio();
playSound.src ="./song.mp3";
let myVar;
$('.music').hover(function () {
  
    $('.Second_section').addClass('ColorChange');
    playSound.play();
//   myVar= setInterval(function ()
//     {
//         R=Math.round(Math.random()*255);
//         G=Math.round(Math.random()*255);
//         B=Math.round(Math.random()*255);
//         $('.Second_section').css("backgroundColor",`rgb(${R},${G},${B})`);
//     },600);



 });
 
$('.music').mouseleave(function () {
    
    
    // $('.Second_section').css("backgroundColor","white");
    // clearInterval(myVar);
 $('.Second_section').removeClass('ColorChange');
  playSound.pause();
  enableLoop();

});


function enableLoop() {
  playSound.loop = true;
}

let colors=["red","green","blue"]
for(let i=0; i<colors.length; i++)
{
    $(".RGB").eq(i).hover(()=>
    {
        $("#Fourth_section").css("backgroundColor",`${colors[i]}`);
        $(".RGB").eq(i).css("box-shadow","10px 5px 8px #ffffff");
    });

    $(".RGB").eq(i).mouseleave(()=>
    {
        $("#Fourth_section").css("backgroundColor","white");
        $(".RGB").eq(i).css("box-shadow","0px 0px 0px #ffffff");
        
    });

}
let namealert=$("#namealert");   
let emailalert=$("#emailalert");
let phonealert=$("#phonealert")
let inputName=$("#name");
let emailName=$("#email");
let phoneNumber=$("#phone");


    
inputName.blur(()=>
{
    let regex_1=/^[a-z A-Z]{5,}/;
        if(regex_1.test(inputName.val())==true)
        {
            namealert.removeClass("d-block").addClass("d-none");
            inputName.removeClass("is-invalid");
            inputName.addClass("is-valid");
    
        }
        else
        {
            namealert.removeClass("d-none").addClass("d-block");
            inputName.removeClass("is-valid");
            inputName.addClass("is-invalid");
    
        }
    
})

emailName.blur(()=>
{
    let regex_2=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(regex_2.test(emailName.val())==true)
        {
            emailalert.removeClass("d-block").addClass("d-none");
            emailName.removeClass("is-invalid");
            emailName.addClass("is-valid");
    
        }
        else
        {
            emailalert.removeClass("d-none").addClass("d-block");
            emailName.removeClass("is-valid");
            emailName.addClass("is-invalid");
    
        }
});

phoneNumber.blur(()=>
{
    let regex_3=/^01[0125][0-9]{8}$/;
    if(regex_3.test(phoneNumber.val())==true)
        {
            phonealert.removeClass("d-block").addClass("d-none");
            phoneNumber.removeClass("is-invalid");
            phoneNumber.addClass("is-valid");
    
        }
        else
        {
            phonealert.removeClass("d-none").addClass("d-block");
            phoneNumber.removeClass("is-valid");
            phoneNumber.addClass("is-invalid");
    
        }
});
$('textarea').keypress(function () {
    let text_string = $("#exampleFormControlTextarea1").val(); 
    let lenthOfString = text_string.length;
    console.log(lenthOfString);
    if (lenthOfString < 30) {
        $(".msg").text(29 - (lenthOfString ) + "letter remaining");
    } else {
        $(".msg").text("finished");
       
    }
});
let late_date  = new Date("nov 1,2020 00:01:00").getTime();
let x = setInterval(function() {
let date_now = new Date().getTime();


var diffInSeconds = Math.abs(late_date-date_now) / 1000;
var days = Math.floor(diffInSeconds / 60 / 60 / 24);
var hours = Math.floor(diffInSeconds / 60 / 60 % 24);
var minutes = Math.floor(diffInSeconds / 60 % 60);
var seconds = Math.floor(diffInSeconds % 60);



  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if(diffInSeconds<= 0){
    clearInterval(x);
  }
},1000);




