import shortid from "shortid";

class Locker {
    constructor() {
        this.capacity = 100;
        this.available = this.capacity;
    }

    store() {
        if (this.available) {
            this.available --;
            return shortid.generate();
        }
        return 'No available cell';
    }
}

export default Locker;