# 🎨 Guía de Personalización Rápida

Esta guía te ayudará a personalizar el sitio de Berlín's de manera rápida y efectiva.

---

## 🖼️ Cambiar Imágenes

### Hero Section
**Archivo:** `src/components/Hero.jsx`
**Línea:** 39

```javascript
// Actual
backgroundImage: `url('https://images.unsplash.com/photo-414...')`

// Cambiar por tu imagen
backgroundImage: `url('/ruta/a/tu/imagen.jpg')`
```

**Tips:**
- Usa imágenes de alta resolución (mínimo 1920x1080)
- Formato recomendado: WebP para mejor performance
- Mantén el ratio 16:9 para mejor visualización

---

### Menú - Imágenes de Platillos
**Archivo:** `src/data/menuData.js`

```javascript
export const menuItems = [
  {
    id: 1,
    name: "Tu Platillo",
    description: "Descripción breve y atractiva",
    price: "$XXX",
    category: "Plato Principal",
    image: "https://tu-cdn.com/imagen.jpg"  // ← Cambiar aquí
  }
];
```

---

### Galería
**Archivo:** `src/data/menuData.js`

```javascript
export const galleryImages = [
  {
    id: 1,
    url: "URL_DE_TU_IMAGEN",
    alt: "Descripción de la imagen"
  }
];
```

**Recomendaciones:**
- Usa 6-12 imágenes para balance visual
- Formato: 1200x800px (4:3 ratio)
- Muestra: ambiente, comida, equipo, detalles

---

## 📝 Cambiar Textos

### Hero - Headline Principal
**Archivo:** `src/components/Hero.jsx`
**Líneas:** 48-54

```javascript
<motion.h1 className="heading-xl mb-6 text-white leading-tight">
  Tu Texto Principal
  <br />
  <span className="text-gold-500">Palabra Destacada</span> Continuación
</motion.h1>
```

---

### Tagline / Subtítulo
**Archivo:** `src/components/Hero.jsx`
**Líneas:** 40-43

```javascript
<motion.p className="text-gold-500 text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light">
  Tu Tagline Aquí
</motion.p>
```

---

### Historia del Restaurante
**Archivo:** `src/components/Experience.jsx`
**Líneas:** 109-121

Cambia los textos de los párrafos:
```javascript
<p className="text-white/70 text-lg leading-relaxed">
  Tu historia aquí...
</p>
```

---

## 💰 Actualizar Precios y Menú

**Archivo:** `src/data/menuData.js`

```javascript
export const menuItems = [
  {
    id: 1,
    name: "Nombre del Platillo",
    description: "Descripción atractiva (max 120 caracteres)",
    price: "$285",  // ← Actualizar precio
    category: "Plato Principal",  // Categorías: Entrada, Plato Principal, Postre, Bebida
    image: "URL"
  },
  // Agregar más platillos...
];
```

### Tips para Descripciones:
- ✅ "Tradicional escalope empanizado, servido con puré de papa"
- ❌ "Schnitzel de cerdo"

Sé descriptivo pero conciso (80-120 caracteres).

---

## 📞 Información de Contacto

### Dirección, Teléfono, Email
**Archivo:** `src/components/Reservations.jsx`
**Líneas:** 89-138

```javascript
<span className="text-white/60">
  Tu Dirección Aquí<br/>Ciudad, Estado
</span>
```

```javascript
<span className="text-white/60">+52 55 XXXX XXXX</span>
```

```javascript
<span className="text-white/60">tuemail@ejemplo.com</span>
```

---

### Footer - Contacto
**Archivo:** `src/components/Footer.jsx`
**Líneas:** 119-162

Actualizar los mismos datos que en Reservations para consistencia.

---

## 🕐 Horarios

**Archivo:** `src/components/Footer.jsx`
**Líneas:** 169-191

```javascript
<ul className="space-y-3">
  <li className="flex justify-between">
    <span className="text-white/60">Lunes - Viernes</span>
    <span className="text-gold-500 font-medium">1PM - 11PM</span>
  </li>
  // Agregar más días...
</ul>
```

---

## 🔗 Redes Sociales

**Archivo:** `src/components/Footer.jsx`
**Líneas:** 10-42

```javascript
const socialLinks = [
  {
    name: 'Facebook',
    icon: <svg>...</svg>,
    url: 'https://facebook.com/tupagina'  // ← Cambiar aquí
  },
  {
    name: 'Instagram',
    icon: <svg>...</svg>,
    url: 'https://instagram.com/tuperfil'  // ← Cambiar aquí
  },
  // ...
];
```

---

## 🎨 Cambiar Colores

### Paleta de Colores
**Archivo:** `tailwind.config.js`

```javascript
colors: {
  primary: {
    // Tus colores personalizados
    500: '#TU_COLOR',
  },
  gold: {
    400: '#TU_DORADO_CLARO',
    500: '#TU_DORADO',
    600: '#TU_DORADO_OSCURO',
  },
}
```

