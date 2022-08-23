const FilterParser = require('./services/FilterParser');
const TestTitleValidator = require('./services/TestTitleValidator');

class CypressFilters {
    /**
     *
     */
    constructor() {
        this.titleValidator = new TestTitleValidator();
        this.filterParser = new FilterParser();
    }

    /**
     *
     */
    register() {
        /* eslint-disable no-undef */
        const filtersString = Cypress.env('filters');
        this.filterConfig = this.filterParser.getFilters(filtersString);

        if (!this.filterConfig.hasFilters()) {
            return;
        }

        const me = this;

        /* eslint-disable no-undef */
        before(() => {
            /* eslint-disable no-undef */
            const currentTest = Cypress.mocha.getRunner().suite.ctx.currentTest;

            // the before will contain the title of the current test
            // we can immediately check it here and cancel the beforeAll process
            const runTest = me.titleValidator.isValid(currentTest.title, me.filterConfig);

            currentTest.pending = !runTest;
        });

        /* eslint-disable no-undef */
        beforeEach(() => {
            /* eslint-disable no-undef */
            const currentTest = Cypress.mocha.getRunner().suite.ctx.currentTest;

            me._updatePendingState(me, currentTest, me.filterConfig);
        });
    }

    /**
     *
     * @param test
     * @param filters
     */
    _updatePendingState(me, test, filters) {
        const runTest = me.titleValidator.isValid(test.fullTitle(), filters);

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
            me._updatePendingState(me, test.parent, filters);
        }
    }
}

module.exports = CypressFilters;
