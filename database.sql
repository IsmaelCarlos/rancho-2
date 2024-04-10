-- telefone type
CREATE DOMAIN telefone_type AS VARCHAR(19);
-- Cnpj type
CREATE DOMAIN cnpj_type AS VARCHAR(18);
-- Cpf type
CREATE DOMAIN cpf_type AS VARCHAR(14);
-- Cep type
CREATE DOMAIN cep_type AS VARCHAR(9);
-- Enum dos generos
CREATE TYPE generos_enum AS ENUM('Masculino', 'Femenino', 'Outros');
-- Enum do estado
CREATE TYPE estados_enum AS ENUM ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO');
-- Enum da zona
CREATE TYPE zona_enum AS ENUM ('RURAL', 'URBANA');
-- Enum pecuaria
CREATE TYPE pecuaria_enum AS ENUM('fazenda_corte', 'fazenda_leiteiro', 'pastagem_manejo', 'fazenda_ovinos', 'fazend_suinos', 'fazenda_mista');

create table fazenda(
	id_fazenda SERIAL,
	id_endereco SERIAL,
	nome VARCHAR(100),
	tamanho_hectare FLOAT,
	pecuaria pecuaria_enum,
	primary key(id_fazenda)
);

create table endereco (
	id_endereco SERIAL,
	cep_endereco cep_type,
	rua VARCHAR(255),
	bairro VARCHAR(255),
	cidade VARCHAR(120),
	estado estados_enum,
	pais VARCHAR(50),
	numero INT,
	quadra INT,
	lote INT,
	complemento VARCHAR(120),
	zona zona_enum,
	primary key(id_endereco)
);

-- ìndice no endereco (cep_endereco)
create index endereco_cep_endreco_idx
on endereco (cep_endereco);

create table pessoa (
	id_pessoa SERIAL,
	id_endereco SERIAL,
	nome VARCHAR(255),
	cpf cpf_type,
	nascimento VARCHAR(80),
	genero 	generos_enum,
	telefone telefone_type,
	email VARCHAR(255),
	senha VARCHAR(512),
	primary key(id_pessoa)
);

-- Funções
CREATE OR REPLACE FUNCTION validate_telefone_format(telefone VARCHAR) RETURNS BOOLEAN AS $$
BEGIN
    RETURN telefone ~ '^\+\d{2}\s\(\d{2}\)\s\d?\d{4}-\d{4}$';
END;
$$ LANGUAGE plpgsql;

-- Telefone format check constraint
ALTER TABLE pessoa
ADD CONSTRAINT telefone_format_check
CHECK (validate_telefone_format(telefone));




-- Relacionamento: fazenda }0--|| endereco
alter table fazenda
add constraint fk_fazenda_endereco
foreign key (id_endereco) references endereco(id_endereco);

-- Relacionamento: pessoa }o--|| endereco
alter table pessoa
add constraint fk_pessoa_endereco
foreign key (id_endereco) references endereco(id_endereco);

