const { dayOfTheWeek } = require('./app');

const cases = [
    [new Date('3/09/2020'), 'Monday'],
    [new Date('3/10/2020'), 'Tuesday'],
    [new Date('3/11/2020'), 'Wednesday'],
    [new Date('3/12/2020'), 'Thursday'],
    [new Date('3/13/2020'), 'Friday'],
    [new Date('3/14/2020'), 'Saturday'],
    [new Date('3/15/2020'), 'Sunday']
];

test.each(cases)('getDay returns the long-format day of the week', (date, expectedResult) => {
    const result = dayOfTheWeek(date);
    expect(result).toBe(expectedResult);
});