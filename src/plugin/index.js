'use strict';
import FndInput1 from './FndInput.vue'

import {canDecimal,onlyInteger} from '../directives'

 
const FndInput = {
  install (Vue) {
    Vue.component('fnd-input', FndInput1)
    Vue.directive('only-integer',onlyInteger)
    Vue.directive('can-decimal',canDecimal)
  }
}
 
export default FndInput