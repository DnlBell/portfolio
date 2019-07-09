import React from 'react';
import {SkillChip} from '../styles/common.js'
import chipData from '../data/chipData.json'

export default function Chips(props) {

    let chipArray =[];

    const data = chipData;

    for(let i = 0; i < props.chips.length; i++) {
        let currentChip = data['chips'][props.chips[i]];
        chipArray.push(
            <SkillChip style={{background: currentChip.background, color: currentChip.color}} label= {currentChip.label}/>
        )
    }

    return(
        <div>
            {chipArray}
        </div>
    )
}