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
CREATE TYPE generos_enum AS ENUM('Masculino', 'Feminino', 'Outros');
-- Enum do estado
CREATE TYPE estados_enum AS ENUM ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO');
-- Enum da zona
CREATE TYPE zona_enum AS ENUM ('RURAL', 'URBANA');
-- Enum pecuaria
CREATE TYPE pecuaria_enum AS ENUM('Fazenda corte', 'Fazenda leiteiro', 'Pastagem de manejo', 'Fazenda de ovinos', 'Fazenda de suinos', 'Fazenda mista');
-- Enum medicamento 
create type medicamento_enum as ENUM('Antibióticos', 'Anti-inflamatórios','Antiparasitários','Vacinas','Vitamínico');
-- Enum unidade de medida
create type unidade_medida_enum as enum('ug','mg','g','mL','CP','AP','TB','FR','CX','CX2','CX3','L', 'T','kg', 'SC');
-- Enum racao
create type racao_enum as ENUM('Ração', 'Proteína','Suplemento','Sal','Nutricional');
-- Enum raca
create type raca_bovino as ENUM('Agnus','Nelore','Brahman','Brangus','Senepol','Hereford','caracu','Charolês','Guzerá','Tabapuã','Simental','Limousin','Chiania','Devon','Belgian Blue','Wagyu');
-- Enum classificação 
create type classificacao_bovino as ENUM('Gol','Cruzado');


CREATE TYPE tipo_estoque AS ENUM('medicamento', 'racao');


CREATE TABLE fazenda(
	id_fazenda SERIAL,
	id_endereco INTEGER NULL,
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
	-- id_endereco INTEGER NULL, -- foreign key OK
	id_fazenda INTEGER NULL,
	nome VARCHAR(255),
	cpf cpf_type,
	nascimento date_type,
	genero 	generos_enum,
	telefone telefone_type NULL,
	email VARCHAR(255),
	senha VARCHAR(512),
	primary key(id_pessoa)
);

CREATE TABLE bovino (
	id_bovino SERIAL,
	id_fazenda INTEGER NULL, -- foreign key  OK
	display_brinco VARCHAR(180),
	uid_brinco VARCHAR(180),
	raca raca_bovino,
	classe classificacao_bovino,
	id_medicamento_aplicado INTEGER NULL, -- foreing key a fazer
	id_racao_aplicado INTEGER NULL, -- foreing key a fazer
	id_pessoa_proprietario_atual INTEGER NULL, -- foreing key a fazer
	data_nascimento date_type,
	data_entrada_confinamento date_type,
	peso_nascimento FLOAT,
	peso_confinamento FLOAT,
	peso_atual FLOAT,
	observacao VARCHAR(5000),
	primary key(id_bovino)
);

create table medicamento(
	id_medicamento SERIAL,
	id_medicamento_aplicado INTEGER NULL,
	nome_medicamento VARCHAR(255),
	tipo_medicamento medicamento_enum,
	fabricante_medicamento VARCHAR(255),
	volume_medicamento FLOAT,
	unidade_medida unidade_medida_enum,
	quantidade_medicamento_estoque INT,
	data_validade date_type,
	data_registro date_type,
	bula VARCHAR(5000),
	primary key(id_medicamento)
);

create table racao(
	id_racao SERIAL,
	id_racao_aplicado INTEGER NULL, --foreing key a fazer
	tipo_racao racao_enum,
	nome_racao VARCHAR(255),
	fabricante_racao VARCHAR(255),
	quantidade_racao_estoque INT,
	peso_saco FLOAT,
	unidade_medida unidade_medida_enum,
	data_validade date_type,
	data_registro date_type,
	informacao_racao VARCHAR(5000),
	primary key(id_racao)
);

create table estoque(
	id_estoque SERIAL,
	id_medicamento INTEGER NULL,
	id_racao INTEGER NULL,
	tipo tipo_estoque NOT NULL,
	quantidade INT,
	unidade unidade_medida_enum,
	primary key(id_estoque)
);

create table medicamento_aplicado(
	id_medicamento_aplicado SERIAL,
	id_bovino INTEGER NULL,
	id_medicamento INTEGER NULL,
	observacao VARCHAR (5000),
	data_aplicada date_type,
	primary key(id_medicamento_aplicado)
);

create table racao_aplicado(
	id_racao_aplicado SERIAL,
	id_bovino INTEGER NULL,
	id_racao INTEGER NULL,
	observacao VARCHAR (5000),
	data_aplicada date_type,
	primary key(id_racao_aplicado)
);

