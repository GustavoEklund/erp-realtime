# ERP Realtime

## Como baixar o projeto

1. Antes de começar, certifique-se de ter o [git](https://git-scm.com/downloads) instalado.

2. Acesse o link:
    > [Azure - Gustavo Eklund - git](https://dev.azure.com/gustavocfranca/_git/erp-realtime)

3. Clique em `Clone`

4. Copie a `URL HTTPS`

5. No terminal vá até o diretório onde desejar baixar o projeto e execute o comando:

    ```bash
    git init
    ```

6. Em seguida o comando sem os parênteses:

    ```bash
    git clone (url copiada)
    ```

7. Será solicitada uma senha de acesso, volte ao azure e clique em `Generate Credentialas` e use a senha gerada.

## Como instalar o projeto

1. Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/en/) instalado.

2. Para instalar o projeto, no terminal, certifique-se de ter o [yarn](https://classic.yarnpkg.com/en/docs/install) instalado, e então vá até o diretório do projeto e execute o comando para instalar as dependências do projeto:

    ```bash
    yarn install
    ```

3. Para iniciar o projeto basta executar o comando:

    ```bash
    yarn start
    ```

4. Acesse o projeto pelo navegador através do link:
    > [localhost:3000](http://localhost:3000)

5. Ainda não será possível acessar o sistema pois ainda faltam as **Configurações da Api-Endpoint e do Banco de Dados** na próxima etapa.

## Instalação do banco de dados

1. O banco de dados utilizado no projeto é o PostgreSQL. Caso ainda não o tenha instalado, você pode encontrar [aqui](https://www.postgresql.org/download/) o download de acordo com seu sistema operacional. A versão exigida para este projeto é a `psql ^9.6.16` ou superior.

2. Após a instalação, será necessário realizar algumas configurações no terminal, se você estiver operando através do Windows, é recomendável utilizar o PowerShell, mas antes disso recomendamos reiniciar seu terminal para certificar-se de que as variáveis ambiente serão reconhecidas. Para certificar-se que a instalação ocorreu com sucesso execute o comando:

    ```bash
    psql --version
    ```

3. Em seguida, execute o comando:
    * No Windows:

    ```bash
    psql -U postgres
    ```

    * No Linux:

    ```bash
    sudo -u postgres psql postgres
    ```

    * no MacOS:

    ```bash
    psql postgres
    ```

    > Ao executar o comando, seu terminal deve estar da seguinte forma:

    ```psql
    psql (9.6.16)
    Type "help" for help.

    postgres=#
    ```

4. Note que agora você está no terminal `psql` conectado com o super usuário `postgres`, mas que ainda não tem uma senha de acesso, para defini-la, use o comando:

    ```psql
    \password postgres
    ```

    > Ao executar o comando será solicitada uma senha `Enter new password:`, então basta digitá-la e pressionar enter, em seguida confirme a senha `Enter it again:`.
    > Caso deseje sair do terminal `psql` basta usar o comando:

    ```psql
    \q
    ```

5. A instalação do banco de dados continua na próxima etapa utilizando o [Sequelize](https://sequelize.org/).

## Configuração Api-Endpoint e Backend

1. Vá até o diretório [./api](./api) localizado da raiz do projeto e execute novamente o comando para instalar as dependências do projeto:

    ```bash
    yarn install
    ```

2. As configurações do banco de dados estão no  diretório [./src/config/database.js](./src/config/database.js).
Neste arquivo, observe os valores `proccess.env.DB_???`. Isso significa que são variáveis ambiente orquestradas pelo `Dotenv`. Verifique se os parâmetros de configuração são compatíveis com o seu ambiente de desenvolvimento, na raiz do projeto, o arquivo `.env.exemple` contém os valores das variáveis utilizadas na configuração do banco de dados, substitua os valores necessários, salve o arquivo e faça uma cópia do arquivo com o nome `.env`. Se tudo estiver pronto, crie o banco de dados usando o comando:

    ```bash
    yarn sequelize db:create
    ```

3. Todas as tabelas do banco de dados já estão configuradas no diretório [./src/database/migrations](./src/database/migrations), mas ainda não foram criadas no banco de dados que você acabou de instalar. Para criar as tabelas, use o comando:

    ```bash
    yarn sequelize db:migrate
    ```

4. Agora, basta iniciar o projeto:

    ```bash
    yarn dev:server
    ```

5. Você pode acessá-lo através do link
    > [localhost:3333](http://localhost:3333)
    > A seguinte mensagem deve ser exibida no navegador:

    ```text
    Cannot GET /
    ```

6. Agora o projeto está totalmente configurado e pronto para o desenvolvimento. Lembre-se sempre de iniciar os dois servidores pelo terminal em seus respectivos diretórios. No diretório raiz: `yarn start` e em [./api](./api) `yarn dev:server`.

## Acesso

1. Agora você já deve ser capaz de acessar o sistema em:
    > [localhost:3000](http://localhost:3000)
