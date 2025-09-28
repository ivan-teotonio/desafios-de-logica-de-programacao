<?php 

$soma = 0;
$lista = []; 

//laço de repetição para pedir 5 números
for($i =1; $i <=5; $i++){
    //pedir um número ao usuário
    $numero = readline("Digite o {$i} número: ");
    //verificar se o número é válido
    if(is_numeric($numero)){
        //converter o número para float
        $n = (float)$numero;
        //adicionar o número na lista
        $lista[] = $n;
        //somar o número na soma
        $soma += $n;
    }else{
        echo "Por favor, digite um número válido.\n";
        $i--;
    }
    
}
echo "Números digitados: " . implode(", ", $lista) . "\n";
echo "Soma: = {$soma}";

