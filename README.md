# MikeW.io

This is the repo where I will be developing the new design of MikeW.io

## Useful commands

* Make sure you are logged in into the correct account with `gcloud config configurations activate <name>`, to know which configs are use `gcloud config configurations list`
* To deploy to appengine use `gcloud app deploy` in the django folder.
* This project ** DOES NOT ** need to upload static content, in case it does see **Using a google storage bucket** after running `manage.py collectstatic`. The static content is uploaded with the deployment.

## Using a google storage bucket

first make sure you are logged in into the correct account with `gcloud config configurations activate <name>`, to know which configs are use `gcloud config configurations list`

0. Make sure there is not an extra folder inside the `static` folder of each app
1. first run `./manage.py collectstatic`
2. upload the static files to the bucket with `gsutil rsync -R static/ gs://<your-gcs-bucket>/static` it sometimes will be necesary to change the `rsync` option because sometimes it will delete the cors file
3. make them publicly available with `gsutil defacl set public-read gs://<your-gcs-bucket>`
4. perhaps it will be necesary to change the cors settings, with `gsutil cors set cors-json.file.json gs://tg-static` or look [here](https://cloud.google.com/storage/docs/xml-api/put-bucket-cors)

## About DB

* The app is connecting directly to google cloud SQL (even in localhost if `DEBUG` is `False` due to some error with permisions with the cloud_sql_proxy file)
* In order to run the django project using google's db (or the production db) change `LOCAL_DB` to `False` in `settings.py` and leave `DEBUG` alone, only change it to `True` when the project is about to be deployed.

### DB tested
1. SQLite: Google App Engine does not grant access to the system files
1. Heroku Postgres: Google App Engine in Standard Environment doest not allow the libraries used to connect to Postgres
1. Heroku ClearDB: Error with Unknown hosts (i.e. the host from heroku), I didn't find a way to solve that problem
1. Google Cloud SQL: Working but it has a problem with authorization for some actions using the sql proxy file

### Errors with migrations using google's db

* One error is the classic "table already exists" trying to run `manage.py migrate`: The only solution I've found is to create a new db and change it in `settings.py`. (if there is another solution please write it here).


## How to write posts

### For all
* the `ul` tag must always be outside of the `p` tag
* the `img` elements must be outside the `section` tag or not depending on if you want it full size or half size

### For Writings

### For Projects

### For blogs
