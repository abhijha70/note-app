const addBtn = document.querySelector("#btn");
const main = document.querySelector("#main");

const saveNotes = () => {
  const note = document.querySelectorAll("#note textarea");
  const data = [];
  note.forEach((notes) => {
    data.push(notes.value);
  });
  console.log(data);
  if (data.length === 0) {
    localStorage.removeItem("note");
  } else {
    localStorage.setItem("note", JSON.stringify(data));
  }
};

addBtn.addEventListener("click", function () {
  taskadded();
});

const taskadded = (text = "") => {
  const newNote = document.createElement("div");
  newNote.classList.add("newNote");

  newNote.innerHTML = `<div id="note">
    <div id="tool">
 <span id = 'save' class="icon"> 
       &#128210;
       </span>
       <span id = 'delete' class = 'icon'>
     &#128465;
 </span>

    </div>
 <textarea >${text}</textarea>
 </div>`;
  newNote.querySelector("#delete").addEventListener("click", function () {
    newNote.remove();
    saveNotes();
  });

  newNote.querySelector("#save").addEventListener("click", function () {
    saveNotes();
  });
  newNote.querySelector("textarea").addEventListener("focusout", function () {
    saveNotes();
  });

  main.appendChild(newNote);
  saveNotes();
};

(function () {
  const localNotes = JSON.parse(localStorage.getItem("note"));

  if (localNotes === null) {
    taskadded();
  } else {
    localNotes.forEach((localNotes) => {
      taskadded(localNotes);
    });
  }
})();
