# 📘 Clerk VSCode Snippets for Next.js

[![Clerk Badge](https://img.shields.io/badge/Clerk-Next.js-blue)](https://www.clerk.dev/)
[![Next.js Badge](https://img.shields.io/badge/Next.js-13.0.0-black)](https://nextjs.org/)

This extension provides a collection of snippets for Clerk components and setups in a Next.js application.

## ⚙️ Installation

1. Open VSCode.
2. Go to Extensions.
3. Search for "Clerk Snippets for Next.js" and install.

## 📝 Snippets

This table provides a comprehensive overview of the Clerk snippets available for Next.js. Each snippet is designed to streamline the development process, ensuring efficient and consistent code integration.

### Clerk Snippets for Next.js

| No. | Prefix                  | Description                                               |
|-----|-------------------------|-----------------------------------------------------------|
| 1.  | `clerkImport`           | Inserts a Clerk import with cursor placement for components. |
| 2.  | `clerkUp`               | Sets up a Clerk SignUp page in Next.js.                   |
| 3.  | `clerkIn`               | Sets up a Clerk SignIn page in Next.js.                   |
| 4.  | `clerkOutBtn`           | Inserts the `<SignOutButton/>` component.                 |
| 5.  | `clerkUserBtn`          | Inserts the `<UserButton/>` component.                    |
| 6.  | `clerkUserProfile`      | Inserts the `<UserProfile/>` component.                   |
| 7.  | `clerkOrgP`             | Inserts the `<OrganizationProfile/>` component.           |
| 8.  | `clerkOrgC`             | Inserts the `<CreateOrganization/>` component.            |
| 9.  | `clerkOrgS`             | Inserts the `<OrganizationSwitcher/>` component.          |
| 10. | `clerkMiddleware`       | Sets up the authMiddleware from Clerk in Next.js.         |
| 11. | `clerkEnv`              | Sets up Clerk environment variables in Next.js.           |
| 12. | `clerkAuth`             | Uses the auth() helper function with Clerk in Next.js.    |
| 13. | `clerkCurrentUser`      | Fetches the current user using Clerk in Next.js.          |
| 14. | `clerkGetAuthAPI`       | Uses the getAuth() helper with Clerk in a Next.js API route. |
| 15. | `clerkClientAPI`        | Interacts directly with the Clerk API in a Next.js API route. |
| 16. | `clerkUseAuth`          | Uses the `useAuth` hook to access the current auth state in Next.js. |
| 17. | `clerkUseUser`          | Uses the `useUser` hook to access the current user data in Next.js. |
| 18. | `clerkProvider`         | Wraps your Next.js application with the `<ClerkProvider>` component. |
| 19. | `clerkUseOrg`           | Snippet for accessing the current active organization's attributes using Clerk in Next.js. |
| 20. | `clerkUseOrgList`       | Snippet for accessing the list of available Organizations and OrganizationMemberships using Clerk in Next.js.|
| 21. | `clerkUserListOrd`      | Snippet for retrieving an ordered and filtered list of users using Clerk in Next.js. |
| 22. | `clerkGetUser`          | Snippet for retrieving a single user by their ID using Clerk in Next.js. |
| 23. | `clerkUpdateUser`       | Snippet for updating a user's attributes using Clerk in Next.js. |
| 24. | `clerkDeleteUser`       | Snippet for deleting a user with a given ID using Clerk in Next.js. |
| 25. | `clerkGetUserCount`     | Snippet for retrieving the total number of users or a filtered count using Clerk in Next.js. |



## 🛠 Usage

Type the desired prefix from the table above in a JavaScript or React file in VSCode. The snippet will suggest the corresponding setup or component. Upon selecting it, the provided code will be inserted into the file.


### 🤝 How to Contribute


We welcome contributions from everyone. Whether you're a seasoned developer or just getting started, your insights and skills can make a difference. Please read our [contributing guide](CONTRIBUTING.md) to ensure a smooth and efficient process. The guide provides detailed instructions and best practices that align with our project's standards and code of conduct.



### 🙏 **Acknowledgment**:


A special thank you to the following projects and teams:

- **Next.js**: For providing a robust framework that enables efficient React development and server-side rendering. Their comprehensive documentation and active community have been invaluable. [Visit Next.js](https://nextjs.org/)

- **Clerk**: For their user authentication and management solutions that seamlessly integrate with modern applications. Their tools and support have greatly simplified the authentication process. [Visit Clerk](https://clerk.com/)

