logger.log("Scanning document: " + document.displayPath + "/" + document.name);
actions.create("alfviral.virusscan.action").execute(document);