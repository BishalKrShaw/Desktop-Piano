const numberOfKeys = document.querySelectorAll(".keys").length;
const keys = document.querySelectorAll(".keys");

for(let i=0; i<numberOfKeys; i++) {

    keys[i].addEventListener("click", () => {

        let keyValue = keys[i].innerHTML;
        playTune(keyValue);
        btnAnimation(keyValue);

    });

}

document.addEventListener("keydown", (event) => {
    let keyVal = event.key;
    console.log(keyVal);
    playTune(keyVal);
    btnAnimation(keyVal);
});

const playTune = (keyVal) => {

    switch(keyVal) {
        case "q":
            let q = new Audio("Sound/C4.mp3");
            q.play();
            break;

        case "w":
            let w = new Audio("Sound/D4.mp3");
            w.play();
            break;
            
        case "e":
            let e = new Audio("Sound/E4.mp3");
            e.play();
            break;

        case "r":
            let r = new Audio("Sound/F4.mp3");
            r.play();
            break;

        case "t":
            let t = new Audio("Sound/G4.mp3");
            t.play();
            break;

        case "y":
            let y = new Audio("Sound/A4.mp3");
            y.play();
            break;

        case "u":
            let u = new Audio("Sound/B4.mp3");
            u.play();
            break;

        case "i":
            let i = new Audio("Sound/C5.mp3");
            i.play();
            break;   

        case "o":
            let o = new Audio("Sound/D5.mp3");
            o.play();
            break; 

        case "p":
            let p = new Audio("Sound/E5.mp3");
            p.play();
            break;    

        case "a":
            let a = new Audio("Sound/Db4.mp3");
            a.play();
            break;    

        case "s":
            let s = new Audio("Sound/Eb4.mp3");
            s.play();
            break;   

        case "d":
            let d = new Audio("Sound/Gb4.mp3");
            d.play();
            break;   

        case "f":
            let f = new Audio("Sound/Ab4.mp3");
            f.play();
            break; 

        case "g":
            let g = new Audio("Sound/Bb4.mp3");
            g.play();
            break;  

        case "h":
            let h = new Audio("Sound/Db5.mp3");
            h.play();
            break;

        case "j":
            let j = new Audio("Sound/Eb5.mp3");
            j.play();
            break;    
    }

}

const btnAnimation = (currentKey) => {
    let clickedBtn = document.querySelector("." + currentKey);
    clickedBtn.classList.add("pressed");

    setTimeout(function(){
        clickedBtn.classList.remove("pressed");
    }, 100);
}