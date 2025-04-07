import User from '../models/user';

class HomeController {
  async create(req, res) {
    const newuser = await User.create({
      name: 'Cicero',
      email: 'cicerosduelis@gmail.com',
    });
    res.json(newuser);
  }
}

export default new HomeController();
