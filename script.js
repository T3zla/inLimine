const fieldsPerDoc = {
    summons: ["Court", "Case Number", "Plaintiff", "Defendant", "Date"],
    affidavit: ["Court", "Affiant", "Subject", "Date"],
    notice: ["Court", "Recipient", "Date"]
};

// DOM References

const docTypeSelect = document.getElementById("docType");
const dynamicFieldsContainer = document.getElementById("dynamicFields");
const generateBtn = document.getElementById("generateBtn");

// Watch for dropdown changes
docTypeSelect.addEventListener("change", () => {
    const selectedDoc = docTypeSelect.value;
    renderFields(selectedDoc);
});

// Generate input fields dynamically
function renderFields(docType) {
    dynamicFieldsContainer.innerHTML = ""; //Clear existing fields

    if (!fieldsPerDoc[docType]) return;

    fieldsPerDoc[docType].forEach(field => {
        //Label
        const label = document.createElement("label");
        label.textContent = field + ":";
        label.setAttribute("for", field.toLowerCase().replace(/\s/g, "_"));

        //Input
        const input = document.createElement("input");
        input.type = "text";
        input.id = field.toLowerCase().replace(/\s/g, "_");
        input.placeholder = field;

        //Add to DOM
        dynamicFieldsContainer.appendChild(label);
        dynamicFieldsContainer.appendChild(input);
    });
}

//Placeholder for button click handler
generateBtn.addEventListener("click", () => {
    const selectedDoc = docTypeSelect.value;
    if (!selectedDoc) {
        alert("Please select a document type.");
        return;
    }
    
    const inputs = {};
    fieldsPerDoc[selectedDoc].forEach(field => {
        const fieldId = field.toLowerCase().replace(/\s/g,"_");
        const value = document.getElementById(fieldId)?.value || "";
        inputs[fieldId] = value;
    });

    const additionalInstructions = document.getElementById("aiInput").value;

    //For now, just log everything
    console.log("Document type:", selectedDoc);
    console.log("Field values:", inputs);
    console.log("Additional Instructions:", additionalInstructions);

    alert("Document generation logic will go here.");
});