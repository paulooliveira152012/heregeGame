

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
    //styling initial card
    initialCard.style.width = '250px';
    initialCard.style.height = '500px';
    initialCard.style.backgroundColor = 'pink';
    initialCard.style.margin = 'auto';
    initialCard.style.display = 'flex';
    initialCard.style.flexDirection = 'column';
    initialCard.style.justifyContent = 'space-around';

    //creating top section for initial card
    const topSection = document.createElement('div');
    topSection.style.width = '100%';
    topSection.style.height = '250px';
    topSection.style.backgroundColor = 'green';
    //appending to initial card
    initialCard.appendChild(topSection)

    //creating bottom section for initial card
    const bottomSection = document.createElement('div');
    bottomSection.style.width = '100%';
    bottomSection.style.height = '250px';
    bottomSection.style.backgroundColor = 'black';
    //appending to initial card
    initialCard.appendChild(bottomSection)

    // attach initialCard to the main section
    main.appendChild(initialCard);


    //container where images will be displayed
    const imagePlaceHolder = document.createElement('img');
    imagePlaceHolder.style.width = ('100%');
    imagePlaceHolder.style.height = ('auto');
    imagePlaceHolder.style.background = ('purple');
    // imagePlaceHolder.classList.add('myPicture');
    
                
    // //characters card

    // //array with all the images
    var charactersImages = new Array ("photos/cold.jpg", "photos/david.jpg", "photos/freirinha.jpg", "photos/itachi.jpg")
    
    //function to randomly choose an image
    function choosePic() {
        var randomNum = Math.floor(Math.random() * charactersImages.length);
        imagePlaceHolder.src = charactersImages[randomNum]

        console.log(randomNum)

        if(randomNum == 0) {
            window.alert('cold')
        }else if(randomNum == 1) {
            window.alert('david')
        }else if(randomNum == 2) {
            window.alert('freirinha')
        }else if(randomNum == 3) {
            window.alert('itachi')
        }

        topSection.appendChild(imagePlaceHolder)
    }


    // //create card 
    // //create card div
    // const card = document.createElement('div');
    // card.style.width = ('100%');
    // card.style.height = ('100%');
    // card.style.backgroundColor = ('yellow');
    // // card.style.marginTop = ('250px')
    // // append card to 'initialCard'
    // bottomSection.appendChild(card)


    //function to add info to cold
    function coldInfo() {
        const attributes = [`Heresia = ${100} `, `Grego = ${70}`, `Teologia = ${400}`, `Historicidade = ${300}`, `Uncao = ${50}`]

        for(let i = 0; i < attributes.length; i++) {
            const list = document.createElement('li')
            // list.style.innerHTML = attributes.length
            list.innerText = attributes[i];

            list.style.color= 'black'
            list.style.backgroundColor=('yellow')

            //append list to bottomSection
            bottomSection.appendChild(list)
        }
    }
    
    coldInfo()
    
    


choosePic()

};












