import "reflect-metadata";
import express, { Express } from "express";
import dataSource from "./lib/dataSource";
import CountryResolver from "./resolver/CountryResolver";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
//import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const startCountry = async () => {
  
  const apolloServer = new ApolloServer({ 
    schema: await buildSchema({ resolvers: [CountryResolver]
    }),
    //plugins: [ApolloServerPluginLandingPageGraphQLPlayground()] // Active GraphQL Playground, l'abus sur le nom...
  });

  await apolloServer.start();
  const app: Express = express();

  apolloServer.applyMiddleware({ app });

  app.get("/", (_req, res) => res.send("Hello World"));

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => console.log(`🚀  Serveur prêt sur ${PORT}`));

  await dataSource.initialize();
};

startCountry();