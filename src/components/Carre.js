import React from 'react';

class Carre extends React.Component {
  constructor(props) {
    super(props);

    // On définit un état afin de savoir si le carré est visible
    // Attention à la syntaxe si il y a plusieurs états pour un seul composant ;)
    this.state = { 
      isCarreVisible: true,
      isCarreRed: false
    };

    // On relie this pour éviter qu'il soit 'undefined' dans la fonction 'handleCarreVisibleClick'
    this.handleCarreVisibleClick = this.handleCarreVisibleClick.bind(this);
    this.handleRougeClick = this.handleRougeClick.bind(this);
  }

  handleCarreVisibleClick() {
    console.log('handleCarreVisibleClick()');
    
    // Si c'était vrai, ca devient faux
    // Si c'était faux, ca devient vrai
    /*
    const ancienIsCarreVisible = this.state.isCarreVisible;
    let nouveauIsCarreVisible;
    if(ancienIsCarreVisible === true) {
      nouveauIsCarreVisible = false;
    }
    else {
      nouveauIsCarreVisible = true;
    }
    this.setState({ isCarreVisible: nouveauIsCarreVisible });
    */

    // Même chose
    // La nouvelle valeur de l'état, c'est l'inverse/l'opposé de l'ancienne
    this.setState({ isCarreVisible: !this.state.isCarreVisible });
  }

  // Même bail
  handleRougeClick() {
    console.log('handleRougeClick()');
    this.setState({ isCarreRed: !this.state.isCarreRed });
  }
  
  // Dans le rendu
  render() {
    // Avant l'affichage, on gère ...
    const isCarreVisible = this.state.isCarreVisible;
    let elementCarre;

    let toutesLesClassesDuCarre = "carre";
    const isCarreRed = this.state.isCarreRed;

    if(isCarreRed === true) {
      toutesLesClassesDuCarre = "carre rouge";
    }

    // ... L'affichage (ou non) du carré
    //    https://fr.reactjs.org/docs/conditional-rendering.html#element-variables
    if (isCarreVisible) {
      elementCarre = <div className={toutesLesClassesDuCarre}></div>;
    } else {
      elementCarre = null;
    }

    return (
          <div>
            {elementCarre}
            <button onClick={this.handleCarreVisibleClick}>{ isCarreVisible ? 'On me voit' : 'On me voit pas'}</button>
            <button onClick={this.handleRougeClick}>rouge</button>
            <button>bleu</button>
          </div>
    );
  }
}

export default Carre;
