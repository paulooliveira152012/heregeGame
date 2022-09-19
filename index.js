

//variable for the main card where the game will happen
var mainCard = document.querySelector('#mainCard');
//variable for referencing the button. when clicked random card wil appear and next button
var startBtn = document.querySelector('#iniciar');
//variable for the main
var main = document.querySelector('#main')

//when button is clicked 'main' changes to blue
startBtn.addEventListener("click", start);


var characters = []


//start the game
function start() {

    
    if(main.style.backgroundColor = "red") {
        main.style.backgroundColor = "blue";
        startBtn.style.display = "none"
    } 

    //create an h2 stating the initial card
    const playerCard = document.createElement('p');
    //Defining what's written
    playerCard.innerHTML = `Sua carta do jogo sera:`;
    //styling p variable
    playerCard.style.backgroundColor = 'blue';
    playerCard.style.fontSize = '30px';
    playerCard.style.textAlign = 'center';
    playerCard.style.color = 'white';
    //attach to main section
    main.appendChild(playerCard)

    //create a div where a random initial card will be displayed PINK!
    const initialCard = document.createElement('div');
    // add classList
    initialCard.classList.add('test');
    // attach to the main section
    main.appendChild(initialCard);


    //container where images will be displayed
    const imagePlaceHolder = document.createElement('img');
    imagePlaceHolder.style.width = ('200px');
    imagePlaceHolder.style.height = ('200px');
    imagePlaceHolder.style.background = ('purple');
    imagePlaceHolder.classList.add('myPicture');
    
    

    //characters card
    //array with all the images
    var charactersImages = new Array ("photos/cold.jpg", "photos/david.jpg", "photos/freirinha.jpg", "photos/itachi.jpg")
    
    //function to randomly choose an image
    function choosePic() {
        var randomNum = Math.floor(Math.random() * charactersImages.length);
        imagePlaceHolder.src = charactersImages[randomNum]
    }

    initialCard.appendChild(imagePlaceHolder)


    


choosePic()

};











