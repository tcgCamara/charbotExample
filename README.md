1. Chatbot Simples - Cartão de Benefícios

Este projeto é um chatbot simples desenvolvido com Node.js, Express e PostgreSQL. Ele simula um assistente virtual capaz de identificar palavras-chave em mensagens e responder com base em intenções pré-definidas armazenadas no banco de dados. A ideia foi inspirada na experiência de atendimento de uma empresa de cartão de benefícios.

2. Tecnologias Utilizadas

- Node.js  
- Express  
- PostgreSQL  
- pg (PostgreSQL client para Node)  

3. Funcionalidades

- Recebe mensagens de texto via API (`POST /chat/send`);
- Busca respostas pré-definidas no banco de dados com base em palavras-chave;
- Retorna uma resposta automatizada e amigável ao usuário;
- Caso não encontre uma correspondência, retorna uma resposta padrão;
- Estrutura modular separando controller, service e banco de dados.

4. Para utilizar esta aplicação, você deve...

Instalar as dependências:
- npm install

Configurar o arquivo .env:
- DATABASE_URL=postgresql://usuario:senha@localhost:5432/chat_instentions

Instalar o PostgreSQL e criar a tabela:
- CREATE TABLE chat_intentions (
  id SERIAL PRIMARY KEY,
  keyword TEXT NOT NULL,
  response TEXT NOT NULL
)

Inserir algumas instâncias básicas:
- INSERT INTO chat_intentions (keyword, response) 
VALUES
('oi', 'Olá! Como posso te ajudar? 😊'),
('saldo', 'Você pode consultar seu saldo diretamente no app do Cartão de Benefícios.'),
('cartão', 'O Cartão de Benefícios pode ser usado em várias categorias, conforme configurado pela empresa.'),
('atendimento', 'Nosso suporte funciona de segunda a sexta, das 9h às 18h através do telefone (11) 98877-6655. Mas você pode tirar suas dúvidas aqui comigo, também!'),
('ajuda', 'Claro! Me diga com o que você precisa de ajuda.');

5. Como utilizar

Rota de Consulta:

[POST] /chat/send
Body: { "message": "Text"}

EXEMPLO DE USO:
POST /chat/send
Content-Type: application/json
{
  "message": "Como vejo meu saldo?"
}

RESPOSTA: 
POST /chat/send
Content-Type: application/json

{
  "response": "Você pode consultar seu saldo diretamente no app do Cartão de Benefícios."
}


