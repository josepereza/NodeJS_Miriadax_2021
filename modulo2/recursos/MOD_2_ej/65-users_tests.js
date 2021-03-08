
const { Sequelize, Model, DataTypes } = require('sequelize');

const options = { logging: false};
const sequelize = new Sequelize("sqlite:db.sqlite", options);

class User extends Model {}

User.init(
  { name: DataTypes.STRING,
    age: DataTypes.INTEGER
  },
  { sequelize, modelName:"User"}
);


(async () => {
  try {
    await sequelize.sync();
    let count = await User.count();
    if (count===0) {
      let c = await User.bulkCreate([
        { name: 'Pit', age: 23},
        { name: 'Eva', age: 22},
        { name: 'Pat', age: 30}
      ]);
      console.log(`  DB created with ${c.length} elems\n\n`);
    } else { console.log(`  DB exists & has ${count} elems\n\n`); };

    let x = await User.findAll()

  } catch (err) { console.log(err) };
})();

