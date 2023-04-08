function asyncFunc1(cb1) {
  setTimeout(cb1, 1000);
}

function asyncFunc2(cb2) {
  setTimeout(cb2, 1000);
}

function asyncFunc3(cb3) {
  setTimeout(cb3, 1000);
}

asyncFunc1(() => {
  console.log("cb1 호출");
  asyncFunc2(() => {
    console.log("cb2 호출");
    asyncFunc3(() => {
      console.log("cb3 호출");
    });
  });
});
