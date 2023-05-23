
import { DataSource } from "typeorm";
import { Country } from "../entities/countryEntity";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./country_db",
  entities: [Country],
  synchronize: true,
  logging: ["query", "error"], // NE PAS UTILISER EN PROD !!

});

export default dataSource;