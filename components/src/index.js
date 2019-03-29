import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));
