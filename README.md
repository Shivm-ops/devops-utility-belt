# Multi-Cloud DevOps Portfolio Deployment 🚀

Welcome to the Multi-Cloud DevOps Portfolio Deployment project! This repository contains a responsive React/Vite Single Page Application (SPA) that acts as a personal portfolio and landing page.

The core objective of this project is to demonstrate advanced **DevOps, CI/CD, and Cloud Infrastructure** concepts by deploying this exact same static website across multiple distinct hosting platforms and cloud providers.

## 🎯 Project Goals & Architecture

This project proves the ability to handle modern frontend architectures and deploy them securely and efficiently across varied environments:

1. **Vercel & Netlify**: Modern serverless PaaS deployments with automated CI/CD directly from GitHub.
2. **GitHub Pages**: Native repository-based hosting using GitHub Actions workflows.
3. **AWS S3 + CloudFront**: Enterprise-grade static site hosting using an object storage bucket fronted by a global CDN.
4. **AWS EC2 + Nginx**: Traditional Virtual Machine hosting, manually configured with a web server and SSL.

### High-Level Architecture

```text
                     [ Developer pushes code ]
                                |
                                v
                        [ GitHub Repository ]
                                |
        +-----------------------+-----------------------+
        |                       |                       |
        v                       v                       v
[ GitHub Actions ]       [ Netlify CI/CD ]       [ Vercel CI/CD ]
        |                       |                       |
        v                       v                       v
 ( Build `dist/` )       ( Build `dist/` )       ( Build `dist/` )
        |                       |                       |
        v                       v                       v
[ GitHub Pages ]          [ Netlify CDN ]         [ Vercel Edge ]
                                |
                                v
                 [ DNS Provider (GoDaddy/Namecheap) ]
                 - CNAME: portfolio.domain.com
                 - CNAME: www.domain.com
                 - A Record: (EC2 IP)
```

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TypeScript, Tailwind CSS, shadcn/ui
- **Cloud Providers**: AWS (EC2, S3, CloudFront), Vercel, Netlify, GitHub Pages
- **Web Server**: Nginx
- **Security**: Let's Encrypt / Certbot (SSL/TLS)
- **CI/CD**: GitHub Actions, Webhooks

## 🚀 Running Locally

1. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production (creates the `dist/` folder):
   ```bash
   npm run build
   ```

## 🌍 Deployment Environments

This project is actively configured or designed to be deployed across:

- **Netlify/Vercel**: Simply connect this repo to the dashboard, and it automatically handles the `npm run build` and hosting.
- **AWS S3**: The `dist/` contents are synced to an S3 bucket with static web hosting enabled.
- **AWS EC2**: The `dist/` contents are served via an Nginx block with Certbot SSL termination.

## 🔒 Security & Best Practices

- **Principle of Least Privilege**: IAM roles restricted to minimal permissions for AWS S3/CloudFront.
- **Encryption in Transit**: Strict HTTPS enforcement via Let's Encrypt (EC2) and managed certificates (Vercel/Netlify/S3).
- **Immutability**: The build artifacts inside `dist/` are treated as immutable and automatically replaced per deployment.
- **Performance**: Heavy utilization of CloudFront and Edge CDNs to cache assets close to the user.

---
*Developed as a showcase for a DevOps Engineering portfolio.*
