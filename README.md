# GoConnect

GoConnect is a comprehensive and user-friendly web application designed to simplify everyday needs, including cab price comparison, walking buddy finding, car/bike rentals, and trip-sharing. The application is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and incorporates responsive design principles, theme toggling (light/dark mode), and Google Maps integration for an enhanced user experience.

--- 

## Features

### 1. User Authentication
- Login and Signup pages for secure user authentication.
- Integrated theme toggle for light/dark mode on every page.
- Responsive design ensures usability across devices of all sizes.
- Data validation to ensure the security and correctness of user inputs.

---

### 2. Permissions Management
- A dedicated permissions page for granting location access and notifications.
- Responsive UI to handle permissions seamlessly on different devices.

---

### 3. Selection Page
- A clean and intuitive interface to navigate between the following features:
  - Cab Price Comparison
  - Walking Buddy Finder
  - Car/Bike Rentals
  - Trip Sharing

---

### 4. Cab Price Comparison
- Compare cab prices from platforms like **Uber**, **Ola**, **Rapido**, and **Namma Yatri**.
- Utilizes a **dynamic dataset** to simulate real-world pricing.
- Results displayed in a responsive, interactive table for ease of use.
- Case-insensitive search for pickup and drop-off locations.

---

### 5. **Walking Buddy Finder**
- Allows users to find walking companions based on:
  - Personality type (Introvert, Extrovert, Ambivert)
  - Profession (College Student, Working Professional, Elderly)
  - Age group
  - Locality with **Google Maps API integration**.
- Features dynamic suggestions for localities and updates buddy locations based on user preferences.

---

### 6. **Car/Bike Rentals**
- Search and confirm rentals for cars or bikes based on:
  - Rental type (Car/Bike)
  - Location
  - Availability
- Features a **dynamic rental dataset** with real-world simulated pricing and availability.

---

### 7. **Trip Sharing**
- Allows users to post their trips (source, destination, date, time).
- Users can view notifications from others looking to share trips to reduce costs and find companions.
- Clean and responsive design ensures notifications are easy to read and interact with.

---

### **Additional Functionalities**
- **Theme Toggle**: Light/Dark mode toggle available on all pages.
- **Go Back Button**: Easy navigation with a responsive "Go Back" button implemented across the website.
- **Responsive Design**: All pages adapt seamlessly to devices of different screen sizes.

---

## **Tech Stack**
- **Frontend**: React.js
  - Responsive design with **CSS Media Queries**.
  - Dynamic interactions using React states and props.
- **Backend**: Node.js with Express.js
  - RESTful APIs for managing data and backend logic.
- **Database**: MongoDB
  - Fake datasets for platforms like Uber, Ola, Namma Yatri, Rapido, and Rentals.
- **APIs**: Google Maps API for dynamic location integration.

---

## **Setup Instructions**

### **Frontend**
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```

### **Backend**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```

### **Environment Variables**
- Ensure to add required environment variables in a `.env` file:
  - **MONGO_URI**: MongoDB connection string.
  - **GOOGLE_MAPS_API_KEY**: API key for Google Maps integration.

---

## **How to Test Responsiveness**
1. Open the application in your browser.
2. Use the developer tools (`Ctrl + Shift + I` or `Cmd + Shift + I`) to switch to mobile view.
3. Resize the browser window to test on various screen sizes (mobile, tablet, desktop).

---

## **Future Enhancements**
- Integration with live APIs for real-time cab pricing and rental availability.
- Enhanced user profiles with saved preferences and trip history.
- Push notifications for trip-sharing and rental updates.

---

## **Contributors**
- **Riya Kumari** - Backend Developer and API integration
- **Nagashree NS** - Backend Developer and API integration
- **Moazam Showkat** - Frontend Developer and UI/UX developer
- **Siddharth Kannan** - Frontend Developer and UI/UX developer
 
