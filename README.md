# Workflow Course Assignment

## How to install

### Clone repository

```bash
git clone https://github.com/oyvindremme/social-media-client.git
```

### Install packages
```bash
npm install
```

**Note!** You might run into permission issues on Linux, please add --force if you're experiencing issues.

## Testing

### Unit testing

```bash
npm run test-unit
```

### E2E/Cypress

```bash
npm run test-e2e
```

**Note!** This opens a new window where you'll be seeing the test happening before your very own eyes! To simply run it in the CLI/terminal, run:

```bash
npm run test-e2e-cli
```

If you want to run both tests, simply run:

```bash
npm run test
```