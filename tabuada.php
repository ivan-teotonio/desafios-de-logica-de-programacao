<?php 
//Tabuada – Peça um número ao usuário e mostre a tabuada dele de 1 a 10.

$numero = readline("Digite um número: ");
for ($i = 1; $i <= 10; $i++) {
    echo $numero . " x " . $i . " = " . ($numero * $i) . "\n";
}
