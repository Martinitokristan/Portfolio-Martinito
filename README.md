# React Portfolio

A modern, minimalist portfolio built with React, Vite, and CSS Modules/Grid.

## How to Run

1.  **Install Node.js**: Ensure you have Node.js installed on your computer.
2.  **Install Dependencies** (if you haven't already):
    ```bash
    npm install
    ```
3.  **Start the Development Server**:
    ```bash
    npm run dev
    ```
4.  **View locally**: Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

## Customization

### Changing the Profile Photo
1.  Save your photo in the `src/assets` folder (e.g., `my-photo.jpg`).
2.  Open `src/components/Sidebar.jsx`.
3.  Update the import line at the top:
    ```javascript
    // Change this line
    import profileImg from '../assets/profile.png';
    
    // To your new file name
    import profileImg from '../assets/my-photo.jpg';
    ```

### Updating Content
- **Sidebar Info**: Edit `src/components/Sidebar.jsx` to change your name, role, hobbies, or tech stack.
- **Experience**: Edit the `experiences` array in `src/components/Experience.jsx`.
