for(var i=0;i<document.querySelectorAll(".key").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
       sound(this.innerHTML);
       animation(this.innerHTML);

    });
}


document.addEventListener("keypress",function(event){

    keyboard(event.key);

    animation(event.key)
    
})

function sound(note){
    switch(note){

        case "C":
            var sa= new Audio("sounds/C3.mp3");
            sa.play();
            break;

        case "C#":
            var sa2= new Audio("sounds/Db3.mp3");
            sa2.play();
            break;

        case "D":
            var ri= new Audio("sounds/D3.mp3");
            ri.play();
            break;

        case "D#":
            var ri2= new Audio("sounds/Eb3.mp3");
            ri2.play();
            break;
        
        case "E":
            var ga= new Audio("sounds/E3.mp3");
            ga.play();
            break;

        case "F":
             var ma= new Audio("sounds/F3.mp3");
            ma.play();
            break;

        case "F#":
            var ma2= new Audio("sounds/Gb3.mp3");
            ma2.play();
            break;

        case "G":
            var pa= new Audio("sounds/G3.mp3");
                pa.play();
                break;
        
        case "G#":
            var pa2= new Audio("sounds/Ab3.mp3");
            pa2.play();
            break;

        case "A":
            var da= new Audio("sounds/A3.mp3");
            da.play();
            break;
            
        case "A#":
            var da2= new Audio("sounds/Bb3.mp3");
            da2.play();
            break;
            
        case "B":
            var ni= new Audio("sounds/B3.mp3");
            ni.play();
            break;

        case "C2":
            var Sa2= new Audio("sounds/C4.mp3");
            Sa2.play();
            break;
            
        default:
             alert("NO SOUND");


    }

}

function keyboard(note){
    switch(note){

        case "a":
            var sa= new Audio("sounds/C3.mp3");
            sa.play();
            break;

        case "w":
            var sa2= new Audio("sounds/Db3.mp3");
            sa2.play();
            break;

        case "s":
            var ri= new Audio("sounds/D3.mp3");
            ri.play();
            break;

        case "e":
            var ri2= new Audio("sounds/Eb3.mp3");
            ri2.play();
            break;
        
        case "d":
            var ga= new Audio("sounds/E3.mp3");
            ga.play();
            break;

        case "f":
             var ma= new Audio("sounds/F3.mp3");
            ma.play();
            break;

        case "t":
            var ma2= new Audio("sounds/Gb3.mp3");
            ma2.play();
            break;

        case "g":
            var pa= new Audio("sounds/G3.mp3");
                pa.play();
                break;
        
        case "y":
            var pa2= new Audio("sounds/Ab3.mp3");
            pa2.play();
            break;

        case "h":
            var da= new Audio("sounds/A3.mp3");
            da.play();
            break;
            
        case "u":
            var da2= new Audio("sounds/Bb3.mp3");
            da2.play();
            break;
            
        case "j":
            var ni= new Audio("sounds/B3.mp3");
            ni.play();
            break;

        case "k":
            var Sa2= new Audio("sounds/C4.mp3");
            Sa2.play();
            break;
            
        default:
             alert("NO SOUND");


    }

}

function animation(key){
    var activeButton= document.querySelector('.'+key);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);

}



