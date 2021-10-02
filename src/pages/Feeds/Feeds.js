import React from 'react'
import axios from 'axios';
import './Feeds.css';

function Feeds() {

    const [feeds, setFeeds] = React.useState('');

    React.useEffect(async() => {
        try{
            let response = await axios.get('http://xyz.com');
            if(response.status === 200){
                setFeeds(response.data);
            }else{
                throw new Error(response.status);
            }
        }catch(err){
            console.error(err);
        }
    },[]);

    return (
        <div className="feeds-wrapper">
            <div className="feeds-header">
                Latest Feeds
            </div>
            {feeds === '' ? 
                <div className="no-feeds">
                    No Latest Feeds
                </div>
                :
                <div className="feeds-inner-wrapper">
                    feeds acquired
                </div>
            }
        </div>
    )
}

export default Feeds
