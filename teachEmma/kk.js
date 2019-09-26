/* 

const nn = new Map();

nn.set(1, 1);

console.log(nn.get(1));

const mm = {}

mm["54k"] = "sweet";
console.log(mm["54k"]) */

let counter = () => {
  let initalNum = 0;
  const changeValue = value => (initalNum += value);
  return {
    increase: () => changeValue(1),
    decrease: () => changeValue(-1),
    getCount: () => initalNum
  };
};

counter = counter();

console.dir(counter.initalNum);
console.dir(counter.getCount());
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
counter.decrease();
console.log(counter.getCount());
console.log(counter.getCount());
console.log(counter.getCount());

const hunt = () => "hunted";
console.log(hunt());
