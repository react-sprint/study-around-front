import React, { Fragment } from 'react'
import ManagerInfo from './ManagerInfo'
import RenderList from './RenderList'
import StudyDesc from './StudyDesc'
function IntroduceTab() {
    return (
        <Fragment>
        <ManagerInfo/>
        <RenderList/>
        <StudyDesc/>
        </Fragment>
    )
}

export default IntroduceTab
