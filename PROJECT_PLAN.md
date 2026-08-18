# MoraLiv – Projet de Livraison Locale Négociable (Madagascar)

## 🌍 Vision
MoraLiv est une plateforme de livraison locale à Madagascar où clients et livreurs négocient librement le prix en temps réel, avec transparence, flexibilité et faibles coûts — contrairement aux solutions rigides comme HOP!.

## 🎯 Objectif du MVP (Minimum Viable Product)
Permettre à un client de publier une demande de livraison, à un livreur proche de la voir, de discuter du prix via chat, et de confirmer la course mutuellement — le tout en moins de 2 mois de développement.

## 🧱 Stack Technique (Août 2026)
- **Frontend** : Vue 3.5 (Composition API), Vite, Pinia (state management), Vue Router, Tailwind CSS
- **Backend** : Node.js 22 (LTS), Express, Socket.IO (chat/négociation en temps réel)
- **Base de données** : MongoDB Atlas (gratuit, cloud)
- **Authentification** : JWT + secure HTTP-only cookies (sécurité renforcée)
- **Déploiement** : Frontend sur Vercel, Backend sur Render
- **Outils** : GitHub (code + projet), Postman (tests API), Figma (maquettes UI plus tard)

## ✅ Fonctionnalités MVP (priorisées)
1. Inscription / connexion (client + livreur)
2. Profil livreur : type de véhicule, tarif/km, zone de disponibilité
3. Création de demande de livraison (avec géolocalisation)
4. Calcul automatique du prix estimé (distance × tarif/km)
5. Chat en temps réel entre client et livreur
6. Négociation : livreur propose prix → client contre-propose → accord
7. Confirmation mutuelle → statut "en cours"
8. Évaluation post-livraison (note + commentaire)

## 💰 Modèle économique
- Commission de **10 %** sur chaque livraison confirmée
- Pas d’abonnement : gratuit pour les livreurs et clients

## ⚠️ Contraintes techniques
- Léger en data (pour zones à faible bande passante)
- Compatible mobile-first (95 % des utilisateurs à Madagascar sont sur mobile)
- Prévoir intégration future avec Orange Money / Airtel Money (via API)

## 🗓️ Planning Agile (Sprints de 7 jours)
- **Sprint 1** : Setup projet + Authentification
- **Sprint 2** : Gestion des profils + géolocalisation
- **Sprint 3** : Chat + négociation temps réel
- **Sprint 4** : Workflow complet + tests
- **Sprint 5** : Déploiement + améliorations UX

## 📂 Structure du repo (à venir)
- `/client` → frontend Vue
- `/server` → backend Node.js
- `/docs` → maquettes, specs API, notes