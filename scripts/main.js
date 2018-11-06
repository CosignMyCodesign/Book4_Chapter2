
// Click event that runs a function
document.querySelector(".lego__save").addEventListener("click", event => {
  const legoCreator = document.querySelector("#lego__creator").value
  const legoColor = document.querySelector("#lego__color").value
  const legoShape = document.querySelector("#lego__shape").value
  const legoCreation = document.querySelector("#lego__creation").value

  //Builds data structure (Object to be posted to database)
  const legoToSave = {
      "creator": legoCreator,
      "color": legoColor,
      "shape": legoShape,
      "creation": legoCreation
  }
// Posts to my database
  fetch("http://localhost:3000/legoCreation", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})
  console.log("post saved")
})