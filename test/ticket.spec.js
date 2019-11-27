import shortid from "shortid";
import Ticket from '../src/ticket';

describe('ticket', () => {
    jest.spyOn(shortid, 'generate').mockReturnValue('shortid');

    it('should return a random ticket when create a ticket', () => {
        const ticket = new Ticket();

        const result = ticket.create();

        expect(result).toEqual('shortid');
    });

    it('should return true when destroy a valid ticket', () => {
        const ticket = new Ticket();
        ticket.create();

        const result = ticket.destroy('shortid');

        expect(result).toEqual(true);
    });
});