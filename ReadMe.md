# Dope Portal


## Demo link: [Dataloader.vercel.app](dataloader.vercel.app)
Access my site at [DataLoader.vercel.app](dataloader.vercel.app)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)

## About The App
Dope Portal aims to gather data from various universities and research centers across the United States, focusing on collecting test results related to solar panels. The accumulated data will be stored and utilized to enhance the performance of solar panels through the process of doping.

## Screenshots
![Portal](readmeResource\img1.jpg)
![QRCode](readmeResource\img2.jpg)
![Login Portal](readmeResource\img3.jpg)



## Technologies
I used `ReactJS`, `Prime React`, `Docker`,`Vercel`,`MongoDB`, `nginx`

## Setup
- download or clone this repository
- `cd dataloader`
- `docker build -t dataloader .`
- `docker run --name dataloader_cont dataloader`
- go to `goto localhost:8080`  on your borwser
  
## Application Approach

1. **User Signup:**
   - Prospective users need to initiate the signup process by contacting the administrator at [Devesh@iastate.edu](mailto:Devesh@iastate.edu) to request access to the application.

2. **User Login:**
   - Authenticated users can log in to the application using their designated user ID and password.

3. **Home Page:**
   - Upon successful login, users are directed to the Home Page which offers various functionalities.
   - **New Registration:**
     - Users can click the "New" button to initiate the registration process for a new solar panel.
     - During registration, users can input Type A data associated with the solar panel.
   - **Data Table Management:**
     - Once the relevant data is added, users can refresh the data table to locate the newly added information.
   - **QR Code Generation:**
     - Users have the option to generate a QR code by clicking on the designated button.
     - The generated QR code can be saved digitally and printed for subsequent attachment to the corresponding solar panel.
     - Add plus button in the same row to view type B form and add more data and click on save button to save the information. The table will also show already submitted data.

This approach ensures a user-friendly experience for registering and managing solar panel data, along with convenient QR code generation for panel identification and tracking.


## Status
Presently, we are engaged in collaborative efforts with several teams to ascertain their form requirements and subsequently crafting the forms accordingly.
