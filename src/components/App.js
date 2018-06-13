import React from 'react'
import '../css/command.css'
import Header from './Header'
import Intro from './Intro'
import Items from './Items'
import Lookbook from './Lookbook'
import FooterInfo from './FooterInfo'
import Footer from './Footer'

const App = ({data}) =>
    <div>
    <Header menu={data[0].menu} />
     <main>
    <Intro intro={data[1].intro} />
    <Items filters={data[2].filters} goods={data[2].goods} />
    <Lookbook books={data[3].books} />
    <FooterInfo footer_menu_1={data[4].footer_menu_1}
                footer_menu_2={data[4].footer_menu_2}
                footer_menu_3={data[4].footer_menu_3}
                footer_menu_4={data[4].footer_menu_4}
                contacts_details={data[4].contacts_details} />
    <Footer />
     </main>
    </div>

export default App