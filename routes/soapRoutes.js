const fs = require('fs');
const path = require('path');
const soap = require('soap');
const conversionesService = require('..servicesconversionesService');
const geometriaService = require('..servicesgeometriaService');

 Función auxiliar para leer los WSDL
const leerWsdl = (nombre) =
  fs.readFileSync(path.join(__dirname, '..', 'wsdl', nombre), 'utf8');

module.exports = (app) = {
   Servicio 1 Conversiones en soapconversiones
  soap.listen(app, 'soapconversiones', {
    ConversionesService {
      ConversionesPort conversionesService
    }
  }, leerWsdl('conversiones.wsdl'));

   Servicio 2 Geometría en soapgeometria
  soap.listen(app, 'soapgeometria', {
    GeometriaService {
      GeometriaPort geometriaService
    }
  }, leerWsdl('geometria.wsdl'));
};