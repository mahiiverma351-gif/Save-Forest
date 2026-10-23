🌳 Save FOREST

A modern, responsive environmental awareness website dedicated to protecting forests, wildlife, and our planet.

📌 Project Overview

Save FOREST is a simple static website created to spread awareness about the importance of forests and encourage people to take action.

The website includes:

🌳 Forest awareness

🌍 Environmental protection

🐘 Wildlife conservation

🌱 Tree planting

♻️ Waste reduction

📢 Awareness and community action

📱 Responsive design for mobile and desktop

📁 Project Structure

save-forest/
│
├── index.html
├── style.css
├── script.js
└── README.md

index.html

Contains the main structure and content of the website.

style.css

Contains the website's design, layout, colors, animations, and responsive styles.

script.js

Contains the interactive functionality, including:

Mobile navigation

Contact form interaction

Automatic copyright year

Scroll animations

🚀 How to Run

Method 1 — Open Directly

Download or copy the project files.

Make sure all files are in the same folder.

Double-click index.html.

The website will open in your web browser.

Method 2 — Using VS Code

Open the save-forest folder in Visual Studio Code.

Open index.html.

Install the Live Server extension if needed.

Right-click index.html.

Select Open with Live Server.

☁️ Azure Deployment

This website can also be hosted on an Azure Virtual Machine.

For an Ubuntu VM using Nginx:

sudo apt update
sudo apt install nginx -y

Copy the website files into:

/var/www/html/

For example:

sudo cp index.html style.css script.js /var/www/html/

Restart Nginx:

sudo systemctl restart nginx

Then open the VM's public IP address in a browser:

http://YOUR_VM_PUBLIC_IP

🎨 Technologies Used

HTML5

CSS3

JavaScript

Responsive Web Design

Nginx

Microsoft Azure

🌱 Main Message

Protect forests. Protect wildlife. Protect our future.

Forests are essential ecosystems that support biodiversity, people, water resources, and a healthy planet. The goal of this project is to encourage awareness and positive environmental action.

🔧 Customization

You can customize:

Website title

Text and headings

Colors

Buttons

Forest statistics

Social media links

Contact form

Images and illustrations

The main styling variables can be changed in style.css:

:root {
    --dark-green: #092d20;
    --green: #147a4b;
    --light-green: #2fb36d;
    --lime: #9be15d;
    --cream: #f4f8ef;
}

📄 License

This project is intended for educational and environmental-awareness purposes.

You are free to modify the website for your own project or presentation.

🌍 Save Forests, Save the Future

Every tree matters.

Every action matters.

Together, we can make a difference. 🌳🌱
