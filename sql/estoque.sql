\c rancho;

-- Inserindo medicamentos
INSERT INTO estoque (
    tipo,
    quantidade,
    unidade,
    id_medicamento
) VALUES
    ('medicamento', 15, 'AP', 1),
    ('medicamento', 20, 'CX', 2);


-- Inserindo rações
INSERT INTO estoque(
    tipo,
    quantidade,
    unidade,
    id_racao
) VALUES
    ('racao', 10, 'SC', 1),
    ('racao', 10, 'SC', 2),
    ('racao', 25, 'SC', 3),
    ('racao', 30, 'SC', 4);