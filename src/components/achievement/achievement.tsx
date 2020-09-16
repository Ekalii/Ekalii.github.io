import React from 'react';
import './achievement.css';
import { achievements } from '../../portfolio';
import AchievementCard from '../ahievementcard/achievementcard'

function Achievement() {
    return (
        <section className="section--achievement" id="achievement">
            <div className="inner">

                <div className="achieve-title">
                    <p>{achievements.title}</p>
                </div>

                <div className="achieve-sub-title">
                    <p>{achievements.subTitle}</p>
                </div>

                <div className="achieve-content">
                    {achievements.list.map(list => {
                        return <AchievementCard achieves={list} key={list.key} />
                    })}
                </div>

            </div>
        </section>
    );
}
export default Achievement;