import Shipping from "../models/shipping";
import BaseRepository from "../repositories/baseRepository";
import dotenv from "dotenv";

dotenv.config();
class ShippingController {
  /**
   * @description creates a new Shipping
   * @param  {object} req
   * @param {object} res
   * @returns {object} a newly created Shipping
   * @memberof ShippingController
   */

  static async createShipping(req, res) {
    try {
      const {
        TrackingNumber,
        ShippingStatus,
        locationFrom,
        locationTo,
        packageDetails,
        weight,
        dateArrival
      } = req.body;

      const options = {
        TrackingNumber,
        ShippingStatus,
        locationFrom,
        locationTo,
        packageDetails,
        weight,
        dateArrival
      };
 const findPackage = await Shipping.findOne({ TrackingNumber });


 if (findPackage) return res.status(400).send("Package already exists");

  const createShipping = await BaseRepository.create(Shipping, options);
      return res.status(201).send(createShipping);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  /**
   * @description Get all Shipping
   * @param  {object} req
   * @param {object} res
   * @returns {object}All Shipping
   * @memberof ShippingController
   */

  static async getAllShipping(req, res) {
    try {
      // set pagination parameters
      const { limit = 20, page = 1 } = req.query;
      const options = { limit: Number(limit), page };

      const allShippings = await BaseRepository.findAll(Shipping, {}, options);
      return res.status(200).send(allShippings);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  /**
   * @description Get a Job
   * @param  {object} req
   * @param {object} res
   * @returns {object}A Job
   * @memberof ShippingController
   */

  static async getAShipment(req, res) {
    try {
      const { shippingId } = req.params;

      const aShipment = await BaseRepository.findById(Shipping, {
        _id: shippingId
      });

      if (!aShipment) {
        return res.status(404).send("Item not found");
      }

      if (aShipment) {
        return res.status(200).send(aShipment);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  /**
   * @description Search for  a Package
   * @param  {object} req
   * @param {object} res
   * @returns {object}A shipment
   * @memberof ShippingController
   */

  static async searchPackage(req, res) {
    try {
      const { TrackingNumber } = req.body;

      const findShipping = await Shipping.find({
        TrackingNumber: { $regex: TrackingNumber, $options: "i" }
      });

      if (!findShipping.length) return res.status(404).send("Package not Found, Contact customer care");

      return res.status(200).send(findShipping);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  /**
   * @description Update a Package
   * @param  {object} req
   * @param {object} res
   * @returns {object}Update A package
   * @memberof ShippingController
   */

  static async updateaShipment(req, res) {
    try {
      const { shippingId } = req.params;

      const {
        TrackingNumber,
        ShippingStatus,
        locationFrom,
        locationTo,
        packageDetails,
        weight,
        dateArrival
      } = req.body;

      const options = {
        TrackingNumber,
        ShippingStatus,
        locationFrom,
        locationTo,
        packageDetails,
        weight,
        dateArrival
      };
      const updateJob = await BaseRepository.update(
        Shipping,
        { _id: shippingId },
        options
      );

      if (!updateJob) {
        return res.status(404).send("This Package doesnt exist");
      }

      if (updateJob) {
        return res.status(200).send(updateJob);
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  /**
   * @description Delete Shipping
   * @param  {object} req
   * @param {object} res
   * @returns {object}Delete Shipping
   * @memberof ShippingController
   */

  static async deleteShipping(req, res) {
    try {
      const { ShippingId } = req.params;

      const deleteShipping = await Shipping.findByIdAndDelete({ _id: ShippingId });
      if (!deleteShipping) return res.status(404).send("Package does not exist");

      if (deleteShipping) return res.status(200).send("Package deleted");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

export default ShippingController;
