#   NoteJs
 Repositório criado para registrar aprendizado de javascript
## Propriedade string

A propriedade [.length](https://codetogo.io/how-to-get-length-of-string-in-javascript/) é usada para retornar o comprimento da string.
- Supondo que você tenha uma variável chamada **texto** , veja como você obteria seu comprimento:

```javascript
	let text = "Hello World";
	text.length; // 11
```
> *Ex: Complete a função de `getCharCount`forma que ela retorne o número de caracteres no `str`parâmetro que ela recebe*

```javascript
	function getCharCount(str)  {
		return str.length
	}
	console.log(getCharCount("Sam"));  // 3
	console.log(getCharCount("Alex 123"));  // 8
	console.log(getCharCount("Charley is here"));  // 15
````

## Métodos básicos de string

Aqui estão alguns métodos comuns que você pode chamar em strings:

### .toLowerCase ( )

- Isso retornará uma nova string que tem todos os seus caracteres em letras minúsculas:

```javascript
	"BLUE".toLowerCase(); // "blue";
```
>*Ex: Complete a função lowerName de forma que ela retorne o parâmetro de nome que recebe em letras minúsculas.*
```javascript
	function lowerName(name)  {
		return name.toLocaleLowerCase()
	}
	console.log(lowerName("Sam"));  // "sam"
	console.log(lowerName("ALEX"));  // "alex"
````
### .toUpperCase ()

- Isso retornará uma nova string que tem todos os seus caracteres em maiúsculas:

```javascript
	"red".toUpperCase(); // "RED";
```
>*Ex: Complete a função shoutMyName de forma que retorne o parâmetro de nome que recebe em letras maiúsculas.*
```javascript
	function shoutMyName(name)  {
		return name.toUpperCase()
	}
	console.log(shoutMyName("Sam"));  // "SAM"
	console.log(shoutMyName("Charley"));  // "CHARLEY"
	console.log(shoutMyName("alex"));  // "ALEX"
````

## Acesso de personagem

Última atualização em maio de 2021

Você pode acessar um caractere específico em uma string usando a sintaxe dos colchetes `[]`.

Você deve fornecer o **índice** do caractere que deseja acessar, começando em 0.

Vamos dar um exemplo em que a variável `language`tem o valor: `"JavaScript"`. Veja como você acessa o primeiro caractere, o segundo e o terceiro:

```javascript
language[0]; //first character
language[1]; //second character
language[2]; //third character

```

Se você gostaria de _depurar_ seu código e ver o resultado de `language[1]`no console, você deve registrar no console da seguinte maneira:

```javascript
console.log(language[1]);

```
>*Ex: Conclua a função de `getFirstCharacter`forma que ela retorne o primeiro caractere do parâmetro de **nome** que recebe. *
```javascript
	function getFirstCharacter(name)  {
		return name[0]
	}
	console.log(getFirstCharacter("Amsterdam"));  // "A"
	console.log(getFirstCharacter("Japan"));  // "J"
````
### Combinando com comprimento

Você também pode combinar o acesso ao caractere com a propriedade **.length** . Então, usando a mesma `language`variável, veja como obter o penúltimo caractere dela:

```javascript
language[ language.length - 2 ]; 
// "p" because it's the second to last character from "JavaScript"


```
Observe que **idioma [language.length]** será `undefined`porque o acesso aos caracteres começa em 0.  
Portanto, para uma string de 9 caracteres, 8 é a posição do último caractere.
>*Ex: Complete a função `getLastCharacter` de modo que retorne o último caractere do parâmetro de nome que recebe.*
```javascript
	function getLastCharacter(name)  {
		return name[name.length -  1]
	}
	console.log(getLastCharacter("Sam"));  // "m"
	console.log(getLastCharacter("Alex"));  // "x"
	console.log(getLastCharacter("Charley"));  // "y"
````
## Substrings



Uma substring é uma parte ou parte de uma string. Por exemplo, `"rain"`é uma substring da string `"brain"`porque você pode obtê-la `"rain"`pegando os últimos 4 caracteres.

Ao trabalhar com strings, você geralmente precisa obter alguns caracteres de uma string em vez de todos eles. Assim, usamos o `substring`método.

## Assinatura de substring

Uma assinatura de função fornece uma explicação dos parâmetros que você precisa passar para aquele método. Vamos dar uma olhada na assinatura de `substring`:

```bash
someString.substring(indexStart, indexEnd)

```

Isso significa que, ao chamar a substring, você pode dar a ela 2 parâmetros, o primeiro para o `indexStart`e o segundo para `indexEnd`.

-   `indexStart`: a posição do primeiro caractere que você gostaria de **incluir**
-   `indexEnd`: a posição do primeiro caractere que você gostaria de **ignorar**

Isso significa que um indexEnd de **5** incluirá apenas até o caractere **4** .

A combinação desses 2 fornecerá uma substring.

Vamos dar um exemplo com uma variável nomeada `language`com um valor `JavaScript`e obter a substring com **indexStart** de **1** e **indexEnd** de **4** . Isso retornará uma string composta de todos os caracteres das posições **1 a 3** porque **4** é o primeiro caractere que é ignorado:

![Substring example](https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1545252982/learnjavascript/lessons/substring.jpg)

O resultado dessa substring é `"ava"`.

Veja como você escreveria em JavaScript:

```javascript
const language = "JavaScript";
language.substring(1, 4); //"ava"
```

## Parâmetros opcionais

O `indexEnd`parâmetro é opcional, o que significa que você pode passar o `indexStart`e ele assumirá que o `indexEnd`é igual ao comprimento da string. Aqui está um exemplo:

```javascript
language.substring(4); //"Script"
```

Ele assumiu que `indexEnd`é o comprimento da string ( **10** neste exemplo).
>*Ex: Complete a função skipFirstCharacter de forma que retorne todos os caracteres exceto o primeiro do parâmetro de texto que recebe.*
```javascript
	function skipFirstCharacter(text)  {
		return text.substring(1)
	}
	console.log(skipFirstCharacter("Xcode"));  // "code"
	console.log(skipFirstCharacter("Hello"));  // "ello"
```
>*Ex: Complete a função getDescription de forma que ela retorne os primeiros 10 caracteres do parâmetro de texto que recebe.*
```javascript
	export  function getDescription(text)  {
		return text.substring(0,10)
	}
```
>*Ex: Complete a função getDescription de forma que ela retorne os primeiros 10 caracteres do parâmetro de texto que recebe seguidos por reticências. Uma reticência é o caractere ponto escrito 3 vezes: ...*
```javascript
	export  function getDescription(text)  {
		return text.substring(0,10)  +  '...'
	}
```
## Nota legada

Se você já conhece um pouco de JavaScript, pode ter usado outro método que executa um resultado semelhante. Você pode encontrar o nome da função abaixo, mas **não** recomendamos que você a use porque ela está obsoleta.

Não use o `.substr`método, pois ele está obsoleto e funciona de maneira diferente. Sempre use o `.substring`método.
## Strings de modelo

Você já sabe que pode criar strings com aspas duplas ou simples, mas como já sabe, essas strings não suportam interpolação.

Strings de modelo, no entanto, suportam interpolação e outros recursos interessantes.

## Seu primeiro modelo de string

```javascript
`This is a template string`

```

A única diferença é que as strings do modelo começam e terminam com um `` ` ``caractere de crase .

## Cordas multilinha

Ao contrário das sequências de aspas simples e aspas duplas, as sequências de modelo podem abranger várias linhas. Aqui está um exemplo:

```javascript
let text = `This is a multiline
string that
just works!`

```

Considerando que esta teria **não** sido possível com uma seqüência normal (aspas simples ou duplas).
>*Ex: Conclua a função getMultilineString de modo que ela retorne a seguinte string multilinha:
> `` I am learning JavaScript`` 
>  ``and I found it to be ``
>  ``quite fun!*``
```javascript
	function getMultilineString()  {
		return  `I am learning JavaScript
		and I found it to be
		quite fun!`;
	}
	console.log(getMultilineString());
```
## Interpolação

Strings de modelo suportam interpolação! Isso significa que você pode escrever uma variável em sua string e obter seu valor. A sintaxe é direta, você envolve o nome da variável com um cifrão e chaves. Vamos dar um exemplo em que temos uma variável `language`com um valor de `JavaScript`.

```javascript
let language = "JavaScript";
`I am learning ${language}`; //"I am learning JavaScript";

```

Lembre-se de que a interpolação de strings só funciona com **crases** . Se você alguma vez tentar e não funcionar, verifique se você está usando crases em vez de aspas simples ou duplas.
>*Ex: Complete the function `sayHello` such that it interpolates the variable **name** into a string `"Hello name"`. *
```javascript
	function sayHello(name)  {
		return  `Hello ${name}`
	}
	console.log(sayHello("Alex"));  // "Hello Alex"
	console.log(sayHello("Sam"));  // "Hello Sam"
```
>*Ex;   
Complete a função getFullName de forma que retorne o nome completo da pessoa que está usando a interpolação.*
```javascript
	function getFullName(firstName, lastName)  {
		return  `${firstName}  ${lastName}`
	}
	console.log(getFullName("Sam",  "Doe"));  // "Sam Doe"
	console.log(getFullName("Alex",  "Blue"));  // "Alex Blue"
```