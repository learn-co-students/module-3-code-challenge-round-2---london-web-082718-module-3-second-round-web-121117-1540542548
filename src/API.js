class API {

  static init() {
    this.beersUrl = 'http://localhost:3000/beers'
 
  }

  static getBeers() {
    return fetch(this.beersUrl)
      .then(resp => resp.json())
  }

  static editBeer (id, editedBeerDesc) {             
    return fetch(`${this.beersUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        description: editedBeerDesc
      })
    }).then(resp => resp.json())
  }

}

API.init()