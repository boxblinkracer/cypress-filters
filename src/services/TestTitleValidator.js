export default class TestTitleValidator {

    /**
     *
     * @param testTitle
     * @param filters
     * @returns {*}
     */
    hasFilter(testTitle, filters) {
        return filters.some((tag) => testTitle.includes(tag));
    }

}
