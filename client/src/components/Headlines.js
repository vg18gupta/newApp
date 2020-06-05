import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../App.css'
import loading from '../images/loading.gif'

import Dropdown from './Dropdown'
import Header from './Header';

const Todo = props => (
    
    <tr>
        <td >{props.todo.source.name}</td>
        <td ><p>{props.todo.publishedAt}</p> Published at<p>{props.todo.publishedAt}</p></td>
        <td >{props.todo.title}</td>
        <td >{props.todo.description}</td>
        <td ><p><a href={props.todo.url}>Link</a></p><p><a href={props.todo.source.url}>Source Link</a></p></td>
        
        
    </tr>
)


export default class HeadlinesComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:{},
            articlesArray:[],
            Loading:true,
            language: 'en',
            topic: 'world'

        };
        
        this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
        this.handleChangeTopic = this.handleChangeTopic.bind(this);
        
    }


    handleChangeTopic(event) {
        this.setState({topic: event.target.value});
        console.log('https://gnews.io/api/v3/topics/'+event.target.value+'&token='+process.env.REACT_APP_API_KEY+'&lang='+this.state.language)
        axios.get('https://gnews.io/api/v3/topics/'+event.target.value+'&token='+process.env.REACT_APP_API_KEY+'&lang='+this.state.language)
            .then(response => {
                this.setState({ 
                    data: response.data ,
                    articlesArray:response.data.articles,
                    Loading:false
                });
                console.log(this.state.data.articleCount)
            })
            .catch(function (error){
                console.log(error);
            })
    }



    handleChangeLanguage(event) {
        this.setState({language: event.target.value});
        console.log('https://gnews.io/api/v3/topics/'+this.state.topic+'?token='+process.env.REACT_APP_API_KEY+'&lang='+event.target.value)
        axios.get('https://gnews.io/api/v3/topics/'+this.state.topic+'?token='+process.env.REACT_APP_API_KEY+'&lang='+event.target.value)
            .then(response => {
                this.setState({ 
                    data: response.data ,
                    articlesArray:response.data.articles,
                    Loading:false
                });
                console.log(this.state.data.articleCount)
                // console.log(this.state.data.totalResults)
                // console.log(this.state.articlesArray.length)
            })
            .catch(function (error){
                console.log(error);
            })
    }
    
   

   
    

    componentDidMount() {
        if(!localStorage.usertoken){
            this.props.history.push(`/login`)
            return
        }
        console.log('https://gnews.io/api/v3/topics/'+this.state.topic+'?token='+process.env.REACT_APP_API_KEY+'&lang='+this.state.language)
        axios.get('https://gnews.io/api/v3/topics/'+this.state.topic+'?token='+process.env.REACT_APP_API_KEY+'&lang='+this.state.language)
            .then(response => {
                this.setState({ 
                    data: response.data ,
                    articlesArray:response.data.articles,
                    Loading:false
                });
                console.log(this.state.data.articleCount)
                // console.log(this.state.data.totalResults)
                // console.log(this.state.articlesArray)
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.articlesArray.map(function(currentArticle, i){
            return <Todo todo={currentArticle} key={i} />;
        })
    }

    render(){
        if(this.state.Loading){
            return(
                <img className='background' src={loading} width='10%'  alt="loading" />
            )
        }
        return(
            <div>
                
                <Header head="Top Headlines"/>
                <Dropdown parent={this}/>
                

                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Source</th>
                            <th>Published At</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Details</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}