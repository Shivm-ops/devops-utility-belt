# AWS CloudFront: Global Content Delivery (CDN) 🌍

This branch demonstrates a production-grade deployment using a CDN (Content Delivery Network). It ensures the portfolio is fast for users anywhere in the world by caching it at the "Edge."

## 🛠️ The "How-To" in Simple Terms

*   **The Distribution:** I created a CloudFront Distribution to act as a global gateway.
*   **The Origin:** I linked it to my S3 bucket but kept the bucket private for better security.
*   **The Edge:** My site is now mirrored across hundreds of AWS data centers worldwide to reduce latency.

## 📸 Deployment Proofs

### 1. Global Entry Point
The CloudFront dashboard showing my unique domain and active status.
![Global Entry Point](public/Cloudfront.png)

### 2. High-Performance Settings
Configured for optimized caching and secure HTTPS delivery.
![High-Performance Settings](public/CF%20general.png)

## 🎯 Key Skills Demonstrated

*   **Global Infrastructure:** Optimized Time-to-First-Byte (TTFB) for users worldwide.
*   **Origin Access Control (OAC):** Secured the "back-door" by forcing all traffic through the CDN.
*   **WAF & Shield Integration:** Leveraged AWS's edge security to protect against DDoS attacks.

---
*Developed as a technical showcase of cloud-native content delivery and AWS CloudFront proficiency.*
