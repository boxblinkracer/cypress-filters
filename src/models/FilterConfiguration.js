class FilterConfiguration {
    /**
     *
     * @param filters
     */
    constructor(filters) {
        this.filtersOr = filters;
    }

    /**
     *
     * @returns {*}
     */
    getFilters() {
        return this.filtersOr;
    }

    /**
     *
     * @returns {boolean}
     */
    hasFilters() {
        return this.filtersOr.length > 0;
    }
}

module.exports = FilterConfiguration;
