const FilterParser = require('./services/FilterParser');
const TestTitleValidator = require('./services/TestTitleValidator');

class CypressFilters {
    /**
     *
     */
    constructor() {
        this.filterParser = new FilterParser();
        this.titleValidator = new TestTitleValidator();
    }

    /**
     *
     */
    register() {
        /* eslint-disable no-undef */
        beforeEach(() => {
            // grab our filters
            /* eslint-disable no-undef */
            const filtersString = Cypress.env('filters');

            // we don't have any tags
            // then leave the test as it is
            if (!filtersString) {
                return;
            }

            const filterConfig = this.filterParser.getFilters(filtersString);

            if (!filterConfig.hasFilters()) {
                return;
            }

            /* eslint-disable no-undef */
            const currentTest = Cypress.mocha.getRunner().suite.ctx.currentTest;

            this.updatePendingState(currentTest, filterConfig);
        });
    }

    /**
     *
     * @param test
     * @param filterConfig
     */
    updatePendingState(test, filterConfig) {
        const runTest = this.titleValidator.isValid(test.fullTitle(), filterConfig);

        // we start with our lowest level
        // then we check our parent suites and groups,
        // if we then get found-tag in an upper level
        // we remove the pending again
        test.pending = !runTest;

        // immediately return
        // if we have a tag, then we don't need
        // to ask the higher levels
        if (!test.pending) {
            return;
        }

        if (test.parent !== undefined) {
            this.updatePendingState(test.parent, filterConfig);
        }
    }
}

module.exports = CypressFilters;
