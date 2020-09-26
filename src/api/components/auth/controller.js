const auth = require('../../../utils/mocks/auth');
const bcrypt = require('bcrypt');
const Auth = require('../../../store/models/Auth');

async function login(username, password) {
  const data = await Auth.findAll({
    where: {
      username: username,
    },
  }).then((res) => {
    return res[0].toJSON();
  });

  return bcrypt.compare(password, data.password).then((isTheSame) => {
    if (isTheSame === true) {
      return auth.sign(JSON.parse(JSON.stringify(data)));
    } else {
      throw new Error('Invalid information');
    }
  });
}

const insert = (body) => {
  return Auth.create({
    username: body.username,
    password: bcrypt.hashSync(body.password, 10),
    email: body.email,
  });
};

const update = (body, id) => {
  return Auth.update(
    {
      username: body.username,
      password: bcrypt.hashSync(body.password, 10),
      email: body.email,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

const remove = (id) => {
  return Auth.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  insert,
  update,
  remove,
  login,
};
