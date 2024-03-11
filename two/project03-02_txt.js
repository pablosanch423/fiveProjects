

let htmlCode = " ";

let captions = new Array([
    "International Space Station fourth expansion [2009]",
    "Assembling the International Space Station [1998]",
    "The Atlantis docks with the ISS [2001]", 
    "The Atlantis approaches the ISS [2000]", 
    "The Atlantis approaches the ISS [2000]", 
    "International Space Station over Earth [2002]",
    "The International Space Station first expansion [2002]",
    "Hurricane Ivan from the ISS [2008]",
    "The Soyuz spacecraft approaches the ISS [2005]",
    "The International Space Station from above [2006]",
    "Maneuvering in space with the Canadarm2 [2006]",
    "The International Space Station second expansion [2006]",
    "The International Space Station third expansion [2007]",
    "The ISS over the Ionian Sea [2007]"
])

for (i in captions) {
      htmlCode += `
      <figure>
          <img alt="${captions[i]}" src='slide${i}.jpg' />
          <figcaption>${captions[i]}</figcaption>
      </figure>
  `;
}

document.getElementById("gallery").innerHTML = htmlCode;


