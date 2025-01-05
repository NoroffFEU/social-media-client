
# Workflow CA - Hibo

## 🍴 Fork the Project
- Fork the project repository to your GitHub account.
- Create a new branch called `workflow`.

## 🔧 The project is Configurated with: 
- ESLint, Prettier, and commit hooks to ensure consistent coding standards.
- GitHub Actions workflows for build, deploy, and testing if required.

*Want to learn more?* Check out the [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and [GitHub Actions](https://docs.github.com/en/actions) documentation.

## ⚙️ Environment Variables

1. Copy `.env.example` to `.env`.
   ```bash
   cp .env.example .env
   ```
2. Fill in the required values in the `.env` file:

   - `LOGIN_EMAIL`: Your login email.
   - `LOGIN_PASSWORD`: Your login password.

   Example:
   ```env
   LOGIN_EMAIL=name@stud.noroff.no
   LOGIN_PASSWORD=password123
   ```

---

## 📦 Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js**: Version 14 or later.
- **npm**: Version 6 or later.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/hah98/social-media-client.git
   ```

2. Navigate to the project directory:
   ```bash
   cd social-media-client
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## 🚀 Running the Project

To start the project, use the following commands:

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local server URL.

---

## 🐛 Record Bugs
- You can record any bugs found in this project in the **Issues** tab of the repository.
- **How to Report a Bug:**
  1. Go to the "Issues" tab in the repository.
  2. Click on "New Issue."
  3. Provide a clear description, steps to reproduce, and any relevant screenshots.

---

## 💻 Configure the Project for Testing

### Testing Setup
- The project is configurated for Jest (unit testing) and Cypress (end-to-end testing).


### Running Tests

To run the Jest tests:
```bash
npm run test:jest
```

To run the Cypress tests:
```bash
npm run test:cypress
```

## 📊 Workflow Status Badges

![Build and Deploy](https://github.com/hah98/social-media-client/actions/workflows/pages.yml/badge.svg)
![Tests](https://github.com/hah98/social-media-client/actions/workflows/test.yml/badge.svg)
