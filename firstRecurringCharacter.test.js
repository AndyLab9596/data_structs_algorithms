const findFirstRecurringCharacter = require('./firstRecurringCharacter');

test('Recurring character should return 2', () => {
    expect(findFirstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])).toBe(2);
});

test('Recurring character should return 1', () => {
    expect(findFirstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])).toBe(1);
});

test('Recurring character should return undefined', () => {
    expect(findFirstRecurringCharacter([2, 3, 4, 5])).toBe(undefined);
});