import mongoose, { mongo } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import mongooseValidate from "mongoose-unique-validator";

const { Schema } = mongoose;
const shippingSchema = new Schema(
  {
    TrackingNumber: {
      type: String,
      maxlength: 10,
      trim: true
    },
    ShippingStatus: {
      type: String,
      // enum: [
      //   "Parcel not dispatched yet",
      //   "Pick up",
      //   "In Transit",
      //   "Hub scan",
      //   "Consolidation",
      //   "System Return",
      //   "In customs clearance",
      //   "Inbound",
      //   "Out for delivery",
      //   "Delivered",
      //   "Not Present",
      //   "Wrong Address",
      //   "Parcel shipped by other means",
      //   "Delay due to unknown reason",
      //   "Access code required",
      //   "Return to sender"
      // ]
    },
    locationFrom: {
      type: String,
      // minlength: 2,
      trim: true
    },
    locationTo: {
      type: String,
      // minlength: 2,
      trim: true
    },

    packageDetails: {
      type: String,
      // minlength: 4,
      trim: true
    },
    itemWeight: {
      type: String,
      // minlength: 1,
      trim: true
    },
    itemHeight: {
      type: String,
      // minlength: 1,
      trim: true
    },
    itemColor: {
      type: String,
      // minlength: 1,
      trim: true
    },
    itemContent: {
      type: String,
      // minlength: 1,
      trim: true
    },
    dateShipped: {
      type: String
    },
    dateArrival: {
      type: String
    },
    timeShipped: {
      type: String
    },
    deliveryType: {
      type: String,
      // minlength: 2,
      trim: true
    },
    RecieverName: {
      type: String,
      // minlength: 2,
      trim: true
    },
    RecieverAddress: {
      type: String,
      // minlength: 2,
      trim: true
    },
    location: {
      type: String,
      // minlength: 2,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

shippingSchema.plugin(mongooseValidate);
shippingSchema.plugin(mongoosePaginate);

const Shipping = mongoose.model("Shipping", shippingSchema);

export default Shipping;
