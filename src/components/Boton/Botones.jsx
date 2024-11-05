

const Boton = ({color, text}) => {
    const buttonStyle ={
        background: color,
        color:'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pinter',
        margin: '5px'
    }

    return (
        <button style={buttonStyle}>
            {Boton}
        </button>
    );
};

export default Boton;