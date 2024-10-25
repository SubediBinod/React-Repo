function List(){
    const fruits= [
        {name:'apple',id:1},
        {name:'banana',id:2},
        {name:'Coconut',id:3}

    ]
    //const fruitlist =fruits.map(items=><li key={items.id}>{items.name}</li>);
    const fruitlist=fruits.filter(items=>items.id>=2).map(items=><li key={items.id}>{items.name}</li>);
    return(
        <ol>{fruitlist}</ol>
    )
}
export default List