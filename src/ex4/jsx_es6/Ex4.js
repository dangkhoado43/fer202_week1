// ============================== Exercise 4 ==============================

// Base Shape component - not directly used, but could hold common shape logic or styles
function Shape({ color, children }) {
    const style = {
        color, // This could also be used to set the border or fill color in a real app
        margin: "10px",
        padding: "5px",
    };

    return <div style={style}>{children}</div>;
}

// Rectangle component
const Rectangle = ({ color, length, width }) => {
    const area = length * width;

    return (
        <Shape color={color}>
            <p>Rectangle</p>
            <p>Area: {area}</p>
            <p>
                Length: {length}, Width: {width}
            </p>
        </Shape>
    );
};

// Triangle component
const Triangle = ({ color, base, height }) => {
    const area = (base * height) / 2;

    return (
        <Shape color={color}>
            <p>Triangle</p>
            <p>Area: {area}</p>
            <p>
                Base: {base}, Height: {height}
            </p>
        </Shape>
    );
};

const Square = ({ color, width }) => {
    const area = (width * width);

    return (
        <Shape color={color}>
            <p>Square</p>
            <p>Area: {area}</p>
            <p>
                Width: {width}
            </p>
        </Shape>
    );
};

const Circle = ({ color, r }) => {
    const area = Math.PI * Math.pow(r, 2);

    return (
        <Shape color={color}>
            <p>Circle</p>
            <p>Area: {area}</p>
            <p>
                Radius: {r}
            </p>
        </Shape>
    );
};

const Ex4 = () => {
    return (
        <div>
            <h1>Shapes</h1>
            <Rectangle color="blue" length={50} width={20} />
            <Triangle color="red" base={30} height={15} />
            <Square color="purple" width={20} />
            <Circle r={10} />
        </div>
    );
};

export default Ex4;