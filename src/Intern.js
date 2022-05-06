class Intern {
    constructor(name, id, email, School) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.School = School;
    }
    
    getName(){return this.name}
      
    getId(){return this.id}
    
    getEmail(){return this.email}

    getSchool(){return this.School}
    
    getRole(){return 'Intern'}
      

  }
  
  module.exports = Intern;