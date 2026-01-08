# AiMenu

AiMenu is an Angular application (generated with Angular CLI v20.3.5) that provides a menu and ordering interface with authentication, admin features, and a Tailwind CSS-based UI.

Quick highlights
- Angular 20 with standalone components and signals
- Tailwind CSS + PostCSS for styling
- JWT-based authentication patterns (jwt-decode)
- Strict TypeScript settings and Karma/Jasmine unit tests

---

## Table of contents
- Prerequisites
- Quick start
- Development workflow
- Configuration (environments & API)
- Project structure & architecture
- Routing & auth
- Styling (Tailwind & PostCSS)
- Testing
- Troubleshooting
- Contributing
- Acknowledgements & License

---

## Prerequisites
- Node.js (LTS) — minimum Node 18+ recommended for Angular 20.
- npm (bundled with Node) or an alternative package manager (yarn, pnpm).
- (Optional) Angular CLI for some convenience commands: npm install -g @angular/cli

You can check versions with:
```bash
node -v
npm -v
```

---

## Quick start

Clone the repository, install dependencies, and start the dev server:

```bash
git clone https://github.com/Muratcany001/AiMenu.git
cd AiMenu
npm install
npm start
```

Open your browser at: http://localhost:4200/

Available npm scripts (from package.json):
- npm start — ng serve (development server)
- npm run build — build the project (default uses production configuration)
- npm run watch — build with --watch using development configuration
- npm test — run unit tests (Karma + Jasmine)

---

## Development workflow

Run a development server:
```bash
npm start
```

Build for production:
```bash
npm run build
# or explicitly:
npx ng build --configuration production
```

Build and watch (development):
```bash
npm run watch
# or
npx ng build --watch --configuration development
```

Serve a built `dist/` folder with a static server (example):
```bash
npm run build
npx serve dist/AiMenu
```

---

## Configuration (environments & API)

This project uses Angular environment files in `src/environments/`. Default environment file used for production is `src/environments/environment.ts`. During development, file replacements may be in place (see `angular.json`).

Example from repository:
- src/environments/environment.ts:
  - production: true
  - apiUrl: https://localhost:7276/api/

To change the backend API base URL, edit the appropriate environment file (e.g., `src/environments/environment.development.ts` or `src/environments/environment.ts`) and update `apiUrl`.

Note: angular.json contains `fileReplacements` for development builds so the appropriate environment file is used when running `ng serve` with the development configuration.

---

## Project structure & architecture (high level)

Key folders:
- src/app/ — application source
  - core/ — global services, guards, interceptors (auth guard & auth interceptor)
  - features/ — feature areas (auth, menu, orders)
    - auth/ — login, register, DTOs, auth service
    - menu/ — menu components (admin & public)
    - orders/ — order components & DTOs
  - shared/ — reusable components (header, footer), pipes, directives
  - app.ts — root standalone component
  - app.routes.ts — route definitions
  - app.config.ts — ApplicationConfig providers (router, http client, zone change detection)
- src/environments/ — environment-specific configuration
- src/styles.css — global Tailwind + custom styles
- tailwind.config.js, postcss.config.js — styling toolchain

Notes:
- The application uses Angular's standalone component model with `bootstrapApplication`.
- Signals are used in at least the root component (see `app.ts`).
- HTTP client is provided via `provideHttpClient` and interceptors are wired using Angular's DI.

---

## Routing & auth

Routes are defined in `src/app/app.routes.ts`. Important routes include:
- /menuList — public menu list (default)
- /menuItem — menu item detail
- /dailyMenu — daily menu
- /login — login form
- /register — user registration
- /adminMenu — admin area (protected by `authGuard`)
- /addItem — add menu item (admin)
- /orders — orders page

Authentication:
- AuthService (src/app/features/auth/services/auth-service.ts) uses environment.apiUrl + 'users/' and exposes `login` and `register` methods.
- An auth guard (`authGuard`) protects admin routes. JWT decoding utility (jwt-decode) is available in the project for token parsing.
- Typical endpoints used by the app:
  - POST {apiUrl}users/login
  - POST {apiUrl}users/createUser

Example login payload:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Example curl:
```bash
curl -X POST https://localhost:7276/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

Adjust the API base URL if your backend runs on a different origin.

---

## Styling (Tailwind CSS + PostCSS)

Tailwind is configured in `tailwind.config.js` and integrated via `postcss.config.js`. Global styles and Tailwind directives are in `src/styles.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Custom global styles and utility classes are also declared in `src/styles.css`. To add Tailwind utilities or extend the theme, edit `tailwind.config.js` and the global CSS.

Recommended editor extension: Tailwind CSS IntelliSense (for class autocomplete).

---

## Testing

This project uses Karma + Jasmine. To run unit tests:
```bash
npm test
```

Karma configuration is handled through Angular build tooling. Tests live alongside components under `*.spec.ts` files.

---

## Troubleshooting & common issues

- CORS errors when calling the API:
  - Ensure your backend allows requests from `http://localhost:4200` (or the host you use).
- HTTPS backend on localhost:
  - If your API uses HTTPS with a self-signed cert (e.g., https://localhost:7276), your browser or curl may block requests. For local development, consider using a dev certificate or configure your browser to trust it.
- Environment mismatch:
  - If the app points to the wrong API URL, verify `src/environments/*.ts` and `angular.json` file replacements.
- Angular CLI or Node mismatches:
  - Use Node 18+ and the Angular CLI/version matching Angular 20 for best compatibility.
- Strict TypeScript errors:
  - This project uses strict compiler options; address type errors or loosen settings in `tsconfig.json` if necessary (not recommended for production-quality code).

---

## Contributing

Guidelines for contributors:
1. Fork the repository and create a feature branch: git checkout -b feat/your-feature
2. Follow existing code patterns (standalone components, strong typing).
3. Add or update unit tests for meaningful logic.
4. Run tests and linters locally:
   - npm install
   - npm test
5. Open a pull request with a clear description of changes.

Recommended VS Code extensions:
- Angular Language Service
- TypeScript
- Tailwind CSS IntelliSense
- Prettier (project contains Prettier settings)

---

## Acknowledgements & License

This README was written for the AiMenu project. The project uses open-source libraries including:
- Angular
- Tailwind CSS
- jwt-decode
- RxJS

License: This repository does not include an explicit license file. If you plan to reuse or publish the project, add a LICENSE file describing the chosen license (MIT, Apache-2.0, etc.).

---

If you want, I can:
- Add a CONTRIBUTING.md and ISSUE_TEMPLATE.md,
- Expand the architecture section with component maps,
- Add sample environment files for development and production.

Happy hacking!
