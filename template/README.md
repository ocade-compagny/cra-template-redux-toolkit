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
```
npx create-react-app my-app --template @ocade-compagny/redux-toolkit
```
# Template Redux Toolkit
[Inspiration](https://dmnchzl.medium.com/comment-cr%C3%A9er-un-template-pour-cra-%EF%B8%8F-2ad38421b7b4)

`Redux Toolkit` est une template de `create react app`. Elle est utilisée pour initialiser un projet demandant l'implémentation d'un store Redux.

# Extension des composants
Il est recommandé d'utilser l'extension `.mjs` pour les composants.

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
npm install prettier eslint-config-prettier eslint-plugin-prettier
```

# Modification dans le fichier package.json 
```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "lint": "eslint --ext .js,.jsx src"
},
"eslintConfig": {
  "extends": ["react-app", "prettier", "prettier/react"],
  "plugins": ["prettier"]
}
```

# Création d'un fichier `prettier.config.js` à la racine
```
module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: "none",
  jsxBracketSameLine: true,
  arrowParens: "avoid"
};
```

Ajouter cette même configuration dans le fichier package.json
```
"eslintConfig": {
  "extends": ["react-app", "prettier", "prettier/react"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "printWidth": 120,
        "singleQuote": true,
        "trailingComma": "none",
        "jsxBracketSameLine": true,
        "arrowParens": "avoid"
      }
    ]
  }
}
```

# Optimiser avec VS Code
Il est recommander d'avoir le plugin `Prettier — Code Formatter` pour optimiser son formatage de code.

# Installation de Husky
Hysky est une library qui permet de eslinter son code au moment de `git commit`

```
npm install husky lint-staged
```
Modifier le fichier `package.json`  et ajouter un fin de fichier:
```
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,jsx}": [
    "prettier --write",
    "eslint --fix"
  ]
}
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

# Déplacer les dépendances de package.json dans template.json
Une fois ces changements opérés vous devrez déplacer les dépendances, configurations et scripts (sauf ceux en rapport avec react-scripts) présents dans votre package.json vers le fichier template.json de la manière suivante :
```json
{
    "package": {
      "dependencies": {
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^14.4.3",
        "eslint-config-prettier": "^8.5.0",
        "eslint-plugin-prettier": "^4.2.1",
        "husky": "^8.0.1",
        "lint-staged": "^13.0.3",
        "node-sass": "^7.0.3",
        "prettier": "^2.7.1"
      },
      "scripts": {
        "lint": "eslint --ext .js,.jsx,.ts,.tsx --fix src/"
      },
      "eslintConfig": {
        "extends": ["react-app", "prettier", "prettier/react"],
        "plugins": ["prettier"],
        "rules": {
          "prettier/prettier": [
            "warn",
            {
              "printWidth": 120,
              "singleQuote": true,
              "trailingComma": "none",
              "jsxBracketSameLine": true,
              "arrowParens": "avoid"
            }
          ]
        }
      },
      "husky": {
        "hooks": {
          "pre-commit": "lint-staged"
        }
      },
      "lint-staged": {
        "*.{js,jsx}": [
          "prettier --write",
          "eslint --fix"
        ]
      }
    }
  }
```

# Fichier package.json final
```json
{
  "name": "redux-toolkit",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.4.3",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "husky": "^8.0.1",
    "lint-staged": "^13.0.3",
    "node-sass": "^7.0.3",
    "prettier": "^2.7.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "lint": "eslint --ext .js,.jsx,.ts,.tsx --fix src/"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "prettier",
      "prettier/react"
    ],
    "plugins": [
      "prettier"
    ],
    "rules": {
      "prettier/prettier": [
        "warn",
        {
          "printWidth": 120,
          "singleQuote": true,
          "trailingComma": "none",
          "jsxBracketSameLine": true,
          "arrowParens": "avoid"
        }
      ]
    }
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx}": [
      "prettier --write",
      "eslint --fix"
    ]
  }
}

```

# Tester que l'installation est correct en local
```
npx create-react-app application --template file:./path/to/cra-template-my-awesome-project
cd application
npm run start

```