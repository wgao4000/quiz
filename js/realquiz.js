$(document).ready(function(){ 
  var values=["Get Started","submit your answer","next question","see your result","try again"];
  $(".holdplace").append(addbuttons(values));
  var score=0;
  var name1="question1";
  var q1part1="1. Many people have devised methods ___ they have measured time.";
  var q1choice1="which";
  var q1choice2="when";
  var q1choice3="with which";
  var q1choice4="in which";
  var q1choice5="where";
  var answer1="with which";
  var name2="question2";
  var q2part1="2. An archaeologist has found an ancient Egyptian town in Isreal ___ discovery suggests that Egyptian influence was wider than previously believed.";
  var q2choice1="who";
  var q2choice2="to whom";
  var q2choice3="where";
  var q2choice4="whose";
  var q2choice5="in which";
  var answer2="whose";
  var name3="question3";
  var q3part1="3. The suburbs are the places ___ many Americans moved to in the 1950s in the USA.";
  var q3choice1="which";
  var q3choice2="where";
  var q3choice3="in which";
  var q3choice4="of which";
  var q3choice5="whose";
  var answer3="which";
  var name4="question4";
  var q4part1="4. Scientists are doing research on remote ecosystems, ___ is the Arctic tundra.";
  var q4choice1="which";
  var q4choice2="that";
  var q4choice3="through which";
  var q4choice4="each of them";
  var q4choice5="one of which";
  var answer4="one of which";
  var name5="question5";
  var q5part1="5. Many people have devised methods ___ they have measured time.";
  var q5choice1="that observed";
  var q5choice2="which are observing";
  var q5choice3="being observed";
  var q5choice4="having observed";
  var q5choice5="whom observed";
  var answer5="being observed";
  var question1=new questions(name1,q1part1,q1choice1,q1choice2,q1choice3,q1choice4,q1choice5,answer1);
  var question2=new questions(name2,q2part1,q2choice1,q2choice2,q2choice3,q2choice4,q2choice5,answer2);
  var question3=new questions(name3,q3part1,q3choice1,q3choice2,q3choice3,q3choice4,q3choice5,answer3);
  var question4=new questions(name4,q4part1,q4choice1,q4choice2,q4choice3,q4choice4,q4choice5,answer4);
  var question5=new questions(name5,q5part1,q5choice1,q5choice2,q5choice3,q5choice4,q5choice5,answer5);
  $(".button01").hide();
  $(".button02").hide();
  $(".button11").hide();
  $(".button12").hide();
  $(".button21").hide();
  $(".button22").hide();
  $(".button31").hide();
  $(".button32").hide();
  $(".button41").hide();
  $(".button42").hide();
  $(".button51").hide();
  $(".button52").hide();
  $(".button000").click(function(){
  	  $(".startpg").hide();
  	  $(".introp").hide();
  	  $(".button00").hide();
      $(".button01").show();
  	  $(".holdplace").prepend("<h1>Quiz Question One</h1>"+question1.question_con());
  	  $("img").hide();
  });
  $(".button001").click(function(){
        score=ansquestion(question1,".button01",".button02",score);
     }
  );
  $(".button002").click(function(){
        nextquestion(question1,question2,".button02",".button11","Two",score);
    }
  );
  $(".button101").click(function(){
    	score=ansquestion(question2,".button11",".button12",score);
     }
  );
  $(".button102").click(function(){
       nextquestion(question2,question3,".button12",".button21","Three",score);
    }
  );
  $(".button201").click(function(){
    	  score=ansquestion(question3,".button21",".button22",score);
     }
  );
  $(".button202").click(function(){
       nextquestion(question3,question4,".button22",".button31","Four",score);
    }
  );
  $(".button301").click(function(){
    	  score=ansquestion(question4,".button31",".button32",score);
    }
  );
  $(".button302").click(function(){
       nextquestion(question4,question5,".button32",".button41","Five",score);
    }
  );
  $(".button401").click(function(){
    	  score=ansquestion(question5,".button41",".button42",score);
    }
  );
  $(".button402").click(function(){
       nextquestion(question5,question5,".button42",".button51","Zero",score);
     }
  );
  $(".button501").click(function(){
   	  $(".button51").hide();
   	  $("h1").hide();
   	  $(".result").hide();
   	  $("img").hide(); 
   	  $(".holdplace").prepend("<h1 class='startpg'>It's a English Grammer Quiz</h1><p class='introp'>We will test your english grammer here. Take a quiz to find out how well you know it.</p><img src='gm_en_g_1.png' alt='grammer picture'>");
   	  $(".button00").show();
   	  score=0;
   	  $(".answers").remove();
    }); 
  }
);
function addbuttons(values){
     var buttons="<div class='button00'><input type='submit' class='button000' value='"+values[0]+"'></div>";
     for(var i=0;i<4;i++){
      buttons+="<div class='button"+i+"1'><input type='submit' class='button"+i+"01' value='"+values[1]+"'></div>";
      buttons+="<div class='button"+i+"2'><input type='submit' class='button"+i+"02' value='"+values[2]+"'></div>";
     }
     buttons+="<div class='button41'><input type='submit' class='button401' value='"+values[1]+"'></div>";
     buttons+="<div class='button42'><input type='submit' class='button402' value='"+values[3]+"'></div>";
     buttons+="<div class='button51'><input type='submit' class='button501' value='"+values[4]+"'></div>";
     return buttons;
}
function questions(name,part1,choice1,choice2,choice3,choice4,choice5,answer){
	this.name=name;
	this.part1=part1;
	this.choice1=choice1;
	this.choice2=choice2;
	this.choice3=choice3;
	this.choice4=choice4;
	this.choice5=choice5;
	this.answer=answer;
	this.question_con=function(){
       var content="<p>Choose the appropriate options to complete the sentence.</p><div class='Question1'>"+part1+"<br><input type='radio' name='"+name+"'value='"+choice1+"'>"+choice1+"<br><input type='radio' name='"+name+"'value='"+choice2+"'>"+choice2+"<br><input type='radio' name='"+name+"' value='"+choice3+"'>"+choice3+"<br><input type='radio' name='"+name+"' value='"+choice4+"'>"+choice4+"<br><input type='radio' name='"+name+"'value='"+choice5+"'>"+choice5+"<br>"; 
       return content;
  };
}
function nextquestion(q1,q2,bu1,bu2,qnum,score){
	  $("input:radio[name="+q1.name+"]:checked").removeAttr('checked');
      $(bu1).hide();
   	  $("h1").hide();
   	  $("p").hide();
   	  $(".Question1").hide();
   	  $(bu2).show();
   	  if(qnum!="Zero")
        $(".holdplace").prepend("<h1>Quiz Question "+qnum+"</h1>"+q2.question_con());
      else
      	$(".holdplace").prepend("<h1>Congratulations! You have finished your quiz!</h1><div class='result'>Your score is "+score+" out of 5, "+score*20+"%.</div><img src='gm_en_g_1.png' alt='grammer picture'>");       
}
function ansquestion(q1,budiv1,budiv2,score){
     var selected=$("input:radio[name="+q1.name+"]").is(":checked");
       if(selected){
   	   	  var selected_val=$("input:radio[name="+q1.name+"]:checked").val();
   	   	  $(budiv1).hide();
   	   	  $(budiv2).show();
   	   	  if(selected_val==q1.answer){
            $(budiv2).append("<div class='answers'>Correct, good job!</div>");
            score+=1;
          }
          else
            $(budiv2).append("<div class='answers'>Sorry, your answer is incorrect.</div>");
          $("input:radio[name="+q1.name+"]").attr('disabled',true);
       }
  	   else
  	      alert("Please select an answer first."); 
  	   return  score;
}