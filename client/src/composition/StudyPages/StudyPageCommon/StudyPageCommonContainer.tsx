import React from 'react'
import { useHistory } from 'react-router-dom'
import StudyPageCommonPresentation from './StudyPageCommonPresentation'

function StudyPageCommonContainer() {
    const history = useHistory()
    console.log(history.location.pathname.replace("/",""))
    // 페이지 로딩 후, pathname체크해서 Create인지 Update인지 확인한 뒤, value에 지정.
    return (
        <StudyPageCommonPresentation />
    )
}

export default StudyPageCommonContainer
