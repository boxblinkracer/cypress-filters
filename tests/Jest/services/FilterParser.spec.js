import FilterParser from '../../../src/services/FilterParser';


const parser = new FilterParser();


test('parsing of multiple filters works', () => {
    expect(parser.getFilters('@smoke @regression').length).toBe(2);
});
