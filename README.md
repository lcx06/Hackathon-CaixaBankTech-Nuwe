# Hackathon - CaixaBank Tech x Nuwe

Un modelo de aplicación basado en React Native que sirve tanto para web como para iOS y Android.

## Descripción del proyecto

Este modelo permite demostrar la portabilidad de un proyecto tanto para web como
para dispositivos moviles empleado React Native. Dentro de este proyecto se muestra
una aplicación simple con varios gráficos y ambientado para un sector financiero.

## Uso

- [Descargando la última versión aquí](https://github.com/lcx06/Hackathon-CaixaBankTech-Nuwe/releases/tag/1.0.0)
- Clonando este repositorio: ``git clone https://github.com/lcx06/Hackathon-CaixaBankTech-Nuwe.git``
- Creando una fork de este repositorio.

## Estructura

```
.
 ├── public                    # Archivos públicos
 ├── resources                 # Archivos para los dispositivos móviles (iOS, Android) y su icono
 ├── src                       # La carpeta principal del proyecto y que contiene el código
 ├── .gitignore                # Archivos ignorados por Git
 ├── capacitor.config.ts       # Contiene los ajustes básicos del Capacitor
 ├── ionic.config.json         # Contiene los ajustes básicos de Ionic
 ├── LICENSE                   # La licencia del proyecto
 ├── package.json              # Dependencias y scripts del proyecto (NPM)
 ├── README.md                 # Descripción del proyecto
 ├── tsconfig.json             # Configuración de TypeScript
```

### Directorio src

```
.
   ├── ...
   ├── src                       
   │   ├── api                                 # Contiene un modelo de API que podrá ser ampliado para usarse con solicitudes HTTP
   │   ├── components                          # Contiene los componentes necesarios para las páginas junto a sus estilos
   │   ├── layout                              # Contiene las diferentes plantillas para la estructura de cada página
   |   ├── pages                               # Contiene las páginas del proyecto
   |   ├── router                              # Contiene el gestor de las rutas de la página
   |   ├── theme                               # Las variables CSS del proyecto
   |   ├── App.tsx                             # El archivo principal de la aplicación
   |   ├── index.tsx                           # El inicio de la aplicación que gestiona el arranque de la misma
   |   ├── react-app-env.d.ts                  # Contiene referencias a distintos scripts
   |   ├── reportWebVitals.ts                  # Gestiona las vitales de la página durante el desarrollo
   │   └── service-worker.ts                   # Gestiona el cache del navegador
   │   └── serviceWorkerRegistration.ts        # Registra el service worker
   │   └── setupTests.ts                       # Añade nuevos matchers para Jest
   └── ...
```

## Iniciando el proyecto

Requisitos:

- Node & NPM
- Ionic: ``npm i -g @ionic/cli``

Requisitos (Android):

- Android Studio
- Android SDK (API 21+)
- ADB

Requisitos (iOS):

- XCode
- MacOS

---

Pasos para iniciar un servidor de desarrollo:

- Ejecutar ``npm install`` para instalar todas las dependencias.
- Ejecutar ``npm run start`` para iniciar un servidor de desarrollo.
- Para construir el proyecto usar ``npm run build``.

Si se quiere ejecutar para un dispositivo móvil usar ``ionic cap open <android/ios>``
y se abrirá una IDE para ejecutar/construir la app.

En caso de querer encender un servidor de desarrollo tanto para web como para 
Android/iOS se puede emplear ``ionic cap run android -l --host=<IP_INTERNA>``

## Stack

- Ionic - Empleado principalmente para la construcción del proyecto permitiendo 
tener una aplicación web y móvil desde el mismo código y que además cuenta con 
una gran cantidad de librerías y soporte para libererías de ReactJS.
- FontAwesome - Para los iconos de la página.
- ApexCharts - Para la generación de gráficos a partir de una serie de datos.

## Licencia

Copyright 2022 lcx06. Code released under the [MIT](https://github.com/lcx06/Hackathon-CaixaBankTech-Nuwe/blob/main/LICENSE) license.