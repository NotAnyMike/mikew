# MikeW.io

This is the repo where I will be developing the new design of MikeW.io

## Useful commands

* Make sure you are logged in into the correct account with `gcloud config configurations activate <name>`, to know which configs are use `gcloud config configurations list`

## About DB

* The app is connecting directly to google cloud SQL (even in localhost if `DEBUG` is `False` due to some error with permisions with the cloud_sql_proxy file)

### DB tested
1. SQLite: Google App Engine does not grant access to the system files
1. Heroku Postgres: Google App Engine in Standard Environment doest not allow the libraries used to connect to Postgres
1. Heroku ClearDB: Error with Unknown hosts (i.e. the host from heroku), I didn't find a way to solve that problem
1. Google Cloud SQL: Working but it has a problem with authorization for some actions using the sql proxy file


## How to write posts

### For all
* the `ul` tag must always be outside of the `p` tag
* the `img` elements must be outside the `section` tag

### For Writings

### For Projects

### For blogs
