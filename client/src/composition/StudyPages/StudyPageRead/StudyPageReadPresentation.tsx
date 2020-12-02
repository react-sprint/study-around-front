import React, { Fragment,useState } from 'react'
import styled from 'styled-components'
import CertificateTab from './CertificateTab'
import DeleteTab from './DeleteTab'
import Header from './Header'
import IntroduceTab from './IntroduceTab'


function StudyPageReadPresentation() {
const [tab, setTab] = useState(1)
const admin = true
    return (
        <Fragment>
        <Header/>
        <Layout>
        <TabSelectLayout>
        <TabSelect onClick={()=>setTab(1)} tabState={tab} tab={1}>소개</TabSelect>
        <TabSelect onClick={()=>setTab(2)} tabState={tab} tab={2}>인증하기</TabSelect>
        <TabSelect onClick={()=>setTab(3)} tabState={tab} tab={3}>설정</TabSelect>
        </TabSelectLayout>
        {tab===1 &&(
       <IntroduceTab/>)}
       {tab===2 &&(
        <CertificateTab/>)}
        {tab===3 &&(
            <DeleteTab/>)}
        </Layout>
        </Fragment>
    )
}

export default StudyPageReadPresentation
const TabSelect = styled.div`
cursor: pointer;
display:flex;
justify-content:center;
align-items:center;
font-size:16px;
font-weight:bold;
width:100%;
height:45px;
color:${props=>props.tab===props.tabState ? "#000" : "#808080" };
box-sizing:border-box;
border-bottom:${props=>props.tab===props.tabState ? "2px solid #000" : "2px solid transparent"  };

`
const TabSelectLayout = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:45px;
background-color:#fff;
border-bottom:1px solid #d3d3d3;
box-sizing:border-box;
`
const Layout = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
max-width:640px;
max-height:100%;/* height:100%; */
margin:0px auto 0px;
`