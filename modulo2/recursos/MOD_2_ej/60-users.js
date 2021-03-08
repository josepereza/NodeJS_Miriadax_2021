
const { Sequelize, Model, DataTypes } = require('sequelize');

const options = { logging: false};
const sequelize = new Sequelize("sqlite:db.sqlite", options);

class User extends Model {}

/* // Modelo sin restricciones, ni validaciones
User.init(
  { name: DataTypes.STRING,
    age: DataTypes.INTEGER
  },
  { sequelize, modelName:"User"}
);
*/

User.init(
  { name: {
      type: DataTypes.STRING,
      unique: { msg: "Name already exists"},
      allowNull: false,
      validate: {
        isAlphanumeric: { args: true, msg: "name: invalid"}
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: { args:   [0], msg: "Age: less than 0"},
        max: { args: [140], msg: "Age: higher than 140"}
      }
    }
  },
  { sequelize, modelName:"User"}
);


(async () => {
  try {

    // Initialize the database
    await sequelize.sync();
    let count = await User.count();
    if (count===0) {
      let c = await User.bulkCreate([
        { name: 'Peter', age: "22"},
        { name: 'Anna', age: 23},
        { name: 'John', age: 30}
      ]);
      process.stdout.write(`  DB created with ${c.length} elems\n\n`);
    } else {
      process.stdout.write(`  DB exists & has ${count} elems\n\n`);
    };

    // Show database content
    let users = await User.findAll()
    users.forEach(u => 
      console.log(`    ${u.name} is ${u.age} years old`)      
    );

  } catch (err) {
    console.log(err)
  };
})();

