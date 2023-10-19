# Contour Frontend Application

This is the frontend application of Contour Health. Live Link: https://mycontourhealth.com/

The app was bootstraped from [T3 Stack](https://create.t3.gg/)

## Project Setup

1. Install depndencies- ```npm install```
2. Environment variables are not pushed to Github. There is a file called ```.env.example``` where you can find the name of all the environment varibales. Just copy those and create a new file ```.env``` in your root. The values of the variables can be found in eng-software channel. If you add any new variable, don't forget to add it in ```env.mjs``` and Netlify. Set Netlify's environment variable here- https://app.netlify.com/sites/contour-health/configuration/env
3. Run locally- ```npm run dev```
4. Build application- ```npm run build```

## Deployment
1. The app is connected with Netlify. When we push to ```master``` branch, it triggers the deployment process.

## Project Structure and usage
```
├── .github
|    └── workflows
|        └── main.yml ** (github actions configuration)
├── README.md
├── cypress ** (All e2e testing codes)
├── cypress.config.ts
├── next-env.d.ts
├── next.config.mjs ** (Next.js configs)
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── prettier.config.mjs
├── public ** (All public assets)
├── src
│   ├── components ** (standalone components for different pages)
│   ├── env.mjs ** (secured environment variables with zod)
│   ├── pages ** (all routes of the application)
│   ├── server ** (not using it yet)
│   ├── styles ** (global styles)
│   └── utils ** (all utils are kept here. add any helper function, hooks, etc. here)
│       ├── api.ts ** (not using it)
│       ├── axios.ts ** (it's a interceptor where we are adding Bearer token and handling notifications)
│       └── config.js ** (this is a config file for the app. Now, we are keeping the baseurl of the api here)
├── tailwind.config.ts ** (tailwindcss configuration. Check colors and fonts here)
├── tsconfig.json
└── types ** (all types made by use for the application is kept here)
```
