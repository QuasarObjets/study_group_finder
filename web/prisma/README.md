# Prisma

Este directorio contiene el archivo `schema.prisma` que define el esquema de la base de datos utilizando Prisma. 

## Configuración

Antes de utilizar Prisma, asegúrate de tener instalado PostgreSQL en tu sistema. Puedes descargarlo desde [aquí](https://www.postgresql.org/download/).

## Instalación

1. Ejecuta el siguiente comando para instalar las dependencias de Prisma:

   ```
   npm install prisma --save-dev
   ```

2. Configura la conexión a la base de datos en el archivo `schema.prisma`. Puedes modificar los parámetros de conexión según tus necesidades.

## Generación de modelos

Una vez que hayas configurado el archivo `schema.prisma`, puedes generar los modelos de la base de datos utilizando el siguiente comando:

```
npx prisma generate
```

Esto generará los modelos de Prisma en la carpeta `node_modules/@prisma/client`.

## Uso de Prisma

Puedes utilizar los modelos generados por Prisma para interactuar con la base de datos en tu aplicación. A continuación se muestra un ejemplo de cómo utilizar Prisma para realizar consultas:

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

// Ejemplo de uso
getUsers().then((users) => {
  console.log(users);
});
```

Para obtener más información sobre cómo utilizar Prisma, consulta la documentación oficial en [https://www.prisma.io/docs/](https://www.prisma.io/docs/).

Recuerda que puedes encontrar más información sobre el proyecto en el archivo README.md en la raíz del proyecto.