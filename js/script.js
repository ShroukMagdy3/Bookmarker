var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteURL");
var sites = [];
var urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\/\w.-]*)*\/?$/;
var siteNameRegex = /([\w-]+)/;

if (localStorage.getItem("sites") != null) {
  sites = JSON.parse(localStorage.getItem("sites"));
  display();
}
// submit
function submit() {
  // alert("hi");
  if (urlRegex.test(siteUrl.value)) {
    var site = {
      name: siteName.value,
      URL: siteUrl.value,
    };
    sites.push(site);
    localStorage.setItem("sites", JSON.stringify(sites));
    display();
    clear();
  } else {
    // document.getElementById("warningMessage").innerHTML=`Please enter a valid URL and name.`
    alert(`Please enter a valid URL and name.`);
  }
}
function display() {
  var cartoona = "";
  for (var i = 0; i < sites.length; i++) {
    cartoona += `
         <tr>
            <td>${i + 1}</td>
            <td>${sites[i].name}</td>
            <td><button class="btn"><a href="${
              sites[i].URL
            }"class="text-white text-decoration-none rounded" id="visit"><i class="fa-solid fa-eye"></i> Visit</a> </button></td>
            <td><button class="btn btn-danger" onclick ="deleteSite(${i})"> <i class="fa-solid fa-delete-left"></i> Delete</button></td>
          </tr>
        `;
  }
  document.getElementById("tableContent").innerHTML = cartoona;
}
// clear
function clear() {
  siteName.value = "";
  siteUrl.value = "";
}
// delete
function deleteSite(index) {
  sites.splice(index, 1);
  localStorage.setItem("sites", JSON.stringify(sites));
  display();
}
