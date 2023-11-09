      function getMotto() {
      return prompt("What is your favorite phrase?");
      }
      
      function getCount() {
        let count = prompt(
          "How many times would you like to see your phrase displayed?"
        );
        return parseFloat(count);
      }
      function printMotto(motto, count) {
        for (let i = 0; i < count; i++) {
          console.log(motto);
        }
      }

      let motto = getMotto();
      let count = getCount();
      
      printMotto(motto, count);