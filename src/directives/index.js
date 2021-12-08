import {onlyInteger as integer, canDecimal as decimal} from '../tools'


export const onlyInteger = {
    inserted(el, bind, vnode) {
        const input = el.querySelector("input");
        input.addEventListener("input", function (e) {
          e.target.value = integer(e.target.value);
        },false);
      },
}

export const canDecimal = {
    inserted(el, bind, vnode) {
        const input = el.querySelector("input");
        const point = bind.arg||2
        input.addEventListener("input", function (e) {
          e.target.value = decimal(e.target.value,point);
        },false);
      },
}