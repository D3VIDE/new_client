import ProfilePicture from './components/ProfilePicture.jsx'
import ProfileName from './components/ProfileName.jsx'
import ProfileStats from './components/ProfileStats.jsx'

export default function ProfileCard({name,status,src,alt,followers,following}){

    return(
        <>
            <ProfilePicture src = {src}/>
            <ProfileName name = {name} status = {status}/>
            <ProfileStats following = {following} followers = {followers} />
        </>
    );
} 
