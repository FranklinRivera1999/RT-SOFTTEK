import { handler } from '../src/handlers/getStarships';

describe('Lambda GET getStarships Handler', () => {
    it('should return data on successful request', async () => {
        // @ts-ignore
        const result = await handler({});
         // @ts-ignore
        expect(result.statusCode).toEqual(200);
    });

});
