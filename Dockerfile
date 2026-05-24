# ── Etapa 1: Construcción ─────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias primero (mejor caché de capas)
COPY package*.json ./
RUN npm ci --silent

# Copiar código fuente y generar el build de producción
COPY . .
RUN npm run build

# ── Etapa 2: Servidor web ─────────────────────────────────────────────────────
FROM nginx:1.25-alpine

# Eliminar configuración por defecto de nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar configuración personalizada y los archivos construidos
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
