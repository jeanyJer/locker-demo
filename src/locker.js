import shortid from "shortid";

class Locker {
    constructor() {
        this.capacity = 100;
        this.available = this.capacity;
    }

    store() {
        this.available --;
        return shortid.generate();
    }
}

export default Locker;