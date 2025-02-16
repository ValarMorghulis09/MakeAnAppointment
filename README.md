# MakeAnAppointment - Frontend (WIP)

**MakeAnAppointment** is a web application designed to streamline the appointment scheduling process for car retailers. The frontend allows users to choose a car brand, location, car condition, specific vehicle, and a salesperson. After making the selection, users receive a confirmation message and an invite to add the appointment to their calendar. The salesperson is also notified with a calendar invite.

## Features

- **Brand Selection**: Users can select a car brand from a list.
- **Location Selection**: Choose the preferred dealership location.
- **Car Condition**: Specify whether the car is new, used, etc.
- **Vehicle Selection**: Select a specific car model.
- **Salesperson Assignment**: Choose a salesperson for the appointment.
- **Appointment Confirmation**: Receive confirmation and calendar invite.
- **Salesperson Notification**: The assigned salesperson gets a calendar invite.

## Technologies Used

- **Frontend**: React.js (with hooks, state management)
- **Build Tool**: Vite
- **Styling**: CSS, Chakra UI for components
- **Routing**: React Router for navigation

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps to Run the Application Locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ValarMorghulis09/MakeAnAppointment
   cd MakeAnAppointment
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm run dev
   ```

4. **Open the Application:**

   Your app should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Navigate through the Appointment Process**: Users will follow a step-by-step process to make their appointment:
    - Select a car brand
    - Choose a dealership location
    - Pick the car condition
    - Choose the vehicle 
    - Select the available sales person at the time you want
    - Fill in the form 
2. **Confirmation**: Once the user finalizes their choices, they receive a confirmation message and an option to add the appointment to their calendar.
3. **Salesperson Notification**: The salesperson is notified via calendar invite for the scheduled appointment.



## Contributing

We welcome contributions to improve the application. To get started:

1. **Fork the Repository**: Click on the "Fork" button in the top-right corner of the page.
2. **Clone Your Fork**:

   ```bash
   git clone https://github.com/yourusername/MakeAnAppointment.git
   ```

3. **Create a New Branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**: Implement your feature or fix.
5. **Commit Your Changes**:

   ```bash
   git add .
   git commit -m "Add your commit message"
   ```

6. **Push Your Changes**:

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**: Go to the original repository and click "New Pull Request".

## License

This project is licensed under the MIT License.

## Acknowledgments

- **Chakra UI**: Used for styling and UI components.
- **React.js**: For building the frontend.
- **Vite**: For fast development build tooling.
