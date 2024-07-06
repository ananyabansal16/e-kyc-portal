# E-KYC Portal Project
This full-stack web application project includes a Spring Boot back-end, an Angular front-end, and a MySQL database. The project allows the users to search for their e-KYC i.e., Know Your Customer profile, by logging in to the web application, and if the e-KYC doesn't exist already, then the user can also create their e-KYC by simply filling out a form and providing some required documents.

## Project Structure
The project is organized into the following directories:

**backend:** Contains the Spring Boot back-end code.

**frontend:** Contains the Angular front-end code.

**database:** Contains the MySQL database export file.

## Prerequisites
Before you begin, ensure that you have the following software installed on your machine:

-> **Java Development Kit (JDK)** - version 8 or later.

-> **Node.js** and **npm** (Node Package Manager).

-> **Angular CLI** - install globally using npm: `npm install -g @angular/cli`

-> **MySQL Database** - ensure you have MySQL installed and running.


## How to Run the Application

**1. Download and Extract the Zip File:**

-> Download the zip file containing the full-stack web application project.

-> Extract the contents of the zip file to a location of your choice on your local system.


**2. Back-end Setup:**

-> Navigate to the `Eclipse-SpringBoot-Gradle` directory.

```bash
cd /path/to/extracted/eKYC_Portal_Ananya_Bansal/Eclipse-SpringBoot-Gradle
```

-> Build the Spring Boot project using Gradle:

```bash
./gradlew build
```

-> Run the Spring Boot application in Eclipse.

-> The back-end will be accessible at `http://localhost:8081`.

**3. Front-end Setup:**

-> Navigate to the `Angular` directory.

```bash
cd /path/to/extracted/eKYC_Portal_Ananya_Bansal/Angular
```

-> Install the required dependencies:

```
npm install
```

-> Serve the front-end locally:

```
ng serve
```
-> The front-end will be accessible at `http://localhost:4200`.

**4. Database Setup (if applicable):**

Import `database_ekyc.sql` into your MySQL database to set up the necessary schema and data by using the following steps:

First, log in to MySQL as root or another user with sufficient privileges to create new database `ekyc`
```bash
mysql -u root -p
```

This command will bring you into the MySQL shell prompt. 

Next, create a new database with the following command. 
```mysql
CREATE DATABASE ekyc;
```

You’ll see this output confirming the database creation.

```Output
Query OK, 1 row affected (0.00 sec)
```

Then exit the MySQL shell by pressing CTRL+D. From the normal command line, you can import the dump file with the following command:
```
mysql -u username -p ekyc < database_ekyc.sql
```

`username` is the username you can log in to the database with
`database_ekyc.sql` is the data dump file to be imported, located in the current directory

If the command runs successfully, it won’t produce any output. If any errors occur during the process, MySQL will print them to the terminal instead. To check if the import was successful, log in to the MySQL shell and inspect the data. Select the new database with `USE ekyc;` and then use `SHOW TABLES;` or a similar command to look at some of the data.


**5. Configure Backend and Frontend URLs:**

In the front-end code, make sure to set the appropriate base URL for API requests. Open `frontend/src/environments/environment.ts` and `frontend/src/environments/environment.prod.ts` files and update the `apiBaseUrl` variable to point to the correct backend URL (e.g., http://localhost:8081).

**6. Testing the Application:**

Open a web browser and access the front-end URL: `http://localhost:4200`.
Interact with the application and ensure it works as expected.
Use Postman or any other API testing tool to test the back-end API endpoints.

## Troubleshooting
If you encounter any issues during the setup process, consider the following tips:

-> Ensure all the prerequisites are installed correctly and the versions match the requirements.

-> Check the console output for any error messages during the back-end or front-end setup.

-> Verify that the database connection details are correctly configured in the back-end `application.properties file`.

## License

The project is licensed under the MIT License - see the LICENSE file for details.

**© Ananya Bansal**

By submitting this individual project to **IFFCO-Tokio General Insurance Co. Ltd.**, you grant IFFCO-Tokio General Insurance Co. Ltd. the right to review and evaluate the code for the purpose of assessment and consideration for project evaluation. However, the ownership and intellectual property rights of the code remain with Ananya Bansal.

The project may contain third-party libraries or code with their respective licenses. Please review the licenses of those projects before using or distributing them.

This project is provided "as is" without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the project or the use or other dealings in the project.
# e-kyc
