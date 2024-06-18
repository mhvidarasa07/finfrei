import prompt from 'prompt-sync'
import { menu } from './menu.js'
import { depositar, exibirSaldo, sacar, simularInvestimento} from './financeiro.js'
import { boasVindas} from './exibicao.js'
import { SUCESSO,ERRO,ALERTA} from './cores.js'
let ler = prompt()

let Menu = ''
let saldoAtualizado = 0
do
{
    boasVindas()
    Menu = menu(` 
    Escolha uma das Opções: 
    1- Depositar
    2- Sacar
    3- Exibir Saldo
    4- Simular Investimento.
    5- Sair `)
    console.clear()
    if(Menu == 1){
        saldoAtualizado = depositar('Qual o valor do depósito?' , saldoAtualizado)
    } else if(Menu == 2){
        saldoAtualizado = sacar('Quantos voce deseja sacar?' , saldoAtualizado)
    } else if(Menu == 3){
        let Exibir = exibirSaldo('Seu saldo atual atual é de: ', saldoAtualizado)
        console.log(Exibir);
    } else if (Menu == 4) {
        
        let capitalInicial = Number(
          ler("Informe a capital inicial para simular o juros > ")
        );
    
        let tempo = Number(ler("Digite o tempo de investimento > "));
    
        let juros = Number(ler("Digite o juros > "));
    
        let investimentoTotal = simularInvestimento(capitalInicial, tempo, juros);
    
        console.log(SUCESSO, `O investimento total é de ${investimentoTotal}`);

    }
} while(Menu != 5)
console.log('FIM DO PROGRAMA.')