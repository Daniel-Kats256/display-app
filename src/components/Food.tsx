function Food(){

    const food1 = "Orange";
    const food2 = "Mango";
    const food3 = "Apple";

    return (
        <div className="label">
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food3.toUpperCase()}</li>
        </div>
    );
}

export default Food;