var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/models/car-schema.ts
var car_schema_exports = {};
__export(car_schema_exports, {
  CarDba: () => CarDba
});
module.exports = __toCommonJS(car_schema_exports);
var mongoose = __toESM(require("mongoose"), 1);
var carSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  image: [{ type: String, required: true }],
  brand: { type: String, required: true },
  price: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  owner: {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String }
  }
});
var CarDba = mongoose.model("cars", carSchema);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CarDba
});
