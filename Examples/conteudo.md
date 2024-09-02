# Pseudo-elementos
Um pseudo-elemento CSS é uma palavra-chave adicionada a um seletor que permite que você estilize uma parte específica do elemento selecionado. Por exemplo, o pseudo-elemento ::first-line aplica o estilo apenas na primeira linha de um parágrafo.

/* A primeira linha de todo elemento <p>. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}

Observação: Diferentemente dos pseudo-elementos, pseudo-classes podem ser utilizadas para estilizar um elemento baseado em seu estado

Ver mais [Pseudo-elementos](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elements#%C3%ADndice_de_pseudo-elementos_comuns).



# Pseudo-classes
Uma pseudoclasse CSS é uma palavra-chave adicionada a um seletor que especifica um estado especial do (s) elemento (s) selecionado (s). Por exemplo, pode ser usado para alterar a cor de um botão quando o ponteiro do usuário passa sobre ele.:hover

/* Qualquer botão sobre o qual o ponteiro do usuário está pairando */
button:hover {
  color: blue;
}
Copiar para área de transferência
As pseudo classes permitem que você aplique um estilo a um elemento não apenas em relação ao conteúdo da árvore do documento, mas também em relação a fatores externos como a história do navegador ( :visitedpor exemplo), o status de seu conteúdo (como :checkedem certos elementos do formulário), ou a posição do mouse (como :hover, que permite saber se o mouse está sobre um elemento ou não).

Ver mais [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).