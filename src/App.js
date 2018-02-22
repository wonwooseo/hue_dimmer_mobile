import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Router, Scene, Stack } from 'react-native-router-flux'
import Controls from './control.js'
import Settings from './settings.js'


export default class App extends Component {
    render() {
        return (
            <Router>
                <Stack key='root'>
                    <Scene key='nav_controls' component={Controls} title="Controls" initial={true} />
                    <Scene key='nav_settings' component={Settings} title="Settings" />
                </Stack>
            </Router>
        );
    }
}