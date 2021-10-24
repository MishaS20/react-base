import React, { Component } from 'react';
import './compbase.css';
export default class Compbase extends React.Component {
   constructor() {
      super();
      this.state = { list: [], counter: 0 }
   }

   buttonCounter() {
      this.setState(prevState => {
         return { counter: prevState.counter + 1 }
      });
   }

   addElement() {
      this.setState(previousState => ({
         list: [...previousState.list, { title: `${this.state.list.length + 1} элемент` }]
      }));
      console.log(this.state.list)
   }

   deleteLastElement() {
      let stlist = this.state.list;
      let lastElement = stlist.length - 1
      console.log(lastElement)
      this.setState(prevState => ({
         list: prevState.list.filter((el, index) => index != lastElement)
      }));
   }

   renderList() {
      return this.state.list.map((item, index) => {
         console.log(item.title)
         return <div key={`${item.title}${index}`}>{item.title}</div>
      })
   }

   render() {
      return (
         <div>
            <h1>Привет</h1>
            <div>Кол-во элементов в списке: {this.state.list.length}</div>
            <div>Кол-во кликов на кнопку добавить: {this.state.counter}</div>
            <button onClick={() => {
               this.buttonCounter()
               this.addElement()
            }}> Добавить </button>

            <button className="delbutton" onClick={() => {
               this.deleteLastElement()
            }}>Удалить</button>
            <div className="list">{this.renderList()} </div>
         </div >

      );
   }
}