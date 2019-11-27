import shortid from "shortid";
import _ from 'lodash';

class Locker {
    constructor() {
        this.capacity = 100;
        this.available = this.capacity;
        this.tickets = [];
    }

    store() {
        if (this.available) {
            this.available --;
            const ticket = shortid.generate();
            this.tickets.push(ticket);
            return ticket
        }
        return 'No available cell';
    }

    pickup(ticket) {
        if(_.includes(this.tickets, ticket)) {
            _.pull(this.tickets, ticket);
            this.available ++;
            return 'Picked successfully';
        }
        return 'The ticket is invalid';
    }
}

export default Locker;