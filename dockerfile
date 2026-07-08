FROM mcr.microsoft.com/playwright:v1.60.0-jammy

WORKDIR /app

COPY . .
ENV BASE_URL=https://qauto.forstudy.space
ENV HTTP_CREDENTIALS_USERNAME=guest
ENV HTTP_CREDENTIALS_PASSWORD=welcome2qauto
ENV USER_EMAIL=kamoko4666@googxs.com
ENV USER_PASSWORD=Ool123456

RUN npm install

CMD ["npx", "playwright", "test"]