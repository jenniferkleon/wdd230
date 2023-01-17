
    let lastupdated = document.lastModified;
    document.getElementById("last-updated").innerHTML= lastupdated;
    let copyrightyear = document.querySelector("#copyright");
copyrightyear.innerHTML = `© ${new Date().getFullYear()} | Jennifer K. Leon | Nevada`;
