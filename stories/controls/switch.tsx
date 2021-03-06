import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Switch } from '../../src/ui';

const Story = () => {
    const [val, setVal] = React.useState(false);
    const [val01, setVal01] = React.useState(true);
    const [val02, setVal02] = React.useState(true);
    const [val03, setVal03] = React.useState(true);

    return (
        <div className="page">
            <section className="section-form-min">
                <h2>Switch</h2>

                <Switch
                    checked={val}
                    onChange={()=>setVal(!val)}
                >
                    01. Label
                </Switch>

                <br/>

                <Switch
                    checked={val01}
                    onChange={()=>setVal01(!val01)}
                >
                    02. Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Switch>

                <br/>

                <Switch
                    checked={val02}
                    onChange={()=>setVal02(!val02)}
                    color="black"
                >
                    03. Black
                </Switch>

                <br/>

                <Switch
                    checked={val03}
                    onChange={()=>setVal03(!val03)}
                    color="black"
                    disabled
                >
                    04. Disabled - discards checked, color
                </Switch>

            </section>
        </div>
    );
};

storiesOf('Controls', module)
    .add('Switch', () => <Story/>);
