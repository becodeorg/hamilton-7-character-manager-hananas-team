import axios from 'axios';

const APIurl = "https://character-database.becode.xyz/characters";


const displayCharacter = async () => {
    try{
        const response = await axios
        .get(APIurl)
        .then((res) =>{
            let nData = res.data.length;
            console.log(nData);
            for(let i=0; i<nData; i++){
                let characterImage= document.querySelector("#character-image");
                let characterName = document.querySelector("#character-name");
                let characterCard = document.querySelector("#character-card");
                let CardContainer = document.querySelector("#character-page");
                let characterSMdescription = document.querySelector("#character-sdescription");

                characterName.innerText =res.data[i].name;
                characterSMdescription.innerText= res.data[i].shortDescription;
                characterImage.src = `data:image/gif;base64,${res.data[i].image}`;
                let cloneCard = characterCard.cloneNode(true);

                CardContainer.appendChild(cloneCard);
            }
            
        })


    }
    catch(error){
        console.log("Wrong Request")
    }
};

displayCharacter();


//

function commande(nom, argument) {
  if (typeof argument === "undefined") {
    argument = ""; // Exécuter la commande
  }
  document.execCommand(nom, false, argument); // pour écrire du texte et le mettre en forme.
}

