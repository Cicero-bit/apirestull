import User from '../models/user';

class UserController {
  async create(req, res) {
    const newUser = await User.create({
      name: 'Cicero',
      email: 'cicerosduelis@gmail.com',
      password: '123456',
    });
    res.json(newUser);
  }
}

export default new UserController();
