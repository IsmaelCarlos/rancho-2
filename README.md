# Bem vindo ao rancho 2 <img src="./src/assets/images/logotipo.svg">
### Autor: Ismael Carlos do Nascimento Galvão

# PARA ACESSAR O PROJETO MRANCHO 
## Acesse os seguintes links para acessar o Rancho Frontend, Rancho Backend e Rancho Board
[Fontend](https://github.com/IsmaelCarlos/rancho-2)

[Backend](https://github.com/IsmaelCarlos/rancho-backend)
    
[Board](https://github.com/IsmaelCarlos/rancho-board)




## Como instalar facilmente

```shell
rm node_modules
rm package-lock.json
npm install
```

# FRONTEND
Todo o Frontend foi desenvolvido com TypeScript, CSS, BOOTSTRAP
* As bibliotecas necessarias para rodar o Frontend
    - npm
    - react

# BACKEND
Todo o Backend foi desenvolvido com Express Framework web rápido, flexível e minimalista para Node.js
foi ultilizado o Docker para subir o Banco
* As bibliotecas necessarias para rodar o Backen
    - knex
    - express
    - docker

# Banco de Dados
O para poder execultar o banco de dados foi escolhido o PostgresSql, pois facilita com a comunicação com o Backend.
     * No PostGres eu posso passar um segundo parametro
     * para o insert do knex escolhendo as colunas
     * da tabela que foram inseridas e que serão retornadas

     * Podendo fazer o Json diretamente dentro do Banco de Dados ultilizando esta função: json_build_object
        - Ela é útil quando você precisa gerar um objeto JSON
          Por exemplo, você pode usá-la para criar uma 
           a partir de dados em um banco de dados relacional. 
          representação JSON de uma linha de dados 
          selecionada em uma tabela, ou para construir 
          objetos JSON complexos agregando valores 
          de diferentes fontes. 
        - Essa consulta cria um objeto JSON com as chaves e 
          valores correspondentes às colunas da tabela pessoa. 
          Portanto, enquanto o nome e a sintaxe das funções podem 
          variar entre os sistemas de gerenciamento de banco de dados, 
          a funcionalidade básica de manipulação de JSON está disponível em ambos.
        
     * A função json_build_object é específica do PostgreSQL e não está disponível no MySQL. 
        - No entanto, o MySQL oferece funcionalidades 
          semelhantes para manipulação de JSON, mas com sintaxe diferente.


#  O MODULO DE RFID UTILIZADO MFRC522 13.5 MHZ
Tags RFID Programáveis a 13,56 MHz, cada tag dessa, essas tegas serão colocadas dentro do brinco do Bovino

#  MICRO-CONTROLADOR ESP32 
Programado em C para codificar as TAGS, essas informção são gravadas na UID que serão enviadas para o Backend desta forma será cadastrada no Banco de Dados Postegres.
O Frontend fica em espera até a TAG ser aproximada no modulo MFRC522, assim que a TAG for aproximada libera o campo de cadastrar informação no brinco para o user digitar a informação desejada como exemplo: Digite o identificador bovio:
                        user informa 12
Assim que o user terminar de cadastrar as informações iniciais do Bovino a identificação do bovino será 12 tanto tabela do Banco de dados como na id brinco


# COLOCAR CODIGOS DAS PAGINAS AQUI 
## CODIGO DE CADASTRO USUARIO E FAZENDA

```jsx
    const Registration_people: React.FC = () => {
    };
```
Para mais informação [Registration_people](./src/screens/Registration_people.tsx) 

# COLOCAR CODIGOS DO ESP32 
    ...........
    ...........
    ...........

# COLOCAR CODIGOS DO BACKEND 
    ...........
    ...........
    ...........

# COLOCAR CODIGOS BANCO DE DADOS  
    ...........
    ...........
    ...........





https://www.usinainfo.com.br/blog/esp32-wifi-comunicacao-com-a-internet/