import test from 'ava';

import DateHelper from '../src/date-helper';

const nonLeapYear = 2015;
const leapYear = 2016;

function calculateAgeMacro(t, input, expected) {
  const now = new Date(2016, 0, 1);

  const result = new DateHelper(() => now).calculateAge(1, 1, input);

  t.is(result, expected);
}

calculateAgeMacro.title = (providedTitle, input, expected) =>
  `calculateAge should return ${expected} for 1/1/${input}`;

test('calculateAge for 1/1/2011', calculateAgeMacro, 2011, 5);
test('calculateAge for 1/1/2000', calculateAgeMacro, 2000, 16);
test('calculateAge for 1/1/1999', calculateAgeMacro, 1999, 17);
test('calculateAge for 1/1/1950', calculateAgeMacro, 1950, 66);

test('calculateAge for 1/1/11', calculateAgeMacro, 11, 5);
test('calculateAge for 1/1/00', calculateAgeMacro, 0, 16);
test('calculateAge for 1/1/99', calculateAgeMacro, 99, 17);
test('calculateAge for 1/1/50', calculateAgeMacro, 50, 66);

test('calculateAge for 7/1/2015 from 1/1/2016', t => {
  const now = new Date(2016, 0, 1);

  const result = new DateHelper(() => now).calculateAge(7, 1, 2015);

  t.is(result, 0);
});

test('calculateAge for 7/1/2014 from 1/1/2016', t => {
  const now = new Date(2016, 0, 1);

  const result = new DateHelper(() => now).calculateAge(7, 1, 2014);

  t.is(result, 1);
});

test('calculateAge for 7/1/2013 from 1/1/2016', t => {
  const now = new Date(2016, 0, 1);

  const result = new DateHelper(() => now).calculateAge(7, 1, 2013);

  t.is(result, 2);
});

test('calculateAge for 12/31/2010 from 1/1/2016', t => {
  const now = new Date(2016, 0, 1);

  const result = new DateHelper(() => now).calculateAge(12, 31, 2010);

  t.is(result, 5);
});

test('calculateAge for 1/1/2011 from 1/1/2016', t => {
  const now = new Date(2016, 0, 1);

  const result = new DateHelper(() => now).calculateAge(1, 1, 2011);

  t.is(result, 5);
});

test('calculateAge for 1/2/2011 from 1/1/2016', t => {
  const now = new Date(2016, 0, 1);

  const result = new DateHelper(() => now).calculateAge(1, 2, 2011);

  t.is(result, 4);
});

test('calculateAge for 7/1/2015 from 1/1/2016 UTC', t => {
  const now = new Date(Date.UTC(2016, 0, 1, 0, 0, 0));

  const result = new DateHelper(() => now).calculateAge(7, 1, 2015);

  t.is(result, 0);
});

test('calculateAge for 7/1/2014 from 1/1/2016 UTC', t => {
  const now = new Date(Date.UTC(2016, 0, 1, 0, 0, 0));

  const result = new DateHelper(() => now).calculateAge(7, 1, 2014);

  t.is(result, 1);
});

test('calculateAge for 7/1/2013 from 1/1/2016 UTC', t => {
  const now = new Date(Date.UTC(2016, 0, 1, 0, 0, 0));

  const result = new DateHelper(() => now).calculateAge(7, 1, 2013);

  t.is(result, 2);
});

test('calculateAge for 12/31/2010 from 1/1/2016 UTC', t => {
  const now = new Date(Date.UTC(2016, 0, 1, 0, 0, 0));

  const result = new DateHelper(() => now).calculateAge(12, 31, 2010);

  t.is(result, 5);
});

test('calculateAge for 1/1/2011 from 1/1/2016 UTC', t => {
  const now = new Date(Date.UTC(2016, 0, 1, 0, 0, 0));

  const result = new DateHelper(() => now).calculateAge(1, 1, 2011);

  t.is(result, 5);
});

test('calculateAge for 1/2/2011 from 1/1/2016 UTC', t => {
  const now = new Date(Date.UTC(2016, 0, 1, 0, 0, 0));

  const result = new DateHelper(() => now).calculateAge(1, 2, 2011);

  t.is(result, 4);
});

function getBirthYearForUserProvidedValueMacro(t, input, expected) {
  const now = new Date(2016, 0, 1);

  const result = new DateHelper(() => now).getBirthYearForUserProvidedValue(input);

  t.is(result, expected);
}

getBirthYearForUserProvidedValueMacro.title = (providedTitle, input, expected) =>
  `getBirthYearForUserProvidedValue should return ${expected} for ${input}`;

