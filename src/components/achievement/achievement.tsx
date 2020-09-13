import React from 'react';
import './achievement.css';
import { achievements } from '../../portfolio';

function Achievement() {
    return (
        <section>
            <div className="inner">

                <div className="title">
                    <p>{achievements.title}</p>
                </div>

                <div className="sub-title">
                    <p>{achievements.subTitle}</p>
                </div>

            </div>
        </section>
    );
}
export default Achievement;