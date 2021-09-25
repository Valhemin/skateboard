const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// get class form, btn sign and regist
const getFormLinkSign = $('.form__link#sign a')
const getFormLinkRegist = $('.form__link#regist a')
const getFormSign = $('.member__form--sign')
const getFormRegist = $('.member__form--regist')

getFormLinkSign.onclick = function() {
   getFormSign.style.display = 'block'
   getFormRegist.style.display = 'none'
}

getFormLinkRegist.onclick = function() {
   getFormRegist.style.display = 'block'
   getFormSign.style.display = 'none'
}