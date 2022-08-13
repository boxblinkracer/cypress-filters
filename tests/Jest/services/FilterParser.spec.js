import FilterParser from '../../../src/services/FilterParser';


const parser = new FilterParser();


test('parsing of 1 filter works', () => {
    const filterConfig = parser.getFilters('@smoke');

    expect(filterConfig.hasFilters()).toBe(true);

    expect(filterConfig.getFilters()).toStrictEqual(
        [
            ['@smoke'],
        ]
    );
});

test('parsing of 2 OR filters works', () => {
    const filterConfig = parser.getFilters('@smoke @regression');

    expect(filterConfig.hasFilters()).toBe(true);

    expect(filterConfig.getFilters()).toStrictEqual(
        [
            ['@smoke'],
            ['@regression'],
        ],
    );
});

test('parsing of 3 AND filters works', () => {
    const filterConfig = parser.getFilters('@smoke+@regression+@usability');

    expect(filterConfig.hasFilters()).toBe(true);

    expect(filterConfig.getFilters()).toStrictEqual(
        [
            ['@smoke', '@regression', '@usability'],
        ],
    );

});

test('parsing of 2 AND filter groups works', () => {
    const filterConfig = parser.getFilters('@smoke+@regression @usability+@functional');

    expect(filterConfig.hasFilters()).toBe(true);

    expect(filterConfig.getFilters()).toStrictEqual(
        [
            ['@smoke', '@regression'],
            ['@usability', '@functional'],
        ]
    );
});


test('parsing of 2 AND filters and 1 OR filter works', () => {
    const filterConfig = parser.getFilters('@smoke+@regression @usability');

    expect(filterConfig.hasFilters()).toBe(true);
    expect(filterConfig.getFilters()).toStrictEqual(
        [
            ['@smoke', '@regression'],
            ['@usability'],
        ]
    );
});

test('empty filters string leads to empty list', () => {
    const filterConfig = parser.getFilters('');

    expect(filterConfig.hasFilters()).toBe(false);
    expect(filterConfig.getFilters().length).toBe(0);
});

test('null filter string leads to empty list', () => {
    const filterConfig = parser.getFilters(null);

    expect(filterConfig.hasFilters()).toBe(false);
    expect(filterConfig.getFilters().length).toBe(0);
});

test('simple space string leads to empty list', () => {
    const filterConfig = parser.getFilters(' ');

    expect(filterConfig.hasFilters()).toBe(false);
    expect(filterConfig.getFilters().length).toBe(0);
});
