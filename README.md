# Piel Bonita — Centro de Depilación Láser

Landing page profesional para **Piel Bonita**, centro especializado en depilación láser ubicado en El Calafate, Patagonia Argentina.

---

## Stack técnico

- **HTML5** semántico (header, nav, main, section, article, footer)
- **CSS3** puro con custom properties (sin frameworks)
- **JavaScript vanilla** (sin dependencias externas)
- **Google Fonts**: Cormorant Garamond + Poppins
- Mobile-first, funciona abriendo `index.html` directamente en el navegador

---

## Estructura de archivos

```
04-Web/
├── index.html              ← Página principal
├── css/
│   ├── styles.css          ← Estilos principales (variables, componentes)
│   └── responsive.css      ← Media queries (mobile-first)
├── js/
│   └── main.js             ← Navegación, slider, animaciones
├── assets/
│   ├── images/
│   │   └── placeholder.txt ← Instrucciones para las imágenes reales
│   └── icons/              ← Iconos adicionales (si se necesitan)
├── README.md
├── .gitignore
└── robots.txt
```

---

## Cómo probar localmente

### Opción 1: Abrir directamente (más simple)
Hacer doble clic en `index.html`. Funciona sin servidor.

### Opción 2: Servidor local (recomendado)
Si tenés Python instalado:
```bash
# Python 3
python -m http.server 3000

# Luego abrir: http://localhost:3000
```

Si tenés Node.js:
```bash
npx serve .
# Luego abrir: http://localhost:3000
```

Si tenés VS Code, instalar la extensión **Live Server** y hacer clic en "Go Live".

---

## Despliegue en GitHub Pages

### Primera vez

1. Crear repositorio en GitHub (público)
2. Subir los archivos:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page Piel Bonita"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/piel-bonita.git
   git push -u origin main
   ```
3. En GitHub → Settings → Pages:
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
4. La URL será: `https://TU-USUARIO.github.io/piel-bonita/`

### Actualizaciones
```bash
git add .
git commit -m "update: descripción del cambio"
git push
```
GitHub Pages se actualiza automáticamente en ~1-2 minutos.

---

## Placeholders a reemplazar antes de entregar

Buscar `TODO` en el código (`Ctrl+F` → `TODO`) para encontrar todos los puntos:

| Archivo       | Qué reemplazar                                      |
|---------------|-----------------------------------------------------|
| `index.html`  | Número de WhatsApp (`5492902XXXXXX`)                |
| `index.html`  | URL canónica y Open Graph (`pielbonita.com.ar`)     |
| `index.html`  | Src del iframe de Google Maps (ver instrucciones)   |
| `index.html`  | Perfil de Instagram real                            |
| `index.html`  | Email real (`contacto@pielbonita.com.ar`)           |
| `index.html`  | Precios de cada servicio                            |
| `index.html`  | Estadísticas reales (años, clientas, sesiones)      |
| `assets/`     | Agregar imágenes reales (ver `placeholder.txt`)     |
| `robots.txt`  | Dominio real en la URL del sitemap                  |

### Cómo obtener el embed de Google Maps
1. Ir a [maps.google.com](https://maps.google.com)
2. Buscar "25 de Mayo 160 El Calafate Santa Cruz"
3. Clic en "Compartir" → pestaña "Insertar un mapa"
4. Copiar el atributo `src` del `<iframe>` que aparece
5. Pegarlo en el `src` del iframe en `index.html`

---

## Funcionalidades implementadas

- [x] Navegación sticky con indicador de sección activa
- [x] Menú hamburguesa con animación (mobile)
- [x] Hero con SVG decorativo animado
- [x] Tarjetas de beneficios con hover
- [x] Grilla de servicios con links a WhatsApp
- [x] Sección "Sobre nosotras" con estadísticas
- [x] Slider de testimonios con autoplay, swipe táctil y dots
- [x] FAQ con acordeón nativo (`<details>/<summary>`)
- [x] Mapa de Google Maps embebido
- [x] CTA final con botón WhatsApp grande
- [x] Footer con navegación y datos de contacto
- [x] Botón flotante de WhatsApp con animación pulse
- [x] Animaciones al scroll (Intersection Observer)
- [x] Año de copyright dinámico
- [x] SEO: meta tags, Open Graph, Twitter Card, Schema.org (JSON-LD)
- [x] Accesibilidad: aria-labels, roles, contraste WCAG AA
- [x] Responsive: mobile, tablet, desktop, large
- [x] `prefers-reduced-motion` respetado
- [x] Optimizado para GitHub Pages (rutas relativas)

---

## Decisiones de diseño

**Paleta y fuentes**: Se eligió Cormorant Garamond para títulos (elegancia serif) y Poppins para cuerpo (legibilidad moderna), en una paleta de borgoña y rosas empolvados que transmite femineidad premium.

**Sin JavaScript para el FAQ**: Se usó `<details>/<summary>` nativo del browser, que es accesible por defecto y no necesita JS.

**SVGs inline**: Los íconos y decoraciones son SVG inline para evitar peticiones HTTP adicionales y permitir que los colores respondan a las CSS variables.

**Google Maps embed**: El iframe usa `loading="lazy"` para no bloquear la carga inicial de la página.

---

## Capturas de pantalla

> Agregar capturas una vez que la web esté en producción.

| Desktop | Mobile |
|---------|--------|
| *(pendiente)* | *(pendiente)* |

---

## Créditos

Desarrollado por [Tu nombre / estudio] para Piel Bonita Centro Láser, El Calafate, Patagonia Argentina.
