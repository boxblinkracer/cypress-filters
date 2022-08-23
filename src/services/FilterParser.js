const FilterConfiguration = require('../models/FilterConfiguration');

class FilterParser {
    /**
     *
     * @param envString
     * @returns {FilterConfiguration}
     */
    getFilters(envString) {
        if (envString === undefined || envString === null) {
            return new FilterConfiguration([], []);
        }

        envString = envString.trim();

        if (envString === '') {
            return new FilterConfiguration([], []);
        }

        const allParts = envString.split(' ');

        const filtersOr = [];

        allParts.forEach((filter) => {
            if (filter.includes('+')) {
                const partsAnd = filter.split('+');
                filtersOr.push(partsAnd);
            } else {
                filtersOr.push([filter]);
            }
        });

        return new FilterConfiguration(filtersOr);
    }
}

module.exports = FilterParser;