-- -- Funções
-- CREATE OR REPLACE FUNCTION validate_telefone_format(telefone VARCHAR) RETURNS BOOLEAN AS $$
-- begin
-- 	IF telefone IS NULL THEN
--        RETURN TRUE;
--    	END IF;
  
--    RETURN telefone ~ '^\+\d{2}\s\(\d{2}\)\s\d?\d{4}-\d{4}$';
-- END;
-- $$ LANGUAGE plpgsql;
-- --
-- CREATE OR REPLACE FUNCTION validate_cpf_format(cpf VARCHAR) RETURNS BOOLEAN AS $$
-- begin
-- 	IF telefone IS NULL THEN
--        RETURN TRUE;
--    END IF;
  
--    RETURN telefone ~ '^\d{3}\.\d{3}\.\d{3}-\d{2}$';
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE OR REPLACE FUNCTION validate_cnpj_format(cpf VARCHAR) RETURNS BOOLEAN AS $$
-- begin
-- 	IF telefone IS NULL THEN
--        RETURN TRUE;
--    END IF;
  
--    RETURN telefone ~ '^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$';
-- END;
-- $$ LANGUAGE plpgsql;

-- -- Telefone format check constraint on pessoa
-- ALTER TABLE pessoa
-- ADD CONSTRAINT telefone_format_check
-- CHECK (validate_telefone_format(telefone));

-- -- Cpf format check constraint on pessoa
-- ALTER TABLE pessoa
-- ADD CONSTRAINT pessoa_format_check
-- CHECK (validate_cpf_format(cpf));




-- Relacionamento: fazenda }0--|| endereco
alter table fazenda
add constraint fk_fazenda_endereco
foreign key (id_endereco) references endereco(id_endereco);

-- Relacionamento: pessoa }o--|| endereco
-- alter table pessoa
-- add constraint fk_pessoa_endereco
-- foreign key (id_endereco) references endereco(id_endereco);
ALTER TABLE pessoa
ADD CONSTRAINT fk_pessoa_fazenda
FOREIGN KEY (id_fazenda) REFERENCES fazenda(id_fazenda);

-- Relacionamento: bovino }o--|| pessoa
ALTER TABLE bovino
ADD CONSTRAINT fk_pessoa_proprietario_atual
FOREIGN KEY (id_pessoa_proprietario_atual) REFERENCES pessoa(id_pessoa);


-- Relacionamento: bovino }o--|| fazenda
ALTER TABLE bovino
ADD CONSTRAINT fk_fazenda_bovino
FOREIGN KEY (id_fazenda) REFERENCES fazenda(id_fazenda);

alter table medicamento_aplicado
add constraint fk_medicamento
foreign key (id_medicamento) references medicamento(id_medicamento);

alter table racao_aplicado
add constraint fk_racao
foreign key (id_racao) references racao(id_racao);

-- Relacionamento: bovino }o--|| vacina
alter table bovino
add constraint fk_medicamento_aplicado
foreign key (id_medicamento_aplicado) references medicamento_aplicado(id_medicamento_aplicado);

alter table bovino
add constraint fk_racao_aplicado
foreign key (id_racao_aplicado) references racao_aplicado(id_racao_aplicado);


-- Relacionamento: bovino }o--|| racao


-- alter table racao_aplicado
-- add constraint fk_bovino
-- foreign key (id_bovino) references bovino(id_bovino),
-- add constraint fk_racao
-- foreign key (id_racao) references racao(id_racao);


alter table estoque
add constraint fk_medicamento
foreign key (id_medicamento) references  medicamento(id_medicamento);

alter table estoque
add constraint fk_racao
foreign key (id_racao) references racao(id_racao);




CREATE OR REPLACE VIEW pessoa_view AS
SELECT
    p.*,
    json_build_object(
		'id_fazenda' , f.id_fazenda,
		'id_endereco', f.id_endereco,
		'nome_fazenda', f.nome,
		'tamanho_hectare', f.tamanho_hectare,
		'pecuaria', f.pecuaria
	) as fazenda
FROM pessoa p
JOIN fazenda f
	ON p.id_fazenda = f.id_fazenda;

