<p align="center"><a href="https://github.com/raulbonifacio/sigcorp-test" target="_blank"><img src="https://github.com/raulbonifacio/sigcorp-test/blob/master/screenshot.png" width="800"></a></p>

## SIGCORP - Interview Test

The SIGCORP interview test implemented with React.Js, PHP (with Laravel 8) to be used with the MySQL database.

### How to test it?

1. Before any step, make sure you have the dependencies installed. Run:

	composer install

2. First, edit the *.env* file with your database configuration.

	DB_CONNECTION=mysql
	DB_HOST=127.0.0.1
	DB_PORT=3306
	DB_DATABASE=*example_database*
	DB_USERNAME=*example_username*
	DB_PASSWORD=*example_password*

3. Now run the project migrations by running the following command. Run:

	php artisan migrate

4. At this point you should be able to start the application and test it. To start the development server, run:

	php artisan serve



