exports.seed = function(knex) {
  // Limpar a tabela antes de inserir novos dados
  return knex('matriz').del()
    .then(function () {
      // Inserir dados
      return knex('matriz').insert([
        {
          data_insercao: '2024-08-06',
          volume_de_entrada: 107773.38,
          consumo_autorizado: 77639.94,
          consumo_autorizado_faturado: 59825.00,
          consumo_autorizado_nao_faturado: 17814.94,
          volume_faturado_medido: 44434.96,
          volume_faturado_nao_medido: 15390.04,
          volume_nao_faturado_medido: 5787.43,
          volume_nao_faturado_nao_medido: 12027.51,
          volume_faturado: 59825.00,
          perdas_de_agua: 30133.44,
          perdas_aparentes: 16510.88,
          perdas_reais: 13622.56,
          submedicao_imprecisao_dos_medidores: 3308.64,
          clandestinos_falhas_de_cadastro: 11229.98,
          fraudes: 1972.26,
          vazamentos_na_aducao: 4440.26,
          vazamentos_na_distribuicao: 9182.30,
          vazamentos_nos_reservatorios: 0.00,
          volume_nao_faturado: 47948.38
        },
      ]);
    });
};
