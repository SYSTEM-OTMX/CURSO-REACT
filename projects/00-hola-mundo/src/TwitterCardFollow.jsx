import { useState } from "react";

export function FollowCardTwitter({ formatUserName, userName, name , isFollowingInitial}) {

    
    const [isFollowing, setIsFollowing] = useState(isFollowingInitial ?? false);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    } 
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button';

    const imageSrc = `https://th.bing.com/th/id/OIP.RaV0_pzI-e1b368D32AiigAAAA?w=108&h=108&c=1&bgcl=d653d0&r=0&o=7&pid=ImgRC&rm=3`;
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-img" alt="Avatar de SYSTEM-OTMX" src={imageSrc} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-username">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}