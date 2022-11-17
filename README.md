# Burger Queen

## ÍNDICE
* [1. BurgerQueen](#1-BurgerQueen)
  - [1.1 Descripción del Proyecto](##1.1-Descripción-del-Proyecto)
  - [1.2 Descripción de Roles](##1.2-Descripción-de-Roles)
  - [1.3 Contenido según la vista y el rol](##1.3-Contenido-según-la-vista-y-el-rol)
  - [1.4 Interacción con la página](##1.4-Interacción-con-la-página)
* [2. Sobre el Usuario](#2-Sobre-el-Usuario)
  - [2.1 Descripción general](##2.1-Descripción-general)
  - [2.2 Flujograma de los estados para el Pedido](##2.2-Flujograma-de-los-estados-para-el-Pedido)
* [3. Realización del Diseño](#3-Realizacion-del-Diseño)
  - [3.1 Diseño ](##3.1-Diseño)
* [4. Tecnologías empleadas](#4-Tecnologias-Empleadas)
* [5. Fuentes](#5-Fuentes)
* [6. Autores](#6-Autores)

***

# 1. BurgerQueen
## 1.1  Descripción del Proyecto
🍔 🍟 **BurgerQueen**  es una plataforma de gestión de pedidos, enfocada a los empleados de esa hamburguesería con los siguientes roles: Administrador, 🤵 Mesero y 👩‍🍳Jefe de Cocina; con la finalidad de brindarles una herramienta que facilite sus actividades. Está conformada por un vista principal para iniciar sesión, a partir de la cual el usuario, según su cargo, podrá acceder a diferentes vistas
 
## 1.2 Descripción de Roles
> | Roles     | Descripción                       |
> |-----------|-----------------------------------|
> | Admin     | Gestiona la creación de cuentas.  |
> | Chef 👩‍🍳   | Realiza la preparación del pedido.|
> | Mesero 🤵 | Toma la orden del cliente.        |
 
## 1.3 Contenido según la vista y el rol
> | Vista del Chef  👩‍🍳      | Descripción                                                               |
> |-------------------------|---------------------------------------------------------------------------|
> | Pedidos nuevos (PN)     | Se listan los pedidos nuevos enviados por el mesero.                      |
> | Pedidos preparados (PP) | Se listan los pedidos ya preparados y listos para ser enviados al mesero. |
 
> | Vista Mesero 🤵  	      | Descripción                            |       
> |-------------------------|----------------------------------------|
> | Realizar Pedido(PR)     | Tomar la orden del usuario             |
> | Pedidos por Entregar(PE)| Órdenes listas para entregar al cliente|
 
> | Vista Admin 🤵  	       | Descripción                                                                |       
> |--------------------------|----------------------------------------------------------------------------|
> | Registro del personal(RP)| Muestra un formulario donde puede registrar a nuevos miembros del personal.|
> | Historial de pedidos(HP) | Muestra todas las órdenes que se han tomado.                               |
## 1.4 Interacción con la página
> | Rol      | Correo            | Contraseña |
> |----------|-------------------|------------|
> | Admin 🤵 | admin@gmail.com   | 123456     |
> | mesero 🤵| mesero@gmail.com  | 123456     |
> | Chef  👩‍🍳 | chef@gmail.com    | 123456     |
# 2. Sobre el Usuario
## 2.1 Descripción general
¿Quiénes son los principales usuarios?
Los usuarios principales son el chef, el mesero y el administrador de la hamburguesería ‘Burguer Queen’
¿Cuáles son los objetivos de los usuarios respecto al producto?
**Admin**: Visualizar el histórico de pedidos tomados y realizar el registro de personal
**Mesero**: Poder tomar pedidos, enviar el pedido al jefe de cocina y visualizar los pedidos listos para entregar.
**Jefe de Cocina**: Visualizar los nuevos pedidos para preparar, poder cambiar el estado del pedido de ‘preparando’ a ‘preparado’.
 
## 2.2 Flujograma de los estados para el Pedido
<div align = “center”>
  <img src="https://github.com/camotito0/LIM018-burger-queen/blob/develop/burgerqueen/src/assets/images/burgerqueen-flowchart.jpg"/>
</div>

# 3. Realización del Diseño
## 3.1 Diseño
# 4. Tecnologías empleadas
[Netlify:](http://netlify.com)
[Firebase:](https://firebase.google.com)
[Eslint:](https://jestjs.io/docs)
[Angular:](https://angular.io/)
[Jasmine:](https://jasmine.github.io/)
# 5. Autores
[Daniela Fuentes] (https://github.com/fifete)
[Diana Llerena] (https://github.com/camotito0)

