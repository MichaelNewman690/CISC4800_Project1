function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
nextChar('a');
const axe = "https://youtu.be/devsJE4IBFw";
const shuriken = "https://youtu.be/ySjVhG9GCz8";
const spear = "https://youtu.be/kHIySbrjLtE";
const umbrella = "https://youtu.be/fpBq906Ox6E";
const flamevent = "https://youtu.be/0X-Fs-fpfcc";
const firecracker = "https://youtu.be/rO9XM2atdLg";
const sabimaru = "https://youtu.be/R7V6_BLP7BQ";
const mistraven = "https://youtu.be/zHmLzUdz5jQ";
const fan = "https://youtu.be/X3zzB4r_TVs";
const fingerwhistle = "https://youtu.be/7ACzKF8f6Wg";
const tools = new Map();
tools.set("A1",["Prosthetic arm"])
tools.set("A2",["Spinning Shuriken", shuriken, "200 Sen", "3x Scrap Iron"])
tools.set("A3",["Loaded Spear Thrust Type", spear,"400 Sen","5x Scrap Iron"])
tools.set("A4",["Loaded Spear Cleave Type", spear, "600 Sen","4x Scrap Iron","3x Scrap Magnetite"])
tools.set("A5",["Spiral Spear", spear, "1000 Sen", "4x Scrap Magnetite", "10x Scrap Iron"])
tools.set("A6",["Leaping Flame", spear, "1500 Sen", "1x Fulminated Mercury","2x Adamantite Scrap",
"8x Black Gunpowder","4x Yellow Gunpowder"])
tools.set("B4",["Gouging Top", shuriken, "600 Sen","3x Scrap Magnetite"])
tools.set("B6",["Sen Throw", shuriken, "2000 sen","2 Adamantite Scrap"
,"4 Scrap Magnetite","4 Scrap Iron"])
tools.set("C3",[" Spring-load Axe", axe, "400 Sen", "5x Scrap Iron"])
tools.set("C4",["Aged Feather Mist Raven", mistraven, " 500 Sen", "2x Scrap Magnetite",
"1x Lump of Fat Wax", "2x Black Gunpowder "])
tools.set("C5",["Phantom Kunai", shuriken, "Phantom Kunai x1","Lump of Fat Wax x3","Scrap Iron x6"
,"Scrap Magnetite x3","Sen x1000"])
tools.set("C6",["Great Feather Mist Raven", mistraven, "1500 Sen", "4x Lump of Fat Wax"
,"4x Yellow Gunpowder", "3x Lump of Grave Wax", "3x Fulminated Mercury"])
tools.set("C7",["Lazulite Shuriken", shuriken, "2x Lapis Lazuli", "6x Scrap Magnetite"
,"6x Lump of Fat Wax","3x Lump of Grave Wax","5x Adamantite Scrap"])
tools.set("D4",["Improved Sabimaru", sabimaru, "600 sen", "Scrap Iron x4","Scrap Magnetite x 4"])
tools.set("D6",["Piercing Sabimaru", sabimaru, "1500 Sen","8x Scrap Iron",
"4x Scrap Magnetite","4x Adamantite Scrap"])
tools.set("D7",["Lazulite Sabimaru", sabimaru, "3000 Sen", "2x Lapis Lazuli",
"4x Adamantite Scrap", "4x Fulminated Mercury", "8x Scrap Magnetite", "12x Scrap Iron"])
tools.set("E2",["Spring-load Firecracker", firecracker, "2x Scrap Iron", "1x Black Gunpowder", "200 Sen"])
tools.set("E3",["Double Divine Abduction", fan, "400 sen", "Scrap Iron x 3", "Black Gunpowder x 2"])
tools.set("E4",["Long Spark", firecracker, "500 Sen", "2x Yellow Gunpowder", "3x Black Gunpowder"])
tools.set("E5",["Sparking Axe", axe, "1000 sen", "Adamantite Scrap x2",
"Yellow Gunpowder x2", "Scrap Iron x4", "Black Gunpowder x4"])
tools.set("E6",["Purple Fume Spark", firecracker, "1500 Sen","5x Lump of Fat Wax",
"2x Adamantite Scrap","2x Fulminated Mercury"])
tools.set("E7",["Lazulite Axe", axe ,"3000 Sen","3x Lapis Lazuli"
,"5x Adamantite Scrap","3x Lump of Grave Wax","3x Fulminated Mercury"])
tools.set("F4",["Mountain Echo", fingerwhistle, "600 sen", "Lump of Fat Wax x 2",
"Scrap Magnetite x 3"])
tools.set("F5",["Phoenix's Lilac Umbrella", umbrella, "1000 Sen","6x Scrap Iron"
,"4x Lump of Fat Wax","4x Scrap Magnetite"])
tools.set("F6",["Malcontent", fingerwhistle, "4 x Scrap Magnetite", "4 x Lump of Fat Wax"
,"2 x Adamantite Scrap", "1 x Malcontent's Ring", "2 x Lump of Grave Wax"])
tools.set("G3",["Spring-load Flame Vent", flamevent, "400 Sen", "3x Scrap Iron", "4x Black Gunpowder"])
tools.set("G4",["Loaded Umbrella - Magnet", umbrella, " 500 Sen", "3x  Scrap Magnetite",
"4x Scrap Iron"])
tools.set("G5",["Okinaga's Flame Vent", flamevent, "1000 Sen", "1x Pine Resin Ember"
,"2x Scrap Magnetite", "6x Black Gunpowder", "4x Yellow Gunpowder "])
tools.set("G6",["Golden Vortex", fan, "1500 Sen", "8x Scrap Iron", "4x Lump of Fat Wax"
,"2x Adamantite Scrap","2x Lump of Grave Wax"])
tools.set("H6",["Suzaku's Lotus Umbrella", umbrella, "1500 Sen","2 x Adamantite Scrap",
"2 x Fulminated Mercury","6 x Scrap Magnetite","6x  Yellow Gunpowder"])
tools.set("H7",["Lazulite Sacred Flame", flamevent, "3000 Sen", "4x Lump of Grave Wax"
,"3x Lapis Lazulite", "7x Lump of Fat Wax", "7x Yellow Gunpowder", "4x Fulminated Mercury"])
window.onload = function() {
  let rowCounter = "A";
  let doc = document.querySelector("#toolTable");
  for(i = 0; i < 8; i++){
    let row = document.createElement("tr");
    addElements(row, rowCounter);
    doc.appendChild(row)
    rowCounter = nextChar(rowCounter);
  }

  function addElements(thisRow, currentRow){
    for(column = 1; column <= 7; column++){
      let place = currentRow+column;

      if(place.valueOf() === "A1".valueOf()){

      }
      else if (tools.has(place)) {
        let para = document.createElement("td");
        let node = document.createTextNode("CLICK FOR INFO");
        para.setAttribute("class", place);
        para.appendChild(node);
        thisRow.appendChild(para);
    }
      else{
        let para = document.createElement("td");
        thisRow.appendChild(para);


      }
    }
  }

};
