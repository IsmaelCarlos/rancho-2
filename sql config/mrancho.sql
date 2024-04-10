create table pessoa(
    id_pessoa SERIAL,
    nome VARCHAR(100) not null,
    cpf  INT unique not null ,
	telefone VARCHAR(12) not null,
	sexo VARCHAR(10) not null,
	constraint sexo_tipo check (sexo in ('masculino','femenino','outro')),
	email VARCHAR(120) not null,
	senha VARCHAR(20) not null,
	data_nascimento DATE not null,
	id_endereco SERIAL, 
    id_fazenda SERIAL,
	primary key (id_pessoa),
	foreign key (id_endereco) references endereco(id_endereco),
	foreign key (id_fazenda) references fazenda(id_fazenda)
);

create table endereco(
	id_endereco SERIAL,
	cep_endereco INT not null,
	rua VARCHAR(50) not null,
	bairro VARCHAR(50) not null,
	cidade VARCHAR(50) not null,
	estado VARCHAR(50) not null,
	pais VARCHAR(50) not null,
	numero INT not null,
	quadra VARCHAR(20) not null,
	lote VARCHAR(20) not null,
	id_fazenda SERIAL,
	primary key(id_endereco),
	foreign key (id_fazenda) references fazenda(id_fazenda)
);

create table fazenda(
	id_fazenda SERIAL,
	nome VARCHAR(100) not null,
	tamanho_hectare FLOAT,
	id_bovino SERIAL,
	primary key(id_fazenda),
	foreign key (id_bovino) references bovino(id_bovino)
);

create table bovino(
	id_bovino SERIAL,
	raca VARCHAR(50) not null,
	peso_inicial VARCHAR(100) not null,
	constraint peso_inicial_tipo check (peso_inicial in('@','kg')),
	peso_atual VARCHAR(100),
	constraint peso_atual_tipo check (peso_atual in('@','kg')),
	id_produto SERIAL,
	primary key (id_bovino),
	foreign key (id_produto) references produto (id_produto)
);

create table produto(
	id_produto SERIAL,
	nome VARCHAR(100) not null,
	data_fabricacao DATE not null,
	produto VARCHAR(20) not null,
	constraint produto_tipo check (tipo_produto in('racao','medicamento','suplemento')),
	tipo_produto VARCHAR(20) not null,
	constraint tipo_produto_tipo check (tipo_produto in ('Milho Moido','milho Inteiro','Casca de Soja',
														 'Ureia','Sal Mineral','Sal Comum','Comprido',
														 'Pasta','Frasco','Soro','Suplemento Proteico',
														 'Suplemento Energetico','Suplemento Mistura Multipla',
														 'Suplemento Proteinado')),
	quantidade FLOAT not null,
	tratamento_produto VARCHAR(20) not null,
	constraint tratamento_produto_tipo check (tratamento_produto in('Antibiotico','Anti-inflamatorio','Antiparasitario',
															  'Matabicheira','Terapeuticas','Tratamento de Casco',
															  'Mosquicidas','Carrpaticida','Suplementos Vitaminicos',
															  'Suplemento Minerais')),
	unidade_medida VARCHAR(20) not null,
	constraint unidade_medida_tipo check (unidade_medida in('L','mL','kg','g','mg','mol','t','un')),
	id_estoque SERIAL,
	primary key (id_produto),
	foreign key (id_estoque) references estoque (id_estoque)
);

create table estoque(
	id_estoque SERIAL,
	quantidade_estoque INT,
	id_produto SERIAL,
	primary key (id_estoque),
	foreign key (id_produto) references produto (id_produto)
);