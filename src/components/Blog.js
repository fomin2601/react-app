import React from 'react'

/*
class Greetings extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Hi!</h1>
            </div>
        );
    }
}
*/

function Blog(props) {

    const tasks = [
        {id: 1, body: 'Привет, мир', answer_1: '1', answer_2: '1', answer_3: '1',},
        {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
    ];
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            <hr />
            {content}
        </div>
    );
}



export default Blog;