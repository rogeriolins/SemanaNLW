//fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/").then(function(res) { console.log(res.json()) }).then(function(data) { console.log(data) })

function populateUFs() {
  const stateUfSelect = document.querySelector("select[name=uf]");
  // const stateUfName = document.querySelector("input[name=statename]");
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
    .then((res) => {
      return res.json();
    })
    .then((states) => {
      for (const state of states) {
        stateUfSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
      }
    });
}

populateUFs();

//https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios

function getCitys(event) {
  const citySelect = document.querySelector("select[name=city]");
  const stateInputName = document.querySelector("input[name=statename]");

  const ufValue = event.target.value;

  const indexOfSelectedState = event.target.selectedIndex;
  stateInputName.value = event.target.options[indexOfSelectedState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;
  fetch(url)
    .then((res) => res.json())
    .then((citys) => {
      for (const city of citys) {
        citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`;
      }
      citySelect.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCitys);
