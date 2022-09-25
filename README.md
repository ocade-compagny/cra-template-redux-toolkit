<p align="center">
  <img src="./readme/ocade-template-redux-toolkit-2.png" />
</p>

# Template Redux Toolkit
[Inspiration](https://dmnchzl.medium.com/comment-cr%C3%A9er-un-template-pour-cra-%EF%B8%8F-2ad38421b7b4)

![Redux Toolkit](./readme/redux.jpg)
<br/>
<br/>
<br/>
`Redux Toolkit` est une template de `create react app`. Elle est utilisée pour initialiser un projet demandant l'implémentation d'un store Redux.

## Redux Store, c'est quoi ?
Redux Store c'est un store qui permet de stocker des données dans une application React. Il permet de stocker des données de manière globale dans l'application. Vous avez donc accès à ces données dans n'importe quel composant de votre application. Comment faire ? En utilisant le hook `useSelector` et `useDispatch`. [Voir la documentation](https://redux.js.org/api/store).

## Installation

```bash
npx create-react-app my-app --template redux-toolkit
```

## Tips
Pour faciliter le developpement de l'application il est possible d'installer l'extension `Redux DevTools` sur votre navigateur. Cette extension permet de visualiser le store Redux et de voir les actions qui sont dispatchées.

* Initialisation de incrémente.

![Init Incremente](./readme/increment-1.png)

<br/>

* Incrémente 7 fois.

![After Incremente](./readme/increment-2.png)
On peut voir que l'action `increment` a été dispatchée et que le state a été mis à jour. Le store stock maintenant la valeur `7` dans la propriété `counter`.
