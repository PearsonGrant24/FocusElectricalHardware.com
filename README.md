# FocusElectricalHardware.com

This is a simple e-commerce website built with Django.

## Project Summary

The website displays electrical products that users can add and remove to/from their cart while specifying the quantity of each item. Users can then enter their address and choose Stripe to handle the payment processing.

## Running this project

To get this project up and running you should start by having Python installed on your machine. It is advised that you create a virtual environment to store your projects dependencies separately. You can install virtualenv using this command

```
pip install virtualenv
```


Clone or download this repository and open it in your editor of choice. In a terminal mac, linux or windows terminal/bash, run the following command in the base directory of this project

```
virtualenv env
```

That will create a new folder `env` in your project directory. Next activate it with this command on mac/linux:

```
source env/bin/active
```

Then install the project dependencies with

```
pip install -r requirements.txt
```

Now you can run the project with this command

```
python manage.py runserver
```

**Note** if you want payments to work you will need to enter your own Stripe API keys into the `.env` file in the settings files.

---



