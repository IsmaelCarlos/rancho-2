CREATE DATABASE rancho;
\c rancho;

-- Data
CREATE DOMAIN date_type AS VARCHAR(75);
-- Telefone type
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
-- Enum medicamento 
create type medicamento_enum as ENUM('Antibióticos', 'Anti-inflamatórios','Antiparasitários','Vacinas');
-- Enum unidade de medida
create type unidade_medida_enum as enum('ug','mg','g','mL','CP','AM','TB','FR','CX','CX2','CX3','L', 'T','kg');
-- Enum racao
create type racao_enum as ENUM('Ração', 'Protéina','Suplemento');


CREATE TABLE fazenda(
	id_fazenda SERIAL,
	id_endereco SERIAL,
	nome VARCHAR(100),
	tamanho_hectare FLOAT,
	pecuaria pecuaria_enum,
	primary key(id_fazenda)
);

CREATE TABLE endereco (
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

CREATE TABLE pessoa (
	id_pessoa SERIAL,
	id_endereco SERIAL,
	nome VARCHAR(255),
	cpf cpf_type,
	nascimento date_type,
	genero 	generos_enum,
	telefone telefone_type,
	email VARCHAR(255),
	senha VARCHAR(512),
	primary key(id_pessoa)
);

CREATE TABLE bovino (
	id_bovino SERIAL,
	id_fazenda SERIAL,
--	id_medicamento SERIAL,
--	id_racao SERIAL,
	id_pessoa_proprietario_anterior SERIAL,
	id_pessoa_proprietario_atual SERIAL,
	identificacao VARCHAR(255),
	data_nascimento date_type,
	data_entrada_confinamento date_type,
	peso_nascimento INT,
	peso_confinamento INT,
	peso_atual INT,
	primary key(id_bovino)
 );
create table medicamento(
	id_medicamento SERIAL,
--	id_medicamento_aplicado SERIAL,
	tipo_medicamento medicamento_enum,
	fabricante_medicamento VARCHAR(255),
	quatindade INT,
	unidade_medida unidade_medida_enum,
	data_validade date_type,
	data_registro date_type,
	primary key(id_medicamento)
);

create table racao(
	id_racao SERIAL,
--	id_racao_aplicado SERIAL,
	tipo_racao racao_enum,
	fabricante_racao VARCHAR(255),
	quatindade INT,
	unidade_medida unidade_medida_enum,
	data_validade date_type,
	data_registro date_type,
	primary key(id_racao)
);

create table estoque(
	id_estoque SERIAL,
	id_medicamento SERIAL,
	id_racao SERIAL,
	quantidade INT,
	primary key(id_estoque)
);

create table medicamento_aplicado(
	id_medicamento_aplicado SERIAL,
	id_bovino SERIAL,
	id_medicamento SERIAL,
	primary key(id_medicamento_aplicado)
);

create table racao_aplicado(
	id_racao_aplicado SERIAL,
	id_bovino SERIAL,
	id_racao SERIAL,
	primary key(id_racao_aplicado)
);

-- Funções
--CREATE OR REPLACE FUNCTION validate_telefone_format(telefone VARCHAR) RETURNS BOOLEAN AS $$
--begin
--	IF telefone IS NULL THEN
--        RETURN TRUE;
--    END IF;
--   
--    RETURN telefone ~ '^\+\d{2}\s\(\d{2}\)\s\d?\d{4}-\d{4}$';
--END;
--$$ LANGUAGE plpgsql;
--
--CREATE OR REPLACE FUNCTION validate_cpf_format(cpf VARCHAR) RETURNS BOOLEAN AS $$
--begin
--	IF telefone IS NULL THEN
--        RETURN TRUE;
--    END IF;
--   
--    RETURN telefone ~ '^\d{3}\.\d{3}\.\d{3}-\d{2}$';
--END;
--$$ LANGUAGE plpgsql;
--
--CREATE OR REPLACE FUNCTION validate_cnpj_format(cpf VARCHAR) RETURNS BOOLEAN AS $$
--begin
--	IF telefone IS NULL THEN
--        RETURN TRUE;
--    END IF;
--   
--    RETURN telefone ~ '^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$';
--END;
--$$ LANGUAGE plpgsql;
--
---- Telefone format check constraint on pessoa
--ALTER TABLE pessoa
--ADD CONSTRAINT telefone_format_check
--CHECK (validate_telefone_format(telefone));
--
---- Cpf format check constraint on pessoa
--ALTER TABLE pessoa
--ADD CONSTRAINT pessoa_format_check
--CHECK (validate_cpf_format(cpf));




-- Relacionamento: fazenda }0--|| endereco
alter table fazenda
add constraint fk_fazenda_endereco
foreign key (id_endereco) references endereco(id_endereco);

-- Relacionamento: pessoa }o--|| endereco
alter table pessoa
add constraint fk_pessoa_endereco
foreign key (id_endereco) references endereco(id_endereco);

-- Relacionamento: bovino }o--|| pessoa
ALTER TABLE bovino
ADD CONSTRAINT fk_pessoa_proprietario_autal
FOREIGN KEY (id_pessoa_proprietario_atual) REFERENCES pessoa(id_pessoa);
ALTER TABLE bovino
ADD CONSTRAINT fk_pessoa_proprietario_anterior
FOREIGN KEY (id_pessoa_proprietario_anterior) REFERENCES pessoa(id_pessoa);


-- Relacionamento: bovino }o--|| fazenda
ALTER TABLE bovino
ADD CONSTRAINT fk_fazenda_bovino
FOREIGN KEY (id_fazenda) REFERENCES fazenda(id_fazenda);

alter table medicamento_aplicado
add constraint fk_bovino
foreign key (id_bovino) references bovino(id_bovino),
add constraint fk_medicamento
foreign key (id_medicamento) references medicamento(id_medicamento);

-- Relacionamento: bovino }o--|| vacina
--alter table bovino
--add constraint fk_medicamento
--foreign key (id_medicamento) references vacina(id_medicamento);

-- Relacionamento: bovino }o--|| racao


alter table racao_aplicado
add constraint fk_bovino
foreign key (id_bovino) references bovino(id_bovino),
add constraint fk_racao
foreign key (id_racao) references racao(id_racao);

alter table estoque
add constraint fk_medicamento
foreign key (id_medicamento) references  medicamento(id_medicamento),
add constraint fk_racao
foreign key (id_racao) references racao(id_racao);


CREATE OR REPLACE VIEW pessoa_view AS
SELECT
    p.*,
    (
        SELECT json_build_object(
            'id_endereco', e.id_endereco,
			'cep_endereco', e.cep_endereco,
			'rua', e.rua,
			'bairro', e.bairro,
			'cidade', e.cidade,
			'estado', e.estado,
			'pais', e.pais,
			'numero', e.numero,
			'quadra', e.quadra,
			'lote', e.lote,
			'complemento', e.complemento,
			'zona', e.zona
		)
        FROM endereco e
        WHERE e.id_endereco = p.id_endereco
    ) AS endereco
FROM pessoa p;