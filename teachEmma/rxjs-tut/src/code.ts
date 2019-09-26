//import { Observable } from "rxjs/Observable";
import {
  Observer,
  fromEvent,
  Observable,
  ReplaySubject,
  Subject,
  AsyncSubject,
  merge,
  from,
  interval
} from "rxjs";
import "rxjs/add/operator/skipUntil";
//import "rxjs/add/operator/share";

const addItem = (item: any) => {
  const node = document.createElement("li");
  const textNode = document.createTextNode(item);
  node.appendChild(textNode);
  document.getElementById("output").appendChild(node);
};

const observable1: Observable<any> = Observable.create(
  (data: Observer<any>) => {
    let i = 1;
    setInterval(() => {
      data.next(i++);
    }, 1000);
  }
);

const observable2 = new Subject();

setTimeout(() => {
  observable2.next("Hey!");
}, 5000);

observable2.subscribe((x: any) => {
  addItem(x);
});

const newObservable = observable1.skipUntil(observable2);

const observer = newObservable.subscribe((x: any) => {
  addItem(x);
});

setTimeout(() => {
  observer.unsubscribe();
}, 10000);
/* 
const observable= fromEvent(document, 'mousemove');
let subscription;
setTimeout(() => {
    subscription = observable.subscribe(
        (x: MouseEvent) => addItem(x)
    )
}, 2000); */

/* 
const observable: Observable<string> = Observable.create(
  (observer: Observer<string>) => {
    try {
      observer.next("Hey guys!");
      observer.next("How are you?!");
      setInterval(() => {
        observer.next("I am good");
      }, 2000);
    } catch (error) {
      observer.error(error);
    }
  }
).share();

const observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("Completed")
);

let observer2;
setTimeout(() => {
  observer2 = observable.subscribe((x: any) => addItem("Subscriber 2: " + x));
}, 1000);

observer.add(observer2);
setTimeout(() => {
  observer.unsubscribe();
}, 6001);
 */
