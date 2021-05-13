function loadMoreHandler(baseURL, pageNumber) {
  document.querySelectorAll("#loadMore span").forEach(function (item) {
    item.classList.toggle("visually-hidden");
  });

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("#loadMore").remove();

      var re = document.createElement('div');
      re.innerHTML = this.responseText;
      var nextPageContent = re.querySelector("#posts").innerHTML;
      document.querySelector("#posts").insertAdjacentHTML("beforeend", nextPageContent);
    }
  };

  xhttp.open("GET", baseURL + "page/" + pageNumber, true);
  xhttp.send();
}
