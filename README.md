# React Word Game App

This is a simple React application that demonstrates a word game where letters are randomly hidden.

## Getting Started Locally

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation
1. Navigate to the project directory:
   ```
   cd c:\Users\Dipika Agashe\reactWebApp
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running Locally
1. Start the development server:
   ```
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will reload automatically when you make changes.

### How to Use
- Enter a word in the input field.
- Click "Generate Missing Letters" to randomly hide some letters.
- The word will display with hidden letters shown as underscores.

## Deploying to Azure Web App Service

### Prerequisites
- Azure subscription
- Azure CLI or Azure Portal access
- Git installed

### Deployment Steps

#### Option 1: Using Azure Portal with GitHub Integration
1. Create a new App Service (Windows or Linux)
2. In App Service Settings, go to **Deployment Center**
3. Connect your GitHub repository
4. Azure will automatically run `npm install` and `npm run build`
5. The `build` folder is automatically served

#### Option 2: Using Azure CLI
```bash
# Build locally first
npm run build

# Create a resource group
az group create --name myResourceGroup --location eastus

# Create an App Service plan
az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku B1 --is-linux

# Create the web app
az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name myReactWebApp

# Deploy from local build
az webapp deployment source config-zip --resource-group myResourceGroup --name myReactWebApp --src build/
```

#### Option 3: Using Git Push Deployment
```bash
git remote add azure <your-azure-repo-url>
git push azure main
```

### Important Notes for Azure Deployment

1. **build Folder**: The app must be served from the `build` folder (production build), not from source files
2. **web.config**: Included for IIS URL rewriting (Windows-based App Service)
3. **Node Version**: Ensure App Service uses Node.js 14+ 
4. **App Settings**: Add the following if needed:
   - `WEBSITE_NODE_DEFAULT_VERSION`: 18.x (or your preferred version)

### Troubleshooting

**Error: react-scripts: Permission denied**
- This happens when `npm install` wasn't run or node_modules is missing
- Solution: Ensure deployment includes running `npm install` before building

**Error: Cannot find module 'react-scripts'**
- Check that `package.json` has `react-scripts` in dependencies
- Try: `npm install react-scripts`

**White screen or 404 errors**
- Make sure you're serving from the `build` folder, not `src` folder
- Check that `web.config` is present (for Windows-based services)

## Build for Production
```
npm run build
```

This builds the app for production to the `build` folder and optimizes the build for the best performance.