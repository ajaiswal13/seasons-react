import React from 'react';

const Loading = (props) => {
      return(
            <div className="ui active inverted dimmer">
                <div className="ui massive text loader">{props.message}</div>
            </div>
      );
}


Loading.defaultProps = {
    message : 'Loading'
}

export default Loading;