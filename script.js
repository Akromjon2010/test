let fullData = [];
fullData = pokemons;

let pokemonList = document.getElementById("pokemon-list");

pokemons.forEach((pokemon, index) => {
  let li = document.createElement("li");
  li.classList.add("outline-box");
  li.innerHTML = `
        <div class="content-box">
        <div class="content-head">
            <span class="pokemon-number">#${index + 1}</span>
            <img class="pokemon-img"
                src="${pokemon.img}"
                alt="pokemon">
        </div>
        <div class="content-footer">
            <h3 class="pokemon-name">${pokemon.name}</h3>
            <div class="btns">
                <button class="btn grass">grass</button>
                <button class="btn poison">poison</button>
            </div>
        </div>
    </div>  
    `;
  pokemonList.appendChild(li);
  li.addEventListener("click", () => modalShow(pokemon.id));
});

let detailModal = document.getElementById("detail-modal");
let info = document.getElementById("info");

function modalShow(id) {
  console.log(id);
  detailModal.classList.add("show");

  let obj = pokemons.filter((item) => item.id === id)?.[0];
  console.log(obj);

  info.innerHTML = `
    <img src="./left-arrow_318-499690.png" alt="arrow" class="arrow">

    <h1 style="text-align: center;">${obj.name}</h1>
    <h4 class="pokemon-number1">#${obj.id}</h4>
    <img class="pokemon-img1"
    src="${obj.img}"
    alt="pokemon">
    <img src="https://pngimg.com/uploads/pokeball/pokeball_PNG19.png" alt="loader" class="loader1" width="120px">
    <div class="content-footer1">
    <div class="btns">
            <button class="btn grass">grass</button>
            <button class="btn poison">poison</button>
            </div>
        <h4 class="about">About</h4>
        <div class="W-H">
        <h6 class="weight">
        <img src="./6c552cb28db137c8fce25f28e4f2f5f4.png" alt="icon1" width="14px">
        Weight: 69 kg
        </h6>
        <h6 class="height">
        <img src="./4e1ecf28ce2b6c465bc05ed82048e51d.png" alt="icon2" width="20px">
        Height: 7 m
        </h6>
        </div>
        <h4 class="abilities">Abilities</h4>
        <div class="O-C">
        <h5 class="overgrow">overgrow</h5>
        <h5 class="chlorophyli">chlorophyli</h5>
        </div>
        <h4 class="baseStats">Base Stats</h4>
    <div class="hadsss">
    <h4 class="h">hp</h4>
    <h4 class="a">attack</h4>
    <h4 class="d">defense</h4>
    <h4 class="s-a">special-attack</h4>
    <h4 class="s-d">special-defense</h4>
    <h4 class="s">speed</h4>
    </div>

    <div class="line"></div>

    <div class="damages">
    <h4 class="number1">${obj.stats.hp}</h4>
    <h4 class="number2">${obj.stats.attack}</h4>
    <h4 class="number3">${obj.stats.defense}</h4>
    <h4 class="number4">${obj.stats.special_attack}</h4>
    <h4 class="number5">${obj.stats.special_defense}</h4>
    <h4 class="number6">${obj.stats.speed}</h4>
    </div>

    <div class="lines">
        <div class="box-line">
            <div class="line1" style="--x: ${obj.stats.hp}"></div>
        </div>
        <div class="box-line">
            <div class="line1" style="--x: ${obj.stats.attack}"></div>
        </div>
        <div class="box-line">
            <div class="line1" style="--x: ${obj.stats.defense}"></div>
        </div>
        <div class="box-line">
            <div class="line1" style="--x: ${obj.stats.special_attack}"></div>
        </div>
        <div class="box-line">
            <div class="line1" style="--x: ${obj.stats.special_defense}"></div>
        </div>
        <div class="box-line">
            <div class="line1" style="--x: ${obj.stats.speed}"></div>
        </div>
    </div>    
    
    `;
}

let overlay = document.getElementById("overlay");

overlay.addEventListener("click", () => {
  detailModal.classList.remove("show");
});

function search() {
  let input = document.getElementById("input");
  console.dir(input.value);
  console.log(fullData);

  let newData = fullData.filter((pokemon) =>
    pokemon.name.toUpperCase().includes(input.value.toUpperCase())
  );

  console.log(newData);

  pokemonList.innerHTML = null;

  newData.forEach((pokemon, index) => {
    let li = document.createElement("li");
    li.classList.add("outline-box");
    li.innerHTML = `
            <div class="content-box">
            <div class="content-head">
                <span class="pokemon-number">#${index + 1}</span>
                <img class="pokemon-img"
                    src="${pokemon.img}"
                    alt="pokemon">
            </div>
            <div class="content-footer">
                <h3 class="pokemon-name">${pokemon.name}</h3>
                <div class="btns">
                    <button class="btn grass">grass</button>
                    <button class="btn poison">poison</button>
                </div>
            </div>Aqwe5r6t"?:LKj.hgfdbxsvzaQEVBFkjl/:"

            
            ':POLKI_j.h,gvfcxbzvcewxDF/*+
`;
  });
}
