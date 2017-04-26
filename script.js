var addSkillButton = document.querySelector('#add-skill-button');
var addPersonaButton = document.querySelector("#add-persona-button");
var exportPersonasButton = document.querySelector("#export-personas-button");

var list_persona_json = {}

var current_persona_json = {};

resetCurrentPersona();

addSkillButton.addEventListener("click", addSkill);
addPersonaButton.addEventListener("click", addPersona);
exportPersonasButton.addEventListener("click", exportPersonas);

function addPersona(event){
    event.preventDefault();

    current_persona_json.name = document.querySelector("#persona-name").value;
    current_persona_json.level =  parseInt(document.querySelector("#persona-level").value);
    current_persona_json.arcana = document.querySelector("#persona-arcana").value;

    current_persona_json.stats["strength"] = parseInt(document.querySelector("#persona-strength").value);
    current_persona_json.stats["magic"] =  parseInt(document.querySelector("#persona-magic").value);
    current_persona_json.stats["endurance"] =  parseInt(document.querySelector("#persona-endurance").value);
    current_persona_json.stats["agility"] =  parseInt(document.querySelector("#persona-agility").value);
    current_persona_json.stats["luck"] =  parseInt(document.querySelector("#persona-luck").value);

    current_persona_json.elems["slash"] = document.querySelector("#persona-elem-slash").value;
    current_persona_json.elems["strike"] = document.querySelector("#persona-elem-strike").value;
    current_persona_json.elems["pierce"] = document.querySelector("#persona-elem-pierce").value;
    current_persona_json.elems["fire"] = document.querySelector("#persona-elem-fire").value;
    current_persona_json.elems["ice"] = document.querySelector("#persona-elem-ice").value;
    current_persona_json.elems["elec"] = document.querySelector("#persona-elem-elec").value;
    current_persona_json.elems["wind"] = document.querySelector("#persona-elem-wind").value;
    current_persona_json.elems["light"] = document.querySelector("#persona-elem-light").value;
    current_persona_json.elems["dark"] = document.querySelector("#persona-elem-dark").value;


    addPersonaToList();

    console.log("Added json");
    console.log(current_persona_json)
    console.log("Updated list");
    console.log(list_persona_json);

    resetCurrentPersona();
}

function addSkill(event){
    event.preventDefault();

    var skillName = document.querySelector("#persona-skill-name").value;
    var skillLevelLearned = document.querySelector("#persona-skill-level-learned").value;

    if (skillName != "" && skillLevelLearned >= 0){

        var skillP = document.createElement("p");
        skillP.textContent = skillName + " (" + skillLevelLearned + ")";

        document.querySelector("#skill-list").appendChild(skillP);

        current_persona_json.skills[skillName] = skillLevelLearned;
    } else{
        alert("Invalid skill name/level learned")
    }
}

function addPersonaToList(){
    list_persona_json[current_persona_json.name] = current_persona_json;

    var personaList = document.querySelector("#persona-list");
    var personaP = document.createElement("p");
    personaP.textContent = current_persona_json.name + " (Lv. " + current_persona_json.level + ", " + current_persona_json.arcana + " Arcana)";

    personaList.appendChild(personaP);
}

function resetCurrentPersona(){
    document.getElementById("persona-form").reset();
    document.querySelector("#skill-list").innerHTML = ""
    current_persona_json = {}
    current_persona_json.skills = {}
    current_persona_json.elems = {}
    current_persona_json.stats = {}
}

function exportPersonas(event){
    event.preventDefault(true);

    exportPersonasButton.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(list_persona_json));
}
