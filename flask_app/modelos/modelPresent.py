import re
from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL

NAME_REGEX = re.compile(r'^[a-zA-Z]+$')

class Present:

    @classmethod
    def addComment( cls, data ):
        query1 = "ALTER TABLE comments AUTO_INCREMENT = 1;"
        connectToMySQL( "regalo_db" ).query_db( query1 )
        query2 = "INSERT INTO comments(comment, created_at, updated_at, user_id) VALUES(%(comment)s, %(created_at)s, %(updated_at)s, %(user_id)s);"
        result = connectToMySQL( "regalo_db" ).query_db( query2, data )
        return result
    
    @classmethod
    def getCommentList( cls ):
        query = "SELECT * FROM users JOIN comments ON comments.user_id = users.id;"
        result = connectToMySQL( "regalo_db" ).query_db( query )
        return result
    
    @classmethod
    def deleteComment( cls, data ):
        query = "DELETE FROM comments WHERE comments.id = %(id)s;"
        connectToMySQL( "regalo_db" ).query_db( query, data )

    @classmethod
    def verifyComment( cls, data ):
        is_valid = True

        if len( data["comment"] ) < 3:
            flash( "El Comentario debe contener al menos 3 letras", "show" )
            is_valid = False

        return is_valid