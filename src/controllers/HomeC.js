class HomeController {
  async create(req, res) {
    return res.json('index');
  }
}

export default new HomeController();
