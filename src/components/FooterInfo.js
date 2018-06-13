import React from 'react'
 const FooterInfo = (props) =>
  <section className="more__info">
      <div className="container">
          <ul className="shop__info">
              <li>
                  <ul>
                      {props.footer_menu_1.map((item, i) =>
                      <li key={i}><a href={item.link}>{item.name}</a></li>
                      )}
                  </ul>
              </li>
              <li>
                  <ul>
                      {props.footer_menu_2.map((item, i) =>
                       <li key={i}><a href={item.link}>{item.name}</a></li>
                      )}
                  </ul>
              </li>
              <li>
                  <ul>
                      {props.footer_menu_3.map((item, i) =>
                      <li key={i}><a href={item.link}>{item.name}</a></li>
                      )}
                  </ul>
              </li>
              <li>
                  <ul>
                      {props.footer_menu_4.map((item, i) =>
                      <li key={i}><a href={item.link}>{item.name}</a></li>
                      )}
                  </ul>
              </li>
              <li className="contact__details">
                  <ul><li>{props.contacts_details[0].name}</li>
                      <li>{props.contacts_details[1].name}</li>
                      <li>{props.contacts_details[1].location}</li>
                      <li>{props.contacts_details[1].phone}</li>
                      <li><a href={"mailto:"+props.contacts_details[1].mail}>{props.contacts_details[1].mail}</a></li>
                  </ul>
              </li>
          </ul>
      </div>
  </section>

export default FooterInfo