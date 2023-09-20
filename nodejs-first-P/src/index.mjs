import indexRoutes from "./router/index.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url"; // Importa fileURLToPath desde el módulo "url"
import express from "express";

const app = express();

// Convierte import.meta.url en una ruta de archivo
const __filename = fileURLToPath(import.meta.url);
const _dirname = dirname(__filename);

app.set("views", join(_dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRoutes);

app.use(express.static(join(_dirname, 'public')))

app.listen(3000);
