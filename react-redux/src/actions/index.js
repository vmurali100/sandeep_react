export function sayHello() {
  let action = {
    type: "HELLO",
    payLoad: "Hello World"
  };
  return action;
}

export function updateCount() {
  let action = {
    type: "UPDATE",
    payLoad: ""
  };
  return action;
}
