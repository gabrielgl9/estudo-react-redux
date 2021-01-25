import React, {useState} from 'react';

import { connect } from "react-redux";

import * as ToolsActions from '../../Store/Actions/tools';

const TodoPage = ({ items, addItem }) => {
    
    const [tool, setTool] = useState('');
        
    const handleSubmit = () => {
        addItem(tool);
        setTool('');
    }

    return (
        <React.Fragment>
            <input type="text" value={tool} onChange={(e) => setTool(e.target.value)}/>
            <button onClick={handleSubmit}>Adicionar</button>     

            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}    
            </ul>         
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    items: state.tools.items
});

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(ToolsActions.addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);