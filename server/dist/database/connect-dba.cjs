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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/database/connect-dba.ts
var connect_dba_exports = {};
__export(connect_dba_exports, {
  connectDb: () => connectDb
});
module.exports = __toCommonJS(connect_dba_exports);

// src/config/index.ts
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var SECRET = process.env.SECRET;
var DBA_URL = process.env.DATABASE_URL;
var PORT = process.env.NODE_ENV === "production" ? process.env.PORT : "3333";

// src/database/connect-dba.ts
var import_mongoose = __toESM(require("mongoose"), 1);
var connectDb = async () => {
  try {
    import_mongoose.default.set("strictQuery", false);
    await import_mongoose.default.connect(DBA_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
    console.log("Error connecting to the database, server not started");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  connectDb
});
