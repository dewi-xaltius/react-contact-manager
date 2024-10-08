// Contact class definition
// Concept: Class
export class Contact {
    constructor(name, email) {
        this.id = Contact.generateId(); // Unique ID for each contact
        this.name = name; // Contact name
        this.email = email; // Contact email
    }

    // Static method using closure to generate unique IDs
    // Concept: Closure
    static generateId = (() => {
        let id = 0; // Initial ID value
        return () => id++; // Increment and return unique ID
    })();
}
