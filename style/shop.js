const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// get class product and list product
const getList = $$('.section-shop__left--list li a')
const getProducts = $$('.product')
const getBtnMua = $('.modal-product__content--btn')
const getModalProduct = $('.section-shop__modal')
const getBtnClose = $('.modal-product__content--close')

getProducts.forEach((item)=>{
   item.onclick = function() {
      let imgProduct = item.querySelector('.product__img img').getAttribute('src')
      let nameProduct = item.querySelector('.product__title').innerText
      let priceProduct = item.querySelector('.product__price').innerText

      let getModalImg = getModalProduct.querySelector('.modal-product__img img')
      let getModalTitle = getModalProduct.querySelector('.modal-product__content--title')
      let getModalPrice = getModalProduct.querySelector('.modal-product__content--price')

      getModalProduct.style.display = 'block'
      getModalImg.setAttribute('src',imgProduct)
      getModalTitle.innerText = nameProduct
      getModalPrice.innerText = priceProduct
   }
})

getModalProduct.onclick = function() {
   getModalProduct.style.display = 'none'
}
getBtnClose.onclick = function() {
   getModalProduct.style.display = 'none'
}

// set eventListener for list procduct
getList.forEach((item) => {
   item.onclick = function() {
      $('.section-shop__left--list li a.u-active').classList.remove('u-active')
      this.classList.add('u-active')
   }
})

