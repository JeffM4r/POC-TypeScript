<h1 align="center">
📄<br>Notepad básico em TypeScript
</h1>

## Como iniciar o projeto

##### 1.Faça a restauração do banco de dados através do arquivo dump.sql
##### 2.Configure as variáveis de ambiente
##### 3.Inicie "npx tsc" pelo terminal para compilar os arquivos e criar o diretório "dist"
##### 4.Para finalizar apenas inicie o arquivo app.js dentro do diretório "dist" (exemplo: "node dist/app.js"

## Funcionalidades de cada rota

### 1. rota "/notes" método Get
retorna todas as anotações do banco de dados

### 2. rota "/notes" método Post
Pode inserir uma anotação nova atraves de um objeto no seguinte formato: { text: "sua anotação aqui" }

### 3. rota "/notes/:id" método Put
Poderá atualizar uma anotação enviando um objeto no formato do passo anterior, mais o Id da anotação como parâmetro

### 4. rota "/notes/:id" método Delete
Deleta qualquer anotção criada ao enviar o Id como parâmetro

### 5. rota "/numbernotes" método Get
Recebe a soma de todas as anotações para ver quantas notas tem no total
