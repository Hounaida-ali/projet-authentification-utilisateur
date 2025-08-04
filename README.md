# API authentification des urlisateurs
L’authentification des utilisateurs sert à vérifier leur identité afin de sécuriser l’accès aux données et fonctionnalités réservées de l’application.
##  Fonctionnalités

- Enregistrer un utilisateur
- Connecter un utilisateur
- Envoi un mail de confirmation à l'utilisateur
- Modifier le mot passe
## Technologies utilisées

- Node.js
- Express.js 
- MongoDB
- Dotenv
- uuid :identifint unique qui attribue un nombre unique à un jeton
- jesonwebtoken tester l'authentification
- bcrypt:permet de chiffrer un mot de passe
- nodemailler qui transpoter des emails
## Processus de test des requêtes
### Methode: `POST`:ajouter un utilisateur.
- URL:`http://localhost:3000/auth/register` 
- Reponse:

  
  <img width="477" height="482" alt="Capture d’écran du 2025-08-04 16-45-01" src="https://github.com/user-attachments/assets/996c323b-2c21-44bd-9e36-67adb6f6d5f7" />

 ### Methode: `POST`:connecter un utilisateurs
- URL: `http://localhost:7000/users/connectUser`
- Reponse:

<img width="477" height="482" alt="Capture d’écran du 2025-08-04 16-49-40" src="https://github.com/user-attachments/assets/f11fe188-3a10-442a-8975-dbf8acb8b22c" />

  ## Methode: `PATH`:faire une verification d'email.
- URL: http://localhost:7000/users/verify-email`
- Reponse:


 <img width="477" height="482" alt="Capture d’écran du 2025-08-04 16-47-36" src="https://github.com/user-attachments/assets/ca24d7f9-32d7-4dd9-8f33-a088f2b2c5dd" />


### Methode: `POST`:evoie de l'email.
- URL: `http://localhost:7000/users/reinisilize`
- Reponse:

  <img width="477" height="482" alt="Capture d’écran du 2025-08-04 16-55-47" src="https://github.com/user-attachments/assets/f26c14b7-d956-46c7-aec5-d8f78d3c8575" />

  

### Methode: `PATH`:reinitialisation de mot de passe 
- URL: `http://localhost:7000/users/resetPassword`
- Reponse:

<img width="477" height="482" alt="Capture d’écran du 2025-08-04 16-57-16" src="https://github.com/user-attachments/assets/0aaf90ed-81be-47d4-86d8-51ad215bdbeb" />



<img width="900" height="600" alt="image" src="https://github.com/user-attachments/assets/91019cac-378b-4d11-833c-e7baf1d3ccbf" />
