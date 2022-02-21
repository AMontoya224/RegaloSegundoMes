from flask import render_template, request, redirect, session, url_for, flash
from flask_app import app
from flask_app.modelos.modelPresent import Present
from datetime import datetime


@app.route( '/index', methods=["GET"] )
def desployIndex():
    if "id" not in session:
        return redirect('/')

    CommentList = Present.getCommentList()
    variables = [session["id"], session["first_name"]]
    return render_template( "index.html", CommentList=CommentList, variables=variables)

@app.route( '/comments/new', methods=["POST"] )
def createComment_P():
    if "id" not in session:
        return redirect( '/' )

    if not Present.verifyComment( request.form ):
        return redirect( '/index' )

    data = {
        "comment" : request.form["comment"],
        "created_at" : datetime.today(),
        "updated_at" : datetime.today(),
        "user_id" : session['id'],
    }
    Present.addComment( data )
    return redirect( '/index' )


@app.route( '/comments/<idComment>/destroy', methods=["POST"] )
def deleteComment_P(idComment):
    if "id" not in session:
        return redirect( '/' )

    data = {
        "id" : idComment
    }
    Present.deleteComment( data )
    return redirect( '/index' )
    

@app.route( '/picture/new', methods=["POST"] )
def createDessert_P():
    if "id" not in session:
        return redirect( '/' )

    if not Present.verifyPictures( request.form ):
        return redirect( '/index' )

    data = {
        "title" : request.form["title"],
        "picture" : request.form["picture"],
        "description" : request.form["description"],
        "created_at" : datetime.today(),
        "updated_at" : datetime.today(),
        "user_id" : session['id'],
    }
    Present.addPicture( data )
    return redirect( "/index")