import {
    submitFunc
} from "./src/index.js";

const data = require("../temp.js");

const records = data.records;

const nodes = data.node;

const fields = {};

for (let i = 0; i < records.length; i += 2) {
    const f = records[i + 1].split(",");
    for (let j = 0; j < f.length; j++) {
        f[j] = f[j].replace('(', '');
        f[j] = f[j].replace(')', '');
    }
    fields[records[i]] = f;
}

const getLabel = (name) => {
    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", 'radio-button');
    name = name.replace("field#", "");
    newLabel.innerHTML = name;
    newLabel.style.fontSize = 9;
    newLabel.style.overflowX = scroll;
    return newLabel;
}
const getButton = (name, value) => {
    const newButton = document.createElement("input");
    newButton.setAttribute("type", 'radio');
    newButton.setAttribute("id", 'radio-button');
    newButton.setAttribute("name", name);
    value = value.replace("field#", "");
    newButton.setAttribute("value", value);
    newButton.style.width = '8px';
    newButton.style.height = '8px';
    return newButton;
}

document.getElementById("search").addEventListener("input", function(e) {
    searching(e);
}, false);

function searching(e) {

    let input = document.getElementById("search").value;

    document.getElementById("nodes-list").replaceChildren();
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].startsWith(input) || input.length == 0) {
            const nodeLabel = getLabel(nodes[i]);
            const nodeButton = getButton('nodes-list', nodes[i]);
            nodeButton.onclick = (e) => {
                let val = nodeButton.value.replace(".", ".field#");
                submitFunc(null, null, -1, val);
            }
            injectElements(nodeButton, nodeLabel, "nodes-list");
        }
    }
};

const injectElements = (newButton, newLabel, name) => {
    var linebreak = document.createElement("br");

    document.getElementById(name).appendChild(newButton);
    document.getElementById(name).appendChild(newLabel);
    document.getElementById(name).appendChild(linebreak);
    return;
}

export const selectedFunc = (name, dependencies, immediate) => {
    document.getElementById("graph-node-selected").replaceChildren();
    if (dependencies == null) return;
    const ele = document.createElement('div');
    const ele2 = document.createElement('div');
    ele.id = 'name';
    ele.innerHTML = "node : " + name;
    ele.style.fontSize = 9;
    ele2.style.fontSize = 9;
    ele2.innerHTML = 'dependencies : ';
    document.getElementById("graph-node-selected").appendChild(ele, ele2);
    let dependencies_set = new Set(dependencies);

    for (const element of dependencies_set) {
        const nb = getButton("graph-node-selected", element);
        const nl = getLabel(element);

        nb.onclick = (e) => {
            let q = nb.value.replace(".field#", "");
            q = q.replace("field#", "");
            submitFunc(q.slice(0, q.length), null, 1);
        }
        injectElements(nb, nl, "graph-node-selected");
    }

    // for(let i=0;i<dependencies.length;i++){
    //     const nb = getButton("graph-node-selected",dependencies[i]);
    //     const nl = getLabel(dependencies[i]);

    //     nb.onclick = (e) =>{
    //         let q = nb.value.replace(".field#","");
    //         q = q.replace("field#","");
    //         // const q = nb.value;
    //         submitFunc(q.slice(0,q.length),null,1);
    //     }
    //     injectElements(nb,nl,"graph-node-selected");
    // }

    for (let i = 0; i < immediate.length / 3; i++) {
        // const nb = getButton("immediate-fields",immediate[i]);
        const nl = getLabel(immediate[i]);

        // nb.onclick = (e) =>{
        //     submitFunc(nb.value,null,1);
        // }
        // injectElements(nb,nl,"immediate-fields");
    }
    return;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("datasets").replaceChildren();
    document.getElementById("nodes-list").replaceChildren();
    for (let i = 0; i < records.length; i += 2) {
        const newLabel = getLabel(records[i]);
        const newButton = getButton('datasets', records[i]);

        newButton.addEventListener('click', function() {
            document.getElementById("fields").replaceChildren();
            const recName = newButton.value;
            for (let j = 0; j < fields[recName].length; j++) {
                const fieldLabel = getLabel(fields[recName][j]);
                const fieldButton = getButton('fields', fields[recName][j]);

                fieldButton.onclick = (e) => {
                    const s = recName.substring(0, 6) === "record" ? recName.substring(7) : recName;
                    submitFunc(s, fieldButton.value, 0);
                }

                injectElements(fieldButton, fieldLabel, "fields");
            }
        });

        injectElements(newButton, newLabel, "datasets");

    }
    for (let i = 0; i < nodes.length; i++) {
        const nodeLabel = getLabel(nodes[i]);
        const nodeButton = getButton('nodes-list', nodes[i]);
        nodeButton.onclick = (e) => {
            let val = nodeButton.value.replace(".", ".field#");
            submitFunc(null, null, -1, val);
        }

        injectElements(nodeButton, nodeLabel, "nodes-list");
    }
    let fileContent = "";
    for (let r = 0; r < records.length; r += 2) {
        for (let f = 0; f < fields[records[r]].length; f++) {
            fileContent = getReportDetails(records[r], fields[records[r]][f]);
        }
    }

}, false);