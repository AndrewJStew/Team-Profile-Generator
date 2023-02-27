// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) // input some cool 
    {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    // Return name
    getName() {
        return this.name
    };

    // Return ID

    getId() {
        return this.id
    };

    // Return Email

    getEmail() {
        return this.email
    };

    // Return Github

    getGithub() {
        return this.github
    };

    // Return Engineer
    getRole() {
        return "Engineer";
    }
};

// Export
module.exports = Engineer;