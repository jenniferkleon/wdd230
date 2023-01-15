
    let lastupdated = document.lastModified;
    document.getElementById("lastupdated").innerHTML= lastupdated;
    let copyrightyear = document.querySelector("#copyright");
copyrightyear.innerHTML = `© ${new Date().getFullYear()} | Jennifer K Leon | Nevada`;
