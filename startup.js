
$(document).ready(function(){

$('html').css('display', 'none');
    $('html').fadeIn(3000); 
  
    });    
  
  var isAudioPlayed = false;



        function playAudio() {
            
            isAudioPlayed = true;
            const myAudio = document.getElementById("startup");
            myAudio.play();
        }


        document.body.onclick = ()=>{
            if(isAudioPlayed) return ;
            playAudio(); 
        }
