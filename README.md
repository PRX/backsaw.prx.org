# Backsaw

Backsaw is a utility for inspecting and analyzing flighting behavior in the [Adzerk](http://adzerk.com/) [Native Ad API](http://help.adzerk.com/hc/en-us/sections/200425759-Native-Ads-API).

## Development

Development of Backsaw should be done using Node 5.7.x.

### Setup

Install prerequisites and development and application dependencies:

```
npm install npm tsd jspm -g
npm install
jspm install
```

### Contributions

New development dependencies should be installed with npm, eg:

```
npm install gulp-gravitationalwaves --save-dev
```

New application dependencies should be installed with [jspm](http://jspm.io/), eg:

```
jspm install angular2
```

### Running

`npm start` runs the app without compiling jspm dependencies, and uses the typescript files directly.

`npm run start:dist` imitates a production release, by building a single file executable ES5 from the jspm dependencies, and running the local server out of the `./.dist` directory, which contains copies of all files needed for a deployment.

## Deployment

`npm run deploy` updates the `./.dist` directory, include the sfx bundle from jspm and any other app files, and pushes the files to S3. ***Use sparingly***, as it currently provides no protections against, and will deploy a broken feature branch without complaining.

In order for a deploy to work, you must have a correctly configured `./aws.json` file for [gulp-s3](https://www.npmjs.com/package/gulp-s3). It should have an AWS key with access to the S3 bucket you're trying to deploy to.

## Notes

* `angular2` is currently an npm dependency so that we have access to `angular2-polyfills.js` during development and packaging. Hopefully this can get moved into jspm at some point.
* `rxjs` is currently and npm dependency because the transpiler couldn't find the module to import and complained a lot in Atom. The app will build correctly if it's removed, but probably a good idea to keep it in there for now.
* Make sure to keep those two packages in sync between `npm` and `jspm`!
