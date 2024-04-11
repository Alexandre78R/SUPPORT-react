# Support React

### Contexte de ce repositories

Ce dépôt GitHub est une ressource idéale pour les débutants en développement web qui souhaitent apprendre React. Basé sur des exemples de fruits et légumes, il couvre les concepts clés comme les composants, les props, l'état, et les hooks tels que useState. De plus, il utilise également des méthodes de manipulation de tableaux comme map et filter.
C'est une ressource pratique pour renforcer ses compétences en React de manière ludique et pratique.

### Commandes pour installation

création de la branch en local : git checkout -b fetch-star-wars-support

récupération du contenu distant : git pull origin fetch-star-wars-support

installation des dépendances : npm i (raccourci pour npm install)

puis npm run dev pour lancer l'application

### Consignes de l'exercice

Adresse url à utiliser pour fetch les données (avec ou sans axios, comme vous voulez) :`https://swapi.dev/api/people`
Les données récupérées consistent en une liste de personnages de l'univers Star Wars, avec leurs caractéristiques respectives 


Ne pas toucher le useState


Compléter la fonction getData pour récupérer les données dans le parent App et envoyer celles-ci au composant enfant FetchData via les props :

- "name"
- "heigth"

- facultatif : "films" une fois que tout le reste fonctionne, car il nécessite un traitement un peu différent

Dans le fichier App.jsx, le bouton Get data sert à récupérer les données - assurez-vous que les data existent avant de mapper pour afficher celles-ci
