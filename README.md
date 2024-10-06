*Name* : Souhardya Chowdhury 

*Domain* : WEB DEVELOPMENT 

*TASK* : LVL 3 TASK (PIZZA DELIVERY APPLICATION)

*Organisation*: OASIS INFOBYTE


*DAY 1* : I started off with forming the front end with the help of React.js, Bootstap v5 (For adding different elements like the Cards, Cerousels, fonts, Links)
and I typed create-react-app to make the the structure of the Web applicataion.

*DAY 2* : I continued with the front end part and took Routes to the multipage Webapp.

*Day 3* : I started with the Back end part and thus at first I started with the MONGODB (INSTALLATION AND CONNECTING WITH CLUSTER) . I used MongoDB ATLAS for this particular part.
MONGODB is generally used in applications which have a high volumn data flow and in high frequency. 
I also setup ExpressJS(install expressJS along with Nodemon and Mongoose and Thunder client for (Testing requests).
While working with the nodemon I faced a problem. As follows:

*nodemon : File C:\Users\hp\AppData\Roaming\npm\nodemon.ps1*

*cannot be loaded because running scripts is disabled on*    

*this system. For more information, see*

*about_Execution_Policies at*

*https:/go.microsoft.com/fwlink/?LinkID=135170.*

*At line:1 char:1*

*+ nodemon .\index.js*

*+ ~~~~~~~

    *+ CategoryInfo          : SecurityError: (:) [], PSSecu * 
    
   *rityException*
   
    *+ FullyQualifiedErrorId : UnauthorizedAccess*

  to solve this I changeed the ExecutionPolicy sttings to unrestricted mode by going to the WINDOWS POWERSHELL (RUN AS ADMIN).

   Next is Mongoose --> Mongoose is basically used to make it easy for us to code which would have been a hefty job if we use only MongoDB.It is not *Schemaless*

   Lastly I used the mongoose@15.13.8 version to connect the expressJS with the mongoDB database 

   *day 4* : I started with the model and schema formation.

**Defination:**
   
     Schemaless::  In MongoDB there is no restrictions with the sturcture of the data.
       That means MongoDB never notifies the User that they are getting out of the structure.
       
**DEEPDIVE** 

    SCHEMA - It is the structure that we use to take or enter data.

    MODEL - A model in Mongoose is a schema-based structure that represents collections in MongoDB, allowing interaction with the database. It defines the shape of documents and provides methods for CRUD operations.
