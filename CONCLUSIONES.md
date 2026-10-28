# Conclusiones

**¿Para qué sirve SOAP y qué aporta el uso de un sobre XML para intercambiar información?**
SOAP (Simple Object Access Protocol) sirve para estructurar el intercambio de mensajes entre aplicaciones a través de una red, permitiendo la comunicación entre sistemas heterogéneos. El uso del "sobre" (Envelope) XML aporta un marco estandarizado y estricto que define el encabezado y el cuerpo del mensaje. Esto garantiza que tanto el emisor como el receptor entiendan exactamente la estructura de los datos, proporcionando una alta interoperabilidad, extensibilidad y soporte nativo para protocolos de seguridad y transacciones complejas, algo vital en entornos empresariales.

**¿Para qué sirve WSDL y cómo ayuda a que otra persona o aplicación consuma un servicio?**
WSDL (Web Services Description Language) es un documento XML que actúa como un contrato técnico. Describe de manera precisa las operaciones que ofrece el servicio, los parámetros de entrada y salida, los tipos de datos utilizados y la dirección HTTP (endpoint) donde reside. Ayuda a que otra aplicación consuma el servicio de forma automática (por ejemplo, generando clientes en herramientas como SoapUI o Postman) sin necesidad de adivinar la estructura, reduciendo errores de integración y facilitando el descubrimiento del servicio.

**¿Qué diferencia existe entre consultar un contrato WSDL e invocar una operación SOAP?**
Consultar el WSDL es una acción de lectura mediante una petición HTTP GET (añadiendo `?wsdl` a la URL), que devuelve el "manual de instrucciones" del servicio. Invocar una operación SOAP es una acción de ejecución mediante una petición HTTP POST, enviando un mensaje XML (con el sobre SOAP) que contiene los datos específicos; el servidor procesa la lógica y devuelve otro XML con el resultado. En resumen, uno describe qué se puede hacer y el otro lo ejecuta.

**¿Por qué conviene separar las rutas en un Router cuando una aplicación crece?**
Separar las rutas en un Router mejora la mantenibilidad y escalabilidad del código. Al dividir las responsabilidades, el archivo principal (`app.js`) se mantiene limpio y enfocado en la configuración global. Esto permite que múltiples desarrolladores trabajen en diferentes módulos (como los servicios SOAP) sin generar conflictos, y facilita la depuración al tener la lógica de enrutamiento aislada y organizada por dominio.

**¿Qué justifica el uso de un middleware para registrar peticiones en esta práctica?**
El middleware justifica su uso porque permite aplicar lógica transversal (como el registro o logging) de forma centralizada antes de que las peticiones lleguen a las rutas SOAP. Al implementarlo como middleware, evitamos repetir el código de registro dentro de cada operación del servicio. Además, al situarlo antes de la lógica de `node-soap`, podemos monitorear todas las peticiones HTTP (tanto consultas WSDL como invocaciones XML) sin alterar el flujo ni el contenido del XML original.

**Menciona una situación donde SOAP con WSDL resulte conveniente y otra donde una API REST con JSON sea más sencilla. Justifica ambas.**
SOAP con WSDL es conveniente en entornos financieros o bancarios, donde se requiere un contrato estricto, alta seguridad (WS-Security) y transacciones complejas garantizadas. REST con JSON es más sencillo para aplicaciones móviles o APIs públicas de redes sociales (como Twitter o una tienda en línea), donde el rendimiento, el bajo consumo de ancho de banda y la facilidad de consumo por JavaScript (sin necesidad de parsear XML) son prioridad.