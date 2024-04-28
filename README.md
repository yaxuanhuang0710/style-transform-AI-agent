### Set Up Env

Create

```sh
pip install virtualenv
virtualenv env_name
```



on mac -> RUN & QUIR

``` sh
source env_name/bin/activate
```

``` sh
deactivate
```

### Django

**Create a project**

``` sh
pip install Django
django-admin startproject backend .
```

**Run Server**

``` sh
python3 manage.py runserver
```

**Create New App**

```she
python3 manage.py startapp playground
```




# 之后再说的，上面是需要run的code

## tech stack:

Frontend: Next.js+tailwind CSS+ Javascript

Backend: Django (for Python)+ MongoDB

chatGPT API

deployment: AWS/Firebase(if running out of time) 


## structure
-frontend
-backend

how to run frontend? 
``cd frontend
run frontend: npm run dev``


how to run backend?
``python manage.py migrate //make migration
python manage.py runserver //run server``

