var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/config/index.ts
var import_dotenv = require("dotenv");
(0, import_dotenv.config)();
var url = process.env.DATABASE_URL;
var port = process.env.PORT;

// src/database/connect-dba.ts
var import_mongoose = __toESM(require("mongoose"), 1);
var connectDb = async () => {
  try {
    import_mongoose.default.set("strictQuery", false);
    await import_mongoose.default.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
    console.log("Error connecting to the database, server not started");
  }
};

// src/models/car-schema.ts
var mongoose2 = __toESM(require("mongoose"), 1);
var carSchema = new mongoose2.Schema({
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
var CarDba = mongoose2.model("cars", carSchema);

// src/controllers/car-controllers.ts
var import_uuid = require("uuid");
var getAllCars = (req, res) => {
  CarDba.find({}, (err, allCars) => {
    if (err)
      return res.status(500).json(err);
    return res.status(200).json({ allCars });
  });
};
var createNewCar = (req, res) => {
  const { body } = req;
  const newCar = new CarDba({
    _id: (0, import_uuid.v4)(),
    ...body
  });
  CarDba.exists({ model: newCar.model }, (err, exists) => {
    if (err)
      return res.status(500).send(err);
    if (exists)
      return res.status(400).send({ message: "Esse modelo de carro j\xE1 existe" });
  });
  newCar.save((err, carAd) => {
    if (err)
      return console.error(err);
    return res.status(201).send(`${carAd.model} Salvo com Suceoss \u{1F3CE}\uFE0F!`);
  });
};
var updateAllToCar = (req, res) => {
  const {
    body,
    params: { id }
  } = req;
  CarDba.findByIdAndUpdate(
    id,
    { $set: body },
    { upsert: false, new: true },
    (err, car) => {
      if (err)
        return res.status(404).send(`Carro ${car.model} n\xE3o encontrado.`);
      return res.send(`Carro ${car.model} foi atualizado com sucesso!`);
    }
  );
};
var updateSpecificToCar = (req, res) => {
  const {
    body,
    params: { id }
  } = req;
  console.log(id);
  CarDba.findByIdAndUpdate(id, body, { upsert: false, new: true }, (err, car) => {
    if (err)
      return res.status(404).send(`Carro ${car.model} n\xE3o encontrado.`);
    return res.send(`Carro ${car.model} foi atualizado com sucesso!`);
  });
};
var deleteCar = (req, res) => {
  const {
    body,
    params: { id }
  } = req;
  CarDba.findById(id, (err, car) => {
    if (err)
      return res.status(500).send(err);
    if (!car)
      return res.status(404).send("Carro n\xE3o encontrado.");
    car.remove((err2, deletedCar) => {
      if (err2)
        return res.status(500).send(err2);
      return res.send(`Carro ${deletedCar.model} foi deletado.`);
    });
  });
};

// src/server.ts
var import_express = __toESM(require("express"), 1);
var import_cors = __toESM(require("cors"), 1);
var port2 = port || 3333;
var app = (0, import_express.default)();
connectDb().then(
  () => app.listen(port2, () => console.log(`Server running ${port2} \u26A1`))
);
app.use(import_express.default.json());
app.use((0, import_cors.default)());
app.get("/cars", getAllCars);
app.post("/car", createNewCar);
app.put("/car/:id", updateAllToCar);
app.patch("/car/:id", updateSpecificToCar);
app.delete("/car/:id", deleteCar);
