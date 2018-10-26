const beerList = document.getElementById('list-group')
const beerDetails = document.getElementById('beer-detail')
let beersNotFromServer

function appendBeers(beers) {
  beers.forEach(beer => appendBeer(beer))
  
}

function appendBeer(beer) {
  const beerItem = renderBeer(beer)
  beerList.appendChild(beerItem)
}

function renderBeer(beer) {
  const beerItem = document.createElement('li')
  beerItem.classList.add('list-group-item')
  beerItem.innerHTML = beer.name
  beerItem.id = `list-item-${beer.id}`

  beerItem.addEventListener('click', () => {
    beerDetails.innerHTML = ''
    beerDetails.innerHTML = `
    <h1>${beer.name}/h1>
    <img src="${beer.image_url}">
    <h3>${beer.tagline}</h3>
    <textarea id="beer-desc">${beer.description}</textarea>
    `
    const saveButtonEl = document.createElement('button')
    saveButtonEl.classList.add('btn-btn-info')
    saveButtonEl.innerText = 'Save'
    beerDetails.appendChild(saveButtonEl)

    saveButtonEl.addEventListener('click', () => {
      // console.log(beer.id) // works
      // beerDetails.firstElementChild.nextElementSibling.nextElementSibling.value
      // need tosave description to the server
      // need to render the new description (which is is in the text area) to the client page
      API.editBeer(beer.id, beerDetails.firstElementChild.nextElementSibling.nextElementSibling.value)
    })

  })
  return beerItem
}
  


API.getBeers()
  .then(beersFromServer => {
    beersNotFromServer = beersFromServer
    appendBeers(beersFromServer)
  })