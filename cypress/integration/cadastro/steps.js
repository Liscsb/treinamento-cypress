import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import * as actions from "../../common/actions";
import { Strings } from "../../common/strings";
import * as element  from "../../support/locators/cadastro";
import util from "../../support/util";


Given(/^usuario na pagina inicial do sistema$/, () => {
  actions.navigation().visitBugerEats()
});

When(/^opta por realizar o cadastro$/, () => {
  actions.element().clique(element.cadastro.btnCadastrar)
});

When(/preenche o nome "([^"]*)"$/, (nome) => {
  actions.element().digite(element.cadastro.fieldNome, nome)
});

When(/preenche CEP valido$/, () => {
  actions.element().digite(element.cadastro.fieldCep, '40420000')
  actions.element().clique(element.cadastro.btnBuscarCep)
});

Then(/^o texto "([^"]*)" estara visivel$/, (texto) => {
  actions.element().validarTexto(element.cadastro.textoHome, texto)
});

When(/^seleciona o metodo de entrega "([^"]*)"$/, (metodoEntrega) => {
  actions.element().cliqueElementoContendoTexto(element.cadastro.metodoEntrega, metodoEntrega)
});

When(/^anexa a foto da CNH$/, () => {
  actions.element().anexarArquivo(element.cadastro.inputFile, Strings.anexos.fotoCNH)
});

When(/preenche dados válidos$/, () => {
  actions.element().digite(element.cadastro.fieldNome, util.geraNomeAleatorio())
  actions.element().digite(element.cadastro.fieldCpf, util.geraCpfAleatorio())
  actions.element().digite(element.cadastro.fieldEmail, Strings.dadosValidosEntregador.email)
  actions.element().digite(element.cadastro.fieldWhatsapp, Strings.dadosValidosEntregador.whatsapp)
});
