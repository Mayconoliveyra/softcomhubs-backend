import { AxiosError } from 'axios';
import fs from 'fs';
import path from 'path';
import winston from 'winston';

import { DataHora } from './dataHora';

// Diretório de logs
const logDir = path.join('log');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Variável para armazenar a data atual
let currentDate = DataHora.obterDataAtual('DD-MM-YYYY');

// Função para obter o transporte de arquivo atualizado
const getLogFileTransport = () => {
  const logFile = path.join(logDir, `log-${currentDate}.log`);
  return new winston.transports.File({ filename: logFile, level: 'info' });
};

// Criação do transporte inicial
let fileTransport = getLogFileTransport();

const formatAxiosError = (error: AxiosError) => {
  let parsedRequestBody;
  let responseData;

  try {
    parsedRequestBody = error.config?.data ? JSON.parse(error.config.data) : {};
  } catch (parseError) {
    parsedRequestBody = { error: 'Erro ao converter requestBody para JSON' };
  }

  try {
    responseData = error.response?.data ? JSON.stringify(error.response.data, null, 2) : 'Nenhum dado retornado';
  } catch (parseError) {
    responseData = 'Erro ao processar dados da resposta';
  }

  return {
    status: error?.response?.status || 'Indefinido',
    message: error?.message || 'Erro desconhecido',
    method: error?.config?.method?.toUpperCase() || 'Método desconhecido',
    url: error?.config?.url || 'URL desconhecida',
    queryParams: error?.config?.params || 'Sem parâmetros',
    requestBody: parsedRequestBody,
    responseData,
    headers: error?.response?.headers || 'Sem headers',
    userAgent: error?.config?.headers?.['User-Agent'] || 'Indefinido',
    requestTime: error?.config?.timeout ? `${error?.config?.timeout}ms` : 'Indefinido',
    errorCode: error?.code || 'Sem código de erro',
  };
};

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.printf(({ timestamp, level, message }) => {
    const time = DataHora.formatarDataHora(String(timestamp), 'DD/MM/YYYY HH:mm:ss');
    return `${time} [${level.toUpperCase()}]: ${message}`;
  }),
);

const logger = winston.createLogger({
  level: 'info',
  format: logFormat,
  transports: [new winston.transports.Console(), fileTransport],
});

// Função para verificar se a data mudou e atualizar o arquivo de log
const checkAndRotateLogFile = () => {
  const newDate = DataHora.obterDataAtual('DD-MM-YYYY');
  if (newDate !== currentDate) {
    currentDate = newDate;
    fileTransport = getLogFileTransport();
    logger.clear(); // Remove transporte antigo
    logger.add(fileTransport); // Adiciona novo transporte
  }
};

const customLogger = (level: string, message: string, additional?: any) => {
  checkAndRotateLogFile(); // Checa se precisa trocar o arquivo de log

  let formattedMessage = message;
  if (additional !== undefined) {
    let additionalFormatted;
    if (additional.isAxiosError) {
      additionalFormatted = JSON.stringify(formatAxiosError(additional), null, 2);
    } else {
      additionalFormatted = typeof additional === 'object' ? JSON.stringify(additional, null, 2) : String(additional);
    }
    formattedMessage += `\n${additionalFormatted}`;
  }

  logger.log({ level, message: formattedMessage });
};

export const Log = {
  info: (message: string, additional?: any) => customLogger('info', message, additional),
  error: (message: string, additional?: any) => customLogger('error', message, additional),
  warn: (message: string, additional?: any) => customLogger('warn', message, additional),
  debug: (message: string, additional?: any) => customLogger('debug', message, additional),
};
