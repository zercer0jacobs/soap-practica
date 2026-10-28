const express = require('express');
const logger = require('./middlewares/logger');
const soapRoutes = require('./routes/soapRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de registro
app.use(logger);

// Montar las rutas SOAP
soapRoutes(app);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor SOAP escuchando en http://localhost:${PORT}`);
  console.log(`WSDL Conversiones: http://localhost:${PORT}/soap/conversiones?wsdl`);
  console.log(`WSDL Geometría: http://localhost:${PORT}/soap/geometria?wsdl`);
});