import TestTitleValidator from '../../../src/services/TestTitleValidator';
import FilterConfiguration from '../../../src/models/FilterConfiguration';


const validator = new TestTitleValidator();


test('valid with 1 OR filter', () => {
    const hasFilter = validator.isValid(
        'This is my title @smoke',
        new FilterConfiguration([
            ['@smoke'],
        ])
    );
    expect(hasFilter).toBe(true);
});

test('not valid with 2 OR filters', () => {
    const hasFilter = validator.isValid(
        'This is my title @functional',
        new FilterConfiguration([
            ['@regression'],
            ['@smoke'],
        ])
    );
    expect(hasFilter).toBe(false);
});

test('valid with 1 of 2 OR filters', () => {
    const hasFilter = validator.isValid(
        'This is my title @smoke',
        new FilterConfiguration([
            ['@regression'],
            ['@smoke'],
        ])
    );
    expect(hasFilter).toBe(true);
});

test('valid with 1 of 2 AND filters', () => {
    const hasFilter = validator.isValid(
        'This is my title @smoke @regression',
        new FilterConfiguration([
            ['@core', '@usability'],
            ['@smoke', '@regression'],
        ])
    );
    expect(hasFilter).toBe(true);
});

test('not valid with AND filters', () => {
    const hasFilter = validator.isValid(
        'This is my title @smoke @functional',
        new FilterConfiguration([
            ['@smoke', '@regression'],
            ['@usability', '@functional'],
        ])
    );
    expect(hasFilter).toBe(false);
});