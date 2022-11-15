import './style.css';
import { fetchAllData } from './axios';


const displayCharacter = async () => {
    try{
        const data = await fetchAllData();
        // LOOP TO CLONE THE FIRST DIV TEMPLATE AND APPLY TO EACH THE CHARACTERISTICS
        for(let i=0; i<data.length; i++){
            let characterImage= document.querySelector("#character-image");
            let characterName = document.querySelector("#character-name");
            let characterCard = document.querySelector("#character-card");
            let CardContainer = document.querySelector("#character-page");
            let CardButton = document.querySelector("#card-button");
            let characterSMdescription = document.querySelector("#character-sdescription");

            characterName.innerText =data[i].name;
            characterSMdescription.innerText= data[i].shortDescription;
            characterImage.src = `data:image/gif;base64,${data[i].image}`;
            CardButton.href = `./src/single_character.html?id=${data[i].id}`;
            let cloneCard = characterCard.cloneNode(true);

            CardContainer.appendChild(cloneCard);
        }
        // REMOVE THE FIRST CLONED DIV
        document.querySelector('#character-page').firstElementChild.remove();
        
        
    
            
    }
    catch(error){
        console.log("Wrong Request")
    }
};

displayCharacter();
