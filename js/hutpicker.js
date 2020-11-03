function whenHutsizedSelected(searchText) {

    const aTags = document.querySelectorAll(".accordion__header");
    let found = false;

    for (let i = 0; i < aTags.length; i++) {
        if (!aTags[i].textContent.toLowerCase().includes(searchText)) {
            aTags[i].style.display = "none";
        } else {
            aTags[i].style.display = "block";
            found = true;
        }
    }

    return found;
}

search_button.addEventListener("click", function () {

    location.hash = "searchresults_list";

    const radios = document.getElementsByName('hutsize');
    let searchText = "";
    let found = false;

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            searchText = radios[i].value.toLowerCase();
            found = whenHutsizedSelected(searchText);

            if (found) {
                searchresults_list.style.display = "block";
                no_searchresults.style.display = "none";
            } else {
                searchresults_list.style.display = "none";
                no_searchresults.style.display = "block";
            }
        }
    }

})
