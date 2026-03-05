# 🚀 Quick Start Guide - Berlín's Website

## Para Empezar Inmediatamente

### 1. Abrir el Proyecto
El servidor de desarrollo ya está corriendo en: **http://localhost:5174/**

### 2. Ver el Sitio
Abre tu navegador y visita [http://localhost:5174/](http://localhost:5174/)

---

## 🎨 Personalización Rápida (5 minutos)

### Cambiar Textos Principales

**Hero (Primera Sección):**
```
📁 Archivo: src/components/Hero.jsx
📍 Líneas: 48-54 (Título principal)
📍 Líneas: 59-63 (Subtítulo)
```

**Información de Contacto:**
```
📁 Archivo: src/components/Footer.jsx
📍 Líneas: 119-162 (Dirección, teléfono, email)

📁 Archivo: src/components/Reservations.jsx  
📍 Líneas: 89-138 (Misma info)
```

### Cambiar Imágenes

**Hero Background:**
```
📁 Archivo: src/components/Hero.jsx
📍 Línea: 39
backgroundImage: `url('TU_IMAGEN_AQUI')`
```

**Menú:**
```
📁 Archivo: src/data/menuData.js
📍 Cambiar el array menuItems
```

### Actualizar Precios
```
📁 Archivo: src/data/menuData.js
📍 Editar la propiedad "price" de cada platillo
```

---

## 📂 Estructura Rápida

```
src/
├── components/         ← Todos los componentes React
│   ├── Navbar.jsx     (Navegación)
│   ├── Hero.jsx       (Cabecera principal)
│   ├── Menu.jsx       (Sección de menú)
│   ├── Experience.jsx (Sobre nosotros)
│   ├── Gallery.jsx    (Galería de fotos)
│   ├── Reservations.jsx (Formulario)
│   └── Footer.jsx     (Pie de página)
├── data/
│   └── menuData.js    ← Datos del menú y galería
└── App.jsx            ← Componente principal
```

---

## 🛠️ Comandos Útiles

### Desarrollo
```bash
npm run dev          # Ya está corriendo en puerto 5174
```

### Producción
```bash
npm run build        # Crear build de producción
npm run preview      # Preview del build
```

### Reiniciar Servidor
Si algo no funciona:
1. Detener: `Ctrl + C` en la terminal
2. Iniciar: `npm run dev`

---

## ✅ Checklist de Personalización

Antes de subir a producción, asegúrate de:

- [ ] **Textos**
  - [ ] Título y subtítulo del Hero
  - [ ] Descripción del restaurante
  - [ ] Información de contacto (aparece en 2 lugares)
  
- [ ] **Imágenes**
  - [ ] Hero background
  - [ ] Fotos de platillos (6 mínimo)
  - [ ] Galería (6-12 imágenes)
  
- [ ] **Datos**
  - [ ] Precios actualizados
  - [ ] Horarios correctos
  - [ ] Número de teléfono
  - [ ] Email de contacto
  - [ ] Dirección completa
  
- [ ] **Redes Sociales**
  - [ ] URLs de Facebook, Instagram, Twitter/X
  
- [ ] **SEO**
  - [ ] Meta tags en index.html
  - [ ] Title optimizado
  - [ ] Description atractiva

---

## 🎯 Archivos Más Importantes

### Para Contenido:
1. `src/data/menuData.js` - Menú y galería
2. `src/components/Hero.jsx` - Primera impresión
3. `src/components/Footer.jsx` - Contacto y horarios

### Para Estilos:
1. `tailwind.config.js` - Colores y fuentes
2. `src/index.css` - Estilos globales

### Para Configuración:
1. `index.html` - SEO y meta tags
2. `package.json` - Dependencias

---

## 🆘 Problemas Comunes

### "El sitio no carga"
→ Verifica que el servidor esté corriendo (puerto 5174)
→ Refresca el navegador (Ctrl + R)

### "Los cambios no se ven"
→ Guarda el archivo (Ctrl + S)
→ Vite recarga automáticamente
→ Si no funciona, reinicia el servidor

### "Error en consola"
→ Abre DevTools (F12)
→ Revisa la pestaña Console
→ Verifica que no haya errores de sintaxis

### "Las imágenes no cargan"
→ Verifica que las URLs sean públicas
→ Usa HTTPS en las URLs
→ Considera usar un CDN (Cloudinary, Imgix)

---

## 📚 Documentación Completa

Para información detallada:

- **[README.md](README.md)** - Documentación general
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Arquitectura técnica
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - Guía de personalización detallada

---

## 🚢 Desplegar a Producción

### Opción 1: Vercel (Recomendado)
1. Crea cuenta en [vercel.com](https://vercel.com)
2. Importa el repositorio de GitHub
3. Vercel detecta automáticamente Vite
4. ¡Deploy automático!

### Opción 2: Netlify
1. Crea cuenta en [netlify.com](https://netlify.com)
2. Arrastra la carpeta `dist/` después de `npm run build`
3. Tu sitio está en línea

### Opción 3: Servidor Tradicional
```bash
npm run build
# Sube el contenido de dist/ a tu servidor
```

---

## 💡 Tips Pro

1. **Performance**: Las imágenes deben ser < 200KB cada una
2. **SEO**: Actualiza TODOS los meta tags en index.html
3. **Mobile**: Siempre prueba en móvil antes de lanzar
4. **Backup**: Haz commit en Git antes de cambios grandes
5. **Testing**: Prueba el formulario de reservas

---

## 📞 Próximos Pasos

1. Personaliza textos e imágenes
2. Actualiza información de contacto
3. Prueba en diferentes dispositivos
4. Configura dominio personalizado
5. Conecta formulario a backend (opcional)

---

**¡Tu sitio está listo para personalizar!** 🎉

El servidor está corriendo en: http://localhost:5174/

*Última actualización: Marzo 2026*
