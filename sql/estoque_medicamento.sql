\c rancho;
-- Inserir dados na tabela estoque para medicamentos
INSERT INTO estoque (id_medicamento, quantidade_medicamento)
SELECT id_medicamento, SUM(quantidade_medicamento)
FROM medicamento
GROUP BY id_medicamento;

-- Inserir dados na tabela estoque para rações
-- INSERT INTO estoque (id_racao, quantidade_racao)
-- SELECT id_racao, SUM(quantidade_racao)
-- FROM racao
-- GROUP BY id_racao;
