import React, { useState } from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const Title = styled.h1`
    color: white;
    text-align: center;
    font-size: 1em;
    border-radius: 10px;
    text-transform: capitalize;
    cursor: default;
    &:hover {
        // color:#165460fa;
        // -webkit-box-shadow: 15px 10px 31px 5px #115bb65e;
        // -moz-box-shadow: 15px 10px 31px 5px #115bb65e;
        // box-shadow: 15px 10px 31px 5px #115bb65e;
    }
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid palevioletred;
  border-radius: 3px;
`;

const UserSection = styled.div`
    background-color: #FFFFFF;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    padding: 30px;
`

const HeaderBar = styled.div`
    display:inline-flex;
    flex-diretion:row;
    flex-grow: 1;
    width: 100%;
    background-color: #00000099;
    box-shadow: 0px 5px 10px 0px #98989b;
`
const HeaderBarPrimary = styled.div`
    flex-basis:50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const HeaderBarSecondary = styled.div`
    flex-basis:50%;
`
const NavigateBar = styled.div`
    display:inline-flex;
    flex-diretion:row;
    justify-content: space-between;
    margin: 1.2em;
    font-size:10px;
`

const SignUpSection = styled.div`
    background-color:#f9f9f9;
`

const NavigateItem = styled.div`
    color: white;
    font-size: 2em;
    text-transform: capitalize;
    padding: 10px;
    cursor: default;
    &:hover {
        color: #00be44;
    }
    &.ProfileBtn {
        position:relative;
    }
    &.profile {
        color: black;
    }
`;

const SpotifyHeader = styled.div`
    color: white;
    font-size: 25px;
    text-transform: capitalize;
    display:inline-flex;
    flex-direction:row;
`

const ProfileInfo = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
`;

// const SpotifyIcon = () => <SVG src={require('../../resources/Spotify.svg')} />
const SpotifyBanner = (props) => (
    <SpotifyHeader>
        {/* <SpotifyIcon /> */}
        <Title>Spotify</Title>
    </SpotifyHeader>
)
const Navigate = (props) => <NavigateItem>{props.title}</NavigateItem>
const Profile = (props) => {
    const [show, setToShow] = useState(false);
    return (
        <div onClick={() => { debugger; setToShow(!show) }}>
            <NavigateItem className='ProfileBtn'>profile ></NavigateItem>
            <ProfileInfo show={show}>
                <NavigateItem className='profile'>account</NavigateItem>
                <NavigateItem className='profile'>log out</NavigateItem>
            </ProfileInfo>
        </div>

    )
}

// const SignUpSection = (props) => <SignUpSection id='main'></SignUpSection>
const Header = ({ headerPrimary, headerSecondary }) => (
    <HeaderBar>
        <HeaderBarPrimary>{headerPrimary}</HeaderBarPrimary>
        <HeaderBarSecondary>{headerSecondary}</HeaderBarSecondary>
    </HeaderBar>
)

const Card = styled.div`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px;
    padding: 20px;
    border-radius: 10px;
`

const CardTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 14px;
`

const CardDetails = styled.div`
    margin-bottom: 10px;
    line-height: 1.75;
    font-size: 12px;
`

const ActionButton = styled.button`
    background-color: #1db954;
    box-shadow: rgba(0,0,0,0.2) 0px 0px 8px;
    padding: 20px;
    border-radius: 50px;
    width: 200px;
    transition: width 0.5s;
    :hover{
        background-color: #30e039;
        width:220px;
    }
`

const SubscriptionCards = ({ title, details, actionDetails }) => (
    <Card>
        <CardTitle children={title} />
        <CardDetails children={details} />
        <ActionButton children={actionDetails} />
    </Card>
)

const PlanHeader = styled.div`
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 40px;
`
const PlanContemt = styled.div`
    display: flex;
    height: 100%;
    width: 500px;
    min-width: 250px;
    max-width: 100%;
    text-align: left;
    flex-flow: column;
    margin: 0px auto;
`

const Footer = styled.div`
    background: #000;
`;

const PlansContent = ({ header, content }) => (
    <PlanContemt>
        <PlanHeader>{header}</PlanHeader>
        {
            content
        }
    </PlanContemt>
)

export default function App(props) {
    return (
        <div>
            <Header
                headerPrimary={<SpotifyBanner />}
                headerSecondary={
                    <NavigateBar>
                        <Navigate title='premium' url='' />
                        <Navigate title='Help' url='' />
                        <Navigate title='Downlaod' url='' />
                        <Navigate title='Upgrade' url='' />
                        <Profile />
                    </NavigateBar>
                }
            />
            <UserSection>
                <PlansContent
                    header={'Subscribe'}
                    content={<SubscriptionCards title={'Spotify Premium'} details={'Subscribe for ₹59.00/month'} actionDetails={'Get Premium'} />}
                />
                <PlansContent
                    header={'Prepay'}
                    content={<SubscriptionCards title={'Spotify Premium'} details={'Everything you love about Premium, with no commitments. Just ₹66.00 for 30 days.'} actionDetails={'Get Premium'} />}
                />
            </UserSection>
            <SignUpSection id='main' />
            <Footer />
        </div >
    )
}