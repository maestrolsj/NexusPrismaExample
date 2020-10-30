import { makeSchema, queryType } from "@nexus/schema";

const Query = queryType({
  definition(t) {
    t.string("name", () => "sejin lee");
  },
});
export const schema = makeSchema({
  types: { Query },
});
