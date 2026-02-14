# Chat en Tiempo Real con Node.js y Socket.io

Este proyecto es una aplicación de **chat en tiempo real** desarrollada con **Node.js, Express y Socket.io**, con funcionalidades como:

- Registro de usuario por nombre
- Identificación de usuario en cada mensaje
- Colores distintos por usuario
- Historial persistente aunque se cambie de página
- Posibilidad de borrar todo el chat

---

## Descripción del proyecto

Esta aplicación permite que múltiples usuarios se conecten a un servidor de chat en tiempo real y envíen mensajes que se ven por todos los participantes. Cada usuario debe ingresar su nombre al entrar, y cada mensaje enviado muestra:

- Nombre del usuario
- Color distinto asignado automáticamente
- Mensajes previos al usuario que acaba de entrar

El historial de mensajes se guarda en un archivo JSON, por lo que persiste incluso después de refrescar la página.

---

## Tecnologías utilizadas

- **Node.js** – Entorno de ejecución para JavaScript  
- **Express** – Framework de servidor HTTP  
- **Socket.io** – Comunicación en tiempo real cliente–servidor  
- **HTML / CSS / JavaScript** – Interfaz del chat  
- **File System (fs)** – Persistencia simple de mensajes  

---

## Estructura del proyecto

│
├── client/
│ └── index.html
├── messages.json
├── index.js
├── package.json
└── README.md

---

## Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio  
2. Abrir una terminal dentro de la carpeta raíz  
3. Instalar dependencias

---

## Referencia
Este proyecto está inspirado y basado en el siguiente video:
**“[Chat en TIEMPO REAL con Node.js, Socket.io, SQL, HTML y CSS](https://youtu.be/WpbBhTx5R9Q?si=DWsLOsoqv6dJKqez)”**

---

## Autor
**Donovan Yanci Díaz González**  
Estudiante de programación