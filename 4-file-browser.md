### File Browser

- Create a new git repository
- Create custom REST API server in NodeJS (framework or end solution is up to you)
- Write API handler so serve files and folder contents based on given path
  - API `/` corresponds to the root folder of your application, so `https://localhost:3101/Users/john/downloads` should return contents of `/Users/john/Downloads` folder
  - Feel free to either use path, query params or POST to pass current path to API
- Create website in React (framework of your choice) to display user's filesystem
  - Browser URL path corresponds to the filesystem path and should be updated accordingly (`/` === root of filesystem)
  - so `https://localhost:3001/Users/john/downloads` renders contents of `/Users/john/Downloads` folder
  - Clicking on folders should navigate into them
  - Use separate icons for folders and files
- You should be able to navigate between folders by clicking on them
- Use `..` to go up one level
- Any additional work (preview file contents, unit/integration/E2E tests are welcomed but not mandatory)
