import { ApolloServer } from "apollo-server";
import { schema } from "src/schema";
import { createContext } from "src/context";

const server = new ApolloServer({
  schema,
  context: createContext,
  tracing: process.env.NODE_ENV === "development",
});
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}${server.graphqlPath}`);
});
// export const config = {
//   api: { bodyParder: false },
// };
// export default handler;
