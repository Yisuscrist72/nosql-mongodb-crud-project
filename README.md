# Gestión de Contactos e Historias con MongoDB (NoSQL) 🚀

Este proyecto ha sido desarrollado como parte de la **Actividad 04**, con el objetivo de implementar un sistema de gestión de datos utilizando tecnologías NoSQL. La aplicación permite gestionar formularios de contacto e historias de usuario mediante una API REST robusta y tipada.

## 🛠️ Tecnologías y Herramientas

* **Entorno de Ejecución:** Node.js (v18+)
* **Lenguaje:** TypeScript
* **Framework Web:** Express
* **Base de Datos:** MongoDB (NoSQL)
* **ODM:** Mongoose
* **Validación de Datos:** Zod
* **Infraestructura:** Docker & Docker Compose
* **Pruebas de API:** REST Client / Postman

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
1.  [Docker Desktop](https://www.docker.com/products/docker-desktop/) (para la base de datos).
2.  [Node.js](https://nodejs.org/) (para ejecutar el servidor).
3.  [MongoDB Compass](https://www.mongodb.com/products/compass) (opcional, para visualizar los datos).

## 🚀 Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

### 1. Clonar y preparar el entorno
```bash
# Entrar en la carpeta del proyecto
cd proyecto-nosql-actividad4

# Instalar las dependencias de Node.js
npm install

### 2\. Configurar las Variables de Entorno

Crea un archivo llamado `.env` en la raíz del proyecto y añade la siguiente configuración:

Fragmento de código

```
PORT=3000
MONGO_URI=mongodb://admin:password123@localhost:27017/mi_empresa_nosql?authSource=admin

```

### 3\. Levantar la Base de Datos (Docker)

Este proyecto utiliza Docker para garantizar que la base de datos esté lista sin instalaciones locales complejas:

Bash

```
docker-compose up -d

```

*Este comando descargará la imagen de MongoDB y la ejecutará en el puerto 27017.*

### 4\. Iniciar el Servidor

Ejecuta el siguiente comando para arrancar la aplicación en modo desarrollo:

Bash

```
npm run dev

```

Si todo es correcto, verás el mensaje: `✅ MongoDB Conectado: localhost`.

🔌 Uso de la API (Endpoints)
----------------------------

Puedes probar las operaciones **CRUD** utilizando los siguientes endpoints:

| **Método** | **Endpoint** | **Descripción** |
| --- | --- | --- |
| **POST** | `/api/contacts` | Crea un nuevo mensaje de contacto. |
| **GET** | `/api/contacts` | Lista todos los contactos recibidos. |
| **POST** | `/api/stories` | Publica una nueva historia. |
| **GET** | `/api/stories` | Obtiene todas las historias guardadas. |
| **PUT** | `/api/stories/:id` | Actualiza una historia existente por su ID. |
| **DELETE** | `/api/stories/:id` | Elimina una historia de la base de datos. |

📂 Estructura del Código Fuente
-------------------------------

El proyecto sigue una estructura limpia y modular:

-   `src/config/`: Configuración de la conexión a MongoDB.

-   `src/models/`: Definición de los esquemas de Mongoose (NoSQL).

-   `src/routes/`: Lógica de las rutas de la API.

-   `src/schemas/`: Validaciones de Zod para asegurar la integridad de los datos.

-   `src/app.ts`: Punto de entrada principal del servidor.
