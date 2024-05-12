<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Finance tracker</h1>
  <img src="https://github.com/Aegaar/finance-tracker/assets/117531984/ca5c8927-1720-41ea-a90c-2486888d9882"/>
    <p align="center">
    <br />
  <a href="https://finance-tracker-bay.vercel.app">View Demo</a>
     <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

The 'Finance tracking' app allows users to manage their finances with ease. It allows users to add, delete, and track their income and expenses. In addition, users can use the chart generation function to visualize their income and expenses for specific income sources.

Features:
* Adding and deleting income and expenses assigned to a user account
* Displays charts that show an analysis of the user's income and expenses for a given source.
* Displays lists of recently added expenses and income
* Easy login via Google or Github account
* Displays total expenses and incomes
* Responsive design

### Built With:

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nextjs,prisma,postgres,tailwind" />
  </a>
  <p  align="center">| NEXTJS | PRISMA | POSTGRES | TAILWIND | NEXTAUTH |</p>
</p>

### Deployed on: 

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=supabase,vercel" />
  </a>
  <p  align="center">| SUPABASE | VERCEL | </p>
  <p align="center"> <a href="https://finance-tracker-bay.vercel.app">View Demo</a></p>
</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

 <p align="center">
   <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs" />
  </a>
  </p>
  <p align="center">
  <a href="https://nodejs.org/en/download">Node download</a>
  </p>

### Installation

1. Clone the repo
   
   ```sh
   git clone https://github.com/Aegaar/finance-tracker.git
   ```
3. Install NPM packages
   
   ```sh
   npm ci
   ```
4. Navigate to the project directory
 
   ```sh
    cd finance-tracker
   ```
   
5. Create .env file in app directory
6. Create a new OAuth app in Github <a href="https://github.com/settings/applications/new">here</a> 1.Aplication Name: e.g. finance-tracker 2.Homepage URL: http://localhost:3000 3.Authorization callback URL: http://localhost:3000/api/auth/callback/github
7. In .env file create GITHUB_ID=[your_github_id] GITHUB_SECRET=[your_github_secret]
8. Create a new OAuth app in Google <a href="https://console.developers.google.com">here</a> 1.Create new project: e.g. finance-tracker  2.Choose Login data -> Create new Login data -> OAuth customer identifier -> Web application -> Set app name e.g. finance-tracker -> create  3.Authorised JavaScript sources: http://localhost:3000 4.Authorised redirection URIs: http://localhost:3000/api/auth/callback/google
9. In .env file create GOOGLE_ID=[your_google_id] GOOGLE_SECRET=[your_google_secret]
10. In .env file create NEXTAUTH_URL = http://localhost:3000 NEXTAUTH_SECRET = [your_secret]
11. Create postgresql databases locally or in the cloud. e.q. local https://www.postgresql.org/download | cloud https://supabase.com
12. In .env file create DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
13. Start the server
   ```sh
    npm run dev
   ```

<!-- USAGE EXAMPLES -->
## Usage

  <img src="https://github.com/Aegaar/finance-tracker/assets/117531984/b2c48798-2c2d-427e-950f-432ae1c0ac7f" />
  <img src="https://github.com/Aegaar/finance-tracker/assets/117531984/ca5c8927-1720-41ea-a90c-2486888d9882"/>
  <img src="https://github.com/Aegaar/finance-tracker/assets/117531984/3c935ef9-7fca-41e4-9248-72bce8e0dcc5" width="500px" />
  <img src="https://github.com/Aegaar/finance-tracker/assets/117531984/8e3a12bb-9a70-42e6-b026-581fd7af4fe8" width="500px"/>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
