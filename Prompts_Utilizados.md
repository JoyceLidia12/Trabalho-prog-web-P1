# Uso de IA no Trabalho P1

IA utilizada: ChatGPT

---

 Prompt 1
Pergunta: Como faço uma API simples em Node.js com dois recursos (animais e espécies)?

Resultado da IA:
A IA explicou que eu deveria usar o framework Express, criar uma pasta `src` com subpastas para rotas, middlewares e dados, e fazer os arquivos `server.js` e `app.js` com `app.listen()` para iniciar o servidor.  
Ela também me mostrou como criar rotas com métodos GET, POST, PUT e DELETE.

Funcionou pra você?
Sim, consegui montar a estrutura e o servidor iniciou corretamente.

---

 Prompt 2
Pergunta: Como coloco um middleware para gerar e verificar token de autenticação?

Resultado da IA: 
A IA me ensinou a usar o pacote `uuid` para gerar tokens aleatórios e a criar uma rota `/token` que retorna o token.  
Depois, mostrou como criar um middleware que verifica o cabeçalho `Authorization` e compara o token antes de liberar as rotas.

Funcionou pra você? 
Sim, o token foi gerado e as rotas protegidas funcionaram quando usei `Authorization: Bearer <token>`.

---

 Prompt 3
Pergunta: Como faço para mostrar no console quando uma requisição entra e quando ela sai?

Resultado da IA: 
Ela explicou que eu poderia usar dois middlewares: um antes dos handlers para registrar a entrada, e outro depois, interceptando `res.send` para mostrar a saída e o tempo de resposta.

Funcionou pra você?  
Sim, agora o terminal mostra `[ENTER]` e `[EXIT]` para cada requisição.

---

 Prompt 4
Pergunta: Como posso testar minha API no navegador ou no Thunder Client?

Resultado da IA:  
A IA explicou que posso abrir o navegador em `http://localhost:3000/token` para gerar o token e usar o Thunder Client (ou Postman) para testar as rotas `/animais` e `/especies` com o token no cabeçalho.

Funcionou pra você?
Não, não consegui testar todas as rotas com o token.
