"""
Django settings for mikew project.

Generated by 'django-admin startproject' using Django 1.11.4.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PROJECT_DIR  = os.path.dirname(__file__)

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'm1v$m88tdm5s#5hq&opkowb*1h^0@%q80%ho$1nv#jcrh9ur!3'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
LOCAL_DB = False

ALLOWED_HOSTS = ['*']
#if DEBUG == True:
    #ALLOWED_HOSTS = ['192.168.0.7', 'localhost', '192.168.43.97']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'website',
    'rest_framework',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'mikew.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'mikew.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

# DATABASE Config in case of using sqlite
#DATABASES = {
#    'default': {
#        'ENGINE': 'django.db.backends.sqlite3',
#        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#    }
#}

# Database config in case of using a postgres db in heroku, the config is working in my heroku acoount
#DATABASES = {
#	'default': {
#		'ENGINE': 'django.db.backends.postgresql_psycopg2',
#		'NAME' : 'dssupmqlcn1bs',
#		'HOST' : 'ec2-23-21-184-113.compute-1.amazonaws.com',
#		'USER' : 'okneqkpydpbzmd',
#		'PASSWORD' : '81a1a8711e3606f5873d87f2f7ad93ee584421e1ac9a4e94db55cbffd2f67c7c',
#		'PORT': '5432',
#	}
#}

# Database config in case of useing a mysql runing by cleardb in heroku, working with my account
#DATABASES = {
	#'default': {
		#'ENGINE': 'django.db.backends.mysql',
		#'NAME' : 'heroku_abea5b651bfcd51',
		##'HOST' : 'us-cdbr-iron-east-05.cleardb.net',
                #'HOST': '107.20.141.193',
		#'USER' : 'bdebacf9d08d3a',
		#'PASSWORD' : '6205e1d3',
	#}
#}

if os.getenv('SERVER_SOFTWARE', '').startswith('Google App Engine'):
    # Running on production App Engine, so connect to Google Cloud SQL using
    # the unix socket at /cloudsql/<your-cloudsql-connection string>
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'HOST': '/cloudsql/mikew-178315:us-central1:mikew-mysql',
            'NAME': 'mikew2',
            'USER': 'mikew-mysql-user',
            'PASSWORD': 'z^cq?crVBdS8z6!D',
        }
    }
else:
    # Running locally so connect to either a local MySQL instance or connect to
    # Cloud SQL via the proxy. To start the proxy via command line:
    #
    #     $ cloud_sql_proxy -instances=[INSTANCE_CONNECTION_NAME]=tcp:3306
    #
    # See https://cloud.google.com/sql/docs/mysql-connect-proxy

    if not LOCAL_DB or DEBUG == False:
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.mysql',
                'HOST': '104.154.75.132',
                'PORT': '3306',
                'NAME': 'mikew2',
                'USER': 'mikew-mysql-user',
                'PASSWORD': 'z^cq?crVBdS8z6!D',
            }
        }

    else: 
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
            }
        }
# [END db_setup]


# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(PROJECT_DIR, 'static')

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    ),
    'UNICODE_JSON': False,
}
