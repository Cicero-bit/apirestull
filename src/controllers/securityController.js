class SecurityController {
  async index(req, res) {
    return res.status(200).json('inside security');
  }
}

export default new SecurityController();
