import { Knex } from 'knex';

import { ETableNames } from '../eTableNames';
import { IAtributo } from '../models/p4mAtributos';
const { NODE_ENV } = process.env;

type AtributoInsert = Omit<IAtributo, 'id' | 'desativado' | 'created_at' | 'updated_at' | 'deleted_at'>;

export const seed = async (knex: Knex) => {
  if (NODE_ENV === 'production') return;

  const result = await knex(ETableNames.p4m_atributos).first();
  if (result) return;

  const atributos = [
    {
      codigo: '6384d2bcb9f239000161ce1b',
      nome: 'LILAS/PRATA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce28',
      nome: 'MARROM SELA/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce27',
      nome: 'MARROM SELA/MARROM SELA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce26',
      nome: 'MARINHO/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce25',
      nome: 'MARINHO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce24',
      nome: 'MARINHO/BRANCO/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce23',
      nome: 'MARINHO/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce22',
      nome: 'MARINHO/BORDO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce21',
      nome: 'MARINHO/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce20',
      nome: 'LILAS/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce1f',
      nome: 'LILAS/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce1e',
      nome: 'LILAS/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce46',
      nome: 'PRETO/ROSE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce1c',
      nome: 'LILAS/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce2b',
      nome: 'MARROM/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce1a',
      nome: 'LILAS/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce19',
      nome: 'LILAS/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce18',
      nome: 'LILAS/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce17',
      nome: 'LILAS/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce16',
      nome: 'LILAS/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce15',
      nome: 'LILAS/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce14',
      nome: 'LILAS/BORDO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce13',
      nome: 'LILAS/BEGE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce12',
      nome: 'LILAS/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce11',
      nome: 'LILAS/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce10',
      nome: 'LILAS/AZUL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce0f',
      nome: 'LILAS/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce1d',
      nome: 'LILAS/ROSA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce37',
      nome: 'PINK/ROSA',
      tipo: 'COR',
    },
    {
      codigo: '617812c66b0b7e0001abbed4',
      nome: 'Ziani',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce44',
      nome: 'PRETO/MULTICOR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce43',
      nome: 'PRETO/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce42',
      nome: 'PRETO/FUME',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce41',
      nome: 'PRETO/FLORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce40',
      nome: 'PRETO/CREME',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce3f',
      nome: 'PRETO/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce3e',
      nome: 'PRETO/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce3d',
      nome: 'PRETO/BRANCO/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce3c',
      nome: 'PRETO/AZUL PETROLEO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce3b',
      nome: 'PRETO/AZUL ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce3a',
      nome: 'PRETO/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce29',
      nome: 'MARROM/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce38',
      nome: 'PRATA/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce2a',
      nome: 'MARROM/BRANCO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce36',
      nome: 'PINK/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce35',
      nome: 'PINK/MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce34',
      nome: 'ONCA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce33',
      nome: 'OFF WHITE/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce32',
      nome: 'NUDE/MARROM',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce31',
      nome: 'NUDE/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce30',
      nome: 'NUDE/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce2f',
      nome: 'MUSGO/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce2e',
      nome: 'MULTICOR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce2d',
      nome: 'MULTICOLOR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce2c',
      nome: 'MARROM/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce0c',
      nome: 'LARANJA/PRATA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce39',
      nome: 'PRATA/ESPELHADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cde1',
      nome: 'CINZA/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce0e',
      nome: 'LARANJA/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdee',
      nome: 'CORAL/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cded',
      nome: 'CORAL/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdec',
      nome: 'CORAL/CHUMBO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdeb',
      nome: 'CORAL/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdea',
      nome: 'CORAL/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cde9',
      nome: 'CORAL/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cde8',
      nome: 'CITRONELA/FUME',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cde7',
      nome: 'CINZA/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cde6',
      nome: 'CINZA/ROSE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cde5',
      nome: 'CINZA/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cde4',
      nome: 'CINZA/PRATA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdf0',
      nome: 'CORAL/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cde2',
      nome: 'CINZA/MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdf1',
      nome: 'CORAL/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cde0',
      nome: 'CINZA/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cddf',
      nome: 'CINZA/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdde',
      nome: 'CINZA/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cddd',
      nome: 'CINZA/AZUL PETROLEO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cddc',
      nome: 'CINZA/AZUL ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cddb',
      nome: 'CINZA/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdda',
      nome: 'CINZA ESCURO/AZUL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdd9',
      nome: 'CINZA CLARO/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdd8',
      nome: 'CINZA CLARO/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdd7',
      nome: 'CINZA CLARO/VERDE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdd6',
      nome: 'CINZA CLARO/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdd5',
      nome: 'CINZA CLARO/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cde3',
      nome: 'CINZA/NUDE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161cdfe',
      nome: 'CREME/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce47',
      nome: 'PRETO/TRANS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce0b',
      nome: 'LARANJA/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce0a',
      nome: 'LARANJA/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce09',
      nome: 'LARANJA/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce08',
      nome: 'LARANJA/BANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce07',
      nome: 'LARANJA/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce06',
      nome: 'LARANJA/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce05',
      nome: 'LARANJA/AZUL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce04',
      nome: 'LARANJA/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce03',
      nome: 'INCOLOR/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce02',
      nome: 'ESTAMPADA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce01',
      nome: 'DOURADO/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdef',
      nome: 'CORAL/CREME',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161cdff',
      nome: 'CREME/VERDE MILITAR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce0d',
      nome: 'LARANJA/PURPURA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161cdfd',
      nome: 'CREME/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdfc',
      nome: 'CREME/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdfb',
      nome: 'CREME/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdfa',
      nome: 'CREME/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdf9',
      nome: 'CREME/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdf8',
      nome: 'CORAL/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdf7',
      nome: 'CORAL/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdf6',
      nome: 'CORAL/ROSA PINK',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdf5',
      nome: 'CORAL/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdf4',
      nome: 'CORAL/ROSA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdf3',
      nome: 'CORAL/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdf2',
      nome: 'CORAL/PRATA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce00',
      nome: 'DIVERSAS',
      tipo: 'COR',
    },
    {
      codigo: '6254701d578762000187f080',
      nome: 'Offwhite',
      tipo: 'COR',
    },
    {
      codigo: '625472c68ca26700013085a3',
      nome: 'Poá',
      tipo: 'COR',
    },
    {
      codigo: '625472ad8ca267000130859a',
      nome: 'Of White',
      tipo: 'COR',
    },
    {
      codigo: '6254725fee301b00016b390f',
      nome: 'Lima',
      tipo: 'COR',
    },
    {
      codigo: '625471f78ca2670001308526',
      nome: 'Chita',
      tipo: 'COR',
    },
    {
      codigo: '625471ad578762000187f233',
      nome: 'Cereja',
      tipo: 'COR',
    },
    {
      codigo: '6254704b2c3fa00001b2c555',
      nome: 'rosa chiclete',
      tipo: 'COR',
    },
    {
      codigo: '625470462c3fa00001b2c54a',
      nome: 'preto e vermelho',
      tipo: 'COR',
    },
    {
      codigo: '625470418ca2670001307e0b',
      nome: 'Preto e pink',
      tipo: 'COR',
    },
    {
      codigo: '6254703b2c3fa00001b2c535',
      nome: 'Preto e mostarda',
      tipo: 'COR',
    },
    {
      codigo: '62547034578762000187f0a9',
      nome: 'Preto e cinza',
      tipo: 'COR',
    },
    {
      codigo: '6254702f2c3fa00001b2c51f',
      nome: 'Preto e chumbo',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce45',
      nome: 'PRETO/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '62547023ee301b00016b3600',
      nome: 'Onça',
      tipo: 'COR',
    },
    {
      codigo: '625472f2ee301b00016b39ef',
      nome: 'Militar',
      tipo: 'COR',
    },
    {
      codigo: '62547016578762000187f075',
      nome: 'Mescla',
      tipo: 'COR',
    },
    {
      codigo: '62547012ee301b00016b35e8',
      nome: 'Marinho',
      tipo: 'COR',
    },
    {
      codigo: '6254700e8ca2670001307db7',
      nome: 'Floral',
      tipo: 'COR',
    },
    {
      codigo: '62546f492c3fa00001b2c426',
      nome: 'Terra',
      tipo: 'COR',
    },
    {
      codigo: '62508b45cce16100019cce59',
      nome: 'Acqua',
      tipo: 'COR',
    },
    {
      codigo: '624ca4cf8ca267000129a0c7',
      nome: 'Branco/Rose',
      tipo: 'COR',
    },
    {
      codigo: '623e052051a6ba0001934970',
      nome: 'Kaki c/ Branco',
      tipo: 'COR',
    },
    {
      codigo: '623e0514304dff00018b875a',
      nome: 'Amarelo c/ Branco',
      tipo: 'COR',
    },
    {
      codigo: '623e04f251a6ba0001934966',
      nome: 'Cinza c/ Branco',
      tipo: 'COR',
    },
    {
      codigo: '623e048aaec329000133242d',
      nome: 'Vinho c/ Branco',
      tipo: 'COR',
    },
    {
      codigo: '623e03dc304dff00018b86b4',
      nome: 'Azul c/ Branco',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee0c',
      nome: 'HC28 - Hollywood Hills',
      tipo: 'COR',
    },
    {
      codigo: '6254702bee301b00016b360f',
      nome: 'Preto e branco',
      tipo: 'COR',
    },
    {
      codigo: '6254c95ecce1610001a085bf',
      nome: 'TU25',
      tipo: 'COR',
    },
    {
      codigo: '6266ba6b1f0d870001369f7a',
      nome: 'BV01',
      tipo: 'COR',
    },
    {
      codigo: '6266ba65eae08b000165b9b6',
      nome: 'FFL30 - Call Me',
      tipo: 'COR',
    },
    {
      codigo: '6266ba5eed00b80001cb225b',
      nome: 'LL07 - Touch',
      tipo: 'COR',
    },
    {
      codigo: '6266ba58ed00b80001cb2259',
      nome: 'MF19 - Black Moon',
      tipo: 'COR',
    },
    {
      codigo: '6266ba51eae08b000165b995',
      nome: 'NP30',
      tipo: 'COR',
    },
    {
      codigo: '6266ba4ceae08b000165b98f',
      nome: 'NP25',
      tipo: 'COR',
    },
    {
      codigo: '6266ba46b3cab00001ff8bcc',
      nome: 'NP10',
      tipo: 'COR',
    },
    {
      codigo: '6266ba40eae08b000165b985',
      nome: 'TU05',
      tipo: 'COR',
    },
    {
      codigo: '6266ba3aeae08b000165b97b',
      nome: 'RCF05',
      tipo: 'COR',
    },
    {
      codigo: '6266ba33b3cab00001ff8bae',
      nome: 'RCF30',
      tipo: 'COR',
    },
    {
      codigo: '6266ba2d1f0d870001369f6f',
      nome: 'RCF35',
      tipo: 'COR',
    },
    {
      codigo: '6266ba26b3cab00001ff8b9b',
      nome: 'RCF40',
      tipo: 'COR',
    },
    {
      codigo: '625472dacce1610001a02c7f',
      nome: 'Poá Preto',
      tipo: 'COR',
    },
    {
      codigo: '6254c96b8ca267000130db92',
      nome: 'TU35',
      tipo: 'COR',
    },
    {
      codigo: '625472f12c3fa00001b2c7c6',
      nome: 'Poá Branco',
      tipo: 'COR',
    },
    {
      codigo: '6254780b578762000187f7af',
      nome: 'Terracota',
      tipo: 'COR',
    },
    {
      codigo: '625476cb578762000187f66f',
      nome: 'Preto Pink',
      tipo: 'COR',
    },
    {
      codigo: '6254754f8ca2670001308d59',
      nome: 'Petróleo',
      tipo: 'COR',
    },
    {
      codigo: '6254735b2c3fa00001b2c83b',
      nome: 'Tigre',
      tipo: 'COR',
    },
    {
      codigo: '625473238ca2670001308605',
      nome: 'Rosa Chiclete',
      tipo: 'COR',
    },
    {
      codigo: '625473218ca2670001308601',
      nome: 'Poá Marinho',
      tipo: 'COR',
    },
    {
      codigo: '625473192c3fa00001b2c7f3',
      nome: 'Preto e Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '6254730bcce1610001a02cc3',
      nome: 'Preto e Pink',
      tipo: 'COR',
    },
    {
      codigo: '62547309578762000187f31e',
      nome: 'Poá Coral',
      tipo: 'COR',
    },
    {
      codigo: '625472ffee301b00016b39fa',
      nome: 'Preto e Branco',
      tipo: 'COR',
    },
    {
      codigo: '625472fa578762000187f308',
      nome: 'Poá Azul',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee09',
      nome: 'HC18 - Gone Surfing',
      tipo: 'COR',
    },
    {
      codigo: '6254c976ee301b00016b8af1',
      nome: 'FFL20 - Immortal',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce54',
      nome: 'ROSA CLARO/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee0b',
      nome: 'HC23 - Going, Going, Gone',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edeb',
      nome: 'MB10',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce60',
      nome: 'ROSA CLARO/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce5f',
      nome: 'ROSA CLARO/ROSE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce5e',
      nome: 'ROSA CLARO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce5d',
      nome: 'ROSA CLARO/PRATA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce5c',
      nome: 'ROSA CLARO/NUDE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce5b',
      nome: 'ROSA CLARO/MARROM',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce5a',
      nome: 'ROSA CLARO/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce59',
      nome: 'ROSA CLARO/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce58',
      nome: 'ROSA CLARO/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce57',
      nome: 'ROSA CLARO/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eded',
      nome: 'TU10',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce55',
      nome: 'ROSA CLARO/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edee',
      nome: 'TU15',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce53',
      nome: 'ROSA CLARO/BORDO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce52',
      nome: 'ROSA CLARO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce51',
      nome: 'ROSA CLARO/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce50',
      nome: 'ROSA CLARO/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce4f',
      nome: 'ROSA BRILHANTE/FUCSIA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce4e',
      nome: 'ROSA BRILHANTE/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce4d',
      nome: 'ROSA BRILHANTE/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce4c',
      nome: 'PRETO/VERMELHO ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce4b',
      nome: 'PRETO/VERDE MILITAR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce4a',
      nome: 'PRETO/VERDE LIMAO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce49',
      nome: 'PRETO/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce48',
      nome: 'PRETO/TRANSPARENTE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce56',
      nome: 'ROSA CLARO/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edfb',
      nome: 'MF22 - Mandala',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdd2',
      nome: 'CINZA CLARO/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee08',
      nome: 'HC15 - Mermaid Eyes',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee07',
      nome: 'HC13 - Amazon',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee06',
      nome: 'HC34 -  Silhouette',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee05',
      nome: 'HC33 - Faux Leather',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee04',
      nome: 'HC32 - Suede',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee03',
      nome: 'HC30 - Toasted Almond',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee02',
      nome: 'HC27 - Moody Monday',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee01',
      nome: 'HC26 - Morocco',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee00',
      nome: 'HC11 - Country Girl',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edff',
      nome: 'HC08 - Darling',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edfe',
      nome: 'HC07 - Harmony',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edec',
      nome: 'TU01',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edfc',
      nome: 'MF01 - City of Angels',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ee0a',
      nome: 'HC21 - Chandelier',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edfa',
      nome: 'MF14 - Hot Jeans',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edf9',
      nome: 'MF02 - Sky Land',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edf8',
      nome: 'MF20 - Apocalypse',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edf7',
      nome: 'MF16 - Change It Up',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edf6',
      nome: 'MF10 - Unforgettable',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edf5',
      nome: 'MF09 - Confidential',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edf4',
      nome: 'MF03 - California Dream',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edf3',
      nome: 'PA01',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edf2',
      nome: 'MA01',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edf1',
      nome: 'TU40',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edf0',
      nome: 'TU30',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edef',
      nome: 'TU20',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edfd',
      nome: 'HC02 - Golden Sweetness',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3267b',
      nome: 'Agenda permanente',
      tipo: 'COR',
    },
    {
      codigo: '6356d200e1645800012e59e9',
      nome: 'Chocolate',
      tipo: 'COR',
    },
    {
      codigo: '6356cecee1645800012e3e4f',
      nome: 'Fucsia',
      tipo: 'COR',
    },
    {
      codigo: '6356cb1de1645800012e21b8',
      nome: 'Preto c/ Azul',
      tipo: 'COR',
    },
    {
      codigo: '6356cadee1645800012e1fd9',
      nome: 'Preto c/ Fucsia',
      tipo: 'COR',
    },
    {
      codigo: '6356c82fe1645800012e0e8a',
      nome: 'Aqua',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32683',
      nome: 'Checklist',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32682',
      nome: 'Menu',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32681',
      nome: 'Diário',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32680',
      nome: 'Mensal',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3267f',
      nome: 'Semanal',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3267e',
      nome: 'Brilhante',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdd4',
      nome: 'CINZA CLARO/ROSA',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3267c',
      nome: 'Agenda datada',
      tipo: 'COR',
    },
    {
      codigo: '63594aa78345c9000123d529',
      nome: 'Branco/Prata',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3267a',
      nome: '90g',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32679',
      nome: 'Em Branco',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32678',
      nome: 'Color Plus 80g',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32676',
      nome: 'Pontilhado 90g',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32675',
      nome: 'Quadriculado 90g',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32674',
      nome: 'Pautado titanium 90g',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32673',
      nome: 'Pautado verde 90g',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32672',
      nome: 'Pautado rosê 90g',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32671',
      nome: 'Pautado dourado 90g',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32670',
      nome: 'Pautado 90g',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3266f',
      nome: 'Pautado 63g',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3266e',
      nome: 'Pato',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3267d',
      nome: 'Pastel',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd4e',
      nome: 'AMARELO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd5e',
      nome: 'AZUL CLARO/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd5d',
      nome: 'AZUL CLARO/AZUL PETROLEO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd5c',
      nome: 'AZUL CLARO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd5b',
      nome: 'AZUL CLARO/AZUL ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd5a',
      nome: 'AZUL CLARO/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd59',
      nome: 'AZUL AGUA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd58',
      nome: 'AZUL ACO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd57',
      nome: 'ANIMAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd56',
      nome: 'AMARELO/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd55',
      nome: 'AMARELO/VERDE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd53',
      nome: 'AMARELO/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd51',
      nome: 'AMARELO/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6356d376e1645800012e6617',
      nome: 'Celeste',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd4f',
      nome: 'AMARELO/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6356db77e1645800012ea59b',
      nome: 'Print',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd4d',
      nome: 'AMARELO/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd4c',
      nome: 'AMARELO/AZUL ACO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd4b',
      nome: 'AMARELO/AZUL',
      tipo: 'COR',
    },
    {
      codigo: '637e5bd30298b7000177f96a',
      nome: 'Marrom',
      tipo: 'COR',
    },
    {
      codigo: '637be49a85e9c60001a2f4ad',
      nome: 'Verde Lemon',
      tipo: 'COR',
    },
    {
      codigo: '637be4780da00f0001c04a8a',
      nome: 'Preto/Caramelo',
      tipo: 'COR',
    },
    {
      codigo: '637be4532cf2c20001cd515d',
      nome: 'Grafite/Pink',
      tipo: 'COR',
    },
    {
      codigo: '637be43d85e9c60001a2f4a4',
      nome: 'Grafite/Lilás',
      tipo: 'COR',
    },
    {
      codigo: '637bc0402cf2c20001cd47c6',
      nome: 'Zebrada',
      tipo: 'COR',
    },
    {
      codigo: '6363c7dfca1b680001ac8208',
      nome: 'Com forro',
      tipo: 'COR',
    },
    {
      codigo: '6363c7d736798c000130b461',
      nome: 'Sem forro',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3266b',
      nome: 'Geométrico',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd50',
      nome: 'AMARELO/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cde8',
      nome: 'MOCASSIN',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3266d',
      nome: 'Moderna',
      tipo: 'COR',
    },
    {
      codigo: '62a1fb6f32f8640001aa40f0',
      nome: 'Preto e Branco/Preto',
      tipo: 'COR',
    },
    {
      codigo: '62a1fa88f69d2f000119d809',
      nome: 'Branco e Branco/Preto',
      tipo: 'COR',
    },
    {
      codigo: '62a0eb47e903f00001ec2810',
      nome: 'Creme/Preto',
      tipo: 'COR',
    },
    {
      codigo: '62a0e9737ac011000139e9b0',
      nome: 'Branco/Creme',
      tipo: 'COR',
    },
    {
      codigo: '629f4b27e45bbb0001bae400',
      nome: 'Preto/Branco e Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '629f4a48e45bbb0001bae2aa',
      nome: 'Preto/Branco e Branco',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cdef',
      nome: 'TULIPERO',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cdee',
      nome: 'RUBRO',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cded',
      nome: 'ROUSE',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cdec',
      nome: 'RACY',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cdeb',
      nome: 'PIMENTA',
      tipo: 'COR',
    },
    {
      codigo: '62a1fb7cf69d2f000119d98e',
      nome: 'Preto e Preto/Branco',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cde9',
      nome: 'NANY',
      tipo: 'COR',
    },
    {
      codigo: '62a88724d788f90001c5fede',
      nome: 'Bege/Areia',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cde7',
      nome: 'MARROCOS',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cde6',
      nome: 'MARINHO FORTE',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cde5',
      nome: 'IRIS',
      tipo: 'COR',
    },
    {
      codigo: '617c67c3dabb0900011b797c',
      nome: 'Verde Militar',
      tipo: 'COR',
    },
    {
      codigo: '617c67c3dabb0900011b797b',
      nome: 'Opaco',
      tipo: 'COR',
    },
    {
      codigo: '617c67c2dabb0900011b797a',
      nome: 'Black Silk Opaco',
      tipo: 'COR',
    },
    {
      codigo: '617c67c1dabb0900011b7979',
      nome: 'Prata Antique Opaco',
      tipo: 'COR',
    },
    {
      codigo: '617c67c1dabb0900011b7978',
      nome: 'Ouro Antique Opaco',
      tipo: 'COR',
    },
    {
      codigo: '617c67c0dabb0900011b7977',
      nome: 'Cobre Antique Opaco',
      tipo: 'COR',
    },
    {
      codigo: '617812dd6b0b7e0001abbee5',
      nome: 'Rose/Branco',
      tipo: 'COR',
    },
    {
      codigo: '617812db6b0b7e0001abbee4',
      nome: 'Red Gold/Preto',
      tipo: 'COR',
    },
    {
      codigo: '617812cd6b0b7e0001abbed9',
      nome: 'Cromo Inox Polido',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cdea',
      nome: 'PARIS',
      tipo: 'COR',
    },
    {
      codigo: '62ed15c2f0692400011b6b42',
      nome: 'Pau Ferro',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd61',
      nome: 'AZUL CLARO/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3266a',
      nome: 'Mármore',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32669',
      nome: 'Traço',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c32668',
      nome: 'Pena',
      tipo: 'COR',
    },
    {
      codigo: '634d78d0e4a82e000168878d',
      nome: 'Cinza/Azul Marinho',
      tipo: 'COR',
    },
    {
      codigo: '634466993d2632000152e3ae',
      nome: 'Marinho/Branco/Boreal',
      tipo: 'COR',
    },
    {
      codigo: '6335a2d8cf56ce000139fe43',
      nome: 'LILAS-ROSA',
      tipo: 'COR',
    },
    {
      codigo: '6335a28ccf56ce000139f9c7',
      nome: 'Azul bebe/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '63359cebcf56ce000139b7ea',
      nome: 'Rosa bebe/Lilas',
      tipo: 'COR',
    },
    {
      codigo: '63359a07cf56ce00013996d0',
      nome: 'ROSA-LILAS',
      tipo: 'COR',
    },
    {
      codigo: '632c9d93f140f80001867abd',
      nome: 'Bege/Caramelo',
      tipo: 'COR',
    },
    {
      codigo: '632c9d89f140f80001867a81',
      nome: 'Rosa/Coral',
      tipo: 'COR',
    },
    {
      codigo: '62a1fb7560bb320001fcd6e4',
      nome: 'Branco e Preto/Branco',
      tipo: 'COR',
    },
    {
      codigo: '62ed15cfca17cd0001af8ff4',
      nome: 'Noce Naturale',
      tipo: 'COR',
    },
    {
      codigo: '63506944ae2b500001c3266c',
      nome: 'Listra',
      tipo: 'COR',
    },
    {
      codigo: '62ed15baca17cd0001af8f83',
      nome: 'Cinzell',
      tipo: 'COR',
    },
    {
      codigo: '62deb9dd27518c0001206eb3',
      nome: 'Ciano',
      tipo: 'COR',
    },
    {
      codigo: '62d56be9e27e8d0001458042',
      nome: 'Incolor',
      tipo: 'COR',
    },
    {
      codigo: '62bd934edb9c4f000132d8f9',
      nome: 'Vermelho/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '62b4cec65c3f2600013113fc',
      nome: 'Rosa Kids',
      tipo: 'COR',
    },
    {
      codigo: '62b4ceae5c3f260001311335',
      nome: 'Azul Kids',
      tipo: 'COR',
    },
    {
      codigo: '62b4cea07a60a80001cdea38',
      nome: 'Amarelo Kids',
      tipo: 'COR',
    },
    {
      codigo: '62aa25aba34ffd0001a9cc7d',
      nome: 'Preto/Rosa e Preto',
      tipo: 'COR',
    },
    {
      codigo: '62aa25a8a34ffd0001a9cc74',
      nome: 'Preto/Rosa e Cinza',
      tipo: 'COR',
    },
    {
      codigo: '62a9d2df94419c00013514f2',
      nome: 'Preto/Branco e Cinza',
      tipo: 'COR',
    },
    {
      codigo: '62a9cc46c7a29500018df541',
      nome: 'Preto/Branco e Creme',
      tipo: 'COR',
    },
    {
      codigo: '62a8874bc7a29500018bcb5a',
      nome: 'Nude/Kaki',
      tipo: 'COR',
    },
    {
      codigo: '63209111f140f8000143b5b3',
      nome: 'Azul Médio',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cda7',
      nome: 'BORDO/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cd9a',
      nome: 'AZUL/CRISTAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdb4',
      nome: 'BRANCO/AZUL PETROLEO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdb3',
      nome: 'BRANCO/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdb2',
      nome: 'BRANCO/AGUA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdb1',
      nome: 'BRANCO//VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdb0',
      nome: 'BORDO/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdaf',
      nome: 'BORDO/VERDE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdae',
      nome: 'BORDO/ROSE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdad',
      nome: 'BORDO/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdac',
      nome: 'BORDO/ROSA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdab',
      nome: 'BORDO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdaa',
      nome: 'BORDO/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdb6',
      nome: 'BRANCO/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cda8',
      nome: 'BORDO/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdb7',
      nome: 'BRANCO/FUME',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cda6',
      nome: 'BORDO/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cda5',
      nome: 'BEGE/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cda4',
      nome: 'BEGE/ROSA/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cda3',
      nome: 'BEGE/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cda2',
      nome: 'BEGE/AZUL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cda1',
      nome: 'AZUL/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cda0',
      nome: 'AZUL/TRANSPARENTE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cd9f',
      nome: 'AZUL/ROYAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cd9e',
      nome: 'AZUL/ROSA/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cd9d',
      nome: 'AZUL/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cd9c',
      nome: 'AZUL/PRATA/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd5f',
      nome: 'AZUL CLARO/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cda9',
      nome: 'BORDO/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdc4',
      nome: 'CHUMBO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '626c2fafb3cab00001063192',
      nome: 'Potência 3000K',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdd1',
      nome: 'CINZA CLARO/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdd0',
      nome: 'CINZA CLARO/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdcf',
      nome: 'CINZA CLARO/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdce',
      nome: 'CINZA CLARO/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdcd',
      nome: 'CINZA CLARO/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdcc',
      nome: 'CINZA CLARO/AZUL PETROLEO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdcb',
      nome: 'CINZA CLARO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdca',
      nome: 'CINZA CLARO/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdc9',
      nome: 'CINZA CLARO/AZUL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdc8',
      nome: 'CINZA CLARO/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdc7',
      nome: 'CHUMBO/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdb5',
      nome: 'BRANCO/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdc5',
      nome: 'CHUMBO/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cd99',
      nome: 'AZUL/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdc3',
      nome: 'CHUMBO/AZUL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdc2',
      nome: 'CHICKEN CROSSING',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdc1',
      nome: 'CARAMELO/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdc0',
      nome: 'BRANCO/VERDE MILITAR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdbf',
      nome: 'BRANCO/VERDE ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdbe',
      nome: 'BRANCO/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdbd',
      nome: 'BRANCO/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdbc',
      nome: 'BRANCO/ROSA BRILHANTE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdbb',
      nome: 'BRANCO/PINK',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdba',
      nome: 'BRANCO/NUDE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdb9',
      nome: 'BRANCO/MULTICOLOR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdb8',
      nome: 'BRANCO/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdc6',
      nome: 'CHUMBO/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd6d',
      nome: 'AZUL ESCURO/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cd9b',
      nome: 'AZUL/METALICO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd7a',
      nome: 'AZUL MARINHO/BRONZE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd79',
      nome: 'AZUL MARINHO/BEGE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd78',
      nome: 'AZUL MARINHO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd77',
      nome: 'AZUL MARINHO/AZUL ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd76',
      nome: 'AZUL MARINHO/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd75',
      nome: 'AZUL ESCURO/VERMELHO ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd74',
      nome: 'AZUL ESCURO/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd73',
      nome: 'AZUL ESCURO/VERDE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd72',
      nome: 'AZUL ESCURO/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd71',
      nome: 'AZUL ESCURO/ROSA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd70',
      nome: 'AZUL ESCURO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd7c',
      nome: 'AZUL MARINHO/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd6e',
      nome: 'AZUL ESCURO/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd7d',
      nome: 'AZUL MARINHO/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd6c',
      nome: 'AZUL ESCURO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd6b',
      nome: 'AZUL ESCURO/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd6a',
      nome: 'AZUL ESCURO/AZUL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd69',
      nome: 'AZUL ESCURO/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd68',
      nome: 'AZUL CLARO/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd67',
      nome: 'AZUL CLARO/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd66',
      nome: 'AZUL CLARO/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd65',
      nome: 'AZUL CLARO/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd64',
      nome: 'AZUL CLARO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd63',
      nome: 'AZUL CLARO/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd62',
      nome: 'AZUL CLARO/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cdd3',
      nome: 'CINZA CLARO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd6f',
      nome: 'AZUL ESCURO/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd8a',
      nome: 'AZUL PETROLEO/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bbb9f239000161cd98',
      nome: 'AZUL/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd97',
      nome: 'AZUL/AZUL PETROLEO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd96',
      nome: 'AZUL/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd95',
      nome: 'AZUL PETROLEO/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd94',
      nome: 'AZUL PETROLEO/VERDE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd93',
      nome: 'AZUL PETROLEO/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd92',
      nome: 'AZUL PETROLEO/ROSA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd91',
      nome: 'AZUL PETROLEO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd90',
      nome: 'AZUL PETROLEO/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd8f',
      nome: 'AZUL PETROLEO/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd8e',
      nome: 'AZUL PETROLEO/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd8d',
      nome: 'AZUL PETROLEO/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd7b',
      nome: 'AZUL MARINHO/CHUMBO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd8b',
      nome: 'AZUL PETROLEO/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd60',
      nome: 'AZUL CLARO/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd89',
      nome: 'AZUL PETROLEO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd88',
      nome: 'AZUL NEON',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd87',
      nome: 'AZUL MARINHO/VERMELHO ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd86',
      nome: 'AZUL MARINHO/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd85',
      nome: 'AZUL MARINHO/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd84',
      nome: 'AZUL MARINHO/ROSE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd83',
      nome: 'AZUL MARINHO/ROSA PINK',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd82',
      nome: 'AZUL MARINHO/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd81',
      nome: 'AZUL MARINHO/NUDE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd80',
      nome: 'AZUL MARINHO/MARROM',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd7f',
      nome: 'AZUL MARINHO/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd7e',
      nome: 'AZUL MARINHO/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd8c',
      nome: 'AZUL PETROLEO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceaf',
      nome: 'VERDE MILITAR/VERDE ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cebc',
      nome: 'VERMELHO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cebb',
      nome: 'VERMELHO/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceba',
      nome: 'VERMELHO ESCURO/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceb9',
      nome: 'VERMELHO ESCURO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceb8',
      nome: 'VERMELHO ESCURO/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceb7',
      nome: 'VERMELHO ESCURO/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceb6',
      nome: 'VERMELHO ESCURO/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceb5',
      nome: 'VERMELHA/AZUL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceb4',
      nome: 'VERDE/NEON',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceb3',
      nome: 'VERDE/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceb2',
      nome: 'VERDE/AZUL ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce68',
      nome: 'ROSA/NEON',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceb0',
      nome: 'VERDE MILITAR/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cebf',
      nome: 'VERMELHO/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceae',
      nome: 'VERDE MILITAR/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cead',
      nome: 'VERDE MILITAR/VERDE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceac',
      nome: 'VERDE MILITAR/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceab',
      nome: 'VERDE MILITAR/MARROM',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceaa',
      nome: 'VERDE MILITAR/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cea9',
      nome: 'VERDE MILITAR/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cea8',
      nome: 'VERDE MILITAR/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cea7',
      nome: 'VERDE MILITAR/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cea6',
      nome: 'VERDE MILITAR/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cea5',
      nome: 'VERDE MILITAR/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cea4',
      nome: 'VERDE LIMAO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cea3',
      nome: 'VERDE ESCURO/VERDE MILITAR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ceb1',
      nome: 'VERDE//ROXO',
      tipo: 'COR',
    },
    {
      codigo: '638e2a6d3ac3330001a660a1',
      nome: 'Poker Chips Roxo',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbc0',
      nome: '80 g colorido',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbbf',
      nome: '90 g branco',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbbe',
      nome: '63 g branco',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbbd',
      nome: 'Selo',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbbc',
      nome: 'Check list',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbbb',
      nome: 'Antique Azul',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbba',
      nome: 'Antique Verde',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbb9',
      nome: 'Antique Caramelo',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbb8',
      nome: 'Slimtech Titanium',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbb7',
      nome: 'Slimtech Preto',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbb6',
      nome: 'Amarelo molduras',
      tipo: 'COR',
    },
    {
      codigo: '6399ef3bab01e200015329a2',
      nome: 'Carvão',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cebd',
      nome: 'VERMELHO/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '638e2a7420826600016ee391',
      nome: 'Buy In Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cebe',
      nome: 'VERMELHO/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '638e2a61803eb600011e28e3',
      nome: 'Poker Chips Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '638e2a5a803eb600011e28df',
      nome: 'On Fire Preto',
      tipo: 'COR',
    },
    {
      codigo: '638e2a503ac3330001a6609c',
      nome: 'Cartas',
      tipo: 'COR',
    },
    {
      codigo: '638e2a4420826600016ee380',
      nome: 'Good Luck Preto',
      tipo: 'COR',
    },
    {
      codigo: '638e2a38803eb600011e28cc',
      nome: 'Good Luck Turquesa',
      tipo: 'COR',
    },
    {
      codigo: '638e2a30803eb600011e28c6',
      nome: 'Black Suits',
      tipo: 'COR',
    },
    {
      codigo: '6384da61d3a7f800010c178c',
      nome: 'ROSA/ROSE',
      tipo: 'COR',
    },
    {
      codigo: '6384d981de30620001597708',
      nome: 'BRANCO/AZUL ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d97c9ad74e00013571f2',
      nome: 'ROSA CLARO/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cec1',
      nome: 'VIOLETA ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cec0',
      nome: 'VERMELHO/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cea0',
      nome: 'VERDE ESCURO/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '638e2a8320826600016ee393',
      nome: 'Buy In Verde',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce75',
      nome: 'ROSE/MARROM',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cea2',
      nome: 'VERDE ESCURO/VERDE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce82',
      nome: 'ROXO/ROSE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce81',
      nome: 'ROXO/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce80',
      nome: 'ROXO/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce7f',
      nome: 'ROXO/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce7e',
      nome: 'ROXO/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce7d',
      nome: 'ROXO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce7c',
      nome: 'ROXO/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce7b',
      nome: 'ROXO/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce7a',
      nome: 'ROSE/TERRACOTA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce79',
      nome: 'ROSE/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce78',
      nome: 'ROSE/ROSA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce84',
      nome: 'ROXO/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce76',
      nome: 'ROSE/PRATA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce85',
      nome: 'SHEEP CROSSING',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce74',
      nome: 'ROSE/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce73',
      nome: 'ROSE/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce72',
      nome: 'ROSE/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce71',
      nome: 'ROSE/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce70',
      nome: 'ROSE/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce6f',
      nome: 'ROSA/VERMELHO ESCURO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce6e',
      nome: 'ROSA/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce6d',
      nome: 'ROSA/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce6c',
      nome: 'ROSA/TRANSPARENTE',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce6b',
      nome: 'ROSA/TERRACOTA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce6a',
      nome: 'ROSA/ROSA',
      tipo: 'COR',
    },
    {
      codigo: '6266f4efeae08b000165f853',
      nome: 'Rosa choque',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce77',
      nome: 'ROSE/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce92',
      nome: 'VERDE CLARO/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbc3',
      nome: '120 g branco',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce9f',
      nome: 'VERDE ESCURO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce9e',
      nome: 'VERDE CLARO/VERDE MILITAR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce9d',
      nome: 'VERDE CLARO/ROXO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce9c',
      nome: 'VERDE CLARO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce9b',
      nome: 'VERDE CLARO/PRATA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce9a',
      nome: 'VERDE CLARO/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce99',
      nome: 'VERDE CLARO/LARANJA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce98',
      nome: 'VERDE CLARO/CORAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce97',
      nome: 'VERDE CLARO/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce96',
      nome: 'VERDE CLARO/CINZA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce95',
      nome: 'VERDE CLARO/BRANCO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce83',
      nome: 'ROXO/VERDE CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce93',
      nome: 'VERDE CLARO/AZUL MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161cea1',
      nome: 'VERDE ESCURO/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce91',
      nome: 'VERDE CLARO/AZUL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce90',
      nome: 'VERDE CLARO/AMARELO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce8f',
      nome: 'TRIBAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce8e',
      nome: 'TRANSPARENTE/ROSA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce8d',
      nome: 'TRANSPARENTE/PRETO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce8c',
      nome: 'TRANSPARENTE/FUME',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce8b',
      nome: 'TRANSPARENTE/AZUL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce8a',
      nome: 'TRANS/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce89',
      nome: 'TERRACOTA/DOURADO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce88',
      nome: 'SORTIDO - NAO USAR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce87',
      nome: 'SORTIDA - NAO USAR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce86',
      nome: 'SORTIDA',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bdb9f239000161ce94',
      nome: 'VERDE CLARO/AZUL PETROLEO',
      tipo: 'COR',
    },
    {
      codigo: '63ce8757ec39fb0001a74b97',
      nome: 'AA 9011 courino caramelo',
      tipo: 'COR',
    },
    {
      codigo: '63ce8645173067000168ee81',
      nome: 'Borgo cor 04',
      tipo: 'COR',
    },
    {
      codigo: '640732ec08a7cf00013fab8f',
      nome: 'Vida',
      tipo: 'COR',
    },
    {
      codigo: '640732e81130da0001ee3178',
      nome: 'Summer',
      tipo: 'COR',
    },
    {
      codigo: '6402077a1130da0001ed983c',
      nome: 'Estampado Preto',
      tipo: 'COR',
    },
    {
      codigo: '63ff7d23dfd8ff0001afb9cf',
      nome: 'Preto e Chocolate',
      tipo: 'COR',
    },
    {
      codigo: '63efda056ca1f700019eb335',
      nome: 'Madeira Escura',
      tipo: 'COR',
    },
    {
      codigo: '63efd9966aa1ae0001962b88',
      nome: 'Madeira clara',
      tipo: 'COR',
    },
    {
      codigo: '63efd50b6ca1f700019eb0e0',
      nome: 'Cinza Médio',
      tipo: 'COR',
    },
    {
      codigo: '63eaa281f58f8a0001fcd7e6',
      nome: 'Blush',
      tipo: 'COR',
    },
    {
      codigo: '63ea2fb2f58f8a0001fc39c3',
      nome: 'Mescla Claro',
      tipo: 'COR',
    },
    {
      codigo: '63ceb2d9d371940001cf9979',
      nome: 'AZUL CRUZEIRO',
      tipo: 'COR',
    },
    {
      codigo: '63ceb2d4d371940001cf9978',
      nome: 'CINZA IPOJU',
      tipo: 'COR',
    },
    {
      codigo: '640732fb69d7250001a8b07d',
      nome: 'Novo Ciclo',
      tipo: 'COR',
    },
    {
      codigo: '63ceb2c3f09b7400014ce1f6',
      nome: 'VERMELHO MACEIO',
      tipo: 'COR',
    },
    {
      codigo: '640732fe57c3eb0001ff8721',
      nome: 'Recomeço',
      tipo: 'COR',
    },
    {
      codigo: '63ce8748ec39fb0001a74b85',
      nome: 'I – 37',
      tipo: 'COR',
    },
    {
      codigo: '63ce8738ec39fb0001a74b68',
      nome: 'I – 34',
      tipo: 'COR',
    },
    {
      codigo: '63ce8700ec39fb0001a74b18',
      nome: 'I – 04',
      tipo: 'COR',
    },
    {
      codigo: '63ce86f10f39320001f4927a',
      nome: 'Costas M Star caramelo/ assento pisano 07',
      tipo: 'COR',
    },
    {
      codigo: '63ce86e40f39320001f49277',
      nome: 'A – klint 06 linho cinza',
      tipo: 'COR',
    },
    {
      codigo: '63ce86d3ec39fb0001a74ae9',
      nome: 'A – plus cinza linho cinza',
      tipo: 'COR',
    },
    {
      codigo: '63ce86c10f39320001f4926d',
      nome: 'A – 18420-78 linho bege',
      tipo: 'COR',
    },
    {
      codigo: '63ce86b1ec39fb0001a74ac5',
      nome: 'A – 18422-105 linho bege',
      tipo: 'COR',
    },
    {
      codigo: '63ce8699ec39fb0001a74ab9',
      nome: 'A – 18422-78 linho bege',
      tipo: 'COR',
    },
    {
      codigo: '63ce8689ec39fb0001a74aa8',
      nome: 'Robust 75 – cinto trópico 006',
      tipo: 'COR',
    },
    {
      codigo: '63ce8679ec39fb0001a74a92',
      nome: 'Assento trópico cor 006/ costas robust 75',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbc1',
      nome: '80 g marfim',
      tipo: 'COR',
    },
    {
      codigo: '63ceb2cdf09b7400014ce1f7',
      nome: 'VERMELHO CANDY',
      tipo: 'COR',
    },
    {
      codigo: '642b39b5bfadaa00010aae55',
      nome: 'bordo/azul',
      tipo: 'COR',
    },
    {
      codigo: '617c67c4dabb0900011b797d',
      nome: 'Sal Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6470f38d0b068d0001a8fecd',
      nome: 'verde escuro/prata',
      tipo: 'COR',
    },
    {
      codigo: '6470f2466b794b00010f2133',
      nome: 'amarelo/prata',
      tipo: 'COR',
    },
    {
      codigo: '646b5e5a6b794b00010d2de3',
      nome: 'Fúcsia escuro',
      tipo: 'COR',
    },
    {
      codigo: '6452c3a19c3c86000144eec6',
      nome: 'Banco/Marinho',
      tipo: 'COR',
    },
    {
      codigo: '6452c2768bb82d0001db7fa4',
      nome: 'Branco/Marinho',
      tipo: 'COR',
    },
    {
      codigo: '6452b2228bb82d0001db7428',
      nome: 'Rosa Colorido',
      tipo: 'COR',
    },
    {
      codigo: '644c0dcb8bb82d0001d98bd5',
      nome: 'Camurça',
      tipo: 'COR',
    },
    {
      codigo: '644a8ac5f4cbae00018eb5b7',
      nome: 'Preto/Marinho',
      tipo: 'COR',
    },
    {
      codigo: '643e8bc810c1780001948b17',
      nome: 'Moldura Flutuante Amadeirada',
      tipo: 'COR',
    },
    {
      codigo: '643e8bc16ec8b70001ffc089',
      nome: 'Moldura Flutuante Preta',
      tipo: 'COR',
    },
    {
      codigo: '643e8bb3efd09700011a48ab',
      nome: 'Moldura Flutuante Branca',
      tipo: 'COR',
    },
    {
      codigo: '640732f508a7cf00013fab91',
      nome: 'Re-pensar',
      tipo: 'COR',
    },
    {
      codigo: '642b3e2fcca9ce00014a4026',
      nome: 'bordo/azul claro',
      tipo: 'COR',
    },
    {
      codigo: '63ce8635173067000168ee7d',
      nome: 'Borgo cor 02',
      tipo: 'COR',
    },
    {
      codigo: '64272a8271aaf40001b87bdf',
      nome: 'Rose/Bordo',
      tipo: 'COR',
    },
    {
      codigo: '6418895e93e27f0001ee850f',
      nome: 'CORINTHIANS',
      tipo: 'COR',
    },
    {
      codigo: '641889572708470001335fea',
      nome: 'SANTOS',
      tipo: 'COR',
    },
    {
      codigo: '6418895093e27f0001ee8508',
      nome: 'FLAMENGO',
      tipo: 'COR',
    },
    {
      codigo: '64184c37a066130001c823ef',
      nome: 'Dourado/branco',
      tipo: 'COR',
    },
    {
      codigo: '6408ee4857c3eb0001001313',
      nome: 'Hibisco',
      tipo: 'COR',
    },
    {
      codigo: '6408ee4269d7250001a962a2',
      nome: 'Wood/Madeira',
      tipo: 'COR',
    },
    {
      codigo: '6408ee3b08a7cf0001403d73',
      nome: 'Brush',
      tipo: 'COR',
    },
    {
      codigo: '6408ee3208a7cf0001403d72',
      nome: 'Oliva',
      tipo: 'COR',
    },
    {
      codigo: '6408ee1b69d7250001a9629a',
      nome: 'Pistache',
      tipo: 'COR',
    },
    {
      codigo: '6408ee1457c3eb00010012d8',
      nome: 'Ocre',
      tipo: 'COR',
    },
    {
      codigo: '6408ee0d69d7250001a96297',
      nome: 'Verde Sálvia',
      tipo: 'COR',
    },
    {
      codigo: '642c3dd3bfadaa00010b7c57',
      nome: 'Bege/Rosa claro',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbcf',
      nome: 'Oblíquo',
      tipo: 'COR',
    },
    {
      codigo: '63ce8655ec39fb0001a74a61',
      nome: 'Huskquare cor 02',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbdc',
      nome: 'Cristal warm',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbdb',
      nome: 'Holográfico',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbda',
      nome: 'Metalizado',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbd9',
      nome: 'triangular',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbd8',
      nome: 'Zebra',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbd7',
      nome: 'Moderna amarelo',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbd6',
      nome: 'Moderna verde',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbd5',
      nome: 'Pato amarelo e rosa',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbd4',
      nome: 'Moderna rosa',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbd3',
      nome: 'Moderna preto',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbd2',
      nome: 'Pato preto e amarelo',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbde',
      nome: 'Kit',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbd0',
      nome: 'Rosa metalizado',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbdf',
      nome: 'Cristal',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbce',
      nome: 'Listras',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbcd',
      nome: '120 g titanium',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbcc',
      nome: '120 g verde',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbcb',
      nome: '120 g rosa',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbca',
      nome: '120 g dourado',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbc9',
      nome: 'cores pastéis',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbc8',
      nome: '90 g dourado',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbc7',
      nome: '90 g rosa',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbc6',
      nome: '90 g verde',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbc5',
      nome: '90 g titanium',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbc4',
      nome: 'cores escuras',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce67',
      nome: 'ROSA/MARINHO',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbd1',
      nome: 'Pato azul e rosa',
      tipo: 'COR',
    },
    {
      codigo: '63ce84a0ec39fb0001a746dc',
      nome: '3270 linho bege',
      tipo: 'COR',
    },
    {
      codigo: '63ce861eec39fb0001a74a34',
      nome: 'Huskquare cor 03',
      tipo: 'COR',
    },
    {
      codigo: '63ce8606ec39fb0001a749fc',
      nome: 'Frame cor 01',
      tipo: 'COR',
    },
    {
      codigo: '63ce85f5ec39fb0001a749c4',
      nome: 'Ohio cor 01',
      tipo: 'COR',
    },
    {
      codigo: '63ce85e4ec39fb0001a7498a',
      nome: 'D796 linho cinza',
      tipo: 'COR',
    },
    {
      codigo: '63ce85d1ec39fb0001a7494c',
      nome: 'D764 linho cinza escuroD764 linho cinza escuro',
      tipo: 'COR',
    },
    {
      codigo: '63ce8585ec39fb0001a74888',
      nome: 'D727 linho cinza escuro',
      tipo: 'COR',
    },
    {
      codigo: '63ce855cec39fb0001a74857',
      nome: 'D724 linho cinza',
      tipo: 'COR',
    },
    {
      codigo: '63ce8540ec39fb0001a7483d',
      nome: 'D723 linho bege',
      tipo: 'COR',
    },
    {
      codigo: '63ce852cec39fb0001a747ba',
      nome: 'D722 linho bege',
      tipo: 'COR',
    },
    {
      codigo: '63ce8513ec39fb0001a74752',
      nome: 'D721 linho branco',
      tipo: 'COR',
    },
    {
      codigo: '63ce84f8ec39fb0001a7472c',
      nome: '3286 boucle cinza escuro',
      tipo: 'COR',
    },
    {
      codigo: '63ce84e0173067000168ee4b',
      nome: '3287 boucle cinza',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbdd',
      nome: 'Cristal Cool',
      tipo: 'COR',
    },
    {
      codigo: '63ce84b5ec39fb0001a746e4',
      nome: '3188 linho bege',
      tipo: 'COR',
    },
    {
      codigo: '63a1c62f1d4fd2000165bbc2',
      nome: 'Balão apricot',
      tipo: 'COR',
    },
    {
      codigo: '63ce8471ec39fb0001a746d0',
      nome: '3187 linho cinza',
      tipo: 'COR',
    },
    {
      codigo: '63ce8453ec39fb0001a746b3',
      nome: 'Base cinamomo off White/ tampo vidro off White',
      tipo: 'COR',
    },
    {
      codigo: '63ce843a0f39320001f4924f',
      nome: 'Base cinamomo/ tampo vidro off White',
      tipo: 'COR',
    },
    {
      codigo: '63ce8153ec39fb0001a7411d',
      nome: 'Toda em cinamomo',
      tipo: 'COR',
    },
    {
      codigo: '63bc789a46d7870001982ef7',
      nome: 'Roxo/dourado',
      tipo: 'COR',
    },
    {
      codigo: '63b46ee9c5864000016c5115',
      nome: 'Preto/Amarelo/Dourado',
      tipo: 'COR',
    },
    {
      codigo: '63b46ed1c5864000016c5109',
      nome: 'Preto/Vermelho/Dourado',
      tipo: 'COR',
    },
    {
      codigo: '63b46ec5c5864000016c5102',
      nome: 'Preto/Azul/S-Lime',
      tipo: 'COR',
    },
    {
      codigo: '63b46ea7d714ba000137d5a0',
      nome: 'Vermelho/Vinho/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '63b46846c5864000016c491d',
      nome: 'Vermelho/Vinho',
      tipo: 'COR',
    },
    {
      codigo: '63b46512c5864000016c4831',
      nome: 'Azul/Azul',
      tipo: 'COR',
    },
    {
      codigo: '63b34404fc7e1e0001f88035',
      nome: '4 Preto/3 Marinho/3 Mescla',
      tipo: 'COR',
    },
    {
      codigo: '63ce84cbec39fb0001a746ed',
      nome: '3288 boucle gelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ad',
      nome: 'Cinza e Roxo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ba',
      nome: 'Fossil Grafite',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264b9',
      nome: 'Fossil Canela',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264b8',
      nome: 'Fossil Brown',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264b7',
      nome: 'Dourado e Rosê',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264b6',
      nome: 'Coral e Vinho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264b5',
      nome: 'Coral e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264b4',
      nome: 'Coral e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264b3',
      nome: 'Coral e Marinho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264b2',
      nome: 'Conhaque',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264b1',
      nome: 'Cinza Rosa e Verde',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264b0',
      nome: 'Cinza e Vinho',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce69',
      nome: 'ROSA/NUDE',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ae',
      nome: 'Cinza e Verde',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264bd',
      nome: 'Gelo e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ac',
      nome: 'Cinza e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ab',
      nome: 'Cinza e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264aa',
      nome: 'Cinza e Marinho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264a9',
      nome: 'Cinza e Lima Neon',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264a8',
      nome: 'Cinza e Lilás',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264a7',
      nome: 'Cinza e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264a6',
      nome: 'Cinza e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264a5',
      nome: 'Cinza e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264a4',
      nome: 'Cinza e Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264a3',
      nome: 'Chumbo e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264a2',
      nome: 'Chumbo e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264a1',
      nome: 'Carbono e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264af',
      nome: 'Cinza e Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264c9',
      nome: 'Laranja e Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264d8',
      nome: 'Marinho e Grafite',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264d7',
      nome: 'Marinho e Dourado',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264d6',
      nome: 'Marinho e Coral',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264d5',
      nome: 'Marinho e Cinza',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264d3',
      nome: 'Marinho e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264d2',
      nome: 'Marinho e Bege',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264d1',
      nome: 'Marinho e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264d0',
      nome: 'Marinho e Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264cf',
      nome: 'Lima e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ce',
      nome: 'Lilás e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264cd',
      nome: 'Lilás e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264cc',
      nome: 'Lilás e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264bb',
      nome: 'Gelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ca',
      nome: 'Laranja e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264bc',
      nome: 'Gelo e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264c8',
      nome: 'Grafite Rosa e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264c7',
      nome: 'Grafite e Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264c6',
      nome: 'Grafite e Verde',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264c5',
      nome: 'Grafite e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264c4',
      nome: 'Grafite e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264c3',
      nome: 'Grafite e Marinho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264c2',
      nome: 'Grafite e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264c1',
      nome: 'Grafite e Dourado',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264c0',
      nome: 'Grafite e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264bf',
      nome: 'Grafite e Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264be',
      nome: 'Grafite Azul e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d2649e',
      nome: 'Café',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264cb',
      nome: 'Laranja e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26470',
      nome: 'Azul e Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264a0',
      nome: 'Carbon',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2647e',
      nome: 'Azul e Verde',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2647d',
      nome: 'Azul e Salmão',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2647c',
      nome: 'Azul e Roxo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2647b',
      nome: 'Azul e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2647a',
      nome: 'Azul e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26479',
      nome: 'Azul e Prata',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26477',
      nome: 'Azul e Marinho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26476',
      nome: 'Azul e Lilás',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26475',
      nome: 'Azul e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26474',
      nome: 'Azul e Grafite',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26473',
      nome: 'Azul e Champanhe',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26480',
      nome: 'Azul Grafite e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26471',
      nome: 'Azul e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26481',
      nome: 'Azul Marinho e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2646f',
      nome: 'Azul Dourado e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2646e',
      nome: 'Aquário e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2646d',
      nome: 'Antilope',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2646c',
      nome: 'Amarelo e Roxo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2646b',
      nome: 'Amarelo e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2646a',
      nome: 'Amarelo e Branco',
      tipo: 'COR',
    },
    {
      codigo: '628bd3be3d491d00013efc1e',
      nome: 'GBA',
      tipo: 'COR',
    },
    {
      codigo: '628bd3ba130ae80001d9f0b1',
      nome: 'Procore',
      tipo: 'COR',
    },
    {
      codigo: '627e574d8485bf0001519306',
      nome: 'Taupe',
      tipo: 'COR',
    },
    {
      codigo: '626c2fbb0ca2b500017b00e3',
      nome: 'Potência 6000K',
      tipo: 'COR',
    },
    {
      codigo: '626c2fb5ed00b80001d1a032',
      nome: 'Potência 4000K',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd52',
      nome: 'AMARELO/ROSA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26472',
      nome: 'Azul e Bronze',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26490',
      nome: 'Branco e Bege',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264db',
      nome: 'Marinho e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2649d',
      nome: 'Cafe',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2649c',
      nome: 'Branco e Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2649b',
      nome: 'Branco e Verde',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2649a',
      nome: 'Branco e Rosa Claro',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26499',
      nome: 'Branco e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26498',
      nome: 'Branco e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26497',
      nome: 'Branco e Prata',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26496',
      nome: 'Branco e Marinho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26495',
      nome: 'Branco e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26494',
      nome: 'Branco e Dourado',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26493',
      nome: 'Branco e Coral',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2647f',
      nome: 'Azul e Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26491',
      nome: 'Branco e Cinza',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d2649f',
      nome: 'Caqui e Areia',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2648f',
      nome: 'Branco e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2648e',
      nome: 'Branco e Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2648d',
      nome: 'Bege e Verde',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2648c',
      nome: 'Bege e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2648b',
      nome: 'Bege e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d2648a',
      nome: 'Bege e Onça',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26489',
      nome: 'Bege e Marrom',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26488',
      nome: 'Bege e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26487',
      nome: 'Bege e Dourado',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26486',
      nome: 'Bege e Coral',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26484',
      nome: 'Bege e Cinza',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26483',
      nome: 'Bege e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5715217c0001d26492',
      nome: 'Branco e Cobre',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26523',
      nome: 'Verde e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26516',
      nome: 'Rosa e Roxo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26530',
      nome: 'Vinho e Marinho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2652f',
      nome: 'Vinho e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2652e',
      nome: 'Vinho e Bege',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2652d',
      nome: 'Vermelho e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2652c',
      nome: 'Vermelho e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2652b',
      nome: 'Vermelho e Cinza',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2652a',
      nome: 'Vermelho e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26529',
      nome: 'Vermelho e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26528',
      nome: 'Verde Limão e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26527',
      nome: 'Verde Limão e Cinza',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26526',
      nome: 'Verde Limão e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26532',
      nome: 'Vinho e Rosa claro',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26524',
      nome: 'Verde escuro e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26533',
      nome: 'Vinho e Verde',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26522',
      nome: 'Verde e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26521',
      nome: 'Verde e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26520',
      nome: 'Verde e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2651f',
      nome: 'Verde e Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2651e',
      nome: 'Salmão e Vinho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2651d',
      nome: 'Roxo e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2651c',
      nome: 'Roxo e Lilás',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2651b',
      nome: 'Roxo e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d2651a',
      nome: 'Roxo e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26519',
      nome: 'Roxo e Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26518',
      nome: 'Rose e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264d9',
      nome: 'Marinho e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26525',
      nome: 'Verde Lima e Preto',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cddc',
      nome: 'BR/BR',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce66',
      nome: 'ROSA/LILAS',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce65',
      nome: 'ROSA/CRISTAL',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce64',
      nome: 'ROSA/CINZA CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce63',
      nome: 'ROSA/BORDO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce62',
      nome: 'ROSA/AZUL CLARO',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bcb9f239000161ce61',
      nome: 'ROSA CLARO/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cde4',
      nome: 'FROZEN',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cde3',
      nome: 'ESTER',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cde2',
      nome: 'CRU/CORDAO CRU',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cde1',
      nome: 'BUBBLEGUM',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cde0',
      nome: 'BR/VERMELHO',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cddf',
      nome: 'BR/RACY',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26531',
      nome: 'Vinho e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cddd',
      nome: 'BR/MARCIA',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26515',
      nome: 'Rosa e Preto',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cddb',
      nome: 'ATALAIA',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cdda',
      nome: 'ALUMINIO',
      tipo: 'COR',
    },
    {
      codigo: '629a181d996211000129f873',
      nome: 'VD FEN-009',
      tipo: 'COR',
    },
    {
      codigo: '629a180ed9ec120001fa014e',
      nome: 'ROSA-010',
      tipo: 'COR',
    },
    {
      codigo: '629a1803996211000129f852',
      nome: 'ROSA-004',
      tipo: 'COR',
    },
    {
      codigo: '629a17fad9ec120001fa012c',
      nome: 'KAKI-003',
      tipo: 'COR',
    },
    {
      codigo: '629a17f010af2700015d3f86',
      nome: 'CINZA-008',
      tipo: 'COR',
    },
    {
      codigo: '629a17de15217c0001d41b1f',
      nome: 'BEGE-007',
      tipo: 'COR',
    },
    {
      codigo: '629a17d6996211000129f80d',
      nome: 'BEGE-002',
      tipo: 'COR',
    },
    {
      codigo: '629a17c567311b00010b8bb5',
      nome: 'AZUL-011',
      tipo: 'COR',
    },
    {
      codigo: '629a17ba10af2700015d3f43',
      nome: 'AZUL-006',
      tipo: 'COR',
    },
    {
      codigo: '629a145567311b00010b8551',
      nome: 'CINZA-005',
      tipo: 'COR',
    },
    {
      codigo: '629e4c57d9ec12000100cdde',
      nome: 'BR/PR',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264e8',
      nome: 'Off White e Rosê',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26517',
      nome: 'Rosa e Salmão',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264f6',
      nome: 'Preto e Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264f5',
      nome: 'Preto Dourado e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264f3',
      nome: 'Preto Cinza e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264f2',
      nome: 'Prata e Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264f1',
      nome: 'Prata e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264f0',
      nome: 'Prata e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ef',
      nome: 'Prata e Marinho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ee',
      nome: 'Prata e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ed',
      nome: 'Prata e Cinza',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ec',
      nome: 'Prata e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264eb',
      nome: 'Prata e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264f8',
      nome: 'Preto e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264e9',
      nome: 'PB',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264f9',
      nome: 'Preto e Azul Claro',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264e7',
      nome: 'Musgo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264e6',
      nome: 'Multicolorido e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264e5',
      nome: 'Multicolorido e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264e4',
      nome: 'Mostarda e Marrom',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264e3',
      nome: 'Marrom e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264e2',
      nome: 'Marrom e Musgo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264e1',
      nome: 'Marinho e Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264df',
      nome: 'Marinho e Verde',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264de',
      nome: 'Marinho e Roxo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264dd',
      nome: 'Marinho e Rosa Claro',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264dc',
      nome: 'Marinho e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '62699f72b3cab00001031613',
      nome: 'Amarelo Ouro',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ea',
      nome: 'Prata e Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d26506',
      nome: 'Preto e Rose',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26514',
      nome: 'Rosa e Cobre',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26513',
      nome: 'Rosa e Cinza',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26512',
      nome: 'Rosa e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5915217c0001d26511',
      nome: 'Rosa e Azul',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d26510',
      nome: 'Rosa Antigo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d2650f',
      nome: 'Rhone',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d2650e',
      nome: 'Preto Verniz',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d2650d',
      nome: 'Preto Vermelho e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d2650c',
      nome: 'Preto Verde e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d2650b',
      nome: 'Preto Prata e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d2650a',
      nome: 'Preto e Verde claro',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d26509',
      nome: 'Preto e Verde',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264f7',
      nome: 'Preto e Areia',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d26507',
      nome: 'Preto e Roxo',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264da',
      nome: 'Marinho e Prata',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d26505',
      nome: 'Preto e Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d26504',
      nome: 'Preto e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d26503',
      nome: 'Preto e Prata',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d26502',
      nome: 'Preto e Marrom',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d26501',
      nome: 'Preto e Lilás',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d26500',
      nome: 'Preto e Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264ff',
      nome: 'Preto e Grafite',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264fe',
      nome: 'Preto e Dourado',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264fd',
      nome: 'Preto e Cobre',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264fc',
      nome: 'Preto e Camuflado',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264fb',
      nome: 'Preto e Bronze',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d264fa',
      nome: 'Preto e Bege',
      tipo: 'COR',
    },
    {
      codigo: '6298fb5815217c0001d26508',
      nome: 'Preto e Salmão',
      tipo: 'COR',
    },
    {
      codigo: '5bb920563495e6000158761f',
      nome: 'Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5be741ce31f80000016c68aa',
      nome: 'Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5be545635bf3de00013b3578',
      nome: 'Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5be5454d5bf3de00013b3577',
      nome: 'Azul Petróleo',
      tipo: 'COR',
    },
    {
      codigo: '5be545425bf3de00013b3576',
      nome: 'Azul Marinho',
      tipo: 'COR',
    },
    {
      codigo: '5be545305bf3de00013b3575',
      nome: 'Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5be541435bf3de00013b3566',
      nome: 'Rosa Claro',
      tipo: 'COR',
    },
    {
      codigo: '5be541345bf3de00013b3565',
      nome: 'Laranja/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5be53d475bf3de00013b354b',
      nome: 'Verde Claro',
      tipo: 'COR',
    },
    {
      codigo: '5be53b945bf3de00013b3541',
      nome: 'Preto',
      tipo: 'COR',
    },
    {
      codigo: '5be538a65bf3de00013b3531',
      nome: 'Azul Marinho/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5bb92f613495e600015876e4',
      nome: 'Laranja/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eda3',
      nome: 'IML18 - Satisfied',
      tipo: 'COR',
    },
    {
      codigo: '5bb9210d3495e60001587624',
      nome: 'Branco',
      tipo: 'COR',
    },
    {
      codigo: '5be74b8131f80000016c6912',
      nome: 'Azul',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edea',
      nome: 'MB15',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ede9',
      nome: 'MB05',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ede8',
      nome: 'MB01',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ede7',
      nome: 'TTM02 - Forest Brown',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ede6',
      nome: 'TTM01 - Mystic Black',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ede5',
      nome: 'TS05 - Warm Brown',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ede4',
      nome: 'TS03 - Ash Brown',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ede3',
      nome: 'TS02 - Brunette',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ede2',
      nome: 'TS01 - Blond',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ede1',
      nome: 'FDM01',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ede0',
      nome: 'LLM01',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eddf',
      nome: 'CKM01',
      tipo: 'COR',
    },
    {
      codigo: '5bb921173495e60001587625',
      nome: 'Verde',
      tipo: 'COR',
    },
    {
      codigo: '5beb16775193b00001863718',
      nome: 'Verde Petróleo',
      tipo: 'COR',
    },
    {
      codigo: '5bf043967dd57b00018d85c9',
      nome: 'Verde/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5bf043777dd57b00018d85c6',
      nome: 'Lilás',
      tipo: 'COR',
    },
    {
      codigo: '5bf0435a7dd57b00018d85c0',
      nome: 'Salmão',
      tipo: 'COR',
    },
    {
      codigo: '5bf0431b7dd57b00018d85a5',
      nome: 'Azul/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5beefd0ef045cb000165199e',
      nome: 'Azul Turquesa',
      tipo: 'COR',
    },
    {
      codigo: '5beefa7f588afd0001a7ed94',
      nome: 'Verde/Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5bec3f763d60c200016f0ef2',
      nome: 'Cinza/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5bec22cd3d60c200016f0ceb',
      nome: 'Preto/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5bec1e8f3d60c200016f0c8a',
      nome: 'Laranja/Azul ',
      tipo: 'COR',
    },
    {
      codigo: '5bec1d7b3d60c200016f0c85',
      nome: 'Azul/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5bec17363d60c200016f0c2e',
      nome: 'Bordô',
      tipo: 'COR',
    },
    {
      codigo: '5bec14833d60c200016f0c20',
      nome: 'Verde Musgo',
      tipo: 'COR',
    },
    {
      codigo: '5be748a531f80000016c68f6',
      nome: 'Azul Claro',
      tipo: 'COR',
    },
    {
      codigo: '5beb51dd43d14500017dcb45',
      nome: 'Verde Água',
      tipo: 'COR',
    },
    {
      codigo: '5be74a9631f80000016c6911',
      nome: 'Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5beb0c705193b000018636b3',
      nome: 'Amarelo Neon',
      tipo: 'COR',
    },
    {
      codigo: '5beb094e5193b00001863658',
      nome: 'Rosa Pink',
      tipo: 'COR',
    },
    {
      codigo: '5be9a221af89b6000167e283',
      nome: 'Bege',
      tipo: 'COR',
    },
    {
      codigo: '5be9963eaf89b6000167e1ff',
      nome: 'Jeans',
      tipo: 'COR',
    },
    {
      codigo: '5be97a15af89b6000167e0be',
      nome: 'Azul Piscina ',
      tipo: 'COR',
    },
    {
      codigo: '5be970f4af89b6000167e081',
      nome: 'Turquesa',
      tipo: 'COR',
    },
    {
      codigo: '5be97056af89b6000167e07f',
      nome: 'Preto/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5be78be631f80000016c6b8b',
      nome: 'Cinza Claro',
      tipo: 'COR',
    },
    {
      codigo: '5be78bbe31f80000016c6b8a',
      nome: 'Cinza Escuro',
      tipo: 'COR',
    },
    {
      codigo: '5be7867e31f80000016c6b58',
      nome: 'Vinho',
      tipo: 'COR',
    },
    {
      codigo: '5be77a7a31f80000016c6aeb',
      nome: 'Rosa',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eddc',
      nome: 'EK02',
      tipo: 'COR',
    },
    {
      codigo: '5beb53e443d14500017dcb51',
      nome: 'Coral',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edb0',
      nome: 'RCL39 - Enjoy',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edde',
      nome: 'BMM01',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edbd',
      nome: "RCL34 - Crystal's Kiss",
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edbc',
      nome: 'RCL47 - Hints Of Fantasy',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edbb',
      nome: 'RCL48 - Impulsive',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edba',
      nome: 'RCL46 - Happy Thoughts',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edb9',
      nome: 'RCL29 - Take It Off',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edb8',
      nome: 'RCL25 - Match Maker',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edb7',
      nome: 'RCL23 - Pietra',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edb6',
      nome: 'RCL22 - First Kiss',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edb5',
      nome: 'RCL18 - Genius',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edb4',
      nome: 'RCL06 - Patiently Waiting',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edb3',
      nome: 'RCL05 - Endless Dream',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edbf',
      nome: 'PB01 - At Ease',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edb1',
      nome: 'RCL13 - Wildflower',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edc0',
      nome: 'PB03 - Just Peachy',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edaf',
      nome: 'RCL33 - Pleasant',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edae',
      nome: 'RCL30 - Stolen Heart',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edad',
      nome: 'RCL09 - Dim The Light',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edac',
      nome: "RCL04 - Airi's Party",
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edab',
      nome: 'LL09 - Like a Queen',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edaa',
      nome: 'LL08 - Date Night',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eda9',
      nome: 'LL06 - Flower Girl',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eda8',
      nome: 'LL05 - Cocktail Party',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eda7',
      nome: 'LL04 - New Vogue',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eda6',
      nome: 'LL03 - Ceremony',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eda5',
      nome: 'IML02 - Whisper',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa714452cfa0001eb3046',
      nome: 'Marrom Escuro',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edb2',
      nome: 'RCL02 - Ever After',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edcd',
      nome: 'SMP02 - Tender Heart',
      tipo: 'COR',
    },
    {
      codigo: '5bf044137dd57b00018d85e3',
      nome: 'Bege/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eddb',
      nome: 'EK01',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edda',
      nome: 'GG04 - Bittersweet',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edd9',
      nome: 'GG08 - Girls Night Out',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edd8',
      nome: 'GG05 - Applause',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edd7',
      nome: 'GG03 - Inspire',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edd6',
      nome: 'GG02 - Be Mine Tonight',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edd5',
      nome: 'GG01 - Bright Destiny',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edd4',
      nome: 'SMP07 - Caribbean',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edd3',
      nome: 'SMP06 - Golden Citrus',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edd2',
      nome: 'SMP09 - The Good Life',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edd1',
      nome: 'SMP12 - Desolate Night',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edbe',
      nome: 'RCL49 - It Girl',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edcf',
      nome: 'SMP03 - Lava',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eddd',
      nome: 'EK03',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edcc',
      nome: 'RBL01 - Pool Party',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edcb',
      nome: 'RBL25 - Falling Softly',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edca',
      nome: 'RBL15 - Cosmopolitan',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edc9',
      nome: 'RBL10 - Treasure',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edc8',
      nome: 'RBL05 - Joyful',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edc7',
      nome: 'RBL45 - Galaxy Season',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edc6',
      nome: 'RBL35 - Explore',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edc5',
      nome: 'RBL30 - Desert Sunrise',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edc4',
      nome: 'RBL20 - Wanderlust',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edc3',
      nome: 'PB02 - Epiphany',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edc2',
      nome: 'PB05 - BonVoyage',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edc1',
      nome: 'PB04 - Lucky You',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191edd0',
      nome: 'SMP05 - Lost In Time',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0c28452cfa0001eb2620',
      nome: 'Creme/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5bf1ea0f02c0960001d086bc',
      nome: 'Verde/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5c0f11ef452cfa0001eb2676',
      nome: 'Roxo/Lilás',
      tipo: 'COR',
    },
    {
      codigo: '5c0f1153452cfa0001eb2667',
      nome: 'Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5c0f1052452cfa0001eb265c',
      nome: 'Prata',
      tipo: 'COR',
    },
    {
      codigo: '5c0f1027452cfa0001eb265b',
      nome: 'Rosa Escuro',
      tipo: 'COR',
    },
    {
      codigo: '5c0f1007452cfa0001eb265a',
      nome: 'Laranja Escuro',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0f59452cfa0001eb264c',
      nome: 'Verde/Jeans',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0f3e452cfa0001eb2646',
      nome: 'Laranja/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0ea5452cfa0001eb2645',
      nome: 'Vinho/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0e83452cfa0001eb263f',
      nome: 'Vermelho/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0e10452cfa0001eb2639',
      nome: 'Amarelo/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0c71452cfa0001eb2623',
      nome: 'Vermelho/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5c0f165a452cfa0001eb26ac',
      nome: 'Preto/Dourado',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0c4a452cfa0001eb2621',
      nome: 'Rosa/Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5c0f16bb452cfa0001eb26b5',
      nome: 'Verde Escuro',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0b82452cfa0001eb260f',
      nome: 'Cinza/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0ac4452cfa0001eb2602',
      nome: 'Laranja Claro',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0a68452cfa0001eb2601',
      nome: 'Creme',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0a0b452cfa0001eb25fb',
      nome: 'Branco/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0979452cfa0001eb25ed',
      nome: 'Palha',
      tipo: 'COR',
    },
    {
      codigo: '5c0efea6452cfa0001eb2510',
      nome: 'Preto/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5bf21dbe02c0960001d08ccb',
      nome: 'Azul Royal',
      tipo: 'COR',
    },
    {
      codigo: '5bf21d8502c0960001d08cca',
      nome: 'Azul/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5bf21d3502c0960001d08cc8',
      nome: 'Azul/Marrom',
      tipo: 'COR',
    },
    {
      codigo: '5bf20fd902c0960001d08bde',
      nome: 'Azul/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5bf1eb6102c0960001d086cc',
      nome: 'Areia',
      tipo: 'COR',
    },
    {
      codigo: '5bf043af7dd57b00018d85ca',
      nome: 'Azul Escuro',
      tipo: 'COR',
    },
    {
      codigo: '5c0f0c55452cfa0001eb2622',
      nome: 'Vermelho/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5c0f9ccc452cfa0001eb2f7c',
      nome: 'Verde/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa70c452cfa0001eb3043',
      nome: 'Marrom Claro',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa702452cfa0001eb3042',
      nome: 'Bege Escuro',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa4f7452cfa0001eb2ff9',
      nome: 'Verde Água/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa33c452cfa0001eb2fe4',
      nome: 'Turquesa Escuro',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa309452cfa0001eb2fe0',
      nome: 'Amarelo Claro',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa2af452cfa0001eb2fda',
      nome: 'Azul Escuro/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa276452cfa0001eb2fd9',
      nome: 'Preto Jeans',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa26f452cfa0001eb2fd8',
      nome: 'Azul Jeans',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa224452cfa0001eb2fd2',
      nome: 'Vermelho/Salmão',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa213452cfa0001eb2fd0',
      nome: 'Verde Limão/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa1e2452cfa0001eb2fcb',
      nome: 'Vermelho/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa156452cfa0001eb2fc5',
      nome: 'Azul Marinho/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5c0f155a452cfa0001eb269c',
      nome: 'Dourado',
      tipo: 'COR',
    },
    {
      codigo: '5c0f9e85452cfa0001eb2f8c',
      nome: 'Laranja/Marrom',
      tipo: 'COR',
    },
    {
      codigo: '5bf1d93c02c0960001d0850a',
      nome: 'Verde/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5c0f9cab452cfa0001eb2f57',
      nome: 'Rosa/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5c0f9c6d452cfa0001eb2eb6',
      nome: 'Rosa/Dourado',
      tipo: 'COR',
    },
    {
      codigo: '5c0f9b76452cfa0001eb2e88',
      nome: 'Verde/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5c0f9a5c452cfa0001eb2e71',
      nome: 'Abóbora',
      tipo: 'COR',
    },
    {
      codigo: '5c0f9790452cfa0001eb2e48',
      nome: 'Vermelho/Creme',
      tipo: 'COR',
    },
    {
      codigo: '5c0f9704452cfa0001eb2e3d',
      nome: 'Verde/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5c0f96cc452cfa0001eb2e3c',
      nome: 'Azul Marinho/Creme',
      tipo: 'COR',
    },
    {
      codigo: '5c0f96ae452cfa0001eb2e3b',
      nome: 'Bege/Marrom',
      tipo: 'COR',
    },
    {
      codigo: '5c0f1a3b452cfa0001eb26e8',
      nome: 'Roxo/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5c0f19f3452cfa0001eb26df',
      nome: 'Cinza/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5c0f17c6452cfa0001eb26c1',
      nome: 'Vermelho Escuro',
      tipo: 'COR',
    },
    {
      codigo: '5c0f17bb452cfa0001eb26c0',
      nome: 'Vermelho Claro',
      tipo: 'COR',
    },
    {
      codigo: '5c0fa0cd452cfa0001eb2fba',
      nome: 'Nude',
      tipo: 'COR',
    },
    {
      codigo: '5bf046307dd57b00018d8648',
      nome: 'Turquesa/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5bf1ea4d02c0960001d086bd',
      nome: 'Branco/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5bf04d577dd57b00018d8708',
      nome: 'Cinza/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5bf04d577dd57b00018d8707',
      nome: 'Preto/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5bf04c9e7dd57b00018d86fd',
      nome: 'Verde Limão',
      tipo: 'COR',
    },
    {
      codigo: '5bf04c9e7dd57b00018d86fc',
      nome: 'Laranja Neon',
      tipo: 'COR',
    },
    {
      codigo: '5bf04c477dd57b00018d86fb',
      nome: 'Vermelho/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5bf04c477dd57b00018d86fa',
      nome: 'Verde/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5bf04c477dd57b00018d86f9',
      nome: 'Verde/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5bf04b8a7dd57b00018d86eb',
      nome: 'Rosa/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5bf04b797dd57b00018d86e8',
      nome: 'Preto/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5bf04b477dd57b00018d86e1',
      nome: 'Azul/Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5bf049627dd57b00018d86cb',
      nome: 'Azul Marinho/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5bf04d577dd57b00018d870a',
      nome: 'Preto/Azul',
      tipo: 'COR',
    },
    {
      codigo: '617812c56b0b7e0001abbed3',
      nome: 'Inox Polido Cromo',
      tipo: 'COR',
    },
    {
      codigo: '5bf04efe7dd57b00018d872b',
      nome: 'Branco/Preto',
      tipo: 'COR',
    },
    {
      codigo: '6384d2bab9f239000161cd54',
      nome: 'AMARELO/ROXO/ROSA',
      tipo: 'COR',
    },
    {
      codigo: '5bf0458a7dd57b00018d8633',
      nome: 'Azul/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5bf0458a7dd57b00018d8632',
      nome: 'Azul/Lilas',
      tipo: 'COR',
    },
    {
      codigo: '5bf0458a7dd57b00018d8631',
      nome: 'Preto/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5bf045017dd57b00018d8619',
      nome: 'Preto/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5bf044d67dd57b00018d8613',
      nome: 'Azul Marinho/Azul Claro',
      tipo: 'COR',
    },
    {
      codigo: '5bf044d67dd57b00018d8611',
      nome: 'Azul Claro/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5bf044a47dd57b00018d8608',
      nome: 'Verde Neon',
      tipo: 'COR',
    },
    {
      codigo: '5bf0449c7dd57b00018d8603',
      nome: 'Azul Bic/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5bf0449c7dd57b00018d8600',
      nome: 'Azul Bic/Azul Claro',
      tipo: 'COR',
    },
    {
      codigo: '5bf0449c7dd57b00018d85fe',
      nome: 'Azul Marinho/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eda2',
      nome: 'IML49 - Refuse It',
      tipo: 'COR',
    },
    {
      codigo: '5bf048147dd57b00018d868f',
      nome: 'Mostarda',
      tipo: 'COR',
    },
    {
      codigo: '5bf055457dd57b00018d87df',
      nome: 'Roxo/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5bf058d47dd57b00018d8834',
      nome: 'Preto/Marrom',
      tipo: 'COR',
    },
    {
      codigo: '5bf0588d7dd57b00018d882d',
      nome: 'Azul Marinho/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5bf058537dd57b00018d8826',
      nome: 'Rosa/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5bf057fc7dd57b00018d8820',
      nome: 'Verde/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5bf057f07dd57b00018d881d',
      nome: 'Branco/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5bf057f07dd57b00018d881c',
      nome: 'Branco/Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5bf056e57dd57b00018d8802',
      nome: 'Marrom/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5bf0569a7dd57b00018d87fc',
      nome: 'Branco/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5bf0568b7dd57b00018d87fb',
      nome: 'Branco/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5bf0568b7dd57b00018d87fa',
      nome: 'Azul/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5bf056787dd57b00018d87f8',
      nome: 'Azul Marinho/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5bf056697dd57b00018d87f7',
      nome: 'Azul Bic/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5bf04d577dd57b00018d8709',
      nome: 'Cinza/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5bf0556c7dd57b00018d87e5',
      nome: 'Azul Claro/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5bf043bc7dd57b00018d85d1',
      nome: 'Cinza/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5bf0553f7dd57b00018d87de',
      nome: 'Branco/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5bf055107dd57b00018d87dd',
      nome: 'Laranja/Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5bf055027dd57b00018d87dc',
      nome: 'Preto/Bege',
      tipo: 'COR',
    },
    {
      codigo: '5bf054de7dd57b00018d87d6',
      nome: 'Laranja/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5bf054da7dd57b00018d87d0',
      nome: 'Branco/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5bf054d37dd57b00018d87ce',
      nome: 'Amarelo/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5bf054c47dd57b00018d87cc',
      nome: 'Azul/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5bf0548c7dd57b00018d87c6',
      nome: 'Verde/Azul Marinho',
      tipo: 'COR',
    },
    {
      codigo: '5bf054777dd57b00018d87c5',
      nome: 'Cinza/Marrom',
      tipo: 'COR',
    },
    {
      codigo: '5bf054697dd57b00018d87c4',
      nome: 'Branco/Marrom',
      tipo: 'COR',
    },
    {
      codigo: '5bf054617dd57b00018d87c2',
      nome: 'Azul/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5bf050657dd57b00018d876c',
      nome: 'Rosa/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5bf055877dd57b00018d87e7',
      nome: 'Rose',
      tipo: 'COR',
    },
    {
      codigo: '618d2e6da3e2a70001974fa9',
      nome: 'Canaleta Baixo/Ouro Velho',
      tipo: 'COR',
    },
    {
      codigo: '6196c53446f9bf0001335035',
      nome: 'Cinza Sagrado',
      tipo: 'COR',
    },
    {
      codigo: '61964bd34644af00016b8aba',
      nome: 'Ametista',
      tipo: 'COR',
    },
    {
      codigo: '61964bc7a3e2a700019bd0d6',
      nome: 'Menta',
      tipo: 'COR',
    },
    {
      codigo: '61964bbda3e2a700019bd0cf',
      nome: 'Quartz',
      tipo: 'COR',
    },
    {
      codigo: '61955299b7ecb800010e7ad1',
      nome: 'Verde Ramalho',
      tipo: 'COR',
    },
    {
      codigo: '618d3100a4679700010b29b4',
      nome: 'Baixo/Nude',
      tipo: 'COR',
    },
    {
      codigo: '618d2e9946f9bf00012e1ba7',
      nome: 'Preto com Cristal ',
      tipo: 'COR',
    },
    {
      codigo: '618d2e9346f9bf00012e1ba5',
      nome: 'Dourado com Cristal ',
      tipo: 'COR',
    },
    {
      codigo: '618d2e8c46f9bf00012e1ba0',
      nome: 'Cristal Cromado ',
      tipo: 'COR',
    },
    {
      codigo: '618d2e8546f9bf00012e1b9f',
      nome: 'Branco com Cristal ',
      tipo: 'COR',
    },
    {
      codigo: '618d2e80a3e2a70001974fb4',
      nome: 'Preto Dourado',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eda4',
      nome: 'IML32 - Tea Party',
      tipo: 'COR',
    },
    {
      codigo: '618d2e74a3e2a70001974faf',
      nome: 'Rebaixo Baixo/Ouro Velho',
      tipo: 'COR',
    },
    {
      codigo: '6196c8704644af00016be01c',
      nome: 'Cinzra Cristal',
      tipo: 'COR',
    },
    {
      codigo: '618d2e65a3e2a70001974f9f',
      nome: 'Canaleta Alto/Ferrugem',
      tipo: 'COR',
    },
    {
      codigo: '618d2e5fa3e2a70001974f9b',
      nome: 'Canaleta Alto/Ouro Velho',
      tipo: 'COR',
    },
    {
      codigo: '618d2e5aa3e2a70001974f9a',
      nome: 'Canaleta/Ouro Velho',
      tipo: 'COR',
    },
    {
      codigo: '618d2e52a3e2a70001974f97',
      nome: 'Canaleta/Cobre Velho',
      tipo: 'COR',
    },
    {
      codigo: '618d2e4ca3e2a70001974f93',
      nome: 'Baixo/Preto',
      tipo: 'COR',
    },
    {
      codigo: '618d2e46a3e2a70001974f90',
      nome: 'Baixo/Ouro Velho',
      tipo: 'COR',
    },
    {
      codigo: '618d2e3aa3e2a70001974f87',
      nome: 'Baixo/Níquel Escovado',
      tipo: 'COR',
    },
    {
      codigo: '618d2e33a3e2a70001974f84',
      nome: 'Baixo/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2e2b46f9bf00012e1b68',
      nome: 'Baixo/Branco',
      tipo: 'COR',
    },
    {
      codigo: '618d2e2046f9bf00012e1b5c',
      nome: 'Alto/Preto',
      tipo: 'COR',
    },
    {
      codigo: '618d2e1846f9bf00012e1b5a',
      nome: 'Alto/Ouro Velho',
      tipo: 'COR',
    },
    {
      codigo: '618d2e1346f9bf00012e1b56',
      nome: 'Alto/ Nude',
      tipo: 'COR',
    },
    {
      codigo: '618d2e7aa3e2a70001974fb1',
      nome: 'Preto Cromado',
      tipo: 'COR',
    },
    {
      codigo: '6197a7bba3e2a700019cd179',
      nome: 'Cobre/Couro',
      tipo: 'COR',
    },
    {
      codigo: '61a53d70c2adca000117cb24',
      nome: 'Prata Velha Escovado',
      tipo: 'COR',
    },
    {
      codigo: '61a53d69c2adca000117cb02',
      nome: 'Prata Velha Eamborado',
      tipo: 'COR',
    },
    {
      codigo: '61a53d641d8b100001b9a8fe',
      nome: 'Ponto Cromado',
      tipo: 'COR',
    },
    {
      codigo: '61a53d5cc2adca000117cae3',
      nome: 'Ouro Velho Tamborado',
      tipo: 'COR',
    },
    {
      codigo: '61a53d56c2adca000117cac8',
      nome: 'Ouro Velho Escovado',
      tipo: 'COR',
    },
    {
      codigo: '61a53d45c2adca000117ca77',
      nome: 'Cobre Velho Tamborado',
      tipo: 'COR',
    },
    {
      codigo: '61a53d3ec2adca000117ca50',
      nome: 'Cobre Velho Escovado',
      tipo: 'COR',
    },
    {
      codigo: '61a53d37c2adca000117ca36',
      nome: 'Branco Fosco',
      tipo: 'COR',
    },
    {
      codigo: '619fce09c2adca0001106f3b',
      nome: 'Preta/Branca',
      tipo: 'COR',
    },
    {
      codigo: '619fce011b53870001238c09',
      nome: 'Cinza/Branca',
      tipo: 'COR',
    },
    {
      codigo: '619b9c9b46f9bf0001369d28',
      nome: 'Perola',
      tipo: 'COR',
    },
    {
      codigo: '6197ef4546f9bf0001343ba1',
      nome: 'Matte',
      tipo: 'COR',
    },
    {
      codigo: '6196c616a467970001105e34',
      nome: 'Cinza/Rose Gold',
      tipo: 'COR',
    },
    {
      codigo: '6197a7c446f9bf000133f4b7',
      nome: 'Cromado/Polido',
      tipo: 'COR',
    },
    {
      codigo: '6196c62146f9bf00013350f6',
      nome: 'Rose Gold/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '6197a7a746f9bf000133f48f',
      nome: 'Niquel Velho',
      tipo: 'COR',
    },
    {
      codigo: '6197a79e4644af00016c92a8',
      nome: 'Cromo/Couro',
      tipo: 'COR',
    },
    {
      codigo: '6197a7964644af00016c929e',
      nome: 'Vecchio Cobre/Couro',
      tipo: 'COR',
    },
    {
      codigo: '6197a7904644af00016c9296',
      nome: 'Alumínio Preto',
      tipo: 'COR',
    },
    {
      codigo: '6196c8a3a467970001105f9e',
      nome: 'Rose Gold e Cinza',
      tipo: 'COR',
    },
    {
      codigo: '6196c89746f9bf0001335206',
      nome: 'Metara Suede',
      tipo: 'COR',
    },
    {
      codigo: '6196c890a467970001105f8f',
      nome: 'Gianra Trama',
      tipo: 'COR',
    },
    {
      codigo: '6196c87bb7ecb800010f5da6',
      nome: 'Dourado e Preto',
      tipo: 'COR',
    },
    {
      codigo: '6196c878b7ecb800010f5da5',
      nome: 'Ameira Negra',
      tipo: 'COR',
    },
    {
      codigo: '6196c875a467970001105f81',
      nome: 'Cinzra Sagrado',
      tipo: 'COR',
    },
    {
      codigo: '6196c875a3e2a700019c25f2',
      nome: 'Cinza e Rose Gold',
      tipo: 'COR',
    },
    {
      codigo: '618d2dffa3e2a70001974f6b',
      nome: 'Alto/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '6197d7df4644af00016cc1c7',
      nome: 'Cromo Fosco',
      tipo: 'COR',
    },
    {
      codigo: '618d2b98a3e2a70001974e9a',
      nome: 'Rosa/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2e0d46f9bf00012e1b54',
      nome: 'Alto/Níquel Escovado',
      tipo: 'COR',
    },
    {
      codigo: '618d2c25a3e2a70001974ecf',
      nome: 'Transparente/Dourado',
      tipo: 'COR',
    },
    {
      codigo: '618d2c1e46f9bf00012e1a1a',
      nome: 'Transparente/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2c1746f9bf00012e1a0e',
      nome: 'Transparente/Branco',
      tipo: 'COR',
    },
    {
      codigo: '618d2c1146f9bf00012e1a07',
      nome: 'Rosa Baby/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2c0b46f9bf00012e1a04',
      nome: 'Pink/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2c0446f9bf00012e19fa',
      nome: 'Pink/Branco',
      tipo: 'COR',
    },
    {
      codigo: '618d2bff46f9bf00012e19f9',
      nome: 'Onça/Dourado',
      tipo: 'COR',
    },
    {
      codigo: '618d2bf8a3e2a70001974ec4',
      nome: 'Lilas/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2bf1a3e2a70001974ec0',
      nome: 'Azul Claro/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2beba3e2a70001974ebb',
      nome: 'Azul Claro/Branco',
      tipo: 'COR',
    },
    {
      codigo: '618d2be1a3e2a70001974eb6',
      nome: 'Amarelo/Branco',
      tipo: 'COR',
    },
    {
      codigo: '618d2c33a3e2a70001974ed9',
      nome: 'Transparente/Níquel Escovado',
      tipo: 'COR',
    },
    {
      codigo: '618d2b9ea3e2a70001974e9d',
      nome: 'Verde/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2c3ca3e2a70001974edc',
      nome: 'Transparente/Ouro Velho',
      tipo: 'COR',
    },
    {
      codigo: '618d2b90a3e2a70001974e94',
      nome: 'Perola/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2b88a3e2a70001974e91',
      nome: 'Mesclado/Níquel Escovado',
      tipo: 'COR',
    },
    {
      codigo: '618d2b80a3e2a70001974e8e',
      nome: 'Mesclado/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2b78a3e2a70001974e8d',
      nome: 'Azul/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2b6fa3e2a70001974e8b',
      nome: 'Amarelo/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2b65a3e2a70001974e88',
      nome: 'Fume/Níquel Escovado',
      tipo: 'COR',
    },
    {
      codigo: '618bfed9b7ecb8000109d2e9',
      nome: 'Velho Escovado',
      tipo: 'COR',
    },
    {
      codigo: '618bfecfb7ecb8000109d2e8',
      nome: 'Swarovski/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618bfec346f9bf00012d26cd',
      nome: 'Cobre Brilho',
      tipo: 'COR',
    },
    {
      codigo: '618bfeb646f9bf00012d26c1',
      nome: 'Prata Velha',
      tipo: 'COR',
    },
    {
      codigo: '618bfeab46f9bf00012d26bb',
      nome: 'Cobre Escovado',
      tipo: 'COR',
    },
    {
      codigo: '617c67c5dabb0900011b797e',
      nome: 'Red Gold Rose',
      tipo: 'COR',
    },
    {
      codigo: '618d2ba8a3e2a70001974e9f',
      nome: 'Vermelho/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2d9ea4679700010b284e',
      nome: 'Couro Preto Níquel Escovado',
      tipo: 'COR',
    },
    {
      codigo: '61a53d881d8b100001b9a951',
      nome: 'Velho Tamborado',
      tipo: 'COR',
    },
    {
      codigo: '618d2dfaa3e2a70001974f6a',
      nome: 'Alto/Cobre Velho',
      tipo: 'COR',
    },
    {
      codigo: '618d2df3a3e2a70001974f69',
      nome: 'Alto/Branco',
      tipo: 'COR',
    },
    {
      codigo: '618d2deca3e2a70001974f67',
      nome: 'Baixo/Dourado Escovado',
      tipo: 'COR',
    },
    {
      codigo: '618d2de5a3e2a70001974f66',
      nome: 'Baixo/Capuccino',
      tipo: 'COR',
    },
    {
      codigo: '618d2ddca3e2a70001974f65',
      nome: 'Smart',
      tipo: 'COR',
    },
    {
      codigo: '618d2dd7a3e2a70001974f63',
      nome: 'Fume Níquel Escovado',
      tipo: 'COR',
    },
    {
      codigo: '618d2dd0a3e2a70001974f60',
      nome: 'Couro Preto Preto',
      tipo: 'COR',
    },
    {
      codigo: '618d2dcaa3e2a70001974f5d',
      nome: 'Couro Marrom Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2dc3a3e2a70001974f53',
      nome: 'Couro Grafite',
      tipo: 'COR',
    },
    {
      codigo: '618d2dbda3e2a70001974f4f',
      nome: 'Couro Cafe Níquel Escovado',
      tipo: 'COR',
    },
    {
      codigo: '618d2db7a4679700010b2857',
      nome: 'Rose com Cristais',
      tipo: 'COR',
    },
    {
      codigo: '618d2c2ca3e2a70001974ed8',
      nome: 'Transparente/Dourado Escovado',
      tipo: 'COR',
    },
    {
      codigo: '618d2da5a4679700010b2851',
      nome: 'Couro Rose',
      tipo: 'COR',
    },
    {
      codigo: '618d2e0646f9bf00012e1b4e',
      nome: 'Alto/Grafite',
      tipo: 'COR',
    },
    {
      codigo: '618d2d9846f9bf00012e1af5',
      nome: 'Couro Nude',
      tipo: 'COR',
    },
    {
      codigo: '618d2d8b46f9bf00012e1af0',
      nome: 'Baixo/Níquel Escovado ',
      tipo: 'COR',
    },
    {
      codigo: '618d2d8346f9bf00012e1aef',
      nome: 'Baixo/Cromado ',
      tipo: 'COR',
    },
    {
      codigo: '618d2d7db7ecb800010a85b7',
      nome: 'Fume/Grafite',
      tipo: 'COR',
    },
    {
      codigo: '618d2d76b7ecb800010a85b4',
      nome: 'Xadrez/Preto',
      tipo: 'COR',
    },
    {
      codigo: '618d2d6fb7ecb800010a85b2',
      nome: 'Xadrez/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '618d2d68b7ecb800010a85b1',
      nome: 'Cristais Perola Dourado',
      tipo: 'COR',
    },
    {
      codigo: '618d2d5eb7ecb800010a85b0',
      nome: 'Smoke Topaz/ Rose ',
      tipo: 'COR',
    },
    {
      codigo: '618d2d56a3e2a70001974f33',
      nome: 'Jet/Preto ',
      tipo: 'COR',
    },
    {
      codigo: '618d2d4fb7ecb800010a85ac',
      nome: 'Golden/Dourado ',
      tipo: 'COR',
    },
    {
      codigo: '618d2d47b7ecb800010a85a8',
      nome: 'Black/Níquel Escovado',
      tipo: 'COR',
    },
    {
      codigo: '618d2d2546f9bf00012e1ac3',
      nome: 'Transparente/Rose',
      tipo: 'COR',
    },
    {
      codigo: '618d2daea3e2a70001974f48',
      nome: 'Níquel Escovado com Cristais Fume',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed76',
      nome: 'RCF25',
      tipo: 'COR',
    },
    {
      codigo: '6234bb7a304dff0001816a74',
      nome: 'Preto/Bronze Adall',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed83',
      nome: 'FFL19 - Defying Gravity',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed82',
      nome: 'FFL14 - Inner Glow',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed81',
      nome: 'FFL18 - Last Dance',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed80',
      nome: 'AT85',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed7f',
      nome: 'AT30',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed7e',
      nome: 'AT60',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed7d',
      nome: 'AT55',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed7c',
      nome: 'AT25',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed7b',
      nome: 'AT20',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed7a',
      nome: 'AT10',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed79',
      nome: 'AT05',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed85',
      nome: 'FFL26 - This Love',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed77',
      nome: 'RCF20',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed86',
      nome: 'FFL28 - One and Only',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed75',
      nome: 'RCF15',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed74',
      nome: 'RCF10',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed73',
      nome: 'RCF01',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed72',
      nome: 'NP85',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed71',
      nome: 'NP70',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed70',
      nome: 'NP60',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed6f',
      nome: 'NP55',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed6e',
      nome: 'NP20',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed6d',
      nome: 'NP05',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed6c',
      nome: 'NP01',
      tipo: 'COR',
    },
    {
      codigo: '6239f7d745519d0001799fe0',
      nome: 'Niquelado',
      tipo: 'COR',
    },
    {
      codigo: '61a53d771d8b100001b9a920',
      nome: 'Prata Velha Tamborada',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed78',
      nome: 'AT01',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed93',
      nome: 'IML24 - New Direction',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eda1',
      nome: 'IML47 - Crazy Ride',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191eda0',
      nome: 'IML45 - Finish Line',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed9f',
      nome: 'IML43 - Memories',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed9e',
      nome: 'IML41 - Heartless',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed9d',
      nome: 'IML37 - Bipolar',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed9c',
      nome: 'IML25 - Curious',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed9b',
      nome: 'IML19 - Believe',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed9a',
      nome: 'IML07 - Like France',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed99',
      nome: 'IML06 - Innocent',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed98',
      nome: 'IML03 - Goddess',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed97',
      nome: 'IML31 - Infinity',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed96',
      nome: 'IML50 - Endless Night',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed84',
      nome: 'FFL22 - Classified',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed94',
      nome: 'IML35 - Be Somebody',
      tipo: 'COR',
    },
    {
      codigo: '6234bb7751a6ba0001887224',
      nome: 'Branco/Bronze Adall',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed92',
      nome: 'IML20 - Fearless',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed91',
      nome: 'IML17 - Cheers',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed90',
      nome: 'IML10 - Fool Me',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed8f',
      nome: 'FFL36 - Success',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed8e',
      nome: 'FFL34 - Taking Chances',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed8d',
      nome: 'FFL15 - Voyage',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed8c',
      nome: 'FFL11 - Fairytale',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed8b',
      nome: 'FFL02 - Crush On You',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed8a',
      nome: 'FFL01 - Tease Me',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed89',
      nome: 'FFL44 - Potion',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed88',
      nome: 'FFL42 - Siren',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed87',
      nome: 'FFL40 - Social',
      tipo: 'COR',
    },
    {
      codigo: '623c65f251a6ba000191ed95',
      nome: 'IML36 - Panic',
      tipo: 'COR',
    },
    {
      codigo: '61c4d37ffc26b80001ab2b15',
      nome: 'Estampado Azul',
      tipo: 'COR',
    },
    {
      codigo: '6239f2d8aec32900012cd625',
      nome: '001391010004046',
      tipo: 'COR',
    },
    {
      codigo: '61eaff8c07a56e000163200f',
      nome: 'Branco Acetinado',
      tipo: 'COR',
    },
    {
      codigo: '61e72987ec6b90000175185d',
      nome: 'Prata Alumínio',
      tipo: 'COR',
    },
    {
      codigo: '61e7297aa378cc00019d4d37',
      nome: 'Ouro Brilhante',
      tipo: 'COR',
    },
    {
      codigo: '61e6db4da5ef320001e64044',
      nome: 'Cinza Escuro/Natural',
      tipo: 'COR',
    },
    {
      codigo: '61e6daeaa5ef320001e6402a',
      nome: 'Kaki/Natural',
      tipo: 'COR',
    },
    {
      codigo: '61e576c0a5ef320001e5aefd',
      nome: 'Branco Cromo',
      tipo: 'COR',
    },
    {
      codigo: '61e576b9a378cc00019ca002',
      nome: 'Alumínio Preto Cromo',
      tipo: 'COR',
    },
    {
      codigo: '61e576b4ec6b9000017465e1',
      nome: 'Alumínio Fosco Cromo',
      tipo: 'COR',
    },
    {
      codigo: '61e576adec6b9000017465dd',
      nome: 'Preto Cromo',
      tipo: 'COR',
    },
    {
      codigo: '61e576a5a378cc00019c9ff9',
      nome: 'Stone Polido Cromo',
      tipo: 'COR',
    },
    {
      codigo: '61e5769aa378cc00019c9ff6',
      nome: 'Classic Polido Cromo',
      tipo: 'COR',
    },
    {
      codigo: '61eaffa34858360001ef57b5',
      nome: 'Duplo Acabamento',
      tipo: 'COR',
    },
    {
      codigo: '61e5766ca5ef320001e5aed6',
      nome: 'Cromo com Couro Branco',
      tipo: 'COR',
    },
    {
      codigo: '61eaffb14858360001ef57b8',
      nome: 'Níquel Envelhecido',
      tipo: 'COR',
    },
    {
      codigo: '61c4d3670dd33200014d76fc',
      nome: 'Estampado Cinza',
      tipo: 'COR',
    },
    {
      codigo: '61c0b7ef3bbf450001393815',
      nome: 'Rose Brilhante',
      tipo: 'COR',
    },
    {
      codigo: '61c0b7e33bbf45000139380b',
      nome: 'Fumê',
      tipo: 'COR',
    },
    {
      codigo: '61c0b7df3bbf450001393809',
      nome: 'Dourado Antigo',
      tipo: 'COR',
    },
    {
      codigo: '61c0b7dc3bbf450001393806',
      nome: 'Cromo/Branco',
      tipo: 'COR',
    },
    {
      codigo: '61c0b7d83bbf450001393801',
      nome: 'Cromo/Anodizado',
      tipo: 'COR',
    },
    {
      codigo: '61c0b76f3bbf450001393759',
      nome: 'Níquel/Escovado',
      tipo: 'COR',
    },
    {
      codigo: '61b21b744344d70001502773',
      nome: 'Níquel',
      tipo: 'COR',
    },
    {
      codigo: '61b21b704344d70001502771',
      nome: 'Couro Café/Níquel Escovado',
      tipo: 'COR',
    },
    {
      codigo: '61b21b6a6469cb000100f132',
      nome: 'Ouro',
      tipo: 'COR',
    },
    {
      codigo: '61b0d1ae4344d700014e7a1b',
      nome: 'Mix',
      tipo: 'COR',
    },
    {
      codigo: '5bf046917dd57b00018d8655',
      nome: 'Azul Bebê',
      tipo: 'COR',
    },
    {
      codigo: '61e57690a5ef320001e5aeeb',
      nome: 'Cromo com Couro Preto',
      tipo: 'COR',
    },
    {
      codigo: '622fb46351296b0001acb6da',
      nome: 'Preto Verde',
      tipo: 'COR',
    },
    {
      codigo: '6234bb7351a6ba0001887222',
      nome: 'Preto/Bronze',
      tipo: 'COR',
    },
    {
      codigo: '6234bb6fab186a0001bcaa47',
      nome: 'Preto/Concreto',
      tipo: 'COR',
    },
    {
      codigo: '6234bb6c51a6ba000188721e',
      nome: 'Branco/Bronze',
      tipo: 'COR',
    },
    {
      codigo: '6234bb6851a6ba000188721d',
      nome: 'Branco/Concreto',
      tipo: 'COR',
    },
    {
      codigo: '6234bb64aec329000128dbfd',
      nome: 'Branco/Ouro',
      tipo: 'COR',
    },
    {
      codigo: '6234bb60ab186a0001bcaa41',
      nome: 'Branco/Cobre',
      tipo: 'COR',
    },
    {
      codigo: '6234bb5d51a6ba0001887219',
      nome: 'Preto/Ouro',
      tipo: 'COR',
    },
    {
      codigo: '6234bb59aec329000128dbf2',
      nome: 'Preto/Cobre',
      tipo: 'COR',
    },
    {
      codigo: '62335249b589b90001613b6a',
      nome: 'Snow',
      tipo: 'COR',
    },
    {
      codigo: '623352465a421f00013b16a6',
      nome: 'Preto Ônix',
      tipo: 'COR',
    },
    {
      codigo: '6233523e51296b0001b38693',
      nome: 'Carvalho Dark',
      tipo: 'COR',
    },
    {
      codigo: '62335236a774c00001fc2201',
      nome: 'Branco Chess',
      tipo: 'COR',
    },
    {
      codigo: '61eaff9c4858360001ef57b4',
      nome: 'Cobre Envelhecido',
      tipo: 'COR',
    },
    {
      codigo: '6230f359b589b900015cae4e',
      nome: 'Ardósia',
      tipo: 'COR',
    },
    {
      codigo: '61a53d82c2adca000117cb54',
      nome: 'Prata Velha Tamborado',
      tipo: 'COR',
    },
    {
      codigo: '622fb1fb2562830001f67108',
      nome: 'Verde Turquesa',
      tipo: 'COR',
    },
    {
      codigo: '622f4613ab38010001b3cbce',
      nome: 'Verde Esmeralda',
      tipo: 'COR',
    },
    {
      codigo: '6213f304ede7eb00012de681',
      nome: 'Ouro Velho Tamboreado',
      tipo: 'COR',
    },
    {
      codigo: '6213f30093df450001148e0e',
      nome: 'Prata Velha Tamboreado',
      tipo: 'COR',
    },
    {
      codigo: '6213ee8393df45000114780d',
      nome: 'Cobre Velho Tamboreado',
      tipo: 'COR',
    },
    {
      codigo: '61f42de70128920001c31539',
      nome: 'Laranja c/ trama Preta',
      tipo: 'COR',
    },
    {
      codigo: '61f42d853a7752000146b4c9',
      nome: 'Azul c/ trama Preta',
      tipo: 'COR',
    },
    {
      codigo: '61f42d3a8189170001fa14e4',
      nome: 'Verde c/ trama Preta',
      tipo: 'COR',
    },
    {
      codigo: '61f42b848189170001fa143e',
      nome: 'Cinza c/ trama Preta',
      tipo: 'COR',
    },
    {
      codigo: '61f428530128920001c31143',
      nome: 'Branco c/ trama Preta',
      tipo: 'COR',
    },
    {
      codigo: '61eaffc34858360001ef57bb',
      nome: 'Preto Acetinado',
      tipo: 'COR',
    },
    {
      codigo: '61eaffb74858360001ef57ba',
      nome: 'Ouro Envelhecido',
      tipo: 'COR',
    },
    {
      codigo: '6232318f2562830001fafdb5',
      nome: 'Verde/Verde Escuro',
      tipo: 'COR',
    },
    {
      codigo: '6001debc3877c40001292f35',
      nome: 'Trufa',
      tipo: 'COR',
    },
    {
      codigo: '6001dc053877c40001292ecc',
      nome: 'Ébano',
      tipo: 'COR',
    },
    {
      codigo: '6001dc4a3877c40001292ecf',
      nome: 'Malbec',
      tipo: 'COR',
    },
    {
      codigo: '6001dcac3877c40001292edf',
      nome: 'Mel',
      tipo: 'COR',
    },
    {
      codigo: '6001dd6b3877c40001292ef5',
      nome: 'Nogal',
      tipo: 'COR',
    },
    {
      codigo: '6001ddc43877c40001292f06',
      nome: 'Rijo',
      tipo: 'COR',
    },
    {
      codigo: '6091c8899ca028000150c24a',
      nome: 'Lilás Claro',
      tipo: 'COR',
    },
    {
      codigo: '6001dea73877c40001292f26',
      nome: 'Tronco',
      tipo: 'COR',
    },
    {
      codigo: '6001daf43877c40001292eaa',
      nome: 'Caiena',
      tipo: 'COR',
    },
    {
      codigo: '6001eac53877c4000129534a',
      nome: 'Castainne',
      tipo: 'COR',
    },
    {
      codigo: '6012f9ad4c7f7a0001348605',
      nome: 'Lilás Claro/Lilás',
      tipo: 'COR',
    },
    {
      codigo: '60803b9b151b180001831905',
      nome: 'Cinza Listrado',
      tipo: 'COR',
    },
    {
      codigo: '60803bbb151b18000183190b',
      nome: 'Vinho Listrado',
      tipo: 'COR',
    },
    {
      codigo: '608ac67ddb1c4b00016a6841',
      nome: 'Branco/Bordo',
      tipo: 'COR',
    },
    {
      codigo: '6151b1d0094eed0001dec4f7',
      nome: 'Cromo Brilho',
      tipo: 'COR',
    },
    {
      codigo: '6001de633877c40001292f1c',
      nome: 'Telha',
      tipo: 'COR',
    },
    {
      codigo: '5fe1f6f8b112f60001524af2',
      nome: 'Branco/Azul/Bege',
      tipo: 'COR',
    },
    {
      codigo: '5fb406f00594540001bbde99',
      nome: 'Estampado/Amarelo Ocre',
      tipo: 'COR',
    },
    {
      codigo: '5fb408a80594540001bbdf12',
      nome: 'Estampado/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5fb410f10594540001bbe410',
      nome: 'Estampado/Bege',
      tipo: 'COR',
    },
    {
      codigo: '5fb4117a0594540001bbe42e',
      nome: 'Estampado/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5fb415590594540001bbe766',
      nome: 'Multicolor/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5fb417a50594540001bbe86c',
      nome: 'Estampado/Cinza Escuro',
      tipo: 'COR',
    },
    {
      codigo: '6001dbc73877c40001292eca',
      nome: 'Cinamomo',
      tipo: 'COR',
    },
    {
      codigo: '5fe1f610b112f60001524a74',
      nome: 'Branco/Marrom/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6001db4c3877c40001292ebd',
      nome: 'Carvalho',
      tipo: 'COR',
    },
    {
      codigo: '5fe1f908b112f60001524d10',
      nome: 'Branco/Laranja/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5fe1f95fb112f60001524e06',
      nome: 'Branco/Marrom/Bege',
      tipo: 'COR',
    },
    {
      codigo: '6001d74c3877c40001292e24',
      nome: 'Acácia',
      tipo: 'COR',
    },
    {
      codigo: '6001d9ca3877c40001292e81',
      nome: 'Amarula',
      tipo: 'COR',
    },
    {
      codigo: '6001da623877c40001292e93',
      nome: 'Amêndola ',
      tipo: 'COR',
    },
    {
      codigo: '60944d504319000001563613',
      nome: 'Bege Palha',
      tipo: 'COR',
    },
    {
      codigo: '5fb7b5b77b81940001ad2a38',
      nome: 'Cru',
      tipo: 'COR',
    },
    {
      codigo: '6151b1c2094eed0001dec4f0',
      nome: 'Blue Star',
      tipo: 'COR',
    },
    {
      codigo: '6151b1b6094eed0001dec4e9',
      nome: 'Ambar',
      tipo: 'COR',
    },
    {
      codigo: '6151b1b7094eed0001dec4ea',
      nome: 'Amestista',
      tipo: 'COR',
    },
    {
      codigo: '6151b1b8094eed0001dec4eb',
      nome: 'Anodizado',
      tipo: 'COR',
    },
    {
      codigo: '6151b1b9094eed0001dec4ec',
      nome: 'Aquamarine',
      tipo: 'COR',
    },
    {
      codigo: '6151b1bb094eed0001dec4ed',
      nome: 'Azil Glacial',
      tipo: 'COR',
    },
    {
      codigo: '608ac694db1c4b00016a684a',
      nome: 'Preto/Bordo',
      tipo: 'COR',
    },
    {
      codigo: '6151b1c1094eed0001dec4ef',
      nome: 'Black Mix',
      tipo: 'COR',
    },
    {
      codigo: '6151b1b2094eed0001dec4e6',
      nome: 'Abs',
      tipo: 'COR',
    },
    {
      codigo: '6151b1c4094eed0001dec4f1',
      nome: 'Branca',
      tipo: 'COR',
    },
    {
      codigo: '6151b1c6094eed0001dec4f2',
      nome: 'Branco/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '6151b1c8094eed0001dec4f3',
      nome: 'Champagne',
      tipo: 'COR',
    },
    {
      codigo: '6151b1cc094eed0001dec4f4',
      nome: 'Classic Polido',
      tipo: 'COR',
    },
    {
      codigo: '6151b1cd094eed0001dec4f5',
      nome: 'Conbre',
      tipo: 'COR',
    },
    {
      codigo: '5f776bef6edc840001f88483',
      nome: 'Grafite/Rosa/Prata',
      tipo: 'COR',
    },
    {
      codigo: '6151b1bf094eed0001dec4ee',
      nome: 'Black',
      tipo: 'COR',
    },
    {
      codigo: '6144149f18e8360001af1ae5',
      nome: 'Rosa Quartz',
      tipo: 'COR',
    },
    {
      codigo: '60944d5e431900000156361e',
      nome: 'Rosa Pluma',
      tipo: 'COR',
    },
    {
      codigo: '60944d70431900000156362f',
      nome: 'Cinza Carvão',
      tipo: 'COR',
    },
    {
      codigo: '60ca0a0b8defb9000122054b',
      nome: 'Salmão/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '60ca0af38defb900012205ac',
      nome: 'Prata/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '60e89bfb9d5a960001b14570',
      nome: 'Metal',
      tipo: 'COR',
    },
    {
      codigo: '61008fe876d4220001c074b1',
      nome: 'Verde Fendi',
      tipo: 'COR',
    },
    {
      codigo: '6151b1b4094eed0001dec4e8',
      nome: 'Amarelo Mostarda',
      tipo: 'COR',
    },
    {
      codigo: '6123fd8a7408900001663ce2',
      nome: 'Azul Listrado',
      tipo: 'COR',
    },
    {
      codigo: '6151b1b3094eed0001dec4e7',
      nome: 'Alumínio Cromo',
      tipo: 'COR',
    },
    {
      codigo: '614414a834b54b0001843e40',
      nome: 'Verde Eucalipto',
      tipo: 'COR',
    },
    {
      codigo: '614414b034b54b0001843e55',
      nome: 'Azul Glacial',
      tipo: 'COR',
    },
    {
      codigo: '614414b718e8360001af1afc',
      nome: 'Verde Menta',
      tipo: 'COR',
    },
    {
      codigo: '6149d27c3619c00001c18460',
      nome: 'Chumbo/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '6151b1b1094eed0001dec4e5',
      nome: '1 face',
      tipo: 'COR',
    },
    {
      codigo: '5f7b6e246edc840001fa1c28',
      nome: 'Azul Royal/Verde',
      tipo: 'COR',
    },
    {
      codigo: '6123fd7a7408900001663cdb',
      nome: 'Verde Listrado',
      tipo: 'COR',
    },
    {
      codigo: '5f7771906edc840001f88683',
      nome: 'Prata/Rosa/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5f77702b6edc840001f885e7',
      nome: 'Prata/Grafite/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5f7770496edc840001f885e8',
      nome: 'Prata/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5f77709c6edc840001f8861b',
      nome: 'Prata/Lilás',
      tipo: 'COR',
    },
    {
      codigo: '5f77710e6edc840001f88643',
      nome: 'Prata/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5c0fb564452cfa0001eb31dd',
      nome: 'Azul Claro/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5f7b80b56edc840001fa534d',
      nome: 'Cinza/Branco/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5bf046307dd57b00018d8647',
      nome: 'Azul Marinho/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5f776fb26edc840001f885df',
      nome: 'Prata/Azul/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f7771a96edc840001f8868c',
      nome: 'Prata/Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5f7771cf6edc840001f8868f',
      nome: 'Prata/Roxo/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f77726c6edc840001f886b0',
      nome: 'Prata/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5f7772bb6edc840001f886c5',
      nome: 'Prata/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5f7772dc6edc840001f886c8',
      nome: 'Preto/Azul Marinho',
      tipo: 'COR',
    },
    {
      codigo: '5f7772f96edc840001f886c9',
      nome: 'Preto/Azul Turquesa',
      tipo: 'COR',
    },
    {
      codigo: '5f7771546edc840001f88659',
      nome: 'Prata/Preto/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f776e9a6edc840001f8858c',
      nome: 'Marrom/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5f776c6f6edc840001f884c5',
      nome: 'Grafite/Rosa/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f776d0b6edc840001f88528',
      nome: 'Grafite/Rosa/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5f776d3d6edc840001f88541',
      nome: 'Grafite/Verde/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5f776da36edc840001f88558',
      nome: 'Laranja/Preto/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5f776dda6edc840001f8856f',
      nome: 'Lilás/Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5f776e166edc840001f88582',
      nome: 'Marrom/Chumbo',
      tipo: 'COR',
    },
    {
      codigo: '5f77700c6edc840001f885e3',
      nome: 'Prata/Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5f776e6a6edc840001f88587',
      nome: 'Marrom/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5f776fcf6edc840001f885e0',
      nome: 'Prata/Azul/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5f776eb46edc840001f88592',
      nome: 'Marrom/Vinho',
      tipo: 'COR',
    },
    {
      codigo: '5f776eda6edc840001f88597',
      nome: 'Mustang',
      tipo: 'COR',
    },
    {
      codigo: '5f776f066edc840001f885aa',
      nome: 'Pink/Azul Marinho',
      tipo: 'COR',
    },
    {
      codigo: '5f776f616edc840001f885d3',
      nome: 'Prata/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5f776f8c6edc840001f885d7',
      nome: 'Prata/Azul/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f77735b6edc840001f886f5',
      nome: 'Preto/Diva Pink',
      tipo: 'COR',
    },
    {
      codigo: '5f776e396edc840001f88586',
      nome: 'Marrom/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f7776fa6edc840001f8882d',
      nome: 'Vermelho/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f77731f6edc840001f886cf',
      nome: 'Preto/Azul/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5f7775bf6edc840001f887bd',
      nome: 'Verde Coral',
      tipo: 'COR',
    },
    {
      codigo: '5f7775df6edc840001f887c2',
      nome: 'Verde Musgo/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5f7775f86edc840001f887c8',
      nome: 'Verde/Chumbo',
      tipo: 'COR',
    },
    {
      codigo: '5f77760c6edc840001f887d3',
      nome: 'Verde/Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5f77762f6edc840001f887d7',
      nome: 'Verde/Prata/Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5f77757f6edc840001f887b8',
      nome: 'Roxo/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5f77766c6edc840001f88801',
      nome: 'Verde/Preto/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5f77755e6edc840001f887b3',
      nome: 'Roxo/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5f77771b6edc840001f8882f',
      nome: 'Vermelho/Amarelo/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5f7777366edc840001f88835',
      nome: 'Vermelho/Branco/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f7777546edc840001f88837',
      nome: 'Vermelho/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5f7777696edc840001f8883b',
      nome: 'Violeta/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5f77777f6edc840001f88848',
      nome: 'Violeta/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6151b1d2094eed0001dec4f8',
      nome: 'Cromo Diamond',
      tipo: 'COR',
    },
    {
      codigo: '5f77764a6edc840001f887ed',
      nome: 'Verde/Preto/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f7774926edc840001f88740',
      nome: 'Rosa/Azul Marinho',
      tipo: 'COR',
    },
    {
      codigo: '5f7b78d36edc840001fa3d3b',
      nome: 'Mescla/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5f7773766edc840001f8870b',
      nome: 'Preto/Laranja/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f77739a6edc840001f88719',
      nome: 'Preto/Pink',
      tipo: 'COR',
    },
    {
      codigo: '5f7773b06edc840001f88720',
      nome: 'Preto/Prata/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f7773c86edc840001f88721',
      nome: 'Preto/Prata/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5f7773df6edc840001f88728',
      nome: 'Preto/Prata/Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5f7775a76edc840001f887b9',
      nome: 'Roxo/Rosa/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5f7774776edc840001f8873d',
      nome: 'Preto/Roxo/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f7773356edc840001f886db',
      nome: 'Preto/Azul/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5f7774ad6edc840001f88747',
      nome: 'Rosa/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5f7774cd6edc840001f88757',
      nome: 'Rosa/Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5f7774e46edc840001f88778',
      nome: 'Rosa/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5f7775116edc840001f8879b',
      nome: 'Rosa/Preto/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f77752e6edc840001f887a8',
      nome: 'Rosa/Roxo/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5f7775466edc840001f887b2',
      nome: 'Rosa/Vinho',
      tipo: 'COR',
    },
    {
      codigo: '5f7774556edc840001f88737',
      nome: 'Preto/Preto',
      tipo: 'COR',
    },
    {
      codigo: '617812226b0b7e0001abbe56',
      nome: 'Branco Flo',
      tipo: 'COR',
    },
    {
      codigo: '6178117d6b0b7e0001abbe2f',
      nome: 'Gold Opaco',
      tipo: 'COR',
    },
    {
      codigo: '6178117e6b0b7e0001abbe30',
      nome: 'Red Gold Escovado',
      tipo: 'COR',
    },
    {
      codigo: '617811806b0b7e0001abbe31',
      nome: 'Red Gold Opaco',
      tipo: 'COR',
    },
    {
      codigo: '617811816b0b7e0001abbe32',
      nome: 'Níquel Fosco',
      tipo: 'COR',
    },
    {
      codigo: '617811826b0b7e0001abbe33',
      nome: 'Acetinado',
      tipo: 'COR',
    },
    {
      codigo: '617812486b0b7e0001abbe73',
      nome: 'Naturallis',
      tipo: 'COR',
    },
    {
      codigo: '6178121a6b0b7e0001abbe50',
      nome: 'Cromado Polido',
      tipo: 'COR',
    },
    {
      codigo: '617811796b0b7e0001abbe2c',
      nome: 'Black Silk',
      tipo: 'COR',
    },
    {
      codigo: '617812256b0b7e0001abbe58',
      nome: 'Preto Melamina',
      tipo: 'COR',
    },
    {
      codigo: '617812266b0b7e0001abbe59',
      nome: 'Wenge',
      tipo: 'COR',
    },
    {
      codigo: '617812406b0b7e0001abbe6d',
      nome: 'Cinza Alumini',
      tipo: 'COR',
    },
    {
      codigo: '617812436b0b7e0001abbe6f',
      nome: 'Imbuia',
      tipo: 'COR',
    },
    {
      codigo: '617812446b0b7e0001abbe70',
      nome: 'Maple',
      tipo: 'COR',
    },
    {
      codigo: '6151b1cf094eed0001dec4f6',
      nome: 'Couro',
      tipo: 'COR',
    },
    {
      codigo: '617811836b0b7e0001abbe34',
      nome: 'Brilho',
      tipo: 'COR',
    },
    {
      codigo: '617811716b0b7e0001abbe26',
      nome: 'Red Gold Diamond',
      tipo: 'COR',
    },
    {
      codigo: '617811676b0b7e0001abbe1e',
      nome: 'Inox Polido',
      tipo: 'COR',
    },
    {
      codigo: '617811686b0b7e0001abbe1f',
      nome: 'Acetinado Cromo',
      tipo: 'COR',
    },
    {
      codigo: '6178116a6b0b7e0001abbe20',
      nome: 'Cobre Fosco',
      tipo: 'COR',
    },
    {
      codigo: '6178116b6b0b7e0001abbe21',
      nome: 'Alumínio Fosco',
      tipo: 'COR',
    },
    {
      codigo: '6178116c6b0b7e0001abbe22',
      nome: 'Rose Diamond',
      tipo: 'COR',
    },
    {
      codigo: '6178116e6b0b7e0001abbe23',
      nome: 'Capuccino',
      tipo: 'COR',
    },
    {
      codigo: '6178117c6b0b7e0001abbe2e',
      nome: 'Gold Escovado',
      tipo: 'COR',
    },
    {
      codigo: '617811706b0b7e0001abbe25',
      nome: 'Cinza Fosco',
      tipo: 'COR',
    },
    {
      codigo: '6178117a6b0b7e0001abbe2d',
      nome: 'Escovado Opaco',
      tipo: 'COR',
    },
    {
      codigo: '617811736b0b7e0001abbe27',
      nome: 'Titanium',
      tipo: 'COR',
    },
    {
      codigo: '617811746b0b7e0001abbe28',
      nome: 'Dourado Diamond',
      tipo: 'COR',
    },
    {
      codigo: '617811756b0b7e0001abbe29',
      nome: 'Stone Níquel Escovado com Verniz',
      tipo: 'COR',
    },
    {
      codigo: '617811776b0b7e0001abbe2a',
      nome: 'Stone Níquel Velho',
      tipo: 'COR',
    },
    {
      codigo: '617811786b0b7e0001abbe2b',
      nome: 'Wood Níquel Escovado com Verniz',
      tipo: 'COR',
    },
    {
      codigo: '6178124a6b0b7e0001abbe74',
      nome: 'Noce',
      tipo: 'COR',
    },
    {
      codigo: '6178116f6b0b7e0001abbe24',
      nome: 'Rose Escovado',
      tipo: 'COR',
    },
    {
      codigo: '617812976b0b7e0001abbeaf',
      nome: 'Vintage Dourado',
      tipo: 'COR',
    },
    {
      codigo: '6178128a6b0b7e0001abbea5',
      nome: 'Crinza Sagrado',
      tipo: 'COR',
    },
    {
      codigo: '6178128b6b0b7e0001abbea6',
      nome: 'Fendi',
      tipo: 'COR',
    },
    {
      codigo: '6178128d6b0b7e0001abbea7',
      nome: 'Gianduia Trama',
      tipo: 'COR',
    },
    {
      codigo: '6178128e6b0b7e0001abbea8',
      nome: 'Itapuã',
      tipo: 'COR',
    },
    {
      codigo: '6178128f6b0b7e0001abbea9',
      nome: 'Louro Freijo Bck',
      tipo: 'COR',
    },
    {
      codigo: '617812476b0b7e0001abbe72',
      nome: 'Mogno',
      tipo: 'COR',
    },
    {
      codigo: '617812966b0b7e0001abbeae',
      nome: 'Cromo Rosa Quartz',
      tipo: 'COR',
    },
    {
      codigo: '617812866b0b7e0001abbea2',
      nome: 'Ameixa Negra',
      tipo: 'COR',
    },
    {
      codigo: '617812986b0b7e0001abbeb0',
      nome: 'Vintage Grafite',
      tipo: 'COR',
    },
    {
      codigo: '6178129f6b0b7e0001abbeb5',
      nome: 'Cromado Fosco com Verniz',
      tipo: 'COR',
    },
    {
      codigo: '617812a06b0b7e0001abbeb6',
      nome: 'Branco com Verniz',
      tipo: 'COR',
    },
    {
      codigo: '617812a26b0b7e0001abbeb8',
      nome: 'Fume Ouro Velho',
      tipo: 'COR',
    },
    {
      codigo: '617812a46b0b7e0001abbeb9',
      nome: 'Light Peach Cobre Velho',
      tipo: 'COR',
    },
    {
      codigo: '617812ad6b0b7e0001abbec0',
      nome: 'Rose Brilho',
      tipo: 'COR',
    },
    {
      codigo: '617812906b0b7e0001abbeaa',
      nome: 'Metallic Suede',
      tipo: 'COR',
    },
    {
      codigo: '617812666b0b7e0001abbe8a',
      nome: 'Lilas',
      tipo: 'COR',
    },
    {
      codigo: '6178124c6b0b7e0001abbe76',
      nome: 'Patina',
      tipo: 'COR',
    },
    {
      codigo: '6178124d6b0b7e0001abbe77',
      nome: 'Tabaco',
      tipo: 'COR',
    },
    {
      codigo: '6178124f6b0b7e0001abbe78',
      nome: 'Tabaco Chocolate',
      tipo: 'COR',
    },
    {
      codigo: '617812506b0b7e0001abbe79',
      nome: 'Cromado Fosco',
      tipo: 'COR',
    },
    {
      codigo: '617812606b0b7e0001abbe85',
      nome: 'Alumínio',
      tipo: 'COR',
    },
    {
      codigo: '617812616b0b7e0001abbe86',
      nome: 'Latão',
      tipo: 'COR',
    },
    {
      codigo: '617812896b0b7e0001abbea4',
      nome: 'Cinza Cristal',
      tipo: 'COR',
    },
    {
      codigo: '617812656b0b7e0001abbe89',
      nome: 'Amarela',
      tipo: 'COR',
    },
    {
      codigo: '617812876b0b7e0001abbea3',
      nome: 'Argila',
      tipo: 'COR',
    },
    {
      codigo: '617812686b0b7e0001abbe8b',
      nome: 'Cromada',
      tipo: 'COR',
    },
    {
      codigo: '617812696b0b7e0001abbe8c',
      nome: 'Ouro Vecchino',
      tipo: 'COR',
    },
    {
      codigo: '6178126a6b0b7e0001abbe8d',
      nome: 'Cromo-Wood',
      tipo: 'COR',
    },
    {
      codigo: '6178126d6b0b7e0001abbe8f',
      nome: 'Vecchio Cobre-Wood',
      tipo: 'COR',
    },
    {
      codigo: '6178127e6b0b7e0001abbe9c',
      nome: 'Cromo Polido',
      tipo: 'COR',
    },
    {
      codigo: '617811636b0b7e0001abbe1b',
      nome: 'Inox Escovado',
      tipo: 'COR',
    },
    {
      codigo: '617812626b0b7e0001abbe87',
      nome: 'Ouro Vecchio',
      tipo: 'COR',
    },
    {
      codigo: '6151b1f8094eed0001dec511',
      nome: 'Preto Fosco',
      tipo: 'COR',
    },
    {
      codigo: '6151b1ec094eed0001dec50a',
      nome: 'New Champagne',
      tipo: 'COR',
    },
    {
      codigo: '6151b1ed094eed0001dec50b',
      nome: 'New Grey',
      tipo: 'COR',
    },
    {
      codigo: '6151b1ee094eed0001dec50c',
      nome: 'Níquel Escovado',
      tipo: 'COR',
    },
    {
      codigo: '6151b1ef094eed0001dec50d',
      nome: 'Níquel Velho',
      tipo: 'COR',
    },
    {
      codigo: '6151b1f1094eed0001dec50e',
      nome: 'Onix',
      tipo: 'COR',
    },
    {
      codigo: '617811666b0b7e0001abbe1d',
      nome: 'Titanium Escovado',
      tipo: 'COR',
    },
    {
      codigo: '6151b1f6094eed0001dec510',
      nome: 'Preta e Dourada',
      tipo: 'COR',
    },
    {
      codigo: '6151b1e7094eed0001dec507',
      nome: 'Liso Rosa',
      tipo: 'COR',
    },
    {
      codigo: '6151b1fa094eed0001dec512',
      nome: 'Preto/Cromado',
      tipo: 'COR',
    },
    {
      codigo: '6151b1fb094eed0001dec513',
      nome: 'Red Gold',
      tipo: 'COR',
    },
    {
      codigo: '6151b1fd094eed0001dec514',
      nome: 'Red Gold/Preto ',
      tipo: 'COR',
    },
    {
      codigo: '6151b200094eed0001dec515',
      nome: 'Rose e Branco',
      tipo: 'COR',
    },
    {
      codigo: '6151b201094eed0001dec516',
      nome: 'Rose Gold',
      tipo: 'COR',
    },
    {
      codigo: '6151b203094eed0001dec517',
      nome: 'Rose Gold Mix',
      tipo: 'COR',
    },
    {
      codigo: '6151b1f3094eed0001dec50f',
      nome: 'Potassio',
      tipo: 'COR',
    },
    {
      codigo: '6151b1de094eed0001dec501',
      nome: 'Gold Mix',
      tipo: 'COR',
    },
    {
      codigo: '6151b1d3094eed0001dec4f9',
      nome: 'Cromo Escovado',
      tipo: 'COR',
    },
    {
      codigo: '6151b1d4094eed0001dec4fa',
      nome: 'Cromo/Branca',
      tipo: 'COR',
    },
    {
      codigo: '6151b1d5094eed0001dec4fb',
      nome: 'Cromo/Preta',
      tipo: 'COR',
    },
    {
      codigo: '6151b1d6094eed0001dec4fc',
      nome: 'Diamond Cromado',
      tipo: 'COR',
    },
    {
      codigo: '6151b1d8094eed0001dec4fd',
      nome: 'Dourada',
      tipo: 'COR',
    },
    {
      codigo: '6151b1da094eed0001dec4fe',
      nome: 'Esmeralda',
      tipo: 'COR',
    },
    {
      codigo: '6151b1ea094eed0001dec509',
      nome: 'Matte Escovado',
      tipo: 'COR',
    },
    {
      codigo: '6151b1dd094eed0001dec500',
      nome: 'Gold',
      tipo: 'COR',
    },
    {
      codigo: '6151b1e9094eed0001dec508',
      nome: 'Marsala',
      tipo: 'COR',
    },
    {
      codigo: '6151b1e1094eed0001dec502',
      nome: 'Inox Fosco',
      tipo: 'COR',
    },
    {
      codigo: '6151b1e2094eed0001dec503',
      nome: 'Inox Matte Esc',
      tipo: 'COR',
    },
    {
      codigo: '6151b1e3094eed0001dec504',
      nome: 'Liso',
      tipo: 'COR',
    },
    {
      codigo: '6151b1e5094eed0001dec505',
      nome: 'Liso Azul',
      tipo: 'COR',
    },
    {
      codigo: '6151b1e6094eed0001dec506',
      nome: 'Liso Cinza',
      tipo: 'COR',
    },
    {
      codigo: '6151b206094eed0001dec51a',
      nome: 'Steal',
      tipo: 'COR',
    },
    {
      codigo: '6151b1db094eed0001dec4ff',
      nome: 'Fosco',
      tipo: 'COR',
    },
    {
      codigo: '6178115c6b0b7e0001abbe15',
      nome: 'Alumínio Anodizado Fosco',
      tipo: 'COR',
    },
    {
      codigo: '6151b204094eed0001dec518',
      nome: 'Rubi Dourado',
      tipo: 'COR',
    },
    {
      codigo: '617811536b0b7e0001abbe0e',
      nome: 'Titanio',
      tipo: 'COR',
    },
    {
      codigo: '617811546b0b7e0001abbe0f',
      nome: 'Inox Matte',
      tipo: 'COR',
    },
    {
      codigo: '617811556b0b7e0001abbe10',
      nome: 'Inox/Champagne',
      tipo: 'COR',
    },
    {
      codigo: '617811576b0b7e0001abbe11',
      nome: 'Azul Serenity',
      tipo: 'COR',
    },
    {
      codigo: '617811586b0b7e0001abbe12',
      nome: 'Níquel Escovado com Verniz',
      tipo: 'COR',
    },
    {
      codigo: '617811506b0b7e0001abbe0c',
      nome: 'Royal Blue',
      tipo: 'COR',
    },
    {
      codigo: '6178115a6b0b7e0001abbe14',
      nome: 'Cromo',
      tipo: 'COR',
    },
    {
      codigo: '6178114f6b0b7e0001abbe0b',
      nome: 'Curry',
      tipo: 'COR',
    },
    {
      codigo: '6178115d6b0b7e0001abbe16',
      nome: 'Cobre Velho',
      tipo: 'COR',
    },
    {
      codigo: '6178115e6b0b7e0001abbe17',
      nome: 'Antique',
      tipo: 'COR',
    },
    {
      codigo: '6178115f6b0b7e0001abbe18',
      nome: 'Dourado Escovado',
      tipo: 'COR',
    },
    {
      codigo: '617811616b0b7e0001abbe19',
      nome: 'Ouro Velho',
      tipo: 'COR',
    },
    {
      codigo: '617811626b0b7e0001abbe1a',
      nome: 'Níquel Cobre',
      tipo: 'COR',
    },
    {
      codigo: '5f7771356edc840001f88647',
      nome: 'Prata/Preto/Azul',
      tipo: 'COR',
    },
    {
      codigo: '617811596b0b7e0001abbe13',
      nome: 'Mesclado',
      tipo: 'COR',
    },
    {
      codigo: '6151b358094eed0001dec522',
      nome: 'Escovado',
      tipo: 'COR',
    },
    {
      codigo: '617811656b0b7e0001abbe1c',
      nome: 'Onix Escovado',
      tipo: 'COR',
    },
    {
      codigo: '6151b208094eed0001dec51b',
      nome: 'Stone Polido',
      tipo: 'COR',
    },
    {
      codigo: '6151b209094eed0001dec51c',
      nome: 'Titânio',
      tipo: 'COR',
    },
    {
      codigo: '6151b20b094eed0001dec51d',
      nome: 'Vecchio Cobre',
      tipo: 'COR',
    },
    {
      codigo: '6151b20c094eed0001dec51e',
      nome: 'Vecchio Metallo',
      tipo: 'COR',
    },
    {
      codigo: '6151b211094eed0001dec51f',
      nome: 'Vintage Rose',
      tipo: 'COR',
    },
    {
      codigo: '617811526b0b7e0001abbe0d',
      nome: 'Sandgrey',
      tipo: 'COR',
    },
    {
      codigo: '6151b357094eed0001dec521',
      nome: 'Polido',
      tipo: 'COR',
    },
    {
      codigo: '6151b205094eed0001dec519',
      nome: 'Sisal',
      tipo: 'COR',
    },
    {
      codigo: '6151b359094eed0001dec523',
      nome: 'Preta',
      tipo: 'COR',
    },
    {
      codigo: '615b5f5d5b6d5c0001be9854',
      nome: 'Rosa/Bordô',
      tipo: 'COR',
    },
    {
      codigo: '615b602357eaea000192f0a2',
      nome: 'Rosa Claro/Lilás',
      tipo: 'COR',
    },
    {
      codigo: '61697ce6fad9c10001909352',
      nome: 'Grafiti',
      tipo: 'COR',
    },
    {
      codigo: '616d8871c63e8a0001f9908a',
      nome: 'Off White',
      tipo: 'COR',
    },
    {
      codigo: '6178114e6b0b7e0001abbe0a',
      nome: 'Berry',
      tipo: 'COR',
    },
    {
      codigo: '6151b355094eed0001dec520',
      nome: 'Cromado',
      tipo: 'COR',
    },
    {
      codigo: '5f774e4f6edc840001f87262',
      nome: 'Roxo/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5f7761c86edc840001f87f58',
      nome: 'Azul/Amarelo/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f7743d96edc840001f850df',
      nome: 'Azul/Branco/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5f77442b6edc840001f8512d',
      nome: 'Preto/Branco/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5f774b446edc840001f87035',
      nome: 'Mescla/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f774baa6edc840001f87071',
      nome: 'Azul/Vinho',
      tipo: 'COR',
    },
    {
      codigo: '5f774bcb6edc840001f87086',
      nome: 'Burnet',
      tipo: 'COR',
    },
    {
      codigo: '5f774c896edc840001f870e9',
      nome: 'Caqui',
      tipo: 'COR',
    },
    {
      codigo: '5f5ff8ddf6153c0001d7f544',
      nome: 'Bege Claro',
      tipo: 'COR',
    },
    {
      codigo: '5f774e086edc840001f87224',
      nome: 'Grafite/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5f597884f6153c0001d31384',
      nome: 'Fumê ',
      tipo: 'COR',
    },
    {
      codigo: '5f77716b6edc840001f88665',
      nome: 'Prata/Preto/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5f774eb46edc840001f872c0',
      nome: 'Roxo/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f774f2f6edc840001f8735d',
      nome: 'Vinho/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5f774fb16edc840001f873f5',
      nome: 'Preto/Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5f7750036edc840001f87448',
      nome: 'Cinza/Roxo',
      tipo: 'COR',
    },
    {
      codigo: '5f7750366edc840001f87488',
      nome: 'Preto/Chumbo',
      tipo: 'COR',
    },
    {
      codigo: '5f77506a6edc840001f874b6',
      nome: 'Prata/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f774dbc6edc840001f871d6',
      nome: 'Azul/Azul Marinho',
      tipo: 'COR',
    },
    {
      codigo: '5f2c130939cbe0000113dac1',
      nome: 'Coral Claro/Coral',
      tipo: 'COR',
    },
    {
      codigo: '5f2b337a39cbe00001133514',
      nome: 'Azul Polar',
      tipo: 'COR',
    },
    {
      codigo: '5f2b33d039cbe000011335a8',
      nome: 'Cinza Claro Mesclado',
      tipo: 'COR',
    },
    {
      codigo: '5f2b33e239cbe000011335c2',
      nome: 'Vermelho Mesclado',
      tipo: 'COR',
    },
    {
      codigo: '5f2b342a39cbe0000113363a',
      nome: 'Preto Mesclado',
      tipo: 'COR',
    },
    {
      codigo: '5f2b348939cbe000011336a0',
      nome: 'Azul Mesclado',
      tipo: 'COR',
    },
    {
      codigo: '5f2b34a539cbe000011336c5',
      nome: 'Cinza Mesclado',
      tipo: 'COR',
    },
    {
      codigo: '5f2b34d439cbe000011336ff',
      nome: 'Violeta',
      tipo: 'COR',
    },
    {
      codigo: '5f7740e86edc840001f84b05',
      nome: 'Branco/Preto/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5f2b38b839cbe00001133d9b',
      nome: 'Antracite Mesclado',
      tipo: 'COR',
    },
    {
      codigo: '5f7750ef6edc840001f8753f',
      nome: 'Rato',
      tipo: 'COR',
    },
    {
      codigo: '5f2c133939cbe0000113dade',
      nome: 'Branco/Bege',
      tipo: 'COR',
    },
    {
      codigo: '5f2c134739cbe0000113dae7',
      nome: 'Cinza Claro/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5f2c135839cbe0000113daef',
      nome: 'Marfim/Bege',
      tipo: 'COR',
    },
    {
      codigo: '5f2c136939cbe0000113daf7',
      nome: 'Amarelo Claro/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f2c18f839cbe0000113e069',
      nome: 'Rosê/Uva',
      tipo: 'COR',
    },
    {
      codigo: '5f3d98c21352ce000140fcca',
      nome: 'Azul/Estampado',
      tipo: 'COR',
    },
    {
      codigo: '5f597648f6153c0001d312fe',
      nome: 'OFF-WHITE',
      tipo: 'COR',
    },
    {
      codigo: '5f2b34f039cbe00001133726',
      nome: 'Cromado Satinado',
      tipo: 'COR',
    },
    {
      codigo: '5f7760c56edc840001f87eef',
      nome: 'Azul Marinho/Atlantis',
      tipo: 'COR',
    },
    {
      codigo: '5f775ea66edc840001f87e2f',
      nome: ' Azul Noite',
      tipo: 'COR',
    },
    {
      codigo: '5f775f236edc840001f87e38',
      nome: ' BROWN ',
      tipo: 'COR',
    },
    {
      codigo: '5f775f8e6edc840001f87e49',
      nome: ' Chili Pepper ',
      tipo: 'COR',
    },
    {
      codigo: '5f775fee6edc840001f87e82',
      nome: ' Dark Shadow',
      tipo: 'COR',
    },
    {
      codigo: '5f7760206edc840001f87e86',
      nome: ' Fossil Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5f77603f6edc840001f87e89',
      nome: 'Amarelo Light',
      tipo: 'COR',
    },
    {
      codigo: '5f7760576edc840001f87e8a',
      nome: 'Antílope',
      tipo: 'COR',
    },
    {
      codigo: '5f7750a36edc840001f874ec',
      nome: 'Marrom/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f7760ab6edc840001f87eee',
      nome: 'Azul Jeans/Cinza Escuro',
      tipo: 'COR',
    },
    {
      codigo: '5f7756da6edc840001f87b80',
      nome: 'Grafite/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f7760de6edc840001f87f02',
      nome: 'Azul Marinho/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5f7760f46edc840001f87f08',
      nome: 'Azul Marinho/Kiwi',
      tipo: 'COR',
    },
    {
      codigo: '5f77610a6edc840001f87f09',
      nome: 'Azul Marinho/Pink',
      tipo: 'COR',
    },
    {
      codigo: '5f77612d6edc840001f87f18',
      nome: 'Azul Petróleo/Preto/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5f7761716edc840001f87f1e',
      nome: 'Azul Royal/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5f7761956edc840001f87f2d',
      nome: 'Azul Royal/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5f7761b16edc840001f87f45',
      nome: 'Azul Turquesa/Azul Marinho',
      tipo: 'COR',
    },
    {
      codigo: '5f7760866edc840001f87eba',
      nome: 'Azul Escuro/Azul Jeans',
      tipo: 'COR',
    },
    {
      codigo: '5f77549d6edc840001f87914',
      nome: 'Preto/Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5f16011be7d6ca00015ff00c',
      nome: 'Rosê',
      tipo: 'COR',
    },
    {
      codigo: '5f7751536edc840001f8759b',
      nome: 'Grafite/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5f7751f66edc840001f87660',
      nome: 'Chumbo/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f77524b6edc840001f876da',
      nome: 'Roxo/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5f7752976edc840001f87724',
      nome: 'Bege/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5f7753506edc840001f877c8',
      nome: 'Marrom/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f7753cb6edc840001f87843',
      nome: 'Mamut',
      tipo: 'COR',
    },
    {
      codigo: '5f7757e36edc840001f87c07',
      nome: 'Vermelho/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5f7754436edc840001f878b7',
      nome: 'Dourado/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f7757416edc840001f87bd6',
      nome: 'Chumbo/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5f7754c76edc840001f87940',
      nome: 'Carbono',
      tipo: 'COR',
    },
    {
      codigo: '5f7754f16edc840001f87968',
      nome: 'Vermelho/Chumbo',
      tipo: 'COR',
    },
    {
      codigo: '5f7755196edc840001f8798e',
      nome: 'Chumbo/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5f77554c6edc840001f879bd',
      nome: 'Grafite/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5f77559e6edc840001f87a23',
      nome: 'Prata/Azul Marinho',
      tipo: 'COR',
    },
    {
      codigo: '5f7755f36edc840001f87a9d',
      nome: 'Azul Royal/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f7756516edc840001f87aff',
      nome: 'Chumbo/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f7750cc6edc840001f8751c',
      nome: 'Chumbo/Vinho',
      tipo: 'COR',
    },
    {
      codigo: '5f7754206edc840001f87897',
      nome: 'Mescla/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5e63f8907c3e77000141644c',
      nome: 'Bege com barra Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5e63f8367c3e770001416443',
      nome: 'Cinza/Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5e63f8497c3e770001416444',
      nome: 'Rosa/Colorido',
      tipo: 'COR',
    },
    {
      codigo: '5e63f8527c3e770001416445',
      nome: 'Bege/Colorido',
      tipo: 'COR',
    },
    {
      codigo: '5e63f85b7c3e770001416446',
      nome: 'Azul Marinho/Colorido',
      tipo: 'COR',
    },
    {
      codigo: '5e63f8637c3e770001416447',
      nome: 'Cinza/Colorido',
      tipo: 'COR',
    },
    {
      codigo: '5e63f86d7c3e770001416448',
      nome: 'Verde/Colorido',
      tipo: 'COR',
    },
    {
      codigo: '5e63f8767c3e770001416449',
      nome: 'Kaki/Colorido',
      tipo: 'COR',
    },
    {
      codigo: '5e67cc9653322a00019ff753',
      nome: 'Cinza/Estampado',
      tipo: 'COR',
    },
    {
      codigo: '5e63f8877c3e77000141644b',
      nome: 'Cinza com barra Azul',
      tipo: 'COR',
    },
    {
      codigo: '5e63f7f77c3e770001416438',
      nome: 'Rosa Claro/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5e63f8977c3e770001416450',
      nome: 'Branco com barra Kaki',
      tipo: 'COR',
    },
    {
      codigo: '5e63f8a17c3e770001416451',
      nome: 'Rosa com barra telha',
      tipo: 'COR',
    },
    {
      codigo: '5e67cc4e53322a00019ff721',
      nome: 'Branco c/ trama Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5e67cc5a53322a00019ff72c',
      nome: 'Cinza c/ trama Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5e67cc6e53322a00019ff734',
      nome: 'Rosa c/ trama Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5e67cc7953322a00019ff739',
      nome: 'Bege c/ trama Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5f2b336e39cbe000011334fb',
      nome: 'Pérola',
      tipo: 'COR',
    },
    {
      codigo: '5e63f87f7c3e77000141644a',
      nome: 'Goiaba',
      tipo: 'COR',
    },
    {
      codigo: '5dd69d3429622e0001e8ff36',
      nome: 'ROSA',
      tipo: 'COR',
    },
    {
      codigo: '5c13dd8351980c000158cfea',
      nome: 'Inox',
      tipo: 'COR',
    },
    {
      codigo: '5c24d8606149f90001096f6f',
      nome: 'Única',
      tipo: 'COR',
    },
    {
      codigo: '5ce4cdec4be51f000160d76b',
      nome: 'Castanho Wood',
      tipo: 'COR',
    },
    {
      codigo: '5d6ea6af71f11b0001ce9639',
      nome: 'Transparente',
      tipo: 'COR',
    },
    {
      codigo: '5d950af00168c6000117e6d0',
      nome: 'Vermelho (Vermelho)',
      tipo: 'COR',
    },
    {
      codigo: '5d950b9b0168c6000117ec99',
      nome: 'Preto (Preto)',
      tipo: 'COR',
    },
    {
      codigo: '5dadf1bce16852000176a8d9',
      nome: 'Kaki',
      tipo: 'COR',
    },
    {
      codigo: '5e63f8267c3e770001416442',
      nome: 'Azul/Bege',
      tipo: 'COR',
    },
    {
      codigo: '5db88d4b19678900012bc8fe',
      nome: 'Sortido',
      tipo: 'COR',
    },
    {
      codigo: '5e63f80f7c3e77000141643c',
      nome: 'Verde Claro/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5e2211c251247a00014440b7',
      nome: 'Kaki/Vinho',
      tipo: 'COR',
    },
    {
      codigo: '5e277334c7959900018e61fe',
      nome: 'Estampado',
      tipo: 'COR',
    },
    {
      codigo: '5e27734fc7959900018e6221',
      nome: 'Marfim',
      tipo: 'COR',
    },
    {
      codigo: '5e55464f01bc4f0001d9551a',
      nome: 'Pink',
      tipo: 'COR',
    },
    {
      codigo: '5e55d22b01bc4f0001d979a3',
      nome: 'Chumbo',
      tipo: 'COR',
    },
    {
      codigo: '5e63f7df7c3e770001416436',
      nome: 'Bege/Kaki',
      tipo: 'COR',
    },
    {
      codigo: '5e63f7ea7c3e770001416437',
      nome: 'Laranja Claro/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5e67cca253322a00019ff75b',
      nome: 'Estampado Floral',
      tipo: 'COR',
    },
    {
      codigo: '5db88d4319678900012bc8fd',
      nome: 'Colorido',
      tipo: 'COR',
    },
    {
      codigo: '5f10d70c89ea2f00016ef0ef',
      nome: 'Castanho',
      tipo: 'COR',
    },
    {
      codigo: '5eea98e3bbf60000016b3200',
      nome: 'Verde Musgo/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '5eea998dbbf60000016b3224',
      nome: 'Branco/Dourado',
      tipo: 'COR',
    },
    {
      codigo: '5eea9a0ebbf60000016b3266',
      nome: 'Bronze',
      tipo: 'COR',
    },
    {
      codigo: '5eea9aeabbf60000016b3359',
      nome: 'Rosa/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5eea9bacbbf60000016b343c',
      nome: 'Roxo/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5eea9c62bbf60000016b3534',
      nome: 'Bege/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5ef2bce8d2ad600001522483',
      nome: 'Natural',
      tipo: 'COR',
    },
    {
      codigo: '5e67cc8553322a00019ff740',
      nome: 'Azul c/ trama Grafite',
      tipo: 'COR',
    },
    {
      codigo: '5eff76e86e3aff00012599c1',
      nome: 'Branco/Preto/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5eea9376bbf60000016b2d88',
      nome: 'Pink/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f10d71589ea2f00016ef100',
      nome: 'Charuto',
      tipo: 'COR',
    },
    {
      codigo: '5f10d71f89ea2f00016ef113',
      nome: 'Ferrugem',
      tipo: 'COR',
    },
    {
      codigo: '5f10d7a489ea2f00016ef23c',
      nome: 'Lavanda',
      tipo: 'COR',
    },
    {
      codigo: '5f10d7ae89ea2f00016ef246',
      nome: 'Natural/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5f10d7b889ea2f00016ef250',
      nome: 'Tijolo',
      tipo: 'COR',
    },
    {
      codigo: '5f10d7c189ea2f00016ef259',
      nome: 'Listrado',
      tipo: 'COR',
    },
    {
      codigo: '5f774ef46edc840001f8730b',
      nome: 'Cinza/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5ef2be56d2ad6000015225c7',
      nome: 'Caramelo',
      tipo: 'COR',
    },
    {
      codigo: '5eea724ebbf60000016af004',
      nome: 'Marrom/Bege',
      tipo: 'COR',
    },
    {
      codigo: '5e6a3ca953322a0001a0ae94',
      nome: 'Lilás/Estampado',
      tipo: 'COR',
    },
    {
      codigo: '5e72d0acc7889d0001edfabf',
      nome: 'Cobre',
      tipo: 'COR',
    },
    {
      codigo: '5e72d248c7889d0001edfaed',
      nome: 'Camuflado',
      tipo: 'COR',
    },
    {
      codigo: '5ea64de2d38b2b000196e55f',
      nome: 'Laranja/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5ebcb20db7b1150001fbc297',
      nome: 'Verde/Verde Claro',
      tipo: 'COR',
    },
    {
      codigo: '5ebcb218b7b1150001fbc299',
      nome: 'Rosa/Rosa Claro',
      tipo: 'COR',
    },
    {
      codigo: '5eea66b0bbf60000016ad8d5',
      nome: 'Bordo',
      tipo: 'COR',
    },
    {
      codigo: '5eea9879bbf60000016b31fb',
      nome: 'Azul/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5eea6ef1bbf60000016ae972',
      nome: 'Rosa/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5eea981bbbf60000016b31d7',
      nome: 'Preto/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5eea7cffbbf60000016afde3',
      nome: 'Azul Marinho/Caramelo',
      tipo: 'COR',
    },
    {
      codigo: '5eea809ebbf60000016b0b4d',
      nome: 'Bege/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5eea812abbf60000016b0c08',
      nome: 'Preto/Vinho',
      tipo: 'COR',
    },
    {
      codigo: '5eea83cdbbf60000016b0f48',
      nome: 'Chumbo/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5eea8887bbf60000016b16e7',
      nome: 'Chumbo/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5eea8f6bbbf60000016b281b',
      nome: 'Bege/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5eea913abbf60000016b2994',
      nome: 'Azu Marinho/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5f1863b1a6c60400011c4168',
      nome: 'Amêndoa',
      tipo: 'COR',
    },
    {
      codigo: '5eea6d97bbf60000016ae6d9',
      nome: 'Branco/Azul Marinho',
      tipo: 'COR',
    },
    {
      codigo: '5f776a276edc840001f883c8',
      nome: 'Grafite/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5f7767726edc840001f88236',
      nome: 'Chumbo/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5f77678d6edc840001f8823f',
      nome: 'Cinza Escuro/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f7767a26edc840001f88243',
      nome: 'Cinza Escuro/Vinho',
      tipo: 'COR',
    },
    {
      codigo: '5f7767c06edc840001f88256',
      nome: 'Cinza/Lilás/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f7767d96edc840001f88260',
      nome: 'Concreto',
      tipo: 'COR',
    },
    {
      codigo: '5f77680a6edc840001f88282',
      nome: 'Coral/Azul',
      tipo: 'COR',
    },
    {
      codigo: '5f7769c96edc840001f883bc',
      nome: 'Grafite/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f7767606edc840001f88231',
      nome: 'Chumbo/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5f7769ea6edc840001f883c1',
      nome: 'Floter Brown',
      tipo: 'COR',
    },
    {
      codigo: '5f776b576edc840001f88446',
      nome: 'Grafite/Prata/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f776a546edc840001f883ee',
      nome: 'Grafite/Azul/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5f776a786edc840001f883f0',
      nome: 'Grafite/Cinza',
      tipo: 'COR',
    },
    {
      codigo: '5f776aa56edc840001f883f7',
      nome: 'Grafite/Coral',
      tipo: 'COR',
    },
    {
      codigo: '5f776acb6edc840001f88406',
      nome: 'Grafite/Dourado',
      tipo: 'COR',
    },
    {
      codigo: '5f776b166edc840001f8843a',
      nome: 'Grafite/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5f776b846edc840001f8845d',
      nome: 'Grafite/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f774e816edc840001f8728b',
      nome: 'Cinza/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f7762006edc840001f87f8e',
      nome: 'Azul/Branco/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f7769dc6edc840001f883c0',
      nome: 'Floter Amendoa',
      tipo: 'COR',
    },
    {
      codigo: '5f7764b66edc840001f88125',
      nome: 'Azul/Verde/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f7762346edc840001f87fbc',
      nome: 'Azul/Grafite/Rosa',
      tipo: 'COR',
    },
    {
      codigo: '5f776bc16edc840001f8846d',
      nome: 'Grafite/Preto/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f7762526edc840001f87fd8',
      nome: 'Azul/Prata/Rosa ',
      tipo: 'COR',
    },
    {
      codigo: '5f7762b46edc840001f88038',
      nome: 'Azul/Preto/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f7762dd6edc840001f8804d',
      nome: 'Azul/Verde/Branco',
      tipo: 'COR',
    },
    {
      codigo: '5f77673b6edc840001f8822a',
      nome: 'Carbono/Vinho',
      tipo: 'COR',
    },
    {
      codigo: '5f77648f6edc840001f8811f',
      nome: 'Azul/Verde/Prata',
      tipo: 'COR',
    },
    {
      codigo: '5f7762776edc840001f88005',
      nome: 'Azul/Prata/Vermelho',
      tipo: 'COR',
    },
    {
      codigo: '5f7765106edc840001f88126',
      nome: 'Blue/Preto',
      tipo: 'COR',
    },
    {
      codigo: '5f7765606edc840001f88148',
      nome: 'Branco/Azul escuro',
      tipo: 'COR',
    },
    {
      codigo: '5f7765806edc840001f88158',
      nome: 'Branco/Prata/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5f7765a46edc840001f8815b',
      nome: 'Branco/Preto/Amarelo',
      tipo: 'COR',
    },
    {
      codigo: '5f7765bf6edc840001f8815f',
      nome: 'Branco/Preto/Dourado',
      tipo: 'COR',
    },
    {
      codigo: '5f7765f86edc840001f88166',
      nome: 'Branco/Roxo/Verde',
      tipo: 'COR',
    },
    {
      codigo: '5f7766406edc840001f8818a',
      nome: 'Búfalo',
      tipo: 'COR',
    },
    {
      codigo: '5f7766a76edc840001f881d9',
      nome: 'Camel',
      tipo: 'COR',
    },
    {
      codigo: '5f7766df6edc840001f88208',
      nome: 'Camuflado Chumbo',
      tipo: 'COR',
    },
    {
      codigo: '5f77671e6edc840001f88223',
      nome: 'Canela',
      tipo: 'COR',
    },
    {
      codigo: '5f77645b6edc840001f88118',
      nome: 'Azul/Verde/Laranja',
      tipo: 'COR',
    },
    {
      codigo: '64063a6608a7cf00013f5f96',
      nome: '3 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a6069d7250001a87bef',
      nome: '2,5 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a5a08a7cf00013f5f8d',
      nome: '2 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a521130da0001ee0cf3',
      nome: '1,5 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a4169d7250001a87bdc',
      nome: '3/4/ cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a3769d7250001a87bd8',
      nome: '1/3 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a3169d7250001a87bd2',
      nome: '1/4 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '63977c11ab01e2000152a512',
      nome: 'HB3 HB4',
      tipo: 'POTENCIA',
    },
    {
      codigo: '63977c0dab01e2000152a50d',
      nome: 'H16',
      tipo: 'POTENCIA',
    },
    {
      codigo: '63977c09ab01e2000152a50a',
      nome: 'H15',
      tipo: 'POTENCIA',
    },
    {
      codigo: '63977c05ab01e2000152a507',
      nome: 'H13',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a6a69d7250001a87bf7',
      nome: '3,5 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '63977bfdab01e2000152a4fa',
      nome: 'H7',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063aa808a7cf00013f5fb4',
      nome: '9 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '63977bf8ab01e2000152a4f4',
      nome: 'H4',
      tipo: 'POTENCIA',
    },
    {
      codigo: '63977c02ab01e2000152a501',
      nome: 'H8 H9 H11',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063aa108a7cf00013f5fb1',
      nome: '8,5 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a3b08a7cf00013f5f7b',
      nome: '1/2 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '63977bf5ab01e2000152a4f1',
      nome: 'H3',
      tipo: 'POTENCIA',
    },
    {
      codigo: '6391ee2f773ba500017b5944',
      nome: 'H2',
      tipo: 'POTENCIA',
    },
    {
      codigo: '626a935ced00b80001cfbc0d',
      nome: '6000k',
      tipo: 'POTENCIA',
    },
    {
      codigo: '626a9357ed00b80001cfbc05',
      nome: '4000k',
      tipo: 'POTENCIA',
    },
    {
      codigo: '626a9353b3cab000010420cf',
      nome: '3000k',
      tipo: 'POTENCIA',
    },
    {
      codigo: '5e021f22ea047f0001d51bc1',
      nome: 'H1',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a9d69d7250001a87c25',
      nome: '8 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063aae69d7250001a87c29',
      nome: '9,5 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a6f69d7250001a87bff',
      nome: '4 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a9769d7250001a87c1f',
      nome: '7,5 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a9169d7250001a87c1b',
      nome: '7 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a8d08a7cf00013f5fa8',
      nome: '6,5 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a8869d7250001a87c14',
      nome: '6 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a8408a7cf00013f5fa3',
      nome: '5,5 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a7b69d7250001a87c0e',
      nome: '5 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a7408a7cf00013f5f9e',
      nome: '4,5 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063ab369d7250001a87c2b',
      nome: '10 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '64063a4769d7250001a87bdf',
      nome: '1 cv',
      tipo: 'POTENCIA',
    },
    {
      codigo: '62fcf6c1951a5b0001673084',
      nome: 'Integral Crocante',
      tipo: 'SABOR',
    },
    {
      codigo: '6377a9ed56f2190001a9c83a',
      nome: 'Apple Twist',
      tipo: 'SABOR',
    },
    {
      codigo: '647a1ba29976ef0001091500',
      nome: 'Óleo de Linhaça',
      tipo: 'SABOR',
    },
    {
      codigo: '633edbe2684e990001231c3f',
      nome: 'Torta de Banana',
      tipo: 'SABOR',
    },
    {
      codigo: '633edbdb684e990001231c13',
      nome: 'Torta de Limão',
      tipo: 'SABOR',
    },
    {
      codigo: '633edbd1684e990001231be7',
      nome: 'Leite Condensado',
      tipo: 'SABOR',
    },
    {
      codigo: '6304df8af2663400018bb154',
      nome: 'Apple Dream',
      tipo: 'SABOR',
    },
    {
      codigo: '6304df8574faa60001f01424',
      nome: 'Black Widow',
      tipo: 'SABOR',
    },
    {
      codigo: '6304df81f2663400018bb141',
      nome: 'Creme de Coco com Castanha',
      tipo: 'SABOR',
    },
    {
      codigo: '62ac8b31a34ffd0001ade383',
      nome: 'Coco',
      tipo: 'SABOR',
    },
    {
      codigo: '62fcf6c489b9ab0001887d7e',
      nome: 'Tradicional Integral',
      tipo: 'SABOR',
    },
    {
      codigo: '63811357ee0218000166458c',
      nome: 'Amora',
      tipo: 'SABOR',
    },
    {
      codigo: '62fcf6bd951a5b0001673079',
      nome: 'Milk-shake de Morango',
      tipo: 'SABOR',
    },
    {
      codigo: '62fcf6b889b9ab0001887d72',
      nome: 'Iogurte com Coco',
      tipo: 'SABOR',
    },
    {
      codigo: '62fcf6b5951a5b000167305c',
      nome: 'Pudim',
      tipo: 'SABOR',
    },
    {
      codigo: '62fcf6b189b9ab0001887d6e',
      nome: 'Chocolate Trunfado',
      tipo: 'SABOR',
    },
    {
      codigo: '62d560cee27e8d00014560b0',
      nome: 'Merengue de Morango',
      tipo: 'SABOR',
    },
    {
      codigo: '62cd84bc317ad20001f93961',
      nome: 'Citrus',
      tipo: 'SABOR',
    },
    {
      codigo: '62ac8f46d788f90001cd08e3',
      nome: 'Chocolate Amargo',
      tipo: 'SABOR',
    },
    {
      codigo: '62ac8b380e886000017c464b',
      nome: 'Chocolate Maltado',
      tipo: 'SABOR',
    },
    {
      codigo: '62fcf6c889b9ab0001887d81',
      nome: 'Abacaxi com Leite Condensado',
      tipo: 'SABOR',
    },
    {
      codigo: '60008d663877c40001286719',
      nome: 'Cookies Nibs de Cacau',
      tipo: 'SABOR',
    },
    {
      codigo: '601aba03344fcc00018b1971',
      nome: 'Leite ninho c/ creme de avelã',
      tipo: 'SABOR',
    },
    {
      codigo: '61f9662d38df120001a43f65',
      nome: 'BLUE ICE',
      tipo: 'SABOR',
    },
    {
      codigo: '6425a2cd5af9c30001492540',
      nome: 'Cheddar',
      tipo: 'SABOR',
    },
    {
      codigo: '640249c008a7cf00013e736f',
      nome: 'SENSAÇAO',
      tipo: 'SABOR',
    },
    {
      codigo: '640249b808a7cf00013e7367',
      nome: 'BEIJINHO',
      tipo: 'SABOR',
    },
    {
      codigo: '63f60f4886463d00017129a9',
      nome: 'Buenissimo',
      tipo: 'SABOR',
    },
    {
      codigo: '601ab9f8344fcc00018b1966',
      nome: 'Churros c/ doce de leite',
      tipo: 'SABOR',
    },
    {
      codigo: '60008eb53877c4000128694e',
      nome: 'Chocolate Amargo Castanha',
      tipo: 'SABOR',
    },
    {
      codigo: '63810f46dee4dd0001b2b233',
      nome: 'Chocolate com Coco',
      tipo: 'SABOR',
    },
    {
      codigo: '60008e6c3877c400012868c7',
      nome: 'Salted Caramelo/Amendoim',
      tipo: 'SABOR',
    },
    {
      codigo: '601aba1c344fcc00018b1982',
      nome: 'Uva',
      tipo: 'SABOR',
    },
    {
      codigo: '60008d0e3877c40001286669',
      nome: ' Açúcar de Coco',
      tipo: 'SABOR',
    },
    {
      codigo: '60008cbc3877c400012865cd',
      nome: 'Tradicional',
      tipo: 'SABOR',
    },
    {
      codigo: '60008ca33877c40001286598',
      nome: 'Granulada',
      tipo: 'SABOR',
    },
    {
      codigo: '60008c133877c40001286457',
      nome: 'Amendoim',
      tipo: 'SABOR',
    },
    {
      codigo: '5bb932233495e60001587722',
      nome: 'Café com chocolate - mocaccino',
      tipo: 'SABOR',
    },
    {
      codigo: '5bb931a53495e6000158771b',
      nome: 'Banana',
      tipo: 'SABOR',
    },
    {
      codigo: '5bb931423495e60001587718',
      nome: 'Sem sabor',
      tipo: 'SABOR',
    },
    {
      codigo: '63592ad68345c90001230b3e',
      nome: 'chocolate',
      tipo: 'SABOR',
    },
    {
      codigo: '60008e833877c400012868f2',
      nome: 'Doce de Leite',
      tipo: 'SABOR',
    },
    {
      codigo: '6123f0785936210001cfdbfa',
      nome: 'Cappuccino',
      tipo: 'SABOR',
    },
    {
      codigo: '60d62ffe20991f00010262bc',
      nome: 'Açai com Guaraná',
      tipo: 'SABOR',
    },
    {
      codigo: '60d9e347a2f49b00019508c5',
      nome: 'Parmesão',
      tipo: 'SABOR',
    },
    {
      codigo: '61032871007a3b0001b156e0',
      nome: 'Milk Caramel',
      tipo: 'SABOR',
    },
    {
      codigo: '61032890007a3b0001b156e6',
      nome: 'Dark Chocolate Truffle',
      tipo: 'SABOR',
    },
    {
      codigo: '6103290c007a3b0001b156f7',
      nome: 'Cookies and Cream',
      tipo: 'SABOR',
    },
    {
      codigo: '6103293a007a3b0001b156ff',
      nome: 'Cookies',
      tipo: 'SABOR',
    },
    {
      codigo: '610329dc007a3b0001b1570a',
      nome: 'Leite Ninho',
      tipo: 'SABOR',
    },
    {
      codigo: '61032a2e007a3b0001b1570c',
      nome: 'Peanut Butter',
      tipo: 'SABOR',
    },
    {
      codigo: '61032a33007a3b0001b1570d',
      nome: 'Doce de Coco',
      tipo: 'SABOR',
    },
    {
      codigo: '60d5e08120991f000102455f',
      nome: 'Fresh lemon',
      tipo: 'SABOR',
    },
    {
      codigo: '61032a51007a3b0001b15711',
      nome: 'Natural',
      tipo: 'SABOR',
    },
    {
      codigo: '6142256334b54b000181ebbb',
      nome: 'Iogurte Grego com Morango',
      tipo: 'SABOR',
    },
    {
      codigo: '6124edb05936210001d0a75e',
      nome: 'Flocos com Chocolate Chips',
      tipo: 'SABOR',
    },
    {
      codigo: '6127f4755936210001d333c6',
      nome: 'Chocolate Branco',
      tipo: 'SABOR',
    },
    {
      codigo: '6127f4895936210001d333cd',
      nome: 'Brigadeiro',
      tipo: 'SABOR',
    },
    {
      codigo: '6142254b34b54b000181eba0',
      nome: 'Sorvete de Frutas',
      tipo: 'SABOR',
    },
    {
      codigo: '6142255434b54b000181ebac',
      nome: 'Leite',
      tipo: 'SABOR',
    },
    {
      codigo: '62a8898dd788f90001c605f7',
      nome: 'Melancia',
      tipo: 'SABOR',
    },
    {
      codigo: '6142257e3619c00001bc546a',
      nome: 'Chocolate Branco com Morango',
      tipo: 'SABOR',
    },
    {
      codigo: '63810f4087fc5c0001067386',
      nome: 'Napolitano',
      tipo: 'SABOR',
    },
    {
      codigo: '6142258f3619c00001bc5472',
      nome: 'Cotton Candy',
      tipo: 'SABOR',
    },
    {
      codigo: '61032a50007a3b0001b15710',
      nome: 'Romeu e Julieta',
      tipo: 'SABOR',
    },
    {
      codigo: '61f9663438df120001a43f67',
      nome: 'COTTON CANDY',
      tipo: 'SABOR',
    },
    {
      codigo: '62012b488189170001febcd0',
      nome: 'Leite em pó',
      tipo: 'SABOR',
    },
    {
      codigo: '60d5e07420991f000102455a',
      nome: 'Vitamina de frutas',
      tipo: 'SABOR',
    },
    {
      codigo: '61f9663a38df120001a43f69',
      nome: 'LIMAO YUZU',
      tipo: 'SABOR',
    },
    {
      codigo: '601aba2b344fcc00018b1992',
      nome: 'Frutas Amarelas',
      tipo: 'SABOR',
    },
    {
      codigo: '6021418bdcb4e50001a7c32a',
      nome: 'Churros',
      tipo: 'SABOR',
    },
    {
      codigo: '6086e09c3f65c80001bf052f',
      nome: 'Laranja',
      tipo: 'SABOR',
    },
    {
      codigo: '6086e1b33f65c80001bf0661',
      nome: 'Maracujá',
      tipo: 'SABOR',
    },
    {
      codigo: '6086e1de3f65c80001bf067d',
      nome: 'Limão',
      tipo: 'SABOR',
    },
    {
      codigo: '6086e1f73f65c80001bf06a2',
      nome: 'Guaraná',
      tipo: 'SABOR',
    },
    {
      codigo: '6086e2153f65c80001bf06c6',
      nome: 'Tangerina',
      tipo: 'SABOR',
    },
    {
      codigo: '60d4f09820991f000101cefc',
      nome: 'Jabuticaba',
      tipo: 'SABOR',
    },
    {
      codigo: '60aea8080aa25c000166a662',
      nome: 'Morango',
      tipo: 'SABOR',
    },
    {
      codigo: '60aea8490aa25c000166a676',
      nome: 'Maça Verde',
      tipo: 'SABOR',
    },
    {
      codigo: '60aea89e0aa25c000166a6a1',
      nome: 'Frutas Vermelhas',
      tipo: 'SABOR',
    },
    {
      codigo: '62012b3d2090c2000100de03',
      nome: 'Avelã',
      tipo: 'SABOR',
    },
    {
      codigo: '60aea8bf0aa25c000166a6b8',
      nome: 'Ice Blue',
      tipo: 'SABOR',
    },
    {
      codigo: '60aea8da0aa25c000166a6cc',
      nome: 'Limão Yuzu',
      tipo: 'SABOR',
    },
    {
      codigo: '60aea7ae0aa25c000166a63c',
      nome: 'Baunilha',
      tipo: 'SABOR',
    },
    {
      codigo: '60d4f0a620991f000101cf04',
      nome: 'Laranja e Limão',
      tipo: 'SABOR',
    },
    {
      codigo: '5dded9c8078e3200013d0a29',
      nome: 'King',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8ee8a3b5c60001cc8906',
      nome: '6 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8ef0a3b5c60001cc8914',
      nome: '7 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8ef8a3b5c60001cc8920',
      nome: '8 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8f1fa3b5c60001cc8935',
      nome: '12M (10 a 13 Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8f4ba3b5c60001cc8951',
      nome: '24M (14 a 17 kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8eb6a3b5c60001cc889d',
      nome: '1 ano',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8f57a3b5c60001cc8953',
      nome: '36M (16 a 21 Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8f80a3b5c60001cc896c',
      nome: 'P (10 a 14 kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8f2ea3b5c60001cc893d',
      nome: '18M (12 a 15 Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8edfa3b5c60001cc88f3',
      nome: '5 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8ed7a3b5c60001cc88e0',
      nome: '4 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8ec6a3b5c60001cc88bc',
      nome: '2 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8e90a3b5c60001cc8858',
      nome: 'GG (9 a 12 meses)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8df2a3b5c60001cc8811',
      nome: 'RN',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8ddaa3b5c60001cc880f',
      nome: 'M (3 a 6 meses)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8f8ca3b5c60001cc8971',
      nome: 'M (14 a 17 kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfbe7aeea047f0001d34a12',
      nome: '39',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dded9d5078e3200013d0a39',
      nome: 'Queen',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8dbfa3b5c60001cc880b',
      nome: 'P (1 a 3 meses)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8ecfa3b5c60001cc88d1',
      nome: '3 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfbe7c0ea047f0001d34a33',
      nome: '41',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dd313cc91a33d00010ff4c7',
      nome: '30',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3604ea047f0001d3b9e8',
      nome: 'M (10 a 12 Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd360dea047f0001d3b9e9',
      nome: 'G (12 a 14 Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd35e6ea047f0001d3b9e6',
      nome: 'GG (12 a 18 meses)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd35d9ea047f0001d3b9e5',
      nome: 'G (6 a 12 meses)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd35b3ea047f0001d3b9e4',
      nome: '18 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd35acea047f0001d3b9e3',
      nome: '24 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd35a5ea047f0001d3b9e0',
      nome: '12 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfbe771ea047f0001d349e7',
      nome: '35',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfbe7f9ea047f0001d34a7f',
      nome: '34',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee8f98a3b5c60001cc8974',
      nome: 'G (17 a 21 kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfbe778ea047f0001d349ec',
      nome: '37',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd35fcea047f0001d3b9e7',
      nome: 'P (8 a 10 Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfa548ba3b5c60001cfd627',
      nome: '56',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5df15866a3b5c60001cde17c',
      nome: '22',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5df1585ba3b5c60001cde17b',
      nome: '20',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5df10007a3b5c60001cdd22a',
      nome: '18',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee947ba3b5c60001cc8dae',
      nome: 'G (18 a 22 kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee9439a3b5c60001cc8d48',
      nome: 'M (14 a 18 kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dee919aa3b5c60001cc8b69',
      nome: 'G (6 a 9 meses)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfbea1dea047f0001d34c26',
      nome: '43',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d55b1b2cad75400018dc8c9',
      nome: '21',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d3887fc01adfa00017fdb67',
      nome: '4G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db886af19678900012bc80a',
      nome: '44C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db884b519678900012bc7bd',
      nome: '46 B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db0a010faa25500019da4d9',
      nome: '17',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5daf70a2454ace000154f9dd',
      nome: '7G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d88fb05ca49bf0001964719',
      nome: 'XXXXXXL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d88faf8ca49bf0001964718',
      nome: 'XXXXXL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d88faebca49bf0001964717',
      nome: 'XXXXL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db886fa19678900012bc810',
      nome: '48C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d6ea6be71f11b0001ce9643',
      nome: '510ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8871819678900012bc811',
      nome: '50C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d55b1a7cad75400018dc8c3',
      nome: '19',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d55b19bcad75400018dc8bd',
      nome: '17-18',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d55b18ecad75400018dc8b2',
      nome: '15-16',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d4445ed859dd70001136dc5',
      nome: '80ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d38885901adfa00017fdb69',
      nome: '6G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d38884f01adfa00017fdb68',
      nome: '5G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d387bd401adfa00017fd6b5',
      nome: '3G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3614ea047f0001d3b9ea',
      nome: 'GG (14 a 16 Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f64e7c3e7700014163fe',
      nome: 'Casal 220/250',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d81451cca49bf00018ed400',
      nome: '64',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8971b19678900012bd15e',
      nome: '42B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dd313bb91a33d00010ff477',
      nome: '28',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dd313b591a33d00010ff452',
      nome: '27',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dd312fc91a33d00010fefd8',
      nome: '25',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dd312d891a33d00010fef1d',
      nome: '24',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dd312c491a33d00010feea4',
      nome: '23',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dd310e191a33d00010fe478',
      nome: '26',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db897a519678900012bd164',
      nome: '31a 44',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8979919678900012bd163',
      nome: '30a 38',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db886d219678900012bc80b',
      nome: '46C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8972819678900012bd15f',
      nome: '44B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dd313c291a33d00010ff4a1',
      nome: '29',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8970b19678900012bd15d',
      nome: '40B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db896f819678900012bd15c',
      nome: '46B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db887b419678900012bc824',
      nome: '50D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8879619678900012bc81f',
      nome: '48B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8877a19678900012bc816',
      nome: '48D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8876319678900012bc815',
      nome: '46DD',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8874e19678900012bc814',
      nome: '46D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8873e19678900012bc813',
      nome: '44D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8872d19678900012bc812',
      nome: '52C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5db8977e19678900012bd160',
      nome: '56B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd3b6b0b7e0001abbd62',
      nome: '300x400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd1a6b0b7e0001abbd54',
      nome: '610x100mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd6c6b0b7e0001abbd6f',
      nome: '10x11,5mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd636b0b7e0001abbd6e',
      nome: '11x8,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd626b0b7e0001abbd6d',
      nome: '192mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd5d6b0b7e0001abbd6c',
      nome: '60x730mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd5b6b0b7e0001abbd6b',
      nome: '170mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd546b0b7e0001abbd6a',
      nome: '230x500x180mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd536b0b7e0001abbd69',
      nome: '280x60x120mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd4e6b0b7e0001abbd68',
      nome: '2,8L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd4c6b0b7e0001abbd67',
      nome: '37x15x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd4b6b0b7e0001abbd66',
      nome: '37x10x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd4a6b0b7e0001abbd65',
      nome: '30x15x7cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd706b0b7e0001abbd71',
      nome: '405x290mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd476b0b7e0001abbd63',
      nome: '30x10x7cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd716b0b7e0001abbd72',
      nome: '432x310mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd3a6b0b7e0001abbd61',
      nome: '250x300mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd396b0b7e0001abbd60',
      nome: '150x200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd376b0b7e0001abbd5f',
      nome: '290x390mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd366b0b7e0001abbd5e',
      nome: '190x290mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd356b0b7e0001abbd5d',
      nome: '170x240mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd346b0b7e0001abbd5c',
      nome: '120x180mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd326b0b7e0001abbd5b',
      nome: '200x300mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd316b0b7e0001abbd5a',
      nome: '200x250mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd306b0b7e0001abbd59',
      nome: '200x200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd2e6b0b7e0001abbd58',
      nome: '180x250mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd276b0b7e0001abbd57',
      nome: '15L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd1e6b0b7e0001abbd56',
      nome: '5/8x500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b3a4644af00016accd9',
      nome: '20 Dentes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd496b0b7e0001abbd64',
      nome: '30x15x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd886b0b7e0001abbd80',
      nome: '100x370x110mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fda76b0b7e0001abbd8e',
      nome: '27mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fda66b0b7e0001abbd8d',
      nome: 'Ponto',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fda36b0b7e0001abbd8c',
      nome: '384mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fda26b0b7e0001abbd8b',
      nome: '288mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fda16b0b7e0001abbd8a',
      nome: '32mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd9d6b0b7e0001abbd89',
      nome: '224mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd9b6b0b7e0001abbd88',
      nome: '36x31cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd986b0b7e0001abbd87',
      nome: '8x200x600mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd976b0b7e0001abbd86',
      nome: '8x150x400Mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd966b0b7e0001abbd85',
      nome: '15x250x800mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd946b0b7e0001abbd84',
      nome: '15x250x600mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd936b0b7e0001abbd83',
      nome: '15x250x400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd6e6b0b7e0001abbd70',
      nome: '8x11,5mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd916b0b7e0001abbd81',
      nome: '15x350x350mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd186b0b7e0001abbd53',
      nome: '46mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd876b0b7e0001abbd7f',
      nome: '350x70x120mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd866b0b7e0001abbd7e',
      nome: '550x70x120mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd846b0b7e0001abbd7d',
      nome: '560x70x120mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd836b0b7e0001abbd7c',
      nome: '420x70x120mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd826b0b7e0001abbd7b',
      nome: '331x422x146mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd806b0b7e0001abbd7a',
      nome: '330x422x148mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd7b6b0b7e0001abbd79',
      nome: '650x500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd796b0b7e0001abbd78',
      nome: '550x500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd776b0b7e0001abbd77',
      nome: '290x365mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd766b0b7e0001abbd76',
      nome: '90x110x190mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd756b0b7e0001abbd75',
      nome: '280x185x100mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd736b0b7e0001abbd74',
      nome: '490x420mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd726b0b7e0001abbd73',
      nome: '446x363mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd926b0b7e0001abbd82',
      nome: '15x250x1000mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc906b0b7e0001abbd26',
      nome: '263g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd1b6b0b7e0001abbd55',
      nome: '610x75mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcc66b0b7e0001abbd33',
      nome: '3x10.4mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcc56b0b7e0001abbd32',
      nome: '3x13mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcc46b0b7e0001abbd31',
      nome: '3x6.3mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcc26b0b7e0001abbd30',
      nome: 'G ( 25x25cm )',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcc16b0b7e0001abbd2f',
      nome: 'M ( 20x20cm )',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcbe6b0b7e0001abbd2e',
      nome: '3"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fca86b0b7e0001abbd2d',
      nome: '16/19mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fca76b0b7e0001abbd2c',
      nome: '254x30mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fca66b0b7e0001abbd2b',
      nome: '184x20mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fca46b0b7e0001abbd2a',
      nome: '165x20mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fca36b0b7e0001abbd29',
      nome: '255x30mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcc96b0b7e0001abbd35',
      nome: '3x8.3mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc936b0b7e0001abbd27',
      nome: '255g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fccc6b0b7e0001abbd36',
      nome: '21,6cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc8e6b0b7e0001abbd25',
      nome: '258g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc866b0b7e0001abbd24',
      nome: 'P - 25x37x24,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc856b0b7e0001abbd23',
      nome: 'G - 29,5x43,5x31cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc836b0b7e0001abbd22',
      nome: '47L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc816b0b7e0001abbd21',
      nome: '46L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc806b0b7e0001abbd20',
      nome: '28L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc7f6b0b7e0001abbd1f',
      nome: '3,3L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc686b0b7e0001abbd1e',
      nome: '12x39cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc666b0b7e0001abbd1d',
      nome: '10,5x30cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc656b0b7e0001abbd1c',
      nome: '5x20x38cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc646b0b7e0001abbd1b',
      nome: '4,5x18x19cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc626b0b7e0001abbd1a',
      nome: '7,5x65x26,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc616b0b7e0001abbd19',
      nome: '8x60mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fca26b0b7e0001abbd28',
      nome: '185x20mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcf16b0b7e0001abbd44',
      nome: '21x19mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd116b0b7e0001abbd52',
      nome: '770x190mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd106b0b7e0001abbd51',
      nome: '570x190x450mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd0e6b0b7e0001abbd50',
      nome: '470x130mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd0d6b0b7e0001abbd4f',
      nome: '52,5x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd0c6b0b7e0001abbd4e',
      nome: '41,5x18cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd066b0b7e0001abbd4d',
      nome: '5/16"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd056b0b7e0001abbd4c',
      nome: '3/8"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd036b0b7e0001abbd4b',
      nome: '3/4"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd026b0b7e0001abbd4a',
      nome: '3/16"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fd016b0b7e0001abbd49',
      nome: '11/16"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcff6b0b7e0001abbd48',
      nome: '1.1/8"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcfd6b0b7e0001abbd47',
      nome: '1.1/4"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcc76b0b7e0001abbd34',
      nome: '3x12.4mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcf26b0b7e0001abbd45',
      nome: '31x19mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdb46b0b7e0001abbd91',
      nome: '55x27mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcef6b0b7e0001abbd43',
      nome: '31x17mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcee6b0b7e0001abbd42',
      nome: '30x17mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fced6b0b7e0001abbd41',
      nome: '22x17mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fceb6b0b7e0001abbd40',
      nome: '29x17mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcea6b0b7e0001abbd3f',
      nome: '20x17mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fce96b0b7e0001abbd3e',
      nome: '6" / 3mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fce76b0b7e0001abbd3d',
      nome: '10" / 3mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fce66b0b7e0001abbd3c',
      nome: '9" / 2mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fce56b0b7e0001abbd3b',
      nome: '10" / 2mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fce46b0b7e0001abbd3a',
      nome: '8" / 3mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fce26b0b7e0001abbd39',
      nome: '10"/ 3mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fccf6b0b7e0001abbd38',
      nome: '41,7cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fccd6b0b7e0001abbd37',
      nome: '44cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fcfc6b0b7e0001abbd46',
      nome: '1 1/2" ',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814716b0b7e0001abc0f0',
      nome: '95mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdaf6b0b7e0001abbd8f',
      nome: '42mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178149f6b0b7e0001abc138',
      nome: '26x16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178149f6b0b7e0001abc137',
      nome: '20,5x16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178149e6b0b7e0001abc136',
      nome: '18,5x22cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178149d6b0b7e0001abc135',
      nome: '15x11,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178149d6b0b7e0001abc134',
      nome: '10,5x8cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178149c6b0b7e0001abc133',
      nome: '21,5x12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178149c6b0b7e0001abc132',
      nome: '13,5x23cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178149a6b0b7e0001abc130',
      nome: '17,5x20x4,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178149a6b0b7e0001abc12f',
      nome: '36x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814996b0b7e0001abc12e',
      nome: '16x18,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814826b0b7e0001abc10a',
      nome: '190mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814a16b0b7e0001abc13a',
      nome: '6,5x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814726b0b7e0001abc0f1',
      nome: '120mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814a16b0b7e0001abc13b',
      nome: '8x6,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178146e6b0b7e0001abc0eb',
      nome: '64mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178146d6b0b7e0001abc0ea',
      nome: '24mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814696b0b7e0001abc0e4',
      nome: '480mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814646b0b7e0001abc0dc',
      nome: '160mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814466b0b7e0001abc0ad',
      nome: '49mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178143b6b0b7e0001abc09c',
      nome: '180mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814396b0b7e0001abc098',
      nome: '210x918x210mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814386b0b7e0001abc097',
      nome: '210x748x210mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814376b0b7e0001abc095',
      nome: '340mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814356b0b7e0001abc092',
      nome: '75mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814346b0b7e0001abc091',
      nome: '150mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178142d6b0b7e0001abc086',
      nome: '1L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178142c6b0b7e0001abc085',
      nome: '450ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178147c6b0b7e0001abc100',
      nome: '100Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb0a0dabb0900011b84c9',
      nome: '150',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0c8094eed0001dec477',
      nome: '410x365mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b29b7ecb800010e49e9',
      nome: '17 Dentes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b204644af00016accc4',
      nome: '14 Dentes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b19a3e2a700019b1496',
      nome: '102',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b01a4679700010f457a',
      nome: '1.5Ah',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950ae5a4679700010f454b',
      nome: '1.3Ah',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618ec498a3e2a700019828ca',
      nome: '1/22"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb235a4679700010bfc7b',
      nome: '1.1/2',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb0a7dabb0900011b84d5',
      nome: '1m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb0a7dabb0900011b84d4',
      nome: '1,9m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb0a6dabb0900011b84d3',
      nome: '1,4m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb0a4dabb0900011b84cf',
      nome: '240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814a06b0b7e0001abc139',
      nome: '11x9cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb0a2dabb0900011b84cc',
      nome: '1/8"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813fb6b0b7e0001abc038',
      nome: '20cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb09edabb0900011b84c7',
      nome: '80',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb09edabb0900011b84c6',
      nome: '120',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb09ddabb0900011b84c5',
      nome: '1,5x40mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb09adabb0900011b84c3',
      nome: '4-20mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618d2e3fa3e2a70001974f8a',
      nome: 'Baixo/Nude',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618d0e4146f9bf00012dce1f',
      nome: 'Regulável',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617c675ddabb0900011b7976',
      nome: '17mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617c675ddabb0900011b7975',
      nome: '128/18mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617c1eeea3e2a70001901f6d',
      nome: 'G (34 ao 37br)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617c1ed7a3e2a70001901f6b',
      nome: 'M (30 ao 33br)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617c1ec4a3e2a70001901f68',
      nome: 'P (26 ao 29br)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617815ed5c395b000191b889',
      nome: '422X514mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617815d85c395b000191b87c',
      nome: '15x250x600Mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '618eb0a2dabb0900011b84cd',
      nome: '100',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdcd6b0b7e0001abbda1',
      nome: '14x65mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fddf6b0b7e0001abbdaf',
      nome: '500x50x50mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdde6b0b7e0001abbdae',
      nome: '300x50x50mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fddc6b0b7e0001abbdad',
      nome: '15x9mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fddb6b0b7e0001abbdac',
      nome: '15x11mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdda6b0b7e0001abbdab',
      nome: '300mm (16x250x310mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdd96b0b7e0001abbdaa',
      nome: '300mm (18x250x310mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdd76b0b7e0001abbda9',
      nome: '250mm (16x250x260mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdd66b0b7e0001abbda8',
      nome: '250mm (18x250x260mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdd56b0b7e0001abbda7',
      nome: '200mm (18x250x210mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdd36b0b7e0001abbda6',
      nome: '3/8X80mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdd26b0b7e0001abbda5',
      nome: '3/8X140mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdd16b0b7e0001abbda4',
      nome: '135x19x250mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617814086b0b7e0001abc04d',
      nome: '100mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdce6b0b7e0001abbda2',
      nome: '716x65mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fde36b0b7e0001abbdb2',
      nome: '7/8x2000mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdcc6b0b7e0001abbda0',
      nome: '13x50mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdca6b0b7e0001abbd9f',
      nome: '9.6mm 3/8"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdc96b0b7e0001abbd9e',
      nome: '8mm 5/16"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdc56b0b7e0001abbd9d',
      nome: '59mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdc36b0b7e0001abbd9c',
      nome: '21mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdbd6b0b7e0001abbd98',
      nome: '710x414mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdbc6b0b7e0001abbd97',
      nome: '838x414mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdbb6b0b7e0001abbd96',
      nome: '422x514mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdba6b0b7e0001abbd95',
      nome: '422x414mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdb86b0b7e0001abbd94',
      nome: '38mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdb76b0b7e0001abbd93',
      nome: '36mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdb66b0b7e0001abbd92',
      nome: '80x31mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc5d6b0b7e0001abbd16',
      nome: '6x30mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdd06b0b7e0001abbda3',
      nome: '135x19x200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813696b0b7e0001abbf55',
      nome: '3x61mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdb36b0b7e0001abbd90',
      nome: '33x20mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813fa6b0b7e0001abc036',
      nome: '10cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813f46b0b7e0001abc02e',
      nome: '1/4"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813eb6b0b7e0001abc020',
      nome: '48mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813e96b0b7e0001abc01d',
      nome: '28mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813d76b0b7e0001abc001',
      nome: '19x15,5x7,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813d36b0b7e0001abbffa',
      nome: '18x61x9,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813d16b0b7e0001abbff8',
      nome: '42x14,5x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813d16b0b7e0001abbff7',
      nome: '32x11,5x10,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813c66b0b7e0001abbfe6',
      nome: '15,5x10x18,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813c56b0b7e0001abbfe5',
      nome: '11,5x7,5x13,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813906b0b7e0001abbf93',
      nome: '4L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813756b0b7e0001abbf69',
      nome: '900x275mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fde06b0b7e0001abbdb0',
      nome: '1,4 Mts',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813316b0b7e0001abbefe',
      nome: '2"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813fb6b0b7e0001abc039',
      nome: '25cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fde46b0b7e0001abbdb3',
      nome: '7/8x640mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdeb6b0b7e0001abbdb4',
      nome: '16x12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdec6b0b7e0001abbdb5',
      nome: '23,5X10cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fded6b0b7e0001abbdb6',
      nome: '25X12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813756b0b7e0001abbf68',
      nome: '600x275mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdf06b0b7e0001abbdb8',
      nome: 'P (15x12cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813736b0b7e0001abbf65',
      nome: '6x160mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813366b0b7e0001abbf06',
      nome: '4,5x23,5x12,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '617813366b0b7e0001abbf07',
      nome: '4,5x26,5x19,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178133b6b0b7e0001abbf0e',
      nome: '3x29x13,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178135a6b0b7e0001abbf3f',
      nome: '5mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6178135d6b0b7e0001abbf43',
      nome: '3mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fde26b0b7e0001abbdb1',
      nome: '1,9 Mts',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fdee6b0b7e0001abbdb7',
      nome: 'M (20x15cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b131094eed0001dec4c2',
      nome: '890-1210mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b397094eed0001dec52e',
      nome: '5L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b143094eed0001dec4cf',
      nome: '970mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b142094eed0001dec4ce',
      nome: '96mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b141094eed0001dec4cd',
      nome: '90x180cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b13f094eed0001dec4cc',
      nome: '900x60x25mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b13e094eed0001dec4cb',
      nome: '900x500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b13d094eed0001dec4ca',
      nome: '900x400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b13c094eed0001dec4c9',
      nome: '900x300mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b13a094eed0001dec4c8',
      nome: '900X275mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b139094eed0001dec4c7',
      nome: '900mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b137094eed0001dec4c6',
      nome: '9,5x20,5x14cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b136094eed0001dec4c5',
      nome: '9"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b14e094eed0001dec4d1',
      nome: 'D40 2,4 - 5,5Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b134094eed0001dec4c3',
      nome: '8X17,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b14f094eed0001dec4d2',
      nome: 'F10',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b130094eed0001dec4c1',
      nome: '850-1200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b12f094eed0001dec4c0',
      nome: '835x495mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b12d094eed0001dec4bf',
      nome: '830-1200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b12b094eed0001dec4be',
      nome: '7L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b12a094eed0001dec4bd',
      nome: '770mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b129094eed0001dec4bc',
      nome: '755x495mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b127094eed0001dec4bb',
      nome: '70x240cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b125094eed0001dec4ba',
      nome: '70x220Cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b124094eed0001dec4b9',
      nome: '700mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b122094eed0001dec4b8',
      nome: '7,5x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b121094eed0001dec4b7',
      nome: '6x16x9cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b120094eed0001dec4b6',
      nome: '6mm/2 faces',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b11f094eed0001dec4b5',
      nome: '6mm/1 face',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b135094eed0001dec4c4',
      nome: '8X6,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b164094eed0001dec4e0',
      nome: 'Médio (40-80Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc606b0b7e0001abbd18',
      nome: '8x30mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b395094eed0001dec52c',
      nome: '50mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b393094eed0001dec52b',
      nome: '30mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b392094eed0001dec52a',
      nome: '20mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b391094eed0001dec529',
      nome: '4mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b390094eed0001dec528',
      nome: '10mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b38e094eed0001dec527',
      nome: '25mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b38d094eed0001dec526',
      nome: '40mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b38c094eed0001dec525',
      nome: '6mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b38b094eed0001dec524',
      nome: '18mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b16a094eed0001dec4e4',
      nome: 'Pesado (80-100Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b169094eed0001dec4e3',
      nome: 'Pesado',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b145094eed0001dec4d0',
      nome: 'D20 1,0 - 2,5Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b166094eed0001dec4e1',
      nome: 'Mini',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b11a094eed0001dec4b2',
      nome: '663x365mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b163094eed0001dec4df',
      nome: 'Médio',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b162094eed0001dec4de',
      nome: 'M - 10x10cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b15f094eed0001dec4dd',
      nome: 'Leve (15-40Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b15e094eed0001dec4dc',
      nome: 'Leve',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b15c094eed0001dec4db',
      nome: 'G - 12x12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b159094eed0001dec4da',
      nome: 'F50',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b158094eed0001dec4d9',
      nome: 'F45',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b157094eed0001dec4d8',
      nome: 'F40',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b155094eed0001dec4d7',
      nome: 'F35',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b154094eed0001dec4d6',
      nome: 'F30',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b153094eed0001dec4d5',
      nome: 'F25',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b152094eed0001dec4d4',
      nome: 'F20',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b150094eed0001dec4d3',
      nome: 'F15',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b168094eed0001dec4e2',
      nome: 'P - 8x8cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0da094eed0001dec485',
      nome: '460x360mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0ef094eed0001dec493',
      nome: '510g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0ed094eed0001dec492',
      nome: '50x50cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0ec094eed0001dec491',
      nome: '50x40cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0ea094eed0001dec490',
      nome: '500x470mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0e7094eed0001dec48f',
      nome: '500-600mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0e6094eed0001dec48e',
      nome: '5/8x750mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0e5094eed0001dec48d',
      nome: '5/8x1000mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0e4094eed0001dec48c',
      nome: '5,5mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0e1094eed0001dec48b',
      nome: '473x473mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0e0094eed0001dec48a',
      nome: '470x515mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0df094eed0001dec489',
      nome: '470-850mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0dd094eed0001dec488',
      nome: '463x475mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b11c094eed0001dec4b4',
      nome: '6L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0db094eed0001dec486',
      nome: '460x500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0f2094eed0001dec496',
      nome: '516x500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0d8094eed0001dec484',
      nome: '45x50cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0d7094eed0001dec483',
      nome: '45mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0d6094eed0001dec482',
      nome: '456x491mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0d5094eed0001dec481',
      nome: '450x470mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0d3094eed0001dec480',
      nome: '450x355mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0d2094eed0001dec47f',
      nome: '450x330mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0d0094eed0001dec47e',
      nome: '45,5x24cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0cf094eed0001dec47d',
      nome: '448mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0ce094eed0001dec47c',
      nome: '43x35cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f63a7c3e7700014163fa',
      nome: 'Solteiro 170/250',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0cb094eed0001dec47a',
      nome: '420mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd362cea047f0001d3b9ec',
      nome: '6M (7 a 9 Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0c9094eed0001dec478',
      nome: '416mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0dc094eed0001dec487',
      nome: '460x95x210mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b105094eed0001dec4a3',
      nome: '6"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b399094eed0001dec52f',
      nome: '750mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b118094eed0001dec4b1',
      nome: '660-890mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b116094eed0001dec4b0',
      nome: '640mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b115094eed0001dec4af',
      nome: '60x50cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b113094eed0001dec4ae',
      nome: '608x498mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b112094eed0001dec4ad',
      nome: '603x364mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b111094eed0001dec4ac',
      nome: '600x60x25mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b110094eed0001dec4ab',
      nome: '600x500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b10e094eed0001dec4aa',
      nome: '600x400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b10d094eed0001dec4a9',
      nome: '600x300mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b10c094eed0001dec4a8',
      nome: '600X275mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b10a094eed0001dec4a7',
      nome: '600-830mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b109094eed0001dec4a6',
      nome: '600-800mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0f0094eed0001dec494',
      nome: '516g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0fc094eed0001dec49d',
      nome: '553x492mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b11b094eed0001dec4b3',
      nome: '670x495mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0f4094eed0001dec497',
      nome: '51x50cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0f5094eed0001dec498',
      nome: '524x523mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0f6094eed0001dec499',
      nome: '525g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0f7094eed0001dec49a',
      nome: '544mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b107094eed0001dec4a5',
      nome: '6,5X13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0fa094eed0001dec49c',
      nome: '550x470mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b106094eed0001dec4a4',
      nome: '6,5L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0fd094eed0001dec49e',
      nome: '555x495mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0ff094eed0001dec49f',
      nome: '55x50cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b100094eed0001dec4a0',
      nome: '570-870x450mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b101094eed0001dec4a1',
      nome: '570-870x70x450mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b102094eed0001dec4a2',
      nome: '572x440mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0f1094eed0001dec495',
      nome: '516x450mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0f9094eed0001dec49b',
      nome: '550x450mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc196b0b7e0001abbcea',
      nome: '15x90mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b396094eed0001dec52d',
      nome: '60mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc2a6b0b7e0001abbcf7',
      nome: '3,25x65mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc286b0b7e0001abbcf6',
      nome: '2,75x61mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc276b0b7e0001abbcf5',
      nome: '2,5x57mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc266b0b7e0001abbcf4',
      nome: '8x115mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc256b0b7e0001abbcf3',
      nome: '6x95mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc236b0b7e0001abbcf2',
      nome: '5x85mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc226b0b7e0001abbcf1',
      nome: '4x75mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc216b0b7e0001abbcf0',
      nome: '3x60mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc206b0b7e0001abbcef',
      nome: '10x135mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc1e6b0b7e0001abbcee',
      nome: '35x90mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc1d6b0b7e0001abbced',
      nome: '30x90mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc2d6b0b7e0001abbcf9',
      nome: '1,5x40mm ',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc1a6b0b7e0001abbceb',
      nome: '20x90mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc2e6b0b7e0001abbcfa',
      nome: '2x49mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc186b0b7e0001abbce9',
      nome: 'N8 7/64"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc166b0b7e0001abbce8',
      nome: 'N6 3/32"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc156b0b7e0001abbce7',
      nome: 'N10 1/8"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc106b0b7e0001abbce6',
      nome: '3,5mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc0e6b0b7e0001abbce5',
      nome: '2,1mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc0d6b0b7e0001abbce4',
      nome: '10,5mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc0b6b0b7e0001abbce3',
      nome: '25x152mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc0a6b0b7e0001abbce2',
      nome: '22x152mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc086b0b7e0001abbce1',
      nome: '19x152mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc076b0b7e0001abbce0',
      nome: '16x152mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc066b0b7e0001abbcdf',
      nome: '13x152mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc046b0b7e0001abbcde',
      nome: '5/8"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc036b0b7e0001abbcdd',
      nome: '1/2"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc1c6b0b7e0001abbcec',
      nome: '25x90mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc466b0b7e0001abbd08',
      nome: 'GG - 10x25cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b404644af00016accdc',
      nome: '220',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc5c6b0b7e0001abbd15',
      nome: '10x60mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc5b6b0b7e0001abbd14',
      nome: '10x40mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc596b0b7e0001abbd13',
      nome: '10x30mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc566b0b7e0001abbd12',
      nome: '10,5L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc556b0b7e0001abbd11',
      nome: '32L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc546b0b7e0001abbd10',
      nome: '16L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc526b0b7e0001abbd0f',
      nome: '4,8L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc516b0b7e0001abbd0e',
      nome: '5,3L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc4c6b0b7e0001abbd0d',
      nome: '20,5x13x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc4b6b0b7e0001abbd0c',
      nome: '16x10x9,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc4a6b0b7e0001abbd0b',
      nome: 'M - 7x16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc2c6b0b7e0001abbcf8',
      nome: '4,75x80mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc476b0b7e0001abbd09',
      nome: 'M - 8x18cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbff6b0b7e0001abbcda',
      nome: '26x160mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc456b0b7e0001abbd07',
      nome: 'G - 11x22cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc3e6b0b7e0001abbd06',
      nome: '8x160mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc3c6b0b7e0001abbd05',
      nome: '6x110mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc3b6b0b7e0001abbd04',
      nome: '5x110mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc3a6b0b7e0001abbd03',
      nome: '12x160mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc386b0b7e0001abbd02',
      nome: '10x160mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc376b0b7e0001abbd01',
      nome: '8x120mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc366b0b7e0001abbd00',
      nome: '10x120mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc356b0b7e0001abbcff',
      nome: '8x150mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc336b0b7e0001abbcfe',
      nome: '8x110mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc326b0b7e0001abbcfd',
      nome: '6x100mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc316b0b7e0001abbcfc',
      nome: '4x70mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc2f6b0b7e0001abbcfb',
      nome: '10x150mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc496b0b7e0001abbd0a',
      nome: 'P - 7x16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3aa094eed0001dec53d',
      nome: '20Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbc06b0b7e0001abbcbb',
      nome: '195G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '616d89482894b90001a6ad59',
      nome: 'XXG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '615da5380b79c60001e220e2',
      nome: 'MANTA 125/180',
      tipo: 'TAMANHO',
    },
    {
      codigo: '615d9a3e7194d80001faca65',
      nome: '29X15X39cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '615484d6ac23500001ad6bac',
      nome: '41.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3b6094eed0001dec546',
      nome: '6mm/1 Face',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3b4094eed0001dec545',
      nome: '900',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3b3094eed0001dec544',
      nome: '800',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3b2094eed0001dec543',
      nome: '600',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3b0094eed0001dec542',
      nome: '6m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3af094eed0001dec541',
      nome: '4Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3ae094eed0001dec540',
      nome: '10Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc026b0b7e0001abbcdc',
      nome: '1"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3ab094eed0001dec53e',
      nome: '5Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbc56b0b7e0001abbcbe',
      nome: 'Pesado - 40-60Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3a9094eed0001dec53c',
      nome: '1Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3a7094eed0001dec53b',
      nome: '350ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3a6094eed0001dec53a',
      nome: '700ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3a5094eed0001dec539',
      nome: '250ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3a4094eed0001dec538',
      nome: '24X12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3a2094eed0001dec537',
      nome: '18X9,5X11cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3a1094eed0001dec536',
      nome: '13X9,5X16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3a0094eed0001dec535',
      nome: '8x17,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b39f094eed0001dec534',
      nome: '800mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b39d094eed0001dec533',
      nome: '900ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b39c094eed0001dec532',
      nome: '8mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b39b094eed0001dec531',
      nome: '9mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b39a094eed0001dec530',
      nome: '8L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b3ac094eed0001dec53f',
      nome: '65mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbea6b0b7e0001abbccb',
      nome: '85mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc5f6b0b7e0001abbd17',
      nome: '6x60mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbfe6b0b7e0001abbcd9',
      nome: '22x150mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbfd6b0b7e0001abbcd8',
      nome: '20x150mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbfb6b0b7e0001abbcd7',
      nome: '16x150mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbfa6b0b7e0001abbcd6',
      nome: '14x150mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbf96b0b7e0001abbcd5',
      nome: '12x150mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbf86b0b7e0001abbcd4',
      nome: '3,0x33x61mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbf66b0b7e0001abbcd3',
      nome: '2,5x30x57mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbf56b0b7e0001abbcd2',
      nome: '2,0x24x49mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbf46b0b7e0001abbcd1',
      nome: '1,5x18x40mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbf26b0b7e0001abbcd0',
      nome: '8,0x75x117mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbf16b0b7e0001abbccf',
      nome: '6,0x57x93mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbf06b0b7e0001abbcce',
      nome: '5,0x52x86mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbc36b0b7e0001abbcbc',
      nome: '15-30Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbcf6b0b7e0001abbcc5',
      nome: '7/8"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fc006b0b7e0001abbcdb',
      nome: '35x160mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbc66b0b7e0001abbcbf',
      nome: 'Médio - 15-40Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbc86b0b7e0001abbcc0',
      nome: 'G ( 25x9cm )',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbc96b0b7e0001abbcc1',
      nome: 'M ( 20x8cm )',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbca6b0b7e0001abbcc2',
      nome: 'P ( 16x7cm )',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbee6b0b7e0001abbccd',
      nome: '4,0x43x75mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbcd6b0b7e0001abbcc4',
      nome: 'P ( 16x6,5cm )',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbed6b0b7e0001abbccc',
      nome: '10,0x87x133mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbd16b0b7e0001abbcc6',
      nome: 'D20 1,0-2,5kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbd36b0b7e0001abbcc7',
      nome: '1500mm (100Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbd56b0b7e0001abbcc8',
      nome: '600mm (85kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbdc6b0b7e0001abbcc9',
      nome: 'G ( 6x40,5x24,5cm )',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbdd6b0b7e0001abbcca',
      nome: 'P ( 6x34x21cm )',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbc46b0b7e0001abbcbd',
      nome: '30-80Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6177fbcc6b0b7e0001abbcc3',
      nome: 'G ( 24,5x9cm )',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6266a2351f0d8700013687ae',
      nome: '2,50m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051ae8ca26700012cdf4d',
      nome: '4mx3m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '638642b3b9f2390001624db5',
      nome: 'XP',
      tipo: 'TAMANHO',
    },
    {
      codigo: '638642afde3062000159b487',
      nome: 'X6G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '638642a19ad74e000135d4f4',
      nome: 'X5G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '638642969ad74e000135d4ed',
      nome: 'X4G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6386428db9f2390001624d85',
      nome: 'X3G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6386427fb9f2390001624d77',
      nome: 'ESP',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6384e20db9f239000161eaf4',
      nome: '40,5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '626fc79aeae08b0001700a80',
      nome: '10x20cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '626af916ed00b80001d0548a',
      nome: '5M',
      tipo: 'TAMANHO',
    },
    {
      codigo: '626ae517b3cab0000104c67f',
      nome: '5M - 6000k',
      tipo: 'TAMANHO',
    },
    {
      codigo: '626ae50fb3cab0000104c66e',
      nome: '5M - 4000k',
      tipo: 'TAMANHO',
    },
    {
      codigo: '638759f3ed8f890001925d95',
      nome: '540 g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62695a57b3cab0000102b247',
      nome: '11,1 cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '639a105eab01e20001533d24',
      nome: '50x110x380mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6266a2351f0d8700013687ad',
      nome: '1,50m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6266a2351f0d8700013687ac',
      nome: '3,50m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6266a2351f0d8700013687ab',
      nome: '10m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625720df1f0d870001259807',
      nome: '2,12m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62547717cce1610001a03655',
      nome: 'EX',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051d42c3fa00001af314f',
      nome: '7,5mx6m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051cc2c3fa00001af314a',
      nome: '7mx5m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051c8cce16100019c8b14',
      nome: '6mx5m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051c3ee301b0001679563',
      nome: '6mx4m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051c02c3fa00001af3140',
      nome: '6mx3m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051ba5787620001846786',
      nome: '5mx4m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051b75787620001846780',
      nome: '5mx3m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b2fb7ecb800010e49ec',
      nome: '2.0Ah',
      tipo: 'TAMANHO',
    },
    {
      codigo: '626ae5090ca2b50001799c84',
      nome: '5M - 3000k',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63e1403d8bbe3700019699a4',
      nome: '11/12A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63fceffd477e3500015ec6b1',
      nome: '105-C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63fceff1477e3500015ec6a6',
      nome: '55-B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63fcefd2477e3500015ec69c',
      nome: '51-B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63fcefc6d15f3f00012649f6',
      nome: '50-B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63fcefbcd15f3f00012649f5',
      nome: '41-A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63fcefb3d15f3f00012649ed',
      nome: '40-A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63f65a9586463d00017162c4',
      nome: 'BE',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63f65a8d32141900017b4bf4',
      nome: 'BD',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63ebd3fe9647f3000161ad5a',
      nome: 'tamanho 65cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63ea2a5ff58f8a0001fc27ab',
      nome: '115cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63ea2a58f58f8a0001fc27a3',
      nome: '115 cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63ea2a54f58f8a0001fc27a2',
      nome: '105cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '638642b9d3a7f800010c522e',
      nome: 'XPP',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63e140674ad5d30001d92441',
      nome: '13/14A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051aaee301b0001679547',
      nome: '3mx3m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63e1401e8bbe37000196999c',
      nome: '9/10A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63e13e778bbe3700019698d8',
      nome: '7/8A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63b58d10d714ba000137e965',
      nome: 'PP/P',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63b58d0ad714ba000137e960',
      nome: 'M/GGG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63a9b373e3877800015d99a8',
      nome: '33,5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63a5a5670879a20001c5cfde',
      nome: '39/43',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63a5a4c80879a20001c5cfc6',
      nome: '44/46',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63a5a4bb0879a20001c5cfc3',
      nome: '34/38',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63a37564178495000149b7d8',
      nome: '2,5A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63a3755d178495000149b7d7',
      nome: '1,5A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '639cbd45ab01e2000153afdc',
      nome: 'CASAL 220/260',
      tipo: 'TAMANHO',
    },
    {
      codigo: '639cbd3fab01e2000153afda',
      nome: 'SOLTEIRO 170/260',
      tipo: 'TAMANHO',
    },
    {
      codigo: '639a1063ab01e20001533d2c',
      nome: '50x110x760mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63e140a18bbe3700019699df',
      nome: '15/16A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63810f8d4fd1040001b50d78',
      nome: '800 g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051b3578762000184677a',
      nome: '4mx4m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6213eea393df4500011478e4',
      nome: '500x400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6213ee9cede7eb00012de463',
      nome: '400x300mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6213ee8f93df450001147867',
      nome: '378mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e53020e192700016d81ce',
      nome: '30x200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e508910fa1a00013f6f93',
      nome: '30x150mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e507ffd93f900010e4c49',
      nome: '30x100mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e507b0e192700016d8112',
      nome: '515x440mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e5078fd93f900010e4c3f',
      nome: '415x440mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e5074fd93f900010e4c3d',
      nome: '360x440mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e5070fd93f900010e4c39',
      nome: '628x335mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6384e1a9d3a7f800010c2c23',
      nome: '10A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6213eeab93df450001147905',
      nome: '666mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6384e19d9ad74e00013574d1',
      nome: '12A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6213eeb693df450001147922',
      nome: '700x600mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63810f7aee02180001664562',
      nome: '720 g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '637d0a982b04da0001918c9b',
      nome: '75cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63769bbd5eae0a00013f15f7',
      nome: '42,5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63769bb956f2190001a94c5e',
      nome: '41,5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63769bb4beb3c4000182e0ce',
      nome: '39,5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63754c97beb3c40001825c28',
      nome: '900 g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63753d9a56f2190001a8efe5',
      nome: '30-31',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63753d9656f2190001a8efde',
      nome: '26-27',
      tipo: 'TAMANHO',
    },
    {
      codigo: '637535f0610a0c000132a68b',
      nome: '900g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6374ef285eae0a00013e9aa1',
      nome: '45-46',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e785506077d00014dd2f6',
      nome: '46-47',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24edc',
      nome: '90cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24edb',
      nome: '8cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6384e1a2de306200015977f3',
      nome: '14A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6239e9de304dff0001852e16',
      nome: 'H2 Simples',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051a6578762000184676a',
      nome: '3mx2m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '625051a05787620001846760',
      nome: '2mx2m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6245f2ac8ca2670001249495',
      nome: '270mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '624343d6aec329000136f9bf',
      nome: '0,9L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '623a236a51a6ba00018d1612',
      nome: 'RCA 5 Metros Vermelho',
      tipo: 'TAMANHO',
    },
    {
      codigo: '623a2364aec32900012d478c',
      nome: 'RCA 5 Metros Preto',
      tipo: 'TAMANHO',
    },
    {
      codigo: '623a235b304dff000185b8ad',
      nome: 'RCA 5 Metros Azul',
      tipo: 'TAMANHO',
    },
    {
      codigo: '623a235845519d00017a0d1a',
      nome: 'RCA 1 Metro Vermelho',
      tipo: 'TAMANHO',
    },
    {
      codigo: '623a235445519d00017a0d0f',
      nome: 'RCA 1 Metro Preto',
      tipo: 'TAMANHO',
    },
    {
      codigo: '623a234faec32900012d4644',
      nome: 'RCA 1 Metro Azul',
      tipo: 'TAMANHO',
    },
    {
      codigo: '623a234bab186a0001c0fd9e',
      nome: 'RCA Y Vermelho',
      tipo: 'TAMANHO',
    },
    {
      codigo: '623a234645519d00017a0cee',
      nome: 'RCA Y Preto',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6213eea793df4500011478f5',
      nome: '506mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6239e9e6304dff0001852e27',
      nome: 'H0 Ajuste',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063c6608a7cf00013f6043',
      nome: '25 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6239e9daab186a0001c0721f',
      nome: 'H2 Ajuste',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6239e9d6ab186a0001c0720d',
      nome: 'H0 Simples',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6238983faec32900012b366a',
      nome: '45x200cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6230ca4ca774c00001f75fc4',
      nome: '40x55cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6230ca45b589b900015c7a3d',
      nome: '20x35cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6230ca255a421f00013648ad',
      nome: '70x90cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6230c98f2562830001f86e6f',
      nome: '40x30cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6230c986a774c00001f75f09',
      nome: '30x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6230c8c35a421f00013647cd',
      nome: '60x40cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6230c8bd2562830001f86db6',
      nome: '45x45cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6230c8195a421f000136471a',
      nome: '35x60cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6230c80c51296b0001aec15f',
      nome: '15x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6213eebe93df450001147953',
      nome: '826mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '623a234045519d00017a0ce3',
      nome: 'RCA Y Azul',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a1505af9c300014895e5',
      nome: '25cmX34cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63fcf010477e3500015ec6c1',
      nome: '106-C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e881cefd09700011a4394',
      nome: '70cmx120cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e87d810c178000194869f',
      nome: '80cmx140cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643d5a74ae6d7800012966b7',
      nome: '43/44',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643d5a49bfadaa000112e8ba',
      nome: '37/38',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6439b5aacca9ce000151b690',
      nome: '41/42',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6439b59fbfadaa000111e4e9',
      nome: '39/40',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64355d99cca9ce00014fbcf5',
      nome: '6/7 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64355d93cca9ce00014fbcf1',
      nome: '6/7',
      tipo: 'TAMANHO',
    },
    {
      codigo: '642709a9e65a9f0001a7adfb',
      nome: '2 cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a1815af9c30001489603',
      nome: '17cmX32cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a1785af9c300014895fd',
      nome: '20cmX34cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e883910c17800019486f2',
      nome: '50cmx85cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a15af6c4030001faa033',
      nome: '38cmX38cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e884810c17800019486fb',
      nome: '40cmx60cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a144f6c4030001faa024',
      nome: '28cmX34cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a13a5af9c300014895d4',
      nome: '100cmX150cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a12df6c4030001faa00e',
      nome: '110cmX135cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a1205af9c300014895c2',
      nome: '90cmX135cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a115f6c4030001fa9ff0',
      nome: '160cmX80cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a109a31ccb000172a7ea',
      nome: '100cmX140cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a0fedd616a000184bf02',
      nome: '140cmX90cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a0f15af9c30001489567',
      nome: '80cmX120cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a0e75af9c3000148953c',
      nome: '130cmX80cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a0d15af9c30001489523',
      nome: '70cmX130cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a0c65af9c30001489518',
      nome: '60cmX130cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a0b3dd616a000184bef9',
      nome: '60cmX90cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a0aadd616a000184bef6',
      nome: '120cmX75cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a1645af9c300014895f1',
      nome: '23cmX47cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8ad5efd09700011a463a',
      nome: '140cmx110cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '647888c698022e00010f0224',
      nome: '37,5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '647737122b8d4a0001cd7324',
      nome: '14/15A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6474fde498022e00010e54e6',
      nome: '2.5Ah',
      tipo: 'TAMANHO',
    },
    {
      codigo: '644692a2dd3f160001e843b6',
      nome: '140 cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8b436ec8b70001ffc00b',
      nome: '50cmx70cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8b386ec8b70001ffbfdf',
      nome: '120cmx120cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8b2e6ec8b70001ffbfd8',
      nome: '120cmx90cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8b26efd09700011a470e',
      nome: '140cmx105cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8b1894b01e00015895fe',
      nome: '150cmx110cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8b0910c1780001948a53',
      nome: '160cmx120cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8afc10c1780001948a4a',
      nome: '90cmx130cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8af294b01e000158958b',
      nome: '110cmx160cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e882aefd09700011a43a2',
      nome: '60cmx100cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8adfefd09700011a464a',
      nome: '120cmx95cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a07df6c4030001fa9e9c',
      nome: '110cmX70cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8ac86ec8b70001ffbf69',
      nome: '160cmx130cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8abe10c1780001948a06',
      nome: '60cmx75cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8ab294b01e0001589556',
      nome: '80cmx100cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8a9c6ec8b70001ffbf45',
      nome: '100cmx125cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8a8e6ec8b70001ffbf3e',
      nome: '120cmx150cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8a856ec8b70001ffbf2f',
      nome: '80cmx110cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8a7b94b01e000158951d',
      nome: '70cmx100cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8a5befd09700011a459d',
      nome: '60cmx80cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8a4f10c178000194897a',
      nome: '50cmx80cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8a4894b01e00015894ef',
      nome: '80cmx130cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8a3f94b01e00015894eb',
      nome: '50cmx100cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8a34efd09700011a4589',
      nome: '60cmx120cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8a1794b01e00015894bb',
      nome: '80cmx160cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '643e8ae9efd09700011a466a',
      nome: '100cmx80cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d1b08a7cf00013f608b',
      nome: '42 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063e1e69d7250001a87d5a',
      nome: '20 mm X 20 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063e0f08a7cf00013f60df',
      nome: '16 mm X 1/2"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d6769d7250001a87d18',
      nome: '16 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d5f69d7250001a87d14',
      nome: '10 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d5969d7250001a87d10',
      nome: '6 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d5308a7cf00013f609a',
      nome: '4 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d4469d7250001a87d0d',
      nome: '2,5 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d3c08a7cf00013f6097',
      nome: '2 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d3769d7250001a87d0c',
      nome: '1,5 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d3269d7250001a87d0b',
      nome: '1 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d2e08a7cf00013f6095',
      nome: '114 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d2969d7250001a87d0a',
      nome: '89 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a09ddd616a000184bef3',
      nome: '65cmX120cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d1f1130da0001ee0d1c',
      nome: '54 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063e3e69d7250001a87d6a',
      nome: '3/4" X 20mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d1508a7cf00013f6089',
      nome: '35 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d1108a7cf00013f6087',
      nome: '28 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d021130da0001ee0d19',
      nome: '22 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063cfe08a7cf00013f6079',
      nome: '15 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063ce869d7250001a87cef',
      nome: '2.1/2"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063c9e69d7250001a87cde',
      nome: '110 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063c9869d7250001a87cd8',
      nome: '85 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063c9257c3eb0001ff6d5d',
      nome: '75 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063c8b08a7cf00013f605b',
      nome: '60 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063c8469d7250001a87cd2',
      nome: '50 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063c7308a7cf00013f6047',
      nome: '40 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063c6d69d7250001a87ccc',
      nome: '32 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ed8',
      nome: '49cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063d2569d7250001a87d06',
      nome: '73 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64132fae270847000131debd',
      nome: '1.1/ 4" (32mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063c5908a7cf00013f6042',
      nome: '20 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a074f6c4030001fa9e8c',
      nome: '90cmX90cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a06bf6c4030001fa9e75',
      nome: '70cmX90cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a0625af9c30001489456',
      nome: '80cmX80cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a057dd616a000184be64',
      nome: '70cmX70cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a04c5af9c3000148944e',
      nome: '80cmX40cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a02b5af9c30001489437',
      nome: '60cmX60cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a020dd616a000184be3c',
      nome: '35cmX60cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64132fae270847000131dec4',
      nome: '7/8" (22mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64132fae270847000131dec3',
      nome: '3/4" (19mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64132fae270847000131dec2',
      nome: '5/8" (16mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64132fae270847000131dec1',
      nome: '1/2" (12mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64132fae270847000131dec0',
      nome: '3/8" (10mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063e2969d7250001a87d63',
      nome: '16 mm X 16 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063f601130da0001ee0d92',
      nome: '16 mm X 20 mm X 16 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6424a087a31ccb000172a7df',
      nome: '120cmX60cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063e431130da0001ee0d3f',
      nome: '1/2" X 20mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063e4e69d7250001a87d6e',
      nome: '1/2" X 16mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063e5669d7250001a87d71',
      nome: '26 mm X 26 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063e6257c3eb0001ff6d63',
      nome: '3/4" X 26 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64132fae270847000131debf',
      nome: '1/4" (6,35mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063e6c08a7cf00013f610b',
      nome: '20 mm X 1/2"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64132fae270847000131debe',
      nome: '1.1/ 2" (38mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063faf1130da0001ee0dc8',
      nome: '26 mm X 26 mm X 26 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063fbb08a7cf00013f617f',
      nome: '20 mm X 20 mm X 20 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063fc669d7250001a87e38',
      nome: '16 mm X 16 mm X 16 mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063fca69d7250001a87e3d',
      nome: '20 mm X 3/4"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64132fad270847000131debc',
      nome: '1" (25mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063e2d69d7250001a87d66',
      nome: '26 mm X 3/4"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '64063e6669d7250001a87d7f',
      nome: '16 mm  X 1/2"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6286435ccff47700016e134e',
      nome: '1000ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2654c',
      nome: '39-401',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62879ecccff47700017065c0',
      nome: '4,50 metros',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62879ba5450b2500018231dc',
      nome: '4,00 metros',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62879b9516659f0001f9dcd9',
      nome: '3,50 metros',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62879b8ee0d51c000129a34e',
      nome: '3,00 metros',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62879b8216659f0001f9dcab',
      nome: '2,50 metros',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62879b7acff4770001706034',
      nome: '2,00 metros',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62879b70e0d51c000129a324',
      nome: '1,50 metros',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62879b64cff4770001706009',
      nome: '1,00 metro',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6286551d450b250001800750',
      nome: '1800ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62865519cff47700016e37e0',
      nome: '770ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62864368cff47700016e1361',
      nome: '2600ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62879edc9f28b10001064964',
      nome: '10,00 metros',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6286436016659f0001f796bf',
      nome: '1300ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '628b8c2ee558c20001b4caf9',
      nome: '757mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6286435816659f0001f796b4',
      nome: '580ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62864354e0d51c0001275a4f',
      nome: '480ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '627e69b090ab02000177a8dd',
      nome: 'S.King 260/230',
      tipo: 'TAMANHO',
    },
    {
      codigo: '627e66f8415f2100018ffa2a',
      nome: 'Queen 240/230',
      tipo: 'TAMANHO',
    },
    {
      codigo: '626fc7ad0ca2b500017e7915',
      nome: '20x40cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '626fc7a9b3cab0000109b273',
      nome: '15x60cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '626fc7a5ed00b80001d52518',
      nome: '10x60cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '626fc7a1b3cab0000109b26c',
      nome: '10x40cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964e074644af00016b8b98',
      nome: 'M(20x15cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964dfe46f9bf000132fbaa',
      nome: 'PP(15x20cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964df4b7ecb800010f0149',
      nome: 'M(35x32cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964de8a3e2a700019bd1cb',
      nome: '70x220cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964ddda3e2a700019bd1c7',
      nome: '25x29x10,3cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '628643649f28b1000103f266',
      nome: '2200ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2653d',
      nome: '34-35',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24eda',
      nome: '7cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2654a',
      nome: '38-43',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26549',
      nome: '38-40',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26548',
      nome: '38-39',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26547',
      nome: '38/39',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26546',
      nome: '37-39',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26545',
      nome: '37-38',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26544',
      nome: '36-37',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26543',
      nome: '36/37',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26542',
      nome: '35-37',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26541',
      nome: '3-4A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26540',
      nome: '34-39',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62879ed316659f0001f9e5aa',
      nome: '5,00 metros',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2653e',
      nome: '34-36',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964db8b7ecb800010f0138',
      nome: '550x450',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2653c',
      nome: '34/35',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2653b',
      nome: '34.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2653a',
      nome: '33-38',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26539',
      nome: '2SG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26538',
      nome: '2A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26537',
      nome: '29-32',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26536',
      nome: '26-28',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26535',
      nome: '2-3A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26534',
      nome: '1SG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '628b8c3d3d491d00013e76bd',
      nome: '558mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '628b8c3a3d491d00013e76b0',
      nome: '540mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '628b8c36dbb63a000183466b',
      nome: '447mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '628b8c32e558c20001b4cb04',
      nome: '505mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2653f',
      nome: '34-38',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619551dcb7ecb800010e7a53',
      nome: '14,5x28,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619552544644af00016afcdd',
      nome: 'P(16x7cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6195524d4644af00016afcd4',
      nome: 'M(20x8cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61955245b7ecb800010e7a93',
      nome: 'G(6x40,5x24,5cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61955241b7ecb800010e7a90',
      nome: 'G(6x15x25cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61955239b7ecb800010e7a86',
      nome: 'G(25x9cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6195523146f9bf00013274a9',
      nome: '8,5x52x8,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6195522a46f9bf00013274a4',
      nome: '55x55cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6195522346f9bf000132749e',
      nome: '50x70cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6195521d4644af00016afcb2',
      nome: '43,5x35cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619552154644af00016afcac',
      nome: '40x33cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6195520fb7ecb800010e7a6b',
      nome: '39x18x18cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61955202b7ecb800010e7a66',
      nome: '35x55cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964dcea3e2a700019bd1c4',
      nome: '36un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619551e2b7ecb800010e7a58',
      nome: '150ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c044644af00016b8ad8',
      nome: 'M(10x10cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950ba3a4679700010f4605',
      nome: '9 Dentes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b9ca4679700010f45ff',
      nome: '80 Dentes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b94a4679700010f45f7',
      nome: '8.0Ah',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b8da4679700010f45f3',
      nome: '72 Dentes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b87a4679700010f45ea',
      nome: '60 Dentes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b7ea4679700010f45e5',
      nome: '5.0Ah',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b78a3e2a700019b14e3',
      nome: '48 Dentes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b71a4679700010f45de',
      nome: '400',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b6ba3e2a700019b14dc',
      nome: '40 Dentes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b5fb7ecb800010e4a18',
      nome: '4.0Ah',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b574644af00016acceb',
      nome: '320',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b50b7ecb800010e4a0c',
      nome: '3.0Ah',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61950b474644af00016acce1',
      nome: '29 Dentes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619551ea46f9bf000132748c',
      nome: '27,5x12,5x10cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964ca1a46797000110070c',
      nome: '14,5x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2654d',
      nome: '39-43',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964dac46f9bf000132fb90',
      nome: 'P(60x23x23cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964da146f9bf000132fb8f',
      nome: 'G(72x26x26cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964d97b7ecb800010f012a',
      nome: '4,7L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964d8ab7ecb800010f0123',
      nome: '2,5L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964d81b7ecb800010f0122',
      nome: 'P(30x8cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964d79b7ecb800010f0121',
      nome: 'M(35X14CM)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964d6d4644af00016b8b75',
      nome: 'G(50x20cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964d6046f9bf000132fb8b',
      nome: '9,5x3,5x9cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964d54b7ecb800010f011d',
      nome: '11x4,5x6cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964d4a46f9bf000132fb87',
      nome: '10,5x7,5x4cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964d3f46f9bf000132fb84',
      nome: '18x9x16,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964d3446f9bf000132fb80',
      nome: '12x6x11,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6195525b4644af00016afce0',
      nome: 'P(6x15x20cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c61b7ecb800010f00b0',
      nome: '23x31,5x5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964dc4b7ecb800010f013b',
      nome: '18un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c0e4644af00016b8add',
      nome: 'P(10x10cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c1a4644af00016b8aed',
      nome: 'G(11x22cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c254644af00016b8af2',
      nome: 'GG(10x25cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c36a3e2a700019bd10f',
      nome: 'M(8M18x)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964d2a4644af00016b8b64',
      nome: '20x7,5x19cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c544644af00016b8b03',
      nome: '30X30X5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964cadb7ecb800010f00c8',
      nome: '16x5,5x16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c6b4644af00016b8b07',
      nome: '3,5L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c76a3e2a700019bd128',
      nome: '650ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c81a3e2a700019bd12b',
      nome: '15x11x11cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c8aa4679700011006fa',
      nome: '9x8,5x11cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c97a467970001100700',
      nome: '49x26x26cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619552614644af00016afce3',
      nome: 'P(6x34x21cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964c454644af00016b8afc',
      nome: 'M(7M16x)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe3881a7090001be1255',
      nome: '9G-8XL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2654b',
      nome: '39-40',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63514f0cae2b500001c9cf1e',
      nome: 'EXG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '634fed40ae2b500001c060af',
      nome: '138x135cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '634fed38ae2b500001c0608b',
      nome: 'Grande 64x45cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '634fed31ae2b500001c0607b',
      nome: 'Grande 45x65cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '634fed2bae2b500001c0606a',
      nome: 'Pequena 42x30cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '634fed24ae2b500001c0604d',
      nome: 'Média 30x45cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '634fed15ae2b500001c05fbb',
      nome: 'A5 21x14,8cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '634fed0fae2b500001c05eea',
      nome: 'A4 29,7x21cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '634fed01ae2b500001c05ec6',
      nome: 'A3 42x29,7cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '634fecf9ae2b500001c05ebb',
      nome: 'A2 59,4x42cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '634fecf2ae2b500001c05ea4',
      nome: 'A1 84,1x59,4cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '635fb94948b1f90001a7bdab',
      nome: 'PPP-XXS',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe3b81a7090001be1282',
      nome: '10G-9XL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '635fc02948b1f90001a7f338',
      nome: 'M3',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe3481a7090001be11dd',
      nome: '8G-7XL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe3081a7090001be1160',
      nome: '7G-6XL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe2ccf56ce00013e1f3f',
      nome: '6G-5XL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe2981a7090001be10e2',
      nome: '5G-4XL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe2581a7090001be10b1',
      nome: '4G-3XL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe2181a7090001be1069',
      nome: '3G-2XL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe1e81a7090001be1007',
      nome: 'GG-XL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe1681a7090001be0f4a',
      nome: 'G-L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe0f81a7090001be0e6a',
      nome: 'M-M',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6335fe0881a7090001be0cde',
      nome: 'P-S',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63359f52cf56ce000139d549',
      nome: '66cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '631b458a7b5d7200010b9a88',
      nome: 'G5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '630fb143c9e86100015b8f65',
      nome: 'GR150 10un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '633d9765684e9900011ffd0e',
      nome: '9 cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6e8a0676d70001f24eb2',
      nome: '19cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0ca094eed0001dec479',
      nome: '41x40cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ed7',
      nome: '46cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ed6',
      nome: '43cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ed5',
      nome: '39cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ed4',
      nome: '34cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ed3',
      nome: '33cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ed2',
      nome: '32cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ed1',
      nome: '31cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ed0',
      nome: '29cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ecf',
      nome: '27cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ece',
      nome: '24cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ecd',
      nome: '23cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '635fb94448b1f90001a7bd65',
      nome: 'PP-XS',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6e8e0676d70001f24eb6',
      nome: '21cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '630fb131c9e86100015b8f17',
      nome: 'GR40 1un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6e860676d70001f24eb0',
      nome: '18cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6e820676d70001f24eab',
      nome: '17cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6e7d06077d00014dd121',
      nome: '16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6e7a06077d00014dd11b',
      nome: '11cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636d134f06077d00014d6e54',
      nome: '35-36',
      tipo: 'TAMANHO',
    },
    {
      codigo: '63651263de9e8e00013dd958',
      nome: '36cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6365125cde9e8e00013dd955',
      nome: '26cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6364184e36798c000130c9f8',
      nome: '32-33',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6364184336798c000130c9f5',
      nome: '24-25',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6364183d36798c000130c9f2',
      nome: '22-23',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6364183336798c000130c9ef',
      nome: '20-21',
      tipo: 'TAMANHO',
    },
    {
      codigo: '635fc03148b1f90001a7f391',
      nome: 'M5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '635fc02d48b1f90001a7f35b',
      nome: 'M4',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ecc',
      nome: '22cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2655b',
      nome: '4-5A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b8eaa34ffd0001a761a4',
      nome: '3,5x20 - 1000un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b8e4d788f90001c67561',
      nome: '4,0x35 - 500un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b8e10e8860000175bef0',
      nome: '4,0x30 - 500un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b8dd0e8860000175beea',
      nome: '4,0x16 - 1000un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b8d8d788f90001c67547',
      nome: '4,0x45 - 500un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b8d4a34ffd0001a7616f',
      nome: '4,0x40 - 500un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b8cf0e8860000175bec6',
      nome: '4,0x25 - 1000un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b8cb94419c00013360e0',
      nome: '4,0x20 - 1000un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b8c70e8860000175beaf',
      nome: '4,0x50 - 300un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26560',
      nome: 'Única',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2655f',
      nome: 'U',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2655e',
      nome: 'M2',
      tipo: 'TAMANHO',
    },
    {
      codigo: '630fb13ec9dde60001e43bd2',
      nome: 'GR120 10un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2655c',
      nome: '5-6A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b90ac7a29500018c50ea',
      nome: '3,5x16 - 1000un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2655a',
      nome: '44-46',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26559',
      nome: '44-45',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26558',
      nome: '44/45',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26557',
      nome: '43-44',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26556',
      nome: '42-43',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26555',
      nome: '42/43',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26554',
      nome: '41-43',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26553',
      nome: '41-42',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26552',
      nome: '40-42',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26551',
      nome: '40-41',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d26550',
      nome: '40/41',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2654f',
      nome: '3SG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2654e',
      nome: '39-44',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6298fb5915217c0001d2655d',
      nome: 'EEG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62e9531afc94b5000178c570',
      nome: '130cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '636e6ee00676d70001f24ed9',
      nome: '56cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '630fb12cc9e86100015b8f08',
      nome: 'GR36 1un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '630d19e628cc9a00015102a2',
      nome: '105mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '630cbe95f443cd0001431ce4',
      nome: '4,0x45 - 300un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6307c012f027000001061a5d',
      nome: 'SC420P 9-5D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6307c00d31922d000110f8a5',
      nome: 'SC412P 10D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6307c00a31922d000110f8a2',
      nome: 'SC411P 15D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6307c006f027000001061a4c',
      nome: 'SC405P 20D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6307c00331922d000110f895',
      nome: 'SC424P 18,5D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62fcf6d589b9ab0001887d8b',
      nome: '180 Caps',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62fcf6d189b9ab0001887d86',
      nome: '50 Caps',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62fcf6cd951a5b0001673099',
      nome: '907g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62fb862d77d3cb000142cca1',
      nome: '275mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b90394419c000133616a',
      nome: '3,5x30 - 1000un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b92e94419c00013361cd',
      nome: '4,5x35 - 500un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '630fb135c9dde60001e43bce',
      nome: 'GR80 10un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b90e0e8860000175bf4b',
      nome: '3,5x25 - 1000un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b912a34ffd0001a761e4',
      nome: '3,5x14 - 1000un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b91694419c0001336198',
      nome: '4,5x30 - 500un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b91aa34ffd0001a761f5',
      nome: '4,5x60 - 300un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62fb862877d3cb000142cca0',
      nome: '225mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b921d788f90001c675e9',
      nome: '4,5x40 - 300un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62fa81f78f79300001d4dfd7',
      nome: '825g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8d11494419c00013391af',
      nome: '4,5x25 - 500un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62e7ea9e47b9430001f830d8',
      nome: 'F100 84 A 87',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62e7eaac256c1400016ae5e7',
      nome: 'F1000 84 A 92',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62e952fefc94b5000178c3d2',
      nome: '95cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62e95309cd507a0001b7d645',
      nome: '110cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b90694419c0001336172',
      nome: '3,5x40 - 500un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '62a8b91dc7a29500018c5122',
      nome: '4,5x50 - 300un',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e6da79a5ef320001e63fb7',
      nome: 'CESTO 36/34',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fdfd784610001bf6b88',
      nome: 'G60',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e7295a4fb00300014026ff',
      nome: '38,10x100mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e729564fb00300014026fe',
      nome: '339mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e729524fb00300014026fd',
      nome: '300x200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e7294ea378cc00019d4d28',
      nome: '289mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e7294b4fb00300014026f8',
      nome: '25,4x800mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e729474fb00300014026f6',
      nome: '25,4x600mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e72943a378cc00019d4d25',
      nome: '239mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e7293fa378cc00019d4d22',
      nome: '189mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e7293ca378cc00019d4d21',
      nome: '16x156mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e72938a378cc00019d4d1d',
      nome: '13,5x212mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e729354fb00300014026f4',
      nome: '13,5x147mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e72962a378cc00019d4d2d',
      nome: '38,1x150mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e7292da378cc00019d4d1a',
      nome: '12,7x146mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e72969a378cc00019d4d30',
      nome: '38,1x200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e6da1447ac7f0001b66419',
      nome: 'CESTO 36/37',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e6d943a5ef320001e63f74',
      nome: 'CESTO 34/42',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61dd95b7d11f19000181b701',
      nome: 'MANTA 125/190',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61d85284e073a60001d8ef77',
      nome: '4,5"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61d33ebd4088b70001466c4a',
      nome: 'P (40x50x15cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61d33eb98dce0f0001a80c61',
      nome: 'M (50x50x28cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61d33eb54088b70001466c47',
      nome: 'GG (70x50x30cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61d33eb14088b70001466c44',
      nome: 'G (60x50x28cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61d33ead46c8660001963449',
      nome: 'Alto',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61d33ea94088b70001466c3e',
      nome: 'Baixo',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61cb27398dce0f0001a44e9a',
      nome: '3.5mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61cb27358dce0f0001a44e99',
      nome: '2.5mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619b9c8646f9bf0001369d23',
      nome: '880mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e72930a378cc00019d4d1b',
      nome: '12,7x200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61f8538d408bed0001540e5d',
      nome: 'GR120',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb922523495e60001587650',
      nome: '6.0L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb922303495e6000158764f',
      nome: '2.29L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5b131562c31f605608bc0314',
      nome: 'M',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e506c0e192700016d810b',
      nome: '541x411mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e5067fd93f900010e4c35',
      nome: '441x401mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e5060fd93f900010e4c29',
      nome: '335x450mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e505c0e192700016d80fe',
      nome: '345x415mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e505810fa1a00013f6f79',
      nome: '300x398mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620e505410fa1a00013f6f74',
      nome: '286x346mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620d747efd93f900010e0a8f',
      nome: '0',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620d7478e2f7690001d25364',
      nome: 'C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620d7471566f6b0001755f5a',
      nome: 'B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e7295ea378cc00019d4d2b',
      nome: '38,10x25mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61f853b2408bed0001540e69',
      nome: 'GR220',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fdbff56e5000130f404',
      nome: 'G240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61f853700128920001c413e4',
      nome: 'GR150',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61f8536d408bed0001540e4a',
      nome: 'GR50',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61f8536a408bed0001540e47',
      nome: 'GR100',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61f853668189170001fb181a',
      nome: 'GR80',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61f85363408bed0001540e40',
      nome: 'GR60',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61f8535f8189170001fb1813',
      nome: 'GR320',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61f85349408bed0001540e27',
      nome: 'GR280',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61f853433a7752000147df0d',
      nome: 'GR240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61f7f5bf3a77520001478988',
      nome: 'ALMOFADA 60/60',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61eaffdc462b47000100e76a',
      nome: '3x2,5"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61eaffd107a56e0001632021',
      nome: '3,5x3"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61eaffac93e364000102eaaf',
      nome: '2m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61e7296da378cc00019d4d32',
      nome: '50,80x25mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '620d739510fa1a00013f304c',
      nome: 'A',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619fcde6c2adca0001106f11',
      nome: '8x250x250mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61cb27318dce0f0001a44e97',
      nome: '1.5mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61ba29fd6296190001195ab7',
      nome: '500x80mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61ba29fa6296190001195ab6',
      nome: '450x80mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61ba29f66296190001195ab4',
      nome: '350x80mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61ba29f26296190001195ab3',
      nome: '313x190mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61ba29ef6296190001195aae',
      nome: '210x190mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61ba29df6296190001195a6c',
      nome: 'P (200x75x300mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61ba29db6296190001195a62',
      nome: 'M (200x150x300mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61a53d041b538700012b1d99',
      nome: '34mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61a53cec1d8b100001b9a87b',
      nome: '23mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61a53cbec2adca000117c903',
      nome: '118mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619fcdf81b53870001238bfa',
      nome: '400x105mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b7778835b40001b3e7b6',
      nome: '16x69mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619fcdecc2adca0001106f19',
      nome: '8x150x400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b77a3bbf450001393786',
      nome: '17x25mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e77781d8b100001b10106',
      nome: '4"x3"x2,5mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e77701d8b100001b10102',
      nome: '3"x2,5"x2mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e29e61d8b100001b0a934',
      nome: '65x26cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e29df1b5387000121d6f4',
      nome: '60x30cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e29d81b5387000121d6e4',
      nome: '60x28cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e29cf1d8b100001b0a91e',
      nome: '60x24cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e29c61d8b100001b0a919',
      nome: '55x18cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e29bf1d8b100001b0a911',
      nome: '55x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e29b61b5387000121d6b3',
      nome: '50x20cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e29b01d8b100001b0a904',
      nome: '50x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e29a61d8b100001b0a8fd',
      nome: '45x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619e299dc2adca00010ee438',
      nome: '27x36cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88073d920d730001455957',
      nome: '2,5ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619fcdf2c2adca0001106f1d',
      nome: '250x105mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fa01556fa00011b955d',
      nome: '2,5x100mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fd7d784610001bf6b80',
      nome: 'G180',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fd4d784610001bf6b7e',
      nome: 'G120',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fd0f217f900011d4b14',
      nome: 'G100',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fccf217f900011d4b0e',
      nome: '80x41mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fc9449dd20001decf7b',
      nome: '7mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fc5f217f900011d4b09',
      nome: '5/8',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fc1f217f900011d4b07',
      nome: '36"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fbd449dd20001decf75',
      nome: '3/4',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fb8449dd20001decf70',
      nome: '3,6x300mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fb5f217f900011d4b01',
      nome: '3,6x200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fb0d784610001bf6b68',
      nome: '3,6x140mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fac449dd20001decf67',
      nome: '24"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61ba2a036296190001195ab8',
      nome: '600x80mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fa4d784610001bf6b63',
      nome: '2,5x140mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb923ee3495e60001587675',
      nome: '2.0L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32f9c1556fa00011b955a',
      nome: '100x41mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b7c13bbf4500013937f4',
      nome: '692mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b7b93bbf4500013937ef',
      nome: '56mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b7b68835b40001b3e809',
      nome: '488mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b7b28835b40001b3e806',
      nome: '488m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b7ae8835b40001b3e801',
      nome: '42x50mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b7ab8835b40001b3e7ff',
      nome: '40x47mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b7a78835b40001b3e7fc',
      nome: '392mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b7a28835b40001b3e7f9',
      nome: '37x40mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b79e8835b40001b3e7f8',
      nome: '37mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b79a8835b40001b3e7f4',
      nome: '34x36mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b7903bbf4500013937c5',
      nome: '280mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c0b7838835b40001b3e7ca',
      nome: '21x34mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61c32fa8d784610001bf6b65',
      nome: '2,5x200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8803d0920d7300014558fd',
      nome: '170g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb9236a3495e60001587672',
      nome: '1.0L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8805b0920d730001455929',
      nome: '30g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8805a8920d730001455928',
      nome: '30 tabletes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8805a0920d730001455927',
      nome: '120 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880595920d730001455926',
      nome: '240ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88058e920d730001455925',
      nome: '320ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880587920d730001455924',
      nome: '125ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880578920d730001455923',
      nome: '250ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88056e920d730001455922',
      nome: '200ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8804f4920d730001455914',
      nome: '230ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8804eb920d730001455913',
      nome: '100ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8804e1920d730001455912',
      nome: '25g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8805e6920d73000145592c',
      nome: '8g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8804c1920d730001455910',
      nome: '70g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8805ef920d73000145592d',
      nome: '28 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8803c7920d7300014558fc',
      nome: '160g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8803bf920d7300014558fb',
      nome: '12 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8803b8920d7300014558fa',
      nome: '50 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8803b0920d7300014558f9',
      nome: '4 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8803a5920d7300014558f8',
      nome: '2 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88039a920d7300014558f7',
      nome: '10 saches',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880390920d7300014558f6',
      nome: '60 tabletes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880387920d7300014558f5',
      nome: '60 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88037f920d7300014558f4',
      nome: '30 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880376920d7300014558f3',
      nome: '200mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88036d920d7300014558f2',
      nome: '100mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88035f920d7300014558f1',
      nome: '50mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880351920d7300014558f0',
      nome: '300g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8804ce920d730001455911',
      nome: '80g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806d2920d730001455948',
      nome: '14g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880736920d730001455956',
      nome: '60x90cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0c6094eed0001dec476',
      nome: '40x40cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880729920d730001455954',
      nome: '130g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0cd094eed0001dec47b',
      nome: '42X14,5X15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88071b920d730001455952',
      nome: '40g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880714920d730001455951',
      nome: '50g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88070d920d730001455950',
      nome: '120ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880706920d73000145594f',
      nome: '120g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806fe920d73000145594e',
      nome: '12g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806f7920d73000145594d',
      nome: '2g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806ef920d73000145594c',
      nome: '40ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806e9920d73000145594b',
      nome: '35g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8805c6920d73000145592b',
      nome: '15g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806da920d730001455949',
      nome: '8 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880337920d7300014558ed',
      nome: '24 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806ca920d730001455947',
      nome: '17,5ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806c0920d730001455946',
      nome: '12,5g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806b7920d730001455945',
      nome: '30ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806b0920d730001455944',
      nome: '15ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806a8920d730001455943',
      nome: '11,5g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88066d920d730001455942',
      nome: '25ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880664920d73000145593c',
      nome: '13g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88065b920d730001455933',
      nome: '3,5g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880652920d730001455932',
      nome: '60g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880634920d730001455931',
      nome: '7 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88062a920d730001455930',
      nome: '1ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8805ff920d73000145592f',
      nome: '18g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8805f6920d73000145592e',
      nome: '50ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8806e2920d73000145594a',
      nome: '90ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5be535535bf3de00013b3521',
      nome: 'GG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c081a7226fb03000103e107',
      nome: '3',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c081a6b26fb03000103e103',
      nome: '2',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c081a6426fb03000103e102',
      nome: '1',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bf051b77dd57b00018d8779',
      nome: 'PP',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bf04bf77dd57b00018d86f2',
      nome: 'XG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bf044947dd57b00018d85fb',
      nome: '16',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bf044947dd57b00018d85fa',
      nome: '14',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bf043397dd57b00018d85bc',
      nome: '12',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5beea99e3d60c200016f2113',
      nome: '8',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5beea9963d60c200016f2112',
      nome: '6',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5beea9893d60c200016f2111',
      nome: '10',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5beea9813d60c200016f2110',
      nome: '4',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880349920d7300014558ef',
      nome: '5ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5be97a44af89b6000167e0c1',
      nome: '18x25',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c0efa0a452cfa0001eb24ad',
      nome: '44',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5be5354b5bf3de00013b3520',
      nome: 'G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5be535435bf3de00013b351f',
      nome: 'P',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb9375d3495e60001587777',
      nome: '680ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb9337f3495e60001587733',
      nome: '620ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb930d73495e60001587713',
      nome: 'Único',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb9304f3495e60001587710',
      nome: '12L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb92fe23495e6000158770e',
      nome: '20L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb92a393495e600015876c4',
      nome: '13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb925fc3495e6000158768d',
      nome: '65cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb924473495e6000158767c',
      nome: '760ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb9243d3495e6000158767b',
      nome: '450ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb924183495e6000158767a',
      nome: '600ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619b9c8246f9bf0001369d18',
      nome: '810mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5be97d66af89b6000167e0d8',
      nome: '500ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88022f920d7300014558cb',
      nome: '1 comprimido',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bb923d93495e60001587674',
      nome: '3.0L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88032d920d7300014558ec',
      nome: '20 compridos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880322920d7300014558eb',
      nome: '60ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880309920d7300014558ea',
      nome: '14 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8802fe920d7300014558e9',
      nome: '20ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8802ed920d7300014558e3',
      nome: '10 compridos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8802e3920d7300014558df',
      nome: '59ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8802da920d7300014558d5',
      nome: '118ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8802d2920d7300014558d4',
      nome: '473ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8802c7920d7300014558d3',
      nome: '133ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88027a920d7300014558d1',
      nome: '85g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880270920d7300014558d0',
      nome: '65g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880264920d7300014558cf',
      nome: '10ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c0ef9e9452cfa0001eb24ab',
      nome: '40',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c0f0be6452cfa0001eb2617',
      nome: '54',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880341920d7300014558ee',
      nome: '10g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c0efa11452cfa0001eb24ae',
      nome: '46',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c0efa1c452cfa0001eb24af',
      nome: '48',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c0f041c452cfa0001eb257a',
      nome: '38',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c0f0424452cfa0001eb257b',
      nome: '36',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88024d920d7300014558cd',
      nome: '64cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c0f0bdf452cfa0001eb2616',
      nome: '52',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88023e920d7300014558cc',
      nome: '40cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88018b920d7300014558b3',
      nome: '1 pipeta',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88019d920d7300014558b4',
      nome: '3 pipetas',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8801a9920d7300014558b5',
      nome: '4 pipetas',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8801b9920d7300014558c0',
      nome: '1 tablete',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8801c7920d7300014558c6',
      nome: '3 tabletes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c0ef9f0452cfa0001eb24ac',
      nome: '42',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c0f0bd8452cfa0001eb2615',
      nome: '50',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f76a7c3e77000141642e',
      nome: 'Tam. 50/70',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f66b7c3e770001416401',
      nome: 'Queen 260/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e694dc253322a0001a074cf',
      nome: '44 DD',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e694db353322a0001a074c8',
      nome: '44 B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e67ceb053322a00019ff8fb',
      nome: 'Solteiro 170/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e67cea553322a00019ff8f5',
      nome: 'Solteiro 160/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e67ce9853322a00019ff8ef',
      nome: 'S.King 270/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e67ce7b53322a00019ff8dc',
      nome: 'Gigante 100/150',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e67ce0753322a00019ff894',
      nome: 'Gigante 90/160',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e67cdfc53322a00019ff88c',
      nome: 'Banho 77/140',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f7a27c3e770001416433',
      nome: 'Queen 250/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f7987c3e770001416432',
      nome: 'S.King 280/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f78c7c3e770001416431',
      nome: 'Queen 240/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e694dd953322a0001a074d6',
      nome: '48 C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f7747c3e77000141642f',
      nome: 'Tam. 50/90',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e694de653322a0001a074db',
      nome: '50 C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f7617c3e77000141642d',
      nome: 'Queen 260/250',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f7537c3e77000141642c',
      nome: 'Solteiro 180/280',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f7497c3e77000141642b',
      nome: 'S.King 290/250',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f7137c3e77000141641d',
      nome: 'Casal 220/280',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f7057c3e770001416417',
      nome: 'S.King 280/280',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6fc7c3e770001416414',
      nome: 'Queen 242/280',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6d77c3e770001416413',
      nome: 'Solteiro 180/250',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6cb7c3e770001416412',
      nome: 'S.King 260/270',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6c27c3e77000141640e',
      nome: 'Casal 220/230',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6ba7c3e77000141640c',
      nome: 'Solteiro 160/220',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6ae7c3e77000141640a',
      nome: 'Gigante 90/145',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6827c3e770001416403',
      nome: 'Banho 70/135',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619bfcad4644af00016f98e3',
      nome: '16.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f7827c3e770001416430',
      nome: 'Queen 240/280',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964e24a3e2a700019bd1e2',
      nome: 'M(20x15cn)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5c94644af00016bddf9',
      nome: '13x13x10cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5c14644af00016bddf6',
      nome: '13,5x13,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5b94644af00016bddef',
      nome: '12x8,5x8cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5b44644af00016bddec',
      nome: '12x19x11,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5ae4644af00016bdde4',
      nome: '12x18x8cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5a846f9bf0001335096',
      nome: '12,5x5,5x12,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5a24644af00016bddde',
      nome: '11,5x5x11cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c59c4644af00016bddd5',
      nome: '10x7x7cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5964644af00016bddd2',
      nome: '104x69x1cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c59046f9bf0001335084',
      nome: '1,5x19x10,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c58746f9bf000133507f',
      nome: '1,5x12,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964e42a3e2a700019bd1ec',
      nome: 'P(20x20cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e694dd153322a0001a074d4',
      nome: '48 B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964e2fa3e2a700019bd1e5',
      nome: 'P(15x12mm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6627c3e770001416400',
      nome: 'Casal 220/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964e1ab7ecb800010f014f',
      nome: 'P(15x12cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ebcb26bb7b1150001fbc2ab',
      nome: 'Banho 70/132',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ebcb25cb7b1150001fbc2a2',
      nome: 'Banho 68/132',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e8e95ef1b5fa80001844a28',
      nome: '80 CM',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e8e95d51b5fa80001844a1f',
      nome: '60 CM',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e8e95d41b5fa80001844a1e',
      nome: '50 CM',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e8e95bc1b5fa80001844a14',
      nome: '40 CM',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e8e95af1b5fa80001844a0f',
      nome: '30 CM',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e8e959b1b5fa80001844a06',
      nome: '70 CM',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e751f95c7889d0001ee97cd',
      nome: 'S.King 260/280',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e751f86c7889d0001ee97c8',
      nome: 'Queen 240/260',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e694df953322a0001a074e7',
      nome: '52 C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e694dee53322a0001a074e4',
      nome: '50 D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '61964e38a3e2a700019bd1ea',
      nome: 'M(14x14cm)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3896ea047f0001d3bb61',
      nome: '31',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6767c3e770001416402',
      nome: 'S.King 280/260',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e14ee043e13170001da52bc',
      nome: '33',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfe8d80ea047f0001d40110',
      nome: '6 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3f90ea047f0001d3c2a9',
      nome: '10 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3f87ea047f0001d3c294',
      nome: 'Tam 5 (22 a 26 kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3f80ea047f0001d3c284',
      nome: '12 a 18 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3f77ea047f0001d3c277',
      nome: '28/29',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3f69ea047f0001d3c259',
      nome: 'Tam 2 (10 a 14 kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd38d1ea047f0001d3bb7d',
      nome: '9 a 12 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd38c9ea047f0001d3bb79',
      nome: '6 a 9 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd38c2ea047f0001d3bb76',
      nome: '3 a 6 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd38b0ea047f0001d3bb6e',
      nome: '7 a 10 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31be1b868e720001551b08',
      nome: '38 B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd389eea047f0001d3bb66',
      nome: '2 a 3 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31be2a868e720001551b0a',
      nome: '38 C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3811ea047f0001d3bae9',
      nome: '9 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd37d2ea047f0001d3babd',
      nome: 'Tam 4 (18 a 22 kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd37b6ea047f0001d3ba9c',
      nome: 'Tam 3 (14 a 18 kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd37aeea047f0001d3ba9b',
      nome: '1 a 2 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd37a5ea047f0001d3ba9a',
      nome: '6 a 12 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3799ea047f0001d3ba99',
      nome: '0 a 6 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd378fea047f0001d3ba98',
      nome: '15',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3788ea047f0001d3ba97',
      nome: '13',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd377bea047f0001d3ba95',
      nome: '5 a 6 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3774ea047f0001d3ba94',
      nome: '4 a 5 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3758ea047f0001d3ba93',
      nome: '18M (11 a 13 Kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd374eea047f0001d3ba92',
      nome: '30/31',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd3742ea047f0001d3ba91',
      nome: '32',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5dfd38a6ea047f0001d3bb69',
      nome: '3 a 6 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31bfd1868e720001551bd1',
      nome: '42 DD',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6567c3e7700014163ff',
      nome: 'Solteiro 180/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6437c3e7700014163fb',
      nome: 'S.King 280/250',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f62f7c3e7700014163f9',
      nome: 'Queen 240/250',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f61c7c3e7700014163f8',
      nome: 'Gigante 90/150',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e63f6107c3e7700014163f6',
      nome: 'Banho 70/140',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e553ce101bc4f0001d95269',
      nome: '18 a 24 meses',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e3b357a03bc96000181372c',
      nome: 'XS (14 - 15)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e3b353f03bc9600018136e0',
      nome: 'S (16 - 17)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31c46e868e720001551d3f',
      nome: '40 B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31c038868e720001551c11',
      nome: '46 DDD',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31c020868e720001551c10',
      nome: '44 DDD',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31c015868e720001551c0e',
      nome: '42 DDD',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e25d9ce51247a000145de05',
      nome: '45',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31bff3868e720001551c00',
      nome: '44DD',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5dd46f9bf00013350c0',
      nome: '14x7x22cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31bef4868e720001551ba1',
      nome: '40 DD',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31bede868e720001551b8d',
      nome: '48 D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31bec9868e720001551b8a',
      nome: '46 DD',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31bebd868e720001551b85',
      nome: '46 D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31beb3868e720001551b81',
      nome: '44 D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31bea8868e720001551b7c',
      nome: '42 D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31be9d868e720001551b77',
      nome: '40 D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31be82868e720001551b66',
      nome: '38 D',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31be71868e720001551b4b',
      nome: '46 C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31be66868e720001551b3c',
      nome: '44 C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31be5c868e720001551b34',
      nome: '42 C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31be52868e720001551b2d',
      nome: '40 C',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31be47868e720001551b12',
      nome: '42 B',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5e31c006868e720001551c0a',
      nome: '48 DD',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7f84644af00016be008',
      nome: '8,5x8x11,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5cf4644af00016bddff',
      nome: '13x9x5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d4c9b7ecb80001104644',
      nome: '3m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d4c2a467970001113519',
      nome: '35x22,2mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d4bd4644af00016cbfcd',
      nome: '33m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d4b44644af00016cbfc6',
      nome: '31mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d4adb7ecb80001104639',
      nome: '30x22,2mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d4a74644af00016cbfbd',
      nome: '2Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d4a04644af00016cbfb7',
      nome: '25x22,2mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d49aa467970001113504',
      nome: '1,5m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197a77aa3e2a700019cd0a0',
      nome: '340g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197a76da3e2a700019cd08d',
      nome: '3,6L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197a75946f9bf000133f42c',
      nome: '1,5Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d4d8b7ecb8000110464f',
      nome: '7/8x25mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7ff4644af00016be00c',
      nome: '8x18cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d4dfb7ecb80001104654',
      nome: '7/8x50mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7f3a3e2a700019c25db',
      nome: '7x39x37cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7eda3e2a700019c25d7',
      nome: '77x55x3cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7e4a3e2a700019c25cf',
      nome: '75x75x3cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7dea3e2a700019c25cd',
      nome: '72x26x26cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7d8a3e2a700019c25c9',
      nome: '70x50x3cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7d14644af00016bdff9',
      nome: '6x7cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7cba3e2a700019c25c2',
      nome: '6x40x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7c54644af00016bdff1',
      nome: '6x38x24cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7c04644af00016bdfef',
      nome: '6x30x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7ba4644af00016bdfeb',
      nome: '6x27x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7b44644af00016bdfe8',
      nome: '6x21x2,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7ae4644af00016bdfe6',
      nome: '65x45x2cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7a64644af00016bdfe0',
      nome: '62x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c8044644af00016be00e',
      nome: '9x8x8cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197ef1d46f9bf0001343b71',
      nome: '48cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619b9c7e4644af00016f40b0',
      nome: '80N',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619b9c7a4644af00016f40af',
      nome: '680mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619b9c754644af00016f40ac',
      nome: '60N',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619b9c724644af00016f40ab',
      nome: '56,7mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619b9c6e4644af00016f40a9',
      nome: '22x18mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619b9c6546f9bf0001369d0d',
      nome: '150N',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619b9c6146f9bf0001369d0a',
      nome: '120N',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619b9c5c46f9bf0001369d08',
      nome: '10x15mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '619b9c5646f9bf0001369d07',
      nome: '100N',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197ef3d46f9bf0001343b9a',
      nome: '85cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197ef3746f9bf0001343b91',
      nome: '72,7cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197ef2d46f9bf0001343b86',
      nome: '71,3x16,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d4d0a467970001113524',
      nome: '4m',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197ef2346f9bf0001343b7c',
      nome: '48x32cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c795a3e2a700019c2593',
      nome: '60x23x23cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197ef1746f9bf0001343b64',
      nome: '45x30cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197ef0f46f9bf0001343b4f',
      nome: '41,8cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197ef0946f9bf0001343b48',
      nome: '4,5L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197ef0246f9bf0001343b44',
      nome: '37cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197eefd46f9bf0001343b3c',
      nome: '37,4x25,3cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197eef446f9bf0001343b38',
      nome: '30ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197eef046f9bf0001343b2f',
      nome: '2x15L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197eee746f9bf0001343b1c',
      nome: '25x17cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197eee046f9bf0001343b16',
      nome: '18x18cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197eedc46f9bf0001343b10',
      nome: '19x19cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197eeca46f9bf0001343afd',
      nome: '14x14cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197eec646f9bf0001343af9',
      nome: '1,6L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197d4eb4644af00016cbfec',
      nome: 'Cromo Fosco',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6197ef2746f9bf0001343b80',
      nome: '49x28cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6394644af00016bde38',
      nome: '22,5x16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6c14644af00016bde73',
      nome: '26x15x2cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6b5a467970001105e92',
      nome: '26x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6b446f9bf000133512b',
      nome: '26x14x33cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c67fa467970001105e8e',
      nome: '25x37x24,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c679a467970001105e89',
      nome: '25x12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6724644af00016bde5e',
      nome: '23,5x14,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c66e4644af00016bde5c',
      nome: '23,5x10cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6684644af00016bde58',
      nome: '22x8x20cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6624644af00016bde56',
      nome: '22x22cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6554644af00016bde4e',
      nome: '21x33x12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c64ea467970001105e70',
      nome: '21x16x2cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c647a467970001105e67',
      nome: '200ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7a14644af00016bdfdc',
      nome: '60x42x3cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c63fa467970001105e56',
      nome: '19x9x5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6dcb7ecb800010f5c91',
      nome: '28x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6384644af00016bde36',
      nome: '19x9x40cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6314644af00016bde35',
      nome: '18x9cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c62746f9bf00013350fc',
      nome: '18x18x21cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c62046f9bf00013350f5',
      nome: '18x15x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c61946f9bf00013350f1',
      nome: '18x11cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c612a467970001105e2f',
      nome: '17x3x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c60ba467970001105e2a',
      nome: '17x18cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5fd4644af00016bde17',
      nome: '15x15x17cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5f74644af00016bde16',
      nome: '15x15x16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5f046f9bf00013350d3',
      nome: '15,5x12x15,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5e946f9bf00013350cd',
      nome: '14x9,7x10,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5e446f9bf00013350c8',
      nome: '14x8x17cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880730920d730001455955',
      nome: '40x50cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c647a467970001105e65',
      nome: '26x12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7324644af00016bdf3f',
      nome: '36x19x12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c5d74644af00016bde06',
      nome: '14x14x17cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c78e4644af00016bdfbb',
      nome: '52x12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c788a3e2a700019c257f',
      nome: '5,5x21x2,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7804644af00016bdf9d',
      nome: '48x38x2,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c77b4644af00016bdf96',
      nome: '480g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7754644af00016bdf8c',
      nome: '47x22x2cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c76e4644af00016bdf77',
      nome: '46x37x19cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7674644af00016bdf65',
      nome: '45x33cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7634644af00016bdf5e',
      nome: '450g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c75c4644af00016bdf5a',
      nome: '44x10x8cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7544644af00016bdf55',
      nome: '440g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c74b4644af00016bdf50',
      nome: '4,1Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7454644af00016bdf4d',
      nome: '388g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6c64644af00016bde76',
      nome: '27,5x25x14cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c70a4644af00016bde9f',
      nome: '31x26x2cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c79a4644af00016bdfd1',
      nome: '60x40x3cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6e2b7ecb800010f5c94',
      nome: '29,5x43,5x31cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6e84644af00016bde8d',
      nome: '29x14x14cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6f04644af00016bde94',
      nome: '29x8x9cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6f54644af00016bde98',
      nome: '30x6x11cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c73f4644af00016bdf49',
      nome: '380g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c704b7ecb800010f5ca4',
      nome: '31x17x18,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7394644af00016bdf46',
      nome: '375g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7124644af00016bdea7',
      nome: '34x18x2cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7194644af00016bdeae',
      nome: '360g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c71f4644af00016bdeb0',
      nome: '36x10,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c7244644af00016bdf34',
      nome: '36x10x9cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c72cb7ecb800010f5cd9',
      nome: '36x11x11cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6d34644af00016bde81',
      nome: '27x32x12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6196c6fcb7ecb800010f5c9f',
      nome: '31x11x17cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6129236c74089000016a05d4',
      nome: '36 a 37',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60d1054820991f0001003258',
      nome: '61/62',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6144150534b54b0001843f48',
      nome: '650mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '614414fc34b54b0001843f34',
      nome: '600mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '614414f534b54b0001843f1c',
      nome: '550mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '614414ed34b54b0001843efa',
      nome: '500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '614414e234b54b0001843ed4',
      nome: '450mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '614414da34b54b0001843eb5',
      nome: '400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '614414d134b54b0001843ea9',
      nome: '350mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '614414c834b54b0001843e97',
      nome: '300mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '614414c134b54b0001843e75',
      nome: '250mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6143bb393619c00001bda5d1',
      nome: '41 a 42',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6129238c5936210001d40ab4',
      nome: '42 a 43',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6144151434b54b0001843f60',
      nome: '2.8Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '612923775936210001d40aab',
      nome: '38 a 39',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6144151d34b54b0001843f73',
      nome: '750g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6129235e5936210001d40aa1',
      nome: '34 a 35',
      tipo: 'TAMANHO',
    },
    {
      codigo: '612400057408900001663fcd',
      nome: 'S.King 193/203/7',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6123ffb77408900001663f9c',
      nome: 'Queen 160/200/7',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6123ff9a7408900001663f8e',
      nome: 'Casal 140/190/7',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6123fef67408900001663f15',
      nome: 'Solteiro 100/200/7',
      tipo: 'TAMANHO',
    },
    {
      codigo: '610ac42b699a5c00015fd651',
      nome: '20.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60e89bf35fd52900010ca546',
      nome: '140mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60d1eece20991f0001007f56',
      nome: '57mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60d1eebd20991f0001007f50',
      nome: '55mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60d1eeb020991f0001007f4c',
      nome: '54mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60d1eea520991f0001007f4a',
      nome: '53mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60d1d473c8cd8c00014e562a',
      nome: '63/64',
      tipo: 'TAMANHO',
    },
    {
      codigo: '608afa15db1c4b00016aaee3',
      nome: '34 a 36',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6129238174089000016a05e2',
      nome: '40 a 41',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b010094eed0001dec3ee',
      nome: '1000mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b023094eed0001dec3fc',
      nome: '120x190x120mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b021094eed0001dec3fb',
      nome: '1200x60x25mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b020094eed0001dec3fa',
      nome: '12"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b01f094eed0001dec3f9',
      nome: '11X9cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b01e094eed0001dec3f8',
      nome: '11x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b01c094eed0001dec3f7',
      nome: '11mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b01b094eed0001dec3f6',
      nome: '115x430mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b01a094eed0001dec3f5',
      nome: '110x482mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b019094eed0001dec3f4',
      nome: '11,5X7,5X13,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b017094eed0001dec3f3',
      nome: '11,1mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b016094eed0001dec3f2',
      nome: '10x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b014094eed0001dec3f1',
      nome: '10L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6144150c3619c00001be3072',
      nome: '14Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b011094eed0001dec3ef',
      nome: '103x500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60d1053ac8cd8c00014e0edb',
      nome: '59/60',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b00f094eed0001dec3ed',
      nome: '10,5X8cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b00d094eed0001dec3ec',
      nome: '10,5x10cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b00c094eed0001dec3eb',
      nome: '10"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b00b094eed0001dec3ea',
      nome: '1,5L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b00a094eed0001dec3e9',
      nome: '1,05Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b008094eed0001dec3e8',
      nome: '1,03Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b007094eed0001dec3e7',
      nome: '1,02Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b006094eed0001dec3e6',
      nome: '!5mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '614415453619c00001be30d3',
      nome: '500ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6144153d34b54b0001843fd6',
      nome: '300ML',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6144153634b54b0001843fbc',
      nome: '730G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6144152d18e8360001af1b1a',
      nome: '400G',
      tipo: 'TAMANHO',
    },
    {
      codigo: '614415243619c00001be3096',
      nome: '2,8Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b012094eed0001dec3f0',
      nome: '1062x495mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6094661343190000015671ec',
      nome: '33-',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60d1055920991f0001003267',
      nome: '53/54',
      tipo: 'TAMANHO',
    },
    {
      codigo: '609c635f1d885e00010e7f42',
      nome: '67mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '609c63571d885e00010e7f3d',
      nome: '62mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '609c634d1d885e00010e7f3a',
      nome: '58mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '609c63431d885e00010e7f37',
      nome: '52mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '609af0fedead0e0001441b1c',
      nome: '11',
      tipo: 'TAMANHO',
    },
    {
      codigo: '609abffd9a55e10001e85046',
      nome: '50/90',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6094666a43190000015672f1',
      nome: '46-',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6094666143190000015672e6',
      nome: '45-',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6094665243190000015672c6',
      nome: '43-',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60946648431900000156729b',
      nome: '42-',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60946640431900000156727f',
      nome: '40-',
      tipo: 'TAMANHO',
    },
    {
      codigo: '609c637a1d885e00010e7f59',
      nome: '77mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6094662e431900000156724c',
      nome: '35-',
      tipo: 'TAMANHO',
    },
    {
      codigo: '609c63841d885e00010e7f5f',
      nome: '82mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6092c20a9ca0280001525038',
      nome: 'I4',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6092c2009ca028000152502b',
      nome: 'I3',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6092c1f89ca0280001525023',
      nome: 'I2',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6092c1ee9ca028000152501d',
      nome: 'I1',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6092c1d19ca028000152500e',
      nome: '39 a 44',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6092c1669ca0280001524f94',
      nome: '34 a 39',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6092c14b9ca0280001524f73',
      nome: '29 a 32',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6092c13d9ca0280001524f61',
      nome: '25 a 28',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60905bfedb1c4b000171d6b6',
      nome: '4GG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880722920d730001455953',
      nome: '90g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60905beddb1c4b000171d6a0',
      nome: '2GG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880744920d730001455958',
      nome: '4ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '608afa6cdb1c4b00016aaf47',
      nome: '36 a 38',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60946636431900000156726d',
      nome: '39-',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a7fed6c6a2430001b22203',
      nome: '7.75"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60d1052e20991f0001003256',
      nome: '57/58',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60d1052020991f0001003253',
      nome: '55/56',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60cb49af8defb9000122a929',
      nome: 'G/GG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60cb49a48defb9000122a928',
      nome: 'P/M',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60c7a58de2a3e20001f6b026',
      nome: 'EGGG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60c7a581e2a3e20001f6b018',
      nome: 'EGG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60c7a556e2a3e20001f6afe8',
      nome: '18.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60c7a54c8defb9000120c515',
      nome: '17.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60c7a5448defb9000120c514',
      nome: '15.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60c3aafce75b0e0001a3d35f',
      nome: 'Solteiro 170/275',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a7ff36c6a2430001b222c2',
      nome: '8.5"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a7ff23c6a2430001b222a0',
      nome: '8.25"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '609c63691d885e00010e7f50',
      nome: '72mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a7fefac6a2430001b2223a',
      nome: '8"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b027094eed0001dec3ff',
      nome: '12mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a661adc6a2430001af33fc',
      nome: '70mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a52ba6c6a2430001ad2497',
      nome: '33 a 37',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a3cc3c50ecad00017985c9',
      nome: '38.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a3cc3450ecad0001798599',
      nome: '39.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a3cc1c50ecad000179852f',
      nome: '3-6',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a3cc1550ecad0001798512',
      nome: '7-12',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a3cc0950ecad00017984e8',
      nome: '125mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a3cc0350ecad00017984d1',
      nome: '110mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a3cbfa50ecad00017984a9',
      nome: '90mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a3cbf150ecad000179848e',
      nome: '84mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a3cbd250ecad0001798417',
      nome: '80mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a3cbc950ecad00017983f8',
      nome: '76mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a3cbc050ecad00017983d9',
      nome: '74mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60a7ff12c6a2430001b22271',
      nome: '8.125"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b089094eed0001dec449',
      nome: '28x9x13cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b024094eed0001dec3fd',
      nome: '120x380mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b09b094eed0001dec456',
      nome: '325x445x380mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b09a094eed0001dec455',
      nome: '325x390mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b099094eed0001dec454',
      nome: '320mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b098094eed0001dec453',
      nome: '31L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b096094eed0001dec452',
      nome: '310x360mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b095094eed0001dec451',
      nome: '30x50cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b094094eed0001dec450',
      nome: '30x40cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b092094eed0001dec44f',
      nome: '30L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b091094eed0001dec44e',
      nome: '300x300mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b08e094eed0001dec44d',
      nome: '300-400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b08d094eed0001dec44c',
      nome: '3 Mts',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b09e094eed0001dec458',
      nome: '340x90x340mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b08a094eed0001dec44a',
      nome: '290x500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b09f094eed0001dec459',
      nome: '348x422mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b088094eed0001dec448',
      nome: '27,5x8,5x24cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b087094eed0001dec447',
      nome: '27,5x23cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b086094eed0001dec446',
      nome: '26x26cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b084094eed0001dec445',
      nome: '26X16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b083094eed0001dec444',
      nome: '26x10,5x10,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b081094eed0001dec443',
      nome: '256mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b080094eed0001dec442',
      nome: '250x1460-1750x455mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b07e094eed0001dec441',
      nome: '25,5x20x4,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b07c094eed0001dec440',
      nome: '24x13x15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b07b094eed0001dec43f',
      nome: '24x12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b07a094eed0001dec43e',
      nome: '24x10cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b079094eed0001dec43d',
      nome: '23x23x23cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b077094eed0001dec43c',
      nome: '22x7x19,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b08c094eed0001dec44b',
      nome: '29x10cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0b2094eed0001dec467',
      nome: '380x220x450mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0c5094eed0001dec475',
      nome: '40x250x1500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0c3094eed0001dec474',
      nome: '40x19x36,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0c2094eed0001dec473',
      nome: '40x1,0mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0c0094eed0001dec472',
      nome: '400x470mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0bf094eed0001dec471',
      nome: '400x445x380mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0bd094eed0001dec470',
      nome: '40/1,0mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0bc094eed0001dec46f',
      nome: '4,5X26,5X19,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0bb094eed0001dec46e',
      nome: '4,5X23,5X12,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0b9094eed0001dec46d',
      nome: '4"',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0b8094eed0001dec46c',
      nome: '3X29X13,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0b7094eed0001dec46b',
      nome: '3L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0b6094eed0001dec46a',
      nome: '396x467mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b09d094eed0001dec457',
      nome: '32X11,5X10,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0b3094eed0001dec468',
      nome: '380x330mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b074094eed0001dec439',
      nome: '22/1,0mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0b1094eed0001dec466',
      nome: '376x500mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0af094eed0001dec465',
      nome: '375x472mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0ae094eed0001dec464',
      nome: '370x470x480mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0ad094eed0001dec463',
      nome: '370x467mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0ac094eed0001dec462',
      nome: '36X15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0aa094eed0001dec461',
      nome: '365x495mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0a9094eed0001dec460',
      nome: '365x481mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0a8094eed0001dec45f',
      nome: '363x462mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0a7094eed0001dec45e',
      nome: '362x460mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0a6094eed0001dec45d',
      nome: '360x497mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0a4094eed0001dec45c',
      nome: '35mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0a3094eed0001dec45b',
      nome: '352mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0a2094eed0001dec45a',
      nome: '350x1460-1750x470mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b0b4094eed0001dec469',
      nome: '38cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b038094eed0001dec40c',
      nome: '14x250x1000mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b049094eed0001dec41a',
      nome: '18L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b048094eed0001dec419',
      nome: '18,5X22cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b047094eed0001dec418',
      nome: '18,5x19,5x6,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b046094eed0001dec417',
      nome: '17,5X20X4,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b044094eed0001dec416',
      nome: '16X18,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b043094eed0001dec415',
      nome: '16x11x11cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b042094eed0001dec414',
      nome: '16mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b041094eed0001dec413',
      nome: '15x5x14,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b03f094eed0001dec412',
      nome: '15x20cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b03e094eed0001dec411',
      nome: '15X11,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b03d094eed0001dec410',
      nome: '15mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b03c094eed0001dec40f',
      nome: '150x200cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b076094eed0001dec43b',
      nome: '22x1,0mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b039094eed0001dec40d',
      nome: '15,5X10X18,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b04e094eed0001dec41d',
      nome: '18x9,5x11cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b037094eed0001dec40b',
      nome: '14x10x10,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b035094eed0001dec40a',
      nome: '14x10,5x10cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b034094eed0001dec409',
      nome: '14mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b033094eed0001dec408',
      nome: '14L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b031094eed0001dec407',
      nome: '13x9,5x9,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b030094eed0001dec406',
      nome: '13x9,5x16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b02e094eed0001dec405',
      nome: '13x13,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b02d094eed0001dec404',
      nome: '13mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b02c094eed0001dec403',
      nome: '130x150cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b02b094eed0001dec402',
      nome: '13,5x45x7cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b029094eed0001dec401',
      nome: '13,5X23cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b028094eed0001dec400',
      nome: '13,5x13,5x13,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60905be3db1c4b000171d69d',
      nome: '1GG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b03a094eed0001dec40e',
      nome: '15/18mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b061094eed0001dec42a',
      nome: '20x1010x400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b025094eed0001dec3fe',
      nome: '128mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b072094eed0001dec438',
      nome: '21x9x9cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b071094eed0001dec437',
      nome: '210X918X210mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b070094eed0001dec436',
      nome: '210X748X210mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b06f094eed0001dec435',
      nome: '210x280x205mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b06d094eed0001dec434',
      nome: '21,5X12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b06c094eed0001dec433',
      nome: '20x400x550mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b06b094eed0001dec432',
      nome: '20x400x400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b06a094eed0001dec431',
      nome: '20x25cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b069094eed0001dec430',
      nome: '20x2200x550mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b067094eed0001dec42f',
      nome: '20x2200x400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b066094eed0001dec42e',
      nome: '20x20cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b065094eed0001dec42d',
      nome: '20x1440x550mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b04b094eed0001dec41b',
      nome: '18X61X9,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b057094eed0001dec424',
      nome: '2,5x21x11cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b075094eed0001dec43a',
      nome: '22mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b04f094eed0001dec41e',
      nome: '19,5x16x6cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b050094eed0001dec41f',
      nome: '19L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b051094eed0001dec420',
      nome: '19mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b053094eed0001dec421',
      nome: '19X15,5X7,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b064094eed0001dec42c',
      nome: '20x1440x400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b056094eed0001dec423',
      nome: '2 Mts',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b062094eed0001dec42b',
      nome: '20x1010x550mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b059094eed0001dec425',
      nome: '2,8mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b05a094eed0001dec426',
      nome: '20,5X16cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b05b094eed0001dec427',
      nome: '200mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b05e094eed0001dec428',
      nome: '20x100x400mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b060094eed0001dec429',
      nome: '20x100x550mm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b04c094eed0001dec41c',
      nome: '18x6x17,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6151b054094eed0001dec422',
      nome: '19x19x19cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5caba7953e2e1c0001006c4f',
      nome: '14cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cb4f7a2f563eb0001c51ebe',
      nome: '2kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabbb4a3e2e1c00010074b2',
      nome: '11g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabb9623e2e1c000100746a',
      nome: '45g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabb7ef3e2e1c0001007442',
      nome: '1,5kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabb7da3e2e1c0001007441',
      nome: '550g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabb6e13e2e1c000100741b',
      nome: '20g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabb6233e2e1c00010073bd',
      nome: '55g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabaffb3e2e1c00010072f1',
      nome: '150g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabae873e2e1c000100727b',
      nome: '600g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5caba9513e2e1c0001006dca',
      nome: 'XXL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5caba9463e2e1c0001006dc7',
      nome: 'XL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5caba93c3e2e1c0001006dc6',
      nome: 'L',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabbb7d3e2e1c00010074b4',
      nome: '115g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5caba79d3e2e1c0001006c50',
      nome: '15cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabbb843e2e1c00010074b5',
      nome: '110g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5caba7593e2e1c0001006c4e',
      nome: '12cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5caba6cd3e2e1c0001006c23',
      nome: '9,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5caba649754924000146b5df',
      nome: '8,5cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cab9ecc754924000146b496',
      nome: '9',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cab9e69754924000146b494',
      nome: '7',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cab9e63754924000146b493',
      nome: '5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cab9b90754924000146b437',
      nome: '60cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cab9af8754924000146b416',
      nome: '45cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cab9ac5754924000146b415',
      nome: '120cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cab9601754924000146b30f',
      nome: '3Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cab943c754924000146b2ae',
      nome: '12Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cab9434754924000146b2ad',
      nome: '2,5Kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cab93a2754924000146b2ac',
      nome: '15kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5caba9313e2e1c0001006dc5',
      nome: 'S',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae5bfac973ac00019a5efe',
      nome: '400g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cb4f6fdf563eb0001c51eba',
      nome: '20kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '608044a4151b1800018322e1',
      nome: '160/320',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cb4cc91f563eb0001c5111d',
      nome: '7,5kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60905bf5db1c4b000171d6a5',
      nome: '3GG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cb08b5cff321600010b3287',
      nome: 'XS',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae6a19c973ac00019a6159',
      nome: '14 unidades',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae6a0bc973ac00019a6157',
      nome: '50 unidades',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae68cdc973ac00019a6132',
      nome: '38 unidades',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae68bec973ac00019a6130',
      nome: '44 unidades',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae68b1c973ac00019a612f',
      nome: '37 unidades',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae68a4c973ac00019a612e',
      nome: '30 unidades',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae6893c973ac00019a611d',
      nome: '7 unidades',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabbb603e2e1c00010074b3',
      nome: '28g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae5c19c973ac00019a5eff',
      nome: '10,1kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ca647da1d519900013041a9',
      nome: '50cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae4bc93ff07d0001c6c99b',
      nome: 'XGG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae49783ff07d0001c6c8f2',
      nome: '10kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae44362082490001a29943',
      nome: '1,700ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae435e2082490001a29937',
      nome: '900ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae43542082490001a29935',
      nome: '400ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae3f142082490001a29867',
      nome: '72cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae3ee92082490001a29866',
      nome: '55cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae3ead2082490001a29865',
      nome: '35cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae3e992082490001a29864',
      nome: '28cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae3dc22082490001a2983a',
      nome: '90 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabbe2b3e2e1c0001007535',
      nome: '800g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabbd463e2e1c00010074da',
      nome: '270g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cabbd2b3e2e1c00010074d9',
      nome: '1,1kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cae5e91c973ac00019a5f49',
      nome: '5kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8807b5920d730001455971',
      nome: '1 seringa',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c940835949cc700010da365',
      nome: '30mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9406f3949cc700010da34a',
      nome: '1600mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c940685949cc700010da349',
      nome: '400mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9403c4949cc700010da30b',
      nome: '250mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c94009d949cc700010da281',
      nome: '0,5mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c93f4e1949cc700010da1a4',
      nome: '80mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c93eaa1949cc700010da14a',
      nome: '600mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c93ea32949cc700010da147',
      nome: '300mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c93e734949cc700010da130',
      nome: '10mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c93acc3f3ae300001dc8692',
      nome: '75mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c93acb9f3ae300001dc8691',
      nome: '25mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c90f2a9d57cb30001fabb86',
      nome: '20mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cab9398754924000146b2ab',
      nome: '1kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8807bb920d730001455972',
      nome: '1 bisnaga',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c940d0e949cc700010da416',
      nome: '150mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8807ad920d730001455970',
      nome: '125g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c8807a5920d73000145596f',
      nome: '75g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88079d920d73000145596e',
      nome: '250g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880793920d730001455969',
      nome: '100g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880788920d730001455961',
      nome: '500g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880781920d730001455960',
      nome: '350ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88077a920d73000145595f',
      nome: '24g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880772920d73000145595e',
      nome: '20 tabletes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88076b920d73000145595d',
      nome: '16 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880762920d73000145595c',
      nome: '3 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88075c920d73000145595b',
      nome: '6 comprimidos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c880754920d73000145595a',
      nome: '0,8ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c88074d920d730001455959',
      nome: '0,4ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c90f29cd57cb30001fabb85',
      nome: '5mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9d0bf6142acc0001444500',
      nome: '500mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cb4f5eaf563eb0001c51e8c',
      nome: '25kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ca3cb85892a490001b0bf97',
      nome: '100  unidades',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ca3be962dc39500018a8e5f',
      nome: '20 unidades',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ca3bda92dc39500018a8e25',
      nome: 'Casal',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ca3bda12dc39500018a8e23',
      nome: 'Solteiro',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ca3a5542dc39500018a8827',
      nome: 'EG',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ca28211142acc000145262e',
      nome: 'EP',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9e83f9142acc0001448b5b',
      nome: '40mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9e813d142acc0001448aee',
      nome: '1g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9e7f15142acc0001448a69',
      nome: '1mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9e7dcc142acc0001448a1b',
      nome: '2mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9e7884142acc00014488bb',
      nome: '82,5mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9e7877142acc00014488ba',
      nome: '27,5mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9408d8949cc700010da380',
      nome: '6mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9a8a09c6c5b400015b060c',
      nome: '315g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ca647e41d519900013041aa',
      nome: '70cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9843245de163000151f5a3',
      nome: '30cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c98cdf25de1630001520be5',
      nome: '16mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c98cdfa5de1630001520be6',
      nome: '24mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c98ce055de1630001520be7',
      nome: '60mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9d1637142acc0001444870',
      nome: '1,4mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9a6fa3c6c5b400015b01b7',
      nome: '30 Capsulas',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9d0d88142acc000144453f',
      nome: '0,7mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9a8f3dc6c5b400015b06c5',
      nome: '50 tabletes',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9bd5d5142acc0001441097',
      nome: '200g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9bdd83142acc0001441217',
      nome: '60 capsulas',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9bebf7142acc00014413eb',
      nome: '3,6g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c9d0b5e142acc00014444a9',
      nome: '1000mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c940af4949cc700010da3e3',
      nome: '1,25mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5c98ce0f5de1630001520be8',
      nome: '160mg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f73d415badf1400016cda05',
      nome: '40.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb40ee10594540001bbe356',
      nome: '160/220 RETANGULAR',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb40e170594540001bbe313',
      nome: '180/180 REDONDA',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb40d2e0594540001bbe2b5',
      nome: '220/220 QUADRADA',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb40c740594540001bbe26e',
      nome: '180/180 QUADRADA',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb40bad0594540001bbe1cf',
      nome: '45/45',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb407890594540001bbdeb7',
      nome: '35/50',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fae9bf70594540001b7c0c1',
      nome: '50/70',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f7b6b816edc840001fa151c',
      nome: '43-45',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f7b62816edc840001fa030a',
      nome: '39-42',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f7b61f76edc840001fa028f',
      nome: '35-38',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f76276b6edc840001f79fe3',
      nome: '3 a 4 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f7503fa6edc840001f72323',
      nome: 'Queen 48/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f5d5643f6153c0001d6bd3d',
      nome: 'Casal 140/190/30',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f7503c46edc840001f722f7',
      nome: 'S.King 48/280',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb6df280594540001be5497',
      nome: 'SOLTEIRO 160/230',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f73d2d8badf1400016cd9e5',
      nome: '43.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f73d2c5badf1400016cd9df',
      nome: '42.5',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f7357ddbadf1400016cada8',
      nome: 'G (1 a 3 anos)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f7357c6badf1400016cad9b',
      nome: 'P (1 a 12 meses)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f73562fbadf1400016cacf4',
      nome: '6 a 9 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f7355b5badf1400016cacc9',
      nome: '3 a 5 anos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f71fd87badf1400016c08f3',
      nome: 'Praia 100/180',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f61596bf58d8a00019e43e3',
      nome: '48/80',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f61595df58d8a00019e43da',
      nome: '53/110',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cb4cad1f563eb0001c510c4',
      nome: '4kg',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f61594ef58d8a00019e43d9',
      nome: '60/100',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cc72b74789b2a000134b6f0',
      nome: '76ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f5d5652f6153c0001d6bd58',
      nome: 'Solteiro 100/200/30',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f7503dd6edc840001f7230c',
      nome: 'Solteiro 48/160',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6053a9710e7efe0001a740d0',
      nome: 'S.King 290/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6080449b151b1800018322d7',
      nome: '160/270',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60804491151b1800018322d2',
      nome: '160/220',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60804488151b1800018322c5',
      nome: '220/220',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6080447a151b1800018322c4',
      nome: '180/180',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60803c8f151b18000183195a',
      nome: '160/320 retangular 10 lugares',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60803c7f151b18000183194e',
      nome: '160/270 retangular 8 lugares',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60803c6f151b18000183194d',
      nome: '160/220 retangular 6 lugares',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60803c45151b180001831940',
      nome: '220/220 quadrada 8 lugares',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60803c0e151b18000183192f',
      nome: '180/180 quadrada 6 lugares',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60803beb151b18000183192d',
      nome: '180/180 redonda 6 lugares',
      tipo: 'TAMANHO',
    },
    {
      codigo: '60803bd0151b180001831920',
      nome: '60/90',
      tipo: 'TAMANHO',
    },
    {
      codigo: '605a7cd093f2c400017b8602',
      nome: 'G4',
      tipo: 'TAMANHO',
    },
    {
      codigo: '605a7cc893f2c400017b85fd',
      nome: 'G3',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb40fbf0594540001bbe3cb',
      nome: '160/270 RETANGULAR',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6009cfca3877c400012e40a0',
      nome: 'S.KING 193/203/35',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f5d5668f6153c0001d6bd76',
      nome: 'S.King 193/203/40',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb7b79b7b81940001ad2cc6',
      nome: 'CASAL 230/250',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb7b96f7b81940001ad30a1',
      nome: 'KING 230/280',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb81a417b81940001ad7a93',
      nome: 'GG (22 a 26 kg)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fe1f628b112f60001524a7b',
      nome: 'PANO DE COPA 48/71',
      tipo: 'TAMANHO',
    },
    {
      codigo: '605a7cc193f2c400017b85f9',
      nome: 'G2',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6009ceb83877c400012e4048',
      nome: 'QUEEN 160/200/35',
      tipo: 'TAMANHO',
    },
    {
      codigo: '605a7cb593f2c400017b85f1',
      nome: 'G1',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6009d0a93877c400012e4246',
      nome: 'SOLTEIRO 100/200/35',
      tipo: 'TAMANHO',
    },
    {
      codigo: '600ed4fe64fb650001aefc26',
      nome: 'CASAL 220/275',
      tipo: 'TAMANHO',
    },
    {
      codigo: '600ed68364fb650001af00ff',
      nome: 'QUEEN 240/275',
      tipo: 'TAMANHO',
    },
    {
      codigo: '600ed80f64fb650001af037d',
      nome: 'S.KING 280/275',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6042448288d1670001f600b2',
      nome: 'Fronha 50/90',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5fb410600594540001bbe3eb',
      nome: '160/320 RETANGULAR',
      tipo: 'TAMANHO',
    },
    {
      codigo: '6009cc103877c400012e3f8a',
      nome: 'Casal 140/190/35',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cd5cca306aac300015a8a18',
      nome: '80x150cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ed01550663e8f00017d2a5c',
      nome: 'Casal 240/220',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f5d5635f6153c0001d6bd34',
      nome: 'Queen 160/200/40',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d36118d61a7d000013e4245',
      nome: 'XL (21)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d36114f61a7d000013e422e',
      nome: 'M (17)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d36113961a7d000013e421b',
      nome: 'S (15,5)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d24daca9b571a00018bf8d9',
      nome: '62',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d13b1f0e4c9ab00011edefd',
      nome: '80cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d0a65327cd4f30001979734',
      nome: '330ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ce81a3817f8100001ea3b74',
      nome: '61',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ce81a3117f8100001ea3b73',
      nome: '60',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ce81a1a17f8100001ea3b72',
      nome: '58',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cd5dc2306aac300015a8c4b',
      nome: '13,5 cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ed0155e663e8f00017d2a6f',
      nome: 'S.King 290/260',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cd5dad706aac300015a8c17',
      nome: '100 cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ec5398d663e8f000177bea3',
      nome: 'XXXL',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cd31d6fc6302b0001f34a8c',
      nome: '3 Rolos',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cd2ebd1c6302b0001f33692',
      nome: '9 polegadas',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cd2e9d7c6302b0001f335ae',
      nome: '12 polegadas',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cd2e066c6302b0001f332bb',
      nome: '4,5 polegadas',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cd2ddaac6302b0001f331f3',
      nome: '8 polegadas',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ccc7d4caa8f8e0001ab56f3',
      nome: '320g',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ccc7603aa8f8e0001ab5500',
      nome: '57',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ccc75e9aa8f8e0001ab54c7',
      nome: '47',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ccc7263aa8f8e0001ab53ac',
      nome: '55',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ccc7124aa8f8e0001ab537a',
      nome: '53',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ccc7101aa8f8e0001ab5379',
      nome: '51',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5ccc7007aa8f8e0001ab5349',
      nome: '1 Flaconete',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cc72d40789b2a000134b726',
      nome: '7ml',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5cd5db4c06aac300015a8c3a',
      nome: '38 cm',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d6a189ea2f00016ef074',
      nome: 'Almofada 50/50',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f369bbb1352ce00013db6af',
      nome: '39 a 40',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f369ba31352ce00013db6ad',
      nome: '35 a 36',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f369b981352ce00013db6ac',
      nome: '33 a 34',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f3586121352ce00013d5b50',
      nome: '39 a 41',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f3586081352ce00013d5b4f',
      nome: '37 a 38',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f3585fa1352ce00013d5b4d',
      nome: '33 a 36',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d7cc89ea2f00016ef266',
      nome: 'Manta 125/150',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d6cc89ea2f00016ef0a3',
      nome: 'Gigante 100/180',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d6c489ea2f00016ef09a',
      nome: 'Rosto 48/90',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d6bc89ea2f00016ef094',
      nome: 'Lavabo 30/50',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5d36116961a7d000013e423b',
      nome: 'L (19)',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d6a989ea2f00016ef07d',
      nome: 'Cesto 10/25',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5eeb5859bbf60000016bcfc1',
      nome: '49',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d69789ea2f00016ef06c',
      nome: 'Almofada 30/70',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d5f389ea2f00016eefd2',
      nome: 'Rosto 50/100',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d5d489ea2f00016eefb2',
      nome: 'P/Pes 48/85',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d5e089ea2f00016eefb8',
      nome: '50/80',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d6b389ea2f00016ef088',
      nome: 'Manta 150/200',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d5ea89ea2f00016eefc2',
      nome: 'Fronha 50/70',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d68d89ea2f00016ef067',
      nome: 'Almofada 45/45',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d5fb89ea2f00016eefe0',
      nome: 'Banho 77/160',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d60489ea2f00016eeff0',
      nome: 'Rosto 48/100',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d61589ea2f00016ef00c',
      nome: 'Queen 240/60',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d64389ea2f00016ef03b',
      nome: 'S.King 280/60',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d65089ea2f00016ef041',
      nome: 'Almofada 30/50',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d66889ea2f00016ef054',
      nome: 'Queen 220/240',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d67089ea2f00016ef059',
      nome: 'S.King 230/260',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d67989ea2f00016ef05d',
      nome: 'Almofada 40/40',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5f10d68289ea2f00016ef062',
      nome: 'Almofada 40/90',
      tipo: 'TAMANHO',
    },
    {
      codigo: '5bd2090018158a00017de232',
      nome: '110V',
      tipo: 'VOLTAGEM',
    },
    {
      codigo: '5bd2090818158a00017de233',
      nome: '220V',
      tipo: 'VOLTAGEM',
    },
    {
      codigo: '5bd20d6018158a00017de585',
      nome: '127V',
      tipo: 'VOLTAGEM',
    },
    {
      codigo: '5bd50d4e18158a00017dfcea',
      nome: '110V e 220V',
      tipo: 'VOLTAGEM',
    },
    {
      codigo: '5da9c2ce81472b000193f2b6',
      nome: '380V',
      tipo: 'VOLTAGEM',
    },
    {
      codigo: '618545fea08a2f00015eea0e',
      nome: '10220V',
      tipo: 'VOLTAGEM',
    },
    {
      codigo: '61855b40a08a2f00015eea12',
      nome: '1020V',
      tipo: 'VOLTAGEM',
    },
  ] as const as AtributoInsert[];

  await knex(ETableNames.p4m_atributos)
    .insert(atributos)
    .then(() => {
      console.log(`# Inserido dados na tabela ${ETableNames.p4m_atributos}`);
    });
};
