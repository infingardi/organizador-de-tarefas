const Importer = require('mysql-import');
require('dotenv').config();

const restoreDb = async () => {
  const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST } = process.env;

  // Faz a conexão com o banco de dados
  const importer = new Importer({
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    host: MYSQL_HOST,
  });
  // Executa as Queries do arquivo selecionado
  await importer.import('./src/database/OrganizadorDeTarefas.sql');
  // Desconecta do banco de dados
  await importer.disconnect();
};

module.exports = restoreDb;
// Roda a função somente se chamar o arquivo inteiro (ex: node createDatabase)
if (!module.parent) {
  restoreDb();
}
