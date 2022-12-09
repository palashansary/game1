// let box = document.getElementsByClassName('box');

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let randomNum = document.getElementById('random');
let reset= document.getElementById('reset');

let heading = document.getElementById('heading');
let number = document.getElementById('number');

let score = document.getElementById('score');

score.innerHTML=" Your Score : 0"

let scoreNum=0;


randomNum.addEventListener('click',generateRandom);




let array =[box1,box2,box3];



console.log(array[2].innerHTML);





function generateRandom(){


    // array[random1].innerHTML="";

     let random = Math.floor(Math.random()*3)+0;

     var random1= Math.floor(Math.random()*10)+0;

    array[random].innerHTML=random1;

    heading.innerHTML="Where is the number : ";
    number.innerHTML=random1;

    console.log(heading.innerHTML);

    box1.style.backgroundColor='antiquewhite';
    box2.style.backgroundColor='antiquewhite';
    box3.style.backgroundColor='antiquewhite';

    box1.style.color='antiquewhite';
    box2.style.color='antiquewhite';
    box3.style.color='antiquewhite';

    


}

if(randomNum){
    box1.addEventListener('click',check1);
}



function check1(){

    if(box1.innerHTML==number.innerHTML)
    {
        box1.style.backgroundColor='green';
        box2.style.backgroundColor='red';
        box3.style.backgroundColor='red';

        box1.style.color='white';

        box2.innerHTML="";
        box3.innerHTML="";

        scoreNum=scoreNum+5;

        score.innerHTML=" Your Score : "+ scoreNum;

       
    }
    else{
        box1.style.backgroundColor='red';

        box1.innerHTML="";

        if(box2.innerHTML==number.innerHTML)
        {
            box2.style.backgroundColor='green';

            box3.innerHTML="";

            box2.style.color='white';
        }
        else
        {
            box2.innerHTML="";
            box3.style.backgroundColor='green';

            box3.style.color='white';
        }

         scoreNum=scoreNum-5;
         score.innerHTML=" Your Score : "+ scoreNum;
    }
}


box2.addEventListener('click',check2);

function check2(){

    if(box2.innerHTML==number.innerHTML)
    {
        box2.style.backgroundColor='green';
        box1.style.backgroundColor='red';
        box3.style.backgroundColor='red';

        box2.style.color='white';

        box1.innerHTML="";
        box3.innerHTML="";

        scoreNum=scoreNum+5;

        score.innerHTML=" Your Score : "+ scoreNum;

    }
    else{
        box2.style.backgroundColor='red';

        box2.innerHTML="";

        if(box1.innerHTML==number.innerHTML)
        {
            box1.style.backgroundColor='green';

            box1.style.color='white';

            box3.innerHTML="";
        }
        else
        {
            box1.innerHTML="";
            box3.style.backgroundColor='green';

            box3.style.color='white';
        }

         scoreNum=scoreNum-5;
        score.innerHTML=" Your Score : "+ scoreNum;
    }
}


box3.addEventListener('click',check3);

function check3(){

    if(box3.innerHTML==number.innerHTML)
    {
        box3.style.backgroundColor='green';
        box1.style.backgroundColor='red';
        box2.style.backgroundColor='red';

        box3.style.color='white';

        box1.innerHTML="";
        box2.innerHTML="";

        scoreNum=scoreNum+5;

        score.innerHTML=" Your Score : "+ scoreNum;

    }
    else{
        box3.style.backgroundColor='red';

        box1.innerHTML="";

        if(box1.innerHTML==number.innerHTML)
        {
            box1.style.backgroundColor='green';

            box1.style.color='white';

            box2.innerHTML="";
        }
        else
        {
            box1.innerHTML="";
            box2.style.backgroundColor='green';

            box2.style.color='white';
        }

         scoreNum=scoreNum-5;
         score.innerHTML=" Your Score : "+ scoreNum;
    
    }
}









reset.addEventListener('click',resetEverything);

function resetEverything(){

      array[0].innerHTML="";  
      array[1].innerHTML="";
      array[2].innerHTML="";

      box1.style.backgroundColor= 'antiquewhite';
      box2.style.backgroundColor='antiquewhite';
      box3.style.backgroundColor='antiquewhite';

      heading.innerHTML= "Where is the number : ";
      number.innerHTML="";
      scoreNum=0;

      score.innerHTML="Score : "+  scoreNum;
    
      


}

