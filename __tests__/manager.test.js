const Manager = require('../lib/Manager.js');

test('does this set an office number', () => {
  const mgr = new Manager("james", 2, "email", 5)
  expect(mgr.officeNum).toBe(5);
});