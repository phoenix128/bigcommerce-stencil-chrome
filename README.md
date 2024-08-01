# BigCommerce Stencil Context Analyzer

## Overview

BigCommerce Stencil Context Analyzer is a Chrome extension designed to aid developers working with BigCommerce Stencil themes.
This extension provides a contextual analysis tool, allowing developers to easily inspect and debug the context in local development environments.

## Features

- Context inspection for BigCommerce Stencil themes.
- Display detailed context data directly within the Chrome DevTools.
- Easy navigation and search functionality to find specific context variables.


## Usage

1. Download the extension from the chrome store
2. Open your BigCommerce local development environment in Chrome.
3. Open the Chrome DevTools by pressing `F12` or `Ctrl+Shift+I`.
4. Navigate to the **BigCommerce Stencil** tab.
5. Use the search bar to find specific context variables.
6. Explore the context data as needed for debugging and development purposes.

## Development for contribution or customization

If you wish to contribute to this project, follow the instructions below to get started.

### Prerequisites

- Node.js
- npm

### Building the Extension

1. Install the dependencies:
    ```sh
    npm install
    ```

2. Build the project:
    ```sh
    npm run build
    ```

3. Reload the extension in Chrome:
    - Go to `chrome://extensions/`
    - Set development mode
    - Click on "Load unpacked" and select the directory containing the code from this repo
    - Click on the **Reload** button for the BigCommerce Stencil Context Analyzer extension.

### Running in Development Mode

To run the extension in development mode with live reloading:

1. Start the development server:
    ```sh
    npm start
    ```

2. Start a local stencil theme development on port 3000
3. Open Chrome and navigate to http://localhost:4000/

## Contributing

Contributions are welcome! Please submit any bugs, issues, or feature requests through the project's GitHub issue tracker.

## License

Distributed under the MIT License. See LICENSE.txt for more information.


