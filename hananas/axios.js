import axios from 'axios';

const APIurl = "https://character-database.becode.xyz/characters";

let characterImage = document.querySelector("#character-image");
let characterName = document.querySelector("#character-name");
let characterCard = document.querySelector("#character-card");
let characterSMdescription = document.querySelector("#character-sdescription");
let cloneCard = characterCard.cloneNode(true);






const displayCharacter = async () => {
    try{
        const response = await axios
        .get(APIurl)
        .then((res) =>{
            let nData = res.data.length;

            for(let i=0; i<nData; i++){
                cloneCard;
                characterName.innerText =res.data[i].name;
                characterSMdescription.innerText= res.data[i].shortDescription;
                characterImage.src = `data:image/gif;base64,${res.data[i].image}`;
                
            }
            // characterImage.setAttribute("id", `image${i}`);
            // characterName.setAttribute("id", `name${i}`);
            // characterSMdescription.setAttribute("id", `SMdescription${i}`);
            // console.log(i);
            
        })



    }
    catch(error){
        console.log("Wrong Request")
    }
};


displayCharacter();








        