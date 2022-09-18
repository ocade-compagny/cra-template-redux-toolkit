# README du Projet
A ajouter dans ~/.npmrc
```
@ocade-compagny:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=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
```

# Install le package
```
 npm init @ocade-compagny/template-redux-toolkit@latest
```

# Installation d'une application react avec cette template
```j
npx create-react-app my-app --template @ocade-compagny/redux-toolkit
```
# Template Redux Toolkit
[Inspiration](https://dmnchzl.medium.com/comment-cr%C3%A9er-un-template-pour-cra-%EF%B8%8F-2ad38421b7b4)

`Redux Toolkit` est une template de `create react app`. Elle est utilisée pour initialiser un projet demandant l'implémentation d'un store Redux.

# Extension des composants
Il est recommandé d'utilser l'extension `.jsx` pour les composants.

# Localisation des Composants
Les composants sont situés `src/composants/*`

# Installation node sass
L'installation de la library Node Sass permet d'utiliser des fichiers `.scss` directement dans les composants et d'importer ces derniers dans les composants React.
```
npm install node-sass
```
# Prettifier son code
Pour garder un code propre, il préférable d'avoir un système permettant d'aider à préttifier son code. C'est ce qui est mis en place dans la template `Redux Toolkit`
```
npm run eslint
```

# Organisation Structurelle App React (futur dossier template)
```
+-- public/                    # 'index.html' Is Here
+-- src/
  +-- composants/
    +-- App
        +-- App.jsx
        +-- App.scss
  +-- vectors/                 # SVGs Are Here
    +-- logo.svg
  +-- index.js
  +-- index.scss
+-- .gitignore
+-- package.json
+-- package-lock.json
+-- prettier.config.js
+-- README.md
```

# Création de la template CRA (Create-React-App)
Une fois avoir faire toute la partie graphique de votre template, on peut commence à transformer notre app en template. Quelques règles s'imposent
* Nommée le dossier racine `cra-template-my-name`. Exemple `cra-template-redux-toolkit`
* Architecture de notre dossier (obligatoire)
```
+-- cra-template-redux-toolkit/
  +-- template/
    +-- public/                # 'index.html' Is Here
    +-- src/
      +-- components/
      +-- vectors/
      +-- gitignore
      +-- index.js
      +-- index.scss
      +-- prettier.config.js
  +-- package.json
  +-- README.md
  +-- template.json
```

# Tester que l'installation est correct en local
```
npx create-react-app application --template file:./path/to/cra-template-my-awesome-project
cd application
npm run start

```

# Redux Tookit + React Redux
### Déclaration du store
Le code correspondant est dans le fichier `src/composants/Store/store.js`. Dans ce fichier on peut voir la création d'une slice (tranche) puis celle-ci est mise à disposition par le store pour que l'application puisse en bénéficier.

### counterSlice
counterSlice est une tranche du store. Rendez-vous dans le fichier `src/composants/Store/counterSlice.js`. Dans ce fichier on peut voir la déclaration de la slice. Chaque slice à un état de départ au lancement de l'application. puis des méthodes qui permettant de modifier le state au cours du déroulement de l'application. Dans l'exemple, les méthodes permettent d'incrémenter ou décrémenter l'état de la slice. Les methodes sont mises à disposition par la slice afin d'être utilisé à travers la slice. (Une slice se rapproche du comportement d'une classe).

### Récuupérer les informations de la sliceCounter
Rendez vous dans le fichier `src/composants/Counter/Counter.jsx`. On peut voir comment récupérer l'état du counter.
```
  const count = useSelector((state) => state.counter.value);
```

### Mettre à jour l'état d'une slice
Restons dans le même fichier et observons comment l'état du counter est mis à jour.
* On met à disposition la méthodes permettant de discuter avec le store
```
const dispatch = useDispatch();
```
* Ensuite on exécute une méthode de la sliceCounter afin que celle-ci dans le coeur de la slice s'exécute.
```
onClick={() => dispatch(decrement())}
```
* L'état est ensuite mis à jour. On récupère la nouvelle valeur dans notre page web.