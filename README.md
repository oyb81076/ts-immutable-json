# install
yarn add ts-immutable
# ts-immutable
a simple immutable .d.ts support
## usage
```ts
import * as Immutable from "immutable";
import { fromJS, IRecord } from "ts-immutable-json";
interface IUser {
    _id: string;
    nickname?: string;
    age: number;
    timestamp: Date;
    children: IUser[];
    parent?: IUser;
    styles: Map<string, string>;
}
function func(user: IRecord<IUser>) {
  user.getIn(["children", 0, "age"]); // ok
  user.getIn(["children", 0, "age2"]); // ts error
  user.getIn(Immutable.Seq(["not exists name"])); // ok
}
function usage() {
  const u = fromJS({_id: "ok"});
  u.get("ok"); // error
  u.get("_id"); // ok
}
function fromImmutable() {
  const u: IRecord<IUser> = Immutable.fromJS({});
}
```
# example
![pic0](https://github.com/oyb81076/ts-immutable-json/blob/master/example/pic0.png)
![pic0](https://github.com/oyb81076/ts-immutable-json/blob/master/example/pic1.png)
