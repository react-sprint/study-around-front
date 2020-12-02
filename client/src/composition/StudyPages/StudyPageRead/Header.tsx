import React, { Fragment } from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Fragment>
        <Layout>
        <BackgroundImage>
        {/* 스터디 타이틀 */}
        <StudyTitle>1일 1개 N행시로 센스력 키우기 🤟</StudyTitle>
        <StudyInfoLayout>
        <StudyMemberInfo>참여&nbsp;
        {/* 참여인원 */}
        <div className="boldText">48명</div>
        </StudyMemberInfo>
        {/* 인증률 */}
        <StudyMemberInfo>인증률&nbsp;
        <div className="boldText">75%</div>
        </StudyMemberInfo>
        </StudyInfoLayout>
        </BackgroundImage>
        </Layout>
        </Fragment>
    )
}

export default Header
const StudyMemberInfo = styled.div`
width:100%;
height:16px;
display:flex;
justify-content:center;
align-items:center;
font-size: 12px;
color:#fff;
.boldText{
    height:16px;
    font-weight:bold;
}
`
const StudyInfoLayout = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-top:25px;
min-width:170px;
min-height:30px;
border:1px solid #fff;
border-radius:15px;
padding:0px 16px;
box-sizing:border-box;
.dot{
    color:#fff;
    height:16px;
    margin-bottom:5px;
    font-weight:bold;
}
`
const StudyTitle = styled.div`
font-size:23px;
font-weight:bold;
color:#fff;

`
const BackgroundImage = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
min-height:200px;
background-color:rgba(0,0,0,0.5);
`
const Layout = styled.div`
width:100%;
min-height:200px;
box-sizing:border-box;
`