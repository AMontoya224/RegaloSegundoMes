from flask_app import app
from flask_app.controladores import controllerPresent, controllerUsers

if __name__ == "__main__":
    app.run( debug = True )