-- 	id_medicamento SERIAL,
-- 	tipo_medicamento medicamento_enum,
-- 	fabricante_medicamento VARCHAR(255),
-- 	quatindade INT,
-- 	unidade_medida unidade_medida_enum,
-- 	data_validade date_type,
-- 	data_registro date_type,
-- 	primary key(id_medicamento)

\c rancho;

INSERT INTO medicamento (
    nome_medicamento,
    tipo_medicamento,
    fabricante_medicamento,
    volume_medicamento,
    unidade_medida,
    data_validade,
    data_registro,
    bula
)VALUES
    ('','Vitamínico','zoetis',50,'mg','2027-07-17','2024-05-8','CAFEÍNA Estimulante. As xantinas, grupo ao qual pertence a cafeína, são substâncias capazes de estimular o sistema nervoso, produzindo certo estado de alerta de curta duração. É um estimulante do sistema nervoso central, da função cardíaca, da circulação sanguínea e da liberação de adrenalina. A cafeína aumenta a excitabilidade do córtex sensorial, o que leva a um estado de alerta mental mais eficaz, ao aumento da capacidade de realizar trabalho muscular e redução da fadigaVITAMINA B2 (RIBOFLAVINA):A riboflavina (vitamina B2) é um nutriente essencial que mantém as funções do metabolismo em condições normais, atuando como cofator nas reações enzimáticas, principalmente em sistema de transporte de elétronsvitamina B2, ajuda as células a converterem carboidrato em energia sendo essencial para o crescimento de células, produção de células vermelhas e para a saúde dos olhos e da pele. A riboflavina atua como cofator redox no metabolismo gerador de energia, sendo essencial para a formação dos eritrócitos, a neoglicogênese e na regulação das enzimas. VITAMINA B6 (PIRIDOXINA): A vitamina B6, segundo Mendonça (2010), desempenha o papel mais importante, que é o de coenzima no processo de transaminação para a síntese de aminoácidos. Por conseguinte, a piridoxina desempenha muitos papéis-chave no metabolismo – em particular no metabolismo proteico. A vitamina B6 é necessária para o funcionamento adequado de mais de sessenta enzimas e é essencial para a síntese normal do ácido nucleico e das proteínas. Participa da multiplicação de todas as células e da produção das hemácias e das células do sistema imunológico. Influencia o sistema nervoso através de seus efeitos sobre vários minerais e neurotransmissores cerebrais. VITAMINA B3 (NICOTINAMIDA): A niacina participa da formação das coenzimas NAD (nicotinamida adenina dinucleotídeo) e NADP (nicotinamida adenina dinucleotídeo fosfato), responsáveis pela transferência de elétrons e hidrogênio de enzimas participantes do metabolismo dos carboidratos, gorduras e proteínas.'),
    ('','Antibióticos', 'Bayer',  100, 'mg', '2024-12-31', '2024-05-08', 'Este medicamento é um antibiótico de amplo espectro que atua inibindo a síntese de proteínas bacterianas. Indicado para o tratamento de infecções bacterianas em bovinos, suínos, ovinos e caprinos.'),
    ('','Anti-inflamatórios', 'MSD Saúde Animal',  150, 'mg', '2024-11-30', '2024-05-08', 'Este medicamento é um anti-inflamatório não esteroidal (AINE) que atua inibindo a síntese de prostaglandinas. Indicado para o controle da inflamação e dor em animais de produção.'),
    ('','Antiparasitários', 'Zoetis',  200, 'mg', '2024-10-31', '2024-05-08', 'Este medicamento é um antiparasitário de amplo espectro que atua interferindo no metabolismo dos parasitas. Indicado para o controle de parasitas internos e externos em animais de criação.'),
    ('','Vacinas', 'Ourofino',  250, 'mL', '2024-09-30', '2024-05-08', 'Esta vacina é indicada para a imunização ativa de bovinos contra doenças específicas. Deve ser administrada de acordo com o protocolo de vacinação estabelecido pelo médico veterinário responsável.'),
    ('','Vitamínico', 'Vetnil',  300, 'mg', '2024-08-31', '2024-05-08', 'Este medicamento é um suplemento vitamínico indicado para promover o equilíbrio nutricional e o fortalecimento do sistema imunológico de animais de produção. Deve ser administrado conforme orientação do médico veterinário responsável.'),
    ('','Antibióticos', 'Ceva Saúde Animal',  180, 'mg', '2024-07-31', '2024-05-08', 'Este medicamento é um antibiótico bactericida indicado para o tratamento de infecções bacterianas em animais de produção. Deve ser administrado de acordo com a orientação do médico veterinário responsável.'),
    ('','Anti-inflamatórios', 'Boehringer Ingelheim',  220, 'mg', '2024-06-30', '2024-05-08', 'Este medicamento é um anti-inflamatório não esteroidal (AINE) indicado para o controle da inflamação e dor em animais de produção. Deve ser administrado conforme orientação do médico veterinário responsável.'),
    ('','Antiparasitários', 'Virbac',  350, 'mg', '2024-05-31', '2024-05-08', 'Este medicamento é um antiparasitário indicado para o controle de parasitas internos e externos em animais de produção. Deve ser administrado de acordo com a orientação do médico veterinário responsável.'),
    ('','Vacinas', 'Hipra',  280, 'mL', '2024-04-30', '2024-05-08', 'Esta vacina é indicada para a imunização ativa de suínos contra doenças específicas. Deve ser administrada de acordo com o protocolo de vacinação estabelecido pelo médico veterinário responsável.'),
    ('','Vitamínico', 'Syntec',  400, 'mg', '2024-03-31', '2024-05-08', 'Este medicamento é um suplemento vitamínico indicado para promover o equilíbrio nutricional e o fortalecimento do sistema imunológico de animais de produção. Deve ser administrado conforme orientação do médico veterinário responsável.'),
    ('','Antibióticos', 'Agener União',  160, 'mg', '2024-02-29', '2024-05-08', 'Este medicamento é um antibiótico bactericida indicado para o tratamento de infecções bacterianas em animais de produção. Deve ser administrado de acordo com a orientação do médico veterinário responsável.'),
    ('','Anti-inflamatórios', 'Vetoquinol',  200, 'mg', '2024-01-31', '2024-05-08', 'Este medicamento é um anti-inflamatório não esteroidal (AINE) indicado para o controle da inflamação e dor em animais de produção. Deve ser administrado conforme orientação do médico veterinário responsável.'),
    ('','Antiparasitários', 'Fort Dodge',  320, 'mg', '2023-12-31', '2024-05-08', 'Este medicamento é um antiparasitário indicado para o controle de parasitas internos e externos em animais de produção. Deve ser administrado de acordo com a orientação do médico veterinário responsável.'),
    ('','Vacinas', 'Biovet',  240, 'mL', '2023-11-30', '2024-05-08', 'Esta vacina é indicada para a imunização ativa de aves contra doenças específicas. Deve ser administrada de acordo com o protocolo de vacinação estabelecido pelo médico veterinário responsável.'),
    ('','Vitamínico', 'Ouro Fino',  380, 'mg', '2023-10-31', '2024-05-08', 'Este medicamento é um suplemento vitamínico indicado para promover o equilíbrio nutricional e o fortalecimento do sistema imunológico de animais de produção. Deve ser administrado conforme orientação do médico veterinário responsável.'),
    ('','Antibióticos', 'Elanco',  140, 'mg', '2023-09-30', '2024-05-08', 'Este medicamento é um antibiótico bactericida indicado para o tratamento de infecções bacterianas em animais de produção. Deve ser administrado de acordo com a orientação do médico veterinário responsável.'),
    ('','Anti-inflamatórios', 'Ceva Saúde Animal',  180, 'mg', '2023-08-31', '2024-05-08', 'Este medicamento é um anti-inflamatório não esteroidal (AINE) indicado para o controle da inflamação e dor em animais de produção. Deve ser administrado conforme orientação do médico veterinário responsável.'),
    ('','Antiparasitários', 'Merial',  290, 'mg', '2023-07-31', '2024-05-08', 'Este medicamento é um antiparasitário indicado para o controle de parasitas internos e externos em animais de produção. Deve ser administrado de acordo com a orientação do médico veterinário responsável.'),
    ('','Vacinas', 'Merck',  260, 'mL', '2023-06-30', '2024-05-08', 'Esta vacina é indicada para a imunização ativa de equinos contra doenças específicas. Deve ser administrada de acordo com o protocolo de vacinação estabelecido pelo médico veterinário responsável.'),
    ('','Vitamínico', 'Vansil',  420, 'mg', '2023-05-31', '2024-05-08', 'Este medicamento é um suplemento vitamínico indicado para promover o equilíbrio nutricional e o fortalecimento do sistema imunológico de animais de produção. Deve ser administrado conforme orientação do médico veterinário responsável.');
    