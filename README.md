# Agenda Tutorato
Creiamo un'applicazione in cui l'utente può creare, modificare ed eliminare degli appuntamenti dalla sua agenda.

Con questa applicazione vediamo alcuni concetti fondamentali nel frontend tra cui:
- Manipolazione del dom
- Sottoscrizione agli eventi
- Routing
- Permanenza dei dati (localStorage, sessionStorage)

E alcuni più generici nella programmazione tra cui:
- Agile methodologies
- Versioning
- Prototyping 
- Testing

In questo progetto ogni partecipante coprirà a turno uno dei seguenti ruoli:
- Project Manager
- Tester
- UI/UX Software Designer
- Software Developer

Qui potete trovare informazioni sui [ruoli](https://www.intelivita.com/blog/roles-in-a-software-development-team).

Il progetto inizierà con una stesura delle specifiche partendo dalle [storie utente](https://www.atlassian.com/it/agile/project-management/user-stories).

Queste verranno tradotte in milestones, task e sottotask.
Il Project Manager avrà, fra i vari compiti, quello di assegnare i task agli altri partecipanti.

# Sviluppo
Lo sviluppo partirà dalla creazione di 3 branch: main, develop, staging.

Ogni task per essere eseguito dovrà partire dalla branch develop e seguirà questa nomenclatura:
- feature-numero-del-task-descrizione    &nbsp;&nbsp;&nbsp;&nbsp;questo si usa quando stiamo creando appunto una nuova feature
- fix-numero-del-task-descrizione        &nbsp;&nbsp;&nbsp;&nbsp;quando stiamo fixando dei bug)
- style-numero-del-task-descrizione      &nbsp;&nbsp;&nbsp;&nbsp;quando facciamo modifiche al css
- refactor-numero-del-task-descrizione   &nbsp;&nbsp;&nbsp;&nbsp;quando facciamo refactoring
- chore-numero-del-task                  &nbsp;&nbsp;&nbsp;&nbsp;quando facciamo modifiche strutturali, di dipendenze

Terremo traccia delle modifiche fatte all'interno di un changelog file in markdown usando [semantic versioning](https://semver.org/).
