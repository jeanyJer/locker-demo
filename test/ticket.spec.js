import shortid from "shortid";
import Ticket from '../src/ticket';

describe('ticket', () => {
    jest.spyOn(shortid, 'generate').mockReturnValue('shortid');

    it('should return a random ticket when create a ticket', () => {
        const ticket = new Ticket();

        const result = ticket.create();

        expect(result).toEqual('shortid');
    });
});