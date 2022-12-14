# **SISTEMA EDUCATIVO**

Sistema de Educación Secundaria con módulos de Matemáticas, Inglés e Informática.

## **Instalar entorno de desarrollo Docker**

Para este paso necesita instalar Docker Desktop con lo cual viene integrado Docker compose, Docker CLI y Docker. 

### **Instalación en Windows**

Esta página contiene información sobre los requisitos del sistema de Docker Desktop para Windows, URL de descarga e instrucciones para instalar y actualizar Docker Desktop para Windows.

[Docker Desktop para Windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)

### **Instalación en Linux**

Esta página contiene información sobre los requisitos del sistema, URL de descarga e instrucciones sobre cómo instalar y actualizar Docker Desktop para Linux.



* [Ubuntu](https://desktop.docker.com/linux/main/amd64/docker-desktop-4.11.1-x86_64.rpm?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-linux-amd64)
* [Debian](https://desktop.docker.com/linux/main/amd64/docker-desktop-4.11.1-amd64.deb?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-linux-amd64)
* [Fedora](https://desktop.docker.com/linux/main/amd64/docker-desktop-4.11.1-x86_64.pkg.tar.zst?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-linux-amd64)

## **Entorno de Desarrollo**

Para este primer paso se necesita tener clonado el repositorio de GitHub [Sistema Educativo](https://github.com/Nicromano/SistemaEducativo), para ello ejecute el siguiente comando:

~~~
git clone https://github.com/Nicromano/SistemaEducativo.git
~~~

Una vez clonado el repositorio estará listo para levantar los contenedores con Docker, para ello se utiliza el siguiente comando en la raiz del proyecto: 

~~~
docker compose -f docker-compose.yml up 
~~~