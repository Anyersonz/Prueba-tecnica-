# Proyecto Backend y Frontend para Gestión de Usuarios

Este proyecto incluye un backend desarrollado en Node.js y un frontend en Angular para gestionar usuarios. A continuación, se detalla la instalación, configuración y uso de ambos componentes.

## Backend (Node.js)

### Requisitos

- Node.js (v16 o superior)
- PostgreSQL (v12 o superior)

### Instalación

1. Clona el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd backend

2. instala las dependencias
   ```bash
   npm install

3. Crea un archivo .env en la raíz del proyecto y añade las variables de entorno:

    ```env
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=nombre_de_la_bd 

### Creación de la Base de Datos y Tabla
Ejecuta el siguiente script SQL para crear la base de datos y la tabla de usuarios:

    ```sql
    CREATE DATABASE ler_prevencion;

    ler_prevencion;

    CREATE TABLE usuarios (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        correo VARCHAR(100) UNIQUE NOT NULL,
        edad INT NOT NULL
    );

### Endpoints
    - GET /api/data: Obtiene todos los usuarios.
    Ejemplo de JSON para la petición:
    [
        {
            "id": 1,
            "nombre": "Juan Pérez",
            "correo": "juan@example.com",
            "edad": 30
        }
    ]

    - POST /api/data: Crea un nuevo usuario.

    Ejemplo de JSON para la petición:
    {
        "nombre": "Ana Gómez",
        "correo": "ana@example.com",
        "edad": 25
    }

    - PUT /api/data/:id  Actualiza un usuario existente.

    Ejemplo de JSON para la petición:

    {
        "nombre": "Ana Gómez Actualizada",
        "correo": "ana_actualizada@example.com",
        "edad": 26
    }

    - DELETE /api/data/:id Elimina un usuario por ID.

### Levantar el Servidor


    ```bash 
        npm start



# Frontend (Angular)
Requisitos
Node.js (v16 o superior)
Angular CLI (v14 o superior)
Instalación
Clona el repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd frontend

### Instala las dependencias:

    ```bash
    npm install
Asegúrate de que el archivo tailwind.config.js esté configurado correctamente y que tengas Tailwind CSS instalado. Para ello, añade las siguientes líneas en el archivo:

    ```javascript
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: [
            "./src/**/*.{html,ts}",
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        }
    
Agrega las directivas de Tailwind en tu archivo CSS principal (por ejemplo, styles.css):

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

### Levantar el Proyecto
Para iniciar el servidor de desarrollo, ejecuta:

    ```bash
    ng serve
    
Accede a la aplicación en tu navegador a través de http://localhost:4200.

# Uso
Una vez que ambos servidores estén corriendo, podrás gestionar usuarios desde el frontend. Utiliza el formulario para crear, actualizar o eliminar usuarios, y visualiza la lista de usuarios en la tabla correspondiente.

# Notas
Asegúrate de que la base de datos esté en funcionamiento y que el backend esté correctamente conectado a PostgreSQL.
Si encuentras algún problema, revisa los registros del servidor para obtener más información sobre posibles errores.
