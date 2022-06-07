import React, {Component, Fragment, Suspense, lazy} from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import defaultConfs, {ConfContext} from './_confs';
import store from 'Utils/storage';
import {getConf} from 'Services/api';
import {stringify} from 'qs';

require('Utils/extensions')
import './global.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onChange: values => this.setState(values),
        };
    }

    componentWillMount() {
        document.title = defaultConfs.moudleName
        this.setState({...defaultConfs});
    }

    componentDidMount() {
    }

    render() {
        return <ConfContext.Provider value={this.state}>
            <Router>
                <Suspense fallback={<div className="Loading">组件初始化...</div>}>
                    <Switch>
                        <Route path="/" exact component={lazy(() => import('./pages/home'))}/>
                        <Route path="/item" exact component={lazy(() => import('./pages/item'))}/>
                    </Switch>
                </Suspense>
            </Router>
        </ConfContext.Provider>
    }
}

render(<App/>, document.getElementById('root'));