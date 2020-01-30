import React from 'react'
import Blog from "./Blog";
import Problem from "./test/Problem";

class Main extends React.Component {


    render() {
        const posts = [
            {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
            {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
        ];
        return (
            <div className="main">
                <Problem/>
                <Blog posts={posts} />
            </div>

        );
    }
}

export default Main;