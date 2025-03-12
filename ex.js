/* Exercícios de recursão adicional
Modele as recursões, e depois implemente cada um dos algorítmos modelados. Faça uma classe contendo os métodos implementados. Coloque a modelagem como comentário antes de cada método.
Como trabalharemos: programando em pares no nosso encontro síncrono (Pair Programming) ou seja, uma máquina/código, dois desenvolvedores cooperando, alternando os papéis de piloto e co-piloto (a cada 10-15 minutos, por exemplo). Após o encontro, continuem desnvolvendo cooperativamente, utilizando o repositório no github para compartilhar o trabalho sendo desenvolvido.
Extra: terminados estes exercícios, modele e implemente (se ainda não concluiu) os exercícios de re-aquecimento.

Os exercícios:
*/

class Recursao {
// Modele e implemente um método recursivo que calcule o fatorial de um número n passado como parâmetro.    
    fatorial(n) {
            if (n === 0) {
                return 1;
            }
            return n * this.fatorial(n - 1);
        }

// Modele e implemente um método recursivo que calcule o somatório de um número n (passado como parâmetro) até 0.
    somatorio(n) {
            if (n === 0) {
                return 0;
            }
            return n + this.somatorio(n - 1);
        }

// Modele e implemente um método recursivo que calcule o n-ésimo número da sequência de fibonacci.
fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);  
}

// Modele e implemente um método recursivo que calcule o somatório dos números inteiros entre os números k e j, passados como parâmetro.
somaentre(k, j) {
    if (k === j) {
        return k;
    }
    return k + this.somaentre(k + 1, j);
}
// Modele e implemente um método recursivo que recebe um String em retorna true se este String for um palíndrome, false caso contrário.
// boolean isPal(String s) 
 

// Modele e implemente um método recursivo que recebe um inteiro zero ou positivo e retorna um String com o número em binário.
// String convBase2(int n) 

// Modele e implemente um método recursivo que calcule o somatório dos números contidos em um ArrayList de inteiros, passado como parâmetro.

// Modele e implemente um método recursivo para encontrar o maior elemento de um ArrayList.
// int findBiggest(ArrayList<Integer> ar) 

// Implemente um método recursivo para determinar se um string ocorre dentro de outro.
// boolean findSubStr(String str, String match)

// Faça um método recursivo que determina o número de dígitos de um inteiro.
// int nroDigit(int n)

// Implemente um métodos que recebe um String e retorna um ArrayList com todas as permutações deste String.
// ArrayList<String> permutations(String s)

}

const recursao = new Recursao();
console.log(recursao.fatorial(5));  
console.log(recursao.somatorio(5));
console.log(recursao.fibonacci(5));
console.log(recursao.somaentre(1, 5));



