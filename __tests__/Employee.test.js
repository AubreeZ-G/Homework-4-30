const Employee = require('../src/Employee');

describe('employee works as expected', () => {
    it('getName returns name', () => {
        var testedEmployee = new Employee("bob", 1, "1@yahoo.com")
        var testedName = testedEmployee.getName()
        var testedId = testedEmployee.getId()
        var testedEmail = testedEmployee.getEmail()
        
      expect(testedName).toBe('bob');
      expect(testedId).toBe(1);
      expect(testedEmail).toBe('1@yahoo.com');
    //   expect(fizzBuzz([1, 2])).toBe('1, 2');
    });
  });