-- CREATE OR REPLACE VIEW bovino_view AS 
-- select
-- 	b.*,
-- 	json_agg(
-- 		json_build_object(
-- 			'id_medicamento_aplicado', ma.id_medicamento_aplicado,
-- 			'id_bovino', ma.id_bovino,
-- 			'id_medicamento', ma.id_medicamento,
-- 			'observacao', ma.observacao,
-- 			'data_aplicada', ma.data_aplicada,
-- 			'medicamento', json_build_object(
-- 				'id_medicamento', m.id_medicamento,
-- 				'id_medicamento_aplicado', m.id_medicamento_aplicado,
-- 				'nome_medicamento', m.nome_medicamento,
-- 				'tipo_medicamento', m.tipo_medicamento,
-- 				'fabricante_medicamento', m.fabricante_medicamento,
-- 				'volume_medicamento', m.volume_medicamento,
-- 				'unidade_medida', m.unidade_medida,
-- 				'data_validade', m.data_validade,
-- 				'data_registro', m.data_registro,
-- 				'bula', m.bula
-- 			) 
-- 		) 
-- 	) as medicamentos_aplicados
-- from bovino b
-- left join medicamento_aplicado ma on ma.id_bovino = b.id_bovino
-- left join medicamento m on m.id_medicamento = ma.id_medicamento
-- group by b.id_bovino;

CREATE OR REPLACE VIEW bovino_view AS
SELECT
    b.*,
    COALESCE(
        (
            select json_agg(
            	json_build_object(
            		'id_medicamento_aplicado', ma.id_medicamento_aplicado,
					'id_bovino', ma.id_bovino,
					'id_medicamento', ma.id_medicamento,
					'observacao', ma.observacao,
					'data_aplicada', ma.data_aplicada,
					'medicamento', json_build_object(
		                'id_medicamento', m.id_medicamento,
		                'id_medicamento_aplicado', m.id_medicamento_aplicado,
		                'nome_medicamento', m.nome_medicamento,
		                'tipo_medicamento', m.tipo_medicamento,
		                'fabricante_medicamento', m.fabricante_medicamento,
		                'volume_medicamento', m.volume_medicamento,
		                'unidade_medida', m.unidade_medida,
		                'data_validade', m.data_validade,
		                'data_registro', m.data_registro,
		                'bula', m.bula
		            )
            	)
            	
            )
            FROM medicamento_aplicado ma
            join medicamento m on m.id_medicamento = ma.id_medicamento
            WHERE ma.id_bovino = b.id_bovino
        ),
        '[]'::json
    ) AS medicamentos_aplicados,
    COALESCE(
        (
            SELECT json_agg(
            	json_build_object(
            		'id_racao_aplicado', ra.id_racao_aplicado,
					'id_bovino', ra.id_bovino,
					'id_racao', ra.id_racao,
					'observacao', ra.observacao,
					'data_aplicada', ra.data_aplicada,
					'racao', json_build_object(
						'id_racao', r.id_racao,
						'id_racao_aplicado', r.id_racao_aplicado,
						'tipo_racao', r.tipo_racao,
						'nome_racao', r.nome_racao,
						'fabricante_racao', r.fabricante_racao,
						'peso_saco', r.peso_saco,
						'unidade_medida', r.unidade_medida,
						'data_validade', r.data_validade,
						'data_registro', r.data_registro,
						'informacao_racao', r.informacao_racao
					)
            	)
            )
            FROM racao_aplicado ra
            join racao r on r.id_racao = ra.id_racao
            WHERE ra.id_bovino = b.id_bovino 
        ),
        '[]'::json
    ) AS racoes_aplicadas
FROM
    bovino b;


CREATE OR REPLACE VIEW fazenda_view AS 
SELECT 
	p.*,
	(
		SELECT json_build_object(
			-- 'id_endereco', e.id_endereco,
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
FROM fazenda p;

CREATE OR REPLACE VIEW medicamento_view AS
select
	m.*
from medicamento m;


CREATE OR REPLACE VIEW racao_view AS
SELECT
	p.*
FROM racao p;

CREATE OR REPLACE VIEW estoque_view AS
SELECT
	p.*,
	(
		SELECT json_build_object
		(
			'id_medicamento_aplicado', e.id_medicamento_aplicado,
			'id_medicamento', e.id_medicamento,
			'fabricante_medicamento', e.fabricante_medicamento,
			'volume_medicamento', e.volume_medicamento,
			'unidade_medida', e.unidade_medida,
			'data_validade', e.data_validade,
			'data_registro', e.data_registro,
			'bula', e.bula
		) FROM medicamento e
		WHERE e.id_medicamento = p.id_medicamento
	) AS medicamento,
	(
		SELECT json_build_object(
			'id_racao_aplicado', a.id_racao_aplicado,
			'id_racao', a.id_racao,
			'fabricante_racao', a.fabricante_racao,
			'peso_saco', a.peso_saco,
			'unidade_medida', a.unidade_medida,
			'data_validade', a.data_validade,
			'data_registro', a.data_registro,
			'informacao_racao', a.informacao_racao
		) FROM racao a
		WHERE a.id_racao = p.id_racao
	) AS racao
FROM estoque p;


