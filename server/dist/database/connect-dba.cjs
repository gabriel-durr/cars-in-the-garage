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

// src/database/connect-dba.ts
var connect_dba_exports = {};
__export(connect_dba_exports, {
  connectMongo: () => connectMongo
});
module.exports = __toCommonJS(connect_dba_exports);

// src/config/index.ts
var import_dotenv = require("dotenv");
(0, import_dotenv.config)();
var url = process.env.DATABASE_URL;
var port = process.env.port;

// src/database/connect-dba.ts
var import_mongoose = __toESM(require("mongoose"), 1);
function connectMongo() {
  import_mongoose.default.set("strictQuery", false);
  import_mongoose.default.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = import_mongoose.default.connection;
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log("Connected to MongoDB"));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  connectMongo
});
