import { Knex } from 'knex';

import { Util } from '../../util';

import { ETableNames } from '../eTableNames';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(ETableNames.p4m_produtos, (table) => {
      table.increments('id').primary().comment('Identificador interno');

      table.string('nome', 60).notNullable().comment('name - Nome do produto (obrigatório)');

      table.string('descricao', 6000).notNullable().defaultTo('Sem descrição').comment('description - Descrição do produto (aceita HTML, evitar <div>)');

      table.string('codigo_produto', 50).notNullable().comment('productId - Código agrupador do produto (obrigatório)');

      table.string('nome_produto', 60).notNullable().comment('productName - Nome do agrupador do produto (obrigatório)');

      table.decimal('preco', 10, 2).notNullable().defaultTo(0).comment('price - Preço do produto (obrigatório)');

      table.string('sku', 50).notNullable().comment('sku - Código identificador da variação (obrigatório)');

      table.bigInteger('estoque').notNullable().defaultTo(0).comment('stock - Quantidade em estoque (obrigatório)');

      table.decimal('altura_cm', 10, 2).notNullable().defaultTo(0).comment('height - Altura em centímetros (obrigatório)');

      table.decimal('comprimento_cm', 10, 2).notNullable().defaultTo(0).comment('length - Comprimento em centímetros (obrigatório)');

      table.decimal('largura_cm', 10, 2).notNullable().defaultTo(0).comment('width - Largura em centímetros (obrigatório)');

      table.bigInteger('peso_g').notNullable().defaultTo(0).comment('weight - Peso em gramas (obrigatório)');

      table.boolean('ativo').defaultTo(true).comment('active - Se o produto está habilitado para venda (padrão: true)');

      table.string('codigo_anatel', 50).nullable().comment('anatelCode - Código de certificação Anatel');

      table.string('codigo_anvisa', 50).nullable().comment('anvisaCode - Registro ANVISA');

      table.string('marca', 50).nullable().comment('brand - Marca do produto');

      table.string('cor_id', 24).nullable().comment('color - ID da cor do produto');

      table.enu('condicao', ['novo', 'usado']).comment('condition - Condição do produto: novo ou usado');

      table.decimal('preco_custo', 10, 2).notNullable().defaultTo(0).comment('costPrice - Preço de custo');

      table.integer('dias_cross_docking').nullable().comment('crossDockingDays - Dias para envio após a compra');

      table.string('ean', 50).nullable().comment('ean - Código EAN');

      table.string('sabor_id', 24).nullable().comment('flavor - ID do sabor do produto');

      table.enu('genero', ['masculino', 'feminino', 'menino', 'menina', 'unissex']).nullable().comment('gender - Gênero destinado ao produto');

      table.text('imagens', 'longtext').nullable().comment('images - Array de URLs públicas de imagens do produto (separadas por vírgula)');

      table.string('codigo_inmetro', 50).nullable().comment('inmetroCode - Registro INMETRO');

      table.string('codigo_fabricante', 50).nullable().comment('manufacturerPartNumber - Código do fabricante da peça');

      table.string('codigo_mapa', 50).nullable().comment('mapaCode - Registro MAPA');

      table
        .enu('unidade_medida', [
          'un',
          'kg',
          'g',
          'mg',
          'm',
          'm²',
          'm³',
          'cm',
          'cm²',
          'cm³',
          'mm',
          'mm²',
          'mm³',
          'oz',
          'lb',
          'ft',
          'ft²',
          'ft³',
          'in',
          'in²',
          'in³',
        ])
        .nullable()
        .comment('measurementUnit - Unidade de medida do produto');

      table.string('modelo', 50).nullable().comment('model - Modelo do produto');

      table.string('ncm', 50).nullable().comment('ncm - Nomenclatura comum do Mercosul');

      table.enu('origem', ['nacional', 'importado']).nullable().comment('origin - Origem do produto (tributação)');

      table.string('potencia_id', 24).nullable().comment('potency - ID da potência do produto');

      table.boolean('revisado').defaultTo(false).comment('reviewed - Produto revisado (padrão: false)');

      table.string('tamanho_id', 24).nullable().comment('size - ID do tamanho do produto');

      table.decimal('multiplicador_unidade', 10, 4).nullable().comment('unitMultiplier - Multiplicador da unidade (1 a 4 casas decimais)');

      table.string('voltagem_id', 24).nullable().comment('voltage - ID da voltagem do produto');

      table.decimal('garantia_meses', 5, 2).nullable().comment('warranty - Garantia em meses (aceita decimais)');

      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
      table.timestamp('deleted_at').nullable();
    })
    .then(() => {
      Util.Log.info(`# Criado tabela ${ETableNames.p4m_produtos}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.p4m_produtos).then(() => {
    Util.Log.info(`# Excluído tabela ${ETableNames.p4m_produtos}`);
  });
}
