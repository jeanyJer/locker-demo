import Locker from '../src/locker'
import shortid from "shortid";

describe('locker', () => {
    jest.spyOn(shortid, 'generate').mockReturnValue('shortid');

    it('should return a random ticket when has available cell and store a package', () => {
        const locker = new Locker();

        const result = locker.store();

        expect(result).toEqual('shortid');
    });
});