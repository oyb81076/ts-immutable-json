import { fromJS as fromJSON } from "../src";
test.only("update", () => {
  const map = fromJSON({ _id: "map" });
  const next = map.withMutations((v) => {
    v.update("_id", () => "nextId");
  });
  expect(next.get("_id")).toEqual("nextId");
});
