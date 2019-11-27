import Locker from '../src/locker'

describe('locker', () => {
    it('should return a ticket when has available cell and store a package', () => {
        const locker = new Locker();

        const result = locker.store();

        expect(result).toEqual('ticket');
    });
});