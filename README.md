# AWS EC2 Virtual Private Server Deployment 🚀

Welcome to the EC2 deployment branch of the DevOps Utility Belt portfolio! This branch demonstrates a traditional Infrastructure-as-a-Service (IaaS) approach, hosting a React/Vite Single Page Application (SPA) on a virtual Linux server.

## 🏗️ Architecture & Deployment Strategy

Unlike serverless options, this deployment utilizes an **Amazon EC2 (Elastic Compute Cloud)** instance. This approach provides full control over the operating system, web server configuration, and networking environment.

The deployment process involves:
1. Provisioning a Linux-based EC2 instance (e.g., Ubuntu/Amazon Linux).
2. Configuring Security Groups to allow inbound traffic on ports 80 (HTTP) and 443 (HTTPS).
3. Installing dependencies (Node.js, Nginx, Git).
4. Cloning the repository and building the static assets.
5. Configuring **Nginx** as a high-performance web server to serve the build artifacts.

## 🖥️ Server Configuration & Deployment

The deployment lifecycle is managed directly on the virtual machine, allowing for deep customization of the hosting environment.

![Repository Cloning & Build](public/clone.png)
*Figure 1: The process of cloning the repository and preparing the build environment directly on the EC2 instance.*

![EC2 Instance Console](public/EC2%20direct.png)
*Figure 2: The AWS Management Console showing the active EC2 instance running the portfolio application.*

![Live Site Access](public/direct.png)
*Figure 3: Accessing the application directly via the EC2 instance's Public IPv4 address or DNS name.*

## 🔒 Security & Best Practices

- **Security Groups:** Implemented "Least Privilege" by only opening essential ports (SSH, HTTP, HTTPS).
- **Web Server Optimization:** Nginx is configured for optimal performance, handling static file serving efficiently.
- **Process Management:** Ensuring the server environment is stable and resilient.

## 📈 Results & Impact

Deploying on EC2 showcases critical "Traditional DevOps" skills:

- **Full Environment Control:** Ability to customize the OS, kernel settings, and web server modules to meet specific application requirements.
- **Troubleshooting Proficiency:** Direct access to server logs (Nginx access/error logs, system logs) for deep debugging.
- **Hybrid Cloud Ready:** Skills that translate directly to on-premise servers or other cloud providers' VM services.
- **Scalability:** The instance can be vertically scaled (Instance Type upgrade) or horizontally scaled using Auto Scaling Groups and Load Balancers.

## 🌐 Live Environment

Check out the EC2-hosted portfolio here:

👉 **[Insert EC2 Instance Live Link Here]**

---
*Developed as a technical showcase of traditional server management, Nginx configuration, and AWS proficiency.*
