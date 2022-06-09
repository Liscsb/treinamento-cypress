#language: pt
@cadastro
Funcionalidade: Realizar cadastro de novo entregador
Eu como usuário do Buger Eats
Desejo cadastrar-me como entregador
Para que possa desfrutar das funcionalidades deste tipo de usuário

Esquema do Cenario: Realizar cadastro de novo entregador com sucesso
    Dado usuario na pagina inicial do sistema
    Então o texto "Seja um parceiro entregador pela Buger Eats" estara visivel
    Quando opta por realizar o cadastro
    E preenche o nome "Lisandra São Bernardo"
    E preenche CEP valido
    E seleciona o metodo de entrega "<metodoEntrega>"

    Exemplos:
    | metodoEntrega |
    | Moto          |
    | Bicicleta     |
    | Van/Carro     |

Esquema do Cenario: Realizar cadastro de novo entregador com sucesso
    Dado usuario na pagina inicial do sistema
    Então o texto "<texto>" estara visivel
    Quando opta por realizar o cadastro
    E preenche o nome "<nome>"
    E preenche CEP valido
    E seleciona o metodo de entrega "<metodoEntrega>"

    Exemplos:
        | nome                  | texto                                       | metodoEntrega |
        | Lisandra São Bernardo | Seja um parceiro entregador pela Buger Eats | Moto          |
        | Jéssica Sousa         | Seja um parceiro entregador pela Buger Eats | Bicicleta     |
        | Maria das Dores       | Seja um parceiro entregador pela Buger Eats | Van/Carro     |

Cenario: Realizar cadastro de novo entregador com sucesso
    Dado usuario na pagina inicial do sistema
    Então o texto "Seja um parceiro entregador pela Buger Eats" estara visivel
    Quando opta por realizar o cadastro
    E preenche dados válidos
    E preenche CEP valido
    E seleciona o metodo de entrega "Moto"
