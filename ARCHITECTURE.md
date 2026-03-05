# 🏗️ Arquitectura del Proyecto Berlín's

## 📋 Resumen Ejecutivo

Landing page premium para restaurante alemán, construida con tecnologías modernas y mejores prácticas de desarrollo frontend 2026.

---

## 🎯 Decisiones de Arquitectura

### ¿Por qué Vite sobre Next.js?

Para este proyecto específico, Vite fue la elección óptima:

✅ **Ventajas de Vite para Berlín's:**
- Proyecto tipo landing page (no requiere SSR)
- Build ultra rápido y HMR instantáneo
- Configuración más simple
- Bundle más ligero para el usuario final
- Perfecto para sitios con contenido mayormente estático

⚠️ **Cuándo considerar Next.js:**
- Si necesitas SEO dinámico por página
- Rutas dinámicas complejas
- Server-side rendering crítico
- API routes integradas

### Stack de Estilos

**TailwindCSS** fue elegido por:
- Utility-first approach (desarrollo más rápido)
- Purge automático (CSS final ultra pequeño)
- Diseño responsive simplificado
- Consistencia en el design system
- Excelente DX con autocompletado

### Animaciones

**Framer Motion** sobre CSS puro:
- Animaciones declarativas más mantenibles
- Gestures y scroll animations built-in
- Performance nativa (GPU accelerated)
- AnimatePresence para mount/unmount
- API intuitiva

---

## 📐 Estructura de Componentes

```
┌─────────────────────────────────┐
│           App.jsx               │  ← Punto de entrada
│  (Orquestador de secciones)    │
└──────────┬──────────────────────┘
           │
    ┌──────┴──────┬──────────┬──────────┬──────────┬──────────┬────────────┐
    ▼             ▼          ▼          ▼          ▼          ▼            ▼
┌────────┐   ┌────────┐ ┌───────┐ ┌───────────┐ ┌────────┐ ┌──────────┐ ┌────────┐
│ Navbar │   │  Hero  │ │  Menu │ │Experience │ │Gallery │ │Reservas  │ │ Footer │
│        │   │        │ │       │ │           │ │        │ │          │ │        │
└────────┘   └────────┘ └───────┘ └───────────┘ └────────┘ └──────────┘ └────────┘
   │             │           │          │             │           │           │
   │             │           └──────────┼─────────────┘           │           │
   │             │                      │                         │           │
   └─────────────┴──────────────────────┴─────────────────────────┴───────────┘
                                        │
                                        ▼
                                ┌───────────────┐
                                │  menuData.js  │  ← Datos estáticos
                                └───────────────┘
```

---

## 🔧 Componentes Detallados

### 1. Navbar (`Navbar.jsx`)
**Responsabilidades:**
- Navegación principal fixed/sticky
- Efecto blur on scroll
- Menu mobile responsivo
- Smooth scroll navigation

**Estado Local:**
- `scrolled`: Boolean para efecto blur
- `mobileMenuOpen`: Toggle menu mobile

**Hooks:**
- `useEffect`: Listener de scroll

**Animaciones:**
- Initial slide-in
- Staggered menu items
- Mobile menu fade & height

---

### 2. Hero (`Hero.jsx`)
**Responsabilidades:**
- Primera impresión visual
- Parallax background
- CTAs principales

**Framer Motion:**
- `useScroll`: Tracking scroll progress
- `useTransform`: Parallax effect (y position & opacity)
- Scroll indicator con loop animation

**Performance:**
- Ref optimization
- Transform en GPU layer

---

### 3. Menu (`Menu.jsx`)
**Responsabilidades:**
- Showcase de platillos
- Cards interactivas
- CTA a menú completo

**Sub-componente:**
- `MenuCard`: Reutilizable, animación individual

**Data Flow:**
```
menuData.js → Menu.jsx → MenuCard (props)
                  ↓
            .slice(0, 6) → Featured items
```

**Optimizaciones:**
- Lazy loading images
- Staggered animations (viewport once)

---

### 4. Experience (`Experience.jsx`)
**Responsabilidades:**
- Brand storytelling
- Trust building (badges, features)
- Split layout responsive

