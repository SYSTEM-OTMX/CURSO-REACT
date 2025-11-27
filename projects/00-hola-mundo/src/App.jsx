import "./App.css";
import { FollowCardTwitter } from "./TwitterCardFollow.jsx";
export function App(){

    const formatUserName = (userName) => `@${userName.toLowerCase()}`;


    const users = [
        {
            userName: 'SYSTEM-OTMX',
            name: 'SYSTEM-OTMX',
            isFollowing: true
        },
        {
            userName: 'JaneDoe',
            name: 'Jane Doe',
            isFollowing: false
        }
    ]
    return (
        <section className="App">
        
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user;
                    return (
                        <FollowCardTwitter 
                            key={userName}
                            formatUserName={formatUserName} 
                            userName={userName} 
                            name={name}
                            isFollowingInitial={isFollowing}
                        />
                    );
                })
            }
            

            

        </section>
    )
}