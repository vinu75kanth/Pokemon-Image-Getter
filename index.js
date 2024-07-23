async function getPok(){
    const pokName=document.getElementById("pokName").value.toLowerCase();
    const display=document.getElementById("display");
    try{
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokName}`);
        if(!data.ok){
            throw new Error("Pokemon Does not exist");
        }
        const jData = await data.json();
        const imgg = jData.sprites.front_default;
        display.style.display="block";
        display.src = imgg;
        display.alt=`Front Image of ${pokName}`;
    }
    catch(error){
        display.style.display="block";
        display.src="";
        display.alt=`${error}`;
    }
}