**Layout Pattern:**
- Desktop: Grid 2 cols (50/50)
- Mobile: Stack vertical

**Elementos Visuales:**
- Decorative corners
- Stats badge overlay
- Icon features

---

### 5. Gallery (`Gallery.jsx`)
**Responsabilidades:**
- Visual showcase
- Lightbox interaction

**Estado Local:**
- `selectedImage`: Current lightbox image

**Componentes:**
- Grid responsive (1/2/3 cols)
- Modal con AnimatePresence

**UX Details:**
- Click outside to close
- ESC key support (browser native)
- Image caption on hover

---

### 6. Reservations (`Reservations.jsx`)
**Responsabilidades:**
- Lead capture
- Contact info display

**Estado Local:**
- `formData`: Object con campos del form
- `submitted`: Success feedback

**Validación:**
- HTML5 native validation (required, type)
- Future: Agregar validación custom

**Future Enhancement:**
```javascript
// Conectar a backend
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await fetch('/api/reservations', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  } catch (error) {
    // Error handling
  }
};
```

---

### 7. Footer (`Footer.jsx`)
**Responsabilidades:**
- Links secundarios
- Información de contacto
- Social media
- Legal links

**Layout:**
- Grid 4 cols (responsive → stack mobile)
- Bottom bar separator

---

## 🎨 Sistema de Diseño

### Tokens de Diseño (Tailwind Config)

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      gold: { /* Paleta completa */ },
      primary: { /* Rojo/naranja */ }
    },
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],  // Headings
      inter: ['Inter', 'sans-serif']             // Body
    }
  }
}
```

### Clases Utilitarias Custom

```css
/* index.css - @layer components */
.btn-primary     // Botón dorado con gradient
.btn-secondary   // Botón outline
.heading-xl      // 5xl → 7xl responsive
.heading-lg      // 4xl → 6xl responsive
.heading-md      // 3xl → 5xl responsive
.section-padding // py-16 → py-32 + px responsive
.container-custom // max-w-7xl + mx-auto
```

---

## 🚀 Performance Budget

### Métricas Target

- **FCP (First Contentful Paint)**: < 1.5s
- **LCP (Largest Contentful Paint)**: < 2.5s
- **TTI (Time to Interactive)**: < 3.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Bundle Size**: < 200KB (gzipped)

### Optimizaciones Aplicadas

1. **Code Splitting**: Automático por Vite
2. **Image Optimization**: 
   - Lazy loading nativo
   - URLs optimizadas (Unsplash format)
3. **CSS Purging**: Tailwind elimina clases no usadas
4. **Tree Shaking**: Vite + Rollup
5. **Minification**: Terser para JS, cssnano para CSS

---

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────┐
│              menuData.js (Static Data)              │
│  • menuItems: Array de objetos de platillos        │
│  • galleryImages: Array de imágenes                │
└───────────────────┬─────────────────────────────────┘
                    │
        ┌───────────┴──────────┐
        ▼                      ▼
   ┌─────────┐          ┌──────────┐
   │ Menu.jsx│          │Gallery.jsx│
   └─────────┘          └──────────┘
        │                      │
        ▼                      ▼
   MenuCard (map)        Image Grid (map)
```

**Future: API Integration**
```
API Backend → React Query/SWR → Components
                   ↓
            Cache + Revalidation
```

---

## 🎭 Patrones de Animación

### 1. Scroll Reveal Pattern
```javascript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5 }}
>
```

**Uso:** Todos los componentes al entrar en viewport

### 2. Stagger Pattern
```javascript
transition={{ delay: index * 0.1 }}
```

**Uso:** Menu items, gallery grid, features list

### 3. Parallax Pattern
```javascript
const { scrollYProgress } = useScroll({ target: ref });
const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
```

**Uso:** Hero background image

### 4. Hover States
```javascript
whileHover={{ scale: 1.05, y: -10 }}
```

**Uso:** Cards, buttons, links

---

## 📱 Responsive Strategy

### Mobile First Approach

Base styles → Mobile
`md:` → Tablet (768px+)
`lg:` → Desktop (1024px+)

