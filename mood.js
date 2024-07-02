const h1 = document.querySelector("h1");
h1.innerText = store.getState().payload;

const happy = document.querySelector("#happy");
happy.addEventListener("click", function (e) {
    store.dispatch({ type: "Happy" });
    h1.innerText = store.getState().payload;
});

const sad = document.querySelector("#sad");
sad.addEventListener("click", function (e) {
    store.dispatch({ type: "Sad" });
    h1.innerText = store.getState().payload;
});

const angry = document.querySelector("#angry");
angry.addEventListener("click", function (e) {
    store.dispatch({ type: "Angry" });
    h1.innerText = store.getState().payload;
});

const confused = document.querySelector("#confused");
confused.addEventListener("click", function (e) {
    store.dispatch({ type: "Confused" });
    h1.innerText = store.getState().payload;
});
