import React from "react";
import s from '../../../assets/scss/components/BehaviourRange.module.scss';


const generatePath = (points, multiplier = 1) => {
    let result = "M50 150C50 150";

    let max = 0;
    points.forEach(i => max = i > max ? i : max);

    const mult = 120 / max;

    for (let x = 0; x < 22; x++) {
        if (x === 0) {
            result = result + ',' + (50) + ' ' + (multiplier * points[x] * mult + 150);
        } else {
            result = result + ',' + (75 + (x - 1) * 43) + ' ' + (multiplier * points[x] * mult + 150);
        }

        result = result + ',' + (50 + x * 43) + ' ' + (multiplier * points[x] * mult + 150);

        if (x < 21) {
            result = result + ',' + (25 + (x + 1) * 43) + ' ' + (multiplier * points[x] * mult + 150);
        } else {
            result = result + ',' + (50 + (x) * 43) + ' ' + (multiplier * points[x] * mult + 150);
        }
    }

    result = result + ',953 150, 953 150';
    return result;
}

const CurveDots = ({dots}) => {
    let max = 0;
    dots.forEach(i => max = i > max ? i : max);

    const mult = 120 / max;

    return (
        <>
            {dots.map((p, i) => {
                return <>
                    <text x={i * 43 + 48} y={-p * mult + (p === 0 ? 130 : 143)}
                          fontSize={10} fontWeight="bold" fill="#090"
                          textAnchor="middle"
                    >+{p}</text>
                    <circle r="3" cx={i * 43 + 50} cy={-p * mult + 150} fill="#090"/>
                </>
            })}
            {dots.map((p, i) => {
                return <>
                    <text x={i * 43 + 48} y={p * mult + (p === 0 ? 176 : 166)}
                          fontSize={10} fontWeight="bold" fill="#900"
                          textAnchor="middle"
                    >{-p}</text>
                    <circle r="3" cx={i * 43 + 50} cy={p * mult + 150} fill="#900"/>
                </>
            })}

            {dots.map((p, i) => <circle r="3" cx={i * 43 + 50} cy={p * mult + 150} fill="#900"/>)}
        </>
    )
}

const Curve = ({dots}) => {
    return (
        <>

            <path d={generatePath(dots, 1)} stroke="#900" fill="#9005"/>
            <path d={generatePath(dots, -1)} stroke="#090" fill="#0905"/>
        </>
    )
}

const CurveAxis = ({dots}) => {
    let max = 0;
    dots.forEach(i => max = i > max ? i : max);
    let min = max;
    dots.forEach(i => min = i < min ? i : min);

    return (
        <>
            <path d="M50 150L50 150, 953 150" stroke="#0099" strokeWidth="2"/>

            {dots.map((p, i) => {
                let fill = '#efefef';

                fill = p === max ? '#ffff66' : fill;
                fill = p === min ? '#aaa' : fill;
                return (
                    <>
                        <circle r="13" cx={i * 43 + 50} cy={150}
                                fill={fill}
                                stroke="#000"/>
                        <text x={i * 43 + 50} y={153}
                              fontSize={10} fontWeight="bold" fill="#000"
                              textAnchor="middle"
                        >{i + 1}</text>

                    </>
                );
            })}
        </>
    )
}

const HorizontalLines = ({max}) => {
    const y = [];
    for(let i = max; i >= -max; i--){
        y.push(i);
    }

    const mult = 120 / max;

    return (
        <>
            {y.map((j) => {
                return ( <>
                    <text x={15} y={j * mult + 145}
                          fontSize={10} fontWeight="bold" fill="#000"
                          textAnchor="middle"
                    >{j > 0 ? -j : '+' + -j}</text>
                    <path d={`M10 ${j * mult + 150}L10 ${j * mult + 150}, 990 ${j * mult + 150}`}
                                stroke="#eee"
                                strokeWidth="1"/>
                </>);
            })}
        </>
    );
}

export const BehaviourRange = (props) => {
    let max = 0;
    props.range.forEach(i => max = i > max ? i : max);

    return (
        <div className={s.behaviour + ' row'}>
            <div className="col-12 pt-2 pb-1">
                <span className={s.behaviour_Title}>Диапазон естественного поведения</span>
            </div>
            <div className="col-12 p-0">
                <div className={s.behaviour_CurveContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className={s.behaviour_Curve}
                         viewBox="0 0 1000 300"
                    >
                        <HorizontalLines max={max}/>
                        <Curve dots={props.range}/>
                        <CurveDots dots={props.range}/>
                        <CurveAxis dots={props.range}/>
                    </svg>
                </div>
            </div>
        </div>
    );
}
