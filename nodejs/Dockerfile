FROM node:16.20

ENV NODE_ENV production

WORKDIR /app

COPY ./package.json yarn.lock ./
RUN yarn install --prod
RUN chown -R node:node .

USER node
CMD ["yarn", "start"]
