class FilterParser {
    /**
     *
     * @param envString
     * @returns {*}
     */
    getFilters(envString) {

        if (envString === null) {
            return [];
        }

        envString = envString.trim();

        if (envString === '') {
            return [];
        }

        return envString.split(' ');
    }
}

module.exports = FilterParser;
