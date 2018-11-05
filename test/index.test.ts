import { fromJS, Map, Seq } from "immutable";
import { fromJS as fromJSON, IRecord } from "../src";
interface IUser {
  _id: string;
  nickname?: string;
  age: number;
  timestamp: Date;
  children: IUser[];
  parent?: IUser;
  styles: Map<string, string>;
}
test("immutable", () => {
  const obj: IUser = {
    _id: "id",
    age: 30,
    children: [{
      _id: "id",
      age: 30,
      children: [],
      nickname: "nickname",
      styles: Map({ display: "block" }),
      timestamp: new Date(),
    }],
    nickname: "nickname",
    parent: {
      _id: "id.parent",
      age: 3,
      children: [],
      styles: Map({}),
      timestamp: new Date(),
    },
    styles: Map({ display: "block" }),
    timestamp: new Date(),
  };
  const user: IRecord<IUser> = fromJS(obj);
  expect(user.get("children").get(0)!.get("age"))
    .toEqual(obj.children[0].age);
  expect(user.getIn(["children", 0, "age"]))
    .toEqual(obj.children[0].age);
  const parent = user.get("parent");
  expect(parent).not.toBeUndefined();
  expect(parent!.get("_id")).toEqual(obj.parent!._id);
  expect(user.getIn(Seq(["not exists name"]))).toBeUndefined();
  expect(user.get("styles").get("block"))
    .toEqual(obj.styles.get("block"));
});
test("create object", () => {
  const user = { _id: "name" };
  const map = fromJSON(user);
  expect(map.get("_id")).toEqual(user._id);
});

test("create array", () => {
  const users = [{ _id: "name" }];
  const map = fromJSON(users);
  expect(map.get(0).get("_id")).toEqual(users[0]._id);
});
