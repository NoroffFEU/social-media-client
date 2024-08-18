# Workflow CA

This repository is a fork of the Noroff Social Media Client repo.

## Description

The task was to use this existing repository and improve its quality by testing with Cypress and Jest.

- Cypress
- Jest
- ESlint
- Prettier
- Husky

## Status

[![Automated E2E Testing](https://github.com/renahashimi/Workflow-CA/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/renahashimi/Workflow-CA/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/renahashimi/Workflow-CA/actions/workflows/test.yml/badge.svg)](https://github.com/renahashimi/Workflow-CA/actions/workflows/test.yml)

[![Deploy static content to Pages](https://github.com/renahashimi/Workflow-CA/actions/workflows/pages.yml/badge.svg)](https://github.com/renahashimi/Workflow-CA/actions/workflows/pages.yml)

## Installation & Running

1. Clone the repo

```bash
git clone https://github.com/renahashimi/Workflow-CA.git
```

2. Install the dependencies

```bash
npm install
```

3. Run Build/SASS

```bas
npm run start
```

```bas
npm run build
```

## Testing

Jest Test

```bash
npm run test-unit
```

Cypress Test

```bash
npm run test-e2e
```

Both Cypress & Jest Test

```bash
npm run test
```
