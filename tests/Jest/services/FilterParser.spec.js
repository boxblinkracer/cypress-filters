import FilterParser from '../../../src/services/FilterParser';


const parser = new FilterParser();


test('parsing of 1 filter work', () => {
    expect(parser.getFilters('@smoke').length).toBe(1);
});

test('parsing of multiple filters works', () => {
    expect(parser.getFilters('@smoke @regression').length).toBe(2);
});

test('empty filters string leads to empty list', () => {
    expect(parser.getFilters('').length).toBe(0);
});

test('null filter string leads to empty list', () => {
    expect(parser.getFilters(null).length).toBe(0);
});

test('simple space string leads to empty list', () => {
    expect(parser.getFilters(' ').length).toBe(0);
});
