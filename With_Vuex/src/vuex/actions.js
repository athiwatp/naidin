export const initApp = function ({ dispatch, state }) {
  this.$http.get('http://localhost:3333/api/getall').then((response) => {
    console.log(response.body)
    // success callback
    dispatch('INITIAL', response.body)
  }, (response) => {
    // error callback
    dispatch('init', [])
  })
}

export const addToCart = function ({ dispatch }, item) {
  dispatch('ADD_TO_CART', item)
}
