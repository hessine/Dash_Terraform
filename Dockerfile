FROM debian:buster-slim
WORKDIR  /accretio

RUN \
  DEBIAN_FRONTEND=noninteractive \
    apt update && apt install --assume-yes --no-install-recommends \
      build-essential \
      nasm \
      vim-common \
      npm \
      curl \
      wget \
      git \
      docker.io \
  \
  && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY . .

RUN npm install



EXPOSE 6789
CMD ["npm", "run", "start"]


