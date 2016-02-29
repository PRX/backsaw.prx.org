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

`angular2` is installed as a npm dependency right now so index.html can include angular2-polyfills directly. That will probably get fixed at some point. `rxjs` is an npm dependency because without it the transpiler couldn't find module to import (at least not in Atom). Be sure to keep those to packages in sync between npm and jspm.

TODO
[ ] https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines

### Release

Needs an `aws.json` for [gulp-s3](https://www.npmjs.com/package/gulp-s3)
