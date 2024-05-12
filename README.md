<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Finance tracker</h1>
    <p align="center">
    <br />
    <a href="https://finance-tracker-bay.vercel.app/">View Demo</a>
     <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

The "Finance tracking" app allows users to manage their finances with ease. It allows users to add, delete and track their income and expense. In addition, users can use the chart generation function to visualise their income and expense for specific income sources.

Features:
* Adding and deleting income and expenses assigned to a user account
* Displays charts that show an analysis of the user's income and expense for a given source. 
* Displays lists of recently added expenses and income
* Easy login via Google or Github account
* Responsive deisgn

### Built With:

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nextjs,prisma,postgres,tailwind" />
  </a>
  <p  align="center">| NEXTJS | PRISMA | POSTGRES | TAILWIND |</p>
</p>

### Deployed on: 

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=supabase,vercel" />
  </a>
  <p  align="center">| SUPABASE | VERCEL |</p>

</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

 <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs" />
</a>
  
  <a href="https://nodejs.org/en/download">Node download</a>

### Installation

1. Clone the repo
   
   ```sh
   git clone https://github.com/Aegaar/finance-tracker.git
   ```
3. Install NPM packages
   
   ```sh
   npm install
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

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
