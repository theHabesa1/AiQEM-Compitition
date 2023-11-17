
# AiQem ToDo App

This project was developed for the AiQem competition as a ToDo application. Please note that it is not intended for real-life production use and is provided as a demonstration for the competition.

## Deployment

This project has been deployed on the following platforms:

- [Vercel](https://ai-qem-compitition-zon2.vercel.app/)
- [Netlify](https://main--aiqemcomp-yaredabera.netlify.app/)

Feel free to check out the deployed versions for a live demonstration.

## Tech Stack

- React
- Redux Toolkit
- Material-UI
- React Beautiful DND

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/theHabesa1/aiqem-todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd aiqem-todo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   If you encounter any dependency resolution issues, try using the `--legacy-peer-deps` flag:

   ```bash
   npm install --legacy-peer-deps
   ```

## Running the App

Once the dependencies are installed, you can run the app locally:

```bash
npm start
```

The app will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

## Challenges During This Task 🤔

I experienced some dependency issues initially. Additionally, I attempted to enhance my UI using [Driver.js](https://driverjs.com/) to make it more understandable for users. I successfully managed to integrate it by reading the documentation and exploring some repositories. 🚀

## Local Storage 🗃️

To ensure that users' tasks persist even after refreshing the page, the application utilizes the browser's local storage. Here's how the tasks for Todo, In Progress, and Done are saved:

1. **Task Storage Structure:**
   - Each task is stored as an object with properties such as `id`, `done`, `inProgress`, and `ToDo`.
   - The tasks for Todo, In Progress, and Done are saved separately in the local storage.

2. **Saving Tasks:**
   - Whenever a task is added, updated, or moved between columns, the application updates the respective slice in the Redux store.
   - After each update in the Redux store, the entire state is saved to the local storage.

3. **Retrieving Tasks:**
   - Upon loading the application, it checks the local storage for existing tasks.
   - If tasks are found, they are loaded into the respective Redux slices, ensuring the user sees their previous tasks.

### Viewing Local Storage in Your Browser 🕵️‍♂️

Follow these steps to view local storage in your browser:

1. **Google Chrome:**
   - Right-click on your webpage and select "Inspect" or press `Ctrl+Shift+I`.
   - Go to the "Application" tab.
   - On the left sidebar, under "Storage," you'll find "Local Storage." Click on your domain to view stored tasks.

2. **Mozilla Firefox:**
   - Right-click on your webpage and select "Inspect Element" or press `Ctrl+Shift+I`.
   - Go to the "Storage" tab.
   - On the left sidebar, under "Local Storage," you'll find your domain. Click to see the stored tasks.

3. **Microsoft Edge:**
   - Right-click on your webpage and select "Inspect" or press `Ctrl+Shift+I`.
   - Go to the "Application" tab.
   - On the left sidebar, under "Storage," you'll find "Local Storage." Click on your domain to access stored tasks.

By following these steps, you can easily view and manage the tasks stored in your browser's local storage. Happy organizing! 🌐📊

## Acknowledgments

This project was created as part of the AiQem competition. If you encounter any issues or have questions, feel free to reach out to me @ yaredabera215@gmail.com

---