### Colores Rápidos Recomendados:

**Elegante Oscuro (Actual):**
- Background: Negro (#000000)
- Accent: Dorado (#d7b685)

**Variante Roja:**
- Background: Negro (#000000)
- Accent: Rojo Profundo (#8B0000)

**Variante Azul:**
- Background: Azul Muy Oscuro (#0a1929)
- Accent: Azul Cielo (#60a5fa)

Para cambiar globalmente:
1. Busca `gold-` en todos los archivos
2. Reemplaza con tu nueva clase de color
3. O edita los valores en tailwind.config.js

---

## 📱 Agregar WhatsApp Button

**Archivo:** Crear `src/components/WhatsAppButton.jsx`

```javascript
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '5215512345678'; // Formato: código país + número
  const message = 'Hola, me gustaría hacer una reservación';
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl"
    >
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
```

**Agregar en App.jsx:**

```javascript
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Componentes existentes */}
      <WhatsAppButton />  {/* ← Agregar aquí */}
    </div>
  );
}
```

---

## 🔍 SEO - Meta Tags

**Archivo:** `index.html`

```html
<title>Tu Restaurante - Slogan | Ciudad</title>
<meta name="description" content="Tu descripción única aquí (máx 160 caracteres)" />

<!-- Open Graph (Facebook) -->
<meta property="og:title" content="Tu Restaurante" />
<meta property="og:description" content="Tu descripción" />
<meta property="og:image" content="URL_DE_TU_LOGO_O_IMAGEN" />
<meta property="og:url" content="https://tudominio.com" />
```

---

## 📊 Google Analytics

**Archivo:** `index.html` (antes de `</head>`)

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Obtén tu ID en: https://analytics.google.com

---

## 🎯 Llamadas a la Acción (CTAs)

### Botón Principal del Hero
**Archivo:** `src/components/Hero.jsx`

```javascript
<motion.button
  onClick={() => scrollToSection('#menu')}
  className="btn-primary text-base md:text-lg"
>
  Tu Texto Aquí  {/* Ej: "Ver Menú", "Descubre Más" */}
</motion.button>
```

### Cambiar Destino del Botón

Si quieres que abra WhatsApp directamente:

```javascript
<motion.button
  onClick={() => window.open('https://wa.me/5215512345678', '_blank')}
  className="btn-primary text-base md:text-lg"
>
  Reservar por WhatsApp
</motion.button>
```

---

## 🚀 Tips de Personalización Avanzada

### 1. Agregar Video en Hero

```javascript
// En Hero.jsx, reemplaza la imagen por:
<video
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-[120vh] object-cover"
>
  <source src="/video.mp4" type="video/mp4" />
</video>
```

### 2. Más Platillos en el Menú

En `menuData.js`, simplemente agrega más objetos al array:

```javascript
export const menuItems = [
  // ... platillos existentes
  {
    id: 7,
    name: "Nuevo Platillo",
    description: "...",
    price: "$XXX",
    category: "...",
    image: "..."
  }
];
```

El componente ya renderiza todos automáticamente.

### 3. Cambiar Fuentes

**Archivo:** `src/index.css` (línea 5)

```css
@import url('https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@400;700&display=swap');
```

**Archivo:** `tailwind.config.js`

```javascript
fontFamily: {
  heading: ['Tu Fuente', 'serif'],
  body: ['Otra Fuente', 'sans-serif'],
}
```

---

## ⚡ Checklist Pre-Lanzamiento

- [ ] Todas las imágenes están optimizadas (< 200KB cada una)
- [ ] URLs de redes sociales actualizados
- [ ] Información de contacto correcta en todos lados
- [ ] Horarios actualizados
- [ ] Precios verificados
- [ ] Google Analytics configurado
- [ ] Meta tags con información real
- [ ] Formulario de reservas funcional
- [ ] Probar en mobile/tablet/desktop
- [ ] Verificar ortografía en todo el sitio

---

## 🆘 Solución de Problemas

### Las imágenes no cargan
1. Verifica que la URL sea accesible públicamente
2. Usa HTTPS en las URLs
3. Considera usar un CDN (Cloudinary, Imgix)

### El sitio se ve roto en mobile
1. Abre DevTools (F12)
2. Activa modo responsive
3. Verifica que no haya overflow horizontal

### Cambié algo y no se ve
1. Guarda el archivo (Ctrl/Cmd + S)
2. Vite recarga automáticamente
3. Si no, refresca el navegador (Ctrl/Cmd + R)

---

## 📞 Soporte

Si necesitas ayuda adicional, revisa:
- [README.md](README.md) - Documentación principal
- [ARCHITECTURE.md](ARCHITECTURE.md) - Detalles técnicos

---

**¡Listo para personalizar!** 🎨

*Recuerda: Guarda siempre una copia de respaldo antes de hacer cambios importantes.*
