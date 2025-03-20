# 🎹 Passo a Passo para Criar um Teclado Musical Virtual

## ✅ Passo 1 - Criar o HTML
Crie um arquivo `index.html`. Nele, adicione:
- 🎯 Uma `div` para representar o teclado com algumas teclas.
- ✏️ Um `input` onde o usuário pode digitar uma sequência de notas.
- 🔘 Um `botão` que tocará a sequência digitada.
- 🎵 Elementos `<audio>` para armazenar os sons correspondentes.

**🛠️ Tarefa:** Estruture esse HTML conforme essas diretrizes.

---

## ⌨️ Passo 2 - Capturar teclas do teclado
Agora, crie um arquivo `script.js` e ligue-o ao HTML.

- ⏩ Adicione um evento `keyup` ao `document.body`.
- 🎼 Quando o usuário soltar uma tecla, chame uma função (ex: `playSound(tecla)`) e passe a tecla pressionada.

**🛠️ Tarefa:** Utilize `addEventListener` para capturar a tecla pressionada.

---

## 🖱️ Passo 3 - Capturar o clique no botão

- 🔎 Selecione o botão do HTML com `querySelector`.
- 📝 Adicione um evento de clique que capture o valor digitado no input.
- 🔡 Transforme a string em um array de caracteres.
- ▶️ Chame uma função (ex: `playComposition(array)`) para tocar a sequência.

**🛠️ Tarefa:** Faça essa lógica para pegar o valor do input e transformá-lo em um array.

---

## 🔊 Passo 4 - Criar a função para tocar um som

- 🎶 Pegue o elemento `<audio>` correspondente à tecla pressionada.
- ▶️ Se existir, reinicie o áudio (`currentTime = 0`) e toque (`play()`).
- 🎨 Pegue o elemento visual da tecla e adicione uma classe CSS (ex: `active`).
- ⏳ Após alguns milissegundos, remova a classe `active`.

**🛠️ Tarefa:** Implemente essa função para tocar o som e destacar a tecla pressionada.

---

## 🎼 Passo 5 - Criar a função que toca uma sequência

- 🔁 Para cada item no array, chame `playSound()`.
- ⏳ Use um intervalo de tempo (`setTimeout()`) para criar um efeito de reprodução.
- ⏱️ Ajuste o tempo entre notas (ex: `250ms`).

**🛠️ Tarefa:** Implemente essa função para tocar a sequência de sons conforme o tempo definido.

---

🚀 **Agora, tente implementar cada passo sozinho!** Se precisar de ajuda, revise cada seção e teste seu código aos poucos.
