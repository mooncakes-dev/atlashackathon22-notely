# Notely (WIP)

## Installation

Download the repo obviously

```bash
    git clone https://github.com/mooncakes-dev/atlashackathon22-notely.git
    cd 
```

## Server

```bash
    cd server
    npm install
```

Set up .env file to look like this:

```bash
    PORT=3000
    ATLAS_URI=<mongodb-project-uri>
```

You're all done! Run:

```bash
    nodemon start
```

## Client

```bash
    cd client
    npm install
    npm run dev
```

Make sure your Vite app is on "http://localhost:5173" otherwise Express will block api calls.

Also, make sure your server and client run concurrently .