### Breakpoint Usage

| Component    | Mobile      | Tablet      | Desktop     |
|-------------|-------------|-------------|-------------|
| Grid Layout | 1 col       | 2 cols      | 3-4 cols    |
| Typography  | base size   | +10-20%     | +20-40%     |
| Spacing     | px-6 py-16  | px-12 py-20 | px-24 py-32 |
| Navigation  | Hamburger   | Hamburger   | Full menu   |

---

## 🔐 SEO Implementation

### Meta Tags
- Title: Brand + Keywords
- Description: Compelling, <160 chars
- OG tags: Social sharing
- Twitter Card: Optimizado para X

### Semantic HTML
```html
<nav>   → Navbar
<main>  → App content wrapper
<section id="..."> → Each page section
<footer> → Footer
```

### Accessibility
- Aria labels en iconos
- Alt texts descriptivos
- Keyboard navigation
- Color contrast AA compliant

---

## 🧪 Testing Strategy (Recomendado)

### Unit Tests
```bash
# Instalar
npm install -D vitest @testing-library/react

# Tests recomendados:
- Form validation (Reservations)
- Smooth scroll functions
- Gallery modal open/close
```

### E2E Tests
```bash
# Instalar Playwright
npm install -D @playwright/test

# User flows:
- Complete reservation flow
- Gallery lightbox interaction
- Mobile menu navigation
```

---

## 🚢 Deployment

### Build Process
```bash
npm run build
# Output: dist/ folder
```

### Hosting Options

**Opción 1: Vercel** (Recomendado)
- Auto-deploy on git push
- CDN global
- Zero config

**Opción 2: Netlify**
- Similar a Vercel
- Forms backend gratuito

**Opción 3: Traditional**
- Build → Upload dist/ a servidor
- Configurar servidor estático (Nginx/Apache)

### Environment Variables
```bash
# .env (futuro)
VITE_API_URL=https://api.berlins.mx
VITE_ANALYTICS_ID=GA-XXXXXXX
```

---

## 📈 Métricas de Negocio

### KPIs a Trackear
1. **Reservations Submitted**: Conversión principal
2. **Time on Site**: Engagement
3. **Scroll Depth**: Contenido consumido
4. **Menu CTA Clicks**: Interés en platillos
5. **Social Clicks**: Brand awareness

### Analytics Setup
```javascript
// Agregar en index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXX"></script>

// En App.jsx
useEffect(() => {
  // Track page view
  gtag('event', 'page_view');
}, []);
```

---

## 🔧 Mantenimiento

### Actualizar Menú
```javascript
// src/data/menuData.js
export const menuItems = [
  {
    id: 1,
    name: "Nuevo Platillo",
    description: "...",
    price: "$XXX",
    category: "...",
    image: "URL"
  }
];
```

### Cambiar Imágenes
1. Optimizar imagen (TinyPNG, Squoosh)
2. Subir a CDN (Cloudinary, Imgix)
3. Actualizar URL en componente

### Actualizar Información
- **Contacto**: [Footer.jsx](src/components/Footer.jsx) + [Reservations.jsx](src/components/Reservations.jsx)
- **Horarios**: [Footer.jsx](src/components/Footer.jsx)
- **Redes**: [Footer.jsx](src/components/Footer.jsx) - socialLinks array

---

## 🎓 Lecciones y Best Practices

### ✅ Qué hicimos bien
- Componentes pequeños y enfocados
- Animaciones con propósito (no decorativas)
- Mobile-first desde inicio
- Sistema de diseño consistente
- Performance optimizations desde día 1

### 🔄 Mejoras Futuras
- Agregar TypeScript para type safety
- Implementar testing suite completo
- Lazy load components (React.lazy)
- Image optimization avanzada (blur placeholder)
- Internationalization (i18n)

---

## 📚 Referencias

- [React Docs](https://react.dev)
- [Vite Guide](https://vite.dev/guide/)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Web.dev Performance](https://web.dev/performance/)

---

**Arquitectura diseñada para escalar** 🚀

*Última actualización: Marzo 2026*
