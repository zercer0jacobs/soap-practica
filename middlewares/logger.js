module.exports = (req, res, next) => {
  const inicio = Date.now();
  
  // Se ejecuta cuando la respuesta ha terminado de enviarse
  res.on('finish', () => {
    const ms = Date.now() - inicio;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} - ${ms}ms`);
  });
  
  next(); // Pasa al siguiente middleware o ruta sin modificar el XML
};