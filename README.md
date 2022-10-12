<p align="center">
   <img width="200px" src="/assets/cypress.jpg">
</p>
<h1 align="center">(Super Easy) Cypress Filters</h1>


![Build Status](https://github.com/boxblinkracer/cypress-testrail/actions/workflows/ci_pipe.yml/badge.svg) ![NPM Downloads](https://badgen.net/npm/dt/cypress-filters) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/boxblinkracer/cypress-filters) ![NPM License](https://img.shields.io/npm/l/cypress-filters)

This plugin helps you to easily filter your Cypress runs based on tags. And yes, super easy and simple!

And everything in super plain Javascript :)

If tests do not match your filters, then they are simply marked as pending and skipped.

### 1. Installation

```ruby 
npm i cypress-filters --save-dev
```

### 2. Register Plugin

Just place these lines in your `support/e2e.js` file.

```javascript 
const CypressFilters = require('cypress-filters');

new CypressFilters().register();
```

### 3. Add Tags to tests

Add any tag to the title.
It is recommended to use a unique prefix such as "@". That's it!

```javascript 
it('My super cool test @smoke @usability', () => {
    // ...
    // ... 
})
```


### 4. Run with filters

Run your tests by providing a `filters` environment variable.

You can provide multiple filters based on a combination of OR and AND conditions.

```bash 
# run with 1 tag
cypress run --env filters="@smoke"

# run with 2 tags (OR condition)
cypress run --env filters="@smoke @usability"

# run with 2 tags (AND condition)
cypress run --env filters="@smoke+@usability"

# run with 3 tags (AND + OR condition)
cypress run --env filters="@smoke+@usability @regression"

# run with 4 tags (2x AND condition)
cypress run --env filters="@smoke+@usability @regression+@functional"
```


## Advanced

### 1. Conditional Tests with Filters
Sometimes it's necessary to completely skip things such as before() or beforeEach() hooks if run with some tags.

Let's imagine you test a payment plugin that requires an API key.
But this key is not always available. Still, a handful of tests should still be executed.
Let's tag those with the filter "@core".
Depending on your setup, you might have some before() hooks that prepare the payment methods.
But these are not existing without a valid API key.
You can easily skip that before() hook with the following code.

```javascript 
before(function () {

    if (new CypressFilters().hasFilter("@core")) {
        return;
    }
    
    // ...
    // ...
}
```

Please keep in mind, this is only an idea to get you started.
This feature allows you to completely customize your logic based on tag conditions.