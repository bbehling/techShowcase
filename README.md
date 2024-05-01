This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Notes

**_In dev mode, Next.js app will compile first time navigating to (http://localhost:3000)_**

Please be aware the load times on the first navigation will be longer than normal. This is normal Next.js behavior. To validate, after the app is compiled, navigate too [http://localhost:3000](http://localhost:3000) in a different browser or refresh.

In a production environment, the page is compiled at build, so delayed load times do not occur. In the case of using Azure, the is built in the build pipeline. See link below on deploying to Azure.

This demo application is designed so the landing page is server side rendered (SSR) and dynamic pages (filter and product page) are dynamic pages. This is called a Hybrid Next.js application. The benefit of an SSR landing page is extremely fast page loads which helps with Search Engine Optimizations.

# Testing

Simple unit test examples have been added. Based on experience, I prefer to put UI tests in UI testing frameworks such as Selenium. This would be outside the scope of this demo app.

Run

```bash
npm run test
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy to an Azure Static Web App

See [how to](https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs-hybrid) deploy a Next.js application to an Azure Static Web App.
