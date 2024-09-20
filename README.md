🛒 # React-Meli

## Prueba Técnica Mercado Libre

Este proyecto es parte de una prueba técnica para Mercado Libre, diseñada para crear una aplicación web que permita a los usuarios buscar productos y visualizar los detalles de los mismos. El stack tecnológico utilizado incluye React en el frontend, Node.js con Express para el backend, y un conjunto de herramientas modernas como Vite para el desarrollo y la construcción rápida.

🚀 ### Tecnologías Utilizadas

Este proyecto emplea las siguientes tecnologías y herramientas:

	•	Frontend: React v18.3.1, React Router v6.26.2
	•	Backend: Node.js con Express v4.21.0
	•	Internacionalización: i18next y react-i18next
	•	Construcción: Vite v5.4.1 ⚡️
	•	Estilos: SCSS utilizando arquitectura modular
	•	Solicitudes HTTP: Axios
	•	Linting: ESLint para un código limpio y consistente
	•	Íconos: React Icons

🗂 Estructura del Proyecto

```bash
react-meli/
├── node_modules/            # Dependencias del proyecto
├── public/
│   ├── favicon.png          # Favicon de la aplicación
│   └── fonts/               # Fuentes personalizadas
├── services/
│   └── server.js            # Servidor Express
├── src/
│   ├── components/          # Componentes de React
│   ├── context/             # Manejo de estado global
│   ├── hooks/               # Hooks personalizados
│   ├── pages/               # Páginas (App, Detalles, Resultados)
│   ├── scss/                # Estilos modulares en SCSS
│   │   ├── abstracts/       # Variables, mixins
│   │   └── base/            # Estilos base
│   └── wrapper/Layout/      # Layout global
├── i18n/                    # Configuración de internacionalización
├── .gitignore               # Archivos ignorados por Git
├── index.html               # HTML principal
├── package.json             # Scripts y dependencias
└── README.md                # Documentación del proyecto
```

💻 ## Instalación y Uso

Para iniciar el proyecto en tu entorno local, sigue estos pasos:

	1.	Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/react-meli.git
cd react-meli
```
	2.	Instalar dependencias:
```bash
npm install
```
	3.	Iniciar el servidor de desarrollo:
```bash
npm run dev
```
	4.	Iniciar el servidor de Express:
```bash
npm run server
```

🌍 ## i18n: Internacionalización

El proyecto soporta varios idiomas mediante i18next y react-i18next. Las traducciones están en src/translate/ y actualmente soporta español (es) e inglés (en).

	•	Configuración de i18n: src/translate/i18n.js
	•	Traducciones: i18n-en.json y i18n-es.json

🎨 ## Estilos con SCSS

Este proyecto utiliza SCSS para un manejo eficiente de los estilos. La estructura sigue una arquitectura modular con SMACSS para facilitar la mantenibilidad y escalabilidad.

	•	Variables y Mixins: src/scss/abstracts/
	•	Estilos Base: src/scss/base/
	•	Estilos por Página: Cada página tiene sus propios estilos modulares.