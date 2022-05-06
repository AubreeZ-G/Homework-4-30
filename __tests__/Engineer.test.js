const Engineer = require('../src/Engineer');

describe('engineer works as expected', () => {
    it('getName returns name', () => {
        var testedEngineer = new Engineer("bob", 1, "1@yahoo.com", "engineer_1")
        var testedName = testedEngineer.getName()
        var testedId = testedEngineer.getId()
        var testedEmail = testedEngineer.getEmail()
        var testedGitHub = testedEngineer.getGitHub()
        
      expect(testedName).toBe('bob');
      expect(testedId).toBe(1);
      expect(testedEmail).toBe('1@yahoo.com');
      expect(testedGitHub).toBe("engineer_1")
    //   expect(fizzBuzz([1, 2])).toBe('1, 2');
    });
  });