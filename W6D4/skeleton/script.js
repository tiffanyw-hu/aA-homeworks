document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

const handleFavoriteSubmit = (event) => {
  event.preventDefault();

  const favoriteInput = document.querySelector(".favorite-input");
  const favourite = favoriteInput.value;
  favoriteInput.value = "";

  const newListLi = document.createElement("li");
  newListLi.textcontent = favourite;

  const favouritesList = document.getElementbyId("sf-places");
  favouritesList.append(newListLi);
};

const listSubmitButton = document.querySelector(".favorite-submit");
listSubmitButton.addEventListener("click", handleFavoriteSubmit);


  // adding new photos

const handlePhotoSubmit = () => {
  preventDefault();

  const photoUrlInput = document.querySelector(".photo-url-input");
  const photoUrl = photoUrlInput.value;
  photoUrlInput.value = "";

  const newImg = document.createElement("img");
  newImg.src = "http://www.splashwavetour.com/wp-content/uploads/2016/09/Manatee-1024x577.jpg";

  const newPhotoLi = document.createElement("li");
  newPhotoLi.appendChild(newImg);

  const dogPhotosList = document.querySelector(".dog-photos");
  dogPhotosList.appendChild(newPhotoLi);

};

  const photoSubmitButton = document.querySelector(".photo-url-submit");
  photoSubmitButton.addEventListener("click", handlePhotoSubmit);

});
