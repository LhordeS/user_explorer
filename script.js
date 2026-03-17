"use strict";

const list = document.getElementById("users");

fetch("https://randomuser.me/api/?results=5")
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((user) => {
      if (user.location.country === "Canada") {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = user.picture.thumbnail;

        const name = `${user.name.first} ${user.name.last}`;
        const country = user.location.country;

        li.appendChild(img);
        li.appendChild(document.createTextNode(`${name} from ${country}`));

        list.appendChild(li);
      }
    });
  });
