import axios from 'axios';

const APIurl = "https://character-database.becode.xyz/characters";

const displayCharacter = async () => {
    try{
        const response = await axios
        .get(APIurl)
        .then((res) =>{
                // COLLECT THE NUMBER OF CARD IN DATA
                let nData = res.data.length;
                // LOOP TO CLONE THE FIRST DIV TEMPLATE AND APPLY TO EACH THE CHARACTERISTICS
                for(let i=0; i<nData; i++){
                    let characterImage= document.querySelector("#character-image");
                    let characterName = document.querySelector("#character-name");
                    let characterCard = document.querySelector("#character-card");
                    let CardContainer = document.querySelector("#character-page");
                    let CardButton = document.querySelector("#card-button");
                    let characterSMdescription = document.querySelector("#character-sdescription");

                    characterName.innerText =res.data[i].name;
                    characterSMdescription.innerText= res.data[i].shortDescription;
                    characterImage.src = `data:image/gif;base64,${res.data[i].image}`;
                    CardButton.href = `http://localhost:5173/src/single_character.html?id=${res.data[i].id}`;
                    let cloneCard = characterCard.cloneNode(true);

                    CardContainer.appendChild(cloneCard);
                }
                // REMOVE THE FIRST CLONED DIV
                document.querySelector('#character-page').firstElementChild.remove();     
            })
    
            
    }
    catch(error){
        console.log("Wrong Request")
    }
};

displayCharacter();

