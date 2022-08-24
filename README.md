# game-shop

Page to sell games like steam

## Requirements

- yarn >= 1.22.19
- NodeJS >= v16.0.0
- Git >= 2.25.1

## Installation

1. Clone the project with the command
   if you use SSH
   `git clone git@github.com:Edilberto-Vázquez/game-shop-ui.git`
   if you use HTTPS
   `git clone https://github.com/Edilberto-Vazquez/game-shop-ui.git`

2. Install dependencies in project path
   `yarn run bootstrap`
   This command installs all dependency requirements for all workspaces and packages for the project

3. Run the project with
   `yarn run start:dev`

## Step by step [How to add new package]

Define each of the UI components to be attached with the following command

`npx lerna create @game-shop-ui/[your-package-name]`.

### Then

So that the packages are in the scope of the app run

`npx lerna add @game-shop-ui/[your-package-name] --scope=game-shop-app`.

### Example

`npx lerna create @game-shop-ui/search`

## How to render your package into Next.js game-shop-app

You must add your package name into `const withTM ` to render it

```
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@game-shop/search",
]);
module.exports = withTM();

```

## Scripts

| Name              | Description                                 |
| ----------------- | ------------------------------------------- |
| `yarn bootstrap`  | install all dependencies and start symlinks |
| `yarn start:dev ` | run server in development mode              |
