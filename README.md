<p align="center">
   <img width="200px" src="/assets/cypress.jpg">
</p>
<h1 align="center">(Super Easy) Cypress Filters</h1>


![Build Status](https://github.com/boxblinkracer/cypress-testrail/actions/workflows/ci_pipe.yml/badge.svg) ![NPM Downloads](https://badgen.net/npm/dt/cypress-filters) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/boxblinkracer/cypress-filters) ![NPM License](https://img.shields.io/npm/l/cypress-filters)

This plugin helps you to easily filter your Cypress runs based on tags. And yes, super easy and simple!
And everything in super plain Javascript :)

### 1. Installation

```ruby 
npm i cypress-filters --save-dev
```

### 2. Add Tags to tests

Just add any tag to the title with "@" as prefix. That's it!

```javascript 
it('My super cool test @smoke @usability', () => {
    // ...
    // ... 
})
```

### 3. Run with filters

Just run your tests by providing a `filters` environment variable.
You can simply provide multiple filters based on an OR condition.

```bash 
# run with 1 tag
./node_modules/.bin/cypress run --env filters="@smoke"

# run with 2 tag (OR condition by default)
./node_modules/.bin/cypress run --env filters="@smoke @usability"
```

### Copying / License

This repository is distributed under the MIT License (MIT). You can find the whole license text in the [LICENSE](LICENSE) file.