import TestTitleValidator from '../../../src/services/TestTitleValidator';


const validator = new TestTitleValidator();


test('filter found in title', () => {
    const hasFilter = validator.hasFilter(
        'This is my title @smoke',
        ['@smoke']
    );
    expect(hasFilter).toBe(true);
});

test('filter not found in title', () => {
    const hasFilter = validator.hasFilter(
        'This is my title @smoke',
        ['@smoke123']
    );
    expect(hasFilter).toBe(false);
});

test('single filter found if multiple exist', () => {
    const hasFilter = validator.hasFilter(
        'This is my title @smoke',
        ['@regression', '@smoke']
    );
    expect(hasFilter).toBe(true);
});
