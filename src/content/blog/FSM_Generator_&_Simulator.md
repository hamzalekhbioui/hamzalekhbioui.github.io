---
title: FSM Generator & Simulator (Ongoing)
description: A tool to generate C code for FSMs created with YED, and a graphical simulator to test state transitions.
author: LEKHBIOUI Hamza
date: 2024-12-07
---

## Description

Développement d’un outil complet en Python permettant de générer automatiquement du code C à partir d’un graphe FSM (machine à états finis) dessiné avec yED. Le système prend en charge le multitâche (préemptif ou coopératif) et valide la structure du graphe avant génération.


## Fonctionnalités principales

Analyse et parsing automatique de fichiers .graphml (issus de yED)

Génération de code C modulaire avec templates Jinja2

Prise en charge de FSM complexes (multi-FSM et multitâche)

Interface graphique (Tkinter) pour sélectionner les fichiers et le mode de génération

Simulation & validation structurelle des FSM (cohérence, transitions, états initiaux, etc.)


## Objectif
Faciliter l’implémentation embarquée de systèmes à états en automatisant l’écriture de leur logique en langage C.



## Technologies Used

Python (lxml, jinja2, tkinter)

C (code généré)

yED (modélisation graphique)

GitHub(suivi du projet et versionning)



Stay tuned for updates and a live demo!