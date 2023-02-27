FROM node:18-alpine

COPY src /var/ipfs-proxy/src
COPY package.json /var/ipfs-proxy
COPY tsconfig.json /var/ipfs-proxy
WORKDIR /var/ipfs-proxy
RUN npm install && npm run build
EXPOSE 8888
CMD ["--es-module-specifier-resolution=node", "dist/index.js"]