import CardService from "./CardService.js";

class CardController {
  async create(req, res) {
    try {
      const card = await CardService.create(req.body, req.files.images);
      res.json(card);
    } catch(error) {
      res.status(500).json(error);
    }
  }
// info:  logic of getting all cards
  async getAll(req, res) {
    try {
      const cards = await CardService.getAll()
      return res.json(cards);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  // info: logic of getting only one card
  async getOne(req, res) {
    try {
      const card = await CardService.getOne(req.params.id);
      return res.json(card);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  // info: updating card logic with simple check if id is present
  async update(req, res) {
    try {
      const updatedCard = await CardService.update(req.body);
      return res.json(updatedCard);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // info: logic of deleting cards from server
  async delete(req, res) {
    try {
      const card = await CardService.delete(req.params.id);
      return res.json(card);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new CardController();