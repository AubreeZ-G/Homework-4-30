const Intern = require('../src/Intern');

describe('intern works as expected', () => {
    it('getName returns name', () => {
        var testedIntern = new Intern("bob", 1, "1@yahoo.com", "DU")
        var testedName = testedIntern.getName()
        var testedId = testedIntern.getId()
        var testedEmail = testedIntern.getEmail()
        var testedSchool = testedIntern.getSchool()
        
      expect(testedName).toBe('bob');
      expect(testedId).toBe(1);
      expect(testedEmail).toBe('1@yahoo.com');
      expect(testedSchool).toBe("DU")
    //   expect(fizzBuzz([1, 2])).toBe('1, 2');
    });
  });