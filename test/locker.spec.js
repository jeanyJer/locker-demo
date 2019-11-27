import Locker from '../src/locker'
import shortid from "shortid";

describe('locker', () => {
    jest.spyOn(shortid, 'generate').mockReturnValue('shortid');

    it('should return a random ticket when has available cell and store a package', () => {
        const locker = new Locker();

        const result = locker.store();

        expect(result).toEqual('shortid');
    });

    it('should return a full message when has no available cell', () => {
        const locker = new Locker();
        locker.available = 0;

        const result = locker.store();

        expect(result).toEqual('No available cell');
    });

    it('should return a successfully message when use valid ticket to pickup package', () => {
        const locker = new Locker();

        const result = locker.pickup('shortid');

        expect(result).toEqual('Picked successfully');
    });
});