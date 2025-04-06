/* info Button 1 */
document.querySelector("#iceCircle").addEventListener("mouseover", iceHighlight);
document.querySelector("#iceCircle").addEventListener("mouseout", iceUnHighlight);
document.querySelector("#iceCircle").addEventListener("click", iceInfo);
function iceHighlight() {
  console.log("iceHighlight");
  document.querySelector("#iceCircle").style.fill = "#fff";
  document.querySelector("#iceCircleText").style.fill = "black"
}
function iceUnHighlight() {
  console.log("iceUnHighlight");
  document.querySelector("#iceCircle").style.fill = "#f00";
  document.querySelector("#iceCircleText").style.fill = "white"
}
function iceInfo() {
  console.log("iceInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "1. Isens Dom";
  document.querySelector(".info-text > article > p").textContent =
    "Et fænomen sjældent set siden den Lille Istid – Øresund er frosset til is!\n\n" + "Vejrguderne har talt, og temperaturerne har været under -20°C i 14 dage i træk. Naturens vrede og klimaforvirring har skabt den perfekte frosne bro mellem Danmark og Sverige.\n\n" + "Det betyder kun én ting: Den gamle lov er aktiv igen. Pak dine vanter og find kæppen frem.";
    document.querySelector("#efficiency").innerHTML = "<h3>Hvad fryser Øresund egentlig ved?</h3><p>Øresund begynder først at fryse ved -2°C pga. saltindholdet. Men for den fulde “slå en svensker”-oplevelse, skal vi ned på -20°C – også kendt som: svenskertærskel-temperatur.</p>";
    document.querySelector("#requirement").innerHTML = "<h3>Historiske frysninger</h3><p>Sidste gang Øresund frøs til fuldt var i 1888. Dengang gik både soldater, sælgere og en enkelt beruset hest hele vejen over til Sverige uden at synke.</p>"
}

/* info button 2 */
document.querySelector("#kingCircle").addEventListener("mouseover", kingHighlight);
document.querySelector("#kingCircle").addEventListener("mouseout", kingUnHighlight);
document.querySelector("#kingCircle").addEventListener("click", kingInfo);
function kingHighlight() {
  console.log("kingHighlight");
  document.querySelector("#kingCircle").style.fill = "#fff";
  document.querySelector("#kingCircleText").style.fill = "black"
}
function kingUnHighlight() {
  console.log("kingUnHighlight");
  document.querySelector("#kingCircle").style.fill = "#f00";
  document.querySelector("#kingCircleText").style.fill = "white"
}
function kingInfo() {
  console.log("kingInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "2. Slå en svensker, red en nation";
  document.querySelector(".info-text > article > p").textContent =
    "I henhold til forordning nr. 42 af 1671, ''Ved tilfrysning af Øresund, gives enhver dansk borger ret til at afvise svenske indtrængere med en kæp, så længe slaget ikke medfører varigt mén (eller tab af hat).''\n\n" + "Lovens formål var oprindeligt at beskytte mod svenske overraskelsesangreb – i dag handler det mest om tradition, ære og lidt harmløs national sport.";
    document.querySelector("#efficiency").innerHTML = "<h3>Kæppe og jura – en hurtig guide</h3><p>Kæppen må ikke være længere end 1,2 meter og ikke lavet af metal. Bambus er acceptabelt, men kun hvis du råber “For Kongen!” mens du svinger den.</p>"
    document.querySelector("#requirement").innerHTML = "<h3>Klassiske undtagelser</h3><p>Du må ikke slå svenskere iført Lucia-kostumer, da det anses som hellig fredsdragt. Undtagelsen gælder dog ikke hvis de synger falsk.</p>"
}

/* info button 3 */
document.querySelector("#swedenCircle").addEventListener("mouseover", swedenHighlight);
document.querySelector("#swedenCircle").addEventListener("mouseout", swedenUnHighlight);
document.querySelector("#swedenCircle").addEventListener("click", swedenInfo);
function swedenHighlight() {
  console.log("swedenHighlight");
  document.querySelector("#swedenCircle").style.fill = "#fff";
  document.querySelector("#swedenCircleText").style.fill = "black"
}
function swedenUnHighlight() {
  console.log("swedenUnHighlight");
  document.querySelector("#swedenCircle").style.fill = "#f00";
  document.querySelector("#swedenCircleText").style.fill = "white"
}
function swedenInfo() {
  console.log("swedenInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "3. Sådan bruger du din kæp";
  document.querySelector(".info-text > article > p").textContent =
  "Vælg en kæp af ædeltræ – hassel, eg eller genbrug fra din farfars havehegn.\n\n" +
  "Retfærdige slag må kun ramme følgende zoner:\n" +
  "- Lægmusklen (for balanceforstyrrelse)\n" +
  "- Overarmen (til skræk og advarsel)\n" +
  "- Rygsækken (hvis de har smuglet med snus)\n\n" +
  "OBS:\nIngen slag mod ansigt, skridt eller IKEA-poser.\nVi slår med stil – ikke had.";

  document.querySelector("#efficiency").innerHTML = "<h3>Kæppens anatomi</h3><p>Grebet skal være fast men fleksibelt. Bonuspoint hvis du udskærer en rune i den. Ikke kun for magi – men også fordi det ser sejt ud i slowmotion.</p>"
  document.querySelector("#requirement").innerHTML = "<h3>Avancerede teknikker</h3><p>Kæphvirvlen™: en elegant 360° sving. Stød fra siden™: ideel til at afbryde svenskere i gang med at lægge beslag på danske kanelsnegle."

}

function cleanup() {
    console.log("cleanup");
    document.querySelector("#efficiency").removeEventListener("animationend", cleanup);
    document.querySelector("#requirement").removeEventListener("animationend", cleanup);

    document.querySelector("#efficiency").classList.remove("fadeIn");
    document.querySelector("#requirement").classList.remove("fadeIn");
}

function animateBoxes() {
    document.querySelector("#efficiency").classList.remove("hide");
    document.querySelector("#efficiency").classList.add("fadeIn");
    document.querySelector("#requirement").classList.remove("hide");
    document.querySelector("#requirement").classList.add("fadeIn");

    document.querySelector("#requirement").addEventListener("animationend", cleanup);
}