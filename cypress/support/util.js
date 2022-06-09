/// <reference types="cypress" />

class util {

    geraNomeAleatorio() {
        let Chance = require('chance')
        let chanceName = new Chance().name();
        return chanceName
    }

    geraCpfAleatorio() {
        let Chance = require('chance')
        let chanceCpf = new Chance().cpf();
        return chanceCpf
    }

}
export default new util();