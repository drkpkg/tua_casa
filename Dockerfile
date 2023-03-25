FROM node:18-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# create environment.ts file
#export const environment = {
#  production: false,
#  supabaseUrl: 'https://pjvwwqagxwhinyemhwur.supabase.co',
#  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdnd3cWFneHdoaW55ZW1od3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1NTI3MDUsImV4cCI6MTk5MzEyODcwNX0.q3LNbWlQ_JmyRHT_eAYrcHOUz918p6H-BMNsLocsEjg',
#}
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
