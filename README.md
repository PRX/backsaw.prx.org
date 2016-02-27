Using node 5.6.x

```
npm install -g npm
npm install -g tsd
npm install -g jspm
npm install
jspm install
npm start
```

Install app dependencies with jspn, eg:

```
jspm install angular2
```

Install build and development dependencies with npm, eg:

```
npm install lite-server --save-dev
```

`angular2` is installed as a npm dependency right now so index.html can include angular2-polyfills directly. That will probably get fixed at some point.
