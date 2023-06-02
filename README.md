I uploaded a sample live server of this project.
Link: https://wn-instachat.pages.dev/

Intruction to run this code.

When you are using your VSCODE, Go to source control (Ctrl + Shift + G) and select clone repository.

-Paste this Github repository URL : https://github.com/wynson09/chatapp.-gitTask-Manager.git
-Next you will select directory path/folder you want to put the clone -project.
-Open terminal and type " npm i " to install all nessesary dependencies.

For back end part.

First you need to setup your firebase authentication, Storage and Database.
Link: https://console.firebase.google.com/?_gl=1*ju1rnx*_ga*MTk3ODY1Mzg5My4xNjg1NzMzMzgx*_ga_CW55HF8NVT*MTY4NTczMzM4MS4xLjAuMTY4NTczMzM4MS4wLjAuMA..&pli=1

-Create a project and you can name " chat " or whatever you like to name for your project.
-Click continue to a project.
-You are now in console.firebase. Click web icon beside of android icon" </> "
-Type an app nickname. For me I used chat nickname, Then click register app.
-Add Firebase SDK and copy the firebaseConfig. For example:
apiKey: "AIzaSyCgPkcBmMZ1zKFVGzroRjucOlc1hPK2csI",
authDomain: "chat-a39f1.firebaseapp.com",
projectId: "chat-a39f1",
storageBucket: "chat-a39f1.appspot.com",
messagingSenderId: "574174684418",
appId: "1:574174684418:web:76dfad0acc346698284e1b",
measurementId: "G-MEM4YBXR0H"

-Open the firebase.js and replace the firebaseConfig with your SDK's, Then continue.

Set up Authentication.
-Click Build and find Authentication.
-Click get started and choose Email/Password on Native providers category and click enable and lastly save it.

Set up Storage
-Click Build and find Storage and then click get started.
-Choose start in test mode then click next, done.

Set up Firestore Database.
-Click Build and find Firestore Database and then click get started.
-Choose start in test mode then click next, done.
-Set up the rules. Click Rules beside of Data.
-allow read, write: if false; change to true. Example :
rules_version = '2';

service cloud.firestore {
match /databases/{database}/documents {
match /{document=\*\*} {
allow read, write: if true;
}
}
}

- Click publish.

Lastly you can start to run the code by typing in the terminal npm start.
