const initState={
    projects:[
        {id: '1', title: 'help me find peach', content:'blah blah blah blah'},
        {id: '2', title: 'collect all the stars', content:'blah 2 blah'},
        {id: '3', title: 'egg hunt with youngju', content:'blah 3 3blah blah '}
    ]
}

const projectReducer = (state= initState, action) =>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log("created project", action.project);
    }
    return state;
}
export default projectReducer;