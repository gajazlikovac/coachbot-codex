FROM node:20-slim

ARG FIREBASE_API_KEY
ENV FIREBASE_API_KEY=$FIREBASE_API_KEY

ARG NEXT_PUBLIC_MESSAGE_EDIT_ENABLED
ENV NEXT_PUBLIC_MESSAGE_EDIT_ENABLED=$NEXT_PUBLIC_MESSAGE_EDIT_ENABLED

RUN apt update && apt install -y \
    openssl \
    git

RUN mkdir /home/node/app/
COPY . /home/node/app/
WORKDIR /home/node/app/

RUN npm clean-install
RUN npm run format
RUN npm run build

RUN chown -R node:node /home/node
USER node

CMD ["npm", "run", "start"]
