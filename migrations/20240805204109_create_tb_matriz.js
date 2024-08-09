
exports.up = function(knex) {
    return knex.schema.withSchema('balanco_hidrico').createTable('matriz', (table)=> {
      table.increments('id').primary();
      table.date('data_insercao').notNullable();  // YYYY-MM-DD
      table.float('volume_de_entrada').notNullable();
      table.float('consumo_autorizado').notNullable();
      table.float('consumo_autorizado_faturado').notNullable();
      table.float('consumo_autorizado_nao_faturado').notNullable();
      table.float('volume_faturado_medido').notNullable();
      table.float('volume_faturado_nao_medido').notNullable();
      table.float('volume_nao_faturado_medido').notNullable();
      table.float('volume_nao_faturado_nao_medido').notNullable();
      table.float('volume_faturado').notNullable();
      table.float('perdas_de_agua').notNullable();
      table.float('perdas_aparentes').notNullable();
      table.float('perdas_reais').notNullable();
      table.float('submedicao_imprecisao_dos_medidores').notNullable();
      table.float('clandestinos_falhas_de_cadastro').notNullable();
      table.float('fraudes').notNullable();
      table.float('vazamentos_na_aducao').notNullable();
      table.float('vazamentos_na_distribuicao').notNullable();
      table.float('vazamentos_nos_reservatorios').notNullable();
      table.float('volume_nao_faturado').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.withSchema('balanco_hidrico').dropTable('matriz');
  };
  