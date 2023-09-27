# Discord Clone

## Next.js 13 App Router, React, Tailwind, Prisma & MySQL

This is a repository for a Full Stack Discord Clone: Next.js 13 App Router, React, Tailwind, Prisma, MySQL

Key Features:

- Create a server for you & your friends.
- Create channels for different topics.
- Send messages to your friends.
- Video chat with your friends.
- Audio chat with your friends.
- Direct message your friend.
- Send images.
- Send emojis.
- Send PDFs.

#### Prerequisites

**Node version 14.x**

#### Cloning the repository

```shell
git clone https://github.com/i1Zeus/discord-clone.git
```

#### Install packages

```shell
npm i
```

#### Setup .env file

```js
# clerk keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=''
CLERK_SECRET_KEY=''

# our login and register
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Plant Scale + Prisma
DATABASE_URL=''

# UploadThing
UPLOADTHING_SECRET=''
UPLOADTHING_APP_ID=''

# Live kit
LIVEKIT_API_KEY=''
LIVEKIT_API_SERCRET=''
NEXT_PUBLIC_LIVEKIT_URL=''
```

### Connect to PlanetScale and Push Prisma

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
