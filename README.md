# Backsaw

Backsaw is a utility for inspecting and analyzing flighting behavior in the [Adzerk](http://adzerk.com/) [Native Ad API](http://help.adzerk.com/hc/en-us/sections/200425759-Native-Ads-API).

## Development

Development of Backsaw should be done using Node 5.7.x.

### Setup

Install prerequisites and development and application dependencies:

```
npm i -g npm
npm install
```

_Note: `npm install` writes a git pre-commit hook to `./.git/hooks`._

### Contributions

New development dependencies should be installed with npm, eg:

```
npm install gulp-gravitationalwaves --save-dev
```

New application dependencies should be installed with [jspm](http://jspm.io/), eg:

```
jspm install angular2
```

_(Following this Readme will install jspm locally, so the `jspm` command likely will not be available if you do need to run `jspm install`. There are several options for getting access to that command, but the easiest is installing `jspm` globally if you do need to add dependencies.)_

### Running

`npm start` runs the app without compiling jspm dependencies, and uses the typescript files directly.

`npm run start:dist` imitates a production release, by building a single file executable ES5 from the jspm dependencies, and running the local server out of the `./.dist` directory, which contains copies of all files needed for a deployment.

## Deployment

`npm run deploy` updates the `./.dist` directory, including the sfx bundle from jspm and any other app files, and pushes the files to S3. ***Use sparingly***, as it currently provides no protections against, and will deploy a broken feature branch without complaining.

In order for a deploy to work, you should have you `~/.aws` credentials set up to have access to the application's S3 bucket.

## Notes

* `angular2` is currently an npm dependency so that we have access to `angular2-polyfills.js` during development and packaging. Hopefully this can get moved into jspm at some point.
* `rxjs` is currently and npm dependency because the transpiler couldn't find the module to import and complained a lot in Atom. The app will build correctly if it's removed, but probably a good idea to keep it in there for now.
* Make sure to keep those two packages in sync between `npm` and `jspm`!
