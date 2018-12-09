import React, { Component } from 'react';
import { Header } from './components/Header/Header.js';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { CtaButton } from './components/CtaButton/CtaButton';
import { HairGrowRate } from './components/HairGrowRate/HairGrowRate';
import { HairGrowRate2 } from './components/HairGrowRate2/HairGrowRate2';
import { Advantages } from './components/Advantages/Advantages';
import { Effects } from './components/Effects/Effects';
import { PriceButton } from './components/PriceButton/PriceButton';
import { Footer } from './components/Footer/Footer';
import  Faq  from './components/Faq/Faq.js';
import  Testemonials  from './components/Testemonials/Testemonials';
import './App.css'
import db from './db/db'

class App extends Component {

  render() {
const dbs=db[0]

    return (
      <div>
      { /* <Header h1={db[0].header__h1} h2={db[0].header__h2} img={db[0].header__img} p={db[0].header__p} /> */}
        <Header db={dbs.Header} />
        <PriceButton   db={dbs.PriceButton} />
          <HairGrowRate2 db={dbs.HairGrowRate}  />
          <Advantages db={dbs.Advantages}  />
        <HowItWorks  db={dbs.HowItWorks} />
        <CtaButton db={dbs.CtaButton} />



        <Effects db={dbs.Effects}  />
          <CtaButton db={dbs.CtaButton} />
        <HairGrowRate db={dbs.OurSecret}  />

        <PriceButton  db={dbs.PriceButton}  />
        <Faq  db={dbs.Faq} />
        <Testemonials  db={dbs.Testemonials} />
          <HairGrowRate db={dbs.MoneyBack} />
          <CtaButton db={dbs.CtaButton} />
          <Footer db={dbs.Footer} />
    </div>
    )
  }
}

export default App;
