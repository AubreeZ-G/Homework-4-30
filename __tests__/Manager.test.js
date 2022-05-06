const Manager = require('../src/Manager');

describe('manager works as expected', () => {
    it('getName returns name', () => {
        var testedManager = new Manager("bob", 1, "1@yahoo.com", 1234567890)
        var testedName = testedManager.getName()
        var testedId = testedManager.getId()
        var testedEmail = testedManager.getEmail()
        var testedOfficeNumber = testedManager.getOfficeNumber()
        
      expect(testedName).toBe('bob');
      expect(testedId).toBe(1);
      expect(testedEmail).toBe('1@yahoo.com');
      expect(testedOfficeNumber).toBe(1234567890)
    //   expect(fizzBuzz([1, 2])).toBe('1, 2');
    });
  });