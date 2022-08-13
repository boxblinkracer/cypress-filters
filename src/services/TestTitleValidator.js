class TestTitleValidator {
    /**
     *
     * @param testTitle
     * @param filterConfig
     * @returns {boolean}
     */
    isValid(testTitle, filterConfig) {
        let groupMatched = false;

        filterConfig.getFilters().forEach((filterGroup) => {
            let allAndMatched = true;

            filterGroup.forEach((filterAnd) => {
                if (!testTitle.includes(filterAnd)) {
                    allAndMatched = false;
                }
            });

            if (allAndMatched) {
                groupMatched = true;
            }
        });

        return groupMatched;
    }
}

module.exports = TestTitleValidator;
