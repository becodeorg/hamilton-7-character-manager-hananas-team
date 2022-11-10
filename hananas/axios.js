import axios from 'axios';

const APIurl = "https://character-database.becode.xyz/characters";

let characterImage= document.querySelector("#character-image");
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








        // forEach((item) => {
        //     const containerCharacter = document.createElement("div");
        //     containerCharacter.setAttribute("class", "container_character");
        //     container.appendChild(containerCharacter);

        //     const divImg = document.createElement("div");
        //     divImg.setAttribute("class", "divImg");
        //     containerCharacter.appendChild(divImg);

        //     const image = document.createElement("img");
        //     image.src = "data:image/png;base64, " + item.image;
        //     image.alt = "illustration";
        //     divImg.appendChild(image);

        //     const name = document.createElement("h2");
        //     name.textContent = item.name;
        //     containerCharacter.appendChild(name);

        //     const shortDescriprt = document.createElement("p");
        //     shortDescriprt.textContent = item.shortDescription;
        //     containerCharacter.appendChild(shortDescriprt);

        //     const linkProfile = document.createElement("button");
        //     linkProfile.setAttribute("class", "link_profile");
        //     linkProfile.textContent = "profile";
        //     containerCharacter.appendChild(linkProfile);
        // })