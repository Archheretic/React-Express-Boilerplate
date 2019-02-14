This boilerplate was a fast example I made as a student for some students, it's outdated so don't use it for other purposes then learning.

# React Express Boilerplate
## Table of Contents

- [Installation](#installation)
- [How to run](#how-to-run)
- [Getting a grasp of the project](#getting-a-grasp-of-the-project)

## Installation

Clone the project then install by typing the following in a terminal inside
the projects root directory:
```sh
$ npm install
```

If you you dont have mysql or mariadb install, do the follow:

Install mariadb or mysql

Examples on how to install
```sh
$ pacman -S mariadb
```

```sh
$ sudo apt-get install mariadb
```

After mariadb is installed type:
```sh
$ mysql -u root -p
```

If you do not use user root with a blank password then you have to edit
the respective values in the database config files.
To change the database settings go to [config](config).
 - [config/default.json](config/default.json) is the production database.
 - [config/dev.json](config/dev) is the development database.
 - [config/test.json](config/test) is for the test database.

Your terminal should now look like this:
```sh
 MariaDB [(none)]>
```

Copypaste the data from the databaseDev script located at [scripts/databaseDev.sql](scripts/databaseDev.sql)
paste into the terminal and click enter.

## How to run

First:
```sh
$ npm run build
```

When that's complete run:
```sh
$ npm start
```

If you're not developing on the React front end, skip the following instructions.

Then open another terminal window and type:
```sh
$ npm run hotload
```

When given the below prompt click enter (default Y)

```sh
Would you like to run the app on another port instead? (Y/n)
```

A hot loadable React instance should now run on Port 3001.

## Getting a grasp of the project

[src/index.js](src/index.js) is the entry point into the React frontend.
The rest of the React code is in [src/client](src/client).
[src/client/appRoutes.js](src/client/appRoutes.js) contains
the front end routes

Current working API routes

GET on:
[http://localhost:3000/api/v1/items](http://localhost:3000/api/v1/items)
use :id found above
http://localhost:3000/api/v1/items/:id
Example
[http://localhost:3000/api/v1/items/1](http://localhost:3000/api/v1/items/1)

POST on:
[http://localhost:3000/api/v1/items](http://localhost:3000/api/v1/items)


