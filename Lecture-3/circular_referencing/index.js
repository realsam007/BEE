var obj1={
    a:10,
    b:20,
    // obj2:obj2
};

var obj2={
    c:30,
    d:40,
    // obj1:obj1
};
obj1.obj2=obj2;
obj2.obj1=obj1;
console.log(obj1);
console.log(obj2);