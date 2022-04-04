let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  let text = document.getElementById("text").value;
  let filtered = document.getElementById("filtered");
  filtered.value = searchValid(text);
});

searchValid = (text) => {
  // Jobor
  if ((text = text.replace(/َ/g, ""))) {
    // Jer
    if ((text = text.replace(/ِ/g, ""))) {
      // Pesh
      if ((text = text.replace(/ُ/g, ""))) {
        // Tanvin Jobor
        if ((text = text.replace(/ً/g, ""))) {
          // Tanvin Jer
          if ((text = text.replace(/ٍ/g, ""))) {
            // Tanvin Pesh
            if ((text = text.replace(/ٌ/g, ""))) {
              // Sukun
              if ((text = text.replace(/ْ/g, ""))) {
                // Khara Jobor
                if ((text = text.replace(/ٰ/g, ""))) {
                  // Tasdid
                  if ((text = text.replace(/ّ/g, ""))) {
                    return text;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
