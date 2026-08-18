# MoraLiv Kanban — mini serveur local

Un tableau Kanban avec une vraie persistance des données, via un petit serveur
Node.js/Express qui lit et écrit dans `data/tasks.json` (une base de fichiers
simple, pas besoin de MongoDB pour ça).

## Installation

```bash
npm install
```

## Lancement

```bash
npm start
```

Puis ouvre **http://localhost:3000** dans ton navigateur.

## Où sont les données ?

Tout est stocké dans `data/tasks.json`. Tu peux :
- l'ouvrir/éditer directement si besoin,
- le versionner avec Git pour garder un historique,
- le sauvegarder ou le partager facilement (c'est un simple fichier JSON).

## Et si je veux vraiment une base de données plus tard ?

Cette structure est volontairement simple. Le jour où tu veux passer sur
MongoDB Atlas (comme pour Visalog), il suffit de remplacer les fonctions
`readTasks()` / `writeTasks()` dans `server.js` par des appels à une
collection Mongoose — le reste (routes API, frontend) ne change pas.
