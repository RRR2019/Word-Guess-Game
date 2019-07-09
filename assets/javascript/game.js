var words = ["mario", "link", "donkeykong", "snake", "peach", "samus", "yoshi", "pikachu", "pacman", "zelda", "bowser", "megaman"];
var validKeys =["a","b","c","d","e","f","g","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var word = words[Math.floor(Math.random() * words.length)];
var answer = [];
//var eachLetter = "";
var remainingGuess = 10;
var newGuess = document.getElementById("guess");
var remGuess = document.getElementById("guessRemain");
var noLetters = document.getElementById("lettersGuessed");
var wrongLetters = [];
var music;

//run underscores function
underscores();




//Functions
function underscores() {
    //var eachLetter = word.split(" ");
    //console.log(eachLetter);
    for (var i = 0; i < word.length; i++) {
        answer.push("_");
    }

    newGuess.innerHTML = answer.join(" ");

}


function check(letter) {
    var flag=true;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            answer[i] = letter;
            console.log(answer);
            newGuess.innerHTML = answer.join(" ");
            flag=false;
            completeWord();
            
        }
        
             
    }
   
    if(flag){
        wrongLetters.push(letter);
        console.log(wrongLetters);
        noLetters.innerHTML= wrongLetters.join(" ");
        remainingGuess--;
        remGuess.innerHTML=remainingGuess;
        flag=true;

    }

}
        function newWord() {
            wrongLetters = [];
            remainingGuess = 10;
            answer = [];
            word = words[Math.floor(Math.random() * words.length)];
            underscores();

        }

        function completeWord() {
            if (word.toString() == answer.join("").toString()) {
                wrongLetters = [];
                remainingGuess = 10;
                noLetters.innerHTML=" ";
                remGuess.innerHTML=10;
                win();
                
                }
            else if(remainingGuess===0){
                wrongLetters = [];
                remainingGuess = 10;
                alert("GAME OVER");
                document.getElementById("randomPic").src="./assets/images/start.gif";
                noLetters.innerHTML=" ";
                remGuess.innerHTML=10;
                newWord();
                }   
            }
            function win(){
                var mario=document.getElementById("mario");
                var bowser=document.getElementById("bowser");
                var donkey=document.getElementById("donkeykong");
                var link=document.getElementById("link");
                var megaman=document.getElementById("megaman");
                var pacman=document.getElementById("pacman");
                var pikachu=document.getElementById("pikachu");
                var peach=document.getElementById("peach");
                var samus=document.getElementById("samus");
                var snake=document.getElementById("snake");
                var yoshi=document.getElementById("yoshi");
                var zelda=document.getElementById("zelda");

                if(word.toString()==="mario"){
                    document.getElementById("randomPic").src="./assets/images/mario.png";
                    mario.play();
                    bowser.pause();
                    donkey.pause();
                    link.pause();
                    megaman.pause();
                    pacman.pause();
                    pikachu.pause();
                    peach.pause();
                    samus.pause();
                    snake.pause();
                    yoshi.pause();
                    zelda.pause();

                }
                if(word.toString()==="bowser"){
                    document.getElementById("randomPic").src="./assets/images/bowser.png";
                    mario.pause();
                    bowser.play();
                    donkey.pause();
                    link.pause();
                    megaman.pause();
                    pacman.pause();
                    pikachu.pause();
                    peach.pause();
                    samus.pause();
                    snake.pause();
                    yoshi.pause();
                    zelda.pause();
                }
                if(word.toString()==="donkeykong"){
                    document.getElementById("randomPic").src="./assets/images/donkeykong.png";
                    mario.pause();
                    bowser.pause();
                    donkey.play();
                    link.pause();
                    megaman.pause();
                    pacman.pause();
                    pikachu.pause();
                    peach.pause();
                    samus.pause();
                    snake.pause();
                    yoshi.pause();
                    zelda.pause();
                }
                if(word.toString()==="link"){
                    document.getElementById("randomPic").src="./assets/images/link.png";
                    mario.pause();
                    bowser.pause();
                    donkey.pause();
                    link.play();
                    megaman.pause();
                    pacman.pause();
                    pikachu.pause();
                    peach.pause();
                    samus.pause();
                    snake.pause();
                    yoshi.pause();
                    zelda.pause();
                }
                if(word.toString()==="megaman"){
                    document.getElementById("randomPic").src="./assets/images/megaman.png";
                    mario.pause();
                    bowser.pause();
                    donkey.pause();
                    link.pause();
                    megaman.play();
                    pacman.pause();
                    pikachu.pause();
                    peach.pause();
                    samus.pause();
                    snake.pause();
                    yoshi.pause();
                    zelda.pause();
                }
                if(word.toString()==="pacman"){
                    document.getElementById("randomPic").src="./assets/images/pacman.jpg";
                    mario.pause();
                    bowser.pause();
                    donkey.pause();
                    link.pause();
                    megaman.pause();
                    pacman.play();
                    pikachu.pause();
                    peach.pause();
                    samus.pause();
                    snake.pause();
                    yoshi.pause();
                    zelda.pause();
                }
                if(word.toString()==="pikachu"){
                    document.getElementById("randomPic").src="./assets/images/pikachu.png";
                    mario.pause();
                    bowser.pause();
                    donkey.pause();
                    link.pause();
                    megaman.pause();
                    pacman.pause();
                    pikachu.play();
                    peach.pause();
                    samus.pause();
                    snake.pause();
                    yoshi.pause();
                    zelda.pause();
                }
                if(word.toString()==="peach"){
                    document.getElementById("randomPic").src="./assets/images/peach.png";
                    mario.pause();
                    bowser.pause();
                    donkey.pause();
                    link.pause();
                    megaman.pause();
                    pacman.pause();
                    pikachu.pause();
                    peach.play();
                    samus.pause();
                    snake.pause();
                    yoshi.pause();
                    zelda.pause();
                }
                if(word.toString()==="samus"){
                    document.getElementById("randomPic").src="./assets/images/samus.jpg";
                    mario.pause();
                    bowser.pause();
                    donkey.pause();
                    link.pause();
                    megaman.pause();
                    pacman.pause();
                    pikachu.pause();
                    peach.pause();
                    samus.play();
                    snake.pause();
                    yoshi.pause();
                    zelda.pause();
                }
                if(word.toString()==="snake"){
                    document.getElementById("randomPic").src="./assets/images/snake.jpg";
                    mario.pause();
                    bowser.pause();
                    donkey.pause();
                    link.pause();
                    megaman.pause();
                    pacman.pause();
                    pikachu.pause();
                    peach.pause();
                    samus.pause();
                    snake.play();
                    yoshi.pause();
                    zelda.pause();
                }
                if(word.toString()==="yoshi"){
                    document.getElementById("randomPic").src="./assets/images/yoshi.jpg";
                    mario.pause();
                    bowser.pause();
                    donkey.pause();
                    link.pause();
                    megaman.pause();
                    pacman.pause();
                    pikachu.pause();
                    peach.pause();
                    samus.pause();
                    snake.pause();
                    yoshi.play();
                    zelda.pause();
                }
                if(word.toString()==="zelda"){
                    document.getElementById("randomPic").src="./assets/images/zelda.jpg";
                    mario.pause();
                    bowser.pause();
                    donkey.pause();
                    link.pause();
                    megaman.pause();
                    pacman.pause();
                    pikachu.pause();
                    peach.pause();
                    samus.pause();
                    snake.pause();
                    yoshi.pause();
                    zelda.play();
                }
                newWord();
                
        }

        

        //Key press and start check function
        document.onkeyup = function (event) {
            var guesses = String.fromCharCode(event.keyCode).toLowerCase();
            
            check(guesses);
            completeWord();
            console.log(word);
            console.log(answer);
            //console.log(wrongLetters);
            console.log(remainingGuess);
        
        }




