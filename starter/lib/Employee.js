// TODO: Write code to define and export the Employee class
//Class and constructor for Employee
class Employee {
   constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
   }
// Return Name
   getName() {
      return this.name;
   };
// Return Name
   getId() {
      return this.id;
   };
// Return Email
   getEmail() {
      return this.email;
   };
// Return role
   getRole() {
      return 'Employee';
   };

};

module.exports = Employee;
