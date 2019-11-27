import Ticket from "./ticket";

class Locker {
    constructor() {
        this.capacity = 100;
        this.available = this.capacity;
        this.ticket = new Ticket();
    }

    store() {
        if (this.available) {
            this.available --;
            return this.ticket.create();
        }
        return 'No available cell';
    }

    pickup(ticket) {
        const destroy = this.ticket.destroy(ticket);
        if(destroy) {
            this.available ++;
            return 'Picked successfully';
        }
        return 'The ticket is invalid';
    }
}

export default Locker;