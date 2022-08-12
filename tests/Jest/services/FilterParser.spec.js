import FilterParser from '../../../src/services/FilterParser';


const parser = new FilterParser();


test('parsing of multiple filters works', () => {
    expect(parser.getFilters('@smoke @regression').length).toBe(2);
});

test('empty filters string leads to empty list', () => {
    expect(parser.getFilters('').length).toBe(0);
});
