import React from 'react';

function SubTextCode() {
    return (
        <div className="subtext-iframe">
            {/* <iframe id="subtext_form" title="Text Us Stories of San Diego" src="https://joinsubtext.com/storiesofsandiego?form=true" frameBorder="0" scrolling="no"></iframe> */}
            <iframe id="subtext_embed" title="Text Us Stories of San Diego" src="https://joinsubtext.com/storiesofsandiego?embed=true" frameBorder="0" scrolling="yes"></iframe>        

        </div>
    );
}

export default SubTextCode;