import React from 'react';
import './compbase.css';
import Elem from './Elem';

export default class Compbase extends React.Component {
   constructor() {
      super();
      this.state = { list: [], counter: 0, counterDel: 0 }
   }

   changeButtonCounter() {
      this.setState(previousState => {
         return { counter: previousState.counter + 1 }
      });
   }

   addElement() {
      this.setState(previousState => ({
         list: [...previousState.list, { title: `${this.state.list.length + 1} элемент` }]
      }));
   }

   deleteLastElement() {
      let stlist = this.state.list;
      let lastElement = stlist.length - 1
      this.setState(previousState => ({
         list: previousState.list.filter((el, index) => index !== lastElement)
      }));
   }

   renderList() {
      return this.state.list.map((item, index) => {
         return (
            <li key={`${item.title}${index}`}>
               <Elem elem={item.title} idx={index} />
            </li>)
      })
   }

   render() {
      return (
         <div>
            <h1>Привет</h1>
            <div>Кол-во элементов в списке: {this.state.list.length}</div>
            <div>Кол-во кликов на кнопку "Добавить" и "Удаление": {this.state.counter}</div>
            <button onClick={() => {
               this.changeButtonCounter()
               this.addElement()
            }}> Добавить </button>
            <button className="delbutton" onClick={() => {
               this.changeButtonCounter()
               this.deleteLastElement()
            }}>Удалить</button>

            <ul className="list">{this.renderList()} </ul>
         </div >

      );
   }
}