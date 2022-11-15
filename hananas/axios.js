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

// Upload image 

// const file = document.querySelector("#fileId");
// var base64String = "";
// function Uploaded() {
//   var file = document.querySelector("#fileId")["files"][0];
//   var reader = new FileReader();
//   reader.onload = function () {
//     base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
//     imageBase64Stringsep = base64String;
//   };
//   reader.readAsDataURL(file);
// }

// file.addEventListener("change", () => {
//   Uploaded();
// });
// console.log(dataArray);
// // OTHER
// const spinner = document.querySelector(".spinner");

