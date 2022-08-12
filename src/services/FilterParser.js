export default class FilterParser {
    /**
     *
     * @param envString
     * @returns {*}
     */
    getFilters(envString) {
        return envString.split(' ');
    }
}
