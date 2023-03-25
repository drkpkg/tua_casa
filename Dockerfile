FROM node:18-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install -g npm@9.6.2
RUN npm update
RUN npm install
COPY . .
RUN echo "export const environment = {" > src/environments/environment.ts && \
    echo "  production: true," >> src/environments/environment.ts && \
    echo "  supabaseUrl: '$SUPABASE_URL'," >> src/environments/environment.ts && \
    echo "  supabaseKey: '$SUPABASE_KEY'," >> src/environments/environment.ts && \
    echo "}" >> src/environments/environment.ts
RUN npm run build --prod

FROM nginx:1.21-alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
