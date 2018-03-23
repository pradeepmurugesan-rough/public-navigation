# v0.6.0
## Adds translations

Translation bundles built with [`webpack-translations-plugin`](https://www.npmjs.com/package/webpack-translations-plugin)
are now exposed in the package.

The development environment and the docs use the source messages.

# v0.5.1
## Adds .focus-within class for menu items when any of its children has focus

This allows us to have better keyboard support and when support for
the [:focus-within pseudo-class](https://caniuse.com/#search=focus-within) increases, we can remove this.

# v0.5.0
## Experimental dropdown items support

This changes only markup, the styles will be added later.
Therefore, the nested items are commented out for now, and the navigation looks and behaves the same as in v0.4.0.

With nested items, it would currently look like the screenshots below.

![image](https://user-images.githubusercontent.com/5443561/36888039-742dfe2e-1dfc-11e8-94d6-7227d959b6a7.png)

<img src="https://user-images.githubusercontent.com/5443561/36888005-52f08c68-1dfc-11e8-873a-88111a467370.png" width="320">

# v0.4.0
## Adds a button item visible on every screen width

![image](https://user-images.githubusercontent.com/5443561/36666623-e335e9be-1af3-11e8-9723-6ac2075b142f.png)

![image](https://user-images.githubusercontent.com/5443561/36666645-f79dd48e-1af3-11e8-96cb-bae25d91514d.png)

New items for Help, Login and Signup are added to reflect the final result better.

# v0.3.3
## Updates internals: Webpack 4 and React hot loader 4

# v0.3.2
## Refactors PublicNavigationWithoutContent to be stateful and renamed it to Navigation

This way, `Navigation` is now built in a reusable way as it stores the state
about whether the menu is open or not, and `PublicNavigation` is just `Navigation` with passed `items`.

# v0.3.1
## Fixes menu animation and other style issues

The menu now animates as intended. Also, the overlay does not have the button border anymore.

![animation](https://user-images.githubusercontent.com/5443561/36427340-e1d427ba-1644-11e8-8909-c076367e1445.gif)

# v0.3.0
## Adds items

Items, originating from `src/items.json`, will be rendered as menu items, for mobile and desktop.

![image](https://user-images.githubusercontent.com/5443561/36378305-3b2b21b6-1572-11e8-8937-ad438c29a2ce.png)

<img src="https://user-images.githubusercontent.com/5443561/36378339-56f72656-1572-11e8-9bf3-91105ba90eae.png" width="240">


# v0.2.2
## Renames internal `PublicNavigationWithoutContent` component

# v0.2.1
## Replaces `hidden` with `.sr-only`

This is better for accessibility, as screenreaders sometimes don't read `hidden` elements.

# v0.2.0
## Adds logo

![image](https://user-images.githubusercontent.com/5443561/35562098-41198892-05aa-11e8-8952-4806593298b3.png)

Passing the logo link (https://transferwise.com by default):
```js
<PublicNavigation logoLink="https://transferwise.com/borderful" />
```

# v0.1.0
## Initial release