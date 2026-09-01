# Portfolio dzeryhago.com — Brief Claude Code

## Contexte

Je suis Raymond Dzery Hago, développeur solo à Madagascar. Je travaille sur trois fronts :
des **sites et applications web** (Next.js), des **applications mobiles** (React
Native/Expo) et des **jeux mobiles** (Unity). Je les conçois, je les code, j'en assure la
direction artistique et l'UI, puis je les publie.

Ces noms de technologies servent à te situer et à nourrir l'accroche. Ils ne doivent PAS
apparaître sur la page sous forme d'une rangée de logos ou d'une liste de stack.

Ne revendique nulle part que je produis tous les assets graphiques : une partie est
achetée. Ce qui est vrai, c'est le design, le code, l'UI et la direction artistique.

Je veux un portfolio simple qui sert de hub : une seule page qui liste ce que j'ai
publié et renvoie vers le Play Store ou vers le site du projet.

Les trois activités comptent autant. L'accroche ne doit pas me réduire à « développeur
web » ni à « développeur mobile ».

Le domaine `dzeryhago.com` est acheté (Namecheap). Chaque app aura plus tard son propre
sous-domaine (`clearway.dzeryhago.com`, etc.), donc l'architecture doit rester un projet
Next.js unique déployé sur Vercel.

**Audience réelle** : des gens qui cliquent depuis ma bio TikTok ou depuis la page
développeur du Play Store. Occasionnellement un client ou un recruteur. Ce n'est PAS une
candidature — c'est une vitrine de produits.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Aucune dépendance d'animation (pas de Framer Motion)
- Déploiement Vercel

## Direction visuelle — imposée, ne pas réinterpréter

La référence est une **ligne de résultat de recherche du Google Play Store** : icône
carrée arrondie à gauche, nom de l'app, une ligne de description en dessous, le tout
cliquable. Sobre, dense, fonctionnel.

Contraintes fermes :

- **Colonne centrée d'environ 600px de large maximum.** Tout le contenu vit dedans, sur
  desktop comme sur mobile. C'est ce qui fait fonctionner la densité type Play Store.
- **Aucun chiffre** : pas d'installs, pas de note, pas d'étoiles.
- **Aucune animation non déclenchée par l'utilisateur.** Pas de fade-in au scroll, pas de
  transition sur les cartes au survol. Un changement d'état discret au hover d'un lien
  suffit.
- Une seule page, aucune navigation, aucun routing.

## À NE PAS faire — ce sont les signatures d'un site généré

- « Hi, I'm... 👋 » en hero
- Fond dégradé, blobs, glassmorphism, bento grid
- Cartes identiques à coins arrondis avec la même ombre grise partout
- Eyebrow labels en MAJUSCULES espacées au-dessus des titres
- Soupe d'icônes de stack technique
- Timeline d'expérience avec des points
- CTA collant « Let's work together »
- Méta-infos jointes par des points médians (« A · B · C »)
- Une flèche « → » ajoutée au texte des liens
- Fond crème #F4F1EA avec accent terracotta, ou near-black avec accent vert acide

## Structure de la page

```
┌─────────────────────────────┐
│  [photo]                    │
│  Raymond Dzery Hago         │
│  une ligne d'accroche       │
│  Antananarivo, Madagascar   │
│                             │
│  ─────────────────────────  │
│                             │
│  [icône] Nom de l'app       │
│          description courte │
│  [icône] Nom de l'app       │
│          description courte │
│  [icône] Nom de l'app       │
│          description courte │
│                             │
│  ─────────────────────────  │
│                             │
│  liens sociaux + contact    │
│  By Raymond Dzery Hago      │
└─────────────────────────────┘
```

Le footer dit exactement : **By Raymond Dzery Hago**

## Données

Crée `src/data/projects.ts` avec un tableau typé. Je remplirai les valeurs moi-même —
mets des placeholders explicites, n'invente aucune URL ni aucun texte marketing.

```ts
export type Project = {
  name: string;
  tagline: string;        // une ligne, factuelle, pas de superlatif
  thumbnail: string;      // chemin dans /public — icône d'app pour le mobile,
                          // vignette carrée (logo ou capture recadrée) pour le web
  playStoreUrl?: string;  // absent pour les projets web ou non publiés
  siteUrl?: string;       // site du projet ou sous-domaine
  status?: "live" | "soon";
};
```

Une entrée doit fonctionner correctement avec `siteUrl` seul et sans `playStoreUrl` : la
vignette occupe le même emplacement carré que l'icône d'app, et la ligne reste cliquable.

Apps, jeux et projets web à inclure (je corrigerai les descriptions) :
- Monster Cannon — jeu, tower defense roguelike. Sortie imminente : prévois que je passerai
  `status` de `"soon"` à `"live"` et que j'ajouterai le lien Play Store sans toucher au code.
- Mitsitsy — app, suivi de budget et dépenses, hors ligne
- Clearway — app, accompagnement à l'arrêt de la vape
- Flipia — jeu de mémoire

Une seule liste mélangée : pas de sections séparées « Web », « Apps », « Jeux ». Avec ce
nombre d'entrées, découper la liste la ferait paraître vide, et le mélange montre mieux
l'étendue de ce que je fais. Les vignettes suffisent à distinguer les types.

L'ordre dans le tableau est l'ordre d'affichage. Monster Cannon en premier.

## SEO

C'est important : je veux ressortir sur « Raymond Dzery Hago » et « Dzery Hago ».

- `<title>` et meta description contenant le nom complet
- Un `h1` qui est exactement « Raymond Dzery Hago »
- JSON-LD `Person` avec `name`, `url`, `sameAs` (LinkedIn, GitHub, page développeur Play
  Store) et un `jobTitle` qui couvre les deux activités, pas seulement le développement web
- `metadataBase`, Open Graph, image OG
- Aucun texte important rendu uniquement côté client

## Qualité

- Responsive, lisible en une seule colonne sur mobile
- Focus clavier visible
- `prefers-reduced-motion` respecté
- Contrastes accessibles

## Méthode

Avant d'écrire du code, propose-moi :
1. Une palette de 4 à 6 couleurs nommées avec leurs hex
2. Le ou les choix typographiques
3. Un wireframe ASCII du bloc app

Puis relis ta proposition : si une partie ressemble à ce que tu produirais pour n'importe
quel portfolio de développeur, change-la et dis-moi ce que tu as changé et pourquoi.

**Ne commence pas à coder avant que j'aie validé cette proposition.**
