const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const getList = $$('.section-shop__left--list li a')
const getFormLinkSign = $('.form__link#sign')
const getFormLinkRegist = $('.form__link#regist')
const getFormSign = $('.member__form--sign')
const getFormRegist = $('.member__form--regist')

getList.forEach((item) => {
   item.onclick = function() {
      $('.section-shop__left--list li a.u-active').classList.remove('u-active')
      this.classList.add('u-active')
   }
})

getFormLinkSign.onclick = function() {
   getFormSign.style.display = 'block'
   getFormRegist.style.display = 'none'
}

getFormLinkRegist.onclick = function() {
   getFormRegist.style.display = 'block'
   getFormSign.style.display = 'none'
}