# Mi Proyecto de E-commerce en Next.js

Este es un proyecto de una aplicación de e-commerce desarrollado con [Next.js](https://nextjs.org/). El objetivo del proyecto es ofrecer una experiencia de compra en línea, con funcionalidades como carrito de compras, filtrado de productos, ordenamiento, integración con Firebase y más.

## Funcionalidades Principales

- **Listados de Productos**: Visualización de productos obtenidos de una API alojada en Firebase.
- **Filtrado y Ordenamiento**: Filtra los productos por categoría, marca y más, y ordénalos por precio.
- **Carrito de Compras**: Los usuarios pueden agregar productos al carrito, ajustar cantidades y proceder con la compra.
- **Gestión de Carrito en Firebase**: El carrito de compras se guarda en una colección de Firebase Database.
- **Paginación**: Implementación de paginación desde el lado del servidor para los productos.
- **Modo Oscuro**: Soporte para modo oscuro utilizando `useDarkMode`.
- **Autenticación**: Autenticación de usuarios utilizando Firebase Auth.
- **Notificaciones**: Manejo de alertas y notificaciones con SweetAlert2.
- **SEO Dinámico**: Utilización de `DynamicTitle` para generar títulos dinámicos en las páginas.
- **Optimización de Imágenes**: Integración con el componente `next/image` para cargar imágenes optimizadas desde Firebase Storage.
- **Manejo de Errores**: Página personalizada para manejar errores de la aplicación (`error.js`).

## Tecnologías Utilizadas

- **Next.js 14**: Framework de React con renderizado del lado del servidor (SSR).
- **React**: Biblioteca para la creación de interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para diseño responsivo y componentes.
- **Firebase**: Utilizado para la autenticación, almacenamiento y base de datos.
  - **Firebase Firestore**: Base de datos para almacenamiento de productos y carritos.
  - **Firebase Storage**: Almacenamiento de imágenes.
  - **Firebase Auth**: Manejo de la autenticación de usuarios.
- **SweetAlert2**: Para notificaciones de éxito y advertencias.
- **GitHub**: Control de versiones y manejo de código.

## Links

https://entrega-final-next-js.vercel.app/
