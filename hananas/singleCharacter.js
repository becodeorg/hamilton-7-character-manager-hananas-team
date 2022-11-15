import './style.css';
import { fetchAllData, fetchSingleData, deleteSingleData } from './axios';

const displaySingleCharacter = async () => {
    try{
        // GET URL PARAMETERS
        let getURL = window.location.search;
        let urlParams = new URLSearchParams(getURL);
        const id = urlParams.get('id');
        // GET CHARACTER DATA BY ID
        const data = await fetchSingleData(id);

        // SELECT DOCUMENTS ELEMENT TO CHANGE
        let characterImage= document.querySelector("#character-image");
        let characterName = document.querySelector("#character-name");
        let characterLGdescription = document.querySelector("#character-fdescription");
        let characterSMdescription = document.querySelector("#character-sdescription");
        let deleteBtn = document.querySelector("#character-delete");
        let deleteAlert = document.querySelector("#delete-alert");


        // APPLY API DATA TO ELEMENTS
        characterName.innerText =data.name;
        characterSMdescription.innerText= data.shortDescription;
        characterLGdescription.innerText = data.description
        characterImage.src = `data:image/gif;base64,${data.image}`;

        //DELETE CHARACTER WHEN CLICK ON BUTTON
        
        deleteBtn.addEventListener("click", async ()=>{
            const dataDeleted = await deleteSingleData(id);
            alert("You have deleted the character, go back to the homepage to overview the others characters");
        });

    }
    catch(error){
        console.log("Wrong Request");
    }
}

displaySingleCharacter();