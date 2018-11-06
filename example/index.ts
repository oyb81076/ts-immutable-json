import * as Immutable from "immutable";
import { fromJS, IRecord } from "ts-immutable-json";
interface IUser {
  _id: string;
  nickname?: string;
  age: number;
  timestamp: Date;
  children: IUser[];
  parent?: IUser;
  styles: Immutable.Map<string, string>;
}
function func(user: IRecord<IUser>) {
  user.getIn(["children", 0, "age"]); // ok
  // user.getIn(["children", 0, "age2"]); // ts error
  user.getIn(Immutable.Seq(["not exists name"])); // ok
  const map = Immutable.Map();
  map.merge({});
  map.deleteIn([""]);
  user.updateIn(["children", 0], (u) => {
    return u!.set("age", 3);
  });
}
function usage() {
  const u = fromJS({ _id: "ok" });
  // u.get("ok"); // error
  // u.set("_id", 3); // error
  u.set("_id", "ok"); // ok
}
function fromImmutable() {
  const u: IRecord<IUser> = Immutable.fromJS({});
}
