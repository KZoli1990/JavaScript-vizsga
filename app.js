const input = document.getElementById("title");




document.getElementById("btn").addEventListener("click",()=>{
    if(input.value == ""){
        huszGetPokemon()
    }else{
        singlePokemon()
    }
})



async function huszGetPokemon(){
    await fetch ("https://pokeapi.co/api/v2/pokemon/")
        .then(res=>res.json())
        .then(res=>{
            //console.log(res);

            const data = res.results;
            console.log(data);

            let output ="";

            data.forEach((poke)=> {
                
               
                output +=  `
                                <ul>
                                    <li><h4>${poke.name}</h4></li>
                                    <li><a href="${poke.url}">${poke.url}</a></li>
                                    <li><hr><li>
                                </ul>`
                        
            });

            const image = document.getElementById("image");
            image.src ="";
            image.classList.remove("image");

            document.getElementById("poke-name").innerHTML = "";
            document.getElementById("poke-name").classList.remove("hr");

            document.getElementById("poké-result").innerHTML = output;
        })
}

async function singlePokemon(){
    const resolve = await fetch (`https://pokeapi.co/api/v2/pokemon/${input.value}`);
        const pokedat = await resolve.json();
        
        const image = document.getElementById("image")
        image.src = pokedat.sprites.front_default;
        image.classList.add("image");

        document.getElementById("poke-name").innerHTML = pokedat.name;
        document.getElementById("poke-name").classList.add("hr");
        document.getElementById("poké-result").innerHTML ="";
        input.value = "";
        
}