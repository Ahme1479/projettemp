function searchList(inputElement, listParent) {
    const searchField = inputElement;
    const listContent = document.getElementById(listParent);
    if (!searchField || !listContent) {
      return;
    }

    let searchTxt = searchField.value.toLowerCase();
    listContent
      .querySelectorAll('li')
      .forEach((el) => {
        var rowTxt = el.innerText.toLowerCase();
        
        if (rowTxt.includes(searchTxt) === false && searchTxt !== "") {
            el.style.display = "none";
        } else {
          el.style.display = "";
        }
      });
 
  
    // For Mobile
    // const searchFieldMobile = document.querySelector("#table_search");
    // const tableContentMobile = document.getElementById("absher_table_mobile");
    // let searchTxtMobile = searchFieldMobile.value.toLowerCase();
    // tableContentMobile &&
    //   tableContentMobile.querySelectorAll("li").forEach((el) => {
    //     var rowTxt = el.innerText.toLowerCase();
    //     if (
    //       rowTxt.includes(searchTxtMobile) === false &&
    //       searchTxtMobile !== ""
    //     ) {
    //       el.style.display = "none";
    //     } else {
    //       el.style.display = "";
    //     }
    //   });
  }
  function reset(inputElement){
    if (!inputElement?.nextElementSibling) {
      return;
    }
     inputElement.nextElementSibling
    .querySelectorAll('li')
    .forEach((el) => {
        el.style.display = "";
    });
    inputElement.nextElementSibling.querySelector('input').value = null
  }
