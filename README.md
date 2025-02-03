```markdown
# Image Gallery with Filters and Modal

This project is an image gallery that allows users to view images filtered by category (Nature, Tech, Art, or All). The images are displayed in a responsive grid layout with modals for viewing images in full size. It is built using React and Styled Components.

## Features
- **Responsive Layout:** The gallery adjusts based on the screen size:
  - 2 images per row on mobile devices
  - 3 images per row on tablets
  - 4 images per row on desktops
- **Filter by Category:** Users can filter images based on categories: Nature, Tech, Art, or view All images.
- **Modal View:** Clicking on an image opens it in a modal for a larger view.
- **Image Hover Effect:** Images have a hover effect where they zoom in slightly for better interaction.

## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/hhsksonu/ImageGallery-by-reactjs.git
cd image-gallery
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
This will run the app locally. Open `(http://localhost:5173/)` in your browser to view it.

## Folder Structure
- `src/`
  - `components/`
    - `ImageGallery.tsx`: Main image gallery component.
    - `Modal.tsx`: Modal component for displaying the full-size image.
  - `assets/`
  - `App.tsx`: Entry point of the application.
  - `index.tsx`: Renders the app to the DOM.
- `public/`
   - `images/`: Folder containing images for the gallery.
  - `index.html`: HTML template for the app.
- `styles/`
  - `ImageGallery.css`: CSS file containing styles for the gallery and responsiveness.

## Technologies Used
- **React:** JavaScript library for building user interfaces.
- **Styled Components:** CSS-in-JS library for styling the components.
- **React Modal:** Used for displaying images in a modal view.
- **CSS Grid:** Used for the responsive grid layout.

## Customization
- To add more images, simply add them to the `images/` folder in the `public/` directory and update the `images` array in `ImageGallery.tsx` with new image paths and categories.
- You can also customize the categories in the `FilterContainer` by modifying the categories array.

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Sections:
- **Project Overview:** Brief description of what the project is about and its features.
- **Installation Instructions:** Steps to clone the repository, install dependencies, and start the development server.
- **Folder Structure:** An overview of how the project is structured.
- **Technologies Used:** Mention of the technologies used in the project.
- **Customization:** Instructions on how to add or customize images and categories.
- **Contributing:** Steps for contributing to the project.
- **License:** Standard MIT License.

You can update the repository URL and other specific details (like your name) before uploading it to GitHub.
