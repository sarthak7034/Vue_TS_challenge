# Nuxt 3 TypeScript Scaffold

This is a project scaffold for a Nuxt 3 + Typescript application. Scaffolds are meant to help us to start new projects, Nutx 3 is a
frontend + backend ("fullstack") framework that natively enforces typed JavaScript ("TypeScript").

## Local Setup

1. Install the `node` version manager `nvm` by running:
    ```sh
    > curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    ```
2. Install the required `node` and `npm` version:
    ```sh
    > nvm install
    ```
3. Use the required `node` and `npm` version:
    ```sh
    > nvm use
    ```
4. Install a code editor (recommended: VS Code), [get it here](https://code.visualstudio.com/)
5. Install the `volar` extension to support `vue`, `nuxt` and `typescript` development help
    - for vs code: https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar
    - sublime LSP: https://github.com/sublimelsp/LSP-volar
    - vim: https://github.com/yaegassy/coc-volar
6. Enable "take over mode" for volar for this project.
    - documented here: https://github.com/johnsoncodehk/volar/discussions/471
    - for VS Code:
        1. Run (CMD/CTRL + SHIFT + P): Extensions: Show Built-in Extensions
        2. Find "TypeScript and JavaScript Language Features"
        3. Right click and select "disable for workspace"
        4. Reload the editor
        5. A message "Take over mode enabled" (or similar) should appear
7. Run `npm install`
8. Start:
    - the project: `npm run dev`
    - storybook: `npm run storybook`
