# Les groupes de routes (Route Groups)

### 💡 Comprendre les groupes de routes

## 📝 Tes notes

Detaille ce que tu as appris ici, sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Avec Next, les répertoires dans `/app` sont considérés comme routable (si un segment contient un fichier `page.tsx`)

```
app
├── login
│   └── page.tsx
├── dahsboard
│   └── page.tsx
└── register
    └── page.tsx
```

Si nous souhaitons regrouper `login` et `register` ensemble avec le même `layout` et `dashboard` avec un autre `layout` faudrait faire

```
app
├── auth
│   ├── login
│   │   └── page.tsx
│   ├── register
│   │   └── page.tsx
│   └── layout.tsx
└── dahsboard
    ├── page.tsx
    └── layout.tsx
```

Le problème de faire cela est que cela va rajouter un segment (`auth`) dans nos routes

```
/auth/login
/auth/register
/dashboard
```

Pour éviter que `auth` soit routé et groupé nos 2 sous segment avec le même `layout`, next a introduit le concept de route groups. Cela s’utilise avec la syntaxe `(folder)`

```
app
├── (auth)
│   ├── login
│   │   └── page.tsx
│   ├── register
│   │   └── page.tsx
│   └── layout.tsx
└── dahsboard
    ├── page.tsx
    └── layout.tsx
```

- routes accessibles

```
/login
/register
/dashboard
```

📑 Le liens vers la doc [https://nextjs.org/docs/app/building-your-application/routing/route-groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

## Exercice

👨‍✈️ Hugo le chef de projet te demande de concevoir un SaaS, une application permettant de fonctionner pour des utilisateurs normaux (rôle `user`) et des `admin.`

- Les admin se connecteront sur un `backoffice` de gestion.
- Nous appellerons le `frontoffice` le reste du site

Ces 2 modes ont 2 structures (layout) séparées et des routes séparées

- Routes
  - `/bo` le backoffice
  - `/dashboard` `/cgv` etc … le frontoffice

Pour simplifier l’exercice de notre SaaS, la `HomePage ,`des composants basiques et des routes seront déjà fournis. Nous avons 3 routes sans `Layout`

- `/dashboard`
- `/cgv`
- `/bo`

### Instructions

🐶 Dans un premier temps crée des `layouts` pour chaque routes. Tu peux renommer les fichiers

```
src/app/dashboard/layout.exercice.tsx -> src/app/bo/layout.tsx
src/app/bo/layout.exercice.tsx -> src/app/bo/layout.tsx
```

🐶 Dans un second temps crée 2 routes groupées

- Une pour le backoffice `🤖 (backoffice)`
- Une pour l’application frontoffice `🤖 (app)`
  - fait en sorte que `cgv` utilise le même `layout` que `app`

Fichiers & dossiers

- `/app/bo`
- `/app/cgv`
- `/app/dashboard`

## Bonus

### 1. 🚀 Répertoire non routable

Parfois il peut être utile d’avoir des répertoires non routable. Par exemple si l’on a un répertoire `/components/`

Pour rendre un répertoire non routable il faut le renommer avec un `_`

```
_components
```

📑 Aller plus loin : [https://nextjs.org/docs/getting-started/project-structure#route-groups-and-private-folders](https://nextjs.org/docs/getting-started/project-structure#route-groups-and-private-folders)

🐶 Dans cette exercice rend le répertoire `/reports` non routable

Fichiers

- `bo/reports`

## Aller plus loin

📑 Le lien vers la doc [https://www.w3schools.com/html/html_css.asp](https://www.w3schools.com/html/html_css.asp)

## Ils vont t’aider

- **🐶 Mowgli le Chien** : _Mowgli te guidera dans chaque exercice._
- **🤖 Ash le Robot** : _Ash le Robot te donnera du code utile._
- **🚀 Julia La roquette** : _Julia te donnera des défis supplémentaires._
- **⛏️ Hulk le Marteau** : _Quand du code à supprimer est présent_
- **👨‍✈️ Hugo le chef de projet** : _Va t'aider sur les spécifications du projet_

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-next-avis?entry.1912869708=Next%20PRO&entry.1430994900=2.Routing%20Avance&entry.533578441=01%20Les%20Route%20Groups).
