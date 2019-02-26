# DHainzl TSLint Config

> A [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) for my personal projects

## Installation

```sh
npm install @dhainzl/ng-tslint-config --save
```

## Usage

In `tslint.json`:

```json
{
  "extends": "@dhainzl/ng-tslint-config"
}
```

## Modification

If you edit this lib, you need to manually update the version in the `package.json` and afterwards `npm publish` it yourself; There is no automated build here.

Usually, I run the following commands (in this example updating to 7.2.1):

```
<Change version to 7.2.1 in package.json>
git commit -am <commit msg>
git push
git tag 7.2.1
git push origin 7.2.1
npm publish --access public
```