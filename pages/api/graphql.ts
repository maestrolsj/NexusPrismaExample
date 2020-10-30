import { ApolloServer } from "apollo-server-micro";
import { schema } from "src/schema";

const server = new ApolloServer({ schema });
const handler = server.createHandler({ path: "/api/grapthql" });

export const config = {
  api: { bodyParder: false },
};
export default handler;
