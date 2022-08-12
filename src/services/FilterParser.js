class FilterParser {
    /**
     *
     * @param envString
     * @returns {*}
     */
    getFilters(envString) {
        if (envString === '') {
            return [];
        }

        return envString.split(' ');
    }
}

module.exports = FilterParser;
