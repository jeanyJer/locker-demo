import shortid from "shortid";

class Ticket {
    constructor() {
        this.tickets = [];
    }

    create() {
        const ticket = shortid.generate();
        this.tickets.push(ticket);
        return ticket
    }
}

export default Ticket;