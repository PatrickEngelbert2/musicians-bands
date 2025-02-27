const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band and Musician Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    const wannaBe = await Musician.create({ name: "Patrick's Band" });
    expect(wannaBe.name).toBe("Patrick's Band");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const wannaBe = await Musician.create({ name: "Patrick" });
    expect(wannaBe.name).toBe("Patrick");
  });

  test("bands can have multiple musicians", async () => {
    const EngelbertBand = await Band.create({
      name: "Engelberts",
      genre: "Family",
    });

    const patrick = await Musician.create({
      name: "Patrick",
      instrament: "Son",
    });
    const nick = await Musician.create({ name: "Nick", instrament: "Son" });
    const tiffany = await Musician.create({
      name: "Tiffany",
      instrament: "Daughter",
    });
    const carissa = await Musician.create({
      name: "Carissa",
      instrament: "Daughter",
    });
    const sherry = await Musician.create({
      name: "Sherry",
      instrament: "Mother",
    });
    const Jim = await Musician.create({ name: "Jim", instrament: "Father" });

    await EngelbertBand.addMusician(patrick);
    await EngelbertBand.addMusician(nick);
    await EngelbertBand.addMusician(tiffany);
    await EngelbertBand.addMusician(carissa);
    await EngelbertBand.addMusician(sherry);
    await EngelbertBand.addMusician(Jim);

    const musicians = await EngelbertBand.getMusicians();

    expect(musicians.length).toBe(6);
    expect(musicians[0] instanceof Musician).toBe(true);
  });

  test("can create a Song", async () => {
    // TODO - test creating a song
    const wannaSong = await Song.create({
      name: "Patrick's Song",
      genre: "Person",
    });
    console.log("I'm the song!!!!", wannaSong);
    expect(wannaSong.name).toBe("Patrick's Song");
  });

  test("Song is associated with Band as a many-to-many relationship", async () => {
    const Unlucky = await Song.create({
      name: "Unlucky",
      genre: "I'm not a Song...",
    });
    const Lucky = await Song.create({ name: "Lucky", genre: "...But I am" });

    const firstB = await Band.create({ name: "Card", genre: "It's a band..." });
    const secondB = await Band.create({ name: "Band", genre: "...I promise" });

    await Unlucky.addBand(firstB);
    await Unlucky.addBand(secondB);

    const Bands = await Unlucky.getBands();

    expect(Bands.length).toBe(2);
    expect(Bands[0] instanceof Band).toBe(true);

    await firstB.addSong(Unlucky);
    await firstB.addSong(Lucky);

    const setOfSongs = await Band.findAll({
      include: [{ model: Song }],
    });

    expect(setOfSongs.length).toBe(3);
    expect(setOfSongs[1].Songs[0] instanceof Song).toBe(true);
  });
});
