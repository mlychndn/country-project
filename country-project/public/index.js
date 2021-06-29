document.getElementById('country').innerHTML =`<div class="spinner-border text-success" role="status">
<span class="visually-hidden">Loading...</span>
</div>`
axios
  .get("http://localhost:8080/api/v1/countries")
  .then((response) => {
    console.log(response);
    document.getElementById('country').innerHTML = ""
    ADDcard(response.data.data.data);
  })
  .catch((err) => (document.getElementById("country").innerHTML = `<div  class="alert alert-danger"  role="alert">
  ${err}
</div>`));

//ADD COUNTRIES

function ADDcard(d) {
  for (let i = 0; i < d.length; i++) {
    let node = `<div class="card" style="width: 18rem;"> <img src="../${d[i].flag}" class="card-img-top" alt="..."> <div class="card-body"> <p class="fs-1">${d[i].name}</p> <p class="fs-3">Continent :${d[i].continent}</p> <br> <p class="fs-3">Rank :${d[i].rank}</p> <br>  </div> </div>`;
    let cardnode = document.createElement("DIV");
    cardnode.innerHTML = node;
    document.getElementById("country").appendChild(cardnode);
  }
}

function sendcountry() {
  window.scrollTo(0,document.body.scrollHeight);
  console.log("added")
   axios
    .post("http://localhost:8080/api/v1/countries", {
      name,
      continent,
      rank,
      flag
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err)); 
}


var loadFile = function(event) {
  let name = document.getElementById("name").value.toString();
  let continent = document.getElementById("continent").value.toString();
  let rank = document.getElementById("rank").value;
 
  
    let node = `<div class="card" style="width: 18rem;"> <img src="" class="card-img-top" alt="img" id="output"> <div class="card-body"> <p class="fs-1">${name}</p> <p class="fs-3">Continent :${continent}</p> <br> <p class="fs-3">Rank :${rank}</p> <br>  </div> </div>`;
    let cardnode = document.createElement("DIV");
    cardnode.innerHTML = node;
    document.getElementById("country").appendChild(cardnode);
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
  
};