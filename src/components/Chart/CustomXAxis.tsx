interface CustomXAxisProps {
    x: number;
    y: number;
    payload: { value: string };
}

const CustomXAxis = ({ x, y, payload }: CustomXAxisProps) => {
    const date = new Date(payload.value);
    return (
        <g transform={`translate(${x},${y + 20})`}>
            <text
                x={0}
                y={0}
                textAnchor="middle"
                fill="white"
                fontSize={12}
                fontFamily="Manrope"
            >
                <tspan fontWeight="bold">Date: </tspan>
                {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
            </text>
            <text
                x={0}
                y={14}
                textAnchor="middle"
                fill="white"
                fontSize={12}
                fontFamily="Manrope"
            >
                <tspan fontWeight="bold">Time: </tspan>
                {`${date.getHours()}:00`}
            </text>
        </g>
    );
};

export default CustomXAxis;
