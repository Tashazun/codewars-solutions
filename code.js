function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
   }
   
   Ship.prototype.isWorthIt = function () {
     const weight = (this.crew * 1.5);
     const finalDraft = this.draft - weight;
     return (finalDraft > 20 ? true : false);
   };

   function abbrevName(name) {
    const answer = name.split(' ').map(n => n.substring(0, 1)).join('.').toUpperCase();
    return answer;
  };