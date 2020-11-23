import React from 'react';

class Carre extends React.Component {
  constructor(props) {
    super(props);

    // On définit un état afin de savoir si le carré est visible
    this.state = { isCarreVisible: true };

    // On relie this pour éviter qu'il soit 'undefined' dans la fonction 'handleCarreVisibleClick'
    this.handleCarreVisibleClick = this.handleCarreVisibleClick.bind(this);
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

  // Dans le rendu
  render() {
    // Avant l'affichage, on gère ...
    const isCarreVisible = this.state.isCarreVisible;
    let elementCarre;

    // ... L'affichage (ou non) du carré
    //    https://fr.reactjs.org/docs/conditional-rendering.html#element-variables
    if (isCarreVisible) {
      elementCarre = <div className="carre"></div>;
    } else {
      elementCarre = null;
    }

    return (
          <div>
            {elementCarre}
            <button onClick={this.handleCarreVisibleClick}>{ isCarreVisible ? 'On me voit' : 'On me voit pas'}</button>
            <button>rouge</button>
            <button>bleu</button>
          </div>
    );
  }
}

export default Carre;