test('getBirthYearForUserProvidedValue for 1939', getBirthYearForUserProvidedValueMacro, 1939, 1939);
test('getBirthYearForUserProvidedValue for 39', getBirthYearForUserProvidedValueMacro, 39, 1939);
test('getBirthYearForUserProvidedValue for 1949', getBirthYearForUserProvidedValueMacro, 1949, 1949);
test('getBirthYearForUserProvidedValue for 49', getBirthYearForUserProvidedValueMacro, 49, 1949);
test('getBirthYearForUserProvidedValue for 1950', getBirthYearForUserProvidedValueMacro, 1950, 1950);
test('getBirthYearForUserProvidedValue for 50', getBirthYearForUserProvidedValueMacro, 50, 1950);
test('getBirthYearForUserProvidedValue for 1951', getBirthYearForUserProvidedValueMacro, 1951, 1951);
test('getBirthYearForUserProvidedValue for 51', getBirthYearForUserProvidedValueMacro, 51, 1951);
test('getBirthYearForUserProvidedValue for 1999', getBirthYearForUserProvidedValueMacro, 1999, 1999);
test('getBirthYearForUserProvidedValue for 99', getBirthYearForUserProvidedValueMacro, 99, 1999);
test('getBirthYearForUserProvidedValue for 2000', getBirthYearForUserProvidedValueMacro, 2000, 2000);
test('getBirthYearForUserProvidedValue for 0', getBirthYearForUserProvidedValueMacro, 0, 2000);
test('getBirthYearForUserProvidedValue for 2001', getBirthYearForUserProvidedValueMacro, 2001, 2001);
test('getBirthYearForUserProvidedValue for 1', getBirthYearForUserProvidedValueMacro, 1, 2001);
test('getBirthYearForUserProvidedValue for 2015', getBirthYearForUserProvidedValueMacro, 2015, 2015);
test('getBirthYearForUserProvidedValue for 15', getBirthYearForUserProvidedValueMacro, 15, 2015);
test('getBirthYearForUserProvidedValue for 2016', getBirthYearForUserProvidedValueMacro, 2016, 2016);
test('getBirthYearForUserProvidedValue for 16', getBirthYearForUserProvidedValueMacro, 16, 2016);

test('getAvailableMonthNumbers should return expected value for day 15', t => {
  const result = DateHelper.getAvailableMonthNumbers(15, nonLeapYear);

  t.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('getAvailableMonthNumbers should return expected value for day 28', t => {
  const result = DateHelper.getAvailableMonthNumbers(28, nonLeapYear);

  t.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('getAvailableMonthNumbers should return expected value for day 29 non-leap year', t => {
  const result = DateHelper.getAvailableMonthNumbers(29, nonLeapYear);

  t.deepEqual(result, [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('getAvailableMonthNumbers should return expected value for day 29 leap year', t => {
  const result = DateHelper.getAvailableMonthNumbers(29, leapYear);

  t.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('getAvailableMonthNumbers should return expected value for day 30', t => {
  const result = DateHelper.getAvailableMonthNumbers(30, nonLeapYear);

  t.deepEqual(result, [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('getAvailableMonthNumbers should return expected value for day 31', t => {
  const result = DateHelper.getAvailableMonthNumbers(31, nonLeapYear);

  t.deepEqual(result, [1, 3, 5, 7, 8, 10, 12]);
});

test('getAvailableMonthNumbers should throw error for day 0', t => {
  t.throws(
    () => DateHelper.getAvailableMonthNumbers(0, nonLeapYear),
    'days must be between 1 and 31 inclusive.');
});

test('getAvailableMonthNumbers should throw error for day 32', t => {
  t.throws(
    () => DateHelper.getAvailableMonthNumbers(32, nonLeapYear),
    'days must be between 1 and 31 inclusive.');
});

test('getDaysInMonth should return expected value for January', t => {
  const result = DateHelper.getDaysInMonth(1, nonLeapYear);

  t.is(result, 31);
});

test('getDaysInMonth should return expected value for February in non-leap year', t => {
  const result = DateHelper.getDaysInMonth(2, nonLeapYear);

  t.is(result, 28);
});

test('getDaysInMonth should return expected value for February in leap year', t => {
  const result = DateHelper.getDaysInMonth(2, leapYear);

  t.is(result, 29);
});

test('getDaysInMonth should return expected value for March', t => {
  const result = DateHelper.getDaysInMonth(3, nonLeapYear);

  t.is(result, 31);
});

test('getDaysInMonth should return expected value for April', t => {
  const result = DateHelper.getDaysInMonth(4, nonLeapYear);

  t.is(result, 30);
});

test('getDaysInMonth should return expected value for May', t => {
  const result = DateHelper.getDaysInMonth(5, nonLeapYear);

  t.is(result, 31);
});

test('getDaysInMonth should return expected value for June', t => {
  const result = DateHelper.getDaysInMonth(6, nonLeapYear);

  t.is(result, 30);
});

test('getDaysInMonth should return expected value for July', t => {
  const result = DateHelper.getDaysInMonth(7, nonLeapYear);

  t.is(result, 31);
});

test('getDaysInMonth should return expected value for August', t => {
  const result = DateHelper.getDaysInMonth(8, nonLeapYear);

  t.is(result, 31);
});

test('getDaysInMonth should return expected value for September', t => {
  const result = DateHelper.getDaysInMonth(9, nonLeapYear);

  t.is(result, 30);
});

test('getDaysInMonth should return expected value for October', t => {
  const result = DateHelper.getDaysInMonth(10, nonLeapYear);

  t.is(result, 31);
});

test('getDaysInMonth should return expected value for November', t => {
  const result = DateHelper.getDaysInMonth(11, nonLeapYear);

  t.is(result, 30);
});

test('getDaysInMonth should return expected value for December', t => {
  const result = DateHelper.getDaysInMonth(12, nonLeapYear);

  t.is(result, 31);
});

test('getDaysInMonth should throw error for month 0', t => {
  t.throws(
    () => DateHelper.getDaysInMonth(0, nonLeapYear),
    'monthNumber must be between 1 and 12.');
});

test('isLeapYear returns false for non-leap year', t => {
  const result = DateHelper.isLeapYear(nonLeapYear);

  t.false(result);
});

test('isLeapYear returns true for leap year', t => {
  const result = DateHelper.isLeapYear(leapYear);

  t.true(result);
});

test('isLeapYear returns false for unexpected string value', t => {
  const result = DateHelper.isLeapYear('a_string_value');

  t.false(result);
});
