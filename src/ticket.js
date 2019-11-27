import shortid from "shortid";
import _ from 'lodash';

class Ticket {
    constructor() {
        this.tickets = [];
    }

    create() {
        const ticket = shortid.generate();
        this.tickets.push(ticket);
        return ticket
    }

    destroy(ticket) {
        if(_.includes(this.tickets, ticket)) {
            _.pull(this.tickets, ticket);
            return true;
        }
        return false;
    }
}

export default Ticket;