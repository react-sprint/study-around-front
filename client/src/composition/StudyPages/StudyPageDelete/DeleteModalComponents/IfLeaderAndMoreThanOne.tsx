import React, { Fragment,useState } from 'react'
import styled from 'styled-components'

function IfLeaderAndMoreThanOne() {
    const [Clicked, setClicked] = useState("")
    const Dummy = [{user:"유재욱",comment:"출석완료!",image:"https://avatars1.githubusercontent.com/u/13144573?s=460&u=9042af1affd7da76dd24c6f12aa8660bdd4e42e5&v=4"},{user:"오승영",comment:"오~출석완료!",image:"https://avatars2.githubusercontent.com/u/46865281?s=460&u=9687af854c3f5ae8a8f8b1e4f10a87587eaf5626&v=4"},{user:"김어진",comment:"출석완료했습니다!",leader:true,image:"https://avatars2.githubusercontent.com/u/56405613?s=460&u=b1dc8505bf966d1364e9aecce175deaa42d6f7f9&v=4"}]
    const RenderMember = Dummy.map((data,index)=>{
        return(
            <Fragment key={index}>
        <UserInfoWrapper onClick = {()=>setClicked(data.user)}>
        <UserProfileImage src={data.image} value={data.user} checkClicked={Clicked}/>
        <UserName>{data.user}</UserName>
        </UserInfoWrapper>
        </Fragment>
        )
    })
    return (
        <Fragment>
        <Layout>
        <Title>
        ❗️스터디 인원이 2명 이상인 경우 위임 후 탈퇴 가능합니다.
        </Title>
        <RenderMemberLayout>
        {RenderMember}
        </RenderMemberLayout>
        <SubmitButton>위임하기</SubmitButton>
        </Layout>
        </Fragment>
    )
}

export default IfLeaderAndMoreThanOne
const SubmitButton = styled.div`
cursor: pointer;
margin-top:10px;
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
color:#fff;
font-size:14px;
width:90px;
height:40px;
background-color:#ff6178;
border-radius:5px;
border:none;
`
const RenderMemberLayout = styled.div`
margin-bottom:50px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`
const UserName = styled.div`
font-size:15px;
    font-weight:bold;
    color:#000;
`
const UserInfoWrapper = styled.div`
cursor: pointer;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const UserProfileImage = styled.div`
min-width:60px;
min-height:60px;
margin-bottom: 10px;
border:${props=>props.value===props.checkClicked ? "3px solid #ff6178" : ""};
border-radius:15px;
box-sizing:border-box;
background-image:url(${props=>props.src});
background-position:center;
background-repeat:no-repeat;
background-size:100% auto;
`
const Layout = styled.div`  
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const Title = styled.div`
font-size:16px;
font-weight:bold;
color:#000;
`