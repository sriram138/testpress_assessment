var pos=0,board,qus,status,choices,A,B,C,cor=0;
var questions=[["shortcut of copy","ctrl+a","ctrl+b","ctrl+c","c"],["my name is","kumar","sriram","akash","b"],["ha","lslsk","i","hshhs","b"]];

function display()
{
  	board=document.getElementById("board");
  	if(pos>=questions.length)
  	{
  		board.innerHTML="<h2>You Got"+cor+"of"+questions.length+"</h2>";
  		document.getElementById("status").innerHTML="quiz completed";
      pos=0;
      cor=0;
      return false
  	}
  	document.getElementById("status").innerHTML="question"+(pos+1)+"of"+questions.length;
  	qus=questions[pos][0];
  	A=questions[pos][1];
  	B=questions[pos][2];
  	C=questions[pos][3];
  	board.innerHTML="<h3>"+qus+"</h3>";
  	board.innerHTML+="<lable><input type='radio' name='choices' value='A'>"+A+"</lable>";
  	board.innerHTML+="<lable><input type='radio' name='choices' value='B'>"+B+"</lable>";
    board.innerHTML+="<lable><input type='radio' name='choices' value='C'>"+C+"</lable>";
    board.innerHTML+="<button onclick='check()'>Submit</button>";
}
function check()
{
  board=document.getElementById("board");
  var choice;
  choices=document.getElementsByName("choices");
  for(var i=0;i<choices.length;i++)
  {
    if(choices[i].checked)
    {
      choice=choices[i].value;


    }
  }
  if(choice==questions[pos][4])
  {
    cor++;
  }
  pos++;
  display();
  }
  