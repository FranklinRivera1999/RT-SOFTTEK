import { handler } from '../src/handlers/getUsers';

describe('Lambda GET getUsers Handler', () => {
    it('should return data on successful request', async () => {
        // @ts-ignore
        const result = await handler({});
        // @ts-ignore
        expect(result.statusCode).toEqual(200);
        // @ts-ignore
        const response = JSON.parse(result.body);
        expect(response.estado).toEqual(true);
    });

});
