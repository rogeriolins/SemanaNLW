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
  citySelect.innerHTML = "<option value=''>Selecione a cidade</option>";
  citySelect.disabled = true;

  fetch(url)
    .then((res) => res.json())
    .then((citys) => {
      for (const city of citys) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
      }
      citySelect.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCitys);

// Scripts para os itens de coleta

/* Coleção de todos os elementos li em uma constante */
const itemsToCollect = document.querySelectorAll(".items-grid li");
/* Adiciona um EventList em todos os itens e passando a callback
   de referencia
 */
for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}

const collectedItems = document.querySelector("input[name=items]");
let selectedItems = [];

function handleSelectedItem(event) {
  const itemLi = event.target;

  // Add ou Remove class with javascript
  itemLi.classList.toggle("selected");
  const itemId = itemLi.dataset.id;

  // console.log("ITEM ID: ");
  // console.log(itemId);

  /* Verificar se existem itens selecionados e se 
     existir pegar os itens */
  const alreadySelected = selectedItems.findIndex((item) => {
    return item == itemId;
    /* True or False então retorna a posição do 
        indice ou -1 quando não encontrar
     */
  });

  /* Se ja existe selecionado, remover */
  if (alreadySelected >= 0) {
    /* Remover */
    const filteredItems = selectedItems.filter((item) => {
      const itemIsDifferent = item != itemId;
      return itemIsDifferent;
    });
    selectedItems = filteredItems;
  } else {
    /* Se não estiver selecionado, adicinar a selecao */
    selectedItems.push(itemId);
  }
  // console.log(selectedItems);

  /* Atualizar o campo hidden com os itens */
  collectedItems.value = selectedItems;
}
