const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Band', async () => {
        // TODO - test creating a band
        const wannaBe = await Musician.create({name : "Patrick's Band"})
        expect(wannaBe.name).toBe("Patrick's Band");
    });

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const wannaBe = await Musician.create({name : "Patrick"})
        expect(wannaBe.name).toBe('Patrick');
    });
});