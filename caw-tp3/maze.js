
window.onload = function() {
    
    var walls = document.querySelectorAll(".boundary");
 var end = document.getElementById("end");   
    var start = document.getElementById("start"); 
var lost = false;
 function markWallsRed() {
        walls.forEach(function(wall) {
            wall.classList.add("youlose");
        });
        status.textContent = "You lose!";
        lost = true;
        
    }

       end.addEventListener("mouseover", function() {
         if (!lost) {
            
            alert("You win!");
         }
     })
}

window.onload = function() {
    
    var walls = document.querySelectorAll(".boundary");    
    var end = document.getElementById("end");   
    var start = document.getElementById("start");    
    var status = document.getElementById("status");
   
    var lostgame = false;
    var game = false;


    
    function markWallsRed() {
        walls.forEach(function(wall) {
            wall.classList.add("youlose");
        });
        status.textContent = "You lose!";
        lostgame = true;
        
    }
   


      
       start.addEventListener("mouseover", function() {
        
        walls.forEach(function(wall) {
            wall.classList.remove("youlose");
        });
       
        lostgame = false;
        game = true;
        status.textContent = "";
    
    });
 

  
    walls.forEach(function(wall) {
        wall.addEventListener("mouseover", function() {
            if (game) {
                markWallsRed();
            }
        });
    });

   
    end.addEventListener("mouseover", function() {
        if (game && !lostgame) {
            status.textContent = "You win!";
        }
        game = false;
    });

 

  
    document.body.addEventListener("mouseleave", function() {
        if (game && !lostgame) {
            markWallsRed();
        }
    });
};
