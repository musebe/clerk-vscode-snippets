# Makefile Usage Guide

The provided `Makefile` is designed to streamline the development process by enforcing commit message conventions, running tests, and ensuring patches are applied before pushing to the `main` branch.

## Prerequisites

- Ensure you have `make` installed on your system. Most UNIX-based systems come with `make` pre-installed.
- The `Makefile` should be located in the root directory of your project.

## Available Commands

### 1. Committing with a Convention: `make commit`

This command will present you with a menu to select the type of commit you're making. After selecting the type, you'll be prompted to enter the commit message. This ensures that the commit message follows a convention like `type: message`.

Example:

```
$ make commit
Select commit type:
1) feat - New feature
2) fix - Bug fix
...
Enter number (1-7): 1
Enter commit message: Added a new login feature
```

This will result in a commit with the message `feat: Added a new login feature`.

### 2. Running Tests: `make test`

This command will run the tests for your project.

```
$ make test
Running tests...
```

### 3. Pushing to Main: `make push-main`

Before pushing to the `main` branch, this command ensures that:

- You're on the `main` branch.
- All tests pass.
- All necessary patches have been applied.

```
$ make push-main
Running tests...
Have you applied all necessary patches? (yes/no): yes
```

### 4. Commit and Push: `make all`

This command combines the commit and push commands. It's a quick way to commit your changes with the proper convention and then push them to the `main` branch, ensuring all checks are met.

```
$ make all
```
