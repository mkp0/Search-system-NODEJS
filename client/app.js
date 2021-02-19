console.log("hello baby");
const name = document.getElementById("name");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const myid = document.getElementById("myid");

const search = document.getElementById("search");

search.addEventListener("input", async (e) => {
  let data = {
    name: e.target.value,
  };

  if (data.name.length === 0) {
    myid.innerHTML = "";
    return;
  }

  fetch("http://localhost:5001/post/alldata", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      myid.innerHTML = "";
      if (res.length === 0) {
        var para = document.createElement("p");
        var node = document.createTextNode("NO REASULT FOUND SORRY!!");
        para.appendChild(node);
        para.classList.add("add1");
        myid.appendChild(para);
        return;
      }
      res.forEach((element) => {
        var para = document.createElement("p");
        var node = document.createTextNode(
          "Hello " + element.name + " Your Password is : " + element.password
        );
        para.appendChild(node);
        para.classList.add("add1");
        myid.appendChild(para);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let nameValue = name.value;
  let passwordValue = password.value;

  console.log(nameValue, passwordValue);

  let data = {
    name: nameValue,
    password: passwordValue,
  };

  fetch("http://localhost:5001/post/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
