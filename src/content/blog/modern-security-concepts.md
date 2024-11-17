---
title: Cloud Drive Application
description: Explore cutting-edge security concepts for web apps. From Zero Trust to AI-driven protection, discover essential strategies to safeguard your applications in today's evolving threat landscape.
author: LEKHBIOUI Hamza
date: 2024-11-07
---

## Overview

The **Cloud Drive Application** is a web-based platform, developed using Python and Django, designed to offer cloud storage functionalities similar to Google Drive or OneDrive. The project’s primary goal is to create a functional and user-friendly cloud storage solution, focusing on simplicity and utility, without relying on external frameworks.

## Key Features

### 1. User Authentication and Account Creation

The application provides a secure authentication system where users can create accounts using a login and password. This ensures that each user has a private, secure space for storing their files.

### 2. Local Storage Replacement

The application can also function as a replacement for File Explorer on a local machine, providing an intuitive way to browse, organize, and manage files without leaving the browser.

### 3. Browse Files and Folders

Users can easily navigate through their files and folders using a web-based user interface. The UI allows users to browse, open, and manage their stored data.

### 4. Upload and Organize Files

Users can upload files and create folders directly from the web interface. There is a maximum upload size of 40 MB per file, ensuring efficient use of server resources.
Each user’s folder on the server has a storage limit of 100 MB, which prevents excessive usage and helps manage the overall capacity of the cloud drive.

### 5. File Management Capabilities

Users can move and copy files and folders within their drive. This allows them to better organize their data and maintain a neat folder structure.
Users can also view file properties and metadata, giving them insight into the details of their stored files.

### 6. Visual Statistics and Account Information

The application features an account info screen that displays various statistics using graphics. For example, users can view a chart showing the space distribution by file type (e.g., images, documents, videos). This helps them better understand how their storage is being used.
The graphical representation provides a clear picture of their data usage, allowing users to manage their files more effectively.

## 7. File Preview

The application supports previewing various file formats directly in the browser, including images, videos, PDF documents, source code files, and more. This feature enhances usability by allowing users to view the contents of files without having to download them.

## Technologies Used

**Python and Django**: The core application is built using Django, a high-level Python web framework. Django’s built-in features for handling user authentication, file management, and ORM make it ideal for building this type of application.

**HTML/CSS and JavaScript**: The web interface is created using HTML, CSS, and JavaScript, providing a clean and user-friendly experience for browsing and managing files.

**SQLite**: The application uses SQLite as the database for storing user accounts and metadata about the files. SQLite is lightweight and easy to use, making it perfect for this type of application.

## Challenges & Solutions

**Managing Storage Limits**: Implementing user-specific storage limits required careful handling of file sizes during upload. I used Django's middleware to validate the size of files before they are uploaded, ensuring that users stay within their 100 MB limit.

**Efficient File Browsing and Metadata Handling**: To enable efficient browsing and display of file metadata, I used Django's ORM to store information about uploaded files. This approach allows for quick retrieval and display of file properties in the web UI.

**User-Friendly Interface**: Designing an intuitive interface for file management was crucial. By keeping the design simple and using familiar navigation patterns, the application makes it easy for users to manage their cloud storage effectively.

## Outcome & Learning

The Cloud Drive Application is a practical and easy-to-use solution for users seeking a simple way to store and manage files online. It offers essential cloud storage features like uploading, organizing, and browsing files, combined with user-friendly limits to ensure efficient resource use. The project reflects my ability to build functional web applications using Django, handle file storage challenges, and provide a seamless user experience.