import prompt from 'prompt-sync'
import { ERRO, SUCESSO } from './cores.js';
let ler = prompt()

export function depositar(msg, saldo){
    console.log(msg);
    let depositado = Number(ler())
    console.clear()
    while(depositado <= 0){
        console.log(ERRO,'Valor de deposito tem que ser maior que 0');
        depositado = Number(ler())
        console.clear()
    }
    console.clear()
    console.log(SUCESSO,`Depósito concluido com sucesso!`)
    console.log('Precione a tecla enter para continuar:')
    ler()
    console.clear()
    let novoSaldo = saldo + depositado
    return novoSaldo
}

export function sacar(msg, saldo){
    console.log(msg);
    let sacar = Number(ler())

    while(sacar <= 0){
        console.log(ERRO,'Valor de deposito tem que ser maior que 0');
        sacar = Number(ler())
    }
    console.log(SUCESSO, `Saque concluido com sucesso!`)
    console.clear()
    console.log('Precione a tecla enter para continuar:')
    ler()
    console.clear()
    let novoSaldo = saldo - sacar
    return novoSaldo
}

export function simularInvestimento(capitalInicial, tempo, juros) {
    let jurosDecimal = juros / 100 + 1;
  
    let totalFinal = capitalInicial * jurosDecimal ** tempo;
  
    return totalFinal.toFixed(2);
  }

export function exibirSaldo(msg, saldo){
    let Exibicao = saldo
    console.log(msg);
    return Exibicao
}