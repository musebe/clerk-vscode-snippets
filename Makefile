# Variables
BRANCH=$(shell git rev-parse --abbrev-ref HEAD)

# Commit with a convention
commit:
	@echo "Select commit type:"
	@echo "1) feat - New feature"
	@echo "2) fix - Bug fix"
	@echo "3) chore - Chores, updates, and non-feature changes"
	@echo "4) docs - Documentation changes"
	@echo "5) style - Code style changes (formatting, etc.)"
	@echo "6) refactor - Refactoring code"
	@echo "7) test - Adding or updating tests"
	@read -p "Enter number (1-7): " selection; \
	case $$selection in \
		1) type="feat";; \
		2) type="fix";; \
		3) type="chore";; \
		4) type="docs";; \
		5) type="style";; \
		6) type="refactor";; \
		7) type="test";; \
		*) echo "Invalid selection"; exit 1;; \
	esac; \
	git status; \
	read -p "Do you want to stage all changes? (y/n): " stageall; \
	if [ $$stageall = "y" ]; then \
		git add .; \
	else \
		read -p "Enter specific files to stage (space-separated): " files; \
		git add $$files; \
	fi; \
	read -p "Enter commit message: " message; \
	git commit -m "$$type: $$message" || (echo "Commit failed. Please resolve the issues and try again." && exit 1)

# Run tests
test:
	@echo "Running tests..."
	npm test

# Apply patches and push to main
push-main:
	@make test
	@read -p "Have you applied all necessary patches? (yes/no): " patches; \
	if [ "$$patches" = "yes" ]; then \
		if [ "$(BRANCH)" = "main" ]; then \
			read -p "Select version bump: 1) Major 2) Minor 3) Patch: " version_selection; \
			case $$version_selection in \
				1) npm version major;; \
				2) npm version minor;; \
				3) npm version patch;; \
				*) echo "Invalid version selection"; exit 1;; \
			esac; \
			git push origin main; \
		else \
			echo "You are not on the main branch. Switch to main before pushing."; \
		fi \
	else \
		echo "Please apply the necessary patches before pushing."; \
	fi

# Default target
all: commit push-main

.PHONY: commit test push-main all