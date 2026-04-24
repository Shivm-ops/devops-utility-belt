# AWS S3: Cloud-Native Static Hosting 🚀

This branch demonstrates a Serverless approach to web hosting. Instead of using a virtual machine, I used AWS S3 to host my DevOps Utility Belt web app as a high-performance static website.

## 🛠️ The "How-To" in Simple Terms

*   **The Build:** I converted my React code into production-ready files (`dist` folder).
*   **The Storage:** I created an S3 Bucket and enabled "Static Website Hosting."
*   **The Security:** I wrote a JSON Bucket Policy to allow the public to view the site while keeping my account secure.

## 📸 Deployment Proofs

### 1. Storage & Assets
The S3 bucket acting as my web root, containing all my HTML, CSS, and JS files.
![Storage & Assets](public/S3%20bucket.png)

### 2. Access Control (Security)
My custom JSON policy that grants `s3:GetObject` permission to the world.
![Access Control](public/S3%20policy.png)

## 🎯 Key Skills Demonstrated

*   **Serverless Architecture:** Hosted a site without managing any Operating System or Servers.
*   **AWS IAM & Policies:** Expertly handled cloud permissions using JSON.
*   **Cost Optimization:** Achieved 99% lower hosting costs compared to using a traditional server.

---
*Developed as a technical showcase of cloud-native deployment and AWS S3 proficiency.*
