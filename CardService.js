import Card from "./Card.js";
import FileService from './FileService.js';

class CardService {
  // async create(card, images) {
  //   const fileName = images.map(image => FileService.saveFile(image));
  //   const createdCard = await Card.create({...card, images: fileName});
  //   return createdCard;
  // }
  async create(card, images) {
    try {
      const imageArray = Array.isArray(images) ? images : [images];
      
      const fileNames = await Promise.all(
        imageArray
          .filter(image => image)
          .map(image => FileService.saveFile(image))
      );

      const createdCard = await Card.create({
        ...card,
        images: fileNames
      });

      return createdCard;
    } catch (error) {
      console.error('Error in CardService.create:', error);
      throw error;
    }
  }
  // info:  logic of getting all cards
  async getAll() {
    const cards = await Card.find();
    return cards;
  }
  // info: logic of getting only one card
  async getOne(id) {
    if (!id) {
      throw new Error("ID is not defined");
    }
    const card = await Card.findById(id);
    return card;
  }
  // info: updating card logic with simple check if id is present
  async update(card) {
    if (!card._id) {
      throw new Error("ID not provided");
    }
  
    const existingCard = await Card.findById(card._id);
    if (!existingCard) {
      throw new Error("Card not found");
    }
  
    const newImages = card.images || [];
    const imageArray = Array.isArray(newImages) ? newImages : [newImages];
  
    const newFileNames = await Promise.all(
      imageArray
        .filter(image => typeof image !== 'string')
        .map(image => FileService.saveFile(image))
    );

    const updatedImages = [
      ...existingCard.images.filter(img => newImages.includes(img)),
      ...newFileNames,
    ];
  
    const updatedCard = await Card.findByIdAndUpdate(
      card._id,
      { ...card, images: updatedImages },
      { new: true }
    );
  
    return updatedCard;
  }

  // info: logic of deleting cards from server
  async delete(id) {
      if (!id) {
        throw new Error('ID not provided')
      }
      const card = await Card.findByIdAndDelete(id);
      return card;
  }
}

export default new CardService();
