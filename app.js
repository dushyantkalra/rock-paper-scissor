const game = ()=>{
    let pScore = 0;
    let Cscore = 0;

    //Show the match Screen
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');
        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };
    const ComputerOptions = ["rock","paper","scissor"];
        const playerOptions = ["paper","scissor","rock"];
    //Play Match
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand=>{
            hand.addEventListener("animationend",function(){
                this.style.animation ="";
            });
            hand.addEventListener("animationstart",function(){
                this.src = `./assets/rock.png`;
            });
        })
        
        // Computer Options
        
        options.forEach(option=>{
            option.addEventListener('click',function(){
                const ComputerOption = Math.floor(Math.random()*3);
                const computerChoice = ComputerOptions[ComputerOption];
                
                setTimeout(()=>{
                    playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src =`./assets/${computerChoice}.png`;
                    compareHands(this.textContent,computerChoice);
                },2000)
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                
            })

        });
        // Player Options
        
    }
    //Decide Winner
    const compareHands = (playerChoice,computerChoice) =>{
        //Update text 
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = "It's a Tie";
            return;
        }
        if(playerOptions.indexOf(playerChoice) == ComputerOptions.indexOf(computerChoice)){
            winner.textContent = "Player Wins";
            pScore++;
            document.querySelector('.player-score p').textContent = pScore;

            return;
        }
        else{
            winner.textContent = "Computer Wins";
            Cscore++;
            document.querySelector('.computer-score p').textContent = Cscore;

            return ;
        }

    }

    startGame();
    playMatch();
}

game();